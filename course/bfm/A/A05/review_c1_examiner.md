# A05 c1 · Independent review: EXAMINER (fresh context, 2026-11-21)

Script: `course/bfm/A/A05/script_class.md` c1 (forward rates: value dates, premium and discount, option period, usance
bill buying). Read with: plans_A §A05, facts `A1.5-A1.7_A05.md`, `numericals.md`, syllabus A1.5–A1.7, coverage.csv
rows A1.5–A1.7, items_tagged / fullpaper_tagged (A-FXNUM), importance_map, depth/A.md (A1.5, A1.6, A1.7),
lesson_spec, A01, A03 and A04 class scripts. Every number below re-computed with Python `Decimal` and by hand on
8-function key presses; every weekday checked with Python `datetime`.

## Verdict: **ADOPT WITH FIXES**

Every number and date in the script is right: Thu 3 Dec 2026 → spot Mon 7 Dec → 1-month forward Thu 7 Jan 2027;
2-month forward 85.96 / 86.01; parity 86.0232386 → 86.0232 (1.9776% a year ≈ the 2% gap); importer 86.113212 →
86.1132, ₹43,05,660.00 (trap first date 85.9230); exporter 85.891232 → 85.8912 (trap 86.071088); usance 85.83106 →
85.8311, ₹17,16,622.00 (trap 86.0108). The four bank's-favour rules (N050 card), the known/sudden holiday rule, the
25-day NTP, "fixed due date → no NTP" and the OTC-vs-futures card are taught cleanly. The gaps are **range**:
(1) the annualised premium is asserted ("about two percent", N031) but its formula is never voiced, and its reverse
(premium given as % a year → forward rate), the form of the Dec 2025 full-paper Q33, is not taught; (2) the
"premium = interest gap" idea is taught as absolute, while the Dec 2025 paper asked twice (Q72, Q91) *when* it holds
exactly (freely convertible currencies); (3) the discount half of the usance rounding rule (round **up**) is not
voiced; (4) no `practice.md`, and no no-options item. The script is short (1,413 spoken words ≈ 9.4 min + 113 s of
holds ≈ 11.3 min against the header's ~14), so the fixes fit (≈ +1.5–2 min).

Evidence (A-FXNUM, Tier A, 7/7 cycles, 32 items; 3–4 forex sums a paper, OB Dec 2025): "Numerical – Forex – Forward
Rate" Dec 2025; full paper Dec 2025 Q33 (importer USD 100,000 due in 60 days, spot 83.50, "60-day forward p[remium]
…"), Q72 ("Forward rates fully reflect interest rate differentials only in …"), Q91 ("In case of free currencies,
forward premium or discount is exactly equal to the difference …"); settlement-date items Jun 2023 and Jul 2024
("Forex market timing, working days"); "Export discounting" Jun 2025. Leads (inbox, not sources): forward rate by
interest parity and "dollar-rupee forward margin, premium vs discount" in public-class analyses.

Answerable from A05 (+ A01/A03/A04): **7 of 10 fully, 1 partly, 2 not.** (After fixes 2–5: 10 of 10.)

## Ten exam-style questions (basic 8-function, 12-digit calculator)

| # | Question (key, key presses) | Traps in the options | Answerable? Line |
|---|---|---|---|
| 1 | A USD/INR deal is struck on Wednesday, 23 Dec 2026. Friday 25 Dec is a holiday. The spot value date is: **Monday, 28 Dec 2026** (Thu 24 = day 1; Fri holiday, Sat, Sun skipped; Mon = day 2) | Fri 25 Dec (holiday counted) · Sat 26 Dec (Saturday counted) · Tue 29 Dec (counted from the day after spot) | Yes: N008–N010 (counting working days); holidays inside the count are implied, not said (finding 6) |
| 2 | An export bill is drawn "payable 90 days from the date of shipment". When the bank buys it, the transit period added is: **none; the due date is fixed and known** | 25 days (NTP for FC bills) · 20 days (rupee bills) · 120 days (UN-guideline countries) | Yes: N058 |
| 3 | No options. Deal Thursday 12 Nov 2026; one-month forward. The maturity date falls on Wed 16 Dec, a holiday declared in October. Delivery date? **Tuesday, 15 Dec 2026** (spot Mon 16 Nov → +1 month = Wed 16 Dec → known holiday → preceding working day) | Thu 17 Dec (sudden-holiday rule) · Sat 12 Dec (counted from the deal date) · Mon 14 Dec (from deal date, then next working day) | Yes: N011–N013 |
| 4 | Spot USD/INR 85.60 / 85.62; 3-month points 0.30 / 0.26. The 3-month forward is: **85.30 / 85.36** (`85.60 − 0.30 =`; `85.62 − 0.26 =`) | 85.90 / 85.88 (added: bid above ask) · 85.34 / 85.32 (subtracted crosswise) · 85.30 / 85.32 | Yes: N022–N023, N032–N033 (no discount sum is worked, but the rule is clear) |
| 5 | An importer owes USD 1,00,000 due in 2 months. Spot 83.50; the 2-month forward premium is 2.4% a year (months basis). Rupee cost at the forward rate, before margin? **₹83,83,400** (`2.4 ÷ 12 × 2 =` 0.4; `83.50 × 1.004 =` 83.834; `× 100000 =`) | ₹85,50,400 (2.4% not cut to 2 months) · ₹83,16,600 (premium subtracted) · ₹83,66,700 (one month only) | **No**: % a year → forward rate never taught; N031 states "about two percent" with no method (FP Q33 form) |
| 6 | Spot USD/INR 85.00. Rupee interest 7%, dollar interest 5% a year. 6-month forward by interest parity, 4 decimals? **85.8293** (`85 × 1.035 ÷ 1.025 =` 85.829268) | 85.8500 (spot × (1 + 2% × ½), the shortcut) · 84.1787 (rates inverted) · 86.6190 (full-year rates used) | Yes: N029–N030 |
| 7 | Forward premium or discount is exactly equal to the interest-rate differential only when: **the currencies are freely convertible (no capital controls)** | when the rupee is expected to fall · when markets are volatile · for every pair of currencies | **No**: N027–N031 teach the link as absolute (FP Q72, Q91) |
| 8 | Spot 85.60 / 85.62; points 1m 0.20 / 0.16, 2m 0.38 / 0.33 (discount). The bank sells USD to an importer, delivery option over the second month; TT selling margin 0.12%. Rate? **85.5626** (sale + discount → first date, 1m: `85.62 − 0.16 =` 85.46; `× 1.0012 =` 85.562552) | 85.3923 (last date: the customer's favour) · 85.5025 (bid side) · 85.8829 (discount added) | Yes: N050 card (sale + discount → first) with A03 N012 margins; no worked sale-at-discount (the homework N066 has no answer anywhere) |
| 9 | No options. Export bill USD 10,000, 90 days sight, NTP 25 days. Spot bid 85.60; discount points 3m 0.54 / 0.50, 4m 0.72 / 0.67; bill buying margin 0.15%. Rupees paid (before interest)? **₹8,47,527.00** (115 days, discount → round **up** to 4 months: `85.60 − 0.72 =` 84.88; `× 0.9985 =` 84.75268 → 84.7527; `× 10000 =`) | ₹8,49,324.00 (rounded down to 3 months) · ₹8,48,800.00 (no margin) · ₹8,48,226.00 (ask-side points) | **Partly**: N055 teaches only "premium → round down"; N059 "round in the bank's favour" leaves the discount case to the learner |
| 10 | Which is **not** a feature of USD/INR currency futures in India? **amount and delivery date customised for the client** | traded on a recognised exchange · daily mark-to-market margins · clearing corporation guarantees settlement | Yes: N014–N015 |

## Findings

| # | Sev | Line | Finding | Exact fix (ready words; spoken sentences ≤ 25 words) |
|---|---|---|---|---|
| 1 | **High** | folder | No `practice.md` (lesson spec: 5–8 own items, MCQ and keyed, one-line reasons; plan: "Practice: 3"). | Write `A05/practice.md` from `practice_examiner_draft.md` (8 items, every key verified here); add each sum to `numericals.md` and `tools/check/fx_forwards.py`. |
| 2 | **High** | N031 · numericals row 8 | The annualised premium is stated as "about two percent a year" with no formula; its reverse (premium in % a year → forward rate), the FP Dec 2025 Q33 form, is never taught. Row 8 is "practice only" and not voiced. Q5 not answerable. | After N031 add: **N031a** "How do you get that percent? Forward minus spot, divided by spot. Then times twelve over the months, times a hundred." (card "annual % = (F − S) ÷ S × 12/months × 100" [F11]) · **N031b** "Eighty-six point zero two three two, minus eighty-five point six. Divided by eighty-five point six, times four, times a hundred. One point nine eight percent." (keys `86.0232 − 85.60 = ÷ 85.60 × 4 × 100 =` → 1.9776; H: 6 s) · **N031c** "Exams also run it backwards. Premium two point four percent a year, two months. Two point four, divided by twelve, times two." · **N031d** "Point four percent. So spot eighty-three point five, times one point zero zero four. Eighty-three point eight three four." (card "No options" · keys `83.50 × 1.004 =`; trap "× 1.024 = 85.504 ✗: not cut to 2 months"). |
| 3 | Medium | N027–N031 | "The premium comes from interest rates" is taught as always true. FP Q72 and Q91 test the condition: it holds exactly only for freely convertible currencies. For the rupee, demand and supply of forward cover also move the premium. Plan v3 addition (2) also asks a callback to C01. | After N031 add **N031e** "One condition. The premium equals the interest gap exactly only for freely convertible currencies. For the rupee, exporters' and importers' demand also moves it." · **N031f** "In lesson C-zero-one, we'll see how dealers trade on that gap." Trap card: "premium = interest gap exactly → only for free currencies". |
| 4 | Medium | N055, N059 | Usance rounding is taught for a premium only (round down). F14's other half, "discount → round **up**", is never said; Q9 is only partly answerable, and the trap list names part-month rounding direction. | After N055 add **N055a** "At a discount, it's the other way. Round up to the next month. A bigger discount gives a lower rate, again in the bank's favour." Card: "bank buys · premium → round down · discount → round up" [F14] ("exam convention"). |
| 5 | Medium | N066 · whole script | No no-options item is marked, though several no-options forex sums come each cycle (importance_map); the homework (sale at a discount, N066) is never answered. | Mark N031c–d (finding 2) "No options · 4 decimals" on screen. Answer the homework in `practice.md` (P7) and in A06's warm-up: "Sale at a discount: the first date. Eighty-four point nine one one eight, if you used our points." (match whichever points A06 states). |
| 6 | Low | N010 | Spot skips holidays as well as weekends; only the weekend is shown (Q1). | N010 end: "Friday is day one, the weekend is skipped, Monday is day two. A holiday in between is skipped the same way." |
| 7 | Low | N015 | Futures card lacks the start year (FP Dec 2025 Q93, C-DERIV: "currency futures in India commenced in …"); lot size USD 1,000 is marked "re-open at the freeze" in the fact sheet. | Card: "future: exchange (since 2008) · USD 1,000 lots · daily margin · clearing guarantee". Re-check the lot size on the NSE contract page at the freeze. |
| 8 | Low | coverage.csv A1.6 | Script teaches FEDAI 5.2 (value dates, holidays, option period) and 2.3 (NTP), but row A1.6 lists A01;A03;A06;A21, not A05. | Add A05 to row A1.6 videos (Module A's own row). |
| 9 | Low | header | Length ≈ 11.3 min as written (1,413 words at 150 wpm + 113 s holds), not ~14. | After fixes 2–4 (≈ 160 words + 12 s), re-count; target 12–15 min. |
| 10 | Low | N024 | The quote card shows 1m and 3m points that the lesson never uses, except for the trap (N047, numericals row 7). Fine for a trap, but N045's "same points" relies on the learner reading the 3m figures off screen. | In N045 say "same points as before; the card stays up" and keep the full quote card on screen through N047. |

## Practice volume (Tier A, A-FXNUM 7/7, 3–4 forex items a paper; forward-specific recalls in Dec 2025 ×4, settlement dates Jun 2023 and Jul 2024)
Not enough as written. The learner works one sum alone (N045) and makes three decisions (N009, N041, N054); five
sums are worked by the teacher; there is no discount sum worked, no annualised-premium sum and no practice file.
With fixes 2–5 the video carries two more own-work sums (annualised premium, % a year → forward) and the discount
rounding rule, and `practice.md` adds 8 items covering every question kind in the plan (define, compare, calculate,
exception, apply). That is enough for a lesson. Module mocks should add one 60-day/90-day forward case in the FP Q33
form (premium % a year, rupee outflow) and one combined case (value date + option period + margin).

## What the plan asks that the script lacks
- "Practice: 3" → no `practice.md` (finding 1).
- v3 addition (2): "callback to the covered-interest-arbitrage sum taught in C01" → absent (finding 3).
- "Traps: part-month rounding direction" → only the premium half voiced (finding 4).
- Numericals "forward purchase, forward sale, option period, usance": present (N025 two-way, N041–N047, N052–N057);
  no plain fixed-date purchase, which the option and usance sums cover in substance. No change asked.
- Opening "Pay now, wait, or book forward?": the script offers two choices (N004); acceptable.

Counts: **High 2 · Medium 3 · Low 5.**
