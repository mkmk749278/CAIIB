# D05 · "Interest rate risk 1: sources, gap, NII, NIM" · CLASS EDITION (script c1, with cue sheet)
* Status: c1, 2026-11-24 (drafted, linted, and self-checked against teaching_method.md §7, lesson_spec.md, greetings.md, module_D.md §D05, and D05_fact_sheet; ready for independent audit).
* Plan: course/bfm/D/plans_D.md §D05 (v3 depth pass: all 8 v3 additions covered; 3 core numericals + Your Turn + Homework). Course order v4: D04 → D05 → D06 → D06b.
* Syllabus: D5.1 (Essentials, sources and effects of interest rate risk), D5.2 (Measurement and measurement techniques — gap and earnings perspective; duration gap in next class).
* Facts: D05_fact_sheet, rows cited as [F1]–[F32]. Sums: D05_numericals (all sums verified two independent ways in Python Decimal). Practice: D05_practice. Map nodes: D05_map_nodes.
* Rule version (opening card): "RBI Commercial Banks – Asset Liability Management Directions 2025 (28 Nov 2025, TGA & DGA operative) · RBI Commercial Banks – IRACP Directions 2025 (updated 1 Oct 2026, incl. SNFA unrealised interest rule) · RBI Risk Management Systems Guidelines (1999) · RBI Statistical Tables NIM definition · RBI Forthcoming Instructions Directions 2025 Ch. V IRRBB (issued, coming) · BCBS SRP31 (eff. 1 Jan 2026) · as at 31 December 2026".
* Greeting / goodbye (new, verified unused in greetings.md): greeting "Good to have you here, everyone. Keep your basic calculator nearby, because today we track what happens when interest rates move."; goodbye "That is interest rate risk mapped from sources to margin. Rest well tonight, and I will meet you in the next class."
* Story: Officer Meera at the Chennai head office ALM desk of Kaveri Commercial Bank (illustrative), comparing her bank's profit after a 100 bps rate hike against Godavari Bank (illustrative) of the exact same size. All bank names, rates, and rupee amounts are illustrative.
* Holds: recall and check questions 3–5 s; one-step sums 8 s; "your turn" numerical 15 s; blank mind map 5 s.
* Say it right: "I-R-R" for IRR; "R-S-A", "R-S-L"; "N-I-I", "N-I-M"; "E-a-R" as "earnings at risk"; "T-G-A", "D-G-A"; "M-V-E"; "I-R-R-B-B"; "S-N-F-A"; "seventy-five basis points" for 75 bps; "five thousand eight hundred crore" for ₹5,800 crore.
* Not in this video: Duration gap formula, MVE change sums, Base Rate, MCLR, and EBLR (next class); on/off-balance-sheet hedging strategies, governance checklist, and full IRRBB six-shock framework (following class); Third Schedule forms and ALCO setup (earlier in this module).
* Length: 1,875 spoken words + ~2.4 min of holds ≈ 14.9 min at 150 wpm (verified by linter; max ≤ 25 words/line; 0 spoken lesson codes; 0 exclamation marks).
* Cue sheet: S scene · N note · G glow · M map · C card · B board mark · H hold. Stable picture: Gap bars per time bucket (assets pointing up in green, liabilities pointing down in red) and a margin ruler showing ΔNII = Gap × Δr.


---

## Warm-up

N001 · [warmly] Good to have you here, everyone. Keep your basic calculator nearby, because today we track what happens when interest rates move.
> 0 C: rule-version card (as at 31 Dec 2026) · 1 S: notebook page; title "Interest Rate Risk 1: Sources, Gap, NII, NIM"

N002 · Silence your phone. Let us open with two quick recalls.
> 1 S: warm-up desk icon + 8-function calculator icon

N003 · From last class: does interest suspense count as a provision?
> 1 S: recall card "Interest suspense = provision?" · H: 3 s

N004 · No. Deduct it from the loan first; never count it as provision.
> 1 N: "Interest suspense ≠ provision (deduct first) ✓"

N005 · Earlier in this module: are customer deposits an asset or a liability?
> 1 S: recall card "Customer deposits = asset or liability?" · H: 3 s

