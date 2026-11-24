# Voice parts from `course/bfm/C/C06/script_class.md`

One teacher voice. Paste each part into ElevenLabs text to speech and generate it in one go;
same voice and settings for every part.

## part_1.mp3 · Warm-up + Chapter 1 · Macaulay duration as a balance point + Chapter 2 · Modified duration and percentage price change + Chapter 3 · BPV and PV01 (N001–N067a) (1 turns, 8706 chars)

**1. Teacher** (N001–N067a)
```
[warmly] Hello everyone, glad you could make it tonight. Keep your calculator close; today we measure how hard a rate move hits. Put your phone on silent, grab a pen, and let's clear last class's homework first. One hundred and three rupees. Clean price plus accrued interest gives dirty price: one-zero-one point two zero plus one point eight zero. Quick reach back a few classes. What day-count convention do Indian dated G-secs use, versus Treasury Bills? Thirty by three-sixty for dated G-secs, and actual by three-sixty-five for Treasury Bills and money market instruments. Good start. Duration and B-P-V appeared in six of the last seven exam cycles, with twenty-seven mentions including full case studies. By the end of this class, you'll compute Macaulay duration, modified duration, B-P-V, and portfolio price impact on your basic calculator. Meet Ananya, a treasury dealer in Chennai. All names and numbers today are illustrative. Two three-year bonds sit on her screen. Bond A pays an eight per cent annual coupon. Bond B is a zero-coupon bond. Both yield eight per cent. Suddenly, market yields jump by one full percentage point. Some of you think both fall equally because both mature in three years. Others think the zero-coupon bond hurts more. Hold your pick; let's build the exact tool that settles this. Chapter one: Macaulay duration. Imagine a plank resting on a pivot, holding cash-flow blocks along a three-year timeline. Macaulay duration is the present-value-weighted average time, in years, taken to recover a bond's purchase price. Say that again cleanly: duration is a balance point in years, not a percentage and not a rupee amount. Many of you assume maturity and duration are the same thing. Let's test that on Bond A and Bond B. Bond B pays nothing until year three. All its present value sits at year three, so its balance point is three years. Remember this rule: duration is always less than or equal to maturity, and equals maturity only for a zero-coupon bond. What about a higher coupon? Does a higher coupon make duration longer or shorter, if maturity stays the same? Shorter. Higher coupons send more cash back earlier, pulling the balance point toward today. Now let's compute Bond A's exact Macaulay duration by the table method. Face value one hundred, eight per cent coupon, eight per cent yield. On the exam calculator, we have no power key. So we divide repeatedly by one point zero eight. Year one cash flow is eight rupees. Press eight divided by one point zero eight: seven point four zero seven four. Year two is eight rupees again. Divide by one point zero eight twice: six point eight five eight seven. Multiply six point eight five eight seven by two: thirteen point seven one seven four. Year three pays coupon plus principal: one hundred and eight. Divide by one point zero eight three times: eighty-five point seven three three nine. Multiply eighty-five point seven three three nine by three: two hundred and fifty-seven point two zero one six. Sum the present values: exactly one hundred. Sum the weighted column: two seventy-eight point three two six five. Divide by one hundred. Notice how Bond A's coupons pulled its pivot from three years down to two point seven eight three three years. One caution on Indian G-secs: they pay half-yearly. If you count half-year periods, divide the final period duration by two for years. Pause check for chapter one. Two quick questions, no options. First: a five-year zero-coupon STRIP has what Macaulay duration? Five years, because a zero-coupon bond has only one cash flow at maturity. Second: between two five-year bonds paying six per cent and nine per cent coupons, which has longer duration? The six per cent bond, because a lower coupon pays less cash early and pushes the balance point further out. One thing to remember from chapter one: Macaulay duration is the PV-weighted balance point in years, always at or below maturity. Chapter two: turning duration into a price-change machine. First, recall: what was Bond A's Macaulay duration from chapter one? Two point seven eight three three years. Now, many of you think we multiply Macaulay duration directly by the yield change. Not quite. We first divide by one plus the periodic yield to get Modified Duration, written M-D. Modified duration measures the approximate percentage change in a bond's price for a one hundred basis point, or one per cent, shift in yield. Because bond price and yield sit on opposite ends of a see-saw, percentage price change equals minus M-D times the yield change. Let's solve Bond A in full. Annual coupon means n equals one. Press two point seven eight three three divided by one point zero eight. If yield rises one per cent, Bond A falls about two point five eight per cent, to ninety-seven rupees forty-two paise. What about Bond B, the zero-coupon bond? Three divided by one point zero eight gives M-D of two point seven seven seven eight. Remember my opening question? Bond B hurts more, losing two point seven eight per cent against Bond A's two point five eight per cent. Now for the exam's favourite trap: semi-annual Indian G-secs. Write this down: for half-yearly coupons, divide yield by two inside the bracket. Let's do a faded sum together. A semi-annual G-sec has Macaulay duration four point two zero years and seven per cent Y-T-M. First, what is one plus y by two? Half of seven per cent is three point five per cent, so one point zero three five. Now press four point two divided by one point zero three five on your calculator. Take eight seconds. Four point zero five eight zero. Watch the trap: dividing by one point zero seven gives three point nine two five two, wrong. Now yield rises forty basis points, or zero point four zero per cent. Multiply four point zero five eight zero by zero point four zero. One quick reality check on our see-saw analogy: the real price-yield line is curved, not straight. That curve is called convexity. Modified duration works cleanly only for small, parallel yield shifts. On large shifts for option-free bonds, actual price drops are slightly smaller than duration predicts. Pause check for chapter two. First: M-D is five, yield falls fifty basis points. Does price rise or fall, and by how much? Price rises by two point five per cent: minus five times minus zero point five equals plus two point five. Second: for a semi-annual bond yielding eight per cent, what number goes in the denominator of modified duration? One point zero four, since half of eight per cent is four per cent. One thing to remember: always match the modified duration denominator to coupon frequency. Chapter three: from percentages to real rupees. Quick recall: modified duration tells you the percentage price change for how many basis points? One hundred basis points, or one per cent. On a trading desk, though, Ananya doesn't lose percentages; she loses rupees. So desks use B-P-V, Basis Point Value, also called P-V-zero-one: the rupee change in value for a one basis point yield move. Since one basis point is one hundredth of one per cent, B-P-V equals market value times M-D times zero point zero zero zero one. Here is a handy desk shortcut: for every one crore of market value, B-P-V is simply one thousand rupees times M-D. Your turn on the calculator. Ananya holds one crore market value of a bond with M-D four point five zero. Find its B-P-V and the rupee loss if yields rise twenty-five basis points. Take fifteen seconds. Let's check. One crore times four point five times zero point zero zero zero one gives four thousand five hundred rupees per basis point. Multiply four thousand five hundred by twenty-five basis points: one lakh twelve thousand five hundred rupees lost. Watch the commonest slip: forgetting one zero and multiplying by zero point zero zero one, which makes your answer ten times too big. Now, a key twenty twenty-six rule update that older notes miss. Many of you read that R-B-I caps gross P-V-zero-one at zero point two five per cent of net worth. That cap on non-option rupee derivatives was deleted by R-B-I with immediate effect on nineteen October twenty twenty-six. P-V-zero-one is still a vital internal risk measure governed by Board-approved limits, but the old zero point two five per cent regulatory cap is gone. Pause check for chapter three. First: does higher P-V-zero-one mean higher or lower interest-rate volatility? Second: does R-B-I's zero point two five per cent P-V-zero-one cap apply on thirty-one December twenty twenty-six? Higher P-V-zero-one means higher volatility, because each basis point moves more rupees. And no, R-B-I deleted that zero point two five per cent cap on nineteen October twenty twenty-six.
```

