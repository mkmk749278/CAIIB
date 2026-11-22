"""Check A11b export-finance sums two independent ways (Decimal formula vs basic-calculator key presses).

Usage: python3 tools/check/export_pcl.py
Way 1: exact Decimal arithmetic. Way 2: the key presses on an 8-function, 12-digit calculator, rounded to 12
significant digits after every key. Both must agree to 2 decimals (rupees) or the script exits with an error.
"""
from decimal import Decimal as D, ROUND_HALF_UP
import sys

def calc12(x): return float(f"{x:.12g}")
def q2(x): return D(str(x)).quantize(D("0.01"), rounding=ROUND_HALF_UP)

def check(label, w1, w2):
    a, b = q2(w1), q2(w2)
    print(f"{label:<58} way1 {a:>15}   way2 {b:>15}   {'OK' if a == b else 'MISMATCH'}")
    if a != b: sys.exit(1)
    return a

def pcl_way1(cif, fi, rate, cost, margin):
    fob = D(cif) - D(fi)
    base = min(fob * D(rate), D(cost))
    return base * (1 - D(margin) / 100)

def pcl_way2(cif, fi, rate, cost, margin):
    fob = calc12(cif - fi)                 # cif − fi =
    fob_inr = calc12(fob * rate)           # × rate =
    base = min(fob_inr, cost)              # compare by eye
    m = calc12(base * margin / 100)        # base × margin % =
    return calc12(base - m)                # base − m =

if __name__ == "__main__":
    # S1 (N020–N024): CIF 125,000, freight+ins 5,000, rate 85, domestic cost 90 lakh, margin 10%
    check("S1 FOB USD", D(125000) - D(5000), calc12(125000 - 5000))
    check("S1 FOB in rupees", D(120000) * D(85), calc12(120000 * 85))
    check("S1 PC limit", pcl_way1(125000, 5000, 85, 9000000, 10), pcl_way2(125000, 5000, 85, 9000000, 10))
    # pause twist (N027): FOB value 90 lakh, cost 95 lakh, margin 10%
    check("Twist PC limit (FOB 90L, cost 95L)", min(D(9000000), D(9500000)) * D("0.9"),
          calc12(9000000 - calc12(9000000 * 10 / 100)))
    # S2 (N047–N049): bill 120,000 at 84.80; PC 81,00,000 + interest 1,35,000
    proceeds = check("S2 bill proceeds", D(120000) * D("84.80"), calc12(120000 * 84.8))
    owed = check("S2 PC + interest", D(8100000) + D(135000), calc12(8100000 + 135000))
    check("S2 credited to exporter", proceeds - owed, calc12(calc12(120000 * 84.8) - calc12(8100000 + 135000)))
    # Close Q1 (N068): CIF 200,000, freight+ins 10,000
    check("Close FOB USD", D(200000) - D(10000), calc12(200000 - 10000))
    print("all OK")
