# D01b · "ALM, ALCO, treasury and transfer pricing" · CLASS EDITION (script c1, with cue sheet)
* Status: c1, 2026-11-24. Standard style (course/spec/lesson_spec.md): one question per idea, one pause check per chapter, at most one light line per chapter, plain words; 12–15 min.
* Plan: course/bfm/D/plans_D.md §D01b (v4 split from D01; covers all 19 v3 additions). Course order v4: D01 → D01b → D02.
* Syllabus: D1.2 (what is ALM; significance; purpose and objectives), D1.3 (ALM as co-ordinated balance sheet management), C7.1 (meaning of ALM; liquidity risk and interest rate risk), C7.2 (role of treasury in ALM; use of derivatives in ALM), C7.4 (transfer pricing), C7.5 (policy environment).
* Facts: D01b_fact_sheet ([F1]–[F39]). Sums: D01b_numericals. Practice: D01b_practice.
* Rule version (opening card): "RBI (Commercial Banks – Asset Liability Management) Directions, 2025 (28 Nov 2025) · RBI (Commercial Banks – Interest Rate on Deposits) Directions, 2025 (updated 1 Oct 2026, incl. Second Amendment 30 Jul 2026) · RBI (Commercial Banks – Investment Portfolio) Directions, 2025 (updated 1 Oct 2026) · RBI (Rupee Interest Rate Derivatives) Directions, 2025 (updated 22 Sep 2026) · RBI MD – Risk Management and Inter-Bank Dealings (updated 1 Oct 2026) · RBI MD – Market-makers in OTC Derivatives, 2021 (updated 21 Feb 2025) · FEDAI Code of Conduct (8 May 2025) · BCBS SRP98 (effective 1 Jan 2026) · as at 31 December 2026".
* Greeting / goodbye (new, checked against greetings.md): greeting "Welcome back to class, everyone. Last time we mapped the balance sheet shelves; today we see who steers them."; goodbye "That wraps up the ALM engine. Sketch the hub and three-way split once tonight, and I'll see you next class."
* Story: Kaveri Bank, Bengaluru (illustrative). Divya, Branch Manager at Mysuru Road branch, and Arjun, Treasury Head at Head Office. Interest rates fall; borrowers prepay fixed loans while fixed depositors stay locked in at higher old rates, squeezing branch margin. All names, rates, and amounts are illustrative.
* Holds: questions at least 3 s; one-step sums 8 s; "your turn" 15 s; map 3–5 s per node.
* Say it right: "A-L-M", "AL-co" (ALCO), "N-I-I", "N-I-M", "M-V-E", "R-S-A", "R-S-L", "F-T-P", "I-R-S", "F-R-A", "I-R-F", "L-C-R", "H-Q-L-A", "FIM-da" (FIMMDA), "FED-eye" (FEDAI), "ten point one zero per cent" for 10.10%.
* Not in this video: Third Schedule balance sheet & P&L forms and placement traps (previous class); detailed LCR, NSFR, and SLS bucket numericals (liquidity classes); full Traditional Gap, Duration Gap, MCLR/EBLR, and IRRBB controls (upcoming interest-rate-risk classes); derivative product pricing and 2026 FX derivative rules (derivatives classes).
* Length: 1,945 spoken words (exact count) + ~2.4 min of holds ≈ 14.5 min at 150 wpm (measured programmatically). Chapters: warm-up (~1.2 min) · 1 what ALM is and why it matters now (~3.5 min) · 2 ALCO, treasury and derivatives in ALM (~3.5 min) · 3 the policy environment and market codes (~2.1 min) · 4 transfer pricing and mixed-risk case (~3.5 min) · close (~1.4 min).
* Cue sheet: S scene · N note · G glow · M map · C card · B board mark · H hold. Stable pictures: Chapter 1 = two balance-sheet shelves joined by an ALM hub (assets, liabilities, income, expense) with a gap scale below; Chapter 2 = ALCO meeting table between the shelves, feeding a central Treasury fund pool and three derivative shields; Chapter 3 = five policy folders on a Board table with FIMMDA and FEDAI code badges; Chapter 4 = one margin bar sliced three ways (deposit unit, lending unit, treasury) plus a mixed-risk dashboard.


---

## Warm-up

N001 · [warmly] Welcome back to class, everyone. Last time we mapped the balance sheet shelves; today we see who steers them.
> 0 C: rule-version card (as at 31 December 2026) · 1 S: notebook page; title "ALM, ALCO, treasury and transfer pricing"


