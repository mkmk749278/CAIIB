# C07 · "Fencing the trading desk: treasury risk, capital, and investment rules" · CLASS EDITION (script c1, with cue sheet)
* Status: **c1 GEMINI DRAFT, gate PASS, full review pending** (owner, 2026-11-24: "save as drafts, check later"). Not locked: do not voice until reviewed.
* Plan: course/bfm/C/plans_C.md §C07 (v3 depth pass; 7 v3 additions covered). Course order v4: C06 → C07 → C08.
* Syllabus: C5.1 (supervision and control of treasury), C5.2 (market risk and credit risk), C5.3 (VaR use on the desk), C2.3 (investment classification, valuation, and IFR).
* Facts: C07_fact_sheet (rows cited as [F1]–[F34]). Sums: C07_numericals. Practice: C07_practice.
* Rule version (opening card): "RBI MD – Risk Management & Inter-Bank Dealings (1 Oct 2026) · A.P. (DIR) 24/2026 & 16/2026 (NOP-INR) · RBI Guidance Note on Market Risk Management (28 Nov 2025) · RBI Internal Control Guidelines (2011) · RBI Investment Portfolio Directions 2025 (updated 1 Oct 2026; IFR discontinued 18 May 2026; InvIT/REIT NAV 22 Sep 2026) · RBI Capital Adequacy Directions 2025 · RBI Market Risk Directions 2026 (issued 21 Sep 2026, coming 1 Apr 2027) · as at 31 December 2026".
* Greeting / goodbye (new, verified unused against greetings.md): greeting "Welcome back, colleagues. Today we step behind the dealing desk and build the fence that protects the bank."; goodbye "That's the treasury safety fence, complete. Close your notes, unwind for the night, and I'll see you next class."
* Story: Illustrative bank Deccan Commercial Bank, Mumbai treasury desk. Dealer Arjun takes an open rupee-bond and forex position; by noon, the desk shows a ₹2 crore mark-to-market loss. Mid-Office officer Meera tracks his limits against Board-approved ceilings. All names, rates, and amounts are illustrative.
* Holds: questions at least 3 s; one-step sums 8 s; "your turn" 15 s; map 3–5 s per node.
* Say it right: "N-O-O-P-L"; "A-G-L"; "N-O-P I-N-R"; "V-a-R"; "Herstatt" (HAIR-shtaht); "H-T-M", "A-F-S", "F-V-T-P-L", "H-F-T"; "S-P-P-I"; "I-F-R"; "Inv-I-T", "R-E-I-T"; "P-V-0-1".
* Not in this video: full dealing room structure (C01b); VaR three methods and correlation sums (B09, B09b); bond duration derivations (C06); derivatives pricing (C08–C09b); full Basel III CRAR (B06–B07b).
* Length: 1,800 spoken words + ~2.4 min of holds ≈ 14.4 min at 150 wpm.
* Cue sheet: S scene · N note · G glow · M map · C card · B board mark · H hold. Pictures: trading desk with limit fence (ch 1); two clocks — Frankfurt 15:30 and New York morning — plus bell curve (ch 2); three-zone duration ladder (ch 3); three investment buckets (HTM, AFS, FVTPL with HFT drawer) (ch 4).


---

## Warm-up

N001 · [warmly] Welcome back, colleagues. Today we step behind the dealing desk and build the fence that protects the bank.
> 0 C: rule-version card (as at 31 Dec 2026) · 1 S: notebook page; title "Treasury Risk Control"


N002 · Phones on silent, basic calculator ready. Quick recall from last class.
> 1 S: calculator icon · 2 C: card "₹10 crore bond · Modified Duration 4.5 · yield rises 10 bps"


N003 · A ten-crore bond has modified duration four point five. Yield rises ten basis points. How much does price fall?
> 1 S: card glows · H: 8 s


N004 · Four point five lakh rupees. Ten crore times four point five times zero point one per cent.
> 1 S: keys "100000000 × 4.5 × 0.1 % = 450000" · 2 N: "price falls ₹4.50 lakh ✓"


