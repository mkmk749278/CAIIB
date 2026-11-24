# C08b · "Swapping the risk: FRAs, IRS and currency swaps" · CLASS EDITION (script c1, with cue sheet)
* Status: **c1 GEMINI DRAFT, gate PASS, full review pending** (owner, 2026-11-24: "save as drafts, check later"). Not locked: do not voice until reviewed.
* Plan: course/bfm/C/plans_C.md §C08b (v4 split from C08: FRAs, IRS, currency swaps, swaps in ALM, USD/INR FX swap funding; all 7 v3 additions covered). Course order v4: C08 → C08b → C09.
* Syllabus: C6.3 (FRA), C6.4 (interest rate and currency swaps; FBIL benchmarks), C5.4 (use of derivatives in risk management: decision grid, bond-book hedge), C7.2 (derivatives in ALM), C2.1 (FX swap used to fund a rupee need).
* Facts: C08b_fact_sheet, rows cited as [F1]–[F39]. Sums: C08b_numericals, checked two ways. Practice: C08b_practice.
* Rule version (opening card): "RBI Master Direction – Rupee Interest Rate Derivatives Directions, 2025 (effective 1 Mar 2026, updated 22 Sep 2026) · RBI Master Direction – Risk Management and Inter-Bank Dealings (updated 1 Oct 2026) · RBI Commercial Banks – ALM Directions, 2025 (28 Nov 2025) · RBI Market-makers in OTC Derivatives Directions, 2021 · RBI Financial Benchmark Administrators Directions, 2023 · FBIL Overnight MIBOR (4 Aug 2025) & SORR (7 Jul 2025) · FIMMDA SORR-OIS Conventions (18 Dec 2025) · as at 31 December 2026".
* Greeting / goodbye (new, checked against course/bfm/greetings.md): greeting "Welcome back to the trading desk, everyone. Keep your calculator handy; today we trade streams of interest instead of buying bonds."; goodbye "That's the swap desk wrapped up for tonight. Put the calculator down, rest well, and I'll see you in the next class."
* Story: Southern Commercial Bank (illustrative), Treasury Desk in Hyderabad. Head of Treasury Raghav holds ten-year fixed-rate home loans funded by six-month floating-rate deposits, while the Monetary Policy Committee signals tighter rates. Later, his corporate client Deccan Motors (illustrative) has a dollar borrowing to hedge, and Raghav needs short-term rupees for ninety days while sitting on surplus dollars. All names, rates, and amounts are illustrative.
* Holds: questions at least 3 s; one-step sums 8 s; "your turn" 15 s; map 3–5 s per node.
* Say it right: "F-R-A" (letter by letter); "I-R-S"; "O-I-S"; "MY-bor" for MIBOR; "S-O-R-R"; "M-M-I-F-O-R" for Modified MIFOR; "F-B-I-L"; "A-L-M"; "I-R-F"; "three by six F-R-A" for 3×6 FRA; "eighty-five forty-five" for ₹85.45.
* Not in this video: Options (next class, C09); full RBI derivative compliance rules — FERR 20%, no rebooking, USD 5 m unhedged limit, ISDA precedence, LEI/UTI, PV01 cap removal (C09b); full ALM gap buckets and duration gap numericals (D05–D06b); credit derivatives (B11b).
* Length: 1,907 spoken words + ~2.3 min of holds ≈ 15.0 min at 150 wpm. Chapters: warm-up (~1.1 min) · 1 FRAs, IRS, OIS and FBIL (~4.1 min) · 2 decision grid and ALM (~3.1 min) · 3 currency swaps and FX swap funding (~3.8 min) · 4 case and mixed check (~1.4 min) · close (~1.3 min).
* Cue sheet: S scene · N note · G glow · M map · C card · B board mark · H hold. Picture: Module C trading desk; Chapter 1 two crossing arrows between two banks (fixed one way, floating the other) with an FBIL benchmark clock; Chapter 2 a 2×2 decision grid (position × rate view) beside a two-bucket ALM balance sheet; Chapter 3 three currency-swap boxes (POS, COS, CCS) and a near-leg / far-leg FX swap bridge; Chapter 4 branch case board.


---

## Warm-up

N001 · [warmly] Welcome back to the trading desk, everyone. Keep your calculator handy; today we trade streams of interest instead of buying bonds.
> 0 C: rule-version card · 1 S: trading desk notebook page; title "Derivatives 2: FRAs and swaps"


N002 · First, a quick check from last class. Does an exchange-traded future carry counterparty default risk?
> 1 S: recall card "exchange future: counterparty risk?" · H: 3 s


