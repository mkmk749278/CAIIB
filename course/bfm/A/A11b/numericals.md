# A11b · Numericals (c1, 2026-11-22)

All figures illustrative. Checked by `python3 tools/check/export_pcl.py` (two ways: Decimal, and 12-digit calculator
key presses); all OK. Basic 8-function calculator only.

## S1 · Packing credit limit (N020–N024)
**Data**: order CIF USD 125,000; freight and insurance USD 5,000; rate ₹85.00 (illustrative); domestic cost
₹90,00,000; margin 10 %. Bank practice: lower of FOB value and domestic cost, less margin (not an RBI formula; RBI
requires need-based limits, CF 389).
1. FOB = CIF − freight and insurance: `125000 − 5000 =` → USD 120,000.
2. FOB in rupees: `120000 × 85 =` → ₹1,02,00,000.
3. Lower of ₹1,02,00,000 and ₹90,00,000 → ₹90,00,000.
4. Margin: `90000000 × 10 % =` → ₹9,00,000; `90000000 − 9000000 =` → **₹81,00,000**.

**Twist (N027)**: FOB value ₹90 lakh, cost ₹95 lakh → lower ₹90 lakh → less 10 % → **₹81,00,000**.

## S2 · Packing credit repaid from the export bill (N047–N049)
**Data**: bill USD 120,000 purchased at bill buying rate ₹84.80 (illustrative); PC ₹81,00,000 + interest ₹1,35,000
(illustrative). Transit-period interest left to A12.
1. Proceeds: `120000 × 84.8 =` → ₹1,01,76,000.
2. Owed: `8100000 + 135000 =` → ₹82,35,000.
3. To her account: `10176000 − 8235000 =` → **₹19,41,000**.

## Close Q1 (N068)
CIF USD 200,000 − freight and insurance 10,000 → **FOB USD 190,000**.
