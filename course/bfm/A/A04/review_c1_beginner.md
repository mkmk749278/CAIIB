# A04 c1 · Independent review · Beginner learner + teaching method

- **Reviewer**: fresh-context agent, 2026-11-21. Role: a South Indian bank officer new to forex, at night, phone, basic
  8-function calculator, English as a second language, hearing each line once and pressing every key.
- **Read**: `A04/script_class.md` c1, `A04/numericals.md`, `course/spec/lesson_spec.md` (Standard style, drills),
  `research/pedagogy/teaching_method.md` §7, the model `A1/script_class_sample.md`, A01 and A03 class scripts (what I
  already know), fact sheet `research/bfm/facts/A1.3-A1.7_A04.md`, `course/bfm/greetings.md`.
- **Sums re-done on a calculator**: all spoken answers right. EUR/INR 1.085 × 85.6 = 92.876 → 92.8760; 1.0855 × 85.62 =
  92.94051 → 92.9405; trap 1.085 × 85.62 = 92.8977. GBP/INR 108.284 → 108.2840; 108.39492 → 108.3949. JPY/INR
  85.6 ÷ 149.6 × 100 = 57.21925 → 57.2193; 85.62 ÷ 149.5 × 100 = 57.27090 → 57.2709; trap bid ÷ bid 57.2575 (and
  ask ÷ ask 57.2326). Chain 1.17 × 1.085 × 85.6 = 108.66492 → 108.6649. Reverse 500000 ÷ 108.6649 = 4,601.3018 →
  GBP 4,601.30 (numericals.md row 5 prints "4601.297…": a typo, L9). Case 40000 × 92.876 = 3,715,040 → ₹37,15,040.00.
  Indirect 100 ÷ 85.60 = 1.16822 → 1.1682. All left-to-right chains work on a basic calculator.

## Verdict: ADOPT WITH FIXES
High 0 · Medium 9 · Low 12. The drill is clean and the numbers are right. The two rules (opposite sides multiply, base
in both divide and cross) land well, with a good pause check in chapter 2. What I miss as a beginner: a warm-up
reason to care, pause checks in chapters 1 and 3, a picture for *why* the sides cross, a reason for the reverse sum,
and a trap check that actually catches my mistake. The lesson is also short of the target.

## Length
~1,105 spoken words ≈ 7.9 min at 140 wpm + 116 s of holds (19 holds) ≈ **9.8 min**. Numbers read digit by digit
are slow, so real time may be ~10.5 min. Header target 12–13 min; drill band 10–14. The fixes below add about
200 words and 45 s of holds, which brings it to about 12 min. Longest sentence 22 words; none over 25.

## Three things I'd remember
1. Dollar on opposite sides: multiply, like with like.
2. Dollar the base in both: divide, and cross the sides (bid = rupee bid ÷ yen ask).
3. Chain: each ring starts where the last ended, multiply along.

## Persona / claims check
No "Sir", no human back-story, no AI disclosure (correct per CLAUDE.md 2026-11-21). "I" is not used; the voice is
plain class voice. N021 "Many people multiply…" is fine as a wrong-belief line. No unbacked exam claims.

## Method checklist (teaching_method.md §7, with the spec's Standard style)
| # | | Note |
|---|---|---|
| 1 | **Partial** | Version card yes; AI disclosure N.A. (owner rule); **no "why it matters" number and no promise** (M1) |
| 2 | Partial | N002 links A03's closing question; no retrieval of A03 content (fine for a drill) |
| 3 | Pass | N007 base question by about minute 1.5 |
| 4 | Pass | Three chapters plus close, re-entry lines |
| 5 | Pass | N014, N036 open with recall |
| 6 | Pass | Tiruppur question answered in the close (N044–N046) |
| 7 | Partial | Terms defined before use, but "quote" means both the pair and the right-hand currency (M2) |
| 8 | Pass | Each rule one short sentence before its example |
| 9 | Pass | Ch 2 rule said, asked (N031–34), recapped (N035, map) |
| 10 | Partial | Ch 2 wrong belief named (N021, N030); ch 1 and ch 3 none (L6) |
| 11 | **Fail** | Pause check only in ch 2; **ch 1 and ch 3 have none** (M3, M4) |
| 12 | Pass | N031–33 interleave multiply/divide |
| 13 | Partial | Worked → your-turn present; keys spoken; some holds tight (M8); trap line N030 does not catch the trap (M6) |
| 14 | Partial | N027's "why" is a check, not a reason; needs the picture in M5 (F9 supports it) |
| 15 | Pass | Cues land on words |
| 16 | Pass | |
| 17 | Pass | Every answer boxed |
| 18 | Pass | Base, quote, direct, indirect, cross rate written as spoken |
| 19 | Pass | |
| 20 | Partial | Balance-scale and rings pictures fine; no limit needed |
| 21 | Partial | Blank-map recall yes (N047–50); "you can now" has no scope line (L10); map leaves out chapter 1 (L11) |
| 22 | Pass | N053 after the case is answered |
| 23 | Pass | Bid/ask and multiply/divide used many times, mostly as questions |
| 24 | Partial | Rows [F1]–[F10] cited; F10's "÷ left-hand numbers" part not taught (M9) |
| 25 | N.A. | No exam-signal line (M1 adds one, backed by `importance_map.md`) |
| 26 | Pass | |
| 27 | Pass | Own numbers, own pictures |
| 28 | Partial | ≤ 25 words; "one forty-nine" and "one point zero eight five" by ear (L2, L3) |
| 29 | Partial | Greeting new; goodbye ends "see you soon" like A01's (L12) |
| 30 | Partial | After M5, M6, M7, M9, yes |

