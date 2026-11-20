# Module C (Treasury Management): depth checklist

Draft 1, 2026-11-20. Purpose: make sure our Module C lessons miss no sub-point that the exam needs, sub-topic by
sub-topic of the official syllabus. Rule version for every fact: **31 Dec 2026** (May/June 2027 exam).

**Inputs used**
- Scope: `research/bfm/syllabus_official.md` (Module C, C1.1–C7.5) and `research/bfm/coverage.csv` (C rows; the
  "partial" rows C1.2, C2.4, C7.2, C7.5 get extra attention below).
- Our plans: `course/bfm/C/plans_C.md` (C01–C09), `course/bfm/D/plans_D.md` (D01), `research/bfm/course_plan.md` §3,
  and the A/B plans for the videos that carry C sub-topics (A05, A13, A19/A19b, B09, B11).
- Current rules: `research/bfm/regulatory_updates.md` (repo 5.50% from 7 Oct 2026, CRR 3%, daily CRR 99%, PV01 cap
  removed, FERR, no rebooking, USD 5 m hedging without underlying, ECB overhaul, etc.).
- Two public YouTube class transcripts (auto-captions): **OB** = `C_oliveboard.txt` (concept lecture + MCQs, about
  4 h 50 min) and **PR** = `C_prep.txt` (statement-based MCQ practice class, about 3 h 30 min).

**Caveats**
- The transcripts were used only to see *which sub-points* teachers cover and *how deep*. Nothing here is copied from
  them: no sentences, examples, numbers, mnemonics or questions. Where a class states a rule, rate or limit, this file
  only records "states X" plus the primary source to check.
- The transcripts are **not** a source of facts. Several class statements are stale or wrong (list in §3). Every
  number in our lessons comes from the primary source named under "Verify".
- Auto-captions garble names and years (e.g. "NDS ... 2022", "NDS-OM ... 2025", "FEMDA 1958"); such points are
  flagged, not trusted.
- **Depth finding:** neither class solves a single treasury numerical (no T-Bill yield, bond price, YTM, duration,
  modified duration, BPV, VaR or forward-rate sum). OB defines VaR and duration in one line each; PR is all statement
  MCQs. So our numericals (C03, C05, C06, B09, A05) already go *beyond* the classes; the gaps found below are almost
  all **theory and rule sub-points**, which matters because FP1 had 27 Module C questions, mostly plain theory.
- Marks: **[both]** = both classes cover it; **[one: OB]** / **[one: PR]** = only one does. "Our plan has": yes /
  partly / no, judged against the one-page plans (draft 1), not scripts.

---

## 1. Sub-topic blocks

### C1 Introduction to Treasury Management

#### C1.1 The concept; functions of integrated treasury · video C01
Teachers cover:
- Treasury as the bridge between the bank's core book (deposits, loans) and the financial markets; borrows, lends,
  invests and trades for the bank [both]
- Integrated treasury = money market, forex and securities (debt and equity) desks run as one coordinated unit;
  why: a move in one market spills into the others, so surpluses and deficits are switched across markets [both]
- Drivers of integration: cash-flow management across currencies, interest arbitrage, access to global funds
  (FDI, FPI, ECB routed through treasury), corporate demand for hedging and advisory, risk management, technology,
  reserve requirements [both]
- Functions list: meeting CRR/SLR, global cash management across branches, merchant/advisory services, profit
  optimisation (forex, money market, securities), risk management [one: OB; PR names CRR/SLR as a function → both
  for the reserve function]
- Three roles: liquidity management, proprietary trading, risk management (ALM support, derivatives for clients)
  [both]
- Three books of the treasury: ALM book, merchant (customer) book, trading book [one: PR]
- Treasury clearance needed before a foreign-currency loan is sanctioned (availability and cost of FC funds)
  [one: PR]
- Banks may not short-sell equities (statement question) [one: PR]

Our plan has: integrated treasury idea **yes** (ch1); drivers **no**; functions list **partly**; three roles **no**;
three books **no**; FC-advance clearance **no**; short-sale point **no**.

Add to our plan (C01 ch1):
1. Drivers of integration (5–6 named) on one card.
2. Functions list incl. reserve management and global cash management.
3. The three roles (liquidity, proprietary, risk management).
4. The three books (ALM, merchant, trading) and one example per book [one, but it is how statement MCQs classify
   activities].

Verify: short selling by banks: RBI directions on short sale of G-secs and the investment-portfolio directions
(2023, now in the 2025 consolidated MD); FC advance funding: RBI MD on risk management and inter-bank dealings
(forex), as consolidated in 2025.

#### C1.2 The process of globalisation · video C01 · **partial row**
Teachers cover:
- Meaning: tying the domestic economy to the world economy with freer capital flows [both]
- Capital-account routes: portfolio investment, direct investment, ECB, equity/debt issued abroad (ADR/GDR/FCCB),
  cross-border M&A; technology fees and royalties are current-account items [both: OB lists routes, PR tests
  current vs capital classification]
- India has partial, not full, capital-account convertibility [one: PR]
- Globalisation does not remove regulation [one: PR]
- Impact on treasury, three ways: (a) domestic rates and the exchange rate follow global rates and flows;
  (b) new market infrastructure and regulators (SEBI, IRDAI, CCIL as guaranteed settlement, depositories);
  (c) wider product basket (rupee derivatives, IRFs, CDS) [both: (a) and (c) both; (b) one: OB]
- Portfolio flows can add volatility to domestic markets [one: PR]
- Banks' own overseas borrowing/investment within a ceiling linked to Tier 1 [one: PR]

Our plan has: only a trap line ("globalisation question, FP1 Q70") → **no** real content.

Add to our plan (C01, a short new segment in ch1):
1. Meaning + "not deregulation" + partial convertibility.
2. Capital-account routes vs current-account items (sorting card: FDI, FPI, ECB, ADR/GDR, M&A vs royalty, fees).
3. The three impacts on treasury (rates/FX linkage; infrastructure: CCIL, depositories, regulators; product
   expansion).
4. Banks' overseas borrowing and investment ceiling (one line, link C2.4).

Verify: FEMA 1999 s.6 and the FEM (Permissible Capital Account Transactions) / current account rules; banks'
overseas FC borrowing limit (RBI MD on risk management and inter-bank dealings, consolidated 2025).

#### C1.3 Evolving role of treasury as profit centre · video C01
Teachers cover:
- From service/cost centre (reserves, short-term cash) to profit centre after the 1990s reforms [both]
- Why treasury profit is attractive: low credit risk (regulated counterparties), leverage, low operating cost
  (few dealers, no branches), volume over margin; needs little capital [both]
- Sources of profit: forex merchant spread, money-market deployment, investment income, trading gains; strategic
  stakes in subsidiaries are not for short-term profit [one: OB]
