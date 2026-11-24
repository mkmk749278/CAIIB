# C06 · Practice (c1, 2026-11-24)
Original exam-style questions covering all question kinds for syllabus sub-topic C5.3 (duration, modified duration, BPV/PV01, portfolio duration, and the 19 October 2026 RBI PV01 update). All names, amounts, and yields are illustrative.
Q1 · Define / Exception (MCQ)
For which of the following option-free bonds is Macaulay Duration exactly equal to its remaining time to maturity?
A) A 5-year fixed-coupon Government Security trading at par
B) A 5-year zero-coupon bond (such as a G-sec STRIP)
C) A 5-year corporate bond trading at a discount
D) A 5-year high-coupon bond paying semi-annual interest
Q2 · Compare (MCQ)
Two option-free bonds mature in 7 years and both have a YTM of 7.50% p.a. Bond P carries a 9% coupon and Bond Q carries a 6% coupon. Which statement is correct?
A) Bond P has a longer Macaulay Duration than Bond Q
B) Bond Q has a longer Macaulay Duration than Bond P
C) Both bonds have the same Macaulay Duration because both mature in 7 years
D) Both bonds have a Macaulay Duration greater than 7 years
Q3 · Calculate — Macaulay Duration (No-option numerical)
Compute the Macaulay Duration (in years, to 4 decimal places) of a 2-year annual-coupon bond with face value ₹100, coupon rate 10% p.a., and YTM 10% p.a. (trading at par ₹100.00).
Q4 · Calculate — Semi-annual Modified Duration & Price Change (No-option numerical)
A semi-annual Government Security has a Macaulay Duration of 5.2000 years, YTM of 8.00% p.a., and current market price of ₹102.00. If market yields fall by 50 basis points, compute: (a) Modified Duration, and (b) approximate new bond price (to 2 decimal places).
Q5 · Calculate — BPV / PV01 (No-option numerical)
A bank holds ₹5 crore (market value) of a dated G-sec whose Modified Duration is 6.4000 years. Compute: (a) the BPV (PV01) of the position in rupees, and (b) the approximate rupee gain or loss if yields rise by 15 basis points.
Q6 · Compare — Convexity & Scope of Duration (MCQ)
When market yields increase sharply (say by 200 bps) on an option-free fixed-coupon bond, how does the actual price decline compare with the decline predicted by Modified Duration alone?
A) Actual price decline is larger than Modified Duration predicts
B) Actual price decline is smaller than Modified Duration predicts
C) Actual price decline is identical because the price-yield relation is linear
D) Actual price rises because convexity reverses the sign
Q7 · Who / When / Regulatory Update Trap (MCQ)
As on 31 December 2026, what is RBI's prudential regulatory cap on the gross PV01 of a commercial bank's non-option rupee derivative contracts as a percentage of net worth?
A) 0.25% of net worth as on the last balance sheet date
B) 0.50% of net worth as on the last balance sheet date
C) 1.00% of Tier 1 capital
D) There is no regulatory PV01 cap; paragraph 37 was deleted effective 19 October 2026
Q8 · Apply to a Case — Portfolio Duration & Rebalancing (MCQ)
A ₹10 crore bond portfolio holds ₹5 crore of Bond X (MD 2.40), ₹3 crore of Bond Y (MD 5.00), and ₹2 crore of Bond Z (MD 8.00). If the dealer expects yields to rise and replaces Bond Z with ₹2 crore of 91-day Treasury Bills (MD 0.25), what is the new portfolio Modified Duration?
A) 4.3000 years
B) 3.5500 years
C) 2.7500 years
D) 2.5500 years
Answers (one-line reasons)
1. B — Macaulay Duration is always less than or equal to maturity and equals maturity only for a zero-coupon bond (including G-sec STRIPS) [F4, F25].
2. B — Holding maturity constant, a lower coupon delivers less cash early, so the 6% bond (Bond Q) has a longer Macaulay Duration than the 9% bond [F5].
3. 1.9091 years — Year 1 PV = 9.0909 (t×PV = 9.0909), Year 2 PV = 90.9091 (t×PV = 181.8182); 190.9091 ÷ 100 = 1.9091 [F2; numericals.md P1].
4. (a) MD = 5.0000 years; (b) ₹104.55 — Semi-annual MD = 5.20 ÷ (1 + 0.08/2) = 5.20 ÷ 1.04 = 5.0000; yield falls 0.50% so price rises +2.50% (102 × 1.025 = ₹104.55) [F7, F8; numericals.md P2].
5. (a) BPV = ₹32,000.00; (b) Loss of ₹4,80,000.00 — BPV = 5,00,00,000 × 6.40 × 0.0001 = ₹32,000; a 15 bps yield rise causes a loss of 32,000 × 15 = ₹4,80,000 [F12, F14; numericals.md P3].
6. B — Because the price-yield curve is convex, for an option-free bond the actual price drop on a yield increase is smaller than the straight-line duration estimate [F10, F11].
7. D — RBI's Commercial Banks – Miscellaneous (Second Amendment) Directions, 2026 (RBI/2026-27/294, 19 Oct 2026) deleted paragraph 37 with immediate effect, removing the 0.25% of net worth PV01 cap [F17, F18].
8. C — Market-value-weighted average: (0.50 × 2.40) + (0.30 × 5.00) + (0.20 × 0.25) = 1.20 + 1.50 + 0.05 = 2.7500 years [F19; numericals.md Num 5 Q5].