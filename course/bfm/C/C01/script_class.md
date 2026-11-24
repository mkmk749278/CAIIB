# C01 · "Integrated treasury: what it is, why it pays, and the world it trades in" · CLASS EDITION (script c1, with cue sheet)
* Status: **c1 GEMINI DRAFT, spot-checked, full review pending** (owner, 2026-11-24: "save as drafts, check later"). Not locked: do not voice until reviewed.
* Plan: course/bfm/C/plans_C.md §C01 (v4 split: C01 = C1.1, C1.2, C1.3, C2.1 market features & FC surplus, C2.4 overseas borrowing ceiling, plus A1.4 integrated treasury scope; C1.4 & rest of A1.4 in C01b; all 16 v3 depth additions covered). Course order v4: Module B → C01 → C01b → C02.
* Syllabus: C1.1 (The concept; functions of integrated treasury), C1.2 (The process of globalisation), C1.3 (Evolving role of treasury as profit centre), C2.1 (Products of foreign exchange markets — features, FC surplus, nostro), C2.4 (Domestic and global markets — overseas borrowing ceiling).
* Facts: C01_fact_sheet, rows cited as [F1]–[F36]. Sums: C01_numericals (verified two independent ways in Python Decimal). Practice: C01_practice. Map nodes: C01_map_nodes.
* Rule version (opening card): "FEMA 1999 ss. 2, 5, 6 · FEM (Current Account Transactions) Rules, 2000 · FEM (Permissible Capital Account Transactions) Regulations, 2000 · RBI MD – Risk Management & Inter-Bank Dealings (updated 1 Oct 2026) · RBI Commercial Banks – Investment Portfolio Directions, 2025 (updated 1 Oct 2026), ALM Directions, 2025 & CRR/SLR Directions, 2025 (updated 9 Oct 2026) · Short Sale Directions, 2018 · Rupee IRD Directions, 2025 & Credit Derivatives Directions, 2026 · RBI TCCFM Press Release (4 Nov 2026) · FEDAI Rules 10th Ed. (20 Aug 2026) · BIS Triennial Survey (Apr 2025) · as at 31 December 2026".
* Greeting / goodbye (new, verified unused in greetings.md and A19c): greeting "Hello everyone, and welcome to the trading floor. Today we begin treasury management, starting with why three desks became one."; goodbye "That is our integrated treasury desk set up. Close your notebook, rest your eyes, and I will meet you in the next class."
* Story: 9:00 a.m. at the Mumbai treasury of Kaveri Commercial Bank (illustrative), where the money-market dealer, the forex dealer, and the bond dealer sit at one integrated desk. A Bengaluru manufacturing client also approaches the desk for a USD 400,000 royalty remittance and a foreign-currency loan. All bank names, amounts, and rates are illustrative.
* Holds: recall and check questions 3–5 s; one-step sums 8 s; "your turn" numerical 15 s; blank mind map 5 s.
* Say it right: "C-R-R", "S-L-R", "N-D-T-L", "A-L-M", "A-L-C-O", "H-Q-L-A", "H-T-M", "A-F-S", "F-V-T-P-L", "H-F-T", "I-F-R", "FEMA" as "FAY-ma", "F-D-I", "F-P-I", "E-C-B", "A-D-R", "G-D-R", "F-C-C-B", "C-C-I-L", "S-E-B-I", "I-R-D-A-I", "I-R-F", "C-D-S", "T-R-S", "T-C-C-F-M", "N-O-O-P-L", "A-G-L", "F-E-D-A-I", "B-I-S", "Nostro" as "NOSS-tro"; "AA-minus" for AA(-), "A-a-three" for Aa3; "eighty-four eighty" for ₹84.8000.
* Not in this video: treasury organisation (department vs specialised branch), front/mid/back office segregation, dealer limits (daylight vs overnight, NOP-INR cap), forex dealing risks, and RBI Alert List (next class); money-market instruments and LAF (later in this module); full CRR/SLR computation and payment systems (later in this module); bond duration and derivative pricing (later in this module).
* Length: 1,997 spoken words + ~2.6 min of holds ≈ 15.9 min at 150 wpm (exact count verified by linter; 0 lines > 25 words; 0 spoken lesson codes).
* Cue sheet: S scene · N note · G glow · M map · C card · B board mark · H hold. Stable picture: the integrated treasury desk seen from above (three desks joined into one), bridging the bank's branches (deposits and loans) to domestic and global markets.


