# D07b · Numericals (c1, 2026-11-24)
All names, banks, desks, loans, rates, and amounts are illustrative. Every sum is designed strictly for the IIBF basic 8-function calculator (+ − × ÷ % √, 12 digits, no scientific or statistical keys), solved two independent ways in Python Decimal, and verified to match to 4 decimal places. Rates/percentages are shown to 4 decimals where non-terminating (rounded to 2 decimals in speech); rupee amounts are shown to 2 decimals.


Rules & Formulas Used (from D07b_fact_sheet):


* Expected Loss: EL = PD × LGD × EAD [F1]
* RAROC: (Revenue − Funding & Operating Costs − EL) ÷ Economic Capital × 100 [F5]
* Hurdle Decision: RAROC > Hurdle Rate → Accept (value created); RAROC < Hurdle Rate → Reject/Reprice [F9]
* Minimum Risk-Based Lending Rate: Funding & Operating Cost % + EL % + (Economic Capital % × Hurdle Rate) [F14]
* Desk Risk Capital: z × Notional × Volatility (confidence multiplier z always supplied in exam; NIST 99% one-tailed = 2.326, commonly given as 2.33; 95% one-tailed = 1.645 / 1.65) [F18, F20]
* Desk RAPM: Net Profit ÷ Risk Capital × 100 [F19]
* CAPM Cost of Equity: Ke = Rf + β × (Rm − Rf) [F21]
* WACC: (We × Ke) + [Wd × Kd × (1 − t)] [F23]
* EVA: PAT (or NOPAT) − (Invested Capital × Cost of Capital) [F24]
Sum 1 · Basic RAROC & Hurdle Rate Decision (Chapter 1, Full Worked · N026–N032)
Data (illustrative)
* Corporate Term Loan (EAD) = ₹100.00 crore
* Interest & Fee Revenue = ₹11.50 crore
* Funding & Operating Costs = ₹8.20 crore
* Probability of Default (PD) = 1.00%, Loss Given Default (LGD) = 50.00%
* Allocated Economic Capital (EC) = ₹10.00 crore (10% of loan)
* Bank Hurdle Rate = 15.00%
Method 1 · Rupee-Amount Key Presses (IIBF Basic Calculator)
1. Expected Loss (EL): 100 × 1 % × 50 % = → ₹0.50 crore
2. Risk-Adjusted Net Return: 11.5 − 8.2 − 0.5 = → ₹2.80 crore
3. RAROC: 2.8 ÷ 10 × 100 = → 28.0000% (28.00%)
4. Decision: 28.00% > 15.00% → Accept (creates shareholder value).
Method 2 · Percentage-of-Loan Check
1. Net Margin before EL: (11.50 − 8.20) ÷ 100 × 100 = 3.30%
2. EL %: 1.00% × 50.00% = 0.50%
3. Risk-Adjusted Margin %: 3.30 − 0.50 = 2.80%
4. RAROC: 2.80 ÷ 10.00 × 100 = 28.0000% (28.00%)


Verification: Method 1 (28.0000%) = Method 2 (28.0000%). Exact match.


Commonest Wrong Answers:


