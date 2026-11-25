# D02 · Numericals (c1, 2026-11-24)
All names, amounts, rates, and dates are illustrative. Checked two independent ways in Python (exact calendar/Decimal arithmetic AND 12-digit IIBF basic 8-function calculator key presses + − × ÷ % √); all match.
Rules Applied
* Day-end SMA/NPA tagging: Tagged by exact continuous days overdue — SMA-1 at completion of 30 days, SMA-2 at 60 days, NPA at 90 days [F19] (RBI IRACP Directions 2025, para 30–31).
* Security erosion: Realisable value < 50% of last assessed value → straightaway Doubtful [F35]; realisable value < 10% of loan outstanding → straightaway Loss [F36] (RBI IRACP Directions 2025, para 68).
Sum 1 · RBI Day-End Illustration (N046–N051)
Data: Term loan EMI due date = 31 March (unpaid at day-end). Month lengths: April = 30 days, May = 31 days, June = 30 days.


* Method 1 (Cumulative day count on 8-function calculator):
   * Overdue date: 31 March (Day 0 due date; flagged overdue at day-end).
   * SMA-1 (30 days): April has 30 days → 30 days in April → 30 April.
   * SMA-2 (60 days): 30 + 30 = → 60 days. May has 31 days, so 30 days after 30 April = 30 May (1 day left in May).
   * NPA (90 days): 60 + 30 = → 90 days. 1 day left in May + 29 days in June (30 − 1 = → 29) → 29 June.
* Method 2 (Exact calendar addition):
   * 2026-03-31 + 30 days = 2026-04-30 (SMA-1)
   * 2026-03-31 + 60 days = 2026-05-30 (SMA-2)
   * 2026-03-31 + 90 days = 2026-06-29 (NPA)
   * Both methods match.
* Common wrong answer: Adding 3 calendar months (30 June or 1 July = 91 or 92 days).
Sum 2 · Your Turn: SMA-1 Date for 30 June Due Date (N052–N053) & Homework SMA-2 Date (N124)
Data: Term loan EMI due date = 30 June (unpaid at day-end). July = 31 days, August = 31 days, September = 30 days.


* Method 1 (8-function calculator):
   * SMA-1 (30 days): July has 31 days → 30 days after 30 June = 30 July (31 − 30 = → 1 day left in July).
   * Homework — SMA-2 (60 days): 1 day left in July + 29 days in August (30 − 1 = → 29) → 29 August.
   * Bonus check — NPA (90 days): 2 days left in August (31 − 29 = 2) + 28 days in September (30 − 2 = 28) → 28 September.
* Method 2 (Exact calendar addition):
   * 2026-06-30 + 30 days = 2026-07-30 (SMA-1)
   * 2026-06-30 + 60 days = 2026-08-29 (SMA-2)
   * 2026-06-30 + 90 days = 2026-09-28 (NPA)
   * Both methods match.
Sum 3 · Worked Security Erosion Check (N104–N106)
Data: Loan outstanding = ₹100.00 lakh; last assessed security value = ₹80.00 lakh; fresh realisable security value = ₹35.00 lakh.


* Method 1 (8-function calculator — percentage ratios):
   * 50% Doubtful test: 35 ÷ 80 = → 0.4375 (× 100 = → 43.75%). Since 43.75% < 50%, erosion is significant → straightaway Doubtful [F35].
   * 10% Loss test: 35 ÷ 100 = → 0.3500 (× 100 = → 35.00%). Since 35.00% >= 10%, NOT straightaway Loss [F36].
* Method 2 (Threshold rupee comparison):
   * 50% of last assessed security: 80 × 50 % = → ₹40.00 lakh. Fresh value ₹35.00 lakh < ₹40.00 lakh → Doubtful.
   * 10% of loan outstanding: 100 × 10 % = → ₹10.00 lakh. Fresh value ₹35.00 lakh >= ₹10.00 lakh → Not Loss.
   * Both methods match: Straightaway Doubtful.
* Common wrong answer: Dividing fresh security (₹35 lakh) by loan outstanding (₹100 lakh) for the 50% test.
Sum 4 · Your Turn: Severe Security Erosion Check (N108–N109)
Data: Loan outstanding = ₹50.00 lakh; last assessed security value = ₹40.00 lakh; fresh realisable security value = ₹4.00 lakh.


* Method 1 (8-function calculator — percentage test):
   * 10% Loss test: 4 ÷ 50 = → 0.0800 (× 100 = → 8.00%). Since 8.00% < 10%, ignore security → straightaway Loss [F36].
   * (50% test also breached: 4 ÷ 40 = 10.00% < 50%, superseded by the stricter < 10% Loss rule.)
* Method 2 (Threshold rupee comparison):
   * 10% of loan outstanding: 50 × 10 % = → ₹5.00 lakh. Fresh value ₹4.00 lakh < ₹5.00 lakh → Straightaway Loss.
   * Both methods match: Straightaway Loss.
Sum 5 · Opening Branch Case Day Counts (N011–N013, N074, N083)
Data: Review date = 31 March 2026 (non-leap year; Feb = 28 days).


Account
	Trigger / Overdue Date
	Calculation Sequence
	Total Overdue
	Final Status
	Citation
	Meena Hardware CC
	Excess over DP started 20 Dec 2025
	11 + 31 + 28 + 31 =
	101 days (> 90 days)
	NPA
	[F24]
	Arjun Credit Card
	Due date 15 Dec 2025
	16 + 31 + 28 + 31 =
	106 days (> 90 days)
	NPA
	[F29]
	Subba Rao Sugarcane
	Unpaid since 31 Aug 2025
	7 months (212 days)
	212 days (< 18-month season)
	Standard
	[F22]
	

* Both methods match.