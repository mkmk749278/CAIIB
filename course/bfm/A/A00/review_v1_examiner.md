# A00 · Examiner review v1 (independent session, fresh context)

**Verdict: ADOPT WITH FIXES.** One High finding (the holiday rule is attached to spot in a way that gives a wrong
settlement-date answer, and settlement-date questions are a recalled item), three Medium, five Low. All fixes fit
in the current length (about 70 words added, about 60 cut).

Reviewed 2026-11-20: `course/bfm/A/A00/script.md` (v1), `practice.md`, `claims.csv`, against
`research/bfm/syllabus_official.md` (A1.1–A1.3), fact sheet `research/bfm/facts/A1.1-A1.3_A00.md`,
`research/bfm/depth/A.md` §A1.1–A1.3, FEDAI notes `research/bfm/sources/fedai_rules_cutoff.md`, and recalled items
(`items_tagged.csv`: "Forex Settlement Date Calculation" Jun 2023, "Factors Affecting Foreign Exchange Rates"
Jun 2023, "RTGS Settlement Date" Jul 2024; `fullpaper_tagged.csv` OB Dec 2025 Q71: "All the exchange rates quoted on
the screen or in print are for ___ unless otherwise mentioned").

## Step 1 · Ten exam questions (written before reading the script)

**Q1 (define).** Under FEMA 1999, which of these is NOT "foreign exchange"?
a) a USD balance held by an Indian bank with its New York correspondent
b) a draft drawn by a bank in Dubai, payable in Indian rupees
c) a travellers cheque expressed in rupees but payable in US dollars
d) a rupee demand draft issued by a Mumbai bank, payable in Chennai in rupees
**Answer: d.** (a) is s. 2(n)(i), (c) is s. 2(n)(ii), (b) is s. 2(n)(iii); (d) is Indian currency, s. 2(q).
Source: FEMA s. 2(m), 2(n), 2(q); fact sheet F1–F4.

**Q2 (who/when, recalled form).** All exchange rates quoted on dealers' screens or in print are for ___ delivery
unless otherwise mentioned. a) cash b) tom c) spot d) one-month forward
**Answer: c.** Spot is the base rate of the interbank market; forward periods are counted from the spot date.
Source: FEDAI Rule 5.2 (forward counted from spot); depth A.md A1.1 item 5 [both]; recalled OB Dec 2025 Q71.

**Q3 (apply, exception).** A spot USD/INR deal is struck on Monday. Wednesday was declared a bank holiday a month
earlier. What is the value date? a) Tuesday b) Wednesday c) Thursday d) Friday
**Answer: c.** Spot is the second *working* day after the deal; a holiday known in advance is not a working day, so
day 1 = Tuesday, day 2 = Thursday. (The "preceding working day" rule is for a contract whose fixed delivery date
turns out to fall on a holiday; it does not pull a spot deal back to tom.)
Source: FEDAI Rule 5.2 (spot = second working day); 1.4 (holiday rule for delivery dates).

**Q4 (exception).** A customer's forward contract matures on 14 August. On 11 August (two working days before) the
State declares 14 August a holiday. Delivery is on: a) the preceding working day b) the next working day c) 14 August
d) the customer's choice
**Answer: b.** Only a holiday known at least three working days before moves delivery to the preceding working day;
one declared later is treated as sudden, so the next working day.
Source: FEDAI Rules 1.4, 5.2 (notes, line 42).

**Q5 (apply to a case).** Which of these, other things equal, will strengthen the rupee against the dollar?
(i) heavy FPI inflows into Indian equities (ii) RBI raises the policy rate (iii) India's current account deficit widens
(iv) India's inflation rises faster than US inflation.
a) i and ii b) i and iii c) ii and iv d) iii and iv
**Answer: a.** Inflows add dollar supply; higher rates attract capital; a wider CAD and higher relative inflation
weaken the rupee. Source: fact sheet F15, F16, F19 (concept).

**Q6 (compare / classify).** Restrictions on capital movements imposed by a government are classed as which factor
affecting exchange rates? a) fundamental b) technical c) speculative d) psychological
**Answer: b.** Source: fact sheet F17 (concept; three-group frame).

**Q7 (compare).** One-year interest rates are 7% in India and 4% in the USA. By interest rate parity, in the forward
market the US dollar against the rupee will be at a: a) premium b) discount c) par d) cannot say
**Answer: a.** The higher-interest currency (rupee) is at a forward discount, so the dollar is at a premium.
Source: fact sheet F20.

