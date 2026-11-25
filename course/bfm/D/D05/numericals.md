# D05 · Numericals ("Interest rate risk 1: sources, gap, NII, NIM")
All bank names, rates, and rupee amounts are illustrative. Every sum is designed for the IIBF basic 8-function calculator (+ − × ÷ % √, 12 digits, no scientific keys), solved two independent ways in Python (Decimal), and verified to match to 4 decimal places. Rates/percentages shown to 4 decimals where intermediate and 2 decimals final; rupee amounts to 2 decimals.
Rules Used
* Repricing Gap: Gap = RSA − RSL (excluding non-sensitive items: Cash, Fixed Assets, Current Deposits, Capital & Reserves) [F15, F17].
* Change in NII: ΔNII = Gap × Δr (signed Gap × signed rate change; 100 bps = 1.00% = 0.01) [F20].
* NII: Interest Earned (net of unrealised NPA interest reversal) − Interest Expended [F22, F25].
* NIM (RBI Statistical Tables & IIBF standard): NIM = (NII ÷ Average Total Assets) × 100 [F23]; Trap: Average Earning Assets gives a higher % [F24].
________________
Sum 1 · Repricing Gap & Asset/Liability Sensitivity (Chapter 2, Worked in Full)
Data (illustrative — Kaveri Commercial Bank, 0–1 Year Cumulative Bucket)
* Assets: Floating-rate loans (3-month reset) = ₹4,200 crore; Fixed-rate T-Bills (6-month maturity) = ₹1,100 crore; Call money lent = ₹500 crore; Cash in hand = ₹300 crore (non-sensitive); Fixed Assets = ₹400 crore (non-sensitive).
* Liabilities: Term deposits maturing ≤ 1 year = ₹3,600 crore; Floating-rate borrowings (6-month reset) = ₹900 crore; Interest-sensitive portion of Savings deposits = ₹700 crore; Current deposits = ₹600 crore (non-sensitive); Capital & Reserves = ₹800 crore (non-sensitive).
* Find: Total RSA, Total RSL, Repricing Gap, and sensitivity type.
Method 1 · Total RSA Minus Total RSL (Direct IIBF Calculator Key Presses)
* Total RSA (exclude Cash & Fixed Assets): 4200 + 1100 + 500 = → ₹5,800.00 crore
* Total RSL (exclude Current Deposits & Capital): 3600 + 900 + 700 = → ₹5,200.00 crore
* Repricing Gap: 5800 − 5200 = → +₹600.00 crore (Positive / Asset-sensitive).
Method 2 · Component-by-Component Netting (Check)
* Pair 1: 4200 − 3600 = +600
* Pair 2: 1100 − 900 = +200
* Pair 3: 500 − 700 = −200
* Sum: 600 + 200 − 200 = → +₹600.00 crore. Both methods match exactly.
* Commonest Wrong Answer: Including Current deposits (₹600 cr) in RSL gives 5,800 − 5,800 = ₹0 (falsely showing a matched book), or including Cash (₹300 cr) in RSA gives +₹900 crore.
________________
Sum 2A · Change in NII for a Positive Gap (Chapter 3, Faded)
Data (illustrative — Kaveri Commercial Bank)
* 1-year Repricing Gap = +₹600 crore; parallel rate increase Δr = +75 bps (+0.75%).
Method 1 · Calculator % Key
* Key presses: 600 × 0.75 % = → +₹4.50 crore (NII rises by ₹4.50 crore).
Method 2 · Decimal Multiplier (Check)
* 75 bps = 75 ÷ 10000 = 0.0075
* Key presses: 600 × 0.0075 = → +₹4.50 crore. Both methods match exactly.
________________
Sum 2B · Change in NII for a Negative Gap (Chapter 3, Your Turn — 15 s)
Data (illustrative — Godavari Bank)
* 1-year RSA = ₹4,100 crore; 1-year RSL = ₹4,900 crore; parallel rate increase Δr = +50 bps (+0.50%).
Method 1 · Gap Formula (Calculator Key Presses)
* Gap: 4100 − 4900 = → −₹800.00 crore (Negative / Liability-sensitive).
* ΔNII: 800 × 0.50 % = → ₹4.00 crore, with negative sign → −₹4.00 crore (NII falls by ₹4.00 crore).
Method 2 · Separate Interest Income & Expense Impact (Check)
* Additional Interest Earned on RSA: 4100 × 0.50 % = +₹20.50 crore
* Additional Interest Expended on RSL: 4900 × 0.50 % = +₹24.50 crore
* Net ΔNII: 20.50 − 24.50 = → −₹4.00 crore. Both methods match exactly.
* Commonest Wrong Answer: Reporting +₹4.00 crore (dropping the negative sign) or multiplying 800 × 50 instead of 0.50% (getting ₹400 crore).
________________
Sum 3 · NIM from Yields & Costs with Reversal of Unrealised NPA Interest (Chapter 3, Worked in Full)
Data (illustrative — Kaveri Commercial Bank)
* Advances = ₹6,000 crore @ 9.50% average yield; Investments = ₹2,500 crore @ 7.20% average yield; Non-earning assets = ₹1,500 crore.
* Deposits = ₹7,500 crore @ 5.40% average cost; Borrowings = ₹1,000 crore @ 6.50% average cost.
* Unrealised accrued interest on a new NPA to be reversed = ₹30 crore [F25].
* Find: NII and NIM (RBI / IIBF standard: Average Total Assets), plus compare with Average Earning Assets.
Method 1 · Step-by-Step Rupee Computation (Calculator Key Presses)
* Interest on Advances: 6000 × 9.50 % = → ₹570.00 crore
* Interest on Investments: 2500 × 7.20 % = → ₹180.00 crore
* Gross Interest Earned: 570 + 180 = → ₹750.00 crore
* Less Reversal of Unrealised NPA Interest: 750 − 30 = → ₹720.00 crore (Net Interest Earned)
* Interest on Deposits: 7500 × 5.40 % = → ₹405.00 crore
* Interest on Borrowings: 1000 × 6.50 % = → ₹65.00 crore
* Total Interest Expended: 405 + 65 = → ₹470.00 crore
* NII: 720 − 470 = → ₹250.00 crore
* Average Total Assets: 6000 + 2500 + 1500 = → ₹10,000.00 crore
* NIM (Average Total Assets): 250 ÷ 10000 × 100 = → 2.5000% → 2.50%
Method 2 · Ratio Difference Check (Interest Earned/ATA − Interest Expended/ATA)
* Net Interest Earned / ATA: 720 ÷ 10000 × 100 = 7.2000%
* Interest Expended / ATA: 470 ÷ 10000 × 100 = 4.7000%
* NIM: 7.2000 − 4.7000 = → 2.5000% → 2.50%. Both methods match exactly.
Trap Comparisons
* Trap 1 (Forgetting ₹30 cr NPA reversal): NII = 750 − 470 = ₹280 cr → NIM = 280 ÷ 10000 × 100 = 2.80% (overstates NIM by 30 bps).
* Trap 2 (Using Average Earning Assets = ₹8,500 cr): 250 ÷ 8500 × 100 = 2.9412% → 2.94% (higher by 44 bps).
________________
Homework · Negative Gap with Falling Interest Rates (Close)
Data (illustrative)
* 1-year RSA = ₹3,200 crore; 1-year RSL = ₹4,000 crore; parallel rate cut Δr = −100 bps (−1.00%).
Method 1 · Gap Formula
* Gap: 3200 − 4000 = → −₹800.00 crore
* ΔNII: (−800) × (−1.00%) → key presses 800 × 1 % = → +₹8.00 crore (two negatives make a positive: NII rises by ₹8.00 crore).
Method 2 · Separate Cash-Flow Impact (Check)
* Change in Interest Earned: 3200 × (−1%) = −₹32.00 crore
* Change in Interest Expended: 4000 × (−1%) = −₹40.00 crore
* Net ΔNII: −32.00 − (−40.00) = → +₹8.00 crore. Both methods match exactly.
________________
Practice Numericals Verification (D05_practice Q1–Q3)
* Practice Q1 (Positive Gap + Rate Cut): Gap = +₹1,200 crore, Δr = −40 bps (−0.40%).
* Method 1: 1200 × 0.40 % = → −₹4.80 crore (NII falls by ₹4.80 crore).
* Method 2: 1200 × (−0.004) = → −₹4.80 crore. Both match.
* Practice Q2 (NIM with Opening/Closing Total Assets & NPA Reversal): Opening Total Assets = ₹11,500 crore; Closing Total Assets = ₹12,500 crore; Gross Interest Earned = ₹1,020 crore; Unrealised NPA interest reversal = ₹45 crore; Interest Expended = ₹675 crore.
* Method 1: Average Total Assets = (11500 + 12500) ÷ 2 = ₹12,000 crore; Net Interest Earned = 1020 − 45 = ₹975 crore; NII = 975 − 675 = ₹300 crore; NIM = 300 ÷ 12000 × 100 = 2.50%.
* Method 2: (975 ÷ 12000 × 100) − (675 ÷ 12000 × 100) = 8.1250% − 5.6250% = 2.50%. Both match.
* Practice Q3 (Multi-Bucket Gap Identification): 1–28 days RSA = ₹1,450 cr, RSL = ₹1,900 cr; 29d–3m RSA = ₹2,300 cr, RSL = ₹1,650 cr; Cash ₹250 cr & Current Deposits ₹400 cr (non-sensitive).
* Method 1 (Bucket gaps): Bucket 1 = 1450 − 1900 = −₹450 cr; Bucket 2 = 2300 − 1650 = +₹650 cr; Cumulative 0–3m Gap = −450 + 650 = +₹200.00 crore.
* Method 2 (Cumulative totals): Total RSA = 1450 + 2300 = ₹3,750 cr; Total RSL = 1900 + 1650 = ₹3,550 cr; Gap = 3750 − 3550 = +₹200.00 crore. Both match.