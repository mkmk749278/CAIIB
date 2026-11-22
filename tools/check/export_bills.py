"""Check A12 export-bill sums two independent ways (Decimal formula vs basic-calculator key presses).

Usage: python3 tools/check/export_bills.py
Way 1: exact Decimal arithmetic from the rule (FEDAI 2.1, 2.2). Way 2: the key presses shown in the lesson on an
8-function, 12-digit calculator, rounded to 12 significant digits after every key. Both must agree to 2 decimals.
Dates are checked with Python's calendar. Interest on a 365-day year (stated in every sum).
"""
from datetime import date, timedelta
from decimal import Decimal as D, ROUND_HALF_UP
import sys

def c12(x): return float(f"{x:.12g}")
def q2(x): return D(str(x)).quantize(D("0.01"), rounding=ROUND_HALF_UP)

def check(label, w1, w2):
    a, b = q2(w1), q2(w2)
    print(f"{label:<52} way1 {a:>15}   way2 {b:>15}   {'OK' if a == b else 'MISMATCH'}")
    if a != b: sys.exit(1)
    return a

def check_date(label, got, want):
    ok = got == want
    print(f"{label:<52} {got} {got.strftime('%a')}   want {want}   {'OK' if ok else 'MISMATCH'}")
    if not ok: sys.exit(1)

def interest_w1(principal, rate_pct, days):
    return D(principal) * D(str(rate_pct)) / 100 * D(days) / 365

def interest_w2(principal, rate_pct, days):
    # keys: principal × rate % = (gives rate % of principal) × days ÷ 365 =
    return c12(c12(c12(principal * rate_pct / 100) * days) / 365)

if __name__ == "__main__":
    # The case (chapters 1–3): usance bill USD 100,000, 60 days after sight, discounted Mon 1 Mar 2027.
    d0 = date(2027, 3, 1)
    due = d0 + timedelta(25 + 60)            # NTP 25 + usance 60 = notional due date
    check_date("Q3 notional due date (1 Mar + 85 days)", due, date(2027, 5, 25))
    cry = due + timedelta(30)                # her bank's policy: 30th day after the due date
    check_date("Q3 crystallisation day (due + 30 days)", cry, date(2027, 6, 24))
    paid = cry + timedelta(20)
    check_date("Q5 proceeds arrive (crystallisation + 20 days)", paid, date(2027, 7, 14))

    check("Q1 bill buying rate (spot + 2m premium − 0.16%)", (D("85.5") + D("0.4375")) * D("0.9984"), c12(c12(85.5 + 0.4375) * 0.9984))
    adv = check("Q1 rupee value at bill buying 85.80", D(100000) * D("85.80"), c12(100000 * 85.8))
    i1 = check("Q2 upfront interest 7.3% x 85/365", interest_w1(adv, "7.3", 85), interest_w2(8580000, 7.3, 85))
    check("Q2 credited to exporter", adv - i1, c12(8580000 - 145860))
    cr = check("Q4 crystallised at TT selling 86.40", D(100000) * D("86.40"), c12(100000 * 86.4))
    check("Q4 exchange difference (her loss)", cr - adv, c12(8640000 - 8580000))
    od = check("Q4 overdue interest 10.95% x 30/365 on 85,80,000", interest_w1(adv, "10.95", 30),
               interest_w2(8580000, 10.95, 30))
    check("Q4 total due on crystallisation day (interest paid; debt stays)", cr + od, c12(8640000 + 77220))
    pr = check("Q5 proceeds at TT buying 85.95", D(100000) * D("85.95"), c12(100000 * 85.95))
    i2 = check("Q5 interest 10.95% x 20/365 on 86,40,000", interest_w1(cr, "10.95", 20),
               interest_w2(8640000, 10.95, 20))
    check("Q5 she still pays", cr + i2 - pr, c12(c12(8640000 - 8595000) + 51840))

    # Faded variant (sight bill): USD 50,000, bill buying 85.50, NTP 25 days, 7.3%
    a2 = check("V sight bill rupee value", D(60000) * D("85.50"), c12(60000 * 85.5))
    i3 = check("V NTP interest 25 days", interest_w1(a2, "7.3", 25), interest_w2(5130000, 7.3, 25))
    check("V credited", a2 - i3, c12(5130000 - 25650))

    # Early realisation: the usance bill paid 10 days early -> refund 10 days at 7.3% (swap cost aside)
    check("Early: refund 10 days", interest_w1(adv, "7.3", 10), interest_w2(8580000, 7.3, 10))

    # Practice
    check("P3 crystallised: USD 40,000 x TT selling 86.25", D(40000) * D("86.25"), c12(40000 * 86.25))
    a3 = check("P3 advance: USD 40,000 x 85.70", D(40000) * D("85.70"), c12(40000 * 85.7))
    check("P3 overdue interest 30 days 10.95%", interest_w1(a3, "10.95", 30), interest_w2(3428000, 10.95, 30))
    check("P5 dishonour: (100,000 + 200) x TT selling 86.10", D(100200) * D("86.10"), c12(100200 * 86.1))
    a6 = check("P6 sight bill USD 20,000 x 86.00", D(20000) * D("86.00"), c12(20000 * 86))
    check("P6 NTP interest 25 days at 7.3%", interest_w1(a6, "7.3", 25), interest_w2(1720000, 7.3, 25))
    # P11 linked case
    p0 = date(2027, 4, 9); pd = p0 + timedelta(25 + 90)
    check_date("P11 notional due date", pd, date(2027, 8, 2))
    check_date("P11 crystallisation day", pd + timedelta(30), date(2027, 9, 1))
    check_date("P11 paid", pd + timedelta(50), date(2027, 9, 21))
    b = check("P11 advance", D(80000) * D("85.60"), c12(80000 * 85.6))
    bi = check("P11 interest 115 days", interest_w1(b, "7.3", 115), interest_w2(6848000, 7.3, 115))
    check("P11 credit", b - bi, c12(6848000 - 157504))
    bc = check("P11 crystallised", D(80000) * D("86.20"), c12(80000 * 86.2))
    bo = check("P11 overdue interest 30 days", interest_w1(b, "10.95", 30), interest_w2(6848000, 10.95, 30))
    check("P11 total due that day", bc + bo, c12(6896000 + 61632))
    bp = check("P11 proceeds", D(80000) * D("85.75"), c12(80000 * 85.75))
    bi2 = check("P11 interest 20 days on crystallised", interest_w1(bc, "10.95", 20), interest_w2(6896000, 10.95, 20))
    check("P11 she still pays", bc - bp + bi2, c12(c12(6896000 - 6860000) + 41376))
    print("all OK")
