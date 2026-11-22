# A12 · Numericals (c1, 2026-11-22)

All figures illustrative. Checked by `python3 tools/check/export_discounting.py` (Decimal and 12-digit calculator key
presses; dates by `datetime`); all OK. **Case convention**: interest = rupee advance × annual rate × actual days ÷ 365;
the crystallisation day is the bank's published policy (here 30 days after the due date) [F4].

## The case: Ravi's bill
Bill USD 50,000, 60 days after sight, foreign-currency bill not under LC, discounted Mon 1 Feb 2027. Bill buying
₹85.20; interest 9 % p.a.; overdue interest 11 % p.a.; TT selling on crystallisation ₹86.10; TT buying on 16 Jun
₹85.60.

| # | Step | Keys | Answer |
|---|---|---|---|
| Dates | 60 + NTP 25 = 85 days → notional due date; +30 days (bank policy) → crystallisation | (calendar) | due **Tue 27 Apr 2027**; crystallised **Thu 27 May 2027**; paid Wed 16 Jun 2027 |
| C1 | advance at bill buying | `50000 × 85.2 =` | **₹42,60,000** |
| C2 | interest upfront, 85 days | `4260000 × 9 % =` 383400 `× 85 =` 32589000 `÷ 365 =` | **₹89,284.93** |
| C2 | credited to Ravi | `4260000 − 89284.93 =` | **₹41,70,715.07** |
| C3 | crystallised at TT selling | `50000 × 86.1 =` | **₹43,05,000** (exchange loss vs advance ₹45,000) |
| C4 | overdue interest, 30 days on the advance | `4260000 × 11 % =` 468600 `× 30 =` 14058000 `÷ 365 =` | **₹38,515.07** |
| C4 | recovered on 27 May | `4305000 + 38515.07 =` | **₹43,43,515.07** |
| C5 | late proceeds at TT buying | `50000 × 85.6 =` | **₹42,80,000** to Ravi |

## Faded variant (practice P1–P3; close Q2)
Bill USD 30,000, same terms; bill buying ₹84.90; 8 %; crystallised at TT selling ₹85.70; overdue 10 % for 30 days.
- Advance `30000 × 84.9 =` **₹25,47,000**; interest `2547000 × 8 % = 203760 × 85 = 17319600 ÷ 365 =` **₹47,450.96**;
  credited **₹24,99,549.04**.
- Crystallised `30000 × 85.7 =` **₹25,71,000**; overdue interest `2547000 × 10 % = 254700 × 30 = 7641000 ÷ 365 =`
  **₹20,934.25**.
