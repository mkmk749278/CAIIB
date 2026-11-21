# A06 c1 · Independent review: EXAMINER (fresh context, 2026-11-21)

Script: `course/bfm/A/A06/script_class.md` c1 (cancellation of purchase and sale contracts at and before maturity,
early delivery and swap cost, extension and the Oct 2026 rules, automatic cancellation). Read with: plans_A §A06,
facts `A1.5-A1.7_A06.md`, `numericals.md`, syllabus A1.5–A1.7, coverage.csv rows A1.5–A1.7, items_tagged /
fullpaper_tagged (A-FXNUM), importance_map, depth/A.md (A1.5–A1.7, outdated item 20), lesson_spec, A03 and A05
class scripts, and FEDAI Rules 10th ed. Rule 6 and 2.2(c) (text copy in the session scratchpad). Every number below
re-computed with Python `Decimal` (round half up: rates 4 decimals, rupees to paise) and by hand on 8-function key
presses.

## Verdict: **ADOPT WITH FIXES**

Every number in the script is right: TT selling 86.40 × 1.0012 = 86.50368 → 86.5037, exporter pays ₹45,370.00;
TT buying 85.80 × 0.9992 = 85.73136 → 85.7314, importer pays ₹23,430.00 (trap 85.9230); forward TT selling one month
before maturity (86.40 + 0.20) × 1.0012 = 86.70392 → 86.7039; swap 86.11 − 85.70 = 0.41 → ₹41,000.00; outlay
₹35,000 → interest ₹583.33; exporter gets ₹85,63,416.67. The FEDAI rules taught match Rule 6 word for word in
substance (6.1 optional, 6.4(ii) rates, 6.4(i)(b) instalments, 6.4(iii) impossibility, 6.4(iv) three working days and
the gain rule, 6.5 swap cost in all cases), and the 10 Oct 2026 RBI points (no rebooking, rollover on maturity,
USD 5 million, undertaking) match the fact sheet. The gaps are **range**: (1) the plan's fourth numerical, extension /
rollover, is missing, and "rebook only at the current rate" is never made a sum or a trap; (2) only the swap-cost
side of early delivery is taught, not the swap gain (dollar at a discount, or an importer taking early delivery at a
premium), though FEDAI 6.2 says "recover / pay"; (3) the no-rebooking rule omits "with any bank"; (4) FEDAI 2.2(c)
early realisation of an export bill, deferred from A05 to here, is not taught; (5) N004 says the buyer pays "a month
early" while the card and N025 say two months; (6) no `practice.md`. The script is short (1,333 spoken words ≈ 9.5
min at 140 wpm + 117 s of holds ≈ 11.5 min, against ~14), so the fixes fit.

Evidence (A-FXNUM, Tier A, 7/7 cycles, 32 items; "FOREX calculation: 3 to 4 questions", OB Dec 2025): full paper Dec
2025 Q40 "For cancellation, the bank should use:"; forex case studies in Jun 2023 (×3), Dec 2023, Jul 2024
(crystallisation), Jun 2025, Dec 2025 (crystallisation), Jun 2026. Recollections rarely name cancellation sums by
title, so the blueprint (fact sheet) carries the weight: calculate, who, when, exception, apply.

Answerable from A06 (+ A01/A03/A05): **6 of 10 fully, 2 partly, 2 not.** (After fixes 2–5: 10 of 10.)

## Ten exam-style questions (basic 8-function, 12-digit calculator)

Margins as in the lesson: TT selling +0.12% (`× 1.0012`), TT buying −0.08% (`× 0.9992`). Purchase / sale from the
bank's side.

