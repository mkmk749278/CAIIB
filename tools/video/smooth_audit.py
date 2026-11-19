"""Smoothness audit of a rendered lesson (PLAYBOOK §5d, rule 7). Run on every cut before it goes to the owner.

Usage: python3 tools/video/smooth_audit.py <video.mp4> [timeline.json]
Checks, and prints every failing moment as mm:ss:
  1. dead silence: any stretch under -50 dB longer than 0.8 s (the music bed should fill planned pauses);
  2. hard cuts: a frame that differs from the one before by a lot (a pop or a scene switch with no crossfade);
     reported with whether the voice was speaking at that moment (changes in silence are the worst);
  3. frozen screen: nothing moves for more than 4 s.
Exit code 1 if anything fails, so the render workflow can stop.
"""
import json, os, shlex, subprocess, sys

FF = shlex.split(os.environ.get('FFMPEG', 'ffmpeg'))  # on GitHub runners: "npx --prefix video remotion ffmpeg"

FPS = 15  # analysis rate
Wd, Hd = 160, 90
CUT = 18.0  # mean absolute luma difference (0..255) between consecutive analysis frames that counts as a hard cut
STILL = 0.04  # below this the frame is "not moving"


def mmss(t):
    return f'{int(t // 60):02d}:{t % 60:04.1f}'


def main(video, tl=None):
    bad = 0
    err = subprocess.run(FF + ['-hide_banner', '-i', video, '-af', 'silencedetect=noise=-50dB:d=0.8', '-f', 'null', '-'],
                         capture_output=True, text=True).stderr
    sil = [float(x.split('silence_start: ')[1]) for x in err.splitlines() if 'silence_start' in x]
    print(f'1. dead silences > 0.8 s: {len(sil)}', ' '.join(mmss(t) for t in sil[:20]))
    bad += len(sil)
    speech = []
    if tl:
        d = json.load(open(tl))
        speech = [((l['start'] + l['words'][0][1]) / d['fps'], (l['start'] + l['words'][-1][1]) / d['fps'] + 0.4) for l in d['lines'] if l['words']]
    raw = subprocess.run(FF + ['-v', 'error', '-i', video, '-vf', f'fps={FPS},scale={Wd}:{Hd},format=gray', '-f', 'rawvideo', '-'],
                         capture_output=True).stdout
    n = Wd * Hd
    frames = [raw[i:i + n] for i in range(0, len(raw) - n + 1, n)]
    diffs = [sum(abs(a - b) for a, b in zip(frames[i - 1], frames[i])) / n for i in range(1, len(frames))]
    cuts = [(i / FPS, d) for i, d in enumerate(diffs, 1) if d > CUT]
    def speaking(t):
        return any(a <= t <= b for a, b in speech)
    print(f'2. hard cuts (diff > {CUT}): {len(cuts)}')
    for t, dv in cuts[:40]:
        print(f'   {mmss(t)} diff {dv:5.1f} {"(voice speaking)" if speaking(t) else "(IN SILENCE)" if speech else ""}')
    bad += len(cuts)
    still, run0 = [], None
    for i, dv in enumerate(diffs):
        if dv < STILL:
            run0 = i if run0 is None else run0
        else:
            if run0 is not None and (i - run0) / FPS > 4:
                still.append((run0 / FPS, (i - run0) / FPS))
            run0 = None
    print(f'3. frozen > 4 s: {len(still)}', ' '.join(f'{mmss(a)}({b:.0f}s)' for a, b in still[:20]))
    bad += len(still)
    print('PASS' if not bad else f'FAIL ({bad} issues)')
    return 1 if bad else 0


if __name__ == '__main__':
    sys.exit(main(*sys.argv[1:3]))
