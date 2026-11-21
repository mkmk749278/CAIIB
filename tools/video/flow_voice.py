"""Build a lesson's continuous voice track and its timeline (flow engine, PLAYBOOK §5d).

The owner's recordings are used as recorded: lines are NOT cut out and re-spaced. Each recording is split only at
the middle of the natural pause between two lines, so the pieces join back into the original sound exactly. Space
is opened only where the lesson needs it (pause countdowns: HOLD after a line; chapter cards: CHAPTER before a
line). A line that was re-recorded (REPLACE) is dropped in with its natural lead and tail pauses matched.

Usage:
  python3 tools/video/flow_voice.py <script.md> <out_dir> <timeline.json> <audio_dir_in_public> \
      <rec.mp3>:<rec.words.json>:<first_id>:<last_id> [...] [--replace ID=<line.mp3>:<line.words.json>]
Writes <out_dir>/voice.wav (48 kHz mono) and the timeline JSON (same schema as timeline.py, plus "voice" and
"gaps"; each line's start/dur cover its piece of the recording, words are frames from the line start).
"""
import difflib, json, os, re, subprocess, sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from cut_lines import script_lines, toks, isnum  # same script parsing and token rules as the line cutter
from timeline import CFG

FPS, SR = 30, 48000


def run(*a):
    subprocess.run(a, check=True)


def anchors(text, ids, W):
    """first/last transcript word index of every line (difflib on non-number tokens, as in cut_lines)."""
    tw = [(t, k) for k, w in enumerate(W) for t in toks(w['w'])]
    st = [(t, li) for li, lid in enumerate(ids) for t in toks(text[lid])]

    def join(seq, cross=False):
        res, runl = [], []
        for t, i in seq + [('', None)]:
            if len(t) == 1 and t.isalpha() and (not runl or cross or runl[-1][1] == i):
                runl.append((t, i)); continue
            res += [(''.join(x for x, _ in runl), runl[0][1])] if len(runl) > 1 else runl
            runl = [(t, i)] if len(t) == 1 and t.isalpha() else []
            if t and not runl:
                res.append((t, i))
        return res
    st, tw = join(st), join(tw, cross=True)
    a = [t for t, _ in st if not isnum(t)]; ai = [li for t, li in st if not isnum(t)]
    b = [t for t, _ in tw if not isnum(t)]; bi = [k for t, k in tw if not isnum(t)]
    lw = {li: [] for li in range(len(ids))}
    for blk in difflib.SequenceMatcher(None, a, b, autojunk=False).get_matching_blocks():
        for j in range(blk.size):
            lw[ai[blk.a + j]].append(bi[blk.b + j])
    return {li: (min(v), max(v)) for li, v in lw.items() if v}


def split_points(text, ids, W, dur):
    """cut time between each pair of lines = middle of the longest pause between them."""
    an = anchors(text, ids, W)
    cuts = [0.0]
    for li in range(len(ids) - 1):
        lo, hi = an[li][1], an[li + 1][0]
        best = max(((W[k + 1]['s'] - W[k]['e'], k) for k in range(lo, hi)), default=(0, lo))
        k = best[1]
        cuts.append((W[k]['e'] + W[k + 1]['s']) / 2)
    cuts.append(dur)
    return cuts


def dur_of(p):
    return float(subprocess.run(['ffprobe', '-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', p],
                                capture_output=True, text=True).stdout)


def raw_takes(argv):
    """Takes that did not come through Resemble Enhance (owner, 2026-11-21: only enhanced takes are used; the raw
    ElevenLabs voice has a hiss). Enhanced takes come from Drive BFM/<video>/voice_enhanced/ (kaggle_enhance.py);
    a path in a plain voice/ folder or named part_N.mp3 is a raw take."""
    paths = [a.split(' ', 1)[-1].split('=', 1)[-1].split(':')[0] if a.startswith('--replace') else a.rsplit(':', 3)[0]
             for a in argv[4:] if a != '--raw-ok']
    return [x for x in paths if '/voice/' in x.replace('\\', '/') or re.fullmatch(r'part_\d+\.mp3', os.path.basename(x))]


