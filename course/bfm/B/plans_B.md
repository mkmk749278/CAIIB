# Module B plans: B01–B14, BR (draft 2, v3, 2026-11-20)

One-page plan per video, in course order (`research/bfm/course_plan.md` v3, which added **B13b**). The rules at the
top of `course/bfm/A/plans_A.md` apply here too: rule version **31 Dec 2026**, evidence from `items_tagged.csv`
("seen" = cycles of 7) and the two full papers ("FP1" = Oliveboard Dec 2025, "FP2" = the second Oliveboard set,
question numbers), illustrative numbers fixed later in `numericals.md` and solved twice, facts checked in
`claims.csv` before lock, PLAYBOOK §5b voice.

**What changed in draft 2 (v3).** Every plan now carries four more lines (CLAUDE.md "What the course must cover"):
- **Covers**: the official sub-topic ids it teaches (`research/bfm/coverage.csv`). Shared ids say who else carries them.
- **Question kinds**: what the lesson must equip the learner to answer, in the seven blueprint kinds (define,
  purpose, who/when/how much, compare, exception, calculate, apply to a case).
- **JAIIB prerequisite**: the 30-second refresher the lesson needs, so no learner is lost.
- **v3 additions (depth checklist)**: the "Add to our plan" items from `research/bfm/depth/B.md` (and the B-video rows
  of `depth/C.md` and `depth/D.md`), numbered, folded into the chapters, numericals, traps or practice. The checklists
  are a check on coverage only: **no fact comes from them**. Each script reads the outdated-statement list in
  `depth/B.md` §3 (and `depth/D.md` end list) and never repeats those items; each plan names the ones that touch it.

**Source shorthand** (as in `depth/B.md`): **CA MD** = RBI *Commercial Banks – Prudential Norms on Capital Adequacy
Directions, 2025* with amendments to 31 Dec 2026; **ALM MD** = *Commercial Banks – Asset Liability Management
Directions, 2025* (liquidity risk, structural liquidity, LCR, NSFR); **MR Dir 2026** = *Minimum Capital Requirements
for Market Risk Directions, 2026*; **CR-SA Dir 2026** = *Capital Charge for Credit Risk – Standardised Approach
Directions, 2026*; **CVA Dir 2026** = *Credit Valuation Adjustment Framework Directions, 2026*; **OR Dir 2026** = the
operational-risk forthcoming-instructions directions (Second Amendment, 23 Oct 2026); **BCBS** = Basel Committee texts.
**"Issued, coming"** = issued before 31 Dec 2026 but in force later; taught as such, never as today's rule: new
credit-risk SA, MR Dir 2026, CVA capital, new operational-risk approach, leverage-ratio exposure measure, revised
Pillar 3 (all **1 Apr 2027**), ECL (1 Apr 2027, Module D).

**Proposed splits (owner to decide; the course plan is not renumbered here).** Five videos now carry more than
12–15 minutes can hold. Each plan below shows what goes where. If all are adopted, Module B goes from 15 to 20
videos (about +65 minutes); the course total from 62 to 67.

| Video | Why it cannot fit | Proposal |
|---|---|---|
| B04 | 12 additions on top of four chapters (Basel history + Pillars 2 and 3 in depth) | **B04** Basel I → III and scope · **B04b** Pillars 2 and 3: ICAAP, SREP, disclosure |
| B07 | a new full chapter (duration method, two new sum types) beside BIA, TSA and CRAR | **B07** market-risk capital · **B07b** operational-risk capital and the full CRAR |
| B09 | 11 additions; organisation and controls plus three VaR methods and four sums | **B09** market risk organised and controlled · **B09b** VaR, back-testing, stress tests: the sums |
| B11 | 10 additions across seven sub-topics (B5.3–B5.9) | **B11** credit risk controlled (loan to portfolio, LRM) · **B11b** CRM, securitisation, credit derivatives |
| B14 | five numericals alone need about 12 minutes, plus tools and returns | **B14** LCR · **B14b** NSFR and the monitoring tools |

Two more are **at the limit** (B12, B13): each has a fallback split written in, used only if the script draft runs
over 15 minutes.

**Mind map B: "Everything that can go wrong"** (to draw at script stage, same layout every lesson): centre = the bank
drawn as a house; branches clockwise: 1 risk types (B01) · 2 managing risk (B02) · 3 the rulebook: Basel (B04, B04b,
B05) · 4 capital sums (B06–B08, B07b) · 5 statistics (B03) · 6 market risk (B09, B09b) · 7 credit risk (B10, B11,
B11b) · 8 operational risk (B12) · 9 liquidity: managing (B13) · 10 liquidity: RBI's rules and the ratios (B13b, B14,
B14b). Colour code: **blue = capital** (what absorbs loss), **red = risk** (what causes it), **green = the ratio**
(capital ÷ risk).

---

## B01 · The family of risks
- **Goal**: name and tell apart every risk type IIBF asks, place an exposure in the banking or trading book, and say
  why risk, capital and return are tied together.
- **Evidence**: B-RISKTYPES seen 6/7, 35 mentions (no sums, all theory): basis risk (5 cycles), strategic,
  reputation ("negative publicity"), model, funding, systemic, climate, banking vs trading book; FP1 Q15, Q29, Q60, Q61.
- **Covers**: B1.1, B1.2 (with B02), B2.1, B2.2, B2.3, B2.4 (with B06), B2.5.
- **JAIIB prerequisite**: a bank's balance sheet and its off-balance-sheet items (LCs, guarantees, undrawn limits);
  30 seconds on accrual vs mark-to-market accounting.
- **Opening**: one morning at a branch: a borrower's factory floods, a bond price falls, a teller's cash is short, a
  newspaper story on the bank goes viral. "How many different risks hit this bank before lunch?"
- **Misconceptions**: some think basis risk is the same as interest rate risk in general; others think reputation
  risk is "not a real risk" because capital doesn't cover it.
- **Picture**: the bank as a house; each risk is a door (credit, market, operational, liquidity) or the weather around
  it (strategic, reputation, systemic, climate); the two books as two shelves inside; a triangle risk–capital–return
  on the front wall.
- **Chapters**: 1 What risk is (uncertainty of outcome; expected vs unexpected); the risk–capital–return triangle;
  why manage risk (3.5) · 2 The four big ones and their sub-types (credit: default, spread/downgrade, counterparty,
  settlement, country/transfer; interest rate: gap, basis, yield curve, embedded option, reinvestment, net interest
  position, names only, taught in D05; liquidity: funding, time, call) (4) · 3 The weather: strategic, reputation,
  systemic, model, climate, compliance; transaction risk under operational (3) · 4 Banking book vs trading book card;
  off-balance sheet as contingent items that crystallise (3). ~14.5 min (tight; no split: sub-type lists stay cards).
- **Traps**: basis vs gap risk; funding/time/call risk match-up; "market risk = price risk"; off-balance sheet items;
  strategic and reputation risk are *outside* the Basel operational-risk definition; a bond can lose value without
  any default (downgrade risk).
- **Practice**: 3 (name the risk from a story; one exposure, several risks; which book).
- **Question kinds**: define (each risk; banking and trading book; basis risk) · purpose (why manage risk; why capital
  exists) · who/when/how much (which book an item sits in; which item is off-balance sheet) · compare (basis vs gap;
  funding vs time vs call; banking vs trading book; accrual vs MTM) · exception (strategic and reputation outside
  the op-risk definition; settlement risk is both credit and liquidity) · calculate (none in this video: say so) ·
  apply to a case (name every risk in a branch story).
- **Map nodes**: Risk types (all).
- **v3 additions (depth checklist):** (1) risk–capital–return link with a one-line RAROC preview (D07 teaches it);
  (2) "why manage risk" list (B1.2); (3) identification at transaction, portfolio and capital level, and the "one
  loan, many risks" drill; (4) country and transfer risk as credit sub-types; (5) counterparty and settlement
  (Herstatt) risk; (6) credit spread / downgrade (migration) risk without default; (7) reinvestment and
  net-interest-position risk named (D05 teaches the sources of interest rate risk); (8) transaction and compliance
  risk placed under operational risk; (9) banking vs trading book card: holding intent, accounting (accrual vs MTM),
  capital charge, main risks; today's investment categories (HTM, AFS, FVTPL incl. HFT) and "trading book = all HFT"
  as issued, coming (MR Dir 2026); (10) off-balance-sheet items as contingent liabilities that crystallise (link to
  call risk).
- **Class statements not to repeat**: "HFT/AFS" as the whole trading-book definition (`depth/C.md` list: 2023
  investment framework in force since Apr 2024).
- **Facts to verify**: RBI definitions of banking and trading book (CA MD market-risk part; investment portfolio
  directions in force on 31 Dec 2026); MR Dir 2026 trading-book boundary ("issued, coming"); BCBS operational-risk
  definition (Basel II para 644 / OPE10); RBI climate-risk disclosure framework status at the cut-off.