- Interest arbitrage (domestic vs foreign, via forex swap) with a worked illustration [both]
- Arbitrage between OTC forward and exchange futures prices [one: OB]
- Arbitrage is usually not available between two fully convertible currencies (swap cost equals the rate gap)
  [one: PR]
- Trading/speculative income (carries market risk) vs arbitrage (near risk-free) [both]
- Customer products: structured/hedging deals at a margin over interbank rates [both]
- Classifying given activities as arbitrage / merchant / speculation / trading [one: PR]
- Banks keep overnight open positions small [one: PR]

Our plan has: "treasury as a profit centre" **partly** (ch1); worked arbitrage **no**; activity classification **no**.

Add to our plan (C01 ch1, or a callback in A05):
1. Four reasons treasury profit is attractive.
2. Sources of treasury income (one bar per source).
3. Covered interest arbitrage worked once with our own numbers (link A05 interest parity) and why it disappears
   between two free currencies.
4. Sorting exercise: arbitrage vs merchant vs speculation vs trading.

Verify: no regulatory fact; parity logic is standard (FEDAI forward-rate conventions for the swap points used).

#### C1.4 Organisation of treasury · video C01
Teachers cover:
- Two forms: a department inside the bank vs a specialised branch (own GL/P&L, may be an AD, settles directly);
  which banks prefer which [both]
- Head of treasury at senior level [one: OB]
- Front office (dealing room): executes deals only, secondary market mainly, may bid in primary auctions, no
  settlement; chief dealer; profit centre [both]
- Mid office: independent risk monitoring, limit and stop-loss checks, MIS to top management/ALCO; reports outside
  the treasury head [both]
- Back office: independent confirmation with counterparty, settlement on value date, accounting, reconciliation,
  flags breaches [both]
- M2M valuation done by mid office (and back office) [one: PR]
- Case: dealer and back office under one manager, mid-office reports ignored → structural control failure [one: PR]
- Support units: investment cell (primary market, proposals, approvals), accounts, systems, connectivity
  (SWIFT, RTGS/NEFT) [one: OB]

Our plan has: front/mid/back **yes** (ch2); department vs branch **no**; reporting-line case **no**; support units
**no**.

Add to our plan (C01 ch2):
1. Department vs specialised-branch form (two-column card).
2. The segregation case: who must not report to whom; mid office independent of the treasury head.
3. Who confirms deals (back office, independently) and who values (mid/back) as a trap card.

Verify: RBI investment-portfolio directions (2023; segregation of front, mid, back office) and the internal-control
guidelines for forex/treasury in the consolidated 2025 MDs; FEDAI rules for dealing-room controls.

### C2 Treasury Products

#### C2.1 Products of foreign exchange markets · videos C01, A05, C08
Teachers cover:
- Features of the forex market: global, virtual (no floor), screen-transparent, fast information, round-the-clock
  liquidity across time zones, two-way quotes; a narrow spread signals liquidity [both]
- Freely convertible currencies vs partly convertible INR (still liquid) [both]
- Value dates: cash/value today, tom, spot (two working days; holiday shifts the date) [both]
- Forward: premium/discount reflects the interest-rate differential (in efficient markets), not volatility [both]
- Tom premium/discount reflects the overnight rate gap [one: PR]
- Swap = spot + forward (or forward + forward) [both]
- Nostro balances earn nothing unless a sweep is agreed [one: PR]
- Deploying FC surplus: interbank placements, overseas money-market paper of a minimum rating, within limits;
  rediscounting a foreign bill *with* recourse stays a credit exposure [one: PR]
- Using a USD/INR buy-sell swap to raise rupees for a short need (case) [one: PR]

Our plan has: value dates and forwards **yes** (A05); swaps **yes** (C08); market features **no**; nostro interest and
FC surplus deployment **no**; swap-funding case **no**.

Add to our plan:
1. C01: one card of forex-market features (6 words with a picture each).
2. C08 (or A05): swap used to fund a rupee need, own numbers [one, but the syllabus product list implies it].
3. C01: where the treasury may place FC surplus, and nostro balances non-interest-bearing [one].

Verify: FEDAI rules (value dates, holidays); RBI MD on risk management and inter-bank dealings (FC fund deployment,
nostro), as consolidated in 2025.

#### C2.2 Money market products · videos C02, C03
Teachers cover:
- Money market = funds up to one year [both]
- Call (overnight), notice (2–14 days), term (15 days to 1 year) [both]
- Prudential limits on call/notice borrowing and lending for banks (as % of capital funds, fortnight average and
  single day) and for PDs (% of NOF) [one: PR]
- Interbank lending carries counterparty risk [one: PR]
- T-Bills: issued for GoI by RBI auction, 91/182/364 days, at a discount, redeemed at par; non-competitive bids for
  small investors (a reserved share) [both]
- CMBs: below 91 days, for temporary GoI cash mismatches; SLR-eligible; no non-competitive window [both: OB defines,
  PR tests features]
- CP: issuers, tenor range, rating, IPA must be a scheduled bank, eligibility of LLPs/trusts (net worth, standard
  fund-based facilities), dual rating for large issues and use of the lower one, buyback only after a minimum
  period; why credit risk is low [both]
- CD: issued by banks/FIs, negotiable, demat, at discount, tenor range, no premature closure/buyback by issuer
  [both]
- Repo/reverse repo in the market; eligible collateral; securities of related entities barred [both: OB defines, PR
  tests rules]
- TREPS (older CBLO) as a money-market segment [one: OB]
- Bill rediscounting scheme: tenor band, genuine trade bills only, accommodation bills barred, interest front-ended
  [one: PR]
- OMOs: RBI buys to inject, sells to absorb [one: OB]

Our plan has: call/notice/term, TREPS, repo, CP and CD issuers/size/tenor/rating **yes** (C02 ch1–2); T-Bill/CMB sums
**yes** (C03); call-market prudential limits **no**; CP buyback, dual rating, IPA **no**; CD no-premature **no**;
repo collateral and related-party bar **no**; T-Bill auction mechanics (non-competitive share, uniform vs multiple
price) **no**; BRDS **no**; OMO **no**.

Add to our plan:
1. C02 ch2: CP fine print (IPA, buyback window, dual rating → lower rating, LLP/trust eligibility) and CD fine print
   (no premature closure, no buyback, demat).
2. C02 ch1: call-money prudential limits for banks and PDs.
3. C03 ch1: T-Bill auction: competitive vs non-competitive, reserved share, uniform vs multiple price; CMB features
   (SLR-eligible, no non-competitive window).
4. C02 ch1: repo fine print (eligible securities, related-entity bar, T+0/T+1 first leg, municipal bonds eligible).
5. C02: OMO in one line (link C04).
6. C02: bill rediscounting in one line [one; "money market products" covers it].

