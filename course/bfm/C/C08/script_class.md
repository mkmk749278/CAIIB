# C08 · "Derivatives 1: OTC vs exchange, forwards, futures, and IRFs" · CLASS EDITION (script c1, with cue sheet)
* Status: **c1 GEMINI DRAFT, gate PASS, full review pending** (owner, 2026-11-24: "save as drafts, check later"). Not locked: do not voice until reviewed.
* Plan: course/bfm/C/plans_C.md §C08 (v3 depth pass; all 6 depth/C additions + 1 depth/A addition covered). Course order v4: C07 → C08 → C08b.
* Syllabus: C6.1 (derivatives and the treasury), C6.2 (OTC and exchange-traded products), C6.3 (forwards, futures, IRF), C5.4 (hedging with forwards and IRFs), C2.1 (forex forward and swap recall).
* Facts: C08_fact_sheet, rows cited as [F1]–[F30]. Sums: C08_numericals (verified two independent ways in Python Decimal). Practice: C08_practice.
* Rule version (opening card): "RBI Act, 1934 (s. 45U) · SC(R)A, 1956 (s. 2(ac)) · RBI MD – Market-makers in OTC Derivatives, 2021 (Updated 21 Feb 2025) · RBI MD – Risk Management and Inter-Bank Dealings (Updated 1 Oct 2026) & A.P. (DIR) Circular No. 25 (10 Oct 2026) · RBI MD – Financial Services provided by Banks, 2016 (Updated 13 Mar 2026) · RBI MD – Rupee Interest Rate Derivatives, 2025 (eff. 1 Mar 2026; Updated 22 Sep 2026) · RBI Bond Forwards Directions, 2025 (eff. 2 May 2025; Updated 22 Sep 2026) · NSE Clearing IRF Margin Framework (Updated 9 Mar 2026) · as at 31 December 2026".
* Greeting / goodbye (new, verified unused in greetings.md and C03): greeting "Welcome back to the trading desk. Set your phone aside and keep your calculator ready, because today we start derivatives."; goodbye "Your see-saw and futures ticket are locked in. Put the pen down, rest well, and I will see you next class."
* Story: A textile exporter expecting USD 50,000 in 60 days and a bank on the opposite side both worry about the rupee moving (illustrative). Two junior officers disagree: one says a currency future is just an OTC forward with a different name; the other says daily cash settlement changes everything. All names, rates, prices, and amounts are illustrative.
* Holds: questions 3–5 s; one-step sums 8 s; "your turn" numerical 15 s; blank mind map 5 s.
* Say it right: "O-T-C"; "C-C-P"; "M-2-M" as "mark-to-market"; "E-T-C-D"; "E-T-P"; "I-R-F"; "I-R-D"; "F-B-I-L"; "C-C-I-L"; "C-C-B"; "N-P-A"; "F-P-I"; "S-L-R"; "section forty-five U, clause a" for s. 45U(a); "eighty-four fifty" for ₹84.5000.
* Not in this video: FRAs, Interest Rate Swaps, OIS/MIBOR, currency swap types, and swaps in ALM (next class); options and premiums (later in this module); FERR 20% sum, NDDC/related-party bars, LEI/UTI, novation, and ISDA precedence (dedicated regulatory class later in this module); forward rate arithmetic (covered in Module A).
* Length: 1,972 spoken words across 100 lines (exact count verified by linter; 0 lines > 25 words; 0 spoken lesson codes; 0 exclamation marks) + ~2.6 min of holds ≈ 14.7 min at 150 wpm. Chapters: warm-up (~1.2 min) · opening (~0.5 min) · Ch 1 What a derivative is, purposes, makers vs users (~3.0 min) · Ch 2 OTC vs exchange, M2M, membership, USD 5 m rule (~3.6 min) · Ch 3 Forwards, futures, currency futures & bond forwards (~3.1 min) · Ch 4 Interest rate futures & bond hedge (~2.3 min) · close (~1.0 min).
* Cue sheet: S scene · N note · G glow · M map · C card · B board mark · H hold. Stable picture: two counterparties on a see-saw (left = OTC face-to-face; right = Exchange with a clearing house in the middle and a daily M2M ticker underneath).