N006 · A liability — funds owed to customers on the left shelf.
> 1 N: "Deposits = Liability (left shelf) ✓"

N007 · IRR, repricing gaps, NII, and NIM appeared in 4 of 7 recent cycles.
> 1 C: exam-signal badge "Seen in 4 of 7 recent cycles: gap, NII, NIM"

N008 · Today: six IRR sources, repricing gap, ΔNII, NIM, and gap limits.
> 1 N: goal bar "Sources → Gap → ΔNII & NIM → Limits"


## Opening Branch Moment

N009 · Picture Meera at illustrative Kaveri Commercial Bank's ALM desk when RBI hikes rates 1%.
> 1 S: ALM desk screen (illustrative) showing RBI rate +1.00%

N010 · Illustrative Godavari Bank has the exact same ₹10,000 crore balance sheet.
> 1 N: "Kaveri Bank = ₹10,000 cr · Godavari Bank = ₹10,000 cr (illustrative)"

N011 · Yet Kaveri's NII rises, while Godavari's NII falls sharply.
> 1 S: two profit arrows — Kaveri up (green), Godavari down (red)

N012 · Some of you think rate hikes always help banks. Others think hikes hurt every bank.
> 1 C: split card "Rate hike helps all? / Hurts all?" · H: 3 s

N013 · Both miss the real driver: the repricing gap. Stay with me to see why.
> 1 G: "repricing gap"


## Chapter 1 · Why IRR Matters and Its Six Sources

N014 · Before the 1990s, RBI administered rates, shielding banks from rate swings.
> 1 N: "Pre-1990s: administered rates → low IRR" [F1]

N015 · Deregulation began in the early 1990s, largely finished by 1997, and ended on savings deposits on 25 October 2011.
> 1 N: "Deregulation: 1990s → 1997 → Savings rate 25 Oct 2011" [F1]

N016 · Interest rate risk is the risk that market rate changes adversely affect a bank's financial condition.
> 1 C: names-first card "Interest Rate Risk (IRR)" · 2 N: "IRR = rate moves hurting earnings or equity" [F2]

N017 · Trading book faces price risk; banking book tracks earnings and economic value.
> 1 N: "Trading book → Price risk · Banking book → NII & MVE" [F3]

N018 · Meet six IRR sources, each with one branch situation.
> 1 M: module D map branch 8 "Interest rate risk → Sources"

N019 · First is gap or mismatch risk: assets and liabilities mature or reprice on different dates.
> 1 C: names-first card "1. Gap / Mismatch Risk" · 2 N: "1. Gap risk: different maturity/repricing dates" [F4]

N020 · Example: 5-year fixed loans funded by 1-year FDs squeeze margins when FDs renew higher.
> 1 S: 5-yr fixed loan vs 1-yr FD mismatch bar [F4]

N021 · Second is basis risk: similar-tenor assets and liabilities priced on different benchmarks move by unequal amounts.
> 1 C: names-first card "2. Basis Risk" · 2 N: "2. Basis risk: different indices move unequally" [F5]

N022 · Example: T-Bill loans funded by repo deposits lose spread when indices diverge.
> 1 S: T-Bill +0.40% vs Repo +0.70% spread squeeze [F5]

N023 · Third is embedded option risk: borrowers prepay loans when rates fall, or depositors break FDs early when rates rise.
> 1 C: names-first card "3. Embedded Option Risk" · 2 N: "3. Embedded option: loan prepayment / early FD exit" [F6]

N024 · Many think customer options work both ways. In practice, customers exercise them only against the bank.
> 1 B: underline "against the bank" [F6]

N025 · Basel standards split option risk into automatic options like caps and floors, and behavioural options like prepayments.
> 1 N: "Automatic (caps/floors) vs Behavioural (prepay/exit)" [F6, F11]

N026 · Fourth is yield curve risk: non-parallel curve twists, steepening, or flattening hurt books priced across different maturities.
> 1 C: names-first card "4. Yield Curve Risk" · 2 N: "4. Yield curve risk: non-parallel curve twist/flatten" [F7]

