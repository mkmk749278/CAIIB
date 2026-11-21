# A06 · "When the plan changes" · CLASS EDITION (script c1, with cue sheet)

- **Status**: c1, 2026-11-21. Standard style (`course/spec/lesson_spec.md`): teaching plus sums.
- **Plan**: `course/bfm/A/plans_A.md` §A06. Course order v4: A05 → **A06** → A07.
- **Syllabus**: A1.5 (forwards), A1.6 (FEDAI rules: Rule 6), A1.7 (forex arithmetic).
- **Facts**: `research/bfm/facts/A1.5-A1.7_A06.md`; rows cited as [F3]. Sums: `numericals.md`, checked two ways by
  `tools/check/fx_forward_contracts.py`.
- **Rule version (opening card)**: "FEDAI Rules, 10th edition (updated to 20 Aug 2026) · RBI A.P. (DIR Series)
  Circulars 25–27 (Oct 2026) · as at 31 December 2026".
- **Greeting / goodbye** (in `course/bfm/greetings.md`): greeting "Good to see you, everyone. Today, plans change, and
  we find out what it costs."; goodbye "That's the class. Go easy tonight, and we'll pick up the next one together."
- **Money**: all rates, points, margins and interest illustrative, labelled on screen. Purchase and sale always from
  the bank's side.
- **Holds**: questions at least 3 s; press-along: "equals", hold 6–10 s, then the answer; your-turn sums 15–20 s; map 3–5 s.
- **Length target**: about 14 minutes. Chapters: 1 cancellation (~4 min) · 2 early delivery (~3.5 min) · 3 extension
  and the 2026 rules (~2.5 min) · 4 when the customer does nothing (~2 min) · close (~1.5 min).