**Q8 (who/when).** Match: LERMS (dual rate) / unified market-determined rate / current account convertibility (IMF
Article VIII). **Answer:** March 1992 / March 1993 / August 1994. Source: RBI History chronology 1991–2000; Dua &
Ranjan (RBI, 2010); fact sheet F27–F29.

**Q9 (purpose).** RBI's stated aim in intervening in the forex market is to: a) keep USD/INR within a pre-announced
band b) hold the rupee at a target level c) maintain orderly conditions and contain excessive volatility d) keep
exports competitive by weakening the rupee
**Answer: c.** India's regime is a managed float with no target or band. Source: RBI Annual Report 2025-26, Ch. V,
paras V.20, V.22, V.49; fact sheet F30.

**Q10 (define, apply).** A dealer in Mumbai buys USD with INR, sells the USD for EUR in London, and sells the EUR for
INR in Mumbai, profiting from rate gaps at the same moment. This is: a) simple arbitrage b) compound (triangular)
arbitrage c) hedging d) speculation
**Answer: b.** Three currencies are involved (compound arbitrage = three or more currencies/centres), although only two
centres are used. Source: fact sheet F14 (concept).

## Step 2 · Could a learner who watched only A00 answer them?

| Q | Kind | Answer from A00 only? | Why |
|---|---|---|---|
| 1 | define | **Yes** | N08–N12 teach s. 2(m) and all three pockets; practice Q1 drills it. |
| 2 | who/when (recalled) | **No** | N23 defines spot but never says spot is the default/base quote and the start point for forward periods. |
| 3 | apply / exception | **No, and misleads** | N24 puts "known holiday → a day earlier" right after "spot = two working days later". A learner applies it and answers Tuesday (or Friday in a Thursday-deal case): the tom date, not spot. |
| 4 | exception | **Partly** | Known vs sudden is taught, but "known" is undefined; the 3-working-day threshold that decides this question is missing. |
| 5 | apply | **Yes** | N26–N30, N45–N46, practice Q4. |
| 6 | classify | **Yes** | N30: "limits on capital moving in and out" under technical. |
| 7 | compare | **Yes** (one inversion) | N33 gives the discount rule; the learner must flip it for the dollar. Practice does not drill the flip. |
| 8 | when | **Yes** | N39–N40, practice Q6. |
| 9 | purpose | **Yes** | N36, N41; "managed float" is said in N47 but not tied to India in N41 (see L2). |
| 10 | define/apply | **Partly** | N19 defines simple/compound by *centres* only; practice Q8 (two centres, three currencies) has answer c, which contradicts the lesson's own definition. |

Score: 6 Yes, 2 Partly, 2 No. Both Nos sit in the settlement-date area, which is the one recalled-question cluster
this lesson owns.

## Findings

