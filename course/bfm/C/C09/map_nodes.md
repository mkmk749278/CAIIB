# C09 · Map Nodes (c1, 2026-11-24)
Nodes added by lesson C09 ("Options: choice, premium, and payoff", syllabus C6.3 & C5.4) to Mind Map C ("The bank's trading desk", 10 o'clock branch: Derivatives), in exact order of appearance in C09_script_class. Names match course/bfm/C/plans_C.md §C09 (Derivatives: options).
1. Derivatives → Options (root branch introduced at N013)
Call, Put & Styles (completed at N034)
* Asymmetry: Buyer (holder) = right without obligation, max loss = premium paid; Seller (writer) = binding obligation, max gain = premium received [F1, F4]
* Call & Put Definitions: Call = right to BUY at strike K (bullish); Put = right to SELL at strike K (bearish) [F2, F3, F5]
* Styles: Refers to WHEN exercisable (not geography):
   * European: Expiry day only
   * American: Any day up to expiry
   * Bermudan: Specified discrete dates [F6]
* Indian Market Standards: India's exchanges (NSE/BSE currency 7 pairs USD-INR etc., equity CE/PE, IRD OPTIRD) & retail OTC options = European style; currency options cash-settled in INR at FBIL Reference Rate, lot USD 1,000 [F7, F8]
Moneyness & Premium (completed at N060)
* Call Moneyness: S > K (ITM), S = K (ATM), S < K (OTM) [F9]
* Put Moneyness (Mirror): S < K (ITM), S = K (ATM), S > K (OTM) [F10]
* Premium Breakdown: Premium = Intrinsic Value (IV) + Time Value (TV)
   * IV ≥ 0 always (Call: max(S − K, 0); Put: max(K − S, 0))
   * ATM & OTM options have IV = 0 (100% time value) [F11, F12]
* Time Decay (Theta): Time value erodes to ₹0 at expiry (eroding asset) [F13, F31]
* Black-Scholes 5 Drivers: Spot (S), Strike (K), Time (T), Implied Volatility (σ — lifts both calls & puts, positive Vega), Interest Rate (r) — trap: forward premium is NOT a separate driver [F14, F15, F16]
Payoff, Profit & Four Positions (completed at N086)
* Expiry Mechanics (TV = 0): Payoff = IV; Buyer Net Profit = Payoff − Premium; Seller Net Profit = Premium − Payoff (zero-sum game) [F17, F22]
* Four Basic Payoff Profiles (Hockey Sticks):
   * Long Call: BE = K + P | Max Loss = P | Max Gain = Unlimited [F18]
|---|
   * Short Call: BE = K + P | Max Gain = P | Max Loss = Unlimited (naked short call) [F20]
   * Short Put: BE = K − P | Max Gain = P | Max Loss = Open-ended downside up to K − P [F21]
   * Exchange Settlement & Margining: Buyer pays premium T+1; Seller posts SPAN + ELM margin (1.5% on BSE currency options) [F32]
Hedging, Structures & Embedded Options (completed at N106)
   * Option Hedging Advantage: Preserves favourable upside potential (versus forward contracts which lock in both sides) [F23]
   * Protective Put Structure: Long Asset + Long Put = Downside floor protection + open upside participation [F24]
   * Covered Call Structure: Long Asset + Short Call = Upfront premium income + capped upside at Strike K (BE = S_0 − P) [F25]
   * RBI OTC Regulatory Framework:
   * Generic / plain-vanilla European calls, puts, caps, floors permitted (retail customers = buy only)
   * Structured derivatives permitted for non-retail only with enhanced due diligence
   * Leveraged derivatives strictly barred [F26, F27, F28, F29]
   * Embedded Options in Bonds: Callable (issuer right to redeem) and putable (investor right to sell back) bonds — tested as a whole for SPPI compliance under RBI Investment Portfolio Directions 2025 [F30]


________________


Option Position Summary Matrix
Position
	View / Bias
	Max Gain
	Max Loss
	Break-Even Point (BE)
	Long Call
	Bullish
	Unlimited
	Premium Paid (P)
	K + P
	Short Call
	Bearish / Neutral
	Premium Received (P)
	Unlimited
	K + P
	Long Put
	Bearish
	Strike − Premium (K − P)
	Premium Paid (P)
	K − P
	Short Put
	Bullish / Neutral
	Premium Received (P)
	Strike − Premium (K − P)
	K − P