N002 · Put your phone on silent and keep your calculator nearby. First, a quick check from last class.
> 1 S: small calculator icon in corner · 2 N: "Warm-up check"


N003 · Where does an overdue term deposit sit on a bank's balance sheet: under deposits, or under other liabilities?
> 1 C: card "Overdue term deposit → ?" · H: 3 s


N004 · Still under deposits. Good. And from our earlier liquidity classes: what is the minimum Liquidity Coverage Ratio banks must hold?
> 1 N: "Deposits ✓" · 2 C: card "Minimum LCR = ?" · H: 3 s


N005 · One hundred per cent. Well done. This topic matters: ALCO and ALM questions appeared in three recent exam cycles.
> 1 N: "100% ✓" · 2 N: "Exam note: ALCO & ALM tested repeatedly (2023–25)"


N006 · By the end of this class, you will map ALM governance, five core policies, and split any bank margin three ways.
> 1 N: "Goal: ALM hub · ALCO & Treasury · 5 policies · 3-way FTP"

## Opening

N007 · Picture Divya, a branch manager at Kaveri Bank in Bengaluru. Market interest rates drop by one full percentage point.
> 1 S: two balance-sheet shelves (illustrative: Kaveri Bank, Bengaluru) · 2 C: card "Rates drop 1%"


N008 · Her fixed-rate borrowers start prepaying their loans to refinance cheaply elsewhere. Her fixed depositors stay locked in at old, higher rates.
> 1 S: arrow out of Loans ("prepayments"); padlock icon on Deposits ("locked at high rate") [F9]


N009 · Divya's branch margin shrinks fast. Here is my question. Whose job was it to see this squeeze coming?
> 1 C: two buttons "Branch manager" · "Head Office ALCO & Treasury" · H: 3 s


N010 · Hold your answer. Let us open chapter one and find out how a bank runs its balance sheet as one engine.
> 1 G: question pulses once

## Chapter 1 · What ALM is, and why it matters now

N011 · Chapter one. First, a quick refresher: banks borrow short and lend long, earning a spread called Net Interest Income.
> 1 S: chapter title "1 · What ALM is, and why it matters now" · 2 S: short deposit bar funding long loan bar; "NII = Interest Earned − Interest Expended"


N012 · Many of you are thinking: A-L-M is just a fancy name for keeping enough cash for short-term liquidity.
> 1 N: thought bubble "ALM = only liquidity?"


N013 · That sounds tempting, but it is wrong. A-L-M covers liquidity, interest rate, foreign exchange, and market risks together.
> 1 B: strike through thought bubble · 2 C: card "ALM = liquidity + IRR + FX + market risks" [F1]


N014 · Write this down. A-L-M is coordinated balance-sheet management tying asset, liability, income, and expense decisions to business strategy.
> 1 S: ALM hub drawn in centre connecting Assets, Liabilities, Income, Expense [F1, F8] · 2 M: node "ALM (objectives, why now)"


N015 · Its three pillars are clear: an Information System, an Organisation led by top management, and a structured Risk Process.
> 1 N: "3 Pillars: MIS · Organisation · Process" [F2]


N016 · Why does A-L-M matter so much now? Five forces changed banking: deregulated rates, fierce competition, rate volatility, new products, and tighter regulation.
> 1 C: card "Why ALM now: deregulation · competition · volatility · embedded options · regulation" [F3]


N017 · Add embedded options to that list: borrowers prepay when rates fall, and depositors break fixed deposits when rates rise.
> 1 G: "embedded options" on card [F9]


N018 · Now look at A-L-M's three objectives in one picture: stable earnings, growing net worth, and risk kept inside limits.
> 1 S: three-part objective badge "1. Stable NII/NIM · 2. Equity value (MVE) · 3. Risk within Board limits" [F4]


N019 · To hit those goals, A-L-M runs two linked strands: price matching and liquidity matching.
> 1 N: "Price matching = yield > cost of funds" · 2 N: "Liquidity matching = maturity buckets & gaps" [F7]


N020 · Price matching protects your spread. Liquidity matching groups inflows and outflows by maturity so you meet cash obligations at reasonable cost.
> 1 G: both lines on board [F5, F7]


N021 · Notice how liquidity risk turns into interest-rate risk. A maturity mismatch forces you to refinance maturing deposits at new market rates.
> 1 S: arrow from "Liquidity gap" to "Refinance at market rate → Rate risk" [F10]


