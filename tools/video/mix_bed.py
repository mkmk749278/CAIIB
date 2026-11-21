"""Lay the music bed under a lesson's voice track: mix.flac (PLAYBOOK §5d, §5e step 1).

Usage: python3 tools/video/mix_bed.py <voice.wav> <bed.wav> <out mix.flac>
The bed (shared library, no drums; A07 and A00 use bp08_flow) is looped with 6 s crossfades to the voice's length,
set at -21 dB, the voice brought to -18 LUFS, sidechain-ducked under the voice (attack 120 ms, release 1.2 s) so it rises only in pauses, and mixed
with the voice into one 48 kHz stereo FLAC. These are the settings the locked A07 template was mixed with (r4).
"""
import math, subprocess, sys


def dur(p):
    return float(subprocess.run(['ffprobe', '-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', p],
                                capture_output=True, text=True, check=True).stdout)


def lufs(p):
    r = subprocess.run(['ffmpeg', '-hide_banner', '-i', p, '-af', 'ebur128', '-f', 'null', '-'], capture_output=True, text=True)
    return float(r.stderr.rsplit('I:', 1)[1].split('LUFS')[0])


def main(voice, bed, out, xf=6.0):
    dv, db = dur(voice), dur(bed)
    gain = -18.0 - lufs(voice)  # the voice at -18 LUFS (static gain) before the bed goes under it, as for A07
    n = max(1, math.ceil((dv + 2) / (db - xf)))
    ins = sum((['-i', bed] for _ in range(n)), [])
    chain, last = [], '[1:a]'
    for k in range(2, n + 1):
        chain.append(f'{last}[{k}:a]acrossfade=d={xf}:c1=tri:c2=tri[x{k}]'); last = f'[x{k}]'
    fc = ';'.join(chain + [
        f'{last}atrim=0:{dv:.3f},aformat=sample_rates=48000:channel_layouts=stereo,volume=-21dB,afade=t=in:d=1.5,'
        f'afade=t=out:st={max(0, dv - 3):.3f}:d=3[bed]',
        f'[0:a]aformat=sample_rates=48000:channel_layouts=stereo,volume={gain:.2f}dB,asplit=2[v][sc]',
        '[bed][sc]sidechaincompress=threshold=0.015:ratio=6:attack=120:release=1200:makeup=1[duck]',
        '[v][duck]amix=inputs=2:duration=first:normalize=0[m]',
    ])
    subprocess.run(['ffmpeg', '-y', '-v', 'error', '-i', voice, *ins, '-filter_complex', fc, '-map', '[m]',
                    '-c:a', 'flac', out], check=True)
    print(f'{out}: {dv:.1f} s, voice {gain:+.1f} dB to -18 LUFS, bed looped {n}x')


if __name__ == '__main__':
    main(*sys.argv[1:4])