---

## Warm-up

N001 · [warmly] Welcome back to the trading desk. Set your phone aside and keep your calculator ready, because today we start derivatives.
> 0 C: rule-version card (as at 31 Dec 2026) · 1 S: notebook page; title "Derivatives 1: OTC vs Exchange, Forwards, Futures & IRFs"


N002 · Quick recall from last class: who sets a treasury dealer's stop-loss limit — the dealer, the RBI, or the bank's board?
> 1 S: recall card "Last class: Who sets stop-loss limits?" · H: 4 s


N003 · The bank's board or senior management sets it, never the dealer and never RBI approval.
> 1 N: "Treasury limits = Board-approved ✓"


N004 · One more recall from earlier in this module: when market interest rates rise, which way do existing bond prices move?
> 1 S: recall card "Earlier recall: Rates up → Bond price ?" · H: 3 s


N005 · Bond prices fall. Keep that price-and-yield see-saw alive, because we will use it to hedge a bond book today.
> 1 N: "Rates ↑ → Bond price ↓ (see-saw) ✓"


N006 · Good start. Derivatives appeared across four recent exam cycles and carried eight questions in the December 2025 full paper.
> 1 C: Evidence badge "Derivatives: 4/7 cycles · 8 Qs in Dec 2025 paper"


N007 · By the close, you will separate OTC from exchange contracts, verify bank eligibility, and compute futures and bond-hedge payoffs.
> 1 S: stable picture — OTC face-to-face see-saw (left) vs Exchange CCP see-saw + daily M2M ticker (right)

## Opening

N008 · Picture a textile exporter expecting fifty thousand US dollars in sixty days, illustrative, worried the rupee will strengthen.
> 1 S: branch desk card "Exporter receivable: USD 50,000 in 60 days (illustrative)"


N009 · Across the desk sits our bank, worried about the opposite move. Both want to lock a rate today.
> 1 S: exporter and bank on opposite ends of the see-saw


N010 · Two officers argue over lunch. One says a currency future is just a bank forward with an exchange label.
> 1 C: Split card "Officer A: Same contract, different name" vs "Officer B: Daily cash settlement changes everything"


N011 · The other says daily cash settlement and a five-million-dollar rule make them very different. Who is right?
> 1 G: "Who is right?" · H: 3 s


N012 · Hold that thought. We will settle their debate right after we define what a derivative actually is.
> 1 S: transition to Chapter 1

## Chapter 1 · What a derivative is, three purposes, and market-makers vs users

N013 · A derivative is a contract settled at a future date whose value comes entirely from an underlying rate, price, or index.
> 1 N: "Derivative = value from underlying; settled at future date [F1]" · B: underline "underlying"


N014 · It has no stand-alone value of its own. Section forty-five U, clause a of the RBI Act sets this out.
> 1 N: "RBI Act s. 45U(a) · SC(R)A s. 2(ac): no stand-alone value [F1, F2]"


N015 · Underlyings go beyond interest rates and currencies. Commodities, stock indices, credit ratings, and even weather can serve as underlyings.
> 1 N: "Underlyings: rates, FX, bonds, credit, commodities, indices [F1, F2]"


N016 · Broadly, three kinds of players enter derivatives: hedgers who cut risk, speculators who bet, and arbitrageurs who lock price gaps.
> 1 N: "Market players: Hedgers · Speculators · Arbitrageurs [F3]"


N017 · Now focus on a commercial bank treasury. Why does a bank enter derivatives? There are exactly three purposes.
> 1 M: Derivatives → Purposes [F4]


N018 · First, hedging its own balance sheet and ALM mismatches. Second, customer service for clients. Third, proprietary trading and market-making.
> 1 N: "3 Treasury uses: (1) Hedging/ALM (2) Customer service (3) Trading/Market-making [F4]"


