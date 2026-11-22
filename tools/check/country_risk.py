"""Check A15 sums two independent ways (Decimal formula vs basic-calculator keys).

Usage: python3 tools/check/country_risk.py
Way 1: exact Decimal arithmetic. Way 2: the key presses shown in the lesson on an 8-function, 12-digit calculator,
rounded to 12 significant digits after every key. Both must agree to 2 decimals.
All figures illustrative. Provision rates: RBI Income Recognition, Asset Classification and Provisioning Directions
2025, para 113 (A1 0.25, A2 0.25, B1 5, B2 20, C1 25, C2 100, D 100 per cent of net funded exposure; only where net
funded exposure to the country is 1 % or more of total assets; short-term < 180 days: 25 % of the requirement).
Percentage of cover: ECGC SCR 90 %, SSP 80 % (product sheets).
"""
from decimal import Decimal as D, ROUND_HALF_UP
import sys

RATE = {"A1": D("0.25"), "A2": D("0.25"), "B1": D(5), "B2": D(20), "C1": D(25), "C2": D(100), "D": D(100)}

def c12(x): return float(f"{x:.12g}")
def q(x, p="0.01"): return D(str(x)).quantize(D(p), rounding=ROUND_HALF_UP)

def check(label, w1, w2, want=None, p="0.01"):
    a, b = q(w1, p), q(w2, p)
    ok = a == b and (want is None or a == D(want))
    print(f"{label:<60} way1 {a:>12}   way2 {b:>12}   {'OK' if ok else 'MISMATCH'}")
    if not ok: sys.exit(1)
    return a

def provision_w1(total_assets, long_term, short_term, grade):
    exp = D(long_term) + D(short_term)
    if exp / D(total_assets) * 100 < 1: return D(0)
    r = RATE[grade] / 100
    return D(long_term) * r + D(short_term) * r * D("0.25")

if __name__ == "__main__":
    # Warm-up · A14 homework: third note USD 200,000, 540 days, 6.4 %, 360-day year.
    disc = check("Warm-up discount 200,000 x 6.4% x 540/360", D(200000) * D("0.064") * 540 / 360,
                 c12(c12(c12(200000 * 6.4 / 100) * 540) / 360), "19200")
    check("Warm-up received 200,000 - 19,200", D(200000) - disc, c12(200000 - 19200), "180800")

    # Q1 · ECGC SCR pays 90 % of the loss: loss USD 80,000 (Country Z blocks the transfer).
    pay = check("Q1 ECGC pays 90% of 80,000", D(80000) * D("0.90"), c12(80000 * 90 / 100), "72000")
    check("Q1 exporter bears 80,000 - 72,000", D(80000) - pay, c12(80000 - 72000), "8000")

    # Q2 · Bank: total assets Rs 2,00,000 cr; Country Y (B2) net funded Rs 3,000 cr, of which Rs 1,000 cr < 180 days.
    check("Q2 share of assets 3,000 / 2,00,000 (%)", D(3000) / D(200000) * 100, c12(c12(3000 / 200000) * 100), "1.5")
    lt = check("Q2 long-term 2,000 x 20%", D(2000) * RATE["B2"] / 100, c12(2000 * 20 / 100), "400")
    st = check("Q2 short-term 1,000 x 20% x 25%", D(1000) * RATE["B2"] / 100 * D("0.25"),
               c12(c12(1000 * 20 / 100) * 25 / 100), "50")
    check("Q2 total provision", lt + st, c12(400 + 50), "450")
    check("Q2 rule function agrees", provision_w1(200000, 2000, 1000, "B2"), 450.0, "450")

    # V · Your turn: Country X (C1) Rs 1,500 cr, all long-term: 0.75 % of assets -> below 1 % -> nil.
    check("V share of assets 1,500 / 2,00,000 (%)", D(1500) / D(200000) * 100, c12(c12(1500 / 200000) * 100), "0.75")
    check("V provision (below 1 % threshold)", provision_w1(200000, 1500, 0, "C1"), 0.0, "0")
    check("V trap: 1,500 x 25% if the threshold is missed", D(1500) * RATE["C1"] / 100, c12(1500 * 25 / 100), "375")

    # Close N075: D country, 2 % of assets -> 100 %. Exposure Rs 4,000 cr illustrative.
    check("Close D country 4,000 (2%) x 100%", provision_w1(200000, 4000, 0, "D"), c12(4000 * 100 / 100), "4000")

    # Practice 32: loans 1,200 cr + LCs/guarantees 900 cr, B1, total assets 2,00,000 cr: net funded 0.6 % -> nil.
    check("P32 net funded share 1,200 / 2,00,000 (%)", D(1200) / D(200000) * 100, c12(c12(1200 / 200000) * 100), "0.6")
    check("P32 provision (LCs not net funded; below 1 %)", provision_w1(200000, 1200, 0, "B1"), 0.0, "0")
    check("P32 trap: 2,100 x 5%", D(2100) * RATE["B1"] / 100, c12(2100 * 5 / 100), "105")
    # Q2 without the optional short-term relief: 3,000 x 20 %.
    check("Q2 without the relief 3,000 x 20%", D(3000) * RATE["B2"] / 100, c12(3000 * 20 / 100), "600")

    # Homework · SSP pays 80 % of a USD 50,000 loss.
    p = check("Homework SSP 80% of 50,000", D(50000) * D("0.80"), c12(50000 * 80 / 100), "40000")
    check("Homework exporter bears", D(50000) - p, c12(50000 - 40000), "10000")
    print("All OK")
