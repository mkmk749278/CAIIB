# C06 · "Duration, modified duration, and BPV" · CLASS EDITION (script c1, with cue sheet)
* Status: **c1 GEMINI DRAFT, gate PASS, full review pending** (owner, 2026-11-24: "save as drafts, check later"). Not locked: do not voice until reviewed.
* Plan: course/bfm/C/plans_C.md §C06 (C5.3 duration part; 4 chapters: Macaulay duration as balance point, Modified duration & % price change, BPV/PV01, Portfolio duration & 5-question case; v3 addition: RBI/2026-27/294 PV01 cap removal trap). Course order v4: C05 → C06 → C07.
* Syllabus: C5.3 Risk measures: VaR and duration (duration, modified duration, BPV/PV01, portfolio duration; VaR part is in B09).
* Facts: C06_fact_sheet, rows cited as [F1]–[F26]. Sums: C06_numericals (dual-verified in Python, IIBF 8-function calculator ready). Practice: C06_practice.
* Rule version (opening card): "RBI G-Sec Primer (Apr 2020) · RBI Commercial Banks – Miscellaneous (Second Amendment) Directions, 2026 (RBI/2026-27/294, 19 Oct 2026) · RBI Investment Portfolio Directions, 2023 (updated Apr 2025) · RBI IRRBB Guidelines (Feb 2023) · RBI Minimum Capital Requirements for Market Risk Directions, 2026 (issued 21 Sep 2026, effective 1 Apr 2027 — issued, coming) · BIS SRP98 (Jan 2026) · as at 31 December 2026".
* Greeting / goodbye (new, checked against greetings.md): greeting "Hello everyone, glad you could make it tonight. Keep your calculator close; today we measure how hard a rate move hits."; goodbye "That brings our bond risk toolkit together. Step away from the screen for a bit, and I'll see you in the next class."
* Story: Treasury dealer Ananya at a mid-sized bank in Chennai (all names, rates, and amounts illustrative). Two three-year ₹100 bonds sit on her screen: Bond A pays an 8% annual coupon; Bond B is a three-year zero-coupon bond. Market yields jump by 1%. Which bond falls more, and by how much? In Chapter 4 she manages a ₹10 crore G-sec desk across three bonds (X, Y, Z).
* Holds: questions at least 3 s; one-step sums 8 s; "your turn" 15 s; map 3–5 s per node.
* Say it right: "Macaulay" as "muh-KAW-lee"; "M-D" for Modified Duration; "B-P-V" for Basis Point Value; "P-V-zero-one" for PV01; "G-sec" for Government Security; "Y-T-M" for Yield to Maturity; "bips" or "basis points" for bps; "S-T-R-I-P-S" as "strips".
* Not in this video: VaR methods and scaling (B09); treasury stop-loss limits, horizontal/vertical disallowance sums, and investment classification rules (C07); full balance-sheet Duration Gap Analysis (D06/D06b); derivatives hedging and full rupee derivative rules (C08/C09b).
* Length: 1,982 spoken words + ~2.5 min of holds ≈ 14.2 min at 150 wpm, 15.0 min at 140 wpm. Chapters: warm-up (~1.3 min) · 1 Macaulay duration (~3.3 min) · 2 Modified duration & % price change (~3.5 min) · 3 BPV / PV01 (~2.9 min) · 4 Portfolio duration & case (~3.5 min) · close (~1.4 min).
* Cue sheet: S scene · N note · G glow · M map · C card · B board mark · H hold. Picture: the price-yield see-saw with a moving pivot (duration = where the pivot sits); weighted cash-flow blocks on a timeline.


---

## Warm-up

N001 · [warmly] Hello everyone, glad you could make it tonight. Keep your calculator close; today we measure how hard a rate move hits.
> 0 C: rule-version card · 1 S: notebook page; title "Duration, modified duration, and BPV"


N002 · Put your phone on silent, grab a pen, and let's clear last class's homework first.
> 1 S: previous-class homework card "Clean price ₹101.20 · Accrued interest ₹1.80 · Dirty price?" · H: 8 s


N003 · One hundred and three rupees. Clean price plus accrued interest gives dirty price: one-zero-one point two zero plus one point eight zero.
> 1 S: keys "101.20 + 1.80 = 103.00" · 2 N: "Dirty price = ₹103.00 ✓"