N027 · Example: 3-month funding into 5-year loans hurts when short rates jump and long rates stay flat.
> 1 S: yield curve flattening diagram [F7]

N028 · Fifth is price risk: selling a fixed-rate bond before maturity after yields rise locks in a capital loss.
> 1 C: names-first card "5. Price Risk" · 2 N: "5. Price risk: bond sold early when yields rise" [F8]

N029 · Sixth is reinvestment risk: uncertainty over the lower rate earned when maturing loans or bond coupons are reinvested.
> 1 C: names-first card "6. Reinvestment Risk" · 2 N: "6. Reinvestment risk: cash flows reinvested lower" [F9]

N030 · RBI adds net interest position risk: when earning assets exceed paying liabilities, falling rates cut NII.
> 1 N: "+ Net interest position risk: earning assets > paying liabilities" [F10]

N031 · Chapter One check. Name the risk in three cases.
> 1 S: pause-check banner "Chapter 1 Check (3 questions)"

N032 · First: borrowers prepay fixed loans after a 1% rate cut. Which risk?
> 1 S: Q1 card "Fixed loan prepayments after rate cut" · H: 3 s

N033 · Embedded option risk — specifically behavioural option risk, exercised against the bank.
> 1 N: "Q1: Embedded option risk ✓" [F6]

N034 · Second: 3-month repo deposits fund 3-month T-Bill loans, moving unequally. Which risk?
> 1 S: Q2 card "Same tenor, different benchmarks" · H: 3 s

N035 · Basis risk, because similar-tenor instruments priced on different indices shift by different magnitudes.
> 1 N: "Q2: Basis risk ✓" [F5]

N036 · Third: a high-coupon bond matures in a rate cut, reinvested lower. Which risk?
> 1 S: Q3 card "Maturing bond cash redeployed lower" · H: 4 s

N037 · Reinvestment risk, because future cash flows face a lower reinvestment rate.
> 1 N: "Q3: Reinvestment risk ✓" [F9]

N038 · Remember: same tenor, different benchmarks is basis risk; different tenors on a twisting curve is yield curve risk.
> 1 G: "basis risk" · 2 G: "yield curve risk" [F5, F7]


## Chapter 2 · RSA, RSL, Repricing Gap and Its Sign

N039 · Chapter One recall: which risk hits bonds sold early after a hike?
> 1 S: recall card "Selling bonds early after rate hike?" · H: 3 s

N040 · Price risk, because bond prices move opposite to market yields.
> 1 N: "Recall: Price risk ✓" [F8]

N041 · Now measure mismatch risk via Traditional Gap Analysis, RBI's operative earnings tool.
> 1 S: gap bars diagram (green RSA bars up, red RSL bars down) [F2, F13]

N042 · An item is rate sensitive if it matures, pays principal, resets contractually, or can be withdrawn within the bucket.
> 1 C: names-first card "RSA & RSL" · 2 N: "Rate sensitive = matures, resets, or cash flow in bucket" [F12]

N043 · RBI's bucketing rule: slot every item by residual maturity or next repricing date, whichever is earlier.
> 1 N: "Rule: residual maturity OR next repricing, whichever is EARLIER" [F13]

N044 · Under RBI's ALM Directions, banks use 11 IRS buckets: 1–28 days up to over 15 years, plus Non-sensitive.
> 1 C: 11-bucket strip "1-28d | 29d-3m | 3-6m | 6m-1y | 1-3y | 3-5y | 5-7y | 7-10y | 10-15y | >15y | Non-sensitive" [F14]

N045 · Cash, fixed assets, current deposits, capital, and reserves do not reprice, so they sit in Non-sensitive.
> 1 N: "Non-sensitive: Cash, Fixed Assets, Current Dep, Capital & Reserves" [F15]

N046 · Savings, current deposits, and mortgages need behavioural studies on ≥ 3 years data, reviewed yearly.
> 1 N: "Savings / Current / Mortgages → behavioural study (≥ 3 yrs data)" [F16]

