# C05 · "Bonds: the family, price and yield" · CLASS EDITION (script c1, with cue sheet)
* Status: **c1 GEMINI DRAFT, gate PASS, full review pending** (owner, 2026-11-24: "save as drafts, check later"). Not locked: do not voice until reviewed.
* Plan: course/bfm/C/plans_C.md §C05 (v3 depth pass: all 5 v3 additions folded into Chapter 1; 4 numericals + 1 your-turn sum). Course order v4: C04b → C05 → C06.
* Syllabus: C2.3 (Securities market products — bond varieties, STRIPS, SLR vs non-SLR, primary auctions recall, demat-only holding, investment categories) and C5.3 groundwork (bond pricing, current yield, YTM approximation, clean vs dirty price, accrued interest, credit spread, yield curve shapes, bond risks).
* Facts: C05_fact_sheet, rows cited as [F1]–[F34]. Sums: C05_numericals (all 5 sums verified two independent ways in Python Decimal). Practice: C05_practice. Map nodes: C05_map_nodes.
* Rule version (opening card): "Banking Regulation Act 1949 s. 24 · Government Securities Act 2006 · RBI Commercial Banks – CRR and SLR Directions 2025 (updated 9 Oct 2026) · RBI Commercial Banks – Investment Portfolio Directions 2025 (updated 1 Oct 2026) & Second Amendment Directions 2026 (18 May 2026, IFR discontinued) · RBI STRIPS Guidelines (3 May 2018) & STRIPS in SGS (12 Jun 2025) · RBI G-Sec Auction Guidelines (Nov 2026) & Primer · SEBI NCS Regulations 2021 (amended Jan 2026) · FIMMDA Market Practices · as at 31 December 2026".
* Greeting / goodbye (new, verified unused in greetings.md): greeting "Good to have you back at the desk. Keep your basic calculator ready, because today we step into the bond book."; goodbye "That is our bond desk built from coupon to curve. Rest your eyes tonight, and I will meet you in the next class."
* Story: Officer Ravi at the Mumbai treasury of Deccan Commercial Bank (illustrative) watches his Government Securities portfolio drop in market value on the afternoon RBI hikes policy rates, even though every bond still pays the exact same coupon. All bank names, securities, dates, prices, and amounts are illustrative.
* Holds: recall and check questions 3–5 s; one-step sums 8 s; "your turn" numerical 15 s; blank mind map 5 s.
* Say it right: "G-Sec" as "GEE-sek"; "SDL", "SGS", "T-Bill", "CMB", "FRB", "ZCB", "STRIPS" as a word; "SLR", "NDTL", "SGL", "CSGL", "HTM", "AFS", "FVTPL", "HFT", "SPPI", "IFR"; "YTM", "PV", "ZCYC", "FBIL", "FIMMDA" as "FIM-da"; "seven twenty" for 7.20%, "one hundred one forty" for ₹101.40.
* Not in this video: Macaulay duration, modified duration, convexity, and BPV/PV01 (next class); detailed T-Bill discount yield and LAF/money-market instruments (earlier in this module); full MTM journal entries, AFS-Reserve, and VaR (later in this module and risk management).
* Length: 1,909 spoken words + ~2.4 min of holds ≈ 15.1 min at 150 wpm (exact count verified by linter; max 23 words/line; 0 lines > 25 words; 0 spoken lesson codes; 0 exclamation marks).
* Cue sheet: S scene · N note · G glow · M map · C card · B board mark · H hold. Stable picture: the price–yield see-saw (amber price on the left, purple yield on the right — always moving opposite) and the yield curve hill.


---

## Warm-up

N001 · [warmly] Good to have you back at the desk. Keep your basic calculator ready, because today we step into the bond book.
> 0 C: rule-version card (as at 31 Dec 2026) · 1 S: notebook page; title "Bonds: The Family, Price and Yield"



N002 · Put your phone on silent. Let us start with two quick recall questions.
> 1 S: warm-up desk icon + 8-function calculator icon