## B02 · Managing risk: the framework
- **Goal**: explain how a bank organises risk management (committees, CRO, three lines), the responses to a risk,
  integrated risk management, the three kinds of "what if" testing, and how RBI supervises by risk.
- **Evidence**: ERM / EWRM / COSO (Dec 2023, Jul 2024 twice); stress testing, scenario and sensitivity analysis
  (Jul 2024, Dec 2025, Jun 2026); "integrated risk management consists of" FP1 Q36; going concern Jun 2023.
- **Covers**: B1.2 (with B01), B1.3, B3.17, B6.6.
- **JAIIB prerequisite**: how a bank is governed (board, board committees, head office vs branches): 30 seconds.
- **Opening**: a board meeting asks, "How much risk are we willing to take this year, in one number?"
- **Misconceptions**: some think the risk department "owns" risk; others think stress testing and scenario
  analysis are the same thing.
- **Picture**: three lines of defence as three walls; a dial for risk appetite; a committee tree under the board;
  three kinds of test as three dials (one factor moved = sensitivity; a story = scenario; an extreme story = stress).
- **Chapters**: 1 The process (identify, measure, monitor, control, mitigate), the six building blocks and the four
  responses (avoid, reduce, transfer, accept) (3) · 2 Structure: board, RMCB, ALCO, CRMC, ORMC, risk department, CRO
  rules, three lines, audit layers (4) · 3 Integrated risk management: necessity, challenges, approach; ERM and COSO
  (3.5) · 4 Measuring and testing: three families of measures, sensitivity, scenario, stress; risk-based supervision
  by RBI (4). ~14.5 min (no split; risk pricing kept to one card, CCP one line).
- **Traps**: sensitivity vs scenario; who owns risk (business line, first line); COSO vs Basel; appetite vs
  tolerance; the CRO has no business targets and no sanction role (verify wording); RBS intensity follows risk, not
  size.