N022 · And remember one shock-absorber ratio: Economic Equity Ratio equals owners' funds divided by total assets.
> 1 C: card "Economic Equity Ratio = Owners' Funds ÷ Total Assets" [F15]


N023 · A lower Economic Equity Ratio means higher leverage and a thinner cushion against balance-sheet shocks.
> 1 N: "Lower ratio → higher leverage" [F15]


N024 · Next, check your gap sign. In any bucket, Gap equals Rate Sensitive Assets minus Rate Sensitive Liabilities.
> 1 C: gap-sign card "Gap = RSA − RSL · Positive (RSA > RSL) · Negative (RSL > RSA)" [F11]


N025 · Where does a fixed-rate loan sit in the Interest Rate Sensitivity statement? Think before I answer.
> 1 S: 11-bucket ladder (1–28 days to >15 years) [F13] · H: 3 s


N026 · In its residual maturity bucket. Rate-sensitive items sit by residual maturity or next repricing date, whichever is earlier.
> 1 N: "Fixed-rate → residual maturity · Floating-rate → next repricing date" [F12]


N027 · Pause check. Three quick questions. One: does A-L-M manage only liabilities, or both sides of the balance sheet?
> 1 S: pause card "Ch 1 Check" · H: 3 s


N028 · Both sides, plus income, expenses, and off-balance-sheet items. Two: if R-S-A exceeds R-S-L in a bucket, is the gap positive or negative?
> 1 N: "1. Both sides ✓" [F8] · H: 3 s


N029 · Positive gap, because assets exceed liabilities. Three, the twist: a five-year fixed-rate bond has three years left. Which bucket?
> 1 N: "2. Positive gap ✓" [F11] · H: 3 s


N030 · Over one to three years—its residual maturity bucket, since fixed-rate items have no earlier repricing date.
> 1 N: "3. 1–3 yr residual maturity ✓" [F12, F13]


N031 · [seriously] One thing to remember from chapter one: A-L-M coordinates both shelves to protect earnings and equity, not just cash.
> 1 B: box ALM hub; completed notes dim to grey

## Chapter 2 · ALCO, treasury and derivatives in ALM

N032 · Chapter two. First, recall from chapter one: what happens to liquidity risk when a short-term deposit matures and must be replaced?
> 1 S: chapter title "2 · ALCO, treasury and derivatives in ALM" · H: 3 s


N033 · It turns into interest-rate risk, because you refinance at prevailing market rates. Now let us answer Divya's opening question.
> 1 N: "Liquidity gap → rate risk ✓" [F10]


N034 · Who governs A-L-M in a commercial bank? R-B-I's twenty twenty-five Directions set four clear tiers.
> 1 S: four-tier tower: Board → RMC → ALCO → ALM Support Group [F16]


N035 · At the top sits the Board of Directors, holding overall responsibility, approving policies, setting risk tolerance, and reviewing them annually.
> 1 G: Board tier · 2 N: "Board: approves policies & limits; annual review" [F17]


N036 · Below the Board sits the Risk Management Committee, evaluating liquidity risk and how it interacts with credit, market, and operational risks.
> 1 G: RMC tier [F18]


N037 · Third is ALCO, the Asset Liability Management Committee, headed by the C-E-O, C-M-D, or Executive Director.
> 1 G: ALCO tier · 2 M: node "ALCO" [F19]


N038 · ALCO members include heads of Investment, Credit, Treasury, International Banking, Risk Management, and Economic Research, supported by the ALM Support Group.
> 1 S: ALCO table between the two shelves; Support Group desk beside it [F19, F22]


N039 · Many of you mix up Board and ALCO. Remember the split: the Board approves policies and limits; ALCO implements strategy and decides mix and pricing.
> 1 C: trap card "Wrong: ALCO approves policies · Right: Board approves, ALCO implements & decides pricing/mix" [F21]


N040 · ALCO decides the desired maturity profile, funding mix, deposit and loan pricing, stress-test reviews, and transfer pricing policy.
> 1 N: "ALCO decides: maturity/funding mix · pricing · stress tests · FTP policy" [F20]


N041 · One current rule on deposit pricing, effective one October twenty twenty-six: banks must publish deposit rate cards in advance on their website.
> 1 C: card "From 1 Oct 2026: publish deposit rates in advance; bulk (₹3 cr+) by 10:00 am (grace 10:10 am)" [F23]


N042 · Bulk deposit rates—three crore rupees and above—go up by ten a-m, grace till ten-ten, uniform across branches with no negotiation.
> 1 N: "Uniform across branches · bulk differential may reflect LCR run-off" [F23, F24]


