"""Check A12 export-bill sums two ways (Decimal formula vs 12-digit basic-calculator key presses).

Usage: python3 tools/check/export_discounting.py
Interest: actual days / 365 on the rupee advance (case convention, stated in the lesson). Both ways must agree to
2 decimals or the script exits with an error. Dates checked with datetime.
"""
from decimal import Decimal as D, ROUND_HALF_UP
from datetime import date, timedelta
import sys

def c12(x): return float(f"{x:.12g}")
def q2(x): return D(str(x)).quantize(D("0.01"), rounding=ROUND_HALF_UP)

def check(label, w1, w2, want=None):
    a, b = q2(w1), q2(w2)
    ok = a == b and (want is None or a == D(want))
    print(f"{label:<44} way1 {a:>13}   way2 {b:>13}   {'OK' if ok else 'MISMATCH'}")
    if not ok: sys.exit(1)
    return a

def interest_w1(p, r, days): return D(p) * D(r) / 100 * D(days) / 365
def interest_w2(p, r, days):            # keys: p × r % =   × days =   ÷ 365 =
    return c12(c12(c12(p * r / 100) * days) / 365)

if __name__ == "__main__":
    # Main case (N0xx): bill USD 50,000, 60 days after sight, FC bill not under LC → +25 days NTP
    disc = date(2027, 2, 1); due = disc + timedelta(60 + 25); cryst = due + timedelta(30); paid = cryst + timedelta(20)
    assert (disc.strftime("%a"), due.isoformat(), due.strftime("%a")) == ("Mon", "2027-04-27", "Tue"), due
    assert (cryst.isoformat(), cryst.strftime("%a"), paid.isoformat()) == ("2027-05-27", "Thu", "2027-06-16")
    print("dates OK: discount Mon 1 Feb 2027 · notional due Tue 27 Apr · crystallised Thu 27 May · paid Wed 16 Jun")
    adv = check("C1 rupee advance 50000 × 85.20", D(50000) * D("85.20"), c12(50000 * 85.2), "4260000.00")
    i1 = check("C2 upfront interest 9% × 85 days", interest_w1(4260000, 9, 85), interest_w2(4260000, 9, 85), "89284.93")
    check("C2 credited to exporter", adv - i1, c12(4260000 - interest_w2(4260000, 9, 85)), "4170715.07")
    cr = check("C3 crystallised at TT selling 86.10", D(50000) * D("86.10"), c12(50000 * 86.1), "4305000.00")
    i2 = check("C4 overdue interest 11% × 30 days", interest_w1(4260000, 11, 30), interest_w2(4260000, 11, 30), "38515.07")
    check("C4 recovered on crystallisation", cr + i2, c12(4305000 + interest_w2(4260000, 11, 30)), "4343515.07")
    check("C5 late proceeds at TT buying 85.60", D(50000) * D("85.60"), c12(50000 * 85.6), "4280000.00")
    check("C3 exchange difference (selling − buying adv.)", cr - adv, c12(4305000 - 4260000), "45000.00")
    # Faded variant / practice: bill USD 30,000 at 84.90, 8% for 85 days; crystallised at 85.70; 10% for 30 days
    a = check("V1 advance 30000 × 84.90", D(30000) * D("84.90"), c12(30000 * 84.9), "2547000.00")
    i = check("V1 interest 8% × 85 days", interest_w1(2547000, 8, 85), interest_w2(2547000, 8, 85), "47450.96")
    check("V1 credited", a - i, c12(2547000 - interest_w2(2547000, 8, 85)), "2499549.04")
    check("V2 crystallised 30000 × 85.70", D(30000) * D("85.70"), c12(30000 * 85.7), "2571000.00")
    check("V2 overdue 10% × 30 days", interest_w1(2547000, 10, 30), interest_w2(2547000, 10, 30), "20934.25")
    # c2 additions
    check("C2s sight bill interest 25 days", interest_w1(4260000, 9, 25), interest_w2(4260000, 9, 25), "26260.27")
    check("C2s sight bill credited", D(4260000) - interest_w1(4260000, 9, 25), c12(4260000 - interest_w2(4260000, 9, 25)), "4233739.73")
    check("C2 trap: 60 days only", interest_w1(4260000, 9, 60), interest_w2(4260000, 9, 60), "63024.66")
    assert (date(2027, 4, 27) + timedelta(13)).isoformat() == "2027-05-10" and date(2027, 5, 10).strftime("%a") == "Mon"
    check("C2L paid 13 days late: overdue 11%", interest_w1(4260000, 11, 13), interest_w2(4260000, 11, 13), "16689.86")
    check("C6 dishonour 50,200 at TT selling 86.10", D(50200) * D("86.10"), c12(50200 * 86.1), "4322220.00")
    assert (date(2027, 4, 27) - date(2027, 4, 2)).days == 25 and date(2027, 4, 2).strftime("%a") == "Fri"
    check("C7 early refund 25 days at 9%", interest_w1(4260000, 9, 25), interest_w2(4260000, 9, 25), "26260.27")
    check("Ravi net outcome", D("4170715.07") - D("4343515.07") + D(4280000), c12(4170715.07 - 4343515.07 + 4280000), "4107200.00")
    check("P9 sight USD 20,000 at 85, 9%, 25 d", interest_w1(1700000, 9, 25), interest_w2(1700000, 9, 25), "10479.45")
    check("P10 interest on crystallised amount", interest_w1(2571000, 10, 30), interest_w2(2571000, 10, 30), "21131.51")
    print("all OK")
