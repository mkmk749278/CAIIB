# C01b · "Organising the treasury and the dealing room" · CLASS EDITION (script c1, with cue sheet)
* Status: **c1 GEMINI DRAFT, spot-checked, full review pending** (owner, 2026-11-24: "save as drafts, check later"). Not locked: do not voice until reviewed.
* Plan: course/bfm/C/plans_C.md §C01b (v4 split: C01 = C1.1–C1.3, C2.1, C2.4; C01b = C1.4, A1.4, C5.1 dealer level; all 9 v3 depth additions covered: 3 from depth/C + 6 from depth/A). Course order v4: C01 → C01b → C02.
* Syllabus: C1.4 (Organisation of treasury), A1.4 (Foreign exchange dealing room operations), C5.1 (Supervision and control of treasury — dealer level).
* Facts: C01b_fact_sheet, rows cited as [F1]–[F39]. Sums: C01b_numericals (verified two independent ways in Python Decimal). Practice: C01b_practice.
* Rule version (opening card): "RBI MD – Risk Management and Inter-Bank Dealings (updated 1 Oct 2026) · RBI A.P. (DIR) Circular No. 24 (27 Mar 2026, NOP-INR USD 100m w.e.f. 10 Apr 2026) · RBI Commercial Banks Investment Portfolio Directions 2025 (updated 1 Oct 2026) · RBI Governance Directions 2025 (updated 1 Oct 2026) · RBI Financial Statements Directions 2025 (updated 1 Jul 2026) · RBI Internal Control Guidelines for FX Business (2011) · RBI ETP Directions 2025 (16 Jun 2025) & Alert List (Nov 2025) · FEDAI / FBIL NOOP Spot Rate Notice (6 Apr 2026) · BIS RMA20 (Jan 2026) · Capital Adequacy 10th Amendment 2026 (issued 24 Jun 2026, coming 1 Apr 2027) · as at 31 December 2026".
* Greeting / goodbye (new, verified unused in greetings.md): greeting "Good to have you back at the trading desk. Last class we saw why treasury earns; today we see how it is controlled."; goodbye "That is the dealing room mapped and guarded. Put the calculator aside, get some rest, and I will meet you next class."
* Story: Kaveri Commercial Bank (illustrative) in Mumbai. Forex dealer Arjun executes a large US dollar deal at 3:00 p.m., and his own dealing-room manager supervises deal confirmations. All names, amounts, and rates are illustrative.
* Holds: recall/check questions 3–5 s; one-step sums 8 s; "your turn" numerical 15 s; blank mind map 5 s.
* Say it right: "A-S seventeen" for AS 17; "G-L" for General Ledger; "P-and-L" for Profit and Loss; "A-D Category One"; "M-T-M" for mark-to-market; "M-I-S"; "C-R-O" for Chief Risk Officer; "R-M-C-B"; "N-O-O-P-L"; "N-O-P-I-N-R"; "A-G-L"; "F-B-I-L"; "F-E-D-A-I"; "F-I-M-M-D-A"; "C-C-I-L"; "C-I-M-S"; "F-T-D"; "G-P-B"; "E-D-P"; "P-V-P"; "I-S-D-A"; "I-F-E-M-A"; "I-C-O-M"; "E-T-P"; "L-R-S"; "Her-stat" for Herstatt.
* Not in this video: Integrated treasury concept, profit-centre drivers, globalisation, and covered interest arbitrage (last class); money-market instruments and RBI liquidity tools (next classes); full VaR, duration, BPV, and portfolio stop-loss governance (later in this module); FEMA adjudication and AD categories (earlier in international banking).
* Length: 1,955 spoken words + ~2.6 min of holds ≈ 15.0 min at 150 wpm (exact count verified by linter; 0 lines > 25 words; 0 spoken lesson codes).
* Cue sheet: S scene · N note · G glow · M map · C card · B board mark · H hold. Stable picture: the treasury desk seen from above with three concentric rings (Front: deal · Mid: watch risk · Back: settle and account) plus the dealing-room clock for daylight and overnight limits.


---

