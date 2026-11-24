# C03 · Numericals (c1, 2026-11-24)
All names, prices, yields, and amounts are illustrative. Every calculation uses only the IIBF basic 8-function calculator (+ − x ÷ % √, 12 digits, no scientific keys) and has been verified two independent ways in Python (Decimal); all pairs match exactly. Rates and prices per ₹100 to 4 decimal places; rupee totals to 2 decimal places.


Rules (from C03_fact_sheet):


* Day-count convention for T-Bills, CMBs, CP, and CD: Actual/365 (fixed 365 days in denominator) [F22].
* Yield from Price (rear-ended discount): Yield (%) = [(100 − P) / P] x (365 / D) x 100 [F23].
* Price from Yield (per ₹100 face value, rounded to 4 decimal places): Price = 100 / [1 + (Y x D) / (365 x 100)] [F24].
* Multiple-Price auction: each successful bidder pays their own quoted bid price [F20, F21].
Sum 1 (Worked) · 91-Day T-Bill Yield from Price (Opening Story, Ch 3)
* Data: A 91-day Treasury Bill (illustrative) is allotted at a price of ₹98.75 per ₹100 face value. Compute the annualised yield (%). [F22, F23]
* Method 1 (IIBF calculator key presses — step by step):
   * Discount earned: 100 − 98.75 = → 1.25
   * Divide by purchase price: 1.25 ÷ 98.75 = → 0.01265822784
   * Annualise for 365 days: x 365 ÷ 91 = → 0.05077199299
   * Convert to percentage: x 100 = → 5.0772%
* Method 2 (Combined numerator ÷ combined denominator):
   * Numerator: 1.25 x 36500 = → 45625
   * Denominator: 98.75 x 91 = → 8986.25
   * Yield: 45625 ÷ 8986.25 = → 5.0772%
   * Both methods match to 4 decimal places (5.0772%).
* Common wrong answers (traps):
   * Dividing by face value 100 instead of price 98.75: (1.25 ÷ 100) x (365 ÷ 91) x 100 = 5.0137% (understates yield).
   * Using 360 days instead of 365: (1.25 ÷ 98.75) x (360 ÷ 91) x 100 = 5.0077% (wrong day-count convention).
Sum 2 (Faded) · 182-Day T-Bill Price from Yield (Ch 3)
* Data: A bank targets a yield of 6.50% on a 182-day Treasury Bill (illustrative). What price per ₹100 face value should it bid? [F22, F24]
* Method 1 (IIBF calculator key presses — denominator factor first):
   * Yield x days: 6.50 x 182 = → 1183
   * Divide by 36500: 1183 ÷ 36500 = → 0.03241095890
   * Add 1: + 1 = → 1.03241095890 (note down 1.032411)
   * Divide 100 by factor: 100 ÷ 1.0324109589 = → ₹96.8607
* Method 2 (Clear the fraction: P = (100 x 365) ÷ [365 + (Y/100 x D)]):
   * Numerator: 100 x 365 = → 36500
   * Denominator: 0.065 x 182 = 11.83; 365 + 11.83 = → 376.83
   * Price: 36500 ÷ 376.83 = → ₹96.8607
   * Both methods match to 4 decimal places (₹96.8607).
* Common wrong answer (trap):
   * Front-ended discount subtraction: 100 − (100 x 6.50% x 182 ÷ 365) = 100 − 3.2411 = ₹96.7589 (wrong — Indian T-Bills use rear-ended discount).
Sum 3 (Your Turn) · 42-Day Cash Management Bill (CMB) Yield from Price (Ch 3)
* Data: A 42-day Cash Management Bill (illustrative) is issued at ₹99.30 per ₹100 face value. Compute its annualised yield (%). [F10, F22, F23]
* Method 1 (IIBF calculator key presses):
   * Discount: 100 − 99.30 = → 0.70
   * Divide by price: 0.70 ÷ 99.30 = → 0.00704934541
   * Annualise: x 365 ÷ 42 x 100 = → 6.1262%
* Method 2 (Combined numerator ÷ combined denominator):
   * Numerator: 0.70 x 36500 = → 25550
   * Denominator: 99.30 x 42 = → 4170.60
   * Yield: 25550 ÷ 4170.60 = → 6.1262%
   * Both methods match to 4 decimal places (6.1262%).