N003 · No. The clearing house sits in the middle and marks positions to market every day.
> 1 N: "clearing house + daily M2M ✓"


N004 · Now one from a few classes back. When yields rise, what happens to a fixed-rate bond's price?
> 1 S: see-saw icon (yield purple, price gold) · H: 3 s


N005 · The price falls. Keep that see-saw handy; we will use it soon.
> 1 G: see-saw tilts (yield up, price down)


N006 · Picture Raghav's treasury desk in Hyderabad. His bank holds ten-year fixed home loans, funded by six-month floating deposits.
> 1 S: Southern Commercial Bank desk (illustrative); left shelf "6m floating deposits", right shelf "10y fixed home loans"


N007 · The Monetary Policy Committee hints at rate hikes. Raghav opens an interest rate swap to protect his margin.
> 1 S: rate-hike arrow pointing up · 2 C: card "RBI rate hike risk · illustrative"


N008 · Here's today's question. Should Raghav pay fixed and receive floating, or receive fixed and pay floating? Lock your answer.
> 1 S: two buttons "Pay Fixed" · "Receive Fixed" · H: 3 s


N009 · Hold that choice. Derivatives carried eight questions in a recent full paper, and today we master FRAs, swaps, and three sums.
> 1 N: "Derivatives: 8 questions in recent full paper · 3 worked sums today"

## Chapter 1 · FRAs, Interest Rate Swaps, and FBIL

N010 · Chapter one. Start with the Forward Rate Agreement, or F-R-A.
> 1 S: chapter title "1 · FRAs, IRS and FBIL" · 2 C: names-first card "Forward Rate Agreement (FRA)" [F2]


N011 · An F-R-A is a cash-settled over-the-counter contract locking an interest rate on a notional principal for one future period.
> 1 N: "FRA = OTC · cash-settled · 1 future period · notional principal" [F2]


N012 · Say a bank buys a three by six F-R-A. That locks a three-month rate starting three months from today.
> 1 S: timeline 0 → 3m (start/settlement) → 6m (end); bracket "3×6 FRA = 91 days" [F3]


N013 · What if you want to hedge ten consecutive six-month periods over five years?
> 1 S: timeline stretches to 5 years with 10 reset dots · H: 3 s


N014 · You use an Interest Rate Swap, or I-R-S, exchanging a stream of interest payments on a notional principal across multiple periods.
> 1 C: names-first card "Interest Rate Swap (IRS)" [F4] · 2 N: "FRA = 1 period · IRS = many periods" [F5]


N015 · Many of you are thinking: in a fifty-crore swap, both banks wire fifty crore to each other on day one.
> 1 N: thought bubble "exchange ₹50 crore principal?"


N016 · No. In an interest rate swap, the notional principal is never exchanged. Only the net interest difference changes hands.
> 1 B: strike through thought bubble · 2 C: trap card "IRS = NO principal exchange · net interest only" [F4]


N017 · Let's solve our first sum. Bank A enters a fifty-crore rupee I-R-S, paying six point four zero per cent fixed.
> 1 S: two crossing arrows between Bank A and Bank B; "Notional ₹50 cr · Fixed 6.40% · 182/365 days · illustrative" [F4, F7]


N018 · For this hundred-and-eighty-two-day period, the floating benchmark resets at seven point one zero per cent. Who pays whom?
> 1 N: "Floating 7.10% > Fixed 6.40%" · H: 3 s


N019 · Floating is higher, so Bank B pays Bank A the zero point seven zero per cent difference. Grab your calculator.
> 1 S: net arrow from Bank B to Bank A "0.70% diff"


N020 · Press fifty crore, times zero point seven zero, per cent, times one eighty-two, divided by three sixty-five, equals.
> 1 S: calculator keys "500000000 × 0.70 % × 182 ÷ 365 =" · H: 5 s


N021 · Seventeen lakh, forty-five thousand, two hundred and five rupees, forty-eight paise. The commonest mistake? Forgetting the day-count fraction.
> 1 B: box "₹17,45,205.48" · 2 N: "trap: full-year ₹35 lakh is wrong" [F7]


N022 · Your turn. Forty crore notional, Bank A pays six point six zero fixed, floating resets at six point one zero, one eighty-two days.
> 1 C: card "Your turn: ₹40 cr · Pay 6.60% fixed · Rec 6.10% floating · 182/365" · H: 15 s