Verify: RBI Call, Notice and Term Money Markets Directions 2021; RBI Commercial Paper and NCD (up to one year)
Directions 2024; RBI Certificate of Deposit Directions 2021; RBI Repurchase Transactions (Repo) Directions 2018 as
amended (Nov–Dec 2025 changes); GoI/RBI T-Bill and CMB notifications and the non-competitive bidding scheme; RBI
auction press releases. (Check the 2025 consolidated MD names for each.)

#### C2.3 Securities market products · video C05
Teachers cover:
- G-secs: dated securities, T-Bills, SDLs; sold by RBI auction (competitive and non-competitive) [one: OB]
- SLR vs non-SLR securities; corporate bonds/debentures are non-SLR [one: OB]
- Bond varieties: convertible (issuer's benefit: debt turns to equity), with put/call options, step-up coupons;
  embedded options change pricing [both]
- STRIPS: coupons and principal traded as separate zero-coupon securities [one: OB]
- Banks hold investments only in demat form, incl. corporate debt [one: OB]
- Investment categories: held for trading vs available for sale in the trading book [one: OB, uses the old
  categories]
- G-sec investment is also a trading-income source, not just SLR compliance [one: PR]
- Interest rate futures and their underlying G-secs/T-Bill [both]
- Price and yield move opposite [both, one line each; no sums]

Our plan has: G-secs, SDLs, price as PV of cash flows, YTM, clean/dirty, accrued interest, yield curve **yes** (C05);
bond varieties **no**; STRIPS **no**; SLR vs non-SLR **no**; auction methods **no**; demat rule **no**;
classification **yes** (C07 ch4, new HTM/AFS/FVTPL).

Add to our plan (C05 ch1):
1. Bond varieties card: fixed, floating-rate, zero-coupon, STRIPS, callable/putable, step-up, convertible.
2. SLR vs non-SLR securities (what counts for SLR at the cut-off).
3. G-sec auction: yield/price-based, uniform vs multiple price, non-competitive window.
4. Demat-only rule for banks' investments (one line).
5. Trap: the old HFT/AFS/HTM three-way split vs the 2023 framework (cross-ref C07).

Verify: RBI directions on G-sec auctions and non-competitive bidding; RBI STRIPS directions; Commercial Banks – CRR
and SLR Directions 2025 (SLR-eligible assets); investment portfolio directions 2023 (now in the 2025 consolidated
MD) for classification and demat holding.

#### C2.4 Domestic and global markets · videos C01, C02 · **partial row**
Teachers cover:
- How domestic and global markets interact: arbitrage, swap funding, FPI flows in debt/equity [one: PR]
- ADR/GDR holders bear exchange-rate risk [one: PR]
- Banks' overseas borrowing/investment within a Tier-1-linked ceiling [one: PR]
- Domestic debt and equity markets as part of the treasury product set; stock exchanges' role (price discovery,
  liquidity) [both: PR lists, OB MCQ]
- Benchmark rates for global markets (LIBOR mentioned only in passing and as if current) [one: OB, outdated]

Our plan has: MIBOR and SOFR after LIBOR **yes** (C02 ch4); a domestic-vs-global segment **no**.

Add to our plan (C02 ch4, widened to "domestic and global markets"):
1. The links: interest parity and swaps, FPI debt routes (general route, FAR; VRR folded into general route from
   1 Apr 2026; G-sec concentration limit withdrawn 2026), ADR/GDR price link.
2. Banks' overseas FC borrowing/investment ceiling (link C1.2).
3. LIBOR end and ARRs (SOFR etc.); domestic benchmarks published by FBIL.

Verify: RBI FPI debt investment notifications (general route, FAR, VRR change 2026); LIBOR transition circulars
(2023); FBIL benchmark list; banks' overseas borrowing limit (consolidated 2025 MD).

### C3 International Equity and Debt Products (taught in A19, A19b, A13)

#### C3.1 Regulatory environment · videos A19, A19b
Teachers cover:
- FDI vs FPI: any stake in an unlisted company is FDI; in a listed company the 10% line (post-issue, fully diluted)
  [both]
- Meaning of "fully diluted basis" [one: OB]
- FPI must register with SEBI; old FIIs deemed FPIs [both]
- Foreign investment = FDI + FPI, by a person resident outside India, on repatriation basis, in capital
  instruments or LLP capital [one: OB]
- Prohibited sectors: lottery, gambling/betting, chit funds (NRI/OCI on non-repatriation allowed), Nidhi, TDR
  trading [both]
- Automatic vs approval route [one: PR]
- Meaning of "repatriable"; foreign technology collaboration (licensing of franchise, trademark, brand) [one: OB]

Our plan has: FDI/NDI basics **partly** (A19 ch2), detail moved to A19b **yes** (key concepts, prohibited sectors,
eligible investors).

Add to our plan (A19b):
1. Fully diluted basis with our own example; 10% FPI → FDI reclassification.
2. Chit-fund exception for NRI/OCI non-repatriation (trap).
3. Foreign technology collaboration definition (one line) [one; syllabus "regulatory environment" implies].

Verify: FEM (Non-debt Instruments) Rules 2019 (definitions, Schedule I, prohibited list); SEBI (FPI) Regulations
**2019** (one class names a 2014 regulation, the earlier one); Consolidated FDI Policy (DPIIT).

#### C3.2 Global depository receipts · video A19
Teachers cover:
- Negotiable certificate issued abroad by an overseas depository against shares held by a domestic custodian;
  holder can convert into a fixed number of shares [both]
- Raises equity without adding debt [one: PR]
- Dividends paid in rupees to the depository (not to holders in FC) [one: PR]
- Exchange risk borne by the GDR holder [one: PR]
- Limited two-way fungibility: re-issue up to the receipts converted/redeemed [both]
- ADR vs GDR (US market and US GAAP vs others) [one: PR]

Our plan has: ADR/GDR/IDR distinction **yes** (A19 ch3); two-way fungibility **no**; custodian/depository chain **no**;
who bears FX risk **no**.

Add to our plan (A19 ch3):
1. Custodian → depository → holder chain (picture).
2. Two-way fungibility [both].
3. FX risk on the holder; equity not debt.

Verify: Depository Receipts Scheme 2014 (MoF); FEM (NDI) Rules 2019; SEBI framework for issue of DRs.

#### C3.3 Indian depository receipts · video A19
Teachers cover:
- Foreign company raises money in India; IDR in rupees only; proceeds repatriated at once [both]
- Rules: Companies (Registration of Foreign Companies) Rules 2014 + SEBI regulations [both]
- Who may invest (residents, FPIs, NRIs) and any limits [both; the two classes disagree on NRIs]
- No conversion into underlying shares before one year; a resident may hold underlying shares only to sell them,
  within 30 days [both]
