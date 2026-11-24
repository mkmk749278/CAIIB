# C04 · Numericals (c1, 2026-11-24)
All bank names, amounts, rates, and dates are illustrative. Every calculation is verified two independent ways in Python Decimal and designed for the IIBF basic 8-function calculator (+ − × ÷ % √, 12 digits, no scientific keys). Rates rounded to 4 decimals where applicable; rupee amounts to 2 decimals.
Governing rules as at 31 Dec 2026 (subject to 2–4 Dec 2026 MPC freeze check): CRR = 3.00% [F18], Daily minimum CRR = 99% of required CRR (w.e.f. 16 Oct 2026) [F20], SLR = 18.00% [F22], Bank Rate = 5.75% [F35], Penal interest = 8.75% p.a. (Bank Rate + 3%, Day 1) and 10.75% p.a. (Bank Rate + 5%, continuing days) [F30, F32], LTB exemption = Min(EC, LB) [F14].
Warm-up Recall · Last Class T-Bill Yield (N003–N004)
* Data: 91-day GoI Treasury Bill priced at ₹98.50 (face value ₹100).
* Method 1: Discount = 100 − 98.50 = 1.50; keys: 1.5 ÷ 98.5 × 365 ÷ 91 × 100 = → 6.1081%.
* Method 2: Numerator 1.5 × 36500 = 54750; Denominator 98.5 × 91 = 8963.5; 54750 ÷ 8963.5 = → 6.1081% (exact match).
Sum 1 (Ch 1 & Ch 4 Case Q1) · Adjusted NDTL with Exclusions, Inter-Bank Netting & LTB Exemption (N022–N028, N087–N089)
* Data (Deccan Commercial Bank, illustrative, as on 15 October 2026 — governing fortnight 1–15 November 2026): Demand liabilities (others) ₹12,000 cr [F2]; Time liabilities (others) ₹28,000 cr [F3]; ODTL ₹2,000 cr [F5]. Excluded traps: Capital & reserves ₹4,500 cr [F8], NABARD refinance ₹800 cr [F8], Net income-tax provision ₹200 cr [F9], DICGC pending claim ₹50 cr [F9]. Inter-bank: Liabilities ₹1,500 cr, Assets ₹2,200 cr [F7]. LTB: Outstanding LB = ₹2,500 cr, Eligible Credit EC = ₹2,000 cr [F13, F14].
* Method 1: Liabilities to others 12000 + 28000 + 2000 = ₹42,000 cr; Net inter-bank 1500 − 2200 = −700 → floored at ₹0 [F7]; LTB exemption Min(2000, 2500) = ₹2,000 cr [F14]; Adjusted NDTL: 42000 − 2000 = → ₹40,000.00 crore.
* Method 2: Aggregate public deposits 12000 + 28000 = 40000; 40000 + 2000 − 2000 = → ₹40,000.00 crore (exact match).
* Common wrong answer: Subtracting ₹700 cr excess inter-bank assets (₹39,300 cr), or deducting ₹2,500 cr instead of Min(EC, LB).
Sum 2 (Ch 2) · Required CRR, Daily Minimum CRR (99%), and Shortfall Penal Interest (N048–N055)
* Step A · Required CRR (3.00%): Method 1 40000 × 3 % = ₹1,200.00 crore; Method 2 40000 × 0.03 = ₹1,200.00 crore [F18].
* Step B · Daily Minimum CRR (99%): Method 1 1200 × 99 % = ₹1,188.00 crore; Method 2 1200 − (1200 × 1 %) = 1200 − 12 = ₹1,188.00 crore [F20]. (Old 90% trap = ₹1,080 crore.)
* Step C · Day 1 Shortfall Penalty: Closing RBI balance ₹1,148 cr → Shortfall = 1188 − 1148 = ₹40 cr (₹40,00,00,000). Rate = 5.75% + 3% = 8.75% p.a. [F30, F35]. Method 1: 400000000 × 8.75 % ÷ 365 = ₹95,890.41. Method 2: 40 × 0.0875 = ₹3.50 cr/yr = 35000000 ÷ 365 = ₹95,890.41 (exact match).
* Step D · Day 2 Continuing Shortfall (Your Turn, H: 15 s): Same ₹40 cr shortfall continues on Day 2 → Rate jumps to 5.75% + 5% = 10.75% p.a. [F30]. Method 1: 400000000 × 10.75 % ÷ 365 = ₹1,17,808.22. Method 2: 40 × 0.1075 = ₹4.30 cr/yr = 43000000 ÷ 365 = ₹1,17,808.22 (exact match).
Sum 3 (Ch 3) · Money Multiplier & CRR Cut Liquidity Injection (N081–N083)
* Part A · 100 bps CRR cut on ₹200 lakh crore NDTL: Method 1 20000000 × 1 % = ₹2,00,000.00 crore (₹2.00 lakh crore); Method 2 800000 − 600000 = ₹2,00,000.00 crore [F37].
* Part B · Money Multiplier (M0 = ₹50 lakh cr, M3 = ₹275 lakh cr): Method 1 275 ÷ 50 = 5.50; Method 2 reverse check 50 × 5.50 = 275 [F37].
Ch 4 Case Study · Deccan Commercial Bank — 5 Linked Questions (N087–N096)
* Q1 (Adjusted NDTL): ₹40,000.00 crore [F1, F7–F9, F14].
* Q2 (Required CRR & 99% Daily Floor): CRR 3% = ₹1,200.00 crore; 99% floor = ₹1,188.00 crore (branch cash ₹150 cr excluded) [F18, F20].
* Q3 (Required SLR & Surplus): Required SLR (18%): 40000 × 18 % = ₹7,200.00 crore [F22]. Eligible SLR held: Branch cash ₹150 cr + Excess CRR ₹30 cr + SDF ₹120 cr + Bullion/gold at market ₹200 cr + Unencumbered G-secs/T-Bills ₹6,900 cr = ₹7,400.00 crore (excluding ₹400 cr encumbered G-secs & ₹300 cr dev-bank bonds) [F23–F27]. Surplus = 7400 − 7200 = ₹200.00 crore (Method 2: 7400 ÷ 40000 = 18.50%; 0.50% × 40000 = ₹200.00 cr).
* Q4 (Cost of SLR Non-Deployment): Excess ₹200 cr earns 6.80% vs 9.80% advances. Method 1: (9.80 − 6.80) = 3%; 200 × 3 % = ₹6.00 crore/year. Method 2: (200 × 9.8 %) − (200 × 6.8 %) = 19.60 − 13.60 = ₹6.00 crore/year.
* Q5 (Day 5 CRR Shortfall Penalty): RBI balance ₹1,158 cr → Shortfall = 1188 − 1158 = ₹30 cr (₹30,00,00,000). Method 1: 300000000 × 8.75 % ÷ 365 = ₹71,917.81. Method 2: 26250000 ÷ 365 = ₹71,917.81 [F30].
Homework Sum (N104) & Practice Sum (Practice Q8)
* Homework (NDTL ₹50,000 cr): CRR (3%) = ₹1,500.00 cr; Daily min (99%) = ₹1,485.00 cr; SLR (18%) = ₹9,000.00 cr.
* Practice Q8 (2-day ₹20 cr daily CRR shortfall @ Bank Rate 5.75%): Day 1 (8.75%) = 200000000 × 8.75 % ÷ 365 = ₹47,945.21; Day 2 (10.75%) = 200000000 × 10.75 % ÷ 365 = ₹58,904.11; Total = ₹1,06,849.32 (Method 2: 200000000 × (0.0875 + 0.1075) ÷ 365 = ₹1,06,849.32).