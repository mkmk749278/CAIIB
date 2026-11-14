"""Check merchant-rate sums two independent ways (Decimal formula vs basic-calculator steps).

Usage: python3 tools/check/fx_merchant_rates.py   (prints every worked number used in lessons A1/A2)
Way 1: exact Decimal arithmetic of the formula.
Way 2: the key presses on an 8-function calculator (12 digits), simulated step by step with float and rounded to
       12 significant digits after every key, as the IIBF-allowed calculator would.
Both must agree to 4 decimals or the script exits with an error.
"""
from decimal import Decimal as D, ROUND_HALF_UP
import sys

def calc12(x):  # a 12-digit display
    return float(f"{x:.12g}")

def way1_buy(rate, m):   return D(rate) * (1 - D(m) / 100)
def way1_sell(rate, m):  return D(rate) * (1 + D(m) / 100)

def way2_buy(rate, m):   # keys: rate × m % = (margin)   then   rate − margin =
    margin = calc12(rate * m / 100)
    return calc12(rate - margin)

def way2_sell(rate, m):  # keys: rate × m % = (margin)   then   rate + margin =
    margin = calc12(rate * m / 100)
    return calc12(rate + margin)

def q4(x): return D(str(x)).quantize(D("0.0001"), rounding=ROUND_HALF_UP)

def check(label, w1, w2):
    a, b = q4(w1), q4(w2)
    ok = a == b
    print(f"{label:<44} way1 {a}   way2 {b}   {'OK' if ok else 'MISMATCH'}")
    if not ok:
        sys.exit(1)
    return a

if __name__ == "__main__":
    # A1 worked example (illustrative interbank quote and margins, stated in the question)
    bid, ask = 85.40, 85.42
    m = dict(tt_buy=0.05, bill_buy=0.15, tt_sell=0.10, bill_sell_over_tt=0.15)
    ttb = check("A1 TT buying  = 85.40 less 0.05%", way1_buy(bid, m["tt_buy"]), way2_buy(bid, m["tt_buy"]))
    bb  = check("A1 Bill buying = 85.40 less 0.15%", way1_buy(bid, m["bill_buy"]), way2_buy(bid, m["bill_buy"]))
    tts_exact = way1_sell(ask, m["tt_sell"])
    tts = check("A1 TT selling = 85.42 plus 0.10%", tts_exact, way2_sell(ask, m["tt_sell"]))
    # bill selling loads a further 0.15% on the unrounded TT selling rate
    bs1 = way1_sell(tts_exact, m["bill_sell_over_tt"])
    bs2 = way2_sell(way2_sell(ask, m["tt_sell"]), m["bill_sell_over_tt"])
    bs = check("A1 Bill selling = TT selling plus 0.15%", bs1, bs2)
    # Rupee amounts in the lesson
    print()
    for label, fc, rate in [("Fee remittance USD 18,000 at TT selling", 18000, tts),
                            ("Shrimp bill USD 40,000 at bill buying", 40000, bb),
                            ("Inward USD 2,500 at TT buying", 2500, ttb),
                            ("Import bill USD 12,000 at bill selling", 12000, bs)]:
        r1 = (D(fc) * rate).quantize(D("0.01"), rounding=ROUND_HALF_UP)
        r2 = D(str(calc12(fc * float(rate)))).quantize(D("0.01"), rounding=ROUND_HALF_UP)
        print(f"{label:<44} way1 Rs {r1}   way2 Rs {r2}   {'OK' if r1 == r2 else 'MISMATCH'}")
        if r1 != r2:
            sys.exit(1)
    # spread the customer pays on a round trip (buy then sell back) per USD
    print(f"\nTT round trip spread per USD: {tts - ttb}  (interbank spread {D(str(ask)) - D(str(bid))})")