N023 · Fixed is higher by half a per cent, so Bank A pays nine lakh, ninety-seven thousand, two hundred sixty rupees, twenty-seven paise.
> 1 S: keys "400000000 × 0.50 % × 182 ÷ 365 =" · 2 B: box "Bank A pays ₹9,97,260.27"


N024 · Now watch the twist in an F-R-A sum. An F-R-A settles at the start of the forward period, not the end.
> 1 S: timeline glows at month 3 "settled UPFRONT" [F3]


N025 · So we discount the interest difference back to the start date. Take a twenty-crore three by six F-R-A for ninety-one days.
> 1 C: card "₹20 cr · Buy 3×6 FRA @ 6.50% · Ref fixes @ 7.30% · 91/365" [F3]


N026 · Fixed rate is six point five zero; reference fixes at seven point three zero.
> 1 N: "diff = 7.30% − 6.50% = 0.80%"


N026a · Multiply twenty crore by zero point eight zero per cent, times ninety-one over three sixty-five.
> 1 S: keys "200000000 × 0.80 % × 91 ÷ 365 = 398904.11"


N027 · That gives three lakh, ninety-eight thousand, nine hundred four rupees, eleven paise. Now compute the discount factor at seven point three zero per cent.
> 1 S: keys "7.30 % × 91 ÷ 365 = 0.0182 · + 1 = 1.0182"


N028 · Divide three lakh ninety-eight thousand nine hundred four point eleven by one point zero one eight two.
> 1 S: keys "398904.11 ÷ 1.0182 =" · H: 8 s


N029 · Three lakh, ninety-one thousand, seven hundred seventy-three rupees, eighty-three paise, seller to buyer. Forgetting to discount is the classic F-R-A trap.
> 1 B: box "₹3,91,773.83 (seller → buyer)" · 2 N: "trap: ₹3,98,904.11 is undiscounted" [F3]


N030 · Beyond plain fixed-for-floating, a basis swap exchanges one floating rate for another floating rate in the same currency.
> 1 C: names-first card "Basis swap = floating vs floating" [F6]


N031 · An Overnight Indexed Swap, or O-I-S, swaps a fixed rate against a daily compounded overnight benchmark—Overnight MY-bor or S-O-R-R.
> 1 C: names-first card "OIS = fixed vs compounded overnight rate (MIBOR / SORR)" [F7]


N032 · Who publishes these benchmarks? F-B-I-L, Financial Benchmarks India Private Limited, authorised by R-B-I under the twenty twenty-three benchmark directions.
> 1 C: names-first card "FBIL · RBI-authorised FBA (min net worth ₹5 cr)" [F15, F16]


N033 · Since August twenty twenty-five, Overnight MY-bor uses the first three hours of call trades and publishes at twelve forty-five.
> 1 C: card "Overnight MIBOR (from 4 Aug 2025): 9 AM–12 Noon NDS-CALL · 12:45 PM (old: 9–10 AM, 10:45 AM)" [F18]


N034 · Since July twenty twenty-five, F-B-I-L also publishes S-O-R-R from repo and TREPS trades, with FIMMDA S-O-R-R O-I-S rules issued in December.
> 1 N: "SORR (7 Jul 2025): Basket Repo + TREPS · SORR-OIS (18 Dec 2025), Act/365" [F19, F7]


N035 · Under R-B-I's twenty twenty-five Rupee Interest Rate Derivatives Directions, scheduled banks, primary dealers, upper-layer N-B-F-Cs, and five A-I-F-Is act as market-makers.
> 1 C: card "Market-makers (eff. 1 Mar 2026): SCBs · SPDs · NBFC-UL · 5 AIFIs" [F1, F8]


N036 · Market-makers need no underlying risk, so banks can warehouse swaps on their own books without waiting for a matching client.
> 1 N: "warehousing swaps = no underlying needed for market-makers" [F8]


N037 · One myth to break. Some classes say only banks can use MY-bor swaps, not corporates. True or false?
> 1 C: trap card "MIBOR is interbank-only?" · H: 3 s


N038 · False. Any resident—including corporates—can enter MY-bor or S-O-R-R swaps. Retail users hedge only.
> 1 B: strike through myth · 2 N: "Any resident may use MIBOR/SORR · Retail = hedge only" [F11]


N038a · Non-retail users—five hundred crore net worth or thousand crore turnover—have no purpose limit, except Modified M-I-F-O-R swaps, which are hedging-only for everyone.
> 1 N: "Non-retail (₹500 cr NW / ₹1,000 cr turnover) · MMIFOR (replaced MIFOR Jul 2023) = hedging only" [F10, F11, F17]


