# B03 · "Statistics on a basic calculator" · script v1 (class edition, with cue sheet)

- **Syllabus**: B4.3 (the measurement part; VaR itself in B09 and B09b); prepares C5.3. **Facts**:
  `research/bfm/facts/B4.3_B03.md`; rows cited as [F12]. Every sum is in `numericals.md` and checked two ways by
  `check_b03.py` (N1–N8).
- **Rule version (opening card)**: "Standard statistics · Basel market-risk amendment 1996, B.4 (square root of time)
  · RBI Guidance Note on Market Risk Management (2025)".
- **Method**: `research/pedagogy/teaching_method.md`: worked example, then faded, then the learner's own try; key
  presses spoken and shown; an error-analysis line for the commonest wrong answer; four chapters with recall
  openers; mixed round; map from memory.
- **Money**: rupees (the branch cash story, in thousands of rupees) and percentages (returns, volatility). All data
  illustrative and labelled so.
- **Calculator**: the IIBF-allowed basic calculator (+ − × ÷ % √, 12 digits). No memory keys are assumed: running
  totals are written in the notebook table. Squares are keyed as "d × d =".
- **Holds**: as "H: n s". Pause questions at least 3 s; calculator tries 15–25 s; chapter ends 1 s.
- **Say it right**: "sigma" for σ; "root" for √; numbers in words; "point" for decimals.
- **Greeting and goodbye** (checked against `course/bfm/greetings.md`): "Hi everyone. Pen, notebook and calculator,
  please. This one is a working class." / "That's the numbers class done. Two more sums on your own tonight, and we meet again next
  class."
- **Picture**: the on-screen basic calculator pressing real keys; a notebook table (value · deviation · square);
  dots scattered round a mean line; a bell curve with 1, 2, 3 SD bands; a "√ stairs" picture for volatility over
  time. The Module B map grows branch 5 "Statistics".
- **Music bed out** for the whole of chapters 1–4 and the mixed round (numericals): N012–N118.

---

## Warm-up

N001 · Hi everyone. Pen, notebook and calculator, please. This one is a working class.
> 1 S: notebook page opens; the rule-version card · 2 S: the basic calculator slides in at the right and stays · 3 N: "Module B · class 3"

N002 · Last two classes were words. Today is numbers. By the end, you'll find a standard deviation with just these keys, and you'll scale volatility from one day to a year, and back.
> 1 C: goal card "today: SD on a basic calculator · volatility over time, both ways" · 2 B: underline "both ways"

N003 · And this is asked. Variance, standard deviation and volatility came up in five of the last seven exam cycles. In the last one, a variance case study and two mean-variance questions.
> 1 S: exam chips "Statistics · 5 of 7 cycles" · "Jun 2026: variance case · mean-variance ×2" [fact sheet, exam evidence]

N004 · Keep the calculator next to you, and a pen. When I say try it, pause the video and press the keys yourself. Watching isn't the same as doing.
> 1 S: the pause icon "your turn = pause and press" · 2 N: "watching ≠ doing" · H: 2 s

N005 · Two quick ones from last class. A test moves only interest rates, nothing else. Sensitivity or scenario?
> 1 S: a single lever "rates" · H: 3 s

N006 · Sensitivity. One variable. And from two classes back. What covers the unexpected loss, provisions or capital?
> 1 S: answer "✓ sensitivity" · 2 S: the cushion from B01, small · H: 3 s

N007 · Capital. Hold on to that. To size the unexpected, a bank needs to know how much things swing. That's today.
> 1 S: answer "✓ capital" · 2 N: "how much things swing = today"

N008 · An easy one to start. Your branch had cash shortfalls of four and six thousand rupees on two days. Average?
> 1 S: two bars "4" "6" (₹ thousand, illustrative) · H: 3 s

N009 · Five thousand. Four plus six is ten, divided by two is five. You've just done the first step of everything today.
> 1 N: "4 + 6 = 10 ÷ 2 = 5" on the calculator