1. **High · N24 (and practice Q3) · holiday rule pinned to spot.** As written ("Spot means two working days later.
   And if a holiday falls on the value date, and it was known in advance, the deal settles a day earlier"), a learner
   computes spot by calendar and then pulls it back, landing on the tom date. Spot counts working days only, so a
   holiday known in advance is simply skipped (it pushes spot *later*). The preceding / next working day rule
   (FEDAI 1.4, 5.2) is for a contract's fixed delivery date (forwards, option-period ends) that falls on a holiday,
   with "known" meaning at least three working days before.
   **Fix (replace the last three sentences of N24):** "Spot does not mean today. Spot means the second *working*
   day, so weekends and holidays known in advance are simply skipped. The holiday rule is for a forward contract
   whose delivery date turns out to be a holiday. Declared at least three working days before? Deliver on the
   preceding working day. Declared later, suddenly? The next working day. That's chapter two. Deep breath."
   Cue: beat 4 becomes a calendar "Mon deal · Tue · ~~Wed holiday~~ · Thu = spot"; beats 5–6 keep the two arrows but
   label the card "forward delivery date on a holiday" and add "≥ 3 working days' notice". Practice Q3: reword the
   stem to "The delivery date of a forward contract falls on a holiday declared three weeks in advance" and add a
   new practice question in the Q3 (examiner Q3 above) form: Monday spot deal, Wednesday known holiday → Thursday.
   Also have the expert reviewer confirm the exact wording of FEDAI 1.4 in the 10th edition before voicing.
   (Net about +25 words.)

2. **Medium · N23 · spot as the default quote is missing (recalled item, OB Dec 2025 Q71).** Add after "Spot,
   settled on the second working day after the deal.": "Spot is the market's base rate. Any rate on a dealer's
   screen is a spot rate unless it says otherwise, and forward periods are counted from the spot date." Cue: box 3
   gets a small "default quote" tag; arrow from box 3 to box 4 "counted from spot". Add practice question 9 in the
   recalled form (answer: spot). (+30 words)

3. **Medium · N19 vs practice Q8 · arbitrage defined by centres only.** The lesson says "Between two centres, it's
   simple ... Through three or more, it's compound", but practice Q8 (Mumbai and London, three currencies) answers
   compound. Exam stems use currencies as often as centres. **Fix N19:** "With two currencies or two centres, it's
   simple arbitrage. With three or more, like rupee to dollar to euro and back to rupee, it's compound, or
   triangular, arbitrage." Cue beat 4: triangle labelled ₹ → $ → € → ₹. Keep practice Q8 and its answer; change
   its explanation to "three currencies: compound (triangular), even though only two centres are used". (+10 words)

4. **Medium · N29 / N33 · "higher rates strengthen" next to "higher-interest currency is at a forward discount"
   without a bridge.** A learner who meets "Higher interest rates in India will lead to ___ of the rupee"
   (appreciation) and an IRP question can mix the two and pick "discount" for the spot effect or "strengthen" for the
   forward. **Fix N33, add one sentence after "Not a premium, a discount.":** "Don't mix this with chapter three's
   push: higher rates pull money in and lift the currency today; parity is about the forward price, which sits at a
   discount." Also add the flip: "So if the rupee is at a discount, the dollar is at a premium." (+35 words) and
   change practice Q5 or add one item asking for the dollar's position (examiner Q7 form).

5. **Low · N41 · India's present regime not named in one line.** Add "That's a managed float." after "It doesn't fix
   the rate." A direct "India follows which regime?" question is common; today only the recap (N47) implies it. (+4
   words)

6. **Low · N39 · LERMS 40/60 is still a lead.** `claims.csv` marks the 40% / 60% split "lead: read the RBI text once
   at freeze". It is voiced as fact. Do not voice N39 until the RBI text is read; also say "current account receipts"
   (the fact sheet's wording) instead of "receipts".

7. **Low · N23 · FEDAI never introduced.** The learner hears "FEDAI gives four names" with no idea what FEDAI is.
   Add: "FEDAI, the banks' own association that sets the rules for forex dealing," (+11 words). A "who frames the
   rules for interbank forex dealings" question is then answerable.

8. **Low · N17 · authorised dealers not named.** Who may deal in forex in India (authorised persons / AD banks
   licensed by RBI under FEMA s. 10) is an easy who-question under "markets". Optional: "Banks here are authorised
   dealers, licensed by R-B-I under FEMA." Needs a fact-sheet row (FEMA s. 2(c), s. 10) before use; otherwise leave
   to its own lesson and record why.

9. **Low · N16 · Saturday rule.** Fine for the exam; the claims row keeps the "except individual transactions under
   1.2" nuance. No change needed; just do not turn it into a practice question without the exception.

**Practice and in-video answers checked:** N45/N46 answers correct (Monday spot → Wednesday; foreign investment in;
March 1993). `practice.md` Q1, Q2, Q4, Q5, Q6, Q7 correct. Q3 correct only if read as a forward delivery date (fix in
finding 1). Q8 answer correct but contradicts N19 (finding 3).

**Cuts to pay for about +115 words (keep within 12–15 min):** N00b drop "So settle in, notifications on silent, and
keep a pen handy." (−12); N13 drop "No trading floor where everyone meets." (−6, the crossed building already says
it); N15 shorten to "The day starts in Sydney and Tokyo and ends in New York, so somewhere it's open round the clock
on weekdays." (−8); N17 drop "And people like you and me." → "And individuals." (−3); N12a drop "Stretch for a
second." (−4); N34 drop "Got those two? Good." (−4); N44 drop "Neither of our two clouds had it fully right." (−9,
the half-tick cue shows it). Net about +70 words, about 30 s; the lesson stays near 13.5 minutes.
