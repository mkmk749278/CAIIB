# D06b · "Managing interest rate risk: strategies, controls and IRRBB" · CLASS EDITION (script c1, with cue sheet)
* Status: c1, 2026-11-24. Standard style (course/spec/lesson_spec.md): one question per idea, one pause check per chapter, at most one light line per chapter, plain Indian English; 12–15 min.
* Plan: course/bfm/D/plans_D.md §D06b (v4 split from D05/D06; v3 additions (1)–(8)). Course order v4: D05 → D06 → D06b → D07.
* Syllabus: D5.3 (Strategies for controlling interest rate risk), D5.4 (Controls and supervision; sound practices), D5.5 (RBI guidelines on IRRBB).
* Facts: D06b_fact_sheet (29 primary-sourced rows, cited as [F1]–[F29]). Sums: D06b_numericals. Practice: D06b_practice.
* Rule version (opening card): "RBI (Commercial Banks – Asset Liability Management) Directions, 2025 (28 Nov 2025) · RBI (Commercial Banks – Miscellaneous) Directions, 2025 (updated 19 Oct 2026; Second Amendment RBI/2026-27/294) · RBI (Rupee Interest Rate Derivatives) Directions, 2025 (eff. 1 Mar 2026, updated 22 Sep 2026) · RBI (Commercial Banks – Classification, Valuation and Operation of Investment Portfolio) Directions, 2025 (updated 1 Oct 2026) · RBI (Commercial Banks – Forthcoming Instructions) Directions, 2025 Ch. V IRRBB (issued, coming) · BCBS SRP31/SRP98 (international reference) · as at 31 December 2026".
* Greeting / goodbye (unique, checked against greetings.md):
   * Greeting: "Good to have you with me today. Last class we measured the duration gap; now we decide what to do about it."
   * Goodbye: "That wraps up interest rate risk management. Close your notebook, take a breather, and we'll look at profit planning next class."
* Story: Apex Bank (illustrative), a mid-sized Indian commercial bank. Its treasury head expects interest rates to rise next quarter, while the bank is liability-sensitive (negative gap) and holds a positive modified duration gap on its banking book. All names, amounts, durations, and dates are illustrative.
* Holds: quick questions 3 s; calculation steps 8 s; "your turn" numerical 15 s; blank map 5 s.
* Say it right: "I-R-R-B-B" (letter by letter); "E-V-E" (economic value of equity); "M-V-E" (market value of equity); "N-I-I" (net interest income); "E-a-R" (earnings at risk); "N-M-D" (non-maturity deposit); "A-L-C-O" as "AL-co"; "P-V-zero-one" for PV01; "I-R-S", "F-R-A", "I-R-F"; "H-T-M", "A-F-S"; "two hundred basis points" for 200 bps.
* Not in this video: six sources of IRR and TGA/NIM sums (two classes back); duration derivation, MCLR, and EBLR resets (last class); derivative pricing mechanics (treasury derivatives lessons); full ICAAP document structure (risk governance lesson).
* Length estimate: 1,887 spoken words + ~2.4 min holds ≈ 14.8 min at 150 wpm (verified by script checker).
* Cue-sheet legend: S scene · N note · G glow · B board mark · M map node · C card · H hold.
   * Stable pictures: Ch 1: 2×2 Strategy Matrix (rate expectation × gap sign → action) overlaid on gap bars; Ch 2: four-tier Governance Ladder (Board → RMC → ALCO → ALM Support Group) with an independence wall; Ch 3: two-column RBI Board ("In Force Today" vs "Issued, Coming") plus the Apex Bank duration table.


---

## Warm-up

N001 · [warmly] Good to have you with me today. Last class we measured the duration gap; now we decide what to do about it.
> 0 C: rule-version card "as at 31 December 2026" · 1 S: notebook page; title "Managing interest rate risk: strategies, controls and IRRBB"


N002 · Calculator nearby, phone silent. First, quick recall from last class: why multiply liability duration by liabilities over assets?
> 1 S: formula box "MDG = MDA − (RSL/RSA) × MDL" · H: 3 s


N003 · Because liabilities are usually smaller than assets, so liability duration must be weighted to the asset base.
> 1 N: "weight = RSL / RSA ✓" [F20]


N004 · From two classes back: if rate-sensitive liabilities exceed rate-sensitive assets, is the gap positive or negative?
> 1 S: gap bar "RSL > RSA" · H: 3 s


