# A00 · Review v2 · Subject expert (independent session, 2026-11-20)

**Verdict: ADOPT WITH FIXES.** All v1 High and Medium findings are fixed correctly against the primary texts. One
new **Medium** (N40a says current-account conversion is "free", but FEMA s. 5 lets the Central Government restrict
it). Everything else is Low and can be done in the same pass. Nothing new is false. After the Medium fix (one
sentence), no further expert review is needed; the fix can be checked by the author against FEMA s. 5.

Read for this review: `script.md` v2 (commit 43af577), `review_ack_v1.md`, `practice.md` (Q1–Q12), `claims.csv`,
`map_nodes.md`, fact sheet diff. Primary texts: FEDAI Rules 10th ed. updated to 20 Aug 2026 (Rules 1.1–1.4, 5.2,
5.7, 8.09, read in v1 review); FEMA 1999 s. 2(h), 2(i), 2(j), 2(m), 2(n) (Indian Kanoon copy) and s. 5 (statute text
via search copies); RBI page https://www.rbi.org.in/scripts/bs_viewcontent.aspx?Id=2253 (opened in this review);
RBI History chronology 1991–2000; RBI Annual Report 2025-26 Ch. V; FBIL Reference Rate Methodology v2.

## Part 1 · v1 findings: status

| v1 | Line(s) in v2 | Status |
|---|---|---|
| 1 High: holiday rule scope | N24, N24a, cue, map node 3, claims, fact #13 | **Fixed, correct.** N24 "second working day, so weekends and holidays are simply skipped. A Monday deal with Wednesday a holiday settles on Thursday" matches FEDAI 5.2 ("second succeeding working business day"). N24a limits preceding/next to "a customer's forward contract", with the 3-working-day test (Rule 1.4). Interbank 8.09 correctly kept in fact sheet/claims only. |
| 2 Medium: practice Q3 | Q3, new Q9 | **Fixed, correct.** |
| 3 Medium: arbitrage centres vs currencies | N19, Q8 | **Fixed.** |
| 4 Medium: FEMA s. 2(h) | N12, cue 2, fact #1, claims | **Fixed.** "the money itself", cue shows a note and a cheque; matches s. 2(h). See Low 4 on the fact-sheet note about "FEMA 15/2000-RB". |
| 5 Medium: relative inflation / PPP | N29, N31, N32 | **Fixed** (N45 still absolute; Low 3). |
| 6 Medium: devaluation vs depreciation; July 1991 | N36a, N39, Q11 | **Fixed, correct.** RBI chronology: "Rupee Devalued in two stages. Cumulative devaluation about 18 percent in USD terms." |
| 7 Medium: direct quotes since Aug 1993 | header "Left out on purpose" | **Accepted.** No primary text found by either side; leaving it out is the right call under the facts rule. |
| 8–17 Low | N16, N00d, header, N41, N49, header note, N23a, claims | All taken. |
| 9 Low: LERMS scope | N39a, claims, fact #27 | **Fixed, verified.** RBI page Id=2253: "Under the LERMS, 40 per cent of exchange earnings had to be surrendered at an official rate determined by the Reserve Bank… The balance 60 per cent of exchange earnings was to be converted at rates determined by the market"; "ultimate convergence of the dual rates was made effective from March 1, 1993". See Low 5 on how the source is labelled. |

## Part 2 · Findings on v2

### 1. Medium · N40a: "freely change rupees into dollars" overstates current account convertibility
- **What is wrong**: "Convertible on the current account means you can freely change rupees into dollars for trade,
  services or travel." FEMA s. 5 lets any person draw foreign exchange for a current account transaction, **but** the
  proviso lets the Central Government, in the public interest and in consultation with RBI, impose "reasonable
  restrictions"; these are the FEM (Current Account Transactions) Rules, 2000: Schedule I prohibited (e.g. lottery
  winnings, banned magazines), Schedule II needs Government approval, Schedule III items for individuals within LRS
  limits. An exam option "current account transactions are fully free without any restriction" is false, and N40a
  as worded teaches it.
