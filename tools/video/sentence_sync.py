"""Per-second / per-sentence sync check (PLAYBOOK §5d): does the picture respond when the voice starts a new sentence?

Usage: python3 tools/video/sentence_sync.py <video.mp4> <timeline.json> [window=1.5] [threshold=0.6]
For every spoken sentence (from the word timings; a sentence starts after a word ending in . ? !), it measures how
much the picture changes between 0.3 s before and <window> s after the first word. A sentence with no visible change
is listed as "picture did not move": the screen still shows the previous idea while the voice says a new one.
The caption strip (bottom 16%) is ignored: it changes with every word. It also prints, second by second, the seconds where the voice speaks but the picture has not changed for more than
6 s (a long static picture under a moving voice). Exit 1 if anything is listed.
"""
import json, os, shlex, subprocess, sys

FF = shlex.split(os.environ.get('FFMPEG', 'ffmpeg'))
FPS, Wd, Hd = 10, 160, 90


def mmss(t):
    return f'{int(t // 60)}:{t % 60:04.1f}'


def main(video, tl, window=1.5, thr=0.6):
    window, thr = float(window), float(thr)
    d = json.load(open(tl)); fps = d['fps']
    sents = []  # (start time, first words)
    for l in d['lines']:
        ws = l['words']
        for k, (w, f) in enumerate(ws):
            if k == 0 or ws[k - 1][0].rstrip('"\'”').endswith(('.', '?', '!')):
                sents.append(((l['start'] + f) / fps, l['id'], ' '.join(x for x, _ in ws[k:k + 7])))
    raw = subprocess.run(FF + ['-v', 'error', '-i', video, '-vf', f'fps={FPS},crop=iw:ih*0.84:0:0,scale={Wd}:{Hd},format=gray', '-f', 'rawvideo', '-'],
                         capture_output=True).stdout
    n = Wd * Hd
    fr = [raw[i:i + n] for i in range(0, len(raw) - n + 1, n)]

    def diff(a, b):
        a, b = max(0, min(len(fr) - 1, a)), max(0, min(len(fr) - 1, b))
        return sum(abs(x - y) for x, y in zip(fr[a], fr[b])) / n
    dead = []
    for t, lid, txt in sents:
        a = round((t - 0.3) * FPS)
        ch = max(diff(a, a + k) for k in range(1, round((window + 0.3) * FPS) + 1))
        if ch < thr:
            dead.append((t, lid, txt, ch))
    print(f'sentences: {len(sents)}; picture did not move within {window} s: {len(dead)}')
    for t, lid, txt, ch in dead:
        print(f'  {mmss(t):>7} {lid:5} change {ch:4.2f} | {txt}')
    # long static stretches while speaking (checked every second)
    speech = [((l['start'] + l['words'][0][1]) / fps, (l['start'] + l['words'][-1][1]) / fps) for l in d['lines'] if l['words']]
    last_change, still = 0.0, []
    for s in range(1, int(len(fr) / FPS)):
        if diff((s - 1) * FPS, s * FPS) > thr:
            last_change = s
        elif s - last_change > 6 and any(a <= s <= b for a, b in speech):
            still.append(s)
    runs, prev = [], None
    for s in still:
        if prev is not None and s == prev + 1:
            runs[-1][1] = s
        else:
            runs.append([s, s])
        prev = s
    print(f'seconds of voice over an unchanged picture (> 6 s): {len(still)} in {len(runs)} stretches')
    for a, b in runs:
        print(f'  {mmss(a - 6)} to {mmss(b)}')
    return 1 if dead or runs else 0


if __name__ == '__main__':
    sys.exit(main(*sys.argv[1:5]))
