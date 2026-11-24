# C02b · Numericals (c1, 2026-11-24)
All names, amounts, rates, and dates are illustrative. Checked two independent ways in Python (Decimal exact math and 12-digit basic 8-function IIBF calculator key presses); all answers match to 2 decimal places (rupees/USD) and 4 decimal places (rates). Basic 8-function calculator only (+ − × ÷ % √).


Rules used:


* Policy repo 5.50%, SDF 5.25% (−25 bps), MSF / Bank Rate 5.75% (+25 bps) [F1, F2, F4] (RBI MPC Resolution, 7 Oct 2026).
* MSF SLR dip limit: 2% of NDTL outstanding at the end of the second preceding fortnight [F9] (RBI CRR & SLR Directions, 2025).
* VRR auction: multiple-price; bids ≤ repo rate rejected; descending order of bid rates; pro-rata at cut-off [F17, F18] (RBI VRR Operational Guidelines).
* AD Category-I overseas borrowing ceiling: 100% of unimpaired Tier I capital or USD 10 million, whichever is higher; above 50% triggers 12.0% CRAR & 3-year maturity [F27, F28] (RBI MD Risk Management & Inter-Bank Dealings).
* ADR/GDR price link: overseas USD value = domestic INR price ÷ USD/INR exchange rate [F30] (FEM NDI Rules, 2019).
Q1 · MSF SLR dip limit and 1-day interest cost (Chapter 1)
* Data: Bank NDTL (end of second preceding fortnight) = ₹15,000 crore. Bank borrows ₹200 crore overnight under MSF at 5.75% p.a. (365-day basis).
* Method 1 (8-function calculator key presses):
   * Maximum SLR dip: 15000 × 2 % = → ₹300 crore (₹200 crore borrowing is within the ₹300 crore cap).
   * Overnight interest (in exact rupees, ₹200 crore = ₹2,00,00,00,000): 2000000000 × 5.75 ÷ 100 ÷ 365 = → ₹3,15,068.49 (or in ₹ lakh: 20000 × 5.75 ÷ 100 ÷ 365 = → ₹3.15 lakh).
* Method 2 (independent check):
   * SLR dip: 15000 × 0.02 = ₹300 crore — matches.
   * Daily rate factor: 5.75 ÷ 36500 = 0.000157534247; 2000000000 × 0.000157534247 = ₹3,15,068.49 — matches.
V · Your turn: MSF SLR dip limit (Chapter 1)
* Data: Another bank has NDTL of ₹22,500 crore. What is its maximum SLR dip under MSF?
* Method 1 (key presses): 22500 × 2 % = → ₹450 crore.
* Method 2 (check): 22500 × 0.02 = ₹450 crore — matches.
* Common wrong answer (trap): Using the old COVID-era 3% limit gives 22500 × 3 % = ₹675 crore (wrong since 1 Jan 2022 [F10]).
Q2 · VRR auction allotment and cut-off rate (Chapter 2)
* Data: RBI notifies a 7-day VRR auction for ₹50,000 crore (policy repo = 5.50%). Four bids arrive:
   * Bank A: 5.58% for ₹20,000 crore
   * Bank B: 5.56% for ₹18,000 crore
   * Bank C: 5.54% for ₹24,000 crore
   * Bank D: 5.50% for ₹10,000 crore
* Step 1 (filter): Bank D's bid (5.50%) is at or below the repo rate → rejected outright [F18].
* Step 2 (descending order & key presses):
   * Method 1: 50000 − 20000 − 18000 = → ₹12,000 crore remaining for Bank C at 5.54%.
   * Pro-rata ratio for Bank C: 12000 ÷ 24000 × 100 = → 50%.
   * Method 2 (check): 20000 + 18000 = 38000; 50000 − 38000 = ₹12,000 crore — matches.
* Result: Cut-off rate = 5.54%. Multiple-price allotment: Bank A gets ₹20,000 cr at 5.58%, Bank B gets ₹18,000 cr at 5.56%, Bank C gets ₹12,000 cr at 5.54%.
* Common wrong answer (trap): Giving Bank A and B the 5.54% cut-off rate (wrong — VRR is multiple-price, not uniform-price [F17]) or sorting ascending like a VRRR.
Q3 · AD Category-I bank overseas borrowing ceiling (Chapter 3)
* Data: Unimpaired Tier I capital = ₹420 crore; USD/INR = ₹84.00.
* Method 1 (key presses, 1 crore = 10 million):
   * 420 × 10 ÷ 84 = → USD 50 million (₹420 crore).
   * Compare USD 50 million vs USD 10 million → higher is USD 50 million.
   * 50% trigger threshold: 420 ÷ 2 = ₹210 crore (USD 25 million); borrowings above this require 12.0% CRAR and 3-year minimum maturity [F28].
* Method 2 (check): 4200000000 ÷ 84 = 50000000 (USD 50 million) — matches.
Q4 · ADR exchange-rate risk on the holder (Chapter 3)
* Data: Overseas investor buys 100 ADRs (1 ADR = 1 share) when the Indian share trades at ₹850.00 and USD/INR is ₹85.00 → cost = 850 ÷ 85 = USD 10.00/ADR → USD 1,000.00 total. One year later, the share rises 6% in rupees to ₹901.00, while INR depreciates to ₹91.00/USD.
* Method 1 (key presses):
   * New INR price: 850 × 1.06 = ₹901.00.
   * New USD value of 100 ADRs: 901 ÷ 91 × 100 = → USD 990.11 (USD 9.9011 per ADR).
   * Net USD result: 990.11 − 1000 = → −USD 9.89 (a loss of USD 9.89, or −0.99%).
* Method 2 (multiplicative check): 1000 × 1.06 × 85 ÷ 91 = USD 990.11 — matches.
Practice / Homework sum · Overnight SDF vs MSF corridor spread on ₹100 crore
* Data: ₹100 crore (₹1,00,00,00,000) placed overnight in SDF (5.25%) vs borrowed overnight in MSF (5.75%), 365-day basis.
* Method 1 (key presses):
   * SDF interest: 1000000000 × 5.25 ÷ 100 ÷ 365 = → ₹1,43,835.62.
   * MSF interest: 1000000000 × 5.75 ÷ 100 ÷ 365 = → ₹1,57,534.25.
   * Difference: 157534.25 − 143835.62 = → ₹13,698.63.
* Method 2 (direct 50 bps spread check): 1000000000 × 0.50 ÷ 100 ÷ 365 = → ₹13,698.63 — matches.