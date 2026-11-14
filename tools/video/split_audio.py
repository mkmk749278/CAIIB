"""Split the owner's narrator.mp3 / meera.mp3 into one file per script line, by the pauses between lines.

Usage: python3 tools/video/split_audio.py <narrator.mp3> <meera.mp3>
Finds silences (ffmpeg silencedetect), keeps the longest gaps as line breaks so the number of pieces equals the number
of lines in voice_blocks.md (70 narrator, 7 Meera), cuts with 60 ms of air either side, and writes
video/public/audio/lines/<ID>.mp3. Prints each piece's length next to its text length so a mismatch shows at once.
"""
import re, subprocess, sys, os
ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
OUT = os.path.join(ROOT, 'video/public/audio/lines'); os.makedirs(OUT, exist_ok=True)
s = open(os.path.join(ROOT, 'course/bfm/A/A1/script_v2.md')).read()
items = [(i, re.sub(r'\s+', ' ', t).strip()) for i, t in re.findall(r'^(N\d\d|M\d\d) · (.+?)(?=\n\n|\n\*\*|\Z)', s, re.M | re.S)]

def silences(path, noise='-35dB', d=0.30):
    err = subprocess.run(['ffmpeg', '-i', path, '-af', f'silencedetect=noise={noise}:d={d}', '-f', 'null', '-'], capture_output=True, text=True).stderr
    st = [float(x) for x in re.findall(r'silence_start: ([\d.]+)', err)]
    en = [float(x) for x in re.findall(r'silence_end: ([\d.]+)', err)]
    dur = float(re.search(r'Duration: (\d+):(\d+):([\d.]+)', err).groups()[2]) + 60 * int(re.search(r'Duration: (\d+):(\d+)', err).group(2))
    return list(zip(st, en)), dur

def split(path, ids):
    sil, dur = silences(path)
    inner = [(a, b) for a, b in sil if a > 0.05 and b < dur - 0.05]
    need = len(ids) - 1
    if len(inner) < need:
        sys.exit(f'{path}: found {len(inner)} pauses, need {need}. Regenerate with blank lines kept, or lower the noise floor.')
    cuts = sorted(sorted(inner, key=lambda x: x[1] - x[0], reverse=True)[:need])
    lead = sil[0][1] if sil and sil[0][0] <= 0.05 else 0.0
    tail = sil[-1][0] if sil and sil[-1][1] >= dur - 0.05 else dur
    bounds = [lead] + [x for a, b in cuts for x in (a, b)] + [tail]
    for k, lid in enumerate(ids):
        a, b = max(0, bounds[2 * k] - 0.06), bounds[2 * k + 1] + 0.06
        subprocess.run(['ffmpeg', '-y', '-v', 'error', '-i', path, '-ss', f'{a:.3f}', '-to', f'{b:.3f}', '-c:a', 'libmp3lame', '-b:a', '192k', os.path.join(OUT, f'{lid}.mp3')], check=True)
        text = dict(items)[lid]
        print(f'{lid}  {b - a:5.2f}s  {len(text) / (b - a):5.1f} chars/s  {text[:50]}')

split(sys.argv[1], [i for i, _ in items if i[0] == 'N'])
split(sys.argv[2], [i for i, _ in items if i[0] == 'M'])
