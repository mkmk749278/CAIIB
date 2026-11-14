"""Cut narrator.mp3 / meera.mp3 into one file per script line using word timings (transcribe_words.py).

Usage: python3 tools/video/align_lines.py <narrator.mp3> <narrator_words.json> <meera.mp3> <meera_words.json>
Matches script words to transcript words in order (difflib), ignoring number words and digits (the transcript writes
"85.40" where the script says "eighty-five point four zero"). Unmatched transcript words between two anchors go to
the line that starts (or ends) with numbers. Each cut sits in the middle of the gap between one line's last word and
the next line's first word. Writes video/public/audio/lines/<ID>.mp3 and prints a check table.
"""
import re, sys, os, json, subprocess, difflib
ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
OUT = os.path.join(ROOT, 'video/public/audio/lines'); os.makedirs(OUT, exist_ok=True)
s = open(os.path.join(ROOT, 'course/bfm/A/A1/script_v2.md')).read()
ITEMS = [(i, re.sub(r'\s+', ' ', t).strip()) for i, t in re.findall(r'^(N\d\d|M\d\d) · (.+?)(?=\n\n|\n\*\*|\Z)', s, re.M | re.S)]
NUMW = set('zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen twenty thirty forty fifty sixty seventy eighty ninety hundred thousand lakh point percent'.split())

SYN = {'x': 'times', 'percentage': 'percent'}

def toks(text):
    t = text.lower().replace("'", '').replace('×', ' times ').replace('%', ' percent ')
    return [SYN.get(w, w) for w in re.findall(r"[a-z0-9]+", t)]

def isnum(w):
    return w in NUMW or bool(re.fullmatch(r'\d+', w))

def run(audio, words_json, ids):
    W = json.load(open(words_json))
    tw = []  # transcript tokens with word index
    for k, w in enumerate(W):
        for t in toks(w['w']):
            tw.append((t, k))
    st = []  # script tokens with line index
    for li, lid in enumerate(ids):
        for t in toks(dict(ITEMS)[lid]):
            st.append((t, li))
    a = [t for t, _ in st if not isnum(t)]; ai = [li for t, li in st if not isnum(t)]
    b = [t for t, _ in tw if not isnum(t)]; bi = [k for t, k in tw if not isnum(t)]
    sm = difflib.SequenceMatcher(None, a, b, autojunk=False)
    line_words = {li: [] for li in range(len(ids))}
    for blk in sm.get_matching_blocks():
        for j in range(blk.size):
            line_words[ai[blk.a + j]].append(bi[blk.b + j])
    first = {li: min(v) for li, v in line_words.items() if v}
    last = {li: max(v) for li, v in line_words.items() if v}
    text = dict(ITEMS)
    starts_num = {li: isnum(toks(text[ids[li]])[0]) for li in range(len(ids))}
    ends_num = {li: isnum(toks(text[ids[li]])[-1]) for li in range(len(ids))}
    # boundaries in word-index space
    bounds = []
    for li in range(len(ids) - 1):
        lo = last.get(li); hi = first.get(li + 1)
        if lo is None or hi is None:
            sys.exit(f'no anchor words for {ids[li]} or {ids[li+1]}: check the transcript')
        if starts_num[li + 1] and not ends_num[li]:
            cut = lo  # numbers between belong to the next line
        elif ends_num[li] and not starts_num[li + 1]:
            cut = hi - 1
        else:  # choose the largest pause between lo and hi
            gaps = [(W[k + 1]['s'] - W[k]['e'], k) for k in range(lo, hi)]
            cut = max(gaps)[1] if gaps else lo
        bounds.append(cut)
    dur = float(subprocess.run(['ffprobe', '-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', audio], capture_output=True, text=True).stdout)
    times = []
    prev_end_word = -1
    for li in range(len(ids)):
        w0 = prev_end_word + 1
        w1 = bounds[li] if li < len(bounds) else len(W) - 1
        s0 = W[w0]['s']; e0 = W[w1]['e']
        times.append([s0, e0]); prev_end_word = w1
    # cut in the middle of each gap, with a little air
    for li, lid in enumerate(ids):
        s0, e0 = times[li]
        a0 = 0 if li == 0 else (times[li - 1][1] + s0) / 2
        b0 = dur if li == len(ids) - 1 else (e0 + times[li + 1][0]) / 2
        a0 = max(a0, s0 - 0.25); b0 = min(b0, e0 + 0.30)
        subprocess.run(['ffmpeg', '-y', '-v', 'error', '-i', audio, '-ss', f'{a0:.3f}', '-to', f'{b0:.3f}', '-af', 'afade=t=in:d=0.02,areverse,afade=t=in:d=0.04,areverse', '-c:a', 'libmp3lame', '-b:a', '192k', os.path.join(OUT, f'{lid}.mp3')], check=True)
        heard = ' '.join(W[k]['w'] for k in range((bounds[li - 1] + 1) if li else 0, (bounds[li] + 1) if li < len(bounds) else len(W)))
        print(f'{lid} {b0 - a0:6.2f}s  {len(text[lid]) / max(0.1, e0 - s0):5.1f} c/s | {text[lid][:38]:38} | {heard[:46]}')

n_ids = [i for i, _ in ITEMS if i[0] == 'N']; m_ids = [i for i, _ in ITEMS if i[0] == 'M']
run(sys.argv[1], sys.argv[2], n_ids)
run(sys.argv[3], sys.argv[4], m_ids)
