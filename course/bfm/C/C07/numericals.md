# C07 · Numericals (c1, 2026-11-24)
All names, amounts, rates, and dates are illustrative. Every sum works on the IIBF basic 8-function calculator (+ − × ÷ % √, 12 digits, no scientific keys) and is solved two independent ways. Rates rounded to 4 decimals where needed; rupees to 2 decimals.
Sum 1 · Warm-up recall from C06: Bond Price Change from Modified Duration (N002–N004)
* Data: Bond value = ₹10 crore (₹10,00,00,000), Modified Duration (MD) = 4.5 years, yield rises by 10 bps (+0.10%).
* Method 1 (Direct percentage formula): ΔP = −Value × MD × Δy. Key presses: 100000000 × 4.5 × 0.1 % = → ₹4,50,000 (₹4.50 lakh fall).
* Method 2 (Via BPV / PV01): Price change for 1 bp (0.01%): 100000000 × 4.5 × 0.01 % = → ₹45,000 per bp. For 10 bps: 45000 × 10 = → ₹4,50,000 (₹4.50 lakh fall).
* Check: Both methods match exactly (₹4,50,000 / ₹4.50 lakh).
Sum 2 · Ch 1: Individual Broker 5% Prudential Cap (N029–N030)
* Data: Total brokered investment transactions (purchases + sales, excluding direct non-brokered deals and Primary Dealers) in FY = ₹4,000 crore; prudential cap = 5% [F11].
* Method 1 (% key): Key presses: 4000 × 5 % = → ₹200.00 crore.
* Method 2 (Decimal / fraction): Key presses: 4000 × 0.05 = (or 4000 ÷ 20 =) → ₹200.00 crore.
* Check: Both methods match exactly (₹200.00 crore).
Sum 3 · Ch 2: 10-Day VaR Scaling on the Desk (N053–N054)
* Data: 1-day 99% VaR = ₹1.20 crore; Basel regulatory holding period = 10 trading days [F20].
* Method 1 (Square-root key first): VaR_10d = VaR_1d × √10. Key presses: 10 √ × 1.2 = → 3.16227766 × 1.2 = 3.794733 → ₹3.79 crore (or ₹3.7947 crore to 4 decimals).
* Method 2 (Variance scaling — square, multiply by 10, then take square root): VaR_10d = √(1.2² × 10). Key presses: 1.2 × 1.2 × 10 = √ → √14.4 = 3.794733 → ₹3.79 crore (or ₹3.7947 crore).
* Check: Both methods match to 4 decimals (3.7947 crore → ₹3.79 crore).
Sum 4 · Ch 3: Vertical Disallowance in One Time Band (N069–N070)
* Data: Within one time band of the duration ladder: Long weighted sensitivity = ₹100 crore, Short weighted sensitivity = ₹60 crore; vertical disallowance = 5% [F24].
* Method 1 (Matched amount × 5%): Matched position = min(100, 60) = ₹60 crore (net carried forward = 100 − 60 = ₹40 crore long). Key presses: 60 × 5 % = → ₹3.00 crore.
* Method 2 (Divide by 20): 5% = 1/20. Key presses: 60 ÷ 20 = → ₹3.00 crore.
* Check: Both methods match exactly (₹3.00 crore).
Sum 5 · Ch 4: HTM 5% Annual Sales Threshold (N085–N086)
* Data: Opening carrying value of HTM portfolio = ₹12,000 crore; annual sales limit without prior RBI DoS approval = 5% [F29].
* Method 1 (% key): Key presses: 12000 × 5 % = → ₹600.00 crore.
* Method 2 (Decimal / fraction): Key presses: 12000 ÷ 20 = → ₹600.00 crore.
* Check: Both methods match exactly (₹600.00 crore).
Sum 6 · Homework: Maximum Board NOOPL and AGL (N104)
* Data: Bank's total capital (Tier I + Tier II) = ₹2,000 crore; NOOPL ceiling = 25% of total capital [F8]; AGL ceiling = 6 times total capital [F9].
* NOOPL: Method 1: 2000 × 25 % = → ₹500.00 crore. Method 2: 2000 ÷ 4 = → ₹500.00 crore.
* AGL: Method 1: 2000 × 6 = → ₹12,000.00 crore. Method 2: 2000 + 2000 + 2000 + 2000 + 2000 + 2000 = → ₹12,000.00 crore.
* Check: Both methods match exactly (NOOPL = ₹500.00 crore; AGL = ₹12,000.00 crore).
Sum 7 · Practice Sum: Horizontal Disallowance Across Zones (Practice Q7)
* Data: Net sensitivity after vertical offsetting: Zone 1 = +₹40 crore (long), Zone 2 = −₹25 crore (short), Zone 3 = −₹10 crore (short). Adjacent zone disallowance = 40%; Zone 1 vs. Zone 3 disallowance = 100% [F25].
* Step 1 (Offset Zone 1 against adjacent Zone 2): Matched = min(40, 25) = ₹25 crore. Disallowance at 40%: 25 × 40 % = → ₹10.00 crore. Remaining Zone 1 long = 40 − 25 = ₹15 crore.
* Step 2 (Offset remaining Zone 1 against Zone 3): Matched = min(15, 10) = ₹10 crore. Disallowance at 100%: 10 × 100 % = → ₹10.00 crore.
* Total Horizontal Disallowance: Method 1: 10 + 10 = → ₹20.00 crore. Method 2: (25 × 0.4) + (10 × 1.0) = 10 + 10 = → ₹20.00 crore.
* Check: Both methods match exactly (₹20.00 crore).