N040 · Pause check, chapter one. First: in a rupee I-R-S, is the notional principal exchanged at maturity?
> 1 S: pause card "Ch 1 Check · Q1" · H: 3 s


N041 · No, only net interest is settled. Second: why do we discount an F-R-A payoff?
> 1 N: "1: No ✓" · 2 S: "Q2" · H: 3 s


N042 · Because an F-R-A settles upfront at the start of the forward period. Third, the twist: can a mid-sized manufacturer use MY-bor O-I-S to hedge?
> 1 N: "2: Upfront settlement → discounted ✓" · 2 S: "Q3 (twist)" · H: 3 s


N043 · Yes, any resident retail user can hedge with MY-bor O-I-S.
> 1 N: "3: Yes, for hedging ✓" [F11]


N043a · One thing to remember from chapter one: F-R-A is one discounted period; I-R-S is many net periods, never exchanging principal.
> 1 M: map adds "FRA" and "IRS" [F4, F5]

## Chapter 2 · The Decision Grid and Swaps in ALM

N044 · Chapter two. First, recall from chapter one: who publishes the floating benchmarks required for Indian rupee swaps?
> 1 S: chapter title "2 · Decision Grid and Swaps in ALM" · H: 3 s


N045 · F-B-I-L. Now let's answer Raghav's opening dilemma at Southern Commercial Bank.
> 1 N: "FBIL ✓" · 2 S: two-bucket ALM shelf returns (6m floating deposits vs 10y fixed home loans)


N046 · Raghav has fixed home loans and floating deposits. In a short bucket, rate-sensitive liabilities exceed rate-sensitive assets—a negative repricing gap.
> 1 C: card "Negative gap (RSA < RSL): deposits reprice faster than loans" [F23, F24]


N047 · When R-B-I raises rates, deposit costs jump while home-loan income stays flat. Net interest income gets squeezed.
> 1 G: left shelf (deposits) turns amber, NII gauge dips [F24]


N048 · Many of you thought earlier: rates are rising, so receive fixed to play safe. Let's test that.
> 1 N: thought bubble "rates rising → receive fixed?"


N049 · If Raghav receives fixed and pays floating, he pays even more floating on top of his floating deposits. That doubles his pain.
> 1 B: strike through thought bubble


N050 · Instead, Raghav must pay fixed and receive floating. The floating stream he receives pays off his rising deposit cost, locking his spread.
> 1 S: swap arrows added: Bank pays FIXED, receives FLOATING → cancels floating deposits [F25]


N051 · Write this down—our one notebook rule today. Position times rate view gives your swap side every time.
> 1 S: 2×2 Decision Grid appears [F25]


N052 · Rising rates? Pay fixed, receive floating—for a floating liability, a negative gap, or a fixed-rate bond book.
> 1 N: "Rates RISING (floating liability / neg gap / bond book) → PAY FIXED, REC FLOATING" [F25]


N053 · Why a bond book too? Rising yields drop bond prices. Paying fixed in an I-R-S—or shorting an Interest Rate Future—offsets that loss.
> 1 S: bond-book hedge card "Bond book + rising yields → Pay Fixed IRS OR Short IRF" [F25]


N054 · Falling rates? Flip it. Receive fixed, pay floating—to lock yields on a floating asset, a positive gap, or a fixed liability.
> 1 N: "Rates FALLING (floating asset / pos gap / fixed liability) → REC FIXED, PAY FLOATING" [F25]


N055 · Under R-B-I's twenty twenty-five Commercial Banks A-L-M Directions, banks slot rate-sensitive assets, liabilities, and off-balance-sheet swaps together into gap reports.
> 1 C: card "Commercial Banks ALM Directions 2025: TGA (NII) & DGA (MVE) include OBS swaps/FRAs" [F22, F23]


N056 · Match the derivative to the A-L-M gap. Use I-R-S for a multi-period repricing gap, and F-R-A or I-R-F for a single future gap.
> 1 N: "Multi-period gap → IRS · Single future gap → FRA / IRF" [F26]


N057 · For a foreign-currency mismatch, use a currency swap—under a Top Management policy, never exceeding the underlying value or maturity.
> 1 N: "FC mismatch → Currency swap (policy + ≤ underlying)" [F26, F27]


N058 · Pause check, chapter two. One: a bank has floating corporate loans funded by fixed deposits, expecting rate cuts. Which side of an I-R-S?
> 1 S: pause card "Ch 2 Check · Q1" · H: 3 s


