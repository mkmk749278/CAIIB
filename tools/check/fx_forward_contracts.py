"""Check A06 cancellation / early delivery / rollover sums two ways (Decimal vs 12-digit calculator steps).
Usage: python3 tools/check/fx_forward_contracts.py"""
from decimal import Decimal as D, ROUND_HALF_UP
import sys
def c12(x): return float(f"{x:.12g}")
def q(x, p="0.0001"): return D(str(x)).quantize(D(p), rounding=ROUND_HALF_UP)
def check(label, w1, w2, want, p="0.0001"):
    a, b = q(w1, p), q(w2, p); ok = a == b == D(want)
    print(f"{label:<46} way1 {a} way2 {b} want {want} {'OK' if ok else 'MISMATCH'}")
    if not ok: sys.exit(1)
    return a
# 1. Exporter's purchase contract USD 1,00,000 @ 86.05 cancelled at maturity; spot 86.38/86.40; TT selling +0.12%
ts = check("1 cancel purchase: TT selling", D("86.40")*D("1.0012"), c12(86.40*1.0012), "86.5037")
check("1 loss recovered (rupees)", (ts-D("86.05"))*100000, c12((86.5037-86.05)*100000), "45370.00", "0.01")
# 2. Importer's sale contract USD 50,000 @ 86.20 cancelled at maturity; spot 85.80/85.82; TT buying -0.08%
tb = check("2 cancel sale: TT buying", D("85.80")*D("0.9992"), c12(85.80*0.9992), "85.7314")
check("2 loss recovered (rupees)", (D("86.20")-tb)*50000, c12((86.20-85.7314)*50000), "23430.00", "0.01")
# 2b. trap: cancelling the sale contract at TT selling 85.82 x 1.0012
check("2 trap at TT selling", D("85.82")*D("1.0012"), c12(85.82*1.0012), "85.9230")
# 3. Purchase contract cancelled one month BEFORE maturity: forward TT selling = (spot ask + 1m ask points) x 1.0012
check("3 forward TT selling 1m", (D("86.40")+D("0.20"))*D("1.0012"), c12(86.60*1.0012), "86.7039")
# 4. Early delivery: purchase contract USD 1,00,000 @ 86.05 due in 2 months, delivered today.
#    Interbank spot 85.70/85.72; 2m points 0.36/0.39. Bank sells spot at 85.70, buys 2m fwd at 85.72+0.39 = 86.11.
check("4 swap cost per USD", (D("85.72")+D("0.39"))-D("85.70"), c12(c12(85.72+0.39)-85.70), "0.4100")
check("4 swap cost (rupees)", D("0.41")*100000, c12(0.41*100000), "41000.00", "0.01")
check("4 outlay (rupees)", (D("86.05")-D("85.70"))*100000, c12(c12(86.05-85.70)*100000), "35000.00", "0.01")
check("4 interest on outlay 10% x 2/12", D(35000)*D("0.10")*2/12, c12(35000*0.10*2/12), "583.33", "0.01")
check("4 net to exporter", D("86.05")*100000-D(41000)-D("583.33"), c12(8605000-41000-583.33), "8563416.67", "0.01")
print("A06 OK")