## Opening

N010 · Now picture two branches over five days. Same average shortfall, five thousand rupees a day, in both. Branch A's days are four, six, five, three and seven thousand.
> 1 S: Branch A: five dots "4 6 5 3 7" round a line at 5; "illustrative · ₹ thousand"

N011 · Branch B's days are one, nine, two, ten and three thousand. Same average, five. So which branch is riskier? Some of you are thinking: same average, same risk.
> 1 S: Branch B: dots "1 9 2 10 3", far from the line · 2 S: cloud "Some of you": "same average = same risk" · 3 S: cloud "Others": "B swings more" · H: 4 s

N012 · Others are saying: Branch B, it swings more. You're right, and in ten minutes you'll put a number on it. Branch A will come out at about one point four. Branch B, about three point seven.
> 1 S: the "Others" cloud gets a small "?" for now · 2 N: "a number for the swing: coming in chapter 2"

## Chapter 1 · Mean and deviation

N013 · Chapter one. The mean, and how far each value sits from it. First, a question. What is the mean of four, six, five, three and seven?
> 1 S: chapter title "1 · Mean and deviation" · 2 S: the Branch A dots · H: 5 s

N014 · Five. Watch the keys. Four, plus six, plus five, plus three, plus seven, equals twenty-five. Divide by five, equals five.
> 1 S: the calculator presses "4 + 6 + 5 + 3 + 7 = 25 ÷ 5 = 5" as each key is said [F1] · 2 B: box around "5"

N015 · The mean is just the sum divided by how many values there are. We call that count n. Here, n is five.
> 1 C: rule card "mean = sum ÷ n" [F1]

N016 · Now, each value's distance from the mean is its deviation. Value minus mean. Let's build a table in your notebook. Three columns. Value, deviation, square.
> 1 S: a notebook table draws: "value · deviation · square" [F2] · 2 B: underline "value minus mean"

N017 · Four minus five is minus one. Six minus five, plus one. Five minus five, zero. Three minus five, minus two. Seven minus five, plus two.
> 1 S: the deviation column fills "−1 · +1 · 0 · −2 · +2" as each is said · 2 S: each dot gets an arrow to the line

N018 · Now a question. Add up those deviations. What do you get?
> 1 S: the deviation column, a sum line below · H: 4 s

N019 · Zero. Minus one, plus one, zero, minus two, plus two. Always zero. The pluses and minuses cancel. That's true for every set of numbers.
> 1 S: the sum line writes "0" [F2] · 2 B: circle "always 0"

N020 · So we can't just average the deviations to measure the swing. We'd always get zero. The fix is to square them. A square is never negative.
> 1 N: "average of deviations = 0 always → square them"

N021 · Pause check for chapter one. Two questions. First. Mean of ten, twenty and thirty?
> 1 C: check card "Chapter 1 · 2 questions" · 2 S: Q1 · H: 5 s

N022 · Twenty. Sixty divided by three. Second. The deviations of any set of values add up to what?
> 1 S: answer "✓ 20" · 2 S: Q2 · H: 3 s

N023 · Zero. Always.
> 1 S: answer "✓ 0"

N024 · If you remember one thing from chapter one: deviation is value minus mean, and the deviations always add to zero.
> 1 B: the deviation column pulses · 2 M: lesson-map node 1 "mean and deviation" · H: 1 s

## Chapter 2 · Variance and standard deviation, on the calculator

N025 · Chapter two. First, from chapter one. Why can't we average the deviations?
> 1 S: chapter title "2 · Variance and SD" · H: 3 s

N026 · Because they always add to zero. So now we square. Back to Branch A's table. Minus one squared?
> 1 S: the table, square column empty · H: 3 s

N027 · One. On the calculator, one times one equals one. Even for minus one, you square it as one times one. The sign goes away.
> 1 S: the calculator "1 × 1 = 1"; square column fills "1" · 2 N: "square: sign goes away"

