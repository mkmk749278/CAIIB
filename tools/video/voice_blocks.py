"""Build ElevenLabs dialogue turns from a lesson script, in speaking order.

Usage: python3 tools/video/voice_blocks.py course/bfm/A/A1/script_v4.md OUT.md OUT.html

Script lines look like "N01 · text" (N = teacher, M = Meera, R = Ravi), separated by blank lines, under "## "
section headings. The owner pastes them into the ElevenLabs app's multi-speaker text to speech (one speaker card
per turn) and generates each part in one go, so the audio comes out already in order with all voices.
- Consecutive lines of one speaker join into one turn; a turn is cut at TURN_MAX characters (a new card, same voice).
- Turns are grouped into parts of at most PART_MAX characters; a new part starts at a section break once the
  current part is past PART_MIN. Each part = one generation = one file (part_1.mp3 ...).
Writes a Markdown copy for the repo and a phone page with one Copy button per turn.
"""
import html
import json
import re
import sys

TURN_MAX, PART_MAX, PART_MIN = 1200, 3000, 1800
SPEAKERS = {"N": "Teacher", "M": "Meera", "R": "Ravi"}


def parse(path):
    body = open(path, encoding="utf-8").read().split("\n---\n", 1)[1]
    section, out = "", []
    for para in re.split(r"\n\s*\n", body):
        p = " ".join(para.split())
        if p.startswith("## "):
            section = p[3:]
            continue
        m = re.match(r"([NMR]\d\d[a-z]?) · (.*)", p)
        if m:
            out.append({"id": m.group(1), "text": m.group(2), "section": section})
    return out


def turns(lines):
    res = []
    for ln in lines:
        t = res[-1] if res else None
        if t and t["sp"] == ln["id"][0] and t["section"] == ln["section"] and len(t["text"]) + len(ln["text"]) < TURN_MAX:
            t["ids"].append(ln["id"])
            t["text"] += " " + ln["text"]
        else:
            res.append({"sp": ln["id"][0], "section": ln["section"], "ids": [ln["id"]], "text": ln["text"]})
    return res


def parts(ts):
    res = []
    for t in ts:
        p = res[-1] if res else None
        new_sec = p is not None and p["sections"][-1] != t["section"]
        if p is None or (new_sec and p["chars"] > PART_MIN) or p["chars"] + len(t["text"]) > PART_MAX:
            p = {"sections": [t["section"]], "turns": [], "chars": 0}
            res.append(p)
        elif new_sec:
            p["sections"].append(t["section"])
        p["turns"].append(t)
        p["chars"] += len(t["text"])
    out = []
    for i, p in enumerate(res, 1):
        out.append({"file": f"part_{i}.mp3", "section": " + ".join(dict.fromkeys(p["sections"])),
                    "turns": [{"speaker": SPEAKERS[t["sp"]], "first": t["ids"][0], "last": t["ids"][-1],
                               "text": t["text"]} for t in p["turns"]]})
    return out


def main(src, md_out, html_out):
    lines = parse(src)
    ps = parts(turns(lines))
    md = [f"# Dialogue turns from `{src}`", "",
          "For the ElevenLabs app's multi-speaker text to speech: one speaker card per turn, in this order; generate",
          "each part in one go. Voices: Teacher, Meera, Ravi (the same three voices in every part).", ""]
    for p in ps:
        md += [f"## {p['file']} · {p['section']} ({len(p['turns'])} turns, "
               f"{sum(len(t['text']) for t in p['turns'])} chars)", ""]
        for k, t in enumerate(p["turns"], 1):
            md += [f"**{k}. {t['speaker']}** ({t['first']}–{t['last']})", "```", t["text"], "```", ""]
    md += ["## Line order (for the edit)"] + [f"- {l['id']}: {l['text'][:70]}" for l in lines]
    open(md_out, "w", encoding="utf-8").write("\n".join(md) + "\n")

    tpl = open(__file__.replace("voice_blocks.py", "voice_blocks_page.html"), encoding="utf-8").read()
    page = tpl.replace("/*DATA*/[]", json.dumps(ps, ensure_ascii=False).replace("</", "<\\/"))
    page = page.replace("{{SRC}}", html.escape(src))
    open(html_out, "w", encoding="utf-8").write(page)
    for p in ps:
        print(p["file"], p["section"], len(p["turns"]), sum(len(t["text"]) for t in p["turns"]))


if __name__ == "__main__":
    main(*sys.argv[1:4])
