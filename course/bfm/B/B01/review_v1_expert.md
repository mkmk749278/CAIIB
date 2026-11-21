# B01 · Review v1 · subject expert (independent session, 2026-11-21)

**Verdict: ADOPT WITH FIXES.** I found one High finding, five Medium and seven Low. Nearly every definition the
script reads out matches its primary text word for word. The High finding is the gap-risk rule. It is taught as
"different dates" only, but RBI's definition also counts **different principal amounts**. Because of that, the
"same date, so not gap" line in N087 and practice Q3 is stated as a general rule, and it is not one. The Mediums are
testable points from the same paragraphs that the lesson leaves out.

## What I checked
- `script.md` v1, all lines N001–N168 and their cues: 168 lines, 3,744 spoken words, 190 s of holds, longest
  sentence 24 words (N073, N123). Also `practice.md` Q1–Q8, `claims.csv` (33 rows), `map_nodes.md`,
  `numericals.md`, the fact sheet `research/bfm/facts/B1.1-B2.5_B01.md` rows 1–48, the B01 plan in `plans_B.md`,
  `depth/B.md` blocks B1.1, B1.2, B2.1–B2.5 and §3 (outdated list), the `depth/C.md` outdated row on "HFT/AFS",
  `items_tagged.csv` (basis risk) and `greetings.md` (B01 row present).
- **Primary texts I read today with curl, one page at a time:**
  - RBI *Risk Management Systems in Banks* (1999), https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=85&Mode=0:
    Introduction, 3.1.1–3.1.2, 7.1, 8.2.2–8.2.3, 9.2, 9.3.1–9.3.7, 12.1–12.2.
  - RBI *Guidance Note on Credit Risk Management* (2002), https://www.rbi.org.in/Scripts/bs_viewcontent.aspx?Id=4787:
    1.1, 7.1, 9.4, 9.8.
  - RBI Investment Portfolio Directions 2025, updated 1 Oct 2026,
    https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx?id=13148: paras 33, 35, 38, 40, 41, 48, 50, 51, 56, 105.
  - RBI circular *Capital Adequacy Guidelines – Review of Trading Book*, 28 Feb 2024,
    https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=12615&Mode=0: paras 2–7. Annex 1 is an rbidocs PDF and
    was not opened.
  - RBI Market Risk Directions 2026, https://www.rbi.org.in/Scripts/BS_ViewMasDirections.aspx?id=13705: paras 1–3, 6
    and the repeal clause.
  - Basel Framework on bis.org: OPE10.1, MAR10.1, CRE50.1, RBC25.1, 25.3–25.5.
  - RBI draft model-risk guidance, https://www.rbi.org.in/Scripts/bs_viewcontent.aspx?Id=5089: definition (7). The
    page is still headed "June xx, 2026", so it is a draft.
  - RBI draft climate disclosure framework, https://www.rbi.org.in/Scripts/bs_viewcontent.aspx?Id=4393: definitions
    (g) and (l).
- **What I could not read:** four BCBS PDFs on bis.org (`irbriskweight.pdf`, `bcbs241.pdf`, `bcbs157.pdf`,
  `bcbs113.pdf`) returned a bot-check page, and I did not try to get past it. I checked the script's EL/UL,
  Herstatt, reputational and compliance lines against those texts as published and as I know them. They are
  consistent, but this review did not re-read them. I also tried to open the in-force CA Directions 2025
  (`BS_ViewMasDirections.aspx?id=13159`, "Updated as on October 07, 2026"); its body did not render (see L6).

## Verified correct (no change needed)
- **Credit risk** (N041–N046, N057): matches RMS99 3.1.2 and CRGN02 1.1, including "actual or perceived
  deterioration in credit quality".
- **Counterparty credit risk** (N047–N048, N061) matches CRE50.1: "unilateral … only the lending bank faces the risk
  of loss … CCR creates a bilateral risk of loss".
- **Transfer and sovereign risk** (N054–N055, N059) match CRGN02 7.1: "able to pay in local currency, but may not be
  able to pay in foreign currency"; sovereigns "may claim immunity from legal process".
- **Market risk** (N064–N065) matches MAR10.1 verbatim.
- **Liquidity risk and its three forms** (N067–N072, N088–N089, N149–N150) match RMS99 8.2.2–8.2.3.
- **Interest rate risk** (N073) matches RMS99 9.2.
- **Basis, embedded option, yield curve, price, reinvestment and net interest position** (N076–N084) match RMS99
  9.3.2–9.3.7, including "favourable basis shifts", "closely associated with the trading book" and "large float is a
  natural hedge".
