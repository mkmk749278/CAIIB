# D06 · "Duration gap, MCLR, and EBLR" · CLASS EDITION (script c1, with cue sheet)
* Status: c1, 2026-11-24. Standard style (course/spec/lesson_spec.md): one question per idea, one pause check per chapter, at most one light line per chapter, plain words; 12–15 min.
* Plan: course/bfm/D/plans_D.md §D06 (v4 split active: D06 = duration gap, ΔEVE, Base Rate, MCLR, EBLR, case; D06b = strategies, controls, IRRBB). Course order v4: D05 → D06 → D06b.
* Syllabus: D5.2 (Measurement and measurement techniques — duration part); loan pricing benchmarks (Base Rate, MCLR, EBLR) placed under D5 interest-rate topics per recalled exam evidence (Jul 2024, Jun 2026).
* Facts: D06_fact_sheet, rows cited as [F1]–[F30]. Sums: D06_numericals (solved two independent ways on basic 8-function calculator). Practice: D06_practice.
* Rule version (opening card): "RBI (Commercial Banks – Asset Liability Management) Directions, 2025 (28 Nov 2025) · RBI (Commercial Banks – Interest Rates on Advances) Directions, 2025 (28 Nov 2025) · Interest Rate on Advances (Amendment Directions), 2025 (w.e.f. 1 Oct 2025) · Reset of Floating Interest Rate on EMI-based Personal Loans (updated 1 Oct 2025) · Policy Repo Rate 5.50% (7 Oct 2026) · BCBS SRP98 (effective 1 Jan 2026, reference only) · as at 31 December 2026".
* Greeting / goodbye (checked against greetings.md, unused): greeting "Good to see you here today. Keep your calculator beside you, because today we measure what rate moves do to a bank's net worth."; goodbye "That wraps up duration gap and lending benchmarks. Close the notebook for tonight, and I'll see you in the next class."
* Story: Branch manager Meera reviews two illustrative borrowers after an RBI repo rate cut: Ramesh (home loan on repo-linked EBLR, quarterly reset) and Priya (corporate term loan on 1-year MCLR, annual reset). For balance-sheet duration gap sums, illustrative Bank A and Bank B are used. All names, amounts, rates, and dates are illustrative.
* Holds: questions at least 3 s; one-step sums 8 s; "your turn" 15 s; map 3–5 s per node.
* Say it right: "M-D-G" for Modified Duration Gap; "M-V-E" for Market Value of Equity; "M-D-O-E" for Modified Duration of Equity; "R-S-A" and "R-S-L"; "B-P-L-R"; "M-C-L-R"; "E-B-L-R"; "C-R-R"; "F-B-I-L"; "two hundred basis points" on first use, then "two hundred bps".
* Not in this video: six sources of IRR, Traditional Gap Analysis, ΔNII, NIM, EaR (previous class); IRR hedging strategies, controls, PV01 cap removal, full IRRBB framework (next class); bond duration derivation (Module C bond class).
* Length: 1,867 spoken words + ~2.4 min of holds ≈ 14.8 min at 150 wpm. Chapters: warm-up (~1.3 min) · opening (~0.7 min) · 1 Duration gap (~3.2 min) · 2 Change in equity value (~3.0 min) · 3 Base rate, MCLR, EBLR (~3.4 min) · 4 Branch case (~1.8 min) · close (~1.4 min).
* Cue sheet: S scene · N note · G glow · M map · C card · B board mark · H hold. Picture: the balance sheet shelves with the duration see-saw (Ch 1–2) and the rate-transmission dial (Repo → EBLR / MCLR → Loan rate, Ch 3–4).


---

## Warm-up

N001 · [warmly] Good to see you here today. Keep your calculator beside you, because today we measure what rate moves do to a bank's net worth.
> 1 S: notebook page; opening rule-version card "RBI ALM & Interest Rates on Advances Directions, 2025 · as at 31 Dec 2026" · 2 N: title "Duration gap, MCLR, and EBLR"


N002 · Phone on silent, take a breath, and let's start with two quick recalls.
> 1 S: calm desk icon; "calculator ready" badge


N003 · First, from last class. A bank has six thousand crore rate-sensitive assets and four thousand eight hundred crore rate-sensitive liabilities.
> 1 N: "RSA = ₹6,000 cr · RSL = ₹4,800 cr (illustrative)" · 2 N: "Δi = +0.50%"


