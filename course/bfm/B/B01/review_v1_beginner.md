# B01 · Review v1 · beginner (independent session, 2026-11-21)

**Verdict: ADOPT WITH FIXES.** 1 High, 8 Medium, 13 Low. The house picture and the five chapters work well. The pause
rhythm is good, every hold is at least 3 s, and the opening question gets a full answer. The High finding: a beginner
cannot tell basis risk from yield-curve risk, and that is the most-asked definition in the lesson. The Medium findings
are undefined words that pause questions depend on, two pairs of terms that blur, a wrong music-out list, and an
overloaded chapter 3.

**Reader**: a new officer, two years in a branch, JAIIB passed, no risk background, English as a second language,
watching on a phone after work.

**Checked**: `script.md` v1 (N001–N168, every ">" cue and hold); `numericals.md`, `practice.md`, `map_nodes.md`;
fact sheet `research/bfm/facts/B1.1-B2.5_B01.md` rows 1–48; the B01 plan in `plans_B.md`; CLAUDE.md "Teaching method"
and "The voice"; `teaching_method.md` §4–§7; `greetings.md`. I did not check facts against primary sources (that is the
expert's job). Where a fix needs a fact that is not on the sheet, I say so.

**Counts** (narration lines only, cue lines excluded): **3,744 spoken words**, about 22,100 characters, so the voice
page needs three parts. **55 holds, 190 s.** 3,744 ÷ 140 = 26.7 min, plus 3.2 min of holds, gives **about 30 minutes**.

| Part | Words | Holds | Min |
|---|---|---|---|
| Warm-up + Opening | 330 | 13 s | 2.6 |
| Ch1 | 433 | 22 s | 3.5 |
| Ch2 | 546 | 21 s | 4.2 |
| Ch3 | 699 | 26 s | 5.4 |
| Ch4 | 612 | 26 s | 4.8 |
| Ch5 | 663 | 37 s | 5.4 |
| Mixed + Map + Close | 461 | 45 s | 4.1 |

Longest sentences: 24 words (N073, N123), 23 words (N003, N050, N101). None is over 25.

## Findings

**1 · High · N076, N079, N081, N154, N161: basis risk and yield-curve risk sound the same.** Basis risk is taught as
"different rates move by different amounts". Yield-curve risk is taught as "rates for short and long periods don't
move in parallel". A short rate and a long rate are also "different rates moving by different amounts". So a learner
who learned "different amounts → basis" will answer *basis* to a yield-curve question. The fact sheet's blueprint
lists "basis vs gap vs yield curve" as a compare question. **Fix**: give each one its own axis and say the contrast
once.
- N076: "different benchmarks for the same period".
- N081: "Yield-curve risk is about different periods: a short rate and a long rate on one curve stop moving together."
- Add a line after N081: "So, three questions. When? Gap. Which benchmark? Basis. Which period? Yield curve."
- Add one check question (yield curve vs basis) to the ch3 pause check or the mixed round.

Row 22 already says "different benchmarks or maturities". Ask the expert to confirm the RMS99 9.3.4 wording
("instruments maturing at different time horizon").

**2 · Medium · N047–N052: counterparty risk and settlement risk blur.** N047 defines counterparty risk as the other
party defaulting "before the deal is finally settled". N051's case ("the other bank collapses before your euros
arrive") also fits that definition, so the learner cannot reason to the answer and has to guess. **Fix**: one contrast
line before N051, from rows 12–13. Counterparty risk is the risk while the deal is still open, on its changing value.
Settlement risk is the risk on the payment day itself, on the full amount, after you have paid. Then N052's reason
("the loss comes at the moment of payment") follows from what was taught.

**3 · Medium · N075, N076, N086, N154: "reprice" is never explained.** The whole gap-vs-basis rule ("same repricing
date") depends on this word. **Fix**: in N075, "Reprice means the rate is reset, like a floating loan on its reset
date, or a deposit renewed at a new rate."

**4 · Medium · N043: "intrinsic risk" is named and left empty.** Concentration risk gets a picture (N044); intrinsic
risk gets nothing, and the board writes it. **Fix**: add one short line on intrinsic risk. It needs a fact row (RMS99
3.1.2 describes it), so add that row to the sheet first. Otherwise, say only "portfolio risk" and drop the two
sub-names.

**5 · Medium · N084: net interest position risk reads as a contradiction.** N084 says having more earning assets than
paying liabilities is the exposure, then that "a large free float… is a natural hedge". Float is what creates that
position, so the second sentence seems to undo the first. "Free float" and "paying liabilities" are not defined.
**Fix**: "Some money costs the bank nothing, like current-account balances. That's called float. A bank with a lot of
it earns more when rates rise, and less when they fall." If RBI's phrase "natural hedge" stays, explain what it
hedges, but only from RMS99 9.3.7's own words (expert to confirm).

**6 · Medium · N149: the pause question uses an untaught word.** "A letter of credit **devolves** on the bank" is the
first time "devolves" is said. The board never writes it, and N141 used "the guarantee is invoked". **Fix**: in N141,
add "for a letter of credit, we say it devolves: the bank must pay because the customer didn't". Or reword N149 as "A
letter of credit falls on the bank, and the bank must pay."

**7 · Medium · N021, N097, N114, N115: legal risk is used four times and never defined, and the KYC question can be
answered "legal".** A learner has heard "legal risk is inside operational risk" and "regulatory" (N021), so a penalty
for breaking a KYC rule could reasonably be legal, regulatory or compliance risk. Compliance is the only answer
taught, but the learner has no rule that separates them. **Fix**: add a fact row for legal risk (the OPE10.1 footnote
on fines and penalties). Then add one line after N101: "Compliance risk is the wider idea: breaking the rules, with
the penalty, the loss and the bad name. The penalty itself is counted as an operational, legal loss." Or keep N115
and give it options with no "legal".

**8 · Medium · header "Music bed out", wrong ranges.** The list (N020–N034, N050–N060, N073–N095, N110–N125,
N147–N160, N161–N172) leaves music *under* the credit and counterparty definitions (N041–N049), the market and
liquidity definitions and their three forms (N064–N072), the compliance, reputational and climate definitions
(N101–N108), and the whole investment-category and trading-book rule (N126–N146). N172 does not exist, because the
script ends at N168. This breaks checklist item 19 ("no music under definitions"). **Fix**: rebuild the list from
the rule and check lines: N017–N037, N041–N062, N064–N092, N095–N119, N122–N151, N152–N163.

**9 · Medium · Chapter 3 (N063–N092): too much for one chapter.** It is 5.4 min with 13 new names: market risk, three
liquidity forms and seven interest-rate types. It covers three ideas (three doors), not one. The market-risk
definition is never asked in any check. On a phone after work, this is where the beginner drops. **Fix** (choose
one):
- (a) Split it into "3 · market and liquidity" (with its own check: one market-risk question and one funding / time /
  call question) and "4 · the interest-rate door" (the seven types, with finding 1's three-question hook). Then
  renumber chapters 4 and 5 and the map nodes.
- (b) Keep one chapter, but add a market-risk question to the N086 check and cut N085's repeat (see L6).

**L1 · Low · length.** At about 30 min, the lesson is above the method's 16–22 min and above A00 class (about 27 min).
Every chapter is under 6 min, so it is acceptable if the owner agrees. If cuts are wanted: N032 (the four reasons are
B02's job), N100 (the 1999 history), and N031's RAROC aside.

**L2 · Low · N070: "crystallises" is first used here but only glossed at N141.** Add "crystallises, becomes a real
payment" at N070, and put the underline on it there.

**L3 · Low · N082: "R-B-I links it to the trading book".** The trading book is not taught until chapter 5. Add "the
trading book, which we meet in chapter five".

**L4 · Low · N067: "rolled over" is jargon.** Say "renewed again and again".

**L5 · Low · N073: "the value of its equity"** can sound like the share price. Say "the market value of its equity"
(row 18: MVE) and add "what the bank is worth, assets minus liabilities, at today's rates" (expert to confirm).

**L6 · Low · N074 and N085.** N074 says "write the seven as I go", then N085 says "write the seven now", with a 6 s
hold. That is two instructions, and 6 s is too short to write seven names. Keep one: either "write as I go" (and make
N085 a say-aloud recall with the names blanked), or a 10 s hold.

**L7 · Low · N112: "both camps were close".** The "it's all one risk" camp was not close. Say "The four-risks camp was
close; the one-risk camp missed that each is a different risk."

**L8 · Low · cues not spoken.** The N125 cue "decided at purchase, documented" is never said. The N165 cue "no sums
today; the sums start in B03" is never said, although the header asks for it to be said at the close. Speak both
(N165: "No sums today; they start in B-zero-three.") or drop the cues.

**L9 · Low · N063 and N076.** Ch3's recall opener asks only about ch2; checklist item 5 wants cumulative recall, so add
one ch1 question. Ch3's misconception is not stated as a commit: "this is where people slip" names no belief. The plan
gives one: "some think basis risk is the same as interest rate risk in general". State it, hold, then break it with
N077.

**L10 · Low · N123.** It is 24 words with three "or" clauses, which is hard to follow aloud. Split it: "Basel puts
three kinds on the trading book. Bought to resell soon. Bought to profit from short-term price moves. Bought to lock
in arbitrage. And hedges of these."

**L11 · Low · N156: "Where does the loss go first?"** "First" suggests a second step that is never taught. Drop
"first".

**L12 · Low · the house analogy and "book" / "shelf".** The analogy's limit is never stated (checklist item 20), and
N003 says "book" while chapter 5 says "shelf". Add once, at N122: "Shelf is our picture; the exam says book."

**L13 · Low · N015 / N041: "counterparty" is used in the credit-risk definition (N041) before it is explained (N047).**
Gloss it at N041: "counterparty, the other side of a deal".

**L14 · Low · N103, N165: spoken ids are hard to hear.** "B-zero-four b" and "B two point one to two point five" are
not easy to catch. Prefer "in the Basel classes" at N103. At N165 keep the ids on the card only, and say "That covers
the syllabus for risk types and the two books."

**L15 · Low · goodbye (N168).** "Look after yourselves, and I'll see you in the next class" is close to A00's "Take
care of yourselves, and I'll see you in the next one". It is not a repeat, but it is near. Consider "That's Module B
begun. Rest well tonight, and I'll see you in the next class."

## Checklist (`teaching_method.md` §7)

| # | Check | Mark | Note |
|---|---|---|---|
| 1 | AI voice, rule version, true number, goal | Yes | AI-voice line N.A. (owner 2026-11-21: no disclosure); card N001, chips N004, goal N003 |
| 2 | Retrieval opener | Yes | First lesson of the module: Module A (N007) and JAIIB (N009), with answers |
| 3 | Early win | Yes | N007 |
| 4 | Chapters one idea, 3–6 min, re-entry | No | All are 3.5–5.4 min with re-entry lines, but ch3 is three ideas (finding 9) |
| 5 | Recall of earlier chapters | Yes | Ch3 recalls only ch2 (L9) |
| 6 | Pre-questions answered same chapter | Yes | N039→N045; N066→N067; N122→N123; the opening question answered in ch4 as promised |
| 7 | Names first; one fixed name | Yes | Aliases introduced once; book/shelf (L12) |
| 8 | Rule ≤ 25 words before example | Yes | |
| 9 | Key line three ways | Yes | Ch1 N026–N028; ch3 N079/N087; ch4 N095–N098 |
| 10 | Misconception stated, committed, broken | No | Ch3 (L9) |
| 11 | 2–3 end-of-chapter checks, hold ≥ 3 s, reasons | Yes | N149 uses an untaught word (finding 6) |
| 12 | Mixed check | Yes | N152–N157 |
| 13 | Numericals full / faded / try | N.A. | No sums (`numericals.md`) |
| 14 | "Why" prompts only where the sheet gives a reason | Yes | |
| 15 | Every cue lands on a named word | No | N125, N165 (L8) |
| 16 | One mark per key idea; stress = cue | Yes | |
| 17 | Board cumulative; numbers written | Yes | |
| 18 | New term written as first spoken | No | "crystallises" (N070), "devolves" (N149) |
| 19 | No music under definitions | No | Finding 8 |
| 20 | Analogy limit stated | No | L12 |
| 21 | Blank-map recall, "you can now", scope | Yes | N158–N165 |
| 22 | Preview after today's question answered | Yes | N167 |
| 23 | Five uses per core term, half as questions | Yes | Basis, call, HFT, transfer: yes; sovereign and intrinsic are used once |
| 24 | Facts trace to the sheet; no [verify] | Yes | Spot-checked rows 9–47; the legal-risk and intrinsic-risk fixes need new rows (findings 4, 7) |
| 25 | Exam signal backed | Yes | N004 = sheet "Exam evidence" (6 of 7; basis 4 cycles). The plan says 5; the script follows the sheet |
| 26 | "You / I", no Sir, no anecdote | Yes | The branch morning is labelled illustrative |
| 27 | No resemblance to coaching material | Yes | As far as a beginner can tell |
| 28 | Read-aloud ≤ 25 words, plain English | Yes | Max 24; N123 dense (L10) |
| 29 | Unique greeting and goodbye | Yes | Near A00 (L15) |
| 30 | Confidence earned | No | Findings 1, 2, 7: a learner who gets every pause right can still miss basis vs yield curve, counterparty vs settlement, and legal vs compliance |