N047 · Write this down: Repricing Gap equals Rate Sensitive Assets minus Rate Sensitive Liabilities, or RSA minus RSL.
> 1 B: box "Gap = RSA − RSL" · 2 M: map node "Gap" [F17]

N048 · Let us solve Sum One for Kaveri Bank's 1-year bucket (illustrative).
> 1 S: Sum 1 data card (illustrative) [F17]

N049 · Assets: 3-month floating loans ₹4,200 crore, 6-month T-Bills ₹1,100 crore, call money ₹500 crore.
> 1 N: "RSA: 4,200 + 1,100 + 500"

N050 · Cash ₹300 crore and fixed assets ₹400 crore are non-sensitive, so we skip both.
> 1 B: strike "Cash 300, Fixed Assets 400 (non-sensitive)" [F15]

N051 · On your calculator: 4200 + 1100 + 500 = gives RSA of ₹5,800 crore.
> 1 N: "4200 + 1100 + 500 = → RSA = ₹5,800 cr"

N052 · Liabilities: 1-year term deposits ₹3,600 crore, 6-month floating borrowings ₹900 crore, rate-sensitive savings ₹700 crore.
> 1 N: "RSL: 3,600 + 900 + 700"

N053 · Current deposits ₹600 crore and capital ₹800 crore are non-sensitive, so we exclude them.
> 1 B: strike "Current Dep 600, Capital 800 (non-sensitive)" [F15]

N054 · Punch 3600 + 900 + 700 = to get RSL of ₹5,200 crore.
> 1 N: "3600 + 900 + 700 = → RSL = ₹5,200 cr"

N055 · Subtract: 5800 − 5200 = +₹600 crore — a positive, asset-sensitive gap.
> 1 N: "Gap = 5,800 − 5,200 = +₹600 cr (Asset-sensitive)" [F17]

N056 · Common mistake: adding ₹600 crore current deposits to RSL wipes the gap to zero.
> 1 C: error-analysis card "Trap: adding Current Dep (600) gives Gap = 0 (WRONG)" [F15]

N057 · Now break a classic myth: many of you think a positive gap always helps a bank.
> 1 S: misconception card "Positive gap always helps?" · H: 3 s

N058 · False. A positive gap helps only when rates rise; when rates fall, more assets reprice down, cutting NII.
> 1 C: sign matrix "+Gap: Rate↑ → NII↑, Rate↓ → NII↓ | −Gap: Rate↑ → NII↓, Rate↓ → NII↑" [F18]

N059 · Our opening puzzle solved: Kaveri's positive gap gained; Godavari's negative gap lost.
> 1 S: return to Kaveri (+Gap) vs Godavari (−Gap) [F18]

N060 · Chapter Two check. Three quick questions.
> 1 S: pause-check banner "Chapter 2 Check (3 questions)"

N061 · First: a 5-year floating loan resets every 6 months. Which bucket — 6 months or 5 years?
> 1 S: Q1 card "5-yr floating loan, 6-month reset" · H: 3 s

N062 · Over 3 to 6 months, because we slot by residual maturity or next repricing date, whichever is earlier.
> 1 N: "Q1: 3–6m bucket (earlier of maturity/repricing) ✓" [F13]

N063 · Second: if RSL exceeds RSA, is the bank asset-sensitive or liability-sensitive?
> 1 S: Q2 card "RSL > RSA → ?" · H: 3 s

N064 · Liability-sensitive — a negative gap whose NII falls when rates rise and rises when rates fall.
> 1 N: "Q2: Liability-sensitive (−Gap) ✓" [F17, F18]

N065 · Third: at what global share must a bank compute gap separately per currency?
> 1 S: Q3 card "Significant currency threshold?" · H: 4 s

N066 · 5% or more of global assets or global liabilities; smaller currencies are aggregated as residual.
> 1 N: "Q3: ≥ 5% of global assets or liabilities ✓" [F19]

N067 · One thing to remember: Gap is RSA minus RSL excluding non-sensitive items, and a positive gap gains only when rates rise.
> 1 G: "RSA minus RSL" [F17, F18]


## Chapter 3 · Change in NII, Net Interest Margin and the NPA Twist

