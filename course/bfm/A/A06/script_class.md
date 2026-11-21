# A06 · "When the plan changes" · CLASS EDITION (script c3, with cue sheet)

- **Status**: **c3 locked, 2026-11-21**: re-review `review_c2.md` ADOPT (0 H, 0 M, 4 L), all Lows applied. If a take runs over 15:00, cut N036a, then N048, then N046. c2, 2026-11-21: every High and Medium of the three c1 reviews fixed (`review_ack_c1.md`). c1,
  2026-11-21. Standard style (`course/spec/lesson_spec.md`): teaching plus sums.
- **Plan**: `course/bfm/A/plans_A.md` §A06. Course order v4: A05 → **A06** → A07.
- **Syllabus**: A1.5 (forwards), A1.6 (FEDAI rules: Rules 2.2(c), 6), A1.7 (forex arithmetic).
- **Facts**: `research/bfm/facts/A1.5-A1.7_A06.md`; rows cited as [F3]. Sums: `numericals.md`, checked two ways by
  `tools/check/fx_forward_contracts.py`. Practice: `practice.md` (8 items).
- **Rule version (opening card)**: "FEDAI Rules, 10th edition (updated to 20 Aug 2026) · RBI A.P. (DIR Series)
  Circulars 25–27 (Oct 2026) · as at 31 December 2026".
- **Greeting / goodbye** (in `course/bfm/greetings.md`): greeting "Good to see you, everyone. Today, plans change, and
  we find out what it costs."; goodbye "That's the class. Go easy tonight, and we'll pick up the next one together."
- **Money**: all rates, points, margins and interest illustrative, labelled on screen. Purchase and sale always from
  the bank's side.
- **Holds**: questions at least 3 s; press-along: "equals", hold 5–8 s, then the answer; your-turn sums 15–20 s; map
  3–5 s. Every rate is rounded to 4 places and keyed in fresh before the rupee step.
- **Length target**: about 14–15 minutes. Chapters: 1 cancellation (~4.5 min) · 2 early delivery (~4 min) · 3
  extension and the 2026 rules (~3 min) · 4 when the customer does nothing (~1.5 min) · close (~1 min).