N004 · Quick reach back a few classes. What day-count convention do Indian dated G-secs use, versus Treasury Bills?
> 1 S: two blank boxes "G-secs: ?" and "T-Bills: ?" · H: 3 s


N005 · Thirty by three-sixty for dated G-secs, and actual by three-sixty-five for Treasury Bills and money market instruments.
> 1 N: "G-secs: 30/360 · T-Bills: Actual/365 ✓" [F24]


N006 · Good start. Duration and B-P-V appeared in six of the last seven exam cycles, with twenty-seven mentions including full case studies.
> 1 C: exam-signal card "Market risk duration & BPV: seen 6/7 cycles, 27 mentions"


N007 · By the end of this class, you'll compute Macaulay duration, modified duration, B-P-V, and portfolio price impact on your basic calculator.
> 1 N: goal line "Goal: D → MD → %ΔP → BPV → Portfolio"


N008 · Meet Ananya, a treasury dealer in Chennai. All names and numbers today are illustrative. Two three-year bonds sit on her screen.
> 1 S: treasury desk screen; label "Ananya · Chennai · illustrative"


N009 · Bond A pays an eight per cent annual coupon. Bond B is a zero-coupon bond. Both yield eight per cent.
> 1 C: two cards "Bond A: 3-yr, 8% coupon, YTM 8%" · "Bond B: 3-yr, 0% coupon, YTM 8%"


N010 · Suddenly, market yields jump by one full percentage point. Some of you think both fall equally because both mature in three years.
> 1 S: see-saw tilts sharply; two buttons "Both fall equally" · "Bond B falls more" · H: 3 s


N011 · Others think the zero-coupon bond hurts more. Hold your pick; let's build the exact tool that settles this.
> 1 B: box around the two buttons; keep visible in corner

## Chapter 1 · Macaulay duration as a balance point

N012 · Chapter one: Macaulay duration. Imagine a plank resting on a pivot, holding cash-flow blocks along a three-year timeline.
> 1 S: chapter title "1 · Macaulay duration" · 2 S: timeline plank Years 1, 2, 3 with pivot underneath


N013 · Macaulay duration is the present-value-weighted average time, in years, taken to recover a bond's purchase price.
> 1 C: names-first card "Macaulay Duration (D): PV-weighted payback time in years" [F1, F2] · 2 B: underline "in years"


N014 · Say that again cleanly: duration is a balance point in years, not a percentage and not a rupee amount.
> 1 N: "D = balance point (years)" [F1] · 2 G: glow on "years"


N015 · Many of you assume maturity and duration are the same thing. Let's test that on Bond A and Bond B.
> 1 S: Bond A (blocks at Yr 1, Yr 2, Yr 3) beside Bond B (single block at Yr 3)


N016 · Bond B pays nothing until year three. All its present value sits at year three, so its balance point is three years.
> 1 N: "Zero-coupon bond: D = Maturity = 3.0000 yrs" [F4]


N017 · Remember this rule: duration is always less than or equal to maturity, and equals maturity only for a zero-coupon bond.
> 1 C: rule card "D ≤ Maturity · D = Maturity ONLY for zero-coupon (incl. STRIPS)" [F4, F25]


N018 · What about a higher coupon? Does a higher coupon make duration longer or shorter, if maturity stays the same?
> 1 S: question card "Higher coupon → D longer or shorter?" · H: 3 s


N019 · Shorter. Higher coupons send more cash back earlier, pulling the balance point toward today.
> 1 N: "Higher coupon → shorter D" [F5] · 2 S: pivot slides left on the plank


N020 · Now let's compute Bond A's exact Macaulay duration by the table method. Face value one hundred, eight per cent coupon, eight per cent yield.
> 1 SS: 4-column table "Year | Cash Flow | PV at 8% | t × PV" · 2 N: "Bond A: FV ₹100, c = 8%, y = 8%, Price = ₹100"

N021 · On the exam calculator, we have no power key. So we divide repeatedly by one point zero eight.
> 1 S: calculator keypad showing "÷ 1.08"


N022 · Year one cash flow is eight rupees. Press eight divided by one point zero eight: seven point four zero seven four.
> 1 S: keys "8 ÷ 1.08 = 7.4074" · 2 N: row 1 "1 | 8 | 7.4074 | 7.4074"


N023 · Year two is eight rupees again. Divide by one point zero eight twice: six point eight five eight seven.
> 1 S: keys "8 ÷ 1.08 ÷ 1.08 = 6.8587" · 2 N: row 2 PV "6.8587"