* Common wrong answer (trap): Dividing by 100 gives 6.0833% (wrong).
Sum 4 (Small — Auction) · Multiple-Price vs Uniform-Price Auction Outflow (Ch 2)
* Data: In a 91-day T-Bill Multiple-Price auction (illustrative), the cut-off price is ₹98.40. Bank A bids ₹98.50 and Bank B bids ₹98.40, each for ₹10 crore face value. What does each bank pay? [F20, F21]
* Method 1 (Direct rupee calculation — ₹10 crore = ₹10,00,00,000):
   * Bank A: 100000000 x 98.50 ÷ 100 = → ₹9,85,00,000.00 (₹9.85 crore)
   * Bank B: 100000000 x 98.40 ÷ 100 = → ₹9,84,00,000.00 (₹9.84 crore)
   * Extra paid by Bank A (winner's curse): 98500000 − 98400000 = → ₹1,00,000.00 (₹1 lakh)
* Method 2 (In ₹ crore, using ₹0.10 price difference per ₹100 = 0.10%):
   * Bank A: 10 x 0.9850 = ₹9.85 crore; Bank B: 10 x 0.9840 = ₹9.84 crore.
   * Difference: 10 crore x 0.10 % = ₹0.01 crore = ₹1,00,000.00. Both methods match.
* Comparison (if Uniform Price): Both banks would have paid the cut-off ₹98.40, i.e., ₹9.84 crore each.
Sum 5 (Worked — CP) · 90-Day Commercial Paper Issue Price & Proceeds (Ch 4)
* Data: A company issues a 90-day Commercial Paper (illustrative) of face value ₹50,00,000 (₹50 lakh; 10 units of ₹5 lakh) at a yield of 7.30%. Compute the price per ₹100 and the total issue proceeds. [F22, F24, F25]
* Method 1 (IIBF calculator key presses — per ₹100 price first, FIMMDA 4-decimal convention):
   * Yield x days ÷ 36500: 7.30 x 90 = 657 ÷ 36500 = → 0.018 (exact)
   * Denominator: 1 + 0.018 = → 1.018
   * Price per ₹100: 100 ÷ 1.018 = → ₹98.2318 (rounded to 4 decimals per FIMMDA Handbook 2026)
   * Total issue proceeds (at rounded price per ₹100): 5000000 x 98.2318 ÷ 100 = → ₹49,11,590.00
* Method 2 (Clear fraction for per-₹100 price, then scale):
   * 36500 ÷ [365 + (0.073 x 90)] = 36500 ÷ (365 + 6.57) = 36500 ÷ 371.57 = → ₹98.2318
   * Proceeds: 50000 x 98.2318 = → ₹49,11,590.00. Both methods match.
   * (Note: Direct unrounded division 5000000 ÷ 1.018 gives ₹49,11,591.36; FIMMDA Handbook 2026 Sec. 6.4.1 rounds price per ₹100 to 4 decimals first, giving ₹49,11,590.00.)
Homework Sum · 146-Day Certificate of Deposit (CD) Price from Yield (Close)
* Data: A Scheduled Commercial Bank issues a 146-day CD (illustrative) of face value ₹10,00,000 (₹10 lakh) at a yield of 7.50%. Find the price per ₹100 and issue proceeds. [F22, F24, F29]
* Method 1 (IIBF calculator key presses):
   * 7.50 x 146 = 1095 ÷ 36500 = → 0.03 (exact; 146 ÷ 365 = 0.4)
   * Denominator: 1 + 0.03 = → 1.03
   * Price per ₹100: 100 ÷ 1.03 = → ₹97.0874
   * Proceeds (at 4-decimal price): 1000000 x 97.0874 ÷ 100 = → ₹9,70,874.00 (unrounded 1000000 ÷ 1.03 = ₹9,70,873.79).
* Method 2 (Clear fraction):
   * 36500 ÷ [365 + (0.075 x 146)] = 36500 ÷ (365 + 10.95) = 36500 ÷ 375.95 = → ₹97.0874 → ₹9,70,874.00. Both methods match.
Practice Numericals (Practice Q7 & Q8)
* Practice Q7 (180-day CD Yield from Price): Face value ₹5,00,000, issue price ₹4,82,500 (₹96.50 per ₹100), tenor 180 days.
   * Method 1: (500000 − 482500) = 17500 ÷ 482500 x 365 ÷ 180 x 100 = → 7.3546%.
   * Method 2: (100 − 96.50) x 36500 ÷ (96.50 x 180) = 127750 ÷ 17370 = → 7.3546%. Both match.
* Practice Q8 (364-day T-Bill Price from Yield): Yield 6.80%, tenor 364 days.
   * Method 1: 6.80 x 364 ÷ 36500 + 1 = 1.0678137; 100 ÷ 1.0678137 = → ₹93.6493.
   * Method 2: 36500 ÷ [365 + (0.068 x 364)] = 36500 ÷ 389.752 = → ₹93.6493. Both match.