---

## Warm-up

N001 · [warmly] Hello everyone, and welcome to the trading floor. Today we begin treasury management, starting with why three desks became one.
> 0 C: rule-version card (as at 31 Dec 2026) · 1 S: notebook page; title "Integrated Treasury: What, Why, and the World"

N002 · Put your phone on silent and keep your basic calculator nearby. Let us start with two quick recall questions.
> 1 S: warm-up desk icon + 8-function calculator icon

N003 · From liquidity risk in our previous module: which function inside a bank controls the stock of H-Q-L-A?
> 1 S: recall card "Who controls the HQLA stock?" · H: 3 s

N004 · The Treasurer, or liquidity-management function, controls H-Q-L-A so liquid assets can be monetised immediately in stress.
> 1 N: "Treasurer controls HQLA stock ✓" [F4]

N005 · Now reach further back to international banking: what determines the forward premium or discount between two currencies?
> 1 S: recall card "What drives forward premium/discount?" · H: 3 s

N006 · The interest-rate differential between the two currencies drives the forward premium or discount, not market volatility.
> 1 N: "Forward points = interest-rate differential ✓" [F18]

N007 · Treasury products appeared in six of seven exam cycles, and this module carried twenty-seven of one hundred questions recently.
> 1 C: Importance Map badge "6/7 cycles · 27/100 marks in Module C"

N008 · Stay with me for one clear picture, one worked arbitrage sum, and zero heavy jargon.
> 1 S: Mind Map C centre "The Integrated Treasury Desk" (empty branches)


## Opening

N009 · It is nine a.m. at Kaveri Commercial Bank's Mumbai treasury, illustrative. Money-market, forex, and bond dealers sit at one desk.
> 1 S: Mumbai treasury floor (illustrative); three desks merged into one long trading desk [F1]

N010 · Earlier, Indian banks kept those three desks in separate rooms. Why did banks merge them under one roof?
> 1 S: split screen "Separate Rooms" vs "One Integrated Desk" · H: 3 s

N011 · Some of you think it saves office rent; others think one market's shock spills directly into the others. Let us check.
> 1 C: two-choice card "A: Save rent · B: Markets spill into each other"


## Chapter 1 · From separate desks to one integrated treasury

N012 · First, what is an integrated treasury? It unites domestic money-market, foreign-exchange, and securities desks into one coordinated unit.
> 1 S: three desks snapping together into one hub · 2 N: "Integrated Treasury = Money Market + Forex + Securities" [F1]

N013 · Think of it as a bridge connecting the bank's core book of deposits and loans to the financial markets.
> 1 S: bridge graphic linking "Branches (Deposits & Loans)" to "Financial Markets" · G: bridge [F1]

N014 · The real reason for integration is spillover: a shift in rupee liquidity immediately moves forex swaps and bond yields.
> 1 N: "Spillover across markets → switch surpluses & deficits" [F1, F2]

N015 · Seven drivers pushed banks to integrate: cross-currency cash management, interest arbitrage, global capital inflows, corporate hedging demand, risk management, technology, and reserves.
> 1 C: "7 Drivers" card (cash across currencies · arbitrage · FDI/FPI/ECB · corporate hedging · risk · technology · reserves) [F2]

N016 · Many of you are thinking treasury only parks spare cash left over by branches. Let us break that belief.
> 1 C: misconception card "Only parks spare cash?" · H: 3 s

N017 · Under current R-B-I rules, integrated treasury runs five active functions across the whole balance sheet.
> 1 B: strike "Only parks spare cash" · 2 N: "5 Core Functions" [F3–F7]

N018 · Function one is statutory reserves: maintaining C-R-R at three percent of N-D-T-L, earning zero interest from R-B-I.
> 1 N: "1. Reserves: CRR 3.0% NDTL (0% interest)" [F3]

