# Research pipeline (Importance Map)

Downloads never go in git. Work in a scratch folder: `dl/` for fetched pages and PDFs, outputs next to it.

1. Fetch public pages/PDFs listed in `research/<paper>/sources.csv` with `curl -L` (a normal mobile browser
   User-Agent is fine for public pages; never get around a site that blocks access, never submit lead forms with
   the owner's details without asking).
2. `python3 -I h2t.py dl/*.html` turns pages into text; `pdftotext` (and `pdftotext` without `-layout` for
   two-column PDFs) for PDFs.
3. `python3 -I build_items.py <scratch>/dl` writes `<scratch>/items.csv`. The start/end markers in it are per page;
   add a line per new source and cycle.
4. `python3 -I tag.py <scratch>` writes `items_tagged.csv` and prints untagged items. Fix rules (first match wins),
   then review a sample of every cluster by eye for mis-tags.
5. `python3 -I score.py <scratch>` writes `importance.csv` with cycles seen, mentions, case/numeric mentions and tier.
6. Copy `items_tagged.csv` and `importance.csv` into `research/<paper>/` and update `importance_map.md`.