N005 · Negative. The bank is liability-sensitive, so rising rates squeeze its net interest income.
> 1 N: "RSL > RSA → negative gap ✓" [F5]


N006 · I-R-R-B-B appears across exam cycles, and one key derivative cap changed in October twenty twenty-six.
> 1 C: card "strategies · controls · IRRBB · Oct 2026 change"


N007 · Picture illustrative Apex Bank. Its treasury head expects rates to rise next quarter, while the bank is liability-sensitive.
> 1 S: Apex Bank ALCO table (illustrative); red bar "Gap < 0" · 2 N: "expectation: rates ↑"


N008 · She asks the room: should we restructure the balance sheet, or hedge it with derivatives?
> 1 S: two buttons "change the book" · "hedge with derivatives" · H: 3 s


N009 · Hold your view. By the end, you'll know both levers, the governance rules, and what R-B-I requires today.
> 1 G: both buttons pulse once

## Chapter 1 · Strategies: on and off the balance sheet

N010 · Chapter one. Strategies for controlling interest rate risk. First, let's break a common myth.
> 1 S: chapter title "1 · Strategies: on and off the balance sheet"


N011 · Many of you think a safe bank should push its interest rate gap down to exact zero.
> 1 N: thought bubble "aim = perfect zero gap?"


N012 · That is impossible. Locking funds long stabilises earnings yet exposes economic value; staying overnight does the reverse.
> 1 B: strike through thought bubble · 2 C: card "cannot eliminate EV risk and earnings risk together" [F1]


N013 · So banks never chase zero risk. They choose a deliberate trade-off inside Board-approved limits.
> 1 N: "trade-off inside Board limits" [F1, F12]


N014 · To steer the gap, banks use two toolkits: on the balance sheet, and off it.
> 1 S: split board "On-balance-sheet" | "Off-balance-sheet"


N015 · On the balance sheet, A-L-C-O shifts the maturity and repricing mix of loans, deposits, and investments.
> 1 N: left column "investment maturity · deposit tenor · loan repricing" [F2]


N016 · Wait. Can treasury actively trade banking-book bonds every month to adjust duration?
> 1 C: card "HTM banking-book bonds: active trading?" · H: 3 s


N017 · No. Held-to-maturity securities are carried at cost to collect cash flows, not marked to market.
> 1 N: "HTM = collect cash flows, not MTM" [F3]


N018 · Under R-B-I's twenty twenty-five investment directions, annual H-T-M sales cannot exceed five per cent of opening carrying value without R-B-I approval.
> 1 C: card "HTM sales cap: 5% of opening carrying value / FY (else prior RBI DoS approval)" [F3] · 2 B: box "5%"


N019 · Securities held for flexible A-L-M selling belong in Available for Sale; reclassifying categories needs Board plus R-B-I approval.
> 1 N: "ALM flexibility → AFS · reclassification = Board + RBI DoS" [F4]


N020 · Because balance-sheet shifts move slowly, banks also hedge off the balance sheet with Rupee interest rate derivatives.
> 1 G: right column "Off-balance-sheet"


N021 · Under R-B-I's Rupee Interest Rate Derivatives Directions, effective March twenty twenty-six, hedging covers the balance sheet, portfolio, or individual items.
> 1 C: card "Rupee IRD Directions 2025 (eff. 1 Mar 2026): hedge balance sheet / portfolio / item" [F7]


N022 · Banks use interest rate swaps, forward rate agreements, exchange-traded interest rate futures, caps, floors, collars, and swaptions.
> 1 N: right column "IRS · FRA · IRF · caps/floors/collars · swaptions" [F8]


N023 · Hedging an H-T-M bond with an interest rate swap does not taint its H-T-M classification.
> 1 N: "HTM + IRS hedge → stays HTM" [F9]


N024 · Now, write this down — a major trap. Older books teach a P-V-zero-one cap of zero point two five per cent of net worth.
> 1 C: trap card (left/red) "OLD: gross PV01 cap = 0.25% of net worth" [F10]


N025 · That cap is gone. On nineteen October twenty twenty-six, R-B-I deleted paragraph thirty-seven of the Miscellaneous Directions immediately.
> 1 C: trap card (right/green) "CURRENT (19 Oct 2026): 0.25% PV01 cap DELETED" [F10] · 2 B: strike through "0.25%"


N026 · Next: defensive versus aggressive management. A defensive bank keeps its gap near zero so earnings stay steady either way.
> 1 S: 2×2 Strategy Matrix appears on gap bars · 2 N: "defensive = near-matched book" [F5]


