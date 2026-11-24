"""Turn Gemini's exported Docs (Drive _inbox/gemini/<ID>/, pulled as .txt) into repo files.

  RCLONE_DRIVE_EXPORT_FORMATS=txt tools/drive/drive.sh pull _inbox/gemini/<ID> .cache/gemini_in/<ID>
  python3 tools/gemini/import_lesson.py <ID> <lesson folder> <fact sheet name>
  e.g. python3 tools/gemini/import_lesson.py A18 course/bfm/A/A18 A3.4-A3.8_A18

Writes script_class.md (cue lines as '> ', headings as '##'), numericals.md, practice.md, map_nodes.md and
research/bfm/facts/<fact sheet name>.md (tab tables → Markdown tables). Review and fix afterwards; nothing is locked.
"""
import os, re, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

ID, folder, fname = sys.argv[1:4]
src = f".cache/gemini_in/{ID}/{ID}_"
rd = lambda n: open(src + n + ".txt", encoding="utf-8-sig").read().replace("\r", "").replace("﻿", "")
os.makedirs(folder, exist_ok=True)

out = []
for ln in __import__("unglue").unglue(rd("script_class")).split("\n"):
    if ln.startswith("________________"):
        out.append("\n---\n")
    elif re.match(r"^(Warm-up.*|Opening.*|Close.*|Chapter \d.*|Facts needed.*)$", ln.strip()) and not ln.startswith("#"):
        out += ["", "## " + ln.strip().split(" · ")[0].split(" (~")[0] if ln.strip().startswith(("Close", "Warm")) else "## " + ln.strip(), ""]
    elif re.match(r"^\d+ [SNGBMCH]:", ln) or re.match(r"^[SNGBMCH]: ", ln):
        out.append("> " + ln + "\n")
    else:
        out.append(ln)
txt = "\n".join(out)
if "\n---\n" not in txt:  # voice_blocks.py needs the header / body split
    i = txt.find("\n## ")
    txt = txt[:i] + "\n\n---\n" + txt[i:]
txt = re.sub(r"(\n> [^\n]*)\n(?=N\d{3})", r"\1\n\n", txt)  # blank line after each cue block
open(f"{folder}/script_class.md", "w").write(txt if txt.lstrip().startswith("#") else "# " + txt)

f, o, i = rd("fact_sheet").split("\n"), [], 0
while i < len(f):
    l = f[i]
    if l.strip() == "Id" and i + 1 < len(f) and f[i + 1].strip() == "Source":
        o.append("| Id | Source | Where | Read |\n|---|---|---|---|"); i += 5
        while i + 3 < len(f) and f[i].startswith("\t"):
            o.append("| " + " | ".join(x.strip().replace("|", "/") for x in f[i:i + 4]) + " |"); i += 4
        continue
    if l.strip() == "#" and i + 1 < len(f) and f[i + 1].strip() == "Testable point":
        o.append("| # | Testable point | Source |\n|---|---|---|"); i += 4
        while i + 2 < len(f) and f[i].startswith("\t"):
            o.append("| " + " | ".join(x.strip().replace("|", "/") for x in f[i:i + 3]) + " |"); i += 3
        continue
    if l.startswith(("Points:", "Worked items")) or l.strip() in ("Sources", "Not in this lesson", "Verify at the freeze"):
        o.append("\n## " + l.strip())
    else:
        o.append(l)
    i += 1
fs = "\n".join(o)
open(f"research/bfm/facts/{fname}.md", "w").write(fs if fs.lstrip().startswith("#") else "# " + fs)
for a, b in [("numericals", "numericals.md"), ("practice", "practice.md"), ("map_nodes", "map_nodes.md")]:
    open(f"{folder}/{b}", "w").write("# " + rd(a))
print("imported", ID, "→", folder, "and", fname)
