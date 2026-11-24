# C05 · Numericals ("Bonds: the family, price and yield")
All numbers, bank names, and securities are illustrative. Every sum is designed for the IIBF basic 8-function calculator (+ − × ÷ % √, 12 digits, no scientific or power x^y keys), solved two independent ways in Python Decimal, and verified to match to 4 decimal places. Rates/discount factors shown to 4 decimals; final rupee amounts rounded to 2 decimals.
Sum 1 · Price of a 3-Year Annual Coupon Bond (Full Worked — Chapter 2)
Data (illustrative)
* Face Value (FV) = ₹1,000
* Annual Coupon Rate = 8.00% => Annual Coupon (C) = ₹80
* Maturity (n) = 3 years (annual coupon)
* Market Yield / YTM (r) = 9.00% p.a. (1 + r = 1.09)
* Find: Fair Market Price (P) of the bond.
Method 1 · Repeated Division of Each Cash Flow (Direct IIBF Calculator Method)
* Year 1 PV: 80 ÷ 1.09 = ₹73.3945
* Year 2 PV: 80 ÷ 1.09 ÷ 1.09 = ₹67.3344
* Year 3 PV (coupon + face value = ₹1,080): 1080 ÷ 1.09 ÷ 1.09 ÷ 1.09 = ₹833.9582
* Total Price: 73.3945 + 67.3344 + 833.9582 = ₹974.6871 → ₹974.69


(Sanity check: YTM 9% > Coupon 8%, so bond trades at a discount below ₹1,000.)
Method 2 · Discount Factors & Present Value Annuity Factor (PVAF)
* DF1: 1 ÷ 1.09 = 0.917431 (0.9174)
* DF2: ÷ 1.09 = 0.841680 (0.8417)
* DF3: ÷ 1.09 = 0.772183 (0.7722)
* PVAF(9%, 3) = 0.917431 + 0.841680 + 0.772183 = 2.531295
* PV of Coupons = 80 × 2.531295 = ₹202.5036
* PV of Principal = 1000 × 0.772183 = ₹772.1835
* Total Price = 202.5036 + 772.1835 = ₹974.6871 → ₹974.69


Verification: Method 1 (₹974.6871) = Method 2 (₹974.6871). Exact match to 4 decimals.
Sum 2 · Price of a 2-Year Semi-Annual G-Sec (Faded → Full — Chapter 2, Coupon-Halving Trap)
Data (illustrative)
* Face Value (FV) = ₹100 (standard G-Sec quote)
* Coupon Rate = 7.00% p.a. payable half-yearly => Semi-annual Coupon (C/2) = ₹3.50
* Maturity = 2 years => Number of half-yearly periods (2n) = 4
* Market YTM = 8.00% p.a. => Semi-annual Yield (r/2) = 4.00% (1 + r/2 = 1.04)
* Find: Fair Market Price (P) per ₹100 face value.
Method 1 · Repeated Division per Half-Year
* Period 1 PV: 3.5 ÷ 1.04 = ₹3.3654
* Period 2 PV: 3.5 ÷ 1.04 ÷ 1.04 = ₹3.2359
* Period 3 PV: 3.5 ÷ 1.04 ÷ 1.04 ÷ 1.04 = ₹3.1115
* Period 4 PV (₹3.50 + ₹100 = ₹103.50): 103.5 ÷ 1.04 ÷ 1.04 ÷ 1.04 ÷ 1.04 = ₹88.4722
* Total Price: 3.3654 + 3.2359 + 3.1115 + 88.4722 = ₹98.1851 → ₹98.19
Method 2 · Semi-Annual Discount Factors & PVAF
* DF1 = 1 ÷ 1.04 = 0.961538
* DF2 = DF1 ÷ 1.04 = 0.924556
* DF3 = DF2 ÷ 1.04 = 0.888996
* DF4 = DF3 ÷ 1.04 = 0.854804
* PVAF(4%, 4) = 0.961538 + 0.924556 + 0.888996 + 0.854804 = 3.629895
* Price = 3.50 × 3.629895 + 100 × 0.854804 = 12.7046 + 85.4804 = ₹98.1851 → ₹98.19


Commonest Wrong Answer (Exam Trap): Treating it as annual (7 ÷ 1.08 + 107 ÷ 1.08 ÷ 1.08 =) gives ₹98.22 — wrong by 3 paise per ₹100. Always halve coupon, halve yield, and double periods.