- **Operational risk** (N095–N097, N114, N119, N155) matches OPE10.1 verbatim. The old RBI wording in N100 is RMS99
  12.2 ("not categoried as market or credit risk").
- **Basel trading-book boundary** (N123) matches RBC25.5.
- **Indian investment categories** (N125–N131, N147–N148, N156–N157) match INV25 paras 33, 38 (proviso), 40, 41(2)–(3),
  48, 50, 51 and 56: HTM at cost with no MTM; AFS at least quarterly, gains and losses to the AFS-Reserve "without
  routing through the Profit & Loss Account"; HFT valued daily through P&L.
- **Today's trading book** (N133) matches the TB24 circular, paras 2–4 and 7: HFT, "applicable from April 1, 2024".
- **Issued, coming** (N135): the Market Risk Directions 2026 para 2 says "shall come into effect from April 1, 2027",
  and para 6 says the trading book "shall include all instruments that are classified as 'Held for Trading'". The
  script correctly calls this "issued, coming".
- **Climate risk** (N107–N108, N117–N118) matches CLIM24 (g) and (l), and the script correctly calls it a draft.
- **Model risk** (N106) matches MRM26 definition (7), and the script correctly calls it a draft.
- **IFR discontinued w.e.f. 18 May 2026** (practice Q7) matches INV25 para 105.
- **Outdated statements:** the script repeats none of those listed in `depth/B.md` §3 or the `depth/C.md` "HFT/AFS"
  row. N134 and N146 break the old "HFT + AFS" rule explicitly.
