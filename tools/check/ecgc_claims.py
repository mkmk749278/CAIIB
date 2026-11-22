"""Check A15b sums two independent ways (Decimal formula vs basic-calculator keys).

Usage: python3 tools/check/ecgc_claims.py
Way 1: exact Decimal arithmetic. Way 2: the key presses shown in the lesson on an 8-function, 12-digit calculator,
rounded to 12 significant digits after every key. Both must agree to 2 decimals.
All figures illustrative. ECGC terms (fact sheet research/bfm/facts/A7.6-A8.1_A15b.md): IN-PC cover 66 2/3 %,
premium 12 paise per Rs 100 per month on the highest amount outstanding [F7]; IN-PS 75 % (policyholder) [F8];
SCR 90 %, SSP 80 % [A15 F20]; recoveries after a claim shared in the ratio the loss was borne, recovery costs
first [F41]; Report of Default within 4 months of due date or 1 month of recall, earlier [F34].
"""
from decimal import Decimal as D, ROUND_HALF_UP
from datetime import date
import sys

def c12(x): return float(f"{x:.12g}")
def q(x, p="0.01"): return D(str(x)).quantize(D(p), rounding=ROUND_HALF_UP)

def check(label, w1, w2, want=None, p="0.01"):
    a, b = q(w1, p), q(w2, p)
    ok = a == b and (want is None or a == D(want))
    print(f"{label:<60} way1 {a:>12}   way2 {b:>12}   {'OK' if ok else 'MISMATCH'}")
    if not ok: sys.exit(1)
    return a

def add_months(d, m):
    y, mo = divmod(d.month - 1 + m, 12)
    return date(d.year + y, mo + 1, d.day)

if __name__ == "__main__":
    # Warm-up · A15 homework: SSP 80 % of USD 50,000.
    p = check("Warm-up SSP 80% of 50,000", D(50000) * D("0.80"), c12(50000 * 80 / 100), "40000")
    check("Warm-up exporter bears", D(50000) - p, c12(50000 - 40000), "10000")

    # Q1 · IN-PC premium: Rs 50,00,000 highest outstanding x 12 paise per Rs 100 per month.
    check("Q1 premium 50,00,000 / 100 x 0.12", D(5000000) / 100 * D("0.12"), c12(c12(5000000 / 100) * 0.12), "6000")

    # Q2 · SCR recovery sharing: loss 80,000; ECGC paid 72,000 (90 %); USD 20,000 recovered, no costs.
    e = check("Q2 ECGC share of recovery 20,000 x 90%", D(20000) * D(72000) / D(80000), c12(20000 * 90 / 100), "18000")
    check("Q2 exporter keeps 20,000 - 18,000", D(20000) - e, c12(20000 - 18000), "2000")

    # V · Your turn: IN-PC loss Rs 30,00,000 x 66 2/3 %.
    check("V IN-PC 30,00,000 x 2/3", D(3000000) * 2 / 3, c12(c12(3000000 * 2) / 3), "2000000")
    check("V trap: 30,00,000 x 75% (IN-PS figure)", D(3000000) * D("0.75"), c12(3000000 * 75 / 100), "2250000")

    # Pause check N054a: due 1 Mar, recalled 10 Apr: report by the earlier of due + 4 months and recall + 1 month.
    due, recall = date(2027, 3, 1), date(2027, 4, 10)
    by = min(add_months(due, 4), add_months(recall, 1))
    ok = by == date(2027, 5, 10) and add_months(due, 4) == date(2027, 7, 1)
    print(f"{'N054a report of default by (earlier date)':<60} {by}   {'OK' if ok else 'MISMATCH'}")
    if not ok: sys.exit(1)

    # Practice: recovery with costs. Loss Rs 30,00,000 under IN-PC; ECGC paid 20,00,000. Recovered Rs 9,00,000,
    # costs Rs 60,000 first; balance 8,40,000 shared 2/3 : 1/3.
    net = check("P recovery net of costs 9,00,000 - 60,000", D(900000) - D(60000), c12(900000 - 60000), "840000")
    ec = check("P ECGC share 8,40,000 x 2/3", net * 2 / 3, c12(c12(840000 * 2) / 3), "560000")
    check("P bank keeps 8,40,000 - 5,60,000", net - ec, c12(840000 - 560000), "280000")

    # Practice: IN-PS policyholder 75 % of a Rs 40,00,000 loss.
    check("P IN-PS 75% of 40,00,000", D(4000000) * D("0.75"), c12(4000000 * 75 / 100), "3000000")

    # Homework · SCR 90 % paid on a USD 40,000 loss; USD 10,000 recovered: ECGC gets 9,000.
    check("Homework ECGC share 10,000 x 90%", D(10000) * D("0.90"), c12(10000 * 90 / 100), "9000")
    print("All OK")
