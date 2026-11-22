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
    # S1b drawdown (N025a–c): limit 81 lakh, drawn 35 + 28 lakh, request 25 lakh → available
    check("S1b available after drawals", D(8100000) - D(3500000) - D(2800000), calc12(calc12(8100000 - 3500000) - 2800000))
    # pause twist (N027): FOB value 80 lakh, cost 95 lakh, margin 10%
    check("Twist PC limit (FOB 80L, cost 95L)", min(D(8000000), D(9500000)) * D("0.9"),
          calc12(8000000 - calc12(8000000 * 10 / 100)))
    # S2 (N047–N049): CIF bill 125,000 at 84.80; PC 81,00,000 + interest 1,35,000
    proceeds = check("S2 bill proceeds", D(125000) * D("84.80"), calc12(125000 * 84.8))
    owed = check("S2 PC + interest", D(8100000) + D(135000), calc12(8100000 + 135000))
    check("S2 credited to exporter", proceeds - owed, calc12(calc12(125000 * 84.8) - calc12(8100000 + 135000)))
    # S2b part shipment (N049a–b): bill 62,500 at 84.80 against PC 81 lakh (interest aside)
    half = check("S2b half-bill proceeds", D(62500) * D("84.80"), calc12(62500 * 84.8))
    check("S2b PC left outstanding", D(8100000) - half, calc12(8100000 - calc12(62500 * 84.8)))
    # Close Q1 / FOB idea (practice P1): CIF 80,000 − 4,000, × 85, cost 70 lakh, margin 10%
    check("P1 PC limit", pcl_way1(80000, 4000, 85, 7000000, 10), pcl_way2(80000, 4000, 85, 7000000, 10))
    # P9 drawdown: limit 45 lakh; drawn 20 + 12 lakh; request 15 lakh
    check("P9 available", D(4500000) - D(2000000) - D(1200000), calc12(calc12(4500000 - 2000000) - 1200000))
    # P10 part shipment: PC 40 lakh; bill USD 25,000 at 84.00
    check("P10 PC left", D(4000000) - D(25000) * D(84), calc12(4000000 - calc12(25000 * 84)))
    check("Close FOB USD (N068 old item; kept for P1 style)", D(200000) - D(10000), calc12(200000 - 10000))
    print("all OK")