N004 · If interest rates rise by half a percent, what happens to Net Interest Income? Lock your number.
> 1 B: underline "Net Interest Income" · H: 3 s


N005 · Gap is plus one thousand two hundred crore, so NII rises by six crore. Positive gap helps earnings when rates climb.
> 1 N: "Gap = +₹1,200 cr · ΔNII = +₹6.00 cr ✓"


N006 · Second recall, from our bond class earlier. When market yields rise, what happens to the market price of a fixed-rate bond?
> 1 S: see-saw icon (yield up, price ?) · H: 3 s


N007 · The price falls, and a longer duration makes that price drop sharper. Keep that see-saw in your head today.
> 1 S: see-saw tilts: "yield ↑ → price ↓ (steeper with longer duration)"


N008 · Duration gap, MCLR, and EBLR appear repeatedly in recent exams, including repo-move cases.
> 1 C: exam-signal tag "recalled Jul 2024, Jun 2026 (MCLR & repo cases)"


N009 · Today you'll compute duration gap, find the equity drop, and trace policy rates to borrowers.
> 1 N: goal strip "1 Duration gap · 2 ΔMVE · 3 Benchmarks · 4 Case"

## Opening

N010 · Picture branch manager Meera on a Monday morning. RBI has just cut the policy repo rate by twenty-five basis points.
> 1 S: branch desk; Meera with two loan files (all names and numbers illustrative)


N011 · Two borrowers call her before lunch. Ramesh has a home loan on EBLR. Priya has a corporate term loan on one-year MCLR.
> 1 S: split card "Ramesh: home loan (EBLR)" · 2 S: "Priya: term loan (1-year MCLR)"


N012 · Ramesh sees his interest rate fall within the next quarter. Priya's rate does not move at all for months.
> 1 N: "Ramesh: rate falls next quarter" · 2 N: "Priya: rate unchanged"


N013 · Why does the same RBI rate cut reach Ramesh quickly, while Priya waits? Hold your guess as we build the whole picture.
> 1 B: circle "Why?" between both files · H: 3 s

## Chapter 1 · Duration gap: weighting both sides of the balance sheet

N014 · Chapter one. Last class tracked short-term earnings. Today we measure long-term economic value.
> 1 S: chapter title "1 · Duration gap" · 2 N: "TGA → short-term NII · DGA → long-term MVE" [F1]


N015 · Under RBI's twenty-twenty-five ALM Directions, banks must run both TGA and Duration Gap Analysis globally.
> 1 C: rule card "RBI Commercial Banks ALM Directions, 2025: run BOTH TGA & DGA globally" [F1, F2]


N016 · Any currency at five percent or more of global assets or liabilities gets its own DGA.
> 1 N: "Separate DGA/TGA if currency ≥ 5% of global assets or liabilities" [F2]


N017 · First, one term: Modified Duration is the approximate percentage value change for a one-hundred-basis-point rate move.
> 1 C: names-first tile "Modified Duration (MD) = approx. % value change for 100 bps (1%) rate move" [F3]


N018 · Now put the balance sheet on our see-saw. Assets sit on one shelf with weighted Modified Duration called MDA.
> 1 S: balance sheet shelves on see-saw · 2 N: "MDA = weighted MD of RSA" [F4]


N019 · Liabilities sit on the other shelf with weighted Modified Duration called MDL. Rate-sensitive off-balance-sheet items join their respective sides too.
> 1 N: "MDL = weighted MD of RSL (incl. rate-sensitive OBS)" [F4]


N020 · Many of you think duration gap is simply MDA minus MDL.
> 1 N: thought bubble "MDG = MDA − MDL?"


N021 · That is the number-one exam trap. Why? Because a bank's liabilities are smaller than its assets—equity fills the rest.
> 1 B: strike through "MDA − MDL?" · 2 S: shelves show Assets = Liabilities + Equity


N022 · So RBI weights liability duration by RSL over RSA. Write this down once.
> 1 C: formula box "MDG = MDA − (RSL ÷ RSA) × MDL" [F5] · 2 B: box "(RSL ÷ RSA)"


N023 · Read that formula plain: Modified Duration Gap equals MDA minus W times MDL, where W is RSL divided by RSA.
> 1 N: "W = RSL ÷ RSA" [F5] · 2 G: "MDG" glows