N023a · Multiply six point eight five eight seven by two: thirteen point seven one seven four.
> 1 S: keys "6.8587 × 2 = 13.7174" · 2 N: row 2 t×PV "13.7174"


N024 · Year three pays coupon plus principal: one hundred and eight. Divide by one point zero eight three times: eighty-five point seven three three nine.
> 1 S: keys "108 ÷ 1.08 ÷ 1.08 ÷ 1.08 = 85.7339" · 2 N: row 3 PV "85.7339"


N025 · Multiply eighty-five point seven three three nine by three: two hundred and fifty-seven point two zero one six.
> 1 S: keys "85.7339 × 3 = 257.2016" · 2 N: row 3 t×PV "257.2016"


N026 · Sum the present values: exactly one hundred. Sum the weighted column: two seventy-eight point three two six five. Divide by one hundred.
> 1 S: keys "278.3265 ÷ 100 = 2.7833" · 2 N: "D = 2.7833 years" [F2] · 3 M: map node "Macaulay duration"


N027 · Notice how Bond A's coupons pulled its pivot from three years down to two point seven eight three three years.
> 1 S: pivot at 2.7833 on Bond A plank vs 3.0000 on Bond B plank


N028 · One caution on Indian G-secs: they pay half-yearly. If you count half-year periods, divide the final period duration by two for years.
> 1 N: "Semi-annual table: divide period duration by 2 → years" [F3, F23]


N029 · Pause check for chapter one. Two quick questions, no options. First: a five-year zero-coupon STRIP has what Macaulay duration?
> 1 S: pause card "Ch 1 Check · Q1: 5-yr zero-coupon STRIP → D = ?" · H: 3 s


N030 · Five years, because a zero-coupon bond has only one cash flow at maturity.
> 1 N: "Q1: 5 years ✓" [F4, F25]


N030a · Second: between two five-year bonds paying six per cent and nine per cent coupons, which has longer duration?
> 1 S: "Q2: 5-yr 6% vs 5-yr 9% → longer D?" · H: 3 s


N031 · The six per cent bond, because a lower coupon pays less cash early and pushes the balance point further out.
> 1 N: "Q2: 6% bond ✓" [F5]


N032 · One thing to remember from chapter one: Macaulay duration is the PV-weighted balance point in years, always at or below maturity.
> 1 C: summary strip "Ch 1: D = PV-weighted years ≤ Maturity"

## Chapter 2 · Modified duration and percentage price change

N033 · Chapter two: turning duration into a price-change machine. First, recall: what was Bond A's Macaulay duration from chapter one?
> 1 S: chapter title "2 · Modified duration & % price change" · 2 S: blank recall box "Bond A D = ?" · H: 3 s


N034 · Two point seven eight three three years. Now, many of you think we multiply Macaulay duration directly by the yield change.
> 1 N: "Bond A D = 2.7833 yrs ✓" · 2 C: misconception card "Wrong: %ΔP = −D × Δy"


N035 · Not quite. We first divide by one plus the periodic yield to get Modified Duration, written M-D.
> 1 C: names-first card "Modified Duration: MD = D ÷ (1 + y/n)" [F6, F7] · 2 B: circle "y/n"


N036 · Modified duration measures the approximate percentage change in a bond's price for a one hundred basis point, or one per cent, shift in yield.
> 1 N: "MD ≈ % price change per 1% (100 bps) yield move" [F6, F9]


N037 · Because bond price and yield sit on opposite ends of a see-saw, percentage price change equals minus M-D times the yield change.
> 1 S: see-saw diagram; formula "%ΔP ≈ −MD × Δy" [F8] · 2 B: box around minus sign


N038 · Let's solve Bond A in full. Annual coupon means n equals one. Press two point seven eight three three divided by one point zero eight.
> 1 S: keys "2.7833 ÷ 1.08 = 2.5771" · 2 N: "Bond A MD = 2.5771" [F7]


N039 · If yield rises one per cent, Bond A falls about two point five eight per cent, to ninety-seven rupees forty-two paise.
> 1 S: keys "100 − 2.5771 = 97.42" · 2 N: "+100 bps → −2.5771% (≈ ₹97.42)" [F8]


N040 · What about Bond B, the zero-coupon bond? Three divided by one point zero eight gives M-D of two point seven seven seven eight.
> 1 S: keys "3 ÷ 1.08 = 2.7778" · 2 N: "Bond B MD = 2.7778 → −2.7778%" · 3 G: glow on "Bond B falls more"