N019 · Many of you are thinking derivatives can hedge any bank risk, even operational errors or legal enforceability. Pause and check.
> 1 C: Misconception check "Can derivatives hedge operational or legal risk?" · H: 3 s


N020 · No. Derivatives manage market risks like interest-rate and currency risk. Legal risk needs standard agreements; operational risk needs internal controls.
> 1 C: Trap card "Wrong: hedges all risks | Right: market risk only [F5]"


N021 · RBI rules split every participant into two camps: a market-maker or a user. What is the key difference?
> 1 S: two columns "Market-Maker" vs "User" · H: 3 s


N022 · A market-maker quotes prices to users and other market-makers, and need not hold any underlying risk of its own.
> 1 N: "Market-maker: quotes prices; no underlying needed [F6]"


N023 · In Rupee interest rate derivatives, market-makers are Scheduled Banks, Standalone Primary Dealers, NBFC Upper Layer, and five specified AIFIs.
> 1 N: "IRD Market-makers: Scheduled Banks, SPDs, NBFC-UL, EXIM/NABARD/NHB/SIDBI/NaBFID [F7]"


N024 · In forex derivatives, AD Category-One banks and AD Category-Three Primary Dealers are market-makers. What about the RBI itself?
> 1 G: "What about RBI?" · H: 3 s


N025 · Classic exam trap: RBI is the regulator, neither a market-maker nor a user. Every other participant is a user.
> 1 C: Trap card "RBI = Regulator (neither market-maker nor user) [F7]"


N026 · Users split into retail and non-retail. A resident corporate is non-retail with five hundred crore net worth or thousand crore turnover.
> 1 N: "Non-retail user: ₹500 cr net worth OR ₹1,000 cr turnover (plus FIs, insurers, MFs, non-resident entities) [F8]"


N027 · Quick chapter check. First: name the three purposes a bank treasury uses derivatives for. Second: is RBI a market-maker?
> 1 C: Pause Check 1 (Q1–Q2) · H: 5 s


N028 · Third, the twist: a resident company has four hundred crore net worth and one thousand two hundred crore turnover. Retail or non-retail?
> 1 C: Pause Check 1 (Q3 twist) · H: 4 s


N029 · Answers: hedging, customer service, and trading. RBI is neither. And the company is non-retail because turnover exceeds one thousand crore.
> 1 N: "Answers: 3 uses ✓ · RBI = regulator ✓ · Non-retail (turnover >= ₹1,000 cr) ✓ [F4, F7, F8]"


N030 · One thing to remember from this chapter: derivatives hedge market risk only, and RBI is never a market-maker.
> 1 B: box "Market risk only · RBI = regulator"

## Chapter 2 · OTC vs exchange-traded, daily M2M, membership, and the USD 5 million rule

N031 · Next chapter, starting with recall: what net worth or turnover makes a resident corporate a non-retail user?
> 1 S: recall card "Ch 1 recall: Non-retail corporate threshold?" · H: 3 s


N032 · Five hundred crore net worth or one thousand crore turnover. Now let us return to our two arguing officers.
> 1 N: "₹500 cr net worth OR ₹1,000 cr turnover ✓ [F8]"


N033 · Every derivative trades in one of two venues: Over-the-Counter, called O-T-C, or on a recognised stock exchange.
> 1 M: Derivatives → OTC vs exchange [F10, F11]


N034 · Note one statutory detail: an O-T-C derivative includes deals done on Electronic Trading Platforms, not just phone trades.
> 1 N: "OTC = non-exchange, INCLUDES ETPs [F10]"


N035 · Look at our see-saw. On the O-T-C side, two parties face each other directly, customising exact amounts and dates.
> 1 S: highlight left side of see-saw (OTC: bespoke, bilateral counterparty risk) [F11]


