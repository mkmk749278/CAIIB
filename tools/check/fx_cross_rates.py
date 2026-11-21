"""Check A04 cross-rate and chain-rule sums two ways (Decimal formula vs 12-digit basic-calculator steps).
Usage: python3 tools/check/fx_cross_rates.py"""
from decimal import Decimal as D, ROUND_HALF_UP
import sys
def c12(x): return float(f"{x:.12g}")
def q4(x): return D(str(x)).quantize(D("0.0001"), rounding=ROUND_HALF_UP)
def check(label, w1, w2, want):
    a, b = q4(w1), q4(w2); ok = a == b == D(want)
    print(f"{label:<40} way1 {a} way2 {b} want {want} {'OK' if ok else 'MISMATCH'}")
    if not ok: sys.exit(1)
    return a
ub, ua = D("85.60"), D("85.62")
check("EUR/INR bid", D("1.0850")*ub, c12(1.085*85.60), "92.8760")
check("EUR/INR ask", D("1.0855")*ua, c12(1.0855*85.62), "92.9405")
check("trap EUR bid x ask", D("1.0850")*ua, c12(1.085*85.62), "92.8977")
check("GBP/INR bid", D("1.2650")*ub, c12(1.265*85.60), "108.2840")
check("GBP/INR ask", D("1.2660")*ua, c12(1.266*85.62), "108.3949")
check("JPY/INR bid per 100", ub/D("149.60")*100, c12(c12(85.60/149.60)*100), "57.2193")
check("JPY/INR ask per 100", ua/D("149.50")*100, c12(c12(85.62/149.50)*100), "57.2709")
check("trap JPY bid/bid", ub/D("149.50")*100, c12(c12(85.60/149.50)*100), "57.2575")
ch = check("chain GBP->INR", D("1.17")*D("1.085")*ub, c12(c12(1.17*1.085)*85.60), "108.6649")
g = (D(500000)/ch).quantize(D("0.01"), ROUND_HALF_UP); assert g == D("4601.30"), g
assert (D("92.8760")*40000).quantize(D("0.01")) == D("3715040.00")
print("chain reverse GBP 4,601.30 · case ₹37,15,040.00 OK")
