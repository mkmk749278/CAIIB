"""B03 numericals, each solved two independent ways (lesson spec: tools/check style; kept in the lesson folder
because shared tools are edited only by the Module A session).

Way 1: exact Decimal / statistics-module arithmetic of the formula.
Way 2: the key presses on an 8-function, 12-digit calculator (+ − × ÷ % √), simulated step by step, every display
       rounded to 12 significant digits; sums written in the notebook between steps (no memory keys assumed).
Both must agree to 4 decimals or the script exits with an error.
Run: python3 course/bfm/B/B03/check_b03.py
"""
from decimal import Decimal as D, ROUND_HALF_UP, getcontext
import math, statistics, sys
getcontext().prec = 40

def c12(x): return float(f"{x:.12g}")
def q4(x): return D(str(x)).quantize(D("0.0001"), rounding=ROUND_HALF_UP)
def check(label, a, b):
    a, b = q4(a), q4(b)
    print(f"{label:<58} way1 {a}   way2 {b}   {'OK' if a == b else 'MISMATCH'}")
    if a != b: sys.exit(1)
    return a

def way1(xs, sample=False):
    m = statistics.fmean(xs)
    v = statistics.variance(xs) if sample else statistics.pvariance(xs)
    return m, v, math.sqrt(v)

def way2(xs, sample=False):
    s = 0.0
    for x in xs: s = c12(s + x)            # add the values, one by one
    m = c12(s / len(xs))                   # ÷ n =
    sq = 0.0
    for x in xs:
        d = c12(x - m)                     # deviation, written in the table
        sq = c12(sq + c12(d * d))          # d × d = , added to the running sum
    v = c12(sq / ((len(xs) - 1) if sample else len(xs)))
    return m, v, c12(math.sqrt(v))          # √

def series(label, xs, sample=False):
    a, b = way1(xs, sample), way2(xs, sample)
    for k, i in (("mean", 0), ("variance", 1), ("SD", 2)):
        check(f"{label} {k}", a[i], b[i])
    return a

if __name__ == "__main__":
    A = series("N1 Branch A shortfalls 4,6,5,3,7 (₹000)", [4, 6, 5, 3, 7])
    B = series("N1 Branch B shortfalls 1,9,2,10,3 (₹000)", [1, 9, 2, 10, 3])
    series("N2 bond returns 3,-2,4,1,-1 (%) population", [3, -2, 4, 1, -1])
    series("N2 bond returns 3,-2,4,1,-1 (%) sample (n-1)", [3, -2, 4, 1, -1], sample=True)
    # N2 shortcut: variance = mean of squares - square of mean
    xs = [3, -2, 4, 1, -1]
    w1 = D(sum(x * x for x in xs)) / len(xs) - (D(sum(xs)) / len(xs)) ** 2
    msq = c12(c12(9 + 4 + 16 + 1 + 1) / 5); w2 = c12(msq - c12(1 * 1))
    check("N2 shortcut: mean of squares - square of mean", w1, w2)
    # N3 mean-variance and coefficient of variation
    check("N3 CV P = 5 / 10", D(5) / D(10), c12(5 / 10))
    check("N3 CV Q = 9 / 15", D(9) / D(15), c12(9 / 15))
    # N4 daily to annual, 250 days
    check("N4 annual vol = 1.2% x sqrt(250)", D("1.2") * D(250).sqrt(), c12(1.2 * c12(math.sqrt(250))))
    # N5 annual to 10-day, 250 days: 20 x sqrt(10/250)
    check("N5 10-day vol = 20% x sqrt(10/250)", D(20) * (D(10) / D(250)).sqrt(), c12(20 * c12(math.sqrt(c12(10 / 250)))))
    check("N5 alt: 20 / sqrt(25)", D(20) / D(25).sqrt(), c12(20 / c12(math.sqrt(25))))
    # N6 n-day to 1-day: 49-day vol 35%
    check("N6 1-day vol = 35% / sqrt(49)", D(35) / D(49).sqrt(), c12(35 / c12(math.sqrt(49))))
    # N7 try: daily 0.8%, 16-day
    check("N7 16-day vol = 0.8% x sqrt(16)", D("0.8") * D(16).sqrt(), c12(0.8 * c12(math.sqrt(16))))
    # N8 normal range mean 5, SD 2, about 95% within 2 SD
    check("N8 lower = 5 - 2 x 2", D(5) - 2 * D(2), c12(5 - c12(2 * 2)))
    check("N8 upper = 5 + 2 x 2", D(5) + 2 * D(2), c12(5 + c12(2 * 2)))
    series("Mixed: values 2,4,6", [2, 4, 6])
    check("Mixed: 1-day = 18% / sqrt(36)", D(18) / D(36).sqrt(), c12(18 / c12(math.sqrt(36))))
    check("Mixed: SD from variance 25", D(25).sqrt(), c12(math.sqrt(25)))
    series("Homework: values 8,10,12", [8, 10, 12])
    check("Homework: 0.5% x sqrt(250)", D("0.5") * D(250).sqrt(), c12(0.5 * c12(math.sqrt(250))))
    print("all checks passed")