N036 · That custom fit comes with bilateral counterparty credit risk and lower price transparency, though usually no daily exchange cash margin.
> 1 N: "OTC: customised · bilateral risk · lower transparency · no daily exchange M2M [F11]"


N037 · Now look at the exchange side. A clearing corporation stands in the middle as Central Counterparty, eliminating bilateral default risk.
> 1 S: highlight right side of see-saw (Exchange: CCP in middle, standardised) [F11]


N038 · Contracts are standardised in lot size, tick, and expiry, giving high transparency and easy exit through an opposite trade.
> 1 N: "Exchange: standardised · CCP · transparent · liquid [F11]"


N039 · How does the clearing house stay safe? Upfront initial margin, extreme loss margin, and daily mark-to-market cash settlement on T-plus-one.
> 1 N: "Exchange safety: Initial Margin + ELM + Daily M2M in cash (T+1) [F12]" · B: underline "Daily M2M"


N040 · Let us work our first sum to see daily M2M in action. Remember our exporter from the opening?
> 1 S: calculation board "Sum 1 (Worked): Exporter Daily M2M (illustrative)" [F12, F22, F23]


N041 · She sells fifty lots of US-dollar rupee futures at eighty-four fifty, illustrative. One lot equals one thousand US dollars.
> 1 N: "Short 50 lots x USD 1,000 = USD 50,000 @ ₹84.5000 [F22]"


N042 · Day one settlement closes at eighty-four twenty. On your calculator: eighty-four point five minus eighty-four point two equals zero point three.
> 1 N: "Day 1 DSP = ₹84.2000 · Seller gain/USD: 84.5000 − 84.2000 = +0.3000"


N043 · Multiply zero point three by fifty thousand. That gives fifteen thousand rupees credited in cash on T-plus-one.
> 1 N: "0.3000 x 50,000 = +₹15,000.00 (credited T+1) [F12, F23]"


N044 · Day two closes at eighty-four sixty-five. Subtract from day one's eighty-four twenty, not the entry rate: minus zero point four five.
> 1 N: "Day 2 DSP = ₹84.6500 · Move: 84.2000 − 84.6500 = −0.4500"


N045 · Multiply by fifty thousand: minus twenty-two thousand five hundred rupees debited on T-plus-one. Net across two days: minus seven thousand five hundred.
> 1 N: "−0.4500 x 50,000 = −₹22,500.00 · Net: −₹7,500.00" · C: Error check "Common mistake: resetting from Day 0 instead of Day 1 DSP"


N046 · So Officer B was right: daily cash M2M means futures create real cash-flow swings before maturity, unlike most O-T-C forwards.
> 1 G: "Officer B was right" · N: "Exchange products CAN hedge contracted exposure [F13]"


N047 · Can any bank become a trading and clearing member of a SEBI currency derivatives exchange? Four strict rules apply.
> 1 S: eligibility checklist card "AD Cat-I Bank Currency Derivatives Membership [F14]"


N048 · Write this down: five hundred crore net worth, minimum capital including CCB, net NPA up to three percent, and three years profit.
> 1 N: "4 Norms: Net worth >= ₹500 cr · Min capital + CCB · Net NPA <= 3% · 3-yr net profit [F14]"


N049 · Watch the trap: older notes say ten percent CRAR, but RBI amended that to minimum prescribed capital including CCB.
> 1 C: Trap card "Old: 10% CRAR | Current: Min prescribed capital incl. CCB · Fail any norm → participate as client [F14]"


N050 · Now the biggest 2026 rule change: how much INR currency derivative can a user take without proving an underlying contract?
> 1 S: alert card "10 Oct 2026 Rule Change (Circular No. 25)" · H: 3 s


N051 · From ten October 2026, RBI cut that limit from one hundred million to five million dollars across all exchanges combined.
> 1 N: "No-proof cap: USD 100 m → USD 5 m across all exchanges / all ADs (10 Oct 2026) [F15]" · B: box "USD 5 million"


