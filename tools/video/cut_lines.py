"""Cut one-voice part files into one mp3 per script line, using word timings from transcribe_words.py.

Usage:
  python3 tools/video/cut_lines.py <script.md> <out_dir> <audio.mp3>:<words.json>:<first_id>:<last_id> [...]
Each audio file holds the script lines first_id..last_id in order (one part, or several parts joined, as the owner
recorded them). Script lines look like "N01 · text" after the "---" line. Script words are matched to transcript
words in order (difflib), ignoring number words and digits (the transcript may write "48,000" where the script says
"forty-eight thousand"). Each cut sits in the longest pause between one line's last matched word and the next line's
first. Prints a check table: seconds, speaking rate, the script's start and what was heard at the start.
"""
import difflib, json, os, re, subprocess, sys

NUMW = set(('zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen '
            'seventeen eighteen nineteen twenty thirty forty fifty sixty seventy eighty ninety hundred thousand lakh '
            'point percent').split())


def script_lines(path):
    body = open(path, encoding='utf-8').read().split('\n---\n', 1)[1]
    out = {}
    for para in re.split(r'\n\s*\n', body):
        # cue-sheet lines (">") are picture directions, never spoken text (PLAYBOOK §5e)
        para = '\n'.join(l for l in para.splitlines() if not l.lstrip().startswith('>'))
        m = re.match(r'([NMR]\d\d[a-z]?) · (.*)', ' '.join(para.split()))
        if m:
            out[m.group(1)] = m.group(2)
    return out


def toks(text):
    t = text.lower().replace("'", '').replace('’', '').replace('%', ' percent ')
    t = re.sub(r'\[[a-z ]+\]', ' ', t)  # expression tags are not spoken
    t = re.sub(r'\b([a-z])-(?=[a-z]\b)', r'\1 ', t)  # C-I-F -> c i f
    return re.findall(r'[a-z0-9]+', t)


WORDS = {}


def isnum(w):
    return w in NUMW or w.isdigit()


def dur_of(p):
    return float(subprocess.run(['ffprobe', '-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', p],
                                capture_output=True, text=True).stdout)


def cut(text, out_dir, audio, words_json, ids):
    W = json.load(open(words_json))
    tw = [(t, k) for k, w in enumerate(W) for t in toks(w['w'])]
    st = [(t, li) for li, lid in enumerate(ids) for t in toks(text[lid])]
    # letters of spelt rules (c i f) are often heard as one word ("CIF"): join them on both sides
    def join(seq, cross=False):  # a run of two or more single letters becomes one token: c i f -> cif
        res, run = [], []
        for t, i in seq + [('', None)]:
            if len(t) == 1 and t.isalpha() and (not run or cross or run[-1][1] == i):
                run.append((t, i)); continue
            res += [(''.join(x for x, _ in run), run[0][1])] if len(run) > 1 else run
            run = [(t, i)] if len(t) == 1 and t.isalpha() else []
            if t and not run:
                res.append((t, i))
        return res
    st, tw = join(st), join(tw, cross=True)  # the transcript has one letter per word
    a = [t for t, _ in st if not isnum(t)]; ai = [li for t, li in st if not isnum(t)]
    b = [t for t, _ in tw if not isnum(t)]; bi = [k for t, k in tw if not isnum(t)]
    sm = difflib.SequenceMatcher(None, a, b, autojunk=False)
    lw = {li: [] for li in range(len(ids))}
    for blk in sm.get_matching_blocks():
        for j in range(blk.size):
            lw[ai[blk.a + j]].append(bi[blk.b + j])
    first = {li: min(v) for li, v in lw.items() if v}
    last = {li: max(v) for li, v in lw.items() if v}
    bounds = []
    for li in range(len(ids) - 1):
        lo, hi = last.get(li), first.get(li + 1)
        if lo is None or hi is None or hi <= lo:
            sys.exit(f'no clean anchor between {ids[li]} and {ids[li + 1]} ({lo}, {hi}): check the transcript')
        # longest pause wins; a pause after a sentence end counts 0.5 s extra (number words sit unmatched in between)
        # unmatched number words next to a line edge belong to the line whose script has numbers at that edge
        k0, k1 = lo, hi
        nw = lambda k: all(isnum(t) for t in toks(W[k]['w'])) and toks(W[k]['w'])
        if isnum(toks(text[ids[li + 1]])[0]):
            while k1 - 1 > k0 and nw(k1 - 1):
                k1 -= 1
        if isnum(toks(text[ids[li]])[-1]):
            while k0 + 1 < k1 and nw(k0 + 1):
                k0 += 1
        gaps = [(W[k + 1]['s'] - W[k]['e'] + (0.5 if W[k]['w'].rstrip('"\'').endswith(('.', '?', '!')) else 0), k)
                for k in range(k0, k1)] or [(0, k0)]
        bounds.append(max(gaps)[1])
    dur = dur_of(audio)
    spans, prev = [], -1
    for li in range(len(ids)):
        w0, w1 = prev + 1, bounds[li] if li < len(bounds) else len(W) - 1
        spans.append((W[w0]['s'], W[w1]['e'], w0, w1)); prev = w1
    rows = []
    for li, lid in enumerate(ids):
        s0, e0, w0, w1 = spans[li]
        a0 = 0 if li == 0 else (spans[li - 1][1] + s0) / 2
        b0 = dur if li == len(ids) - 1 else (e0 + spans[li + 1][0]) / 2
        a0, b0 = max(a0, s0 - 0.25), min(b0, e0 + 0.30)
        subprocess.run(['ffmpeg', '-y', '-v', 'error', '-i', audio, '-ss', f'{a0:.3f}', '-to', f'{b0:.3f}', '-af',
                        'afade=t=in:d=0.02,areverse,afade=t=in:d=0.04,areverse', '-c:a', 'libmp3lame', '-b:a', '192k',
                        os.path.join(out_dir, f'{lid}.mp3')], check=True)
        WORDS[lid] = [[W[k]['w'], round(W[k]['s'] - a0, 2)] for k in range(w0, w1 + 1)]
        heard = ' '.join(W[k]['w'] for k in range(w0, min(w1 + 1, w0 + 8)))
        cps = len(text[lid]) / max(0.1, e0 - s0)
        rows.append((lid, b0 - a0, cps))
        flag = '  <-- check' if cps < 9 or cps > 22 else ''
        print(f'{lid:5} {b0 - a0:6.2f}s {cps:5.1f} c/s | {text[lid][:34]:34} | {heard[:44]}{flag}')
    return rows


if __name__ == '__main__':
    src, out_dir = sys.argv[1], sys.argv[2]
    os.makedirs(out_dir, exist_ok=True)
    text = script_lines(src)
    order = list(text)
    for spec in sys.argv[3:]:
        audio, wj, i0, i1 = spec.rsplit(':', 3)
        ids = order[order.index(i0):order.index(i1) + 1]
        print(f'== {os.path.basename(audio)}: {len(ids)} lines {i0}..{i1}')
        cut(text, out_dir, audio, wj, ids)
    old = {}
    wp = os.path.join(out_dir, 'words.json')
    if os.path.exists(wp):
        old = json.load(open(wp))
    old.update(WORDS)
    json.dump(old, open(wp, 'w'))  # per line: [word, seconds from the start of that line's file]