## part_2.mp3 · Chapter 4 · Portfolio duration and desk case + Close (N068–N090) (1 turns, 3050 chars)

**1. Teacher** (N068–N090)
```
Chapter four: putting a whole desk together. Quick recall: if a one-crore bond has M-D of six, what is its B-P-V? Six thousand rupees. Now, how do we find the modified duration of a whole bond portfolio? Portfolio modified duration is simply the market-value-weighted average of each bond's modified duration. Never take a plain average of the numbers. Even better: portfolio B-P-V is just the plain sum of each bond's individual B-P-V. That gives you a fast double-check in the exam. Let's walk through a five-question exam case on Ananya's ten-crore G-sec desk. Bond X: five crore, M-D two point four. Bond Y: three crore, M-D five point zero. Bond Z: two crore, M-D eight point zero. Question one: what are the three market-value weights? Point five zero, point three zero, and point two zero, since five, three, and two divide by ten crore. Question two: compute portfolio modified duration. Multiply each weight by its M-D and add. Take ten seconds. Four point three zero years. Point five times two point four gives one point two; point three times five gives one point five. Add point two times eight, which is one point six. Total portfolio M-D is four point three zero. Question three: what is the portfolio B-P-V? Ten crore times four point three zero times zero point zero zero zero one. Forty-three thousand rupees per basis point. Double-check by adding individual B-P-Vs: twelve thousand plus fifteen thousand plus sixteen thousand also equals forty-three thousand. Question four: if yields jump thirty basis points across the curve, what is the approximate rupee loss? Twelve lakh ninety thousand rupees: forty-three thousand times thirty. Notice how fast B-P-V makes the rupee loss once you have it. Question five, the twist. Ananya swaps Bond Z for a ninety-one-day Treasury Bill with M-D zero point two five. New portfolio M-D? Two point seven five years. One point two zero plus one point five zero plus zero point zero five equals two point seven five. That is how treasuries cut risk before a rate hike, and R-B-I uses this exact modified-duration logic in its duration method for market-risk capital. Quick mixed check before we close. One: a semi-annual bond has D equal to six and Y-T-M ten per cent. What divides six? One point zero five. Two: a four-year zero-coupon bond has Macaulay duration of four years. Three: B-P-V measures a move of how many basis points? One basis point. Now look at the blank mind map for our bond branch. Say the three nodes aloud from memory before they appear. Macaulay duration, modified duration, and B-P-V. You can now compute all three, adjust for semi-annual G-secs, and price a full portfolio shock. Tonight's homework: a twenty-crore bond desk has M-D five. Compute its B-P-V and its rupee loss if yields rise twenty basis points. One question to carry into next class: if that desk loses twenty lakh by noon, who sets the stop-loss limit that stops the dealer? [warmly] That brings our bond risk toolkit together. Step away from the screen for a bit, and I'll see you in the next class.
```