N052 · Even an official November 2026 magazine misprinted one hundred million. Teach yourself five million, and remember: cancelled INR hedges cannot be rebooked.
> 1 C: Trap card "Old/Misprint: USD 100 m | Current: USD 5 m · No rebooking of cancelled INR hedges (rollover allowed) [F15, F16]"


N053 · Pause check two. First: do ETP trades count as O-T-C or exchange? Second: what is the current no-proof currency derivative cap?
> 1 C: Pause Check 2 (Q1–Q2) · H: 5 s


N054 · Third, the twist: a bank meets net worth, capital, and NPA norms, but had a loss last year. Can it trade currency futures at all?
> 1 C: Pause Check 2 (Q3 twist) · H: 4 s


N055 · Answers: ETPs count as O-T-C. The cap is five million dollars. And yes, the bank can still participate, but only as a client.
> 1 N: "Answers: OTC ✓ · USD 5 m ✓ · Client only (fails 3-yr profit norm) ✓ [F10, F14, F15]"


N056 · One thing to remember: exchanges trade flexibility for a clearing house, daily M2M, and a five-million-dollar no-proof limit.
> 1 B: box "CCP + Daily M2M + USD 5 m cap"

## Chapter 3 · Forwards, futures, currency futures, and OTC G-Sec bond forwards

N057 · Chapter three opens with recall: if a user cancels an INR forward after October 2026, can the bank rebook it?
> 1 S: recall card "Ch 2 recall: Rebooking cancelled INR forwards?" · H: 3 s


N058 · No rebooking is permitted, though rollover on maturity is still allowed. Now let us compare forwards and futures closely.
> 1 N: "No rebooking · Rollover on maturity allowed ✓ [F16]"


N059 · Recall from Module A: an FX forward is an O-T-C contract settling more than two business days ahead at an agreed rate.
> 1 M: Derivatives → Forwards [F17] · N: "FX Forward: OTC, > 2 business days, binding on both sides [F17]"


N060 · And an FX swap combines two legs: a near exchange of principal and a reverse far exchange, basically spot plus forward.
> 1 N: "FX Swap = near leg + reverse far leg (principal only) [F18]"


N061 · A future is a standardised exchange forward. Both buyer and seller carry a binding linear obligation with unlimited gain or loss.
> 1 M: Derivatives → Futures [F19] · N: "Futures: binding obligation, linear symmetric payoff [F19]"


N062 · Quick history check that exams love: in which year did exchange-traded currency futures start in India?
> 1 G: "Which year?" · H: 3 s


N063 · Twenty-nine August 2008 on NSE, followed by BSE and MCX-SX in October 2008. Today exchanges offer seven currency pairs up to twelve months.
> 1 N: "NSE Currency Futures launch: 29 Aug 2008 · 7 pairs (4 INR + 3 cross) · <= 12 months [F20, F21]"


N064 · For US-dollar rupee futures, one lot is one thousand dollars, tick size is zero point zero zero two five, cash-settled in rupees.
> 1 N: "USD/INR: 1 lot = USD 1,000 · Tick = ₹0.0025 · Cash-settled in INR at FBIL Reference Rate [F22]"


N065 · Final settlement uses the FBIL Reference Rate, and at expiry futures and spot prices converge so basis drops to zero.
> 1 N: "Convergence at expiry: Basis → 0 [F22, F23]"


N066 · Let us try a faded sum. An importer buys twenty lots of USD-INR futures at eighty-four forty, illustrative.
> 1 S: calculation board "Sum 2 (Faded): Importer Final Settlement (illustrative)" [F22, F23]


N067 · At expiry, the FBIL Reference Rate is eighty-five fifteen. Press eighty-five point one five minus eighty-four point four: zero point seven five.
> 1 N: "Long 20 lots @ ₹84.4000 · FBIL = ₹85.1500 · Gain/USD = +₹0.7500" · H: 8 s


