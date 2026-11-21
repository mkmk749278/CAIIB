# A05 c1 · Independent review · Beginner learner + teaching method

- **Reviewer**: fresh-context agent, 2026-11-21. Role: a South Indian bank officer new to forex, at night, phone, basic
  8-function calculator, English as a second language, hearing each line once and pressing every key.
- **Read**: `A05/script_class.md` c1, `A05/numericals.md`, `course/spec/lesson_spec.md` (Standard style),
  `research/pedagogy/teaching_method.md` §7, the model `A1/script_class_sample.md`, A01, A03 and A04 class scripts (what
  I already know: bid/ask, the ladder, margins as × 1.0012 / × 0.9992, cross rates, A04's closing question "Why is the
  dollar dearer three months from now?"), fact sheet `research/bfm/facts/A1.5-A1.7_A05.md`, `course/bfm/greetings.md`.
- **Sums re-done on a calculator**: every spoken answer is right.
  Dates: Thu 3 Dec 2026 → spot Mon 7 Dec 2026; one month from spot Thu 7 Jan 2027 (a working day).
  2m forward 85.60 + 0.36 = 85.96; 85.62 + 0.39 = 86.01. Parity 85.60 × 1.01625 ÷ 1.01125 = 86.023238 → 86.0232;
  (86.0232 − 85.60) ÷ 85.60 × 4 = 1.98 % a year ≈ 2 % gap. Importer 86.01 × 1.0012 = 86.113212 → 86.1132;
  × 50,000 = ₹43,05,660.00 (trap first date 85.82 × 1.0012 = 85.9230). Exporter 85.96 × 0.9992 = 85.891232 → 85.8912;
  trap 3m 86.14 × 0.9992 = 86.071088 → 86.0711. Usance 85.96 × 0.9985 = 85.83106 → 85.8311; × 20,000 = ₹17,16,622.00
  (trap 3m 86.0108). All chains work left to right on a basic calculator.

## Verdict: ADOPT WITH FIXES
High 1 · Medium 9 · Low 10. The lesson is well built: four clean chapters, a pause check and a "one thing to remember"
in each, recall openers from chapter two on, a branch question answered at the close, and correct numbers. What stops me
as a beginner: the parity sum (I cannot press keys whose numbers I was never shown how to make), the "free money" line
(whose money?), the "second month" window (never defined), and the usance chapter (sight and transit never explained,
so I do not see *why* we add 25 days). Holds are again placed after the spoken answer.

## Length
68 lines, ~1,413 spoken words ≈ 10.1 min at 140 wpm, + 113 s of holds (24 holds) ≈ **12.0 min**. Numbers said digit by
digit are slow, so real time is about 12.5 min; the header says ~14. Inside the 12–15 band. The fixes below add about
180 words and 30 s of holds, giving about 14 min. Longest sentence 21 words (N028); none over 25.

## Three things I'd remember
1. Spot is the second working day; forwards count from spot.
2. Small then big, add; the premium is the interest gap, not a forecast.
3. Option period: pick the date best for the bank.

## Persona / claims check
No "Sir", no human back-story, no AI disclosure (correct per CLAUDE.md 2026-11-21). "7 of 7 cycles" is backed by
`importance_map.md` row A-FXNUM (7/7). No "comes every time" hype.

## Method checklist (teaching_method.md §7, with the spec's Standard style)
| # | | Note |
|---|---|---|
| 1 | Partial | Version card, true number (N002) and promise ("stay with me") yes; no connect line (L1) |
| 2 | **Fail** | No retrieval from A04, and A04's closing question is not picked up by name (M1) |
| 3 | Pass | N009 spot-date question by about minute 1.5 |
| 4 | Pass | Four chapters plus close, re-entry lines; ch 1 also carries OTC vs futures (fine, recalled in N020) |
| 5 | Pass | N020, N035, N051 open with recall |
| 6 | Pass | Importer question answered in N060 (but see M10) |
| 7 | Partial | Value date, spot, tom, cash, forward, OTC, premium, discount, option period defined; **points, sight, usance, transit period** not (M3, M7); "margin" reused with a new meaning (M4) |
| 8 | Pass | Each rule one short sentence before its example |
| 9 | Pass | Bank's-favour rule said, asked (N041, N049), recapped (N050 card, map) |
| 10 | Partial | Ch 2 wrong belief named and broken (N026–N031); ch 3 trap after the sum (N047); ch 1 and ch 4 only as twist questions |
| 11 | Pass | One pause check per chapter, 2–3 questions, twist last |
| 12 | Partial | No mixed check in the close (L6) |
| 13 | Partial | Worked → your-turn present; parity keys unexplained (H1); holds after the answer (M8) |
| 14 | Pass | "Why" only for the premium (fact sheet F10) and rounding (F14) |
| 15 | Pass | Cues land on words |
| 16 | Pass | |
| 17 | Pass | Every answer boxed |
| 18 | Partial | Terms written as spoken, except the ones in M3, M7 |
| 19 | Pass | |
| 20 | Partial | Piggy banks and "door closing" picture fine; the door needs its reason (M2) |
| 21 | Partial | Blank-map recall yes (N061–N065); no "you can now" or scope line (L6) |
| 22 | Pass | N067 after the importer is answered |
| 23 | Pass | Spot, premium/discount, first/last date used often, mostly as questions |
| 24 | Pass | Rows F1–F16, F20 cited; "exam convention" shown on screen for F12/F14 (L8: say it) |
| 25 | Pass | Backed by A-FXNUM |
| 26 | Pass | |
| 27 | Pass | Own numbers, own pictures |
| 28 | Partial | ≤ 25 words; numbers fine by ear; "the day before" loose (L2) |
| 29 | Partial | Greeting and goodbye new; header line differs from N001 (L9) |
| 30 | Partial | After H1, M2, M5, M7, yes |

## Findings

| # | Sev | Line | Finding | Exact fix |
|---|---|---|---|---|
| H1 | High | N029–N030 | I am told to press 85.60 × 1.01625 ÷ 1.01125, but nobody says where 1.01625 and 1.01125 come from. No formula is spoken. I cannot press along, so the parity idea stays words only. | After N029 add N029a: "Three months is a quarter year. So a quarter of six and a half percent is one point six two five percent." N029b: "One rupee grows to one point zero one six two five. One dollar grows to one point zero one one two five." N029c: "Forward equals spot, times the rupee growth, divided by the dollar growth." Cue: `C: card "F = S × (1 + ₹ rate × t) ÷ (1 + $ rate × t)" [F11]` · `N: "6.5 ÷ 4 = 1.625 % → 1.01625 · 4.5 ÷ 4 = 1.125 % → 1.01125"`. |
| M1 | Medium | N001–N002, N026 | A04 ended "Why is the dollar dearer three months from now?" A05 never says "remember last class's question", and has no recall from A04. | N002 add at start: "Last class, I asked you: why is the dollar dearer three months from now? Hold that; we answer it today." N026: "Now, last class's question. Why is the dollar dearer later?" Optional recall in N020's place is fine as is. |
| M2 | Medium | N028, N031 | "You'd convert to rupees": convert what? I don't know who earns the free money, or why the premium "closes the door". N031's "So the rupee sits at a discount" is a jump. | N028: "Say you have dollars. Change them to rupees, earn six and a half percent, not four and a half." N028a: "Then change back at the same rate. Two percent extra, for nothing. Free money." N028b: "The premium closes that door. Buying the dollar back costs more, and eats that extra two percent." N031 end: "The dollar at a premium is the same as the rupee at a discount. The higher-interest currency is at a discount." |
| M3 | Medium | N021–N023 | "Points" is used but never said in plain words. I do not know if 0.36 is rupees, paise or percent. | N021: "A forward rate is the spot rate, plus or minus some points. Here, points are just rupees. Zero point three six is thirty-six paise." Cue: `N: "points = ₹ amounts: 0.36 = 36 paise"`. |
| M4 | Medium | N015 | "Margins every day" for futures. I learnt "margin" in A01 and A03 as the bank's add-on to the rate. Same word, new meaning, heard once. | N015: "…traded on an exchange. You keep a deposit with the exchange, topped up daily. That's called margin there; it's not the bank's rate margin." Cue: `N: "futures margin = a deposit, not the rate margin"`. Keep "clearing corporation" (L4). |
| M5 | Medium | N036–N037, N041, N045 | "Delivery any day in the second month" is never defined. I don't know the window runs from end of month one to end of month two, so "first date" and "last date" in months are guesswork. | After N037 add N037a: "Second month means from the end of month one to the end of month two. Third month, from the end of month two to the end of month three." Cue: `S: the strip marked "1m · 2m · 3m"; the 2nd-month window shaded between the 1m and 2m pins`. In N046: "…so only to the first date, the end of month two. Two-month bid, eighty-five point nine six." |
| M6 | Medium | N038–N040 | "Best for the bank" is said, but not why highest is best when selling and lowest when buying. I will mix them up under pressure. | N038 add: "Selling, the bank wants the most rupees. Buying, it wants to pay the fewest." Cue: `N: "sell → highest ₹ · buy → lowest ₹"` [F12, A01 money-changer]. |
| M7 | Medium | N052–N053 | "Sight", "usance" and "normal transit period" are not said in plain words. I don't see why transit is added: the sixty days start only when the buyer sees the bill, and the bill first has to travel. | N052: "Now, a usance bill: a bill with time to pay. The buyer pays sixty days after sight, after he first sees the bill." N053: "How long does the bank wait? First the bill travels abroad, and the money comes back. That's the normal transit period." N053a: "Only then do the sixty days run. So the bank waits transit plus usance. For a foreign currency bill not under a letter of credit, FEDAI sets transit at twenty-five days." Cue: `S: strip "bill travels → buyer sees it → 60 days → money home"`. |
| M8 | Medium | N025, N030, N043, N056; N044, N057 | Holds sit after the answer is spoken, and N030's 8 s is short for about 20 keystrokes. N044 and N057 have no hold at all. | End each key read with "equals." then hold, then the answer. N025: "…plus point three six, equals." H: 6 s "Eighty-five point nine six." Same for the ask (H: 6 s). N030: "…divided by one point zero one one two five, equals." H: 12 s. N043, N056: "…equals." H: 6 s. N044, N057: "Times fifty thousand, equals." H: 5 s. |
| M9 | Medium | N066 | Homework says "the same points" for "a bank sale at a discount", but today's points are a premium. I cannot do it. | N066: "Homework. Use discount points: one month zero point two four, zero point two zero; two months zero point four five, zero point four zero. Price a bank sale, delivery in the second month. Which date did you use?" Answer for practice.md: first date, end of month one; 85.62 − 0.20 = 85.42 before margin. |
| M10 | Medium | N003, N036, N041 | The importer "owes in sixty days", a fixed date. Then he takes an option window "because he doesn't know the exact day". The story fights itself. | N003: "He owes a US supplier fifty thousand dollars, due in about two months. The exact day isn't fixed yet." Card: `"USD 50,000 · due in the 2nd month, day not fixed"`. N041: "Our importer doesn't know the day. So the bank sells him dollars, delivery any day in the second month." |
| L1 | Low | N001–N002 | No connect line (spec §0). | After N001: "Long day? Phone on silent, and let's go." |
| L2 | Low | N013 | "Moves delivery back to the day before" may be heard as the calendar day, even a Sunday. | "…moves delivery back to the working day before." |
| L3 | Low | N031 | "About two percent a year" appears without the sum. | N031: "Zero point four two three two, on eighty-five point six, is about half a percent for three months. Times four, about two percent a year." |
| L4 | Low | N015 | "Clearing house"; the fact sheet says clearing corporation. | "The exchange's clearing corporation guarantees every deal." |
| L5 | Low | N054–N055 | Only the premium rounding is taught; the discount case (round up) is not said, and the exam can flip it. | After N055: "At a discount, it's the other way. Round up, again in the bank's favour." |
| L6 | Low | N060–N065 | Close has no mixed check, no "you can now" and no scope line. | After N065: "You can now find a value date, build a forward rate, price an option period and a usance bill. That's A1.5, and the FEDAI rules of A1.6, for forwards." |
| L7 | Low | N023 | "Small then big" has no self-check. | Add: "Check yourself: the forward gap between bid and ask is always wider than spot's." |
| L8 | Low | N040, N055 | "(exam convention)" is only on screen; hearing it, I think it is a FEDAI rule. | N040 end: "That's the exam convention, not a FEDAI line." N055 end: "Again, the exam convention." |
| L9 | Low | header | Header greeting "Welcome back, everyone. Calculator out; today we look a little ahead." differs from N001 and `greetings.md` ("Hi, everyone. Calculator out, please; …"). | Make the header match N001. |
| L10 | Low | N047 | The trap line does not say why someone would reach 86.0711. | N047: "Did you get eighty-six point zero seven one one? You used three-month points, the last date. That's the trap." |

## Answers to the brief's specific questions
- **Terms before use**: value date, spot, tom, cash, forward, OTC, futures, premium, discount, option period defined at
  first use. Points (M3), usance, sight and normal transit period (M7) are not; "margin" changes meaning (M4).
- **Interest parity (N026–N031)**: the wrong belief is named and broken well. The arithmetic is not followable (H1),
  and the free-money line needs a starting holder and the reason the premium shuts the door (M2). The argument itself is
  right: a dollar holder swapping to rupees at spot and back at the same rate would gain the 2 % gap.
- **Bank's favour**: the four-row card (N050) is correct and clear. Missing: what the "second month" window is (M5) and
  why highest / lowest is the bank's favour (M6). Which points each window uses (2m for the last date of month two, 2m
  for the first date of month three) is right once M5 is added.
- **Usance chapter**: the sum and rounding are right; the reason for adding transit is missing (M7). The round-down
  reason (N055) is clear; add the discount mirror (L5).
- **Holds**: question holds 3–5 s fine; press-along holds after the answer and short (M8).
- **Close**: map from memory, homework and lead to A06 present; homework broken (M9).