N019 · Note the October twenty twenty-six update: daily minimum C-R-R rose from ninety percent to ninety-nine percent of required C-R-R.
> 1 C: trap card "Daily CRR min: 90% (old) → 99% (from 16 Oct 2026)" · B: circle "99%" [F3]

N020 · Alongside C-R-R, treasury maintains S-L-R at eighteen percent of N-D-T-L in cash, bullion, or unencumbered approved government securities.
> 1 N: "SLR 18% NDTL (cash / gold / approved G-secs)" [F3]

N021 · Function two is global liquidity, A-L-M, and transfer pricing: the treasury head sits on A-L-C-O and prices internal funds.
> 1 N: "2. Liquidity, ALM & internal transfer pricing (ALCO)" [F4]

N022 · Function three is merchant and advisory service: quoting customer hedges and clearing foreign-currency loans before branches sanction them.
> 1 N: "3. Merchant hedging & FC-loan funding clearance" [F5]

N023 · Why must treasury clear a foreign-currency loan first? Because treasury verifies both availability and cost of foreign-currency funds.
> 1 C: "FC loan check: availability + cost of FC funds" [F5]

N024 · Function four is investment and trading across H-T-M, A-F-S, and F-V-T-P-L, including the daily-valued H-F-T trading book.
> 1 N: "4. Investments (HTM / AFS / FVTPL-HFT) & FX trading" [F6]

N025 · Function five is risk management: hedging the bank's own balance-sheet interest-rate and currency risks with permitted derivatives.
> 1 N: "5. Balance-sheet risk management (IRS, swaps, FRAs)" [F7]

N026 · Exams love mixing up the three roles and the three books, so keep them in separate columns.
> 1 S: two-column comparison board "3 Roles" vs "3 Books" [F8, F9]

N027 · The three roles are liquidity management, proprietary trading, and risk management.
> 1 N: "Roles: Liquidity · Proprietary · Risk" [F8]

N028 · The three books are the A-L-M book for reserves and H-Q-L-A, the merchant book for clients, and the trading book.
> 1 N: "Books: ALM (reserves/HQLA) · Merchant (clients) · Trading (HFT/FX)" · M: add nodes "Integration" & "Functions" [F9]

N029 · Quick pause check for Chapter one. Question one: which book holds a corporate exporter's forward hedge?
> 1 C: Pause Check Q1 "Exporter's forward hedge → which book?" · H: 3 s

N030 · The merchant book, because it serves an external customer rather than balance-sheet reserves or proprietary bets.
> 1 N: "Q1: Merchant book ✓" [F9]

N031 · Question two, a twist: what is the daily minimum C-R-R requirement effective sixteen October twenty twenty-six?
> 1 C: Pause Check Q2 "Daily minimum CRR (from 16 Oct 2026)?" · H: 3 s

N032 · Ninety-nine percent of required C-R-R, up from the old ninety percent rule.
> 1 N: "Q2: 99% daily minimum ✓" [F3]

N033 · One thing to remember: integrated treasury bridges branches and markets across three roles and three books.
> 1 G: "Bridge · 3 Roles · 3 Books"


## Chapter 2 · Treasury as a profit centre and covered interest arbitrage

N034 · Quick recall from Chapter one: before a branch sanctions a foreign-currency loan, what two things must treasury confirm?
> 1 S: recall card "FC loan clearance = ?" · H: 3 s

N035 · Availability and cost of foreign-currency funds. Good. Now let us see why treasury became a profit centre.
> 1 N: "Availability + cost of FC funds ✓" [F5]

N036 · Before the nineteen-nineties reforms, treasury was a cost centre focused mainly on statutory reserves and idle cash.
> 1 S: timeline "Pre-1990s Cost Centre → Post-1990s Profit Centre" [F13]

N037 · Market-determined exchange rates and interest-rate liberalisation turned treasury into a major profit engine for four clear reasons.
> 1 N: "Profit Centre: 4 Drivers" [F13, F14]