N005 · From our market-risk class earlier: what does Value at Risk measure?
> 1 S: bell-curve icon · H: 3 s


N006 · Maximum expected loss on a portfolio over a holding period at a chosen confidence level in normal markets.
> 1 N: "VaR = max expected loss · holding period · confidence level ✓" [F20]


N007 · Now picture Deccan Bank's Mumbai desk, illustrative. By noon, dealer Arjun's open position has lost two crore rupees.
> 1 S: trading desk; screen shows "MTM loss: ₹2.00 crore · 12:00 PM · illustrative"


N008 · Who stops Arjun, and at what number? Some think the dealer decides. Others think Reserve Bank sets it.
> 1 S: two buttons "Dealer decides" · "RBI sets it" · H: 3 s


N009 · Hold that answer. Stop-loss, disallowances, and Value at Risk appear repeatedly in recent exams. Today we cover them all.
> 1 N: "Exam signal: stop-loss, VaR, disallowances, investment rules tested across recent cycles"

## Chapter 1 · Why treasury risk is special and how it is fenced

N010 · Chapter one: why treasury risk worries management, and the fence around the desk.
> 1 S: chapter title "1 · Why treasury risk is special & the control fence" · 2 M: node "Risk control"


N011 · Three reasons make treasury risk special: high leverage, huge deals by few dealers, and quick, irreversible losses.
> 1 C: card "3 reasons: 1. Leverage · 2. Big deals by few dealers · 3. Quick, irreversible losses" [F1] · 2 M: node "reasons"


N012 · A loan loss stops at principal plus interest. A trading or derivative loss has no natural cap.
> 1 C: comparison "Loan loss ≤ Principal + Interest · Trading/derivative loss: no natural cap" [F1] · 2 B: box "no natural cap"


N013 · Banks build three control types: organisational controls, exposure ceilings, and position plus stop-loss limits.
> 1 C: card "3 control types: 1. Organisational · 2. Exposure ceilings · 3. Position & stop-loss" [F2] · 2 M: node "control types"


N014 · Organisational control splits three offices: Front Office deals, Mid-Office measures risk independently, and Back Office settles, confirms, and accounts.
> 1 S: three desks separated by walls: "Front (Deal)" · "Mid (Risk → ALCO)" · "Back (Settle & MTM)" [F3]


N015 · Mid-Office reports to ALCO independently of treasury. Back Office sources market prices independently and runs dual payment control.
> 1 N: "Mid → ALCO (independent) · Back → confirmations, MTM, dual payment control" [F3]


N016 · Add three safeguards: compulsory two-week continuous annual dealer leave, voice tapes kept two months, and monthly concurrent audit.
> 1 C: card "Safeguards: 2-week continuous leave · voice tapes ≥ 2 months · concurrent audit monthly to CEO · annual system audit" [F4]


N017 · Now answer our opening question. Who sets stop-loss, overnight open-position, and gap limits?
> 1 S: returns to opening buttons · H: 3 s


N018 · Many think Reserve Bank approves these limits, or dealers set stop-losses. Both are wrong.
> 1 C: trap card "'RBI prior approval / dealer sets stop-loss' ✗ · Board & RMC set limits ✓" [F5, F6]


N019 · The Board sets policy and risk limits. Its Risk Management Committee approves market-risk limits and stop-loss triggers annually.
> 1 N: "Board sets policy & limits · RMC approves stop-loss annually · ALCO monitors" [F5, F6]


N020 · Net Overnight Open Position Limit and Aggregate Gap Limit are Board-approved and communicated immediately to Reserve Bank.
> 1 N: "NOOPL & AGL: Board approves → inform RBI via CIMS/email (no prior RBI approval)" [F5] · 2 B: underline "communicated immediately"


N021 · Check the key position limits. Daylight versus overnight open-position limits: which is larger?
> 1 S: sun icon vs moon icon · H: 3 s


N022 · Daylight is larger than overnight. Active trading handles client flows by day; overnight carries closed-market uncertainty.
> 1 C: trap card "Daylight limit > Overnight limit ✓ · overnight = higher closed-market uncertainty" [F7] · 2 M: node "limits"


