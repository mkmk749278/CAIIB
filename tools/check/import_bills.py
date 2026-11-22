"""Check A13 import-bill sums two ways (Decimal vs 12-digit basic-calculator key presses).

Usage: python3 tools/check/import_bills.py
"""
from decimal import Decimal as D, ROUND_HALF_UP
import sys

def c12(x): return float(f"{x:.12g}")
def q2(x): return D(str(x)).quantize(D("0.01"), rounding=ROUND_HALF_UP)

def check(label, w1, w2, want):
    a, b = q2(w1), q2(w2)
    ok = a == b == D(want)
    print(f"{label:<44} way1 {a:>13}   way2 {b:>13}   {'OK' if ok else 'MISMATCH'}")
    if not ok: sys.exit(1)

if __name__ == "__main__":
    check("S1 retire 80,000 at bill selling 86.25", D(80000) * D("86.25"), c12(80000 * 86.25), "6900000.00")
    check("S2 retire 80,000 at forward 85.90", D(80000) * D("85.90"), c12(80000 * 85.9), "6872000.00")
    check("S2 saving", D(6900000) - D(6872000), c12(6900000 - 6872000), "28000.00")
    check("S3 close: 50,000 at 86.00", D(50000) * D(86), c12(50000 * 86), "4300000.00")
    check("P: 120,000 at bill selling 85.75", D(120000) * D("85.75"), c12(120000 * 85.75), "10290000.00")
    print("all OK")
