# C09 · "Options: choice, premium, and payoff" · CLASS EDITION (script c1, with cue sheet)
* Status: **c1 GEMINI DRAFT, gate PASS, full review pending** (owner, 2026-11-24: "save as drafts, check later"). Not locked: do not voice until reviewed.
* Plan: course/bfm/C/plans_C.md §C09 (v4 split: C08 = basics/forwards/futures; C08b = FRAs/swaps; C09 = options; C09b = RBI derivative rules & 2025–26 changes; v3 additions: premium = intrinsic + time value & drivers, structured vs vanilla & embedded options, option basics incl. max loss, moneyness for calls & puts separately, European vs American incl. India's exchange style, option payoff case set incl. covered call).
* Syllabus: C6.3 (Options: calls, puts, European vs American, moneyness, intrinsic & time value, pricing drivers, payoff vs profit, four positions, vanilla vs structured, embedded options) and C5.4 (hedging with options keeps the upside: protective put, covered call).
* Facts: C09_fact_sheet, rows cited as [F1]–[F32]. Sums: C09_numericals (all 6 sums verified two independent ways in Python Decimal). Practice: C09_practice. Map nodes: C09_map_nodes.
* Rule version (opening card): "RBI MD – Risk Management and Inter-Bank Dealings (updated 1 Oct 2026) · RBI MD – Rupee Interest Rate Derivatives Directions 2025 (updated 22 Sep 2026) · RBI MD – Market-makers in OTC Derivatives 2021 (updated 21 Feb 2025) · RBI Investment Portfolio Directions 2025 (updated 1 Oct 2026) · SEBI Circular CIR/DNPD/6/2010 · BSE/NSE Exchange Contract Specs (2025–26) · as at 31 December 2026".
* Greeting / goodbye (new, verified unused in greetings.md): greeting "Hello, everyone. Keep a pen and your basic calculator close; tonight we unpack options, one choice at a time."; goodbye "That completes our options toolkit, from premium to payoff. Close your notebook, rest well, and I'll meet you in the next class."
* Story: Investor Meera (illustrative) holds 100 shares of Deccan Infra (illustrative) bought at ₹500 each and wants extra income without selling them. Later, treasury desk examples use USD-INR currency options (illustrative rates). All names, prices, and amounts are illustrative.
* Holds: questions 3 s; one-step sums 8 s; "your turn" 15 s; blank map 5 s.
* Say it right: "R-B-I", "S-E-B-I", "N-S-E", "B-S-E", "F-B-I-L"; "I-T-M", "A-T-M", "O-T-M"; "O-T-C"; "C-E", "P-E"; "U-S-D I-N-R"; "eighty-four point zero zero" for ₹84.0000; "Black-Scholes" as "Black-Sholz".
* Not in this video: RBI's 2025–26 derivative rule changes — FERR, no rebooking, USD 5 million limit, PV01 cap removal, novation, ISDA precedence (next class); forwards, futures, FRAs, and swaps (earlier classes).
* Length: 1,891 spoken words (verified by linter; 116 lines; max 24 words/line; 0 lines > 25 words; 0 spoken lesson codes; 0 exclamation marks) + ~2.4 min of holds ≈ 15.0 min at 150 wpm. Chapters: warm-up (~1.1 min) · 1 Calls, puts, and styles (~3.0 min) · 2 Moneyness and premium (~3.3 min) · 3 Payoff, profit, and four positions (~3.6 min) · 4 Hedging, vanilla vs structured (~2.5 min) · close (~1.1 min).
* Cue sheet: S scene · N note · G glow · M map · C card · B board mark · H hold. Stable pictures: the four hockey-stick payoff lines (long call, long put, short call, short put) and the two-colour premium bar (intrinsic value + time value).


---

## Warm-up

N001 · [warmly] Hello, everyone. Keep a pen and your basic calculator close; tonight we unpack options, one choice at a time.
> 0 C: rule-version card ("as at 31 December 2026") · 1 S: notebook page; title "Options: Choice, Premium, and Payoff"


N002 · Phone on silent. Two quick recall questions first.
> 1 S: desk icon + 8-function calculator icon


N003 · From last class on swaps: fixed-rate loans, floating deposits, fearing rising rates. Pay fixed or receive fixed?
> 1 S: recall card "Fixed loans, floating deposits, rising rates → ?" · H: 3 s


N004 · Pay fixed, receive floating. That locks your floating deposit cost.
> 1 N: "Pay fixed, receive floating ✓"


N005 · From treasury risk control earlier: which open position limit is larger, daylight or overnight?
> 1 S: recall card "Daylight limit vs Overnight limit?" · H: 3 s


N006 · Daylight limit, because dealers square intraday positions before market close. Easy start.
> 1 N: "Daylight > Overnight ✓"


N007 · Calls, puts, moneyness, and option payoffs were tested across four recent exam cycles, including case sets.
> 1 C: exam-signal badge "Tested Jun 2023–Dec 2025: calls, puts, ITM/ATM/OTM, covered call"


N008 · Tonight you will read calls and puts, split premiums, compute payoffs and profits, and hedge while keeping upside.
> 1 N: goal bar "Styles → Moneyness & Premium → Payoff & Profit → Hedging"


N009 · Picture Meera, an illustrative investor, holding one hundred shares of Deccan Infra bought at five hundred rupees.
> 1 S: portfolio card "Meera (illustrative) · 100 shares @ ₹500"


N010 · She expects the share to stay flat for a month and wants extra income without selling.
> 1 N: "Goal: extra income, keep shares"


N011 · Should she buy a put option, or sell a call option? Pick one.
> 1 S: split buttons "Buy a put" · "Sell a call" · H: 3 s


N012 · Hold that choice. By chapter four, we solve Meera's exact rupees on your calculator.
> 1 G: Meera's card pulses once

## Chapter 1 · Call, Put, and Option Styles

N013 · Chapter one. How does an option differ from a forward or a future?
> 1 S: chapter title "1 · Call, Put, and Option Styles" · 2 M: branch node "Derivatives → Options"


N014 · Forwards and futures bind both sides. An option gives the buyer a right, with no obligation.
> 1 N: "Option = Buyer's right, NO obligation" [F1] · 2 B: underline "right"


N015 · The seller, or writer, accepts the binding obligation if the buyer chooses to exercise.
> 1 N: "Seller (writer) = binding obligation" [F1]


N016 · For that privilege, the buyer pays an upfront fee called the premium to the seller.
> 1 N: "Upfront fee = Premium (Buyer → Seller)" [F1, F4]


N017 · A call option gives the buyer the right to buy the underlying at a fixed strike price.
> 1 C: names-first card "Call Option = Right to BUY at Strike (K)" [F2, F5]


N018 · A put option gives the buyer the right to sell the underlying at a fixed strike price.
> 1 C: names-first card "Put Option = Right to SELL at Strike (K)" [F3, F5]


N019 · Quick check: if you expect a stock or currency to rise, do you buy a call or a put?
> 1 S: question prompt "Expect price to RISE → Call or Put?" · H: 3 s


N020 · Buy a call, because buying at a lower strike pays off when prices climb.
> 1 N: "Bullish → Buy Call · Bearish → Buy Put" [F2, F3]


N021 · Remember this asymmetry: the buyer's maximum loss is strictly limited to the premium paid.
> 1 N: "Buyer max loss = Premium paid" [F4] · 2 B: box "Premium paid"


N022 · On the other side, the seller's maximum gain is strictly limited to that same premium received upfront.
> 1 N: "Seller max gain = Premium received" [F4]


N023 · Now check exercise style. Many learners think European and American options mean where the contract trades.
> 1 C: trap card "Myth: European = Europe · American = USA" [F6]


N024 · Geography has nothing to do with it. Style only tells you when the buyer can exercise.
> 1 B: strike through myth · 2 N: "Style = WHEN you can exercise" [F6]


N025 · A European option exercises only on expiry day. An American option exercises on any day up to expiry.
> 1 C: compare card "European: expiry day only · American: any day up to expiry" [F6]


N026 · A Bermudan option sits in between, exercisable only on specified dates.
> 1 N: "Bermudan = specified dates only" [F6]


N027 · Which style do India's exchange-traded currency options and equity options use?
> 1 S: India exchange badge "NSE / BSE Currency & Equity Options → ?" · H: 3 s


N028 · European style. Under R-B-I directions and S-E-B-I rules, Indian exchange currency, equity, and retail O-T-C options are all European.
> 1 N: "India NSE/BSE Currency (USD-INR etc.) & Equity (CE/PE) = European" [F7, F8]


N029 · Exchange currency options cover seven pairs, cash-settled in rupees at the F-B-I-L reference rate; lot size is one thousand dollars.
> 1 N: "7 FX pairs · Cash-settled INR @ FBIL · Lot = USD 1,000" [F7]


N030 · Pause check, chapter one. First: who carries the binding obligation in an option contract?
> 1 S: pause-check banner "Ch 1 Check (1/2)" · H: 3 s


N031 · The option seller or writer, because the buyer holds only a right.
> 1 N: "1. Seller (writer) ✓" [F1]


N032 · Second: can you exercise an Indian exchange U-S-D I-N-R call ten days before expiry?
> 1 S: pause-check banner "Ch 1 Check (2/2)" · H: 3 s


N033 · No, because Indian exchange currency options are European and exercise only on expiry day.
> 1 N: "2. No — European style ✓" [F6, F7]


N034 · One thing to remember: buyer holds the right with capped loss; India's exchange options are European.
> 1 G: Ch 1 summary strip

## Chapter 2 · Moneyness and the Two Halves of Premium

N035 · Chapter two. Recall from chapter one: what is the maximum amount an option seller can ever earn?
> 1 S: chapter title "2 · Moneyness and the Two Halves of Premium" · 2 S: recall card · H: 3 s


N036 · Only the premium received upfront. Now compare spot price against strike price — called moneyness.
> 1 N: "Seller max gain = Premium ✓" [F4] · 2 S: scale "Spot (S) vs Strike (K)"


N037 · Start with a call, the right to buy at K. When is a call immediately valuable?
> 1 S: Call moneyness ladder · H: 3 s


N038 · When spot exceeds strike. For a call: spot above strike is In-the-Money, equal is At-the-Money, below is Out-of-the-Money.
> 1 C: names-first card "Call: S > K (ITM) · S = K (ATM) · S < K (OTM)" [F9]


N039 · Watch the classic exam trap. Many assume a put is also In-the-Money when spot exceeds strike.
> 1 C: trap card "Wrong: Put ITM when S > K" [F10]


N040 · Flip it. A put is the right to sell at K. Selling at five hundred when market is four eighty wins.
> 1 B: strike through wrong line · 2 N: "Put = right to SELL high" [F3, F10]


N041 · So a put is the mirror: spot below strike is In-the-Money, equal is At-the-Money, above is Out-of-the-Money.
> 1 C: mirror card "Put: S < K (ITM) · S = K (ATM) · S > K (OTM)" [F10] · 2 B: box "Put ITM: S < K"


N042 · Now split option premium into two blocks. Write this down: Premium equals Intrinsic Value plus Time Value.
> 1 S: two-colour bar "Premium = Intrinsic Value + Time Value" [F11]


N043 · Intrinsic value is immediate exercise value. Because you never exercise at a loss, it is never negative.
> 1 N: "Intrinsic Value ≥ 0 always" [F12]


N044 · For a call, it is max of spot minus strike or zero. For a put, strike minus spot or zero.
> 1 N: "Call IV = max(S − K, 0) · Put IV = max(K − S, 0)" [F12]


N045 · Every At-the-Money and Out-of-the-Money option has zero intrinsic value; its entire premium is time value.
> 1 N: "ATM & OTM → IV = 0; Premium = 100% Time Value" [F12]


N046 · Time value is Premium minus Intrinsic Value. It pays for the chance of a favourable move before expiry.
> 1 N: "Time Value = Premium − Intrinsic Value" [F11, F13]


N047 · Quick sum one. Illustrative Deccan Infra call: spot five twenty-five, strike five ten, premium twenty-two rupees.
> 1 S: Sum 1 data card "Call (illustrative): S = ₹525 · K = ₹510 · Premium = ₹22"


N048 · Five two five minus five one zero equals fifteen rupees intrinsic value. Twenty-two minus fifteen equals seven rupees time value.
> 1 N: "525 − 510 = ₹15 (IV) · 22 − 15 = ₹7 (TV)" [F11, F12] · 2 G: bar splits ₹15 / ₹7


N049 · As expiry nears, time value decays daily and hits zero at expiry. Options are eroding assets.
> 1 N: "Time decay (Theta) → TV = 0 at expiry" [F13, F31]


N050 · Under Black-Scholes used by Indian exchanges, five inputs drive premium: spot, strike, time, volatility, and interest rate.
> 1 C: 5-driver card "Black-Scholes: S · K · T · Volatility (σ) · Rate (r)" [F14]


N051 · Higher volatility lifts both call and put premiums, because wider swings raise payoff odds while losses stay capped.
> 1 N: "Volatility ↑ → Call ↑ AND Put ↑ (positive Vega)" [F14, F16, F31]


N052 · Sneaky trap: is forward premium one of the five Black-Scholes drivers of option price?
> 1 C: trap card "Is Forward Premium a Black-Scholes driver?" · H: 3 s


N053 · No. The five inputs are spot, strike, time, volatility, and interest rates; interest rates already capture carry.
> 1 N: "Trap: Forward premium is NOT a separate driver" [F14, F15]


N054 · Pause check, chapter two. First: spot is four eighty, strike five hundred. Is a put I-T-M or O-T-M?
> 1 S: pause-check banner "Ch 2 Check (1/3)" · H: 3 s


N055 · In-the-Money, because spot is below strike, giving twenty rupees of intrinsic value.
> 1 N: "1. Put ITM (IV = ₹20) ✓" [F10, F12]


N056 · Second: an Out-of-the-Money call trades at nine rupees. What is its intrinsic value?
> 1 S: pause-check banner "Ch 2 Check (2/3)" · H: 3 s


N057 · Zero, because intrinsic value never goes below zero; all nine rupees are time value.
> 1 N: "2. ₹0 (all ₹9 is time value) ✓" [F12]


N058 · Third: volatility jumps suddenly. What happens to a put option's premium?
> 1 S: pause-check banner "Ch 2 Check (3/3)" · H: 3 s


N059 · It rises, because higher volatility lifts both calls and puts.
> 1 N: "3. Rises (higher σ lifts calls & puts) ✓" [F14]


N060 · One thing to remember: puts flip moneyness, intrinsic value stops at zero, and volatility lifts both sides.
> 1 G: Ch 2 summary strip

## Chapter 3 · Payoff, Profit, and the Four Positions

N061 · Chapter three. Recall from chapter two: on expiry day, what is any option's time value?
> 1 S: chapter title "3 · Payoff, Profit, and the Four Positions" · 2 S: recall card · H: 3 s


N062 · Zero. So on expiry day, payoff equals intrinsic value alone.
> 1 N: "At expiry: TV = 0 → Payoff = Intrinsic Value" [F13, F17]


N063 · Now guard against the second big misconception: confusing gross payoff with net profit.
> 1 C: trap card "Payoff ≠ Profit" [F17]


N064 · Payoff ignores upfront premium. Buyer net profit is Payoff minus Premium; seller net profit is Premium minus Payoff.
> 1 N: "Buyer Profit = Payoff − Premium · Seller Profit = Premium − Payoff" [F17] · 2 B: box formula


N065 · Picture four hockey-stick lines: Long Call, Long Put, Short Call, and Short Put.
> 1 S: 2×2 grid of four hockey-stick payoff diagrams [F18–F21]


N066 · Long Call breaks even at strike plus premium; loss caps at premium, profit is unlimited.
> 1 G: Long Call hockey stick · 2 N: "Long Call BE = K + P · Max Loss = P · Max Gain = Unlimited" [F18]


N067 · Long Put breaks even at strike minus premium; loss caps at premium, profit rises as price falls.
> 1 G: Long Put hockey stick · 2 N: "Long Put BE = K − P · Max Loss = P · Max Gain = K − P" [F19]


N068 · Short Call and Short Put flip below zero: gain caps at premium, while seller losses are open-ended.
> 1 G: Short Call & Short Put hockey sticks · 2 N: "Short Call: unlimited loss · Short Put: large loss up to K − P" [F20, F21, F22]


N069 · That open-ended risk is why exchanges collect daily S-P-A-N margin from writers, while buyers pay premium on T plus one.
> 1 N: "Buyer pays premium (T+1) · Seller posts SPAN + ELM margin" [F32]


N070 · Sum two, full worked. Illustrative U-S-D I-N-R European call: ten lots, meaning ten thousand dollars.
> 1 S: Sum 2 data card "Long Call (illustrative): 10 lots = USD 10,000 · K = ₹84.0000 · Prem = ₹0.6000 · S_T = ₹85.2000"


N071 · Strike eighty-four rupees, premium sixty paise per dollar, expiry F-B-I-L rate eighty-five twenty.
> 1 N: "K = 84.0000 · P = 0.6000 · S_T = 85.2000"


N072 · Unit payoff: eight five point two minus eight four equals one point two zero rupees.
> 1 N: "Unit Payoff: 85.2 − 84 = ₹1.2000" [F17]


N073 · Net profit per dollar: one point two minus zero point six equals zero point six zero rupees.
> 1 N: "Unit Profit: 1.2 − 0.6 = ₹0.6000" [F17, F18]


N074 · Multiply by ten thousand dollars: buyer gains six thousand rupees; seller loses six thousand rupees.
> 1 N: "Buyer Net Profit = 0.6 × 10,000 = +₹6,000.00 · Seller = −₹6,000.00" [F18, F20, F22]


N075 · Cross-check: breakeven is eighty-four sixty. Eighty-five twenty minus eighty-four sixty times ten thousand gives six thousand rupees. Exact match.
> 1 N: "Check: (85.20 − 84.60) × 10,000 = ₹6,000.00 ✓"


N076 · Commonest error: stopping at twelve thousand rupees, which is gross payoff before deducting six thousand premium.
> 1 C: error-analysis note "Common wrong answer: ₹12,000 (forgot ₹6,000 premium)" [F17]


N077 · Sum three, faded: Deccan Infra put, one hundred shares, strike five hundred, premium eighteen, expiry spot four sixty-five.
> 1 S: Sum 3 data card "Long Put (illustrative): 100 shares · K = ₹500 · Prem = ₹18 · S_T = ₹465" · H: 8 s


N078 · Five hundred minus four sixty-five equals thirty-five payoff. Minus eighteen equals seventeen, times one hundred equals one thousand seven hundred rupees.
> 1 N: "Payoff: 500 − 465 = ₹35 · Profit: (35 − 18) × 100 = +₹1,700.00" [F19]


N079 · Your turn, Sum four. Call on one hundred shares: strike five twenty, premium fourteen, expiry spot five zero five. Find buyer profit.
> 1 S: "YOUR TURN · Sum 4: Call 100 shares · K = ₹520 · P = ₹14 · S_T = ₹505" · H: 15 s


N080 · Spot five zero five sits below strike five twenty, so the call lapses. Payoff is zero; net loss is one thousand four hundred rupees.
> 1 N: "Lapses (OTM) · Payoff = ₹0 · Profit = −14 × 100 = −₹1,400.00 ✓" [F17, F18]


N081 · The buyer walks away and loses only the premium — never fifteen or twenty-nine rupees per share.
> 1 N: "Common trap: writing −₹15 × 100 or −₹29 × 100" [F4, F18]


N082 · Pause check, chapter three. First: a put has strike ninety and premium four. What is breakeven?
> 1 S: pause-check banner "Ch 3 Check (1/2)" · H: 3 s


N083 · Eighty-six, because put breakeven is strike minus premium.
> 1 N: "1. ₹86 (K − P) ✓" [F19]


N084 · Second: which single option position carries theoretically unlimited loss?
> 1 S: pause-check banner "Ch 3 Check (2/2)" · H: 3 s


N085 · A naked short call, because underlying prices have no ceiling.
> 1 N: "2. Naked Short Call ✓" [F20]


N086 · One thing to remember: payoff stops at zero, profit always counts premium, and naked call writers face unlimited risk.
> 1 G: Ch 3 summary strip

## Chapter 4 · Hedging, Vanilla vs Structured, and Embedded Options

N087 · Chapter four. Recall from chapter three: if a call expires Out-of-the-Money, who keeps the premium?
> 1 S: chapter title "4 · Hedging, Vanilla vs Structured, and Embedded Options" · 2 S: recall card · H: 3 s


N088 · The seller. Now ask why treasurers pay option premium instead of booking a free forward.
> 1 N: "Seller keeps premium ✓" [F22]


N089 · A forward locks both sides; buying an option sets a safety floor while keeping favourable upside open.
> 1 C: compare card "Forward: locks rate · Option: hedges downside + keeps upside" [F23]


N090 · Two hedging strategies matter for exams. First, a protective put: hold the asset and buy a put.
> 1 C: names-first card "Protective Put = Long Asset + Long Put (floor + open upside)" [F24]


N091 · Like car insurance, the put caps worst-case loss while keeping upside open — though it covers price risk, not physical damage.
> 1 N: "Analogy: car insurance (limit: covers price drop only)" [F23, F24]


N092 · Second, a covered call: hold the asset and sell a call. Remember Meera from our opening?
> 1 C: names-first card "Covered Call = Long Asset + Short Call (income + capped upside)" [F25]


N093 · If you picked "sell a call", you nailed it. Writing a call against shares she owns is a covered call.
> 1 G: Meera's card returns · 2 N: "Meera's choice: Covered Call ✓" [F25]


N094 · Sum five, Meera's numbers: one hundred shares bought at five hundred, plus one hundred short calls, strike five twenty, premium fifteen.
> 1 S: Sum 5 data card "Covered Call: 100 shares @ ₹500 · Short 100 Calls K = ₹520 · Prem = ₹15"


N095 · Scenario A: shares jump to five forty. Stock gains forty per share, four thousand rupees.
> 1 N: "Scenario A (S_T = ₹540): Stock P&L = (540 − 500) × 100 = +₹4,000" [F25]


N096 · On the short call, she pays twenty payoff against fifteen premium, losing five per share, five hundred rupees.
> 1 N: "Short Call P&L = (15 − 20) × 100 = −₹500" [F20]


N097 · Combined net profit: four thousand minus five hundred equals three thousand five hundred rupees. Her upside caps at strike minus cost plus premium.
> 1 N: "Net Profit = ₹4,000 − ₹500 = +₹3,500 · Check: (520 − 500 + 15) × 100 = +₹3,500 ✓" [F25]


N098 · Scenario B: shares slip to four ninety. Stock loses one thousand rupees, the call lapses, and she keeps one thousand five hundred premium.
> 1 N: "Scenario B (S_T = ₹490): Stock −₹1,000 + Call +₹1,500" [F25]


N098a · Net profit is five hundred rupees; the premium cushioned the drop down to breakeven four eighty-five.
> 1 N: "Net Profit = +₹500 (BE = ₹485) ✓" [F25]


N099 · One vital regulatory line from R-B-I's O-T-C market-maker directions: plain-vanilla versus structured options.
> 1 C: compare card "Plain-Vanilla (Generic) vs Structured Derivatives" [F27]


N100 · Plain-vanilla European calls, puts, interest rate caps, and floors are generic derivatives. Retail users may only buy them.
> 1 N: "Retail: BUY plain-vanilla European calls/puts/caps/floors only" [F27, F28, F29]


N101 · Any other O-T-C package — barriers, digitals, or multi-component structures — is a structured derivative, allowed only for non-retail users with enhanced due diligence.
> 1 N: "Non-retail: covered options & structured (NO leveraged derivatives)" [F26, F27, F28]


N102 · Leveraged derivatives are strictly barred. And one bond link: callable and putable bonds carry embedded options inside debt.
> 1 N: "Leveraged = barred · Callable/putable bonds = embedded options (SPPI tested whole)" [F28, F30]


N103 · Pause check, chapter four. First: does a covered call cap your upside or cap your downside?
> 1 S: pause-check banner "Ch 4 Check (1/2)" · H: 3 s


N104 · It caps your upside at the strike price, while the premium only cushions a small drop.
> 1 N: "1. Caps upside ✓" [F25]


N105 · Second: can a retail user write a covered foreign exchange call option with an Indian bank?
> 1 S: pause-check banner "Ch 4 Check (2/2)" · H: 3 s


N106 · No; under R-B-I directions, covered F-X options and structured options are permitted only for non-retail users.
> 1 N: "2. No — non-retail users only ✓" [F26, F28]

## Close

N107 · Mixed check: an Indian exchange U-S-D I-N-R put has strike eighty-five, premium one rupee, and expiry spot eighty-four.
> 1 S: mixed-check card "USD-INR Put (European): K = ₹85 · P = ₹1 · S_T = ₹84"


N108 · Is it I-T-M, what is net profit per dollar, and could the buyer exercise a week early?
> 1 S: three blanks "Moneyness? · Net profit? · Early exercise?" · H: 5 s


N109 · I-T-M because spot is below strike; net profit is zero, one minus one; and no early exercise because it is European.
> 1 N: "ITM ✓ · Net profit = ₹0 (breakeven) ✓ · No (European) ✓" [F7, F10, F19]


N110 · Blank mind map on screen. Five seconds to recall our four branches: Styles, Moneyness and Premium, Four Payoffs, and Hedging and Structures.
> 1 M: blank Options mind-map branch · H: 5 s · 2 M: full Options branch reveals [F1–F32]


N111 · You can now classify calls and puts, split premiums, solve payoff and covered-call sums, and separate vanilla from structured options.
> 1 N: "C6.3 & C5.4 Options complete · Scope: RBI rules & 2026 changes in next class"


N112 · Homework tonight: Meera holds one hundred shares at five hundred and buys one hundred puts, strike five hundred, premium twelve.
> 1 C: homework card "Protective Put: 100 shares @ ₹500 + Long Put K = ₹500, P = ₹12 · S_T = ₹450"


N112a · Find her net loss if shares fall to four fifty at expiry.
> 1 N: "Find net P&L at S_T = ₹450"


N113 · Next class brings R-B-I's derivative rulebook: if an exporter cancels a currency derivative in November twenty twenty-six, can the bank rebook it?
> 1 C: next-class teaser "Cancel & rebook in Nov 2026 — allowed or barred?"


N114 · [warmly] That completes our options toolkit, from premium to payoff. Close your notebook, rest well, and I'll meet you in the next class.
> 1 S: end card "C09 complete · See you in the next class"