## Warm-up

N001 · [warmly] Good to have you back at the trading desk. Last class we saw why treasury earns; today we see how it is controlled.
> 0 C: rule-version card (as at 31 Dec 2026) · 1 S: notebook page; title "Organising the Treasury and the Dealing Room"

N002 · Calculator ready. Last class's homework: borrow one million dollars at five percent, invest rupees at seven percent, six months.
> 1 S: homework card "USD 1m @ 5% · Spot 84.00 · INR @ 7% · 6m Fwd 84.80 (illustrative)" · H: 4 s

N003 · Eight crore sixty-nine lakh forty thousand rupees divided by eighty-four eighty gives a two hundred thirty-six dollar arbitrage gain.
> 1 N: "₹8,69,40,000 ÷ 84.80 = USD 1,025,235.85 → +USD 235.85 gain ✓"

N004 · Recall from earlier classes: is F-E-D-A-I a statutory regulator or a self-regulatory association?
> 1 S: recall card "FEDAI: statutory regulator or self-regulatory association?" · H: 3 s

N005 · A self-regulatory association of authorised dealer banks, set up in nineteen fifty-eight.
> 1 N: "FEDAI = self-regulatory association (est. 1958) ✓"

N006 · Treasury organisation, functional segregation, and twenty twenty-six rupee limit rules were tested across recent exam cycles.
> 1 C: Importance Map badge "Recent cycles · segregation & 2026 NOP-INR" [F19]

N007 · Today you will spot segregation failures, compute net currency positions, and master every dealing-room limit and risk.
> 1 S: Mind Map C centre "The bank's trading desk" with 4 empty branches


## Opening

N008 · Picture Kaveri Commercial Bank, illustrative. At three p.m., dealer Arjun books a large dollar forward deal.
> 1 S: Mumbai dealing room clock at 3:00 p.m.; card "Kaveri Commercial Bank · Dealer Arjun (illustrative)"

N009 · To save time, Arjun's own dealing-room manager signs and sends the counterparty confirmation. Pause and think: what happens here?
> 1 S: two bubbles "Faster settlement" vs "Serious control breakdown" · H: 3 s

N010 · Some think speed helps; others see a red flag. Chapter two explains why R-B-I forbids it.
> 1 B: underline "Serious control breakdown" [F9, F11]


## Chapter 1 · Two ways to organise the treasury

N011 · Under Accounting Standard seventeen, treasury is one of four primary reportable business segments.
> 1 S: four-box segment strip; N: "AS 17 segment: Treasury (includes entire investment portfolio)" [F1]

N012 · It holds the entire investment portfolio plus money-market and forex operations, headed by a senior executive.
> 1 N: "Head of Treasury: senior executive" [F1, F3]

N013 · Banks organise treasury as a Head Office department or a specialised treasury branch. How do they differ?
> 1 S: two-column comparison card "HO Department vs Specialised Branch" · H: 3 s

N014 · A Head Office department lacks a branch ledger; a specialised branch runs its own General Ledger and profit-and-loss account.
> 1 N: left "HO Dept: part of central office" · right "Specialised Branch: own GL & P&L" [F2]

N015 · A specialised branch holds Authorised Dealer Category One status and settles directly with counterparties, clearing corporations, and R-B-I.
> 1 N: right column "+ AD Cat-I · direct settlement" [F2]

N016 · Large banks prefer a specialised branch for clean profit tracking; smaller banks often use a department.
> 1 G: glow "Specialised Branch: own GL & P&L" [F2]

N017 · Either way, the Board approves the Investment Policy and risk policy, while support units back up the dealing desk daily.
> 1 N: "Board approves Investment & Risk Policy" [F3]

N018 · Support units cover the investment cell, accounts, I-T systems, and S-W-I-F-T, R-T-G-S, N-E-F-T, and C-C-I-L connectivity.
> 1 N: "Support: Investment Cell · Accounts · IT · SWIFT/RTGS/NEFT/CCIL" · M: node "Organisation" [F3]