N038 · First, low credit risk, because counterparties are sovereigns, regulated banks, and central clearing houses.
> 1 N: "1. Low credit risk (sovereigns / banks / CCIL)" [F14]

N039 · Second, high leverage via money markets and swaps; third, low operating cost with few dealers and no branches.
> 1 N: "2. Leverage · 3. Low operating cost (no branches)" [F14]

N040 · Fourth, huge volume over thin margins, earning strong returns while consuming relatively little capital per rupee traded.
> 1 N: "4. High volume over thin margins · low capital" [F14]

N041 · Treasury income comes from four bars: merchant spread, money-market deployment, investment coupons and dividends, and trading or arbitrage gains.
> 1 S: four income bars "Merchant · Money Market · Investments · Trading/Arbitrage" [F15]

N042 · Watch two classic traps here. First, are strategic stakes in a bank's subsidiaries held for short-term trading profit?
> 1 C: Trap Card 1 "Subsidiary stakes → HFT trading?" · H: 3 s

N043 · No. Under R-B-I's twenty twenty-five directions, subsidiary, associate, and joint-venture stakes sit separately at cost and cannot enter H-F-T.
> 1 N: "Subsidiaries/JVs = sui generis at cost (NOT HFT) ✓" [F16]

N044 · Second trap: many officers think a bank's equity desk can short-sell listed shares when markets fall. Can it?
> 1 C: Trap Card 2 "Can Indian banks short-sell equities?" · H: 3 s

N045 · No. R-B-I prohibits short positions except in permitted derivatives and Central Government dated securities; equity short-selling is barred.
> 1 B: box "No equity short-selling (only G-secs & permitted derivatives)" [F10, F11]

N046 · Note one more update: R-B-I discontinued the Investment Fluctuation Reserve from eighteen May twenty twenty-six.
> 1 C: update card "IFR discontinued w.e.f. 18 May 2026" [F12]

N047 · Now pick up your calculator for covered interest arbitrage, our one worked sum in this class.
> 1 S: calculator board "Covered Interest Arbitrage (illustrative)" [F17]

N048 · Kaveri Bank borrows one million U-S dollars for six months at four percent per annum; spot is eighty-four rupees.
> 1 N: "Borrow USD 1,000,000 · 6m @ 4% p.a. · Spot ₹84.0000" [F17]

N049 · It invests the rupees for six months at seven percent per annum, and buys six-month forward dollars at eighty-four eighty.
> 1 N: "Invest INR @ 7% p.a. (6m) · 6m Fwd ₹84.8000" [F17]

N050 · Step one, dollar repayment: halve four percent to two percent. Key one million times one point zero two equals.
> 1 N: "1000000 × 1.02 = USD 1,020,000" [F17]

N051 · Step two, rupee maturity: eight crore forty lakh times one point zero three five equals eight crore sixty-nine lakh forty thousand.
> 1 N: "84,000,000 × 1.035 = ₹8,69,40,000" [F17]

N052 · Step three, convert back at eighty-four eighty: divide that rupee maturity by eighty-four point eight.
> 1 N: "86940000 ÷ 84.8 = USD 1,025,235.85" [F17]

N053 · Subtract one million twenty thousand owed: net arbitrage profit is five thousand two hundred thirty-five dollars, or four lakh forty-four thousand rupees.
> 1 B: box "Profit = USD 5,235.85 (₹4,44,000)" [F17]

N054 · The commonest mistake is forgetting to halve the annual rates for six months; always match rate to tenor first.
> 1 C: error card "Trap: using 4% & 7% instead of 2% & 3.5%"

N055 · Now fade one step: what if the six-month forward stood at exact interest-rate parity, eighty-five point two three five three?
> 1 N: "Parity Fwd = 84 × 1.035 ÷ 1.02 = ₹85.2353" · H: 5 s [F18]

N056 · Dividing rupee maturity by eighty-five point two three five three leaves zero profit. That is why arbitrage vanishes between freely convertible currencies.
> 1 N: "At parity: profit = USD 0.00 ✓" [F18]

