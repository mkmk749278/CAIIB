# D01b · Numericals (c1, 2026-11-24)
All bank names, branch names, rates, and amounts are illustrative. Every calculation works on the IIBF basic 8-function calculator (+ − × ÷ % √, 12 digits, no scientific keys). Rates/percentages to 2–4 decimals as shown; rupees to 2 decimals. Every sum is solved two independent ways and verified by Python.


Rules used:


* Three-way FTP split [F37]: Deposit unit spread = Deposit FTP − Deposit rate · Lending unit spread = Loan rate − Lending FTP · Treasury mismatch spread = Lending FTP − Deposit FTP · Total bank spread = Loan rate − Deposit rate.
* Economic Equity Ratio [F15]: Owners' Funds (Net Worth) ÷ Total Assets × 100.
* Bucket Gap [F11]: Rate Sensitive Assets (RSA) − Rate Sensitive Liabilities (RSL).
Q1 · Worked Three-Way FTP Split (Chapter 4)
Data (illustrative — Kaveri Bank, ₹10 crore = ₹1,000 lakh)


* 3-year fixed deposit mobilised by deposit unit: 6.80% p.a.
* 3-year internal transfer rate (Deposit FTP): 7.60% p.a.
* 5-year fixed-rate term loan granted by lending unit: 10.10% p.a.
* 5-year internal transfer rate (Lending FTP): 8.20% p.a.


Method 1 (Three-way split by unit)


1. Deposit unit spread: 7.60 − 6.80 = → 0.80%
In rupees (annual on ₹1,000 lakh): 1000 × 0.80 % = → ₹8.00 lakh
2. Lending unit spread: 10.10 − 8.20 = → 1.90%
In rupees: 1000 × 1.90 % = → ₹19.00 lakh
3. Treasury mismatch spread: 8.20 − 7.60 = → 0.60%
In rupees: 1000 × 0.60 % = → ₹6.00 lakh
4. Sum of three parts: 0.80 + 1.90 + 0.60 = → 3.30% (8 + 19 + 6 = → ₹33.00 lakh)


Method 2 (Direct total bank spread — independent check)


   * Total bank spread: 10.10 − 6.80 = → 3.30%
   * Total annual spread in rupees: 1000 × 3.30 % = → ₹33.00 lakh
   * Both methods match exactly: 3.30% (₹33.00 lakh).
V1 · Faded / Your Turn: Three-Way FTP Split After a Rate Shift (Chapter 4)
Data (illustrative — ₹10 crore = ₹1,000 lakh)


   * 3-year fixed deposit rate: 6.80% p.a. · 3-year Deposit FTP: 7.60% p.a.
   * 5-year fixed-rate loan rate: 10.20% p.a. · 5-year Lending FTP rises to: 8.40% p.a.


Method 1 (Three-way split)


   1. Deposit unit spread: 7.60 − 6.80 = → 0.80% (₹8.00 lakh)
   2. Lending unit spread: 10.20 − 8.40 = → 1.80% (₹18.00 lakh)
   3. Treasury mismatch spread: 8.40 − 7.60 = → 0.80% (₹8.00 lakh)
   4. Sum: 0.80 + 1.80 + 0.80 = → 3.40% (8 + 18 + 8 = → ₹34.00 lakh)


Method 2 (Direct total bank spread)


   * 10.20 − 6.80 = → 3.40% · 1000 × 3.40 % = → ₹34.00 lakh
   * Both methods match exactly: 3.40% (₹34.00 lakh).


Commonest wrong answer: Subtracting the 3-year FTP (7.60%) directly from the 5-year loan rate (10.20%) to credit the lending branch with 2.60%, wiping out Treasury's 0.80% maturity mismatch spread.
Homework · Three-Way FTP Split (Close N096–N096a)
Data (illustrative): Deposit 6.00% · 3-year FTP 7.00% · 5-year FTP 7.50% · Loan 9.80%.


   * Method 1: Deposit unit 7.00 − 6.00 = 1.00% · Lending unit 9.80 − 7.50 = 2.30% · Treasury 7.50 − 7.00 = 0.50% · Sum 1.00 + 2.30 + 0.50 = 3.80%.
   * Method 2: 9.80 − 6.00 = 3.80% — matches exactly.
Practice Sum P1 · Economic Equity Ratio (Practice Q7)
Data (illustrative)


   * Owners' Funds (Net Worth): ₹1,800 crore
   * Total Assets: ₹20,000 crore


Method 1 (Direct ratio)


   * 1800 ÷ 20000 × 100 = → 9.00%


Method 2 (Check via leverage multiplier)


   * Assets ÷ Owners' Funds = 20000 ÷ 1800 = 11.1111× · 100 ÷ 11.1111 = → 9.0000%
   * Both methods match: 9.00%.
Practice Sum P2 · Bucket Gap Sign (Practice Q8)
Data (illustrative — 15–30 days bucket)


   * Rate Sensitive Assets (RSA): ₹420 crore
   * Rate Sensitive Liabilities (RSL): ₹500 crore


Method 1 (RSA − RSL)


   * 420 − 500 = → −₹80.00 crore (Negative gap; RSL exceeds RSA)


Method 2 (Magnitude + sign check)


   * Excess of RSL over RSA = 500 − 420 = ₹80.00 crore on the liability side → −₹80.00 crore (negative gap).
   * Both methods match: −₹80.00 crore.