- Foreign banks with an Indian presence need sector-regulator (RBI) approval to issue [one: PR]

Our plan has: "IDR in rupees" trap **partly**; conversion and 30-day rule **no**; eligible investors **no**.

Add to our plan (A19 ch3): IDR card: issuer, currency, repatriation, eligible investors, conversion lock-in and
30-day sale rule, approvals for bank issuers.

Verify: SEBI ICDR Regulations 2018 (IDR chapter; one class names a 2009 regulation, now replaced); Companies
(Registration of Foreign Companies) Rules 2014; RBI FEMA notifications on IDRs.

#### C3.4 External commercial borrowings · video A19
Teachers cover:
- Definition; eligible borrowers (FDI-eligible entities, port trusts, SEZ units) and lenders [both]
- Limits per year, minimum average maturity (longer MAM for working capital/general purposes), all-in-cost
  ceiling, debt-equity test for loans from foreign equity holders [both — **all stated in pre-2026 form**]
- End-use negative list (real estate, equity investment) [both]
- Indian banks/FIs/NBFCs may not guarantee ECBs; financial intermediaries may not invest in FCCBs [one: OB]

Our plan has: ECB after Feb 2026 **yes** (A19 ch1); old-vs-new trap **yes**.

Add to our plan (A19 ch1):
1. Eligible borrowers and recognised lenders (incl. IFSC entities in the new framework).
2. End-use negative list.
3. Guarantee bar on Indian banks/FIs/NBFCs.
4. A trap card listing the old numbers students will meet in coaching material (USD 750 m, 5-year/10-year MAM
   tracks, all-in-cost ceiling) vs the new rule.

Verify: FEMA 3(R)(5)/2026-RB (9 Feb 2026) and the MD on ECB, Trade Credits and Structured Obligations as updated;
any change up to 31 Dec 2026.

#### C3.5 Trade credits · video A13
Teachers cover:
- Buyer's credit vs supplier's credit [both]
- Eligible borrowers (resident importers) and lenders (overseas banks/FIs, foreign equity holders, IFSC units;
  overseas branches of Indian banks) [both]
- Period: capital goods up to 3 years from shipment; non-capital goods up to one year or the operating cycle,
  whichever is less; shipyard exception [both]
- Amount per import transaction under the automatic route by sector [one: OB]
- All-in cost: benchmark + spread, different for FC and INR trade credit [both — stated with LIBOR/old spreads]
- INR-denominated trade credit: currency-change rules, IFSC lenders [one: PR]

Our plan has: supplier's vs buyer's, limits, all-in cost **yes** (A13 ch3).

Add to our plan (A13 ch3):
1. Period rule incl. "operating cycle, whichever is less" (trap) [both].
2. INR-denominated trade credit and currency-change rule [one].
3. Who may lend (incl. overseas branches of Indian banks, IFSC).

Verify: MD on ECB, Trade Credits and Structured Obligations as updated in 2026 (check whether the Feb 2026 overhaul
changed TC cost ceilings and amounts); FEM (Borrowing and Lending) Regulations.

#### C3.6 Rupee denominated bonds · video A19
Teachers cover:
- Issued abroad, denominated in INR, investor bears FX risk ("masala bonds") [both]
- Banks permitted to issue overseas for AT1 (PDI), Tier 2 and lending to infrastructure/affordable housing [both]
- Eligible amount for PDIs in FC/RDB and the cap on the overseas share of it [both]

Our plan has: "rupee bonds abroad" **partly** (A19 ch3); bank purposes **no**; eligible-amount rule **no**.

Add to our plan (A19 ch3): bank RDB purposes; FX risk on investor; eligible-amount and overseas-share rule (only
after checking the October 2025 revision).

Verify: Commercial Banks – Prudential Norms on Capital Adequacy Directions 2025 (PDI in FC/RDB; revised Oct 2025 per
`regulatory_updates.md`); ECB/RDB MD for corporate RDBs.

### C4 Funding and Regulatory Aspects

#### C4.1 Reserve assets: CRR and SLR · video C04
Teachers cover:
- CRR: share of NDTL kept as cash balance with RBI, no interest, legal basis (RBI Act s.42) [both]
- Statutory floor/ceiling removed (RBI Act amendment, 2006) [both]
- SLR: share of NDTL in cash, gold, unencumbered approved securities; legal basis BR Act s.24; gold valued not above
  market; cash for SLR excludes the CRR balance [both]
- States current CRR and SLR [both — **OB states an old CRR**; see §3]
- Demand vs time liabilities (examples of each) [both]
- Exclusions from DTL (capital, reserves, refinance, tax provision, DICGC/ECGC claims, certain subsidies, ACU and
  IBU/OBU balances) and liabilities to the banking system [both]
- CRR exemption for incremental long-term-bond-funded infra/affordable-housing loans (lower of the two amounts)
  [one: OB]
- Maintenance: fortnight average, daily minimum, reference date and lag [both — **both use the old fortnight and
  the old 90% daily minimum**]
- Penal interest: bank rate + 3 then + 5 [both]
- SLR penalties under BR Act [one: PR]
- Macro effect: CRR/SLR change and the money multiplier; a CRR cut injects liquidity [one: PR]
- Numerical: required CRR/SLR from NDTL [one: OB]; case with daily shortfall days and a wrong inclusion [one: PR]
- Branch cash cannot count for CRR of SCBs [one: PR]

Our plan has: NDTL in/out, CRR/SLR rates, new fortnight, penal interest, MPC, M3, 5-part case **yes** (C04);
daily-minimum shortfall sum **no** (regulatory_updates flags it); legal sections **no**; floor/ceiling removal
**no**; LTB exemption **no**; SLR valuation of gold **no**; money multiplier **no**.

Add to our plan (C04):
1. Legal basis card (RBI Act s.42; BR Act s.24) and removal of floor/ceiling (2006/2007) [both].
2. Daily minimum CRR now 99% (from 16 Oct 2026) with a shortfall numerical [our own; classes teach 90%].
3. Full exclusion list incl. ACU and IBU balances, subsidies, refinance [both].
4. CRR exemption for long-term bonds for infra/affordable housing (if still in force at 31 Dec 2026) [one].
5. SLR asset rules: gold at or below market, cash net of CRR, encumbered securities out.
6. Money multiplier and liquidity effect of a CRR change (one picture) [one; C4 title "funding" implies].

Verify: RBI Act 1934 s.42 (and 2006 amendment); BR Act 1949 s.24, s.46; Commercial Banks – CRR and SLR Directions
2025 with the 11 Dec 2025 amendment (fortnight) and RBI/2026-27/290 (99% daily); MPS of Dec 2026 for any CRR/SLR
change; LTB exemption circular (2014, check if still in force).

