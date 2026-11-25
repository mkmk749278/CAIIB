# D04 · Numericals (c1, 2026-11-24)
All names, balances, dates, and security values are illustrative. Verified programmatically in Python (two independent methods: step-by-step Decimal arithmetic and alternative formula / 12-digit 8-function calculator key presses); all answers match exactly. Basic 8-function calculator only (+ − × ÷ % √). Rates shown to 4 decimals where applicable; rupee amounts to 2 decimals.


Governing rules (as at 31 December 2026, RBI IRACP Directions, 2025):


* Sub-standard secured: 15% on total outstanding, no allowance for ECGC or security [F9].
* Doubtful: 100% on unsecured shortfall (balance less realistic realisable security) + 25% (D1 ≤ 1 yr) / 40% (D2 1–3 yrs) / 100% (D3 > 3 yrs) on secured portion [F10, F11].
* Loss asset retained in books: 100% on outstanding [F12]. Realisable security < 10% of outstanding → ignore security, classify straightaway as Loss [F8].
* Interest Suspense: not a provision; deduct from advance balance first [F15].
* ECGC / CGTMSE cover: deduct realisable security first from net balance, then deduct eligible guarantee cover from unsecured shortfall (0% provision on guaranteed portion), 100% on net uncovered unsecured shortfall [F16, F17].
* NARCL payment structure: 15% cash + 85% Security Receipts (SRs) (PIB Cabinet Release, 15 Sep 2021) [F32].
Case 1 · Three-borrower branch NPA portfolio (N021–N038)
Data (Kaveri Bank, Vijayawada branch, 31 March 2026 — illustrative):


* Borrower A (Aruna Textiles): Balance ₹80.00 lakh; NPA 6 months (Sub-standard); realisable tangible security ₹60.00 lakh (>10% ab-initio → secured).
* Borrower B (Bala Logistics): Balance ₹120.00 lakh; NPA 2 years 6 months (1 yr sub-standard + 1 yr 6 mos doubtful → Doubtful D2, 1–3 yrs); book security ₹90.00 lakh (ignored); realisable tangible security ₹50.00 lakh.
* Borrower C (Chitra Agro Traders): Balance ₹40.00 lakh; auditor-identified uncollectible, retained in books (Loss).
Borrower A (Sub-standard secured, 15%)
* Method 1 (percentage key): 80 × 15 % = → ₹12.00 lakh
* Method 2 (decimal multiplier): 80 × 0.15 = → ₹12.00 lakh (match ✓)
Borrower B (Doubtful D2: 100% unsecured + 40% secured)
* Method 1 (split components): Unsecured shortfall 120 − 50 = ₹70.00 lakh @ 100% = ₹70.00 lakh; Secured portion 50 × 40 % = ₹20.00 lakh; Total 70 + 20 = ₹90.00 lakh
* Method 2 (complement / unprovided portion): Unprovided 60% of secured ₹50 lakh = 50 × 0.60 = ₹30.00 lakh; Total = 120 − 30 = ₹90.00 lakh (match ✓)
* Trap check: Applying 40% to full ₹120 lakh gives 120 × 40 % = ₹48.00 lakh (wrong).
Borrower C (Loss asset retained in books, 100%)
* Method 1: 40 × 100 % = ₹40.00 lakh
* Method 2: Full balance = ₹40.00 lakh (match ✓)
Total Branch Provision, Net NPA, and PCR
* Total Provision: 12 + 90 + 40 = ₹142.00 lakh
* Total Gross NPA: 80 + 120 + 40 = ₹240.00 lakh
* Net NPA: 240 − 142 = ₹98.00 lakh
* PCR: Method 1 142 ÷ 240 × 100 = 59.17% (0.5917); Method 2 1 − (98 ÷ 240) = 0.5917 → 59.17% (match ✓)
Case 2A · Doubtful D2 with Interest Suspense, Haircut, Legal Costs, and CGTMSE Cover (N046–N056)
Data (Deccan Precision Works — illustrative): Gross balance ₹60.00 lakh; Interest Suspense ₹4.00 lakh; Doubtful D2 (40% secured); Book collateral ₹20.00 lakh; Haircut 25%; Legal/realisation costs ₹1.00 lakh; CGTMSE cover 75% of unsecured shortfall.


* Method 1 (waterfall):
   1. Net balance after Interest Suspense: 60 − 4 = ₹56.00 lakh
   2. Net realisable security: 20 × 25 % = 5 → 20 − 5 − 1 = ₹14.00 lakh
   3. Unsecured shortfall: 56 − 14 = ₹42.00 lakh
   4. CGTMSE cover (0% provision): 42 × 75 % = ₹31.50 lakh
   5. Uncovered unsecured (@ 100%): 42 − 31.5 = ₹10.50 lakh
   6. Secured portion (D2 @ 40%): 14 × 40 % = ₹5.60 lakh
   7. Total provision: 10.5 + 5.6 = ₹16.10 lakh
* Method 2 (direct complement): Net realisable security 20 × 0.75 − 1 = ₹14.00L; Uncovered unsecured 42 × 0.25 = ₹10.50L; Secured 14 × 0.40 = ₹5.60L; Total 10.50 + 5.60 = ₹16.10 lakh (match ✓)
Case 2B · Loss-Asset Variant (< 10% Security Erosion + CGTMSE Cover) (N057–N060)
Data (Deccan Precision Works twist — illustrative): Net balance ₹56.00 lakh; Net realisable security drops to ₹4.00 lakh; valid CGTMSE cover 75%.


* 10% erosion test: 56 × 10 % = ₹5.60 lakh. Since ₹4.00 lakh < ₹5.60 lakh, security is ignored and account is classified straightaway as Loss [F8].
* Method 1: CGTMSE cover 56 × 75 % = ₹42.00 lakh (0% provision); Uncovered @ 100% 56 − 42 = ₹14.00 lakh
* Method 2: 56 × 25 % = ₹14.00 lakh (match ✓)
* Without guarantee cover: 100% of ₹56.00 lakh = ₹56.00 lakh [F12].
Case 3 · Your Turn: Doubtful D1 with Interest Suspense and ECGC Cover (N063–N066)
Data (Eastern Spices — illustrative): Gross balance ₹50.00 lakh; Interest Suspense ₹2.00 lakh; Doubtful D1 (25% secured); Realisable security ₹18.00 lakh; ECGC cover 50%.


* Method 1 (waterfall): Net balance 50 − 2 = ₹48.00 lakh; Unsecured shortfall 48 − 18 = ₹30.00 lakh; ECGC cover 30 × 50 % = ₹15.00 lakh; Uncovered unsecured 30 − 15 = ₹15.00 lakh @ 100%; Secured 18 × 25 % = ₹4.50 lakh; Total 15 + 4.5 = ₹19.50 lakh.
* Method 2 (direct formula): (30 × 0.50) + (18 × 0.25) = 15.00 + 4.50 = ₹19.50 lakh (match ✓).
* Common error check: Omitting Interest Suspense gives (50 − 18) × 0.50 + 4.50 = ₹20.50 lakh (wrong).
Homework · NARCL 15% Cash / 85% Security Receipts Split (N097)
Data (illustrative): NARCL acquires a stressed loan pool at ₹600.00 crore purchase price.


* Method 1: Cash (15%) 600 × 15 % = ₹90.00 crore; Security Receipts (85%) 600 × 85 % = ₹510.00 crore.
* Method 2: 600 × 0.15 = ₹90.00 cr; 600 − 90 = ₹510.00 cr; 90 + 510 = 600 (match ✓).