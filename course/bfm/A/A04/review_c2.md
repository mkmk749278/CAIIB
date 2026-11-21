# A04 c2 · Independent re-review (fresh context)

- **Reviewer**: fresh-context agent, 2026-11-21. Read: `script_class.md` c2, the three c1 reviews (expert, examiner,
  beginner), `review_ack_c1.md`, `numericals.md`, `practice.md`, fact sheet `research/bfm/facts/A1.3-A1.7_A04.md`,
  `course/spec/lesson_spec.md` (Standard style), `research/pedagogy/teaching_method.md`, A01 class script (what the
  learner already knows: "buys low, sells high", bid = bank buys), `greetings.md`, `coverage.csv` rows A1.3 / A1.7.
  Ran `tools/check/fx_cross_rates.py`: every line OK, two ways (28 checks, c2 additions and practice included).
- **Numbers recomputed independently (Python `Decimal`, 4 decimals half up, rupees to paise)**: EUR/INR 92.876 →
  92.8760, 92.94051 → 92.9405, trap bid×ask 92.8977; GBP/INR 108.2840 / 108.39492 → 108.3949; JPY/INR
  57.2192513 → 57.2193, 57.2709030 → 57.2709, traps bid÷bid 57.2575, ask÷ask 57.2326; indirect 1.16795 → 1.1680,
  1.16822 → 1.1682; EUR/GBP 0.857030 → 0.8570, 0.858103 → 0.8581; chain 1 108.66492 → 108.6649; reverse
  500000 ÷ 108.6649 = 4,601.3018 → GBP 4,601.30; chain 2 108.58887 → 108.5889, trap ×0.9217 92.2496; case
  ₹37,15,040.00; yen import ₹11,45,418.00 (bid ₹11,44,386.00, no ÷100 ₹11,45,41,800); back-out 85.560571 → 85.5606,
  85.659447 → 85.6594, trap 85.6000; spreads 0.0461% + 0.0234% = 0.0695% vs cross 0.0694% (≈ 0.069%, as said);
  backed-out spread 0.115% (wider, as the N046g note says). Practice: P2 55.8715 (a 55.8912, b 55.9423, d 130.2290);
  P3 56.7720 / 56.8488 (trap 56.8288); P4 1.1719 / 1.1723; P5 96.8281, CHF 2,581.90 (no ÷100 9,682.81); P6
  ₹23,23,512.50 (bid ₹23,21,900.00, mid ₹23,22,706.25); P7 0.8586 / 0.8596 (trap 0.8592). **All correct.** Every key
  sequence works left to right on an 8-function 12-digit calculator (longest display 57.2192513369, 12 digits).
- **Sentences**: none over 25 words (none over 20).
- **Length**: 1,762 spoken words (number-heavy) ≈ 11.4–12.6 min at 155–140 wpm, + 204 s of holds (3.4 min) + chapter
  beats ≈ **15–16 min**. Above the header's "13–14" and at or over the owner's 12–15 band (finding 2).

## Verdict: ADOPT WITH FIXES
High 0 · Medium 2 · Low 7. Every c1 High and Medium is fixed, and fixed well; every number is right. Two Mediums
are new: one line (N009b) that clashes with what A01 taught about buying low, and the length. Both are small,
word-ready fixes; after them the script is lockable without another full review.