N068 · Chapter Two recall: negative gap plus falling rates — does NII rise or fall?
> 1 S: recall card "Negative gap + Rate cut → NII?" · H: 3 s

N069 · NII rises, because more liabilities reprice down to cheaper rates than assets do.
> 1 N: "Recall: −Gap + Rate↓ → NII rises ✓" [F18]

N070 · Turn the gap into rupees with our ruler: change in NII equals Gap times change in rate.
> 1 C: formula card "ΔNII = Gap × Δr" · 2 M: map node "NII" [F20]

N071 · Faded sum: Kaveri's gap is +₹600 crore; rates rise 75 bps (+0.75%).
> 1 S: Sum 2A card "Gap = +₹600 cr · Δr = +75 bps (+0.75%)" [F20]

N072 · Punch 600 × 0.75 % = on your calculator. What do you get?
> 1 N: "600 × 0.75 % =" · H: 8 s

N073 · +₹4.50 crore. Both Gap and rate change are positive, so NII rises by ₹4.50 crore.
> 1 N: "ΔNII = +₹4.50 cr (check: 600 × 0.0075 = +4.50) ✓" [F20]

N074 · Your turn, Godavari Bank: RSA ₹4,100 crore, RSL ₹4,900 crore, rates rise 50 bps.
> 1 S: Sum 2B "Your Turn" card "RSA 4,100 · RSL 4,900 · Δr +50 bps"

N075 · Pause and find Gap and ΔNII. Fifteen seconds.
> 1 N: "Step 1: Gap = 4,100 − 4,900 · Step 2: Gap × 0.50%" · H: 15 s

N076 · Gap is −₹800 crore; −800 × 0.50% gives −₹4.00 crore, meaning NII drops ₹4 crore.
> 1 N: "Gap = −₹800 cr · ΔNII = −800 × 0.50% = −₹4.00 cr ✓" [F20]

N077 · Watch two classic slips: dropping the minus sign, or multiplying by 50 instead of 0.50%.
> 1 C: error-analysis card "Traps: +₹4 cr (wrong sign) or ₹400 cr (forgot %)" [F20]

N078 · Next is Net Interest Margin, or NIM, expressing NII as a percentage of the bank's asset base.
> 1 C: names-first card "Net Interest Margin (NIM)" · 2 M: map node "NIM" [F22, F23]

N079 · RBI's Statistical Tables and IIBF's standard formula define NIM as NII divided by Average Total Assets, times 100.
> 1 B: box "NIM = (NII ÷ Average Total Assets) × 100" [F23]

N080 · Denominator trap: international texts divide by Average Earning Assets, excluding cash and premises, giving a higher %.
> 1 C: trap card "RBI/IIBF: Average Total Assets | International: Average Earning Assets (higher %)" [F24]

N081 · Use Average Total Assets unless the question specifies or gives only earning assets.
> 1 G: "Average Total Assets" [F23, F24]

N082 · Now add the favourite exam twist: reversing unrealised interest on an account turning NPA.
> 1 S: Sum 3 case card (illustrative, Kaveri Commercial Bank) [F25]

N083 · Under IRACP Directions, accrual applies only to Standard loans; on NPA, reverse unrealised accrued interest.
> 1 N: "NPA = cash basis; reverse all accrued unrealised interest" [F25]

N084 · From 1 October 2026, accrued unrealised interest on acquired SNFAs also cannot be booked as income.
> 1 N: "SNFA (eff. 1 Oct 2026): no pre-acquisition unrealised interest" [F26]

N085 · Sum Three for Kaveri Bank: advances ₹6,000 crore yield 9.50%; investments ₹2,500 crore yield 7.20%.
> 1 N: "Adv 6,000 × 9.5% = 570 · Inv 2,500 × 7.2% = 180 → Gross IE = ₹750 cr"

N086 · Non-earning assets are ₹1,500 crore, giving Average Total Assets ₹10,000 crore and Earning Assets ₹8,500 crore.
> 1 N: "Avg Total Assets = 6,000 + 2,500 + 1,500 = ₹10,000 cr"

