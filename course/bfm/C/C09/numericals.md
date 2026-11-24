# C09 · Numericals (c1, 2026-11-24)
All names, securities, rates, and amounts are illustrative. Every sum is designed for the IIBF basic 8-function calculator (+ − × ÷ % √, 12 digits, no scientific keys), verified two independent ways in Python Decimal, and confirmed to match exactly. Rates shown to 4 decimals; final rupee amounts rounded to 2 decimals.


Rules used (from C09_fact_sheet):


* Call Intrinsic Value = max(S − K, 0); Put Intrinsic Value = max(K − S, 0) [F12].
* Time Value = Option Premium − Intrinsic Value [F11, F13].
* Call Payoff at expiry = max(S_T − K, 0); Put Payoff at expiry = max(K − S_T, 0) [F17].
* Buyer Net Profit = Payoff − Premium; Seller Net Profit = Premium − Payoff [F17, F22].
* Long Call Breakeven = K + P [F18]; Long Put Breakeven = K − P [F19].
* Covered Call (Long Underlying at S_0 + Short Call at K, Premium P): Net Profit = (S_T − S_0) + P − max(S_T − K, 0); capped at (K − S_0) + P when S_T ≥ K; Breakeven = S_0 − P [F25].
* Protective Put (Long Underlying at S_0 + Long Put at K, Premium P): Net Profit = (S_T − S_0) + max(K − S_T, 0) − P; floor at (K − S_0) − P when S_T ≤ K [F24].
Sum 1 · Intrinsic Value and Time Value of a Quoted Call (Ch 2, N047–N048)
* Data (illustrative): European Call option on Deccan Infra shares; Spot Price (S) = ₹525.00, Strike Price (K) = ₹510.00, Quoted Premium (P) = ₹22.00.
* Method 1 (key presses):
   * Intrinsic Value (since S > K): 525 − 510 = → ₹15.00
   * Time Value: 22 − 15 = → ₹7.00
* Method 2 (check):
   * Sum of components = Intrinsic Value + Time Value = 15 + 7 = → ₹22.00 (equals quoted premium). Both match.
* Common wrong answer: Treating the entire ₹22.00 premium as intrinsic value, or subtracting spot from strike for a call when S < K to get a negative number (intrinsic value is floored at ₹0 [F12]).
Sum 2 · Long Call Payoff & Net Profit on USD-INR Exchange Option (Ch 3, Full Worked, N070–N076)
* Data (illustrative): Indian exchange USD-INR European Call option [F7]; 10 lots = USD 10,000 (1 lot = USD 1,000); Strike (K) = ₹84.0000; Premium (P) = ₹0.6000 per USD; Expiry FBIL Reference Rate (S_T) = ₹85.2000.
* Method 1 (Payoff minus Premium — key presses):
   * Unit Payoff: 85.2000 − 84.0000 = → ₹1.2000 per USD
   * Total Gross Payoff: 1.2000 × 10000 = → ₹12,000.00
   * Unit Net Profit (Buyer): 1.2000 − 0.6000 = → ₹0.6000 per USD
   * Total Buyer Net Profit: 0.6000 × 10000 = → +₹6,000.00
   * Total Seller Net Profit: 0 − 6000 = → −₹6,000.00 [F22]
* Method 2 (Breakeven Method — check):
   * Call Breakeven = K + P: 84.0000 + 0.6000 = → ₹84.6000
   * Excess over Breakeven: 85.2000 − 84.6000 = → ₹0.6000 per USD
   * Total Buyer Net Profit: 0.6000 × 10000 = → +₹6,000.00. Both match.
* Common wrong answer: Stopping at ₹12,000.00 (gross payoff, forgetting to deduct the ₹6,000.00 upfront premium [F17]).
Sum 3 · Long Put Payoff & Net Profit (Ch 3, Faded, N077–N078)
* Data (illustrative): European Put option on 100 shares of Deccan Infra; Strike (K) = ₹500.00; Premium (P) = ₹18.00 per share; Expiry Spot (S_T) = ₹465.00.
* Method 1 (Payoff minus Premium — key presses):
   * Unit Payoff (since S_T < K): 500 − 465 = → ₹35.00 per share (Gross Payoff = 35 × 100 = ₹3,500.00)
   * Unit Net Profit (Buyer): 35 − 18 = → ₹17.00 per share
   * Total Buyer Net Profit: 17 × 100 = → +₹1,700.00 (Seller Net Profit = −₹1,700.00)