def main(argv):
    raw = raw_takes(argv)
    if raw and '--raw-ok' not in argv:
        sys.exit('Raw (un-enhanced) takes: ' + ', '.join(raw) + '\nRun tools/voice/kaggle_enhance.py from-drive <video> '
                 'and use BFM/<video>/voice_enhanced/ (re-generated lines too). --raw-ok only for old tests.')
    argv = [a for a in argv if a != '--raw-ok']
    src, out_dir, tl_out, adir = argv[:4]
    specs = [a for a in argv[4:] if not a.startswith('--replace')]
    repl = {}
    for a in argv[4:]:
        if a.startswith('--replace'):
            lid, rest = a.split(' ', 1)[1].split('=', 1) if ' ' in a else a[len('--replace='):].split('=', 1)
            repl[lid] = rest.split(':')
    os.makedirs(out_dir, exist_ok=True)
    tmp = os.path.join(out_dir, 'pieces'); os.makedirs(tmp, exist_ok=True)
    text = script_lines(src)
    order = list(text)
    cfg = CFG[src.split('/')[-2]]
    pieces = []  # (kind, path or seconds, line id, word list relative to piece start)
    for spec in specs:
        audio, wj, i0, i1 = spec.rsplit(':', 3)
        ids = order[order.index(i0):order.index(i1) + 1]
        W = json.load(open(wj)); dur = dur_of(audio)
        cuts = split_points(text, ids, W, dur)
        for li, lid in enumerate(ids):
            a0, b0 = cuts[li], cuts[li + 1]
            p = os.path.join(tmp, f'{lid}.wav')
            words = [[w['w'], w['s'] - a0] for w in W if a0 <= w['s'] < b0]
            if lid in repl:  # keep the original lead/tail pause lengths around the new take
                ra, rw = repl[lid]; R = json.load(open(rw)); rd = dur_of(ra)
                orig = [w for w in W if a0 <= w['s'] < b0]
                lead = max(0.05, orig[0]['s'] - a0) if orig else 0.2
                tail = max(0.05, b0 - orig[-1]['e']) if orig else 0.3
                r0, r1 = max(0, R[0]['s'] - 0.04), min(rd, R[-1]['e'] + 0.12)
                run('ffmpeg', '-y', '-v', 'error', '-i', ra, '-ss', f'{r0:.3f}', '-to', f'{r1:.3f}', '-af',
                    f'afade=t=in:d=0.02,areverse,afade=t=in:d=0.05,areverse,adelay={int(lead * 1000)}:all=1,apad=pad_dur={tail:.3f}',
                    '-ar', str(SR), '-ac', '1', p)
                words = [[w['w'], w['s'] - r0 + lead] for w in R]
            else:
                run('ffmpeg', '-y', '-v', 'error', '-i', audio, '-ss', f'{a0:.4f}', '-to', f'{b0:.4f}', '-ar', str(SR), '-ac', '1', p)
            pieces.append((lid, p, words))
    # assemble: silence where the lesson needs space, the recording everywhere else
    lines, gaps, parts, t = [], [], [], 0.0
    lead_in = 1.0
    parts.append(('sil', lead_in)); t += lead_in
    for lid, p, words in pieces:
        ch = cfg['CHAPTER'].get(lid, 0)
        if ch:
            parts.append(('sil', ch)); gaps.append(dict(kind='chapter', before=lid, start=round(t * FPS), dur=round(ch * FPS))); t += ch
        d = dur_of(p)
        hold = cfg['HOLD'].get(lid, 0)
        shown = re.sub(r'\s*\[[a-z ]+\]\s*', ' ', text[lid]).strip()
        lines.append(dict(id=lid, speaker='teacher', text=shown, start=round(t * FPS), dur=round(d * FPS), hold=round(hold * FPS),
                          audio=None, words=[[w, round(s * FPS)] for w, s in words]))
        parts.append(('file', p)); t += d
        if hold:
            parts.append(('sil', hold)); gaps.append(dict(kind='hold', after=lid, start=round(t * FPS), dur=round(hold * FPS))); t += hold
    parts.append(('sil', 2.0)); t += 2.0
    lst = os.path.join(tmp, 'concat.txt')
    with open(lst, 'w') as fh:
        for i, (k, v) in enumerate(parts):
            if k == 'sil':
                sp = os.path.join(tmp, f'sil_{i}.wav')
                run('ffmpeg', '-y', '-v', 'error', '-f', 'lavfi', '-i', f'anullsrc=r={SR}:cl=mono', '-t', f'{v:.3f}', sp)
                v = sp
            fh.write(f"file '{os.path.abspath(v)}'\n")
    voice = os.path.join(out_dir, 'voice.wav')
    run('ffmpeg', '-y', '-v', 'error', '-f', 'concat', '-safe', '0', '-i', lst, '-ar', str(SR), '-ac', '1', voice)
    total = round(dur_of(voice) * FPS)
    json.dump(dict(fps=FPS, durationInFrames=total, voice=f'{adir}/voice.wav', gaps=gaps, lines=lines), open(tl_out, 'w'), indent=1)
    print(f'{len(lines)} lines, {total / FPS / 60:.2f} min, {len(gaps)} opened gaps, voice -> {voice}')


if __name__ == '__main__':
    main(sys.argv[1:])