| # | Question (key, key presses) | Traps in the options | Answerable? Line |
|---|---|---|---|
| 1 | A forward **purchase** contract is cancelled at the customer's request on the maturity date. The bank applies: **its TT selling rate** (FEDAI 6.4(ii)(a)) | TT buying rate (the contract side) · the original contract rate · bill buying rate | Yes: N009, N021–N022, map N061 |
| 2 | Importer's forward **sale** contract USD 40,000 @ 85.90, cancelled on maturity. Spot 86.30 / 86.32. Amount? **Importer receives ₹13,240.00** (`86.30 × 0.9992 =` 86.23096 → 86.2310; `86.2310 − 85.90 = × 40000 =`) | importer pays ₹13,240 (direction) · receives ₹20,944 (TT selling 86.4236) · receives ₹16,000 (no margin) | Yes: N011, N016–N018 (rate); the gain direction is never shown worked, but N014's "who pays?" logic carries it |
| 3 | No options. Exporter's purchase contract USD 50,000 @ 86.40 due 31 Dec, cancelled on 30 Nov at her request. Spot 85.95 / 85.97; 1m points 0.18 / 0.20. Exchange difference? **Exporter receives ₹6,330.00** (`85.97 + 0.20 = × 1.0012 =` 86.273404 → 86.2734; `86.40 − 86.2734 = × 50000 =`) | ₹16,340 (spot TT selling 86.0732) · ₹16,945 (forward TT buying 86.0611) · "pays ₹6,330" | Yes: N019 (rule) and its cue (`(86.40 + 0.20) × 1.0012`); no full before-maturity sum is voiced |
| 4 | Exporter's purchase contract USD 1,00,000 @ 85.50, due in 1 month, delivered today. Interbank spot 85.80 / 85.82; 1m points 0.20 / 0.16 (discount); interest 9% a year. Rupees paid to her? **₹85,64,225.00** (forward ask `85.82 − 0.16 =` 85.66; swap **gain** `85.80 − 85.66 = × 100000 =` 14,000; inflow `85.80 − 85.50 = × 100000 =` 30,000; `30000 × 0.09 ÷ 12 =` 225; `8550000 + 14000 + 225 =`) | ₹85,35,775 (gain treated as cost, interest recovered) · ₹85,50,000 (contract rate, nothing else) · ₹85,64,000 (no interest on inflow) | **Partly**: inflow → interest paid (N034) yes; a swap **gain** paid to the customer is never taught (finding 4) |
| 5 | Which statement is **false** under FEDAI Rule 6? **"A contract that becomes impossible to perform under a Government prohibitory order is automatically void."** | (true) early delivery is optional for the bank · (true) swap cost is recovered even if no swap is done · (true) a matured contract with no instructions is cancelled within 3 working days after maturity | Yes: N057, N025, N039, N054 |
| 6 | Exporter's purchase contract USD 20,000 @ 86.50; no instructions; the bank cancels it on the third working day after maturity at TT selling 86.1240. Amount paid to the exporter? **Nil** (the 7,520 difference in her favour is not passed; she defaulted) | ₹7,520 (`86.50 − 86.1240 = × 20000 =`) · ₹7,520 less swap cost · ₹7,520 at the next month-end | Yes: N055–N056, N064 |
| 7 | No options. Importer's sale contract USD 50,000 @ 86.20 matures today; he asks for a one-month rollover. Spot 85.80 / 85.82; 1m points 0.18 / 0.20. (a) Amount now? (b) New contract rate? **(a) He pays ₹23,430.00** (`85.80 × 0.9992 =` 85.7314; `86.20 − 85.7314 = × 50000 =`) **(b) 86.1232** (`85.82 + 0.20 = × 1.0012 =` 86.123224) | new rate 86.20 (historical-rate rollover) · 85.9112 (forward TT buying) · nothing payable "because it's an extension" | **No**: N042–N044 give the rule only; no extension sum, no "never at the old rate" trap (finding 2) |
| 8 | Importer's sale contract USD 1,00,000 @ 86.30, due in 2 months; he takes delivery today. Interbank spot 85.70 / 85.72; 2m points 0.36 / 0.39; interest 10%. He pays? **₹85,95,033.33** (bank buys spot at ask 85.72, sells 2m forward at bid `85.70 + 0.36 =` 86.06: swap gain `86.06 − 85.72 = × 100000 =` 34,000; inflow `86.30 − 85.72 = × 100000 =` 58,000; `58000 × 0.10 × 2 ÷ 12 =` 966.67; `8630000 − 34000 − 966.67 =`) | ₹86,64,966.67 (gain charged as cost) · ₹86,71,966.67 (exporter's ₹41,000 cost copied) · ₹86,30,000 | **No**: only the exporter side is taught (finding 4) |
| 9 | On 16 Nov 2026 an importer cancels a USD/INR forward with Bank A. Which is permitted? **None of the rebooking routes: he cannot rebook it with Bank A or any other AD; only a rollover on the maturity date was open** | rebook with Bank A at the current rate · book afresh with Bank B for the same exposure · rebook with Bank A at the old rate | **Partly**: N043 "can no longer be rebooked" omits "with any bank" (finding 5) |
| 10 | As at 31 Dec 2026, a user hedging contracted exposure without proving the underlying may book up to: **USD 5 million, across all ADs, with an undertaking it is not hedged with another AD** | USD 100 million (old) · USD 5 million per AD, no undertaking · USD 2 million (the FERR threshold) | Yes: N046–N047 |