N027 · An aggressive bank takes a view: expecting rates up, it widens a positive gap; expecting rates down, a negative gap.
> 1 N: matrix cells "Rates ↑ + Gap + → gain" · "Rates ↓ + Gap − → gain" [F5, F6]


N028 · Back to Apex Bank: negative gap, rates expected up. Doing nothing cuts net interest income.
> 1 G: matrix cell "Rates ↑ + Gap − → LOSS" [F6]


N029 · So Apex Bank uses both levers: lengthen fixed deposits, float loans, or enter a pay-fixed, receive-floating swap.
> 1 N: "defend: lengthen deposits · float loans · pay-fixed IRS / sell IRF" [F6, F8] · 2 M: map node "Strategies (on/off BS)"


N030 · Pause check. One: a bank has a positive gap and expects rates to fall. Which swap hedges it?
> 1 S: pause card "Q1: Gap > 0, rates expected ↓ → which IRS?" · H: 3 s


N031 · Receive-fixed, pay-floating, to lock in interest receipts as rates drop.
> 1 N: "receive-fixed / pay-floating ✓" [F6]


N032 · Two: what is the annual non-exempt sales cap on H-T-M securities without prior R-B-I approval?
> 1 S: pause card "Q2: annual HTM sales cap?" · H: 3 s


N033 · Five per cent of opening carrying value.
> 1 N: "5% of opening carrying value ✓" [F3]


N034 · Three, the twist. Does the zero point two five per cent net-worth P-V-zero-one cap still apply to non-option rupee derivatives?
> 1 S: pause card "Q3: 0.25% net worth PV01 cap still applies?" · H: 3 s


N035 · No. R-B-I deleted it on nineteen October twenty twenty-six.
> 1 N: "DELETED 19 Oct 2026 ✓" [F10]


N036 · [seriously] One thing to remember from chapter one: manage the trade-off inside limits, and remember the P-V-zero-one cap is gone.
> 1 S: chapter 1 summary card locks; dims to grey

## Chapter 2 · Controls, governance and sound practices

N037 · Chapter two. Controls and sound practices. Recall first: can a bank actively trade H-T-M bonds to manage duration?
> 1 S: chapter title "2 · Controls, governance and sound practices" · H: 3 s


N038 · No, non-exempt sales are capped at five per cent. Now let's climb the governance ladder.
> 1 N: "no, 5% cap ✓" [F3] · 2 S: four-tier Governance Ladder draws on screen


N039 · R-B-I's twenty twenty-five A-L-M Directions set four tiers: the Board, Risk Management Committee, A-L-C-O, and the A-L-M Support Group.
> 1 S: ladder rungs "1 Board · 2 RMC · 3 ALCO · 4 ALM Support Group" [F11]


N040 · The Board owns ultimate oversight. It approves overall strategy, policies, risk appetite, and internal prudential limits.
> 1 G: rung "1 Board" · 2 N: "Board: strategy · policy · risk appetite · limits" [F11, F12]


N041 · Specifically, the Board or Risk Management Committee sets limits on Earnings at Risk and Market Value of Equity volatility.
> 1 C: card "Board / RMC limits: EaR (linked to NII) · MVE volatility (linked to MVE)" [F12]


N042 · A-L-C-O, headed by the C-E-O, C-M-D, or Executive Director, executes strategy and ensures limit compliance.
> 1 G: rung "3 ALCO" · 2 N: "ALCO (CEO/CMD/ED): executes · enforces limits" [F11]


N043 · A-L-C-O also gives prior approval for duration gap yields, assumptions, bucketing, and behavioural studies.
> 1 N: "ALCO prior approval: yields · assumptions · bucketing · studies" [F13]


N044 · Now a key question. Should the treasury desk taking interest rate positions also measure and report its own risk?
> 1 S: wall draws between "Position-taking (Treasury)" and "Risk measurement & control" · H: 3 s


N045 · Never. Many assume dealers know their book best, so they should score it. That creates a direct conflict of interest.
> 1 B: box the independence wall · 2 C: card "risk measurement & control MUST be independent of position-taking" [F14]


N046 · Sound practice separates trading, settlement, monitoring, and accounting. The independent risk unit reports directly to senior management and the Board.
> 1 N: "independent unit → reports directly to senior mgmt / Board" [F14]


N047 · Three more controls complete the sound-practices card. First: pre-approval. New products need a pre-acquisition review and test phase.
> 1 C: sound-practices card "1 Pre-approval: new products & major hedges" [F15]


