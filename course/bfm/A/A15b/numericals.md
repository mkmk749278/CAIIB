# A15b · Numericals (c3, 2026-11-22)

All amounts, dates and the bank are illustrative. Checked by `python3 tools/check/ecgc_claims.py` (two ways: Decimal,
and 12-digit calculator key presses); all OK. Basic 8-function calculator only. Cover percentages, premium rates and
time limits are **ECGC's published terms** [F7, F8, F34, F41; A15-F20], not RBI rules.

## Warm-up · A15 homework (N002–N003)
Loss **USD 50,000** under the Specific Shipment Policy (80 %): `50000 × 80 % =` → ECGC pays **USD 40,000**;
`50000 − 40000 =` → she bears **USD 10,000**.

## Q1 · The bank's premium on an individual packing credit cover (N024–N025)
IN-PC premium **12 paise per ₹100 per month** on the **highest amount outstanding** on any day of the month [F7].
Highest outstanding this month **₹50,00,000**.
- `5000000 ÷ 100 × 0.12 =` → **₹6,000** for the month.
- Why "÷ 100 × 0.12": 12 paise = ₹0.12 on every ₹100.

## Q2 · Sharing a recovery after the exporter's claim (N047–N048a)
SCR, 90 % cover. Loss **USD 80,000**; ECGC paid **USD 72,000** (A15). Later **USD 20,000** recovered, no recovery
costs. Recoveries are shared in the ratio in which the loss was borne (90 : 10), recovery costs first [F41].
- ECGC: `20000 × 90 % =` → **USD 18,000**
- Exporter: `20000 − 18000 =` → **USD 2,000**
- Trap: "ECGC paid, so it takes all USD 20,000" ✗.

## V · Your turn: the bank's claim under IN-PC (N049–N050a)
Packing credit loss **₹30,00,000**, cover **66⅔ %** [F7].
- `3000000 × 2 ÷ 3 =` → **₹20,00,000** (two-thirds; avoids typing 66.6666…).
- Trap: `3000000 × 75 % =` → ₹22,50,000 ✗ (75 % is IN-PS for a policyholder, Surety, EF).

## Pause check N054a · Report of Default date
Due date **1 March**; advance recalled **10 April**. Report within 4 months of the due date (**1 July**) or within
one month of recall (**10 May**), **whichever is earlier** [F34] → **10 May**. (Dates illustrative; the year does not
change the answer.)

## Practice 21 · Recovery with costs, bank side
IN-PC; loss ₹30,00,000; ECGC paid ₹20,00,000 (⅔). Later ₹9,00,000 recovered; recovery costs ₹60,000 (incurred with ECGC's consent).
- Costs first: `900000 − 60000 =` → ₹8,40,000
- ECGC: `840000 × 2 ÷ 3 =` → **₹5,60,000**; bank: `840000 − 560000 =` → **₹2,80,000**.

## Practice 22 · IN-PS for a policyholder exporter
Post-shipment loss ₹40,00,000; exporter holds a whole-turnover policy; buyer not an associate → 75 % [F8]:
`4000000 × 75 % =` → **₹30,00,000**.

## Homework (N083)
SCR paid 90 % of a USD 40,000 loss (USD 36,000). USD 10,000 recovered: `10000 × 90 % =` → ECGC gets **USD 9,000**;
she keeps USD 1,000.
