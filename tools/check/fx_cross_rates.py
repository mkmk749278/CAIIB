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
check("trap JPY ask/ask", ua/D("149.60")*100, c12(c12(85.62/149.60)*100), "57.2326")
check("trap JPY bid/bid", ub/D("149.50")*100, c12(c12(85.60/149.50)*100), "57.2575")
ch = check("chain GBP->INR", D("1.17")*D("1.085")*ub, c12(c12(1.17*1.085)*85.60), "108.6649")
g = (D(500000)/ch).quantize(D("0.01"), ROUND_HALF_UP); assert g == D("4601.30"), g
assert (D("92.8760")*40000).quantize(D("0.01")) == D("3715040.00")
print("chain reverse GBP 4,601.30 · case ₹37,15,040.00 OK")
# --- c2 additions (2026-11-21) ---
check("indirect bid 100/ask", D(100)/ua, c12(100/85.62), "1.1680")
check("indirect ask 100/bid", D(100)/ub, c12(100/85.60), "1.1682")
check("EUR/GBP bid (USD quote in both)", D("1.0850")/D("1.2660"), c12(1.085/1.266), "0.8570")
check("EUR/GBP ask", D("1.0855")/D("1.2650"), c12(1.0855/1.265), "0.8581")
check("chain 2 GBP->INR (right / left)", D("1.17")*D("149.5")*D("57.22")/D("0.9217")/100,
      c12(c12(c12(c12(1.17*149.5)*57.22)/0.9217)/100), "108.5889")
check("trap chain 2 x 0.9217", D("1.17")*D("0.9217")*D("149.5")*D("57.22")/100,
      c12(c12(c12(c12(1.17*0.9217)*149.5)*57.22)/100), "92.2496")
assert (D("57.2709")*20000).quantize(D("0.01")) == D("1145418.00")
check("back-out USD/INR bid", D("92.8760")/D("1.0855"), c12(92.876/1.0855), "85.5606")
check("back-out USD/INR ask", D("92.9405")/D("1.0850"), c12(92.9405/1.085), "85.6594")
check("trap back-out bid/bid", D("92.8760")/D("1.0850"), c12(92.876/1.085), "85.6000")
# practice.md
check("P2 AUD/INR bid", D("0.6550")*D("85.30"), c12(0.655*85.30), "55.8715")
check("P3 JPY/INR bid", D("85.30")/D("150.25")*100, c12(c12(85.30/150.25)*100), "56.7720")
check("P3 JPY/INR ask", D("85.33")/D("150.10")*100, c12(c12(85.33/150.10)*100), "56.8488")
check("P4 indirect bid", D(100)/D("85.33"), c12(100/85.33), "1.1719")
check("P4 indirect ask", D(100)/D("85.30"), c12(100/85.30), "1.1723")
p5 = check("P5 chain CHF", D("1.135")*D("149.8")*D("56.95")/100, c12(c12(c12(1.135*149.8)*56.95)/100), "96.8281")
assert (D(250000)/p5).quantize(D("0.01"), ROUND_HALF_UP) == D("2581.90")
assert (D("92.9405")*25000).quantize(D("0.01")) == D("2323512.50")
check("P7 EUR/GBP bid", D("1.0920")/D("1.2718"), c12(1.092/1.2718), "0.8586")
check("P7 EUR/GBP ask", D("1.0925")/D("1.2710"), c12(1.0925/1.271), "0.8596")
print("c2 additions and practice OK")
