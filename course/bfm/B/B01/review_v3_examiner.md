# B01 · Review v3 · examiner (independent session, 2026-11-21)

**Verdict: ADOPT WITH FIXES** (0 High, 1 Medium, 2 Low). Chapter 4 now answers RMS99 9.3.1, 9.3.2 and 9.3.4 items.
The remaining Medium is the recap map (same item as expert M1).

Checked: `script.md` v3 chapter 4 and the map recall (N161a), `map_nodes.md`, `practice.md`, RMS99 9.3.1–9.3.7
(rbi.org.in, read today), SRP31.2.

## v2 findings
| v2 | Sev. | Status |
|---|---|---|
| M1 basis/yield-curve hook (Q12) | Med | **Fixed in the script** (N078, N082, N083, N089, N092). Map node 4 not updated: new M1. |
| M2 N088 also gap | Med | **Fixed** (N088 re-stemmed exactly as asked). |
| L1 mixed round too easy | Low | Accepted by author. Still Low. |
| L2 practice numbering; missing items | Low | Numbering fixed. Items for RBI forms of market risk / one loan many risks / legal vs compliance not added. Still Low. |
| L3 cross-border, currency | Low | Fixed (N055a). |

## Test questions for this re-review
| # | Stem | Ans | Lesson answers? | Lines |
|---|---|---|---|---|
| 1 | "Market interest rates of various instruments seldom change by the same degree during a given period … change in different magnitude" (9.3.2) | basis | yes | N078, N086–N087 |
| 2 | "Banks price assets and liabilities on different benchmarks … two instruments maturing at different time horizon … non-parallel movements" (9.3.4) | yield curve | yes | N082, N089 |
| 3 | 9.3.4 first sentence only: "In a floating rate scenario banks may price on different benchmarks, i.e. TB yields, FD rates, call money rates, MIBOR" | yield curve | **mostly**; N089 warns, but the list is never heard (L1) | N089 |
| 4 | Gap risk arises from different (a) principal amounts (b) maturity dates (c) repricing dates (d) all | d | yes | N076, N087 |
| 5 | Equal amounts, same repricing date; deposit rate rises more than loan rate | basis | yes | N086–N087, practice Q3 |
| 6 | Gap risk exposes the bank to changes in the ___ of rates | level | yes | N076 |
| 7 | Five-year loans funded by one-year deposits; rates rise | gap / mismatch | yes (no longer contradicted) | N076, N088 |
| 8 | Prepayment / premature withdrawal | embedded option | yes | N081, N090 |
| 9 | Large float is a natural hedge: which IRR type? | net interest position | yes | N085b–N085c |

## New findings
**M1 · Medium · `map_nodes.md` node 4 (N092, N161a).** It still reads "basis (two benchmarks) · yield curve (two
periods)". The learner rebuilds node 4 from memory and checks against this text; it teaches benchmarks → basis, which
makes Q2/Q3 a coin toss. Fix as expert M1.

**L1 · Low · N089.** Give the 9.3.4 list once so a quoted stem is recognised: "R-B-I's yield curve paragraph lists
benchmarks like T-bill yields, deposit rates, call money and MIBOR. The test is maturity." (Keep under 25 words per
sentence.)

**L2 · Low · N078.** IIBF stems copy "different magnitude". Optional: "change by different amounts, R-B-I says
different magnitude, over the same period." The card at N078 could carry "magnitude".
