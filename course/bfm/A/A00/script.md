# A00 · "The market behind the counter" (one teacher, online class; script v2 with cue sheet)

- **Plan**: `course/bfm/A/plans_A.md` §A00 (draft 2). Course order v3: video 2, after 00, before A01.
- **Syllabus**: A1.1 Foreign exchange: definition and markets · A1.2 Factors determining exchange rates · A1.3
  Exchange rate mechanism. A1.4 (dealing room, C01) and A1.5 (derivatives, A05/A06, C08/C09) are only named.
- **Facts**: every rule and date from `research/bfm/facts/A1.1-A1.3_A00.md`; sources per claim in `claims.csv`.
- **Status**: v2, 2026-11-20. v1 reviewed by three fresh agents (expert, examiner, beginner: all ADOPT WITH FIXES;
  `review_v1_*.md`); every High and Medium finding fixed here, see `review_ack_v1.md`. v2 goes back to review.
- **Rule version (opening card)**: "FEMA 1999 and FEDAI Rules as at 31 December 2026 · RBI Annual Report 2025-26 ·
  FBIL methodology (version of 15 Jan 2019)". Re-check at the fact freeze (claims marked *freeze*).
- **Evidence (warm-up line N00d)**: "Factors affecting foreign exchange rates" and a forex settlement-date question
  (both June 2023, `research/bfm/items_tagged.csv`); spot as the market's default quote (full paper Dec 2025, Q71).
- **Greeting / goodbye** (register `course/bfm/greetings.md`): greeting "Hi everyone, good to see you. Welcome to
  the first real class of Module A."; goodbye "That's our class for today. Take care of yourselves, and I'll see you
  in the next one." Time-neutral (00 before it is an evening video).
- **Voice**: PLAYBOOK §5b. One AI teacher voice, no name, never "Sir"; an online class; "Some of you / Others"
  bubbles. Disclosure card: "The voice in this lesson is AI-generated." ElevenLabs tags used sparingly.
- **Money**: US dollars and rupees; no deal sums in this lesson. The receipt rates in the opening (85.20, 85.65)
  are **illustrative**, labelled so on screen; update them to rates near the market at the freeze, keeping a move
  of tens of paise.
- **Say it right** (also on the voice page): FEMA "FEE-ma"; FEDAI "fe-DYE"; FERA "FEE-ra"; LERMS "lerms"; Tom
  "tom" as in Tom; R-B-I, F-B-I-L, O-T-C, I-M-F letter by letter (spelt so in the lines). Numbers and years are
  written in words.
- **Numericals**: none graded (plan). `numericals.md` records why. The parity sums are in A05, cross rates in A04.
- **Length**: about 2,000 spoken words: about 14.3 minutes of speech and about 14.6 with the holds; warm-up,
  opening and four chapters, each under 4.5 minutes (spec: 12–15 minutes).
- **Holds** (for `tools/video/timeline.py`, key `A00`): N05 5 s (lock your answer), N31 5 s, N45 8 s (pause for the
  three questions); 1 s after N12a, N24a, N34 (chapter breath).
- **Left out on purpose**: the date India moved to direct quotes (August 1993 is widely taught, but no RBI or FEDAI
  text for it has been found yet; add it only after one is read); authorised dealers (taught in A02 with FEMA s. 10).

## How to read the cue sheet
Same kinds as A01 and A07 (PLAYBOOK §5e): **S** scene · **N** teacher's note (top band y ≈ 100–150 or beside the
scene; never outlives its line) · **G** glow · **M** map · **C** card. One beat per script sentence, numbered.
Pictures: **the counter** (from A01, seen from the side here, a window behind it opening onto the market); **the
world strip** (a flat world map, centres lighting east to west as the sun moves: Sydney, Tokyo, Singapore, Mumbai,
Dubai, London, New York); **the three pockets** (FEMA s. 2(n): three labelled pockets on a coat); **the four
calendar boxes** (Today · Tomorrow · Day 2 · Later); **the ledger** (India's account book with the world, two
columns); **the see-saw** (dollars wanted on one end, dollars offered on the other; the rate is the dial reading);
**RBI's hand** (steadies the see-saw, never holds it still); **the road** (India's path, five milestones). Map:
Module A map, new branch "The market behind the counter" at 11 o'clock, just before "Rates" at 12 (A01).

