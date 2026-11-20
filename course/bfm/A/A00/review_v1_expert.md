# A00 · Review v1 · Subject expert (independent session, 2026-11-20)

**Verdict: ADOPT WITH FIXES.** One High finding (the holiday rule is taught as if it applied to every deal,
including spot; FEDAI limits it to the fixed / last delivery date of a merchant forward contract, and the interbank
rule is different). Five Medium findings: practice Q3 and Q8 wording, the "foreign currency is the note" hook, PPP
stated without "relative to abroad", and two missing exam terms (devaluation and depreciation; direct quote since
August 1993). The rest are Low. Every date, number and definition the script states is otherwise correct against
primary text. No sentence runs over 25 words; the disclosure card, the rule-version card, the online-class voice
and the illustrative labels are all present.

Scope read: `script.md` (N00a–N50), `practice.md`, `claims.csv`, `map_nodes.md`, `numericals.md`, fact sheet
`research/bfm/facts/A1.1-A1.3_A00.md`, `research/bfm/sources/fedai_rules_cutoff.md`, plan §A00, depth checklist
A1.1–A1.3, lesson spec. Primary texts opened in this review: FEDAI Rules 10th ed. updated to 20 Aug 2026 (PDF,
Rules 1.1–1.4, 5.2, 5.7, 8.09); FEMA 1999 s. 2(h), 2(m), 2(n), 2(q) (Indian Kanoon copy of the Act); RBI History
chronology 1991–2000; RBI Annual Report 2025-26 Ch. V (V.14, V.15, V.20, V.22, V.49); FBIL Reference Rate
Methodology v2 (15 Jan 2019).

## Findings

### 1. High · N24 (and cue 4–5, map node 3, `map_nodes.md` node 3, claims row 7, fact sheet #13): holiday rule taught for every deal, including spot
- **What is wrong**: N24 says "Spot means two working days later. And if a holiday falls on the value date, and it
  was known in advance, the deal settles a day earlier." In FEDAI's text the "preceding working day" rule applies
  only to **"the fixed date of delivery or the last date of delivery option"** of a (merchant) forward contract
  (Rule 5.2). A spot deal is by definition deliverable on the "second succeeding working business day": a holiday
  is not a working day, so a known holiday on day 2 pushes spot **later**, never earlier. For **interbank** contracts
  the rule is different again (Rule 8.09): a maturity date later declared a holiday is preponed only when it is a
  month-end and a known holiday; in all other cases it is postponed to the next working day. As written, a learner
  would answer "Monday deal, spot, Wednesday a known holiday" with Tuesday; the right answer is Thursday.
  The script also says "known in advance" without FEDAI's test: **known at least 3 working business days before**
  (Rule 1.4), which is itself an exam point.
- **Source**: FEDAI Rules 10th ed. (updated 20 Aug 2026), Rule 1.4 (known vs suddenly declared holiday), Rule 5.2
  (option period; holiday rule for fixed / last delivery date; ready, value next day, spot, forward), Rule 8.09
  (interbank settlement date change). https://fedai.org.in/UploadPopupPageFiles/FEDAI_Rules_10th_Edition_20Aug2026.pdf
- **Fix** (N24, keep under 25 words a sentence):
  "Now be careful, this is where people slip. Spot does not mean today. Spot means the second working day, and a
  holiday is simply skipped. One more rule, for a customer's forward contract. If its delivery date is a holiday known
  at least three working days ahead, it settles a day earlier. If the holiday is sudden, it moves to the next
  working day. That's chapter two. Deep breath."
  Cue 4: "holiday flag on Day 2 → spot slides to the next working day"; cue 5: a small forward-contract tag "fwd
  contract: known holiday (3+ working days) → preceding day · sudden → next day · FEDAI 1.4, 5.2". Map node 3 and
  `map_nodes.md`: "spot skips holidays; forward delivery date: known → earlier, sudden → later". Claims row 7 and
  fact sheet #13: restrict to "merchant forward contract, fixed or last delivery date (5.2); interbank: 8.09".
  Optionally add one practice item: "Spot deal on Monday; Wednesday is a holiday known a week ahead. Value date?
  → Thursday."

