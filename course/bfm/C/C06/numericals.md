# C06 · Numericals (c1, 2026-11-24)
All names, amounts, coupons, and yields are illustrative. Every sum works on the IIBF basic 8-function calculator (+ − × ÷ % √, 12 digits, no scientific keys) and is solved by two independent methods matching to 4 decimal places. Convention: rates/durations to 4 decimals, rupees to 2 decimals.
Warm-up · Previous class homework recall (N002–N003)
* Data: Bond clean price = ₹101.20; accrued interest = ₹1.80.
* Method 1 (Direct sum): Dirty price = Clean price + Accrued interest = 101.20 + 1.80 = ₹103.00.
* Method 2 (Check by subtraction): 103.00 − 1.80 = 101.20 (matches clean price). Both match.
Num 1 · Macaulay Duration by table method — Full worked (Ch 1, N020–N026)
* Data: Bond A (illustrative): Face Value = ₹100, Maturity = 3 years, Annual coupon = 8% (₹8 per year, n = 1), YTM = 8.00% p.a. (so market price = par ₹100.00).
* Method 1 (Table method — IIBF calculator repeated ÷):
   * Discount factor step: divide by 1.08 once for Year 1, twice for Year 2, three times for Year 3.


Year (t)
	Cash Flow (₹)
	Discount Formula
	Present Value (PV) (₹)
	Weighted PV (t × PV)
	Year 1
	8.00
	8 ÷ 1.08
	7.4074
	7.4074
	Year 2
	8.00
	8 ÷ 1.08 ÷ 1.08
	6.8587
	13.7174
	Year 3
	108.00
	108 ÷ 1.08 ÷ 1.08 ÷ 1.08
	85.7339
	257.2016
	Total
	—
	—
	₹100.0000
	278.3264
	

* Sum of PVs (Price): 7.4074 + 6.8587 + 85.7339 = ₹100.0000.
* Sum of (t × PV): 7.4074 + 13.7174 + 257.2016 = 278.3264 (unrounded: 278.3265).
* Macaulay Duration: 278.3265 ÷ 100 = 2.7833 years.
* Method 2 (Closed-form par-bond formula):
   * Formula: D = [(1 + y) / y] × [1 − 1/(1 + y)^n]
   * 1 ÷ 1.08 ÷ 1.08 ÷ 1.08 = 0.793832
   * 1 − 0.793832 = 0.206168
   * 1.08 ÷ 0.08 = 13.5000
   * 13.5000 × 0.206168 = 2.7833 years. Both methods match to 4 decimals.
* Comparison (Bond B, 3-year zero-coupon bond at 8%): Only one cash flow at Year 3, so Macaulay Duration = 3.0000 years.
Num 2 · Modified Duration and % Price Change — Full worked (Ch 2, N035–N040)
* Data: Bond A (D = 2.7833 years, y = 8.00%, annual n = 1, Price = ₹100.00).
* Method 1 (Standard MD formula):
   * MD = D ÷ (1 + y/n): 2.7833 ÷ 1.08 = 2.5771 years.
   * If yield rises by +1.00% (+100 bps): %ΔP = −2.5771 × 1.00 = −2.5771%; approximate new price: 100 − 2.5771 = ₹97.42.
   * If yield falls by −0.50% (−50 bps): %ΔP = −2.5771 × (−0.50) = +1.2885%; approximate new price: 100 + 1.2885 = ₹101.29.
* Method 2 (Par-bond annuity factor check):
   * Formula: MD = [1 − (1 + y)^(−n)] ÷ y
   * 1 − 0.793832 = 0.206168
   * 0.206168 ÷ 0.08 = 2.5771 years. Both methods match to 4 decimals.