N057 · Your turn. Borrow five lakh dollars for six months at five percent; spot eighty-five; rupee deposit eight percent; forward eighty-six. Find rupee profit.
> 1 C: "Your Turn: USD 500k · 6m · USD 5% · INR 8% · Spot ₹85 · Fwd ₹86" · H: 15 s [F17, F18]

N058 · Repayment costs four crore forty lakh seventy-five thousand; rupee maturity is four crore forty-two lakh. Your net profit is one lakh twenty-five thousand rupees.
> 1 N: "₹4,42,00,000 − ₹4,40,75,000 = ₹1,25,000 (USD 1,453.49) ✓" [F17, F18]

N059 · Write this down: arbitrage locks matched legs with near-zero market risk; speculation takes an unhedged open position carrying full market risk.
> 1 S: 4-way sorting card "Arbitrage · Merchant · Trading · Speculation" · B: underline "near-zero market risk" [F19]

N060 · Merchant business earns a client spread, trading takes short-term managed positions, and R-B-I caps overnight open forex positions at twenty-five percent of total capital.
> 1 N: "NOOPL ≤ 25% total capital · AGL ≤ 6× capital" · M: add node "Profit centre" [F19, F20]

N061 · Pause check for Chapter two. Question one: a dealer buys dollars overnight hoping the rupee falls tomorrow. Arbitrage or speculation?
> 1 C: Pause Check Q1 "Unhedged overnight USD long → ?" · H: 3 s

N062 · Speculation, because it is an unhedged directional bet carrying full market risk.
> 1 N: "Q1: Speculation ✓" [F19]

N063 · Question two: can a commercial bank short-sell a Central Government dated bond, or a listed company's equity share?
> 1 C: Pause Check Q2 "Short-sell G-sec or equity?" · H: 3 s

N064 · Only the Central Government dated security within R-B-I limits; short-selling equities is prohibited.
> 1 N: "Q2: Central G-sec only (equities barred) ✓" [F10, F11]

N065 · One thing to remember: treasury profits come from volume, spread, and matched arbitrage, never from equity short sales or subsidiary stakes.
> 1 G: "Volume · Spread · Arbitrage (No equity shorts)"


## Chapter 3 · Globalisation and the treasury

N066 · Quick recall from Chapter two: why does covered interest arbitrage disappear between two freely convertible currencies?
> 1 S: recall card "Why does arbitrage vanish?" · H: 3 s

N067 · Because swap points quickly adjust to match the exact interest-rate differential, bringing profit to zero.
> 1 N: "Swap points = rate gap → zero arbitrage ✓" [F18]

N068 · Now let us step outside India. Globalisation connects our domestic economy and markets to the world through freer cross-border flows.
> 1 S: world map with arrows linking Mumbai to London, New York, Singapore, Tokyo [F21]

N069 · Many of you are thinking globalisation means R-B-I stepped back and deregulated everything. That is a favourite exam trap.
> 1 C: misconception card "Globalisation = Deregulation?" · H: 3 s

N070 · Globalisation is not deregulation. R-B-I, S-E-B-I, I-R-D-A-I, and FAY-ma rules actively regulate every market and cross-border flow.
> 1 B: strike "Deregulation" · 2 N: "Globalisation ≠ Deregulation ✓" [F21]

N071 · Thirty-second J-A-I-I-B refresher: under FAY-ma, capital-account transactions alter cross-border assets or liabilities; current-account transactions cover trade, services, interest, and travel.
> 1 S: two-bucket card "Capital Account (alters assets/liabilities) vs Current Account (trade/services/income)" [F22]

N072 · India has current-account convertibility, but only partial capital-account convertibility: capital flows are barred unless expressly permitted under FAY-ma schedules.
> 1 N: "Current = convertible · Capital = PARTIAL convertibility" [F23]

N073 · Sort these routes carefully: F-D-I, F-P-I, E-C-B, A-D-R, G-D-R, F-C-C-B, and cross-border mergers are all capital-account routes.
> 1 N: "Capital routes: FDI · FPI · ECB · ADR/GDR/FCCB · M&A" [F24]

