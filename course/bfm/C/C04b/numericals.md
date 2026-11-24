# C04b · Numericals (c1, 2026-11-24)
All names, amounts, rates, and dates are illustrative. Every calculation uses only the IIBF basic 8-function calculator (+ − × ÷ % √, 12 digits, no scientific keys) and is solved two independent ways with matching results. Rates shown to 4 decimals where applicable; rupee amounts to 2 decimals.
Sum 1 · DvP-III Net Settlement on NDS-OM via CCIL (Chapter 3, Worked Example)
Scenario (illustrative): On a single settlement day on NDS-OM, South Bank buys ₹300 crore (face value) of the 10-year G-sec at par (₹300.00 crore) in the morning, and sells ₹180 crore (face value) of the same 10-year G-sec at ₹101.00 per ₹100 face value in the afternoon. Both trades settle on DvP-III (net securities, net funds) through CCIL [F23].


Find:


1. Net securities delivered or received by South Bank.
2. Net funds paid or received by South Bank.
Method 1 (Leg-by-leg gross then net)
* Securities leg: Buy face value = ₹300.00 crore; Sell face value = ₹180.00 crore. Keys: 300 − 180 = → ₹120.00 crore (net securities received by South Bank).
* Funds leg:
   * Morning outflow (buy at ₹100.00): 300 × 100 ÷ 100 = → ₹300.00 crore payable.
   * Afternoon inflow (sell at ₹101.00): 180 × 101 ÷ 100 = → ₹181.80 crore receivable.
   * Net funds: 300 − 181.8 = → ₹118.20 crore (net funds paid by South Bank).
Method 2 (Price-difference decomposition check)
* South Bank's net purchase of ₹120 crore at par costs ₹120.00 crore.
* On the matched ₹180 crore bought at ₹100 and sold at ₹101, South Bank earns a ₹1.00 gain per ₹100 face value: 180 × 1 ÷ 100 = → ₹1.80 crore net trading inflow.
* Net cash outflow = 120 − 1.8 = → ₹118.20 crore payable.
* Check: Method 1 (₹118.20 crore) = Method 2 (₹118.20 crore). Exact match.


Commonest wrong answer (trap): Paying ₹300.00 crore gross and waiting for ₹181.80 crore (that would be DvP-I gross-gross, not DvP-III net-net).
Sum 2 · RTGS Delayed-Return Compensation (Chapter 1, Your Turn)
Scenario (illustrative): A corporate customer sends ₹50,00,000 via RTGS. The beneficiary account is closed, and the receiving bank delays returning the funds by 2 days beyond the permitted 1-hour / EOD return window. Assume the current RBI Repo Rate is 5.50% (illustrative; verify at Dec 2026 MPS). Under RBI RTGS rules, compensation is paid automatically at Repo Rate + 2% [F6].


Find: The compensation payable to the originating customer (using a 365-day year).
Method 1 (Direct rate multiplication)
* Applicable compensation rate = 5.5 + 2 = 7.50% p.a. (0.0750).
* Annual interest on ₹50,00,000: 5000000 × 7.5 % = → ₹3,75,000.00.
* For 2 days: 375000 × 2 ÷ 365 = → ₹2,054.79 (2054.7945...).
Method 2 (Per-day rate factor first)
* Daily factor: 7.5 ÷ 365 = 0.0205479452 % per day.
* For 2 days: 0.0205479452 × 2 = 0.0410958904 %.
* Apply to principal: 5000000 × 0.0410958904 ÷ 100 = → ₹2,054.79 (2054.7945...).
* Check: Method 1 (₹2,054.79) = Method 2 (₹2,054.79). Exact match.


Commonest wrong answer (trap): Using Bank Rate + 3% (that is CRR penal interest from last class, not RTGS delay compensation, which is Repo Rate + 2%).