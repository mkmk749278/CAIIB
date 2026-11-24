# C08b · Numericals (c1, 2026-11-24)
All names, amounts, rates, and dates are illustrative. Verified two independent ways using exact Decimal arithmetic (both methods match to 4 decimal places). Basic 8-function IIBF calculator only (+ − × ÷ % √, 12 digits). Day-count convention for Rupee IRDs (MIBOR-OIS / SORR-OIS / FRA): Actual/365 Fixed (FIMMDA FIMCIR/2025-26/39 Annex item 8). Rates to 4 decimals; rupee amounts to 2 decimals.
Q1 · IRS semi-annual net settlement (N017–N021)
* Data: Notional ₹50 crore (₹50,00,00,000), Bank A pays 6.40% p.a. fixed, receives floating, period 182 days (Actual/365). Floating benchmark resets at 7.10% p.a.
* Direction: Floating (7.10%) > Fixed (6.40%) → Bank B pays Bank A the net interest difference (0.70%).
* Method 1 (Net rate):
   * Key presses: 500000000 × 0.70 % × 182 ÷ 365 = → ₹17,45,205.48
* Method 2 (Gross legs, then subtract):
   * Floating leg: 500000000 × 7.10 % × 182 ÷ 365 = ₹1,77,01,369.86
   * Fixed leg: 500000000 × 6.40 % × 182 ÷ 365 = ₹1,59,56,164.38
   * Difference: 17701369.86 − 15956164.38 = ₹17,45,205.48 (exact match).
* Commonest wrong answer: Forgetting × 182 ÷ 365 → ₹35,00,000.00 (full year).
Q1b · Your turn: IRS when floating falls below fixed (N022–N023)
* Data: Notional ₹40 crore (₹40,00,00,000), Bank A pays 6.60% p.a. fixed, receives floating, period 182 days (Actual/365). Floating resets at 6.10% p.a.
* Direction: Fixed (6.60%) > Floating (6.10%) → Bank A pays Bank B (0.50% difference).
* Method 1 (Net rate):
   * Key presses: 400000000 × 0.50 % × 182 ÷ 365 = → ₹9,97,260.27
* Method 2 (Gross legs, then subtract):
   * Fixed leg: 400000000 × 6.60 % × 182 ÷ 365 = ₹1,31,63,835.62
   * Floating leg: 400000000 × 6.10 % × 182 ÷ 365 = ₹1,21,66,575.34
   * Difference: 13163835.62 − 12166575.34 = ₹9,97,260.27 (exact match).
Q2 · 3×6 FRA discounted settlement amount (N024–N029)
* Data: Notional ₹20 crore (₹20,00,00,000), Bank buys a 3×6 FRA (91-day forward period, Actual/365) at fixed FRA rate 6.50% p.a. On fixing date, 3-month reference rate fixes at 7.30% p.a.
* Direction: Reference (7.30%) > FRA rate (6.50%) → FRA seller pays FRA buyer at the start of the 91-day period (discounted at 7.30%).
* Method 1 (Direct discounted formula):
   * Numerator (undiscounted diff): 200000000 × 0.80 % × 91 ÷ 365 = ₹3,98,904.11
   * Denominator (discount factor): 7.30 % × 91 ÷ 365 = 0.0182 → + 1 = 1.0182
   * Settlement: 398904.11 ÷ 1.0182 = ₹3,91,773.83
* Method 2 (Gross legs at end of period, then discount):
   * Reference interest: 200000000 × 7.30 % × 91 ÷ 365 = ₹36,40,000.00
   * FRA interest: 200000000 × 6.50 % × 91 ÷ 365 = ₹32,41,095.89
   * Gross diff: 3640000.00 − 3241095.89 = ₹3,98,904.11
   * Present value: 398904.11 ÷ 1.0182 = ₹3,91,773.83 (exact match).
* Commonest wrong answer: Forgetting to discount back to start date → ₹3,98,904.11.
Q3 · Cost of raising rupee funds via USD/INR FX swap (N072–N079a)
* Data: Bank uses USD 1,000,000 (USD funding/opportunity cost 4.50% p.a.) to raise rupees for 90 days (Actual/365). Spot USD/INR = ₹85.0000; 90-day forward USD/INR = ₹85.4500 (forward premium ₹0.4500).
* Legs: Near leg (Spot) = Sell USD 1,000,000, receive ₹8,50,00,000. Far leg (90-day Forward) = Buy back USD 1,000,000 + 90-day USD interest at ₹85.4500.
* Method 1 (Exact cash-flow method):
   * INR raised: 1000000 × 85.0000 = ₹8,50,00,000.00
   * USD interest: 1000000 × 4.50 % × 90 ÷ 365 = USD 11,095.89 → USD outflow = USD 1,011,095.89
   * INR outflow at forward: 1011095.89 × 85.45 = ₹8,63,98,143.84
   * Net INR cost: 86398143.84 − 85000000 = ₹13,98,143.84
   * Annualised rupee cost: 1398143.84 ÷ 85000000 × 365 ÷ 90 × 100 = 6.6709% p.a.
* Method 2 (Exact Interest Rate Parity formula):
   * 1 + (4.50 % × 90 ÷ 365) = 1.01109589
   * 85.45 ÷ 85.00 = 1.00529412
   * 1.01109589 × 1.00529412 − 1 = 0.01644875
   * 0.01644875 × 365 ÷ 90 × 100 = 6.6709% p.a. (exact match to 4 decimals).
* Quick mental check (additive approximation): Annualised forward premium = (0.45 ÷ 85) × (365 ÷ 90) × 100 = 2.1471%; 4.50% + 2.1471% = 6.6471% ≈ 6.65%.
Homework · 6×9 FRA when reference falls below FRA rate (N094–N094a)
* Data: Notional ₹10 crore (₹10,00,00,000), bank buys 6×9 FRA (92 days, Actual/365) at 6.20% p.a.; reference fixes at 5.80% p.a.
* Direction: Reference (5.80%) < FRA rate (6.20%) → FRA buyer pays FRA seller.
* Method 1 (Direct discounted formula):
   * Numerator: 100000000 × 0.40 % × 92 ÷ 365 = ₹1,00,821.92
   * Denominator: 1 + (5.80 % × 92 ÷ 365) = 1.01461918
   * Settlement: 100821.92 ÷ 1.01461918 = ₹99,369.22 (buyer pays seller).
* Method 2 (Gross legs, then discount):
   * FRA interest: 100000000 × 6.20 % × 92 ÷ 365 = ₹15,62,739.73; Ref interest: 100000000 × 5.80 % × 92 ÷ 365 = ₹14,61,917.81; Diff: ₹1,00,821.92 ÷ 1.01461918 = ₹99,369.22 (exact match).