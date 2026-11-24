# A17 · Numericals (c1, 2026-11-24)
All names, amounts, rates, and dates are illustrative. Verified two independent ways in Python (Decimal step-by-step calculator key presses vs closed-form compound formula); both match to 2 decimal places (FCNR(B)) and nearest rupee (NRO TDS) per IRD25 Para 7(7) [F22]. Basic IIBF 8-function calculator only (+ − × ÷ % √, 12 digits).
Warm-up · A16b homework (N002–N003)
* Data: LRS FY 2026-27 limit USD 250,000; tuition fees USD 60,000 + ODI USD 40,000 + rupee loan equivalent USD 50,000.
* Method 1 (Calculator key presses): 60000 + 40000 + 50000 = → USD 150,000 used. 250000 − 150000 = → USD 100,000 left in the LRS jar.
* Method 2 (Sequential subtraction): 250000 − 60000 − 40000 − 50000 = → USD 100,000. Both match.
Sum 1 · NRO Repatriation Headroom (N038–N039)
* Data: Inherited flat sale proceeds ₹5,10,00,000 (at ₹85/USD = USD 600,000) + rent income USD 200,000 credited to NRO; both remitted abroad in the same FY.
* Rule: Current income (rent) is freely repatriable outside the USD 1,000,000/FY cap; only NRO balances/asset sale proceeds count against the cap [F14, F34].
* Method 1 (Calculator key presses): 51000000 ÷ 85 = → USD 600,000 counted against cap. 1000000 − 600000 = → USD 400,000 remaining headroom.
* Method 2 (Direct USD subtraction): Total remitted USD 800,000 − Current income USD 200,000 = USD 600,000 against cap → 1000000 − 600000 = USD 400,000. Both match.
* Common wrong answer: Subtracting rent too (1000000 − 800000 = USD 200,000).
Sum 2 · NRO FD Interest TDS (N060–N061)
* Data: NRO FD interest ₹1,00,000 (no surcharge slab, no DTAA claim). Rate u/s 393(2) Table Sl. 17 + Finance Act 2026: 30% + 4% Health & Education Cess [F24, F33].
* Method 1 (Two-step calculator key presses): Base tax: 100000 × 30 % = → ₹30,000. Cess: 30000 × 4 % = → ₹1,200. Total TDS: 30000 + 1200 = → ₹31,200. Net credited: 100000 − 31200 = → ₹68,800.
* Method 2 (Effective rate 31.20%): Effective rate: 30 × 1.04 = 31.20%. TDS: 100000 × 31.2 % = → ₹31,200; Net: 100000 × 68.8 % = → ₹68,800. Both match.
* Common wrong answer: Deducting only 30% (₹30,000) and forgetting the 4% cess.
Sum 3 · FCNR(B) 1-Year Compounded Interest — Worked Example (N064–N068)
* Data: Principal USD 20,000, tenor 1 year (365 days), rate 5.00% p.a. (within normal ARR + 250 bps ceiling).
* Rule: 360 days to a year; compounded at 180-day intervals and thereafter for remaining actual days (365 − 360 = 5 days); rounded to 2 decimal places [F22, F31].
* Method 1 (Step-by-step calculator key presses):
* First 180 days: 20000 × 5 % × 180 ÷ 360 = → USD 500.00; 20000 + 500 = USD 20,500.00.
* Second 180 days: 20500 × 5 % × 180 ÷ 360 = → USD 512.50; 20500 + 512.5 = USD 21,012.50.
* Remaining 5 days: 21012.5 × 5 % × 5 ÷ 360 = → USD 14.59 (14.5920...).
* Maturity: 21012.5 + 14.59 = → USD 21,027.09; Total interest: 21027.09 − 20000 = → USD 1,027.09.
* Method 2 (Closed-form multiplier): 20000 × 1.025 × 1.025 × (1 + 0.05 × 5 ÷ 360) = 21012.5 × 1.00069444... = USD 21,027.09 → Interest USD 1,027.09. Both match.
* Common wrong answer: Simple interest 20000 × 5 % = USD 1,000.00 (misses 180-day compounding and the 360-day year + 5 extra days).
Sum 4 · FCNR(B) 1-Year Interest — "Your Turn" (N069–N071)
* Data: Principal USD 10,000, tenor 1 year (365 days), rate 4.00% p.a. [F22, F32].
* Method 1 (Step-by-step calculator key presses):
* First 180 days: 10000 × 4 % × 180 ÷ 360 = → USD 200.00 → USD 10,200.00.
* Second 180 days: 10200 × 4 % × 180 ÷ 360 = → USD 204.00 → USD 10,404.00.
* Remaining 5 days: 10404 × 4 % × 5 ÷ 360 = → USD 5.78 (exact).
* Maturity: 10404 + 5.78 = → USD 10,409.78; Total interest: USD 409.78.
* Method 2 (Closed-form multiplier): 10000 × 1.02 × 1.02 × (1 + 0.04 × 5 ÷ 360) = 10404 × 1.00055555... = USD 10,409.78 → Interest USD 409.78. Both match.
* Common wrong answer: Simple interest USD 400.00.
Homework Sum (N103)
* Data: Principal USD 25,000, tenor 1 year (365 days), rate 4.00% p.a.
* Method 1 (Calculator key presses):
* First 180 days: 25000 × 4 % × 180 ÷ 360 = USD 500.00 → USD 25,500.00.
* Second 180 days: 25500 × 4 % × 180 ÷ 360 = USD 510.00 → USD 26,010.00.
* Remaining 5 days: 26010 × 4 % × 5 ÷ 360 = USD 14.45 (exact).
* Maturity: 26010 + 14.45 = USD 26,024.45; Total interest: USD 1,024.45.
* Method 2 (Proportional check from Sum 4): 25000 ÷ 10000 = 2.5; 10409.78 × 2.5 = USD 26,024.45 → Interest USD 1,024.45. Both match.