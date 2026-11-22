# A14 · Numericals (c2, 2026-11-22)

All amounts, rates, fees and shares illustrative. Checked by `python3 tools/check/export_factoring.py` (two ways:
Decimal, and 12-digit calculator key presses); all OK. Basic 8-function calculator only. **Dollar interest and
discount on a 360-day year**: the usual US-dollar money-market convention, stated in each sum (A13's rupee interest
used 365). The factor's advance share, the fees and the commitment-fee rate are commercial terms of the case, not RBI
rules [F9, F14, F15].

## Q1 · Factoring (N020–N022)
The Tiruppur exporter assigns invoices of **USD 60,000** (about twenty buyers, 90 days, open account) to a factor.
The factor advances **80 %** at once; service fee **0.5 %** of invoice value; interest **7 % a year** on the advance
for **90 days**; the balance is paid when the buyers pay.
- Advance: `60000 × 80 % =` → **USD 48,000**
- Fee: `60000 × 0.5 % =` → **USD 300**
- Interest: `48000 × 7 % = × 90 = ÷ 360 =` → **USD 840**
- Balance on collection: `60000 − 48000 − 300 − 840 =` → **USD 10,860**
- Total to the exporter: 48,000 + 10,860 = **USD 58,860**; cost 300 + 840 = **USD 1,140**.

## Q2 · Forfaiting (N034–N035)
The Coimbatore maker sells a machine for **USD 2,000,000**, paid in **ten half-yearly notes of USD 200,000**, each
avalised by the buyer's bank in Nairobi. A forfaiter buys them without recourse at a fixed **6.4 % a year**.
First note, due in **180 days**:
- Discount: `200000 × 6.4 % = × 180 = ÷ 360 =` → **USD 6,400**
- Received now: `200000 − 6400 =` → **USD 193,600**

## V · Your turn (N036–N037)
Second note, due in **360 days**: `200000 × 6.4 % = × 360 = ÷ 360 =` (or just `200000 × 6.4 % =`) → discount
**USD 12,800**; received **USD 187,200**.

## Homework (N082)
Third note, due in **540 days**: `200000 × 6.4 % = × 540 = ÷ 360 =` → discount **USD 19,200**; received
**USD 180,800**.

## Practice only · commitment fee
Commitment fee **0.75 % a year** on the committed **USD 2,000,000** for the **60 days** from commitment to the
purchase of the notes: `2000000 × 0.75 % = × 60 = ÷ 360 =` → **USD 2,500**, payable even if the deal is cancelled
(usual market practice) [F15].

## Warm-up · A13 homework (N002–N003)
`50000 × 86.2 =` → **₹43,10,000**; interest `4310000 × 10.95 % = × 30 = ÷ 365 =` → **₹38,790**; total
**₹43,48,790**.