N024 · Key rule: MDG is MDA minus W times MDL, never plain MDA minus MDL.
> 1 G: "(RSL ÷ RSA)" pulses once [F5]


N025 · Let's solve Bank A together on the basic calculator. RSA is ten thousand crore, MDA is three point two zero years.
> 1 S: calculator & notebook table "Bank A (illustrative): RSA ₹10,000 cr · MDA 3.20"


N026 · RSL is nine thousand crore, MDL is one point five zero years, and Net Worth is one thousand crore.
> 1 N: "RSL ₹9,000 cr · MDL 1.50 · Equity ₹1,000 cr"


N027 · Step one: press nine thousand, divide by ten thousand, times one point five zero, equals.
> 1 S: calculator keys 9000 ÷ 10000 × 1.50 = → 1.35


N028 · You get one point three five. Step two: press three point two zero, minus one point three five, equals.
> 1 S: calculator keys 3.20 − 1.35 = → 1.85


N029 · Bank A's Modified Duration Gap is one point eight five years. Forgetting W would give one point seven zero—wrong.
> 1 N: "MDG = 1.85 years ✓" · 2 C: trap card "Wrong: 3.20 − 1.50 = 1.70 (forgot W = 0.90)" [F5]


N030 · Now your turn with Bank B. RSA eight thousand crore, MDA two point eight zero. RSL seven thousand two hundred, MDL one point two zero.
> 1 S: card "Your turn · Bank B (illustrative): RSA ₹8,000 cr, MDA 2.80 · RSL ₹7,200 cr, MDL 1.20" · H: 15 s


N031 · Check: seven thousand two hundred divided by eight thousand is zero point nine zero; times one point two gives one point zero eight.
> 1 S: keys 7200 ÷ 8000 × 1.20 = 1.08


N032 · Two point eight zero minus one point zero eight equals one point seven two years. If you got one point six zero, you skipped W.
> 1 N: "Bank B MDG = 1.72 years ✓"


N033 · Pause check for chapter one. Two quick questions. One: what does Modified Duration measure for a hundred-basis-point rate move?
> 1 S: pause card "Q1: MD measures ___ for a 100 bps move?" · H: 3 s


N034 · The approximate percentage change in the asset or liability's value. Two: in the MDG formula, which side gets multiplied by W?
> 1 N: "Approx. % change in value ✓" [F3] · 2 S: card "Q2: W multiplies MDA or MDL?" · H: 3 s


N035 · MDL, the liability duration, because W is RSL divided by RSA. One thing to remember: always weight liability duration by RSL over RSA.
> 1 N: "MDL ✓" [F5] · 2 M: map node "Duration gap: MDG = MDA − (RSL/RSA) × MDL"

## Chapter 2 · Change in Market Value of Equity

N036 · Chapter two. Recall Bank A: positive Modified Duration Gap of one point eight five years.
> 1 S: chapter title "2 · Change in equity value" · 2 N: "Recall · Bank A: MDG = +1.85 · RSA = ₹10,000 cr · Equity = ₹1,000 cr"


N037 · Assets have longer duration than liabilities. If rates rise, does Bank A's equity rise or fall?
> 1 S: see-saw tilts · H: 3 s


N038 · It falls. Assets lose more market value than liabilities do, so the cushion between them—equity—shrinks.
> 1 N: "Positive MDG + Rates ↑ → MVE ↓" [F6]


N039 · RBI's formula for the rupee change in equity is: delta E equals minus MDG, times RSA, times delta i.
> 1 C: formula box "ΔE = −MDG × RSA × Δi" [F6]


N040 · Here equity means Net Worth, and delta i is the rate change as a decimal: one percent is zero point zero one.
> 1 N: "Equity = Net Worth · +200 bps = +0.02" [F6]


N041 · Test a two-hundred-basis-point rise. Press one point eight five, times ten thousand, times two percent, equals.
> 1 S: keys 1.85 × 10000 × 2 % = → 370 [F6]


N042 · With the minus sign, delta E is minus three hundred seventy crore. Bank A's equity value drops by three hundred seventy crore.
> 1 N: "ΔE = −₹370.00 cr" [F6]


N043 · As a share of one-thousand-crore equity: three hundred seventy divided by one thousand equals thirty-seven percent.
> 1 S: keys 370 ÷ 1000 × 100 = 37% · 2 N: "MVE fall = 37.00%"


