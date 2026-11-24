"""Split cue cards that a Google Docs export glued onto the spoken line (2026-11-24, C06–C09b):
'N001 · ...a rate move hits.0 C: rule-version card · 1 S: ...' → spoken line, then '> 0 C: ... · 1 S: ...'."""
import re
CUE = re.compile(r'(?<=\S)(?=\d{1,2} [SNGBMCH]{1,2}: )')
def unglue(text):
    out = []
    for ln in text.split("\n"):
        if re.match(r"^N\d{3}", ln):
            parts = CUE.split(ln, maxsplit=1)
            if len(parts) == 2 and not parts[0].rstrip().endswith("·"):
                out += [parts[0].rstrip(), "> " + parts[1].strip()]
                continue
        out.append(ln)
    return "\n".join(out)
