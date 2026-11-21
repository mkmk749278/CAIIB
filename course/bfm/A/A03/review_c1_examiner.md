# A03 c1 · Independent review: EXAMINER (fresh context, 2026-11-21)

Script: `course/bfm/A/A03/script_class.md` c1. Read with: plans_A §A03, facts `A1.6-A1.7_A03.md` and `_A01.md`,
`numericals.md`, syllabus A1.6/A1.7, coverage.csv (A1.7 shared by A01, A03, A04, A05, A06, A12), items_tagged /
fullpaper_tagged (A-FXNUM), importance_map, A01 and A02 class scripts.

## Verdict: **ADOPT WITH FIXES**

Every number in the script was re-computed and is right (85.5315, 85.4716, 85.722744 → 85.7227, 85.8513; 99.1206 →
₹4,95,603.00; 114.8595 → ₹9,18,876.00, trap 114.8593; 85.4716 × 25,000 = ₹21,36,790.00). The rate-for-deal answers
match the fact sheet (FCNR(B) and cheque purchase correctly kept as conventions in the cue sheet). The weak point is
**practice volume**: for a Tier A cluster (A-FXNUM 7/7 cycles, "3–4 forex questions" per paper) the drill has only one
sum the learner does end to end (sum 3); sum 4 is one multiplication, and the "no options" sum at N052 repeats N014
word for word. The plan's three keyed practice sums and chapter 4 (rounding, no-options) are missing.

Answerable from A03 (+ A01): **7 of 10 fully, 2 partly, 1 not.**

## Ten exam-style questions (basic 8-function calculator)

