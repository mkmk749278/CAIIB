# C04 · "CRR, SLR, NDTL and monetary policy" · CLASS EDITION (script c1, with cue sheet)
* Status: **c1 GEMINI DRAFT, gate PASS, full review pending** (owner, 2026-11-24: "save as drafts, check later"). Not locked: do not voice until reviewed.
* Plan: course/bfm/C/plans_C.md §C04 (v4 split: C04 = C4.1 — NDTL, exclusions, LTB exemption, CRR, SLR, daily minimum 99%, new fortnight, penalties, MPC, M3, money multiplier, 5-part case; C4.3 payment & settlement systems moved to C04b; all 6 v3 depth additions covered). Course order v4: C03 → C04 → C04b.
* Syllabus: C4.1 (Reserve assets: CRR and SLR).
* Facts: C04_fact_sheet, rows cited as [F1]–[F38]. Sums: C04_numericals (verified two independent ways in Python Decimal). Practice: C04_practice. Map nodes: C04_map_nodes.
* Rule version (opening card): "RBI Act 1934 ss. 42, 45ZA–45ZL, 49 · BR Act 1949 ss. 18, 24, 46 · Banking Laws (Amendment) Act, 2025 (w.e.f. 15 Dec 2025) · RBI (Commercial Banks – CRR and SLR) Directions, 2025 (updated 9 Oct 2026) · RBI/2026-27/290 (99% daily CRR w.e.f. 16 Oct 2026) · RBI (Commercial Banks – Resource Raising Norms) Directions, 2025 · Monetary Policy Statement (7 Oct 2026) · as at 31 December 2026 (verify 2–4 Dec 2026 MPC at freeze)".
* Greeting / goodbye (new, verified unused in greetings.md and C01): greeting "Hello everyone, and welcome back to the desk. Today we measure what a bank must set aside before it lends."; goodbye "That is reserves and monetary policy clear in your head. Close the notebook, take a breath, and I will see you next class."
* Story: Morning review at the Mumbai treasury of Deccan Commercial Bank (illustrative), looking at a whiteboard of the bank's liabilities on 15 October 2026 to compute reserves for the fortnight 1–15 November 2026. All names, amounts, rates, and dates are illustrative.
* Holds: recall and check questions 3–5 s; one-step sums 8 s; "your turn" numerical 15 s; blank mind map 5 s.
* Say it right: "C-R-R", "S-L-R", "N-D-T-L", "O-D-T-L", "L-T-B", "S-D-F", "M-S-F", "W-A-C-R", "C-I-M-S", "M-P-C", "C-P-I", "M-zero", "M-one", "M-three"; "section forty-two, sub-section one" on first use, then "forty-two-one"; "five point seven five per cent" for 5.75%; "eight point seven five per cent" for 8.75%; "forty thousand crore" for ₹40,000 crore.
* Not in this video: LAF auction mechanics, VRR/VRRR tenors, and OMO (covered earlier in this module); payment and settlement systems — RTGS, NEFT, CCIL, NDS-OM, PSS Act (next class); bond pricing and HTM/AFS/FVTPL valuation (later in this module); LCR and NSFR (covered in risk management).
* Length: 1,788 spoken words + ~2.7 min of holds ≈ 14.6 min at 150 wpm (exact count verified by linter; 0 lines > 25 words; 0 spoken lesson codes; 0 exclamation marks).
* Cue sheet: S scene · N note · G glow · M map · C card · B board mark · H hold. Stable picture: a jar of bank deposits with two scoops taken out (CRR cash to RBI, SLR liquid assets kept) beside a calendar showing the new 1st–15th and 16th–month-end fortnights with a 99% daily bar.


---

## Warm-up

N001 · [warmly] Hello everyone, and welcome back to the desk. Today we measure what a bank must set aside before it lends.
> 0 C: rule-version card (as at 31 Dec 2026) · 1 S: notebook page; title "CRR, SLR, NDTL and Monetary Policy"

N002 · Phone on silent, basic calculator beside you. Let us begin with two recall questions.
> 1 S: warm-up desk icon + 8-function calculator icon

