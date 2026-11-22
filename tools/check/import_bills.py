"""Check A13 import-bill and trade-credit sums two independent ways (Decimal formula vs basic-calculator keys).

Usage: python3 tools/check/import_bills.py
Way 1: exact Decimal arithmetic from the rule (FEDAI 3.1, 3.2; ECB-TC Master Direction para 14). Way 2: the key
presses shown in the lesson on an 8-function, 12-digit calculator, rounded to 12 significant digits after every key.
Both must agree to 2 decimals (rates to 4). Interest on a 365-day year (stated in every sum).
"""
from datetime import date, timedelta
from decimal import Decimal as D, ROUND_HALF_UP
import sys

def c12(x): return float(f"{x:.12g}")
def q(x, p="0.01"): return D(str(x)).quantize(D(p), rounding=ROUND_HALF_UP)

def check(label, w1, w2, p="0.01"):
    a, b = q(w1, p), q(w2, p)
    print(f"{label:<56} way1 {a:>15}   way2 {b:>15}   {'OK' if a == b else 'MISMATCH'}")
    if a != b: sys.exit(1)
    return a

def check_date(label, got, want):
    ok = got == want
    print(f"{label:<56} {got} {got.strftime('%a')}   want {want}   {'OK' if ok else 'MISMATCH'}")
    if not ok: sys.exit(1)

def interest_w1(principal, rate_pct, days):
    return D(principal) * D(str(rate_pct)) / 100 * D(days) / 365

def interest_w2(principal, rate_pct, days):
    # keys: principal × rate % = × days ÷ 365 =
    return c12(c12(c12(principal * rate_pct / 100) * days) / 365)

if __name__ == "__main__":
    # Q1 · The hospital's sight bill under its LC: USD 50,000, no forward cover. Interbank USD/INR 85.80 / 85.82.
    # TT selling margin 0.12 % on the ask; bill selling a further 0.15 % on TT selling (A03 method).
    tts = check("Q1 TT selling (85.82 x 1.0012)", D("85.82") * D("1.0012"), c12(85.82 * 1.0012), "0.0001")
    bs = check("Q1 bill selling (TT selling x 1.0015)", D("85.82") * D("1.0012") * D("1.0015"),
               c12(c12(85.82 * 1.0012) * 1.0015), "0.0001")
    assert bs == D("86.0519"), bs
    r1 = check("Q1 rupees to retire USD 50,000 at 86.0519", D(50000) * bs, c12(50000 * 86.0519))
    # Trap: bill selling margin taken on the ask with both margins added (0.27 %)
    check("Q1 trap: 85.82 x 1.0027 (margins added)", D("85.82") * D("1.0027"), c12(85.82 * 1.0027), "0.0001")
    # Q1b · with a forward contract at 86.25 (illustrative)
    check("Q1b rupees at the forward rate 86.25", D(50000) * D("86.25"), c12(50000 * 86.25))
    check("Q1b cover vs no cover (difference)", D(50000) * D("86.25") - r1, c12(4312500 - 4302595))

    # Q2 · Not retired: crystallised per the bank's stated policy (the case: 10th day after the documents arrive)
    docs = date(2027, 4, 5)
    cry = docs + timedelta(10)
    check_date("Q2 crystallisation day (documents + 10 days, case)", cry, date(2027, 4, 15))
    paid = cry + timedelta(20)
    check_date("Q2 hospital pays (crystallisation + 20 days)", paid, date(2027, 5, 5))
    # Same rate as retirement (FEDAI 3.1(b)); bill selling that day 86.0519 (rates unchanged, illustrative)
    cr = check("Q2 crystallised at bill selling 86.0519", D(50000) * D("86.0519"), c12(50000 * 86.0519))
    i = check("Q2 interest 10.95% x 20/365 on the rupee debt", interest_w1(cr, "10.95", 20),
              interest_w2(4302595, 10.95, 20))
    check("Q2 total the hospital pays", cr + i, c12(4302595 + 25815.57))

    # Q3 · Trade credit all-in-cost ceiling: benchmark 4.20 % (illustrative) + 300 bps (FCY) / G-sec 6.60 % + 250 bps (INR)
    check("Q3 FCY TC ceiling 4.20 + 3.00", D("4.20") + D("3.00"), c12(4.2 + 3))
    check("Q3 INR TC ceiling 6.60 + 2.50", D("6.60") + D("2.50"), c12(6.6 + 2.5))

    # Your turn (chapter 2): a second sight bill under the LC, USD 20,000, on a day when interbank is 85.90 / 85.92.
    e = check("V bill selling (85.92 x 1.0012 x 1.0015)", D("85.92") * D("1.0012") * D("1.0015"),
              c12(c12(85.92 * 1.0012) * 1.0015), "0.0001")
    assert e == D("86.1521"), e
    check("V rupees for USD 20,000 at 86.1521", D(20000) * e, c12(20000 * 86.1521))

    # Homework (N079): bill selling rises to 86.20; crystallised USD 50,000; interest 10.95 % x 20 days
    h = check("HW rupees at 86.20", D(50000) * D("86.20"), c12(50000 * 86.2))
    check("HW interest 10.95% x 20/365", interest_w1(h, "10.95", 20), interest_w2(4310000, 10.95, 20))

    # Practice P8: USD 30,000 bill, interbank 86.00 / 86.02, TT selling 0.12 %, bill selling +0.15 %; P9: forward 86.40
    pr = check("P8 bill selling (86.02 x 1.0012 x 1.0015)", D("86.02") * D("1.0012") * D("1.0015"),
               c12(c12(86.02 * 1.0012) * 1.0015), "0.0001")
    check(f"P8 rupees for USD 30,000 at {pr}", D(30000) * pr, c12(30000 * float(pr)))
    check("P9 rupees at the forward 86.40", D(30000) * D("86.40"), c12(30000 * 86.4))
    # P10: INR TC, G-sec of matching maturity 6.85 % (illustrative) + 250 bps
    check("P10 INR TC ceiling 6.85 + 2.50", D("6.85") + D("2.50"), c12(6.85 + 2.5))
    print("all OK")
