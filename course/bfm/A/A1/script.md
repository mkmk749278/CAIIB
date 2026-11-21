# A01 · "Which side of the counter?" (one teacher, online class; script v6 with cue sheet)

- **Plan**: `course/bfm/A/plans_A.md` §A01. Course order: video 2, after 00 (`research/bfm/course_plan.md` v2).
  Folder `A/A1` keeps its old name.
- **Status**: v6, 2026-11-20. Lines from v5 (owner-approved one-voice version), brought to the locked template (A07):
  new greeting and goodbye, course cross-references to v2 numbering, one unsourced claim removed, cue sheet added.
  Older versions (`script_v2.md`–`script_v5.md`) are history; this file is the master.
  Line ids: v5 ids kept from N01 on; the warm-up was re-cut (N00a–N00f) and N70b added. The whole lesson is voiced
  fresh, so no old take depends on the warm-up ids.
- **Rule version (opening card)**: "FEDAI Rules (10th edition), as at 31 December 2026". Checked against the edition
  updated to 20 Aug 2026 with AR 03/2026 (7 Sep 2026), which changed only Rules 2.5(b) and 4.5; this lesson uses
  neither. Re-check for later FEDAI amendments at the fact freeze (`claims.csv`).
- **Evidence (warm-up line N00d)**: forex rate sums (cluster A-FXNUM) were recalled in all 7 exam cycles we checked,
  June 2023 to June 2026 (`research/bfm/items_tagged.csv`; `importance_map.md`).
- **Greeting / goodbye** (no other video may reuse them; register `course/bfm/greetings.md`):
  greeting "Hello, and welcome back. Last class, I left you with one question…"; goodbye "Well done today… I'll see
  you soon."
- **Voice**: PLAYBOOK §5b. One AI teacher voice, no name, never "Sir"; an online class (no physical-room cues);
  "Some of you / Others" thought bubbles, no made-up percentages. No AI-voice disclosure card (owner, 2026-11-21). ElevenLabs expression tags (`[warmly]`) are used sparingly.
- **Money**: US dollars for the deals, rupees for what the customer pays or gets; Indian digit grouping on screen
  (₹15,39,097.20). Rates to 4 decimals (FEDAI Rule 5.7 direct quotes).
- **Illustrative**: the branch, the father, the exporter, the son and every rate and margin are made up and labelled
  "illustrative" on screen. Interbank USD/INR 85.40 / 85.42 is a teaching number, not a market rate.
- **Say it right**: Visakhapatnam "vi-SHAA-kha-PUT-nam"; FEDAI "fe-DYE"; Nostro "NOSS-tro"; numbers are written in
  words in the lines so the voice reads them as intended.
- **Numericals**: `numericals.md`, checked two ways by `tools/check/fx_merchant_rates.py` (all OK, 2026-11-20).
- **Length**: about 2,250 spoken words, about 14 minutes; warm-up, opening and three chapters, each under 5 minutes.
- **Holds** (for `tools/video/timeline.py`, key `A1`): N04 5 s (lock your answer), N14 3 s, N35 12 s (pause and
  press the keys), N37 12 s, N59 4 s, N65 6 s; 1 s after N15b and N40b (chapter breath).

## How to read the cue sheet
Under every line, one beat per script sentence, numbered in order (`1`, `2`…), so `sk(id, k)` in the composition
finds it. Every sentence gets a beat (PLAYBOOK §5e). Kinds:
- **S** scene: something appears, changes or moves in the picture (drawn on across the sentence, never popped in).
- **N** teacher's note: short handwriting with a gold marker band, in the free top band (y ≈ 100–150) or beside the
  scene, never under a card, a label or the caption; it leaves when its line ends.
