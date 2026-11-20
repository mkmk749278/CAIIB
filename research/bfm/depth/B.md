# Depth checklist: Module B (Risk Management)

Draft 1, 2026-11-20. Purpose: make sure no sub-point the exam needs is missing from our Module B lessons
(B01–B14, BR). One block per official sub-topic, then a summary table per video.

## Header

**Inputs used**
- Scope: `research/bfm/syllabus_official.md` (Module B, B1.1–B8.3) and `research/bfm/coverage.csv` (module B rows:
  which video teaches each sub-topic; v3 split B13 → B13 + B13b).
- Our plans: `course/bfm/B/plans_B.md` (draft 1, B01–B14, BR). **B13b has no plan yet** (added in course plan v3,
  `research/bfm/course_plan.md` §3), so every B13b point below is "Our plan has: no (no plan)".
- Two public YouTube class transcripts (auto-captions, third-party coaching classes):
  - **OB** = `B_oliveboard.txt` (about 5 h; concept lectures, unit by unit, with a few sums; weak on B7.4, B7.6–B7.8).
  - **PR** = `B_prep.txt` (about 4 h 15 min; revision + statement-type MCQ practice from B3 onward; refers to earlier
    sessions for B1–B2 and the concept part of B4).
- Our rule-change log: `research/bfm/regulatory_updates.md` (used to flag outdated statements).

**How to read the tags**
- [both] = both classes cover the sub-point; [one] = only one does (OB or PR named).
- "Our plan has": yes / partly / no, judged only from the plan text.
- "Add to our plan": the [both] points our plan lacks, plus [one] points that the syllabus wording clearly implies.
- "Verify": the primary source for each fact-type point. Abbreviations: **CA MD** = RBI *Commercial Banks – Prudential
  Norms on Capital Adequacy Directions, 2025* (and amendments to 31 Dec 2026); **ALM MD** = RBI *Commercial Banks –
  Asset Liability Management Directions, 2025* (holds LCR, NSFR, liquidity risk management and structural liquidity
  rules); **MR Dir 2026** = *Minimum Capital Requirements for Market Risk Directions, 2026* (effective 1 Apr 2027);
  **CR-SA Dir 2026** = *Capital Charge for Credit Risk – Standardised Approach Directions, 2026* (effective 1 Apr 2027);
  **BCBS** = Basel Committee texts (1988 Accord, 1996 Market Risk Amendment, Basel II 2004/2006, Basel III 2010/2011,
  LCR 2013, NSFR 2014, Basel III final 2017, Principles for Sound Liquidity Risk Management 2008, Principles for the
  Sound Management of Operational Risk 2011, revised 2021).

**Caveats**
- Transcripts are auto-captions with many recognition errors (numbers and names are often garbled), and both are
  coaching material. They tell us **what teachers cover and how deep**, never what the rule is. No sentence, example,
  number, mnemonic or question from them is reused here; every point is in our own words.
- Where a class states a ratio, percentage, limit, date or count, this file records only that the point is covered
  and names the primary source to check. Outdated or doubtful statements are listed in §3.
- Rule version for our lessons: **31 Dec 2026** (May/June 2027 exam). Rules issued but effective 1 Apr 2027 (new
  credit risk SA, market risk directions, leverage ratio exposure measure, CVA, new operational risk approach, ECL)
  are taught as "issued, coming", per `regulatory_updates.md`.
- The order of units in the classes does not match ours (OB teaches the capital numericals as a separate chapter;
  PR folds market-risk capital into B3). Points are filed under the official sub-topic they belong to.

---

## 1. Blocks by official sub-topic

### B1 Risk and Basic Risk Management Framework

#### B1.1 What is risk; linkages among risk, capital and return · video **B01**
Teachers cover:
- Risk as uncertainty of future outcomes (cash flows), mainly the chance of loss; where the word comes from [one: OB]
- Risk and return move together; banks earn by taking risk [one: OB]
- Capital as the cushion that absorbs losses; risk "consumes" capital [one: OB]
- Risk-adjusted return on capital (RAROC) as the link: return per unit of risk, comparing branches/units [one: OB]
- Quick examples of each big risk type at a branch (credit, operational) [one: OB]

Our plan has: uncertainty, expected vs unexpected loss: **yes**; risk–capital–return linkage: **no**; RAROC: **no**
(RAROC sits in module D; a pointer is enough).

Add to our plan: the three-way link risk → capital → return, with a one-line RAROC preview (syllabus wording names
the linkage explicitly).

Verify: none regulatory; RAROC definition from the BCBS/standard finance texts used in our D lesson.

#### B1.2 Why risk management · videos **B01; B02**
Teachers cover:
- Reasons: protect depositors and capital, stable earnings, regulatory compliance, better pricing and decisions,
  survival [one: OB]
- Risk can be managed, not removed; more safety means less extra profit [one: OB]

Our plan has: **partly** (B01 opening story implies it; no explicit "why" chapter).

Add to our plan: a short "why manage risk" list (syllabus heading).

Verify: none regulatory.

#### B1.3 Basic risk management framework · video **B02**
Teachers cover:
- Process: identify → measure → monitor/control → mitigate [both]
- Six building blocks: organisation, identification, measurement, pricing, monitoring and control, mitigation [one: OB]
- Organisation: board sets risk appetite and approves policy; risk management committee of the board (RMCB);
  ALCO; credit risk and operational risk management committees; a risk management department/support group that
  collects data, reports and runs stress tests [both]
- Risk appetite vs risk tolerance [both]
- Three families of risk measures: sensitivity, volatility, downside potential (VaR) [one: OB]
- Risk pricing: what a loan price must cover (cost of funds, operating cost, expected loss, capital charge) [one: OB]
- Monitoring and control: limits, periodic review, audit layers (internal, concurrent, RBI inspection) [one: OB]
- Mitigation tools and the four risk responses: avoid, reduce, transfer, accept [one: OB]
- Enterprise-wide risk management (ERM/EWRM): holistic, all risks together; implementation steps; COSO ERM
  components and the four objective categories [one: OB]
- A central counterparty (CCIL) as a tool that removes settlement/counterparty risk [one: OB]

Our plan has: process: **yes**; board, risk committee, CRO, three lines: **yes**; ALCO/CRMC/ORMC committees: **no**;
risk appetite: **yes** (picture); measure families: **no**; risk pricing: **no**; risk responses: **no**; ERM/COSO:
**partly** (named, components not listed); CCP: **no**; sensitivity/scenario/stress tests: **yes**.

Add to our plan: committee map (RMCB, ALCO, CRMC, ORMC, risk department) [both]; the four risk responses; the three
measure families; risk-pricing components; COSO ERM components and objective categories (asked in Dec 2023 and
Jul 2024 per our evidence). CCP: one line, optional.