- **Practice**: 3 (which response; which line of defence; which test).
- **Question kinds**: define (risk appetite, tolerance, ERM/IRM, RBS) · purpose (three lines; stress tests; an
  independent CRO) · who/when/how much (who approves appetite and policy; whom the CRO reports to; tenure rule) ·
  compare (sensitivity vs scenario vs stress; appetite vs tolerance; COSO vs Basel; RBS vs compliance-based
  supervision) · exception (CRO kept away from credit sanction) · calculate (none; one tiny sensitivity example) ·
  apply to a case (a bank's action: which response, which committee, which line).
- **Map nodes**: Managing risk.
- **v3 additions (depth checklist):** (1) committee map: board, RMCB, ALCO, CRMC, ORMC, risk management department;
  (2) the four risk responses; (3) three families of risk measures (sensitivity, volatility, downside/VaR) as a
  preview of B03 and B09; (4) monitoring and control: limits, periodic review, audit layers (internal, concurrent,
  RBI inspection); (5) COSO ERM components and objective categories (decide 2004 vs 2017 version from the COSO text;
  teach one, name the year); (6) IRM: necessity, challenges (data, business pressure, culture), four-part approach
  (strategy, organisation, process, systems); (7) RBI's CRO instructions: appointment, tenure, independence,
  reporting line, separation of credit risk management from sanction; (8) RBS features: intensity by risk and impact,
  confidential ratings, stress tests and governance assessment; (9) risk-pricing components (cost of funds, operating
  cost, expected loss, capital charge) as one card, developed in B10 and D07; (10) a central counterparty (CCIL) as a
  tool that removes settlement and counterparty risk, one line, optional.
- **Facts to verify**: RBI CRO circular (2017) as carried into the current MDs, and any later tenure/reporting
  instructions; RBI governance directions (RMCB); COSO *ERM – Integrated Framework* (2004) and the 2017 update; RBI
  RBS/SPARC descriptions (Department of Supervision publications, RBI annual report); CCIL start date.

## B03 · Statistics on a basic calculator
- **Goal**: compute mean, variance, standard deviation and scale volatility over time with only + − × ÷ √.
- **Evidence**: B-STATS seen 5/7, 12 mentions; "64-day volatility 56%, find …" Jun 2023; variance case study and
  mean-variance (Jun 2026, three times); FP1 Q42, Q43 (σ√t).
- **Covers**: B4.3 (measurement part, with B09/B09b); prepares C5.3.
- **JAIIB prerequisite**: JAIIB AFM business mathematics and statistics (mean, standard deviation, normal curve);
  the √ and % keys on the allowed calculator.
- **Opening**: two branches' daily cash shortfalls over five days, same average, very different swings.
- **Misconceptions**: some divide volatility by days instead of by √days; others forget that variance is in squared units.
- **Picture**: the calculator pressing the keys; dots around a mean line; a bell curve with 1, 2, 3 SD bands.
- **Chapters**: 1 Mean and deviation · 2 Variance and SD, step by step on the calculator (table method) · 3 The
  normal curve and confidence levels (z values given on screen, as in the exam: no tables, no scientific calculator)
  · 4 Volatility over time: σ√t, both directions (daily → yearly, yearly → n-day). ~12 min.
- **Numericals**: 4 (SD of 5 values; variance case; daily → annual; n-day from annual).
- **Traps**: √t not t; population vs sample variance (which IIBF expects); trading days in a year.
- **Practice**: 3, no options.
- **Question kinds**: define (mean, variance, SD, volatility) · purpose (why SD measures risk) · who/when/how much
  (how many days in a year the question assumes) · compare (variance vs SD units; population vs sample; which of two
  series is riskier) · exception (√t assumes independent daily moves) · calculate (SD, variance, σ√t both ways,
  mean ± z·SD range) · apply to a case (mean–variance choice between two portfolios).
- **Map nodes**: Market risk: statistics.
- **v3 additions (depth checklist):** none (`depth/B.md` lists 0 for B03; the plan already had √t both ways and SD on
  the calculator). Prerequisite line and question kinds added only.
- **Facts to verify**: none regulatory; the convention IIBF sums use (n vs n−1; 250 vs 252 vs 365 days) from the
  recalled questions and IIBF courseware public samples.

## B04 · Basel I → 1996 → II → III in one timeline (+ proposed B04b: Pillars 2 and 3)
- **Goal**: say why banks are regulated, what each Basel accord added and who it applies to in India; (B04b) what
  Pillars 2 and 3 demand: the four supervisory-review principles, ICAAP, SREP and disclosure.
- **Evidence**: B-BASEL seen 7/7, 30 mentions: pillars (Dec 2023, Jul 2024), ICAAP (Dec 2023, Jul 2024 twice; "three
  risk categories of ICAAP"), 1996 amendment FP1 Q38; Basel I vs II FP2 Q20–22; "regulatory CRAR doesn't capture" FP1 Q34.
- **Covers**: B04: B3.1, B3.2, B3.3, B3.4, B3.5, B3.6 (with B05), D2.1 (with B05). B04b: B3.11, B3.12, D2.3, D2.4.
- **JAIIB prerequisite**: what CRAR is and why capital protects depositors; RBI's role as supervisor (30 seconds).
- **Opening**: why a crisis in one country made every bank in India hold more capital (the story of each accord as
  the answer to a failure).
- **Misconceptions**: some think Pillar 2 is "more capital for the same risks"; others think Basel III replaced the
  pillars; others think BCBS rules are law in every country.
- **Picture**: the Basel timeline as a road with milestones; three pillars holding up a roof labelled "safe bank";
  (B04b) the bank's own self-check (ICAAP) and RBI's check of it (SREP) as two mirrors facing each other.
- **Split proposal** (12 additions cannot fit one 15-minute video):
  - **B04 · Why regulate, and Basel I → 1996 → II → III**: 1 Why banks are regulated; deregulation and the move to
    risk-based rules; BCBS: origin, BIS link, non-binding standards, Concordat, Core Principles (3) · 2 Basel I:
    buckets, minimum, tiers, weaknesses; the 1996 amendment: market risk, VaR parameters, back-testing, Tier 3 (4) ·
    3 Basel II: three pillars, approach menu, FIRB vs AIRB (3.5) · 4 Basel III motives; scope of application in India
    (3). ~14 min.
  - **B04b · Pillars 2 and 3: ICAAP, SREP, disclosure** (builds on B04, leads to B05): 1 The four SRP principles;
    risks Pillar 1 misses (3) · 2 ICAAP: features and the document (5) · 3 SREP by RBI; ICAAP = bank, SREP = RBI;
    MIS and an independent risk function (2.5) · 4 Pillar 3: purpose, qualities, areas, frequency, level, where;
    revised framework "issued, coming" (3). ~13.5 min.
- **Numericals**: none needed; one optional 1996-style sum (capital = higher of yesterday's VaR and multiplier ×
  60-day average VaR), only if the BCBS 1996 text confirms the form.
- **Traps**: which accord added market risk; Tier 3 was only for market risk and no longer exists; Pillar 2 risks
  (concentration, IRRBB, liquidity, strategic, reputation…); ICAAP is the bank's, SREP is RBI's; Pillar 3 is
  disclosure, not marketing or capital raising; BCBS standards bind only once a regulator adopts them.
- **Practice**: 3 per video.
- **Question kinds**: define (ICAAP, SREP, Pillar 3, Tier 3, consolidated bank) · purpose (why regulate; why Pillar 2;
  why disclosure) · who/when/how much (BCBS founding year; Basel I minimum; 1996 VaR parameters; who does ICAAP and
  SREP; how often ICAAP is reviewed; Pillar 3 frequency) · compare (Basel I vs II; FIRB vs AIRB; ICAAP vs SREP;
  Pillar 1 vs 2 risks) · exception (BCBS non-binding; strategic and reputation risk under Pillar 2, not Pillar 1;
  proprietary information may be withheld under Pillar 3; entities outside the consolidated capital computation) ·
  calculate (optional 1996 sum) · apply to a case (which pillar answers a situation; what an ICAAP must add).
- **Map nodes**: Basel: timeline, scope, pillars (B04); ICAAP, SREP, disclosure (B04b).
- **v3 additions (depth checklist):** (1) why regulate banks: depositor protection, systemic risk, contagion;
  (2) deregulation → risk-based regulation story; (3) BCBS origin after the 1974 failure, BIS link, non-binding
  standards, home/host Concordat, Core Principles and their revisions; (4) Basel I: risk-weight buckets, minimum
  ratio, Tier 1/Tier 2 make-up and limits, three weaknesses; (5) 1996 amendment: confidence level, holding period,
  multiplier on the 60-day average vs previous day, back-testing, Tier 3 (short-term subordinated debt, market risk
  only), effective year; (6) Basel II: FIRB vs AIRB (who supplies PD, LGD, EAD, M); IRB/AMA data-history needs only
  from the 2006 text; (7) Basel III motives list; RCAP one line, optional; (8) scope of application (D2.1): which
  banks, solo and consolidated, "consolidated bank", non-financial subsidiaries; (9) four SRP principles card;
  ICAAP = bank, SREP = RBI; (10) ICAAP features (board-approved, review frequency, forward-looking, proportional,
  stress tests, aggregation, use test, no mandated model; solo and consolidated) and document contents;
  (11) Pillar 2 risk list kept, plus MIS and independence of risk management and internal audit; (12) Pillar 3:
  qualities, disclosure areas, frequency, level, location, proprietary items; revised Pillar 3 (board-approved
  disclosure policy) as issued, coming 1 Apr 2027.
- **Class statements not to repeat**: `depth/B.md` §3 #16 (Tier 3 history), #17 (Basel II data years);
  `depth/D.md` #9 (ICAAP stress-scenario frequency).
- **Facts to verify**: BCBS dates (1974 failure and founding, 1988, 1996, 2004/2006, 2010–11, 2017) on bis.org BCBS
  history; BCBS 1988 Accord and 1996 Amendment (buckets, VaR parameters, multiplier, Tier 3); Basel II 2006 (IRB,
  AMA, SRP principles); Core Principles (1997, 2012, 2024 revision); CA MD scope paragraphs, Pillar 2/ICAAP and
  Pillar 3 parts; revised Pillar 3 directions (effective 1 Apr 2027); leverage-ratio revision issued 23 Oct 2026.

## B05 · The capital stack
- **Goal**: name each layer of capital, the minimum ratios in India, and how each buffer works and restricts payouts.
- **Evidence**: CCB (Jun 2023 sum, Dec 2024, Jun 2025, Jun 2026); "CET1 + CCB = ?" (Jul 2024, Jun 2026); leverage
  ratio for D-SIBs and others (Jun 2023, Dec 2023, Jun 2026 twice); D-SIB list (Dec 2023 twice, Jul 2024, Dec 2024);
  AT1 and Tier 2 eligibility; FP2 Q3 (CCB), FP1 Q22 (minimum CET1).
- **Covers**: B3.6 (with B04), B3.13, B3.14, B3.15, B3.16; D2.1 (with B04), D2.2 (with B06–B08).
- **JAIIB prerequisite**: equity, reserves, perpetual bonds and subordinated debt on a bank's balance sheet (AFM).
- **Opening**: two banks with the same 12% CRAR; one can pay a dividend, the other can't. Why?
- **Misconceptions**: some count CCB inside the 9% minimum; others think the leverage ratio uses risk weights.
- **Picture**: a stack of bricks: CET1 at the bottom, AT1, Tier 2, then CCB on top of CET1, CCyB and D-SIB bricks
  added when switched on; the leverage ratio as a plain ruler with no weights; a tap on the dividend pipe that closes
  as the bank eats into the buffer.
- **Chapters**: 1 What counts as capital: CET1, AT1, Tier 2; deductions; going vs gone concern; Tier 3 gone (4) ·
  2 India's minimums and the CCB with its payout restriction (3.5) · 3 CCyB mechanics and status; G-SIBs, D-SIBs,
  surcharge by bucket (3.5) · 4 Leverage ratio (and the measure coming on 1 Apr 2027); what changed by the cut-off:
  quarterly profits in CET1, general provisions in Tier 2, dividend bands by CET1, IFR ended for commercial banks
  (3.5). ~14.5 min (no split: the D-SIB and leverage sums are shown in one step here and drilled in B08).
- **Traps**: CET1 + CCB total; CCB is CET1; leverage ratio by bank type; D-SIB buckets and names; CCB payout
  restriction ≠ 2026 dividend bands; CCyB is a framework, not activated; IFR is no longer capital for commercial banks.
- **Practice**: 3.
- **Question kinds**: define (CET1, AT1, Tier 2, CCB, CCyB, leverage ratio, D-SIB) · purpose (buffers; leverage
  backstop; going vs gone concern) · who/when/how much (minimums; CCB size; leverage minimums by bank type; D-SIB
  buckets and surcharges; CCyB indicator and range) · compare (CCB vs CCyB; G-SIB vs D-SIB; risk-based ratio vs
  leverage ratio; payout restriction vs dividend bands) · exception (CCyB not activated; Tier 3 abolished) ·
  calculate (CET1 + CCB + D-SIB total; leverage both ways) · apply to a case (can this bank pay a dividend?).
- **Map nodes**: Basel: capital stack, buffers, leverage ratio, D-SIBs.
- **v3 additions (depth checklist):** (1) going-concern vs gone-concern capital; Tier 3 abolished (trap);
  (2) AT1 and Tier 2 admissibility within the minimums (any limits as the CA MD states them); (3) CCB
  payout-restriction mechanism across the buffer range, kept apart from the 2026 dividend bands; (4) CCyB mechanics:
  credit-to-GDP gap, thresholds, range, lead time, release; status "not activated" (18 May 2026); (5) G-SIB vs D-SIB
  and a D-SIB surcharge sum; (6) leverage ratio both ways (find the ratio; find the exposure allowed); the new
  exposure measure as issued, coming 1 Apr 2027; (7) IFR discontinued for commercial banks (from `depth/D.md` #2 and
  `regulatory_updates.md`).
- **Class statements not to repeat**: `depth/B.md` §3 #8 (CCyB range), #10 (leverage measure as today's),
  #12 (D-SIB names from memory); `depth/D.md` #2 (IFR as capital).
- **Facts to verify**: current CA MD (CET1 5.5%, Tier 1 7%, total 9%, CCB 2.5% as taught by convention: check;
  minimum capital conservation ratios table; AT1/Tier 2 admissibility); leverage ratio figures by bank type and the
  Eleventh Amendment (23 Oct 2026, effective 1 Apr 2027); RBI CCyB framework (Feb 2015) and press release 18 May 2026;
  D-SIB framework (July 2014) and RBI's latest D-SIB list (check for a new list before 31 Dec 2026); BCBS G-SIB
  framework; the 2026 changes (quarterly profits, general provisions in Tier 2, dividend directions 10 Mar 2026 with
  "z"); IFR withdrawal text for commercial banks.

## B06 · Credit risk-weighted assets
- **Goal**: turn a loan book and off-balance-sheet items into credit RWA, using risk weights, CCFs and collateral.
- **Evidence**: B-CAPCALC seen 7/7, 36 mentions, 19 sums: RWA (Jun 2025, Dec 2025 "10 questions", Jun 2026 several),
  housing loan risk weight, CCF limit, balance-sheet CCF, QCCP risk weight, haircuts (Dec 2023, Jun 2026); FP1 Q24
  (LC exposure type), Q25 (loan + LC limit), Q26 (AAA PSU).
- **Covers**: B2.4 (with B01), B3.7, B3.8, B5.7 (with B11b); D2.2 (credit part).
- **JAIIB prerequisite**: fund vs non-fund facilities, LTV on home loans, what a credit rating is; LCs and guarantees
  from A08 (30 seconds).
- **Opening**: a corporate with a Rs 100 crore loan, a Rs 50 crore LC limit and a guarantee. "How much capital does
  this one customer eat?"
- **Misconceptions**: some apply the risk weight before the CCF; others think undrawn limits carry no risk weight.
- **Picture**: three trays: on-balance (exposure × RW), off-balance (exposure × CCF × RW), collateral (haircut, then
  subtract); a scale weighing each customer.
- **Chapters**: 1 Risk weights by counterparty (sovereign, bank, corporate by rating, retail, housing, NBFC); the
  RBI-recognised rating agencies (3.5) · 2 Off-balance sheet: CCFs for LCs, guarantees, undrawn limits (3) · 3 Credit
  risk mitigation: eligibility, the comprehensive formula with all three haircuts, several collaterals (4) · 4 Drill
  (4 sums) and a "coming 1 Apr 2027" card for the new standardised approach (3.5). ~14 min.
- **Numericals**: 4 (corporate loan + LC; housing loan by LTV; one exposure with two collaterals, exposure, collateral
  and currency-mismatch haircuts; small book).
- **Traps**: order (CCF then RW); trade LC vs financial guarantee CCF; currency-mismatch haircut add-on; collateral
  recognised account by account, not for the portfolio; collateral that moves with the borrower is not eligible;
  the new SA table is not yet in force.
- **Practice**: 3, no options.
- **Question kinds**: define (CCF, RWA, haircut, eligible collateral) · purpose (why CCFs; why haircuts) · who/when/how
  much (risk weights; CCFs; haircut bands; which agencies) · compare (trade LC vs financial guarantee; on vs
  off-balance; old vs coming SA) · exception (correlated collateral; ECLGS guaranteed portion; QCCP; NBFC add-on
  reversed) · calculate (RWA with CCF and CRM) · apply to a case (one customer's capital).
- **Map nodes**: Capital sums: credit RWA.
- **v3 additions (depth checklist):** (1) the comprehensive-approach formula written out (exposure haircut,
  collateral haircut, currency-mismatch haircut) and a two-collateral sum; (2) CRM eligibility: transaction level;
  positive correlation with the borrower disqualifies; (3) card of RBI-recognised domestic and international rating
  agencies; (4) the 2026 table items in the drill: clearing-corporation payment commitments, QCCP trade exposures,
  ECLGS 5.0, NBFC add-on reversal (dates to verify); (5) CR-SA Dir 2026 as an "issued, coming" card with two or
  three headline changes (`depth/B.md` §3 #4).
- **Class statements not to repeat**: `depth/B.md` §3 #4 (today's weights as the only regime).
- **Facts to verify**: risk weights and CCFs in the CA MD **as in force on 31 Dec 2026** (the new credit risk
  standardised approach applies from 1 Apr 2027: "issued, coming"; teach the old table as current); housing loan
  risk weights; QCCP exposure weight; CRM chapter (haircut table, formula, eligibility, correlation condition); list
  of eligible rating agencies; the 2026 changes (clearing-corporation commitments, ECLGS 5.0, QCCP 2%).

## B07 · Market-risk capital (+ proposed B07b: operational-risk capital and the full CRAR)
- **Goal**: compute the market-risk capital charge by the standardised duration method (specific and general
  charges, vertical and horizontal disallowances) and convert it to RWA; (B07b) compute the operational-risk charge
  (gross income from a P&L, BIA, TSA) and the full CRAR.
- **Evidence**: operational RWA and capital charge (Jun 2023, 5 marks); capital charge (Jun 2023, Jun 2025); "credit,
  market, operational RWA given, compute Tier 1" Jun 2026; CRAR (most cycles); FP1 Q30 (gross income over 3 years),
  Q65, Q99 (market RWA from charge), Q100; FP2 Q25, Q26, Q44–46. Duration-method sums: drilled in one public class,
  not yet in our recall data; syllabus B3.9 names the charge.
- **Covers**: B07: B3.9; D2.2 (market part). B07b: B3.10, B6.4 (quantification, with B12); D2.2 (operational part and
  the CRAR).
- **JAIIB prerequisite**: B07: bond price and yield move opposite; modified duration in one line (full lesson C06).
  B07b: P&L heads (interest income and expense, fee income, operating expenses, provisions) from JAIIB AFM.
- **Opening**: a bank's three risk numbers on a whiteboard and a regulator's question: "Are you adequately capitalised?"
- **Misconceptions**: some multiply the charge by 12.5 when RBI's own conversion differs (to verify); others average
  gross income over years with negative income included; others net a long and a short bond fully, as if no basis
  risk remained.
- **Picture**: three RWA buckets (credit, market, operational) pouring into one jar; the capital stack (B05) beside it;
  (B07) the time-band shelf with long and short bonds sitting in zones, and a "disallowed" slice cut off each match.
- **Split proposal** (a new full chapter with two new sum types cannot share 15 minutes with BIA, TSA and CRAR):
  - **B07 · Market-risk capital: the duration method**: 1 What the charge covers; trading book; which approach India
    uses (2) · 2 Specific risk charge (2.5) · 3 General market risk: duration, time bands, zones; vertical
    disallowance, then horizontal within a zone, between adjacent zones, between far zones; two sums (6) · 4 Forex
    and equity charges; charge → RWA; MR Dir 2026 "issued, coming" (3). ~13.5 min.
  - **B07b · Operational-risk capital and the full CRAR** (builds on B07, leads to B08): 1 Gross income built from a
    profit figure (3) · 2 BIA: alpha on the average of positive years (3) · 3 TSA: business-line mapping and betas;
    AMA only as a pointer to B12; new approach (BIC × ILM) "issued, coming" (3) · 4 Total RWA; CET1, Tier 1 and total
    ratios; Tier 2 check; surplus or shortfall (4.5). ~13.5 min.
- **Numericals**: B07: 3 (vertical disallowance in one band; horizontal disallowance across zones; charge → RWA).
  B07b: 4 (gross income from a P&L; BIA with a negative year; TSA; full CRAR with surplus/shortfall).
- **Traps**: the conversion factor; years with negative gross income; Tier 2 limit; CET1 vs Tier 1 vs total;
  vertical before horizontal; which approach India actually uses on 31 Dec 2026; Tier 3 gone; IFR not capital.
- **Practice**: 3 per video, no options.
- **Question kinds**: define (specific vs general market risk; vertical and horizontal disallowance; gross income) ·
  purpose (why disallowances; why negative years are dropped) · who/when/how much (alpha; betas; zones and
  disallowance rates; conversion factor; approaches India allows) · compare (BIA vs TSA vs AMA vs coming SA;
  specific vs general charge) · exception (negative-income years excluded; internal models not used for capital in
  India: verify) · calculate (all the numericals above) · apply to a case (full CRAR, "is the bank adequately
  capitalised?").
- **Map nodes**: Capital sums: market RWA (B07); operational RWA, CRAR (B07b).
- **v3 additions (depth checklist):** (1) standardised duration method: specific vs general market risk charge;
  (2) vertical disallowance within a time band, with a sum; (3) horizontal disallowances (within a zone, adjacent
  zones, far zones) and the three zones, with a sum; (4) forex and equity charges in one card (forex charge after the
  2026 NOP revamp: date to verify); (5) "which approach India uses" card for credit, market and operational risk,
  with MR Dir 2026, OR Dir 2026 (BIC × ILM) and CVA Dir 2026 as issued, coming 1 Apr 2027; (6) internal models not
  used for regulatory market-risk capital in India (verify before saying it); (7) gross-income definition (what is
  added back, what is left out) with a sum starting from net profit; (8) TSA business-line mapping drill; (9) the
  conversion factor taught from the CA MD, with the 12.5 vs 100/9 trap; (10) Tier 3 gone and whether any Tier 2 limit
  still applies (from `depth/D.md` D2.2).
- **Class statements not to repeat**: `depth/B.md` §3 #5 (IMA as usable; IFR), #6 (TSA/AMA as live options; rupee
  BIC buckets), #7 (charge → RWA factor); `depth/D.md` #1 (Tier 2 cap), #2 (IFR), #6 (AMA vs internal models mixed up).
- **Facts to verify**: CA MD market-risk chapter (duration method, time bands, zones, disallowance rates, forex and
  equity charges, conversion factor) as at 31 Dec 2026; CA MD op-risk chapter (approaches allowed, alpha, betas,
  gross-income definition); CA MD Tier 2 eligibility and any limits; MR Dir 2026 (issued 21 Sep 2026); OR Dir 2026
  (23 Oct 2026); CVA Dir 2026 (7 Oct 2026); BCBS 1996 amendment for the disallowance idea; date of the 2026 NOP and
  forex-charge revamp.

## B08 · Capital adequacy case study, exam style
- **Goal**: work a 5-question capital case end to end, plus the statement-type variants IIBF uses.
- **Evidence**: RWA / CRAR / CET1 case studies in 6 of 7 cycles (Jun 2023, Dec 2023, Jul 2024 ×2, Jun 2026 ×2).
- **Covers**: D2.2 (with B05–B07b); practice across B3.7–B3.16.
- **JAIIB prerequisite**: none beyond percentages; B05–B07b.
- **Opening**: a bank's balance sheet and risk data on screen, the IIBF way.
- **Misconceptions**: some stop at CRAR and miss the buffer check; others count CCB inside the minimum.
- **Picture**: buckets + stack + jar from B05–B07b together.
- **Chapters**: 1 Read the case (60-second checklist) · 2 Five questions, pause before each · 3 Variants IIBF uses
  (RWA grows 25%, minimum raised, "which ratio is wrong", D-SIB bank) · 4 Leverage ratio both ways. ~13 min.
- **Numericals**: the 5-question case; leverage ratio both ways; D-SIB total CET1.
- **Traps**: CCB inside the minimum; Tier 2 beyond what counts; CET1 vs Tier 1; using risk weights in the leverage
  ratio.
- **Practice**: the case + 2 variants in the PDF.
- **Question kinds**: calculate and apply to a case (main); compare (which ratio fails, by how much); exception (a
  buffer shortfall is not a minimum breach, but payouts are restricted); who/how much (minimums and buffers).
- **Map nodes**: none new (uses B05–B07b nodes).
- **v3 additions (depth checklist):** (1) statement-type variants: which computed ratio is wrong; CET1 + CCB
  compliance; a Pillar 2 add-on; (2) D-SIB variant (extra CET1 surcharge); (3) leverage-ratio sums both ways (moved
  here from B05 to keep B05 within time); (4) Tier 2 check and "no Tier 3" line (`depth/D.md` D2.2); (5) one
  dividend-band question from the 2026 dividend directions (CET1 bucket → payout band; "z" defined from the RBI text).
- **Facts to verify**: as B05–B07b; dividend directions (10 Mar 2026) bands and "z".

## B09 · Market risk organised and controlled (+ proposed B09b: VaR, back-testing, stress tests)
- **Goal**: explain how a bank organises, limits, reports and mitigates market risk and trading liquidity risk;
  (B09b) compute VaR from position, volatility, confidence level and days, by hand and with correlation, and say what
  VaR misses.
- **Evidence**: market risk other name (Jun 2023); volatility sensitivity (Jul 2024); C-MKTRISK (VaR, stop loss) seen
  6/7; FP1 Q43; VaR questions in shift lists Jun 2024–Jun 2026.
- **Covers**: B09: B4.1, B4.2, B4.3 (monitoring, control, reporting), B4.4, B4.5. B09b: B4.3 (measurement, with B03);
  C5.3 (VaR part, with C06).
- **JAIIB prerequisite**: B09: price and yield move opposite; what a forward, swap and option do (one line each; C08,
  C09 later). B09b: B03 (σ, √t, z).
- **Opening**: a dealer holds Rs 100 crore of bonds. "What's the most we can lose tomorrow, nine days out of ten?"
- **Misconceptions**: some think VaR is the worst possible loss; others scale VaR by days, not √days; others think
  the treasury desk checks its own limits.
- **Picture**: the dealing room with a glass wall between front office and middle office; a limits board; the bell
  curve with the left tail cut off at the confidence level; a dial for days with √.
- **Split proposal** (11 additions and four sums cannot fit one video):
  - **B09 · Market risk: how a bank organises and controls it**: 1 Market risk: four factors; credit, default and
    downgrade risk inside the trading book (3) · 2 Organisation: board, RMC, ALCO, market-risk/ALM support group;
    front, middle, back office with an independent middle office; product programme vs PTM (3.5) · 3 Limits (position,
    stop loss on MTM books, VaR limits), breaches and escalation, model validation, reporting qualities (3.5) ·
    4 Trading liquidity (asset-specific vs market-wide) and mitigation (hedges by risk factor, diversification,
    cutting positions) (3). ~13 min.
  - **B09b · VaR, back-testing and stress tests: the sums** (builds on B03, B09; leads to C07): 1 What VaR means
    (exceedance, not worst loss); three methods and what each assumes (3.5) · 2 VaR = position × volatility × z × √t
    on the calculator: 1-day, 10-day, confidence change (5) · 3 Two positions with correlation (3) · 4 Back-testing
    and exceptions; stress tests (qualities, limits); VaR vs stress (3). ~14.5 min.
- **Numericals**: B09b: 4 (1-day VaR; 10-day VaR; confidence level change; two-position VaR with correlation, z and
  correlation given in the question).
- **Traps**: z for 95% vs 99%; √t; VaR ≠ maximum loss; who sets limits (board/RMC, not the desk); stop-loss on MTM
  books; historical vs variance–covariance assumptions; product programme vs PTM.
- **Practice**: 3 per video.
- **Question kinds**: define (market risk, VaR, back-testing, PTM, trading liquidity risk) · purpose (stop loss;
  middle office; back-testing; stress tests) · who/when/how much (who sets limits; who prices products; confidence
  and holding period in RBI and Basel texts; how often models are validated) · compare (three VaR methods; VaR vs
  stress test; asset vs market-wide liquidity risk; product programme vs PTM) · exception (VaR says nothing beyond
  the cut-off) · calculate (the four VaR sums) · apply to a case (a limit breach: what happens; which hedge for which
  risk).
- **Map nodes**: Market risk: organisation, limits, trading liquidity, mitigation (B09); VaR, back-testing, stress
  (B09b).
- **v3 additions (depth checklist):** (1) organisation picture: board → RMC → ALCO → support group; independent middle
  office (C01 keeps the desk detail); (2) product programme vs temporary product transaction memorandum (PTM);
  (3) credit, default and downgrade risk of bonds held for trading; (4) trading liquidity: asset-specific vs
  market-wide, leverage forcing sales; (5) three VaR methods (variance–covariance, historical simulation, Monte
  Carlo), what each assumes, weighting in historical VaR; (6) VaR across positions with correlation, as a sum
  (`depth/C.md` C5.3); (7) VaR as an exceedance frequency, its strengths and limits; (8) back-testing exceptions;
  stress-test qualities and limits; VaR vs stress; (9) monitoring rules: stop-loss on MTM books, escalation, model
  validation and stress-test frequency; (10) reporting qualities (timely, accurate, concise, with commentary);
  (11) mitigation by risk factor.
- **Class statements not to repeat**: `depth/B.md` §3 #5 (internal models as usable for capital).
- **Facts to verify**: RBI *Guidance Note on Market Risk Management* (2002): organisation, product programme, PTM,
  limits; BCBS 1996 amendment (back-testing framework); confidence levels and holding periods in the CA MD (31 Dec
  2026) and Basel texts; MR Dir 2026 (issued 21 Sep 2026, effective 1 Apr 2027: "issued, coming"; check whether it
  uses VaR at all).

## B10 · Credit risk measured
- **Goal**: explain how credit risk is organised, identified and rated, compute expected loss, and explain unexpected
  loss, CreditMetrics and the Altman Z-score.
- **Evidence**: expected loss Jun 2023; Altman Z (Jun 2023 twice, Dec 2024 case); CreditMetrics / JP Morgan model
  (Jun 2026 ×3); credit rating Jul 2024; FP1 Q19, Q63, Q64 (EL vs UL).
- **Covers**: B5.1, B5.2.
- **JAIIB prerequisite**: ratio analysis from JAIIB AFM (working capital, retained earnings, EBIT, sales to total
  assets) for the Z-score; credit appraisal basics.
- **Opening**: two borrowers with the same loan amount and very different chances of default.
- **Misconceptions**: some think capital covers expected loss; others think a high Z-score means high risk; others
  think credit risk lives only in loans.
- **Picture**: a loss bar split into EL (covered by pricing and provisions) and UL (covered by capital); a Z-score
  thermometer with three zones; a rating ladder with arrows for migration.
- **Chapters**: 1 What credit risk is, where it arises (loans, non-fund, treasury, cross-border), who manages it
  (3) · 2 Identifying and rating: tools, rating parameters, rating vs scoring, segment models, migration data (3.5) ·
  3 PD, LGD, EAD and EL = PD × LGD × EAD; UL and why capital exists; risk-based pricing (4) · 4 Models: CreditMetrics,
  KMV idea in one line, Altman Z case (4). ~14.5 min (tight; no split).
- **Numericals**: 3 (EL; EL for a small portfolio; Z-score case).
- **Traps**: EL vs UL coverage; Z-score zones; CreditMetrics = migration of ratings; who sets prudential limits (a
  board-level committee, not the credit department: verify); default risk vs downgrade risk.
- **Practice**: 3.
- **Question kinds**: define (PD, LGD, EAD, EL, UL, migration, Z-score) · purpose (rating vs scoring; why UL needs
  capital) · who/when/how much (committee roles; Z-score cut-offs) · compare (EL vs UL; default vs spread risk;
  rating vs scoring; CreditMetrics vs KMV) · exception (EL in pricing and provisions, not capital) · calculate (EL,
  portfolio EL, Z-score) · apply to a case (a credit decision from a Z-score; which committee acts).
- **Map nodes**: Credit risk: organisation, rating, EL/UL, models.
- **v3 additions (depth checklist):** (1) opening chapter: definition, sources beyond loans, the framework;
  (2) organisation: board, RMCB, credit policy committee / CRMC, credit risk management department; who sets
  prudential limits (trap); (3) two components: default risk and credit-spread/downgrade risk; (4) identification
  tools (KYC, financials, bureau score, industry, concentration); (5) rating parameters (financial, management,
  industry, business); rating vs scoring; segment-wise models and migration data; (6) measurement routes: internal
  rating, external rating, regulatory RWA (IRB parameters link back to B04); (7) risk-based pricing line (from the B02
  risk-pricing card).
- **Class statements not to repeat**: `depth/B.md` §3 #19 (bureau-score cut-offs as "norms": illustration only).
- **Facts to verify**: RBI *Guidance Note on Credit Risk Management* (2002) and current MDs for committee roles;
  Altman Z-score coefficients and cut-offs (original 1968 paper); CreditMetrics technical document (J.P. Morgan,
  1997).

## B11 · Credit risk controlled (+ proposed B11b: credit risk passed on)
- **Goal**: know how banks control credit risk at loan and portfolio level and review loans (LRM); (B11b) how
  mitigation, securitisation and credit derivatives move the risk, and what risk stays behind.
- **Evidence**: MRR in securitisation (Jun 2023 ×2, Dec 2023, Dec 2024, Jun 2025); credit derivatives, CDS vs TRS,
  market makers (Dec 2023 ×3); credit portfolios; FP1 Q23, Q98; FP2 Q32–35 (MRR sums).
- **Covers**: B11: B5.3, B5.4, B5.5, B5.6. B11b: B5.7 (with B06), B5.8, B5.9; C7.3.
- **JAIIB prerequisite**: B11: credit monitoring (stock statements, drawing power, renewals), SMA and NPA in one line
  (D02 in depth). B11b: what a bond and a guarantee are.
- **Opening**: a bank with too many home loans and a mutual fund that wants them. "Can the bank sell the risk?"
  (B11b); (B11) a reviewer opens a loan file six months after sanction and spots three warning signs.
- **Misconceptions**: some think securitisation removes all the bank's risk; others think CDS and TRS transfer the
  same thing; others think loan review is only a check of the sanction note.
- **Picture**: (B11) a single loan file under a magnifier, then the whole book as a grid by rating and industry with
  ceilings; (B11b) a basket of loans being sliced into tranches; a CDS as an umbrella sold over a bond.
- **Split proposal** (10 additions across seven sub-topics):
  - **B11 · Credit risk controlled: from one loan to the whole book**: 1 Transaction-level policies (3.5) ·
    2 Monitoring after disbursement: early-warning signals, corrective action, SMA, MIS (3) · 3 Portfolio level:
    migration tracking, ceilings by rating and industry, concentration, credit VaR; why active portfolio management
    (3.5) · 4 Loan review mechanism (3). ~13 min.
  - **B11b · Credit risk passed on: CRM, securitisation, credit derivatives** (builds on B06, B11; leads to C08):
    1 CRM at two levels and the risks it creates (2.5) · 2 Securitisation: purpose, SPV, tranches, exposure kinds,
    MRR and MHP; two sums (5) · 3 CDS mechanics, TRS, CLN, credit spread option; vs insurance and LCs (4) · 4 Who may
    deal after the 2026 widening (2.5). ~14 min.
- **Numericals**: B11b: 2 MRR sums.
- **Traps**: MRR by maturity and asset type; CDS (credit risk only) vs TRS (total return); CLN buyer carries both
  issuer and reference risk; LRM reviewer must be independent of sanction; user vs market maker.
- **Practice**: 3 per video.
- **Question kinds**: define (LRM, EWS, MRR, MHP, SPV, CDS, TRS, CLN, credit event) · purpose (why LRM; why securitise;
  why active portfolio management) · who/when/how much (who may be a user or market maker; MRR; MHP; LRM frequency
  and coverage) · compare (CDS vs TRS vs CLN vs spread option; credit derivative vs guarantee/LC/insurance;
  transaction vs portfolio CRM) · exception (reference-obligation exclusions; residential mortgage MRR; securitisation
  leaves retained risk) · calculate (MRR) · apply to a case (which control fits a warning sign; EWS → SMA step).
- **Map nodes**: Credit risk: transaction controls, portfolio, LRM (B11); securitisation, credit derivatives (B11b).
- **v3 additions (depth checklist):** (1) transaction-level checklist: appraisal, an independent credit-risk officer on
  approval committees above a limit, rating review on its own cycle, risk-based pricing; (2) post-disbursement
  monitoring, early-warning signals, corrective actions, the SMA step, MIS; (3) portfolio level: migration tracking,
  ceilings by rating grade and industry, concentration, credit VaR; (4) reasons for active credit portfolio
  management; (5) LRM: objectives, reviewer independence, frequency by size, sample review for retail, yearly
  coverage, post-sanction scope; (6) CRM at two levels and the residual risks it brings (legal, operational,
  liquidity, market); (7) securitisation purpose and exposure kinds (credit enhancement, liquidity facility, ABS/MBS),
  light; (8) CDS mechanics: buyer and seller, premium, credit events, physical vs cash settlement; reference-obligation
  rules; (9) CLN and credit spread option beside TRS; credit derivatives vs insurance and LCs (`depth/C.md` C7.3);
  (10) users vs market makers under the directions as amended in 2026, with the "who cannot" trap.
- **Class statements not to repeat**: `depth/B.md` §3 #11 (2022 eligibility as current), #18 (MRR figures).
- **Facts to verify**: RBI *Guidance Note on Credit Risk Management* (2002: transaction policies, portfolio, LRM);
  SMA categories in the IRACP / stressed-assets directions at 31 Dec 2026; RBI large exposures framework;
  *Master Direction – Securitisation of Standard Assets* (2021, as amended) for MRR and MHP; RBI *Credit Derivatives
  Directions, 2022* and the 2026 amendment (CDS/TRS widening; date to confirm per `regulatory_updates.md`); CA MD CRM
  chapter (residual-risk language).

## B12 · Operational risk
- **Goal**: classify operational risk by cause, effect and Basel event type and business line; explain how it is
  organised, identified, monitored, measured and reduced.
- **Evidence**: B-OPRISK seen 4/7: alpha (Dec 2023, Dec 2025), beta factors (Dec 2023, Jun 2026), 7 event types
  (Dec 2023), project finance business line (Jun 2025), "which approach is not" (Jun 2026), BIA/TSA mix case (Jun 2026).
- **Covers**: B6.1, B6.2, B6.3, B6.4 (with B07b), B6.5.
- **JAIIB prerequisite**: frauds and internal controls (maker–checker, dual control), KYC, BCP basics from JAIIB PPB.
- **Opening**: an ATM network down for a day, a forged cheque, a flood at a data centre: three losses, one risk type.
- **Misconceptions**: some think op risk is only fraud; others think legal risk is excluded (it's in; strategic and
  reputation are out); others think internal audit manages op risk.
- **Picture**: seven doors for the seven event types; eight shelves for business lines; a cause → event → effect
  arrow over them.
- **Chapters**: 1 Definition; cause-based and effect-based classification; seven event types; business lines (where
  project finance sits); mapping drill (4.5) · 2 Principles (one picture) and organisation: board, ORMC, ORMD,
  independent internal audit, business lines (3) · 3 Processes: process mapping, RCSA, scorecards, loss data,
  frequency/severity, KRIs (3.5) · 4 Measuring and reducing: approaches (BIA, TSA, AMA and its prerequisites; the new
  approach "issued, coming"); controls, insurance, scenario analysis, BCP (4). ~15 min (**at the limit**).
- **Fallback split** (only if the script draft runs over 15 minutes): **B12** = what op risk is, classifications,
  event types, business lines, principles, organisation (B6.1, B6.2); **B12b** = processes, monitoring, measurement,
  mitigation, scenario analysis, BCP (B6.3–B6.5).
- **Traps**: legal risk in, strategic/reputation out; corporate finance vs commercial banking line; alpha/beta values;
  cause vs effect vs event type; internal audit is independent and does not run the risk; insurance credit is a
  Basel AMA rule, not a general Indian one (verify).
- **Practice**: 3 (map a loss to cause, event type and business line; RCSA vs KRI; which approach is not).
- **Question kinds**: define (op risk, event types, KRI, RCSA, scenario analysis) · purpose (loss data; scenario
  analysis for rare, severe events; insurance) · who/when/how much (roles of board, ORMC, ORMD, audit; number of BCBS
  principles in a named year; insurance cap under AMA) · compare (cause vs effect classification; RCSA vs KRI; BIA vs
  TSA vs AMA vs coming SA) · exception (legal in, strategic/reputation out; audit does not manage) · calculate (none
  here: sums in B07b) · apply to a case (map loss events).
- **Map nodes**: Operational risk.
- **v3 additions (depth checklist):** (1) cause-based classification (people, process, systems, external) with
  key-person dependency; (2) effect-based classification (legal liability, regulatory penalty, loss of or damage to
  assets, restitution, loss of recourse, write-down); (3) mapping drill: case → cause, effect, event type, business
  line; (4) transaction and compliance risk as forms of op risk; (5) BCBS principles in one picture (2021 revision;
  one count with its year) and RBI's Guidance Note on Operational Risk Management and Operational Resilience
  (Apr 2024); (6) organisation chart; (7) process mapping and scorecards beside RCSA; (8) loss-event data,
  frequency/severity analysis, KRI qualities and examples; (9) AMA prerequisites (internal and external loss data,
  scenario analysis benchmarked to loss data) as Basel knowledge; (10) insurance as mitigation: AMA cap and policy
  conditions, as Basel knowledge unless RBI's in-force text has it; (11) BCP, disaster recovery and operational
  resilience, one beat.
- **Class statements not to repeat**: `depth/B.md` §3 #6 (TSA/AMA as live options), #9 (principle counts), #20
  (insurance cap as an Indian rule).
- **Facts to verify**: BCBS Basel II Annex 9 (event types, business lines); BCBS *Principles for the Sound
  Management of Operational Risk* (2011) and *Revisions* (Mar 2021); RBI guidance note on operational risk (2005) for
  cause/effect classification; RBI 2024 guidance note; RBI op-risk rules in force on 31 Dec 2026 (CA MD) and OR Dir
  2026 (1 Apr 2027).

## B13 · Liquidity risk 1: need, drivers, principles, governance, the flow approach, stress tests and the CFP
- **Goal**: explain liquidity risk, its forms and drivers, how a bank governs it, how the flow approach measures the
  funding need under scenarios, and how stress tests and the contingency funding plan work.
- **Evidence**: stock and flow approach (Dec 2023, FP1 Q57); liquidity risk Jul 2024; liquidity gap FP1 Q94; B-LIQ
  seen 6/7 (whole cluster).
- **Covers**: B7.1, B7.2, B7.3, B7.5; D4.1 (with B13b); D4.2 (flow part, with B13b, B14).
- **JAIIB prerequisite**: deposit types, CASA vs term deposits, call money, what "maturity" of an asset or
  liability means (JAIIB PPB, 30 seconds).
- **Opening**: a rumour on WhatsApp and a queue at a branch on a Monday morning.
- **Misconceptions**: some think a profitable bank can't fail for liquidity; others think liquidity and solvency are
  one; others think an undrawn credit line from another bank is cash in hand.
- **Picture**: a water tank with taps in (inflows) and out (outflows); a maturity ladder beside it; a fire-drill card
  for the CFP.
- **Chapters**: 1 What liquidity risk is: funding, time and call risk; funding vs market liquidity risk; internal vs
  external drivers; why it matters (3.5) · 2 Sound principles (one picture), four governance tiers, policy, tolerance
  and survival horizon (3.5) · 3 Flow approach: three dimensions, maturity ladder, behaviour assumptions, three
  scenarios with a net-funding-requirement sum; market-access diversification (4.5) · 4 Stress tests (types, use,
  reporting) and the CFP (contents, testing) (3). ~14.5 min (**at the limit**; the stock ratios and the structural
  liquidity statement moved to B13b).
- **Fallback** (if the draft runs over 15 minutes): move the three-scenario sum to B13b ch2, next to the SLS.
- **Numericals**: 1 (net funding requirement under three scenarios from a small ladder).
- **Traps**: liquidity vs solvency; funding/time/call risk vs funding/market liquidity risk; stock vs flow;
  bank-specific vs market-wide vs combined stress; credit lines with adverse-change clauses may vanish in stress.
- **Practice**: 3.
- **Question kinds**: define (liquidity, funding/time/call risk, market liquidity risk, CFP, survival horizon) ·
  purpose (policy; stress tests; CFP) · who/when/how much (who approves the policy and how often it is reviewed;
  governance tiers and tasks) · compare (liquidity vs solvency; stock vs flow; internal vs external drivers; three
  scenarios) · exception (a profitable bank can fail; unreliable credit lines) · calculate (net funding requirement)
  · apply to a case (the rumour: which drivers, which CFP steps).
- **Map nodes**: Liquidity: forms and drivers, governance, flow approach, stress tests, CFP.
- **v3 additions (depth checklist):** (1) ch1 fixed: funding, time and **call** risk (draft 1 said "market"), then
  funding vs market liquidity risk as the Basel split (`depth/D.md` D4.1); (2) internal vs external drivers chart,
  and external (geographic, systemic, instrument) vs internal (bank-specific) liquidity risk; (3) factors that strain
  liquidity and the responses; key considerations (deposit volatility, reliance on volatile funds, quality of
  maturing assets); (4) role and benefits of good liquidity management; (5) BCBS 2008 sound principles in one picture
  (one count with its year), incl. intraday liquidity, collateral (encumbered vs unencumbered), liquidity across
  entities; (6) four governance tiers (board, RMC, ALCO, ALM support group) and their tasks; (7) policy: approval,
  review, contents; tolerance by quantitative limits and a survival horizon; strategy factors; (8) flow approach in
  three dimensions (net funding requirement, market access, contingency planning) and the behaviour-assumptions card;
  (9) three scenarios (going concern, bank-specific crisis, general market crisis) with an NFR sum; (10) market access
  diversified by instrument, provider and geography; funding concentration; (11) stress-test types, use and reporting
  of results; (12) CFP contents and testing cycle. (Placement: the stock-ratio list and sum that `depth/D.md` asks for
  in B13 go to **B13b**, where coverage.csv puts B7.4.)
- **Class statements not to repeat**: `depth/B.md` §3 #9 (principle counts); `depth/D.md` #8 (tolerance as a large %
  of outflows).
- **Facts to verify**: ALM MD 2025 liquidity risk management part (governance, policy, tolerance, stress testing, CFP)
  as in force on 31 Dec 2026; BCBS *Principles for Sound Liquidity Risk Management and Supervision* (Sept 2008: count,
  and which are for supervisors); RBI *Liquidity Risk Management by Banks* (7 Nov 2012) for the flow-approach scenarios
  if the ALM MD keeps them.

## B13b · Liquidity risk 2: RBI's rules (new plan, v3)
- **Goal**: read RBI's liquidity rulebook: the stock ratios, the structural liquidity statement (time buckets and
  tolerance limits), the broad norms, liquidity in each currency, overseas branches and foreign banks' branches in
  India, and the MIS, reporting and internal controls behind them.
- **Evidence**: thin in recall, so this is a syllabus-led video (v3 split: B13 carried 16 sub-topics): statement of
  structural liquidity (Dec 2023); stock and flow approach (Dec 2023; FP1 Q57); "which ratio should be higher for
  better liquidity" (FP1 Q58); liquidity gap (FP1 Q94). Tier B.
- **Rule version**: ALM MD 2025 as in force on **31 Dec 2026**. (LCR run-off changes of 1 Apr 2026 belong to B14.)
- **Builds on / leads to**: B13 → B14, D01, D05.
- **Covers**: B7.4, B7.6, B7.7, B7.8; D4.1 (with B13), D4.2 (RBI's form, with B13 and B14).
- **JAIIB prerequisite**: reading a balance sheet and computing simple ratios (JAIIB AFM); B13's maturity ladder.
- **Opening**: month-end in a bank's ALM cell. The officer must file the liquidity statement with RBI; the bank has a
  branch in Dubai with US dollar deposits, and a large rupee deposit matures next week. "Which numbers does RBI want,
  in which currency, and by when?" (Rupees for the domestic part; US dollars for the foreign-currency part, said once
  as "US dollars", USD on screen.)
- **Misconceptions**: some think a high loans-to-deposits ratio means the bank is liquid (it points the other way);
  others think dollars at the overseas branch can always fill a rupee gap (currencies may not convert in stress);
  others think a foreign bank's branch in India follows only its home regulator.
- **Picture**: **the bank's water tanks** (B13's tank, now one per currency: INR, USD…) joined by pipes that narrow in
  stress; under each tank the SLS time-bucket shelves, with a tolerance ruler on the first buckets; small separate
  tanks for overseas branches; a dashboard above (MIS) with a pipe to RBI (returns).
- **Chapters**: 1 The stock approach: the ratio set, each with formula, meaning and which direction is safer; why
  stock ratios look backward; one sum (3.5) · 2 The structural liquidity statement: time buckets, where items go,
  tolerance limits on net cumulative negative mismatches in the early buckets; the broad norms (3.5) · 3 Liquidity
  across currencies (each significant currency; centralised vs decentralised; convertibility in stress); overseas
  operations of Indian banks and foreign banks' branches in India: whose rules, which statement, which limits (3) ·
  4 MIS to ALCO and board; reporting to RBI (parts of the SLS, periodicity, due dates, reporting dates, holiday rule);
  internal controls and independent review (3). ~13 min.
- **Numericals**: 2 (stock ratios from a small balance sheet, with "safer if higher/lower" for each; an SLS mismatch
  in the first buckets as a % of outflows against the tolerance limit, limit taken from the ALM MD at verification,
  illustrative until then).
- **Traps**: ratio direction (volatile-liability dependence: lower is safer; core deposits to assets: higher is
  safer; check each in the source); tolerance limit on the **cumulative** mismatch vs a single bucket (verify which);
  overseas-operations statement on a different cycle from the domestic one (verify); currencies are not
  interchangeable in stress; stock ratios are backward-looking.
- **Practice**: 3 (a ratio-direction MCQ; an SLS mismatch with no options; a "whose rules apply" case for a foreign
  bank's branch in India).
- **Question kinds**: define (stock approach, SLS, tolerance limit, significant currency) · purpose (why each ratio;
  why a currency-wise view; why internal controls) · who/when/how much (which statements, how often, due dates,
  reporting dates; tolerance limits; broad-norm caps) · compare (stock vs flow; centralised vs decentralised currency
  management; overseas branch vs foreign bank's branch in India; domestic vs overseas statements) · exception (holiday
  rule for reporting dates; items placed by behaviour, not contract) · calculate (stock ratios; cumulative mismatch
  vs limit) · apply to a case (the month-end filing in the opening).
- **Map nodes**: Liquidity: stock ratios, SLS and tolerance limits, broad norms, currencies, overseas and foreign
  banks, MIS and reporting.
- **v3 additions (depth checklist):** (1) the plan itself (B13b had none); (2) the stock-approach ratio set with
  formula, meaning and direction, and its backward-looking limit (B7.4; `depth/D.md` D4.2 asked for it in B13: placed
  here per coverage.csv); (3) SLS in its parts (domestic currency, foreign currency, combined Indian operations,
  overseas operations, consolidated, as the ALM MD names them), periodicity, due dates, reporting dates, holiday rule;
  (4) tolerance limits for net cumulative negative mismatches with RBI's numbers, liquid assets counted after
  haircuts, limits on reliance on one liability type (`depth/D.md` D4.2); (5) broad norms (cap on long voluntary
  exposures; long-term resources funding long-term assets; meaning of short and medium term), numbers only from the
  source; (6) liquidity across currencies: each significant currency, centralised vs decentralised, convertibility in
  stress; (7) overseas operations of Indian banks vs foreign banks' branches in India; (8) MIS to ALCO and the board;
  (9) internal controls and independent review of the liquidity process.
- **Class statements not to repeat**: `depth/B.md` §3 #13 (SLS and return timelines), #19 (the "10-year" and "70%"
  figures given as norms); `depth/D.md` #8 (tolerance limit size).
- **Facts to verify**: ALM MD 2025 (SLS format, time buckets, parts, frequency, due and reporting dates; tolerance
  limits; stock ratios if prescribed; foreign-currency liquidity; applicability to overseas operations and to foreign
  banks' branches in India; MIS and internal control) as in force on 31 Dec 2026; RBI *Liquidity Risk Management by
  Banks* (7 Nov 2012, Annex: ratios and broad norms) and whether the ALM MD keeps them; BCBS 2008 principles
  (currencies, legal entities).

## B14 · LCR: HQLA, run-offs and the 30-day test (+ proposed B14b: NSFR and the monitoring tools)
- **Goal**: compute LCR from a simple balance sheet with the current run-off rates and HQLA haircuts and caps;
  (B14b) compute NSFR, name the liquidity monitoring tools and the Basel III liquidity returns.
- **Evidence**: B-LIQ seen 6/7: "LCR 100%, net cash outflow 550 crore, find HQLA" Dec 2024; NSFR (Dec 2024, Jun 2025);
  LCR and balance-sheet LCR (Dec 2025); FALLCR and HQLA (Jun 2026 ×3).
- **Covers**: B14: B8.1; D4.2 (with B13, B13b). B14b: B8.2, B8.3.
- **JAIIB prerequisite**: CRR and SLR in one line each (C04 later), G-secs and SDLs, what "encumbered" means.
- **Opening**: a treasury head has 30 days to survive a stress. "How much cash-like stuff is enough?" (B14b: "and
  what if the stress lasts a year?")
- **Misconceptions**: some use gross outflows; others forget the cap on inflows; others use old run-off rates;
  others think FALLCR is a separate borrowing window.
- **Picture**: the water tank with a 30-day clock; HQLA as Level 1, 2A, 2B jars with haircuts and a lid (the caps);
  (B14b) a one-year calendar with a stable-funding scale.
- **Split proposal** (five numericals alone take about 12 minutes):
  - **B14 · LCR**: 1 LCR = HQLA ÷ net outflows over 30 days (≥ 100%); the stress scenario behind it; HQLA features
    (3) · 2 HQLA levels, haircuts, Level 2 and 2B caps with the adjustment sum; FALLCR and the MSF carve-out stated
    correctly; the CRR portion (4) · 3 Run-off rates (incl. the digital-banking changes from 1 Apr 2026), inflows and
    their cap; two sums (5) · 4 Breach: report to RBI, restoration plan, HQLA usable in stress; LCR disclosure (2).
    ~14 min.
  - **B14b · NSFR and the liquidity monitoring tools** (builds on B14): 1 NSFR = ASF ÷ RSF over one year (≥ 100%);
    the factor table, main rows, incl. off-balance-sheet RSF (4) · 2 NSFR sum (3) · 3 Who it applies to and when it
    took effect in India; Basel III liquidity returns (statement, periodicity, due days) (2) · 4 The five monitoring
    tools (3.5). ~12.5 min.
- **Numericals**: B14: 4 (HQLA needed; LCR from a sheet; Level-2 cap adjustment; new run-off rates on digital-banking
  deposits). B14b: 1–2 (NSFR from a sheet; optional "which item raises RSF most").
- **Traps**: inflow cap; old vs new run-off rates; Level 2 caps; FALLCR is a carve-out, not a loan window (verify);
  LCR 30 days vs NSFR one year; HQLA must be unencumbered.
- **Practice**: 3 per video, no options for the sums.
- **Question kinds**: define (HQLA, run-off, ASF, RSF, FALLCR) · purpose (LCR vs NSFR horizons; why inflows are capped)
  · who/when/how much (100%; haircuts; caps; run-offs from 1 Apr 2026; India's NSFR date; return periodicity) ·
  compare (LCR vs NSFR; Level 1 vs 2A vs 2B; old vs new run-offs; stable vs less stable deposits) · exception (Level 2
  caps; which part of CRR counts; HQLA may be used in stress) · calculate (HQLA needed, LCR, cap adjustment, NSFR) ·
  apply to a case (a sheet with digital-banking deposits).
- **Map nodes**: Liquidity: LCR, HQLA (B14); NSFR, monitoring tools, returns (B14b).
- **v3 additions (depth checklist):** (1) HQLA features (unencumbered, easy to value, low risk, active market,
  central-bank eligible); (2) the LCR stress-scenario list; (3) Level-2 cap adjustment sum; (4) FALLCR and MSF stated
  as RBI writes them (`depth/B.md` §3 #2); (5) which part of the CRR balance counts as Level 1 (#14); (6) breach
  procedure: report to RBI, restoration plan, HQLA usable in stress; (7) LCR disclosure; (8) NSFR factor table (main
  rows) incl. off-balance-sheet RSF; (9) NSFR applicability and India effective date with its deferrals (#1);
  (10) Basel III liquidity returns with periodicity and due days (#13); (11) the five monitoring tools as a full
  chapter (contractual maturity mismatch, funding concentration, available unencumbered assets, LCR by significant
  currency, market-related tools).
- **Class statements not to repeat**: `depth/B.md` §3 #1 (NSFR date with no deferral), #2 (FALLCR as a window), #3 (old
  run-off table), #13 (return timelines), #14 (whole CRR as Level 1), #15 (LCR phase-in dates).
- **Facts to verify**: LCR and NSFR rules in the ALM MD (HQLA levels, haircuts and caps; FALLCR and MSF carve-out
  percentages; CRR portion; run-offs from 1 Apr 2026 per RBI/2025-26/27; inflow cap; breach reporting; disclosure;
  Basel III liquidity returns, periodicity, due dates; NSFR factors, applicability and effective date with deferral
  circulars); BCBS LCR (Jan 2013) incl. the monitoring tools, BCBS NSFR (Oct 2014).

## BR · Module B revision
- **Goal**: the whole map B in 7 minutes, 15 traps, 10 rapid questions; written last from the finished scripts
  (including any adopted b-videos).
- **v3 additions (depth checklist):** none of its own; pulls traps from the items above and one "outdated vs current"
  card from `depth/B.md` §3 (run-offs, FALLCR, IFR, coming 1 Apr 2027 rules).