N023 · Net Overnight Open Position Limit cannot exceed twenty-five per cent of total capital, Tier One plus Tier Two.
> 1 C: card "NOOPL ≤ 25% of Total Capital (Tier I + Tier II)" [F8]


N024 · Aggregate Gap Limit still survives under current rules. It caps forex maturity mismatches at six times total capital.
> 1 C: card "AGL ≤ 6 × Total Capital (or Board PV01 / VaR limits in place of AGL)" [F9]


N025 · Banks with stronger systems may substitute tenor-wise P-V-0-1 and Value at Risk limits for Aggregate Gap Limit.
> 1 N: "Superior measures: tenor-wise PV01 & VaR may replace AGL" [F9]


N026 · Twenty-twenty-six update: Reserve Bank capped onshore deliverable N-O-P I-N-R positions at one hundred million US dollars end-of-day.
> 1 C: card "NOP-INR (27 Mar 2026): ≤ USD 100 mn onshore deliverable EOD (FCNR-B/ECB/OFCB swap hedges excluded, 23 Jun 2026)" [F10]


N027 · Exposure ceilings cover counterparties and brokers. Brokers only match parties; they never settle deals or act as principals.
> 1 N: "Brokers: intermediaries only · no settlement · Back Office pays brokerage" [F11]


N028 · Each approved broker is capped at five per cent of total brokered deals per year, excluding Primary Dealers.
> 1 C: card "Broker cap: ≤ 5% of total brokered deals (buy + sell) per FY · PDs exempt · breach → record reasons + inform Board post-facto" [F11]


N029 · Quick sum. Deccan Bank's total brokered bond deals this year are four thousand crore. What is one broker's cap?
> 1 S: sum card "Total brokered = ₹4,000 cr · cap = 5%" · H: 8 s


N030 · Two hundred crore rupees. Four thousand times five per cent. Direct non-brokered deals stay outside the denominator.
> 1 S: keys "4000 × 5 % = 200" · 2 N: "Cap = ₹200 cr (direct deals excluded) ✓" [F11]


N031 · Pause check for chapter one. One: who approves stop-loss triggers and Aggregate Gap Limit?
> 1 S: pause card "1. Who approves stop-loss & AGL?" · H: 3 s


N032 · The Board and Risk Management Committee—not dealers, and without prior Reserve Bank approval.
> 1 N: "Board / RMC ✓" [F5, F6]


N033 · Two, the twist: does the five per cent broker cap apply to Primary Dealers?
> 1 S: pause card "2. Does 5% broker cap apply to Primary Dealers?" · H: 3 s


N034 · No, Primary Dealers are exempt. [seriously] One thing to remember: Board sets the fence, Mid-Office watches it.
> 1 N: "No — Primary Dealers exempt ✓" [F11] · 2 S: ch 1 dims to corner card

## Chapter 2 · Market risk, credit risk, and VaR on the desk

N035 · Chapter two: sorting desk risks. Recall from chapter one: why is the daylight limit higher than overnight?
> 1 S: chapter title "2 · Market risk, credit risk, and VaR" · H: 3 s


N036 · Markets are open for active management and client flows by day; overnight carries closed-market uncertainty.
> 1 N: "Recall ✓" [F7]


N037 · Market risk is loss from market price moves: interest rates, exchange rates, security prices, and equity prices.
> 1 C: card "Market risk: Interest rate · Exchange rate · Equity/Security price · Commodity" [F13] · 2 M: node "market vs credit"


N038 · Liquidity risk has two sides: funding liquidity when cash runs short, and market liquidity when exit prices freeze.
> 1 N: "Liquidity risk: Funding (cash) vs Market (exit price)" [F14]


N039 · Market risk splits into general market risk, which is systematic, and specific risk, which is unsystematic and issuer-specific.
> 1 C: card "General market risk = systematic · Specific risk = unsystematic (issuer-specific)" [F15]


N040 · Credit risk on the desk has two faces: pre-settlement risk and settlement risk.
> 1 S: split screen "Pre-settlement (Default)" vs "Settlement (Herstatt)" [F16, F17]


