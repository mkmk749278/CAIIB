# The IIBF BFM book as a depth check

Added 2026-11-26. The owner bought the official book and shared a scan: *Bank Financial Management*, IIBF /
Macmillan Education, **first edition 2023** (ISBN 978-93-5666-028-1), 773 pages, 31 units.

## Where it is
- PDF: Drive `BFM/_downloads/iibf_book/BFM_IIBF_2023.pdf` (the owner's upload is also in their My Drive).
- Text (pdftotext -layout of the scan's text layer): Drive `BFM/_downloads/iibf_book/bfm.txt`.
- **Neither goes into git.** It is copyrighted, and the owner's copy is for our own study.
- `python3 -I tools/research/book_unit.py <unit> [--toc | --grep WORD]` prints one unit (it pulls the text into
  `.cache/iibf_book/` the first time). Units are our syllabus ids: A1–A10, B1–B8, C1–C7, D1–D6 (book Units 1–31,
  in the same order).

## What it is for (and what it is not)
It is the courseware IIBF's own question writers know best, so it is the strongest **depth checklist** we have. It
sits in layer 4 of the method (CLAUDE.md; PLAYBOOK §4b), above the public classes.

**Use it to find:**
1. **Sub-points**: points the book teaches under a syllabus sub-topic that our lesson leaves out. Each one goes into the
   lesson, after its fact is checked in the primary source, or its review says why it is left out.
2. **Kinds of numericals**: the book's worked examples show which sums IIBF expects (for example cross rates, forward
   premium, swap points, duration, VaR, LCR, RAROC). We make sure our lessons teach each kind, **with our own numbers**.
3. **Book-style questions**: the "Check Your Progress" and "Terminal Questions" show which points the authors think are
   worth testing. They go into the question blueprint (layer 3) as *kinds* of question only.
4. **Stale points**: the book is written to rules of about 2022. Where it differs from our fact sheet (FEMA 2026
   export-import regulations, the 2025 RBI Directions, the 2026 ECB framework, ISBP 821, TCS under the Income-tax Act
   2025, Basel III final reforms, and so on), our lesson keeps the current rule. **If the book's figure is likely to
   appear as a wrong option, it becomes a trap card** (PLAYBOOK §4a, old figures in options).

**Never:**
- copy its wording, sentences, tables, diagrams, examples, numbers, case studies or questions (hard line in CLAUDE.md);
- take a fact from it: every rule, number and date still comes from the primary text (RBI, FEMA, FEDAI, ICC, BCBS,
  ECGC, IFSCA, SEBI) and is checked there;
- treat its rule as current: it is a 2023 edition and the exam uses rules as at 31 Dec 2026.

## Book units against our syllabus ids and videos

The book's section headings match `research/bfm/syllabus_official.md` one for one (checked 2026-11-26). So nothing in
the book is missing from our scope. Any gaps are at sub-point depth, which each lesson's review checks.

| Book unit | Syllabus unit | Book sections | Our videos (coverage.csv) |
|---|---|---|---|
| 1 Exchange Rates and Forex Business | A1 | 1.2–1.8 | A00, A01, A03–A06, A12, A21, C01 |
| 2 LRS and other remittances | A2 | 2.2–2.9 | A16, A16b |
| 3 Correspondent Banking and NRI Accounts | A3 | 3.2–3.9 | A02, A17, A18 |
| 4 Documentary Letters of Credit | A4 | 4.2–4.13 | A07–A10 |
| 5 Facilities for Exporters and Importers | A5 | 5.2–5.12 | A11, A11b, A12–A14 |
| 6 ECB and Foreign Investments in India | A6 | 6.2–6.6 | A19, A19b |
| 7 Risks in Foreign Trade: ECGC | A7 | 7.2–7.10 | A15, A15b |
| 8 EXIM Bank, RBI, FEMA, FEDAI | A8 | 8.1–8.5 | A15b, A19, A21 |
| 9 IFSC, GIFT City | A9 | 9.2–9.8 | A20 |
| 10 Technology in International Banking | A10 | 10.1–10.8 | A22 |
| 11 Risk and Basic Risk Management Framework | B1 | 11.1–11.3 | B01, B02 |
| 12 Risks in Banking Business | B2 | 12.1–12.5 | B01 |
| 13 Risk Regulations in Banking Industry | B3 | 13.1–13.18 | B02, B04–B07 |
| 14 Market Risk | B4 | 14.1–14.10 | B09 |
| 15 Credit Risk | B5 | 15.1–15.13 | B06, B10, B11 |
| 16 Operational Risk and Integrated Risk Mgmt | B6 | 16.1–16.14 | B07, B12 |
| 17 Liquidity Risk Management | B7 | 17.1–17.17 | B13, B13b |
| 18 Basel III Liquidity Standards | B8 | 18.1–18.4 | B14 |
| 19 Introduction to Treasury Management | C1 | 19.1–19.5 | C01 |
| 20 Treasury Products | C2 | 20.1–20.4 | C01–C03, C02b, C05 |
| 21 International Equity and Debt Products | C3 | 21.1–21.6 | A13, A19 |
| 22 Funding and Regulatory Aspects | C4 | 22.1–22.3 | C02, C04 |
| 23 Treasury Risk Management | C5 | 23.1–23.4 | B09, C06–C09 |
| 24 Derivative Products | C6 | 24.1–24.5 | C08, C09 |
| 25 Treasury and ALM | C7 | 25.1–25.7 | B11, D01, D01b |
| 26 Components of Assets and Liabilities | D1 | 26.1–26.6 | D01 |
| 27 Capital Adequacy: Basel Norms | D2 | 27.1–27.4 | B04–B08 |
| 28 Asset Classification and Provisioning | D3 | 28.1–28.3 | D02–D04 |
| 29 Liquidity Management | D4 | 29.1–29.4 | B13, B14 |
| 30 Interest Rate Risk Management | D5 | 30.1–30.10 | D05, D06, D06b |
| 31 RAROC and Profit Planning | D6 | 31.1–31.4 | D07 |

Where the book has worked sums (a rough count of "Example" and "Solution" lines): **A1** (about 13 examples:
exchange arithmetic), **B3** (capital charges), **B5** (credit risk measures), **D4** (liquidity gaps), **D5** (gap,
duration), a few in A2, A5, B6, C5, C6, D2. Check these units' numerical kinds first.

## How a review uses it (from 2026-11-26)
Every independent review (layer 7), and every re-review of a locked lesson, adds a **book check** section:
1. `book_unit.py <unit> --toc`, then read the sections behind the lesson's sub-topic ids.
2. List every sub-point the book teaches there that the lesson lacks: **Add** (check the primary source, then add it),
   **Covered elsewhere** (name the video), or **Leave out** (with the reason: superseded, out of syllabus, trivia).
3. List every book statement that is now out of date and could appear as an option: is it a trap card in the lesson?
4. List the kinds of book worked examples for these sub-topics: does the lesson teach each kind?
5. Write everything in our own words. Quote nothing from the book beyond a section number and title.

**Locked lessons (A00–A19b)** get this check as a sweep, one module unit at a time, before voicing. Its findings are
fixes (c4) to the scripts, so that the written course is complete before the owner judges the first built video.
