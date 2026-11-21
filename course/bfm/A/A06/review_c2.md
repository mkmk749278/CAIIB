# A06 c2 · Independent re-review (fresh context)

- **Reviewer**: fresh-context agent, 2026-11-21. Read: `script_class.md` c2, the three c1 reviews (expert, examiner,
  beginner), `review_ack_c1.md`, `numericals.md`, `practice.md`, fact sheet `research/bfm/facts/A1.5-A1.7_A06.md`
  (rows 1–16), `course/spec/lesson_spec.md` (Standard style), `research/pedagogy/teaching_method.md`,
  `course/bfm/greetings.md` (A06 row matches N001 / N067), A05 `script_class.md` N067 (now "two months early", so the
  trailer and N004–N004a agree). Primary texts not re-fetched: the c1 expert read FEDAI Rule 6 / 2.2(c) and RBI
  Circular No. 25 in full, and every rule in c2 sits on a fact-sheet row that review confirmed.
- Ran `tools/check/fx_forward_contracts.py`: every line OK, two ways (A06 sums, c2 additions, practice).
- **Numbers recomputed independently (Python `Decimal`, rates 4 decimals half up, rupees to paise)**:
  TT selling 86.40 × 1.0012 = 86.50368 → 86.5037, exporter pays 0.4537 × 1,00,000 = ₹45,370.00; TT buying
  85.80 × 0.9992 = 85.73136 → 85.7314, importer pays 0.4686 × 50,000 = ₹23,430.00; trap 85.82 × 1.0012 = 85.922984 →
  85.9230; before maturity (86.40 + 0.20) × 1.0012 = 86.70392 → 86.7039; swap 86.11 − 85.70 = 0.41 → ₹41,000.00;
  outlay ₹35,000 × 0.10 × 2 ÷ 12 = 583.333 → ₹583.33; 86,05,000 − 41,000 − 583.33 = ₹85,63,416.67 (voice matches);
  rollover new rate (85.82 + 0.20) × 1.0012 = 86.123224 → 86.1232; homework 85.92 × 1.0012 = 86.023104 → 86.0231,
  bank pays ₹2,690.00. Practice: P2 86.2233, ₹10,582.50 (trap 86.0311 → ₹5,777.50 right); P3 ₹2,690.00; P4 swap
  ₹11,000, outlay ₹20,000, interest ₹150, ₹42,88,850.00 (distractors ₹43,00,000 / ₹42,89,000 / ₹43,11,150 right);
  P6 settle 85.8229, she receives ₹8,313.00, new 85.8113 (trap 86.0231 = forward TT selling, right). **All correct.**
  Every key sequence fits an 8-function, 12-digit calculator; every rupee step keys the rounded rate fresh (N013 says
  so aloud), so the display matches the spoken answer.