N048 · Major hedging initiatives also need prior approval, with dedicated risk limits for derivatives.
> 1 N: "dedicated limits for derivative hedges" [F15]


N049 · Second: escalation. Positions exceeding, or likely to exceed, Board limits must be escalated promptly with clear corrective rules.
> 1 C: sound-practices card "2 Escalation: prompt alert on limit breach" [F16]


N050 · Third: reporting and review. Board reports must carry both aggregate summaries and supporting detail — limits, assumptions, stress tests, and audits.
> 1 C: sound-practices card "3 Reports: summary + detail · ≥ semi-annual to Board (forthcoming) · monthly IRS to RBI" [F17]


N051 · Policies and material assumptions are reviewed at least annually, and models undergo independent audit by auditors vetted by the Audit Committee of the Board.
> 1 C: sound-practices card "4 Review ≥ annual · independent audit vetted by ACB" [F18] · 2 M: map node "Controls & Governance"


N052 · Think of it like marking your own exam paper: comforting, perhaps, but no supervisor will accept the score.
> 1 G: independence wall pulses once


N053 · Pause check. One: who approves the bank's overall interest rate risk strategy and internal limits on E-a-R and M-V-E?
> 1 S: pause card "Q1: who approves strategy & EaR/MVE limits?" · H: 3 s


N054 · The Board of Directors, or its Risk Management Committee for limits.
> 1 N: "Board / RMC ✓" [F11, F12]


N055 · Two: which committee pre-approves duration gap yields, bucketing, and behavioural studies?
> 1 S: pause card "Q2: prior approval for DGA assumptions?" · H: 3 s


N056 · A-L-C-O, the Asset Liability Management Committee.
> 1 N: "ALCO ✓" [F13]


N057 · Three, the twist. Who vets the suitability of the independent auditor reviewing the bank's I-R-R models?
> 1 S: pause card "Q3: who vets the IRR model auditor?" · H: 3 s


N058 · The Audit Committee of the Board, A-C-B.
> 1 N: "Audit Committee of the Board (ACB) ✓" [F18]


N059 · [seriously] One thing to remember from chapter two: the Board sets strategy and limits, A-L-C-O executes, and an independent function measures and audits.
> 1 S: chapter 2 summary card locks; dims to grey

## Chapter 3 · IRRBB: what RBI asks today, and what is coming

N060 · Chapter three. R-B-I guidelines on Interest Rate Risk in the Banking Book. Recall: how often must material I-R-R assumptions be reviewed?
> 1 S: chapter title "3 · IRRBB: today's rule and what is coming" · H: 3 s


N061 · At least annually. Now let's define I-R-R-B-B clearly.
> 1 N: "at least annually ✓" [F18]


N062 · I-R-R-B-B is the current or prospective risk to capital and earnings from adverse rate moves affecting the banking book.
> 1 C: names-first card "IRRBB = risk to capital & earnings from rate moves on the banking book" [F19]


N063 · Earnings perspective tracks short-term Net Interest Income or E-a-R; economic value tracks long-term present value of equity.
> 1 N: "EaR / NII = short-term earnings · MVE / EVE = long-term value" [F19, F20]


N064 · Now let's clear up a big confusion. Some classes claim Basel's six-shock I-R-R-B-B framework is already mandatory in India.
> 1 S: two-column RBI Board: "IN FORCE (31 Dec 2026)" | "ISSUED, COMING"


N065 · Not yet. Here is the exact position as at thirty-one December twenty twenty-six.
> 1 B: underline both column headers


N066 · In force today is Chapter Seven of R-B-I's twenty twenty-five Asset Liability Management Directions.
> 1 N: left column "ALM Directions 2025, Ch. VII (in force)" [F20]


N067 · Banks must run both Traditional Gap Analysis and Duration Gap Analysis globally, and separately for currencies at five per cent or more.
> 1 N: left column "both TGA + DGA · global · currencies ≥ 5%" [F20]


N068 · Positions go into eleven time buckets. Behavioural studies for non-maturity deposits use at least three years of data, reviewed in quarter one.
> 1 N: left column "11 buckets · NMD study ≥ 3 yrs data, reviewed Q1" [F23]


N069 · Today's standardised shock is two hundred basis points parallel. Under Pillar Two, a bank is an outlier if banking-book M-V-E falls over twenty per cent.
> 1 C: card "IN FORCE: 200 bps shock · outlier if banking-book MVE falls > 20%" [F22] · 2 B: box "> 20% of MVE"