N041 · Pre-settlement risk is counterparty default before settlement date. You replace the deal in the market, losing replacement cost.
> 1 N: "Pre-settlement = counterparty defaults before settlement → loss = replacement cost" [F16]


N042 · Settlement risk is deadlier. Picture two clocks: Frankfurt at three-thirty afternoon, New York still early morning.
> 1 S: two clocks: "Frankfurt 15:30 CET · 26 Jun 1974" and "New York morning" [F17]


N043 · On twenty-six June nineteen seventy-four, regulators closed Bankhaus Herstatt after it received Deutsche marks, before paying US dollars.
> 1 N: "Herstatt / time-zone risk: paid one leg, counter-leg defaulted → full principal lost" [F17]


N044 · That is Herstatt risk: you pay your currency leg, the counterparty fails before paying, risking full principal.
> 1 B: box "full principal" [F17]


N045 · Banks tame Herstatt risk with pre-settlement netting and Payment-versus-Payment through C-L-S, settling both currency legs together.
> 1 C: card "Mitigation: Pre-settlement netting + PvP (CLS, launched 2002, 18 currencies)" [F18]


N046 · Corporate bonds carry interest-rate risk plus credit risk. Their yield equals government yield plus a credit spread.
> 1 C: card "Corporate bond yield = G-sec yield + Credit spread (unquoted rated: ≥ 50 bps mark-up)" [F19]


N047 · Sorting card: which risk caused each loss? First: rupee weakens, hurting Arjun's open dollar short position.
> 1 S: sorting card "1. FX rate move hits open USD position → ?" · H: 3 s


N048 · Market risk, never credit risk. Second: a corporate bond issuer's credit rating drops sharply.
> 1 C: trap card "'FX move loss = credit risk' ✗ · Market risk ✓" [F13] · 2 S: sorting card "2. Issuer downgrade → ?" · H: 3 s


N049 · Credit risk—specifically unsystematic specific risk—widening its spread. Third: a bank fails after we already wired euros.
> 1 N: "2. Credit / specific risk ✓" [F15, F19] · 2 S: sorting card "3. Paid EUR, USD leg defaults → ?" · H: 3 s


N050 · Settlement or Herstatt risk. Now, how does Value at Risk work on the desk?
> 1 N: "3. Settlement (Herstatt) risk ✓" [F17]


N051 · Many think Value at Risk replaces stop-loss limits. It does not. Banks use VaR alongside stop-loss and P-V-B-P limits.
> 1 C: trap card "'VaR replaces stop-loss' ✗ · VaR supplements stop-loss & PVBP ✓" [F20]


N052 · Internally banks use ninety-five to ninety-nine per cent confidence. Basel regulatory VaR uses ninety-nine per cent over ten days.
> 1 C: card "Internal VaR: 95%–99% · Basel VaR: 99% one-tailed, 10 trading days, ≥ 1-yr data" [F20]


N053 · Your turn. Arjun's one-day VaR is one point two zero crore rupees. Find his ten-day VaR.
> 1 S: sum card "1-day VaR = ₹1.20 cr · 10-day VaR = 1-day VaR × √10" · H: 15 s


N054 · Three point seven nine crore rupees. Press ten, square-root, times one point two, equals.
> 1 S: keys "10 √ × 1.2 = 3.7947" · 2 N: "10-day VaR ≈ ₹3.79 cr ✓" [F20]


N055 · VaR assumes normal markets and misses extreme crashes. So banks validate it with back-testing and add stress testing.
> 1 C: card "VaR limits: misses tail events → validate by Back-testing + supplement with Stress testing" [F21]


N056 · Pause check for chapter two. One: in pre-settlement risk, is loss full principal or replacement cost?
> 1 S: pause card "1. Pre-settlement risk loss = ?" · H: 3 s


N057 · Replacement cost. Two, the twist: a rupee drop causes loss on an unhedged dollar payable. Which risk?
> 1 N: "Replacement cost ✓" [F16] · 2 S: pause card "2. Unhedged FX loss = ?" · H: 3 s