N068 · Now multiply zero point seven five by twenty thousand dollars, not twenty. The importer receives fifteen thousand rupees in cash.
> 1 N: "0.7500 x 20,000 = +₹15,000.00 received · Trap: forgetting x 1,000 lot size [F22, F23]"


N069 · One fresh 2025 development: RBI permitted O-T-C Bond Forwards in dated Government Securities from two May 2025.
> 1 N: "OTC G-Sec Bond Forwards: eff. 2 May 2025 · Dated G-Secs ONLY (no T-Bills) [F24]"


N070 · Only non-retail users may deal, physically settled via CCIL or cash-settled, and G-Secs covering a short bond forward still count for SLR.
> 1 N: "Non-retail only · Physical (CCIL) or cash · Cover G-Secs = SLR-eligible [F24, F25]"


N071 · Pause check three. First: which benchmark settles INR currency futures? Second: can you trade a Bond Forward on a 91-day T-Bill?
> 1 C: Pause Check 3 (Q1–Q2) · H: 5 s


N072 · Third, the twist: a trader buys USD-INR futures at eighty-four and FBIL settles at eighty-three fifty. Does the buyer receive or pay?
> 1 C: Pause Check 3 (Q3 twist) · H: 4 s


N073 · Answers: FBIL Reference Rate. No, Bond Forwards exclude Treasury Bills. And the buyer pays, because the rate fell below his buy price.
> 1 N: "Answers: FBIL ✓ · T-Bills excluded ✓ · Buyer pays (S < F) ✓ [F22, F23, F24]"


N074 · One thing to remember: forwards and futures both bind both sides, and INR currency futures always cash-settle at FBIL.
> 1 B: box "Both bind · Cash-settled at FBIL"

## Chapter 4 · Interest Rate Futures and hedging a bond book

N075 · Final chapter, starting with recall: when did exchange-traded currency futures launch on NSE?
> 1 S: recall card "Ch 3 recall: Currency futures NSE launch date?" · H: 3 s


N076 · Twenty-nine August 2008. Now switch from currencies to interest rates with Interest Rate Futures, or I-R-Fs.
> 1 M: Derivatives → IRF [F26] · N: "29 Aug 2008 ✓"


N077 · An I-R-F is a standardised exchange contract to buy or sell a notional bond or interest-rate instrument, including Money Market Futures.
> 1 N: "IRF = exchange-traded IRD on G-Sec, T-Bill, or MIBOR (incl. Money Market Futures) [F26]"


N078 · NSE first launched I-R-Fs in June 2003, but liquidity grew after cash-settled ten-year G-Sec futures launched in January 2014.
> 1 N: "Milestones: Jun 2003 (first launch) · Jan 2014 (cash-settled 10-yr G-Sec) · Jun 2015 (6-yr & 13-yr) [F27]"


N079 · Each I-R-F lot carries a notional face value of two lakh rupees, equal to two thousand units of one hundred rupees.
> 1 N: "1 IRF lot = ₹2,00,000 face value (2,000 units) · ELM 0.25% G-Sec / 0.015% T-Bill [F28]"


N080 · Under the 2025 Rupee IRD Directions effective March 2026, aggregate FPI net long I-R-F positions are capped at five thousand crore.
> 1 N: "Rupee IRD MD 2025 (eff. 1 Mar 2026): FPI aggregate net long IRF cap = ₹5,000 cr [F29]"


N081 · Now let us hedge a bond book. Your bank holds ten crore of ten-year G-Secs and fears RBI will hike rates.
> 1 S: bond-book hedge picture "Bank holds ₹10 cr 10-yr G-Sec · Fears rate hike" [F30]


N082 · Many of you want to buy I-R-F because you expect rates to go up. Stop and check the see-saw.
> 1 C: Misconception check "Rates ↑ → Buy IRF or Sell IRF?" · H: 3 s


N083 · When yields rise, bond prices fall. Buying I-R-F would double your loss. You must sell, or short, I-R-F so futures gain as prices drop.
> 1 C: Trap card "Wrong: Buy IRF (doubles loss) | Right: Short IRF (gains when bond price falls) [F30]"


