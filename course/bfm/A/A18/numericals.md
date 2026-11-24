# A18 · Numericals (c1, 2026-11-24)
All names, amounts, rates, and dates are illustrative. Verified two independent ways in Python (Decimal & datetime.date); all match exactly. Basic IIBF 8-function calculator only (+ − × ÷ % √, 12 digits).
Warm-up · A17 homework (N002–N003)
* Data: FCNR(B) USD 25,000, 1 year (365 days), 4.00% p.a. (360-day year, 180-day compounding + 5 actual days).
* Method 1 (Calculator key presses):
* Period 1: 25000 × 4 % × 180 ÷ 360 = USD 500.00 → USD 25,500.00.
* Period 2: 25500 × 4 % × 180 ÷ 360 = USD 510.00 → USD 26,010.00.
* Remaining 5 days: 26010 × 4 % × 5 ÷ 360 = USD 14.45.
* Maturity: USD 26,024.45; Interest: USD 1,024.45 [F21].
* Method 2 (Closed-form): 25000 × 1.02 × 1.02 × (1 + 0.04 × 5 ÷ 360) = USD 26,024.45. Both match.
Sum 1 · Returning Engineer Day-Count (N034–N035)
* Data: Vikram returns permanently from London on 1 November 2026 (Tax Year 2026-27: 1 Apr 2026 – 31 Mar 2027; 2027 is non-leap). Prior 4 years in India = 120 days.
* Method 1 (Month-by-month calculator key presses): 30 + 31 + 31 + 28 + 31 = → 151 days (Nov 30 + Dec 31 + Jan 31 + Feb 28 + Mar 31) [F22].
* Method 2 (Calendar date difference): (2027-03-31 − 2026-11-01) + 1 = 151 days. Both match.
* Verdict: FEMA Resident immediately on 1 Nov 2026 (s. 2(v)(i)(B)); Income-tax Non-Resident for Tax Year 2026-27 (151 < 182 and 120 < 365 u/s 6(2)).
Sum 2 · Housing Loan LTV & Margin — Worked Example (N052–N053)
* Data: Pune flat cost ₹80,00,000 (excl. stamp duty & registration ₹5,60,000, excluded u/Para 113 since cost > ₹10 lakh). Slab: > ₹75 lakh → max LTV 75% (RW 50%) [F18, F23].
* Method 1 (Calculator key presses): Max loan: 8000000 × 75 % = → ₹60,00,000. Margin: 8000000 − 6000000 = → ₹20,00,000.
* Method 2 (Margin-first check): Margin (25%): 8000000 × 25 % = ₹20,00,000; Loan = 8000000 − 2000000 = ₹60,00,000. Both match.
* Common wrong answer: Including stamp duty (8560000 × 75 % = ₹64,20,000), which violates Para 113.
Sum 3 · Housing Loan LTV — "Your Turn" (N053–N054)
* Data: Flat cost ₹60,00,000 (excl. stamp duty). Slab: > ₹30L–₹75L → max LTV 80% (RW 35%) [F18, F24].
* Method 1: 6000000 × 80 % = ₹48,00,000 max loan; 6000000 − 4800000 = ₹12,00,000 margin.
* Method 2: 6000000 × 20 % = ₹12,00,000 margin → 6000000 − 1200000 = ₹48,00,000 loan. Both match.
Homework Sum (N080)
* Data: Flat cost ₹28,00,000 (excl. stamp duty). Slab: ≤ ₹30 lakh → max LTV 90% (RW 50%) [F18, F25].
* Method 1: 2800000 × 90 % = ₹25,20,000 max loan; 2800000 − 2520000 = ₹2,80,000 margin.
* Method 2: 2800000 × 10 % = ₹2,80,000 margin → 2800000 − 280000 = ₹25,20,000 loan. Both match.