"""Quick quality gate for Gemini lesson drafts pulled to .cache/gemini_in/<ID>/ (as .txt).

  python3 tools/gemini/gate.py A19b B04 ...

PASS needs: a Deep Research report with >= 8 primary-source links (rbi.org.in, rbidocs, bis.org, fedai, iccwbo,
indiacode, egazette, incometaxindia, sebi, ifsca, ecgc, eximbank), a fact sheet >= 1,200 words, a script of
1,100-2,200 spoken words (2026-11-24: A21, C02, C02b, C03, C04b came back at 3,100-3,500, about 25 min) (drills/cases >= 1,100), and no more than 12 exclamation marks in the spoken lines.
2026-11-24: batch drafts A19b-B09b had 0 links and 480-1,670 spoken words (Gemini skipped Deep Research).
"""
import re, sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
PRIMARY = r"rbi\.org\.in|rbidocs|bis\.org|fedai|iccwbo|indiacode|egazette|incometaxindia|sebi\.gov|ifsca|ecgc|eximbank|fimmda|ccilindia|fbil"
for i in sys.argv[1:]:
    d = f".cache/gemini_in/{i}/{i}_"
    try:
        rep, fs, sc = (open(d + n + ".txt", encoding="utf-8-sig").read() for n in ("deep_research_report", "fact_sheet", "script_class"))
    except FileNotFoundError as e:
        print(f"{i:5} MISSING {os.path.basename(e.filename)}"); continue
    links = len(set(re.findall(r"https?://[^\s)\]]*(?:" + PRIMARY + r")[^\s)\]]*", rep + fs)))
    sc = __import__("unglue").unglue(sc)
    spoken = [re.sub(r"^N\d{3}[a-z]? · ", "", l) for l in sc.split("\n") if re.match(r"^N\d{3}", l)]
    words = sum(len(l.split()) for l in spoken)
    bangs = sum(l.count("!") for l in spoken)
    codes = sum(len(re.findall(r"\b[ABCD]\d{2}[a-z]?'s\b|\b(in|see you in) [ABCD]\d{2}", l)) for l in spoken)
    ok = links >= 8 and len(fs.split()) >= 1200 and 1100 <= words <= 2200 and bangs <= 12
    print(f"{i:5} {'PASS' if ok else 'FAIL'}  primary links {links:3}  fact sheet {len(fs.split()):5} w  spoken {words:5} w  '!' {bangs:3}  codes spoken {codes}")
