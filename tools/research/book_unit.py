#!/usr/bin/env python3
"""Print one unit of the IIBF BFM textbook (Macmillan, 1st ed. 2023) as text, for a depth check.

The book is a LEAD, never a source and never copied (CLAUDE.md hard lines; research/bfm/depth/iibf_book.md).
Its text lives in Drive `BFM/_downloads/iibf_book/bfm.txt` (pdftotext -layout of the PDF); never in git.

  python3 -I tools/research/book_unit.py A4            # whole unit A4 (book Unit 4) to stdout
  python3 -I tools/research/book_unit.py A4 --toc      # the unit's section list only
  python3 -I tools/research/book_unit.py A4 --grep ISBP # lines matching a word, with book page hints

The text is pulled once into .cache/iibf_book/ (gitignored) with tools/drive/drive.sh.
"""
import argparse, os, re, subprocess, sys

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
CACHE = os.path.join(ROOT, ".cache", "iibf_book")
TXT = os.path.join(CACHE, "bfm.txt")
# Book unit n -> our syllabus unit id (the book follows the syllabus order exactly: 10 + 8 + 7 + 6 units).
UNITS = [f"A{i}" for i in range(1, 11)] + [f"B{i}" for i in range(1, 9)] + \
        [f"C{i}" for i in range(1, 8)] + [f"D{i}" for i in range(1, 7)]


def load():
    if not os.path.exists(TXT):
        os.makedirs(CACHE, exist_ok=True)
        subprocess.run([os.path.join(ROOT, "tools/drive/drive.sh"), "pull", "BFM/_downloads/iibf_book", CACHE],
                       check=True, env={**os.environ, "GDRIVE_INCLUDE": "bfm.txt"})
    return open(TXT, encoding="utf-8").read().split("\n")


def spans(lines):
    starts = [i for i, l in enumerate(lines) if l.strip() == "STRUCTURE"]
    if len(starts) != len(UNITS):
        sys.exit(f"expected {len(UNITS)} units, found {len(starts)} STRUCTURE markers")
    ends = starts[1:] + [len(lines)]
    return {u: (s, e) for u, s, e in zip(UNITS, starts, ends)}


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("unit", help="syllabus unit id, e.g. A4, B3, D6")
    ap.add_argument("--toc", action="store_true")
    ap.add_argument("--grep")
    a = ap.parse_args()
    lines = load()
    u = a.unit.upper()
    if u not in UNITS:
        sys.exit(f"unknown unit {u}; one of {' '.join(UNITS)}")
    s, e = spans(lines)[u]
    body = lines[s:e]
    if a.toc:
        for l in body[1:80]:
            t = l.strip()
            if t.startswith("Let Us Sum Up"):
                break
            if t:
                print(t)
        return
    if a.grep:
        rx = re.compile(a.grep, re.I)
        page = "?"
        for i, l in enumerate(body):
            m = re.search(r"(?:^\s*(\d{1,3})\s+I\s)|(?:\sI\s+(\d{1,3})\s*$)", l)
            if m:
                page = m.group(1) or m.group(2)
            if rx.search(l):
                print(f"p~{page}: {l.strip()}")
        return
    print("\n".join(body))


if __name__ == "__main__":
    main()
