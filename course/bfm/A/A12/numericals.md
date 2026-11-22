# A12 · Numericals (c2, 2026-11-22)

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
| C2 | interest upfront, 85 days | `4260000 × 9 %` → 383400 `× 85 =` 32589000 `÷ 365 =` | **₹89,284.93** |
| C2 | credited to Ravi | `4260000 − 89284.93 =` | **₹41,70,715.07** |
| C3 | crystallised at TT selling | `50000 × 86.1 =` | **₹43,05,000** (exchange loss vs advance ₹45,000) |
| C4 | overdue interest, 30 days on the advance | `4260000 × 11 %` → 468600 `× 30 =` 14058000 `÷ 365 =` | **₹38,515.07** |
| C4 | recovered on 27 May | `4305000 + 38515.07 =` | **₹43,43,515.07** |
| C5 | late proceeds at TT buying (Ravi paid the rupee debt on 27 May) | `50000 × 85.6 =` | **₹42,80,000** to Ravi |
| C2s | same bill as a **sight** bill: interest for NTP 25 days only | `4260000 × 9 % → 383400 × 25 = 9585000 ÷ 365 =` | **₹26,260.27**; credited ₹42,33,739.73 |
| trap | 60 days only (forgot the NTP) | `× 60 ÷ 365` | ₹63,024.66 ✗ |
| C2L | paid **Mon 10 May**, 13 days late, before crystallisation: no conversion, overdue interest only | `4260000 × 11 % → 468600 × 13 = 6091800 ÷ 365 =` | **₹16,689.86** |
| C6 | **dishonoured** with USD 200 foreign charges, at TT selling | `50200 × 86.1 =` | **₹43,22,220** + interest and rupee charges |
| C7 | **early** payment Fri 2 Apr, 25 days early: interest refunded | `4260000 × 9 % → 383400 × 25 = 9585000 ÷ 365 =` | **₹26,260.27** ± notional swap cost |
| net | Ravi's net: credited − paid + late proceeds | `4170715.07 − 4343515.07 + 4280000 =` | ₹41,07,200 |

## Faded variant V1, V2 (practice P1–P3; close Q2)
Bill USD 30,000, same terms; bill buying ₹84.90; 8 %; crystallised at TT selling ₹85.70; overdue 10 % for 30 days.
- **V1** Advance `30000 × 84.9 =` **₹25,47,000**; interest `2547000 × 8 % = 203760 × 85 = 17319600 ÷ 365 =` **₹47,450.96**;
  credited **₹24,99,549.04**.
- **V2** Crystallised `30000 × 85.7 =` **₹25,71,000**; overdue interest `2547000 × 10 % = 254700 × 30 = 7641000 ÷ 365 =`
  **₹20,934.25**.

## Practice extras
- **P9** sight bill USD 20,000 at ₹85.00, 9 %, 25 days: `1700000 × 9 % → 153000 × 25 = 3825000 ÷ 365 =` **₹10,479.45**.
- **P10** if the case says interest on the **crystallised amount**: `2571000 × 10 % → 257100 × 30 = 7713000 ÷ 365 =`
  **₹21,131.51** (read the base from the question).

Note on keys: on most 8-function calculators the % key completes the step (shown as "→"); do not press = after it.
