"""Build a lesson's timeline JSON for Remotion from its script and the cut line audio.

Usage: python3 tools/video/timeline.py <script.md> <audio dir under video/public> <out.json>
Durations come from video/public/<audio dir>/<ID>.mp3 when present, else from the text (about 14.5 characters a
second). HOLD adds silent thinking time after a line (pause cards); CHAPTER adds chapter-card time before a line.
Both are per lesson below, keyed by the lesson folder name.
"""
import json, os, re, subprocess, sys

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
FPS, GAP = 30, 0.35
CFG = {
    'A9_incoterms': dict(
        HOLD={'N00c': 1.5, 'N06': 5, 'N31a': 5, 'N45': 15, 'N52': 4, 'N54': 4, 'N56': 12, 'N15': 1.0, 'N36': 1.0,
              'N44': 1.0, 'N50': 1.0, 'N61a': 1.0, 'N62a': 3.0},
        # r4 (owner, 2026-11-19): no silent chapter cards; chapter titles slide in while the teacher speaks
        CHAPTER={}),
}


def dur_of(p):
    return float(subprocess.run(['ffprobe', '-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', p],
                                capture_output=True, text=True).stdout)


def main(src, adir, out):
    cfg = CFG[src.split('/')[-2]]
    body = open(src, encoding='utf-8').read().split('\n---\n', 1)[1]
    wp = os.path.join(ROOT, 'video/public', adir, 'words.json')
    words = json.load(open(wp)) if os.path.exists(wp) else {}
    t, lines = 1.0, []
    for para in re.split(r'\n\s*\n', body):
        m = re.match(r'([NMR]\d\d[a-z]?) · (.*)', ' '.join(para.split()))
        if not m:
            continue
        lid, text = m.groups()
        t += cfg['CHAPTER'].get(lid, 0)
        a = os.path.join(ROOT, 'video/public', adir, f'{lid}.mp3')
        real = os.path.exists(a)
        d = dur_of(a) if real else len(text) / 14.5
        h = cfg['HOLD'].get(lid, 0)
        shown = re.sub(r'\s*\[[a-z ]+\]\s*', ' ', text).strip()
        lines.append(dict(id=lid, speaker='teacher', text=shown, start=round(t * FPS), dur=round(d * FPS),
                          hold=round(h * FPS), audio=f'{adir}/{lid}.mp3' if real else None,
                          words=[[w, round(s * FPS)] for w, s in words.get(lid, [])] if real else []))
        t += d + h + GAP
    total = round((t + 1.5) * FPS)
    json.dump(dict(fps=FPS, durationInFrames=total, lines=lines), open(out, 'w'), indent=1)
    print(f'{len(lines)} lines, {total / FPS / 60:.1f} min, real audio: {sum(1 for l in lines if l["audio"])}')


if __name__ == '__main__':
    main(*sys.argv[1:4])