---

## Warm-up

N00a · [warmly] Hi everyone, good to see you. Welcome to the first real class of Module A.
> 1 S: notebook page opens; disclosure card, then rule-version card fade by · 2 N: "Module A · class 1" (top band)

N00b · Last time we talked about the paper. Today we finally start the subject. No calculator needed today, I promise.
> 1 N: "last time: the paper" · 2 N: "today: the subject" · 3 S: the calculator slides in, gets a small "not today"
> tag and slides out

N00c · Quick question first. When the rupee falls against the dollar, who decides that?
> 1 N: "quick question" · 2 S: a headline strip "Rupee slips against dollar" (generic, no paper's name), a question
> mark beside it

N00d · Most people have a vague answer. R-B-I, the government, the market, someone. But I-I-B-F likes this area.
Questions on what moves exchange rates, and on settlement dates, both show up in the papers we checked.
> 1 S: three faint guesses float up: "RBI?" "Govt?" "the market?" · 2 N: "vague" · 3 N: "IIBF likes this" ·
> 4 S: guesses fade; two exam chips stamp in: "Factors · Jun 2023", "Settlement date · Jun 2023"

N00e · And everything in Module A, every rate and every sum, sits on top of today's picture. So today is the
foundation. No heavy theory, I'll keep it simple. Stay with me, okay?
> 1 M: the Module A map appears, empty; a new branch outlined at 11 o'clock · 2 N: "foundation" · 3 N: "no heavy
> theory" · 4 S: page glides to the opening

## Opening

N01 · Picture a branch counter, eleven in the morning. A customer comes back with yesterday's receipt in his hand.
> 1 S: the counter from the side, "illustrative" label · 2 S: a customer figure with a receipt slip

N02 · He says, "Yesterday you gave me dollars at eighty-five twenty. Today your board says eighty-five sixty-five.
Who changed it? R-B-I?"
> 1 S: the receipt enlarges: "USD/INR 85.20 · yesterday · illustrative" · 2 S: the board behind the counter:
> "85.65 · today" · 3 S: a speech bubble "Who changed it?" · 4 N (in bubble): "RBI?"

N03 · Fair question, right? And the officer at the counter has to answer it in one line.
> 1 N: "fair question" · 2 S: the officer figure, a blank speech bubble

N04 · Now I know what many of you are thinking. R-B-I fixes the rupee rate every morning, and banks just follow. And
a few of you are thinking the opposite. Each bank decides its own rate, any rate it likes.
> 1 S: thought cloud "Some of you" appears · 2 N (in cloud): "RBI fixes it every morning · banks follow" · 3 S:
> cloud "Others" appears · 4 N (in cloud): "each bank sets its own, any rate"

N05 · So which one is it? Lock your answer.
> 1 S: both clouds pulse · 2 C: pause card with a 5 s ring (hold)

## Chapter 1 · What foreign exchange is

N06 · Okay. Here's the honest answer. Neither. And by the end of today you'll know exactly why. But first, we need
one word clear. What is foreign exchange?
> 1 S: chapter title slides in "1 · What foreign exchange is" · 2 N: "honest answer" · 3 S: both clouds get a small
> cross, "neither" · 4 N: "why: by the end" · 5 S: the counter shrinks to the left; a coat with three pockets is
> drawn on the right · 6 N: "foreign exchange = ?"

N07 · The law for this is FEMA, the Foreign Exchange Management Act of nineteen ninety-nine. It came into force in
June two thousand, replacing the old FERA.
> 1 S: a law-book card "FEMA 1999" · 2 N: "in force 1 June 2000 · replaced FERA 1973"

N08 · FEMA first defines foreign currency simply. Any currency other than Indian currency. Dollar, euro, yen,
dirham, all foreign currency.
> 1 S: card line "s. 2(m) foreign currency" · 2 N: "= any currency other than Indian" · 3 S: four small notes
> drawn: USD, EUR, JPY, AED

N09 · Then it defines foreign exchange, and this is wider. Foreign exchange means foreign currency, and it includes
three more things. Think of them as three pockets.
> 1 S: card line "s. 2(n) foreign exchange = foreign currency + …" · 2 G: "includes" · 3 S: the three pockets on
> the coat light up, empty

N10 · Pocket one: deposits, credits and balances payable in a foreign currency. Like an exporter's dollar account.
> 1 S: pocket 1 fills: "deposits · credits · balances in FCY" · 2 S: a small passbook "USD a/c" tucked in

N10a · Pocket two: drafts, travellers cheques, letters of credit or bills drawn in rupees, but payable in a foreign
currency.
> 1 S: pocket 2 fills: "drafts · TCs · LCs · bills: drawn in ₹, payable in FCY"

N10b · Pocket three is the surprise. The same kinds of paper, drawn by someone outside India, but payable in rupees.
> 1 G: pocket 3 · 2 S: pocket 3 fills: "same papers, drawn abroad, payable in ₹"

N11 · Read that third one again. Payable in rupees, and still foreign exchange, because it's drawn from outside India.
Examiners love that line.
> 1 N: "payable in ₹ … still forex!" · 2 S: a small globe stamp on pocket 3 · 3 N: "exam favourite"

N12 · So the hook is simple. Foreign currency is the money itself. Foreign exchange adds every deposit, balance and
paper claim that stands for it.
> 1 N: "the hook" · 2 S: the money on the left: a note and a cheque, tag "foreign currency" · 3 S: the full coat on
> the right, a bracket "foreign exchange" over both

N12a · And the exchange rate is just the price of one currency in another. In India we quote it directly: so many
rupees for one dollar. An importer paying dollars wants a strong rupee. An exporter receiving dollars likes a weaker
one. Same rate, opposite feelings. Okay, first chapter done.
> 1 S: a price tag "₹ per 1 USD" · 2 N: "direct quote" · 3 S: importer figure, tag "pays USD · wants strong ₹" ·
> 4 S: exporter figure, tag "gets USD · likes weak ₹" · 5 N: "same rate, opposite feelings" · 6 M: branch node 1
> "what forex is"; a check mark on the chapter title

## Chapter 2 · The market and its players

N13 · Now, where is this market? Here's the first surprise. There's no building.
> 1 S: chapter title "2 · The market and its players" · 2 N: "surprise" · 3 S: an empty building outline, crossed
> out

N14 · The forex market is over the counter, O-T-C. Careful, that's not our branch counter. It just means there's no
exchange in the middle. Banks and dealers deal with each other directly, mostly on screens.
> 1 N: "OTC" · 2 S: the branch counter icon with a small "not this" tag · 3 N: "no exchange in between" · 4 S:
> dealer screens linked by thin lines

N15 · And it follows the sun. The day starts in Sydney and Tokyo and ends in New York. So somewhere it's open round
the clock on weekdays.
> 1 S: the world strip; a small sun at the far east · 2 S: centres light east to west: Sydney, Tokyo, Singapore,
> Mumbai, Dubai, London, New York · 3 N: "round the clock, weekdays"

N16 · In India, the normal market hours for rupee deals are nine in the morning to five in the evening. And Saturday
is not a working day for forex.
> 1 G: Mumbai; S: a clock "normal hours 9.00 a.m. to 5.00 p.m. IST · FEDAI Rule 1.1" · 2 N: "Saturday ✗"

N17 · Now, who's trading? The central bank, for its reserves and to steady the market. Banks, for their customers
and their own trading.
> 1 S: a ring of players around the world strip · 2 S: "RBI · reserves, steadying" · 3 S: "banks · customers,
> trading"

N17a · Companies, for trade, and to protect themselves from rate changes. Investors and funds. Brokers who bring
buyers and sellers together. And individuals.
> 1 S: "companies · trade, protection" · 2 S: "investors · funds" · 3 S: "brokers" · 4 S: "individuals"

N18 · Their reasons boil down to five. Trade, investment, hedging, speculation, and arbitrage. Hedging means
protecting yourself from a rate change. Speculation means taking a risk to profit from one.
> 1 N: "5 motives" · 2 S: five tags drop under the ring: trade · investment · hedging · speculation · arbitrage ·
> 3 S: an umbrella icon on "hedging = protect" · 4 S: a dice icon on "speculation = bet on a move"

N19 · Arbitrage gets one card. Buy where it's cheap, sell where it's dear, at the same moment. With two currencies or
two centres, it's simple arbitrage. With three or more, like rupee to dollar to euro and back, it's compound.
> 1 C: rule card "Arbitrage" · 2 S: two centres, an arrow cheap → dear · 3 S: label "simple: 2 currencies or
> centres" · 4 S: a triangle ₹ → $ → € → ₹, label "compound (triangular): 3 or more"

N20 · And because arbitrageurs jump on every gap, prices in different centres stay close.
> 1 S: the gap between the two centre prices closes; N: "keeps prices together"

N21 · Next, the two tiers. Banks dealing with each other is the interbank market, the wholesale side. A bank dealing
with you is the merchant market, and merchant here means any customer. Merchant rates are interbank rates plus a
margin.
> 1 N: "two tiers" · 2 S: upper tier drawn "interbank · bank ↔ bank · wholesale" · 3 S: lower tier "merchant · bank
> ↔ any customer" · 4 S: an arrow from interbank down to the counter board, tag "+ margin"

N22 · Everyone with me? Good. Now a part that's asked as a straight question. When is a deal settled? The day the
money actually changes hands is called the value date.
> 1 N: "with me?" · 2 N: "good" · 3 N: "asked straight" · 4 S: the four calendar boxes drawn empty: Today ·
> Tomorrow · Day 2 · Later · 5 N: "value date = money changes hands"

N23 · FEDAI, the banks' own association that frames the rules for forex dealing, gives four names. Cash or ready,
settled the same day. Tom, short for tomorrow, settled the next working day. Spot, settled on the second working day
after the deal. And forward, anything beyond spot.
> 1 S: a small FEDAI badge "banks' association · forex rules" · 2 S: box 1 fills "cash / ready · same day" · 3 S:
> box 2 "tom · next working day" · 4 S: box 3 "spot · 2nd working day" · 5 S: box 4 "forward · beyond spot"

N23a · Spot is the market's base rate. A dealer's quote is a spot rate unless it says otherwise, and forward periods
are counted from the spot date.
> 1 G: box 3, tag "default quote" · 2 S: an arrow from box 3 to box 4 "counted from spot"

N24 · Now be careful, this is where people slip. Spot does not mean today. Spot means the second working day, so
weekends and holidays are simply skipped. A Monday deal with Wednesday a holiday settles on Thursday.
> 1 C: trap card frame drawn · 2 S: trap card "spot = today ✗" · 3 S: "spot = 2nd working day ✓" · 4 S: a calendar
> "Mon deal · Tue · Wed holiday (struck) · Thu = spot"

N24a · One more date rule, for a customer's forward contract. If its delivery date turns out to be a holiday known at
least three working days ahead, deliver on the working day before. If the holiday is sudden, deliver on the next
working day. That's chapter two. Deep breath.
> 1 S: a small forward-contract tag "fwd delivery date on a holiday" · 2 S: arrow back "known (3+ working days) →
> preceding working day" · 3 S: arrow forward "sudden → next working day · FEDAI 1.4, 5.2" · 4 M: branch nodes 2
> "players" and 3 "deal dates" · 5 S: chapter tick

## Chapter 3 · Why rates move

N25 · Okay, back to our customer. Why was the dollar dearer today?
> 1 S: chapter title "3 · Why rates move" · 2 S: the customer and receipt return, small, top left

N26 · A see-saw. On one side, people who want dollars. Importers paying bills, students paying fees, investors
pulling money out. On the other side, people who have dollars to sell. Exporters, money sent home from abroad,
investors bringing money in.
> 1 S: the see-saw drawn; a dial above the pivot reads "₹ per $" · 2 S: left end labelled "want $" · 3 S:
> importer, student, outflow icons on the left · 4 S: right end labelled "offer $" · 5 S: exporter, remittance,
> inflow icons on the right

N27 · When more people want dollars than offer them, the dollar side goes heavy. The rupee weakens. When dollars pour
in, the rupee strengthens. That's the whole engine.
> 1 S: left end sinks · 2 S: the dial needle moves up "₹ weaker" · 3 S: right end fills; needle moves down
> "₹ stronger" · 4 G: the see-saw; N: "the whole engine"

N27a · See, the rate is rupees for one dollar. If you need more rupees for one dollar, the rupee has become weaker.
So our customer's eighty-five sixty-five means the rupee fell a little overnight.
> 1 S: the price tag "₹ per 1 USD" returns · 2 S: 85.20 → 85.65, an arrow up on the number, a small arrow down on a
> rupee coin, tag "more ₹ per $ = weaker ₹" · 3 S: the customer's receipt gets a small "₹ fell" stamp

N28 · What pushes the see-saw? The factors fall into three groups. Fundamental, technical, and speculative.
> 1 N: "what pushes it?" · 2 S: three empty boxes under the see-saw · 3 S: box labels: fundamental · technical ·
> speculative

N28a · But first, a thirty-second refresher from J-A-I-I-B. The balance of payments is India's account book with the
rest of the world.
> 1 N: "JAIIB refresher · 30 s" · 2 S: the ledger "India ↔ world" drawn, two columns

N28b · The current account holds trade, services, and money sent home by Indians abroad. The capital account holds
investment and loans coming in and going out. And no, this current account is not the one at your branch.
> 1 S: column 1 "current: trade · services · remittances" · 2 S: column 2 "capital: investment · loans" · 3 S: a
> branch passbook marked "CA" with a small cross, tag "not this one"

N29 · Fundamental factors are the economy itself. A big current account deficit means India spends more abroad than it
earns, so the rupee weakens. Inflation higher here than abroad weakens it. Higher interest rates pull money in and
strengthen it. Then growth, the government's finances, foreign investment, and political stability.
> 1 S: box 1 fills: "economy" · 2 S: "CAD: spend > earn → ₹ weaker" · 3 S: "inflation here > abroad → ₹ weaker" ·
> 4 S: "interest rates ↑ → money in → ₹ stronger" · 5 S: "growth · fiscal · FDI/FPI · stability"

N30 · Technical factors are about how the market is set up. Government controls, limits on capital moving in and
out, and the demand and supply sitting in the market that day. And speculative factors are expectations. If traders
expect the dollar to rise, they buy it, and it rises.
> 1 S: box 2 fills: "controls · capital limits · market position" · 2 S: box 3 fills: "expectations" · 3 S: a small
> loop arrow "expect up → buy → up" · 4 M: branch node 4 "three groups of factors"

N31 · Quick check. Some of you are thinking, if inflation in India runs higher than in the U-S, the rupee gets
stronger. Others are thinking it gets weaker. Which is it?
> 1 N: "quick check" · 2 S: cloud "Some of you": "inflation India > US → ₹ stronger" · 3 S: cloud "Others":
> "→ ₹ weaker" · 4 C: pause card, 5 s ring (hold)

N32 · Weaker. If the same basket of goods gets dearer faster in India than in the U-S, each rupee buys less. So over
time, it's worth less against the dollar. That idea has a name, purchasing power parity. You only need the idea today.
> 1 S: "Others" cloud ticked, "Some of you" crossed · 2 S: two baskets, India and USA, same goods; India's price tag
> grows faster · 3 S: the rupee coin shrinks a little against the dollar coin · 4 N: "PPP" · 5 N: "idea only"

N33 · One more idea. Interest rate parity, and it's about the price for a future date. If the future price is lower
than today's, that's a forward discount. If it's higher, a forward premium.
> 1 N: "one more idea" · 2 S: a timeline "today | future date", two price tags · 3 S: future tag lower, label
> "forward discount" · 4 S: future tag higher, label "forward premium"

N33a · The rule: the currency with the higher interest rate trades at a forward discount. Not a premium, a discount.
And if the rupee is at a discount, the dollar is at a premium.
> 1 S: two piggy banks, "higher interest" and "lower interest"; "forward discount" under the first · 2 C: trap card
> "forward premium ✗ · forward discount ✓" · 3 S: a flip arrow "₹ at discount ⇄ $ at premium"

N33b · Don't mix this with the see-saw. Higher rates pull money in and lift a currency today. Parity is only about the
forward price. The sums come in A-zero-five.
> 1 N: "don't mix" · 2 S: the see-saw thumbnail, "today: money in → stronger" · 3 S: the timeline thumbnail,
> "future price: discount" · 4 N: "sums: A05"

N34 · They're classic traps, and now you won't fall for them. Chapter three, done.
> 1 S: both trap cards shrink into the see-saw corner · 2 S: chapter tick; M: branch node 4 pulses

## Chapter 4 · Who sets the rate in India?

N35 · Now the big question from the start. Does R-B-I fix the rate? Let's walk India's road, quickly.
> 1 S: chapter title "4 · Who sets the rate in India?" · 2 N: "does RBI fix it?" · 3 S: the road drawn left to
> right, five milestone posts

N36 · First, the regimes. A fixed rate is set officially, and the central bank holds it there. A floating rate is set
purely by the market. And a managed float is in between: the market sets it, the central bank smooths it, with no
fixed target.
> 1 N: "regimes" · 2 C: card "fixed · set officially, held" · 3 S: card "floating · market only" · 4 S: card
> "managed float · market sets, central bank smooths, no target"; G: managed float

N36a · And mind two words. An official cut in a fixed rate is a devaluation. A market fall in a floating rate is a
depreciation, and a rise is an appreciation.
> 1 N: "two words" · 2 S: compare card left "devaluation = official cut (fixed)" · 3 S: right "depreciation = market
> fall · appreciation = market rise (floating)"

N37 · India started with a par value system, a fixed official rate, under the Bretton Woods system after the Second
World War. When that system broke down in nineteen seventy-one, the rupee was linked to the pound sterling.
> 1 S: post 1 "par value · Bretton Woods" · 2 S: post 2 "1971 · linked to £ sterling"

N38 · From September nineteen seventy-five, it was pegged to a basket of currencies, so no single currency could
pull it around.
> 1 S: post 3 "Sept 1975 · basket peg", a small basket of coins on the post

N39 · Then came the crisis of nineteen ninety-one. In July, the rupee was devalued in two steps, about eighteen percent
in all.
> 1 S: a storm cloud "1991 crisis" · 2 S: a down arrow "Jul 1991 · devalued in 2 steps · ≈ 18%"

N39a · In March nineteen ninety-two came the Liberalised Exchange Rate Management System, LERMS. A dual rate: forty
percent of exchange earnings at the official rate, sixty percent at the market rate.
> 1 S: post 4 "Mar 1992 · LERMS · dual rate" · 2 S: a bar split "40% official · 60% market"

N40 · And in March nineteen ninety-three, the two rates were unified. From then, the rupee's rate is market
determined. In August nineteen ninety-four, the rupee became convertible on the current account, as India accepted
Article Eight of the I-M-F.
> 1 S: post 5 "Mar 1993 · unified" · 2 G: post 5, tag "market-determined" · 3 S: a small flag past the road "Aug
> 1994 · current account convertible · IMF Art. VIII"

N40a · Convertible on the current account means you can freely change rupees into dollars for trade, services or
travel. Capital moves still have limits.
> 1 S: an arrow ₹ → $ with "trade · services · travel ✓" · 2 S: "capital: limits" greyed

N41 · So what does R-B-I do today? It doesn't fix the rate. India runs a managed float. In R-B-I's own words, it acts
to keep the market orderly and contain excessive volatility. It buys or sells dollars from its reserves when the swings
get jerky.
> 1 S: RBI's hand reaches toward the see-saw · 2 N: "fix ✗" · 3 N: "managed float" · 4 S: quote card "orderly ·
> contain excessive volatility · RBI Annual Report 2025-26" · 5 S: the hand dampens a wild swing; the see-saw still
> moves gently

N42 · And the reference rate you see every afternoon? It's published by F-B-I-L, Financial Benchmarks India, since
July twenty eighteen.
> 1 S: a notice board "FBIL reference rate" · 2 N: "FBIL · since 10 July 2018"

N42a · It's built from real spot trades in a random fifteen-minute slot, between eleven-thirty and twelve-thirty in the
morning. It comes out at about one-thirty in the afternoon.
> 1 S: a clock band 11.30 to 12.30 with a random 15-minute slice lit · 2 S: "≈ 1.30 p.m. · Mumbai business days"

N43 · It's a benchmark, used for things like converting figures in reports. It isn't a rate that R-B-I forces on
your deal. Your counter rate comes from the interbank market, plus your bank's margin.
> 1 N: "benchmark"; S: a report sheet with "₹ conversion" · 2 N: "not imposed" · 3 S: arrow interbank → board,
> "+ margin"; M: branch node 5 "regimes and RBI"

N44 · So, back to our customer. What's the one-line answer? The rate moves with the market every day. R-B-I only
steps in to stop wild swings, and our board follows the interbank rate.
> 1 S: the customer and officer return · 2 N: "one-line answer" · 3 S: officer's bubble: "moves with the market" ·
> 4 S: bubble adds "RBI stops wild swings · board follows interbank"; both opening clouds return, each with a half
> tick

## Recap and practice

N45 · Okay, pause the video now, and answer three questions. One. A deal is struck on Monday for spot. When is it
settled, if there's no holiday? Two. Which of these strengthens the rupee: a bigger current account deficit, higher
inflation in India, or more foreign investment coming in? Three. Since when has the rupee's rate been market
determined?
> 1 C: practice card · 2 N: "1" · 3 S: Q1 "Monday deal, spot" · 4 S: Q1 "settled when?" · 5 N: "2" · 6 S: Q2
> "which strengthens ₹?" with three options · 7 N: "3" · 8 S: Q3 "market-determined since?"; ring 8 s (hold)

N46 · Answers. One, Wednesday, the second working day. Two, more foreign investment coming in. The other two weaken
it. Three, March nineteen ninety-three, when the dual rates were unified. Got all three? Well done.
> 1 N: "answers" · 2 S: Q1 answer "Wednesday · 2nd working day" · 3 S: Q2 answer "foreign investment in" · 4 N:
> "other two weaken" · 5 S: Q3 answer "March 1993 · unified" · 6 N: "all three?" · 7 N: "well done"

N47 · Now let's read the map we built. The market behind the counter. What forex is: the money, plus every claim in
the three pockets. The players and their five motives. Deal dates: cash, tom, spot, forward. Three groups of factors
pushing one see-saw. And regimes: from par value to a managed float, with R-B-I steadying, not fixing.
> 1 M: the whole Module A map, the new branch glowing · 2 M: branch label "The market behind the counter" · 3 M:
> node 1 pulses · 4 M: node 2 · 5 M: node 3 · 6 M: node 4 · 7 M: node 5

## Close

N48 · Small homework. Draw the see-saw tonight, and put three factors on it, each on the side it pushes. Two
minutes, that's all.
> 1 N: "homework" · 2 S: a blank see-saw with three empty sticky notes · 3 N: "2 minutes"

N49 · And next class, we walk up to the counter itself. I'll ask you one question that trips up a lot of people. At
a forex counter, is the bank buying, or selling?
> 1 S: the counter, front view · 2 N: "one question" · 3 S: the question written large: "At a forex counter, is the
> bank buying, or selling?"

N50 · [warmly] That's our class for today. Take care of yourselves, and I'll see you in the next one.
> 1 N: "that's our class" · 2 S: the page closes softly; map A in the corner with its first branch lit
