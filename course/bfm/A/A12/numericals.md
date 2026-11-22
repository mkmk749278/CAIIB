# A12 · Numericals (c1, 2026-11-22)

All rates, interest rates and dates illustrative. Checked by `python3 tools/check/export_bills.py` (two ways: Decimal,
and 12-digit calculator key presses; dates by calendar); all OK. Basic 8-function calculator only. Interest on a
365-day year. Keys `A × r % =` give r per cent of A; then `× days ÷ 365 =`.

## The case (chapters 1–3)
Our Tiruppur exporter ships a second lot to Hamburg. Bill **USD 100,000, payable 60 days after sight**, not under an
LC, **discounted on Mon 1 Mar 2027**. Bill buying rate for this bill ₹85.80 (illustrative; built as in A05). Export
credit interest 7.3 % a year; overdue interest 10.95 % a year (both illustrative, the bank's Board policy). Her bank's
published policy: crystallise on the **30th day after the due date**. TT selling on that day ₹86.40; TT buying when the
money finally comes ₹85.95 (illustrative).

### Q1 · Rupee value (N013–N017)
Usance bill → discounted at the **bill buying rate** [F2]. `100000 × 85.8 =` → **₹85,80,000**.

### Q2 · Interest up front, and her credit (N021–N025c)
Notional due date = NTP 25 + usance 60 = **85 days** [F4]. Interest is taken up front [F3].
`8580000 × 7.3 % =` 626340 · `× 85 =` 53238900 · `÷ 365 =` → **₹1,45,860**.
Credit: `8580000 − 145860 =` → **₹84,34,140** (first used to repay any packing credit, A11b).

### Q3 · Which days (N034–N040)
1 Mar 2027 + 85 days = **Tue 25 May 2027** (notional due date). Not paid → overdue from then [F6].
Her bank's policy: 30th day after → **Thu 24 Jun 2027** = crystallisation day [F9].

### Q4 · Crystallisation (N041–N046)
TT selling [F10]: `100000 × 86.4 =` → **₹86,40,000** (her rupee liability). Exchange difference ₹60,000 (her loss).
Overdue interest, 25 May → 24 Jun = 30 days, on the advance [F11]:
`8580000 × 10.95 % =` 939510 · `× 30 =` 28185300 · `÷ 365 =` → **₹77,220**.
Recovered on crystallisation day: `8640000 + 77220 =` → ₹87,17,220.

### Q5 · Money comes later (N048–N051)
Hamburg pays on Wed 14 Jul 2027, 20 days after crystallisation. TT buying [F13]: `100000 × 85.95 =` → ₹85,95,000.
Interest on the crystallised ₹86,40,000 for 20 days [F11]: `8640000 × 10.95 % =` 946080 · `× 20 =` 18921600 ·
`÷ 365 =` → ₹51,840.
She still pays: `8640000 − 8595000 =` 45000 · `+ 51840 =` → **₹96,840**.

## Faded variant (N026–N027): sight bill
USD 50,000 sight bill, not under LC, purchased at bill buying ₹85.50; NTP 25 days at 7.3 %.
`50000 × 85.5 =` ₹42,75,000 · `4275000 × 7.3 % =` 312075 · `× 25 =` · `÷ 365 =` → ₹21,375 · credit
`4275000 − 21375 =` → **₹42,53,625**.

## Early payment (N029–N030)
Hamburg pays the usance bill 10 days early: refund `8580000 × 7.3 % =` · `× 10 =` · `÷ 365 =` → **₹17,160**, plus or
minus the notional swap cost [F8] (swap cost not computed).
