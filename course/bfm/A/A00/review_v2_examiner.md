# A00 · Examiner review v2 (independent session)

**Verdict: ADOPT WITH FIXES.** All nine v1 findings are fixed or properly recorded. All 10 examiner questions now
score Yes. One new Medium finding (N33: which currency's "future price") and four Lows. Each fix is a few words and
adds no time. After the Medium fix the script can be ADOPTed without another examiner pass.

Reviewed 2026-11-20 at commit 43af577: `course/bfm/A/A00/script.md` (v2), `practice.md` (12 questions),
`review_ack_v1.md`, against the fact sheet `research/bfm/facts/A1.1-A1.3_A00.md`, FEDAI notes
`research/bfm/sources/fedai_rules_cutoff.md` and the v1 questions in `review_v1_examiner.md`.

## Re-score of the 10 v1 questions against v2

| Q | Kind | v1 | v2 | Where v2 answers it |
|---|---|---|---|---|
| 1 FEMA s. 2(n): which is NOT foreign exchange | define | Yes | **Yes** | N08–N12, practice Q1 |
| 2 Rates are for spot unless stated (recalled Dec 2025 Q71) | who/when | No | **Yes** | N23a, practice Q10 |
| 3 Monday spot deal, Wednesday known holiday → Thursday | apply / exception | No (misled) | **Yes** | N24 has exactly this worked case, with the cue calendar; practice Q9 |
| 4 Forward delivery date, holiday declared 2 working days before → next working day | exception | Partly | **Yes** | N24a: "known at least three working days ahead" → preceding; otherwise sudden → next |
| 5 Which strengthen the rupee (FPI inflows, rate rise vs wider CAD, higher relative inflation) | apply | Yes | **Yes** | N26–N29, N28a–b refresher, practice Q4 |
| 6 Capital-flow limits = technical factor | classify | Yes | **Yes** | N30 |
| 7 India 7%, US 4% → USD at a forward premium | compare | Yes (one flip) | **Yes** | N33a gives the flip outright; practice Q12 |
| 8 LERMS Mar 1992 / unified Mar 1993 / current account convertible Aug 1994 | when | Yes | **Yes** | N39a–N40a, practice Q6 |
| 9 RBI's aim: orderly market, contain excessive volatility; managed float | purpose | Yes | **Yes** | N36, N41 ("India runs a managed float") |
| 10 ₹ → $ → € → ₹ across two centres = compound | define / apply | Partly | **Yes** | N19 now says "two currencies or two centres" vs "three or more" |

v2 also answers questions v1 could not: devaluation vs depreciation (N36a, Q11), July 1991 two-step devaluation
(N39), what current account convertibility means (N40a), and what FEDAI is (N23).

## Check of the v1 findings

| v1 # | Severity | Status in v2 |
|---|---|---|
| 1 Holiday rule pinned to spot | High | **Fixed.** N24 limits spot to "second working day, holidays skipped" with the Monday → Thursday case. N24a puts the preceding/next rule only on a customer's forward delivery date, with the three-working-day test. Practice Q3 is reworded and Q9 added. Correct against FEDAI 1.4 and 5.2 as summarised in our notes. |
| 2 Spot as default quote | Medium | **Fixed.** N23a; practice Q10. |
| 3 Arbitrage by centres only | Medium | **Fixed.** N19; practice Q8 is now three centres and three currencies, with an explanation that covers both readings. |
| 4 Parity vs "higher rates strengthen" | Medium | **Fixed.** N33b separates today's effect from the forward price; N33a gives the flip. (See new finding 1: the definition in N33 needs a small fix.) |
| 5 Name India's regime | Low | **Fixed.** N41. |
| 6 LERMS 40/60 still a lead | Low | **Fixed.** The ack reports the RBI text read; N39a now says "exchange earnings". |
| 7 Introduce FEDAI | Low | **Fixed.** N23. |
| 8 Authorised dealers | Low | **Recorded.** Left to A02, noted in the script header. Acceptable. |
| 9 Saturday rule | Low | No change needed. N16 is fine. |

## Practice answers (all 12) and in-video answers

- practice Q1 b ✓ · Q2 c ✓ (Thu deal → Fri day 1, Mon day 2) · Q3 b ✓ (now scoped to forward delivery) · Q4 c ✓ ·
  Q5 b ✓ · Q6 c ✓ · Q7 c ✓ · Q8 c ✓ · Q9 c ✓ · Q10 c ✓ · Q11 b ✓ · Q12 b ✓.
- N45/N46: Monday spot, no holiday → Wednesday ✓; foreign investment in → strengthens ✓; March 1993 ✓.

## Length

My count of the spoken lines (N00a–N50, cue lines excluded) is **2,006 words**. That is 13.4 min at 150 wpm or
14.3 min at 140 wpm, plus about 22 s of holds: **about 13.8–14.7 minutes, inside 12–15**. There is little headroom
at the slower pace, so the fixes below are written to add no net words.

## New findings

1. **Medium · N33 · "future price" without saying whose price.** "If the future price is lower than today's, that's
   a forward discount. If it's higher, a forward premium." Our quotes are rupees per dollar, so the learner sees the
   USD/INR forward *higher* than spot and is told "higher = premium". Applied to the rupee, that is the wrong answer
   to the most common parity question ("the rupee is at a forward ___": discount). N33a's flip comes one line later,
   but the first rule the learner hears is the one they keep. **Fix N33:** "One more idea. Interest rate parity, and
   it's about a currency's price for a future date. If a currency costs less for a future date than today, it's at a
   forward discount. If it costs more, a forward premium." Cue beats 3–4: price tags labelled "$ in ₹" with the
   future tag *higher* → "$ at premium", and a mirror tag "₹ at discount" (this ties into N33a's flip arrow). About
   +6 words; pay for it by cutting "Not a premium, a discount." in N33a (−5), because the trap card already shows it.

2. **Low · N45 Q2 · inflation not relative.** "higher inflation in India" goes back to the absolute wording that v2
   corrected in N29, N31 and N32. **Fix:** "higher inflation in India than abroad" (+2 words). Pay for it by dropping
   "Got all three?" in N46 (−3).

3. **Low · N42a · "between eleven-thirty and twelve-thirty in the morning".** Twelve-thirty is not morning.
   **Fix:** "between eleven-thirty and twelve-thirty, around midday." (No net change.)

4. **Low · N40a · "freely change rupees into dollars for trade, services or travel".** Current-account
   convertibility still has prohibited items and limits (FEM (Current Account Transactions) Rules, taught in the LRS
   lesson). An examiner's "current account convertibility means no restriction at all" option would look right to
   this learner. **Fix:** "...for trade, services or travel, within the rules. Capital moves have tighter limits."
   (+2 words, −1 "still"; net +1).

5. **Low · N12 · "every deposit, balance and paper claim that stands for it".** Pocket three is rupee-payable paper,
   which does not "stand for" foreign currency. N10b–N11 are clear, so the learner is unlikely to be misled.
   Optional: "Foreign exchange adds the deposits, balances and papers in the three pockets." (No net change.)

No new place in v2 gives a wrong exam answer other than finding 1. In particular, the new lines N24/N24a, N27a,
N28a–b, N33b, N36a, N39 and N40 are correct against the fact sheet.
