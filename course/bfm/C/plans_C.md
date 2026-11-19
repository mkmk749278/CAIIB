# Module C plans: C01–C09, CR (draft 1, 2026-11-19)

Same rules as the top of `course/bfm/A/plans_A.md` (rule version 31 Dec 2026; evidence from `items_tagged.csv`, "FP1"
= Oliveboard Dec 2025 paper, "FP2" = the second Oliveboard set; numbers fixed later and solved twice; facts checked
before lock; PLAYBOOK §5b voice). **Why Module C gets more than its recall share:** in FP1, Module C carried 27 of
100 questions, mostly plain theory that recall lists under-report (`importance_map.md`).

**Mind map C: "The bank's trading desk"**: centre = the integrated treasury desk seen from above; branches clockwise:
12 the desk itself (C01) · 2 money market (C02–C03) · 4 reserves and policy (C04) · 6 bonds (C05–C06) · 8 risk
control (C07) · 10 derivatives (C08–C09). Colour code: **gold = price**, **purple = yield/rate** (they always move
opposite: the see-saw).

---

## C01 · Integrated treasury: the desk
- **Goal**: explain what an integrated treasury does, how it is organised, and how the dealing room is controlled.
- **Evidence**: C-TPROD seen 6/7: front/mid/back office (Jun 2023), integrated treasury functions (Dec 2023 ×2,
  Dec 2025 "treasury office", case); FP1 Q67–70, Q84 (functional segregation); dealing room case, daylight limit,
  forex hold (A-DEALROOM, Dec 2025, Jun 2026); NOP-INR cap (Mar 2026).
- **Opening**: 9:00 a.m. at a bank's treasury: forex, money market and bond dealers at one desk. "Why put them together?"
- **Misconceptions**: some think the back office only does paperwork; others think the mid office makes trades.
- **Picture**: the desk from above with three rings (front: deal; mid: watch risk; back: settle and account); the
  dealing-room clock for daylight and overnight limits.
- **Chapters**: 1 From separate desks to integrated treasury; treasury as a profit centre · 2 Front, mid, back:
  who does what and why they are separated · 3 Dealing room controls: dealer limits, daylight/overnight, NOP, stop
  loss (intro), rupee NOP cap · 4 Quiz. ~13 min.
- **Traps**: functions of mid vs back office; NOP vs daylight limit; "globalisation" question (FP1 Q70).
- **Practice**: 3.
- **Map nodes**: The desk.
- **Facts to verify**: RBI's market-risk / treasury control guidance in the current MDs; NOP-INR (RBI/2025-26/252) and
  the revamped NOP framework date; FEDAI dealing-room rules.

## C02 · Money market
- **Goal**: tell every money-market instrument and RBI's liquidity tools apart: tenor, issuer, who may invest.
- **Evidence**: CP case (Jun 2026 ×2), CD ("A3-rated company can issue", Jun 2026), notice money FP1 Q74, SOFR
  (Jun 2026), liquidity corridor FP1 Q81, repo items.
- **Opening**: a bank is short Rs 500 crore for one night; a company has spare cash for three months.
- **Misconceptions**: some think CDs are issued by companies; others think the SDF needs collateral.
- **Picture**: a ladder of tenors (overnight to one year) with each instrument on its rung; the corridor as a road
  with SDF at the floor, repo in the middle, MSF at the ceiling.
- **Chapters**: 1 Call, notice, term money; TREPS and repo · 2 CP and CD: issuers, minimum size, tenor, rating ·
  3 RBI's LAF corridor: repo, SDF, MSF and the rates at the cut-off · 4 Benchmarks: MIBOR, SOFR after LIBOR. ~13 min.
- **Traps**: notice money tenor; CP vs CD issuers; SDF without collateral; corridor width.
- **Practice**: 3.
- **Map nodes**: Money market.
- **Facts to verify**: RBI CP and CD directions; call/notice/term definitions; policy rates as at 31 Dec 2026 (the
  June 2026 figures are in `regulatory_updates.md`; the Oct and Dec 2026 policies must be read); LIBOR transition.

## C03 · T-Bills, CMBs, CP and CD: the sums
- **Goal**: price a discount instrument and compute its yield, in under two minutes.
- **Evidence**: T-Bill yield and price (Jul 2024 "91 days, price 99", T-Bill case; Jun 2026 yield, tenure); CMBs
  (Jun 2023 ×2, Dec 2023, Dec 2024, Dec 2025, Jun 2026: amount, features, tenure).