Verification: Method 1 (₹98.1851) = Method 2 (₹98.1851). Exact match to 4 decimals.
Sum 3 · Your Turn: 1-Year Semi-Annual Bond Price (Chapter 2)
Data (illustrative)
* Face Value = ₹100, Coupon = 8.00% p.a. half-yearly (₹4.00 per half-year), Maturity = 1 year (2 periods), YTM = 10.00% p.a. (5.00% per half-year, 1.05).
Method 1 · Repeated Division
* Period 1 PV: 4 ÷ 1.05 = ₹3.8095
* Period 2 PV: 104 ÷ 1.05 ÷ 1.05 = ₹94.3311
* Total Price: 3.8095 + 94.3311 = ₹98.1406 → ₹98.14
Method 2 · Discount Factors
* DF1 = 0.952381, DF2 = 0.907029, PVAF = 1.859410
* Price = 4 × 1.859410 + 100 × 0.907029 = 7.4376 + 90.7029 = ₹98.1406 → ₹98.14


Verification: Method 1 (₹98.1406) = Method 2 (₹98.1406). Exact match to 4 decimals.
Sum 4 · Current Yield & YTM Approximation (Chapter 3)
Data (illustrative)
* Face Value (FV) = ₹1,000, Annual Coupon = 8.40% (C = ₹84), Current Market Price (P) = ₹960, Remaining Maturity (n) = 4 years.
* Find: (a) Current Yield, and (b) Approximate Yield to Maturity (YTM).
Part (a) · Current Yield
* Method 1: 84 ÷ 960 × 100 = 8.7500% (8.75%)
* Method 2: (8.40 × 1000) ÷ 960 = 8.7500% (8.75%)
Part (b) · YTM Approximation
* Method 1 (Standard Formula):
   * Annual capital gain = (1000 − 960) ÷ 4 = ₹10
   * Numerator (annual total return) = 84 + 10 = ₹94
   * Denominator (average investment) = (1000 + 960) ÷ 2 = ₹980
   * YTM_approx: 94 ÷ 980 × 100 = 9.5918% → 9.59%
* Method 2 (Combined Algebraic Form): YTM_approx = [2 × (nC + FV − P)] / [n × (FV + P)] × 100
   * Numerator: 2 × (4 × 84 + 1000 − 960) = 2 × (336 + 40) = 752
   * Denominator: 4 × (1000 + 960) = 7840
   * 752 ÷ 7840 × 100 = 9.5918% → 9.59%


(Order check for discount bond: Coupon 8.40% < Current Yield 8.75% < YTM 9.59%.)


Verification: Both methods match exactly (8.7500% and 9.5918%).
Sum 5 · Accrued Interest (30/360 G-Sec), Clean vs Dirty Price & Total Consideration (Chapter 3)
Data (illustrative)
* Security: 7.20% GS 2033 (Central Government dated security, half-yearly coupon)
* Face Value of trade = ₹5,00,00,000 (₹5 crore — standard market lot)
* Clean Price quoted = ₹101.40 per ₹100 face value
* Last Coupon Date = 15 June 2026; Settlement Date = 25 August 2026
* Day-count convention for Indian G-Secs = 30/360 [F30]
Step 1 · Days Under 30/360
* June 15 to July 15 = 30 days; July 15 to August 15 = 30 days; August 15 to August 25 = 10 days
* Formula: (8 − 6) × 30 + (25 − 15) = 60 + 10 = 70 days
Method 1 · Per-₹100 Dirty Price First
* Accrued Interest per ₹100: 7.20 × 70 ÷ 360 = ₹1.4000
* Dirty Price per ₹100: 101.40 + 1.40 = ₹102.8000
* Total Consideration: 50000000 × 102.80 ÷ 100 = ₹5,14,00,000.00 (₹5.14 crore)
Method 2 · Separate Clean Consideration + Total Broken-Period Interest
* Clean Consideration: 50000000 × 101.40 ÷ 100 = ₹5,07,00,000.00
* Total Accrued Interest: 50000000 × 7.20% × 70 ÷ 360 = ₹7,00,000.00
* Total Consideration: 50700000 + 700000 = ₹5,14,00,000.00 (₹5.14 crore)


Commonest Wrong Answer (Exam Trap): Using Actual/365 (15 + 31 + 25 = 71 days; 7.20 × 71 ÷ 365 = ₹1.4005) applies the T-Bill money-market convention instead of the 30/360 G-Sec convention. Also note accounting rule [F31]: the ₹7,00,000 broken-period interest paid is charged to the Profit & Loss Account, never capitalised into the bond's cost.


Verification: Method 1 (₹5,14,00,000.00) = Method 2 (₹5,14,00,000.00). Exact match.