N041 · Remember my opening question? Bond B hurts more, losing two point seven eight per cent against Bond A's two point five eight per cent.
> 1 N: "Opening settled: Bond B hurts more ✓"


N042 · Now for the exam's favourite trap: semi-annual Indian G-secs. Write this down: for half-yearly coupons, divide yield by two inside the bracket.
> 1 C: trap card "Wrong: D ÷ (1 + y) | Right: D ÷ (1 + y/2)" [F7, F23]


N043 · Let's do a faded sum together. A semi-annual G-sec has Macaulay duration four point two zero years and seven per cent Y-T-M.
> 1 S: data card "Semi-annual G-sec · D = 4.20 yrs · YTM = 7.00% · Yield rises 40 bps"


N044 · First, what is one plus y by two? Half of seven per cent is three point five per cent, so one point zero three five.
> 1 S: keys "0.07 ÷ 2 = 0.035 → 1.035" · 2 N: "1 + y/2 = 1.035"


N045 · Now press four point two divided by one point zero three five on your calculator. Take eight seconds.
> 1 S: keys "4.2 ÷ 1.035 = ?" · H: 8 s


N046 · Four point zero five eight zero. Watch the trap: dividing by one point zero seven gives three point nine two five two, wrong.
> 1 S: keys "4.2 ÷ 1.035 = 4.0580" · 2 N: "MD = 4.0580 ✓ (not 3.9252)" [F7] · 3 M: map node "Modified duration"


N047 · Now yield rises forty basis points, or zero point four zero per cent. Multiply four point zero five eight zero by zero point four zero.
> 1 S: keys "4.0580 × 0.40 = 1.6232" · 2 N: "%ΔP = −1.6232% (price falls)" [F8]


N048 · One quick reality check on our see-saw analogy: the real price-yield line is curved, not straight. That curve is called convexity.
> 1 C: card "Convexity: price-yield is curved, not straight" [F10, F11]


N049 · Modified duration works cleanly only for small, parallel yield shifts. On large shifts for option-free bonds, actual price drops are slightly smaller than duration predicts.
> 1 N: "Small parallel shifts only; convexity softens large drops" [F10, F11]


N050 · Pause check for chapter two. First: M-D is five, yield falls fifty basis points. Does price rise or fall, and by how much?
> 1 S: pause card "Ch 2 Check · Q1: MD = 5, Δy = −50 bps → %ΔP?" · H: 5 s


N051 · Price rises by two point five per cent: minus five times minus zero point five equals plus two point five.
> 1 N: "Q1: +2.50% (price rises) ✓" [F8]


N052 · Second: for a semi-annual bond yielding eight per cent, what number goes in the denominator of modified duration?
> 1 S: "Q2: semi-annual, YTM 8% → denominator?" · H: 3 s


N053 · One point zero four, since half of eight per cent is four per cent.
> 1 N: "Q2: 1.04 ✓" [F7]


N053a · One thing to remember: always match the modified duration denominator to coupon frequency.
> 1 C: summary strip "Ch 2: MD = D ÷ (1 + y/n); %ΔP ≈ −MD × Δy"

## Chapter 3 · BPV and PV01

N054 · Chapter three: from percentages to real rupees. Quick recall: modified duration tells you the percentage price change for how many basis points?
> 1 S: chapter title "3 · BPV / PV01" · 2 S: blank recall box "MD = % change per ? bps" · H: 3 s


N055 · One hundred basis points, or one per cent. On a trading desk, though, Ananya doesn't lose percentages; she loses rupees.
> 1 N: "100 bps = 1% ✓" [F6]


N056 · So desks use B-P-V, Basis Point Value, also called P-V-zero-one: the rupee change in value for a one basis point yield move.
> 1 C: names-first card "BPV / PV01: rupee value change for 1 bps (0.01%) yield move" [F12, F13]


N057 · Since one basis point is one hundredth of one per cent, B-P-V equals market value times M-D times zero point zero zero zero one.
> 1 N: "BPV = Market Value × MD × 0.0001" [F14] · 2 B: underline "0.0001"


N058 · Here is a handy desk shortcut: for every one crore of market value, B-P-V is simply one thousand rupees times M-D.
> 1 N: "Per ₹1 crore: BPV = ₹1,000 × MD" [F14]