N074 · Now the trap: our Bengaluru client remits four hundred thousand dollars for royalty and technical fees. Capital account or current account?
> 1 C: trap card "Royalty & technical fees → Capital or Current?" · H: 3 s

N075 · Current account. Royalties, technical collaboration fees, and consultancy sit in the Current Account Transactions Rules, not the capital account.
> 1 B: box "Royalty & technical fees = Current Account ✓" [F25]

N076 · Globalisation reshaped Indian treasuries in three concrete ways. First, domestic yields and the rupee move with global rates and volatile portfolio flows.
> 1 N: "Impact 1: Global rate/FX linkage + FPI flow volatility" [F26]

N077 · Second, new infrastructure and regulators arrived: C-C-I-L for guaranteed central clearing, depositories for demat securities, S-E-B-I, and I-R-D-A-I.
> 1 N: "Impact 2: CCIL (guaranteed CCP) · Depositories · SEBI · IRDAI" [F27]

N078 · In November twenty twenty-six, R-B-I also formed the Technical Consultative Committee for Financial Markets to engage banks and C-C-I-L quarterly.
> 1 C: update card "4 Nov 2026: RBI TCCFM (quarterly market forum)" [F28]

N079 · Third, the product basket widened: rupee interest-rate derivatives, interest-rate futures, credit default swaps, and total return swaps on corporate bonds.
> 1 N: "Impact 3: Rupee IRDs · IRFs · CDS · TRS (2025–26 MDs)" [F29]

N080 · One key global limit: a bank's overseas foreign-currency borrowing cannot exceed one hundred percent of unimpaired Tier One capital, or ten million dollars.
> 1 B: box "Overseas FC Borrowing ≤ max(100% Tier I, USD 10m)" [F30]

N081 · Above fifty percent of Tier One, banks need a Board policy, twelve percent C-R-A-R, and three-year maturity; export-credit loans sit outside.
> 1 N: ">50% Tier I: Board policy + 12% CRAR + 3-yr min · Export credit excluded" · M: add node "Globalisation" [F31, F32]

N082 · Pause check for Chapter three. Question one: are overseas technical collaboration fees a capital-account or current-account flow?
> 1 C: Pause Check Q1 "Technical collaboration fees → ?" · H: 3 s

N083 · Current-account flow under the Current Account Transactions Rules.
> 1 N: "Q1: Current account ✓" [F25]

N084 · Question two: does overseas borrowing raised specifically for export credit count inside the one hundred percent Tier One ceiling?
> 1 C: Pause Check Q2 "Export-credit overseas borrowing inside 100% Tier I cap?" · H: 3 s

N085 · No, export-credit financing, Tier Two subordinated debt, and foreign-currency capital instruments stay outside that ceiling.
> 1 N: "Q2: Outside the 100% ceiling ✓" [F32]

N086 · One thing to remember: globalisation links our desk to global flows under partial convertibility and active regulation, never deregulation.
> 1 G: "Partial Convertibility · Active Regulation · 100% Tier I Cap"


## Chapter 4 · The forex market the treasury trades in

N087 · Quick recall from Chapter three: what minimum C-R-A-R must a bank hold to borrow overseas beyond fifty percent of Tier One capital?
> 1 S: recall card ">50% Tier I overseas borrowing → min CRAR?" · H: 3 s

N088 · Twelve percent C-R-A-R, alongside a Board policy and three-year minimum maturity.
> 1 N: "12.0% CRAR + Board policy + 3-yr min ✓" [F31]

N089 · Six features define the forex market: global, virtual with no physical floor, screen-based, twenty-four-hour, two-way quotes, and narrow spreads.
> 1 C: "6 Forex Market Features" card (Global · Virtual OTC · Screen-based · 24-Hour · Two-way quotes · Narrow spread = liquidity) [F33]

N090 · A narrow bid-ask spread signals deep liquidity. In April twenty twenty-five, global O-T-C forex turnover hit nine point six trillion dollars daily.
> 1 N: "BIS Apr 2025: $9.6 trillion/day · USD on 89.2% of trades" [F33]

