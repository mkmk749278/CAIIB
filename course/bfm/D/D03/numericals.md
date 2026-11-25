# D03 · Numericals (c1, 2026-11-24)
All names, amounts, rates, and dates are illustrative. Verified in Python using Decimal and simulated 12-digit basic 8-function calculator key presses (+ − × ÷ % √, no scientific keys). Every sum is solved two independent ways and both match to 2 decimal places (rupees) / 4 decimal places (rates).
Opening Case · Wilful Defaulter Director on a Standard Loan (N010–N015, N068)
* Data: Kaveri Granites Pvt. Ltd. — Standard term loan outstanding ₹120.00 lakh, backed by factory land worth ₹180.00 lakh. One director (not a govt/FI distress nominee) appears more than once in the List of Wilful Defaulters [F33].
* Rule: 5% standard provision under IRACP25 Para 118(1) [F33] (replaces normal 0.40%).
* Method 1 (Basic calculator): 120 × 5 % = → ₹6.00 lakh
* Method 2 (Decimal check): 120 × 0.05 = → ₹6.00 lakh
* Match: Both methods give ₹6.00 lakh.
* Trap: Applying normal 0.40% (120 × 0.4 % = ₹0.48 lakh) ignores the repeat wilful-defaulter director rule.
Q1 (Worked in Full) · Doubtful D2 with Tangible Security (N052–N055)
* Data: Deccan Paper Mills — Term loan outstanding ₹80.00 lakh, classified Doubtful for 2 years (D2: 1 to 3 years). Realisable value of tangible security = ₹50.00 lakh [F23, F24].
* Rules: Unsecured portion = 100% [F23]; Secured portion (D2: 1–3 yrs) = 40% [F24].
* Method 1 (Split secured + unsecured, Basic calculator):
   * Unsecured portion: 80 − 50 = → ₹30.00 lakh → 30 × 100 % = ₹30.00 lakh
   * Secured portion: 50 × 40 % = ₹20.00 lakh
   * Total: 30 + 20 = → ₹50.00 lakh
* Method 2 (100% minus security relief):
   * Relief on secured portion = 100% − 40% = 60%
   * 50 × 60 % = ₹30.00 lakh; 80 − 30 = → ₹50.00 lakh
* Match: Both methods give ₹50.00 lakh.
* Common wrong answer: Applying 40% to the whole ₹80 lakh (80 × 40 % = ₹32.00 lakh) — forgets the unsecured portion takes 100%.
Q2 (Faded) · Loss Asset with Salvage Value (N056–N058)
* Data: Narmada Tools — Loss asset, outstanding ₹24.00 lakh, salvage value of old machinery ₹2.00 lakh (less than 10% of outstanding), kept on books pending legal closure [F25].
* Rule: Loss assets should be written off; if kept on books, provide 100% of outstanding (security < 10% is ignored) [F25].
* Method 1 (Basic calculator): 24 × 100 % = → ₹24.00 lakh
* Method 2 (Direct full-balance rule): 100% of ₹24.00 lakh = ₹24.00 lakh
* Match: Both methods give ₹24.00 lakh.
* Common wrong answer: Deducting salvage (24 − 2 = ₹22.00 lakh).
Q3 (Your Turn) · Accelerated Provisioning on Wilful Defaulter NPA (N072–N073a)
* Data: Kaveri Granites Pvt. Ltd. slips to Doubtful I (2nd year as NPA), outstanding ₹100.00 lakh, realisable security ₹60.00 lakh. Director appears more than once in LWD [F34].
* Rule: Accelerated D1 rate = 40% on secured portion (vs 25% regular) and 100% on unsecured portion [F34].
* Method 1 (Split secured + unsecured, Basic calculator):
   * Unsecured portion: 100 − 60 = → ₹40.00 lakh → at 100% = ₹40.00 lakh
   * Secured portion: 60 × 40 % = ₹24.00 lakh
   * Total: 40 + 24 = → ₹64.00 lakh