- **Cue sheet**: S scene · N note · G glow · M map · C card · B board mark · H hold. Picture: the counter from A01,
  flipped to amber for cancelling (the opposite deal at today's rate); the calendar strip from A05.

---

## Warm-up

N001 · [warmly] Good to see you, everyone. Today, plans change, and we find out what it costs.
> 0 C: rule-version card · 1 S: notebook page; title "A06 · When the plan changes"

N002 · First, last class's homework. A bank sale at a discount, delivery in the second month. Which date? The first date. Eighty-five point four two, before the margin.
> 1 N: "sale + discount → first date · 85.62 − 0.20 = 85.42 ✓" · H: 3 s after "Which date?"

N003 · Forward contracts are booked every day, and plans change every day. Forex case studies in the exam often turn on exactly this.
> 1 N: "forex: 7 of 7 cycles; case studies on cancellation" [importance_map A-FXNUM]

N004 · Picture an exporter in Ludhiana. Three months ago, she sold the bank a lakh of dollars forward, at eighty-six point zero five. Now her buyer pays a month early.
> 1 S: exporter card "forward sale to bank · USD 1,00,000 · @ 86.05 · due in 2 months · paid early" (illustrative)

N005 · Some of you would say, the bank just uses the contract rate. Others say, she gains if the market moved her way. What happens?
> 1 S: two buttons "contract rate, no cost" · "she keeps any gain" · H: 3 s

N006 · Hold that. By the end, you'll work out what she actually gets.
> 1 G: the exporter card

## Chapter 1 · Cancellation: the opposite deal

N007 · Chapter one. Start with the simplest change. The deal is off, and the customer cancels the contract.
> 1 S: chapter title "1 · Cancellation" · 2 S: the counter from A01

N008 · Here's the picture. Cancelling is doing the opposite deal, at today's rate. The counter flips.
> 1 S: the counter flips to amber: "cancel = the opposite deal at today's rate" [F7, F8]

N009 · So, a contract where the bank buys dollars is a purchase contract. To cancel it, the bank sells the dollars back. At its T-T selling rate.
> 1 C: card "purchase contract → cancelled at TT selling" [F8]

N010 · Quick one. A sale contract, where the bank sells dollars. Cancelled at which rate?
> 1 S: card "sale contract → cancelled at ?" · H: 3 s

N011 · T-T buying. The bank buys the dollars back. Then it settles the difference: contract rate against cancellation rate.
> 1 C: card "sale contract → cancelled at TT buying" [F8] · 2 B: box "difference = contract rate vs cancellation rate" [F7]

N012 · Press along. An exporter's purchase contract, a lakh of dollars at eighty-six point zero five. The deal falls through. On maturity, spot is eighty-six point three eight, eighty-six point four zero.
> 1 S: data card "purchase contract USD 1,00,000 @ 86.05 · spot 86.38 / 86.40 · TT selling +0.12%" (illustrative)

N013 · T-T selling, from the ask. Eighty-six point four, times one point zero zero one two, equals. Eighty-six point five zero three seven.
> 1 S: keys 86.40 × 1.0012 = · H: 6 s (after "equals") · 2 B: box "TT selling 86.5037"

N014 · The bank bought at eighty-six point zero five. It sells back at eighty-six point five zero three seven. Who pays the difference?
> 1 S: two figures side by side "bought 86.05 · sells back 86.5037" · H: 3 s

N015 · The exporter. Point four five three seven, times a lakh, equals. Forty-five thousand, three hundred seventy rupees.
> 1 S: keys 86.5037 − 86.05 = × 100000 = · H: 6 s · 2 B: box "exporter pays ₹45,370.00"

N016 · Your turn. An importer's sale contract, fifty thousand dollars at eighty-six point two zero. Cancelled on maturity. Spot eighty-five point eight zero, eighty-five point eight two. T-T buying margin, point zero eight percent. Pause.
> 1 S: card "sale contract USD 50,000 @ 86.20 · spot 85.80 / 85.82 · TT buying −0.08%" (illustrative) · H: 20 s

N017 · T-T buying, from the bid. Eighty-five point eight, times point nine nine nine two. Eighty-five point seven three one four. The importer pays the difference. Twenty-three thousand, four hundred thirty rupees.
> 1 S: keys 85.80 × 0.9992 = · 86.20 − 85.7314 = × 50000 = · 2 B: box "TT buying 85.7314 · importer pays ₹23,430.00"

N018 · Many of you will use T-T selling here, because he bought dollars. That's the trap. The bank cancels by buying back. T-T buying.
> 1 C: trap card "sale contract at TT selling 85.9230 ✗ · at TT buying 85.7314 ✓" [F8]

N019 · And before maturity? The same opposite deal, but at the forward T-T rate for the remaining time.
> 1 C: card "cancelled before maturity → forward TT rate" [F8] · 2 N: "e.g. 1 month left: (86.40 + 0.20) × 1.0012 = 86.7039"

N020 · The loss can be paid in one go, or in instalments, at least once a quarter, but not beyond the original maturity.
> 1 N: "loss: lump sum or quarterly instalments · not beyond maturity · Board policy" [F9]

N021 · Pause check for chapter one. One. A purchase contract is cancelled at which rate?
> 1 S: card "purchase contract → ?" · H: 3 s

N022 · T-T selling. Two, the twist. Cancelled a month before maturity. Spot rate, or forward?
> 1 N: "TT selling ✓" · H: 3 s

N023 · The forward T-T rate. [seriously] If you remember one thing from chapter one: cancelling is the opposite deal, at today's rate.
> 1 N: "forward TT rate ✓" · 2 S: the amber counter; finished parts dim to grey

## Chapter 2 · Early delivery

N024 · Chapter two. First, from chapter one. A sale contract is cancelled at which rate?
> 1 S: chapter title "2 · Early delivery" · H: 3 s

N025 · T-T buying. Now our Ludhiana exporter. Her dollars came two months early. The bank doesn't have to accept early delivery. It's optional. But usually it does.
> 1 N: "TT buying ✓" · 2 C: card "early delivery / extension: optional for the bank" [F1]

N026 · Here's the problem. The bank had planned for these dollars in two months. It had already promised them to the market for that date.
> 1 S: calendar strip: "today" and "original date, 2 months ahead"; a dollar bag pinned to the later date

N027 · So it does a swap. It sells the early dollars today, at spot. And buys them back for the original date, forward.
> 1 S: two arrows "sell spot today → buy forward for the original date" [F2] · 2 B: box "swap"

N028 · With the dollar at a premium, buying forward costs more than selling spot. That gap is the swap cost. The customer pays it.
> 1 C: card "swap cost: recovered in all cases, even if no actual swap is done" [F3]

N029 · Press along. Interbank spot, eighty-five point seven zero, eighty-five point seven two. Two-month points, zero point three six, zero point three nine.
> 1 S: data card "spot 85.70 / 85.72 · 2m 0.36 / 0.39 · contract 86.05 · USD 1,00,000" (illustrative)

N030 · The bank sells spot at the bid, eighty-five point seven zero. It buys forward at the ask: eighty-five point seven two plus point three nine. Eighty-six point one one.
> 1 B: boxes "sell spot 85.70" · "buy 2m forward 86.11"

N031 · Eighty-six point one one, minus eighty-five point seven, equals. Point four one. Times a lakh. Forty-one thousand rupees of swap cost.
> 1 S: keys 85.72 + 0.39 = − 85.70 = × 100000 = · H: 6 s (after "equals") · 2 B: box "swap cost ₹41,000.00"

N032 · One more piece. The bank pays her eighty-six point zero five today. But it got only eighty-five point seven zero from the spot sale. That gap is money the bank lays out.
> 1 B: box "outlay = 86.05 − 85.70 = 0.35 × 1,00,000 = ₹35,000" [F4]

N033 · The bank charges interest on that outlay, for the two months. Say ten percent a year. Thirty-five thousand, times point one, times two, divided by twelve.
> 1 S: keys 35000 × 0.10 × 2 ÷ 12 = · H: 8 s

N034 · Five hundred eighty-three rupees, thirty-three paise. If the swap had brought money in instead, the bank would pay her interest.
> 1 B: box "interest on outlay ₹583.33" · 2 N: "inflow → bank pays interest" [F4]

N035 · So she gets eighty-six lakh, five thousand, less forty-one thousand, less five hundred eighty-three thirty-three.
> 1 S: keys 8605000 − 41000 − 583.33 = · H: 6 s

N036 · Eighty-five lakh, sixty-three thousand, four hundred sixteen rupees, sixty-seven paise. Not the full contract amount.
> 1 B: box "₹85,63,416.67"

N037 · Pause check for chapter two. One. Early delivery: must the bank accept it?
> 1 S: card "early delivery: must accept?" · H: 3 s

N038 · No, it's optional. Two, the twist. The bank never actually did a swap. Does it still recover swap cost?
> 1 N: "optional ✓" · H: 3 s

N039 · Yes. In all cases. [seriously] If you remember one thing from chapter two: early delivery means a swap. Swap cost, plus interest on the outlay.
> 1 N: "always ✓" [F3] · 2 S: finished parts dim to grey

## Chapter 3 · Extension and the 2026 rules

N040 · Chapter three. First, from chapter two. Early delivery: what two costs?
> 1 S: chapter title "3 · Extension" · H: 3 s

N041 · Swap cost, and interest on the outlay. Now, the opposite problem. The buyer will pay late. The customer wants more time.
> 1 N: "swap cost + interest ✓" · 2 S: calendar strip, the due date sliding later

N042 · F-E-D-A-I's rule says: cancel the old contract at today's rate, settle the difference, and rebook at the current rate. The request must come on or before maturity.
> 1 C: card "FEDAI 6.3: cancel + rebook at the current rate · request on or before maturity" [F5]

N043 · But in October twenty twenty-six, R-B-I changed the game. A cancelled rupee forex contract can no longer be rebooked.
> 1 C: card "RBI, 10 Oct 2026: no rebooking of a cancelled INR forex derivative" [F6]

N044 · What's still allowed? A rollover on the maturity date. So extend on maturity, not by cancelling early and booking again.
> 1 B: box "rollover on maturity ✓ · cancel and rebook ✗" [F6]

N045 · Many of you have read "cancel and rebook freely". That's the old world. Today, it's a trap.
> 1 C: trap card "cancel and rebook freely ✗ (since 10 Oct 2026)"

N046 · Same circular, one more number. Without proving the underlying deal, a customer could hedge up to a hundred million dollars. Now, how much?
> 1 S: card "hedge without proving the underlying: USD 100 million → ?" · H: 3 s

N047 · Five million dollars, across all banks. And the bank takes an undertaking that the same exposure isn't hedged elsewhere.
> 1 C: card "USD 5 million (all ADs together) · undertaking: not hedged with another AD" [F14] · 2 N: "some study material still prints 100 million: old"

N048 · One line for later. For some contracts, the bank now keeps twenty percent of the rupee value in cash with R-B-I. We'll work that in C-zero-eight.
> 1 N: "FERR: 20% of notional, cash with RBI (C08)" [F15]

N049 · Pause check for chapter three. One. Since October twenty twenty-six, can a cancelled contract be rebooked?
> 1 S: card "rebook after cancelling?" · H: 3 s

N050 · No. Two. The limit without proving the underlying?
> 1 N: "no ✓" · H: 3 s

N051 · Five million dollars. [seriously] If you remember one thing from chapter three: roll over on maturity, never cancel and rebook.
> 1 N: "USD 5 million ✓" · 2 S: finished parts dim to grey

## Chapter 4 · When the customer does nothing

N052 · Chapter four. First, from chapter three. Rollover is allowed on which date?
> 1 S: chapter title "4 · When the customer does nothing" · H: 3 s

N053 · On maturity. Now, a customer simply forgets. Maturity passes, no delivery, no instructions. What does the bank do?
> 1 N: "maturity ✓" · 2 S: calendar strip; maturity passes; a silent phone

N054 · It cancels the contract itself, within three working days after maturity. Swap cost, if any, goes to the customer, with an advice.
> 1 C: card "automatic cancellation: within 3 working days after maturity" [F11]

N055 · Now the twist. Say the market moved in his favour. Does he get the gain?
> 1 S: a gain figure in green "+ ₹?" · H: 3 s

N056 · No. He defaulted, so the gain stays with the bank. But a loss, he must pay. The bank may pass the gain only if the delay was beyond his control.
> 1 C: card "after maturity: gain → not passed · loss → recovered (gain passed only if delay beyond his control, on record)" [F12]

N057 · And if a government order makes the deal impossible? The contract still stands. The customer must ask to cancel it.
> 1 N: "impossible ≠ void → customer applies to cancel" [F10]

N058 · [seriously] If you remember one thing from chapter four: do nothing, and the bank cancels within three working days. You keep the loss, not the gain.
> 1 S: finished parts dim to grey

## Close

N059 · Back to Ludhiana. Did the bank just use the contract rate? No. She pays swap cost and interest on the outlay. Eighty-five lakh, sixty-three thousand, four hundred sixteen rupees, sixty-seven paise.
> 1 S: exporter card returns · 2 B: box "₹85,63,416.67"

N060 · Now the map, from memory. Branch one. Cancelling a purchase contract?
> 1 M: branch "Rates", nodes "cancellation · early delivery · extension · no instructions" empty (amber) · H: 5 s

N061 · T-T selling: the opposite deal. Branch two. Early delivery?
> 1 M: node "cancellation" fills · H: 5 s

N062 · Swap cost, plus interest on the outlay. Branch three. Extension?
> 1 M: node "early delivery" fills · H: 5 s

N063 · Rollover on maturity; no rebooking. Branch four. No instructions?
> 1 M: node "extension" fills · H: 5 s

N064 · Cancelled within three working days; gain not passed. That's the map.
> 1 M: node "no instructions" fills; branch completes

N065 · Homework. Take sum one, but the market fell: spot eighty-five point nine zero, eighty-five point nine two. Who pays now, and how much?
> 1 S: notebook page "purchase contract @ 86.05 · spot 85.90 / 85.92 · TT selling +0.12%"

N066 · Next class: the goods themselves. Who pays the freight, and where does the risk pass? Incoterms.
> 1 S: a ship and a truck on a road

N067 · [warmly] That's the class. Go easy tonight, and we'll pick up the next one together.
> 1 S: the amber counter flips back; lights dim