N003 · From last class: a 91-day Treasury Bill trades at ₹98.50. What is its yield?
> 1 S: recall card "91-day T-Bill at ₹98.50 → yield?" · H: 5 s

N004 · 1.50 over 98.50, times 365 over 91, times 100, gives 6.1081% — divide by price.
> 1 N: "1.5 ÷ 98.5 × 365 ÷ 91 × 100 = 6.1081% ✓"

N005 · Reach back two classes: which overnight facility forms the RBI policy corridor floor today?
> 1 S: recall card "Floor of the LAF corridor?" · H: 3 s

N006 · The Standing Deposit Facility, or SDF, is the floor — 25 basis points below repo.
> 1 N: "SDF = corridor floor (Repo − 25 bps) ✓" [F35]

N007 · Reserve assets appeared in 4 of 7 recent exam cycles, often as linked cases.
> 1 C: exam-signal badge "4 of 7 cycles · linked cases" [F38]

N008 · Stay with me to master NDTL, CRR, SLR, shortfall penalties, and monetary policy.
> 1 N: goal line "NDTL → CRR & SLR → 99% penalty → MPC & M3"

N009 · Picture Deccan Commercial Bank, illustrative, facing a liability whiteboard on 15 October 2026.
> 1 S: treasury whiteboard titled "Deccan Commercial Bank (illustrative) · 15 Oct 2026"

N010 · Deposits, capital, NABARD refinance, and infra bonds sit there. Some include everything; others exclude half.
> 1 S: whiteboard items split into two question columns · H: 3 s

N011 · Picture a jar of deposits with two statutory scoops taken out.
> 1 S: deposit jar with two scoops labelled "CRR → RBI" and "SLR → Bank holds" [F18, F22]

## Chapter 1 · NDTL: what is in, and what is out

N012 · First measure the jar: Net Demand and Time Liabilities, or NDTL.
> 1 N: new term card "NDTL = Net Demand & Time Liabilities" · M: Reserves & payments → NDTL [F1]

N013 · Under RBI Act section 42, NDTL adds liabilities to others plus net inter-bank liabilities.
> 1 N: "NDTL = Liabilities to others + Net inter-bank liabilities" [F1]

N014 · Demand liabilities are payable on demand: current deposits, overdue FDs, unpaid drafts, unclaimed deposits, CC credits.
> 1 N: "Demand: current, overdue FD, DDs/TTs, CC credit, unclaimed" [F2]

N015 · Time liabilities are payable later: fixed deposits, recurring deposits, cash certificates, staff security deposits, and bullion deposits.
> 1 N: "Time: FD, RD, cash cert, staff security, gold deposits" [F3]

N016 · How are savings deposits split into demand and time? Recall the two dates.
> 1 S: question card "Savings split dates?" · H: 3 s

N017 · On 31 March and 30 September: average monthly minimum is time; the rest is demand.
> 1 N: "Savings split: 31 Mar & 30 Sep (min = time, rest = demand)" [F4]

N018 · We also add Other Demand and Time Liabilities, or ODTL: accrued deposit interest, bills payable, unpaid dividends, Tier 2 borrowings, and derivative cash collateral.
> 1 N: "ODTL: accrued interest, bills payable, Tier 2, derivative cash" [F5]

N019 · Foreign borrowings count as liabilities to others; lending abroad cannot be netted.
> 1 N: "Borrow abroad = IN · Lend abroad = NO netting" [F6]

N020 · Many think excess inter-bank assets reduce public deposits. Wrong: net inter-bank stops at zero.
> 1 C: trap card "Inter-bank assets > liabilities → net = ₹0 (never negative)" [F7]

N021 · Scheduled banks are also exempt from CRR on net domestic inter-bank liabilities.
> 1 N: "Net domestic inter-bank liability: exempt from CRR" [F7, F10]

N022 · Answering our whiteboard: thirteen items are excluded from both CRR and SLR under paragraph 19.
> 1 C: "13 Exclusions (Para 19 · out of both CRR & SLR)" [F8, F9]