N028 · Next, one times one, one. Zero. Two times two, four. And two times two again, four. Now add the squares. One plus one plus zero plus four plus four?
> 1 S: square column fills "1 · 1 · 0 · 4 · 4" as each is said · H: 3 s

N029 · Ten. Write it at the bottom of the column. Now the key idea. Variance is the average of the squared deviations. So ten divided by n, five, equals two.
> 1 S: sum "10"; the calculator "10 ÷ 5 = 2" · 2 C: rule card "variance = Σ(deviation²) ÷ n" [F3] · 3 B: box around "2"

N030 · Once more, slower. Variance… is the average… of the squared deviations.
> 1 G: the rule card on its words

N031 · And as a question. If the shortfalls are in thousands of rupees, what's the unit of this variance, two?
> 1 S: "variance = 2 ___" with a blank · H: 4 s

N032 · Thousands of rupees, squared. Rupees squared means nothing at the branch. Some of you were about to say "two thousand rupees". That's the trap. Variance is in squared units.
> 1 S: blank fills "(₹ thousand)²" [F3] · 2 B: strike on "₹2,000" · 3 N: "variance = squared units"

N033 · So we take the square root to come back to rupees. That's the standard deviation, S-D, also called sigma. Two, then press root.
> 1 C: rule card "SD (σ) = √variance" [F4] · 2 S: the calculator "2 √ = 1.41421356…"

N034 · One point four one four two. So Branch A's shortfall typically swings about one point four thousand rupees from its average.
> 1 S: answer box "Branch A: σ = 1.4142 (₹ thousand)" · 2 N: "back in ₹"

N035 · Now Branch B, and I'll go faster. Mean is five. Deviations: minus four, plus four, minus three, plus five, minus two.
> 1 S: a second table: values "1 9 2 10 3", deviations "−4 +4 −3 +5 −2"

N036 · Squares: sixteen, sixteen, nine, twenty-five, four. You finish it. Add them, divide by five, then press root. Pause and press.
> 1 S: square column "16 16 9 25 4"; sum and answer blank · H: 20 s

N037 · The squares add to seventy. Seventy divided by five is fourteen, the variance. Fourteen, root, three point seven four one seven.
> 1 S: the calculator "16 + 16 + 9 + 25 + 4 = 70 ÷ 5 = 14 √ = 3.7417" · 2 S: answer box "Branch B: σ = 3.7417"

N038 · Now, remember my question? Same average, five. Which branch is riskier? Branch B's S-D is three point seven four, Branch A's one point four one. B swings more than twice as much.
> 1 S: both branch dot-plots return; the "Others" cloud ticked, "Some of you" crossed · 2 B: circle "3.7417"

N039 · That's why S-D measures risk. It's the typical size of the swing around the average.
> 1 N: "SD = typical swing = risk" [F4]

N040 · Now your turn, alone. A bond's returns over five months, in percent. Three, minus two, four, one, minus one. Find the mean, the variance and the S-D. Pause, and use the table.
> 1 S: a blank table with values "3 · −2 · 4 · 1 · −1 (%)" · H: 25 s

N041 · Check. Sum is five, mean one. Deviations: two, minus three, three, zero, minus two. Squares: four, nine, nine, zero, four.
> 1 S: the table fills as each is said

N042 · Sum twenty-six. Divide by five, variance five point two. Root, S-D two point two eight zero four percent. Got two point two eight? Well done.
> 1 S: the calculator "26 ÷ 5 = 5.2 √ = 2.2804" · 2 S: answer box "σ = 2.2804%"

N043 · If you got two point five five, you divided by four, not five. That's the sample formula, n minus one. It's used when your numbers are only a sample. The exam usually gives the full set and expects n. Divide by n minus one only if the question says sample.
> 1 S: a side note "÷ (n − 1) = 6.5 → √ = 2.5495 · only if 'sample'" [F5] · 2 B: underline "only if the question says sample"