N019 · Pause check one. Question one: under A-S seventeen, which portfolio must always sit inside the Treasury business segment?
> 1 C: Pause Check 1 Q1 "AS 17 Treasury includes?" · H: 3 s

N020 · The bank's entire investment portfolio. Question two: which treasury form keeps its own General Ledger and settles directly?
> 1 N: "Q1: Entire investment portfolio ✓" · C: Q2 "Own GL & direct settlement?" · H: 3 s

N021 · The specialised treasury branch, because it operates as an independent accounting and Authorised Dealer unit.
> 1 N: "Q2: Specialised treasury branch ✓" [F2]

N022 · One thing to remember: department or specialised branch, the Board sets policy and support units power connectivity.
> 1 B: box "Policy = Board · Connectivity = Support Units" [F3]


## Chapter 2 · Front, mid, and back office

N023 · Quick recall from chapter one: who approves a commercial bank's comprehensive Investment Policy?
> 1 S: recall banner "Who approves Investment Policy?" · H: 3 s

N024 · The Board of Directors. Now step inside the desk, where one cardinal rule protects the bank: strict functional segregation.
> 1 N: "Board of Directors ✓" · S: desk from above with three concentric rings [F3, F4, F5]

N025 · R-B-I's twenty twenty-five Investment Directions mandate four-way separation: trading, settlement, monitoring and control, and accounting.
> 1 N: "4-way separation: Trading · Settlement · Monitoring · Accounting" [F4]

N026 · In forex dealing, R-B-I's Internal Control Guidelines split the department into three offices: Front Office, Mid Office, and Back Office.
> 1 N: ring 1 "Front Office" · ring 2 "Mid Office" · ring 3 "Back Office" [F5]

N027 · Many of you think Back Office only files paperwork and Mid Office places trades. Both beliefs are wrong.
> 1 C: Misconception card struck through "Back = only paper · Mid = trades ✗" [F6, F7, F9]

N028 · Front Office is the dealing room: dealers execute trades and primary-auction bids strictly within delegated limits.
> 1 G: glow Ring 1 "Front Office: deals & primary bids only" [F6]

N029 · Deals go on serially numbered deal slips or automated systems straight to Back Office; dealers never touch accounting or settlement.
> 1 N: "Front: deal slip → Back · NO accounting, NO settlement" [F6]

N030 · Mid Office tracks limits, stop-loss triggers, mark-to-market valuation, accounting policies, and M-I-S for management and A-L-C-O.
> 1 G: glow Ring 2 "Mid Office: risk, limits, stop-loss, MTM, MIS" [F7]

N031 · Favourite exam trap: should the Mid Office report to the Head of Treasury? Pause and decide.
> 1 C: Trap question "Does Mid Office report to Treasury Head?" · H: 3 s

N032 · Never. Mid Office must report outside the Head of Treasury, because risk monitoring must stay independent of trading.
> 1 B: box "Mid Office reports OUTSIDE Treasury Head" [F8]

N033 · Under twenty twenty-five Governance Directions, the Chief Risk Officer reports to the M-D and C-E-O or Board Risk Committee, without business targets.
> 1 N: "CRO → MD&CEO / RMCB · no business vertical · no dual hatting" [F8]

N034 · Mid Office, Back Office, and audit pay stays independent of trading profits and weighted toward fixed pay.
> 1 N: "Control staff pay: independent, weighted to fixed pay" [F10]

N035 · Back Office handles independent counterparty confirmation, value-date settlement, accounting, Position and Funds Registers, Nostro and P-D-O reconciliation, and flagging breaches.
> 1 G: glow Ring 3 "Back Office: confirm, settle, account, reconcile, flag" [F9]

N036 · Remember this trap card: Back Office confirms deals independently, and Mid or Back Office values positions — never the dealer.
> 1 C: Trap card "Confirm = Back Office (never dealer) · Value = Mid/Back" [F7, F9]

N037 · Remember Arjun at Kaveri Commercial Bank? His dealing-room manager signed confirmations, placing Front and Back Office under one boss.
> 1 S: case diagram "Arjun (Front) + Confirmations (Back) → same manager ✗" [F9, F11]