- **Exam signal** (N004): `items_tagged.csv` has basis risk in 2023-06, 2024-07, 2024-12 and 2026-06, which is 4
  cycles, so "four" is right. (The plan's "5 cycles" is wrong; see L7.)

## Findings

**H1 · High · N075, N079, N087, N092, N121, N154–N155, N161, map node 3, practice Q3. Gap risk is taught as "dates
only".**
- **What is wrong:** N075 defines gap risk as assets and liabilities that "reprice or mature on different dates".
  The key line and "the one thing" are "gap = when". N087 then says "Same date, so it isn't gap risk", and practice
  Q3's explanation says "Gap risk needs different repricing dates".
- **Evidence:** RMS99 9.3.1 reads: "A gap or mismatch risk arises from holding assets and liabilities and
  off-balance sheet items with **different principal amounts, maturity dates or repricing dates**, thereby creating
  exposure to unexpected changes in the level of market interest rates."
  https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=85&Mode=0
- **Why it matters:** on one repricing date, ₹100 crore of loans against ₹80 crore of deposits is still a gap.
- **What a learner would get wrong:** a question like "gap risk arises from different (a) principal amounts (b)
  maturity dates (c) repricing dates (d) all of these" would be answered (b)/(c). A statement question "if repricing
  dates match there is no gap risk" would be marked true.
- **Fix:**
  - N075: "Assets and liabilities of different amounts, or that mature or reprice on different dates. When the
    level of rates moves, the mismatch hurts."
  - Key line (N079, N092, N161, map node 3): "Gap is a mismatch, in amounts or dates. Basis is the rates themselves
    moving by different amounts." A short form that keeps the hook is "gap = mismatch · basis = rates move
    differently". Avoid "how much" alone, because it can be heard as "how much money".
  - N087: "Basis risk. The dates match and the amounts aren't the issue; the two rates moved by different amounts.
    If you said gap, gap is a mismatch of amounts or dates."
  - Practice Q3: give equal amounts in the stem, and say in the explanation that gap risk comes from different
    amounts, maturities or repricing dates.
  - Fact sheet row 19 already quotes "different principal amounts". Only the script and practice need changing.

**M1 · Medium · N064–N067, header picture. RBI 1999 files liquidity and interest rate risk under market risk; the
lesson never says so.**
- **Evidence:** RMS99 7.1 reads: "Market risk takes the form of: Liquidity Risk, Interest Rate Risk, Foreign
  Exchange Rate (Forex) Risk, Commodity Price Risk and Equity Price Risk." This is on fact row 16 but not taught.
- **What is wrong:** the house gives liquidity and interest rate risk their own doors, next to market risk. A
  learner may then reject "liquidity risk is a form of market risk (RBI)", which is a statement IIBF material
  follows.
- **Fix:** add one line at N066, which also gives the analogy its limit (checklist 20): "One thing about the house.
  R-B-I's 1999 note lists liquidity and interest rate risk as forms of market risk. We give them their own doors
  because the bank manages them separately, through A-L-M."

**M2 · Medium · N049–N052. Settlement risk is taught as a loss of principal only. The plan's exception "settlement
risk is both credit and liquidity" is missing.**
- **Evidence:**
  - The plan (`plans_B.md` B01, question kinds) lists "settlement risk is both credit and liquidity" as an
    exception.
  - CRGN02 1.1 lists, among credit risk's forms, "in the case of securities trading businesses: funds/ securities
    settlement may not be effected".
  - The BCBS FX settlement guidance (bcbs241) treats principal risk as credit risk and names liquidity and
    replacement-cost risk beside it. I could not re-read it (bot check). Open the PDF at the freeze and add the
    paragraph to fact row 13.
- **Fix:** one sentence after N049: "So it's a credit risk, because the full value can be lost, and a liquidity
  risk, because cash you counted on today isn't there." Add the matching clause to the N052 answer.

**M3 · Medium · N053–N055. Only two of the five parts of country risk are taught.**
- **Evidence:** CRGN02 7.1 reads: "Country risk comprises of the following risks: Transfer risk … Sovereign risk …
  **Non-sovereign or political risk** arises when political environment or legislative process of a country leads
  to Government taking over the assets of the financial entity (e.g. nationalisation) … also referred to as risk of
  appropriation and expropriation … **Cross border risk** … **Currency risk** …"
  https://www.rbi.org.in/Scripts/bs_viewcontent.aspx?Id=4787
- **Why it matters:** "nationalisation of the borrower's assets is which risk?" is a fair question, and the lesson
  cannot answer it.
- **Fix:**
  - Add to fact row 14: political (non-sovereign) risk, cross-border risk, currency risk.
  - Add one line after N055: "And if a government takes over the borrower's assets, nationalisation, that's
    political risk."
  - Add to the map: "country: transfer (core) · sovereign · political".

**M4 · Medium · N095–N101. Plan v3 item (8), "transaction and compliance risk placed under operational risk", is
not done.**
- **Evidence:**
  - `depth/B.md` B2.5: "Operational risk definition; transaction risk; compliance (integrity) risk … Add to our plan:
    … transaction risk".
  - RMS99 12.1 reads: "The most important type of operational risk involves breakdowns in internal controls and
    corporate governance. Such breakdowns can lead to financial loss through error, fraud, or failure to perform in
    a timely manner." This is testable and is not on the fact sheet.
- **What is wrong:**
  - The only "transaction risk" taught is the credit sense (N043, correct per RMS99 3.1.2). A learner who meets
    "transaction risk" as a form of operational risk will be confused.
  - Compliance risk is placed only in the "weather".
- **Fix:**
  - Add the RMS99 12.1 sentence as a fact row and one spoken line in ch4.
  - Find the primary source for "transaction risk and compliance risk as forms of operational risk" (RBI *Guidance
    Note on Management of Operational Risk*, Oct 2005; verify) and add a fact row.
  - Then one line: "The same words mean different things: transaction risk under credit is default on one deal;
    under operational risk it's a loss from errors in processing deals." Also say once that compliance risk overlaps
    the legal risk that Basel puts inside operational risk.
  - If no primary text is found, record that in the ack and keep compliance in the weather.

**M5 · Medium · N011–N016, ch1–ch2. B2.1 risk identification and "one loan, many risks" (plan v3 item 3) are
missing; fact row 8 is unused.**
- **Evidence:** RMS99 3.1.1 reads: "Lending involves a number of risks. In addition to the risks related to
  creditworthiness of the counterparty, the banks are also exposed to interest rate, forex and country risks." The
  plan asks for identification at transaction, portfolio and bank level, and the drill.
- **What is wrong:** the branch story shows one morning with many events, not one exposure with many risks.
- **Fix:**
  - One line near N043: "Risk is spotted at three levels: the single deal, the portfolio, and the bank as a whole."
  - One check in ch2 or the mixed round: "A dollar loan to a borrower abroad, at a floating rate. Name four risks."
    Answer: credit, interest rate, forex and country, per R-B-I.

**L1 · Low · N020.** The script says "R-B-I puts banks' risks in two groups", then assigns each risk to a group.
RMS99's Introduction only lists "financial and non-financial risks viz., credit, … operational, etc." and does not
split them. Fix: "R-B-I says banks face financial and non-financial risks. Roughly, the financial ones are … and the
non-financial ones …".

**L2 · Low · N041.** RBI's own 2002 definition is not given: "Credit risk is defined as the possibility of losses
associated with diminution in the credit quality of borrowers or counterparties" (CRGN02 1.1). N045 already
paraphrases its second half. Fix: add the sentence to fact row 10 and to N045's card, "R-B-I 2002: credit risk =
losses from diminution in credit quality".

**L3 · Low · N101.** "Penalties from the regulator" narrows "legal or regulatory sanctions" (COMP05 para 3). Fix:
"legal or regulator's penalties".

**L4 · Low · N140.** "Derivatives all sit outside the balance sheet" is not right for HFT derivatives. INV25 41(2)
requires HFT instruments to be fair valued daily with the change in P&L, so their fair value is on the books. Fix:
"Their face amounts sit outside the balance sheet" (the cue can stay).

**L5 · Low · N050.** "In the middle of the day's payments" is not on the fact sheet. It is roughly right: Herstatt
was closed after its Deutsche Mark receipts but before it paid the dollar side. Fix: either add a fact row from the
bcbs241 annex at the freeze, or say "before it had paid its side of the day's deals".

**L6 · Low · fact rows 41, 43; claims row "Trading book for capital = HFT from 1 Apr 2024".**
- The rule in force on 31 Dec 2026 is now consolidated in the *Prudential Norms on Capital Adequacy Directions,
  2025*. The MR26 repeal clause names its Chapter IV "Capital charge for market risk" part as the text MR26
  replaces. The Feb 2024 circular is no longer the right citation.
- Fix: at the freeze, cite the CA Directions 2025 (`BS_ViewMasDirections.aspx?id=13159`, updated 7 Oct 2026) with
  the paragraph that defines the trading book. Its body did not render in this session.
- Fix: also check the Nov 2025 repeal annexes for the 7 Oct 1999 guidance note. The page I fetched shows no
  withdrawal banner, but if it was repealed, say "R-B-I's 1999 guidance note" where the script quotes it (N067,
  N074, N078, N082).

**L7 · Low · `plans_B.md` B01 "Evidence".** It says basis risk came up in "5 cycles", but `items_tagged.csv` shows
4. The script and the fact sheet are right. Fix: record it in `B/STATUS.md` so the plan line is corrected.

## 30-item checklist (`teaching_method.md` §7)

| # | Mark | Note |
|---|---|---|
| 1 | Yes | The rule version is on the opening card; "6 of 7 cycles" is a true number; the goal is in N003. No AI-voice line: CLAUDE.md (2026-11-21) overrides this part of the item. |
| 2 | Yes | N007 (Module A) and N009 (JAIIB), with answers and reasons. B01 opens the module. |
| 3 | Yes | N007–N008 |
| 4 | Yes | Five chapters. Ch3 is the longest, at about 5 min. |
| 5 | Yes | N038, N063, N093–N095, N120–N122 |
| 6 | Yes | N039→N045; N014→N109–N112; N010→N140 |
| 7 | Yes | |
| 8 | Yes | Longest sentence 24 words |
| 9 | Yes | N026–N028 (EL/UL) |
| 10 | Yes | N040, N098, N132 |
| 11 | Yes | 2–3 questions per chapter; holds of 3–4 s |
| 12 | Yes | N152–N157 |
| 13 | N.A. | No numericals (said at N165 cue) |
| 14 | Yes | |
| 15 | Yes | Not timed; cues name their words |
| 16 | Yes | |
| 17 | Yes | |
| 18 | Yes | |
| 19 | Yes | Music-out spans in the header |
| 20 | No | The house/doors picture never states its limit (see M1) |
| 21 | Yes | N158–N165 |
| 22 | Yes | N167 |
| 23 | Yes | |
| 24 | No | N020 attribution (L1) and N050 detail (L5) are not on the fact sheet |
| 25 | Yes | N004 checked against `items_tagged.csv` |
| 26 | Yes | |
| 27 | Yes | No resemblance found; all wording is our own |
| 28 | Yes | |
| 29 | Yes | `greetings.md` row B01 |
| 30 | No | Not until H1 and M1–M3 are fixed (gap-risk components, market-risk forms, country-risk parts) |