N003 · From last class on payment systems: which central counterparty guarantees Government Securities settlement on a net basis?
> 1 S: recall card "Who guarantees G-Sec settlement?" · H: 3 s



N004 · CCIL acts as central counterparty, settling funds and securities net under Delivery versus Payment Three.
> 1 N: "CCIL = CCP, DvP-III (net funds & securities) ✓"



N005 · Reach back two classes to reserves: what percentage of NDTL must commercial banks hold as SLR today?
> 1 S: recall card "Current SLR % of NDTL?" · H: 3 s



N006 · 18% of NDTL, in cash, bullion, excess CRR, SDF balances, or unencumbered approved securities.
> 1 N: "SLR = 18% of NDTL ✓" [F14]



N007 · Bond pricing, yields, and curves appear repeatedly in exam cases and five-mark numericals across recent cycles.
> 1 C: exam-signal badge "Tested in recent cycles: bond pricing, yields, curves"



N008 · Today you will classify every treasury bond, price it on a basic calculator, and read its yield and curve.
> 1 N: goal bar "Family → Price → Yield → Curve"


## Opening Branch Moment

N009 · Picture Officer Ravi at Mumbai treasury of Deccan Commercial Bank, an illustrative desk, on an afternoon RBI raises policy rates.
> 1 S: trading desk screen (illustrative) showing G-Sec portfolio value turning red



N010 · His Government bond portfolio just lost market value, even though every bond still pays the exact same coupon.
> 2 G: "lost market value" · N: "Rates ↑ → Portfolio value ↓" [F26]



N011 · Pause three seconds. Some think value stays flat since coupons are fixed. Others say higher rates cut bond prices.
> 1 C: split card "A: Flat (fixed coupon) vs B: Price falls (rates rose)" · H: 3 s



N012 · Hold that thought. First we map the bond family, then price those cash flows ourselves.
> 1 S: price–yield see-saw silhouette (amber Price left, purple Yield right)


## Chapter 1 · The Bond Family, Varieties, SLR, and Categories

N013 · A bond is a tradable loan where the investor is a creditor, not an owner, earning interest and principal.
> 1 N: "Bond = tradable debt (creditor, not owner)" [F1]



N014 · Sovereign Government Securities, or G-Secs, carry virtually zero default risk and are called gilt-edged securities.
> 1 N: "G-Sec = sovereign, zero default risk (gilt-edged)" [F2]



N015 · The Centre issues short-term T-Bills and Cash Management Bills under one year, plus dated bonds from 5 to 40 years.
> 1 N: "Centre: T-Bills (91/182/364d), CMBs (<91d), Dated (5–40y)" [F2, F3, F4]



N016 · States issue only dated bonds, formerly State Development Loans and now officially named State Government Securities, or SGS.
> 1 N: "States: only dated — State Government Securities (SGS / old SDL)" [F2]



N017 · Holiday rule on dated G-Secs: if a coupon date is a holiday, payment shifts to the next working day.
> 1 N: "Coupon on holiday → NEXT working day" [F3]



N018 · If the maturity date is a holiday, redemption proceeds are paid on the previous working day.
> 1 N: "Maturity on holiday → PREVIOUS working day" [F3]



N019 · Let us put all seven bond varieties on one card so you spot any structure instantly.
> 1 S: 7-item Bond Varieties Card



N020 · First, fixed-rate bonds pay a constant coupon; second, floating-rate bonds reset to a T-Bill benchmark plus a fixed spread.
> 1 N: "1. Fixed-rate · 2. Floating-rate (FRB = benchmark + spread)" [F5]



N021 · Third, zero-coupon bonds pay no periodic interest; issued at a discount, redeemed at par, removing reinvestment risk.
> 1 N: "3. Zero-coupon (ZCB): discount → par, zero reinvestment risk" [F6]



N022 · Bank rule: commercial banks cannot buy long-term corporate zero-coupon bonds unless the issuer maintains a liquid sinking fund.
> 1 C: rule note "No long-term corporate ZCBs unless liquid sinking fund" [F6]