N038 · R-B-I rules say in no case may dealers sign confirmations; Back Office must verify confirmations and fix discrepancies the same day.
> 1 B: strike "Dealer signs confirmation ✗" · N: "Same-day discrepancy fix" [F9]

N039 · If Mid Office breach reports are also ignored, that structural control failure invites off-market rates, unauthorised positions, and hidden losses.
> 1 N: "Ignored Mid Office alerts → structural control failure" [F11]

N040 · Good dealers need calm decisions under stress, limit discipline, owning mistakes fast, verified integrity, and written F-E-D-A-I and F-I-M-M-D-A Code undertakings.
> 1 N: "Dealer: stress discipline, integrity, owns mistakes, Code undertaking" · M: node "Three offices" [F12]

N041 · Pause check two. Question one: which office independently confirms forex trades with the counterparty bank?
> 1 C: Pause Check 2 Q1 "Who confirms deals independently?" · H: 3 s

N042 · Back Office, because dealers may never sign confirmations. Question two: to whom must Mid Office and the Chief Risk Officer never report?
> 1 N: "Q1: Back Office ✓" · C: Q2 "Never reports to?" · H: 3 s

N043 · The Head of Treasury or any business vertical. Question three: which office monitors stop-loss limits and mark-to-market valuation?
> 1 N: "Q2: Never Treasury Head ✓" · C: Q3 "Who monitors stop-loss & MTM?" · H: 3 s

N044 · Mid Office monitors risk, stop-loss, and valuation, while Back Office also flags operational or rate breaches.
> 1 N: "Q3: Mid Office (Back flags breaches) ✓" [F7, F9]

N045 · One thing to remember: Front deals, Mid watches risk independently, Back confirms and settles — never mix their bosses.
> 1 B: box "Front = deal · Mid = independent risk · Back = confirm & settle" [F5, F8, F9]


## Chapter 3 · The dealing room's positions, limits, and controls

N046 · Quick recall from chapter two: why is control-function staff pay weighted toward fixed compensation?
> 1 S: recall banner "Why fixed-weighted pay for control staff?" · H: 3 s

N047 · So short-term trading profits cannot compromise their independence. Now let us examine the dealing room's daily numbers, limits, and controls.
> 1 N: "Preserves independence ✓" · S: dealing-room clock + Position & Funds Registers [F10, F13]

N048 · Separate two terms Back Office updates continuously: Funds Position and Currency Position. They measure different risks.
> 1 C: Names-first card "Funds Position vs Currency Position" [F13]

N049 · Funds Position tracks Nostro cash liquidity for value-date settlements; Currency Position tracks net exchange-rate exposure across spot, forwards, and options.
> 1 N: "Funds = Nostro cash · Currency = net FX exposure" [F13, F16]

N050 · Purchases above sales mean Overbought or Long; sales above purchases mean Oversold or Short; equal means Square.
> 1 N: "Buys > Sells = Overbought (Long) · Sells > Buys = Oversold (Short)" [F13]

N051 · Let us work one net currency position in full. Kaveri Commercial Bank, illustrative, opens Overbought four point five zero million dollars.
> 1 S: numerical board "Opening: +USD 4.50m (Overbought)" [F13]

N052 · Deals: buy three point two exporter, sell five point eight importer, buy two point six spot, sell one point five forward.
> 1 N: "+4.50 | +3.20 | −5.80 | +2.60 | −1.50 (USD m)" [F13, F16]

N053 · Keys: four point five plus three point two minus five point eight plus two point six minus one point five equals plus three.
> 1 N: "Keys: 4.5 + 3.2 − 5.8 + 2.6 − 1.5 = +USD 3.00m (Overbought)" [F13]

N054 · Check by totals: ten point three zero minus seven point three zero equals plus three million. Trap: never drop the opening balance or forwards.
> 1 B: box "Closing: +USD 3.00m Overbought · Trap: include opening & forwards" [F13, F16]

