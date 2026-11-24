# C09 · Practice (c1, 2026-11-24)
8 original CAIIB BFM questions (5 MCQs + 3 keyed-in numericals without options, matching the plan's blueprint question kinds: define, compare, who/when/how much, exception, calculate, apply to a case). Written from C09_fact_sheet; all figures illustrative. Options use real exam traps (put moneyness flip, payoff vs profit, forward premium myth, retail OTC restrictions). Answers with one-line reasons citing [F#] are at the end.
Part A · Multiple-Choice Questions (MCQs)
Q1 (Define & Compare — Exercise Style in India)
Which of the following statements about option exercise styles in India (as at 31 December 2026) is CORRECT?
(a) Exchange-traded USD-INR currency options on NSE and BSE are American style, while equity stock options are European style.
(b) Both exchange-traded currency options (USD-INR, EUR-INR, GBP-INR, JPY-INR) and exchange-traded equity stock options (CE/PE) on Indian exchanges are European style, exercisable only on the expiration date.
(c) European options can only be traded on European stock exchanges, whereas American options can be traded anywhere in the world.
(d) Bermudan options can be exercised on any business day prior to expiry.


Q2 (Compare — Moneyness & Intrinsic Value Trap)
An illustrative stock trades at a spot price of ₹480. Consider two options on this stock, both with a strike price of ₹500: Option X is a Call trading at a premium of ₹11, and Option Y is a Put trading at a premium of ₹26. Which statement is CORRECT?
(a) Option X (Call) is In-the-Money with intrinsic value ₹20; Option Y (Put) is Out-of-the-Money with intrinsic value ₹0.
(b) Option X (Call) is Out-of-the-Money with intrinsic value −₹20; Option Y (Put) is In-the-Money with time value ₹6.
(c) Option X (Call) is Out-of-the-Money with intrinsic value ₹0 and time value ₹11; Option Y (Put) is In-the-Money with intrinsic value ₹20 and time value ₹6.
(d) Both Option X and Option Y are At-the-Money because they share the same ₹500 strike price.


Q3 (Exception — Option Pricing Drivers)
Under the Black-Scholes option pricing framework used by Indian stock exchanges, which of the following is NOT one of the five core inputs determining an option's theoretical premium?
(a) Volatility of the underlying asset (σ)
(b) Time remaining until expiration (T)
(c) Forward premium of the currency pair
(d) Risk-free rate of interest (r)


Q4 (Who / Exception — Plain-Vanilla vs Structured & Retail Access)
Under RBI's Master Direction – Risk Management and Inter-Bank Dealings (updated 1 October 2026) and Master Direction – Market-makers in OTC Derivatives (2021), which transaction is an Authorised Dealer Bank PERMITTED to offer to a retail user?
(a) Writing a covered foreign exchange call option
(b) Purchase of a plain-vanilla European foreign exchange put option
(c) A leveraged structured FX derivative whose payout multiplies the notional by 2.0
(d) A digital barrier option structured to reduce hedging cost


Q5 (Apply to a Case — Hedging & Embedded Options)
An Indian treasury desk holds a corporate bond that gives the issuer the right to buy the bond back early if market yields fall, while separately considering whether to hedge an equity holding with a protective put or a covered call. Which statement is CORRECT?
(a) The bond is a putable bond; a protective put caps upside while leaving downside open.
(b) The bond is a callable bond (carrying an embedded call option); a protective put sets a downside floor while keeping upside open, whereas a covered call earns premium income but caps upside at the strike price.
(c) The bond is a callable bond; RBI's Investment Portfolio Directions, 2025 require the bank to separate the embedded option and account for it independently before testing SPPI.
(d) A covered call eliminates all downside loss on the shares if the share price falls sharply.
Part B · Keyed-in Numericals (No Options)
Q6 (Calculate — USD-INR Call Option Net Profit)
An illustrative importer buys 5 lots of European USD-INR Call options on an Indian exchange (1 lot = USD 1,000) at a strike price of ₹85.0000 by paying a premium of ₹0.4500 per USD. On expiry day, the FBIL Reference Rate settles at ₹86.1000. Calculate the buyer's total net profit (in ₹, rounded to 2 decimals).


Q7 (Calculate — Short Put Net Profit / Loss)
An illustrative trader writes (sells) 100 European Put options on a share with strike price ₹600.00 and collects a premium of ₹20.00 per share. On expiry day, the share closes at ₹565.00. Calculate the option seller's total net profit or loss (in ₹, with sign, rounded to 2 decimals).


Q8 (Calculate — Covered Call Case)
An illustrative investor buys 100 shares at ₹400.00 each and simultaneously sells 100 European Call options on the same stock at a strike price of ₹420.00, receiving a premium of ₹12.00 per share. Calculate the investor's combined net profit (in ₹, rounded to 2 decimals) if the share closes at ₹445.00 on expiry day.
Answers (one-line reasons)
1. b — Under RBI directions and SEBI Circular CIR/DNPD/6/2010, Indian exchange currency options (7 pairs) and equity stock options (CE/PE) are all European style, exercisable only on expiry [F6, F7, F8].
2. c — For S = ₹480 and K = ₹500, the Call is OTM (S < K) with intrinsic value ₹0 (never negative) and time value ₹11, while the Put is ITM (S < K) with intrinsic value ₹20 (500 − 480) and time value ₹6 (26 − 20) [F9, F10, F11, F12].
3. c — Black-Scholes uses five inputs (S, K, T, σ, r); forward premium is not an independent driver because interest rates already capture carry [F14, F15].
4. b — Retail users may only buy plain-vanilla European FX calls/puts (and spreads); covered FX options and structured derivatives are restricted to non-retail users, and leveraged derivatives are prohibited for all [F26, F27, F28].
5. b — A callable bond gives the issuer the buy-back right (and hybrid bonds with embedded derivatives are tested as a whole for SPPI); a protective put sets a floor with open upside, while a covered call earns premium at the cost of capping upside [F24, F25, F30].
6. +₹3,250.00 — Method 1: Payoff = (86.1000 − 85.0000) = ₹1.1000; Net Profit/USD = 1.1000 − 0.4500 = ₹0.6500; Total = 0.6500 × 5000 = +₹3,250.00. Method 2 (Breakeven): BE = 85.4500; (86.1000 − 85.4500) × 5000 = +₹3,250.00 [F7, F17, F18].
7. −₹1,500.00 — Method 1: Put payoff = 600 − 565 = ₹35.00; Seller Net P&L/share = 20 − 35 = −₹15.00; Total = −15 × 100 = −₹1,500.00. Method 2 (Breakeven): BE = 600 − 20 = ₹580; Seller loss = (565 − 580) × 100 = −₹1,500.00 [F17, F21, F22].
8. +₹3,200.00 — Method 1: Stock gain = (445 − 400) × 100 = +₹4,500; Short call P&L = [12 − (445 − 420)] × 100 = −₹1,300; Combined = 4500 − 1300 = +₹3,200.00. Method 2 (Cap formula): [(420 − 400) + 12] × 100 = 32 × 100 = +₹3,200.00 [F25].