N059 · Receive fixed, pay floating, locking the asset yield. Two: to hedge a bond book against rising yields using futures, buy or sell I-R-F?
> 1 N: "1: Receive fixed ✓" · 2 S: "Q2" · H: 3 s


N060 · Sell, or short, the I-R-F, which gains as bond prices fall.
> 1 N: "2: Short IRF ✓"


N060a · One thing to remember from chapter two: fear rising rates, pay fixed; fear falling rates, receive fixed.
> 1 M: map adds "Swaps in ALM" [F25, F26]

## Chapter 3 · Currency Swaps, Five Swap Types, and FX Swap Funding

N061 · Chapter three. Quick recall from chapter two: which derivative closes a multi-period rupee repricing gap?
> 1 S: chapter title "3 · Currency Swaps and FX Swap Funding" · H: 3 s


N062 · An interest rate swap. Now Raghav's client, Deccan Motors, has a five-year dollar loan and earns only rupees.
> 1 N: "IRS ✓" · 2 S: Deccan Motors card "USD 5-year ECB · INR revenues · illustrative"


N063 · They need a currency swap—an over-the-counter contract exchanging interest and or principal in two currencies at a pre-agreed exchange rate.
> 1 C: names-first card "Currency Swap (RMID Annex XXII)" [F29]


N064 · Spot the contrast with an I-R-S. An I-R-S never exchanges principal; a full currency swap usually exchanges principal at start and maturity.
> 1 C: trap card "IRS = no principal exchange · Full Currency Swap = principal exchanged" [F30]


N065 · Notice R-B-I's words: interest and or principal. That creates three currency-swap types, each removing a different risk.
> 1 S: three boxes appear side by side [F31]


N066 · One: Principal-Only Swap, or P-O-S. Only final principal is swapped—removing principal currency risk, leaving coupon risk open.
> 1 N: "POS = principal only → removes principal FX risk" [F31]


N067 · Two: Coupon-Only Swap, or C-O-S. Only periodic interest is swapped—removing interest and coupon currency risk, leaving principal risk open.
> 1 N: "COS = coupons only → removes interest & coupon FX risk" [F31]


N068 · Three: Principal plus Interest, the full cross-currency swap, removing both currency and interest-rate risk.
> 1 N: "Full CCS = principal + coupons → removes BOTH risks" [F31]


N069 · Two guardrails. Resident retail firms can swap a rupee loan into foreign currency only if they hold a natural hedge.
> 1 C: card "INR → FCY liability swap: resident non-individuals; retail needs natural hedge" [F32]


N070 · Banks cannot swap fixed rupee Tier One or Tier Two bonds into floating foreign-currency liabilities. And major-currency swap arbitrage rarely exists today.
> 1 N: "No swapping Tier I/II INR bonds to floating FCY · Major-currency arbitrage rare" [F33, F38]


N071 · Here are the five swap types on one card: Interest Rate, Currency, Basis, Zero-Coupon—one fixed lump sum at maturity—and Equity swaps.
> 1 C: 5-swap card "1 IRS · 2 Currency · 3 Basis · 4 Zero-Coupon · 5 Equity" [F34]


N072 · Now our third worked sum: raising short-term rupees with a foreign-exchange swap. An F-X swap exchanges principal only—near leg spot, far leg forward.
> 1 C: names-first card "FX Swap = principal only (near leg spot + far leg forward, no coupons)" [F35]


N073 · Raghav holds one million surplus dollars costing four point five zero per cent, and needs rupees for ninety days.
> 1 S: FX swap bridge "USD 1,000,000 @ 4.50% · Spot ₹85.0000 · 90d Fwd ₹85.4500 · 90/365" [F36]


N074 · He sells dollars spot at eighty-five to raise eight crore fifty lakh rupees, and buys dollars back ninety days later at eighty-five forty-five.
> 1 N: "Near leg: +₹8,50,00,000 · Far leg rate: ₹85.4500" [F36]


N075 · After ninety days, he repays dollars plus interest: one million times four point five zero per cent, times ninety over three sixty-five.
> 1 S: keys "1000000 × 4.50 % × 90 ÷ 365 = 11095.89 · + 1000000 = $1,011,095.89"


N076 · Multiply one million eleven thousand ninety-five point eight nine by eighty-five point four five to get the rupee outflow.
> 1 S: keys "1011095.89 × 85.45 = ₹8,63,98,143.84" · H: 5 s