* Bond B check (3-year zero-coupon): MD = 3.0000 ÷ 1.08 = 2.7778 years; +100 bps drop = −2.7778% (larger loss than Bond A's −2.5771%).
Num 3 · Semi-annual G-sec MD and % Price Change — Faded + Trap (Ch 2, N043–N047)
* Data: Semi-annual G-sec (n = 2), Macaulay Duration = 4.2000 years, YTM = 7.00% p.a., yield rises by 40 bps (0.40%).
* Method 1 (Standard semi-annual adjustment):
   * Half-yearly yield: 0.07 ÷ 2 = 0.0350, so 1 + y/2 = 1.0350.
   * Key presses: 4.2 ÷ 1.035 = 4.0580 years (unrounded 4.057971).
   * % price change: 4.0580 × 0.40 = −1.6232% (price falls).
* Method 2 (Equivalent algebraic form):
   * Formula: MD = (2 × D) ÷ (2 + y)
   * 2 × 4.2 = 8.4; 2 + 0.07 = 2.07.
   * Key presses: 8.4 ÷ 2.07 = 4.0580 years.
   * %ΔP = −(4.2 × 0.40) ÷ 1.035 = −1.68 ÷ 1.035 = −1.6232%. Both methods match to 4 decimals.
* Commonest wrong answer (Trap): Dividing by 1.07 (4.2 ÷ 1.07 = 3.9252, giving −1.5701%) — forgets to halve the annual yield for semi-annual compounding.
Num 4 · BPV / PV01 per ₹1 Crore — Your Turn (Ch 3, N059–N062)
* Data: Market Value = ₹1,00,00,000 (₹1 crore), Modified Duration = 4.5000 years, yield rises by 25 bps.
* Method 1 (Direct BPV formula: MV × MD × 0.0001):
   * Key presses: 10000000 × 4.5 × 0.0001 = ₹4,500.00 per basis point.
   * Loss for +25 bps: 4500 × 25 = ₹1,12,500.00 (loss).
* Method 2 (100 bps change divided by 100):
   * 100 bps change = 4.5% of ₹1 crore: 10000000 × 4.5 % = 450000 (₹4,50,000.00).
   * Divide by 100 for 1 bps: 450000 ÷ 100 = ₹4,500.00.
   * For 25 bps (0.25%): 10000000 × 4.5 × 0.25 ÷ 10000 = ₹1,12,500.00. Both methods match exactly.
Num 5 · Portfolio Duration & BPV 5-Question Case (Ch 4, N072–N082)
* Data: Ananya's ₹10 crore G-sec desk holds three bonds:
   * Bond X: Market Value ₹5 crore, MD = 2.4000
   * Bond Y: Market Value ₹3 crore, MD = 5.0000
   * Bond Z: Market Value ₹2 crore, MD = 8.0000
   * Total Market Value = ₹10 crore (₹10,00,00,000).


Asset
	Market Value (₹)
	Weight (w_i)
	Modified Duration (MD_i)
	Weighted MD (w_i × MD_i)
	Individual BPV (₹)
	Bond X
	5,00,00,000
	0.50 (50%)
	2.4000
	1.2000
	12,000.00
	Bond Y
	3,00,00,000
	0.30 (30%)
	5.0000
	1.5000
	15,000.00
	Bond Z
	2,00,00,000
	0.20 (20%)
	8.0000
	1.6000
	16,000.00
	Total Desk
	10,00,00,000
	1.00 (100%)
	—
	4.3000
	43,000.00
	

* Q1 (Weights): 5 ÷ 10 = 0.50 (50%), 3 ÷ 10 = 0.30 (30%), 2 ÷ 10 = 0.20 (20%). Sum = 1.00.
* Q2 (Portfolio Modified Duration):
   * Method 1 (Weighted sum Σ w_i × MD_i): (0.50 × 2.40) + (0.30 × 5.00) + (0.20 × 8.00) = 1.20 + 1.50 + 1.60 = 4.3000 years.
   * Method 2 (Σ (MV_i × MD_i) ÷ Total MV): (5 × 2.40 + 3 × 5.00 + 2 × 8.00) ÷ 10 = (12 + 15 + 16) ÷ 10 = 43 ÷ 10 = 4.3000 years. Both match.
* Q3 (Portfolio BPV / PV01):
   * Method 1 (From Portfolio MD): 100000000 × 4.30 × 0.0001 = ₹43,000.00.
   * Method 2 (Sum of individual bond BPVs):
      * BPV X: 50000000 × 2.40 × 0.0001 = ₹12,000.00
      * BPV Y: 30000000 × 5.00 × 0.0001 = ₹15,000.00
      * BPV Z: 20000000 × 8.00 × 0.0001 = ₹16,000.00
      * Total: 12000 + 15000 + 16000 = ₹43,000.00. Both match.
* Q4 (Impact of +30 bps yield rise):
   * Method 1 (BPV × bps): 43000 × 30 = ₹12,90,000.00 (loss of ₹12.90 lakh).
   * Method 2 (Portfolio % change): %ΔP = −4.30 × 0.30% = −1.29%; 100000000 × 1.29 % = ₹12,90,000.00 (loss). Both match.
* Q5 (Rebalancing: replace Bond Z ₹2 cr, MD 8.00 with 91-day T-bill ₹2 cr, MD 0.25):
   * Method 1 (Recompute weighted average): (0.50 × 2.40) + (0.30 × 5.00) + (0.20 × 0.25) = 1.20 + 1.50 + 0.05 = 2.7500 years.
   * Method 2 (Incremental change): 4.3000 − 0.20 × (8.00 − 0.25) = 4.3000 − 0.20 × 7.75 = 4.3000 − 1.5500 = 2.7500 years. Both match.
Homework (Close, N088)
* Data: ₹20 crore bond desk (₹20,00,00,000), Portfolio MD = 5.0000, yields rise by 20 bps.
* Method 1: BPV = 200000000 × 5.00 × 0.0001 = ₹1,00,000.00 (₹1 lakh per bps). Loss for +20 bps: 100000 × 20 = ₹20,00,000.00 (₹20 lakh).
* Method 2: %ΔP = −5.00 × 0.20% = −1.00%; 200000000 × 1 % = ₹20,00,000.00. Both match.
Practice Sums (in C06_practice)
P1 · 2-year 10% annual par bond Macaulay Duration
* Data: FV = ₹100, Maturity = 2 years, Annual coupon = 10%, YTM = 10% (Price = ₹100.00).
* Method 1: Year 1 PV = 10 ÷ 1.10 = 9.0909 (t×PV = 9.0909); Year 2 PV = 110 ÷ 1.10 ÷ 1.10 = 90.9091 (t×PV = 181.8182). Sum t×PV = 190.9091; 190.9091 ÷ 100 = 1.9091 years.
* Method 2: (1.10 ÷ 0.10) × [1 − (1 ÷ 1.10 ÷ 1.10)] = 11 × (1 − 0.826446) = 11 × 0.173554 = 1.9091 years. Both match.
P2 · Semi-annual bond MD and −50 bps price gain
* Data: Semi-annual bond (n = 2), Macaulay Duration = 5.2000 years, YTM = 8.00% p.a., Current Price = ₹102.00, yield falls by 50 bps.
* Method 1: MD = 5.20 ÷ (1 + 0.08/2) = 5.20 ÷ 1.04 = 5.0000 years. %ΔP = −5.00 × (−0.50) = +2.5000%. New price = 102 × 1.025 = ₹104.55.
* Method 2: MD = (5.20 × 2) ÷ 2.08 = 10.40 ÷ 2.08 = 5.0000. Gain = 102 × 2.5 % = ₹2.55; 102 + 2.55 = ₹104.55. Both match.
P3 · ₹5 crore bond BPV and +15 bps loss
* Data: Market Value = ₹5,00,00,000 (₹5 crore), MD = 6.4000, yield rises by 15 bps.
* Method 1: BPV = 50000000 × 6.40 × 0.0001 = ₹32,000.00. Loss = 32000 × 15 = ₹4,80,000.00 (₹4.80 lakh).
* Method 2: %ΔP = −6.40 × 0.15% = −0.96%; 50000000 × 0.96 % = ₹4,80,000.00. Both match.