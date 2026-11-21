"""Check A11b packing-credit sums two ways (Decimal vs 12-digit calculator steps).
Usage: python3 tools/check/export_credit.py"""
from decimal import Decimal as D, ROUND_HALF_UP
from datetime import date
import sys
def c12(x): return float(f"{x:.12g}")
def q(x, p="1"): return D(str(x)).quantize(D(p), rounding=ROUND_HALF_UP)
def check(label, w1, w2, want, p="1"):
    a, b = q(w1, p), q(w2, p); ok = a == b == D(want)
    print(f"{label:<46} way1 {a} way2 {b} want {want} {'OK' if ok else 'MISMATCH'}")
    if not ok: sys.exit(1)
    return a
# N1. CIF USD 2,80,000; freight 14,000; insurance 2,800; Rs 88; domestic cost Rs 2,20,00,000; margin 10%;
#     limit Rs 2,10,00,000; drawn Rs 1,20,00,000.
fob = check("N1 FOB (USD)", D(280000)-14000-2800, c12(280000-14000-2800), "263200")
fob_r = check("N1 FOB (Rs)", fob*88, c12(263200*88), "23161600")
low = min(fob_r, D(22000000))
dp1 = check("N1 lower then margin", low*D("0.9"), c12(22000000*0.9), "19800000")
dp2 = check("N1 margin then lower", min(fob_r*D("0.9"), D(22000000)*D("0.9")), c12(min(23161600*0.9, 22000000*0.9)), "19800000")
check("N1 available to draw", min(dp1, D(21000000))-12000000, c12(min(19800000, 21000000)-12000000), "7800000")
# N2. PC Rs 50,00,000 on 1 Mar 2027 at 8.5%; documents 29 Jul 2027; bill USD 62,500 at 87.40.
days = (date(2027, 7, 29)-date(2027, 3, 1)).days
assert days == 150, days
i1 = check("N2 PC interest 150 days", D(5000000)*D("0.085")*150/365, c12(c12(5000000*8.5/100/365)*150), "174658")
bill = check("N2 bill proceeds", D(62500)*D("87.40"), c12(62500*87.4), "5462500")
check("N2 credit to current account", bill-5000000-i1, c12(5462500-5000000-174658), "287842")
check("N2b extra interest, no export, 200 d", D(5000000)*(D("0.11")-D("0.085"))*200/365,
      c12(c12(5000000*11/100*200/365)-c12(5000000*8.5/100*200/365)), "68493")
print("A11b OK")
# Homework N066: CIF 3,00,000; freight+insurance 20,000; Rs 88; cost Rs 2,40,00,000; margin 10%
hf = check("HW FOB (Rs)", (D(300000)-20000)*88, c12((300000-20000)*88), "24640000")
check("HW drawing power", min(hf, D(24000000))*D("0.9"), c12(min(24640000, 24000000)*0.9), "21600000")
# Close quiz N059: CIF 2,00,000 less 10,000
check("Q1 FOB (USD)", D(200000)-10000, c12(200000-10000), "190000")
print("A11b extras OK")