* Forgetting EL (3.30 ÷ 10 × 100) → 33.00% (overstates RAROC [F7]).
* Dividing by Loan Amount instead of Economic Capital (2.80 ÷ 100 × 100) → 2.80% (wrong denominator [F6]).
Sum 2 · Two-Loan Choice & Risk-Based Loan Pricing (Chapter 2, Faded → Full · N041–N055)
Data (illustrative — Meera's Opening Branch Moment)
* Two ₹50.00 crore loans, both priced at 10.00% interest (Revenue = ₹5.00 crore), Funding & Operating Cost = 7.00% (₹3.50 crore), Hurdle Rate = 16.00%.
* Loan A (AA borrower): EL = 0.20% (₹0.10 crore), Economic Capital = ₹4.00 crore (8.00% of loan).
* Loan B (BB borrower): EL = 0.80% (₹0.40 crore), Economic Capital = ₹8.00 crore (16.00% of loan).
Part (a) · RAROC Comparison
* Loan A:
   * Method 1 (key presses): 5 − 3.5 − 0.1 = 1.4 ÷ 4 × 100 = → 35.0000% (35.00%) → > 16.00% (Accept).
   * Method 2 (rate % check): (10 − 7 − 0.20) ÷ 8 × 100 = 2.80 ÷ 8 × 100 = → 35.0000% (35.00%). Exact match.
* Loan B:
   * Method 1 (key presses): 5 − 3.5 − 0.4 = 1.1 ÷ 8 × 100 = → 13.7500% (13.75%) → < 16.00% (Reject / Reprice).
   * Method 2 (rate % check): (10 − 7 − 0.80) ÷ 16 × 100 = 2.20 ÷ 16 × 100 = → 13.7500% (13.75%). Exact match.
Part (b) · Minimum Risk-Based Lending Rate for Loan B (to meet 16.00% Hurdle)
* Method 1 · Rate-Component Formula (key presses):
   1. Capital Charge %: 16 × 16 ÷ 100 = → 2.56%
   2. Minimum Rate: 7 + 0.8 + 2.56 = → 10.3600% (10.36%)
   3. Underpricing at 10.00%: 10.36 − 10.00 = 0.36% (36 bps).
* Method 2 · Rupee Break-Even Check:
   1. Required Net Risk-Adjusted Return: 8 × 16 % = → ₹1.28 crore
   2. Required Total Revenue: 3.50 + 0.40 + 1.28 = → ₹5.18 crore
   3. Minimum Lending Rate: 5.18 ÷ 50 × 100 = → 10.3600% (10.36%).


Verification: Method 1 (10.3600%) = Method 2 (10.3600%). Exact match.


Commonest Wrong Answer: Covering only Cost + EL (7.00% + 0.80% = 7.80%) and assuming 10.00% is profitable because 10.00% > 7.80%, forgetting the 2.56% capital charge [F14].
Sum 3 · Two-Desk RAPM Comparison (Chapter 3, Worked + Your Turn · N070–N079)
Data (illustrative)
* FX Desk and Bond Desk both earn Net Profit = ₹6.00 crore (after costs).
* Confidence level = 99% one-tailed; given multiplier z = 2.33 (NIST exact 2.326 [F20]).
* FX Desk: Notional = ₹200.00 crore, Annual Volatility = 6.00%.
* Bond Desk: Notional = ₹150.00 crore, Annual Volatility = 12.00%.
FX Desk (Worked)
* Method 1 (key presses):
   1. 1-SD Exposure: 200 × 6 % = → ₹12.00 crore
   2. Risk Capital: 12 × 2.33 = → ₹27.96 crore
   3. RAPM: 6 ÷ 27.96 × 100 = → 21.4592% (21.46%)
* Method 2 (check): (6 ÷ 12) ÷ 2.33 × 100 = 0.5 ÷ 2.33 × 100 = → 21.4592% (21.46%). Exact match.
Bond Desk (Your Turn · H: 15 s)
* Method 1 (key presses):
   1. 1-SD Exposure: 150 × 12 % = → ₹18.00 crore
   2. Risk Capital: 18 × 2.33 = → ₹41.94 crore
   3. RAPM: 6 ÷ 41.94 × 100 = → 14.3062% (14.31%)
* Method 2 (check): (6 ÷ 18) ÷ 2.33 × 100 = 0.33333333 ÷ 2.33 × 100 = → 14.3062% (14.31%). Exact match.


Verification: Both desks match to 4 decimals across Methods 1 & 2. FX Desk (21.46%) beats Bond Desk (14.31%) by 7.15 percentage points despite identical ₹6.00 crore profit.


Commonest Wrong Answer: Omitting z = 2.33 and dividing ₹6 crore by 1-SD loss (₹18 crore) → 33.33% (overstates RAPM by 2.33× [F18]).
Sum 4 · CAPM Cost of Equity & WACC (Chapter 4, Full Worked · N094–N101)
Data (illustrative)
* Risk-free rate (Rf) = 7.00%, Expected Market Return (Rm) = 13.00%, Bank Beta (β) = 1.25.
* Capital Structure (Total Capital = ₹1,000.00 crore): Equity = ₹400.00 crore (40%), Debt = ₹600.00 crore (60%).
* Pre-tax Cost of Debt (Kd) = 8.00%, Corporate Tax Rate (t) = 25.00%.
Part (a) · CAPM Cost of Equity (Ke)
* Method 1 (key presses): 13 − 7 = 6 × 1.25 = 7.5 + 7 = → 14.5000% (14.50%)
* Method 2 (expanded form Rf × (1 − β) + β × Rm): 7 × (−0.25) + 1.25 × 13 = −1.75 + 16.25 = → 14.5000% (14.50%). Exact match.
Part (b) · WACC
* Method 1 (key presses):
   1. After-tax Cost of Debt: 8 × 0.75 = → 6.00%
   2. Equity Component: 0.4 × 14.5 = → 5.80%
   3. Debt Component: 0.6 × 6 = → 3.60%
   4. WACC: 5.8 + 3.6 = → 9.4000% (9.40%)
* Method 2 (total rupee capital cost ÷ total capital):
   1. Equity cost in rupees: 400 × 14.5 % = ₹58.00 crore
   2. After-tax debt cost in rupees: 600 × 6 % = ₹36.00 crore
   3. WACC: (58 + 36) ÷ 1000 × 100 = 94 ÷ 1000 × 100 = → 9.4000% (9.40%). Exact match.


Commonest Wrong Answer: Using pre-tax debt cost (8.00%) instead of after-tax debt cost (6.00%) → 5.80 + 4.80 = 10.60% [F23].
Sum 5 · Economic Value Added (EVA) (Chapter 4, Your Turn · N102–N106)
Data (illustrative)
* Invested Capital = ₹1,000.00 crore, WACC = 9.40% (from Sum 4), Profit After Tax (NOPAT) = ₹85.00 crore.
Method 1 · Direct EVA Formula (key presses)
1. Capital Charge: 1000 × 9.4 % = → ₹94.00 crore
2. EVA: 85 − 94 = → −₹9.00 crore (Value Destroyed).
Method 2 · Return-Spread Check
1. Return on Capital (ROIC): 85 ÷ 1000 × 100 = 8.50%
2. Economic Spread: 8.50 − 9.40 = −0.90%
3. EVA: −0.90 % × 1000 = → −₹9.00 crore.


Verification: Method 1 (−₹9.00 crore) = Method 2 (−₹9.00 crore). Exact match.


Commonest Wrong Answer: Concluding the bank created wealth because PAT (+₹85 crore) is positive, ignoring the ₹94 crore full cost of capital [F25].
Homework Sum · Positive EVA Check (Close · N123)
* Data (illustrative): Capital = ₹500.00 crore, WACC = 10.00%, PAT (NOPAT) = ₹62.00 crore.
* Method 1 (key presses): 500 × 10 % = 50; 62 − 50 = → +₹12.00 crore (value created).
* Method 2 (spread check): 62 ÷ 500 × 100 = 12.40%; (12.40 − 10.00) % × 500 = 2.40 % × 500 = → +₹12.00 crore. Exact match.
Practice Numericals Verification (D07b_practice Q6–Q8)
* Q6 (RAROC): Loan ₹80 cr, Revenue ₹9.00 cr, Costs ₹6.20 cr, EL ₹0.40 cr, EC ₹12.00 cr.
   * Method 1: 9 − 6.2 − 0.4 = 2.4 ÷ 12 × 100 = 20.00%.
   * Method 2: (2.80 − 0.40) ÷ 12 × 100 = 20.00%. Exact match.
* Q7 (Desk RAPM): Profit ₹4.50 cr, Notional ₹120 cr, Volatility 10%, 95% confidence z = 1.65.
   * Method 1: 120 × 10 % = 12 × 1.65 = 19.80 cr; 4.5 ÷ 19.8 × 100 = 22.7273% (22.73%).
   * Method 2: (4.5 ÷ 12) ÷ 1.65 × 100 = 0.375 ÷ 1.65 × 100 = 22.7273% (22.73%). Exact match.
* Q8 (CAPM + WACC + EVA): Rf = 6.50%, Rm = 12.50%, β = 1.10; Equity 50%, Debt 50%, pre-tax Kd = 8.00%, tax t = 25%; Capital = ₹800 cr, NOPAT = ₹90.00 cr.
   * Method 1: Ke = 6.5 + 1.1 × 6 = 13.10%; after-tax Kd = 8 × 0.75 = 6.00%; WACC = 0.5 × 13.10 + 0.5 × 6.00 = 9.55%; Capital Charge = 800 × 9.55 % = ₹76.40 cr; EVA = 90 − 76.40 = +₹13.60 crore.
   * Method 2: ROIC = 90 ÷ 800 × 100 = 11.25%; Spread = 11.25 − 9.55 = 1.70%; EVA = 1.70 % × 800 = +₹13.60 crore. Exact match.