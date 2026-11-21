# A04 c1 · Independent review: EXAMINER (fresh context, 2026-11-21)

Script: `course/bfm/A/A04/script_class.md` c1 (drill, cross rates and the chain rule). Read with: plans_A §A04, facts
`A1.3-A1.7_A04.md`, `numericals.md`, syllabus A1.3/A1.7, coverage.csv rows A1.3 and A1.7, items_tagged /
fullpaper_tagged (A-FXNUM), importance_map, depth/A.md (A1.3, A1.7), lesson_spec, A01 and A03 class scripts. All
numbers below re-computed with Python `Decimal` and by hand on 8-function key presses.

## Verdict: **ADOPT WITH FIXES**

Every number in the script is right (92.8760 / 92.9405, trap 92.8977; 108.2840 / 108.3949; 57.2193 / 57.2709 per 100,
trap 57.2575; chain 108.6649; GBP 4,601.30; ₹37,15,040.00; indirect 1.1682). The two cross rules, like-with-like,
crossing the sides and the bid-below-ask check are taught cleanly. The gaps are **range, not errors**: the lesson
practises only the two textbook layouts, so the exam's other forms (two-way direct→indirect, USD as quote in both,
backing out a leg, a chain with a link given the other way or per 100, the bank-sells side, the cross spread) are
not answerable. The plan's chapter 4 (exam case, 3 questions), its second chain-rule sum, a no-options item and
`practice.md` are missing. The script is also short: about 1,105 spoken words + 116 s of holds ≈ 10–10.5 min against
the header's 12–13; the fixes below fit into that room (about +2.5 min).

Evidence that the gaps matter (A-FXNUM, Tier A, 7/7 cycles): chain rule recalled Jun 2023, Dec 2023, Dec 2024; cross
rates Jun 2026; Dec 2025 full paper Q2 "cross currency bid rate". Leads only (inbox, not sources): a recalled Jul
2024 item "USD/INR from EUR quotes" and a Dec 2025 item "derive USD/INR and EUR/INR from EUR/USD" (both = backing out
a leg, Q7 below).

Answerable from A04 (+ A01/A03): **4 of 10 fully, 2 partly, 4 not.** (After fixes 1–7: 10 of 10.)

## Ten exam-style questions (basic 8-function, 12-digit calculator)