- **Rollover sum sides (N042a–d)**: the importer holds a bank **sale** contract. Settlement on maturity is the opposite
  deal, the bank buying back at spot TT buying 85.7314 (below 86.20, so he pays, as N017a's mirror rule says); the new
  contract is again a bank sale, one month forward, so forward TT **selling** from the ask (85.82 + 0.20). Correct on
  both legs; P6 does the mirror (purchase: settle at TT selling, new at forward TT buying) correctly.
- **FEDAI 6.3 vs RBI (N042–N045, N051, N063)**: reconciled well. FEDAI's method is kept as the pricing of a rollover
  (settle at today's rate, new contract at the current rate), the exam-facing rule is stated, and what RBI closed
  (cancel, then book again, with any bank, since 10 Oct 2026) is said in N043, N045, N050–N051 and the map. One small
  timing wrinkle remains (finding 2).
- **Sentences**: none over 25 words (longest 20). Terms: outlay, hedge, underlying, advice, purchase / sale contract
  now defined at first use; "rollover" is used two lines before its definition (finding 1).
- **Length**: 80 spoken lines, 1,715 words ≈ 11.4–12.3 min at 150–140 wpm, + 126 s of cued holds (27 holds) + chapter
  beats ≈ **13.6–14.5 min**. Inside the 12–15 band; no cut needed. If a take runs over 15 min, cut in this order:
  N036a (bill paid early: fact row 13 can move to practice), N048 (FERR, taught in C08), N046 to its card only.

## Verdict: ADOPT
High 0 · Medium 0 · Low 4. Every c1 High and Medium is fixed, and every number is right. The four Lows are word-level
and optional; they can be applied without another review.

## c1 findings: fixed?
| c1 finding | Fixed? | Note |
|---|---|---|
| Expert H1 / examiner M3 / beginner H1: "a month early" vs two-month sum | Yes | N004 (booked a month ago, three months forward) + N004a "two months early"; card "due in 2 months"; A05 N067 now says "two months early" |
| Examiner H1: no `practice.md` | Yes | 8 items + homework answer; all numbers and distractors checked here and in the checker |
| Examiner H2 / expert M3: no extension sum | Yes | N042a–d; settle ₹23,430.00, new 86.1232, trap old 86.20; numericals row 5; sides correct |
| Beginner H2: who pays | Yes | N015a, N017a rule cards; N055 "on time, a gain goes to the customer"; homework now doable |
| Expert M2 / examiner M5 / beginner M7: FEDAI 6.3 vs RBI, "with any bank", rollover meaning | Yes | N042–N045, N050–N051, N063; see Lows 1–2 for order and timing |
| Expert M4 / examiner M6 / beginner M9: swap cost "goes to" the customer | Yes | N054 "charged to the customer… an advice"; card "recovered from the customer, under advice" |
| Examiner M4: swap gain | Yes | N034a + card; N039, N062 |
| Examiner M7: early realisation of a bill (FEDAI 2.2(c)) | Yes | N036a + card [F13] |
| Beginner M1: "she sold" vs purchase contract | Yes | N009; N012 "a different exporter" |
| Beginner M2 / M3: round and re-key; subtraction spoken | Yes | N013 "Rounded to four places; key that in fresh"; N015 speaks the subtraction |
| Beginner M4: why the swap | Yes | N026–N027 (the bank's market cover) |
| Beginner M5: outlay | Yes | N032 + card |
| Beginner M6: "today's rate" vs forward twist | Yes | N008, N019, N023 "today's rate for the same date" |
| Beginner M8: hedge, underlying | Yes | N046 |
| Beginner M10: no ch 4 pause check | Yes | N057a (one question; spec asks one per chapter) |
| Beginner M11: close's "No"; option 2 unanswered | Yes | N059–N059a |

**Lows not done**: expert/examiner option-dated interest (fact row 4 only), examiner L9 cancellation rate on automatic
cancellation, beginner L1 connect line and L6 mixed check / "you can now": reasonable at this length. Not mentioned in
the ack either way: beginner L5 (N035 "eighty-six lakh, five thousand" with no step), L7 (N020 split; now 18 words,
fine), L9 (N019's 0.20 on the note but not spoken; the note is an example, fine). L5 is minor; record it in the ack.

## New findings
| # | Sev | Line | Finding | Exact fix (ready words) |
|---|---|---|---|---|
| 1 | Low | N041, N042d, N044 | "Rollover" is first heard in N042d ("A rollover is always at the current rate") and the trap card, but defined only in N044. A beginner meets the word in the trap line before knowing it. | N041: "Swap cost, and interest on the outlay. Now, the opposite problem. The buyer will pay late. So the customer wants a rollover: the contract carried on to a later date." N044: "What's still allowed? A rollover, done on the maturity date itself. Priced just as we did." |
| 2 | Low | N042 vs N044, N052 | N042 gives FEDAI's "request on or before maturity"; N044 and the ch 4 recall say the rollover is "on the maturity date itself" (RBI25 para 2(b)). Both true, but a learner may hear a clash and miss which one an exam option means. | N044: "What's still allowed? A rollover, done on the maturity date itself. He may ask earlier, but it happens on maturity. Priced just as we did." (If finding 1 is applied, use this as the N044 text.) |
| 3 | Low | N034a | The card adds "an importer taking early delivery at a premium" (a swap gain), but the voice says only the discount case. Small cue/voice mismatch on a point an exam can ask (examiner Q8). | Add to N034a's voice: "The same goes for an importer who takes his dollars early, at a premium." Or drop that clause from the card. |
| 4 | Low | N035 | "Eighty-six lakh, five thousand" arrives with no step (beginner L5, not recorded in the ack). | N035: "Back to her. A lakh, times eighty-six point zero five, is eighty-six lakh, five thousand. Less forty-one thousand, less five hundred eighty-three thirty-three, equals." |