N084 · Your turn: your bank holds ten crore G-Secs at one hundred one fifty, illustrative, and shorts five hundred IRF lots there.
> 1 S: calculation board "Sum 3 (Your Turn): ₹10 cr G-Sec + Short 500 IRF lots @ ₹101.50 (illustrative)" [F28, F30]


N085 · Yields jump and both prices drop to one hundred point two five. Compute the bond loss, the IRF gain, and the net result.
> 1 N: "New price = ₹100.25 · Drop = ₹1.25 per ₹100 · Pause and solve" · H: 15 s


N086 · Check your keys: one point two five times two thousand units times five hundred lots equals plus twelve lakh fifty thousand rupees.
> 1 N: "Bond loss: −₹12,50,000 · Short IRF gain: 1.25 x 2,000 x 500 = +₹12,50,000 · Net = ₹0.00 [F28, F30]"


N087 · The short I-R-F cash gain cancels the bond-book loss cleanly. No drama, just arithmetic doing its job.
> 1 G: "Net = ₹0.00"


N088 · Pause check four. First: what is one I-R-F lot's face value? Second: to hedge bonds against rising rates, buy or short?
> 1 C: Pause Check 4 (Q1–Q2) · H: 5 s


N089 · Answers: two lakh rupees per lot, and you short I-R-F so falling bond prices generate an offsetting futures gain.
> 1 N: "Answers: ₹2,00,000 ✓ · Short IRF ✓ [F28, F30]"


N090 · One thing to remember: rates up means bond prices down, so always short I-R-F to protect a bond portfolio.
> 1 B: box "Rates ↑ → Price ↓ → Short IRF"

## Close

N091 · Final mixed check across today's traps. First: can a retail company trade O-T-C G-Sec Bond Forwards? Second: what is the FPI net long I-R-F cap?
> 1 C: Mixed Check (Q1–Q2) · H: 5 s


N092 · Third: what is the exchange no-proof currency cap, and can a bank without three years profit still join as a client?
> 1 C: Mixed Check (Q3–Q4) · H: 5 s


N093 · Answers: no, Bond Forwards are non-retail only; FPI cap is five thousand crore; no-proof cap is five million dollars; and yes, as a client.
> 1 N: "Mixed answers: Non-retail only ✓ · ₹5,000 cr ✓ · USD 5 m ✓ · Client ✓ [F14, F15, F24, F29]"


N094 · Now fill the blank derivatives branch of our trading-desk map from memory: five nodes we built today.
> 1 M: blank Derivatives branch (5 empty boxes) · H: 5 s


N095 · Check your five nodes: Purposes, O-T-C versus Exchange, Forwards, Futures, and Interest Rate Futures.
> 1 M: full Derivatives branch revealed (Purposes · OTC vs exchange · Forwards · Futures · IRF)


N096 · You can now classify users, compare O-T-C and exchange rules, apply the five-million cap, and compute futures payoffs.
> 1 C: "You can now" summary card (C6.1, C6.2, C6.3, C5.4, C2.1)


N097 · Remember our scope: options, swaps, FRAs, and the remaining 2026 OTC rules come in the upcoming classes of this module.
> 1 N: "Not today: FRAs/Swaps (next class) · Options & full 2026 OTC rules (upcoming)"


N098 · Tonight's homework: draw the five-node branch on one page, and run one short-futures M2M calculation on your basic calculator.
> 1 C: Homework card "Draw 5 nodes + 1 short-futures M2M sum"


N099 · Next class, a bank holds fixed home loans and floating deposits as rates rise: should it pay fixed or receive fixed?
> 1 C: Preview card "Next class: FRAs & Swaps — Pay fixed or receive fixed?"


N100 · Your see-saw and futures ticket are locked in. Put the pen down, rest well, and I will see you next class.
> 1 S: closing card · fade out