| # | Question (key) | Traps in the options | Answerable? Line |
|---|---|---|---|
| 1 | Interbank USD/INR 84.2500/84.2700. TT selling margin 0.125%, bill selling a further 0.20%. Importer retires a USD 40,000 bill, no forward cover. Rupees debited? **₹33,81,764.00** (84.27 × 1.00125 = 84.3753375; × 1.002 = 84.5441) | ₹33,81,756.00 (both margins on ask, × 1.00325) · ₹33,80,960.00 (from bid) · ₹33,75,012.00 (TT selling only) | Yes: N024–N029 |
| 2 | NRI's FCNR(B) deposit USD 30,000 matures, paid in rupees. Interbank 85.40/85.42; TT buying 0.08%, bill buying 0.15%, TT selling 0.12%. Rupees paid? **₹25,59,951.00** (85.40 × 0.9992 = 85.3317) | ₹25,58,157.00 (bill buying) · ₹25,60,551.00 (margin off the ask) · ₹25,65,675.00 (TT selling) | Yes: N044–N045, N014 method |
| 3 | An export bill of USD 20,000 bought earlier is returned unpaid (before crystallisation). Interbank 85.60/85.62; TT selling 0.12%, bill selling +0.15%, bill buying 0.15%. Amount recovered, before interest and charges? **₹17,14,454.00** (TT selling 85.7227) | ₹17,09,432.00 (bill buying, "same rate as purchase") · ₹17,17,026.00 (bill selling) · ₹17,10,630.00 (TT buying) | Yes: N048–N049, N016–N017 |
| 4 | Traveller buys USD 2,000 in notes. Board: TT selling 85.72, notes selling 86.40, notes buying 84.10. Rupees? **₹1,72,800** (notes selling) | 85.72 (TT selling) · 84.10 (customer's side) | Yes: N042–N043 |
| 5 | No options. Interbank 83.3500/83.3700; TT buying 0.10%. TT buying rate to 4 decimals? **83.2667** (83.26665, round half up) | 83.2666 (truncated) · 83.2866 (from ask) | Partly: method N014; rounding rule (half up, never truncate) not stated anywhere |
| 6 | Ask 84.1234; TT selling +0.12%; bill selling +0.15% on TT selling. Bill selling? **84.3507** (on unrounded 84.22434808) | 84.3506 (loaded on rounded 84.2243) | Yes: N033–N034 (but the script never shows a case where they differ) |
| 7 | Customer tenders a USD cheque drawn on a New York bank; the bank purchases it today. Rate? **Bill buying** | TT buying · TT selling · notes buying | Yes: N046–N047 (convention) |
| 8 | Export bill sent on collection; proceeds credited to Nostro. Rate for paying the exporter? **TT buying** | Bill buying | Yes: A01 N057–N058; A03 N047 (cheque analogue) |
| 9 | No options. JPY/INR 57.40/57.45 **per 100 yen**; TT selling 0.15%. Outward remittance JPY 5,00,000. Rupees? **₹2,87,681.00** (57.5362 per 100 × 5,000) | ₹2,87,68,100 (forgot per 100) · ₹2,87,000 (from bid) | **No**: per-100 quote only on an A01 cue card, never spoken or practised |
| 10 | Interbank bid 85.60; TT buying 0.08% on interbank; bill buying = **TT buying less 0.10%**. Bill buying? **85.4460** (85.5315 × 0.999) | 85.5144 (0.10% off the bid) · 85.4460 vs 85.4459 (rounded vs full base) | Partly: A01 N041 "unless the question says otherwise"; A03 never practises a stated other base |

## Findings

| # | Sev | Line | Finding | Exact fix |
|---|---|---|---|---|
| 1 | **High** | N052–N053 | The only "no options" sum repeats N014 (same quote, same margin, same answer): no retrieval value, and the plan's 3 keyed practice sums and chapter 4 are missing. Tier A cluster gets 1 full own-work sum. | Replace N052–N053 with a short chapter 4 "No options" of **three fresh keyed sums** (12–15 s holds each), e.g. (a) FCNR(B) USD 30,000 paid in rupees at 85.40/85.42, TT buying 0.08% → 85.3317, ₹25,59,951.00; (b) returned export bill USD 20,000 at 85.60/85.62, TT selling 0.12% → ₹17,14,454.00 before interest; (c) the yen sum of finding 3. Add all to `numericals.md` and to `fx_merchant_rates.py` (section A03). Keep N053's "key all four decimals". |
| 2 | **High** | folder | No `practice.md` (lesson spec: 5–8 own questions, MCQ and keyed, answers with one-line reasons). | Write `A03/practice.md` with 6–8 items: Q1, Q2, Q3, Q5, Q6, Q9, Q10 above are ready-made (keys verified here); each traced to `numericals.md`. |
| 3 | Medium | after N021 or in ch. 4 | Per-100-unit quotes (yen; FEDAI 5.7) never practised: a classic "×100" option trap in keyed sums. | Add one line + sum: "Yen is quoted per hundred. Build the rate per hundred, then multiply by the yen over a hundred." JPY 5,00,000 out, 57.40/57.45 per 100, TT selling 0.15% → 57.5362, ₹2,87,681.00. (Or record in STATUS that A04 owns it, and check A04's plan.) |
| 4 | Medium | N017 / N053 | Rounding rule not stated: round the 4th decimal **half up**, never truncate (Q5: 83.26665 → 83.2667). In a keyed answer one digit off is wrong. | N017 add: "Round at the fourth decimal: five or more, round up." Cue: "83.26665 → 83.2667, not 83.2666". |
| 5 | Medium | N029 | "Only the two-step answer is right" is absolute; fact sheet row 1 says follow the question when it states another base. A question that puts the bill margin on the interbank rate makes 1.0027 correct. | Change to: "Unless the question says the margin is on the market rate, only the two-step answer is right." |
| 6 | Low | N034 | "Usually the same" but no example where rounded vs full differ, so the warning feels empty. | Add cue (no extra voice needed) or one line: "Ask 84.1234: full figure gives 84.3507, rounded gives 84.3506." |
| 7 | Low | N014 | Plan misconception "margin off the wrong side" has no trap number. | Append: "If you got eighty-five point five five one five, you started from the ask." Trap card "85.62 × 0.9992 ✗". |
| 8 | Low | N023 / numericals | No sum ends in paise; rupee rounding (FEDAI 5.8: paise or rounded rupees per bank policy; exam keys to paise) never practised. Sum 2 also hides that the unrounded rate gives ₹4,95,603.20. | Make one sum end in paise (e.g. outward fee USD 18,250 at 85.7227 = ₹15,64,439.28) and say "to paise, as the question asks". |
| 9 | Low | N049 | FEDAI 2.1(d): the **foreign charges** are also recovered at TT selling. | "T-T selling, on the bill and the foreign bank's charges. Plus interest and rupee charges." |
| 10 | Low | N026 | Forward-contract override (fact row 11) not voiced in A03; "no cover" is mentioned but not why it matters. | Add 6 words to N026: "With a forward contract, his contract rate." |

## Practice volume (Tier A, A-FXNUM 7/7, 3–4 forex items per paper)
Not enough as written: 4 sums, of which the learner does 1 end to end, plus 8 rate-picking items. With findings 1–3,
A03 gets 4 worked/faded + 3 fresh keyed sums in-video + 6–8 practice items, which fits a drill lesson; the remaining
volume (transit interest, forward loading, cross rates, crystallisation) sits correctly in A04/A05/A12 per coverage.csv.

Counts: **High 2 · Medium 3 · Low 5.**
