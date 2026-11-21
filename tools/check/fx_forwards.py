"""Check A05 forward-rate sums two ways (Decimal formula vs 12-digit basic-calculator steps).
Usage: python3 tools/check/fx_forwards.py"""
from decimal import Decimal as D, ROUND_HALF_UP
import sys
def c12(x): return float(f"{x:.12g}")
def q(x, p="0.0001"): return D(str(x)).quantize(D(p), rounding=ROUND_HALF_UP)
def check(label, w1, w2, want, p="0.0001"):
    a, b = q(w1, p), q(w2, p); ok = a == b == D(want)
    print(f"{label:<44} way1 {a} way2 {b} want {want} {'OK' if ok else 'MISMATCH'}")
    if not ok: sys.exit(1)
    return a
sb, sa = D("85.60"), D("85.62")
# points (rupees): 1m 0.18/0.20 · 2m 0.36/0.39 · 3m 0.54/0.58 (premium, rising)
check("2m forward bid", sb + D("0.36"), c12(85.60 + 0.36), "85.9600")
check("2m forward ask", sa + D("0.39"), c12(85.62 + 0.39), "86.0100")
check("discount 1m bid (0.24/0.20)", sb - D("0.24"), c12(85.60 - 0.24), "85.3600")
check("discount 1m ask (0.24/0.20)", sa - D("0.20"), c12(85.62 - 0.20), "85.4200")
# annualised premium, 3m mid: (0.56 / 85.61) x 4 x 100
check("annualised premium % 3m mid", D("0.56")/D("85.61")*4*100, c12(c12(0.56/85.61)*4*100), "2.62", "0.01")
# parity: 85.60 x (1 + 0.065/4) / (1 + 0.045/4)
check("parity 3m forward", sb*(1+D("0.065")/4)/(1+D("0.045")/4), c12(c12(85.60*1.01625)/1.01125), "86.0232")
# importer: forward sale, option 2nd month -> premium to LAST date (2m ask) + TT selling 0.12%
imp = check("importer fwd TT selling", (sa + D("0.39"))*D("1.0012"), c12(86.01*1.0012), "86.1132")
r = (imp*50000).quantize(D("0.01")); assert r == D("4305660.00"), r
check("trap importer to first date (1m)", (sa + D("0.20"))*D("1.0012"), c12(85.82*1.0012), "85.9230")
# exporter: forward purchase, option 3rd month -> premium to FIRST date (2m bid) - TT buying 0.08%
check("exporter fwd TT buying", (sb + D("0.36"))*D("0.9992"), c12(85.96*0.9992), "85.8912")
check("trap exporter to last date (3m)", (sb + D("0.54"))*D("0.9992"), c12(86.14*0.9992), "86.0711")
# usance bill: 60 days sight + 25 days NTP = 85 days -> 2 completed months (premium, round down)
ub = check("usance bill buying", (sb + D("0.36"))*D("0.9985"), c12(85.96*0.9985), "85.8311")
r = (ub*20000).quantize(D("0.01")); assert r == D("1716622.00"), r
check("trap usance rounded up to 3m", (sb + D("0.54"))*D("0.9985"), c12(86.14*0.9985), "86.0108")
print("importer ₹43,05,660.00 · usance bill ₹17,16,622.00 OK")
