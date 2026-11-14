"""Build video/src/lines.json for lesson A1 from script_v2.md.

Durations come from real audio if video/public/audio/lines/<ID>.mp3 exist (split by tools/video/split_audio.py),
otherwise they are estimated from the text (about 14.5 characters a second). HOLD adds silent thinking time after a
line (pause cards). Output: fps, total frames, and per line {id, speaker, text, start, dur, hold, audio}.
"""
import json, re, os, subprocess, sys
ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
SCRIPT = os.path.join(ROOT, 'course/bfm/A/A1/script_v2.md')
AUD = os.path.join(ROOT, 'video/public/audio/lines')
FPS = 30
GAP = 0.35            # breath between lines (s)
HOLD = {              # thinking time after the line (s): pause cards and prediction prompts
    'N04': 5, 'N14': 5, 'N35': 20, 'N37': 25, 'M04': 5, 'N59': 6, 'N63': 6, 'N65': 6,
    'N42': 4, 'N44': 4, 'N46': 4, 'N48': 4, 'N50': 4,
    'N05': 0.4, 'N15': 1.0, 'N40': 1.0, 'N60': 1.0, 'N62': 1.5, 'N70': 3.0,
}
CHAPTER_BEFORE = {'M01': 2.5, 'M03': 2.5, 'N41': 2.5}   # chapter card time before these lines

def dur_of(path):
    out = subprocess.run(['ffprobe', '-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', path],
                         capture_output=True, text=True).stdout.strip()
    return float(out)

s = open(SCRIPT).read()
items = re.findall(r'^(N\d\d|M\d\d) · (.+?)(?=\n\n|\n\*\*|\Z)', s, re.M | re.S)
t = 1.0  # one second of picture before the first word
lines = []
for lid, text in items:
    text = re.sub(r'\s+', ' ', text).strip()
    t += CHAPTER_BEFORE.get(lid, 0)
    a = os.path.join(AUD, f'{lid}.mp3')
    real = os.path.exists(a)
    d = dur_of(a) if real else len(text) / 14.5
    h = HOLD.get(lid, 0)
    lines.append(dict(id=lid, speaker='meera' if lid[0] == 'M' else 'narrator', text=text,
                      start=round(t * FPS), dur=round(d * FPS), hold=round(h * FPS),
                      audio=f'audio/lines/{lid}.mp3' if real else None))
    t += d + h + GAP
total = round((t + 1.5) * FPS)
json.dump(dict(fps=FPS, durationInFrames=total, lines=lines), open(os.path.join(ROOT, 'video/src/lines.json'), 'w'), indent=1)
print(f'{len(lines)} lines, {total/FPS/60:.1f} min, real audio: {sum(1 for l in lines if l["audio"])}')