N023 · Group one is own funds and refinance: paid-up capital, reserves, Tier 1 borrowings, profit balance, and refinance from RBI, NABARD, SIDBI, NHB, EXIM, NaBFID.
> 1 N: "OUT (1): Capital, reserves, T1/AT1, P&L, RBI/DFI refinance" [F8]

N024 · Group two is third-party claims and tax: net income-tax provision, pending DICGC, ECGC, and NCGTC claim receipts, Court Receiver funds, and ad-hoc insurance receipts.
> 1 N: "OUT (2): Net tax prov, DICGC/ECGC/NCGTC, Court Receiver" [F9]

N025 · Group three is special items: Bankers Acceptance Facility, NABARD rural godown subsidy, 0% government subsidy deposits, unrealised trading derivative gains, advance fees, rediscounted bills.
> 1 N: "OUT (3): BAF, govt/NABARD subsidy, unrealised derivs, rediscounted bills" [F9]

N026 · Next come exempted categories under paragraph 20: ACU dollar balances and OBU liabilities are exempt from CRR; IBU liabilities and G-sec repo from both.
> 1 N: "Exempt: ACU/OBU (CRR) · IBU & G-sec repo (CRR+SLR)" [F10]

N027 · Watch one trap: corporate-bond repo is NOT exempt; only government-security repo is exempt.
> 1 C: trap card "G-sec repo = Exempt · Corporate-bond repo = IN NDTL" [F11]

N028 · Are 7-year Long-Term Bonds for infrastructure and affordable housing still exempt in December 2026?
> 1 S: question card "Infra/affordable housing LTB exemption still alive?" · H: 3 s

N029 · Yes, confirmed in RBI's November 2025 Directions: deduct the lower of Eligible Credit or Long-Term Bonds.
> 1 N: "LTB (≥7 yr INR plain vanilla): DTL = I − Min(EC, LB)" [F13, F14]

N030 · Also, the temporary 2026 reserve exemption for fresh NRE and FCNR(B) deposits closed 31 August 2026.
> 1 N: "2026 NRE/FCNR(B) window closed 31 Aug 2026 (prior deposits keep cover)" [F12]

N031 · Pause check for Chapter 1. First: is NABARD refinance included in NDTL?
> 1 S: pause check Q1 "NABARD refinance in NDTL?" · H: 3 s

N032 · No, RBI and DFI refinance is excluded from both CRR and SLR.
> 1 N: "Q1: No — excluded under Para 19(1) ✓" [F8]

N033 · Second: if inter-bank assets exceed liabilities by ₹700 crore, do you subtract it?
> 1 S: pause check Q2 "Subtract excess inter-bank assets?" · H: 3 s

N034 · No, net inter-bank liability stops at zero and never reduces public deposits.
> 1 N: "Q2: No — floor at ₹0 ✓" [F7]

N035 · Third, a twist: ₹2,500 crore infra bonds against ₹2,000 crore eligible loans. Deduct what?
> 1 S: pause check Q3 "LB ₹2,500 cr vs EC ₹2,000 cr → deduction?" · H: 4 s

N036 · ₹2,000 crore — always the lower of Eligible Credit and Long-Term Bonds.
> 1 N: "Q3: Min(2,000, 2,500) = ₹2,000 cr ✓" [F14]

N037 · One thing to remember from Chapter 1: strip own funds, DFI refinance, pending claims, and the lower of eligible credit or long-term bonds.
> 1 B: box around NDTL formula on notebook page [F8, F9, F14]

## Chapter 2 · CRR, SLR, the new fortnight, and the 99% daily floor

N038 · Recall from Chapter 1: is corporate-bond repo exempt from CRR and SLR?
> 1 S: recall card "Corporate-bond repo exempt?" · H: 3 s

N039 · No, corporate-bond repo counts inside NDTL. Now let us measure both statutory scoops.
> 1 N: "Corporate-bond repo = IN NDTL ✓" [F11]

N040 · Legal basis: CRR is RBI Act section 42(1); SLR is Banking Regulation Act section 24.
> 1 C: legal basis card "CRR: RBI Act s.42(1) | SLR: BR Act s.24" [F16, F21]

