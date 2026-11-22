"""Check A16 sums two independent ways (Decimal formula vs basic-calculator keys).

Usage: python3 tools/check/lrs_tcs.py
TCS under the Income-tax Act 2025, s. 394(1) Table Sl. No. 7 as amended by the Finance Act 2026 (from 1 Apr 2026):
LRS remittances above Rs 10 lakh in the year: education or medical 2 %, other purposes 20 %; education funded by a
loan from a financial institution: nil (s. 394(4)(b)). Tax computed on the part above Rs 10 lakh (fact sheet
research/bfm/facts/A2.1-A2.6_A16.md row 47; re-check at the freeze). Overseas tour package: 2 %, no threshold.
All figures illustrative.
"""
from decimal import Decimal as D, ROUND_HALF_UP
import sys

TH = D(1000000)
RATE = {"edu": D("0.02"), "med": D("0.02"), "other": D("0.20"), "loan_edu": D(0)}

def c12(x): return float(f"{x:.12g}")
def q(x): return D(str(x)).quantize(D("0.01"), rounding=ROUND_HALF_UP)

def check(label, w1, w2, want=None):
    a, b = q(w1), q(w2)
    ok = a == b and (want is None or a == D(want))
    print(f"{label:<60} way1 {a:>12}   way2 {b:>12}   {'OK' if ok else 'MISMATCH'}")
    if not ok: sys.exit(1)
    return a

def tcs_year(rems):
    """rems: list of (amount, purpose) in date order; loan-funded education skips TCS (counted in the aggregate)."""
    total, tax = D(0), D(0)
    for amt, p in rems:
        amt = D(amt)
        above = max(D(0), total + amt - max(TH, total))
        tax += above * RATE[p]
        total += amt
    return tax

if __name__ == "__main__":
    check("Warm-up ECGC share of 10,000 recovery x 90%", D(10000) * D("0.9"), c12(10000 * 90 / 100), "9000")
    check("Q1 Rs 6+3+1 lakh = 10 lakh: not above 10 lakh -> nil",
          tcs_year([(600000, "edu"), (300000, "other"), (100000, "other")]), 0.0, "0")
    check("Q2 Rs 15 lakh fees, own funds: (15-10) lakh x 2%", tcs_year([(1500000, "edu")]),
          c12(c12(1500000 - 1000000) * 2 / 100), "10000")
    check("V Rs 15 lakh gift: (15-10) lakh x 20%", tcs_year([(1500000, "other")]),
          c12(c12(1500000 - 1000000) * 20 / 100), "100000")
    check("V trap: 15 lakh x 20% (threshold ignored)", D(1500000) * D("0.2"), c12(1500000 * 20 / 100), "300000")
    check("Close: Rs 15 lakh medical: (15-10) lakh x 2%", tcs_year([(1500000, "med")]),
          c12(c12(1500000 - 1000000) * 2 / 100), "10000")
    check("Loan-funded fees Rs 15 lakh: nil", tcs_year([(1500000, "loan_edu")]), 0.0, "0")
    check("Homework May 6 fees, Aug 8 gift: (14-10) lakh x 20%", tcs_year([(600000, "edu"), (800000, "other")]),
          c12(c12(600000 + 800000 - 1000000) * 20 / 100), "80000")
    check("P: + Jan Rs 5 lakh fees, all above: 5 lakh x 2%",
          tcs_year([(600000, "edu"), (800000, "other"), (500000, "edu")]) - D(80000), c12(500000 * 2 / 100), "10000")
    check("P: year total 80,000 + 10,000", tcs_year([(600000, "edu"), (800000, "other"), (500000, "edu")]),
          c12(80000 + 10000), "90000")
    check("P: tour package Rs 3 lakh x 2%", D(300000) * D("0.02"), c12(300000 * 2 / 100), "6000")
    check("P: tour package no PAN: max(2x2%, 5%) = 5%", D(300000) * max(2 * D("0.02"), D("0.05")),
          c12(300000 * 5 / 100), "15000")
    check("P33 FY 2024-25: (12-7) lakh x 5%", (D(1200000) - D(700000)) * D("0.05"),
          c12(c12(1200000 - 700000) * 5 / 100), "25000")
    check("P34 Apr 4 gift, Jul 5 fees, Oct 3 medical, Jan 2 travel",
          tcs_year([(400000, "other"), (500000, "edu"), (300000, "med"), (200000, "other")]),
          c12(c12(200000 * 2 / 100) + c12(200000 * 20 / 100)), "44000")
    print("All OK")