Verify: RBI guidance on risk governance in the current MDs (RMCB, CRO); COSO *Enterprise Risk Management – Integrated
Framework* (2004 components) and the 2017 update (five components) — decide which IIBF expects; CCIL start date
(CCIL website/RBI).

### B2 Risks in Banking Business

#### B2.1 Risk identification in banking business · video **B01**
Teachers cover:
- Identification at transaction, portfolio and capital level, before a deal is done [one: OB]
- One loan, many risks: credit, interest rate, market (price of the borrower's product), liquidity [one: OB]
- Country/sovereign risk and transfer risk (borrower willing but blocked by its government) [one: OB]

Our plan has: risk naming from stories: **yes**; levels of identification: **no**; country risk: **no**.

Add to our plan: country/transfer risk as a credit-risk sub-type; "one exposure, several risks" drill.

Verify: none regulatory (country risk provisioning, if mentioned, from the RBI exposure-norms MD).

#### B2.2 The banking book · video **B01**
Teachers cover:
- Contents (loans, deposits, borrowings, held to maturity), accrual accounting, no MTM [both: OB explicit, PR
  implied]
- Capital charge mainly credit risk; main risks liquidity, interest rate, credit, operational [one: OB]
- Mark-to-market vs accrual accounting defined [one: OB]

Our plan has: banking vs trading book: **partly** (definition only).

Add to our plan: side-by-side card: holding intent, accounting (accrual vs MTM), capital charge, main risks.

Verify: CA MD and the investment portfolio MD (classification HTM/AFS/FVTPL-HFT) as in force on 31 Dec 2026;
MR Dir 2026 trading-book boundary (all HFT) as "issued, coming".

#### B2.3 The trading book · video **B01**
Teachers cover:
- Contents (securities, equities, forex, commodities, derivatives held for trading), MTM, P&L shows market moves
  [one: OB]
- Main risk market risk; also credit/counterparty and operational [one: OB]

Our plan has: **partly** (as B2.2).

Add to our plan: covered by the B2.2 card.

Verify: as B2.2.

#### B2.4 Off-balance sheet exposures · videos **B01; B06**
Teachers cover:
- Guarantees, LCs, undrawn commitments, derivatives as contingent liabilities that can turn fund-based [both]
- Link to call risk (invocation creates a sudden cash need) [one: OB]
- Conversion to credit equivalent with CCFs before risk weighting [one: PR]

Our plan has: B01: **partly** (trap only); B06: **yes** (CCFs).

Add to our plan: B01 one beat: what makes an exposure "off-balance sheet" and how it can crystallise.

Verify: CCF table in CA MD (31 Dec 2026) and CR-SA Dir 2026 ("coming").

#### B2.5 Banking risks: definitions · video **B01**
Teachers cover:
- Liquidity risk and its three forms: funding (liability side), time (asset side), call (contingent liabilities
  crystallise; missed opportunities) [one: OB]
- Credit (default) risk; counterparty risk; country risk [one: OB]
- Settlement (Herstatt) risk from time-zone gaps [one: PR, as BCBS history]
- Operational risk definition; transaction risk; compliance (integrity) risk [one: OB]
- Strategic and reputation risk, and that the Basel op-risk definition leaves them out [both]
- Interest rate risk sub-types: gap/mismatch, yield curve, basis, embedded option, reinvestment, net interest
  position [both: OB lists several, PR explains basis]
- Credit spread / downgrade (migration) risk without default [both]
- Systemic risk and contagion [both]

Our plan has: interest-rate sub-types: **partly** (no reinvestment, no net interest position); liquidity sub-types:
**yes**; strategic, reputation, systemic, model, climate, compliance: **yes**; counterparty: **no**; settlement:
**no**; country: **no**; transaction risk: **no**; credit spread/downgrade: **no**.

Add to our plan: counterparty and settlement risk [both-adjacent]; credit spread/downgrade risk [both]; reinvestment
and net-interest-position risk; transaction risk; country risk.

Verify: BCBS op-risk definition (Basel II para 644 / Basel III OPE10); RBI IRRBB/ALM MD for interest-rate risk
sub-types.

### B3 Risk Regulations in Banking Industry

#### B3.1 Regulation of banking: necessities and goals · video **B04**
Teachers cover:
- Why banks are regulated: depositor protection, systemic stability, contagion, capital aligned to risk [one: PR]
- Systemic risk vs isolated failure; contagion effect [one: PR]

Our plan has: **no** (B04 starts at Basel I).

Add to our plan: a short opening chapter "why regulate banks" (syllabus heading; PR asks statement questions on it).

Verify: none numeric; BCBS Core Principles (2012, revised 2024) "objectives of supervision".

#### B3.2 Need for risk-based regulation in a changed world · video **B04**
Teachers cover:
- 1970s tight regulation and low competition → deregulation, globalisation, innovation → more risk-taking and
  systemic risk [one: PR]
- BCBS origin after a 1974 bank failure; BIS link; committee structure (permanent groups vs temporary task forces);
  standards are not legally binding; home/host Concordat; Core Principles and their revision [one: PR]

Our plan has: **partly** ("story of each accord as the answer to a failure").

Add to our plan: BCBS origin and non-binding nature; Concordat (home/host); Core Principles count (statement MCQs).

Verify: BCBS history page (bis.org/bcbs/history); Core Principles for Effective Banking Supervision (1997; 2012;
2024 revision).

#### B3.3 Basel I: the Basel Capital Accord · video **B04**
Teachers cover:
- Credit risk only; risk-weight buckets; minimum ratio; Tier 1/Tier 2 make-up and limits [one: PR]
- Weaknesses: same weight for all corporates whatever the rating, no operational risk, incentive to take riskier
  assets [one: PR]

Our plan has: **partly** (named; no buckets, no weaknesses).

Add to our plan: Basel I risk-weight buckets, minimum ratio, capital tiers, three weaknesses.

Verify: BCBS 1988 *International Convergence of Capital Measurement and Capital Standards*.

#### B3.4 1996 amendment to include market risk · video **B04**
Teachers cover:
- Market risk capital added; Tier 3 capital (short-term subordinated debt) for market risk [one: PR]
- Internal-model VaR: confidence level, holding period, multiplier on a 60-day average vs previous day [one: PR]
- Effective year [one: PR]

Our plan has: **partly** ("which accord added market risk").

Add to our plan: the model parameters and Tier 3 (PR calls it "asked many times"; FP1 Q38).

Verify: BCBS *Amendment to the Capital Accord to Incorporate Market Risks* (Jan 1996).

#### B3.5 Basel II: need, goals and the accord · video **B04**
Teachers cover:
- Three pillars [both]
- Credit approaches: standardised (external ratings) vs IRB foundation/advanced, and who supplies PD, LGD, EAD,
  maturity [one: PR]
- Operational risk added (BIA, TSA, AMA) [both]
- Data-history requirements for IRB/AMA [one: PR, garbled]

Our plan has: pillars and approach names: **yes**; who supplies which IRB parameter: **no**.

Add to our plan: FIRB vs AIRB parameter split (statement MCQs).

Verify: BCBS Basel II (June 2006 comprehensive version) paras on IRB and AMA data requirements.

#### B3.6 Towards Basel III · videos **B04; B05**
Teachers cover:
- Why Basel III: crisis showed poor-quality capital, thin liquidity, over-reliance on internal models [both]
- Main elements: more and better capital (CET1), CCB, CCyB, leverage ratio, LCR, NSFR, D-SIB/G-SIB, limits on RWA
  variability [both]
- BCBS Regulatory Consistency Assessment Programme (RCAP) [one: OB]

Our plan has: **yes** (B04 ch. 3).

Add to our plan: nothing essential; RCAP one line optional.

Verify: BCBS Basel III (Dec 2010, rev. June 2011); RCAP page on bis.org.

#### B3.7 Capital charge for credit risk · video **B06**
Teachers cover:
- RWA = exposure × risk weight; RWA sums over a small book [both]
- Standardised approach uses ratings of RBI-recognised agencies (names) [one: PR]
- IRB concept (PD, LGD, EAD, M) [one: PR]
- Off-balance sheet: CCF then risk weight [one: PR]

Our plan has: RW, CCF, sums: **yes**; recognised agencies: **no**.

Add to our plan: one card listing RBI-recognised domestic and international agencies.

Verify: CA MD (risk weights, CCFs, list of eligible credit rating agencies) as at 31 Dec 2026; CR-SA Dir 2026
("issued, coming").

#### B3.8 Credit risk mitigation · video **B06**
Teachers cover:
- Comprehensive approach: exposure up by its haircut, collateral down by its haircut and a currency-mismatch haircut;
  net exposure; sums including several collaterals [one: PR]
- Recognition at transaction level (account by account), not portfolio level [one: PR]
- Collateral with material positive correlation to the borrower is not eligible [one: PR]

Our plan has: eligible collateral, haircuts, currency mismatch: **yes**; the full formula with exposure haircut:
**partly**; multiple collaterals: **no**; eligibility conditions: **no**.

Add to our plan: write out the formula with all three haircuts and a multiple-collateral sum; the two eligibility
conditions.

Verify: CA MD (CRM chapter: haircut table, formula, eligibility, correlation condition).

#### B3.9 Capital charge for market risk · video **B07**
Teachers cover:
- Standardised (duration) method: specific charge vs general market risk charge [one: PR]
- Vertical disallowance on matched long/short positions within a time band, and sums [one: PR]
- Horizontal disallowances within a zone, between adjacent zones and between far zones; the time-band zones
  [one: PR]
- Internal models approach as the alternative [one: PR]
- Charge → RWA conversion [both, but the two classes use different factors]

Our plan has: charge → RWA: **yes**; specific/general charge, vertical/horizontal disallowances, zones: **no**.

Add to our plan: a full chapter on the standardised duration method with one vertical and one horizontal sum (PR
drills several; IIBF sums are possible). State that India does not use internal models for capital (verify) and that
MR Dir 2026 replaces the method from 1 Apr 2027.

Verify: CA MD market-risk chapter (duration method, disallowance rates, zones, forex and equity charges, conversion
factor) as at 31 Dec 2026; MR Dir 2026; BCBS 1996 amendment for the disallowance concept.

#### B3.10 Capital charge for operational risk · video **B07**
Teachers cover:
- BIA: alpha × average of positive annual gross income over three years, negative years dropped from numerator and
  denominator; sums [both]
- Gross income definition: built up from net profit by adding back provisions and operating expenses; items excluded
  [one: PR]
- TSA: business lines and their beta factors; sums [both]
- AMA: internal model with regulator approval [both]
- Basel III standardised approach: business indicator component × internal loss multiplier; size buckets [one: PR]

Our plan has: BIA, TSA, negative years: **yes**; gross-income definition: **no**; new approach: **partly** ("whether
RBI's revised approach is in force").

Add to our plan: gross-income definition (what is added back, what is left out) with a sum starting from a profit
figure; new approach as "issued, coming" with its building blocks.

Verify: CA MD op-risk chapter (alpha, betas, gross income definition, conversion factor) at 31 Dec 2026; RBI
operational risk directions/forthcoming-instructions amendments effective 1 Apr 2027 (BIC buckets in rupees, ILM);
BCBS OPE25.

#### B3.11 Pillar 2: supervisory review process · video **B04**
Teachers cover:
- The four SRP principles (bank's own assessment, supervisor's review, capital above minimum, early intervention)
  [one: PR]
- ICAAP: board-approved, forward-looking, covers risks Pillar 1 misses, stress testing, independent review; complex
  economic-capital models not mandated [one: PR]
- SREP done by the supervisor, not the bank [one: PR]
- Risks typically under Pillar 2 (concentration, liquidity, reputation, strategic, IRRBB) [one: PR]

Our plan has: ICAAP, SREP, Pillar 2 risks: **yes**; four principles: **no**.

Add to our plan: the four SRP principles; "who does what" (ICAAP = bank, SREP = RBI).

Verify: CA MD Pillar 2 chapter; BCBS Basel II Part 3 (SRP principles).

#### B3.12 Pillar 3: market discipline · video **B04**
Teachers cover:
- Disclosure complements Pillars 1 and 2 [both]
- Who must disclose and how often (quarterly/half-yearly items) [one: PR]

Our plan has: **partly** ("Pillar 3 = disclosure").

Add to our plan: scope and frequency of Pillar 3 disclosures.

Verify: CA MD Pillar 3 chapter (disclosure templates, frequency, applicability).

#### B3.13 Capital conservation buffer · video **B05**
Teachers cover:
- Size, made of CET1, built in good times [both]
- Restrictions on dividends, buybacks and bonuses when a bank dips into the buffer [both]
- Phase-in and COVID deferral history [one: PR]

Our plan has: CCB and "CCB is CET1": **yes**; payout restrictions: **partly** (dividend bands by CET1 are the 2026
dividend directions, a different thing).

Add to our plan: the buffer-range payout restriction mechanism [both], kept separate from the 2026 dividend bands.

Verify: CA MD (CCB, minimum capital conservation ratios table); dividend directions 10 Mar 2026.

#### B3.14 Leverage ratio · video **B05**
Teachers cover:
- Formula Tier 1 ÷ exposure measure; sums both ways (find exposure, find ratio) [both]
- Non-risk-based backstop; no risk weights; on- and off-balance sheet [both]
- Minimums by bank type [one: PR implied, OB states one]

Our plan has: leverage ratio, by bank type: **yes**; sum: **no** (no numericals listed for B05).

Add to our plan: one leverage-ratio sum each way.

Verify: CA MD leverage ratio section (minimums for D-SIBs and others) at 31 Dec 2026; Eleventh Amendment Directions
(23 Oct 2026) exposure measure as "issued, coming".

#### B3.15 Countercyclical capital buffer · video **B05**
Teachers cover:
- Purpose (save in booms, release in busts); met with CET1 [one: PR]
- Indicator: credit-to-GDP gap and its thresholds; range of the buffer [one: PR]

Our plan has: "CCyB not activated": **partly**.

Add to our plan: how CCyB works (indicator, thresholds, range, lead time) plus current status.

Verify: RBI CCyB framework (Feb 2015) and its incorporation in CA MD; RBI press release 18 May 2026 (not activated).

#### B3.16 Systemically important financial institutions (SIFIs) · video **B05**
Teachers cover:
- G-SIBs and D-SIBs; extra CET1 surcharge by bucket [both]
- Current Indian D-SIBs and their buckets; surcharge sum on top of CET1 + CCB [one: PR]

Our plan has: D-SIB list and buckets: **yes**; surcharge sum: **no**.

Add to our plan: a short D-SIB surcharge sum (total CET1 requirement for a named bucket).

Verify: RBI's latest D-SIB list press release (check whether a new list is issued before 31 Dec 2026); D-SIB
framework (July 2014) for bucket surcharges; BCBS G-SIB framework.

#### B3.17 Risk-based supervision (RBS) · video **B02**
Teachers cover:
- Aim: depositor protection and stability together; supervisory intensity follows risk and impact, not size [one: PR]
- Supervisory ratings are confidential; stress tests and governance assessment are part of it [one: PR]

Our plan has: **partly** ("RBS / SPARC basics").

Add to our plan: the three or four RBS features above (statement MCQs).

Verify: RBI RBS/SPARC documents (RBI annual report / Department of Supervision publications).

### B4 Market Risk

#### B4.1 Market risk: concept; market risk in banks · video **B09**
Teachers cover:
- Definition: loss in trading positions from adverse moves in rates and prices during the time needed to exit
  [both]
- Four factors: interest rate, equity, forex, commodity [both]
- Trading liquidity, and credit/counterparty risk in the trading book, including downgrade (migration) risk without
  default [one: OB]

Our plan has: definition and four factors: **yes**; credit risk inside the trading book: **no**.

Add to our plan: one beat on default and downgrade risk of bonds held for trading (links to B2.5).

Verify: none numeric; BCBS market-risk definition (MAR10).

#### B4.2 Market risk management framework; organisation structure · video **B09**
Teachers cover:
- Board (appetite, policy, aggregate limits), RMC (policy-level oversight, limits), ALCO (balance-sheet and interest
  rate view, limits), ALM support/market risk group (analysis, reports), middle office independent of the front
  office/treasury [both]
- Common traps: who sets limits, who prices products, independence of the middle office [one: PR]

Our plan has: **no** (B09 chapters cover limits and VaR, not the organisation).

Add to our plan: an organisation picture (board → RMC → ALCO → support group; front/middle/back office) [both].

Verify: RBI guidance notes on market risk management (2002) and ALM MD for ALCO; C01 lesson for front/middle/back
office (avoid duplicate depth).

#### B4.3 Risk identification, measurement, monitoring and control, reporting · videos **B09; B03**
Teachers cover:
- Product programme for standard products; temporary product transaction memorandum for new/non-standard products
  [both]
- Measurement: sensitivity (duration, beta), downside potential, VaR [both]
- VaR methods: variance–covariance (correlation), historical simulation, Monte Carlo [one: PR]
- VaR meaning as an exceedance frequency, not the worst loss; strengths and limits [both]
- Back-testing: comparing VaR with actual P&L; exceptions [one: OB]
- Stress testing: what makes a good test, its limits; VaR vs stress test [one: OB]
- Monitoring: trading, position and stop-loss limits; MTM books must have stop-loss; limit breaches escalated [both]
- Model validation and stress-test frequency [one: PR]
- Reporting qualities (timely, accurate, concise, with commentary) [one: OB]

Our plan has: limits, VaR formula, back-testing and stress tests: **yes**; product programme/PTM: **no**; VaR methods:
**no**; reporting: **no**.

Add to our plan: product programme vs PTM [both]; three VaR methods [one, but "measurement" in the syllabus implies
it]; reporting qualities (syllabus names "reporting").

Verify: RBI market risk guidance notes (2002); BCBS 1996 amendment (back-testing framework); confidence level and
holding period in CA MD (31 Dec 2026) and MR Dir 2026.

#### B4.4 Managing trading liquidity · video **B09**
Teachers cover:
- Asset (product-specific) liquidity risk vs market-wide liquidity risk [both: OB explicit, PR via a forced-sale case]
- Leverage forcing liquidation in a thin market [one: PR]

Our plan has: **partly** ("trading liquidity" named in ch. 1).

Add to our plan: the two kinds of trading liquidity risk with one example each.

Verify: none numeric.

#### B4.5 Risk mitigation · video **B09**
Teachers cover:
- Hedging with swaps, forwards, options; diversification; cutting positions; liquidity buffers [both]
- Using sensitivity and correlation measures to size hedges [one: OB]

Our plan has: **no** (no mitigation chapter).

Add to our plan: a short mitigation beat (hedge instruments by risk factor).

Verify: none regulatory (instrument rules in C08/C09).

### B5 Credit Risk

#### B5.1 General; credit risk management framework; organisation structure · video **B10**
Teachers cover:
- Credit risk definition; it arises in loans, non-fund-based facilities, treasury and cross-border exposures [both]
- Framework: identify → measure → monitor/control → mitigate [both]
- Organisation: board (appetite, aggregate limits), RMCB, credit policy committee / credit risk management committee
  (policy, prudential limits), credit risk management department (rating, portfolio analysis, stress tests) [both]
- Trap: who sets prudential limits [one: PR]

Our plan has: **no** (B10 starts from PD × LGD × EAD).

Add to our plan: an opening chapter with definition, sources beyond loans and the organisation chart [both].

Verify: RBI *Guidance Note on Credit Risk Management* (2002) and current MDs for committee roles.

#### B5.2 Risk identification and measurement · video **B10**
Teachers cover:
- Identification tools (KYC, financials, bureau score, industry analysis, concentration) [one: OB]
- Two components: default risk and credit-spread/downgrade risk [one: OB]
- Rating vs scoring (corporate vs retail); rating parameters (financial, management, industry, business) [one: OB]
- Segment-wise rating models; rating-migration data [one: OB]
- EL = PD × LGD × EAD and its sum [both]
- IRB parameters [one: PR]

Our plan has: EL, UL, ratings, CreditMetrics, Altman: **yes**; default vs spread risk: **no**; rating parameters and
models: **no**.

Add to our plan: the two components of credit risk; the four rating-parameter families; segment models and
migration data (syllabus "identification and measurement").

Verify: RBI credit risk guidance note (2002); Altman (1968); CreditMetrics technical document (1997).

#### B5.3 Credit risk control and monitoring · video **B11**
Teachers cover:
- Post-disbursement monitoring: dues, account turnover, stock statements, early-warning signals [one: OB]
- Corrective actions: restructure, cut limits, closer watch, SMA/NPA classification [one: OB]
- MIS and early warning as the main tools; control at both transaction and portfolio level [one: PR]

Our plan has: **partly** ("loan-level and portfolio controls").

Add to our plan: early-warning signals and the SMA step (link to D-NPA lesson).

Verify: RBI prudential framework for resolution of stressed assets (SMA categories) as in the IRACP MD at 31 Dec
2026.

#### B5.4 Credit risk policies at transaction level · video **B11**
Teachers cover:
- Appraisal, risk analysis, credit audit/LRM, monitoring [both]
- Approval committees above a limit include a credit-risk officer with no business target [one: PR]
- Internal rating review on its own cycle, not tied to renewal [one: PR]
- Risk-based pricing linked to rating and other factors [both]

Our plan has: **no** (not named in B11).

Add to our plan: a transaction-level checklist card [both].

Verify: RBI credit risk guidance note (2002).

#### B5.5 Credit control and monitoring at portfolio level; active credit portfolio management · video **B11**
Teachers cover:
- Tracking rating migration (periodically) as an early signal [both]
- Exposure ceilings by rating grade and by industry; obligor vs portfolio risk; concentration [both]
- Credit VaR at a confidence level [both]
- Why active portfolio management: buy, sell, securitise, hedge instead of hold to maturity; good borrowers moving to
  markets [both]

Our plan has: **partly** ("portfolio limits, concentration").

Add to our plan: migration tracking, rating-grade ceilings, credit VaR concept and the reasons for active management
[both].

Verify: RBI credit risk guidance note (2002); RBI large exposures framework (current MD) for concentration limits.

#### B5.6 Loan review mechanism (LRM) · video **B11**
Teachers cover:
- Objectives: find weak loans early, check portfolio quality, policy compliance, provisioning, report to top
  management [both]
- Reviewer qualification and independence from sanction [both]
- Frequency (larger accounts more often), sample review for retail, share of portfolio covered each year [both]
- Scope covers post-sanction follow-up, not only sanction [one: PR]

Our plan has: **partly** ("loan review" named).

Add to our plan: LRM objectives, independence, frequency and coverage [both].

Verify: RBI credit risk guidance note (2002) LRM section.

#### B5.7 Credit risk mitigation · videos **B06; B11**
Teachers cover:
- Collateral, guarantees, credit insurance, diversification [both]
- Transaction-level (collateral, guarantees) vs portfolio-level (securitisation, credit derivatives) tools [one: PR]
- Mitigation creates other risks: legal, operational, liquidity, market [one: PR]

Our plan has: B06 haircuts: **yes**; transaction vs portfolio split and residual risks: **no**.

Add to our plan: B11 one card: two levels of CRM and the risks CRM itself brings.

Verify: CA MD CRM chapter (residual risk language).

#### B5.8 Securitisation · video **B11**
Teachers cover:
- Pool → SPV → pass-through certificates → investors; why banks do it (liquidity, capital, diversification) [one: OB]
- Kinds of exposure (ABS, MBS, credit enhancement, liquidity facility) [one: OB]
- Minimum retention requirement by loan maturity and for residential mortgages [one: OB]

Our plan has: SPV, tranches, MRR, MHP: **yes**.

Add to our plan: purpose list and exposure kinds (light).

Verify: RBI *Master Direction – Securitisation of Standard Assets* (2021, as amended) for MRR and MHP.

#### B5.9 Credit derivatives · video **B11**
Teachers cover:
- Risk moves, asset stays on the books; protection buyer vs seller [both]
- CDS: periodic premium, credit events, physical vs cash settlement (value after default) [both]
- Reference obligation eligibility (structured/guaranteed obligations excluded; callable/puttable allowed) [one: PR]
- Who may be a user / market maker; net-owned-fund condition for NBFC market makers; excluded bank types [one: PR]
- TRS (total economic return), CLN (bond plus embedded protection; investor carries issuer and reference risk),
  credit spread option [both]
- Credit derivatives vs insurance/LCs [one: PR]

Our plan has: CDS vs TRS, who may deal: **yes**; settlement types, reference obligation rules, CLN, spread option:
**no**.

Add to our plan: CDS mechanics and settlement; CLN and credit spread option [both]; eligibility rules **after the
2026 widening**.

Verify: RBI *Master Direction – Reserve Bank of India (Credit Derivatives) Directions, 2022* and the 2026 amendment
(CDS/TRS widened; date to confirm per `regulatory_updates.md`).

### B6 Operational Risk and Integrated Risk Management

#### B6.1 Operational risk: general; classification; event types · video **B12**
Teachers cover:
- Basel definition (process, people, systems, external events); legal risk in; strategic and reputation out [both]
- Cause-based classification: people, process (transaction-based and control-based), technology, external [both:
  OB detailed, PR brief]
- Effect-based classification: legal liability, regulatory/tax penalties, loss of or damage to assets, restitution,
  loss of recourse, write-downs [both]
- Seven Basel event types and mapping of cases to them [one: PR]
- Key-person dependency as a people cause [one: OB]

Our plan has: definition, seven event types, legal in / strategic out: **yes**; cause-based and effect-based
classifications: **no**.

Add to our plan: both classifications with a mapping drill [both].

Verify: BCBS Basel II Annex 9 (event types, business lines); RBI guidance note on operational risk (2005) for the
cause/effect classification.

#### B6.2 Operational risk management practices; management overview and organisation structure · video **B12**
Teachers cover:
- BCBS principles for sound management of operational risk: culture set by the board, framework fit to size, board
  oversight of senior management, appetite/tolerance statement, governance, identification and assessment, change
  management/new products, monitoring and reporting, control and mitigation, resilience/continuity, disclosure [both;
  the two classes give different principle counts]
- Organisation: board, ORMC, ORM department as nodal unit, internal audit (independent, does not manage the risk),
  business lines as first line [both]

Our plan has: **no** (no principles, no organisation).

Add to our plan: principles in one picture and the organisation chart [both].

Verify: BCBS *Revisions to the Principles for the Sound Management of Operational Risk* (Mar 2021, 12 principles)
vs 2011 version (11); RBI *Guidance Note on Operational Risk Management and Operational Resilience* (Apr 2024).

#### B6.3 Processes and framework; monitoring and control practices · video **B12**
Teachers cover:
- Process mapping into sub-processes to find risk and control points [one: OB]
- Qualitative assessment: workshops, RCSA, scorecards; quantitative assessment for new products [one: OB]
- Loss-event data collection, frequency/probability analysis, feedback; large-exposure monitoring [one: OB]
- KRIs: meaning, qualities, examples [one: OB]

Our plan has: RCSA, KRIs, loss data: **yes**; process mapping and scorecards: **no**.

Add to our plan: process mapping and scorecards (syllabus "processes and framework").

Verify: RBI op-risk guidance note (2005); RBI 2024 guidance note.

#### B6.4 Operational risk quantification · videos **B12; B07**
Teachers cover:
- BIA, TSA (eight business lines, betas), AMA [both]
- AMA prerequisites: internal and external loss data history, scenario analysis benchmarked against loss data
  [one: PR]
- New standardised approach (BIC × ILM) [one: PR]

Our plan has: approaches: **yes**; AMA prerequisites: **no**; new approach: **partly**.

Add to our plan: AMA data and scenario-analysis conditions (statement MCQs).

Verify: CA MD op-risk chapter at 31 Dec 2026; RBI forthcoming op-risk directions (effective 1 Apr 2027); BCBS
Basel II AMA criteria.

#### B6.5 Operational risk mitigation; scenario analysis · video **B12**
Teachers cover:
- Controls (maker–checker, dual control, segregation), training, insurance, outsourcing control [both]
- Insurance recognition cap under AMA and conditions on the policy [both]
- Scenario analysis for low-frequency, high-impact events [one: PR]
- Business continuity and disaster recovery [one: OB]

Our plan has: scenario analysis, insurance: **yes**; insurance cap and conditions: **no**; BCP: **no**.

Add to our plan: insurance cap and conditions [both]; BCP/DR one line.

Verify: BCBS Basel II AMA insurance criteria; CA MD (if RBI kept AMA text); RBI 2024 operational resilience note.

#### B6.6 Integrated risk management: necessity, challenges, approach · video **B02**
Teachers cover:
- What IRM/ERM is and why (all risks together, link to strategy) [both]
- Challenges: real-time data, business pressure, culture [one: OB]
- Approach: strategy, organisation (CRO), process, systems [both]
- RBI instructions on the CRO: appointment, board-approved role, independence, reporting line; separation of credit
  risk management from sanction [both]
- Integrated limits across risk types; Basel incentive for advanced approaches [one: PR]

Our plan has: ERM and CRO: **partly** (named only).

Add to our plan: IRM necessity, challenges and four-part approach; RBI CRO rules [both].

Verify: RBI circular on Chief Risk Officers in banks (2017; check the current MD that carries it) and any later
CRO tenure/reporting instructions.

### B7 Liquidity Risk Management

#### B7.1 Need and importance; potential drivers; types of liquidity risk · video **B13**
Teachers cover:
- Liquidity defined; maturity transformation makes mismatch inherent [both]
- Solvency vs liquidity; a profitable bank can still fail [both]
- Kinds of liquidity need (day-to-day operational vs reserve for shocks); systemic risk [one: OB]
- Drivers, internal (off-balance sheet calls, wholesale/short-term reliance, negative gaps, rapid asset growth,
  maturity concentration, few liquid assets) and external (rumour-sensitive depositors, shocks, slow growth, loss of
  trust, sudden withdrawals, government deposits pulled) [both]
- Types: funding liquidity risk vs market liquidity risk [both]
- Key considerations when assessing liquidity (liquid assets, deposit volatility, reliance on volatile funds,
  diversification, quality of maturing assets, reputation, off-balance sheet) [one: PR]

Our plan has: solvency vs liquidity: **yes** (misconception); funding/market/time: **partly**; drivers: **no**; key
considerations: **no**.

Add to our plan: an internal/external driver chart [both]; the funding vs market liquidity split stated cleanly
[both].

Verify: ALM MD (liquidity risk management section); BCBS 2008 principles (definitions).

#### B7.2 Principles for sound liquidity risk management; governance · video **B13**
Teachers cover:
- BCBS sound principles (2008): responsibility and tolerance, senior management and board, pricing liquidity into
  products, identification and measurement incl. off-balance sheet, across entities and currencies, funding
  diversification, intraday liquidity, collateral (encumbered vs unencumbered), stress testing, CFP, HQLA cushion,
  public disclosure [both; counts differ]
- Governance tiers: board (policy, tolerance, annual review), RMC, ALCO, ALM support group [both]

Our plan has: governance: **partly** (named); principles: **no**.

Add to our plan: principles in one picture; the four governance tiers with their tasks [both].

Verify: BCBS *Principles for Sound Liquidity Risk Management and Supervision* (Sept 2008) for the principle count;
ALM MD governance section.

#### B7.3 Policy, strategies and practices; management of liquidity risk · video **B13**
Teachers cover:
- Policy: approved by board or its committee; review frequency; contents (tolerance, limits, stress tests, funding
  strategy, CFP) [both]
- Tolerance expressed through quantitative limits and a survival horizon [one: OB]
- Tolerance by maturity-bucket limits (flow) and ratios (stock) [one: PR]
- Strategy factors (business mix, products, markets, home/host rules, funding sources) [one: OB]
- Stock approach vs flow approach; flow is forward-looking [one: PR]

Our plan has: stock vs flow: **yes**; policy contents and tolerance: **no**.

Add to our plan: policy approval/review and contents; how tolerance is expressed [both].

Verify: ALM MD (policy, tolerance limits on time buckets).

#### B7.4 Ratios for liquidity risk management · video **B13b**
Teachers cover:
- Stock-approach ratios (a set of about seven: volatile-liability dependence, core deposits to assets, loans and
  reserves to assets/deposits, temporary assets ratios) with their meaning; backward-looking limitation [one: PR]

Our plan has: **no (no plan)**.

Add to our plan: the stock ratios, each with formula, meaning and direction (PR says asked; syllabus heading).

Verify: RBI *Liquidity Risk Management by Banks* guidelines (7 Nov 2012, Annex) and whether the ALM MD 2025 keeps
the ratio list.

#### B7.5 Stress testing; contingency funding plan · video **B13**
Teachers cover:
- Stress types: bank-specific, market-wide, combined; extreme but plausible [both]
- Results feed limits, buffers and the CFP; vulnerabilities reported to the board and RBI [one: PR]
- CFP: emergency sources, asset sales, communication, roles, escalation; must be tested and reviewed [both]

Our plan has: governance, stress testing, CFP: **yes** (chapter 4); reporting of results and CFP testing: **no**.

Add to our plan: use and reporting of stress results; CFP contents and testing cycle [both].

Verify: ALM MD (stress testing and CFP sections).

#### B7.6 Overseas operations of Indian banks; foreign banks' branches in India · video **B13b**
Teachers cover:
- Overseas operations reported in their own statement on a longer cycle than domestic parts [one: PR]
- Liquidity managed per legal entity and jurisdiction; host rules matter [one: OB, via principles]

Our plan has: **no (no plan)**.

Add to our plan: overseas branches/subsidiaries vs foreign banks' branches in India: whose rules, which statement,
which limits (syllabus heading).

Verify: ALM MD (applicability to overseas operations and to foreign banks' branches in India).

#### B7.7 Broad norms for liquidity management; liquidity across currencies · video **B13b**
Teachers cover:
- Broad norms: a cap on long voluntary exposures, long-term resources covering most long-term assets, definitions of
  short- and medium-term [one: PR]
- Liquidity in each significant currency; currencies are not freely interchangeable in stress [one: OB]

Our plan has: **no (no plan)**.

Add to our plan: the broad norms and currency-wise liquidity (syllabus heading).

Verify: RBI 2012 liquidity guidelines and the ALM MD 2025 for the current norms (the figures PR states must be
checked line by line).

#### B7.8 Management information system; reporting to RBI; internal controls · video **B13b**
Teachers cover:
- MIS for timely liquidity reports to ALCO and board [one: PR]
- Structural liquidity statement in five parts (domestic currency, foreign currency, combined Indian, overseas,
  consolidated), periodicity of each, submission deadlines, reporting dates and holiday rule [one: PR, "asked as
  statements and small cases"]
- Internal controls and independent review of the liquidity process [one: PR, brief]

Our plan has: **no (no plan)**; B13 has the SLS buckets and tolerance limits.

Add to our plan: the five-part statement with periodicity and timelines; MIS and internal-control points (syllabus
heading).

Verify: ALM MD (structural liquidity statement parts, frequency, due dates, reporting dates) as in force on 31 Dec
2026.

### B8 Basel III Framework on Liquidity Standards

#### B8.1 Liquidity coverage ratio · video **B14**
Teachers cover:
- LCR = HQLA ÷ net cash outflows over 30 days, at least 100% [both]
- HQLA features: unencumbered, easy to value, low risk, active market, central-bank eligible [both]
- Levels 1, 2A, 2B: contents, haircuts, caps on Level 2 and 2B; adjustment sum when caps are breached [both]
- Net outflows = outflows − inflows, inflows capped [both]
- Stress scenario behind LCR (retail run-off, loss of wholesale and secured funding, downgrade collateral calls,
  volatility, undrawn facilities) [one: PR]
- FALLCR and MSF-eligible securities in HQLA [both, but framed oddly: see §3]
- Breach: report to RBI with a restoration plan; HQLA may be used in stress [one: PR]
- India's phase-in and the COVID dip [one: PR]
- LCR disclosure in annual statements [one: OB]

Our plan has: formula, HQLA levels, haircuts, FALLCR, MSF, run-offs (incl. digital add-on), inflow cap, Level 2 caps:
**yes**; HQLA features: **no**; stress-scenario elements: **no**; breach procedure: **no**.

Add to our plan: HQLA features [both]; Level-2-cap adjustment sum [both]; stress-scenario list; breach procedure.

Verify: ALM MD LCR section (HQLA list, haircuts, caps, FALLCR and MSF carve-outs, run-off rates from 1 Apr 2026,
inflow cap, breach reporting); BCBS LCR text (Jan 2013).

#### B8.2 Liquidity risk monitoring tools · video **B14**
Teachers cover:
- Five tools: contractual maturity mismatch, funding concentration, available unencumbered assets, LCR by
  significant currency, market-related tools [both]
- Basel III liquidity returns to RBI: which statement, monthly/quarterly, days allowed [both]

Our plan has: tools: **yes** (v3 added); returns: **no**.

Add to our plan: the return list with periodicity and due days [both].

Verify: ALM MD (Basel III liquidity returns, BLR forms, periodicity, due dates); BCBS LCR text Part 2.

#### B8.3 Net stable funding ratio · video **B14**
Teachers cover:
- NSFR = ASF ÷ RSF over one year, at least 100% [both]
- ASF and RSF factor categories, incl. off-balance sheet RSF [both]
- Applicability (solo/consolidated, foreign banks) and the date it took effect in India [one: PR]

Our plan has: formula and a sum: **yes**; factor categories: **partly**; applicability/date: **no**.

Add to our plan: the factor table (main rows) and the India effective date with deferral history.

Verify: ALM MD NSFR section; RBI NSFR final guidelines and deferral circulars; BCBS NSFR (Oct 2014).

---

## 2. Summary table: video → sub-points to add (most important first)

| Video | Count | Sub-points to add (most important first) |
|---|---|---|
| B01 | 9 | risk–capital–return link + RAROC preview (B1.1) · credit spread/downgrade risk · counterparty and settlement risk · country/transfer risk · banking vs trading book card (holding, accounting, capital charge, risks; MTM vs accrual) · off-balance sheet as contingent liabilities that crystallise · reinvestment and net-interest-position risk · transaction risk · "why risk management" list |
| B02 | 9 | IRM: need, challenges, four-part approach + RBI CRO rules and separation of credit risk from sanction · committee map (RMCB, ALCO, CRMC, ORMC, risk dept) · COSO ERM components and objective categories · four risk responses · three measure families (sensitivity, volatility, downside) · RBS features (risk-based intensity, confidential ratings, stress tests, governance) · risk-pricing components · audit layers in monitoring · CCP role (optional) |
| B03 | 0 | (plan already has √t both ways and SD on the calculator; classes add nothing new) |
| B04 | 11 | 1996 amendment specifics (VaR parameters, multiplier, Tier 3) · Basel I buckets, minimum, tiers, weaknesses · four SRP principles; ICAAP = bank, SREP = RBI · why regulate banks (systemic risk, contagion) · deregulation → risk-based regulation · BCBS origin, non-binding status, Concordat, Core Principles · FIRB vs AIRB parameter split · ICAAP features (board-approved, forward-looking, no mandated model) · Pillar 3 scope and frequency · Basel III motives list · RCAP (optional) |
| B05 | 7 | CCB payout restriction in the buffer range · CCyB mechanics (credit-to-GDP gap, thresholds, range) · D-SIB surcharge sum · leverage ratio sums both ways · AT1/Tier 2 admissibility within the minimums · going- vs gone-concern capital; Tier 3 abolished · G-SIB vs D-SIB |
| B06 | 3 | full CRM formula (exposure, collateral and currency haircuts) + multiple-collateral sum · CRM eligibility (transaction level; positive correlation disqualifies) · list of RBI-recognised rating agencies |
| B07 | 6 | **market risk standardised duration method: specific vs general charge, vertical disallowance, horizontal disallowances, zones, sums** · gross-income definition for BIA (sum starting from a profit figure) · conversion factor (RBI's, with the trap) · new op-risk approach (BIC × ILM) as "issued, coming" · no internal models in India (verify) and MR Dir 2026 as "coming" · TSA business-line mapping |
| B08 | 2 | statement-type case variants (which computed ratio is wrong; CET1 + CCB compliance; Pillar 2 add-on) · D-SIB variant |
| B09 | 10 | organisation (board, RMC, ALCO, support group, independent middle office) · product programme vs PTM · asset vs market liquidity risk (trading liquidity) · three VaR methods · VaR meaning as exceedance and its limits · stress-test qualities and limits; VaR vs stress · monitoring rules (stop-loss on MTM books, model validation, test frequency) · risk reporting qualities · mitigation (hedge instruments) · credit/downgrade risk in the trading book |
| B10 | 6 | organisation (board, RMCB, CPC/CRMC, CRMD) · credit risk sources beyond loans · default vs spread/downgrade risk · rating parameters (financial, management, industry, business); rating vs scoring · segment models and rating-migration data · measurement routes (internal, external, RWA) |
| B11 | 9 | CDS mechanics (buyer/seller, credit events, physical vs cash settlement) + eligibility after the 2026 widening · transaction-level policies (appraisal, independent risk officer on committees, rating review cycle, risk-based pricing) · LRM objectives, independence, frequency, coverage · portfolio level (migration tracking, rating-grade and industry ceilings, credit VaR) · why active portfolio management · CLN, credit spread option, TRS compared · CRM at two levels and the risks it creates · early-warning signals and SMA · securitisation purpose and exposure kinds |
| B12 | 10 | cause-based classification · effect-based classification · BCBS principles (2021 revision) · organisation (board, ORMC, ORMD, independent internal audit, business lines) · AMA prerequisites (loss data, scenario benchmarking) · insurance cap and conditions · process mapping and scorecards · monitoring practices (loss data, frequency analysis) · transaction and compliance risk as op-risk forms · BCP/DR |
| B13 | 9 | internal vs external drivers (B7.1) · funding vs market liquidity risk · BCBS 2008 principles · four governance tiers and tasks · policy approval, review, contents; tolerance via limits and survival horizon · stress-test types and reporting of results · CFP contents and testing · key considerations (deposit volatility, reliance on volatile funds, quality of maturing assets…) · intraday and collateral management, liquidity across entities |
| B13b | 8 | **write the plan** · structural liquidity statement: five parts, periodicity, due dates, reporting dates · stock-approach ratios · broad norms · overseas operations vs foreign banks' branches · liquidity across currencies · MIS · internal controls |
| B14 | 9 | Basel III liquidity returns and periodicity · HQLA features and "unencumbered" · Level-2-cap adjustment sum · NSFR factor table incl. off-balance sheet · NSFR India effective date and deferrals · LCR stress-scenario list · breach reporting and restoration plan · FALLCR stated correctly · LCR disclosure |
| BR | — | written last; pull traps from the items above |

Total: **108** sub-points to add (B13b counts writing its missing plan as one item).

### Possible outdated or doubtful statements in the two classes (check before teaching)

1. **NSFR effective date (PR)**: said to apply in India from the BCBS date with no deferral. RBI deferred NSFR several
   times (including for COVID). Verify the India date in the ALM MD / RBI NSFR circulars.
2. **FALLCR (OB and PR)**: described as a separate last-resort borrowing window with its own tenor, haircut and
   penalty rate. Our understanding is that FALLCR is a carve-out of SLR securities that may be counted as Level 1
   HQLA (alongside the MSF carve-out). Verify in the ALM MD; do not teach the class version.
3. **LCR run-off rates**: neither class mentions the change effective 1 Apr 2026 (higher run-off for internet/mobile
   banking-enabled retail and small business deposits; lower run-off for some non-financial entities). Classes teach
   the older table. Teach the 2026 rates (`regulatory_updates.md`, RBI-verified).
4. **Credit risk weights**: both classes treat today's risk weights as the only regime. The new credit risk SA
   (CR-SA Dir 2026) is "issued, coming" from 1 Apr 2027; teach the old table as current for the May/June 2027 exam.
5. **Market risk internal models (PR)**: presents IMA as a usable approach. Verify that RBI does not allow internal
   models for regulatory market-risk capital; MR Dir 2026 (simplified SA, effective 1 Apr 2027) is "coming". Also
   note IFR for commercial banks was discontinued in 2026 (neither class mentions IFR; no conflict, but our B07/C
   lessons must not teach IFR as current for commercial banks).
6. **Operational risk approaches (OB, PR)**: TSA/AMA taught as live options and PR gives rupee size buckets for the
   new BIC approach. Verify what is in force on 31 Dec 2026 (BIA) and the rupee buckets in the forthcoming op-risk
   directions (effective 1 Apr 2027).
7. **Charge → RWA conversion**: OB divides by the 9% minimum, PR multiplies by 12.5. One is wrong for India. Verify
   in the CA MD (our B07 plan already flags this).
8. **CCyB range (PR)**: states an upper end that looks higher than RBI's CCyB framework allows; also names the
   credit-to-GDP lower threshold only. Verify in the RBI CCyB framework / CA MD.
9. **Number of BCBS principles**: op risk given as 11 (PR) and 12–13 (OB); liquidity as 13 or 11 (PR) and about 13
   (OB). Sources: op-risk principles 2011 (11) revised 2021 (12); liquidity principles 2008 (17, of which the last
   four are for supervisors). Verify and teach one count with its source and year.
10. **Leverage ratio**: minimums taught as today's (fine), but the exposure measure is revised from 1 Apr 2027
    (Eleventh Amendment, 23 Oct 2026): "issued, coming".
11. **Credit derivatives eligibility (PR)**: user/market-maker eligibility and excluded bank types stated from the
    2022 directions; the 2026 widening (CDS/TRS) may change them. Verify against the amended directions.
12. **D-SIB buckets (PR)**: names banks with surcharges from memory; check RBI's latest D-SIB list (and whether a new
    list is released before 31 Dec 2026).
13. **Basel liquidity returns and structural liquidity statement timelines (OB, PR)**: periodicity and due days may
    have changed when the ALM MD 2025 consolidated the circulars. Verify each.
14. **Level 1 HQLA contents (OB)**: includes the whole CRR balance; RBI may allow only the part above the required
    CRR, or a specified portion. Verify in the ALM MD.
15. **LCR history (PR)**: phase-in years and the COVID relaxation dates given loosely; verify or leave out.
16. **Tier 3 history (PR)**: says subordinated debt was once Tier 3; under Basel I ordinary subordinated debt was
    Tier 2 and only short-term subordinated debt for market risk was Tier 3. Verify in BCBS 1988/1996.
17. **Basel II data requirements (PR)**: years of loss/PD data for FIRB, AIRB and AMA are garbled. Verify in Basel II
    (2006) before any statement card.
18. **MRR in securitisation (OB)**: states MRR by original maturity and for residential mortgages; verify against the
    2021 securitisation MD (and any amendment to 31 Dec 2026).
19. **Non-regulatory "rules"**: OB gives bureau-score cut-offs and PR a 10-year cap and a 70% figure as "norms";
    treat the score bands as illustration only, and verify the norms (B7.7) before use.
20. **Op-risk insurance cap (OB, PR)**: a Basel AMA rule; if RBI's in-force text does not allow AMA, teach it as Basel
    knowledge, not an Indian rule.