N041 · In June 2006, Parliament removed CRR's 3%–20% band and barred interest on CRR.
> 1 N: "CRR: no floor, no ceiling (2006 Act); 0% interest" [F16, F17]

N042 · In January 2007, Parliament removed SLR's 25% floor while keeping the 40% ceiling.
> 1 N: "SLR: no floor (2007 Act), 40% statutory ceiling" [F21]

N043 · CRR stands at 3.0% of NDTL, cut in four 25-bps steps by 29 November 2025.
> 1 N: "CRR = 3.0% (4% → 3% by 29 Nov 2025)" · M: Reserves & payments → CRR [F18]

N044 · Many older classes still teach 4% CRR and alternate-Friday fortnights. Both rules changed in late 2025.
> 1 C: trap card "Old: 4% CRR & Fri–Fri | Now: 3% CRR & 1–15 / 16–month end" [F18, F19]

N045 · Write this down: from 15 December 2025, under the Banking Laws Amendment Act, every fortnight is 1st to 15th, or 16th to month-end.
> 1 N: "Fortnight (w.e.f. 15 Dec 2025): 1–15 & 16–month end" · B: underline date [F19]

N046 · One-fortnight lag: 1–15 November reserves rest on 15 October NDTL.
> 1 S: calendar strip "15 Oct NDTL → 1–15 Nov reserves" [F19]

N047 · Biggest 2026 change: from 16 October 2026, daily minimum CRR rose from 90% to 99%.
> 1 C: trap card "Old daily floor: 90% | New (16 Oct 2026): 99%" · G: glow "99%" [F20]

N048 · Let us work a shortfall sum on ₹40,000 crore NDTL. Press 40,000 times 3%.
> 1 S: calculator display 40000 × 3 % = 1200 · N: "Required CRR = ₹1,200 cr" [F18]

N049 · Required CRR is ₹1,200 crore. Press 1,200 times 99% for the daily floor.
> 1 S: calculator display 1200 × 99 % = 1188 · N: "99% daily floor = ₹1,188 cr (old 90% was ₹1,080 cr)" [F20]

N050 · Day 1 RBI balance is ₹1,148 crore — a ₹40 crore shortfall below ₹1,188 crore.
> 1 N: "Day 1 balance ₹1,148 cr → shortfall = 1,188 − 1,148 = ₹40 cr"

N051 · Day 1 penal interest is Bank Rate plus 3%. With Bank Rate at 5.75%, that equals 8.75% per annum.
> 1 N: "Day 1 penal rate = 5.75% + 3% = 8.75% p.a." [F30, F35]

N052 · Key ₹40 crore as 400000000, times 8.75%, divided by 365: Day 1 penal interest is ₹95,890.41.
> 1 S: calculator 400000000 × 8.75 % ÷ 365 = 95890.41 · N: "Day 1 penalty = ₹95,890.41" [F30]

N053 · Your turn: ₹40 crore shortfall continues on Day 2. Pause 15 seconds and compute penalty.
> 1 S: "Your turn · Day 2 shortfall ₹40 cr · Bank Rate 5.75%" · H: 15 s

N054 · On Day 2, penal interest jumps to Bank Rate plus 5%, or 10.75%, giving ₹1,17,808.22 for that day.
> 1 S: calculator 400000000 × 10.75 % ÷ 365 = 117808.22 · N: "Day 2 (10.75%) = ₹1,17,808.22" [F30]

N055 · Common error: using old 5.50% Bank Rate, or missing the jump to plus 5%.
> 1 C: error-analysis note "Not 8.50%/10.50% · Day 2 jumps +3% → +5%" [F30, F35]

N056 · If default continues into the next fortnight, section 42(3A) imposes fines on officers and lets RBI prohibit fresh deposits.
> 1 N: "s.42(3A): ₹500 fine on officers + RBI may bar fresh deposits" [F31]

N057 · Second scoop: Statutory Liquidity Ratio, or SLR, is 18.0% of NDTL daily.
> 1 N: "SLR = 18.0% daily (w.e.f. 11 Apr 2020)" · M: Reserves & payments → SLR [F22]

