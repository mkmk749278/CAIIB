"""Check A16b sums two independent ways (Decimal formula vs basic-calculator keys).

Usage: python3 tools/check/lrs_capital.py
Rules (fact sheet research/bfm/facts/A2.2-A2.7-A2.9_A16b.md): cash for travel forex only below Rs 50,000 per journey
(single or several drawals for one journey) [F52]; LRS USD 250,000 per FY shared by current and capital uses, money
back does not restore it [F13, A16 F21]; resident may retain notes + TCs up to USD 2,000, surrender the rest within
180 days of return [F54, F55]. All figures illustrative.
"""
from datetime import date, timedelta
from decimal import Decimal as D
import sys

def c12(x): return float(f"{x:.12g}")

def check(label, w1, w2, want=None):
    n = lambda x: x if isinstance(x, str) and "-" in x else D(str(x))
    ok = n(w1) == n(w2) and (want is None or n(w1) == n(want))
    print(f"{label:<62} way1 {w1!s:>12}   way2 {w2!s:>12}   {'OK' if ok else 'MISMATCH'}")
    if not ok: sys.exit(1)

if __name__ == "__main__":
    LIMIT, CASH = D(250000), D(50000)
    a = D(590) * D("84.60"); check("Q1 USD 590 @ 84.60 (keys 590 x 84.6 =)", a, D(str(c12(590 * 84.6))), "49914.00")
    print("   cash allowed (below 50,000):", a < CASH)
    assert a < CASH
    b = D(890) * D("84.60"); check("V  journey USD 590 + 300 = 890 @ 84.60", b, D(str(c12((590 + 300) * 84.6))), "75294.00")
    print("   second buy in cash allowed:", b < CASH); assert not b < CASH
    check("V  trap card: 49,914 + 300 x 84.60", a + D(300) * D("84.60"), D(str(c12(49914 + 300 * 84.6))), "75294.00")
    check("Q2 notes back 2,600, keep 2,000 -> surrender", D(2600) - D(2000), c12(2600 - 2000), 600)
    check("F64 return 10 Jun 2026 + 180 days", (date(2026, 6, 10) + timedelta(days=180)).isoformat(), "2026-12-07", "2026-12-07")
    used = D(60000) + D(40000) + D(50000)
    check("HW used: fees 60,000 + ODI 40,000 + loan 50,000", used, D(str(c12(60000 + 40000 + 50000))), 150000)
    check("HW headroom 250,000 - 150,000", LIMIT - used, D(str(c12(250000 - 150000))), 100000)
    check("F61 loan Rs 42,50,000 / 85 = USD", D(4250000) / D(85), D(str(c12(4250000 / 85))), 50000)
    check("HW fees refund USD 10,000 back: headroom unchanged", LIMIT - used, D(str(c12(250000 - 150000))), 100000)
    check("N057 two banks: 250,000 - 200,000", LIMIT - D(200000), D(str(c12(250000 - 200000))), 50000)
    print("All OK")
