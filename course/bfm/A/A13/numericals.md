# A13 · Numericals (c1, 2026-11-22)

Illustrative rates. Checked by `python3 tools/check/import_bills.py` (Decimal and 12-digit calculator); all OK.
Rule: retire at the forward contract rate if booked, else the prevailing **bill selling** rate (FEDAI 3.1(a)).

| # | Data | Keys | Answer |
|---|---|---|---|
| S1 (N027–N028) | spares bill USD 80,000, bill selling ₹86.25 | `80000 × 86.25 =` | **₹69,00,000** |
| S2 (N029–N030) | same bill, forward contract ₹85.90 | `80000 × 85.9 =`; `6900000 − 6872000 =` | **₹68,72,000**; saving ₹28,000 |
| S3 (N065–N066) | USD 50,000 at bill selling ₹86.00 | `50000 × 86 =` | **₹43,00,000** |
| P5 | USD 120,000 at bill selling ₹85.75 | `120000 × 85.75 =` | **₹1,02,90,000** |