N091 · Normal onshore rupee market hours run nine a.m. to five p.m. I-S-T, though banks may deal beyond onshore hours within position limits.
> 1 N: "Onshore 9 a.m.–5 p.m. IST · Beyond-hours dealing allowed" [F34]

N092 · Major currencies like the U-S dollar are freely convertible; the rupee is partly convertible, yet still deeply liquid in spot and swaps.
> 1 S: compare card "Freely convertible (USD/EUR) vs Partly convertible (INR)" [F35]

N093 · Many of you think foreign dollars sitting in a bank's New York Nostro account automatically earn interest overnight. Do they?
> 1 C: misconception card "Nostro balance earns automatic interest?" · H: 3 s

N094 · No. A Nostro account is a current account earning zero interest unless the bank arranges an overnight sweep or placement.
> 1 B: box "Nostro = 0% interest unless sweep/placement arranged" [F36]

N095 · Where may treasury place foreign-currency surplus? Overnight placements, or overseas money-market and sovereign debt under one year rated A-A-minus or A-a-three.
> 1 N: "FC Surplus: Overnight · Overseas MM/Sovereign <1 yr rated ≥ AA- / Aa3" [F36]

N096 · Un-deployed F-C-N-R-B funds can go into longer overseas fixed income matching deposit maturity, and Nostro surpluses can fund permitted foreign-currency loans.
> 1 N: "FCNR(B) → matching LT debt · Nostro → permitted FC loans" · M: add node "Forex market" [F36]

N097 · Pause check for Chapter four. Question one: what is the minimum international rating for overseas money-market instruments under R-B-I's active Master Direction?
> 1 C: Pause Check Q1 "Min rating for <1 yr overseas MM/sovereign debt?" · H: 3 s

N098 · At least A-A-minus by S-and-P or Fitch, or A-a-three by Moody's, with residual maturity under one year.
> 1 N: "Q1: ≥ AA(-) (S&P/Fitch) or Aa3 (Moody's), <1 yr ✓" [F36]

N099 · Question two: why does a bank sweep its Nostro surplus overnight?
> 1 C: Pause Check Q2 "Why sweep Nostro balances overnight?" · H: 3 s

N100 · Because idle Nostro current-account balances earn zero interest unless swept or placed.
> 1 N: "Q2: Idle Nostro earns 0% ✓" [F36]

N101 · One thing to remember: the forex market is virtual, round-the-clock, and liquid, and idle Nostro dollars earn nothing until deployed.
> 1 G: "Virtual · 24-Hour · Sweep Idle Nostro"


## Close

N102 · Quick mixed check across today's traps: a bank remits royalty abroad and short-sells a listed stock. Which one breaks R-B-I rules?
> 1 C: Mixed Check "Royalty remittance vs Short-selling listed equity" · H: 4 s

N103 · Short-selling the stock breaks R-B-I rules; royalty is a current-account remittance, while short sales are allowed only in Central Government securities and permitted derivatives.
> 1 N: "Equity short sale = BARRED · Royalty = Current Account ✓" [F10, F11, F25]

N104 · Now look at the blank mind map for the desk. Name all five branches we built today from memory.
> 1 S: Mind Map C with 5 blank branches around "The Desk" · H: 5 s

N105 · Integration, functions, profit centre, globalisation, and forex market. You can now explain integrated treasury, solve arbitrage, sort flows, and state overseas limits.
> 1 M: reveal full 5-branch map · 2 C: "Scope: C1.1–C1.3, C2.1 features/surplus, C2.4 ceiling"

N106 · Homework: borrow two lakh dollars at four percent for six months, spot eighty-four, rupee rate seven percent, forward eighty-five; find profit and sketch the map.
> 1 C: Homework card "USD 200k · 6m · 4% USD / 7% INR · Spot ₹84 · Fwd ₹85 (check: ₹48,000)"

N107 · Three desks sit together because markets spill over. Next class: a dealer books a large trade and his own manager confirms it. What goes wrong?
> 1 S: preview card "Next class: Front, Mid & Back Office Segregation"

N108 · That is our integrated treasury desk set up. Close your notebook, rest your eyes, and I will meet you in the next class.
> 0 S: end card