N044 · Second check: Modified Duration of Equity, or MDOE, equals MDG times leverage—RSA over equity.
> 1 C: names-first tile "MDOE = MDG × (RSA ÷ Equity)" [F7]


N045 · For Bank A, leverage is ten thousand divided by one thousand, which is ten. One point eight five times ten gives eighteen point five.
> 1 N: "Leverage = 10 · MDOE = 18.50" [F7]


N046 · Multiply eighteen point five by a two percent shock: thirty-seven percent fall. Both methods match to the last rupee.
> 1 N: "18.50 × 2% = 37.00% = ₹370 cr ✓" [F7]


N047 · Now watch two crucial RBI rules. First, does that three-hundred-seventy-crore drop hit Bank A's profit and loss account immediately?
> 1 N: thought bubble "Immediate P&L loss?" · H: 3 s


N048 · No. The banking book is not marked to market, so this is an economic impact, not an accounting loss.
> 1 B: strike through "P&L loss?" · 2 C: rule card "Economic impact only — NOT an accounting loss" [F9]


N049 · Second: under Pillar Two, a banking-book drop over twenty percent of MVE at two hundred bps marks an outlier.
> 1 C: rule card "Banking book drop > 20% of MVE at 200 bps = Pillar II outlier" [F10]


N050 · One limit of our see-saw analogy: Modified Duration works only for small, parallel yield-curve shifts, ignoring convexity and prepayment options.
> 1 N: "Limit: marginal parallel shifts only (no convexity/options)" [F12]


N051 · Pause check for chapter two. One: if MDG is positive and rates fall, does MVE rise or fall?
> 1 S: pause card "Q1: Positive MDG + rates ↓ → MVE?" · H: 3 s


N052 · It rises, because asset values climb faster than liability values. Two: what is RBI's Pillar Two outlier trigger under a two-hundred-bps shock?
> 1 N: "MVE rises ✓" [F6] · 2 S: card "Q2: Outlier trigger % of MVE?" · H: 3 s


N053 · A drop exceeding twenty percent of MVE on the banking book. One thing to remember: delta E is economic impact, not an accounting loss.
> 1 N: "> 20% of MVE ✓" [F10] · 2 M: map node "ΔE = −MDG × RSA × Δi · 20% outlier"

## Chapter 3 · Loan pricing benchmarks: Base Rate, MCLR, and EBLR

N054 · Chapter three. How fast do loans reprice when repo moves? That depends on the benchmark.
> 1 S: chapter title "3 · Base rate, MCLR, EBLR" · 2 S: rate-transmission dial Repo → Benchmark → Spread → Loan rate


N055 · Under RBI's twenty-twenty-five Advances Directions, banks cannot lend below the linked benchmark rate.
> 1 C: rule card "Actual rate = Benchmark + Spread · No lending below benchmark" [F13]


N056 · Let's trace the regimes in order. Before July two thousand ten, banks used BPLR—only legacy loans remain on it today.
> 1 N: timeline "BPLR (up to 30 Jun 2010)" [F14]


N057 · From July two thousand ten to March two thousand sixteen came Base Rate: one single Base Rate per bank, reviewed at least quarterly.
> 1 N: "Base Rate (1 Jul 2010 – 31 Mar 2016) · 1 per bank · quarterly review" [F15]


N058 · From first April two thousand sixteen, floating rupee loans moved to MCLR—Marginal Cost of Funds based Lending Rate.
> 1 C: names-first tile "MCLR (w.e.f. 1 Apr 2016) · internal benchmark" [F16]


N059 · MCLR has four parts: marginal cost of funds, negative carry on CRR, operating costs, and tenor premium.
> 1 N: "4 parts: MCF + Negative Carry on CRR + Operating Costs + Tenor Premium" [F16]


N060 · Marginal cost of funds weights borrowings at ninety-two percent and return on net worth at eight percent—matching the eight percent CET1 requirement.
> 1 N: "MCF = 92% Borrowings + 8% Return on Net Worth" [F17]


N061 · Because CRR earns zero interest, negative carry on CRR equals required CRR times marginal cost of funds, divided by one minus CRR.
> 1 C: formula box "Negative Carry on CRR = CRR × MCF ÷ (1 − CRR)" [F18]


