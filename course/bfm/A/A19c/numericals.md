# A19c · Numericals (c1, 2026-11-24)
All names, amounts, and dates are illustrative. Every sum works on the IIBF basic 8-function calculator (+ − × ÷ % √, 12 digits) and is solved two independent ways (verified in Python with Decimal and step-by-step calculator key presses).
Rules (from A19c_fact_sheet):
* LSF for flow/transactional returns (FC-GPR, FC-TRS, LLP-I, LLP-II, CN, ESOP, DI, InVi): ₹7,500 + (0.025% × A × n) [F31].
* n: years of delay rounded upwards to the nearest month and expressed to 2 decimal points [F31].
* Cap & rounding: capped at 100% of A and rounded upwards to the nearest ₹100 [F32].
* LSF for non-flow returns (FLA): flat ₹7,500 [F30].
Warm-up · Previous class homework (N002–N003)
Listed company has 50 lakh equity shares + 10 lakh 1:1 CCDs; FPI holds 5.5 lakh shares.
* Method 1 (percentage): 50 + 10 = 60; 5.5 ÷ 60 × 100 = → 9.1667% (< 10% → FPI).
* Method 2 (decimal ratio): 5.5 ÷ 60 = 0.091667 (< 0.10 → FPI).
* Common trap: 5.5 ÷ 50 × 100 = 11.00% (ignores CCDs in denominator). Both methods match: 9.17% → FPI.
Q1 (Worked) · Delayed FC-GPR for Sahyadri Sensors (N059–N061)
Data: Amount A = ₹5,00,00,000 (₹5 crore); delay = 6 months (n = 6 ÷ 12 = 0.50 years).
* Method 1 (IIBF calculator % key): 50000000 × 0.025 % = 12500; 12500 × 0.50 = 6250; 6250 + 7500 = 13750; round upwards to nearest ₹100 → ₹13,800 (below 100% of A).
* Method 2 (decimal factor 0.00025): 50000000 × 0.00025 × 0.50 = 6250; 7500 + 6250 = 13750 → rounded upwards to nearest ₹100 = ₹13,800.
* Common trap: stopping at ₹13,750 without rounding upwards to nearest ₹100. Both methods match: ₹13,800.
Q2 (Faded) · Delayed Form LLP(I) with fractional month (N062–N064)
Data: Amount A = ₹2,00,00,000 (₹2 crore); delay = 3 months and 10 days.
* Step 1: Round delay upwards to nearest month → 4 months → 4 ÷ 12 = 0.33 years.
* Method 1 (IIBF calculator % key): 20000000 × 0.025 % = 5000; 5000 × 0.33 = 1650; 1650 + 7500 = 9150; round upwards to nearest ₹100 → ₹9,200.
* Method 2 (rate × years first): 0.00025 × 0.33 = 0.0000825; 20000000 × 0.0000825 = 1650; 7500 + 1650 = 9150 → rounded upwards to nearest ₹100 = ₹9,200.
* Both methods match: ₹9,200.
Q3 (Your Turn) · Delayed Form CN for a startup (N065–N067)
Data: Amount A = ₹40,00,000 (₹40 lakh); delay = 1 year and 6 months (n = 1.50 years).
* Method 1 (IIBF calculator % key): 4000000 × 0.025 % = 1000; 1000 × 1.50 = 1500; 1500 + 7500 = ₹9,000 (exact multiple of ₹100).
* Method 2 (decimal factor): 4000000 × 0.00025 × 1.50 = 1500; 7500 + 1500 = ₹9,000.
* Both methods match: ₹9,000.
Cap Twist · Small-value FC-GPR (N067)
Data: Amount A = ₹5,000; delay = 1 year (n = 1.00).
* Method 1 (formula then cap): 5000 × 0.025 % × 1 = 1.25; 7500 + 1.25 = 7501.25 → rounded up = ₹7,600; compare with cap 100% × 5000 = ₹5,000 → ₹5,000.
* Method 2 (cap check first): Fixed component ₹7,500 > A (₹5,000) → capped at ₹5,000.
* Both methods match: ₹5,000.
Homework (N099)
Data: Amount A = ₹8,00,00,000 (₹8 crore); delay = 9 months (n = 9 ÷ 12 = 0.75 years).
* Method 1 (IIBF calculator % key): 80000000 × 0.025 % = 20000; 20000 × 0.75 = 15000; 15000 + 7500 = ₹22,500 (exact multiple of ₹100).
* Method 2 (decimal factor): 80000000 × 0.00025 × 0.75 = 15000; 7500 + 15000 = ₹22,500.
* Both methods match: ₹22,500.