* Method 2 (100% minus security relief):
   * Relief on secured portion = 100% − 40% = 60%
   * 60 × 60 % = ₹36.00 lakh; 100 − 36 = → ₹64.00 lakh
* Match: Both methods give ₹64.00 lakh.
* Comparison with regular D1: 60 × 25 % = 15; 15 + 40 = ₹55.00 lakh (extra ₹9.00 lakh due to accelerated provisioning).
Q4 (Worked) · Provisioning Coverage Ratio (PCR) (N087–N089)
* Data: Illustrative bank portfolio — Gross NPAs = ₹400.00 crore, Specific provisions for NPAs = ₹260.00 crore, Floating provisions for advances (not used as Tier 2 capital) = ₹20.00 crore, Standard asset provisions = ₹15.00 crore (distractor) [F11, F38, F39].
* Rule: PCR = (Eligible NPA Provisions ÷ Gross NPAs) × 100. Standard asset provisions are excluded [F11, F39].
* Method 1 (Basic calculator):
   * 260 + 20 = → ₹280.00 crore
   * 280 ÷ 400 × 100 = → 70.00%
* Method 2 (Component sum):
   * Specific ratio: 260 ÷ 400 × 100 = 65.00%
   * Floating ratio: 20 ÷ 400 × 100 = 5.00%
   * Total: 65 + 5 = → 70.00%
* Match: Both methods give 70.00%.
* Common wrong answer: Including ₹15 crore standard provisions (295 ÷ 400 × 100 = 73.75%).
Pause Check 2 Quick Sum · Doubtful D1 (N062–N063)
* Data: D1 loan ₹60.00 lakh, realisable security ₹40.00 lakh.
* Method 1: Unsecured 60 − 40 = 20 (100% = ₹20.00L); Secured 40 × 25 % = ₹10.00L; Total 20 + 10 = ₹30.00 lakh.
* Method 2: 60 − (40 × 75 %) = 60 − 30 = ₹30.00 lakh. Match!
Homework · Standard CRE + UFCE Incremental Provision (N096)
* Data: Standard CRE loan = ₹50.00 crore; borrower's UFCE Potential Loss / EBID = 40% [F5, F15].
* Rules: CRE standard = 1.00% [F5]; UFCE (>30% to 50% band) = 40 bps = 0.40% [F15].
* Method 1 (Separate then add, Basic calculator):
   * CRE standard: 50 × 1 % = ₹0.50 crore (₹50 lakh)
   * UFCE incremental: 50 × 0.4 % = ₹0.20 crore (₹20 lakh)
   * Total: 0.5 + 0.2 = → ₹0.70 crore (₹70.00 lakh)
* Method 2 (Combined rate):
   * Combined rate = 1.00% + 0.40% = 1.40%
   * 50 × 1.4 % = → ₹0.70 crore (₹70.00 lakh)
* Match: Both methods give ₹0.70 crore (₹70.00 lakh).
Practice Sums (from D03_practice)
* P6 (Sub-standard unsecured infrastructure with escrow): Outstanding ₹45.00 lakh × 20% = 45 × 20 % = ₹9.00 lakh; Method 2: 45 ÷ 5 = ₹9.00 lakh [F22].
* P7 (Delayed RP >180 days on ₹1,800 crore sub-standard secured exposure): Regular 15% + Additional 20% = 35%. Method 1: 1800 × 15 % = 270; 1800 × 20 % = 360; 270 + 360 = ₹630.00 crore. Method 2: 1800 × 35 % = ₹630.00 crore [F20, F36].
* P8 (Wilful defaulter D2 accelerated): Outstanding ₹90.00 lakh, security ₹50.00 lakh, Doubtful II (3rd year). Accelerated D2 = 100% on BOTH secured and unsecured → 90 × 100 % = ₹90.00 lakh; Method 2: 50 × 100% + 40 × 100% = ₹90.00 lakh [F34].