N062 · Tenor premium is uniform across loan types. Banks publish five MCLR tenors monthly: overnight, one, three, six, twelve months.
> 1 N: "5 mandatory tenors: O/N, 1M, 3M, 6M, 1Y · published monthly" [F19, F20]


N063 · Now check MCLR reset and spread. Reset period is one year or lower, matching the linked MCLR tenor, anchored to first disbursement.
> 1 N: "Reset ≤ 1 yr (matches MCLR tenor) · anchored to first disbursement" [F22]


N064 · MCLR spread has two parts—business strategy and credit risk premium—never negative, and cannot rise for existing borrowers unless credit risk deteriorates.
> 1 N: "MCLR spread: Business strategy + Credit risk premium (≥ 0)" [F21]


N065 · Still, MCLR depended on each bank's own deposit costs, so RBI rate cuts passed slowly. That brought EBLR—External Benchmark Based Lending Rate.
> 1 C: names-first tile "EBLR · mandatory retail & MSE (1 Oct 2019), Medium (1 Apr 2020)" [F23]


N066 · All floating personal or retail loans and all MSME floating loans must link to one of four external benchmarks.
> 1 N: "4 choices: RBI Repo (5.50%) · FBIL 3M T-Bill · FBIL 6M T-Bill · other FBIL rate" [F24]


N067 · A bank must use one uniform external benchmark within a loan category, and reset EBLR rates at least once in three months.
> 1 B: box "Reset: at least once in 3 months" [F24, F25]


N068 · Many think EBLR resets daily, or spreads stay locked three years. Both are wrong.
> 1 N: thought bubble "Daily reset? No spread cut for 3 yrs?" · 2 B: strike through both


N069 · Under EBLR, credit risk premium changes only on a substantial change in credit assessment. Other spread components change once in three years.
> 1 C: rule card "EBLR spread: Credit risk = substantial change · Other = once in 3 yrs" [F26]


N070 · October twenty-twenty-five update: banks may cut other spread components before three years for customer retention.
> 1 C: trap card "Old: no change < 3 yrs · New (1 Oct 2025): MAY REDUCE earlier for retention" [F26]


N071 · Also from October twenty-twenty-five: fixed-rate switch on EMI personal loans is optional; no negative amortisation stays mandatory.
> 1 C: rule card "EMI personal loans (1 Oct 2025): fixed switch optional · no negative amortisation · quarterly statement" [F29]


N072 · Also note exemptions: fixed-rate loans above three years, loans against own deposits, and staff loans are exempt from benchmark floor rules.
> 1 N: "Exempt: fixed > 3 yrs · own-deposit loans · staff/CEO loans" [F28]


N073 · Pause check for chapter three. One: how often must EBLR loans reset?
> 1 S: pause card "Q1: EBLR reset frequency?" · H: 3 s


N074 · At least once in three months. Two: which four components build MCLR?
> 1 N: "At least once in 3 months ✓" [F25] · 2 S: card "Q2: Four parts of MCLR?" · H: 3 s


N075 · Marginal cost of funds, negative carry on CRR, operating costs, and tenor premium. Three, the twist: can a bank cut EBLR spread after eighteen months?
> 1 N: "MCF + CRR carry + OpCost + Tenor ✓" [F16] · 2 S: card "Q3: Cut EBLR spread at 18 months?" · H: 3 s


N076 · Yes—since October twenty-twenty-five, cutting other spread components early for customer retention is allowed. Remember: MCLR resets up to yearly; EBLR resets at least quarterly.
> 1 N: "Yes (reduction allowed from 1 Oct 2025) ✓" [F26] · 2 M: map node "MCLR (internal, monthly pub, ≤1y reset) · EBLR (external, ≥quarterly reset)"

## Chapter 4 · Branch case: Meera's two borrowers

N077 · Chapter four. Remember my opening question about Meera's two borrowers when RBI cuts the policy repo rate by twenty-five basis points?
> 1 S: chapter title "4 · Branch case" · 2 S: Ramesh and Priya cards side by side


N078 · Start with Ramesh's EBLR home loan. Policy repo rate is five point five zero percent, and his spread is two point six five percent.
> 1 N: "Ramesh (illustrative): Repo 5.50% + Spread 2.65% = 8.15%" [F24]


N079 · Repo drops twenty-five bps to five point two five. Add spread two point six five.
> 1 S: keys 5.25 + 2.65 = 7.90%


