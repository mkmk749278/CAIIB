# A20 · Numericals (c1, 2026-11-24)
All bank names, client names, capital figures, and deposit amounts are illustrative. Every calculation uses only the IIBF basic 8-function calculator (+ − × ÷ % √, 12 digits, no scientific keys) and has been verified two independent ways in Python (Decimal); all pairs match exactly.
Rules (from A20_fact_sheet): - Retail Deposit Reserve Ratio (RDRR): 3% daily of deposits raised from individuals (retail or professional clients) outstanding as at the end of the previous working day [F27]. Corporate/non-individual liabilities of an IBU are exempt from CRR, SLR, and RDRR [F26]. - IBU Exposure Ceilings: 5% of parent bank's Tier 1 capital for a single borrower; 10% of parent bank's Tier 1 capital for a borrower group [F29]. - Warm-up (Last class's LSF formula): ₹7,500 + (0.025% × A × n), rounded upwards to the nearest ₹100, capped at 100% of A [F42].
________________
Warm-up · Previous class homework (N002–N003)
* Data: Delayed Form FC-GPR for equity allotment A = ₹8,00,00,000 (₹8 crore); delay = 9 months (n = 9 ÷ 12 = 0.75 years) [F42].
* Method 1 (IIBF calculator % key):
* 80000000 × 0.025 % = → 20000
* 20000 × 0.75 = → 15000
* 15000 + 7500 = → ₹22,500 (exact multiple of ₹100; below 100% of A).
* Method 2 (equivalent divisor 0.025% = 1 ÷ 4000):
* 80000000 ÷ 4000 = → 20000
* 20000 × 9 ÷ 12 = → 15000
* 15000 + 7500 = → ₹22,500.
* Both methods match: ₹22,500.
________________
Sum 1 · Worked in Full: Daily Retail Deposit Reserve Ratio (RDRR) (N064–N065)
* Data: Deccan Commercial Bank's IBU (illustrative) holds USD 12,000,000 in corporate deposits and USD 4,500,000 in individual deposits outstanding at the end of the previous working day. Calculate today's mandatory daily RDRR [F26, F27].
* Method 1 (IIBF calculator % key):
* Exclude corporate deposits (exempt from CRR/SLR/RDRR).
* 4500000 × 3 % = → USD 135,000.
* Method 2 (decimal multiplier 0.03):
* 4500000 × 0.03 = → USD 135,000.
* Commonest wrong answer (trap): Applying 3% to total deposits (16500000 × 3 % = USD 495,000) — wrong because corporate/non-individual liabilities are exempt from RDRR.
* Both methods match: USD 135,000.
________________
Sum 2 · Faded Check: Single-Borrower & Group-Borrower Exposure Ceilings (N066–N067)
* Data: Deccan Commercial Bank's parent Tier 1 capital = USD 900 million. Its IBU proposes a USD 40 million loan to Narmada Infra Pte Ltd (illustrative). Find the single-borrower and borrower-group ceilings, and test whether USD 40 million is permitted [F29].
* Method 1 (IIBF calculator % key):
* Single-borrower ceiling (5%): 900 × 5 % = → USD 45 million (40 ≤ 45 → permitted).
* Borrower-group ceiling (10%): 900 × 10 % = → USD 90 million.
* Method 2 (divisor method: 5% = ÷ 20; 10% = ÷ 10):
* Single-borrower ceiling: 900 ÷ 20 = → USD 45 million.
* Borrower-group ceiling: 900 ÷ 10 = → USD 90 million.
* Commonest wrong answer (trap): Using domestic RBI Large Exposure Framework limits (20% / 25% of Tier 1 capital) instead of the IBU's 5% / 10% parent Tier 1 ceilings.
* Both methods match: USD 45 million (single, permitted) and USD 90 million (group).
________________
Sum 3 · "Your Turn": Combined RDRR & Single-Borrower Ceiling (N068–N069)
* Data: Parent bank Tier 1 capital = USD 640 million; IBU holds USD 8,000,000 in individual deposits and USD 20,000,000 in corporate deposits. Calculate (a) daily RDRR and (b) single-borrower exposure ceiling [F26, F27, F29].
* Method 1 (IIBF calculator % key):
* (a) Daily RDRR: 8000000 × 3 % = → USD 240,000.
* (b) Single-borrower ceiling: 640 × 5 % = → USD 32 million.
* Method 2 (decimal / divisor):
* (a) 8000000 × 0.03 = → USD 240,000.
* (b) 640 ÷ 20 = → USD 32 million.
* Both methods match: USD 240,000 and USD 32 million.
________________
Homework Sum (N103)
* Data: Parent bank Tier 1 capital = USD 1,200 million; IBU holds USD 6,200,000 in individual deposits. Calculate (a) daily RDRR and (b) borrower-group exposure ceiling [F27, F29].
* Method 1 (IIBF calculator % key):
* (a) Daily RDRR: 6200000 × 3 % = → USD 186,000.
* (b) Borrower-group ceiling: 1200 × 10 % = → USD 120 million.
* Method 2 (decimal / divisor):
* (a) 6200000 × 0.03 = → USD 186,000.
* (b) 1200 ÷ 10 = → USD 120 million.
* Both methods match: USD 186,000 and USD 120 million.
________________
Practice Sum 1 · Daily RDRR with Mixed Deposits (Practice Q7)
* Data: An IBU holds USD 15,000,000 in corporate term deposits, USD 3,500,000 in NRI individual savings deposits, and USD 2,500,000 in resident individual LRS term deposits at the end of the previous working day. Calculate today's mandatory daily RDRR [F26, F27].
* Method 1 (sum individuals, then % key):
* Individual deposits = 3500000 + 2500000 = → 6000000 (exclude corporate USD 15M).
* RDRR = 6000000 × 3 % = → USD 180,000.
* Method 2 (separate 3% then sum):
* 3500000 × 0.03 = 105000; 2500000 × 0.03 = 75000; 105000 + 75000 = → USD 180,000.
* Both methods match: USD 180,000.
________________
Practice Sum 2 · Group Exposure Headroom (Practice Q8)
* Data: An IBU's parent bank has Tier 1 capital of USD 1,500 million. The IBU already has a USD 65 million loan outstanding to Company X and a USD 45 million loan to its group affiliate Company Y. What maximum additional loan (in USD million) can the IBU extend to a third company in the same borrower group without breaching the group ceiling? [F29]
* Method 1 (compute 10% ceiling then subtract):
* Group ceiling = 1500 × 10 % = → 150 million.
* Existing group exposure = 65 + 45 = → 110 million.
* Available headroom = 150 − 110 = → USD 40 million.
* Method 2 (percentage remaining):
* Existing % of Tier 1 = 110 ÷ 1500 × 100 = 7.3333%; remaining = 10 − 7.3333 = 2.6667%; 1500 × 2.6667 % = → USD 40 million (exact: (1500 ÷ 10) − 110 = 40).
* Both methods match: USD 40 million.