N055 · Faded euro check: opens Oversold two million, buys four point five, sells six point two five, buys one point two five. Closing?
> 1 S: faded sum "Open −2.00 | +4.50 | −6.25 | +1.25 (EUR m)" · H: 8 s

N056 · Buys five point seven five minus sells and opening short eight point two five equals minus two point five million euros.
> 1 N: "5.75 − 8.25 = −EUR 2.50m (Oversold / Short) ✓" [F13]

N057 · Now your turn on the shorthand method and regulatory cap. A bank has Total Capital of two thousand crore rupees, illustrative.
> 1 S: Your Turn card "Total Capital = ₹2,000 cr (illustrative)" [F16, F17]

N058 · End-of-day positions in crore rupees: dollar plus one eighty, euro plus seventy, pound minus one forty, yen minus one sixty.
> 1 N: "USD +180 · EUR +70 · GBP −140 · JPY −160 (₹ cr)" [F17]

N059 · Pause fifteen seconds: compute Overall Net Open Position by shorthand method, and the maximum Board Net Overnight Open Position Limit.
> 1 C: "Your Turn: Overall NOP & Max 25% NOOPL" · H: 15 s

N060 · Sum of longs is two fifty crore; sum of shorts is three hundred crore. Shorthand never nets longs against shorts.
> 1 N: "Longs = ₹250 cr · Shorts = ₹300 cr → Higher = ₹300 cr" [F17]

N061 · Take the higher side: three hundred crore. Maximum Board limit is twenty-five percent of two thousand, five hundred crore — comfortably within cap.
> 1 B: box "Overall NOP = ₹300 cr · Max NOOPL (25%) = ₹500 cr ✓" [F16, F17]

N062 · Write this down: the Board — not R-B-I case by case — sets dealer limits, N-O-O-P-L, and A-G-L, then notifies R-B-I via C-I-M-S.
> 1 C: Trap card "Board sets limits within RBI caps (not RBI case by case)" [F14]

N063 · Dealers work under deal-size, currency-wise, stop-loss, Daylight, and Overnight limits. Pause: which time limit is larger, Daylight or Overnight?
> 1 S: dealing-room clock "Daylight (intraday) vs Overnight" · H: 3 s

N064 · Daylight limit is larger, because dealers actively square intraday trades, whereas overnight positions face unmonitored offshore moves.
> 1 N: "Daylight limit > Overnight limit ✓" [F18]

N065 · Two twenty twenty-six updates. First, from ten April twenty twenty-six, onshore deliverable N-O-P-I-N-R is capped at one hundred million dollars.
> 1 C: 2026 Update badge "NOP-INR ≤ USD 100m at day end (w.e.f. 10 Apr 2026)" [F19]

N066 · Second, from six April twenty twenty-six, F-B-I-L publishes the daily dollar-rupee N-O-O-P spot rate; F-E-D-A-I keeps month-end revaluation rates.
> 1 C: 2026 Update badge "NOOP spot rate = FBIL (6 Apr 2026) · Month-end reval = FEDAI" [F22]

N067 · Issued, coming: R-B-I's June twenty twenty-six amendment revamping N-O-P and the nine percent forex charge begins one April twenty twenty-seven.
> 1 C: Issued, Coming card "Revamped NOP & 9% FX charge: effective 1 Apr 2027" [F20]

N068 · Board-approved Aggregate Gap Limit cannot exceed six times total capital, though banks with strong models may substitute Board-approved P-V-zero-one and V-a-R limits.
> 1 N: "Max AGL = 6× Total Capital (or Board PV01 & VaR)" [F21]

N069 · Head Office reports daily turnover in Form F-T-D and positions in Form G-P-B through C-I-M-S by the next working day.
> 1 N: "Daily CIMS returns: Form FTD & Form GPB" [F23]

N070 · Securities trades per approved broker are capped at five percent of annual brokered turnover; Primary Dealers are exempt, and brokers never settle deals.
> 1 N: "Broker cap = 5% of brokered turnover · PDs exempt · no settlement" [F24]

N071 · Core controls: non-dealer E-D-P access, auto-stamped trades, two-month voice tapes, and compulsory two-week continuous annual dealer leave.
> 1 N: "Controls: non-dealer EDP · 2m voice tapes · 2-wk annual leave" [F25, F26, F27]