| # | Question (key, key presses) | Traps in the options | Answerable? Line |
|---|---|---|---|
| 1 | The rate between two currencies worked out through a third currency is called: **cross rate** | direct rate · chain rate · arbitrage rate | Yes: N011 (card) |
| 2 | USD/INR (direct) 85.60 / 85.62. Express it as an indirect two-way quote, USD per ₹100. **1.1680 / 1.1682** (`100 ÷ 85.62 =` 1.16795; `100 ÷ 85.60 =` 1.16822) | 1.1682 / 1.1680 (not swapped: bid above ask) · 0.8560 / 0.8562 (moved the decimal) · 1.1682 / 1.1684 | **No**: N009 converts one figure only; bid/ask swap never taught |
| 3 | Under indirect quotation the bank's maxim is: **buy high, sell low** | buy low, sell high (direct-quote maxim) · buy and sell at the mid-rate · buy at the bid of the base | **No**: not in A01 or A04 |
| 4 | EUR/USD 1.0712 / 1.0718; USD/INR 85.42 / 85.45. EUR/INR two-way? **91.5019 / 91.5853** (`1.0712 × 85.42 =` 91.501904; `1.0718 × 85.45 =` 91.58531) | 91.5340 / 91.5532 (bid × ask, ask × bid) · 91.5019 / 91.5340 · 79.7… (divided) | Yes: N016–N021 |
| 5 | No options. USD/JPY 151.20 / 151.35; USD/INR 85.42 / 85.45. JPY/INR ask, per 100 yen, to 4 decimals? **56.5146** (`85.45 ÷ 151.20 × 100 =` 56.514550) | 56.4585 (ask ÷ ask) · 56.4947 (bid ÷ bid) · 0.5651 (no ×100) | Yes: N024–N030 |
| 6 | EUR/USD 1.0850 / 1.0855; GBP/USD 1.2650 / 1.2660. EUR/GBP two-way? **0.8570 / 0.8581** (`1.085 ÷ 1.266 =` 0.857030; `1.0855 ÷ 1.265 =` 0.858103) | 0.8577 (bid ÷ bid) · 1.3736 (multiplied) · 1.1668 / 1.1653 (GBP/EUR, inverted) | Partly: N024 says "same side" once, but the rule (N025 card) is "USD the base in both"; USD as quote in both is never shown |
| 7 | No options. EUR/INR 92.8760 / 92.9405; EUR/USD 1.0850 / 1.0855. USD/INR bid and ask? **85.5606 / 85.6594** (`92.876 ÷ 1.0855 =` 85.560571; `92.9405 ÷ 1.085 =` 85.659447) | 85.6000 / 85.6200 (bid ÷ bid, ask ÷ ask: "gets back" the original quote, a strong trap) · 100.7705 (multiplied) | **No**: backing out a leg is never taught |
| 8 | Chain rule. ? INR = 1 GBP, if 1 GBP = 1.17 EUR; 0.9217 EUR = 1 USD; 1 USD = 149.50 JPY; 100 JPY = 57.22 INR. **₹108.5889** (`1.17 × 149.5 × 57.22 ÷ 0.9217 ÷ 100 =` 108.58887) | 92.2496 (multiplied by 0.9217) · 10,858.89 (forgot ÷100) · 108.6649 (the lesson's own chain, recalled) | Partly: N037–N040 teach "multiply along" only; fact F10's "÷ left-hand numbers" never voiced; a link given the other way or per 100 breaks the taught method |
| 9 | An importer remits JPY 20,00,000. Cross JPY/INR 57.2193 / 57.2709 per 100 (before margin). Rupees debited? **₹11,45,418.00** (`57.2709 × 20000 =`) | ₹11,44,386.00 (bid) · ₹11,45,41,800 (no ÷100) · ₹11,44,902.00 (mid-rate) | Yes, with A01 (bank sells → higher rate) and A03 N052e (÷100); A04 itself shows only the bank-buys case (N044–N046) |
| 10 | EUR/USD 1.0850 / 1.0855; USD/INR 85.60 / 85.62. The percentage spread of the EUR/INR cross (spread ÷ bid) is closest to: **0.069%** (0.0645 ÷ 92.876 × 100 = 0.06945) | 0.0645% (rupee spread read as percent) · 0.046% (EUR/USD leg only) · 0.023% (USD/INR leg only) | **No**: spread of a cross never mentioned |

## Findings

| # | Sev | Line | Finding | Exact fix (ready words; spoken sentences ≤ 25 words) |
|---|---|---|---|---|
| 1 | **High** | folder | No `practice.md` (lesson spec: 5–8 own items, MCQ and keyed, answers with one-line reasons; plan: "3 (one no-options)"). | Write `A04/practice.md` from `practice_examiner_draft.md` (8 items, all keys verified here); add each sum to `numericals.md` and to `tools/check/fx_cross_rates.py`. |
| 2 | **High** | N044–N046 (Close) | Plan chapter 4 "Exam case (3 questions)" is reduced to one question, bank-buys side only; no no-options item; no backing-out of a leg (Q7, the form two recall leads describe). | Rename "## Close" to "## Chapter 4 · Exam case" up to N046, then add: **N046a** "Now the opposite deal. A Coimbatore importer pays twenty lakh yen to Japan. The bank sells yen. Which side, and how many rupees? Pause." (cue: card "JPY 20,00,000 out · JPY/INR 57.2193 / 57.2709 per 100" · H: 15 s) · **N046b** "The ask, fifty-seven point two seven zero nine per hundred. Times twenty thousand. Eleven lakh, forty-five thousand, four hundred eighteen rupees." (cue: keys `57.2709 × 20000 =`; trap card "bid → ₹11,44,386 ✗ · no ÷100 → ₹11,45,41,800 ✗") · **N046c** "Last one, with no options. Work backwards. Euro-rupee is ninety-two point eight seven six zero, ninety-two point nine four zero five." · **N046d** "Euro-dollar is one point zero eight five zero, one point zero eight five five. Find dollar-rupee, bid and ask. Pause." (H: 20 s) · **N046e** "The euro is the base in both. So divide, and cross the sides. Bid: ninety-two point eight seven six, divided by one point zero eight five five." · **N046f** "Eighty-five point five six zero six. Ask: ninety-two point nine four zero five, divided by one point zero eight five. Eighty-five point six five nine four." (cue boxes "USD/INR 85.5606 / 85.6594") · **N046g** "If you got exactly eighty-five point six zero, you divided bid by bid. It looks right. It's the trap." (trap card "92.876 ÷ 1.085 = 85.6000 ✗"). Add both sums to `numericals.md` and the checker. |
| 3 | **High** | N037–N043 | Plan asks 2 chain-rule sums; script has one chain + its reverse. The chain is taught only as "multiply along", which fails when a link is given the other way or per 100 (the classic IIBF chain layout "? INR = 1 GBP; …; 100 JPY = x INR"). Fact F10 has the full rule; it is not voiced. | After N040 add: **N040a** "Sometimes a ring comes the other way round, or per hundred. Then multiply the right-hand numbers, and divide by the left-hand numbers." (card "answer = product of right ÷ product of left" [F10]) · **N040b** "Your turn. One pound is one point one seven euro. Zero point nine two one seven euro is one dollar." · **N040c** "One dollar is one forty-nine point five yen. A hundred yen is fifty-seven point two two rupees. Rupees for one pound? Pause." (cue rings with left numbers 1 · 0.9217 · 1 · 100 circled; H: 20 s) · **N040d** "Right side: one point one seven, times one forty-nine point five, times fifty-seven point two two. Then divide by zero point nine two one seven, and by a hundred." (keys `1.17 × 149.5 × 57.22 ÷ 0.9217 ÷ 100 =`) · **N040e** "One hundred eight point five eight eight nine. If you multiplied by zero point nine two one seven, you got ninety-two. Too small. Check it." (box "₹108.5889 per GBP"; trap "92.2496 ✗"). Update N043: "link the rings, multiply the right side, divide by the left side." |
| 4 | Medium | N009 | Direct → indirect conversion is shown for one figure; a two-way conversion swaps the sides (indirect bid = 100 ÷ direct ask). Classic trap Q2. | Add **N009a** "With two sides, flip and swap. Indirect bid is a hundred divided by the direct ask. Indirect ask is a hundred divided by the direct bid." (cue: "85.60 / 85.62 → USD 1.1680 / 1.1682 per ₹100"; check: `100 ÷ 85.62 =` 1.16795, `100 ÷ 85.60 =` 1.16822). |
| 5 | Medium | N024–N025, N035, N048 | Rule 2 is stated as "USD the base in both"; the general rule is "USD on the **same side**" (also quote in both: EUR/USD with GBP/USD → EUR/GBP). Q6 not answerable. | N025 replace with: "When the dollar sits on the same side in both, divide. Here, it's the base in both. Rupees per dollar, divided by yen per dollar, gives rupees per yen." Card: "USD on the same side (base in both, or quote in both) → DIVIDE". Add after N030: **N030a** "Same side works on the right too. Euro-dollar and pound-dollar: the dollar is the quote in both. Divide, and cross the sides, for euro-pound." (cue "EUR/GBP bid 1.0850 ÷ 1.2660 = 0.8570 · ask 1.0855 ÷ 1.2650 = 0.8581"). In N035 and N048 say "dollar on the same side". |
| 6 | Medium | after N021 or N030a | Spread of a cross rate never mentioned (in this review's scope; also the reason Q7's leg comes out wider than the original). | Add **N021a** "Notice the spread. In percent, a cross rate's spread is about the two legs' spreads added together. So a cross is always dearer to deal in." (cue "EUR/USD 0.046% + USD/INR 0.023% ≈ EUR/INR 0.069%"; checked: 0.0461 + 0.0234 = 0.0695 vs 0.0694). |
| 7 | Medium | N041–N042 / numericals | No in-video item is said to be "no options" or keyed to 4 decimals, though several no-options numericals appear each cycle (importance_map). A03 set the rounding convention; A04 never repeats it for a cross. | In N045 add: "Round the cross to four decimals first, as in A-zero-three." Mark N046c–g (finding 2) as the no-options item on screen ("No options · 4 decimals"). |
| 8 | Low | N009 | Indirect-quote maxim "buy high, sell low" (Q3), a stock theory item, absent. | Add to N009a or a cue card: "So in an indirect quote, the bank buys high and sells low." |
| 9 | Low | numericals.md row 5 | Intermediate wrong: `500000 ÷ 108.6649 =` gives **4601.3018…**, not "4601.297…". The answer GBP 4,601.30 is right. | Change "→ 4601.297…" to "→ 4601.3018…". |
| 10 | Low | coverage.csv A1.3 | Script header claims A1.3 (quotes, cross rates), but the A1.3 row lists only A00 (depth/A.md already places direct/indirect and cross rates in A04). | Add A04 to row A1.3 videos (Module A's own row). |
| 11 | Low | header | Length: ≈ 10–10.5 min as written (1,105 words + 116 s holds), not 12–13. | After fixes 2–6, re-count; target 12–14 min. |
| 12 | Low | — | Recall leads mention a triangular-arbitrage check (direct GBP/INR vs GBP/USD × USD/INR). Out of plan; a lead only. | Optional practice item later (A04 practice or C01); no script change. |

## Practice volume (Tier A, A-FXNUM 7/7, 3–4 forex items per paper, cross rate/chain rule in 4 of 7 cycles)
Not enough as written: 6 sums, of which the learner does 2 alone (N022, N041), all in the two textbook layouts. With
fixes 2–5 the video carries 5 own-work sums (GBP/INR, second chain, reverse chain, yen import, back-out leg) plus 2
worked layouts more (EUR/GBP, two-way indirect), and `practice.md` adds 8 items: enough for a drill. Mock tests
should add one triangular-arbitrage check and one longer (4–5 link) chain.

Counts: **High 3 · Medium 4 · Low 5.**