N023 · Fourth, STRIPS means Separate Trading of Registered Interest and Principal of Securities: coupons and principal split into zero-coupon G-Secs.
> 1 N: "4. STRIPS: coupons + principal split into sovereign ZCBs" [F7]



N024 · Many of you think STRIPS cover only Central G-Secs. That rule expanded on 12 June 2025.
> 1 C: trap card "Old: Central G-Secs only vs New (12 Jun 2025): Central + eligible SGS" [F8]



N025 · All transferable SLR Central G-Secs qualify, plus fixed-coupon State Government Securities up to 14 years residual maturity with ₹1,000 crore outstanding.
> 1 N: "STRIPS: Centre (any tenor) + SGS (≤14y, ≥₹1,000 cr)" [F8]



N026 · Fifth, callable bonds let the issuer redeem early when rates fall; putable bonds let the investor exit when rates rise.
> 1 N: "5. Callable (issuer right, caps upside) · Putable (investor floor)" [F9]



N027 · Embedded options directly change price, and for listed corporate debt SEBI bars exercising call or put before one year.
> 1 N: "Listed corp debt: 1-yr lock-in, 21-day notice" [F9, F10]



N028 · Sixth, step-up bonds raise coupons on set triggers; seventh, convertible debentures turn debt into equity, lowering issuer debt.
> 1 N: "6. Step-up/down · 7. Convertible (FCD/PCD/OCD → equity)" [F11, F12]



N029 · Separate SLR from non-SLR. Approved SLR securities are unencumbered Central dated G-Secs, T-Bills, CMBs, State Government Securities, and STRIPS.
> 1 N: "SLR securities: GoI dated, T-Bills, CMBs, SGS, STRIPS" [F7, F14]



N030 · Corporate bonds, debentures, and Government special securities like oil, fertiliser, or recapitalisation bonds are strictly non-SLR.
> 1 B: strike "Corporate / Special bonds = SLR" → "Non-SLR only" [F13, F15]



N031 · Banks do not hold G-Secs only for SLR compliance; desks also trade them actively for coupon and capital gains.
> 1 N: "G-Secs = SLR compliance + trading & liquidity income" [F16]



N032 · Quick auction recall: RBI issues G-Secs on e-Kuber via yield-based new auctions or price-based re-issues, uniform or multiple price.
> 1 N: "e-Kuber: yield (new), price (re-issue), 5% NCB (10% SGS)" [F17]



N033 · Banks must hold all securities — G-Secs or corporate debt, listed or privately placed — strictly in dematerialised form.
> 1 N: "Mandatory demat-only holding (SGL / CSGL / NSDL / CDSL)" [F18]



N034 · Now break a major trap. Outdated books still teach three equal buckets: HTM, AFS, and HFT.
> 1 C: trap card "OLD: HTM / AFS / HFT vs NEW: HTM / AFS / FVTPL (HFT inside)" [F20]



N035 · Under RBI's consolidated 2025 directions, the three categories are HTM, AFS, and FVTPL, with HFT inside FVTPL.
> 1 N: "Current: HTM · AFS · FVTPL (HFT = sub-category)" [F20]



N036 · Classification follows business objective and the SPPI cash-flow test, not SLR status; convertibles fail SPPI and sit in FVTPL.
> 1 N: "Driven by objective + SPPI (not SLR); convertibles → FVTPL" [F12, F21]



N037 · One 2026 update: RBI discontinued the Investment Fluctuation Reserve on 18 May 2026, so never treat IFR as current.
> 1 B: strike "2% IFR" · N: "IFR discontinued w.e.f. 18 May 2026" [F23]



N038 · Chapter One pause check. First: do corporate bonds ever count toward a bank's SLR?
> 1 S: pause check card (Q1) · H: 3 s



N039 · Second: can a bank hold privately placed corporate debentures in physical certificate form?
> 1 S: pause check card (Q2) · H: 3 s



N040 · Third, the twist: can a fixed-coupon State Government Security with 10 years left and ₹2,000 crore outstanding be stripped today?
> 1 S: pause check card (Q3) · H: 4 s