N072 · Add thrice-daily rate scans for off-market deals, no broker bank-name substitution, monthly F-E-D-A-I revaluation, monthly concurrent audit, and annual system audit.
> 1 N: "3× rate scan · monthly reval · concurrent audit · annual system audit" [F24, F28, F30, F32]

N073 · Real-time Nostro reconciliation: debits over two years need full provision; credits over three years move to Blocked Account.
> 1 N: "Nostro: >2 yr debit = 100% prov · >3 yr credit = Blocked A/c" · M: node "Dealer limits" [F31]

N074 · Pause check three. Question one: what is the twenty twenty-six end-of-day cap on onshore deliverable N-O-P-I-N-R?
> 1 C: Pause Check 3 Q1 "Onshore deliverable NOP-INR cap?" · H: 3 s

N075 · One hundred million US dollars, from ten April twenty twenty-six. Question two: who fixes N-O-O-P-L, and what is its statutory ceiling?
> 1 N: "Q1: USD 100 million ✓" · C: Q2 "Who sets NOOPL & cap?" · H: 3 s

N076 · The Board fixes it, capped at twenty-five percent of total capital. Question three: after how many years do unreconciled Nostro debits need full provision?
> 1 N: "Q2: Board, max 25% total capital ✓" · C: Q3 "Nostro debit 100% provision?" · H: 3 s

N077 · Over two years, while credits over three years move to Blocked Account. Remember: Board sets limits within R-B-I caps, and daily controls catch breaches.
> 1 N: "Q3: >2 years ✓" · B: box "Board sets within RBI caps · daily controls" [F14, F16, F19, F31]


## Chapter 4 · Risks in forex dealing and the RBI Alert List

N078 · Quick recall from chapter three: who publishes the daily dollar-rupee N-O-O-P spot rate since six April twenty twenty-six?
> 1 S: recall banner "Daily USD/INR NOOP spot rate publisher?" · H: 3 s

N079 · F-B-I-L, while F-E-D-A-I keeps month-end revaluation rates. Now let us map the risks behind every dealing screen on one card.
> 1 N: "FBIL ✓" · S: single 10-risk grid card "Risks in Forex Dealing" [F22]

N080 · First, Exchange risk from adverse currency moves on open positions, and Gap risk from maturity mismatches in forwards, swaps, and deposits.
> 1 N: grid "1. Exchange · 2. Gap (maturity/interest)" [F33]

N081 · Second, Credit risk has two halves: Pre-settlement risk is replacement cost before maturity, while Settlement risk loses full principal across time zones.
> 1 N: grid "3. Credit: Pre-settlement (replacement) & Settlement (full principal)" [F34]

N082 · That settlement principal risk is called Herstatt Risk. How do banks eliminate it under Basel guidance?
> 1 G: glow "Herstatt Risk" · H: 3 s

N083 · Through Payment-versus-Payment settlement, like C-L-S Bank or C-C-I-L, where one currency transfers only if the other transfers simultaneously.
> 1 N: "Mitigant: Payment-versus-Payment (PVP)" [F34]

N084 · Liquidity risk covers funding and market shortages; Operational risk covers system breakdowns, fat-finger errors, and misconduct, cut by straight-through processing.
> 1 N: grid "4. Liquidity · 5. Operational (STP & BCP)" [F35, F36]

N085 · Fourth, Legal risk — unenforceable contracts or netting — mitigated by master agreements like I-S-D-A, I-F-E-M-A, and I-C-O-M, plus Board resolutions.
> 1 N: grid "6. Legal (ISDA / IFEMA / ICOM)" [F36]

N086 · Finish the card with Country risk on E-C-G-C's seven-category scale, Sovereign risk of government default, and Systemic risk of market contagion.
> 1 N: grid "7. Country · 8. Sovereign · 9. Systemic" [F37]