N043 · Banks may also differentiate bulk deposit rates based on their L-C-R run-off rates. That links deposit pricing directly to liquidity risk.
> 1 G: "LCR run-off" on board [F24]


N044 · Now meet Arjun, the Treasury Head. ALCO decides the strategy; Treasury operates the bank's central pool of funds and executes those decisions.
> 1 S: central Treasury fund pool linking shelves and markets · 2 M: node "Treasury" [F25]


N045 · Treasury controls the H-Q-L-A pool, supplies market pricing inputs, and hedges only the residual mismatch left after natural balance-sheet offsets.
> 1 N: "Treasury: fund pool · executes ALCO · pricing input · hedges residual risk" [F25]


N046 · Should Arjun eliminate every single maturity mismatch? Think for three seconds.
> 1 C: question "Eliminate every mismatch?" · H: 3 s


N047 · No. Perfect matching is neither possible nor desirable. Maturity transformation earns the term premium, and removing equity risk raises earnings volatility.
> 1 C: trap card "No perfect matching: term premium is bank income" [F14]


N048 · To hedge residual mismatches beyond limits, Treasury uses three derivative shields—you will study their full mechanics in our derivatives classes.
> 1 S: three derivative shields on Treasury pool [F26, F27]


N049 · An Interest Rate Swap closes a repricing gap. Forward Rate Agreements and Interest Rate Futures hedge future rate gaps. Currency swaps hedge foreign-currency mismatches.
> 1 N: "IRS → repricing gap · FRA/IRF → future gap · Currency swap → FX mismatch" [F26, F27]


N050 · Pause check. One: who heads ALCO under R-B-I Directions?
> 1 S: pause card "Ch 2 Check" · H: 3 s


N051 · The C-E-O, C-M-D, or Executive Director. Two: by what time must bulk deposit rates be published each business day?
> 1 N: "1. CEO/CMD or ED ✓" [F19] · H: 3 s


N052 · Ten a-m, with a ten-minute grace up to ten-ten a-m. Three, the twist: can a branch manager negotiate a higher bulk rate?
> 1 N: "2. 10:00 am (grace 10:10 am) ✓" [F23] · H: 3 s


N053 · No—rates must be uniform across all branches for similar deposits on the same day, with no negotiation.
> 1 N: "3. No negotiation; uniform ✓" [F24]


N054 · [seriously] One thing to remember from chapter two: the Board sets the walls, ALCO steers the ship, and Treasury executes and hedges residual risk.
> 1 B: box governance flow; notes dim to grey

## Chapter 3 · The policy environment and market codes

N055 · Chapter three. First, recall from chapter two: which derivative does Treasury use to hedge a foreign-currency balance-sheet mismatch?
> 1 S: chapter title "3 · The policy environment and market codes" · H: 3 s


N056 · A currency swap. Every treasury and A-L-M action sits inside a written policy framework—never ad hoc deals.
> 1 N: "Currency swap ✓" [F27] · 2 S: five policy folders on Board table · 3 M: node "Policies"


N057 · Five core policies govern this desk: A-L-M, Liquidity, Investment, Derivatives, and Funds Transfer Pricing.
> 1 N: "5 Policies: ALM · Liquidity · Investment · Derivatives · FTP" [F28]


N058 · One line on each. The A-L-M Policy sets ALCO's role, risk measures, pricing rules, and earnings-at-risk and equity limits.
> 1 G: ALM folder [F28, F29]


N059 · The Liquidity Policy defines risk tolerance, funding diversification, short-term mismatch caps, stress tests, and the Contingency Funding Plan.
> 1 G: Liquidity folder [F29]


N060 · The Investment Policy covers objectives, permitted securities, dealing authority, issuer and duration limits, valuation, and half-yearly Board portfolio review.
> 1 G: Investment folder [F30]


N061 · The Derivative Policy sets risk appetite, permitted products, new-product sign-off by C-C-O and C-R-O, suitability checks, and front-back office separation.
> 1 G: Derivatives folder [F31]


N062 · The Transfer Pricing Policy—decided by ALCO under Board risk tolerance—sets how internal funds are priced across units.
> 1 G: FTP folder [F28, F31]


N063 · Who approves the main risk policies, and how often must the Board review them?
> 1 C: question "Who approves? Review cycle?" · H: 3 s


