# A13 · Numericals (c1, 2026-11-22)

All rates, interest rates, amounts and dates illustrative. Checked by `python3 tools/check/import_bills.py` (two
ways: Decimal, and 12-digit calculator key presses; dates by calendar); all OK. Basic 8-function calculator only.
Interest on a 365-day year. Rates to 4 decimals (the A03 method: bill selling = TT selling × (1 + bill margin), margin
on margin, never the two margins added).

## The case
A hospital in Madurai imports spare coils for its MRI machine under its own **sight LC**: bill **USD 50,000**.
Interbank USD/INR **85.80 / 85.82**; TT selling margin **0.12 %** on the ask; bill selling a further **0.15 %** on TT
selling. Commercial (domestic advance) rate **10.95 %** a year (bank's policy). The bank's stated policy: an unpaid
import bill under LC is crystallised on the **10th day after the documents arrive**.

### Q1 · Retirement, no forward cover (N025–N032)
The bank sells dollars against documents → **bill selling** [F21].
`85.82 × 1.0012 =` 85.922984 · `× 1.0015 =` 86.0518684… → **₹86.0519**.
Rupees: `50000 × 86.0519 =` → **₹43,02,595**.
Trap: `85.82 × 1.0027 =` 86.051714 → 86.0517 (the two margins added; wrong method).
With a forward contract at ₹86.25: `50000 × 86.25 =` → **₹43,12,500** (the contract rate is used whether it turns
out better or worse than the day's rate) [F21].

### V · Your turn (N033–N034)
USD 20,000; interbank 85.90 / 85.92; same margins. `85.92 × 1.0012 = × 1.0015 =` → **₹86.1521**;
`20000 × 86.1521 =` → **₹17,23,042**.

### Q2 · Not retired: crystallisation (N035–N041)
Documents arrive **Mon 5 Apr 2027**; policy: 10th day → **Thu 15 Apr 2027** [F22]. Rate: **the same as retirement**
(no flip) [F21]: bill selling, unchanged that day, ₹86.0519 → rupee debt **₹43,02,595**.
Interest at the commercial rate [F22], 20 days to **Wed 5 May 2027**:
`4302595 × 10.95 % =` 471134.1525 · `× 20 =` 9422683.05 · `÷ 365 =` → **₹25,815.57**.
Total: `4302595 + 25815.57 =` → **₹43,28,410.57**.
(Shortcut: 10.95 % ÷ 365 = 0.03 % a day; `4302595 × 0.03 % × 20 =` gives the same.)

### Q3 · Trade credit all-in-cost ceiling (N054–N056)
FCY buyers' credit; benchmark (6-month ARR for the currency) **4.20 %**: ceiling `4.2 + 3 =` → **7.20 %** a year [F19].
INR trade credit; G-sec yield of matching maturity **6.60 %**: ceiling `6.6 + 2.5 =` → **9.10 %**.

### Homework (N079)
Bill selling ₹86.20 on crystallisation day: `50000 × 86.2 =` → **₹43,10,000**; interest 20 days
`4310000 × 10.95 % = × 20 = ÷ 365 =` → **₹25,860**.