N080 · Ramesh's rate drops straight to seven point nine zero percent at his next quarterly reset—within three months. That answers why his EMI falls quickly.
> 1 N: "Ramesh new rate = 7.90% within 3 months ✓" [F25]


N081 · Now Priya's one-year MCLR loan. Borrowings cost six point two zero percent; return on net worth is twelve.
> 1 S: notebook table "Priya's bank (illustrative): MCB 6.20% · RoNW 12% · CRR 3% · OpCost 0.55% · Tenor 0.30%"


N082 · Marginal cost of funds: ninety-two percent of six point two zero plus eight percent of twelve equals six point six six four.
> 1 S: keys 0.92 × 6.20 = 5.704 · 0.08 × 12 = 0.96 · 5.704 + 0.96 = 6.664% [F17]


N083 · At three percent CRR, negative carry is three times six point six six four over ninety-seven: zero point two zero six one.
> 1 S: keys 3 × 6.664 ÷ 97 = 0.2061% [F18]


N084 · Add operating cost zero point five five and tenor premium zero point three zero: one-year MCLR is seven point seven two percent.
> 1 S: keys 6.664 + 0.2061 + 0.55 + 0.30 = 7.7201% → 7.72% [F16]


N085 · Priya's loan was disbursed on first April at seven point seven two plus spread one point two eight—nine percent.
> 1 N: "Priya: 7.72% + 1.28% = 9.00% (disbursed 1 Apr)"


N086 · Even if the bank cuts MCLR in July, Priya stays at nine percent until her annual reset next April. That explains why she waits.
> 1 N: "Rate fixed till next 1 Apr reset ✓" [F22]


N087 · Pause check, mixed across the whole lesson. One: can Meera raise Priya's MCLR spread next month just because market rates rose?
> 1 S: mixed pause card "Q1: Raise Priya's MCLR spread on market move?" · H: 3 s


N088 · No—only on credit-profile deterioration after a full review. Two: if a bank has positive MDG and repo rises, does MVE rise or fall?
> 1 N: "No — credit deterioration only ✓" [F21] · 2 S: card "Q2: Positive MDG + repo ↑ → MVE?" · H: 3 s


N089 · MVE falls, as asset value drops faster. Remember: EBLR resets quarterly; MCLR waits for contractual reset.
> 1 N: "MVE falls ✓" [F6] · 2 G: dial and see-saw align

## Close

N090 · Let's fill our mind map branch from memory before I reveal it. Say the three nodes we added today.
> 1 S: blank mind-map branch under "Interest rate risk" (3 empty slots) · H: 5 s


N091 · Node one: Duration gap—MDA minus RSL over RSA times MDL, and delta E equals minus MDG times RSA times delta i.
> 1 M: node 1 fills "Duration gap & ΔMVE (20% Pillar II outlier)" · H: 3 s


N092 · Node two: MCLR—internal benchmark, four components, monthly review, reset up to one year anchored to first disbursement.
> 1 M: node 2 fills "MCLR (4 parts · monthly · ≤1y reset)" · H: 3 s


N093 · Node three: EBLR—external benchmark for retail and MSMEs, quarterly reset, and early spread reduction allowed from October twenty-twenty-five.
> 1 M: node 3 fills "EBLR (retail & MSME · ≥quarterly · Oct 2025 spread rule)" · H: 3 s


N094 · You can now compute MDG and MVE shock, compare all benchmarks, and solve reset cases.
> 1 C: self-check card "You can now: compute MDG · compute ΔMVE & MDOE · compare benchmarks · solve reset cases"


N095 · This lesson fully covered duration measurement and loan benchmarks. If any step made you hesitate, replay that chapter tonight.
> 1 N: scope card "Covered: D5.2 (duration) + Base Rate / MCLR / EBLR"


N096 · Homework: redraw this map and find MDG for RSA five thousand, RSL four thousand, MDA three, MDL one.
> 1 N: homework card "1. Redraw map · 2. MDG for RSA 5000, RSL 4000, MDA 3.0, MDL 1.0"


N097 · Next class question: once a bank sees a huge duration gap, should it reshape its balance sheet, or hedge with derivatives?
> 1 S: teaser card "Next class: reshape the book, or hedge it?"


N098 · [warmly] That wraps up duration gap and lending benchmarks. Close the notebook for tonight, and I'll see you in the next class.
> 1 S: notebook closes cleanly