N041 · Answers: one, no, corporate bonds are non-SLR; two, no, banks must hold all investments in demat form only.
> 1 N: "1. No (non-SLR) · 2. No (demat-only)" [F15, F18]



N042 · Three: yes, since 12 June 2025, eligible fixed-coupon SGS up to 14 years and ₹1,000 crore qualify for STRIPS.
> 1 N: "3. Yes (SGS ≤14y, ≥₹1,000 cr eligible since 12 Jun 2025)" [F8]



N043 · One thing to remember: classify by objective and SPPI under HTM, AFS, or FVTPL, and hold every security dematerialised.
> 1 M: Mind Map C (6 o'clock) → "Bonds → Varieties" [F18, F20, F21]


## Chapter 2 · Bond Price: Present Value of Cash Flows

N044 · Recall from Chapter One: why can a convertible bond never sit in HTM or AFS?
> 1 S: recall card "Why can't convertibles sit in HTM/AFS?" · H: 3 s



N045 · Equity conversion fails the Solely Payments of Principal and Interest test, placing it in FVTPL.
> 1 N: "Convertibles fail SPPI → FVTPL ✓" [F12, F21]



N046 · Now we solve Ravi's puzzle. A bond's fair price equals the present value of all future cash flows discounted at YTM.
> 1 N: "Price = Sum of PV of coupons + PV of face value (at YTM)" [F24]



N047 · Quick JAIIB refresher: to discount without a power key, divide repeatedly by one plus the rate.
> 1 S: 8-function calculator diagram "÷ (1 + r) once per period" [F24]



N048 · Write this down: when yields rise, the denominator grows, every cash flow shrinks, and the bond price falls.
> 1 G: "bond price falls" · S: see-saw tilts (purple Yield ↑, amber Price ↓) [F26]



N049 · That explains Ravi's screen: his coupon stayed fixed, while RBI's hike raised the discount rate and lowered bond prices.
> 1 N: "Ravi's answer: fixed coupon discounted at higher yield = lower price ✓" [F26]



N050 · First full numerical: illustrative 3-year annual bond, face value ₹1,000, coupon 8%, YTM 9%.
> 1 S: Sum 1 data card "FV ₹1,000 · C 8% (₹80) · n = 3 · YTM 9%" [F24]



N051 · YTM 9% exceeds the 8% coupon, so you already know the price sits below ₹1,000.
> 1 N: "YTM (9%) > Coupon (8%) → Discount bond (< ₹1,000)" [F26]



N052 · Year one: press 80 ÷ 1.09 = to get ₹73.3945.
> 1 N: "Y1: 80 ÷ 1.09 = ₹73.3945" [F24]



N053 · Year two: press 80 ÷ 1.09 ÷ 1.09 = to get ₹67.3344.
> 1 N: "Y2: 80 ÷ 1.09 ÷ 1.09 = ₹67.3344" [F24]



N054 · Year three pays ₹1,080. Divide by 1.09 three times to get ₹833.9582.
> 1 N: "Y3: 1080 ÷ 1.09 ÷ 1.09 ÷ 1.09 = ₹833.9582" [F24]



N055 · Add all three present values: 73.3945 + 67.3344 + 833.9582 = ₹974.69.
> 1 B: box "₹974.69" [F24]



N056 · Our discount-factor cross-check in your workbook matches ₹974.6871 to four decimals.
> 1 N: "PVAF cross-check = ₹974.6871 ✓" [F24]



N057 · Now the classic exam trap: Indian dated G-Secs pay coupons half-yearly, not annually.
> 1 C: trap card "Semi-annual rule: C ÷ 2 · YTM ÷ 2 · n × 2" [F3, F25]



N058 · Illustrative 2-year G-Sec: face value ₹100, 7% annual coupon paid half-yearly, 8% annual YTM.
> 1 S: Sum 2 data card "FV ₹100 · C 7% → ₹3.50 · YTM 8% → 4% · 2y → 4 periods" [F25]



N059 · Halve coupon to ₹3.50, halve yield to 4%, and double two years into four half-yearly periods.
> 1 N: "Half-yr C = ₹3.50 · r = 0.04 (1.04) · periods = 4" [F25]



N060 · Divide 3.50 by 1.04 once, twice, and thrice: ₹3.3654, ₹3.2359, and ₹3.1115.
> 1 N: "P1 ₹3.3654 · P2 ₹3.2359 · P3 ₹3.1115" [F25]



N061 · Period four pays ₹103.50. Divide by 1.04 four times: ₹88.4722.
> 1 N: "P4: 103.5 ÷ 1.04⁴ = ₹88.4722" [F25]



N062 · Total price is ₹98.19. Forgetting to halve gives ₹98.22 — the commonest wrong answer.
> 1 B: box "₹98.19" · C: error note "Wrong (annual): ₹98.22" [F25]



N063 · Your turn for 15 seconds: price a 1-year semi-annual bond, ₹100 par, 8% coupon, 10% YTM.
> 1 S: Your Turn card "FV ₹100 · C 8% (₹4/half-yr) · YTM 10% (5%/half-yr) · 2 periods" · H: 15 s



N064 · Period one: 4 ÷ 1.05 = ₹3.8095. Period two: 104 ÷ 1.05 ÷ 1.05 = ₹94.3311.
> 1 N: "P1 ₹3.8095 + P2 ₹94.3311 = ₹98.1406" [F25]



N065 · Sum and round: ₹98.14. If you matched that, your calculator rhythm is solid.
> 1 B: box "₹98.14 ✓" [F25]



N066 · Chapter Two pause check. First: if market yield equals coupon rate, does the bond trade at discount, par, or premium?
> 1 S: pause check card (Q1) · H: 3 s



N067 · Second: for a 5-year semi-annual bond yielding 9%, what periodic rate and period count do you use?
> 1 S: pause check card (Q2) · H: 4 s



N068 · Answers: one, par, since yield equals coupon; two, 4.5% across 10 half-yearly periods.
> 1 N: "1. Par · 2. 4.5% for 10 periods" [F25, F26]



N069 · One thing to remember: price and yield sit on a see-saw, and semi-annual means halve rates, double periods.
> 1 M: Mind Map C (6 o'clock) → "Bonds → Price" [F25, F26]


## Chapter 3 · Yields, Accrued Interest, Clean vs Dirty Price, and Spreads

N070 · Recall from Chapter Two: for a premium bond, is YTM higher or lower than its coupon?
> 1 S: recall card "Premium bond: YTM vs Coupon?" · H: 3 s



N071 · Lower, because paying above par creates a redemption loss that pulls total return below coupon.
> 1 N: "Premium → YTM < Current Yield < Coupon ✓" [F26, F28]



N072 · Many officers equate coupon with yield. Let us separate all three yield measures cleanly.
> 1 S: Three Yields Card (Coupon · Current · YTM) [F27, F28]



N073 · Coupon yield is coupon over face value; current yield is coupon over market price, ignoring capital gain or loss.
> 1 N: "Coupon = C / FV · Current Yield = C / Market Price" [F27]



N074 · Yield to Maturity, or YTM, is the bond's internal rate of return if held to maturity, reinvesting coupons at YTM.
> 1 N: "YTM = IRR (coupon + capital gain/loss + reinvestment)" [F28]



N075 · On a basic calculator, use the YTM approximation: coupon plus annual capital gain, divided by average price.
> 1 N: "YTM approx = [C + (FV − P) ÷ n] ÷ [(FV + P) ÷ 2]" [F28]



N076 · Illustrative 4-year bond: face value ₹1,000, coupon ₹84 (8.40%), trading at ₹960.
> 1 S: Sum 4 data card "FV ₹1,000 · C ₹84 (8.40%) · P ₹960 · n = 4" [F27, F28]



N077 · Current yield: press 84 ÷ 960 × 100 = 8.75%.
> 1 N: "Current Yield: 84 ÷ 960 × 100 = 8.75%" [F27]



N078 · YTM approximation: annual gain is 40 ÷ 4 = ₹10; add ₹84 to get ₹94.
> 1 N: "Numerator: 84 + (1000 − 960) ÷ 4 = 94" [F28]



N079 · Average price is ₹980. Press 94 ÷ 980 × 100 = 9.59%.
> 1 B: box "YTM approx = 9.59%" · N: "Order: 8.40% < 8.75% < 9.59% ✓" [F28]



N080 · Now step to secondary trading between coupon dates. The quoted screen price is the clean price.
> 1 N: "Clean Price = quoted price (excludes accrued interest)" [F29]



N081 · Since the seller held the bond after the last coupon, the buyer adds accrued, or broken-period, interest.
> 1 N: "Dirty Price = Clean Price + Accrued Interest" [F29]



N082 · Clean price plus accrued interest equals dirty price, which sets the actual cash consideration settled.
> 1 G: "dirty price" · N: "Consideration = FV × (Dirty Price ÷ 100)" [F29]



N083 · Watch the day-count trap: Indian dated G-Secs use 30/360, treating every month as 30 days.
> 1 C: Day-Count Card "G-Secs: 30/360 · T-Bills: Actual/365 · Listed Corp Bonds: Actual/Actual" [F30]



N084 · By contrast, T-Bills use Actual/365, and listed corporate bonds under SEBI rules use Actual/Actual.
> 1 G: "Actual/Actual" [F30]



N085 · Illustrative ₹5 crore trade in 7.20% GS 2033 at clean price ₹101.40, 70 days accrued under 30/360.
> 1 S: Sum 5 data card "FV ₹5 cr · 7.20% · Clean ₹101.40 · 70 days (30/360)" [F29, F30]



N086 · Accrued interest per ₹100: 7.20 × 70 ÷ 360 = ₹1.4000.
> 1 N: "AI = 7.20 × 70 ÷ 360 = ₹1.4000" [F29, F30]



N087 · Add ₹1.40 to clean price ₹101.40: dirty price is ₹102.80.
> 1 N: "Dirty Price = 101.40 + 1.40 = ₹102.8000" [F29]



N088 · Multiply ₹5 crore by 102.80 ÷ 100: total consideration is ₹5,14,00,000.
> 1 B: box "₹5,14,00,000 (₹5.07 cr clean + ₹7 lakh AI)" [F29]



N089 · RBI accounting rule: charge that ₹7 lakh broken-period interest to Profit and Loss, never capitalise it into cost.
> 1 C: accounting rule "Broken-period interest paid → P&L expense (never capitalised)" [F31]



N090 · Corporate bonds yield more than equivalent G-Secs; that extra gap is the credit spread for default and liquidity risk.
> 1 N: "Credit Spread = Corporate Yield − Equivalent G-Sec Yield" [F32]



N091 · Unquoted rated corporate bonds require at least a 50 basis-point mark-up over FBIL's G-Sec yield; we detail credit risk later.
> 1 N: "Unquoted rated corp bond: ≥ 50 bps spread over FBIL G-Sec YTM" [F32]



N092 · Chapter Three pause check. First: which price is quoted on NDS-OM — clean or dirty?
> 1 S: pause check card (Q1) · H: 3 s



N093 · Second: which day-count convention applies to accrued interest on an Indian dated G-Sec?
> 1 S: pause check card (Q2) · H: 3 s



N094 · Third, the twist: should a bank capitalise broken-period interest paid into the bond's purchase cost?
> 1 S: pause check card (Q3) · H: 4 s



N095 · Answers: one, clean price; two, 30/360; three, no, RBI mandates expensing broken-period interest to Profit and Loss.
> 1 N: "1. Clean · 2. 30/360 · 3. No (expense to P&L)" [F29, F30, F31]



N096 · One thing to remember: quote clean, settle dirty on 30/360 for G-Secs, and expense broken-period interest.
> 1 M: Mind Map C (6 o'clock) → "Bonds → Yield (CY, YTM, Clean/Dirty, Spread)" [F29, F30, F31]


## Chapter 4 · Yield Curve Shapes and Bond Risks

N097 · Recall from Chapter Three: what is the extra yield on a corporate bond over an equivalent G-Sec called?
> 1 S: recall card "Corporate yield minus G-Sec yield = ?" · H: 3 s



N098 · Credit spread, or quality spread, which widens as credit quality weakens.
> 1 N: "Credit spread (quality spread) ✓" [F32]



N099 · Plot yields across maturities for identical credit quality, like G-Secs from 1 to 30 years: that is the yield curve.
> 1 S: yield curve axes (X: Maturity, Y: Yield) [F33]



N100 · Three shapes: a normal curve slopes upward because investors demand higher yields for longer maturities.
> 1 S: upward curve "Normal / Positive (Long > Short)" [F33]



N101 · A flat curve shows similar yields across tenors; an inverted curve slopes downward, with short yields above long yields.
> 1 S: flat line + downward curve "Flat · Inverted (Short > Long)" [F33]



N102 · Desks also build a Zero Coupon Yield Curve from STRIPS and bootstrapping, avoiding YTM's constant-reinvestment assumption.
> 1 N: "ZCYC (Spot Curve): zero-coupon yields, no constant-reinvestment assumption" [F7, F33]



N103 · Even default-free G-Secs carry three risks: interest-rate risk, reinvestment risk on coupons, and liquidity risk in thin papers.
> 1 N: "G-Sec risks: Interest-rate · Reinvestment · Liquidity" [F34]



N104 · Corporate bonds add credit risk, while callable bonds add call risk when falling rates trigger early redemption.
> 1 N: "Corp adds Credit risk · Callable adds Call risk" [F9, F34]



N105 · Chapter Four pause check. First: on an inverted yield curve, are 10-year yields higher or lower than 1-year yields?
> 1 S: pause check card (Q1) · H: 3 s



N106 · Second: which sovereign bond variety eliminates reinvestment risk completely?
> 1 S: pause check card (Q2) · H: 3 s



N107 · Answers: one, lower, because an inverted curve slopes downward; two, zero-coupon bonds or STRIPS, having no interim coupons.
> 1 N: "1. Lower · 2. Zero-coupon / STRIPS ✓" [F6, F7, F33, F34]



N108 · One thing to remember: sovereign bonds still carry rate, reinvestment, and liquidity risk, and the curve maps rates across time.
> 1 M: Mind Map C (6 o'clock) → "Bonds → Yield Curve & Risks" [F33, F34]


## Close

N109 · Mixed final check: a discount G-Sec has a 7% coupon. Is YTM above or below 7%, and which day count applies?
> 1 S: mixed check card · H: 4 s



N110 · Above 7% for a discount bond, and 30/360 for G-Sec accrued interest.
> 1 N: "YTM > 7% · Day count 30/360 ✓" [F26, F28, F30]



N111 · Look at the blank six o'clock branch of our trading-desk map. Fill all three nodes: varieties, price, and yield.
> 1 M: blank 6 o'clock branch of Mind Map C · H: 5 s



N112 · Compare with the completed branch: varieties, demat, new categories; PV pricing and semi-annual halving; yields, dirty price, spreads, and curve shapes.
> 1 M: completed 6 o'clock branch (Bonds: Varieties, Price, Yield) [F1–F34]



N113 · You can now classify any treasury bond, price cash flows on a basic calculator, and compute current yield, YTM, and dirty price.
> 1 C: "You can now" card (C2.3 complete; C5.3 groundwork complete)



N114 · Tonight's homework: draw the three curve shapes and re-run our 2-year semi-annual sum on your calculator without looking.
> 1 N: "Homework: 3 curve shapes + 2-yr semi-annual sum"



N115 · Question for next class: two bonds share the same price, and rates rise 1%. Which hurts more, and by how much?
> 1 S: preview card "Same price, rates +1% → Which bond falls more?"



N116 · [warmly] That is our bond desk built from coupon to curve. Rest your eyes tonight, and I will meet you in the next class.
> 1 S: closing notebook card · H: 2 s
