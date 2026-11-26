# Book check: unit A5 (Facilities for exporters and importers)

Done 2026-11-26. We compared the book's Unit 5 (sections 5.1–5.12, about 40 pages, one sanction illustration, one
export-finance case with 5 MCQs, 3 "Check Your Progress" sets, 10 terminal questions) with A11, A11b, A12, A13, A14
and their fact sheets. Written in our own words.

## Verdict
- **Scope:** nothing is missing.
- **Depth:** the book is written to the old Export and Import Master Directions. On **1 Oct 2026** these were superseded
  by the FEM (Export and Import of Goods and Services) Regulations 2026 and A.P. (DIR) 20. Almost every figure in the
  book's 5.2, 5.3 and 5.8 is now old. Our lessons already teach the current rules and turn the old figures into
  **trap cards**:
  - **A11 (exports):** 21 days, 9/15 months, write-off 5 % / 10 %, the exempt list, the caution list, SOFTEX, ETX
    extension.
  - **A13 (imports):** 6 months, USD 200,000 / 5 m / 100,000 for advances, the 3 + 3 months follow-up with a registered
    letter, the CEO/auditor certificate.

  The book's export finance (5.4), Gold Card (5.5), factoring and forfaiting (5.7) and trade credit (5.11) are taught in
  A11b, A12, A13 and A14, to current texts (CF Directions 2025 ch. XV, FRA 2011 as amended, TC under the ECB-TC MD of
  8 Sep 2026).
- **Real gaps:** 1. **New trap cards:** 2.

## Gaps
| # | Book § | Sub-point (our words) | Where | Check in |
|---|---|---|---|---|
| G1 | 5.3(g), Case Q5 | **Effective date of realisation** of an export bill: the date the money is credited to the bank's Nostro (foreign-currency bill) or debited to the Vostro (rupee bill). Interest on the post-shipment advance runs up to that **value date**, not the day the advice reaches the branch | A12 c4: one card, plus one MCQ in `practice.md` | FEDAI Rules (current edition), export-bill rule on the effective date of realisation. **It is not in `research/bfm/sources/fedai_rules_cutoff.md` yet: add it** |

**Leave out:** the book's rule-of-thumb CIF → FOB deductions (13–14 % by sea, about 25 % by air). They are bank
practice with no RBI text; A11b already teaches "deduct freight and insurance" without fixed percentages. Also leave out
the history of the export finance scheme (1967), the Kalyanasundaram Committee (factoring, early 1990s) and the IDPMS
working group's chair: trivia, with at most one history line in A14 if time allows.

## Stale book points: trap cards (beyond those already in A11 and A13)
| # | Book says (our words) | Current (our fact sheet) | Status |
|---|---|---|---|
| S1 | Trade credit: banks may give **Letters of Undertaking / Comfort** for INR trade credit | **LoU / LoC for trade credit are banned** (ECB-TC MD, A13 F20) | A13 teaches the ban. **A13 c4: add "LoU / LoC ✗" to its trap card** if it isn't there |
| S2 | PCFC / EBR priced over **LIBOR** (the book's 2021 note says "read SOFR") | ARR-linked; the bank's policy sets the spread | A11b teaches ARR. **A11b c4: one trap line "LIBOR ✗ (ended)"** |
| S3 | Crystallisation of an export bill on a fixed day (practice question: "the 10th / 20th / 45th day") | FEDAI 10th edition: **the bank's published policy** (A12) | already the A12 lesson |
| S4 | DDA: 2 years' track record, average turnover ₹3 crore, up to 5 accounts | Our A14 fact sheet: FEMA 3 years vs CF 338's 2 (**re-check at the freeze**, already noted) | already noted in A14 |
| S5 | EDF waiver for gems and jewellery: ₹1 crore or 2 %, whichever is lower | Waivers under the 2026 regulations (A11 trap list) | **A11 c4: check that this item is in the trap list** |

## Numerical kinds in the book
| Kind | Ours | Checker |
|---|---|---|
| PCL amount: CIF/CFR → FOB, less margin, at the bill buying rate | A11b | `export_pcl.py` |
| Usance bill purchase rate (bill buying + premium) and FBD amount after margin | A05 / A12 | `fx_forwards.py`, `export_bills.py` |
| Notional due date (usance + 25-day NTP) | A12 | `export_bills.py` |
| Interest period up to the value date in the Nostro | **G1**: add to A12 | `export_bills.py` (add a case) |

## Follow-ups
1. A12 c4: G1 (card, MCQ and a checker case), after the FEDAI text is added to our sources.
2. A13 c4: S1. A11b c4: S2. A11 c4: S5.