N064 · The Board or its committee approves them, and reviews liquidity and A-L-M policies at least annually.
> 1 N: "Board approves · Reviewed at least annually" [F17, F28]


N065 · Alongside internal policies and R-B-I rules, dealers follow two self-regulatory codes: FIMMDA for debt and Rupee derivatives, and FEDAI for foreign exchange.
> 1 S: two badges "FIMMDA Code (G-secs/IRDs)" · "FEDAI Code (FX Global Code 2024)" [F33, F34]


N066 · Pause check. One: how often must the Board review the Liquidity Policy and Contingency Funding Plan?
> 1 S: pause card "Ch 3 Check" · H: 3 s


N067 · At least annually. Two: which code governs bank conduct in Government securities on N-D-S-O-M and Rupee interest rate derivatives?
> 1 N: "1. At least annually ✓" [F17] · H: 3 s


N068 · FIMMDA. FEDAI covers foreign exchange through the F-X Global Code.
> 1 N: "2. FIMMDA (debt/IRD) · FEDAI (FX) ✓" [F33, F34]


N069 · [seriously] One thing to remember from chapter three: five written policies, Board-approved and reviewed annually, backed by FIMMDA and FEDAI codes.
> 1 B: box five folders; notes dim to grey

## Chapter 4 · Transfer pricing and mixed-risk case

N070 · Chapter four. Recall from chapter three: who approves a new O-T-C derivative product after C-C-O and C-R-O sign-off?
> 1 S: chapter title "4 · Transfer pricing and mixed-risk case" · H: 3 s


N071 · The Board of Directors. Now let us solve how Kaveri Bank measures Divya's branch fairly when rates move.
> 1 N: "Board approves new products ✓" [F31] · 2 M: node "FTP"


N072 · This tool is Funds Transfer Pricing, or F-T-P. Treasury notionally buys deposits from branches and sells funds to lending units at internal transfer rates.
> 1 S: Deposit unit → Treasury pool → Lending unit [F35]


N073 · What builds that transfer rate? Three ingredients: the matched-tenor market rate, hedging and liquidity costs, and the cost of C-R-R and S-L-R reserves.
> 1 C: card "Transfer rate = Market rate + Liquidity/Hedging cost + Reserve cost (CRR/SLR)" [F36]


N074 · Look at the big trap. After F-T-P, which risk stays with the lending branch, and which risks move to Treasury?
> 1 C: trap card "After FTP: who bears which risk?" · H: 3 s


N075 · Credit risk stays with the lending branch. Interest-rate risk and liquidity mismatch risk move centrally to Treasury.
> 1 N: "Branch = credit risk & franchise spread · Treasury = rate & liquidity risk" [F38]


N076 · Let us work one three-way F-T-P split on Kaveri Bank's illustrative ten-crore-rupee book. Grab your calculator.
> 1 S: margin bar "Loan 10.10% · 5Y FTP 8.20% · 3Y FTP 7.60% · Deposit 6.80% (illustrative)" [F37]


N077 · Divya's deposit unit raises a three-year deposit at six point eight zero per cent. Treasury's three-year transfer rate is seven point six zero.
> 1 N: "Deposit unit: 7.60 − 6.80 ="


N078 · Press seven point six zero minus six point eight zero equals. Zero point eight zero per cent—eight lakh rupees on ten crore.
> 1 S: keys "7.60 − 6.80 = 0.80%" · "1000 × 0.80 % = ₹8.00 lakh"


N079 · The lending unit gives a five-year loan at ten point one zero per cent. Treasury's five-year transfer rate is eight point two zero.
> 1 N: "Lending unit: 10.10 − 8.20 ="


N080 · Press ten point one zero minus eight point two zero equals. One point nine zero per cent—nineteen lakh rupees.
> 1 S: keys "10.10 − 8.20 = 1.90%" · "1000 × 1.90 % = ₹19.00 lakh"


N081 · What stays with Treasury? Five-year transfer rate minus three-year transfer rate.
> 1 N: "Treasury: 8.20 − 7.60 ="


N081a · Press eight point two zero minus seven point six zero equals. Zero point six zero per cent, or six lakh rupees.
> 1 S: keys "8.20 − 7.60 = 0.60%" · "1000 × 0.60 % = ₹6.00 lakh"


N082 · Check both ways. Add the three slices: zero point eight, plus one point nine, plus zero point six.
> 1 N: "0.80 + 1.90 + 0.60 = 3.30% (₹33 lakh)"


