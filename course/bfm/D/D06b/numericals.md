# D06b · Numericals (c1, 2026-11-24)
All bank names, balances, durations, and shock examples are illustrative. Basic 8-function IIBF calculator only (+ − × ÷ % √, 12 digits). Every sum is solved two independent ways and verified to match exactly.


Rules used: RBI Commercial Banks – Asset Liability Management Directions, 2025 (https://m.rbi.org.in/scripts/BS_ViewMasDirections.aspx?id=13147, paras 259–261, 265, 277):


* MDG = MDA − (RSL / RSA) × MDL
* ΔE = − [MDG] × RSA × Δi (where Δi = +0.02 for the prescribed 200 bps parallel shock)
* % fall in MVE = (|ΔE| / Equity) × 100
|---|* Current Pillar 2 outlier threshold (in force as at 31 Dec 2026): > 20% of MVE under a 200 bps banking-book shock [F20, F22].
Q1 · Worked full: Banking-book ΔEVE and outlier check under 200 bps shock (Apex Bank, illustrative)
Input Data
   * Equity (Net Worth / MVE) = ₹1,000 crore
   * Rate Sensitive Assets (RSA) = ₹10,000 crore, Weighted Modified Duration of Assets (MDA) = 2.50 years
   * Rate Sensitive Liabilities (RSL) = ₹9,000 crore, Weighted Modified Duration of Liabilities (MDL) = 1.50 years
   * Standardised parallel rate shock = +200 bps (Δi = +0.02)
Method 1 (Modified Duration Gap formula — ALM25 paras 260–261)
   1. Leverage weight RSL / RSA: 9000 ÷ 10000 = → 0.90
   2. Weighted MDL: 0.90 × 1.50 = → 1.35
   3. Modified Duration Gap (MDG): 2.50 − 1.35 = → +1.15 years
   4. Change in Market Value of Equity (ΔE): 1.15 × 10000 × 0.02 = → −₹230.00 crore (negative because rates rise and MDG > 0)
   5. Percentage fall in MVE: 230 ÷ 1000 × 100 = → 23.00%
   6. Outlier check: 23.00% > 20% → Outlier under RBI's current 200 bps Pillar 2 test [F22].
Method 2 (Independent component revaluation — ΔRSA minus ΔRSL)
   1. Fall in value of RSA: 2.50 × 10000 × 0.02 = → −₹500.00 crore
   2. Fall in value of RSL: 1.50 × 9000 × 0.02 = → −₹270.00 crore
   3. Net change in Equity (ΔRSA − ΔRSL): −500 − (−270) = −500 + 270 = → −₹230.00 crore
   4. Percentage fall in MVE: 230 ÷ 1000 × 100 = → 23.00%


Match check: Method 1 (−₹230.00 crore / 23.00%) = Method 2 (−₹230.00 crore / 23.00%). Exact match.
Common wrong answer (trap)
   * Forgetting the RSL / RSA weight (0.90) and computing 2.50 − 1.50 = 1.00: 1.00 × 10000 × 0.02 = ₹200 crore → 20.00%, wrongly concluding the bank is not an outlier.


________________


Q2 · Your turn (faded): Post-hedge ΔEVE after entering a pay-fixed IRS
Input Data
   * Apex Bank enters a pay-fixed / receive-floating interest rate swap that reduces its MDG from 1.15 years to 0.75 years.
   * Same RSA = ₹10,000 crore, Equity = ₹1,000 crore, shock = +200 bps (Δi = +0.02).
   * Find the new ΔE, % fall in MVE, and whether the bank is still an outlier.
Method 1 (MDG formula)
   1. ΔE: 0.75 × 10000 × 0.02 = → −₹150.00 crore
   2. % fall in MVE: 150 ÷ 1000 × 100 = → 15.00%
   3. Outlier check: 15.00% <= 20% → No longer an outlier under the current 200 bps test.
Method 2 (Percentage sensitivity shortcut)
   1. Percentage drop per unit of RSA for 200 bps shock: 0.75 × 2 % = → 1.50% of RSA
   2. Rupee drop: 10000 × 1.5 % = → ₹150.00 crore
   3. Percentage of Equity: 150 ÷ 1000 × 100 = → 15.00%


Match check: Method 1 (−₹150.00 crore / 15.00%) = Method 2 (−₹150.00 crore / 15.00%). Exact match.


________________


Homework · HTM 5% annual sales cap check (illustrative)
Input Data
   * A bank's opening carrying value of its HTM portfolio on 1 April is ₹24,000 crore. During the financial year it sells HTM bonds with carrying value of ₹1,400 crore (none under OMO or RBI exemptions). Does it need prior RBI DoS approval?
Method 1 (Compute 5% cap in rupees)
   1. 24000 × 5 % = → ₹1,200.00 crore
   2. Compare: ₹1,400 crore > ₹1,200 crore → Yes, exceeds the 5% cap by ₹200 crore; prior RBI DoS approval is required [F3].
Method 2 (Compute sales as % of opening HTM)
   1. 1400 ÷ 24000 × 100 = → 5.8333%
   2. Compare: 5.83% > 5.00% → Yes, prior RBI DoS approval is required.


Match check: Both methods confirm breach of the 5% cap.