N058 · Market risk. [seriously] One thing to remember: pre-settlement risks replacement cost, Herstatt risks full principal, and VaR needs stress tests.
> 1 N: "Market risk ✓" [F13] · 2 S: ch 2 dims to corner card

## Chapter 3 · Capital for market risk

N059 · Chapter three: market-risk capital. Recall from chapter two: how do specific risk and general market risk differ?
> 1 S: chapter title "3 · Capital for market risk" · H: 3 s


N060 · Specific risk is issuer-specific; general market risk comes from broad market-wide rate or price moves.
> 1 N: "Recall ✓" [F15] · 2 M: node "capital"


N061 · Under current rules at thirty-one December twenty-twenty-six, which method does India mandate for interest-rate general market risk?
> 1 S: two labels "Maturity Method" · "Standardised Duration Method" · H: 3 s


N062 · Standardised Duration Method—not Maturity Method—because duration measures bond price sensitivity more accurately.
> 1 C: card "India uses Standardised Duration Method: 15 time bands · 3 zones · yield shifts 0.60%–1.00%" [F22]


N063 · Multiply each bond's modified duration by an assumed yield shift between zero point six and one per cent across fifteen bands.
> 1 S: three-zone duration ladder appears (Zone 1: ≤1 yr · Zone 2: 1–3.6 yrs · Zone 3: >3.6 yrs) [F22]


N064 · General market risk sums four parts: net open position, vertical disallowance, horizontal disallowance, and options charge.
> 1 C: card "General Market Risk = Net position + Vertical disallowance + Horizontal disallowance + Options" [F23]


N065 · Vertical disallowance hits matched long and short positions inside the same time band. Under duration method, it is five per cent.
> 1 C: card "Vertical disallowance = 5% of matched long/short in SAME time band (captures basis risk)" [F24] · 2 B: box "5% · basis risk"


N066 · It captures basis risk—two bonds in the same band with different issuers do not move identically.
> 1 N: "Same band, different issuers → basis risk" [F24]


N067 · Horizontal disallowance hits matched net positions across different time bands and zones, capturing non-parallel yield-curve shifts.
> 1 C: card "Horizontal disallowance (yield-curve risk): Within Z1 40%, Z2 30%, Z3 30% · Adjacent 40% · Z1–Z3 100%" [F25]


N068 · Write this down: within Zone One forty, Zones Two and Three thirty, adjacent zones forty, Zones One to Three hundred.
> 1 B: underline "40 / 30 / 30 · 40 · 100" [F25]


N069 · Quick sum. Inside one time band, long sensitivity is one hundred crore and short is sixty crore. Find vertical disallowance.
> 1 S: sum card "Same band: Long ₹100 cr, Short ₹60 cr · matched = ₹60 cr" · H: 8 s


N070 · Three crore rupees. Matched amount is sixty crore; sixty times five per cent equals three crore.
> 1 S: keys "60 × 5 % = 3" · 2 N: "Vertical disallowance = ₹3 cr ✓" [F24]


N071 · Now one line on rules issued, coming one April twenty-twenty-seven: Reserve Bank's Market Risk Directions twenty-twenty-six, issued twenty-one September twenty-twenty-six.
> 1 C: card "ISSUED, COMING 1 Apr 2027 · RBI Market Risk Directions 2026 (21 Sep 2026) · Simplified Standardised Approach" [F26]


N072 · From April twenty-twenty-seven, trading book equals all Held for Trading instruments—replacing the old H-F-T plus A-F-S wording.
> 1 C: trap card "Old 'HFT + AFS = trading book' ✗ · Coming 1 Apr 2027: Trading book = all HFT ✓" [F26]


N073 · Under those coming directions, forex risk including bullion applies to both books, with no credit for trading-to-banking transfers.
> 1 N: "Coming 1 Apr 2027: FX risk (incl. bullion) on BOTH books · no trading→banking IRT credit" [F26]


N074 · Pause check for chapter three. One: what risk does the five per cent vertical disallowance capture?
> 1 S: pause card "1. Vertical disallowance (5%) captures ?" · H: 3 s