N082a · That equals three point three zero per cent, or thirty-three lakh rupees.
> 1 N: "0.80 + 1.90 + 0.60 = 3.30% (₹33 lakh)"


N083 · Direct check: loan rate ten point one zero minus deposit rate six point eight zero equals three point three zero per cent. Both match.
> 1 B: box "3.30% = ₹33.00 lakh ✓"


N084 · Now your turn. Five-year F-T-P rises to eight point four zero, and the loan is ten point two zero.
> 1 C: card "Your turn: Loan 10.20% · 5Y FTP 8.40% · 3Y FTP 7.60% · Deposit 6.80%"


N084a · Deposit stays six point eight zero, and three-year F-T-P stays seven point six zero. Find all three slices.
> 1 C: card "Your turn: Loan 10.20% · 5Y FTP 8.40% · 3Y FTP 7.60% · Deposit 6.80%" · H: 15 s


N085 · Check your slices. Deposit unit: zero point eight zero. Lending unit: one point eight zero.
> 1 N: "Deposit 0.80% · Lending 1.80%"


N085a · Treasury: zero point eight zero. Total spread: three point four zero per cent.
> 1 N: "Deposit 0.80% · Lending 1.80% · Treasury 0.80% · Total 3.40% ✓"


N086 · Watch the common error: subtracting the three-year transfer rate from the five-year loan gives two point six zero and hides Treasury's mismatch spread.
> 1 C: error card "Don't do 10.20 − 7.60 = 2.60% (hides Treasury's 0.80% mismatch)"


N087 · Finally, return to Divya's opening mini case. Rates fell, borrowers prepaid five-year loans early, and three-year depositors stayed locked in. Which risks hit together?
> 1 S: mixed-risk dashboard "Rate cut + Prepayment + Locked high deposits" · H: 3 s


N088 · Three risks hit together. Maturity mismatch brings liquidity and refinancing risk, and prepayment triggers embedded-option reinvestment risk.
> 1 N: "1. Liquidity/refinancing · 2. Embedded option (reinvestment)" [F9, F10]


N088a · Together, the spread drop is interest-rate risk squeezing the bank's Net Interest Margin.
> 1 N: "1. Liquidity/refinancing · 2. Embedded option (reinvestment) · 3. Interest-rate risk (NIM squeeze)" [F9, F10]


N089 · [seriously] One thing to remember from chapter four: F-T-P slices margin three ways so branches own credit risk and Treasury owns rate and liquidity risk.
> 1 B: box three-way bar; notes dim to grey

## Close

N090 · Mixed check before we finish. One: who approves the Liquidity Policy, and who decides the Transfer Pricing Policy?
> 1 S: mixed check card · H: 3 s


N091 · The Board approves the Liquidity Policy; ALCO decides the Transfer Pricing Policy within Board risk tolerance.
> 1 N: "Board → Liquidity Policy · ALCO → FTP Policy ✓" [F17, F20]


N092 · Two: a fixed-rate deposit has four months left. Does it sit in the three-to-six-month bucket, or non-sensitive?
> 1 H: 3 s


N093 · Over three to six months—its residual maturity bucket. Now fill the blank mind map from memory: five nodes around today's hub.
> 1 N: "3–6 months ✓" [F12] · 2 S: blank mind map with 5 empty slots · H: 5 s


N094 · Check your five nodes: A-L-M objectives and why now, ALCO, Treasury, the five Policies, and F-T-P.
> 1 M: all 5 nodes fill in clockwise


N095 · You can now explain A-L-M's hub role, map Board versus ALCO and Treasury, list five policies and two codes, and compute a three-way F-T-P split.
> 1 C: "You can now" card tied to D1.2, D1.3, C7.1, C7.2, C7.4, C7.5


N096 · Small homework tonight. Split a six per cent deposit and nine point eight per cent loan three ways.
> 1 C: homework card "Dep 6.00% · 3Y FTP 7.00% · 5Y FTP 7.50% · Loan 9.80%"


N096a · Use seven per cent for three-year F-T-P and seven point five per cent for five-year F-T-P.
> 1 C: homework card "Dep 6.00% · 3Y FTP 7.00% · 5Y FTP 7.50% · Loan 9.80%"


N097 · Next class, we cross to asset quality. When does a missed instalment move a borrower from Standard to S-M-A and N-P-A?
> 1 S: preview card "Next: Standard → SMA → NPA"


N098 · [warmly] That wraps up the ALM engine. Sketch the hub and three-way split once tonight, and I'll see you next class.
> 1 S: end card; mind map fades out