## Findings

| # | Sev | Line | Finding | Exact fix (ready words; spoken sentences ≤ 25 words) |
|---|---|---|---|---|
| 1 | **High** | folder | No `practice.md` (lesson spec: 5–8 own items, MCQ and keyed, one-line reasons; plan: "Practice: 3"). | Write `A06/practice.md` from `practice_examiner_draft.md` (8 items, every number verified here); add each sum to `numericals.md` and `tools/check/fx_forward_contracts.py`. |
| 2 | **High** | N042–N044 · numericals | Plan "Numericals: 4 (… extension)" asks an extension sum; none exists. FEDAI 6.3 "rebooked only at the current rate" is never a trap; learners still pick "rollover at the old rate". Q7 not answerable. | After N044 add **N044a** "Press along. Last chapter's importer, fifty thousand dollars at eighty-six point two zero. On maturity, he asks for one more month." · **N044b** "Step one: cancel at T-T buying, eighty-five point seven three one four. He pays twenty-three thousand, four hundred thirty, as before." · **N044c** "Step two: a new one-month contract, at today's forward T-T selling. Eighty-five point eight two, plus point two zero, times one point zero zero one two." (keys `85.82 + 0.20 = × 1.0012 =`; H: 6 s) · **N044d** "Eighty-six point one two three two. Not his old eighty-six point two zero. A rollover is always at the current rate." (trap card "rollover at the old rate 86.20 ✗ · current rate 86.1232 ✓" [F5]). Add as numericals row 5. |
| 3 | Medium | N004 vs N025–N026, card N004 | N004: "her buyer pays **a month** early"; the card says "due in 2 months", N025 "two months early", the sum uses 2-month points. "Three months ago … due in 2 months" also makes a 5-month contract. A05 N067's trailer said "a month early". | N004: "Picture an exporter in Ludhiana. A month ago, she sold the bank a lakh of dollars, three months forward, at eighty-six point zero five." · **N004a** "Now her buyer pays already. Two months early." Card: "forward sale to bank · booked 1 month ago for 3 months · due in 2 months". |
| 4 | Medium | N028, N034 | Early delivery taught only as a swap **cost** (exporter, premium). FEDAI 6.2 "recover / pay swap difference" and 6.5(ii) (swap gain paid per bank policy) are untaught; a discount market, or an importer taking early delivery at a premium, gives a **gain**. Q4 partly, Q8 not answerable. | After N034 add **N034a** "And the swap can earn, too. If the dollar is at a discount, buying forward is cheaper than selling spot." · **N034b** "Then the bank pays her the swap gain. The same holds when an importer takes his dollars early at a premium." Card: "swap cost → customer pays · swap gain → customer receives" [F2, F3]. |
| 5 | Medium | N043 | "A cancelled rupee forex contract can no longer be rebooked": misses "with any bank" and "cancelled after 10 Oct 2026" (RBI25 para 2(a)). The exam twist is "rebook with another bank". Q9 partly. | N043: "But on the tenth of October twenty twenty-six, R-B-I changed the game. A rupee forex contract cancelled after that can't be rebooked, with any bank." Card: "no rebooking with any AD (contracts cancelled from 10 Oct 2026)". |
| 6 | Medium | N054 | "Swap cost, if any, **goes to** the customer" can be heard as "is paid to the customer". FEDAI 6.4(iv)(b): recovered **from** the customer under advice. | N054: "It cancels the contract itself, within three working days after maturity. Any swap cost is recovered from him, with an advice." |
| 7 | Medium | chapter 2 | Fact sheet F13 (FEDAI 2.2(c), early realisation of an export bill) is untaught, though A05's sheet (row 19) defers its detail to A06. Bill cases (crystallisation, EBR) recur in A-FXNUM. | After N039 add **N039a** "One cousin of early delivery. An export bill paid early: the bank refunds interest for the unexpired days." · **N039b** "And it settles a notional swap, cost or gain, exactly as for early delivery." Card: "early realisation of a bill: refund interest + notional swap [F13]". |
| 8 | Low | N065 | Homework never answered (A07 is Incoterms, built). Answer: TT selling `85.92 × 1.0012 =` 86.023104 → 86.0231; exporter **receives** `86.05 − 86.0231 = × 100000 =` ₹2,690.00. | Answer it in `practice.md` (P3 of the draft). |
| 9 | Low | N056 | The rate for automatic cancellation is not said (the TT rate of the day the bank cancels). | N056 end: "The difference is worked at the T-T rate on the day the bank cancels." |
| 10 | Low | N048 | FERR card says "some contracts"; F15 names them (users above USD 2 million buying foreign currency for a current-account exposure). A "who keeps it, where" MCQ is answerable; a "which contracts" one is not. | Card: "FERR: 20% of INR notional, cash with RBI · e.g. user > USD 2 m buying FC forward (C08)". |
| 11 | Low | N033 | F4: for an option-dated contract delivered early, interest runs only to the date to which the swap is done. | Optional card under N033: "option-dated contract: interest up to the swap date [F4]". |
| 12 | Low | header | Length ≈ 11.5 min (1,333 words at 140 wpm + 117 s holds), under the 12–15 band. | Fixes 2–7 add about 170 words and 12 s of holds (≈ 13 min). Re-count after. |

