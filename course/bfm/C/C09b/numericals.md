# C09b · Numericals (c1, 2026-11-24)
All names, amounts, rates, and dates are illustrative. Basic 8-function IIBF calculator only (+ − × ÷ % √, 12 digits). Every sum is solved two independent ways and verified by Python. Rules: FERR = 20% of the INR equivalent of the full notional in cash with RBI for qualifying user INR FX derivatives hedging current-account transactions where the user buys FC against INR and notional exceeds USD 2 million [F30, F32].
Warm-up · Last class homework check (N003–N005)
* Data: Long call option · Strike = ₹85.00 · Spot at expiry = ₹88.00 · Premium = ₹2.00.
* Method 1 (Payoff then Profit):
   * Intrinsic payoff = 88 − 85 = ₹3.00
   * Net profit = 3 − 2 = ₹1.00 per USD
* Method 2 (Break-even check):
   * Break-even spot = 85 + 2 = ₹87.00
   * Net profit = 88 − 87 = ₹1.00 per USD
* Match: Both methods give ₹1.00 per USD.
Q1 · Worked Example: FERR on Importer's Forward (N086–N091)
* Data: Ms. Kavitha (illustrative) hedges a current-account machinery import by buying USD 3,000,000 forward against INR at ₹86.0000/USD.
* Applicability check: Involves INR (✓), with a user (✓), user buys FC against INR (✓), current-account hedge (✓), USD 3,000,000 > USD 2,000,000 threshold (✓) → FERR applies on full notional [F30].
* Method 1 (INR Notional first, then 20%):
   * Calculator keys: 3000000 × 86 = → ₹25,80,00,000.00 (₹25.80 crore)
   * Calculator keys: × 20 % = → ₹5,16,00,000.00 (₹5.16 crore)
* Method 2 (20% of USD Notional first, then convert to INR):
   * Calculator keys: 3000000 × 20 % = → USD 600,000
   * Calculator keys: × 86 = → ₹5,16,00,000.00 (₹5.16 crore)
* Common trap: Computing 20% only on the excess above USD 2 million (1000000 × 86 × 20 % = ₹1.72 crore) is WRONG — once the contract exceeds USD 2 million, FERR applies to the entire notional [F30].
* Match: Both methods give ₹5,16,00,000.00 (₹5.16 crore).
Q2 · Your Turn: FERR on Larger Import Hedge (N092–N093)
* Data: Importer hedges a current-account import by buying USD 4,000,000 forward against INR at ₹85.5000/USD.
* Applicability check: All 5 FERR conditions satisfied (USD 4m > USD 2m; user buys FC; current-account hedge) [F30].
* Method 1 (INR Notional first, then 20%):
   * Calculator keys: 4000000 × 85.5 = → ₹34,20,00,000.00 (₹34.20 crore)
   * Calculator keys: × 20 % = → ₹6,84,00,000.00 (₹6.84 crore)
* Method 2 (20% of USD Notional first, then convert to INR):
   * Calculator keys: 4000000 × 20 % = → USD 800,000
   * Calculator keys: × 85.5 = → ₹6,84,00,000.00 (₹6.84 crore)
* Match: Both methods give ₹6,84,00,000.00 (₹6.84 crore).
Q3 · Mixed Check Trap: Exporter Selling USD (N101–N102)
* Data: Exporter sells USD 5,000,000 forward against INR at ₹86.0000/USD.
* Applicability check: User is selling FC against INR, NOT buying FC [F30, F32].
* Method 1 & Method 2: FERR = ₹0.00 (exempt).
Homework · Practice FERR Sum (N111)
* Data: Importer hedges a current-account import by buying USD 2,500,000 forward against INR at ₹87.0000/USD.
* Applicability check: USD 2.5m > USD 2m; user buys FC; current-account hedge → FERR applies [F30].
* Method 1 (INR Notional first, then 20%):
   * Calculator keys: 2500000 × 87 = → ₹21,75,00,000.00 (₹21.75 crore)
   * Calculator keys: × 20 % = → ₹4,35,00,000.00 (₹4.35 crore)
* Method 2 (20% of USD Notional first, then convert to INR):
   * Calculator keys: 2500000 × 20 % = → USD 500,000
   * Calculator keys: × 87 = → ₹4,35,00,000.00 (₹4.35 crore)
* Match: Both methods give ₹4,35,00,000.00 (₹4.35 crore).