- **Source**: FEMA 1999 s. 5 and proviso; FEM (Current Account Transactions) Rules, 2000
  (https://www.rbi.org.in/Scripts/bs_viewcontent.aspx?Id=5084); FEMA s. 2(j) (current account transaction).
- **Fix** (two sentences, each under 25 words): "Convertible on the current account means you can change rupees into
  dollars for trade, services or travel without special permission. Only a short list is banned or capped by the
  rules. Capital moves still have limits." Cue 1 tag "trade · services · travel ✓ (a few items banned or capped)".
  Add a claims row (FEMA s. 5 + CAT Rules 2000) and a fact-sheet line under #29.

### 2. Low · N42a: "between eleven-thirty and twelve-thirty in the morning"
- 12.30 is afternoon. **Fix**: "between eleven-thirty and twelve-thirty" (drop "in the morning"), or "late in the
  morning". Source: FBIL Methodology v2 §4.1–4.2 ("11.30 Hours to 12.30 Hours").

### 3. Low · N45 Q2 / N46: "higher inflation in India" still absolute
- Everywhere else now says "higher than abroad / than in the U-S" (v1 finding 5); the recap question reverts.
  **Fix**: N45 "higher inflation in India than abroad"; cue 6 option text the same.

### 4. Low · fact sheet #1: "debit and ATM cards, FEMA 15/2000-RB"
- The notification number was not opened in either review, and this reviewer could not confirm that FEMA
  15/2000-RB is the s. 2(h) notification on debit/ATM cards. It is not voiced, so it is not a script error.
  **Fix**: read the RBI notification that lists the instruments under s. 2(h) and cite it by number, or drop the
  parenthesis.

### 5. Low · claims row "LERMS 40/60" source label
- The page Id=2253 is an RBI Occasional Papers article, Kumar & Lokare, "External Sector Openness and Purchasing
  Power Parity in India: An Annotation" (RBI Department of Economic Analysis and Policy), not an "exchange rate
  management page". It is an RBI publication, so acceptable as a source. **Fix**: relabel the source column and the
  fact-sheet source table (RBI-2253) with the article's title and authors.

### 6. Low · N21 / N43: "Merchant rates are interbank rates plus a margin"
- True of the bank's selling rates; buying rates are interbank **less** a margin (A01 teaches this). "Plus" in A00
  could seed the wrong idea before A01. **Fix**: "Merchant rates are interbank rates with the bank's margin built in."
  N43 "…from the interbank market, with your bank's margin built in." Cue tag "± margin".

### 7. Low · N33: "If the future price is lower than today's, that's a forward discount"
- Correct but unanchored: whose price? In ₹ per $, a lower forward means the **dollar** is at a discount (rupee at a
  premium). N33a's flip line rescues it, but a learner may read "the future rupee rate is lower = rupee at discount".
  **Fix**: "If a currency's future price is lower than today's, that currency is at a forward discount. If higher, a
  forward premium." Cue labels "$ forward < spot → $ at discount".

### 8. Low · N37: 1971 sterling link (optional precision)
- Matches RBI's own text (Dua & Ranjan: "with the breakdown of Bretton Woods in 1971, the rupee was linked with the
  pound sterling"), so it can stay. Historical detail for the author only: the rupee was briefly pegged to the US
  dollar from August to December 1971 before the sterling link was resumed. No change needed unless a primary text
  is quoted that says otherwise.

### 9. Low · N28b: current account content
- "trade, services, and money sent home by Indians abroad" omits primary income (interest, dividends). Fine as a
  30-second refresher; optional: "trade, services, income like interest, and money sent home". Concept (RBI BoP
  presentation, BPM6 headings).

### 10. Low · N24a sentence length
- "If its delivery date turns out to be a holiday known at least three working days ahead, deliver on the working
  day before." is 23 words: within the 25-word rule, the longest in the script. No change required; consider
  splitting for the voice.

## New v2 lines verified correct
- **N10–N10b**: s. 2(n)(i)–(iii) wording; "exporter's dollar account" is a fair example of (i).
- **N14**: OTC = no exchange in the middle; bilateral, mostly electronic.
- **N17a, N18**: participants; hedging = protecting against a rate change, speculation = taking risk to profit from
  one (standard definitions).
- **N22**: value date = the day the money changes hands (settlement).
- **N23**: FEDAI described as the banks' association framing forex dealing rules (FEDAI is the self-regulatory
  association of authorised dealers; its Rules bind members); cash/ready, tom ("value next day" = next working day),
  spot (second succeeding working day), forward (beyond spot): FEDAI 5.2.
- **N23a**: forward duration "computed from spot value date" (FEDAI 5.2); spot as the default interbank quote.
- **N27a**: more ₹ per $ = weaker ₹; 85.20 → 85.65 is a fall of the rupee.
- **N28a–N28b**: BoP as the account book with the world; current vs capital account; not a CA deposit.
- **N29**: CAD = spend more abroad than earn → ₹ weaker; relative inflation; higher rates attract inflows.
- **N31–N32**: relative PPP stated correctly ("dearer faster in India than in the U-S").
- **N33a**: higher-interest currency at forward discount; ₹ discount ⇔ $ premium (Q12 correct).
- **N33b**: separates the spot inflow effect from forward pricing; not contradictory.
- **N36, N36a**: fixed / floating / managed float; devaluation (official, fixed) vs depreciation / appreciation
  (market, floating).
- **N37**: par value under Bretton Woods after WWII; 1971 → sterling (RBI-DRG).
- **N39, N39a**: July 1991, two steps, about 18% (RBI chronology); LERMS March 1992, 40% of exchange earnings at
  the official rate, 60% at market (RBI page Id=2253).
- **N40**: unified March 1993 (RBI Id=2253: 1 March 1993); August 1994 current account convertibility, IMF
  Article VIII (RBI chronology).
- **N41**: managed float; RBI AR 2025-26 V.20 wording faithful.
- **N42, N42a**: FBIL since July 2018; random 15-minute slot within 11.30–12.30; about 13.30 on Mumbai business days
  (FBIL v2 §4, §11). (Only the "in the morning" phrase is off; Low 2.)

## Practice Q1–Q12
All twelve answers are correct against the sources: Q1 b (s. 2(n)(iii)); Q2 c (Thu → Fri, Mon); Q3 b (forward
delivery date, known holiday, FEDAI 1.4/5.2); Q4 c (d irrelevant); Q5 b; Q6 c (1 March 1993); Q7 c (FBIL);
Q8 c (three currencies, three centres); Q9 c (Mon spot, Wed holiday → Thu); Q10 c (spot); Q11 b (devaluation; RBI
chronology July 1991); Q12 b (mirror). Two wording notes, Low, optional: Q3 option d "the bank's choice" is a fair
distractor; Q10 could say "a rate quoted in the interbank market, with no value date stated" to be airtight.

## Rules and voice
No spoken sentence over 25 words (longest N24a, 23). Disclosure and rule-version cards, one unnamed teacher,
"Some of you / Others", check-ins, illustrative labels: all present. Rule-version card still to be re-stamped at the
31 Dec 2026 freeze (header says so).
