"""Writes .cache/gemini_knowledge/START_HERE.md: the one Drive file Gemini reads to run a lesson as a task."""
import re, pathlib
root = pathlib.Path(__file__).resolve().parents[2]
sk = re.sub(r'^---.*?---\n', '', (root / 'tools/gemini/skills/caiib-bfm-lesson/SKILL.md').read_text(), flags=re.S).strip()
head = (root / 'tools/gemini/start_here_head.md').read_text()
(root / '.cache/gemini_knowledge/START_HERE.md').write_text(head + "\n---\n\n# THE SKILL\n\n" + sk + "\n")