## c1 findings: fixed?
| c1 finding | Fixed? | Note |
|---|---|---|
| Examiner H1: no `practice.md` | yes | 8 items, 6 kinds (define, calc MCQ, calc no-options ×3, convert, chain, apply, check); all keys in the checker and right |
| Examiner H2: exam case cut to one question | yes | Ch 4: euro export (bid), yen import (ask, ÷100), no-options back-out with the 85.6000 trap |
| Examiner H3 / Expert M3 / Beginner M9: chain only "multiply along" | yes | N040a card, second chain N040b–e, N042b–d twist, N043, N050 (see Low 3, 4) |
| Examiner M4: two-way direct → indirect | yes | N009a, N012c–d twist; but N009b adds a new confusion (finding 1) |
| Examiner M5 / Expert M1: rule two too narrow | yes | N025 card "base in both, or quote in both", N030b EUR/GBP, N035, N048 |
| Examiner M6: spread of a cross | yes | N021a, figures checked |
| Examiner M7: no no-options item, rounding unsaid | yes | N045 "four decimals first"; N046c label |
| Expert M2 / Beginner M6: bid-below-ask check misses the trap | yes | N030–N030a now voice both trap figures; the check fires |
| Beginner M1: warm-up | yes | N001a, backed by importance_map A-FXNUM |
| Beginner M2: "quote" overloaded | yes | "quote currency" from N006 on |
| Beginner M3 / M4: pause checks ch 1, ch 3 | yes | N012a–d, N042b–d, each with a twist |
| Beginner M5: why cross the sides | yes | N027–N027a fraction picture; N017 link |
| Beginner M7: reverse sum without reason | yes | N042 |
| Beginner M8: holds | yes | Holds now after "equals" (6–8 s); N041 20 s; N040c "Pause the video if you need" |
| Lows not done: Expert L4 (bank's-side reason), Expert L8 (direct since 2 Aug 1993), Beginner L10 (scope line), Examiner L12 (triangular arbitrage) | sound | L4 covered by the fraction picture; L8 rightly left out until checked in a primary text; L10 cosmetic; L12 belongs to C01 practice |

## New findings
| # | Sev | Line | Finding | Exact fix (ready words) |
|---|---|---|---|---|
| 1 | Medium | N009b (with N009a, N010) | N009a calls 1.1680 the "indirect bid"; N010 then says "the bid is where the bank buys". N009b says the bank "buys high… when it buys" without saying *buys what*. A01 (N011, N024) taught "buys low, sells high; bid = bank buys". A learner pairs "bank buys" with the bid 1.1680 and gets it backwards. The maxim is right only for the foreign currency: the bank buys dollars at 1.1682, the higher figure (that is the indirect ask, where it sells the base, the rupee). | N009b: "Careful. Here the rupee is the base. So the bank buys dollars at the higher figure, one point one six eight two. Buy high, sell low." Cue: N "indirect: bank buys USD at 1.1682, sells USD at 1.1680 → buy high, sell low (for the foreign currency)" [F2, F12]. |
| 2 | Medium | whole script; header | ≈ 15–16 min with holds, over the header's 13–14 and the top of the owner's 12–15 band (drills "about 10–14"). | Cut, in this order (≈ 55 words, 10 s of holds, ≈ 35 s): (a) N012: drop the voice line; add to the N011 card a second line "FBIL crosses its EUR, GBP, JPY rates through USD/INR · JPY per 100" [F5]. (b) N004: end after "…in under a minute." (drop "No heavy theory, just keys. Stay with me."). (c) N021a: "A cross rate's spread, in percent, is about the two spreads added. So a cross costs a little more." (d) N051: drop "If a step slipped, rewatch chapter two and press along." (e) N001a: drop "Phone on silent? Good." (f) N022 H: 20 s → 15 s and N041 H: 20 s → 15 s (both lines say "Pause"). If the measured take still runs over 15:00, also cut N022–N023 (GBP your-turn; practice P2 drills the same rule). Update the header's length line to the measured time. |
| 3 | Low | N040a | "A ring starts with more than one unit, like a hundred yen" — but the very next chain (N040b) has 0.9217 euro on the left, which is less than one. The learner is told the rule is for "more than one". | "Sometimes a ring starts with a number other than one, like a hundred yen. Then the full rule: multiply the right-hand numbers, and divide by the left-hand ones." |
| 4 | Low | N042c | "A ring says a hundred yen. Multiply by that hundred, or divide?" Ambiguous: in "1 USD = 149.5 JPY" the yen is on the right. The answer "it's on the left" needs the question to put it there. | "Two, the twist. A ring starts with a hundred yen. Multiply by that hundred, or divide?" |
| 5 | Low | N040e | Voice says "ninety-two point two five"; trap card says 92.2496. A learner who keyed it sees 92.2496 and hears another figure. | Voice: "…you got ninety-two point two four nine six. Too small. Check the left side." (or card "× 0.9217 → 92.2496 (≈ 92.25) ✗"). |
| 6 | Low | N046e | The back-out uses the euro as the link currency; every rule so far said "dollar". "The euro is the base in both" may stall a learner who learnt "dollar on the same side". | "Here the euro is the link, the base in both. Same side, so divide, and cross the sides. Bid: ninety-two point eight seven six, divided by one point zero eight five five." (21 + 13 words) |
| 7 | Low | N047–N050 cues | The map has three nodes ("quotes", "cross rates", "chain rule") but the voice walks four branches (0–3); N048's cue "node fills" names no node, and "cross rates" fills only at N049. | N048 cue: "M: node 'cross rates · multiply' fills"; N049 cue: "M: node 'cross rates · divide' fills"; N047 cue: list the empty nodes "quotes · multiply · divide · chain rule". |
| 8 | Low | header | Length line says "about 13–14 minutes" and old chapter times; ch 4 now ~3 min. | After the cuts, write the counted figure, e.g. "about 14–15 minutes (drill)"; chapters 1 ~3.5 · 2 ~4.5 · 3 ~3 · 4 ~3 · close ~1. |
| 9 | Low | practice.md P8 | Reason "bid used the yen bid" is half the story: 57.2709 is rupee **ask** ÷ yen bid, the correct ask put in the bid's place. | "(b) **He swapped the two answers: 57.2709 is rupee ask ÷ yen bid, which is the ask.** For the bid, divide the rupee bid by the yen ask." |

## Checked and fine
- Facts: base/quote, direct (FEDAI 5.7, per 1 or 100 units), indirect per ₹100, bid = bank buys the base, cross rate,
  FBIL crossing through USD/INR with JPY per 100 (F5), market conventions (F6), both rules incl. "quote in both"
  (F8), chain right ÷ left (F10), spread rule (F13). Rule-version card has the 10th ed. and FBIL v2.
- Cue/voice: every key line, box and trap card matches the spoken figures (except Low 5); every question has a hold;
  press-along holds sit after "equals".
- Terms: "spread" known from A01 (N025); "quote currency", "cross rate", "chain rule" defined before use.
- Greeting and goodbye are A04's own row in `greetings.md`; coverage.csv A1.3 now lists A00;A04.
