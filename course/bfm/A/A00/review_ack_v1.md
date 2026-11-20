# A00 · author's response to the v1 reviews (2026-11-20)

Three fresh-context reviews of script v1: expert (`review_v1_expert.md`), examiner (`review_v1_examiner.md`),
beginner (`review_v1_beginner.md`). All three: ADOPT WITH FIXES. Every High and Medium finding is fixed in v2 or
answered below. Line ids refer to v2.

## High
| Finding | Fix in v2 |
|---|---|
| Expert 1, examiner 1: holiday rule taught for every deal, spot included | N24: spot = second working day, holidays skipped, worked case Monday → Thursday. New N24a: the preceding/next rule only for a customer's forward delivery date, with "known at least three working days ahead" (FEDAI 1.4, 5.2). Cue, map node 3, fact sheet #13, claims, practice Q3 rewritten; practice Q9 added. Interbank Rule 8.09 kept in the fact sheet only (beyond A00's depth). |
| Beginner 1: no balance-of-payments refresher; "current account" heard as a CA deposit | New N28a–N28b (JAIIB refresher, the ledger picture, "not the one at your branch"). |
| Beginner 2: "rate up = rupee weaker" never said plainly | New N27a, tied back to the customer's 85.20 → 85.65. |
| Beginner 3, examiner 4, expert 10: interest parity looks like it contradicts "higher rates strengthen" | N33 defines forward premium and discount; N33a gives the rule and the flip (₹ discount ⇄ $ premium); N33b separates today's effect from the forward price. Practice Q12 added. The beginner's "free lunch" line was left out: not needed at this depth. |
| Beginner 4: length claim wrong ("about 1,010 words") | Re-counted with a parser that joins wrapped lines: v1 had 1,696 spoken words, so the header was right. v2 is about 2,000 words, 14.3 min of speech, about 14.6 with holds. Cuts made to stay within 15 min: N00b notifications line, N00c "just think…", N17a "like you and me", N20 "remember that line", N25 "the picture I want you to keep", N44 last sentence. |

## Medium
| Finding | Fix |
|---|---|
| Expert 2: practice Q3 scope | Rewritten as a forward delivery date question. |
| Expert 3, examiner 3: arbitrage by centres only vs Q8 | N19: "two currencies or two centres … three or more (₹ → $ → € → ₹), compound"; Q8 now three centres and three currencies. |
| Expert 4: "foreign currency is the note" is false (FEMA s. 2(h)) | N12: "the money itself"; cue shows a note and a cheque; fact sheet #1 and claims add s. 2(h). |
| Expert 5: PPP and inflation in absolute terms | N29, N31, N32 now "higher than abroad / than in the US", "gets dearer faster". |
| Expert 6: devaluation vs depreciation; July 1991 | New N36a (devaluation / depreciation / appreciation) and N39 (July 1991, two steps, about 18%). Practice Q11 added. |
| Expert 7: direct quotes since August 1993 | **Not added.** No RBI or FEDAI text for the date found yet; the expert also found none. Recorded in the script header under "Left out on purpose"; add it only once a primary text is read. |
| Examiner 2: spot as the default quote (recalled Dec 2025 Q71) | New N23a; practice Q10 added. |
| Beginner 5: "over the counter" vs our counter | N14: "O-T-C … not our branch counter … no exchange in the middle". |
| Beginner 6: hedging and speculation unexplained; too many players in one breath | N17 split into N17/N17a; N18 defines hedging and speculation. |
| Beginner 7: "merchant market" | N21: "merchant here means any customer". |
| Beginner 8: value date undefined; holiday rule abstract | N22 defines the value date. The suggested rewrite ("spot due Wednesday, known holiday → Tuesday") repeats the scope error of expert 1, so it was **not** used; N24 has the correct worked case instead. |
| Beginner 9: par value and Bretton Woods | N37: "a fixed official rate, under the Bretton Woods system after the Second World War". |
| Beginner 10, expert 9, examiner 6: LERMS 40/60 scope, and still a lead | Read in RBI's own text (rbi.org.in bs_viewcontent Id=2253): "40 per cent of exchange earnings … official rate … balance 60 per cent … market". N39a says "exchange earnings"; claim now verified. |
| Beginner 11: "convertible on the current account" | New N40a. |
| Beginner 12: FBIL numbers in one breath | Split into N42 / N42a, with "in the morning" / "in the afternoon". |
| Beginner 13: three pockets in one breath | Split into N10 / N10a / N10b, an example for pocket one. |
| Beginner 14: FEDAI / FEMA / Tom pronunciation | N23 explains FEDAI and "Tom, short for tomorrow"; the say-it list goes on the voice page (`voice_blocks.py` SAY entry for A00). |

## Low (all taken unless noted)
- Expert 8: N16 "normal market hours". · Expert 11: evidence chip now "Settlement date · Jun 2023" only (Jul 2024
  was an RTGS item). · Expert 12: header now "east to west". · Expert 13, examiner 5: N41 "India runs a managed
  float". · Expert 14: N49 "trips up a lot of people". · Expert 15: receipt rates to be updated at the freeze (header
  note). · Expert 16: N23a. · Expert 17: claims tidy-ups done.
- Examiner 7: FEDAI introduced in N23. · Examiner 8: authorised dealers left to A02 (header note). · Examiner 9: no
  change, as the examiner advised.
- Beginner lows: "long day?" not added (time-neutral video, and 00 already did the evening welcome); the rest
  folded into the fixes above where they fit the 15-minute budget.