N044 · A shortcut, for when the mean isn't a round number. Variance equals the mean of the squares, minus the square of the mean.
> 1 C: rule card "variance = mean of squares − (mean)²" [F6]

N045 · Try it on the bond. Squares of the values: nine, four, sixteen, one, one. They add to thirty-one. Divide by five, six point two. Minus the mean squared, one. Five point two. Same answer.
> 1 S: the calculator "9 + 4 + 16 + 1 + 1 = 31 ÷ 5 = 6.2 − 1 = 5.2" · 2 B: box "5.2 ✓ same"

N046 · Pause check for chapter two. Two questions. First. A set has a variance of nine percent squared. What's the S-D?
> 1 C: check card "Chapter 2 · 2 questions" · 2 S: Q1 · H: 4 s

N047 · Three percent. Nine, root, three. Second. Two portfolios have the same average return. One has an S-D of four, the other six. Which is less risky?
> 1 S: answer "✓ 3%" · 2 S: Q2 · H: 3 s

N048 · The one with an S-D of four. Same return, smaller swing.
> 1 S: answer "✓ SD 4"

N049 · If you remember one thing from chapter two: variance is the average of squared deviations, and S-D is its root, back in the real units.
> 1 B: the two rule cards pulse · 2 M: lesson-map node 2 "variance and SD" · H: 1 s

N050 · Stretch your fingers. Halfway.
> 1 N: "halfway" · H: 1 s

## Chapter 3 · Choosing on mean and variance, and the bell curve

N051 · Chapter three. From chapter two, quick. Variance is sixteen. S-D?
> 1 S: chapter title "3 · Mean, variance, and the bell" · H: 3 s

N052 · Four. Now a case, the kind the exam likes. Portfolio P earns ten percent on average, with an S-D of five. Portfolio Q earns fifteen, with an S-D of nine. Which one gives less risk for each unit of return?
> 1 S: two cards "P: mean 10% · σ 5%" · "Q: mean 15% · σ 9%" (illustrative) · H: 4 s

N053 · Some of you are thinking Q, because it earns more. Others, P, because it swings less. Here, neither rule is enough, since both mean and S-D differ. So we divide.
> 1 S: clouds "Q: earns more" · "P: swings less" · 2 N: "both differ → divide"

N054 · The coefficient of variation is S-D divided by mean. Risk per unit of return. For P, five divided by ten, point five. For Q, nine divided by fifteen, point six.
> 1 C: rule card "CV = σ ÷ mean" [F7] · 2 S: the calculator "5 ÷ 10 = 0.5" · "9 ÷ 15 = 0.6"

N055 · Lower is better. P carries less risk for each unit of return. So, the rules. Same mean, pick the lower S-D. Same S-D, pick the higher mean. Both different, compare the C-V.
> 1 S: answer "✓ P (0.5 < 0.6)" · 2 C: rule card "same mean → lower σ · same σ → higher mean · both differ → lower CV" [F8]

N056 · Quick one. Two funds, both with an S-D of six. One earns eight percent, the other twelve. Which do you pick?
> 1 S: two small cards "σ 6 · 8%" "σ 6 · 12%" · H: 3 s

N057 · Twelve. Same risk, higher return.
> 1 S: answer "✓ 12%"

N058 · Now the picture behind all of this. Many returns follow a bell shape, the normal curve. Most values sit near the mean, fewer far out, and it's the same on both sides.
> 1 S: a bell curve draws live round a mean line [F9] · 2 B: underline "same on both sides"

N059 · Here are three numbers to remember. About sixty-eight percent of outcomes fall within one S-D of the mean. About ninety-five percent within two. About ninety-nine point seven within three.
> 1 S: bands shade: "±1σ ≈ 68%" · "±2σ ≈ 95%" · "±3σ ≈ 99.7%" [F9] · 2 B: box around the three