### 2. Medium · practice Q3: same scope error
- **What is wrong**: "The value date of a deal falls on a holiday declared three weeks in advance… settled on:
  b) the preceding working day." True only for the delivery date of a merchant forward contract; false for spot and,
  except at month-end, for interbank deals (Finding 1).
- **Source**: FEDAI Rules 5.2, 8.09 (as above).
- **Fix**: "The fixed delivery date of a customer's forward contract falls on a holiday declared three weeks
  earlier. The contract is delivered on: …" Answer b, explanation "known holiday (declared at least 3 working days
  before, Rule 1.4) → preceding working day; a suddenly declared one → next working day (Rule 5.2)".

### 3. Medium · practice Q8: answer clashes with the script's own definition
- **What is wrong**: N19 defines simple vs compound by **centres** ("Between two centres… Through three or more").
  Q8 names two centres (Mumbai, London) and three currencies, and expects "compound". A learner who follows N19
  picks b.
- **Source**: internal consistency (fact sheet #14 allows "centres/currencies").
- **Fix**: either make Q8 three centres ("buys dollars in Mumbai, sells them for euros in New York, sells the euros
  for rupees in London"), or change N19 to "Between two centres or currencies, it's simple arbitrage. Through three
  or more, it's compound, or triangular." Prefer the N19 change plus three centres in Q8, so both readings agree.

### 4. Medium · N12 (cue 1–2, map node 1): "Foreign currency is the note" is false under FEMA
- **What is wrong**: FEMA s. 2(m) defines foreign currency as "any currency other than Indian currency", and
  s. 2(h) defines **currency** broadly: currency notes, postal notes, postal orders, money orders, cheques, drafts,
  travellers cheques, letters of credit, bills of exchange, promissory notes, credit cards and similar instruments
  RBI notifies. Only s. 2(i) "currency notes" means notes and coins. So the hook "foreign currency = the note,
  foreign exchange = note + claims" teaches a wrong boundary that an exam option can exploit ("a foreign-currency
  cheque is not foreign currency").
- **Source**: FEMA 1999 s. 2(h), 2(i), 2(m), 2(n). https://indiankanoon.org/doc/1401314/ (official copy: India Code
  `a199942.pdf`).
- **Fix** N12: "So the hook is simple. Foreign currency is the money itself, notes and the cheques or drafts that
  carry it. Foreign exchange adds every deposit, balance and claim that stands for it." Cue 1 tag "money vs money +
  claims"; cue 2 the left side shows a note and a cheque. N08 can keep the four notes (they are examples). Map node 1
  wording to match.

### 5. Medium · N29, N31–N32: PPP and inflation stated in absolute terms
- **What is wrong**: "higher inflation at home weakens it" / "high inflation in India makes the rupee…" / "If the
  same basket costs more in rupees here, each rupee buys less, so… worth less against the dollar." The exchange-rate
  effect depends on inflation **relative** to the other country (relative PPP); if US inflation were higher still,
  the rupee would tend to strengthen. Practice Q4 already says "higher inflation in India than abroad"; the script
  should say the same, or an exam option "inflation in both countries rises equally" is answered wrongly.
- **Source**: standard PPP concept (relative PPP); fact sheet #16 and #19 (concept rows).
- **Fix**: N29 "Inflation: higher inflation here than abroad weakens the rupee." N31 clouds "inflation in India
  higher than in the US". N32 second sentence: "If the same basket gets dearer faster in India than in the US, each
  rupee buys less, so over time it's worth less against the dollar."

### 6. Medium · Ch. 4 (N37–N41): two exam terms missing, devaluation vs depreciation (and appreciation)
- **What is wrong**: the script only says "weaker / stronger". "Devaluation" (a deliberate official cut in a fixed
  or pegged rate) versus "depreciation" (a fall by market forces under a float), and "appreciation", are basic
  A1.3 vocabulary and a common exam compare-question. The fact sheet already holds the July 1991 two-step
  devaluation (#26) but the script skips it, though N39 mentions "the crisis of 1991".
- **Source**: RBI History chronology 1991–2000, row July 1991: "Rupee Devalued in two stages. Cumulative devaluation
  about 18 percent in USD terms." https://www.rbi.org.in/History/Brief_Chro1991to2000.html
- **Fix**: N39 first sentence becomes: "Then came the crisis of nineteen ninety-one. In July, the rupee was devalued
  in two steps, about eighteen percent." Add after N36 (or in N40): "Mind two words. A government cut in a pegged
  rate is devaluation. A market fall in a floating rate is depreciation; a rise is appreciation." Cue: a small
  compare card; map node 5 adds "devaluation ≠ depreciation". One practice item on it.

### 7. Medium · N12 / N40: date of the switch to direct quotation missing
- **What is wrong**: N12 says India quotes directly but not since when. The move from indirect to direct quotation
  in **August 1993** is a recurring JAIIB/CAIIB one-liner, sits on the same road as the March 1993 unification, and
  A01 (which teaches direct quotes, N10/N19 area) does not give the date either.
- **Source**: FEDAI Rule 5.7 (direct quotes) for the rule; the August 1993 date appears in bank policy text (Union
  Bank of India, Exchange rate mechanism policy: "India has been following direct method since August 1993",
  https://www.unionbankofindia.co.in/pdf/belg_27_kycamlpolicyexchangeratemechnism.pdf), which is a lead, not a
  primary source. The common coaching date "2 August 1993" was **not** found in an RBI/FEDAI text in this review.
- **Fix**: author to find the FEDAI/RBI text for the switch date; if confirmed, add to N40 "And from August nineteen
  ninety-three, banks quote direct: rupees for one unit of foreign currency." and a claims row. If not confirmed by
  the freeze, leave it out (do not use the coaching date).

### 8. Low · N16: "runs from nine to five"
- FEDAI Rule 1.1 gives the **normal** market hours (9.00 a.m.–5.00 p.m. IST, interbank and client); Rule 1.2 lets
  banks deal beyond them (customers and interbank, NOOP kept, spot roll-over at midnight). As spoken, a learner may
  think dealing outside 9–5 is barred. **Fix**: "In India, the normal market hours for rupee deals are nine in the
  morning to five in the evening, Indian time." Cue clock label "normal market hours".

### 9. Low · N39: LERMS split scope
- The 40/60 split applied to **current account** receipts (RBI: one leg "applicable to 40 per cent of all current
  receipts, essential imports and debt service payments, was determined by the Reserve Bank"). **Fix**: "forty percent
  of current receipts at the official rate, sixty percent at the market rate." Claims row 10 can move from "lead"
  to verified once the RBI text is opened at the freeze (search found RBI statements; the RBI PDFs were not opened).

### 10. Low · N29 / N33: possible felt contradiction
- N29 "higher rates pull money in, and strengthen it" then N33 "higher interest currency trades at a forward
  discount". Both are right (spot effect vs forward pricing), but a beginner may see a clash. **Fix** (optional, one
  line in N33): "That's about the forward price, not today's spot. The sums come in A-zero-five."

### 11. Low · N00d cue 3: evidence chip "Settlement date · Jun 2023, Jul 2024"
- The Jul 2024 item in `items_tagged.csv` is "RTGS Settlement Date in the Indian Market", which the fact sheet itself
  calls a payments topic left out of A00. **Fix**: chip "Settlement date · Jun 2023" only (or keep Jul 2024 only if
  the recall shows it was a forex value-date question).

### 12. Low · Pictures header: "centres lighting west to east"
- The trading day moves east to west (Sydney first, New York last), as N15's cue says. **Fix** header: "centres
  lighting east to west as the sun moves".

### 13. Low · N41 / N44: state the regime by name
- The chapter never says in one line "India's regime today is a managed float" (only N47 does). **Fix** N41 add:
  "So India today is a managed float." (RBI-DRG: "from a par value system to a basket-peg and further to a managed
  float".)

### 14. Low · N49: "one question that most officers get wrong"
- An unsourced claim about officers. **Fix**: "one question that trips up a lot of people."

### 15. Low · opening receipt rates (85.20 / 85.65)
- Labelled illustrative, so not wrong. USD/INR has traded well above 85 since 2025; a viewer in 2027 may find 85 odd.
  Optional: use rates near the market at the freeze, still labelled illustrative (and a move of tens of paise).

### 16. Low · depth checklist A1.1 item 5
- "Spot as the base rate of the interbank market" is not said. Optional half-line in N23: "Spot is the base rate the
  interbank market quotes; forward rates are built on it (A05)."

### 17. Low · claims.csv tidy-ups
- Row 1 version "Act as amended to 1 Jun 2026" is an odd stamp; use "FEMA 1999 as amended; re-check at 31 Dec 2026
  freeze". Add rows for: Saturday not a working day (Rule 1.3), known holiday = 3 working days (1.4), interbank
  holiday rule (8.09), FBIL data platforms and 4 decimals (FBIL §4, §10), RBI AR V.14 (FBIL additional reference
  rates from 5 Jan 2026), FEMA s. 2(h) (after Finding 4).

## Verified correct (primary text opened in this review unless noted)
- FEMA s. 2(m) "foreign currency means any currency other than Indian currency"; s. 2(n) lead-in and clauses
  (i)–(iii), including (iii) drawn outside India, payable in Indian currency (N08–N11, practice Q1). Note (ii) says
  "expressed or drawn in Indian currency"; "drawn in rupees" in N10 is an acceptable shortening.
- FEMA operative from June 2000, replacing FERA 1973 (RBI chronology, 1999 row) (N07).
- FEDAI 5.7 direct quotes (N12); Rule 1.1 9.00–5.00 IST (N16); Rule 1.3 Saturday not a working day (N16); Rule 5.2
  ready/cash same day, value next day, spot second succeeding working day, forward beyond spot (N23, N46 Q1,
  practice Q2 Thursday → Monday).
- Rule 1.4 / 5.2 known vs sudden holiday direction (correct as a forward-contract rule; see Finding 1 for scope).
- Bretton Woods breakdown 1971 → linked to sterling; basket peg from September 1975; par value → basket peg →
  managed float (RBI publication, Dua & Ranjan 2010, as cited in the fact sheet; not re-opened here).
- LERMS March 1992, dual rate (RBI chronology); 40/60 split (RBI statement via search excerpt; see Finding 9).
- Unified exchange rate 1993 (RBI chronology; March 1993 per Dua & Ranjan and RBI FEDAI rate tables "1 March 1993").
- August 1994 current account convertibility, acceptance of IMF Article VIII (RBI chronology) (N40).
- RBI Annual Report 2025-26 (29 May 2026) Ch. V: V.20 "to maintain orderly market conditions and contain excessive
  volatility in the exchange rate"; V.22 "curb excessive volatility in the USD/INR exchange rate"; V.49
  "principle-based, guided by the objective of ensuring orderly movements" (N41 quote card is faithful).
- FBIL reference rate since 10 July 2018 (RBI press release 4 Jul 2018, per fact sheet; RBI pages repeat
  "w.e.f. July 10, 2018") (N42, practice Q7).
- FBIL Methodology v2 (15 Jan 2019): USD/INR from actual spot transactions (Refinitiv and CCIL) in a randomly chosen
  15-minute period within 11.30–12.30; published at around 13.30 on Mumbai business days; EUR, GBP, JPY via
  cross rates, JPY per 100 (N42). No later version found in this review (re-check at freeze; RBI AR V.14 says FBIL
  added reference rates for more trading-partner currencies from 5 Jan 2026).
- Concepts: OTC, follow-the-sun order (N14–N15); interbank vs merchant, merchant = interbank + margin (N21, N43);
  arbitrage keeps prices together (N20); see-saw direction (N27); BoP deficit weakens, inflows strengthen (N29,
  N45–N46 Q2, practice Q4 incl. the irrelevant option); speculative self-fulfilment (N30); interest parity: the
  higher-interest currency at a forward discount (N33, practice Q5); fixed / floating / managed float definitions
  (N36); March 1993 as the market-determined date (practice Q6).
- Lesson spec / §5b: no spoken sentence over 25 words (longest: N16, 21 words); disclosure and rule-version cards
  (N00a); one unnamed teacher, no "Sir"; "Some of you / Others" clouds (N04, N31); check-ins and reactions; practice
  pause and answers; recap map; homework; hand-off question matches A01's opener per plan; illustrative label on the
  receipt rates.
- Depth checklist "Add to our plan" items: A1.1 market features, exchange rate and why it matters, arbitrage card;
  A1.2 three-group frame, technical factors named, "which strengthens the rupee" case with an irrelevant option;
  A1.3 year of the market rate from RBI's own history: all covered.
