"""Build ElevenLabs voice blocks from a lesson script.

Usage: python3 tools/video/voice_blocks.py course/bfm/A/A1/script_v4.md OUT.md OUT.html

Script lines look like "N01 · text" (N = teacher, M = Meera, R = Ravi), separated by blank lines, under "## "
section headings. Teacher lines are cut into blocks of at most MAX characters, starting a new block at each section unless the current one is short, so each
generation stays short and fresh. Writes a Markdown copy for the repo and a phone page with copy buttons.
"""
import html
import json
import re
import sys

MAX = 2800
MIN = 1800  # a section shorter than this shares a block with the next one
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


def blocks(lines):
    res, cur = [], None
    for ln in (l for l in lines if l["id"][0] == "N"):
        size = len(ln["text"]) + 2
        new_section = cur is not None and cur["section"].split(" + ")[-1] != ln["section"]
        if cur is None or (new_section and cur["chars"] > MIN) or cur["chars"] + size > MAX:
            cur = {"speaker": "Teacher", "section": ln["section"], "lines": [], "chars": 0}
            res.append(cur)
        elif new_section:
            cur["section"] += " + " + ln["section"]
        cur["lines"].append(ln)
        cur["chars"] += size
    for k in ("M", "R"):
        ls = [l for l in lines if l["id"][0] == k]
        if ls:
            res.append({"speaker": SPEAKERS[k], "section": "all lines", "lines": ls,
                        "chars": sum(len(l["text"]) + 2 for l in ls)})
    n = 0
    for b in res:
        if b["speaker"] == "Teacher":
            n += 1
            b["file"] = f"teacher_{n}.mp3"
        else:
            b["file"] = b["speaker"].lower() + ".mp3"
        b["text"] = "\n\n".join(l["text"] for l in b["lines"])
        b["first"], b["last"] = b["lines"][0]["id"], b["lines"][-1]["id"]
    return res


def main(src, md_out, html_out):
    lines = parse(src)
    bl = blocks(lines)
    md = [f"# Voice blocks from `{src}`", "",
          "Copy each block into the ElevenLabs app exactly, blank lines included. Phone page with copy buttons: see",
          "the PR. Files: " + ", ".join(f"`{b['file']}`" for b in bl), ""]
    for b in bl:
        md += [f"## {b['file']} · {b['speaker']} · {b['section']} ({b['first']}–{b['last']}, {len(b['text'])} chars)",
               "```", b["text"], "```", ""]
    md += ["## Line order (for the edit)"] + [f"- {l['id']}: {l['text'][:70]}" for l in lines]
    open(md_out, "w", encoding="utf-8").write("\n".join(md) + "\n")

    tpl = open(__file__.replace("voice_blocks.py", "voice_blocks_page.html"), encoding="utf-8").read()
    data = [{k: b[k] for k in ("file", "speaker", "section", "first", "last", "text")} for b in bl]
    page = tpl.replace("/*DATA*/[]", json.dumps(data, ensure_ascii=False).replace("</", "<\\/"))
    page = page.replace("{{SRC}}", html.escape(src))
    open(html_out, "w", encoding="utf-8").write(page)
    for b in bl:
        print(b["file"], b["section"], len(b["text"]))


if __name__ == "__main__":
    main(*sys.argv[1:4])
