# D01 · Numericals (c1, 2026-11-24)
Plan note (module_D.md §D01): Lesson D01 ("The bank's balance sheet and P&L", syllabus D1.1) has no exam numericals — it uses Balance Sheet placement and P&L classification drills instead.


To support self-study verification of the Form A accounting identity and Form B Profit & Appropriations mechanics taught in D01, two illustrative verification checks are provided below. All bank names and figures are illustrative. Both checks work on the IIBF basic 8-function calculator (+ − × ÷ % √, 12 digits) and were verified two independent ways in Python Decimal.
Check 1 · Form A Balance Sheet Identity (Sources of Funds = Uses of Funds)
* Rule used: Total Capital & Liabilities (Schedules 1–5) must always equal Total Assets (Schedules 6–11); Schedule 12 Contingent Liabilities sits below the total and is NOT added to Total Assets or Total Liabilities [F10, F25].
* Illustrative data (Deccan Commercial Bank, ₹ crore):
   * Schedule 1 Capital = ₹1,200.00
   * Schedule 2 Reserves & Surplus = ₹8,800.00
   * Schedule 3 Deposits = ₹1,12,000.00
   * Schedule 4 Borrowings = ₹14,500.00
   * Schedule 5 Other Liabilities & Provisions = ₹3,500.00
   * Schedule 6 Cash & Balances with RBI = ₹6,200.00
   * Schedule 7 Balances with Banks & Money at Call/Short Notice = ₹4,800.00
   * Schedule 8 Investments = ₹34,000.00
   * Schedule 9 Advances (net of NPA provisions) = ₹89,500.00
   * Schedule 10 Fixed Assets = ₹1,500.00
   * Schedule 11 Other Assets = ₹4,000.00
   * Schedule 12 Contingent Liabilities = ₹18,000.00 (off-balance-sheet — excluded from total)
* Method 1 (Direct addition — key presses):
   * Sources (Sch 1–5): 1200 + 8800 + 112000 + 14500 + 3500 = → ₹1,40,000.00 crore
   * Uses (Sch 6–11): 6200 + 4800 + 34000 + 89500 + 1500 + 4000 = → ₹1,40,000.00 crore
* Method 2 (Grouped check):
   * Own Funds (Sch 1 + Sch 2) = 1200 + 8800 = ₹10,000.00; External Funds (Sch 3 + 4 + 5) = 112000 + 14500 + 3500 = ₹1,30,000.00 → 10000 + 130000 = ₹1,40,000.00 crore
   * Earning Assets (Sch 7 + 8 + 9) = 4800 + 34000 + 89500 = ₹1,28,300.00; Cash & Non-Earning (Sch 6 + 10 + 11) = 6200 + 1500 + 4000 = ₹11,700.00 → 128300 + 11700 = ₹1,40,000.00 crore
* Verification: Both methods match exactly (₹1,40,000.00 crore). Common trap: adding Schedule 12 Contingent Liabilities (₹18,000 crore) into the Balance Sheet total.
Check 2 · Form B Net Interest Income, Operating Profit, Net Profit & Statutory Reserve Transfer
* Rules used:
   * Net Interest Income (NII) = Schedule 13 (Interest Earned) − Schedule 15 (Interest Expended) [F35].
   * Operating Profit = Total Income (Sch 13 + Sch 14) − (Sch 15 + Sch 16) [F38, F39].
   * Net Profit = Operating Profit − Provisions & Contingencies (booked above the line) [F38, F39].
   * Minimum Statutory Reserve Transfer for Commercial Banks = 25% of Net Profit before appropriations (RBI mandate; BR Act s. 17(1) statutory floor is 20%) [F13].
* Illustrative data (₹ crore):
   * Schedule 13 Interest Earned = ₹11,400.00
   * Schedule 14 Other Income = ₹1,800.00
   * Schedule 15 Interest Expended = ₹6,900.00
   * Schedule 16 Operating Expenses = ₹2,700.00
   * Provisions & Contingencies = ₹1,200.00
* Method 1 (Form B top-down — key presses):
   * Total Income: 11400 + 1800 = ₹13,200.00 crore
   * Total Expenditure: 6900 + 2700 + 1200 = ₹10,800.00 crore
   * Net Profit: 13200 − 10800 = ₹2,400.00 crore
   * Mandatory 25% Statutory Reserve transfer: 2400 × 25 % = ₹600.00 crore
* Method 2 (NII → Operating Profit → Net Profit check):
   * NII: 11400 − 6900 = ₹4,500.00 crore
   * Operating Profit: 4500 + 1800 − 2700 = ₹3,600.00 crore
   * Net Profit: 3600 − 1200 = ₹2,400.00 crore
   * Statutory Reserve (one-fourth): 2400 ÷ 4 = ₹600.00 crore
* Verification: Both methods match exactly (Net Profit = ₹2,400.00 crore; Statutory Reserve transfer = ₹600.00 crore). Common trap: using the BR Act s. 17(1) statutory floor of 20% (2400 × 20 % = ₹480.00 crore) instead of RBI's mandatory 25% for commercial banks.