N077 · Subtract eight crore fifty lakh raised: net rupee cost is thirteen lakh ninety-eight thousand one hundred forty-three rupees, eighty-four paise.
> 1 S: keys "86398143.84 − 85000000 = ₹13,98,143.84"


N078 · Annualise it: divide by eight crore fifty lakh, multiply by three sixty-five, divide by ninety, times one hundred.
> 1 S: keys "1398143.84 ÷ 85000000 × 365 ÷ 90 × 100 =" · H: 8 s


N079 · Six point six seven zero nine per cent per year.
> 1 B: box "6.6709% p.a." [F36]


N079a · Quick check: four point five zero dollar cost plus two point one five annualised premium equals roughly six point six five.
> 1 N: "approx: 4.50% + 2.15% = 6.65%"


N080 · Pause check, chapter three. One: which currency swap hedges only the final principal repayment of an external borrowing?
> 1 S: pause card "Ch 3 Check · Q1" · H: 3 s


N081 · A Principal-Only Swap. Two: does a ninety-day dollar-rupee F-X swap exchange interim interest coupons?
> 1 N: "1: POS ✓" · 2 S: "Q2" · H: 3 s


N082 · No—an F-X swap exchanges principal only on its near and far legs.
> 1 N: "2: No, principal only ✓" [F35]


N082a · One thing to remember from chapter three: match P-O-S, C-O-S, or full swap to the exact cash flows at risk.
> 1 M: map adds "Currency swaps" [F31]

## Chapter 4 · Mixed Case Check

N083 · Chapter four. Three rapid calls from Raghav's desk, mixing all three chapters.
> 1 S: chapter title "4 · Mixed Case Check"


N084 · Call one. A bank has a positive ninety-day repricing gap and expects rates to fall. Pay fixed or receive fixed?
> 1 C: card "Case 1: Positive gap (RSA > RSL) + rates falling" · H: 3 s


N085 · Receive fixed, pay floating, locking in higher interest income.
> 1 N: "Receive fixed ✓" [F25]


N086 · Call two. A corporate with a six-hundred-crore net worth wants a MY-bor O-I-S for trading. Allowed under R-B-I's twenty twenty-five directions?
> 1 C: card "Case 2: Net worth ₹600 cr · MIBOR-OIS for trading" · H: 3 s


N087 · Yes. Net worth above five hundred crore makes it non-retail with no purpose restriction on MY-bor swaps.
> 1 N: "Allowed (non-retail ≥ ₹500 cr NW) ✓" [F10, F11]


N088 · Call three, the twist. The same company asks for a Modified M-I-F-O-R swap for trading. Allowed?
> 1 C: card "Case 3: Same firm · MMIFOR swap for trading" · H: 3 s


N089 · No. Under R-B-I's directions, Modified M-I-F-O-R swaps are strictly for hedging for every user.
> 1 N: "Not allowed (MMIFOR = hedging only) ✓" [F11]

## Close

N090 · Pull our four map nodes back from memory on a blank screen. Name them before they appear.
> 1 S: blank Module C mind map (Derivatives branch) · H: 4 s


N091 · One: F-R-A, one discounted period. Two: I-R-S, many net periods, no principal exchange, with basis swaps, O-I-S, and F-B-I-L benchmarks.
> 1 M: "FRA" and "IRS" light up · H: 3 s


N092 · Three: Swaps in A-L-M, the pay-fixed or receive-fixed grid. Four: Currency swaps—P-O-S, C-O-S, full swap—plus F-X swap funding.
> 1 M: "Swaps in ALM" and "Currency swaps" light up · H: 3 s


N093 · You can now price an I-R-S, an F-R-A, and F-X swap funding, pick the right swap side, and classify every swap.
> 1 C: "You can now" card (C6.3, C6.4, C5.4, C7.2, C2.1)


N094 · Tonight's homework. A bank buys a ten-crore six by nine F-R-A for ninety-two days at six point two zero per cent.
> 1 C: homework card "₹10 cr · Buy 6×9 FRA (92 days) @ 6.20% · Ref 5.80% · Act/365"


N094a · The reference fixes at five point eight zero per cent. Who pays whom, and how much?
> 1 G: homework card pulses


N095 · And for next class: in every forward, future, and swap, both sides are locked in.
> 1 S: preview card "Protection without obligation?"


N095a · What if you want protection when rates move against you, but freedom to walk away if they move in your favour?
> 1 G: preview card glows


N096 · [warmly] That's the swap desk wrapped up for tonight. Put the calculator down, rest well, and I'll see you in the next class.
> 1 S: desk dims; closing card