N059 · Your turn on the calculator. Ananya holds one crore market value of a bond with M-D four point five zero.
> 1 S: your-turn card "MV = ₹1 crore · MD = 4.50"


N059a · Find its B-P-V and the rupee loss if yields rise twenty-five basis points. Take fifteen seconds.
> 1 S: add "Δy = +25 bps · Find BPV & loss" · H: 15 s


N060 · Let's check. One crore times four point five times zero point zero zero zero one gives four thousand five hundred rupees per basis point.
> 1 S: keys "10000000 × 4.5 × 0.0001 = 4500" · 2 N: "BPV = ₹4,500.00 ✓" [F14]


N061 · Multiply four thousand five hundred by twenty-five basis points: one lakh twelve thousand five hundred rupees lost.
> 1 S: keys "4500 × 25 = 112500" · 2 N: "Loss (+25 bps) = ₹1,12,500.00 ✓" [F14] · 3 M: map node "BPV / PV01"


N062 · Watch the commonest slip: forgetting one zero and multiplying by zero point zero zero one, which makes your answer ten times too big.
> 1 C: error-analysis note "0.0001 = 0.01% (1 bps), not 0.001 (10 bps)" [F12]


N063 · Now, a key twenty twenty-six rule update that older notes miss.
> 1 C: trap card header "Rule update · 19 Oct 2026"


N063a · Many of you read that R-B-I caps gross P-V-zero-one at zero point two five per cent of net worth.
> 1 C: trap card "OLD: 0.25% of net worth PV01 cap | NEW (19 Oct 2026): DELETED" [F17, F18]


N064 · That cap on non-option rupee derivatives was deleted by R-B-I with immediate effect on nineteen October twenty twenty-six.
> 1 N: "RBI/2026-27/294 (19 Oct 2026): para 37 deleted" [F18]


N065 · P-V-zero-one is still a vital internal risk measure governed by Board-approved limits, but the old zero point two five per cent regulatory cap is gone.
> 1 N: "Internal Board limits stay; 0.25% cap gone" [F16, F18]


N066 · Pause check for chapter three. First: does higher P-V-zero-one mean higher or lower interest-rate volatility?
> 1 S: pause card "Ch 3 Check · Q1: Higher PV01 → ? volatility" · H: 3 s


N066a · Second: does R-B-I's zero point two five per cent P-V-zero-one cap apply on thirty-one December twenty twenty-six?
> 1 S: add "Q2: 0.25% cap on 31 Dec 2026?" · H: 3 s


N067 · Higher P-V-zero-one means higher volatility, because each basis point moves more rupees.
> 1 N: "Q1: Higher ✓" [F15]


N067a · And no, R-B-I deleted that zero point two five per cent cap on nineteen October twenty twenty-six.
> 1 N: "Q2: No, deleted 19 Oct 2026 ✓" [F18] · 2 C: summary strip "Ch 3: BPV = MV × MD × 0.0001"

## Chapter 4 · Portfolio duration and desk case

N068 · Chapter four: putting a whole desk together. Quick recall: if a one-crore bond has M-D of six, what is its B-P-V?
> 1 S: chapter title "4 · Portfolio duration & case" · 2 S: recall box "₹1 cr, MD 6 → BPV = ?" · H: 3 s


N069 · Six thousand rupees. Now, how do we find the modified duration of a whole bond portfolio?
> 1 N: "₹6,000 ✓" · 2 S: portfolio box with 3 bonds


N070 · Portfolio modified duration is simply the market-value-weighted average of each bond's modified duration. Never take a plain average of the numbers.
> 1 C: rule card "Portfolio MD = Σ (weight × MD) · weighted by Market Value" [F19] · 2 B: underline "Market Value"


N071 · Even better: portfolio B-P-V is just the plain sum of each bond's individual B-P-V. That gives you a fast double-check in the exam.
> 1 N: "Portfolio BPV = Σ individual BPVs" [F14, F19]


N072 · Let's walk through a five-question exam case on Ananya's ten-crore G-sec desk. Bond X: five crore, M-D two point four.
> 1 S: case table "Desk total ₹10 cr · X: ₹5 cr, MD 2.40 · Y: ₹3 cr, MD 5.00 · Z: ₹2 cr, MD 8.00"


N073 · Bond Y: three crore, M-D five point zero. Bond Z: two crore, M-D eight point zero. Question one: what are the three market-value weights?
> 1 S: "Case Q1: weights of X, Y, Z?" · H: 5 s