N058 · SLR sits in three asset classes: cash and deemed cash, bullion valued at or below market price, and unencumbered SLR securities.
> 1 N: "SLR assets: Cash/Deemed cash · Gold ≤ market · Unencumbered SLR secs" [F23, F25, F26]

N059 · Watch two traps: branch cash and SDF count for SLR, never CRR; mandatory CRR never counts for SLR, only excess CRR does.
> 1 C: trap card "Branch cash & SDF → SLR only · Excess CRR only → SLR" [F18, F23, F24]

N060 · Eligible SLR securities are GoI dated securities, Treasury Bills including Cash Management Bills, and State Government Securities. Development-bank bonds do not automatically qualify.
> 1 N: "SLR secs: G-secs, T-Bills/CMBs, SGS · Dev-bank bonds OUT" [F26]

N061 · Securities pledged for market borrowing are encumbered and excluded, but securities carved out under MSF up to 2% of NDTL still count.
> 1 N: "Encumbered OUT · MSF (up to 2% NDTL) & FALLCR stay IN" [F27]

N062 · From 15 December 2025, banks file one single electronic Form A on CIMS within 5 days, with no provisional or final split.
> 1 N: "Form A (CRR): single CIMS filing within 5 days (2 digital signs)" [F28]

N063 · Monthly Form VIII for SLR goes on CIMS before the 20th of next month; SLR default carries identical penal rates and licence risk.
> 1 N: "Form VIII (SLR): before 20th · Penal 8.75%/10.75% · Licence risk" [F29, F32]

N064 · Chapter 2 pause check. First: does branch vault cash count toward CRR?
> 1 S: pause check Q1 "Branch cash counts for CRR?" · H: 3 s

N065 · No, scheduled commercial banks hold CRR solely as balances with RBI; branch cash counts toward SLR instead.
> 1 N: "Q1: No — RBI balance only for CRR; branch cash is SLR ✓" [F18, F23]

N066 · Second: when is the single electronic Form A due after a fortnight ends?
> 1 S: pause check Q2 "Form A filing deadline?" · H: 3 s

N067 · Within 5 days after the last day of the fortnight on CIMS, signed digitally by two authorised officials.
> 1 N: "Q2: Within 5 days on CIMS ✓" [F28]

N068 · Third, a twist: ₹500 crore in SDF helps CRR or SLR?
> 1 S: pause check Q3 "SDF balance → CRR or SLR?" · H: 3 s

N069 · Its SLR only; SDF balances are eligible for SLR in Form VIII, never for CRR in Form A.
> 1 N: "Q3: SLR only, never CRR ✓" [F24]

N070 · One thing to remember from Chapter 2: CRR is 3% with a 99% daily floor, SLR is 18%, and shortfalls cost 8.75% then 10.75%.
> 1 B: box around CRR 3%/99% and SLR 18% summary [F18, F20, F22, F30]

## Chapter 3 · Monetary policy, MPC, M3, and the money multiplier

N071 · Recall from Chapter 2: what statutory ceiling applies to SLR under section 24?
> 1 S: recall card "Statutory ceiling on SLR?" · H: 3 s

N072 · 40% of NDTL, while the statutory floor was removed in 2007. Now let us see who sets policy rates.
> 1 N: "SLR statutory ceiling = 40%, no floor ✓" [F21]

N073 · Under RBI Act section 45ZA, India follows flexible inflation targeting: 4% CPI inflation with a plus-or-minus 2% tolerance band.
> 1 N: "s.45ZA: CPI target 4% ± 2% (2%–6%)" · M: Reserves & payments → MPC [F33]

N074 · On 25 March 2026, Government retained that 4% target through 31 March 2031.
> 1 N: "Retained 25 Mar 2026 for 1 Apr 2026 – 31 Mar 2031" [F33]

N075 · If average CPI stays above 6% or below 2% for three consecutive quarters, RBI must report reasons and remedies to Government.
> 1 N: "Failure = 3 consecutive quarters outside 2%–6% → report to Govt" [F33]

