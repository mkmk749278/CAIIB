# A15 · Numericals (c1, 2026-11-22)

All amounts, countries (Z, Y, X) and bank figures illustrative. Checked by `python3 tools/check/country_risk.py`
(two ways: Decimal, and 12-digit calculator key presses); all OK. Basic 8-function calculator only. Percentages of
cover are ECGC's published product terms (SCR 90 %, SSP 80 %) [F20, F28, F31]; provision rates and the 1 % threshold
are RBI's (IRP para 113) [F13]. A claim's real amount also depends on the policy's loss computation and recoveries
(A15b); here the "loss" is given.

## Warm-up · A14 homework (N002–N003)
Third note USD 200,000, 540 days, 6.4 % a year, 360-day year: `200000 × 6.4 % = × 540 = ÷ 360 =` → discount
**USD 19,200**; `200000 − 19200 =` → received **USD 180,800**.

## Q1 · What ECGC pays (N062–N063)
The Tiruppur exporter's D/A bill of **USD 80,000** to a buyer in Country Z is not paid because Country Z blocks
payments abroad (political risk: transfer). She holds ECGC's **SCR (Standard Policy)**, cover **90 %**; loss
taken as USD 80,000.
- ECGC pays: `80000 × 90 % =` → **USD 72,000**
- She bears: `80000 − 72000 =` → **USD 8,000**

## Q2 · A bank's country-risk provision (N042–N045)
Bank's total assets **₹2,00,000 crore**. Net funded exposure to Country Y (ECGC grade **B2**, provision **20 %**):
**₹3,000 crore**, of which **₹1,000 crore** has contractual maturity under 180 days.
- Threshold: `3000 ÷ 200000 × 100 =` → **1.5 %** ≥ 1 % → provision needed.
- Long-term part: `2000 × 20 % =` → **₹400 crore**
- Short-term part (bank may hold 25 % of the requirement): `1000 × 20 % = × 25 % =` → **₹50 crore**
- Total: `400 + 50 =` → **₹450 crore**

## V · Your turn (N046–N047)
Same bank; Country X (grade **C1**, 25 %), net funded **₹1,500 crore**, all long-term.
- `1500 ÷ 200000 × 100 =` → **0.75 %** < 1 % → **no country-risk provision** under para 113.
- Trap: `1500 × 25 % =` → ₹375 crore ✗ (forgets the threshold).

## Close · N075
Net funded exposure to a **D** country of 2 % of total assets (e.g. ₹4,000 crore of ₹2,00,000 crore): provision
**100 %** (₹4,000 crore).

## Homework (N082)
Loss **USD 50,000** under the **Specific Shipment Policy** (80 %): `50000 × 80 % =` → ECGC pays **USD 40,000**; the
exporter bears **USD 10,000**.