N070 · That drop in M-V-E is an economic impact, not an accounting loss, because the banking book is not marked to market.
> 1 N: "economic impact ≠ accounting loss" [F21]


N071 · Let's test this on our calculator at Apex Bank. Equity is one thousand crore; R-S-A ten thousand crore, duration two point five zero.
> 1 S: Apex Bank table (illustrative): "Equity ₹1,000 cr · RSA ₹10,000 cr (MDA 2.50) · RSL ₹9,000 cr (MDL 1.50) · shock +200 bps"


N072 · R-S-L is nine thousand crore, duration one point five zero. Shock is plus two hundred basis points, or zero point zero two.
> 1 N: "Δi = +0.02 (200 bps)" [F20]


N073 · Step one: weight liabilities. Nine thousand divided by ten thousand is zero point nine zero; times one point five zero equals one point three five.
> 1 S: keys "9000 ÷ 10000 = 0.90 × 1.50 = 1.35" · H: 8 s


N074 · Step two: modified duration gap. Two point five zero minus one point three five equals plus one point one five years.
> 1 S: keys "2.50 − 1.35 = 1.15" · 2 N: "MDG = +1.15" [F20]


N075 · Step three: change in equity. One point one five times ten thousand times zero point zero two equals minus two hundred thirty crore.
> 1 S: keys "1.15 × 10000 × 0.02 = 230" · 2 N: "ΔE = −₹230 cr" [F20]


N076 · Step four: two hundred thirty divided by one thousand times one hundred equals twenty-three per cent. Above twenty per cent — outlier.
> 1 S: keys "230 ÷ 1000 × 100 = 23%" · 2 B: box "23% > 20% → OUTLIER" [F22]


N077 · Common trap: skipping the zero point nine zero weight gives duration gap one, a twenty per cent drop, missing the outlier trigger.
> 1 C: trap card "skipping RSL/RSA → MDG 1.00 → 20% (wrong!)"


N078 · Your turn. Apex Bank hedges with a pay-fixed swap, cutting modified duration gap to zero point seven five. Find the new percentage fall in M-V-E.
> 1 S: "Your turn: MDG = 0.75 · RSA ₹10,000 cr · Equity ₹1,000 cr · +200 bps" · H: 15 s


N079 · Zero point seven five times ten thousand times zero point zero two is one hundred fifty crore. Divided by one thousand: fifteen per cent. Safe.
> 1 S: keys "0.75 × 10000 × 0.02 = 150 ÷ 1000 × 100 = 15%" · 2 N: "15% ≤ 20% ✓" [F20, F22]


N080 · Now look at the right column: issued, coming. R-B-I's Basel-aligned I-R-R-B-B rules sit in Chapter Five of the Forthcoming Instructions Directions, twenty twenty-five.
> 1 G: right column "ISSUED, COMING: Forthcoming Instructions Directions 2025, Ch. V" [F24]


N081 · Their effective date is still pending, and T-G-A and D-G-A phase out only after implementation.
> 1 N: right column "effective date pending · TGA/DGA continue till then" [F24]


N082 · Meanwhile, commercial banks submit quarterly interim delta-E-V-E and delta-N-I-I returns to R-B-I's Department of Regulation.
> 1 N: right column "interim: quarterly Table 12 to RBI DoR" [F25]


N083 · Once effective, banks use nineteen buckets and six shock scenarios for delta-E-V-E: parallel up, parallel down, steepener, flattener, short up, and short down.
> 1 C: card "6 EVE shocks · 2 parallel NII shocks · 19 buckets · INR: 250 / 300 / 200 bps" [F26]


N084 · For rupees, R-B-I prescribes two hundred fifty basis points parallel, three hundred short, and two hundred long; Basel's international reference recalibrated higher.
> 1 N: "RBI: 250 / 300 / 200 bps · BCBS 2024 ref: 325 / 475 / 225 bps" [F26]


N085 · Balance-sheet split: delta-E-V-E uses a run-off balance sheet excluding own equity; delta-N-I-I uses a constant balance sheet over a rolling twelve months.
> 1 N: "ΔEVE = run-off, excl. equity · ΔNII = constant BS, rolling 12 months" [F27]


N086 · Non-maturity deposits use ten years of data, non-core overnight, with core caps: ninety per cent and five years for retail transactional.
> 1 C: card "NMD caps (10-yr data): Retail trans 90%/5y · Retail non-trans 70%/4.5y · Wholesale 50%/4y" [F28]