- **Opening**: a T-Bill auction result in the newspaper: "Rs 98.75 for 91 days". "What does the bank actually earn?"
- **Misconceptions**: some divide the discount by the face value instead of the price; others use 360 days.
- **Picture**: the calculator; a bar from price to face value.
- **Chapters**: 1 Discount instruments and tenors (91/182/364 days; CMBs under 91 days) · 2 Yield from price ·
  3 Price from yield · 4 CP and CD discount sums. ~10 min.
- **Numericals**: 4 (yield from price; price from yield; CMB; CP).
- **Traps**: day count (365); divide by price, not face value; CMB tenor.
- **Practice**: 3, no options.
- **Map nodes**: Money market: T-Bill yield.
- **Facts to verify**: RBI's T-Bill yield convention and CMB rules.

## C04 · CRR, SLR, NDTL and the policy rates
- **Goal**: compute CRR and SLR requirements from NDTL and know the rules up to the cut-off.
- **Evidence**: C-RESERVES seen 4/7: CRR/SLR case (Jun 2023, Jul 2024, Jun 2026), NDTL case (Jun 2023, Jul 2024,
  Jun 2026), min/max CRR, MPC, SLR non-deployment cost (Jun 2026); FP1 Q45 (CRR cut in tranches), Q66, Q79 (M3), Q80
  (DTL exemptions), Q81.
- **Opening**: a bank's liabilities on a whiteboard: which ones attract CRR and how much cash goes to RBI?
- **Misconceptions**: some include interbank liabilities in NDTL without the rules; others use the old fortnight.
- **Picture**: a jar of deposits with two scoops taken out (CRR cash to RBI, SLR securities kept); a calendar for the
  new fortnights.
- **Chapters**: 1 NDTL: what's in, what's out · 2 CRR and SLR: rates at the cut-off, the new fortnight (from 15 Dec
  2025), penal interest · 3 Monetary policy: MPC, repo, corridor, M3 · 4 Case (5 questions incl. cost of
  non-deployment). ~14 min.
- **Numericals**: 1 case (5 linked sums).
- **Traps**: old vs new fortnight; CRR 3% after Nov 2025; DTL exemptions; penal rates.
- **Practice**: the case.
- **Map nodes**: Reserves and policy.
- **Facts to verify**: CRR and SLR Directions 2025 (as amended); the Banking Laws (Amendment) Act 2025 fortnight;
  SLR rate; policy decisions up to 31 Dec 2026; RBI Act s. 42 limits.

## C05 · Bonds: price and yield
- **Goal**: price a bond from its cash flows and explain clean/dirty price, accrued interest and YTM.
- **Evidence**: bond face value, BPS (Jun 2023); bond case (Dec 2023); bond & yield (Jun 2025); yield curve (Jul 2024);
  FP1 Q10 (G-sec yield change), Q62 (bond pricing assumption), Q88; FP2 Q2 (5-year 10% semi-annual bond).
- **Opening**: an officer's bond portfolio lost value on the day RBI raised rates. "But the bond pays the same coupon!"
- **Misconceptions**: some think price and yield move together; others think coupon = yield.
- **Picture**: the see-saw: gold price on one side, purple yield on the other; the yield curve as a hill.
- **Chapters**: 1 What a bond is; G-secs, SDLs · 2 Price = present value of cash flows (calculator method without
  powers) · 3 Current yield, YTM (approximation), clean vs dirty price, accrued interest · 4 Yield curve shapes and
  risk. ~14 min.
- **Numericals**: 4 (price of a 3-year bond; semi-annual; current yield; accrued interest).
- **Traps**: semi-annual coupon halving; day count for accrued interest (30/360 for G-secs); YTM approximation.
- **Practice**: 3.
- **Map nodes**: Bonds.
- **Facts to verify**: day-count convention for G-secs (FIMMDA); YTM approximation formula IIBF uses.

## C06 · Duration, modified duration, BPV
- **Goal**: compute Macaulay duration, modified duration, price change for a yield change, and BPV/PV01.
- **Evidence**: C-MKTRISK seen 6/7, 27 mentions: modified duration (Jun 2023, Jun 2025, Jun 2026 ×3 case studies);
  duration (Jun 2023 5 marks, Jun 2026); BPV (Jul 2024, Jun 2025 ×2, Dec 2025); FP1 Q13 (semi-annual bond price change),
  Q14 (portfolio duration).
- **Opening**: two bonds, same price; rates rise 1%. Which one hurts more, and by exactly how much?
- **Misconceptions**: some use Macaulay duration for the price change; others forget to divide by (1 + y/2) for
  semi-annual bonds.
