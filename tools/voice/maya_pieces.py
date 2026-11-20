"""Cut a lesson script into speakable pieces for Maya 2, each with a planned pause after it.

Why (owner, 2026-11-20): Maya 2 has no pause or pitch tags. Given a long block it splits at sentence ends and joins
the pieces with a fixed 0.15 s gap, which sounds rushed. So we voice each piece on its own and put the spaces in
ourselves (tools/voice/maya_assemble.py). Pieces stay at least MIN_WORDS long, because one- or two-word inputs make
Maya's voice unstable (model card, Limitations).

Usage: python tools/voice/maya_pieces.py course/bfm/A/A9_incoterms/script.md N00a N06 out.json
"""
import json, re, sys

MIN_WORDS = 6
PAUSE = {"reveal": 1.00, "sentence": 0.30, "question": 0.55, "punch": 0.70, "line": 0.80, "section": 1.20, "hold": 2.50}
HOLD_CUES = re.compile(r"(pause the video|press the keys|think for a second|lock your answer|take a moment|"
                       r"try it now|work it out)", re.I)
LINE = re.compile(r"^(N\d+[a-z]?) · (.*)$")


def read_lines(path):
    """Script lines as [(id, text, section_follows)], joined across the hard wraps."""
    out, cur = [], None
    for raw in open(path, encoding="utf-8"):
        s = raw.rstrip("\n")
        m = LINE.match(s)
        if m:
            cur = [m.group(1), m.group(2).strip(), False]; out.append(cur)
        elif s.startswith("## ") and out:
            out[-1][2] = True; cur = None
        elif cur and s.strip():
            cur[1] += " " + s.strip()
        else:
            cur = None
    return out


def for_speech(t):
    t = re.sub(r"\[[a-z ]+\]\s*", "", t)          # ElevenLabs expression tags: Maya treats tags as best effort
    t = t.replace("—", ", ").replace(" – ", ", ")
    return re.sub(r"\s+", " ", t).strip()


def sentences(t):
    return [s for s in re.split(r"(?<=[.?!…])\s+(?=[A-Z0-9\"'])", t) if s]


def pieces_of(text):
    """Merge short sentences into the next one so every piece has at least MIN_WORDS words."""
    out, buf = [], ""
    for s in sentences(text):
        buf = (buf + " " + s).strip()
        if len(buf.split()) >= MIN_WORDS:
            out.append(buf); buf = ""
    if buf:
        if out and len(buf.split()) < MIN_WORDS:
            out[-1] = out[-1] + " " + buf
        else:
            out.append(buf)
    return out


def pause_after(piece, last_in_line, section_follows):
    if last_in_line and HOLD_CUES.search(" ".join(sentences(piece)[-2:])):
        return PAUSE["hold"], "hold"
    if last_in_line:
        return (PAUSE["section"], "section") if section_follows else (PAUSE["line"], "line")
    last = sentences(piece)[-1]
    if re.search(r"\bequals[.,]?$", piece):
        return PAUSE["reveal"], "reveal"
    if last.endswith("?"):
        return PAUSE["question"], "question"
    if len(last.split()) <= 3:
        return PAUSE["punch"], "punch"
    return PAUSE["sentence"], "sentence"


def build(path, first, last):
    lines = read_lines(path)
    ids = [l[0] for l in lines]
    sel = lines[ids.index(first): ids.index(last) + 1]
    out = []
    for lid, text, section in sel:
        ps = pieces_of(for_speech(text))
        for i, p in enumerate(ps):
            sec, why = pause_after(p, i == len(ps) - 1, section)
            out.append({"line": lid, "k": i, "text": p, "pause": sec, "why": why})
    return out


if __name__ == "__main__":
    path, first, last, dst = sys.argv[1:5]
    ps = build(path, first, last)
    json.dump(ps, open(dst, "w", encoding="utf-8"), indent=1, ensure_ascii=False)
    print(len(ps), "pieces,", sum(len(p["text"]) for p in ps), "chars")