N060 · Say them with me. One, sixty-eight. Two, ninety-five. Three, ninety-nine point seven.
> 1 G: each band on its words

N061 · Try it. Branch C's daily shortfall averages five thousand rupees with an S-D of two. In about ninety-five percent of days, the shortfall lies between what and what?
> 1 S: the curve with "mean 5 · σ 2" · H: 6 s

N062 · Two S-Ds is four. Five minus four, one. Five plus four, nine. So between one and nine thousand rupees, on about ninety-five days in a hundred.
> 1 S: the calculator "2 × 2 = 4 · 5 − 4 = 1 · 5 + 4 = 9" · 2 S: the ±2σ band labelled "1 to 9"

N063 · One more idea, and we'll use it fully later in Module B. Risk managers care about one side only, the losses. That's one tail.
> 1 S: the left tail of the curve shades red, "one tail = losses"

N064 · In the exam you'll be given the number of S-Ds for one tail. About one point six five for ninety-five percent, and two point three three for ninety-nine percent. Basel's value at risk uses ninety-nine percent, one-tailed.
> 1 S: two tags on the left tail "1.65σ · 95% one-tailed" · "2.33σ · 99% one-tailed" [F10, F11] · 2 N: "VaR: B09"

N065 · Pause check for chapter three. Two questions. First. About what share of outcomes lies within one S-D of the mean?
> 1 C: check card "Chapter 3 · 2 questions" · 2 S: Q1 · H: 3 s

N066 · About sixty-eight percent. Second. Fund X: mean twenty, S-D eight. Fund Y: mean ten, S-D five. Which has less risk per unit of return?
> 1 S: answer "✓ ≈ 68%" · 2 S: Q2 · H: 15 s

N067 · Fund X. Eight divided by twenty is point four. Five divided by ten is point five. Point four is lower.
> 1 S: the calculator "8 ÷ 20 = 0.4 · 5 ÷ 10 = 0.5" · 2 S: answer "✓ X"

N068 · If you remember one thing from chapter three: when both mean and S-D differ, compare S-D divided by mean, and lower wins.
> 1 B: the CV card pulses · 2 M: lesson-map node 3 "mean–variance and the bell" · H: 1 s

## Chapter 4 · Volatility over time: the square root

N069 · Chapter four, the most asked sum of the lesson. First, two from earlier. Within two S-Ds of the mean lie about what share of outcomes?
> 1 S: chapter title "4 · Volatility over time" · 2 N: "most asked" · H: 3 s

N070 · Ninety-five percent. And variance is in what kind of units?
> 1 S: the bell, small · H: 3 s

N071 · Squared units. Now, volatility is simply the S-D of returns over a period. A day, a month, a year.
> 1 C: rule card "volatility = σ of returns over a period" [F12]

N072 · Here's the question. A share's daily volatility is one percent. What's its volatility over a year of two hundred and fifty trading days? Some of you are saying: two hundred and fifty percent. Others: something smaller. Lock it.
> 1 S: clouds "Some of you": "1% × 250 = 250%" · "Others": "smaller" · 2 C: pause card · H: 4 s

N073 · Smaller. Much smaller. Volatility doesn't grow with time. It grows with the square root of time.
> 1 S: "Some of you" cloud crossed · 2 C: rule card "σ(T) = σ(1 day) × √T" [F13] · 3 B: circle "√T"

N074 · Why? Good days and bad days partly cancel. So the swings don't simply pile up. If the days move independently, the variance adds up day by day, and the S-D grows with the root.
> 1 S: the "√ stairs": steps that rise more slowly each time · 2 N: "variance adds up · σ grows with √T (if days are independent)" [F13]

N075 · So for one percent a day: two hundred and fifty, root, fifteen point eight one. Times one. About fifteen point eight percent a year. Not two hundred and fifty.
> 1 S: the calculator "250 √ = 15.8114 × 1 = 15.8114" · 2 B: strike on "250%"