## Findings

| # | Sev | Line | Finding | Exact fix |
|---|---|---|---|---|
| M1 | Medium | N002–N004 | Warm-up has no "why it matters" with a true number, no connect line, no promise (spec §0). | After N001 add N001a: "Phone on silent, calculator ready? Good. Forex sums came up in all seven exam cycles we studied. Cross rates are part of that." Cue: `N: "forex sums: 7 of 7 cycles" [importance_map A-FXNUM]`. End N004: "…in under a minute. No heavy theory, just keys. Stay with me." |
| M2 | Medium | N005–N006 | "Quote" is used for the whole pair and for the right-hand currency. Hearing "every quote is a pair… the one on the right is the quote", I am lost. | N006: "The currency on the left is the base. Always one unit. The one on the right is the quote currency. It tells you the price." Use "quote currency" every time after; board label "quote currency (the price)". |
| M3 | Medium | after N012 | Chapter 1 has no pause check (spec: one per chapter, 2–3 questions, easy first, one twist). | Add N012a: "Pause check for chapter one. One. In pound-dollar, which is the base?" H: 3 s. N012b: "The pound. Two. Rupees for one dollar: direct or indirect?" H: 3 s. N012c: "Direct. Three, the twist. The bank buys the base. Bid or ask?" H: 3 s. N012d: "The bid. The bank always buys at the lower number." |
| M4 | Medium | N041–N043 | Chapter 3 has one try and no pause check. | Before N043 add N042a: "Pause check for chapter three. One. A chain of rates: what joins each ring to the next?" H: 3 s. N042b: "The same currency. Two. Rupees per pound, and you have rupees. Multiply or divide for pounds?" H: 3 s. N042c: "Divide." |
| M5 | Medium | N026–N027 | The reason for crossing only covers the bottom number; I don't see why the *rupee bid* goes on top. A picture helps: the bid is the smallest answer you can make, the ask the biggest. This also explains rule one. | N027: "Why? The bid must be the smallest answer you can make. So put the smaller rupee on top, the bigger yen below." Add N027a: "Small on top, big below: smallest answer. That's the bid. The ask is the other way round." Cue: `S: a fraction "85.60 (small) / 149.60 (big) → smallest = bid"` · `B: circle "small" and "big"` [F8, F9]. Optional link in N017: "Small times small gives the smallest answer. That's the bid." |
| M6 | Medium | N030 | The trap check doesn't catch the trap as said. My wrong bid 57.2575 is still below the right ask 57.2709 on the board, so "is your bid below your ask?" says yes. It only fails against the trap ask 57.2326, which is never said. | N030: "Many of you divided bid by bid, and ask by ask. That gives fifty-seven point two five seven five, and fifty-seven point two three two six." N030a: "Look. Your bid is above your ask. That can't be. So check: is your bid below your ask?" Trap card: `"bid ÷ bid 57.2575 · ask ÷ ask 57.2326 → bid > ask ✗"`. |
| M7 | Medium | N041–N042 | The reverse sum gives no reason. I hear "Divide" and don't know why, so next time I will multiply. | N042: "Divide. The rate is rupees for one pound. You have rupees and want pounds, so divide. Five lakh, divided by one hundred eight point six six four nine. Four thousand, six hundred one pounds, thirty pence." Cue: `S: the rings walked backward, rupee → pound, "÷"` · keys `500000 ÷ 108.6649 =` · H: 6 s before the answer. |
| M8 | Medium | N019, N020, N028, N029, N041 | Holds too tight for the keys. N028/N029 are 15 keystrokes with a 6 s hold. N041 needs a choice plus 15 keystrokes in 15 s. The hold must fall *before* the answer is spoken. | N019/N020: say "…times eighty-five point six, equals." then H: 6 s, then the answer. N028/N029: same, H: 8 s. N041: H: 20 s and add "Pause the video if you need more time." N045: H: 12 s. |
| M9 | Medium | N037–N040 | Only the easy chain with "one" on every left side is taught. F10's rule (right-hand numbers ÷ left-hand numbers) isn't taught, and I just learnt yen per hundred. With a "100 yen = …" ring I'd be stuck. | After N040 add N040a: "If a ring starts with a hundred, say a hundred yen, divide by that hundred at the end." N040b: "Multiply the right-hand numbers. Divide by the left-hand ones." Cue: `C: card "chain: × right side ÷ left side" [F10, F11]`. |
| L1 | Low | N002 | "Cross rate" is named before its meaning (N011). | N002: "…Today's answer is the cross rate: a rate made through a third currency." |
| L2 | Low | N024 | "One forty-nine point five zero" by ear can sound like 1.495. | First time: "one hundred forty-nine point five zero, one hundred forty-nine point six zero". After that, "one forty-nine" is fine. |
| L3 | Low | N019 | The board says 1.0850 but I hear "one point zero eight five". I wonder if I mis-keyed. | N019: "Bid: one point zero eight five. The last zero needn't be keyed. Times eighty-five point six, equals." |
| L4 | Low | N018, N022, N024 | Two-way quotes said aloud don't say which is bid. | N018: "Euro-dollar: bid one point zero eight five zero, ask one point zero eight five five. Dollar-rupee: bid eighty-five point six zero, ask eighty-five point six two." Same pattern in N022, N024. |
| L5 | Low | N009 | 1.1682 appears from nowhere. | N009 end: "A hundred, divided by eighty-five point six. One point one six eight two dollars per hundred rupees." |
| L6 | Low | N021, ch 3 | N021 says "the rupee ask" (it's the dollar-rupee ask). Ch 3 names no wrong belief. | N021: "Many of you will multiply the euro-dollar bid by the dollar-rupee ask…". Ch 3, in N041: "Some of you will multiply again. Think first." |
| L7 | Low | N024 | "Here the dollar is the base in both quotes": both which? I just heard EUR/USD and USD/INR. | N024: "…Now look at dollar-rupee and dollar-yen. The dollar is the base in both." |
| L8 | Low | N012 | F-B-I-L is not recalled for me (A00 introduced it long ago). | N012: "Even F-B-I-L, India's benchmark body, does this…" |
| L9 | Low | numericals.md row 5 | Raw display printed as "4601.297…"; the calculator shows 4601.3018 (÷ 108.6649) or 4601.30095 (÷ 108.66492). Answer GBP 4,601.30 is right. | Change to "→ 4601.3018…". |
| L10 | Low | N051 | No scope line. | Add: "That's A1.3 cross rates and A1.7 cross-rate sums, practised in full." |
| L11 | Low | N047–N050 | The map leaves out chapter 1 (base, direct, indirect). | Add before N047: "Branch zero. The currency on the left?" H: 3 s. "The base, one unit." |
| L12 | Low | N054 | Goodbye ends "see you soon", like A01's ("I'll see you soon"). | "That's all for today. Practise one cross rate tonight. Until next class." |

## Answers to the brief's specific questions
- **Terms before use**: base, quote, bid, ask, direct, indirect, cross rate all defined before use (bid/ask also known
  from A01). Chain rule: defined by the rings picture, fine. Only "quote" is overloaded (M2).
- **Numbers aloud**: mostly fine; "one forty-nine" (L2) and dropped trailing zeros (L3) need one fix each.
- **Holds**: question holds of 3 s fine; press-along holds tight and placed after the answer (M8).
- **"Divide and cross the sides" (N026–N027)**: the rule is followable; the reason needs the small-top/big-bottom
  picture (M5), and the trap check needs the trap ask said (M6).
- **Chain picture**: works. The reverse sum needs its reason (M7); left-hand numbers other than one are not taught (M9).
- **Close case**: correct and clear. EUR/INR has the euro as base. Export proceeds come in, the bank buys euros at the
  bid, 92.8760, ₹37,15,040.00 before margin. The A03 link for the margin is good.