- **G** glow: a named thing lights for 1.5 s as the voice says it ("the teacher points").
- **M** map: the lesson map (branch "Rates", 12 o'clock on the Module A map) grows or pulses.
- **C** card: a rule card, trap card, pause card or practice card.
Pictures (from the plan and v2 kit): **the counter from above** (bank side at the top, customer side at the bottom;
green arrow = currency coming in, bank buys; red arrow = going out, bank sells); **the rate board** (four USD
prices); **the rate ladder** (interbank bid/ask in the middle, TT rungs inside, bill rungs outside; up = selling,
down = buying); **two clocks** (rupees at the counter, dollars in the Nostro abroad); the on-screen 8-function
calculator; "Some of you / Others" thought clouds.

---

## Warm-up

N00a · [warmly] Hello, and welcome back. Last class, I left you with one question. At a forex counter, is the bank
buying, or selling? Today we answer it properly.
> 1 S: notebook page opens; disclosure card, then rule-version card ("FEDAI Rules, as at 31 Dec 2026") fade by ·
> 2 N: "last class…" (top band) · 3 S: the question from 00 written as a heading, "Buying or selling?" ·
> 4 N: "today: the answer"

N00b · I know most of you are joining straight after the branch. So first, just take a breath. Long day? Month-end,
returns, targets, I know, I know.
> 1 S: soft page breath, a small cup of tea sketched at the margin · 2 S: the tea steams · 3 N: "long day?" ·
> 4 N: "month-end · returns · targets" written as a short list

N00c · [chuckles] Okay, so here's the deal. For the next fifteen minutes, forget the branch. Put your notifications on
silent, and keep a calculator next to you. You'll need it.
> 1 S: list fades; N: "here's the deal" · 2 N: "15 minutes" · 3 S: a phone icon with a bell crossed out, then
> the 8-function calculator slides in at the right margin · 4 G: calculator

N00d · Quick question for everyone. How many of you have actually worked at a forex counter? Just think about it.
Some of you have, a lot of you haven't. And honestly, for many people, that rate board looks a little scary.
> 1 S: a question mark drawn · 2 S: a small counter sketch · 3 N: "think…" · 4 S: two thought clouds, "Some of you:
> yes" / "Others: not yet" · 5 S: a rate board sketch with four blurred prices, slightly shaky lines

N00e · But by the end of today, it won't. Because today's topic is the base of the whole forex module: which rate to
use for which deal. In the papers we checked, forex rate sums came up in every one of the seven exams since the new
syllabus. Get this right, and half of Module A becomes easy.
> 1 S: the shaky board straightens · 2 N: "which rate for which deal?" · 3 S: a strip of 7 exam boxes (Jun 2023 …
> Jun 2026), each ticked in turn, "7 of 7" · 4 M: Module A map appears empty, "Rates" branch at 12 o'clock outlined

N00f · And don't worry, no heavy theory. We'll do it like a story at the counter, we'll do a few sums together, and
I'll keep asking you questions. So stay with me, okay? Let's start.
> 1 N: "no heavy theory" · 2 S: three small icons in a row: counter, calculator, question mark · 3 N: "stay with
> me" · 4 S: page glides to the opening

## Opening

N01 · Alright. Picture a forex counter, Monday morning, a busy branch in Visakhapatnam. Look at the board up there.
One currency, the US dollar, and four different prices. Four! Why four? That's what we're going to sort out today.
> 1 S: — (glide continues) · 2 S: the counter drawn from above, "Visakhapatnam · illustrative" label · 3 S: the rate
> board at the top: USD/INR with four prices 85.6337 · 85.5054 · 85.3573 · 85.2719 (no names yet) · 4 G: "USD" ·
> 5 G: the four prices, one by one · 6 N: "why 4?" · 7 N: "today"

N02 · Now, two customers walk in. First, a father. He has to send eighteen thousand dollars for his daughter's
university fee. Second, a shrimp exporter. He's got a forty thousand dollar export bill, and he wants his rupees
today.
> 1 S: two figures appear at the customer side · 2 S: father figure highlighted · 3 S: tag "USD 18,000 · university
> fee" · 4 S: exporter figure highlighted · 5 S: tag "USD 40,000 · export bill · wants rupees today"

N03 · And here's why this matters. If you, sitting at that counter, pick the wrong price for the father, the branch
loses more than two thousand rupees. On just one fee. So it's not a small thing.
> 1 N: "why it matters" · 2 S: a rupee counter ticks up to "₹2,665.80 lost" beside the father (illustrative) ·
> 3 N: "one fee!" · 4 S: the number underlined

N04 · So let me ask you. The father, does he get the higher price or the lower one? Think about it for a second. Lock
your answer in your head.
> 1 S: board prices split into "higher" (top two) and "lower" (bottom two) brackets · 2 S: a dashed arrow from the
> father to both brackets · 3 C: pause card with a 5 s ring · 4 S: ring drains (hold)

## Chapter 1 · Which side of the counter?

N04a · Okay. I know what many of you are thinking. The father is buying dollars, so he gets the buying rate. And the
exporter is selling dollars, so he gets the selling rate. Some of you are nodding. And a few of you are thinking, hmm,
maybe it's the other way round.
> 1 S: chapter title slides in "1 · Which side of the counter?" · 2 S: thought cloud "Some of you" · 3 N (in cloud):
> "father buys → buying rate" · 4 N (in cloud): "exporter sells → selling rate" · 5 S: cloud nods (small bounce) ·
> 6 S: second cloud "Others": "the other way round?"

N05 · Well, those few of you are right. The first answer is what most people say, and it sounds perfectly logical.
But it's exactly backwards.
> 1 S: "Others" cloud gets a tick · 2 S: "Some of you" cloud fades a little · 3 S: a cross drawn through it

N06 · See, here's the thing. The rate on that board isn't the customer's price. It's the bank's price. The bank is the
one buying and selling. So whenever you read a forex rate, come around and stand on the bank's side of the counter.
Always.
> 1 S: clouds clear · 2 S: board glows, "customer's price?" written and crossed · 3 N: "the BANK's price" ·
> 4 G: bank side of the counter · 5 S: a small figure walks from the customer side round to the bank side · 6 N: "always"

N07 · From there it's simple. If dollars are coming into the bank, the bank is buying them. And it pays you rupees.
> 1 S: camera settles on the counter from the bank's side · 2 S: green arrow draws in from abroad to the bank, "BUYS"
> · 3 S: small rupee arrow out to the customer

N08 · If dollars are going out of the bank, the bank is selling them. And it takes your rupees. That's it. In means
buy, out means sell.
> 1 S: red arrow draws out of the bank, "SELLS" · 2 S: rupee arrow in from the customer · 3 N: "that's it" ·
> 4 C: rule card "IN = BUY · OUT = SELL" (green / red)

N09 · Think of the money-changer at the airport. He buys cheap and sells dear, right? Same with the bank. The only
difference is, at the bank the gap is a few paise, not a few rupees. But those paise add up. [laughs] They pay our
salaries!
> 1 S: small airport booth sketch at the margin · 2 S: two price tags on it, "buys 82 · sells 89" (illustrative) ·
> 3 S: arrow from booth to the bank · 4 S: gap drawn as a bracket: "paise, not rupees" · 5 N: "paise add up" ·
> 6 S: a tiny salary slip sketch, gone in a second

N10 · So, in a direct quote, remember this. The bank's buying rate is always the lower rupee number, and its selling
rate is always the higher one. Buy low, sell high. Just like any shopkeeper.
> 1 S: board returns · 2 S: lower two prices tinted green "bank buys", upper two red "bank sells" · 3 N: "buy low ·
> sell high" · 4 S: a shop awning sketch over the board for a moment

N11 · Now let's go back to the father. His dollars are leaving the bank, going to his daughter's university. Going
out. So the bank is selling. Which means he pays the higher rate, the selling rate.
> 1 G: father · 2 S: red arrow from bank to a university sketch abroad · 3 N: "out" · 4 N: "bank SELLS" · 5 S: arrow
> from father to the upper (red) bracket; "higher rate" circled

N12 · And the exporter? His bill brings dollars in. Coming in, so the bank is buying. He gets the lower rate, the
buying rate. You see how it flips once you stand on the bank's side?
> 1 G: exporter · 2 S: green arrow from abroad into the bank · 3 N: "in → bank BUYS" · 4 S: arrow from exporter to
> the lower (green) bracket · 5 S: the two first-guess arrows flip across, with a small swap animation

N12a · If you got it wrong the first time, you were just standing on the wrong side of the counter.
> 1 S: the little figure from N06 stands on the customer side, shrugs, then walks round to the bank side

N13 · Don't worry, everybody does that at first. Just keep one rule in your head and you'll never get it wrong again:
name every deal from the bank's side.
> 1 N: "everybody does" · 2 C: rule card "Name every deal from the BANK's side"; M: Rates branch draws its first
> node "Bank's side: in = buy, out = sell"

N14 · Let's check it quickly. A son working abroad sends two thousand five hundred dollars home to his mother. Is the
bank buying or selling? Everyone, answer it.
> 1 N: "quick check" · 2 S: son abroad → mother at home sketch, "USD 2,500" · 3 S: two dashed arrows "buying?"
> "selling?" · 4 C: pause ring 3 s (hold)

N15 · Dollars are coming in, so the bank is buying. Got it? Good.
> 1 S: green arrow inks in over the dashed one, "BUYS" · 2 N: "✓" · 3 S: small tick sound cue

N15a · So that's part one done. Still with me? I know, after a full day at the branch, it's not easy. But look, you
already have the one line that matters: in means buy, out means sell. That one you won't forget.
> 1 M: lesson map corner card "1 ✓ · 2 next" · 2 N: "with me?" · 3 S: the tea cup from N00b, now half empty ·
> 4 G: rule card "IN = BUY · OUT = SELL" · 5 N: "won't forget"

N15b · Okay, stretch for a second if you want. Part two is the most important one for your sums, so I need full
attention here.
> 1 S: page relaxes (slow glide), 1 s breath after the line · 2 N: "part 2 = your sums"

## Chapter 2 · The rate ladder

N15c · Now, some of you are already asking: wait, there were four prices on the board, not two. So which buying rate?
And which selling rate?
> 1 S: chapter title slides in "2 · The rate ladder"; board shows four prices again, two green and two red ·
> 2 G: the two green prices · 3 G: the two red prices

N16 · Very good question. That's exactly where we're going. For that, I want to show you a second picture. We call it
the rate ladder.
> 1 N: "good question" · 2 S: board slides to the left · 3 S: an empty vertical ladder draws on at the centre ·
> 4 N: "the rate ladder"

N17 · First, where do these prices even come from? Banks are trading dollars with each other the whole day. That's the
interbank market. And right now, the market says eighty-five point four zero, and eighty-five point four two.
> 1 S: "where from?" written beside the ladder · 2 S: two small bank buildings trading arrows back and forth · 3 N:
> "interbank market" · 4 S: in the ladder's middle: "85.40 / 85.42 · illustrative"

N18 · The lower number is called the bid. That's what a buyer is willing to pay. The higher number is the ask, some
people call it the offer. That's what a seller wants. Bid lower, ask higher.
> 1 S: "bid" label under 85.40 · 2 N: "buyer pays" · 3 S: "ask (offer)" label over 85.42 · 4 N: "seller wants" ·
> 5 C: small card "BID < ASK"

N19 · Also notice how the price is written. So many rupees for one dollar. Or for a currency like the yen, so many
rupees for a hundred units. That's called a direct quote. And FEDAI's rules say this is how a bank must quote its
customers.
> 1 S: "85.40" expands to "₹85.40 = USD 1" · 2 S: "₹ per 1 USD" · 3 S: "₹ per 100 JPY" written below · 4 N: "direct
> quote" · 5 S: small source tag "FEDAI Rule 5.7" · M: Rates branch adds node "Direct quote · bid / ask"

N20 · Now, this market price goes right in the middle of our ladder. But the counter is retail, right? So the bank
adds its own margin on top. That's its earning.
> 1 G: the middle pair on the ladder · 2 S: the counter sketch reappears below the ladder, "retail" · 3 S: a margin
> bracket draws above and below the middle pair · 4 N: "margin = earning"

N21 · So the selling rates climb up from the ask. And the buying rates come down from the bid. Up for selling, down for
buying.
> 1 S: red arrow climbs up from 85.42 · 2 S: green arrow runs down from 85.40 · 3 N: "up = sell · down = buy"

N22 · And how big is that margin? Each bank decides its own. Don't try to memorise any number. In the exam, if a sum
needs a margin, the question will give it to you. Everyone with me so far? Good.
> 1 S: margin bracket pulses · 2 N: "each bank decides" · 3 S: a "memorise?" note crossed out · 4 N: "the question
> gives it" · 5 S: small source tag "FEDAI: banks set their own charges" · 6 N: "✓"

N23 · Now, which rung do we use for which deal? For this, I want you to watch two clocks. On the left, the rupees moving
at our counter. On the right, the dollars moving in the bank's account abroad. That account is called the Nostro
account.
> 1 S: four empty rungs appear on the ladder (two above, two below the middle) · 2 S: two clocks draw on beside
> the ladder · 3 S: left clock labelled "₹ at our counter" · 4 S: right clock labelled "$ in our account abroad" ·
> 5 N: "Nostro = our account abroad"

N24 · When both clocks move together, at the same time, we use the rungs closest to the middle. These are the TT
rates. TT buying, when the dollars have already arrived. TT selling, when the dollars go out right away.
> 1 S: both clock hands sweep together; the two inner rungs glow · 2 S: inner rungs labelled "TT" · 3 S: lower inner
> rung "TT buying" (green), clock note "$ already here" · 4 S: upper inner rung "TT selling" (red), clock note
> "$ out now"

N25 · But sometimes the bank pays the rupees first, then waits for the dollars, and also has to handle documents. In
that case we move to the outer rungs. These are the bill rates.
> 1 S: left clock moves, right clock lags behind, a small document stack appears · 2 S: the outer rungs glow ·
> 3 S: outer rungs labelled "bill"

N26 · Take bill buying. The bank pays the exporter today, handles his documents, but the money in its account abroad
comes only after some weeks. The bank is waiting, it's taking a risk. So it buys at a lower rate.
> 1 S: lowest rung labelled "bill buying" (green) · 2 S: exporter gets rupees now; documents travel abroad; right
> clock shows "weeks" · 3 N: "waiting = risk" · 4 S: arrow pushes the rung lower

N27 · And the interest for that waiting period? That's charged separately. We'll see that in lesson A-twelve.
> 1 S: a small "interest" tag on the waiting gap · 2 N: "charged separately" · 3 N: "→ A12" (side note)

N28 · Bill selling is the other way round. The bank pays the foreign supplier against the import documents, often
before the importer has paid the bank. So the bank sells at a higher rate.
> 1 S: highest rung labelled "bill selling" (red) · 2 S: bank pays a foreign supplier; import documents come in;
> the importer pays later · 3 S: arrow pushes the rung higher

N29 · So let's read the ladder from the top, once, slowly. Bill selling. TT selling. Then the market in the middle. TT
buying. Bill buying. Easy way to remember: bills on the outside, TTs on the inside.
> 1 N: "read from the top" · 2 G: bill selling · 3 G: TT selling · 4 G: middle 85.40 / 85.42 · 5 G: TT buying ·
> 6 G: bill buying · 7 C: card "bills outside · TTs inside" · M: Rates branch adds node "Ladder: bill S · TT S ·
> market · TT B · bill B"

N30 · And just so you know, beyond the bill rates there's currency notes, with the widest gap of all. And in exam sums,
bill rates often have a forward premium added too. I know, lots of names. Don't write all this down, the card at the
end has everything. We'll come to these later.
> 1 S: faint extra rungs beyond the ladder, "notes: widest gap" (grey, dimmed) · 2 S: small "+ forward premium" tag
> beside the bill rungs, dimmed · 3 N: "lots of names!" · 4 N: "the end card has it" · 5 S: the faint rungs fade

N31 · Okay, now let's build the board ourselves. Calculators out, everyone. These are the bank's margins on the screen.
And one small habit I want you to pick up: use a multiplier, not the percent key. It's cleaner.
> 1 S: ladder moves left; the calculator slides in on the right · 2 G: calculator · 3 S: margins table writes on:
> "TT buy −0.05% · bill buy −0.15% · TT sell +0.10% · bill sell +0.15% on TT sell · illustrative" · 4 N:
> "multiplier, not %" · 5 S: "+0.10% → × 1.001" written as an example

N32 · Selling rates go up from the ask. So TT selling is eighty-five point four two, into one point zero zero one,
equals…
> 1 G: ask 85.42 and the up arrow · 2 S: calculator keys press "85.42 × 1.001 =" in step with the words

N33 · Eighty-five point five zero five four two. Round it to four decimals, and you get eighty-five point five zero
five four. Simple.
> 1 S: display shows 85.50542 · 2 S: last digit greyed, "85.5054" written onto the TT selling rung · 3 N: "simple"

N34 · Buying rates come down from the bid. So TT buying is eighty-five point four zero, into point nine nine nine five,
equals… eighty-five point three five seven three.
> 1 G: bid 85.40 and the down arrow · 2 S: keys press "85.40 × 0.9995 =", display 85.3573, written onto the TT
> buying rung

N35 · Now it's your turn. Bill buying is the bid, less point one five percent. Pause the video, press the keys, and
then come back.
> 1 N: "your turn" · 2 S: "85.40 less 0.15% = ?" on the bill buying rung · 3 C: pause card with a 12 s ring (hold)

N36 · Done? Eighty-five point four zero, into point nine nine eight five. You should get eighty-five point two seven
one nine. Did you? Great.
> 1 N: "done?" · 2 S: keys "85.40 × 0.9985 =" · 3 S: display 85.2719, written onto the bill buying rung ·
> 4 N: "you?" · 5 N: "✓"

N37 · One more, and this time you're on your own. Bill selling is another point one five percent, on top of the TT
selling rate. Pause and try it.
> 1 N: "on your own" · 2 S: "TT selling + 0.15% = ?" on the bill selling rung, arrow from the TT selling rung ·
> 3 C: pause card with a 12 s ring (hold)

N38 · Okay. Eighty-five point five zero five four two, into one point zero zero one five. Answer, eighty-five point
six three three seven.
> 1 S: — (ring clears) · 2 S: keys "85.50542 × 1.0015 =" · 3 S: display 85.63367813 → "85.6337" written onto the bill
> selling rung

N39 · Now be careful here, this is where people slip. Some of you put that margin on the market ask. But it goes on the
TT selling rate. If you just add both margins to the ask, you get eighty-five point six three three six. Only the last
digit is off, but in the exam, that's the wrong option.
> 1 C: trap card (sticky note) slides in · 2 S: "Some of you" cloud: "85.42 × 1.0025" · 3 S: arrow from the TT
> selling rung to the bill selling rung, "on TT selling!" · 4 S: cloud's result "85.6336" next to "85.6337", last
> digits circled · 5 N: "1 digit = wrong option"

N40 · And look at that, these are the same four prices we saw on the board at the start. One small tip: if the question
tells you how to round, just follow what it says.
> 1 S: board from N01 slides back beside the finished ladder; each price links to its rung with a thin line ·
> 2 N: "rounding: follow the question"

N40a · Okay, I know it's late and some of you are tired. That's fine, the hardest part is over. You've done two sums
with your own hands, that's real progress. Now the fun part: a quick quiz. I'll give you a deal, you tell me the rate.
> 1 M: corner card "1 ✓ · 2 ✓ · 3 next" · 2 N: "hardest part: done" · 3 S: two small ticks beside the TT buying and
> bill buying answers · 4 N: "quiz!" · 5 S: a deck of small deal cards sketched, face down

N40b · [chuckles] And not too slow. In the exam you won't have much time per question, so let's practise thinking fast.
Ready?
> 1 S: a small stopwatch icon · 2 N: "think fast" · 3 S: the first deal card turns over; 1 s breath after the line

## Chapter 3 · Five deals, one map

N41 · So, let's put each deal on its rung. FEDAI's rules tell us which one. I'll give you the deal first, and you guess
before I tell you. Every time, okay?
> 1 S: chapter title slides in "3 · Five deals, one map"; the finished ladder at the centre · 2 S: source tag
> "FEDAI Rules 2–4" · 3 N: "guess first!" · 4 N: "every time"

N42 · First one. A remittance comes in from abroad and is paid out in rupees.
> 1 N: "deal 1" · 2 S: deal card "inward remittance → ₹", green arrow in, both clocks together

N43 · TT buying. Because the dollars are already sitting in the Nostro.
> 1 S: card flies to the TT buying rung · 2 S: right clock shows "$ already here" · source tag "Rule 4.4"

N44 · Next. The father's fee goes out by wire.
> 1 N: "deal 2" · 2 S: deal card "fee goes out by wire", red arrow out

N45 · TT selling. Easy one.
> 1 S: card flies to the TT selling rung · 2 N: "easy" · source tag "Rule 4.1"

N46 · An exporter's bill is bought by the bank on the same day he brings it.
> 1 S: deal card "export bill bought today", documents icon, left clock moves first

N47 · Bill buying. The bank pays now and waits for the dollars.
> 1 S: card flies to the bill buying rung · 2 S: right clock lags, "waits" · source tag "Rule 2.1(a)"

N48 · Now this one's a little tricky. An export bill is sent on collection. The bank pays only after the dollars reach
its Nostro.
> 1 N: "tricky!" · 2 S: deal card "export bill on collection"; documents travel · 3 S: the right clock moves first,
> then the left

N49 · TT buying! Because by then, the money has arrived. There's nothing to wait for.
> 1 S: card hovers over bill buying, then drops to TT buying · 2 S: right clock "$ arrived" · 3 N: "no waiting"
> · source tag "Rule 2.5(a)"

N49a · I'm sure a few of you said bill buying there. It's a very common slip. Just remember: on collection, the bank
pays only after the money has arrived. So no waiting, so TT.
> 1 S: "Others" cloud "bill buying?" crossed out · 2 N: "common slip" · 3 C: small card "collection = pay after
> arrival" · 4 N: "no waiting → TT"

N50 · Last one. An importer retires his import bill, and there's no forward contract.
> 1 N: "last one" · 2 S: deal card "import bill retired · no forward contract", red arrow out, documents in

N51 · Bill selling.
> 1 S: card flies to the bill selling rung · source tag "Rule 3.1(a)" · M: Rates branch adds node "Rate map: 5 deals"

N52 · And one thing that overrides all of these. If the customer has a forward contract, then the contract rate
applies, not the board rate. Keep that in mind.
> 1 S: a stamp "FORWARD CONTRACT" hovers over the ladder · 2 S: stamp lands; a note card "contract rate wins" ·
> 3 N: "keep in mind"

N52a · Now here's a question that splits the class every time. An export bill comes back unpaid. The bank had bought it
at bill buying. So now, to reverse it, which rate? Some of you are saying, simple, bill selling. Others are not so
sure. What do you say?
> 1 N: "splits the class" · 2 S: export bill card returns stamped "UNPAID" · 3 G: bill buying rung · 4 S: arrow
> "reverse → ?" · 5 S: "Some of you" cloud: "bill selling" · 6 S: "Others" cloud: "not sure…" · 7 N: "you?"

N53 · If you said bill selling, close, but no. And this is exactly the trap the exam loves. Everyone, listen to this one
carefully.
> 1 S: "Some of you" cloud fades, half crossed · 2 C: trap card sticky note "exam favourite" · 3 N: "listen!"

N54 · Think about it. The bank has already paid this exporter in rupees. Now the dollars are never coming. So he owes
the bank those dollars. What does the bank do? It turns that dollar debt into a rupee debt.
> 1 S: — · 2 S: rupee arrow from N47 shown already paid · 3 S: right clock stops, "$ never coming" · 4 S: a "USD
> owed" tag on the exporter · 5 N: "bank does?" · 6 S: "USD owed" morphs into "₹ owed"

N55 · So it's like the bank is selling him those dollars. But no documents are going anywhere, it's just a plain
conversion. And that's why it's TT selling, not bill selling.
> 1 S: the counter flips to the amber side (the counter seen from the reversed angle) · 2 S: documents icon crossed
> out · 3 S: card lands on TT selling; source tag "Rule 2.1(b)(iii)"

N56 · When a bill isn't paid on its due date and the bank converts it like this, we call it crystallisation. When
exactly? That's set by each bank's own policy, under the FEDAI rules. So in the exam, don't look for a fixed day
unless the question gives you one.
> 1 N: "crystallisation" (gold band) · 2 N: "when?" · 3 S: source tag "Rule 2.1(b)(i): bank's own policy" ·
> 4 S: a calendar with a question mark; "the question gives the day" written under it

N57 · And if the dollars do come in later, the bank converts them at TT buying.
> 1 S: right clock restarts; green arrow in; card to TT buying; source tag "Rule 2.1(c)"

N58 · And the same flip happens when a forward contract is cancelled. A purchase contract is cancelled at TT selling, a
sale contract at TT buying. We'll do those sums in lesson A-six.
> 1 S: amber flip again, on a forward contract card · 2 S: "purchase contract cancelled → TT selling", "sale
> contract cancelled → TT buying"; source tag "Rule 6.4(ii)" · 3 N: "→ A06" · M: node "Amber: reversing flips the
> side"

N58a · Now some of you are thinking, okay, so whenever we undo a deal, we flip to the other side of the counter. Is it
always like that?
> 1 S: "Some of you" cloud: "undo = always flip?" · 2 N: "always?"

N59 · Let's test it. An unpaid import bill gets crystallised. Does the side flip? What do you think?
> 1 N: "test" · 2 S: import bill card stamped "UNPAID · crystallised" · 3 S: amber flip arrow drawn dashed, "flip?" ·
> 4 C: pause ring 4 s (hold)

N59a · Some of you will say yes, it flips, because it's crystallisation again. But think. Is anything being undone
here? No. The importer is still buying dollars from the bank. So it's bill selling, same as retirement.
> 1 S: "Some of you" cloud: "yes, flip" · 2 N: "think" · 3 S: "undone?" written · 4 S: "No" · 5 S: red arrow:
> importer still buys dollars · 6 S: card to bill selling; the dashed flip arrow is erased

N60 · FEDAI's rule three point one says exactly that: the same rate as retirement. Only when you undo a deal the bank
has already made does the side flip.
> 1 S: source tag "Rule 3.1(b): same as retirement" · 2 C: card "flip only when the bank's own deal is undone"

N61 · So, let's go back to where we started. The father's eighteen thousand dollars go out at TT selling. That's
fifteen lakh thirty-nine thousand and ninety-seven rupees, twenty paise.
> 1 S: the opening counter returns with the father and the exporter · 2 S: TT selling rung glows; "18,000 ×
> 85.5054" writes on · 3 S: "= ₹15,39,097.20" writes on as it is spoken

N62 · And the exporter's forty thousand dollar bill is bought at bill buying. That's thirty-four lakh ten thousand eight
hundred and seventy-six rupees, before interest for the transit period.
> 1 S: bill buying rung glows; "40,000 × 85.2719" writes on · 2 S: "= ₹34,10,876.00" writes on; small tag "before
> transit interest (A12)"

## Recap and practice

N63 · Okay, two quick questions before we finish. One. An importer sends an advance payment for his goods by wire. Which
rate?
> 1 N: "2 quick questions" · 2 S: practice card "Q1" · 3 S: "advance payment for imports, by wire" · 4 N: "which
> rate?"

N64 · TT selling. Because it's a remittance going out, it's not an import bill.
> 1 S: answer "TT selling" · 2 S: "remittance out, no import bill (yet)" written; source tag "Rule 4.1"

N65 · Two. Put these in order, highest first. TT buying, bill selling, bill buying, TT selling.
> 1 S: practice card "Q2" · 2 S: four shuffled tiles: TT buying · bill selling · bill buying · TT selling ·
> 3 C: pause ring 6 s (hold)

N66 · Bill selling, TT selling, TT buying, bill buying. Did you get both? Very good.
> 1 S: tiles slide into ladder order, top to bottom · 2 N: "both?" · 3 N: "✓"

N67 · So here's the whole lesson on one card. Step one: is the money coming in or going out?
> 1 M: the Rates branch shows complete (all five nodes inked) · 2 S: recap card, step 1 "In or out?" with the green
> and red arrows

N68 · Step two: do the rupees and the Nostro move together, or does the bank pay first and handle documents? That tells
you the rung.
> 1 S: step 2 "Together → TT · bank pays first + documents → bill" with the two clocks · 2 G: the ladder's rungs

N69 · And remember: if you're undoing a deal the bank has already made, the side flips.
> 1 S: step 3 "Undoing the bank's own deal → flip (amber)"

N69a · So next time you're at that counter, you'll be standing on the right side.
> 1 S: the little figure stands on the bank side of the counter, smiles; the board's four prices glow once

N70 · [warmly] That's it for today. Next class, we follow those dollars abroad, into the bank's Nostro account. And
you'll see exactly why a TT rate and a bill rate are different.
> 1 S: page settles · 2 S: a dotted line from the counter across a sea sketch to "Nostro (A02)" · 3 N: "TT vs
> bill: why?"

N70a · Before you go, one small homework. Draw this ladder once tonight, from memory, with all four rungs. Then do the
three practice questions. Ten minutes, while it's fresh.
> 1 N: "homework" · 2 S: an empty ladder outline with four blank rungs · 3 S: "3 practice questions" tag · 4 N: "10
> minutes"

N70b · Well done today. Rest a little, and keep that counter in your head. I'll see you soon.
> 1 S: the finished Module A map with the Rates branch inked, the rest dimmed · 2 S: the counter sketch at the
> centre of the branch · 3 S: fade to the end card