N076 · Once more, slower. Multiply by the square root… of the number of days.
> 1 G: the √T card on its words

N077 · And as a question. Over four days, does volatility double, or go up four times?
> 1 S: "4 days" tag · H: 4 s

N078 · It doubles. The root of four is two.
> 1 S: answer "✓ × 2 (√4 = 2)"

N079 · Worked example. Daily volatility one point two percent. Two hundred and fifty trading days. Annual volatility? Watch. Two hundred and fifty, root, fifteen point eight one one four. Times one point two, equals eighteen point nine seven three seven.
> 1 S: data card "daily σ 1.2% · 250 days" · 2 S: the calculator "250 √ = 15.8114 × 1.2 = 18.9737" [N4] · 3 S: answer box "≈ 18.97% a year"

N080 · Now backwards. Annual volatility twenty percent, two hundred and fifty days. What's the ten-day volatility? I'll start, you finish.
> 1 S: data card "annual σ 20% · 250 days · find 10-day" · H: 2 s

N081 · Ten days is ten out of two hundred and fifty of the year. Ten divided by two hundred and fifty is point zero four. Now press root, then times twenty. Pause and press.
> 1 S: the calculator "10 ÷ 250 = 0.04" then blank · H: 15 s

N082 · Point zero four, root, point two. Times twenty, four percent. Another way: two hundred and fifty divided by ten is twenty-five, root five, and twenty divided by five is four. Same.
> 1 S: "0.04 √ = 0.2 × 20 = 4" · 2 S: "250 ÷ 10 = 25 √ = 5 · 20 ÷ 5 = 4" [N5] · 3 S: answer box "10-day σ = 4%"

N083 · If you got zero point eight, you divided twenty by twenty-five. That's dividing by the days, not by their root. Always take the root first.
> 1 N: "0.8 = forgot the root" · 2 B: underline "root first"

N084 · And the one the exam has asked: from many days down to one. A forty-nine-day volatility of thirty-five percent. What's the one-day volatility? Your turn, alone.
> 1 S: data card "49-day σ 35% · find 1-day" · H: 15 s

N085 · Forty-nine, root, seven. Thirty-five divided by seven, five percent. Not thirty-five divided by forty-nine.
> 1 S: the calculator "49 √ = 7 · 35 ÷ 7 = 5" [N6] · 2 S: answer box "1-day σ = 5%"

N086 · So the three moves. Short to long, multiply by the root of the days. Long to short, divide by the root. And one year to n days, multiply by the root of n over the days in the year.
> 1 C: card "short → long: × √T · long → short: ÷ √T · year → n days: × √(n ÷ days in year)" [F14]

N087 · Which number of days? The one the question gives. Often two hundred and fifty, or two hundred and fifty-two, sometimes three hundred and sixty-five. Never guess it.
> 1 N: "days in the year = what the question says" [F15]

N088 · And this rule isn't just for the exam. Basel's market-risk rules let banks work out a short-period value at risk and scale it up to ten days by the square root of time.
> 1 S: a tag "Basel 1996 B.4: shorter holding period → 10 days by √time" [F16] · 2 N: "VaR: B09"

N089 · Pause check for chapter four. Two questions. First. Daily volatility point eight percent. Sixteen-day volatility?
> 1 C: check card "Chapter 4 · 2 questions" · 2 S: Q1 · H: 15 s

N090 · Three point two percent. Sixteen, root, four. Four times point eight. Second. True or false: variance grows with time, and S-D with the root of time.
> 1 S: the calculator "16 √ = 4 × 0.8 = 3.2" [N7] · 2 S: answer "✓ 3.2%" · 3 S: Q2 · H: 4 s

N091 · True, when the days move independently.
> 1 S: answer "✓ true"