#### C4.2 Liquidity adjustment facility (LAF) · video C02
Teachers cover:
- LAF purpose: daily liquidity management and steering short rates [both]
- Repo (RBI lends against G-secs) and reverse repo (absorbs) [both]
- Access limits on fixed-rate overnight repo and term variable-rate repo as % of NDTL; tenors [one: OB — **old
  framework**]
- 14-day VRR/VRRR as main operation, fine-tuning operations, longer VRR for durable liquidity [one: PR — **pre-Oct
  2025 framework**]
- SDF replaced fixed-rate reverse repo as the floor (2022); OMOs continue [one: PR]
- MSF: overnight, banks may dip into SLR up to a % of NDTL, rate above repo [one: PR]
- Corridor (SDF–repo–MSF); aim to keep WACR near the repo rate [one: PR]
- Auction mechanics (VRR allotment to higher bids; minimum bid size) [one: PR]
- ECR withdrawn in favour of LAF [one: OB]

Our plan has: corridor repo–SDF–MSF and rates at the cut-off **yes** (C02 ch3); framework revision of Oct 2025
**no**; WACR target **no**; MSF SLR dip **no**; auction mechanics **no**.

Add to our plan (C02 ch3):
1. Liquidity framework as revised Oct 2025: main operation, VRR/VRRR tenors overnight–14 days, durable tools (OMO,
   long-term repo, forex swaps).
2. WACR as operating target; corridor width.
3. MSF: SLR dip limit, penal margin over repo.
4. VRR/VRRR auction logic (who gets funds) [one].
5. Trap: SDF (no collateral) replaced fixed-rate reverse repo as floor.

Verify: RBI Revised Liquidity Management Framework (Oct 2025 press release/notification); MPS 7 Oct 2026 (repo 5.50%,
SDF 5.25%, MSF/Bank Rate 5.75%) and the 2–4 Dec 2026 MPC outcome; MSF directions.

#### C4.3 Payment and settlement systems · video C04
Teachers cover:
- RTGS: real-time, gross, minimum amount, launch year [both]
- NEFT: batch-wise, round-the-clock, no minimum/maximum [one: OB]
- INFINET (IDRBT network) and SFMS (domestic SWIFT-like messaging) [both]
- NDS and NDS-OM: screen-based, anonymous order matching, price-time priority, STP to CCIL; who may be members [both]
- CCIL: central counterparty; guaranteed settlement for G-secs, money market, forex (FX-CLEAR) [both]
- DvP: meaning; why it is not always possible (time zones, cut-offs) [one: OB]
- STP meaning [one: OB]
- Depositories NSDL/CDSL; CBS [one: OB]
- RBI's top oversight body for payment systems [one: OB, **old name**]

Our plan has: in the C04 title only; no chapter for it → **no**.

Add to our plan (C04, new chapter, or a short C04b if the video runs long):
1. RTGS vs NEFT comparison (gross vs batch, limits, timings).
2. INFINET, SFMS, SWIFT roles.
3. NDS-OM, CCIL as CCP, FX-CLEAR, TREPS, DvP and STP.
4. PSS Act 2007 and the current oversight board.

Verify: Payment and Settlement Systems Act 2007; RBI RTGS and NEFT system regulations; RBI notification on the
**Payments Regulatory Board** (2025, replacing BPSS: verify); CCIL rulebooks; RBI DvP circulars; NDS-OM membership
rules.

### C5 Treasury Risk Management

#### C5.1 Supervision and control of treasury · videos C07, C01
Teachers cover:
- Why management worries about treasury risk: leverage, big deals by few dealers, quick and irreversible losses
  [both]
- Loan loss is capped at principal + interest; trading losses can be far larger [one: OB]
- Control types: organisational (front/mid/back), exposure ceilings, position and stop-loss limits [both]
- Dealer-level controls: deal-size limit, open-position limits (currency-wise and aggregate), daylight vs overnight
  (daylight larger), stop-loss [both]
- Aggregate gap limit and NOOP; set by the board, not by RBI approval [one: PR]
- Counterparty exposure ceilings incl. brokers; broker share of business capped [both]
- Case: list of breaches, all are control failures [one: PR]
- Systematic vs unsystematic risk [one: OB]

Our plan has: dealer limits, daylight/overnight, NOP, stop loss, NOP-INR cap **yes** (C01 ch3, C07 ch1); why
treasury risk is special **no**; three control types **no**; broker limits **no**.

Add to our plan (C07 ch1):
1. Three reasons treasury risk worries management [both].
2. Three control types [both].
3. Broker limits and counterparty ceilings [both].
4. Trap: daylight limit > overnight limit; who sets the limits.

Verify: RBI MD on risk management and inter-bank dealings (NOOP, AGL; check if AGL survives the 2026 NOP revamp);
RBI/2025-26/252 (NOP-INR); investment directions (broker limit); FEDAI.

#### C5.2 Market risk and credit risk · video C07
Teachers cover:
- Market risk components: interest rate, exchange rate, price; liquidity (funding long with short) [both]
- Interest rate risk hits NII when liabilities reprice faster [both]
- Credit risk in treasury: default (pre-settlement) and settlement risk [one: OB]
- A loss from FX moves is market risk, not credit risk [one: PR]
- Bonds carry credit risk but can be sold; corporate bond yield = rate + credit spread [one: PR]

Our plan has: limits incl. counterparty **partly** (C07 ch1); default vs settlement risk **no**.

Add to our plan (C07 ch1):
1. Default vs settlement (Herstatt) risk with a time-zone picture [one; "credit risk" in the title implies it].
2. Credit spread in bond yields (link C05).
3. Sorting card: which risk is this loss?

Verify: Capital Adequacy MD 2025 (market risk definitions); market-risk Directions 2026 (effective 1 Apr 2027,
"issued, coming").

#### C5.3 Risk measures: VaR and duration · videos B09, C06
Teachers cover:
- VaR: maximum expected loss over a horizon at a confidence level, in normal markets [both]
- VaR methods; historical method weighting; VaR can be aggregated across asset classes [one: PR]
- Duration: price sensitivity to rates, in years [one: OB]
- No VaR or duration numericals in either class.

Our plan has: VaR formula with √t and z **yes** (B09); Macaulay, MD, BPV, portfolio duration **yes** (C06).

Add to our plan (B09 ch3/4): the three VaR methods (historical, variance-covariance, Monte Carlo) and what each
assumes; aggregation with correlation; VaR limitations (already partly).

Verify: Basel market-risk text and RBI market-risk Directions 2026 (confidence level, horizon); formulas standard.

#### C5.4 Use of derivatives in risk management · videos C08, C09
Teachers cover:
- Derivatives manage market risk (not operational or legal risk) [both]
- IRS to switch fixed/floating according to rate view; which leg to pay when rates are expected to rise [both]
- Forwards hedge FX exposure; options hedge and keep the upside [both]
- IRFs to protect a bond portfolio [both]

