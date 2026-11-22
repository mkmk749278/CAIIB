"""Check A14 factoring and forfaiting sums two independent ways (Decimal formula vs basic-calculator keys).

Usage: python3 tools/check/export_factoring.py
Way 1: exact Decimal arithmetic. Way 2: the key presses shown in the lesson on an 8-function, 12-digit calculator,
rounded to 12 significant digits after every key. Both must agree to 2 decimals.
All figures illustrative. Dollar interest and discount on a 360-day year (the usual US-dollar money-market
convention; the case states it). The advance share, fees and rates are commercial terms of the case, not RBI rules.
"""
from decimal import Decimal as D, ROUND_HALF_UP
import sys

def c12(x): return float(f"{x:.12g}")
def q(x, p="0.01"): return D(str(x)).quantize(D(p), rounding=ROUND_HALF_UP)

def check(label, w1, w2, want=None, p="0.01"):
    a, b = q(w1, p), q(w2, p)
    ok = a == b and (want is None or a == D(want))
    print(f"{label:<58} way1 {a:>13}   way2 {b:>13}   {'OK' if ok else 'MISMATCH'}")
    if not ok: sys.exit(1)
    return a

def int_w1(p, rate, days, base=360): return D(p) * D(str(rate)) / 100 * D(days) / base
def int_w2(p, rate, days, base=360): return c12(c12(c12(p * rate / 100) * days) / base)   # p × rate % = × days ÷ 360 =

if __name__ == "__main__":
    # Q1 · Factoring (Tiruppur exporter): invoices assigned USD 60,000 on 90 days; factor advances 80 % at once;
    # service fee 0.5 % of invoice value; interest 7 % a year on the advance for 90 days; balance paid on collection.
    adv = check("Q1 advance 80% of 60,000", D(60000) * D("0.80"), c12(60000 * 80 / 100), "48000")
    fee = check("Q1 service fee 0.5% of 60,000", D(60000) * D("0.005"), c12(60000 * 0.5 / 100), "300")
    intr = check("Q1 interest 7% on 48,000 x 90/360", int_w1(48000, 7, 90), int_w2(48000, 7, 90), "840")
    bal = check("Q1 balance on collection 60,000-48,000-300-840", D(60000) - adv - fee - intr,
                c12(c12(c12(60000 - 48000) - 300) - 840), "10860")
    check("Q1 total to the exporter 48,000 + 10,860", adv + bal, c12(48000 + 10860), "58860")
    check("Q1 total cost 300 + 840", fee + intr, c12(300 + 840), "1140")

    # Q2 · Forfaiting (Coimbatore machine maker): machine USD 2,000,000 paid in 10 half-yearly avalised notes of
    # USD 200,000. First note due in 180 days; discount 6.4 % a year (fixed), 360-day year; without recourse.
    disc = check("Q2 discount 6.4% on 200,000 x 180/360", int_w1(200000, "6.4", 180), int_w2(200000, 6.4, 180), "6400")
    check("Q2 exporter receives on the first note", D(200000) - disc, c12(200000 - 6400), "193600")
    # V · Your turn: second note due in 360 days, same rate
    disc2 = check("V discount 6.4% on 200,000 x 360/360", int_w1(200000, "6.4", 360), int_w2(200000, 6.4, 360), "12800")
    check("V exporter receives on the second note", D(200000) - disc2, c12(200000 - 12800), "187200")
    # Homework (N082): third note due in 540 days, same rate
    d3 = check("HW discount 6.4% on 200,000 x 540/360", int_w1(200000, "6.4", 540), int_w2(200000, 6.4, 540), "19200")
    check("HW exporter receives on the third note", D(200000) - d3, c12(200000 - 19200), "180800")
    # Q3 · Commitment fee 0.75 % a year on the committed USD 2,000,000 for the 60 days from commitment to shipment
    check("Q3 commitment fee 0.75% on 2,000,000 x 60/360", int_w1(2000000, "0.75", 60),
          int_w2(2000000, 0.75, 60), "2500")
    # Homework (from A13): bill selling 86.20 on crystallisation day; USD 50,000; 10.95 % for 30 days, 365-day year
    cr = check("A13 HW crystallised 50,000 x 86.20", D(50000) * D("86.2"), c12(50000 * 86.2), "4310000")
    i = check("A13 HW interest 10.95% x 30/365", int_w1(4310000, "10.95", 30, 365), int_w2(4310000, 10.95, 30, 365), "38790")
    check("A13 HW total", cr + i, c12(4310000 + 38790), "4348790")
    # Practice P14 · factoring: USD 80,000; 80 %; fee 0.5 %; 6 % for 90 days
    i14 = check("P14 interest 6% on 64,000 x 90/360", int_w1(64000, 6, 90), int_w2(64000, 6, 90), "960")
    check("P14 balance 80,000-64,000-400-960", D(80000) - 64000 - 400 - i14, c12(c12(c12(80000 - 64000) - 400) - 960), "14640")
    # Practice P15 · forfaiting: USD 300,000, 180 days, 7.2 %
    d15 = check("P15 discount 7.2% on 300,000 x 180/360", int_w1(300000, "7.2", 180), int_w2(300000, 7.2, 180), "10800")
    check("P15 received", D(300000) - d15, c12(300000 - 10800), "289200")
    print("all OK")