N087 · A corporate loan turns NPA, reversing ₹30 crore of unrealised interest; Net Interest Earned drops to ₹720 crore.
> 1 N: "Net IE = 750 − 30 = ₹720 cr" [F25]

N088 · Deposits ₹7,500 crore at 5.40% cost ₹405 crore; borrowings ₹1,000 crore at 6.50% cost ₹65 crore; total ₹470 crore.
> 1 N: "Dep 405 + Bor 65 → IX = ₹470 cr"

N089 · Subtract interest expended: 720 − 470 = ₹250 crore Net Interest Income.
> 1 N: "NII = 720 − 470 = ₹250 cr" [F22]

N090 · Divide by Average Total Assets: 250 ÷ 10000 × 100 = 2.50% NIM.
> 1 N: "NIM = 250 ÷ 10,000 × 100 = 2.50% ✓" [F23]

N091 · Both traps: skipping ₹30 crore reversal gives 2.80%; using earning assets gives 2.94%.
> 1 C: trap card "No reversal → 2.80% · Earning assets → 2.94% · Correct → 2.50%" [F24, F25]

N092 · Pause check for Chapter Three. Two quick questions.
> 1 S: pause-check banner "Chapter 3 Check (2 questions)"

N093 · First: a bank has a +₹1,000 crore gap and rates fall 25 bps. What is ΔNII?
> 1 S: Q1 card "Gap +₹1,000 cr · Δr −25 bps" · H: 8 s

N094 · −₹2.50 crore — 1,000 × −0.25%, because a rate cut hurts a positive gap.
> 1 N: "Q1: −₹2.50 cr ✓" [F20]

N095 · Second: when a Government-guaranteed loan turns NPA, may the bank continue booking accrued interest?
> 1 S: Q2 card "Govt-guaranteed NPA: accrual allowed?" · H: 3 s

N096 · No. NPA income recognition is strictly on cash basis even for Government-guaranteed accounts, and unrealised interest must be reversed.
> 1 N: "Q2: No — cash basis, reverse unrealised interest ✓" [F25]

N097 · One thing to remember: reverse unrealised NPA interest before computing NII, and confirm whether NIM uses Average Total Assets.
> 1 G: "reverse unrealised NPA interest" [F23, F25]


## Chapter 4 · What Gap Misses, EaR, and the Techniques Ladder

N098 · Chapter Three recall: which denominator makes NIM higher — Total or Earning Assets?
> 1 S: recall card "Higher NIM denominator?" · H: 3 s

N099 · Average Earning Assets, because excluding non-earning assets shrinks the denominator and lifts the ratio.
> 1 N: "Recall: Average Earning Assets gives higher NIM ✓" [F24]

N100 · Traditional Gap Analysis is fast, yet it has six major blind spots that exams regularly test.
> 1 C: trap card "What Gap Analysis Misses (6 Blind Spots)" [F27]

N101 · First, it assumes every item inside a bucket reprices on the exact same day, ignoring intra-bucket timing.
> 1 N: "1. Ignores intra-bucket repricing timing" [F27]

N102 · Second and third, it ignores basis risk and embedded options like loan prepayments or early deposit withdrawals.
> 1 N: "2. Ignores basis risk · 3. Ignores embedded options" [F27]

N103 · Fourth, it assumes a parallel shift across the yield curve, missing steepening or flattening twists.
> 1 N: "4. Assumes parallel yield curve shift" [F27]

N104 · Fifth and sixth, it ignores time value of money on long-term equity value, and ignores non-interest income and expense shifts.
> 1 N: "5. Ignores time value / MVE · 6. Ignores non-interest items" [F27]

N105 · That leads to the two complementary views of IRR required under RBI's ALM Directions.
> 1 S: two-column table "Earnings View vs Economic Value View" [F28]

N106 · The earnings perspective tracks short-term profit — NII and NIM over one year — via Traditional Gap Analysis and Earnings at Risk.
> 1 N: "Earnings view: short-term NII/NIM (1 yr) → TGA & EaR" [F21, F28]