N075 · Basis risk inside the same band. Two, the twist: horizontal disallowance between Zone One and Zone Three?
> 1 N: "Basis risk ✓" [F24] · 2 S: pause card "2. Horizontal disallowance: Zone 1 vs Zone 3?" · H: 3 s


N076 · One hundred per cent. [seriously] One thing to remember: vertical is five per cent inside a band, horizontal is across bands.
> 1 N: "100% ✓" [F25] · 2 S: ch 3 dims to corner card

## Chapter 4 · Investment classification, valuation, and IFR

N077 · Chapter four: investment classification, valuation, and I-F-R. Recall: when do the twenty-twenty-six Market Risk Directions take effect?
> 1 S: chapter title "4 · Investment classification, valuation & IFR" · H: 3 s


N078 · One April twenty-twenty-seven—so at thirty-one December twenty-twenty-six they are issued, coming.
> 1 N: "Recall ✓ (issued, coming 1 Apr 2027)" [F26] · 2 M: node "classification"


N079 · Under Investment Portfolio Directions twenty-twenty-five, banks hold securities only in demat form and sort them into three buckets.
> 1 S: three buckets appear: "HTM" · "AFS" · "FVTPL (with HFT drawer)" [F27]


N080 · Bucket one: Held to Maturity, H-T-M. Needs intent to hold to maturity plus S-P-P-I cash flows. Carried at cost.
> 1 C: card "HTM: hold to collect + SPPI (Solely Payments of Principal & Interest) · carried at cost, no MTM" [F28]


N081 · S-P-P-I means Solely Payments of Principal and Interest. Equity, convertibles, and Basel Three A-T-1 bonds fail S-P-P-I.
> 1 N: "Fail SPPI: equity, convertibles, AT1/Tier 2 loss-absorbing bonds" [F28]


N082 · Big trap: old books quote a twenty-five per cent cap on H-T-M. That twenty-five per cent cap is gone.
> 1 C: trap card "'HTM capped at 25% of investments' ✗ · No percentage cap since Apr 2024 ✓" [F28]


N083 · Instead, H-T-M sales in a year cannot exceed five per cent of opening carrying value without prior Reserve Bank approval.
> 1 C: card "HTM sales limit: ≤ 5% of opening carrying value per FY (else prior RBI DoS approval)" [F29]


N084 · Seven sales are excluded—including O-M-O, government buybacks or switches, rating-downgrade sales, and repo, which is not a sale.
> 1 N: "Excluded: OMO/GSAP, GoI/State buyback/switch, issuer call, downgrade/default, resolution plan, RBI-permitted · Repo ≠ sale" [F29]


N085 · Quick sum: opening H-T-M carrying value is twelve thousand crore. Maximum annual sale without prior approval?
> 1 S: sum card "Opening HTM = ₹12,000 cr · 5% limit = ?" · H: 8 s


N086 · Six hundred crore rupees. Twelve thousand times five per cent. Profit on H-T-M sale is appropriated to Capital Reserve.
> 1 S: keys "12000 × 5 % = 600" · 2 N: "Limit = ₹600 cr · profit → P&L → Capital Reserve ✓" [F29]


N087 · Bucket two: Available for Sale, A-F-S. S-P-P-I debt held to collect and sell, fair valued quarterly through A-F-S Reserve.
> 1 C: card "AFS: collect & sell + SPPI · quarterly MTM → AFS-Reserve (in CET1; no dividend from unrealised gain)" [F30]


N088 · Bucket three: F-V-T-P-L—the residual bucket for non-S-P-P-I items, with gains and losses straight to profit and loss.
> 1 C: card "FVTPL: residual (MFs, AIFs, InvITs, REITs, equity) · MTM → P&L · HFT sub-category = daily MTM" [F31]


N089 · Held for Trading, H-F-T, sits as a sub-category inside F-V-T-P-L and is marked to market daily.
> 1 B: underline "HFT inside FVTPL · daily MTM" [F31]