N076 · Under section 45ZB, the 6-member Monetary Policy Committee — three RBI and three external — meets at least four times yearly, quorum four.
> 1 N: "s.45ZB: 6-member MPC · ≥4 meetings/yr · quorum 4 · Governor casting vote" [F34]

N077 · Minutes publish on day 14 under section 45ZL. On 7 October 2026, the MPC unanimously raised the repo rate to 5.50%.
> 1 N: "7 Oct 2026: Repo 5.50% | SDF 5.25% | MSF & Bank Rate 5.75%" [F34, F35]

N078 · That moved SDF to 5.25%, MSF and Bank Rate to 5.75%, and shifted the stance to calibrated tightening.
> 1 C: corridor card "5.25% SDF ← 5.50% Repo (WACR target) → 5.75% MSF/BR · Calibrated tightening" [F35]

N079 · Reserve Money, M0, is the central bank's base; Broad Money, M3, is currency with public plus demand, time, and other RBI deposits.
> 1 N: "M0 = Base money · M3 = Currency + Demand + Time + Other RBI dep" [F36]

N080 · The money multiplier equals M3 divided by M0, like a waterwheel turning reserves into deposits, though public cash hoarding limits its spin.
> 1 S: waterwheel diagram M3 = m × M0 (limit: public cash & excess reserves) [F37]

N081 · Cutting CRR by 100 basis points on ₹200 lakh crore of NDTL injects ₹2 lakh crore of primary liquidity and lifts the multiplier.
> 1 S: calculator 20000000 × 1 % = 200000 · N: "100 bps CRR cut → ₹2 lakh cr injected; m rises" [F37]

N082 · Chapter 3 check. First: M0 ₹50 lakh crore, M3 ₹275 lakh crore. Multiplier?
> 1 S: pause check Q1 "M0 ₹50L cr, M3 ₹275L cr → multiplier?" · H: 4 s

N083 · 5.50, found by dividing 275 by 50. Second: who breaks a 3–3 tie inside the Monetary Policy Committee?
> 1 N: "Q1: 275 ÷ 50 = 5.50 ✓" · S: Q2 "Who breaks an MPC tie?" · H: 3 s

N084 · The RBI Governor holds a second or casting vote. One thing to remember: CRR cuts inject liquidity and expand M3 via the multiplier.
> 1 N: "Q2: Governor's casting vote ✓" · B: underline "CRR cut → injects liquidity" [F34, F37]

## Chapter 4 · Five-part case: Deccan Commercial Bank

N085 · Recall from Chapter 3: current Bank Rate and Day 1 penal rate?
> 1 S: recall card "Bank Rate & Day 1 penal rate?" · H: 3 s

N086 · Bank Rate is 5.75%, so Day 1 penal interest is 8.75%. Now let us run our five-part exam case.
> 1 N: "Bank Rate 5.75% · Day 1 penalty 8.75% ✓" [F30, F35]

N087 · Part 1: Deccan Commercial Bank holds ₹12,000 crore demand deposits, ₹28,000 crore time deposits, and ₹2,000 crore ODTL — ₹42,000 crore total.
> 1 S: case table "Demand 12,000 + Time 28,000 + ODTL 2,000 = ₹42,000 cr" [F2, F3, F5]

N088 · Its whiteboard also lists capital, NABARD refinance, tax provision, and DICGC claims — all excluded — plus excess inter-bank assets, so net inter-bank is zero.
> 1 N: "Capital, NABARD, tax, DICGC = OUT · Net inter-bank = ₹0" [F7, F8, F9]

N089 · It has ₹2,500 crore of 7-year infrastructure bonds against ₹2,000 crore of eligible loans. Deduct the lower figure: adjusted NDTL is ₹40,000 crore.
> 1 S: calculator 42000 − 2000 = 40000 · N: "Q1: Adjusted NDTL = ₹40,000 cr" [F14]

N090 · Part 2: at 3%, required CRR is ₹1,200 crore, and the 99% daily floor is ₹1,188 crore — branch cash excluded.
> 1 N: "Q2: CRR ₹1,200 cr · 99% daily floor ₹1,188 cr (branch cash OUT)" [F18, F20]

