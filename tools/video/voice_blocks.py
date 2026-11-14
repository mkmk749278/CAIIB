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
COMMON = """      <li>If the app says the text is too long, tell Claude and the parts will be made smaller.</li>
      <li>Listen to the first minute of part 1 before doing the rest. Each generation uses credits.</li>
      <li>Say: FEDAI "fed-eye", Nostro "noss-tro". "Into" means times.</li>"""
SINGLE = {"H1": "A1 voice · one teacher",
          "SUB": "One voice, in order. Each part is one generation in ElevenLabs text to speech.",
          "TIPS": """      <li>Pick one voice for the teacher (e.g. Prithvi) and keep it, with the same settings, for every part.</li>
      <li>For each part: tap <b>Copy</b>, paste into text to speech, tap <b>Generate</b>, download it as the file name shown.</li>
""" + COMMON}
MULTI = {"H1": "A1 dialogue · live class",
         "SUB": "For ElevenLabs <b>multi-speaker</b> text to speech. Each part is one generation, with turns in speaking order.",
         "TIPS": """      <li>Pick the voices once and keep them for every part.</li>
      <li>For each turn: tap <b>Copy</b>, add a speaker card with that voice, paste. Same order, top to bottom.</li>
      <li>When a part's turns are all in, tap <b>Generate</b> and download it as the file name shown.</li>
""" + COMMON}


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


def turns(lines, turn_max=TURN_MAX):
    res = []
    for ln in lines:
        t = res[-1] if res else None
        if t and t["sp"] == ln["id"][0] and t["section"] == ln["section"] and len(t["text"]) + len(ln["text"]) < turn_max:
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
    single = len({l["id"][0] for l in lines}) == 1
    ps = parts(turns(lines, PART_MAX if single else TURN_MAX))
    if single:  # one voice: one block per part, across section breaks too
        for p in ps:
            ts = p["turns"]
            p["turns"] = [{"speaker": ts[0]["speaker"], "first": ts[0]["first"], "last": ts[-1]["last"],
                           "text": " ".join(t["text"] for t in ts)}]
    intro = (["One teacher voice. Paste each part into ElevenLabs text to speech and generate it in one go;",
              "same voice and settings for every part."] if single else
             ["For the ElevenLabs app's multi-speaker text to speech: one speaker card per turn, in this order;",
              "generate each part in one go, with the same voices in every part."])
    md = [f"# Voice parts from `{src}`", ""] + intro + [""]
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
    for k, v in (SINGLE if single else MULTI).items():
        page = page.replace("{{" + k + "}}", v)
    open(html_out, "w", encoding="utf-8").write(page)
    for p in ps:
        print(p["file"], p["section"], len(p["turns"]), sum(len(t["text"]) for t in p["turns"]))


if __name__ == "__main__":
    main(*sys.argv[1:4])