N087 · Retail non-transactional caps at seventy per cent and four point five years; wholesale caps at fifty per cent and four years.
> 1 G: card highlights "70%/4.5y" and "50%/4y" [F28]


N088 · Under Pillar Two, the outlier trigger tightens to delta-E-V-E decline over fifteen per cent of Tier One capital under any of the six shocks.
> 1 B: box "> 15% of Tier 1 capital" [F29]


N089 · Under S-R-E-P, R-B-I can direct an outlier to raise capital, hedge, cap parameters, or improve controls; Pillar Three requires annual disclosures.
> 1 N: "Pillar 2 (ICAAP/SREP) + Pillar 3 annual disclosures" [F29] · 2 M: map node "IRRBB (in force vs coming)"


N090 · Pause check. One: under R-B-I rules in force on thirty-one December twenty twenty-six, what is the outlier threshold?
> 1 S: pause card "Q1: current in-force outlier threshold?" · H: 3 s


N091 · More than twenty per cent of M-V-E under a two hundred basis point shock.
> 1 N: "> 20% of MVE (200 bps) ✓" [F22]


N092 · Two: under the forthcoming framework, does delta-E-V-E assume a run-off or a constant balance sheet?
> 1 S: pause card "Q2: ΔEVE balance-sheet assumption?" · H: 3 s


N093 · Run-off balance sheet, excluding own equity. Constant balance sheet is for delta-N-I-I.
> 1 N: "ΔEVE = run-off · ΔNII = constant ✓" [F27]


N094 · Three, the twist. What are the core proportion and average maturity caps for wholesale non-maturity deposits?
> 1 S: pause card "Q3: wholesale NMD caps?" · H: 3 s


N095 · Fifty per cent core, and four years average maturity.
> 1 N: "50% core · 4 years ✓" [F28]


N096 · [seriously] One thing to remember: today is twenty per cent M-V-E under two hundred bps; six shocks and fifteen per cent Tier One are coming.
> 1 S: chapter 3 summary card locks; dims to grey

## Close

N097 · Mixed check. One: a liability-sensitive bank expects rates to rise — pay-fixed or receive-fixed swap?
> 1 S: mixed check card "1 Gap < 0, rates ↑ → swap?" · H: 3 s


N098 · Pay-fixed, receive-floating. Two: under today's A-L-M Directions, how many years of data back an N-M-D study?
> 1 N: "pay-fixed ✓" [F6] · 2 S: mixed check card "2 current NMD study data?" · H: 3 s


N099 · At least three years, reviewed in quarter one. Now picture our blank mind map: Strategies, Controls, and I-R-R-B-B.
> 1 N: "≥ 3 years, Q1 review ✓" [F23] · 2 M: blank mind map with 3 empty branches · H: 5 s


N100 · Strategies: on-balance-sheet levers, five per cent H-T-M cap, off-balance-sheet derivatives with no P-V-zero-one cap, and the two-by-two matrix.
> 1 M: branch 1 fills in [F2, F3, F6, F8, F10]


N101 · Controls: Board sets strategy and limits, A-L-C-O executes, risk measurement is independent, and A-C-B vets the auditor.
> 1 M: branch 2 fills in [F11, F12, F14, F18]


N102 · I-R-R-B-B: today's two hundred bps and twenty per cent M-V-E, versus coming six shocks and fifteen per cent Tier One, Pillars Two and Three.
> 1 M: branch 3 fills in [F22, F24, F26, F29]


N103 · You can now answer questions on controlling interest rate risk, governance sound practices, and R-B-I's current and forthcoming I-R-R-B-B rules.
> 1 C: "You can now: D5.3 strategies · D5.4 controls · D5.5 IRRBB (as at 31 Dec 2026)"


N104 · Homework: an H-T-M book opens at twenty-four thousand crore, and the bank sells one thousand four hundred crore. Is R-B-I approval needed?
> 1 C: homework card "Opening HTM ₹24,000 cr · Sales ₹1,400 cr (non-exempt) · RBI DoS approval needed?"


N105 · Next class teaser: two branches report equal profit, one from treasury gains in a falling-rate year. Which profit would you plan on?
> 1 N: teaser note "same profit, one from treasury gains → which is reliable?"


N106 · [warmly] That wraps up interest rate risk management. Close your notebook, take a breather, and we'll look at profit planning next class.
> 1 S: full mind map fades gently