N091 · Part 3: SLR at 18% is ₹7,200 crore. Pause 5 seconds; sum eligible SLR assets.
> 1 S: asset list "Branch cash 150 · Excess CRR 30 · SDF 120 · Bullion 200 · Unenc G-secs 6,900 · Encumbered 400 · Dev-bank bonds 300" · H: 5 s

N092 · Drop the ₹400 crore encumbered securities and ₹300 crore development-bank bonds. Eligible SLR totals ₹7,400 crore — a ₹200 crore surplus.
> 1 S: calculator 150 + 30 + 120 + 200 + 6900 = 7400 · N: "Q3: Eligible SLR ₹7,400 cr → Surplus ₹200 cr" [F23–F27]

N093 · Part 4, an exam favourite: cost of SLR non-deployment. That ₹200 crore surplus earns 6.80% instead of 9.80% in loans.
> 1 S: "Excess SLR ₹200 cr · G-sec 6.80% vs Advances 9.80%" · H: 5 s

N094 · Press 9.8 minus 6.8, giving 3%, times ₹200 crore: ₹6.00 crore of annual opportunity cost.
> 1 S: calculator 200 × 3 % = 6 · N: "Q4: Opportunity cost = ₹6.00 cr/year"

N095 · Part 5: on Day 5, the bank's RBI balance slips to ₹1,158 crore — ₹30 crore below the ₹1,188 crore daily floor.
> 1 S: "Day 5 balance ₹1,158 cr vs ₹1,188 cr floor → shortfall ₹30 cr" · H: 5 s

N096 · Press 300000000 times 8.75% divided by 365: ₹71,917.81 in penal interest for that single day.
> 1 S: calculator 300000000 × 8.75 % ÷ 365 = 71917.81 · N: "Q5: Day 5 penalty = ₹71,917.81" [F30]

N097 · Mixed check: two SLR-only items, and which repo counts inside NDTL?
> 1 S: mixed check card "2 SLR-only items + 1 repo inside NDTL?" · H: 4 s

N098 · Branch cash and SDF balances count for SLR only, and corporate-bond repo counts inside NDTL while G-sec repo is exempt.
> 1 N: "SLR-only: branch cash & SDF · IN NDTL: corporate-bond repo ✓" [F11, F23, F24]

## Close

N099 · Look at our blank Reserves branch. Pause 5 seconds and name all four nodes.
> 1 M: blank mind map branch "Reserves and payments" (4 empty boxes) · H: 5 s

N100 · Slot one: NDTL with thirteen exclusions and the long-term bond formula. Slot two: CRR at 3% and 99% daily.
> 1 M: fill nodes 1 "NDTL" and 2 "CRR" [F1, F18, F20]

N101 · Slot three: SLR at 18% across cash, bullion, and unencumbered sovereign securities. Slot four: MPC, policy corridor, M3, and the money multiplier.
> 1 M: fill nodes 3 "SLR" and 4 "MPC" [F22, F33–F37]

N102 · You can now handle NDTL, CRR, SLR, penalties, and MPC for syllabus topic C-four-point-one.
> 1 C: "You can now (C4.1): NDTL · CRR 3%/99% · SLR 18% · Penalties · MPC/M3"

N103 · Outside today: LAF auctions were covered earlier; payment plumbing comes next class.
> 1 C: scope card "Earlier: LAF auctions · Next class: RTGS, NEFT, CCIL, NDS-OM"

N104 · Homework: on ₹50,000 crore NDTL, compute CRR, 99% daily floor, and SLR.
> 1 N: "Homework: NDTL ₹50,000 cr → CRR? 99% floor? SLR?"

N105 · Carry one question into next class: at 4:55 p.m., your treasury pays ₹300 crore for a bond. Which pipe settles it, and when?
> 1 S: preview card "4:55 p.m. · ₹300 cr G-sec trade · Which pipe? When final?"

N106 · That is reserves and monetary policy clear in your head. Close the notebook, take a breath, and I will see you next class.
> 1 S: notebook closes gently