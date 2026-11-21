# A04: what was done with the c1 reviews (c1 → c2, 2026-11-21)

Reviews: expert (ADOPT WITH FIXES, 0 H / 3 M / 7 L), examiner (ADOPT WITH FIXES, 3 H / 4 M / 5 L; 4 of 10 answerable,
2 partly), beginner (ADOPT WITH FIXES, 0 H / 9 M / 12 L). Every number was confirmed right by all three.

## Fixed (every High and Medium)
| Finding | Fix |
|---|---|
| Examiner H1: no `practice.md` | `practice.md` (8 items from the examiner draft); every key added to `fx_cross_rates.py` |
| Examiner H2: plan's chapter 4 exam case cut to one question | Chapter 4 "Exam case": euro export (bid), yen import (ask, ÷100, ₹11,45,418.00), no-options back-out of USD/INR (85.5606 / 85.6594, trap 85.6000) |
| Examiner H3 / expert M3 / beginner M9: chain rule only "multiply along" | N040a full rule (× right, ÷ left) + card; second chain N040b–e (₹108.5889, trap 92.2496); N042b–d; N043, N050 |
| Examiner M4: two-way direct → indirect | N009a flip and swap (1.1680 / 1.1682); ch1 pause check twist |
| Examiner M5 / expert M1: rule two too narrow | "same side" in N024–N025 card, N030b (EUR/GBP 0.8570 / 0.8581), N033, N035, N048 |
| Examiner M6: spread of a cross | N021a (0.046% + 0.023% ≈ 0.069%); N046g note |
| Examiner M7: no no-options item, rounding unsaid | N045 "four decimals first"; N046c label "No options · 4 decimals" |
| Expert M2 / beginner M6: bid-below-ask check misses the trap | N030–N030a: both trap figures 57.2575 and 57.2326; card |
| Beginner M1: warm-up | N001a (7 of 7 cycles, importance_map A-FXNUM), N004 promise |
| Beginner M2: "quote" overloaded | "quote currency" in N006 and after |
| Beginner M3 / M4: no pause check in ch1, ch3 | N012a–d, N042b–d |
| Beginner M5: why cross the sides | N027–N027a fraction picture (small on top, big below); N017 link |
| Beginner M7: reverse sum without reason | N042 |
| Beginner M8: holds | hold after "equals" (6–8 s); N041 20 s; N045 10 s |

## Lows done
Expert: L5 chain labelled "another day's rates"; L6 / beginner L9 / examiner L9 numericals 4601.3018; L7 fact row 5
(FBIL 2 decimals, 13.30 hrs); L9 rule-version card; L10 fact row 8 reworded. Examiner: L8 N009b buy high sell low;
L10 coverage.csv A1.3 now A00;A04. Beginner: L1, L2, L3, L4, L5, L6, L7, L8, L11 (branch zero), L12 (goodbye).

## Lows not done
Expert L4 (bank's-side reason): the fraction picture of beginner M5 used instead. Expert L8 (direct quotes since
2 Aug 1993): not checked in a primary text; left out. Beginner L10 (syllabus scope line): N051 kept short. Examiner
L12 (triangular arbitrage): a lead only, for a C01 practice item.

## Length
1,767 spoken words + about 230 s of holds ≈ 14.5–15 min; at the top of the drill band.
