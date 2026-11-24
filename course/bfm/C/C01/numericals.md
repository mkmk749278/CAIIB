# C01 · Numericals (c1, 2026-11-24)
All bank names, amounts, interest rates, and exchange rates are illustrative. Every calculation uses only the IIBF basic 8-function calculator (+ − × ÷ % √, 12 digits, no scientific keys) and has been verified two independent ways in Python (Decimal); all pairs match exactly. Exchange rates are shown to 4 decimal places; rupees and US dollars to 2 decimal places.
Core formulas (from C01_fact_sheet): - Covered Interest Arbitrage (borrow FCY, convert Spot to INR, invest in INR, cover repayment via Forward) [F17, F18]: - FCY Repayment = Principal × (1 + r_FCY × t) - INR Maturity = (Principal × Spot) × (1 + r_INR × t) - Arbitrage Profit (INR) = INR Maturity − (FCY Repayment × Forward) - Arbitrage Profit (USD) = (INR Maturity ÷ Forward) − FCY Repayment - Fair Forward Rate (Interest Rate Parity) [F18]: - Fair Forward = Spot × (1 + r_INR × t) ÷ (1 + r_FCY × t) - AD Category-I Overseas FC Borrowing Ceiling [F30, F31, F32]: - Ceiling = Higher of 100% of Unimpaired Tier I Capital or USD 10 million (export credit, Tier II subordinated debt, FC capital instruments, and RBI-approved loans excluded). Borrowings > 50% of unimpaired Tier I require Board policy + 12.0% CRAR + 3-year minimum maturity.
________________
Sum 1 · Worked in Full: Covered Interest Arbitrage (Ch 2, N046–N050)
* Data (illustrative): Kaveri Commercial Bank's treasury borrows USD 1,000,000 for 6 months (t = 0.50 year) at 4.00% p.a. simple interest. Spot USD/INR = ₹84.0000. It converts to INR and invests for 6 months at 7.00% p.a. simple interest. Simultaneously, it buys USD 6-month forward at ₹84.8000 to cover repayment [F17, F18].
* Method 1 (Leg-by-leg cash flows — IIBF calculator key presses):
* USD to repay after 6 months: 4 × 0.5 = → 2%; 1000000 × 1.02 = → USD 1,020,000.00.
* INR invested at Spot: 1000000 × 84 = → ₹8,40,00,000.00.
* INR received at maturity (6 months at 7% p.a. = 3.5%): 7 × 0.5 = → 3.5%; 84000000 × 1.035 = → ₹8,69,40,000.00.
* Convert INR maturity back to USD at Forward ₹84.8000: 86940000 ÷ 84.8 = → USD 1,025,235.85.
* Net arbitrage profit in USD: 1025235.85 − 1020000 = → USD 5,235.85.
* Equivalent profit in INR: 1020000 × 84.8 = → ₹8,64,96,000.00; 86940000 − 86496000 = → ₹4,44,000.00.
* Method 2 (Interest Rate Parity Fair Forward Check):
* Fair 6-month forward: 84 × 1.035 ÷ 1.02 = → ₹85.2353 (85.23529412).
* Forward discount vs parity: 85.23529412 − 84.8000 = → ₹0.43529412 per USD.
* Total INR profit on USD 1,020,000: 1020000 × 0.43529412 = → ₹4,44,000.00.
* Convert to USD at ₹84.8000: 444000 ÷ 84.8 = → USD 5,235.85.
* Both methods match exactly: ₹4,44,000.00 / USD 5,235.85.
* Commonest wrong answer (trap): Using annual rates 4% and 7% without halving for 6 months (1.07 and 1.04 instead of 1.035 and 1.02), which grossly overstates profit as USD 16,132.08.
________________
Sum 2 · Faded Check: Parity Forward — Why Arbitrage Disappears (Ch 2, N051–N052)
* Data (illustrative): Same borrowing (USD 1,000,000, 6 months, 4% USD, 7% INR, Spot ₹84.0000), but the 6-month forward rate is at exact Interest Rate Parity = ₹85.2353 [F18].
* Method 1 (Calculator key presses): 86940000 ÷ 85.2353 = → USD 1,019,999.93 (vs USD 1,020,000.00 owed → USD 0.00 net profit, ignoring 4-decimal rounding of 7 cents).
* Method 2 (Parity check): Actual forward (₹85.2353) equals Fair Forward (₹85.2353), so swap cost (₹1.2353) exactly wipes out the 3% p.a. (1.5% half-year) interest-rate advantage → zero arbitrage profit. Both methods match.
________________
Sum 3 · "Your Turn": Covered Interest Arbitrage (Ch 2, N053–N055, H: 15 s)
* Data (illustrative): Borrow USD 500,000 for 6 months (t = 0.50) at 5.00% p.a.; Spot USD/INR = ₹85.0000; invest INR for 6 months at 8.00% p.a.; 6-month Forward USD/INR = ₹86.0000. Find the net arbitrage profit in INR and USD [F17, F18].
* Method 1 (Leg-by-leg — IIBF calculator key presses):
* USD repayment (2.5% for 6 months): 500000 × 1.025 = → USD 512,500.00.
* INR invested: 500000 × 85 = → ₹4,25,00,000.00.
* INR maturity (4.0% for 6 months): 42500000 × 1.04 = → ₹4,42,00,000.00.
* INR needed to buy USD 512,500 forward at ₹86.0000: 512500 × 86 = → ₹4,40,75,000.00.
* Net profit (INR): 44200000 − 44075000 = → ₹1,25,000.00.
* Net profit (USD): 125000 ÷ 86 = → USD 1,453.49.
* Method 2 (Parity Fair Forward Check):
* Fair forward: 85 × 1.04 ÷ 1.025 = → ₹86.2439 (86.24390244).
* Advantage per USD: 86.24390244 − 86.0000 = → ₹0.24390244.
* Total INR profit: 512500 × 0.24390244 = → ₹1,25,000.00; in USD: 125000 ÷ 86 = → USD 1,453.49.
* Both methods match exactly: ₹1,25,000.00 / USD 1,453.49.
________________
Homework Sum (Close, N104)
* Data (illustrative): Borrow USD 200,000 for 6 months at 4.00% p.a.; Spot = ₹84.0000; invest INR for 6 months at 7.00% p.a.; 6-month Forward = ₹85.0000. Calculate the net arbitrage profit in INR and USD [F17, F18].
* Method 1 (Calculator key presses):
* USD repayment: 200000 × 1.02 = → USD 204,000.00.
* INR maturity: 200000 × 84 = → ₹1,68,00,000; 16800000 × 1.035 = → ₹1,73,88,000.00.
* INR needed at forward ₹85: 204000 × 85 = → ₹1,73,40,000.00.
* Net profit: 17388000 − 17340000 = → ₹48,000.00 (48000 ÷ 85 = USD 564.71).
* Method 2 (Parity check): Fair forward = ₹85.23529412; 204000 × (85.23529412 − 85) = → ₹48,000.00 (USD 564.71). Both methods match.
________________
Practice Sum 1 · Overseas FC Borrowing Ceiling Check (Practice Q7)
* Data (illustrative): An Indian AD Category-I bank has unimpaired Tier I capital of ₹6,000 crore (far above USD 10 million). Its current overseas FC borrowings are ₹2,400 crore (general) plus ₹1,000 crore specifically raised to finance export credit. How much additional general overseas FC borrowing can it raise without prior RBI approval, and what extra conditions apply if it borrows ₹1,200 crore more? [F30, F31, F32]
* Method 1 (Ceiling minus counted borrowings):
* Overall ceiling = 100% of unimpaired Tier I = ₹6,000 crore.
* Export-credit borrowing (₹1,000 crore) is outside the limit [F32].
* Remaining headroom = 6000 − 2400 = ₹3,600 crore.
* Adding ₹1,200 crore brings counted borrowings to 2400 + 1200 = ₹3,600 crore (60% of Tier I, which exceeds the 50% = ₹3,000 crore trigger [F31]), so the bank needs a Board-approved policy, CRAR ≥ 12.0%, and minimum 3-year maturity.
* Method 2 (Percentage of Tier I): Current counted ratio = 2400 ÷ 6000 × 100 = 40%; remaining room = 100% − 40% = 60% (6000 × 60 % = ₹3,600 crore); post-borrowing ratio = (2400 + 1200) ÷ 6000 × 100 = 60% > 50%. Both methods match.
________________
Practice Sum 2 · Covered Interest Arbitrage (Practice Q8)
* Data (illustrative): Borrow USD 400,000 for 6 months (t = 0.50) at 4.50% p.a.; Spot = ₹84.0000; invest INR for 6 months at 7.50% p.a.; 6-month Forward = ₹84.9000. Compute net arbitrage profit in INR [F17, F18].
* Method 1 (Calculator key presses):
* USD repayment (2.25% for 6m): 400000 × 1.0225 = → USD 409,000.00.
* INR maturity (3.75% for 6m): 400000 × 84 = 33600000; 33600000 × 1.0375 = → ₹3,48,60,000.00.
* INR needed at forward ₹84.9000: 409000 × 84.9 = → ₹3,47,24,100.00.
* Net profit (INR): 34860000 − 34724100 = → ₹1,35,900.00 (or 135900 ÷ 84.9 = USD 1,600.71).
* Method 2 (Parity Fair Forward Check):
* Fair forward = 84 × 1.0375 ÷ 1.0225 = ₹85.2323 (85.23227384).
* Profit = 409000 × (85.23227384 − 84.9) = ₹1,35,900.00 (USD 1,600.71). Both methods match.