- **Picture**: the see-saw with a moving pivot (duration = where the pivot sits); weighted cash-flow blocks on a timeline.
- **Chapters**: 1 Macaulay duration as a balance point (table method) · 2 Modified duration and % price change ·
  3 BPV / PV01 · 4 Portfolio duration and case (5 questions). ~14 min.
- **Numericals**: 4 + a case.
- **Traps**: MD = D ÷ (1 + y/n); sign of the price change; BPV per crore.
- **Practice**: 3, no options.
- **Map nodes**: Bonds: duration, MD, BPV.
- **Facts to verify**: formulas only (standard); check the conventions in recalled questions.

## C07 · Treasury risk control
- **Goal**: explain the limits that control treasury risk, VaR on the desk, the market-risk capital method, and the
  investment classification rules.
- **Evidence**: stop loss (Dec 2025 ×3 incl. case); VaR (Jun 2023, Dec 2025 numerical, Jun 2026); horizontal and
  vertical disallowance (Dec 2025); "for capital adequacy for market risk which method" (Dec 2023); FP1 Q85–87.
- **Opening**: a dealer's position loses Rs 2 crore by noon. Who stops him, and at what number?
- **Misconceptions**: some think stop loss limits are set by the dealer; others think VaR replaces limits.
- **Picture**: the desk (C01) with a fence of limits; the bell curve (B09) beside it.
- **Chapters**: 1 Limits: position, gap, stop loss, VaR, counterparty · 2 VaR on the desk (link to B09) · 3 Capital
  for market risk: duration method, horizontal and vertical disallowance (current rules; new directions from
  1 Apr 2027 "issued, coming") · 4 Investment classification (HTM, AFS, FVTPL) and IFR removal. ~13 min.
- **Traps**: horizontal vs vertical disallowance; HTM limits; IFR discontinued for commercial banks.
- **Practice**: 3.
- **Map nodes**: Risk control.
- **Facts to verify**: current market-risk capital rules (duration method, disallowances); investment classification
  directions (2023, in force Apr 2024); IFR withdrawal text.

## C08 · Derivatives 1: forwards, futures, FRAs, swaps
- **Goal**: tell OTC from exchange-traded derivatives and explain forwards, futures, FRAs and swaps with uses.
- **Evidence**: C-DERIV seen 4/7 (but 8 questions in FP1): FP1 Q89 (value of a derivative), Q90 (OTC vs exchange), Q93
  (currency futures start in India), Q96, Q97; derivative case (Dec 2025).
- **Opening**: an exporter and a bank both worried about the same rupee, on opposite sides.
- **Misconceptions**: some think futures and forwards differ only in name; others think a swap exchanges principal
  always.
- **Picture**: two counterparties on a see-saw (OTC: face to face; exchange: through a clearing house in the middle).
- **Chapters**: 1 What a derivative is; OTC vs exchange; margin and clearing · 2 Forwards and futures (link to A05) ·
  3 FRAs and interest rate swaps; currency swaps · 4 RBI rules up to the cut-off (non-deliverable bar, related
  parties, IRD access, LEI). ~13 min.
- **Traps**: currency futures start year; IRS = no principal exchange; who may be a market maker.
- **Practice**: 3.
- **Map nodes**: Derivatives: forwards, futures, swaps.
- **Facts to verify**: RBI rupee interest rate derivatives directions; forex derivative directions as amended 2026;
  start of currency futures in India.

## C09 · Derivatives 2: options
- **Goal**: read calls and puts, tell ITM/ATM/OTM, and compute payoffs and profits.
- **Evidence**: call option (Jun 2023, Jun 2025), ATM/ITM/OTM (Dec 2023), put option (Jun 2025), call and put
  (Dec 2025); FP1 Q11, Q12, Q92; FP2 Q6–9 (option sums incl. covered call).
- **Opening**: an investor holding 100 shares wants to earn extra income without selling them.
- **Misconceptions**: some think a put is ITM when the price is above the strike; others confuse payoff with profit.
- **Picture**: payoff lines (hockey sticks) for long call, long put, short call, short put.
- **Chapters**: 1 Call and put; buyer's right, seller's obligation · 2 ITM/ATM/OTM · 3 Payoff vs profit; four
  positions · 4 Hedging with options (protective put, covered call); case. ~13 min.
- **Numericals**: 4 (call payoff; put payoff; profit with premium; covered call case).
- **Traps**: put ITM when price < strike; profit = payoff − premium; European vs American.
- **Practice**: 3, no options.
- **Map nodes**: Derivatives: options.
- **Facts to verify**: none regulatory beyond C08.

## CR · Module C revision
- **Goal**: the whole map C in 7 minutes, 15 traps, 10 rapid questions; written last.
