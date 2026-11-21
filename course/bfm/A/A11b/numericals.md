# A11b · Numericals (= fact sheet N1, N2; checked two ways by `tools/check/export_credit.py`)

Illustrative figures. Homework (N066): FOB = 3,00,000 − 20,000 = USD 2,80,000 × 88 = ₹2,46,40,000; domestic cost ₹2,40,00,000 is lower; × 90% = **₹2,16,00,000**.

### N1 · Packing credit limit and drawing power
An exporter has an order for 40,000 shirts, **CIF USD 2,80,000**. Freight is USD 14,000 and insurance USD 2,800.
The bank sizes packing credit at the **lower of FOB value and domestic cost of production**, converts at **₹88.00** (its
notional rate for the limit) and keeps a **10% margin**. Domestic cost of production is **₹2,20,00,000**. The sanctioned
PC limit is ₹2,10,00,000 and ₹1,20,00,000 is already drawn. How much more can the exporter draw?

**Method 1 (lower first, then margin)**
1. FOB = 2,80,000 − 14,000 − 2,800 = **USD 2,63,200**. Keys: `280000 − 14000 − 2800 =` → 263200.
2. FOB in rupees = 2,63,200 × 88 = **₹2,31,61,600**. Keys: `× 88 =` → 23161600.
3. Lower of ₹2,31,61,600 and ₹2,20,00,000 = **₹2,20,00,000** (domestic cost).
4. Less 10% margin = 2,20,00,000 × 90% = **₹1,98,00,000**. Keys: `22000000 × 90 %` → 19800000.
5. Drawing power = lower of ₹1,98,00,000 and the limit ₹2,10,00,000 = **₹1,98,00,000**.
6. Available = 1,98,00,000 − 1,20,00,000 = **₹78,00,000**. Keys: `19800000 − 12000000 =` → 7800000.

**Method 2 (margin on both, then lower)**: 2,31,61,600 × 90% = 2,08,45,440 (`23161600 × 90 %`); 2,20,00,000 × 90% =
1,98,00,000; lower = **₹1,98,00,000**; below the ₹2,10,00,000 limit; less 1,20,00,000 = **₹78,00,000**. Same answer
(a common % applied to both cannot change which is lower).

**Trap check**: CIF instead of FOB gives 2,80,000 × 88 = ₹2,46,40,000, still not the lower here, but if domestic cost
were ₹2,40,00,000 the CIF-user would pick ₹2,40,00,000 (wrong) against the correct FOB ₹2,31,61,600. Label in the
lesson: "the lower-of rule is the bank's sizing norm; RBI only says no export credit beyond the export value except
listed agro cases" (row 9).

### N2 · Liquidating packing credit, and what if the export never happens
Packing credit **₹50,00,000** is drawn on **1 Mar 2027** at the bank's PC rate **8.50% p.a.** (simple interest for the
sum; the bank actually applies it at monthly rests, IRA para 6(7)). The exporter ships and submits documents on
**29 Jul 2027**; the bill for **USD 62,500** is purchased at **₹87.40** and the proceeds liquidate the PC with its
interest. (a) What is credited to the exporter's current account? (b) If instead the order is cancelled, nothing is
exported, and the exporter repays from its own funds on day 200, at the bank's domestic rate **11.00%**, how much more
interest does it pay than at the PC rate (before any penal charges)?

**(a) Method 1 (yearly interest, then days)**
1. Days 1 Mar → 29 Jul 2027 (count the 1st out, the 29th in) = 30 (Mar) + 30 (Apr) + 31 (May) + 30 (Jun) + 29 (Jul)
   = **150 days**. Within 360 days: export credit status kept (CF 235).
2. Interest = 50,00,000 × 8.5% × 150 ÷ 365. Keys: `5000000 × 8.5 %` → 425000; `× 150 ÷ 365 =` → 174657.53 →
   **₹1,74,658**.
3. Bill proceeds = 62,500 × 87.40 = **₹54,62,500**. Keys: `62500 × 87.4 =` → 5462500.
4. Credit to current account = 54,62,500 − 50,00,000 − 1,74,658 = **₹2,87,842**. Keys: `5462500 − 5000000 − 174658 =`
   → 287842.

**(a) Method 2 (interest per day)**: 50,00,000 × 8.5 ÷ 100 ÷ 365 = ₹1,164.3836 a day (`5000000 × 8.5 ÷ 100 ÷ 365 =`);
× 150 = ₹1,74,657.53 → ₹1,74,658; 54,62,500 − 51,74,658 = **₹2,87,842**. Same.

**(b) Method 1**: domestic interest 50,00,000 × 11% × 200 ÷ 365 = ₹3,01,369.86 (`5000000 × 11 %` → 550000;
`× 200 ÷ 365 =`); PC-rate interest 50,00,000 × 8.5% × 200 ÷ 365 = ₹2,32,876.71; extra = **₹68,493.15 ≈ ₹68,493**.
**(b) Method 2**: rate gap 11 − 8.5 = 2.5%; 50,00,000 × 2.5% × 200 ÷ 365 (`5000000 × 2.5 %` → 125000; `× 200 ÷ 365 =`)
= **₹68,493.15**. Same. Teaching line: "no export → domestic rate **from the date of advance**, plus penal charges as
per the bank's Board policy" (CF 293); "documents after day 360 → not export credit **ab initio**" (CF 235, 292).