- **Cue sheet**: S scene · N note · G glow · M map · C card · B board mark · H hold. Picture: the counter from A01,
  flipped to amber for cancelling (the opposite deal at today's rate for the same date); the calendar strip from A05.

---

## Warm-up

N001 · [warmly] Good to see you, everyone. Today, plans change, and we find out what it costs.
> 0 C: rule-version card · 1 S: notebook page; title "A06 · When the plan changes"

N002 · First, last class's homework. A bank sale at a discount, delivery in the second month. Which date? The first date, the bank's best. Eighty-five point four two, before the margin.
> 1 N: "sale + discount → first date · 85.62 − 0.20 = 85.42 ✓" · H: 3 s after "Which date?"

N003 · Forex sums came in all seven exam cycles we studied. And one recent paper asked straight out: at which rate is a forward contract cancelled?
> 1 N: "forex: 7 of 7 cycles · Dec 2025: cancellation rate" [importance_map A-FXNUM; fullpaper Q40]

N004 · Last class ended with a question. Picture an exporter in Ludhiana. A month ago, she sold the bank a lakh of dollars, three months forward, at eighty-six point zero five.
> 1 S: exporter card "forward sale to bank · USD 1,00,000 · @ 86.05 · due in 2 months" (illustrative)

N004a · Now her buyer pays two months early. What happens to her contract?
> 1 S: the card adds "paid today, 2 months early"

N005 · Some of you would say, the bank just uses the contract rate. Others say, she gains if the market moved her way. What happens?
> 1 S: two buttons "contract rate, no cost" · "she keeps any gain" · H: 3 s

N006 · Hold that. By the end, you'll work out what she actually gets.
> 1 G: the exporter card

## Chapter 1 · Cancellation: the opposite deal

N007 · Chapter one. Start with the simplest change. The deal is off, and the customer cancels the contract.
> 1 S: chapter title "1 · Cancellation" · 2 S: the counter from A01

N008 · Here's the picture. Cancelling is doing the opposite deal, at today's rate for the same date. The counter flips.
> 1 S: the counter flips to amber: "cancel = the opposite deal at today's rate for the same date" [F7, F8]

N009 · A contract where the bank buys dollars is a purchase contract. Our exporter sold the bank dollars, so for the bank, hers is a purchase contract.
> 1 C: card "customer sells USD → bank's purchase contract · customer buys USD → bank's sale contract"

N009a · To cancel a purchase contract, the bank sells the dollars back. At its T-T selling rate.
> 1 C: card "purchase contract → cancelled at TT selling" [F8]

N010 · Quick one. A sale contract, where the bank sells dollars. Cancelled at which rate?
> 1 S: card "sale contract → cancelled at ?" · H: 3 s

N011 · T-T buying. The bank buys the dollars back. Then it settles the difference: contract rate against cancellation rate.
> 1 C: card "sale contract → cancelled at TT buying" [F8] · 2 B: box "difference = contract rate vs cancellation rate" [F7]

N012 · Press along. A different exporter: a purchase contract, a lakh of dollars at eighty-six point zero five. His buyer cancels the order. On maturity, spot is eighty-six point three eight, eighty-six point four zero.
> 1 S: data card "purchase contract USD 1,00,000 @ 86.05 · spot 86.38 / 86.40 · TT selling +0.12%" (illustrative)

N013 · T-T selling, from the ask. Eighty-six point four, times one point zero zero one two, equals. Eighty-six point five zero three seven. Rounded to four places; key that in fresh.
> 1 S: keys 86.40 × 1.0012 = · H: 6 s (after "equals") · 2 B: box "TT selling 86.5037" · 3 N: "round to 4 places, then re-key"

N014 · The bank bought at eighty-six point zero five. It sells back at eighty-six point five zero three seven. Who pays the difference?
> 1 S: two figures side by side "bought 86.05 · sells back 86.5037" · H: 3 s

N015 · The exporter. Eighty-six point five zero three seven, minus eighty-six point zero five, times a lakh, equals. Forty-five thousand, three hundred seventy rupees.
> 1 S: keys 86.5037 − 86.05 = × 100000 = · H: 6 s (after "equals") · 2 B: box "exporter pays ₹45,370.00"

N015a · Why him? He must buy the dollars back dearer than he sold them. So the rule. Purchase contract: cancellation rate above the contract rate, the customer pays. Below it, the bank pays him.
> 1 C: card "purchase contract: cancel rate > contract → customer pays · < contract → bank pays" [F7, F16]

N016 · Your turn. An importer's sale contract, fifty thousand dollars at eighty-six point two zero. Cancelled on maturity. Spot eighty-five point eight zero, eighty-five point eight two. T-T buying margin, point zero eight percent. Pause.
> 1 S: card "sale contract USD 50,000 @ 86.20 · spot 85.80 / 85.82 · TT buying −0.08%" (illustrative) · H: 20 s

N017 · T-T buying, from the bid. Eighty-five point eight, times point nine nine nine two, equals. Eighty-five point seven three one four. The importer pays the difference: twenty-three thousand, four hundred thirty rupees.
> 1 S: keys 85.80 × 0.9992 = · 86.20 − 85.7314 = × 50000 = · 2 B: box "TT buying 85.7314 · importer pays ₹23,430.00"

N017a · A sale contract is the mirror. Cancellation rate below the contract rate, the customer pays. Above it, the bank pays.
> 1 C: card "sale contract: cancel rate < contract → customer pays · > contract → bank pays" [F16]

N018 · Many of you will use T-T selling here, because he bought dollars. That's the trap. The bank cancels by buying back. T-T buying.
> 1 C: trap card "sale contract at TT selling 85.9230 ✗ · at TT buying 85.7314 ✓" [F8]

N019 · And before maturity? The same opposite deal. Today's rate for the maturity date is the forward T-T rate.
> 1 C: card "cancelled before maturity → forward TT rate" [F8] · 2 N: "e.g. 1 month left: (86.40 + 0.20) × 1.0012 = 86.7039"

N020 · A loss can be paid in one go, or in instalments at least once a quarter, until the original maturity.
> 1 N: "loss: lump sum or quarterly instalments · not beyond maturity · Board policy" [F9]

N021 · Pause check for chapter one. One. A purchase contract is cancelled at which rate?
> 1 S: card "purchase contract → ?" · H: 3 s

N022 · T-T selling. Two, the twist. Cancelled a month before maturity. Spot rate, or forward?
> 1 N: "TT selling ✓" · H: 3 s

N023 · The forward T-T rate. [seriously] If you remember one thing from chapter one: cancelling is the opposite deal, at today's rate for the same date.
> 1 N: "forward TT rate ✓" · 2 S: the amber counter; finished parts dim to grey

## Chapter 2 · Early delivery

N024 · Chapter two. First, from chapter one. A sale contract is cancelled at which rate?
> 1 S: chapter title "2 · Early delivery" · H: 3 s

N025 · T-T buying. Now our Ludhiana exporter. Her dollars came two months early. The bank doesn't have to accept early delivery. It's optional. But usually it does.
> 1 N: "TT buying ✓" · 2 C: card "early delivery / extension: optional for the bank" [F1]

N026 · Here's the problem. When the bank bought her dollars forward, it sold the same dollars forward in the market, to stay safe. That sale is due in two months.
> 1 S: calendar strip: "today" and "market sale due in 2 months"; a dollar bag pinned to the later date

N027 · But her dollars came today. So the bank does a swap. It sells today's dollars at spot, and buys dollars forward, to meet its market sale on the original date.
> 1 S: two arrows "sell spot today → buy forward for the original date" [F2] · 2 B: box "swap"

N028 · With the dollar at a premium, buying forward costs more than selling spot. That gap is the swap cost. The customer pays it, even if the bank does no actual swap.
> 1 C: card "swap cost: recovered in all cases, even if no actual swap is done" [F3]

N029 · Press along. Interbank spot, eighty-five point seven zero, eighty-five point seven two. Two-month points, zero point three six, zero point three nine.
> 1 S: data card "spot 85.70 / 85.72 · 2m 0.36 / 0.39 · contract 86.05 · USD 1,00,000" (illustrative)

N030 · In the market, the bank sells at the bid, eighty-five point seven zero. It buys forward at the ask: eighty-five point seven two plus point three nine. Eighty-six point one one.
> 1 B: boxes "sell spot 85.70 (bid)" · "buy 2m forward 86.11 (ask)"

N031 · Eighty-six point one one, minus eighty-five point seven, times a lakh, equals. Forty-one thousand rupees of swap cost.
> 1 S: keys 85.72 + 0.39 = − 85.70 = × 100000 = · H: 6 s (after "equals") · 2 B: box "swap cost ₹41,000.00"

N032 · One more piece. The bank pays her eighty-six point zero five today. But it got only eighty-five point seven zero from the spot sale. That gap is the bank's outlay: its own money, paid out until the original date.
> 1 C: card "outlay = money the bank pays from its own pocket" [F4] · 2 B: box "outlay = 86.05 − 85.70 = 0.35 × 1,00,000 = ₹35,000"

N033 · The bank charges interest on that outlay, for the two months. Say ten percent a year. Thirty-five thousand, times point one, times two, divided by twelve, equals.
> 1 S: keys 35000 × 0.10 × 2 ÷ 12 = · H: 8 s (after "equals")

N034 · Five hundred eighty-three rupees, thirty-three paise. If the swap had brought money in instead, the bank would pay her interest.
> 1 B: box "interest on outlay ₹583.33" · 2 N: "inflow → bank pays interest" [F4]

N034a · And a swap can earn, too. With the dollar at a discount, buying forward is cheaper than selling spot. Then the bank pays the customer a swap gain. Same for an importer taking dollars early at a premium.
> 1 C: card "swap cost → customer pays · swap gain → customer receives (e.g. a discount market; an importer taking early delivery at a premium)" [F2, F3]

N035 · Back to her. A lakh of dollars at eighty-six point zero five is eighty-six lakh, five thousand. Less forty-one thousand, less five hundred eighty-three thirty-three, equals.
> 1 S: keys 8605000 − 41000 − 583.33 = · H: 6 s

N036 · Eighty-five lakh, sixty-three thousand, four hundred sixteen rupees, sixty-seven paise. Not the full contract amount.
> 1 B: box "₹85,63,416.67"

N036a · A cousin of early delivery: an export bill paid early. The bank refunds interest for the days left, and settles a notional swap, just like this.
> 1 C: card "early realisation of a bill: refund interest for unexpired days + notional swap cost or gain" [F13]

N037 · Pause check for chapter two. One. Early delivery: must the bank accept it?
> 1 S: card "early delivery: must accept?" · H: 3 s

N038 · No, it's optional. Two, the twist. The bank never actually did a swap. Does it still recover swap cost?
> 1 N: "optional ✓" · H: 3 s

N039 · Yes. In all cases. [seriously] If you remember one thing from chapter two: early delivery means a swap. Swap cost or gain, plus interest on the outlay.
> 1 N: "always ✓" [F3] · 2 S: finished parts dim to grey

## Chapter 3 · Extension and the 2026 rules

N040 · Chapter three. First, from chapter two. Early delivery: what two costs?
> 1 S: chapter title "3 · Extension" · H: 3 s

N041 · Swap cost, and interest on the outlay. Now, the opposite problem. The buyer will pay late. The customer wants more time: a rollover, carrying the contract on to a later date.
> 1 N: "swap cost + interest ✓" · 2 S: calendar strip, the due date sliding later

N042 · F-E-D-A-I's rule: settle the old contract at today's rate, and start a new one at the current rate. The request must come on or before maturity.
> 1 C: card "FEDAI 6.3: cancel at today's rate + new contract at the current rate · request on or before maturity" [F5]

N042a · Press along. The importer from chapter one, fifty thousand dollars at eighty-six point two zero. On maturity, he asks for one more month.
> 1 S: card "sale contract USD 50,000 @ 86.20 · spot 85.80 / 85.82 · 1m points 0.18 / 0.20" (illustrative)

N042b · Step one: settle at T-T buying, eighty-five point seven three one four. He pays twenty-three thousand, four hundred thirty, as before.
> 1 B: box "settle: pays ₹23,430.00"

N042c · Step two: a new one-month contract at today's forward T-T selling. Eighty-five point eight two, plus point two, times one point zero zero one two, equals.
> 1 S: keys 85.82 + 0.20 = × 1.0012 = · H: 6 s (after "equals")

N042d · Eighty-six point one two three two. Not his old eighty-six point two zero. A rollover is always at the current rate.
> 1 B: box "new contract 86.1232" · 2 C: trap card "rollover at the old rate 86.20 ✗ · current rate 86.1232 ✓" [F5]

N043 · Now, on the tenth of October twenty twenty-six, R-B-I changed the game. A rupee forward contract cancelled after that can't be rebooked, with any bank.
> 1 C: card "RBI, 10 Oct 2026: no rebooking of a cancelled INR forex contract · with any AD" [F6]

N044 · What's still allowed? A rollover, done on the maturity date itself. He may ask earlier, but it happens on maturity. Priced just as we did.
> 1 B: box "rollover on maturity ✓ · rebook after cancelling ✗" [F6]

N045 · So F-E-D-A-I's method is still how a rollover is priced, and exams ask it. What's gone is cancelling, then booking again, with any bank.
> 1 C: card "FEDAI 6.3 method = rollover pricing ✓ · rebook after cancelling ✗ (any AD, since 10 Oct 2026)"

N046 · Same circular, one more number. A customer can fix a forward rate without showing papers for the real trade behind it. That's hedging without proving the underlying.
> 1 N: "hedge = fix a rate · underlying = the real trade behind it"

N046a · The limit was a hundred million dollars. Now, how much?
> 1 S: card "hedge without proving the underlying: USD 100 million → ?" · H: 3 s

N047 · Five million dollars, across all banks. And the bank takes an undertaking that the same exposure isn't hedged elsewhere.
> 1 C: card "USD 5 million (all ADs together) · undertaking: not hedged with another AD" [F14] · 2 N: "some study material still prints 100 million: old"

N048 · One line for later. For some contracts, the bank now keeps twenty percent of the rupee value in cash with R-B-I. We'll work that in C-zero-eight.
> 1 N: "FERR: 20% of notional, cash with RBI · e.g. users above USD 2 m buying foreign currency for current-account exposures (C08)" [F15]

N049 · Pause check for chapter three. One. A rollover: old rate or current rate?
> 1 S: card "rollover rate?" · H: 3 s

N050 · Current. Two, the twist. A contract cancelled with Bank A. Can it be rebooked with Bank B?
> 1 N: "current ✓" · H: 3 s

N051 · No, with no bank. [seriously] If you remember one thing from chapter three: extend by rollover on maturity, at the current rate. A cancelled contract stays cancelled.
> 1 N: "no bank ✓" · 2 S: finished parts dim to grey

## Chapter 4 · When the customer does nothing

N052 · Chapter four. First, from chapter three. Rollover is allowed on which date?
> 1 S: chapter title "4 · When the customer does nothing" · H: 3 s

N053 · On maturity. Now, a customer simply forgets. Maturity passes, no delivery, no instructions. What does the bank do?
> 1 N: "maturity ✓" · 2 S: calendar strip; maturity passes; a silent phone

N054 · It cancels the contract itself, within three working days after maturity. Any swap cost is charged to the customer, with a written note, an advice.
> 1 C: card "automatic cancellation: within 3 working days after maturity · swap cost recovered from the customer, under advice" [F11]

N055 · On time, a cancellation gain goes to the customer. But after maturity? Say the market moved in his favour. Does he get the gain?
> 1 S: a gain figure in green "+ ₹?" · H: 3 s

N056 · No. He defaulted, so the gain stays with the bank. A loss, he must pay. The bank may pass the gain only if the delay was beyond his control.
> 1 C: card "after maturity: gain → not passed · loss → recovered (gain passed only if delay beyond his control, on record)" [F12]

N057 · And if a government order makes the deal impossible? The contract still stands. The customer must ask to cancel it.
> 1 N: "impossible ≠ void → customer applies to cancel" [F10]

N057a · Pause check for chapter four. No instructions after maturity. Within how many days does the bank cancel?
> 1 S: card "auto-cancel within ?" · H: 3 s

N058 · Three working days. [seriously] If you remember one thing from chapter four: do nothing, and the bank cancels. You pay the loss, but don't get the gain.
> 1 N: "3 working days ✓" · 2 S: finished parts dim to grey

## Close

N059 · Back to Ludhiana. The contract rate, with no cost? No. She gets the contract rate, less swap cost and interest on the outlay.
> 1 S: exporter card returns

N059a · And any market gain? Not here. Early delivery is priced by the swap. Eighty-five lakh, sixty-three thousand, four hundred sixteen rupees, sixty-seven paise.
> 1 B: box "₹85,63,416.67"

N060 · Now the map, from memory. Branch one. Cancelling a purchase contract?
> 1 M: branch "Rates", nodes "cancellation · early delivery · extension · no instructions" empty (amber) · H: 5 s

N061 · T-T selling: the opposite deal. Branch two. Early delivery?
> 1 M: node "cancellation" fills · H: 5 s

N062 · Swap cost or gain, plus interest on the outlay. Branch three. Extension?
> 1 M: node "early delivery" fills · H: 5 s

N063 · Rollover on maturity, at the current rate; no rebooking. Branch four. No instructions?
> 1 M: node "extension" fills · H: 5 s

N064 · Cancelled within three working days; gain not passed. That's the map.
> 1 M: node "no instructions" fills; branch completes

N065 · Homework. Take sum one, but the market fell: spot eighty-five point nine zero, eighty-five point nine two. Who pays now, and how much?
> 1 S: notebook page "purchase contract @ 86.05 · spot 85.90 / 85.92 · TT selling +0.12%"

N066 · Next class: the goods themselves. Who pays the freight, and where does the risk pass? Incoterms.
> 1 S: a ship and a truck on a road

N067 · [warmly] That's the class. Go easy tonight, and we'll pick up the next one together.
> 1 S: the amber counter flips back; lights dim