* Method 2 (Breakeven Method — check):
   * Put Breakeven = K − P: 500 − 18 = → ₹482.00
   * Profit per share: 482 − 465 = → ₹17.00
   * Total Buyer Net Profit: 17 × 100 = → +₹1,700.00. Both match.
* Common wrong answer: Adding premium to strike (₹518) as breakeven (that is for a call, not a put), or forgetting to deduct ₹1,800 premium and reporting ₹3,500.00.
Sum 4 · Your Turn: Out-of-the-Money Call Expiry (Ch 3, N079–N081)
* Data (illustrative): European Call option on 100 shares; Strike (K) = ₹520.00; Premium (P) = ₹14.00 per share; Expiry Spot (S_T) = ₹505.00.
* Method 1 (Payoff minus Premium — key presses):
   * Since S_T (₹505) < K (₹520), the call expires OTM and lapses → Unit Payoff = ₹0.00
   * Unit Net Profit: 0 − 14 = → −₹14.00 per share
   * Total Buyer Net Profit: −14 × 100 = → −₹1,400.00 (loss of ₹1,400.00; Seller Net Profit = +₹1,400.00)
* Method 2 (Buyer Max Loss Rule — check):
   * Buyer's maximum loss on any option = Total Premium Paid = 14 × 100 = ₹1,400.00 → Net Profit = −₹1,400.00. Both match.
* Common wrong answer: Computing 505 − 520 = −₹15 per share (−₹1,500) or −15 − 14 = −₹29 per share (−₹2,900), forgetting that the buyer has a right, not an obligation [F1, F4].
Sum 5 · Covered Call Case — Meera's 100 Shares (Ch 4, N094–N098a)
* Data (illustrative): Meera holds 100 shares of Deccan Infra bought at S_0 = ₹500.00; she writes (sells) 100 European Call options at Strike (K) = ₹520.00 and receives Premium (P) = ₹15.00 per share (total premium = ₹1,500.00).
* Scenario A · Expiry Spot S_T = ₹540.00:
   * Method 1 (Leg-by-leg — key presses):
      * Stock P&L: (540 − 500) × 100 = 40 × 100 = +₹4,000.00
      * Short Call Payoff paid: 540 − 520 = ₹20.00/share → Short Call Net P&L: (15 − 20) × 100 = −5 × 100 = −₹500.00
      * Combined Net Profit: 4000 − 500 = → +₹3,500.00
   * Method 2 (Capped Upside Formula — check):
      * Max Gain = [(K − S_0) + P] × 100 = [(520 − 500) + 15] × 100 = 35 × 100 = → +₹3,500.00. Both match.
* Scenario B · Expiry Spot S_T = ₹490.00:
   * Method 1 (Leg-by-leg — key presses):
      * Stock P&L: (490 − 500) × 100 = −10 × 100 = −₹1,000.00
      * Short Call lapses (S_T < K): Meera keeps full premium 15 × 100 = +₹1,500.00
      * Combined Net Profit: 1500 − 1000 = → +₹500.00
   * Method 2 (Breakeven Check — check):
      * Covered Call Breakeven = S_0 − P = 500 − 15 = ₹485.00
      * Profit above Breakeven = (490 − 485) × 100 = 5 × 100 = → +₹500.00. Both match.
* Common wrong answer: Ignoring the short call payoff in Scenario A and reporting ₹5,500 (₹4,000 stock gain + ₹1,500 premium), forgetting the call is exercised at ₹520.
Homework · Protective Put (Close, N112–N112a)
* Data (illustrative): Meera holds 100 shares of Deccan Infra at S_0 = ₹500.00 and buys 100 European Put options at Strike (K) = ₹500.00 for Premium (P) = ₹12.00 per share. Expiry Spot S_T = ₹450.00.
* Method 1 (Leg-by-leg — key presses):
   * Stock P&L: (450 − 500) × 100 = −₹5,000.00
   * Long Put Payoff: (500 − 450) × 100 = +₹5,000.00; less Premium Paid 12 × 100 = ₹1,200.00 → Put Net P&L = +₹3,800.00
   * Combined Net P&L: −5000 + 3800 = → −₹1,200.00 (net loss capped at ₹1,200.00)
* Method 2 (Floor Formula — check):
   * Max Loss = [(K − S_0) − P] × 100 = [(500 − 500) − 12] × 100 = −12 × 100 = → −₹1,200.00. Both match.