N074 · Point five zero, point three zero, and point two zero, since five, three, and two divide by ten crore.
> 1 N: "Q1: 0.50, 0.30, 0.20 ✓"


N075 · Question two: compute portfolio modified duration. Multiply each weight by its M-D and add. Take ten seconds.
> 1 S: "Case Q2: Portfolio MD = ?" · H: 10 s


N076 · Four point three zero years. Point five times two point four gives one point two; point three times five gives one point five.
> 1 S: keys "0.5 × 2.4 = 1.20 · 0.3 × 5 = 1.50"


N076a · Add point two times eight, which is one point six. Total portfolio M-D is four point three zero.
> 1 S: keys "1.20 + 1.50 + 1.60 = 4.30" · 2 N: "Q2: Portfolio MD = 4.3000 ✓" [F19]


N077 · Question three: what is the portfolio B-P-V? Ten crore times four point three zero times zero point zero zero zero one.
> 1 S: "Case Q3: Portfolio BPV = ?" · H: 8 s


N078 · Forty-three thousand rupees per basis point. Double-check by adding individual B-P-Vs: twelve thousand plus fifteen thousand plus sixteen thousand also equals forty-three thousand.
> 1 S: keys "12000 + 15000 + 16000 = 43000" · 2 N: "Q3: Portfolio BPV = ₹43,000.00 ✓" [F14, F19]


N079 · Question four: if yields jump thirty basis points across the curve, what is the approximate rupee loss?
> 1 S: "Case Q4: Loss for +30 bps?" · H: 8 s


N080 · Twelve lakh ninety thousand rupees: forty-three thousand times thirty. Notice how fast B-P-V makes the rupee loss once you have it.
> 1 S: keys "43000 × 30 = 1290000" · 2 N: "Q4: Loss = ₹12,90,000.00 ✓" [F14]


N081 · Question five, the twist. Ananya swaps Bond Z for a ninety-one-day Treasury Bill with M-D zero point two five. New portfolio M-D?
> 1 S: "Case Q5: Swap Z (MD 8.00) → T-bill (MD 0.25) · New MD?" · H: 10 s


N082 · Two point seven five years. One point two zero plus one point five zero plus zero point zero five equals two point seven five.
> 1 S: keys "1.20 + 1.50 + 0.05 = 2.75" · 2 N: "Q5: New MD = 2.7500 ✓" [F19] · 3 M: map node "Portfolio duration"


N083 · That is how treasuries cut risk before a rate hike, and R-B-I uses this exact modified-duration logic in its duration method for market-risk capital.
> 1 N: "Link: RBI Standardised Duration Method (15 bands, 5% vertical disallowance)" [F20, F21]

## Close

N084 · Quick mixed check before we close. One: a semi-annual bond has D equal to six and Y-T-M ten per cent. What divides six?
> 1 S: mixed-check card "1) Semi-annual D=6, YTM=10% → divisor? 2) Zero-coupon 4-yr → D?" · H: 5 s


N085 · One point zero five. Two: a four-year zero-coupon bond has Macaulay duration of four years. Three: B-P-V measures a move of how many basis points?
> 1 N: "1) 1.05 ✓ [F7] · 2) 4 years ✓ [F4]" · 2 S: "3) BPV = ? bps" · H: 3 s


N086 · One basis point. Now look at the blank mind map for our bond branch. Say the three nodes aloud from memory before they appear.
> 1 S: blank Mind Map C branch 6 (3 empty slots) · H: 5 s


N087 · Macaulay duration, modified duration, and B-P-V. You can now compute all three, adjust for semi-annual G-secs, and price a full portfolio shock.
> 1 S: full branch 6 revealed "Bonds: duration · MD · BPV" · 2 C: "You can now (C5.3): D, MD, %ΔP, BPV, Portfolio MD"


N088 · Tonight's homework: a twenty-crore bond desk has M-D five. Compute its B-P-V and its rupee loss if yields rise twenty basis points.
> 1 C: homework card "Homework: ₹20 cr desk, MD 5.00, +20 bps → BPV & loss?"


N089 · One question to carry into next class: if that desk loses twenty lakh by noon, who sets the stop-loss limit that stops the dealer?
> 1 S: preview card "Next class: Who stops the dealer at ₹20 lakh loss?"


N090 · [warmly] That brings our bond risk toolkit together. Step away from the screen for a bit, and I'll see you in the next class.
> 1 S: closing card; map holds 3 s · H: 3 s