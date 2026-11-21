# A05 practice (c2, 2026-11-21; from the examiner review draft; every number in `tools/check/fx_forwards.py`)

Own questions; all quotes, points, margins and rates illustrative. Rates to 4 decimals (round half up); rupees to
paise. Basic 8-function calculator; key presses shown. Weekdays checked with Python `datetime`.

Common quote for P3, P7, P8: spot USD/INR **84.90 / 84.93** · points 1m 0.16 / 0.12 · 2m 0.31 / 0.25 · 3m 0.42 / 0.38
(falling → discount, subtract). TT selling margin 0.12%; bill buying margin 0.15%.

**P1 (concept, MCQ).** Forward premium or discount on a currency equals the interest-rate differential exactly
only when:
(a) the rupee is expected to depreciate (b) **the currencies are freely convertible** (c) volatility is high
(d) the forward is for more than one year
Answer (b): with free capital movement, covered interest parity holds; otherwise demand and supply of forward cover
also move the premium. (a) and (c) are the "forecast" and "volatility" traps.

**P2 (value date, no options).** Deal on Thursday 12 Nov 2026 for one-month forward delivery. Wednesday 16 Dec 2026
is a holiday declared on 1 Dec. Delivery date?
Answer **Tuesday 15 Dec 2026**: spot is Mon 16 Nov (Fri day 1, Mon day 2); one month from spot is Wed 16 Dec; a
holiday known 3+ working days ahead moves delivery to the preceding working day. (Thu 17 Dec is the sudden-holiday
rule; Sat 12 Dec counts from the deal date.)

**P3 (points, MCQ).** Using the common quote, the 3-month forward USD/INR is:
(a) 85.32 / 85.31 (b) **84.48 / 84.55** (c) 84.52 / 84.51 (d) 84.48 / 84.51
Answer (b): big then small, so subtract: `84.90 − 0.42 =` 84.48; `84.93 − 0.38 =` 84.55. (a) adds (bid above ask);
(c) subtracts crosswise.

**P4 (annualised premium, no options).** Spot USD/INR 84.90; 3-month forward 85.35. Annualised forward premium, to
2 decimals?
Answer **2.12%**: `85.35 − 84.90 =` 0.45; `÷ 84.90 × 4 × 100 =` 2.120141. (0.53% forgets to annualise; 6.36% uses
× 12 instead of × 12/3; 2.11% divides by the forward.)

**P5 (premium % a year → rupee cost, MCQ).** An importer owes USD 40,000 in 3 months. Spot 84.90; the 3-month forward
premium is 2.2% a year (months basis). Rupee cost at the forward rate, before margin?
(a) ₹34,70,712.00 (b) ₹33,77,324.00 (c) **₹34,14,680.00** (d) ₹33,96,000.00
Answer (c): `2.2 ÷ 12 × 3 =` 0.55%; `84.90 × 1.0055 =` 85.36695 → 85.3670; `85.367 × 40000 =` 34,14,680. (a) uses the full
2.2%; (b) subtracts the premium; (d) is spot with no premium.

**P6 (interest parity, no options).** Spot USD/INR 84.90. Rupee interest 6.8%, dollar interest 4.4% a year.
6-month forward, 4 decimals?
Answer **85.8969**: `84.90 × 1.034 ÷ 1.022 =` 85.896869. (85.9188 is the shortcut spot × (1 + 2.4% × ½);
83.9147 inverts the rates; 86.8517 uses full-year rates.)

**P7 (option period, sale at a discount, MCQ).** Using the common quote, the bank sells USD to an
importer, delivery at his option during the second month. Rate?
(a) 84.7816 (b) **84.9118** (c) 84.8417 (d) 85.1521
Answer (b): sale + discount → the first date of the window (end of month 1): `84.93 − 0.12 =` 84.81;
`× 1.0012 =` 84.911772. (a) uses the last date, the customer's favour; (c) uses the bid; (d) adds the discount.

**P8 (usance bill at a discount, no options).** Exporter's bill USD 15,000 at 45 days sight; normal transit period
25 days. The bank buys it today. Using the common quote, rupees paid before interest?
Answer **₹12,65,299.50**: 45 + 25 = 70 days = 2 months 10 days; discount, bank buying → round **up** to 3 months:
`84.90 − 0.42 =` 84.48; `× 0.9985 =` 84.35328 → 84.3533; `84.3533 × 15000 =` 12,65,299.50. (Rounding down to 2 months gives
84.4631 and ₹12,66,946.50; no margin gives ₹12,67,200.00.)

**Homework answer (N066).** Spot 85.60 / 85.62, one-month discount points 0.24 / 0.20; bank sells, delivery in the
second month. Sale + discount → the **first** date (end of month 1): `85.62 − 0.20 =` **85.42**; with the TT selling
margin 0.12%: `85.42 × 1.0012 =` **85.5225**.