N107 · Earnings at Risk, or EaR, is the potential 1-year NII drop under adverse rate scenarios, capped by Board-approved limits.
> 1 C: names-first card "Earnings at Risk (EaR)" · 2 M: map node "EaR" [F21]

N108 · The economic value perspective tracks long-term Market Value of Equity across all cash flows via Duration Gap Analysis.
> 1 N: "Economic value view: long-term MVE → Duration Gap (DGA)" [F28]

N109 · Operative ALM Directions require TGA and DGA; a 200 bps shock cutting banking-book MVE over 20% flags an outlier.
> 1 N: "Operative (31 Dec 2026): TGA + DGA; 200 bps / >20% MVE outlier" [F31]

N110 · RBI's six-shock IRRBB (15% Tier 1 outlier) sits in Forthcoming Instructions — issued, coming.
> 1 C: rule-status badge "IRRBB (6 shocks, 15% Tier 1): ISSUED, COMING" [F32]

N111 · Three-rung ladder: Gap for short-term earnings, Duration for economic value, Simulation at the top.
> 1 S: 3-step ladder "1. Gap → 2. Duration → 3. Simulation" [F29]

N112 · Static simulation tests today's existing balance sheet; dynamic simulation adds future rate paths, curve twists, and projected new business.
> 1 N: "Static (current book) vs Dynamic (future business & curve twists)" [F30]

N113 · Pause check for Chapter Four. Two quick questions.
> 1 S: pause-check banner "Chapter 4 Check (2 questions)"

N114 · First: does Traditional Gap Analysis capture embedded loan prepayment risk and non-parallel yield curve shifts?
> 1 S: Q1 card "Does TGA capture prepayments & curve twists?" · H: 3 s

N115 · No. Gap analysis ignores options, basis risk, intra-bucket timing, and non-parallel shifts; simulation models capture them.
> 1 N: "Q1: No — gap ignores options & non-parallel shifts ✓" [F27, F29]

N116 · Second: which view focuses on long-term Market Value of Equity — earnings perspective or economic value perspective?
> 1 S: Q2 card "Long-term MVE = which perspective?" · H: 3 s

N117 · The economic value perspective, measured under RBI's operative framework by Duration Gap Analysis.
> 1 N: "Q2: Economic value perspective (DGA) ✓" [F28]

N118 · One thing to remember: Gap handles short-term NII and EaR, Duration handles long-term MVE, and Simulation handles twists and options.
> 1 G: "Gap" · 2 G: "Duration" · 3 G: "Simulation" [F29]


## Close

N119 · Mixed check: a bank runs a negative gap, and short deposit rates jump more than loan benchmarks. Which two risks hit?
> 1 S: mixed-check card "−Gap + short deposit rates jump > loan benchmark" · H: 4 s

N120 · Gap risk from the negative gap cuts NII, and basis risk squeezes the spread even further.
> 1 N: "Mixed check: Gap risk + Basis risk ✓" [F4, F5, F18]

N121 · Look at the blank mind map for Interest Rate Risk. Name all five nodes we added today from memory.
> 1 M: blank branch 8 with 5 empty slots · H: 5 s

N122 · Sources, Gap, NII, NIM, and EaR — sitting cleanly on branch eight of our balance sheet map.
> 1 M: fill all 5 nodes "Sources · Gap · NII · NIM · EaR"

N123 · You can now spot six IRR sources, compute gap, ΔNII, NIM with NPA reversals, and gap limits.
> 1 C: "You can now" checklist (D5.1 & D5.2 gap/earnings)

N124 · Homework tonight: RSA is ₹3,200 crore, RSL is ₹4,000 crore, and rates fall 100 bps. Find Gap and ΔNII.
> 1 C: homework card "HW: RSA ₹3,200 cr · RSL ₹4,000 cr · Δr −100 bps → Gap & ΔNII?" [F20]

N125 · Next class, we climb rung two: Duration Gap, change in equity value, and why EBLR resets faster than MCLR.
> 1 S: preview card "Next: Duration Gap, ΔMVE, MCLR & EBLR"

N126 · [warmly] That is interest rate risk mapped from sources to margin. Rest well tonight, and I will meet you in the next class.
> 1 S: closing notebook page