N087 · One counter warning before we close: under R-B-I's twenty twenty-five Electronic Trading Platforms Directions, no platform may operate without prior R-B-I authorisation.
> 1 C: ETP card "RBI ETP Directions 2025: prior RBI authorisation mandatory" [F38]

N088 · Residents may trade forex only with Authorised Persons on authorised platforms or exchanges; L-R-S margin remittances overseas are banned.
> 1 N: "Only Authorised Persons / RBI ETPs / NSE-BSE-MSE · LRS margin banned" [F39]

N089 · R-B-I publishes an Alert List of unauthorised forex platforms. Many think if an app is not on the list, it is authorised.
> 1 C: Trap card "Not on Alert List = Authorised? ✗" · H: 3 s

N090 · Wrong. The Alert List is non-exhaustive; absence never implies authorisation — always verify on R-B-I's official authorised lists.
> 1 B: box "Alert List is NON-EXHAUSTIVE" · M: node "Forex risks" [F39]

N091 · Pause check four. Question one: which settlement mechanism eliminates Herstatt principal risk?
> 1 C: Pause Check 4 Q1 "What eliminates Herstatt risk?" · H: 3 s

N092 · Payment-versus-Payment settlement, because both legs settle simultaneously. Question two: which master agreements mitigate legal risk in forex and derivatives?
> 1 N: "Q1: Payment-versus-Payment (PVP) ✓" · C: Q2 "Master agreements for legal risk?" · H: 3 s

N093 · I-S-D-A, I-F-E-M-A, and I-C-O-M. Question three: can a resident remit margin under L-R-S to an overseas forex platform?
> 1 N: "Q2: ISDA / IFEMA / ICOM ✓" · C: Q3 "LRS margin for overseas forex?" · H: 3 s

N094 · No, it is prohibited under F-E-M-A. Remember: map every risk, and verify platform authorisation directly on R-B-I's lists.
> 1 N: "Q3: Prohibited under FEMA ✓" [F39]


## Close

N095 · Return to Arjun at Kaveri Commercial Bank. His manager signing confirmations broke functional separation; only independent Back Office staff may confirm deals.
> 1 S: opening case resolved "Independent Back Office confirms · dealers never sign ✓" [F9, F11]

N096 · Final mixed check. One: brokered securities turnover is one thousand crore and direct deals are five hundred crore. Single-broker five percent cap?
> 1 C: Mixed Check 1 "Brokered ₹1,000 cr + Direct ₹500 cr → 5% cap?" · H: 4 s

N097 · Fifty crore — five percent of brokered turnover only, excluding direct deals. Two: a dealer skips annual leave for two years. Which rule broke?
> 1 N: "1: ₹50 cr (5% of ₹1,000 cr only) ✓" · C: Mixed Check 2 "No annual leave for 2 years?" · H: 3 s

N098 · The mandatory two-week continuous annual leave rule under R-B-I's Internal Control Guidelines, meant to uncover concealed positions.
> 1 N: "2: Compulsory 2-week continuous leave breached ✓" [F24, F27]

N099 · Look at the blank mind map for the trading desk. Name today's four branches from memory.
> 1 M: blank Mind Map C branch "The desk" (4 empty slots) · H: 5 s

N100 · Organisation, Three Offices, Dealer Limits, Forex Risks. You can now handle treasury organisation and dealer controls; full VaR comes later.
> 1 M: full branch filled "Organisation · Three offices · Dealer limits · Forex risks"

N101 · Homework: dollar plus twelve, buys eighteen, sells twenty-two at eighty-five; euro minus four at ninety-two; pound minus three at one-oh-eight. Find Overall N-O-P.
> 1 C: Homework card "USD +12+18−22 @85 · EUR −4 @92 · GBP −3 @108 → Overall NOP?"

N102 · Before next class, think: when a bank's treasury needs overnight rupee cash at four p.m., which money-market instruments can it tap within minutes?
> 1 C: Next-class teaser "Overnight rupee cash at 4 p.m. — which instruments?"

N103 · That is the dealing room mapped and guarded. Put the calculator aside, get some rest, and I will meet you next class.
> 1 S: end card "Next class: Money-market instruments"