N090 · Can banks shift bonds between buckets every April? No. Reclassification needs Board approval plus prior Reserve Bank DoS approval.
> 1 C: trap card "'Annual April shifting allowed' ✗ · Rare, needs Board + prior RBI DoS approval ✓" [F32]


N091 · Two twenty-twenty-six updates. First, from twenty-two September twenty-twenty-six, unquoted Inv-I-T and R-E-I-T units are valued at disclosed N-A-V.
> 1 C: card "InvIT / REIT (22 Sep 2026): quoted = market/FBIL · unquoted = disclosed NAV · no NAV / infrequently traded = ₹1" [F33]


N092 · If N-A-V is not disclosed under SEBI rules, or units are infrequently traded, value them at one rupee.
> 1 B: box "₹1" [F33]


N093 · Second, the biggest twenty-twenty-six trap: from eighteen May twenty-twenty-six, Investment Fluctuation Reserve is discontinued for commercial banks and Local Area Banks.
> 1 C: trap card "'Commercial banks must hold 2% IFR' ✗ · IFR discontinued w.e.f. 18 May 2026 ✓" [F34]


N094 · Existing I-F-R balances move below the line to Statutory Reserve, General Reserve, or Profit and Loss.
> 1 N: "IFR balance → below the line to Statutory / General Reserve or P&L" [F34]


N095 · Small Finance, Payments, Co-operative, and Regional Rural Banks still keep I-F-R, tested on balance-sheet dates.
> 1 N: "IFR kept by: SFBs, PBs, UCBs, RCBs, RRBs (balance-sheet dates)" [F34]


N096 · Pause check for chapter four. One: where do quarterly valuation changes on A-F-S debt go?
> 1 S: pause card "1. AFS quarterly MTM goes to ?" · H: 3 s


N097 · Directly to A-F-S Reserve. Two, the twist: does a commercial bank create I-F-R on thirty-one December twenty-twenty-six?
> 1 N: "AFS-Reserve ✓" [F30] · 2 S: pause card "2. Commercial bank IFR on 31 Dec 2026?" · H: 3 s


N098 · No—discontinued from eighteen May twenty-twenty-six. [seriously] One thing to remember: no twenty-five per cent H-T-M cap, and no commercial-bank I-F-R.
> 1 N: "No — discontinued 18 May 2026 ✓" [F34] · 2 S: ch 4 dims to corner card

## Close

N099 · Mixed check. Arjun's desk breaks its overnight limit, routes eight per cent through one non-P-D broker, and skips confirmation.
> 1 S: mixed case card "1. Overnight breach · 2. 8% via 1 broker · 3. No Back Office confirmation" · H: 5 s


N100 · All three are control failures: position limit breached, five per cent broker cap breached, and Back Office segregation breached.
> 1 N: "All 3 are control failures ✓" [F3, F11, F12]


N101 · Look at the blank Risk Control branch. Name all six twigs from memory before they light up.
> 1 S: Mind Map C branch 8 blank (6 empty twigs) · H: 10 s


N102 · Reasons, control types, limits, market versus credit risk, capital, and classification. Every twig is now locked in.
> 1 M: all 6 twigs light up: "reasons · control types · limits · market vs credit · capital · classification"


N103 · You can now spot treasury control breaches, separate market from Herstatt risk, apply disallowances, and classify investments under twenty-twenty-six rules.
> 1 C: card "You can now: C5.1 · C5.2 · C5.3 (VaR) · C2.3 (Classification, InvIT/REIT, IFR)"


N104 · Homework: find the maximum Board N-O-O-P-L and Aggregate Gap Limit for a bank with two thousand crore total capital.
> 1 C: homework card "Total capital = ₹2,000 cr · Find max NOOPL (25%) & max AGL (6×)"


N105 · Next class: when a bank locks in a future bond or currency rate, which contracts do the job?
> 1 S: preview card "Next class: Derivatives — forwards, futures, OTC vs exchange"


N106 · [warmly] That's the treasury safety fence, complete. Close your notes, unwind for the night, and I'll see you next class.
> 1 S: full Mind Map C branch 8 glows; fade out