## Practice volume (Tier A, A-FXNUM 7/7, 3–4 forex items a paper; FP Dec 2025 Q40 on cancellation; forex case studies most cycles)
Not enough as written. The learner works one sum alone (N016) and answers six pause questions; three sums are worked
by the teacher; there is no extension sum, no swap-gain case, no before-maturity difference and no practice file. With
fixes 1, 2 and 4 the video carries an extension sum and the swap-gain rule, and `practice.md` adds 8 items across every
question kind in the blueprint (calculate ×4, who, when, exception, apply). Module mocks should add one combined case
(early delivery of an option-dated contract with interest on outlay) and one importer early-delivery case (Q8 form).

## What the plan asks that the script lacks
- "Numericals: 4 (cancellation of purchase, of sale, early delivery, extension)" → extension missing (finding 2).
- "Practice: 3" → no `practice.md` (finding 1).
- "Map nodes: Rates: cancellation, early delivery, extension": present (plus "no instructions").
- v3 additions (1) no rebooking / rollover on maturity, (2) USD 5 million trap, (3) FERR one line: all present;
  (1) needs "with any AD" (finding 5).
- "Opening: buyer pays one month early": the script's own figures say two months (finding 3).
- Plan "facts to verify: the non-deliverable INR derivative bar (Apr 2026)" and PR 2026-2027/1305: not in the fact
  sheet or script; for the expert reviewer, not an exam gap here.

Counts: **High 2 · Medium 5 · Low 5.**