N092 · If you remember one thing from chapter four: volatility scales with the square root of time. Root first, then multiply or divide.
> 1 B: the √T card pulses · 2 M: lesson-map node 4 "volatility over time" · H: 1 s

## Mixed practice

N093 · Last stretch. Five mixed ones, then the map. Use your calculator. One. Values two, four, six. Mean?
> 1 C: practice card "Mixed round · 5" · 2 S: Q1 · H: 4 s

N094 · Four. Two. Their variance? Deviations minus two, zero, plus two.
> 1 S: ✓ Q1 · 2 S: Q2 · H: 15 s

N095 · Squares four, zero, four. Sum eight. Divide by three, two point six six six seven. Three. And the S-D, to two decimals?
> 1 S: ✓ Q2 "8 ÷ 3 = 2.6667" · 2 S: Q3 · H: 8 s

N096 · Two point six six six seven, root, one point six three. Four. A thirty-six-day volatility is eighteen percent. One-day volatility?
> 1 S: ✓ Q3 "√2.6667 = 1.63" · 2 S: Q4 · H: 12 s

N097 · Thirty-six, root, six. Eighteen divided by six, three percent. Five, the trap one. A set of values in rupees has a variance of twenty-five. Is the typical swing twenty-five rupees?
> 1 S: ✓ Q4 "18 ÷ 6 = 3%" · 2 S: Q5 · H: 4 s

N098 · No. Twenty-five is in rupees squared. The typical swing is the S-D, five rupees. Count your score. Four or five, you're ready. Fewer, redo the sums in the chapter you missed.
> 1 S: ✓ Q5 "σ = √25 = 5" · 2 N: "4–5: ready · fewer: redo that chapter's sums"

## The map, from memory

N099 · Now the map. You fill it first. Four branches. Say each before I draw it. Branch one. Mean and deviation?
> 1 M: the lesson-map skeleton, four empty branches · H: 5 s

N100 · Mean is sum over n. Deviation is value minus mean, and deviations add to zero. Branch two. Variance and S-D?
> 1 M: branch 1 fills · H: 5 s

N101 · Variance is the average of squared deviations, in squared units. S-D is its root. Divide by n, unless it says sample. Branch three. Choosing, and the bell?
> 1 M: branch 2 fills · H: 5 s

N102 · Same mean, lower S-D. Both differ, lower C-V, S-D over mean. Sixty-eight, ninety-five, ninety-nine point seven. Branch four. Volatility over time?
> 1 M: branch 3 fills · H: 5 s

N103 · Times root T to go longer, divide by root T to go shorter, root first. And use the days the question gives. That's the whole map.
> 1 M: branch 4 fills; the whole map glows once; the Module B map gets branch 5 "Statistics"

## Close

N104 · So now you can find a mean, a variance and an S-D with just the basic keys. You can choose between two portfolios on mean and S-D.
> 1 C: "you can now" list: "mean · variance · SD on the basic calculator · mean–variance choice" (B4.3)

N105 · And you can scale volatility from a day to a year and back. That's the statistics this syllabus needs for market risk. Value at risk builds on it in B-zero-nine.
> 1 C: list adds "volatility × or ÷ √T" · 2 N: "VaR: B09, B09b"

N106 · If any sum went wrong, redo it from the table. Homework. Two sums, tonight. The S-D of eight, ten and twelve. And the yearly volatility of half a percent a day, over two hundred and fifty days.
> 1 S: homework card "1) σ of 8, 10, 12 · 2) 0.5% a day, 250 days → a year" · 2 N: "answers in the next class"

N107 · Next class, a big story. How did banks end up needing capital for every risk? We start with Basel one. Here's a question. Why would bank regulators from many countries meet in a small Swiss town?
> 1 S: a timeline stub "1988 →" · 2 S: the question written large

N108 · That's the numbers class done. Two more sums on your own tonight, and we meet again next class.
> 1 N: "that's our class" · 2 S: the page closes; map B with branches 1, 2 and 5 lit
