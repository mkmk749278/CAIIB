# A12 c2 · Independent re-review (fresh context)

- **Reviewer**: fresh-context agent, 2026-11-22. Read: `script_class.md` c2 (N001–N076 with cue sheet),
  `numericals.md` c2, `practice.md` c2 (P1–P12), the three c1 reviews (expert, examiner, beginner), `review_ack_c1.md`,
  fact sheet `research/bfm/facts/A5.11-A5.3_A12.md` (rows 1–22 and Leads), `research/bfm/sources/fedai_rules_cutoff.md`,
  A01 `script_class.md` N028–N034 (the rate ladder), A05 `numericals.md` (usance bill buying method),
  `course/bfm/greetings.md`. Format model: `A11b/review_c2.md`.
- **Checker**: `python3 tools/check/export_bills.py` → 37 lines, **all OK** both ways (Q1–Q5, V, early, P3, P5, P6,
  P11 incl. dates).
- **Primary text**: FEDAI Rules 10th ed. (updated 20 Aug 2026), fetched 2026-11-22 from fedai.org.in. Rule 2.1(a)
  (bill buying or contracted rate; transit / usance interest upfront), 2.1(b)(i)–(v) (own policy, transparently
  available, TT selling, interest "on the date of crystallisation for the overdue period… and thereafter till the date
  of recovery"), 2.1(c) (TT buying or contracted rate), 2.1(d) (dishonour: bill + foreign charges at TT selling),
  2.2(b)–(c), 2.3(a)–(b) (fixed due date → NTP not applicable; FC sight bills not under LC 25 days; no change of due
  date after discount) all read: every rule the c2 lines state matches. CF 2(1)(xxvii), 266–270 not re-read (no c2
  change rests on new CF text; the c1 expert checked them).
- **Dates (by hand and checker)**: Mon 1 Mar 2027 + 85 = **Tue 25 May** ✓; + 30 = **Thu 24 Jun** ✓; + 20 = **Wed 14
  Jul** ✓. P11: Fri 9 Apr 2027 + 115 = **Mon 2 Aug** ✓; + 30 = **Wed 1 Sep** ✓; + 20 = **Tue 21 Sep** ✓.
- **Sums re-done by hand** (every changed one): 85.5 + 0.4375 = 85.9375; × 0.9984 = 85.9375 − 0.1375 = **85.8000** ✓ ·
  100000 × 85.8 = 8580000 ✓ · 8580000 × 7.3 % = 626340; × 85 = 53238900; ÷ 365 = **145860** ✓ (145860 × 365 back
  checks) · 8580000 − 145860 = 8434140 ✓ · V: 60000 × 85.5 = 5130000; × 7.3 % = 374490; × 25 = 9362250; ÷ 365 = 25650;
  5130000 − 25650 = 5104350 ✓ · early 626340 × 10 ÷ 365 = 17160 ✓ · 100000 × 86.4 = 8640000; gap 60000 ✓ · 8580000 ×
  10.95 % = 939510; × 30 = 28185300; ÷ 365 = **77220** ✓ · 8640000 + 77220 = 8717220 ✓ · 8640000 × 10.95 % = 946080;
  × 20 = 18921600; ÷ 365 = 51840 ✓ · 8640000 − 8595000 = 45000; + 51840 = 96840 ✓ · P3 30852 ✓ · P5 8627220 ✓ · P6
  8600, distractors 10320 (30 days) and 125560 (a year) ✓ · P11 6848000; 157504; 6690496; 6896000; 61632; 6957632;
  6860000; 41376; 77376 ✓. Largest entry 8 digits; all fit a 12-digit basic calculator. Key strings on screen match
  the spoken numbers.
- **Length**: **1,708 spoken words** (tags removed) + **182 s of cued holds** ≈ **15.2 min at 140 wpm** (14.8 at 145).
  By chapter (140 wpm + holds): warm-up 1.1 · ch1 2.4 · ch2 3.0 · ch3 4.8 · ch4 1.9 · close 2.0. Every chapter under
  6 min. Just over the 15:00 line at 140 wpm (Low 1).
- **Sentences**: none over 25 words (longest N038 and N051a, 22). No AI-voice disclosure, no "checked against the
  source", no "Sir". One [seriously] "one thing" line per chapter; [warmly] on greeting and goodbye; greeting and
  goodbye match the A12 row of `greetings.md`.
- **Method moves**: recall opener in warm-up (A11b) and at the head of ch2, ch3, ch4 ✓; wrong beliefs named and broken
  (N010a "bank bought the risk", N028 sight bill 0 days, N041 bill buying again, N038 "FEDAI says 30th day") ✓; pause
  check per chapter, easy then twist ✓; faded variant now in steps with 8 s / 10 s holds ✓; opening question closed in
  N047 ✓; map from memory, 4 s per node ✓; homework; preview ✓.

## Verdict: ADOPT WITH FIXES

High 1 · Medium 1 · Low 7. Every c1 High and Medium is fixed in substance and every fact, date and sum checks out.
But the fix for expert M3 / beginner M8 (N065–N066) dropped the word "sight" from the reviewer's suggested wording,
and the general claim it now makes is false for the very rate this lesson built (High 1). The fix for examiner M2
(N015) voices "eighty-five days" a chapter before it is explained (Medium 1). Both are one-line fixes, given below.
Apply them and the Lows; no further review is needed if the fixes are applied as written.

## c1 findings: fixed?
| c1 finding | Fixed? | Note |
|---|---|---|
| Beginner H1: "her dollar debt" from nowhere | Yes | N010a breaks the "bank bought the risk" belief; N035 repeats "she owes the bank those dollars"; F21 sourced (CF 2(1)(xxviii), FEDAI 2.1(b)(i)) |
| Expert M1 / examiner M1 / beginner M6: what happens on crystallisation day | Yes | N044–N046a: interest for the overdue period recovered that day, ₹86,40,000 stays owed; N050 interest on the rupee debt. Matches FEDAI 2.1(b)(iii)–(iv) word for word. "Her bill stands at" in N046a is loose (Low 4) |
| Expert M2: "many banks still use 30 days" | Yes | Gone from N038 and the fact sheet; Leads says no claim |
| Expert M3 / beginner M8: rate-higher question | **No: new error** | N065–N066 now ask "same day, bill buying or TT selling" without "sight"; the lesson's own usance bill buying rate (85.80) is above that day's TT selling. High 1 |
| Examiner M2: bill buying rate not rebuilt | Yes | N015–N015b, Q1, checker, F22; method matches A05 (premium for completed months, then margin). Voices 85 days before ch2 explains it (Medium 1) |
| Examiner M3: margin on non-LC bills | Yes | N017a + card, labelled bank practice; Leads row |
| Examiner M4: old rule's demand form and holiday | Yes | N038–N038a + trap card; taught as history only, "the case tells you the day" |
| Examiner M5: no linked practice | Yes | P11 five parts, all in checker; P12 collection bill |
| Beginner M1: "notional" | Yes | N023a "the bank assumes a date" |
| Beginner M2: "swap cost" | Yes | on the N030 card with its meaning; voice says the refund only (sound) |
| Beginner M3: N041 muddled | Yes | "The dollars never came, and she owes them. So the bank sells her the dollars." matches the red OUT arrow |
| Beginner M4: "she got 85.80" | Yes | N043 "The bank paid out…" (wording nit: Low 5) |
| Beginner M5: interest base changes | Yes | N045 "till today the advance was…"; N050 "her debt is now in rupees, so…" |
| Beginner M7: demand bill / grace card-only | Yes | N034a voiced, matches CF 2(1)(xxvii) |
| Beginner M9: amounts misheard | Yes | rupee amounts in full throughout |
| Beginner M10: holds too short; N026 crowded | Yes | N026 / N026a / N027 in steps; multi-step holds 10 s (header still says 12 s: Low 2) |
| Not done: `%` then `=`; A05 recall; F12 / F18 | Sound | course convention since A11b; N015 rebuilds A05's rate; F12 / F18 on the PDF traps page |

## Findings
| # | Severity | Line | Problem | Exact fix |
|---|---|---|---|---|
| 1 | **High** | N065–N066 (card) | The question "On the same day, which rate is higher: bill buying, or T-T selling?" and the card "bill buying < TT buying < TT selling (same day)" hold only for **ready (sight) rates** (A01's ladder). A **usance** bill buying rate adds the forward premium for completed months, so it can sit above the same day's TT buying and even TT selling. This lesson proves it: on 1 Mar the spot bid is ₹85.50, so TT selling that day is about ₹85.6, yet her usance bill buying rate is ₹85.80 (N015b). The voiced answer "T-T selling" is false for the only bill buying rate the learner has just built, and the card teaches a false general order. The c1 expert's suggested wording said "the sight-bill buying rate"; c2 dropped "sight". | N065: "Quick mix. One. On the same day, which rate is higher: the sight bill buying rate, or T-T selling?" N066 unchanged ("T-T selling: it's the bank's selling side. Two. …"). Card: "same day, ready rates: sight bill buying < TT buying < TT selling ✓ · a usance bill buying rate adds the premium (N015), so don't rank it". |
| 2 | **Medium** | N015 | New in c2. "Her bill runs eighty-five days, so two completed months of premium." The 85 days (60 + NTP 25) are only explained in N022–N023, a chapter later. The beginner hears an unexplained number, in a line that already holds "eighty-five fifty" (the rate), so "eighty-five" is said twice in one breath with two meanings (c1 beginner L3 flagged the same on the card). | N015: "Let's build it, as we did in A-zero-five. Spot buying, eighty-five fifty. The bill's sixty days, plus twenty-five in transit: eighty-five days. So two completed months of premium." (longest sentence 11 words; +8 words in all). Keep N023 as the full explanation; its card can add "(as used in N015)". |
| 3 | Low | header · Length | 1,708 words + 182 s ≈ 15.2 min at 140 wpm, a little over the 12–15 band. | Apply the header's first cut now (N051a, ~9 s; keep its card note on N051's cue as a silent N line) → ≈ 15.0; if the measured take still runs over, cut N017a's second sentence next as planned. |
| 4 | Low | header · Holds | Header says multi-step "work it out" sums hold 12 s; every such line (N025, N026a, N045, N050a) holds 10 s, as the ack says. | Header: "multi-step 'work it out' sums 10 s". |
| 5 | Low | N046a | "her bill stands at… in all": "bill" here is the dollar document; the learner just heard the interest is paid that day and the debt stays. | "So that day, her total dues are eighty-seven lakh seventeen thousand two hundred twenty rupees." |
| 6 | Low | N043 | "The bank paid out eighty-five lakh eighty thousand." She was credited ₹84,34,140 (N025b); ₹85,80,000 was the advance. | "The bank's advance was eighty-five lakh eighty thousand." |
| 7 | Low | numericals.md Q2, Early | Line ids cite N025c and N030a, which do not exist (script has N025b, N030). | Q2 "(N021–N025b)"; Early payment "(N029–N030)". |
| 8 | Low | N027 cue | Key string "5130000 × 7.3 % × 25 ÷ 365 = 25650" drops the "=" after % and the intermediates that N025a and numericals show. | "5130000 × 7.3 % = 374490 × 25 = 9362250 ÷ 365 = 25650 · 5130000 − 25650 = 5104350". |
| 9 | Low | practice.md | Answer key leans to (b): P1, P6, P7, P8, P10 are (b) (5 of 9 MCQs). | Swap options so (b) ≤ 3: e.g. P7 put "it is not paid on the due date" at (d) and move (d) to (b); P10 put the correct answer at (a) and "keeps all the interest" at (b). |
