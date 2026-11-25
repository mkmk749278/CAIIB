# D07 · Numericals (c1, 2026-11-24)
All names, business lines, and rupee amounts are illustrative. Every calculation uses only the IIBF basic 8-function calculator (+ − × ÷ % √, 12 digits, no scientific keys) and has been verified two independent ways in Python (Decimal); all pairs match to 4 decimal places. Rupee totals rounded to 2 decimal places.
Core Formula (from D07_fact_sheet)
* Standalone Economic Capital of two business lines: EC1 and EC2, with correlation ρ (given in the question) [F28, F29].
* Aggregated Economic Capital: EC_total = √(EC1² + EC2² + 2 × ρ × EC1 × EC2)
* Diversification Benefit = (EC1 + EC2) − EC_total [F29].
   * When ρ = +1.0 (perfect positive correlation / conservative additive stress assumption): EC_total = EC1 + EC2, diversification benefit = ₹0.00.
   * When ρ = 0 (uncorrelated): EC_total = √(EC1² + EC2²).
Sum 1 (Worked) · Two Business Lines: Simple Sum vs Uncorrelated Aggregation (Ch 4)
Data
A bank's Corporate Lending desk needs standalone Economic Capital of ₹60 crore (EC1), and its Retail Lending desk needs ₹80 crore (EC2) (illustrative). Compute total aggregated Economic Capital and the diversification benefit under:
(a) Perfect positive correlation (ρ = +1.0, no diversification); and
(b) Zero correlation (ρ = 0, independent risks). [F28, F29]
Method 1 (IIBF basic calculator key presses — direct variance-covariance)
* Part (a), ρ = +1.0 (no diversification):
   * 60 + 80 = → ₹140.00 crore
   * Diversification benefit: 140 − 140 = → ₹0.00 crore
* Part (b), ρ = 0 (uncorrelated):
   * Square EC1: 60 × 60 = → 3,600 (note down)
   * Square EC2: 80 × 80 = → 6,400
   * Add both: 3600 + 6400 = → 10,000
   * Press square root: √ → ₹100.00 crore
   * Diversification benefit: 140 − 100 = → ₹40.00 crore
Method 2 (Alternative algebraic identity: √((EC1 + EC2)² − 2(1 − ρ) × EC1 × EC2))
* Sum squared: (60 + 80) × (60 + 80) = 140 × 140 = 19,600.
* Cross term: 2 × 60 × 80 = 9,600.
* Part (a), ρ = 1.0: 19600 − 0 = 19,600 → √ = ₹140.00 crore.
* Part (b), ρ = 0: 19600 − (1 − 0) × 9600 = 19600 − 9600 = 10,000 → √ = ₹100.00 crore; benefit = 140 − 100 = ₹40.00 crore.
* Verification: Both methods match exactly (₹140.00 crore; ₹100.00 crore; benefit ₹40.00 crore).
Common Wrong Answer (Trap)
Forgetting to press the √ key at the end and reporting ₹10,000 crore, or simply averaging ₹60 crore and ₹80 crore to get ₹70 crore (aggregated capital for uncorrelated positive risks is always larger than either standalone line, never their average).
Sum 2 (Faded) · Partial Correlation (ρ = +0.5): Concentration Effect (Ch 4)
Data
Using the same two desks (EC1 = ₹60 crore, EC2 = ₹80 crore), suppose sectoral overlap pushes their correlation up to ρ = +0.5 while profit stays unchanged. Compute the new aggregated Economic Capital and the new diversification benefit. [F29, F30]
Method 1 (IIBF basic calculator key presses)
* 60 × 60 = → 3,600
* 80 × 80 = → 6,400
* Cross term: 2 × 0.5 × 60 × 80 = → 4,800
* Sum inside root: 3600 + 6400 + 4800 = → 14,800
* Press √: 14800 √ → 121.65525... → ₹121.66 crore
* New diversification benefit: 140 − 121.66 = → ₹18.34 crore (shrunk from ₹40.00 crore)
Method 2 (Identity check)
* (60 + 80)² − 2 × (1 − 0.5) × 60 × 80 = 19600 − 4800 = 14,800 → √ = 121.6553 → ₹121.66 crore; benefit = 140.00 − 121.66 = ₹18.34 crore.
* Verification: Both methods match exactly (₹121.66 crore; benefit ₹18.34 crore).
Common Wrong Answer (Trap)
Dropping the factor of 2 in 2 × ρ × EC1 × EC2 (computing √(3600 + 6400 + 2400) = √12400 = ₹111.36 crore instead of ₹121.66 crore).
Sum 3 (Your Turn) · Two Smaller Desks at ρ = 0 and ρ = +0.5 (Ch 4)
Data
A bank's Agriculture desk requires standalone Economic Capital of ₹30 crore, and its MSME desk requires ₹40 crore (illustrative). Compute aggregated Economic Capital and diversification benefit at (a) ρ = 0, and (b) ρ = +0.5. [F29, F30]
Method 1 (IIBF basic calculator key presses)
* Simple sum (no diversification): 30 + 40 = → ₹70.00 crore
* Part (a), ρ = 0:
   * 30 × 30 = → 900; 40 × 40 = → 1,600
   * 900 + 1600 = → 2,500 → √ → ₹50.00 crore
   * Diversification benefit: 70 − 50 = → ₹20.00 crore
* Part (b), ρ = +0.5:
   * Cross term: 2 × 0.5 × 30 × 40 = → 1,200
   * 2500 + 1200 = → 3,700 → √ → 60.8276... → ₹60.83 crore
   * Diversification benefit: 70 − 60.83 = → ₹9.17 crore
Method 2 (Identity check)
* (30 + 40)² = 4,900; 2 × 30 × 40 = 2,400.
* At ρ = 0: 4900 − 2400 = 2,500 → √ = ₹50.00 crore; benefit = 70 − 50 = ₹20.00 crore.
* At ρ = +0.5: 4900 − 0.5 × 2400 = 3,700 → √ = 60.8276 → ₹60.83 crore; benefit = 70 − 60.83 = ₹9.17 crore.
* Verification: Both methods match exactly (₹50.00 crore / benefit ₹20.00 crore; ₹60.83 crore / benefit ₹9.17 crore).
Common Wrong Answer (Trap)
Adding 30 + 40 = ₹70 crore and multiplying by 0.5 to get ₹35 crore — correlation operates inside the square root on the cross-product term, never as a flat multiplier on the sum.