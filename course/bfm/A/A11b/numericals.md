# A11b · Numericals (c2, 2026-11-22)

All figures illustrative. Checked by `python3 tools/check/export_pcl.py` (two ways: Decimal, and 12-digit calculator
key presses); all OK. Basic 8-function calculator only. Ninety lakh = 90,00,000 = `9000000` (7 digits).

## S1 · Packing credit limit (N020–N024)
**Data**: order CIF USD 125,000; freight and insurance USD 5,000; rate ₹85.00 (illustrative); domestic cost
₹90,00,000; margin 10 %. Bank practice and exam method: lower of FOB value and domestic cost, less margin (not an RBI
formula; RBI requires need-based limits, CF 389).
1. FOB = CIF − freight and insurance: `125000 − 5000 =` → USD 120,000.
2. FOB in rupees: `120000 × 85 =` → ₹1,02,00,000.
3. Lower of ₹1,02,00,000 and ₹90,00,000 → ₹90,00,000.
4. Margin: `9000000 × 10 % =` → ₹9,00,000; `9000000 − 900000 =` → **₹81,00,000**.

## S1b · Drawdown (N025a–N025c)
Limit ₹81,00,000; drawals ₹35,00,000 (yarn) and ₹28,00,000 (stitching); request ₹25,00,000.
`8100000 − 3500000 − 2800000 =` → **₹18,00,000 available** (the margin is already inside the limit; not deducted again).

## Twist (N027–N028)
FOB value ₹80 lakh, cost ₹95 lakh → lower ₹80 lakh → `8000000 × 10 % =` 800000; `8000000 − 800000 =` → **₹72,00,000**.

## S2 · Packing credit repaid from the export bill (N047–N049)
**Data**: she invoices CIF, so the bill is USD 125,000, purchased at bill buying ₹84.80 (illustrative); PC
₹81,00,000 + interest ₹1,35,000 (given; interest for days is taught in A12). Transit-period interest left to A12.
1. Proceeds: `125000 × 84.8 =` → ₹1,06,00,000.
2. Owed: `8100000 + 135000 =` → ₹82,35,000.
3. To her account: `10600000 − 8235000 =` → **₹23,65,000**.

## S2b · Part shipment (N049a–N049b)
Half the order shipped: bill USD 62,500 × ₹84.80 → `62500 × 84.8 =` ₹53,00,000. PC left: `8100000 − 5300000 =` →
**₹28,00,000** stays as packing credit (interest aside), to be liquidated by the next shipment within 360 days.

## 360-day date (N032a)
Released 15 Jan 2027 + 360 days = **10 Jan 2028** (Python `date(2027,1,15)+timedelta(360)`).