Our plan has: uses of forwards, futures, swaps **partly** (C08); option hedging **yes** (C09 ch4).

Add to our plan (C08 ch3): decision table "your position + your rate view → pay fixed or receive fixed"; hedging a
bond book with IRF/IRS [both].

Verify: no rule; standard.

### C6 Derivative Products

#### C6.1 Derivatives and the treasury · video C08
Teachers cover:
- Definition: value comes from an underlying; no stand-alone value [both]
- Purposes: hedging/ALM, customer service, trading [both]
- Underlyings beyond finance (commodities, indices, weather) [one: PR]
- Market makers vs users; RBI is neither [one: OB]

Our plan has: definition **yes** (C08 ch1); three purposes **no**; makers vs users **partly** (trap "who may be a
market maker").

Add to our plan (C08 ch1): three purposes; market maker vs user (and retail vs non-retail user) [both].

Verify: RBI Rupee Interest Rate Derivatives Directions (2025) and FX derivative directions (as amended 2026).

#### C6.2 OTC and exchange-traded products · video C08
Teachers cover:
- Comparison: customised vs standard; counterparty risk vs clearing house; bank margin vs daily exchange margin
  and M2M; pricing transparency; liquidity [both]
- Exchange products can also hedge [one: PR]
- Large banks as market makers lay off residual positions in futures [one: OB]
- Banks as trading/clearing members of exchange currency derivatives: eligibility (net worth, CRAR, NPA, profit
  record) [one: PR]
- Exchange-traded cross-currency futures/options without proving exposure, within limits [one: PR — **limit now
  USD 5 m**]

Our plan has: OTC vs exchange, margin and clearing **yes** (C08 ch1); bank membership eligibility **no**; ETCD limit
without underlying **no**.

Add to our plan (C08 ch1/4): M2M in one picture; bank membership eligibility [one]; ETCD hedging without underlying
now USD 5 m (trap) [regulatory_updates].

Verify: RBI Exchange Traded Currency Derivatives directions (2020 MD as amended); Circular No. 25 / PR 2026-2027/1305
(10 Oct 2026).

#### C6.3 Forwards, options, futures and swaps · videos C08, C09, A05
Teachers cover:
- Forward: obligation on both, rate agreed now (not necessarily today's spot) [both]
- Future: standardised exchange forward, margin, mostly cash-settled, used for trading [both]
- Option: right without obligation; premium upfront compensates the seller; call/put; strike vs spot [both]
- Premium = intrinsic + time value; drivers (volatility, strike, time, rates); forward premium is not a driver [one:
  OB]
- European vs American; seller's open-ended risk [one: PR]
- Structured vs plain-vanilla options; embedded options in bonds [one: PR]
- IRF underlyings and contract basics [both]
- Payoff direction on a currency future at settlement [one: PR]
- FRA (one period) vs IRS (many) [both]

Our plan has: forwards (A05), futures, FRA, swaps (C08), calls/puts, moneyness, payoffs, covered call (C09) **yes**;
premium components **no**; structured options **no**; IRF details **no**.

Add to our plan (C09 ch1/2): premium = intrinsic + time value and its drivers [one; but ITM/OTM teaching needs it];
structured vs vanilla (one line); C08: IRF contract basics.

Verify: RBI IRF directions; exchange contract specifications (NSE/BSE) for IRF and currency futures.

#### C6.4 Interest rate and currency swaps · video C08
Teachers cover:
- IRS: notional not exchanged; fixed vs floating [both]
- Basis (floating-floating) swap [one: PR]
- Benchmarks: FBIL publishes MIBOR and others; MIBOR-linked swaps [both]
- Currency swaps: principal-only, coupon-only, principal + interest; what risk each removes [both]
- Currency swap arbitrage between major currencies rarely exists [one: PR]
- Banks warehouse swaps without matched counterparties [one: PR]

Our plan has: IRS no principal **yes**; currency swaps **partly** (named, no types).

Add to our plan (C08 ch3): three currency-swap types and the risk each removes [both]; basis swap and OIS on MIBOR
[one]; FBIL role.

Verify: RBI rupee IRD directions; FBIL benchmark methodology (who may use MIBOR/MMIBOR: check the class claim that
corporates may not).

#### C6.5 Developments in Indian markets and RBI guidelines on risk exposure · video C09 (rules in C08 ch4)
Teachers cover:
- RBI's derivative framework: users need a board-approved risk policy; suitability and appropriateness to stop
  mis-selling [both]
- ISDA master agreement, schedule, confirmation and which prevails [both]
- FIMMDA (fixed income/derivatives SRO), FEDAI (forex SRO), FBIL (benchmarks) [both]
- Market makers vs users; insurers and MFs only if their own regulators allow [one: OB]
- Single-name CDS on corporate bonds permitted [both]
- Cancellation and rebooking of forwards by exporters/importers [one: PR — **now changed**]
- Milestones: currency futures, IRF launch [both]
- Neither class mentions the 2025–26 changes (NDDC bar, related-party bar, LEI/UTI, FERR, USD 5 m, no rebooking,
  PV01 cap removal, novation).

Our plan has: NDD bar, related parties, IRD access, LEI **yes** (C08 ch4); C09 "facts: none" → suitability,
ISDA, SROs, FERR, rebooking, PV01 **no**.

Add to our plan (C08 ch4 or C09 ch4):
1. Suitability and appropriateness; user classification (retail/non-retail) [both].
2. ISDA documentation chain and precedence [both].
3. FIMMDA, FEDAI, FBIL roles (and founding facts checked) [both].
4. 2026 changes: FERR 20%, no rebooking (rollover allowed), USD 5 m without underlying, PV01 cap removed, novation
   rules [regulatory_updates; the classes are silent or stale].

Verify: RBI FX derivative directions and rupee IRD directions as amended; A.P. (DIR) Circulars 25–27 (10–12 Oct
2026); RBI/2026-27/294 (PV01); ISDA 2002 Master Agreement s.1(b) (precedence); FIMMDA, FEDAI and FBIL own sites for
founding years.

### C7 Treasury and Asset-Liability Management

#### C7.1 Meaning of ALM; liquidity risk and interest rate risk · video D01 (with B13, D05)
Teachers cover:
- ALM aims to protect net worth by managing balance-sheet mismatch [both]
- Liquidity risk from maturity mismatch; RBI time buckets; positive vs negative liquidity gap [both]
- Interest rate risk: NII erosion, repricing risk; a fixed-rate item sits in its maturity bucket [both]
- Liquidity risk turns into interest-rate risk (refunding at market rates) [both]
- Maturity transformation is the banking model; very long deposits are discouraged for rate risk, not credit risk
  [one: PR]
- Committed credit lines count in liquidity [one: PR]

Our plan has: ALM purpose, liquidity and IRR, link to B13 **yes** (D01 ch2); gaps and buckets **yes** (B13, D05);
liquidity→IRR link **no**; gap-sign trap **partly**.

Add to our plan (D01 ch2): liquidity risk becoming rate risk [both]; gap-sign card (assets > liabilities in a bucket
= positive) [both]; bucket placement of a fixed-rate item [both].

Verify: Commercial Banks – ALM Directions 2025 (time buckets, gap limits).

#### C7.2 Role of treasury in ALM; use of derivatives in ALM · videos D01, C08 · **partial row**
Teachers cover:
- Treasury runs the bank's pool of funds; links banking book and markets; ALCO governs, treasury executes [both]
- Treasury handles only residual risk after natural offsets; full elimination of mismatch is neither possible nor
  desirable [one: PR]
- Role includes product pricing input, not only liquidity [one: PR]
- Replacing loans with marketable paper (CP) to improve liquidity [one: PR]
- Derivatives in ALM: hedge rate and liquidity mismatches (IRS, FRA, IRF, forwards/currency swaps) [both]

Our plan has: ALCO **yes**; treasury's own role in ALM **no**; derivatives in ALM **no**.

Add to our plan (D01, new part of ch3 "ALCO and the treasury"):
1. Treasury's ALM role: fund pool, executing ALCO decisions, residual-risk hedging, pricing input [both].
2. Why not eliminate every mismatch (term premium is the bank's income) [one].
3. Derivatives in ALM: IRS to close a repricing gap, FRA/IRF for a future gap, currency swaps for FC mismatch
   [both] (cross-ref C08).

Verify: ALM Directions 2025 (ALCO role); derivative directions (bank's own balance-sheet hedging).

#### C7.3 Credit risks and credit derivatives · video B11
Teachers cover:
- Treasury is not free of credit risk [one: PR]
- Credit derivatives move credit risk without moving the asset: CDS, TRS, credit-linked notes, credit spread options
  [both]
- RBI: single-name CDS on corporate bonds; market makers (banks, PDs, eligible NBFCs) vs users; insurers/MFs via
  their own regulators [both]

Our plan has: CDS, TRS, who may deal **yes** (B11 ch3); CLN **no**; 2026 widening **partly** (facts to verify).

Add to our plan (B11 ch3): CLN and credit-spread options in one line; who is market maker vs user (trap: FIs, RBI)
[both]; June 2026 widening (verify date).

Verify: RBI Credit Derivatives Directions 2022 as amended in 2026.

#### C7.4 Transfer pricing · video D01
Teachers cover:
- Treasury notionally buys deposits from branches and sells funds to lending units at internal rates [both]
- Transfer rate built from market rates + hedging cost + cost of reserves (CRR/SLR) [one: OB]
- Effect: branches keep credit/franchise margin; treasury carries liquidity and rate risk centrally [both]
- Fair branch comparison in a multi-branch bank [both]
- Policy prescribes the method; separate admin and hedging costs [both]
- Worked three-way margin split (deposit unit, lending unit, treasury) [both]

Our plan has: FTP purpose **yes** (D01 ch4); worked split **no**; cost components **no**.

Add to our plan (D01 ch4): worked three-way split, own numbers [both]; components of the transfer rate [one];
"who bears which risk after FTP" trap [both].

Verify: ALM Directions 2025 (any FTP text); otherwise standard practice, no RBI number needed.

#### C7.5 Policy environment · video D01 · **partial row**
Teachers cover:
- Policy set: ALM, investment, transfer pricing, derivative, liquidity (within an integrated risk policy) [both]
- Approved by the board or a board committee; reviewed every year; in line with RBI and market codes; monitored
  by a committee [both]
- Contents: liquidity policy (minimum liquidity, funding of reserve assets, money-market exposure limits,
  contingency funding, committed lines); derivative policy (who may use, capital, valuation, limits); ALM policy
  (ALCO composition, risk measures, pricing, NII) [one: OB]
- Codes of FIMMDA and FEDAI to be followed [one: OB]

Our plan has: **no** (D01 lists ALCO only).

Add to our plan (D01, a short part after ALCO):
1. The five policies and one line each on contents [both for list; one for contents].
2. Board approval and annual review [both].
3. SRO codes (FIMMDA, FEDAI) [one].

Verify: ALM Directions 2025 (board-approved ALM/liquidity policy); investment-portfolio directions (board-approved
investment policy); derivative directions (board-approved policy for users and banks).

---

## 2. Summary: additions per video (most important first)

| Video | Sub-points to add (most important first) | Count |
|---|---|---|
| **C01** | globalisation segment: meaning, capital vs current account routes, partial convertibility, three impacts (C1.2) · three roles + three books (C1.1) · department vs specialised branch; segregation case; who confirms/values (C1.4) · why treasury profit is attractive + sources of income (C1.3) · arbitrage worked sum and activity sorting (C1.3) · drivers + functions lists (C1.1) · forex market features, FC surplus deployment, nostro interest (C2.1) | 17 |
| **C02** | CP/CD fine print: IPA, buyback, dual rating, no premature CD (C2.2) · liquidity framework as revised Oct 2025, WACR target, MSF SLR dip, VRR auctions, SDF-replaced-reverse-repo trap (C4.2) · call-money prudential limits (C2.2) · repo fine print (C2.2) · domestic-global links: FPI routes, ADR/GDR link, overseas borrowing ceiling, LIBOR end (C2.4) · OMO, bill rediscounting (C2.2) | 13 |
| **C03** | T-Bill auction: competitive/non-competitive, uniform vs multiple price; CMB features (C2.2) | 1 |
| **C04** | payment and settlement chapter: RTGS vs NEFT, INFINET/SFMS, NDS-OM, CCIL, DvP/STP, PSS Act and oversight board (C4.3) · daily CRR 99% + shortfall sum (C4.1) · legal sections + floor/ceiling removal (C4.1) · full DTL exclusions (C4.1) · SLR asset rules (C4.1) · LTB exemption (C4.1) · money multiplier (C4.1) | 10 |
| **C05** | bond varieties incl. STRIPS, FRB, callable/putable, step-up, convertible (C2.3) · SLR vs non-SLR (C2.3) · G-sec auction methods (C2.3) · demat-only rule; HFT/AFS/HTM old-vs-new trap (C2.3) | 5 |
| **C06** | none (numericals already beyond the classes) | 0 |
| **C07** | default vs settlement risk (C5.2) · three reasons treasury risk worries management (C5.1) · three control types (C5.1) · broker and counterparty limits (C5.1) · daylight > overnight trap (C5.1) · credit spread + "which risk is this loss" (C5.2) | 7 |
| **C08** | 2026 rule changes: FERR, no rebooking, USD 5 m, PV01 cap removed, novation (C6.5) · suitability/appropriateness + user classes (C6.5, C6.1) · three currency-swap types (C6.4) · pay-fixed/receive-fixed decision table (C5.4) · ISDA chain and precedence (C6.5) · FIMMDA/FEDAI/FBIL (C6.5) · three purposes of derivatives (C6.1) · bank exchange-membership eligibility, M2M (C6.2) · basis swap/OIS (C6.4) · IRF contract basics (C6.3) · swap funding case (C2.1) | 15 |
| **C09** | option premium = intrinsic + time value and its drivers (C6.3) · structured vs vanilla options (C6.3) | 2 |
| **D01** | treasury's role in ALM + derivatives in ALM (C7.2) · policy environment: five policies, board approval, annual review, SRO codes (C7.5) · worked FTP split + transfer-rate components (C7.4) · liquidity→rate risk, gap sign, bucket placement (C7.1) | 12 |
| **A19 / A19b** | ECB: eligible borrowers/lenders, end-use list, guarantee bar, old-numbers trap (C3.4) · IDR card: conversion lock-in, 30-day sale rule, investors, approvals (C3.3) · GDR chain, two-way fungibility, FX risk on holder (C3.2) · bank RDB purposes and eligible-amount rule (C3.6) · fully diluted basis, chit-fund exception, technology collaboration (C3.1) | 12 |
| **A13** | non-capital trade credit "1 year or operating cycle, whichever less" · INR trade credit · who may lend (C3.5) | 3 |
| **B09** | three VaR methods, aggregation, weighting (C5.3) | 1 |
| **B11** | CLN/spread options; market maker vs user traps; 2026 widening (C7.3) | 3 |

Total: **101** sub-points, counted as the numbered "Add to our plan" items in §1 (C01–C09: 70; D01: 12; A/B videos
carrying C sub-topics: 19).

**The four partial rows are now resolved on paper:** C1.2 → C01 globalisation segment; C2.4 → C02 ch4 widened;
C7.2 → D01 "ALCO and the treasury" part; C7.5 → D01 policy part. D01 (12 min, Tier C) will be tight: consider
moving C7.2's derivatives part to C08 ch3 and keeping D01's addition to the policy list.

### Possible outdated or wrong statements heard in the classes (do not repeat; trap cards where useful)

| Class statement (paraphrased) | Why it is suspect at 31 Dec 2026 | Check against |
|---|---|---|
| CRR "currently" a higher figure than 3% (OB; elsewhere OB says 3%) | CRR 3% since the 29 Nov 2025 fortnight | CRR & SLR Directions 2025; MPS Dec 2026 |
| Daily CRR minimum 90% (OB; PR case) | 99% from the fortnight starting 16 Oct 2026 | RBI/2026-27/290 |
| CRR/SLR on NDTL of the last Friday of the second preceding fortnight; 14-day fortnight (OB, PR) | Fortnight is 1st–15th and 16th–month end from 15 Dec 2025; reference date changed | 11 Dec 2025 Amendment Directions |
| LAF: fixed-rate overnight repo access as % of bank NDTL, 7–28-day variable repo, system limit (OB) | Old (pre-2020/2022) design; framework revised again Oct 2025 | RBI liquidity framework Oct 2025 |
| 14-day VRR/VRRR as the main operation (PR) | Oct 2025 revision: main operation tenors overnight to 14 days | same |
| SLR approved securities include development-bank bonds (OB) | SLR assets now G-secs/T-Bills/SDLs (+cash, gold); check | CRR & SLR Directions 2025; BR Act s.24 |
| "Held for trading / available for sale" as the trading book (OB) | 2023 investment framework (HTM, AFS, FVTPL incl. HFT) in force since Apr 2024 | Investment portfolio directions 2023 |
| ECB: USD 750 m automatic limit (raised to 1.5 bn), 7:1 liability-equity, 10-year MAM for working capital, 500 bps all-in cost (OB, PR) | ECB overhaul 9/16 Feb 2026: USD 1 bn or 300% of net worth, MAM 3 years, all-in-cost ceiling removed | FEMA 3(R)(5)/2026-RB |
| Trade credit all-in cost as LIBOR + spread; per-transaction amounts (OB) | LIBOR gone; TC rules may have changed with the 2026 overhaul | ECB/TC MD as updated |
| FPI under "SEBI regulations 2014" (OB) | Replaced by SEBI (FPI) Regulations 2019 | SEBI |
| IDR under "SEBI regulations 2009" (OB) | ICDR Regulations 2018 | SEBI ICDR 2018 |
| PDI/RDB eligible-amount rule and overseas share (OB, PR) | Limits revised Oct 2025 | Capital Adequacy MD 2025 |
| Exporters may cancel and rebook forwards (PR) | No rebooking of any cancelled INR forex derivative after 10 Oct 2026 (rollover allowed) | A.P. (DIR) Circular No. 25, 10 Oct 2026 |
| Exchange cross-currency/currency derivatives without underlying within exchange limits (PR, implicit old USD 100 m) | Cut to USD 5 m across all exchanges | PR 2026-2027/1305 |
| Aggregate gap limit as a multiple of capital; 9% capital on NOOP (PR) | NOP framework and forex capital charge revamped 2026 (date to verify) | RBI NOP revamp; Capital Adequacy MD |
| Bank market-maker/exchange-member eligibility thresholds (PR) | Old circular values; check current | ETCD directions |
| MIBOR usable only by interbank participants (PR) | Doubtful; MIBOR-OIS widely used by non-banks | FBIL methodology; RBI IRD directions |
| ISDA schedule overrides the trade confirmation (PR) | ISDA precedence is the reverse (confirmation prevails for its trade) | ISDA 2002 Master Agreement s.1(b) |
| RBI payments oversight by BPSS (OB, implied) | Payments Regulatory Board constituted 2025 (verify) | RBI notification 2025 |
| "FIMMDA established 1958" (OB) | 1958 is FEDAI's year; FIMMDA is much later | FIMMDA, FEDAI sites |
| NDS "2022", NDS-OM "2025", RTGS launch month (OB) | Caption/teacher year errors; NDS 2002, NDS-OM 2005, RTGS 2004 (check) | RBI pages |
| Repo/SDF rates not stated; any repo below 5.50% in older material | Repo 5.50%, SDF 5.25%, MSF/Bank Rate 5.75% from 7 Oct 2026; Dec 2026 MPC pending | MPS 7 Oct 2026; Dec 2026 MPS |
| Penal CRR rate quoted only as "bank rate + 3/+5" (both) | Correct form; current values 8.75% / 10.75% at Bank Rate 5.75% | same |
| Neither class mentions PV01 cap, FERR, NDDC bar, LEI/UTI | Absent rather than wrong; we teach them | `regulatory_updates.md` rows |