## Line order (for the edit)
- N001: [warmly] Hello everyone, glad you could make it tonight. Keep your cal
- N002: Put your phone on silent, grab a pen, and let's clear last class's hom
- N003: One hundred and three rupees. Clean price plus accrued interest gives 
- N004: Quick reach back a few classes. What day-count convention do Indian da
- N005: Thirty by three-sixty for dated G-secs, and actual by three-sixty-five
- N006: Good start. Duration and B-P-V appeared in six of the last seven exam 
- N007: By the end of this class, you'll compute Macaulay duration, modified d
- N008: Meet Ananya, a treasury dealer in Chennai. All names and numbers today
- N009: Bond A pays an eight per cent annual coupon. Bond B is a zero-coupon b
- N010: Suddenly, market yields jump by one full percentage point. Some of you
- N011: Others think the zero-coupon bond hurts more. Hold your pick; let's bu
- N012: Chapter one: Macaulay duration. Imagine a plank resting on a pivot, ho
- N013: Macaulay duration is the present-value-weighted average time, in years
- N014: Say that again cleanly: duration is a balance point in years, not a pe
- N015: Many of you assume maturity and duration are the same thing. Let's tes
- N016: Bond B pays nothing until year three. All its present value sits at ye
- N017: Remember this rule: duration is always less than or equal to maturity,
- N018: What about a higher coupon? Does a higher coupon make duration longer 
- N019: Shorter. Higher coupons send more cash back earlier, pulling the balan
- N020: Now let's compute Bond A's exact Macaulay duration by the table method
- N021: On the exam calculator, we have no power key. So we divide repeatedly 
- N022: Year one cash flow is eight rupees. Press eight divided by one point z
- N023: Year two is eight rupees again. Divide by one point zero eight twice: 
- N023a: Multiply six point eight five eight seven by two: thirteen point seven
- N024: Year three pays coupon plus principal: one hundred and eight. Divide b
- N025: Multiply eighty-five point seven three three nine by three: two hundre
- N026: Sum the present values: exactly one hundred. Sum the weighted column: 
- N027: Notice how Bond A's coupons pulled its pivot from three years down to 
- N028: One caution on Indian G-secs: they pay half-yearly. If you count half-
- N029: Pause check for chapter one. Two quick questions, no options. First: a
- N030: Five years, because a zero-coupon bond has only one cash flow at matur
- N030a: Second: between two five-year bonds paying six per cent and nine per c
- N031: The six per cent bond, because a lower coupon pays less cash early and
- N032: One thing to remember from chapter one: Macaulay duration is the PV-we
- N033: Chapter two: turning duration into a price-change machine. First, reca
- N034: Two point seven eight three three years. Now, many of you think we mul
- N035: Not quite. We first divide by one plus the periodic yield to get Modif
- N036: Modified duration measures the approximate percentage change in a bond
- N037: Because bond price and yield sit on opposite ends of a see-saw, percen
- N038: Let's solve Bond A in full. Annual coupon means n equals one. Press tw
- N039: If yield rises one per cent, Bond A falls about two point five eight p
- N040: What about Bond B, the zero-coupon bond? Three divided by one point ze
- N041: Remember my opening question? Bond B hurts more, losing two point seve
- N042: Now for the exam's favourite trap: semi-annual Indian G-secs. Write th
- N043: Let's do a faded sum together. A semi-annual G-sec has Macaulay durati
- N044: First, what is one plus y by two? Half of seven per cent is three poin
- N045: Now press four point two divided by one point zero three five on your 
- N046: Four point zero five eight zero. Watch the trap: dividing by one point
- N047: Now yield rises forty basis points, or zero point four zero per cent. 
- N048: One quick reality check on our see-saw analogy: the real price-yield l
- N049: Modified duration works cleanly only for small, parallel yield shifts.
- N050: Pause check for chapter two. First: M-D is five, yield falls fifty bas
- N051: Price rises by two point five per cent: minus five times minus zero po
- N052: Second: for a semi-annual bond yielding eight per cent, what number go
- N053: One point zero four, since half of eight per cent is four per cent.
- N053a: One thing to remember: always match the modified duration denominator 
- N054: Chapter three: from percentages to real rupees. Quick recall: modified
- N055: One hundred basis points, or one per cent. On a trading desk, though, 
- N056: So desks use B-P-V, Basis Point Value, also called P-V-zero-one: the r
- N057: Since one basis point is one hundredth of one per cent, B-P-V equals m
- N058: Here is a handy desk shortcut: for every one crore of market value, B-
- N059: Your turn on the calculator. Ananya holds one crore market value of a 
- N059a: Find its B-P-V and the rupee loss if yields rise twenty-five basis poi
- N060: Let's check. One crore times four point five times zero point zero zer
- N061: Multiply four thousand five hundred by twenty-five basis points: one l
- N062: Watch the commonest slip: forgetting one zero and multiplying by zero 
- N063: Now, a key twenty twenty-six rule update that older notes miss.
- N063a: Many of you read that R-B-I caps gross P-V-zero-one at zero point two 
- N064: That cap on non-option rupee derivatives was deleted by R-B-I with imm
- N065: P-V-zero-one is still a vital internal risk measure governed by Board-
- N066: Pause check for chapter three. First: does higher P-V-zero-one mean hi
- N066a: Second: does R-B-I's zero point two five per cent P-V-zero-one cap app
- N067: Higher P-V-zero-one means higher volatility, because each basis point 
- N067a: And no, R-B-I deleted that zero point two five per cent cap on ninetee
- N068: Chapter four: putting a whole desk together. Quick recall: if a one-cr
- N069: Six thousand rupees. Now, how do we find the modified duration of a wh
- N070: Portfolio modified duration is simply the market-value-weighted averag
- N071: Even better: portfolio B-P-V is just the plain sum of each bond's indi
- N072: Let's walk through a five-question exam case on Ananya's ten-crore G-s
- N073: Bond Y: three crore, M-D five point zero. Bond Z: two crore, M-D eight
- N074: Point five zero, point three zero, and point two zero, since five, thr
- N075: Question two: compute portfolio modified duration. Multiply each weigh
- N076: Four point three zero years. Point five times two point four gives one
- N076a: Add point two times eight, which is one point six. Total portfolio M-D
- N077: Question three: what is the portfolio B-P-V? Ten crore times four poin
- N078: Forty-three thousand rupees per basis point. Double-check by adding in
- N079: Question four: if yields jump thirty basis points across the curve, wh
- N080: Twelve lakh ninety thousand rupees: forty-three thousand times thirty.
- N081: Question five, the twist. Ananya swaps Bond Z for a ninety-one-day Tre
- N082: Two point seven five years. One point two zero plus one point five zer
- N083: That is how treasuries cut risk before a rate hike, and R-B-I uses thi
- N084: Quick mixed check before we close. One: a semi-annual bond has D equal
- N085: One point zero five. Two: a four-year zero-coupon bond has Macaulay du
- N086: One basis point. Now look at the blank mind map for our bond branch. S
- N087: Macaulay duration, modified duration, and B-P-V. You can now compute a
- N088: Tonight's homework: a twenty-crore bond desk has M-D five. Compute its
- N089: One question to carry into next class: if that desk loses twenty lakh 
- N090: [warmly] That brings our bond risk toolkit together. Step away from th
