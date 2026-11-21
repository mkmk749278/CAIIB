# A04 practice · DRAFT from the examiner review (c1, 2026-11-21)

Own questions; all quotes illustrative. Rates to 4 decimals (round half up); rupees to paise. Every key checked with
Python `Decimal` (review_c1_examiner.md). Basic 8-function calculator; key presses shown.

**P1 (define).** The rate between the rupee and the Australian dollar, worked out through the US dollar, is a:
(a) direct rate (b) **cross rate** (c) forward rate (d) chain rate
Answer (b): a rate fixed through a third currency is a cross rate.

**P2 (calculate, MCQ).** AUD/USD 0.6550 / 0.6556; USD/INR 85.30 / 85.33. AUD/INR bid?
(a) 55.8912 (b) 55.9423 (c) **55.8715** (d) 130.2290
Answer (c): USD on opposite sides, multiply bid × bid: `0.655 × 85.30 =` 55.8715. (a) is bid × ask (55.89115);
(b) is the ask; (d) divides.

**P3 (calculate, no options).** USD/JPY 150.10 / 150.25; USD/INR 85.30 / 85.33. JPY/INR per 100 yen, bid and ask,
to 4 decimals.
Answer **56.7720 / 56.8488**: USD the base in both, divide crossing the sides: `85.30 ÷ 150.25 × 100 =` 56.772047;
`85.33 ÷ 150.10 × 100 =` 56.848767. (Bid ÷ bid gives 56.8288, a trap; no ×100 gives 0.5677.)

**P4 (convert, MCQ).** USD/INR 85.30 / 85.33 (direct). The indirect quote, USD per ₹100, two-way, is:
(a) 1.1723 / 1.1719 (b) **1.1719 / 1.1723** (c) 0.8530 / 0.8533 (d) 1.1723 / 1.1727
Answer (b): flip and swap. Bid = `100 ÷ 85.33 =` 1.171921; ask = `100 ÷ 85.30 =` 1.172333. (a) forgets to swap,
so its bid is above its ask.

**P5 (chain rule, no options).** ? INR = 1 CHF, if 1 CHF = 1.135 USD; 1 USD = 149.80 JPY; 100 JPY = 56.95 INR. Then,
at that rate, how many CHF for ₹2,50,000?
Answer **₹96.8281 per CHF; CHF 2,581.90**: right side ÷ left side: `1.135 × 149.8 × 56.95 ÷ 100 =` 96.8280985;
`250000 ÷ 96.8281 =` 2581.8951. (Forgetting ÷100 gives 9,682.81.)

**P6 (apply to a deal, MCQ).** An importer pays EUR 25,000. Cross EUR/INR 92.8760 / 92.9405, before the bank's margin.
Rupees debited?
(a) ₹23,21,900.00 (b) **₹23,23,512.50** (c) ₹23,22,706.25 (d) ₹23,23,51,250.00
Answer (b): the bank sells euros, so the ask: `92.9405 × 25000 =` 2323512.5. (a) is the bid; (c) the mid-rate.

**P7 (same side on the right, no options).** EUR/USD 1.0920 / 1.0925; GBP/USD 1.2710 / 1.2718. EUR/GBP bid and ask,
to 4 decimals.
Answer **0.8586 / 0.8596**: USD is the quote in both, so divide crossing the sides: `1.092 ÷ 1.2718 =` 0.858626;
`1.0925 ÷ 1.271 =` 0.859559. (Bid ÷ bid gives 0.8592.)

**P8 (check, MCQ).** A learner's JPY/INR cross comes out bid 57.2709, ask 57.2193. What went wrong?
(a) He forgot ×100 (b) **He crossed the sides the wrong way round: bid used the yen bid** (c) He should have
multiplied (d) Nothing; yen quotes are reversed
Answer (b): the cross bid must be below the ask; for the bid divide the rupee bid by the yen **ask**.
