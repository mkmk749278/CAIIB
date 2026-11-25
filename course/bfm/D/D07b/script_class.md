# D07b · "RAROC, risk-adjusted performance and EVA: the sums" · CLASS EDITION (script c1, with cue sheet)
* Status: c1, 2026-11-24 (drafted, linted, and self-checked against teaching_method.md §7, lesson_spec.md, greetings.md, module_D.md §D07b, and D07b_fact_sheet; ready for independent audit).
* Plan: course/bfm/D/plans_D.md §D07b (v4 split from D07; all 6 v3 additions covered; 5 numericals + homework). Course order v4: D07 → D07b → DR.
* Syllabus: D6.3 (Economic capital and RAROC — three-step RAROC method, hurdle rate, ROA/ROE vs RAROC, project choice & risk-based loan pricing, two-desk RAPM, CAPM, WACC, EVA, EaR vs RAROC).
* Facts: D07b_fact_sheet, rows cited as [F1]–[F28]. Sums: D07b_numericals (all 5 script sums + homework + 3 practice sums verified two independent ways in Python Decimal). Practice: D07b_practice. Map nodes: D07b_map_nodes.
* Rule version (opening card): "RBI Guidance Note on Credit Risk Management (Ch. 9 RAROC Pricing) · RBI Master Direction – Interest Rate on Advances Directions, 2016 (updated 1 Oct 2025) · RBI Commercial Banks – ALM Directions, 2025 (28 Nov 2025) · RBI Commercial Banks – Prudential Norms on Capital Adequacy Directions, 2025 (updated 7 Oct 2026) · BCBS IRB Explanatory Note & Economic Capital Frameworks · BIS & ECB Performance Measurement Papers · Standard Normal Quantiles (NIST) · as at 31 December 2026".
* Greeting / goodbye (new, verified unused in greetings.md): greeting "Welcome back to the desk, everyone. Keep your basic calculator close, because today we put risk and return on the same scale."; goodbye "That is risk-adjusted return and economic value done. Rest well tonight, and I will meet you in the next class for our full module revision."
* Story: Officer Meera at the corporate credit desk of Kaveri Commercial Bank (illustrative) compares two ₹50 crore loans, both priced at 10% interest, to see which one actually creates value after risk and capital charges. All bank names, desks, loans, rates, and figures are illustrative.
* Holds: recall and pause-check questions 3–5 s; one-step sums 8 s; "your turn" numericals 15 s; blank mind map 5 s.
* Say it right: "RAROC" as "RAY-rok"; "RAPM" as "R-A-P-M"; "EVA" as "E-V-A"; "CAPM" as "CAP-em"; "WACC" as "wak"; "ROA", "ROE", "EaR", "NII", "NOPAT", "PAT"; "EL" and "UL"; "two point three three" for 2.33; "ten point three six percent" for 10.36%; "forty-one point nine four" for 41.94.
* Not in this video: six profit-planning variables, Indian banking landscape, and portfolio risk aggregation (previous class); Traditional and Duration Gap calculations and MCLR/EBLR reset mechanics (earlier interest-rate risk classes); regulatory CRAR weights and ICAAP document details (Module B).
* Length: 1855 spoken words across 125 lines + ~2.4 min of holds ≈ 14.8 min at 150 wpm (exact count verified by linter; max 25 words/line; 0 lines > 25 words; 0 exclamation marks; 0 spoken lesson codes).
* Cue sheet: S scene · N note · G glow · M map · C card · B board mark · H hold. Stable picture: a balance scale with risk-adjusted return on the left pan and economic capital at risk on the right pan (continuing the loss curve from the previous class).


---

## Warm-up

N001 · [warmly] Welcome back to the desk, everyone. Keep your basic calculator close, because today we put risk and return on the same scale.
> 0 C: rule-version card (as at 31 Dec 2026) · 1 S: notebook page; title "RAROC, RAPM and EVA: The Sums"


N002 · Put your phone on silent. Let us start with two quick recall questions.
> 1 S: desk icon + 8-function basic calculator icon


N003 · From last class: which loss is covered by pricing and provisions, and which by capital?
> 1 S: recall card "Pricing/provisions vs Capital?" · H: 3 s


N004 · Expected loss is covered by pricing and provisions, while unexpected loss is absorbed by economic capital.
> 1 N: "EL → pricing & provisions | UL → capital ✓" [F1, F2]


N005 · Reach back earlier: what does Earnings at Risk measure over one year?
> 1 S: recall card "What does EaR measure?" · H: 3 s


N006 · Earnings at Risk measures the potential loss in Net Interest Income under interest-rate scenarios over one year.
> 1 N: "EaR = 1-year NII loss under rate shocks ✓" [F27]


N007 · RAROC, RAPM, and EVA appeared across three recent exam cycles and full papers.
> 1 C: exam-signal badge "Tested across 3 recent cycles & full papers"


N008 · Today you will compute RAROC, price a loan for risk, compare two trading desks, and solve CAPM, WACC, and EVA.
> 1 N: goal bar "RAROC → Pricing → RAPM → CAPM / WACC / EVA"

## Opening Branch Moment

N009 · Picture Officer Meera at Kaveri Commercial Bank, an illustrative desk, reviewing two ₹50 crore loans.
> 1 S: credit desk screen (illustrative) showing Loan A (₹50 cr, 10%) and Loan B (₹50 cr, 10%)


N010 · Both loans charge 10% interest and carry the same 7% funding and operating cost.
> 1 N: "Loan A & Loan B: ₹50 cr · Rate 10% · Cost 7%"


N011 · Loan A goes to a strong AA borrower, while Loan B goes to a riskier BB borrower.
> 1 N: "Loan A = AA (low risk) · Loan B = BB (high risk)"


N012 · Some think both earn 3%; others think Loan A earns far more.
> 1 S: balance scale with "?" over Loan A vs Loan B · H: 3 s


N013 · Hold your answer. Chapter two will settle Meera's choice.
> 1 G: highlight balance scale

## Chapter 1 · The Three-Step RAROC Method, Hurdle Rate, and ROA / ROE

N014 · Every RAROC calculation follows three clear steps.
> 1 S: three-step ladder on notebook page · 2 M: node "RAROC" [F4]


N015 · Step one: measure risk via loss distribution or return volatility.
> 1 N: "Step 1: Measure risk (EL, UL, volatility)" [F4]


N016 · Step two: allocate economic capital at a confidence level and horizon, like 99% over one year.
> 1 N: "Step 2: Allocate Economic Capital (confidence & 1-yr horizon)" [F2, F4]


N017 · Step three: measure performance by dividing risk-adjusted return by economic capital.
> 1 N: "Step 3: Measure performance = Return ÷ Economic Capital" [F4, F5]


N018 · Write this down: RAROC equals Revenue minus Costs minus Expected Loss, divided by Economic Capital.
> 1 N: "RAROC = (Revenue − Costs − EL) ÷ Economic Capital" · B: box formula [F5]


N019 · Many of you ask: why not divide by loan size or check ROE?
> 1 S: trap card "Loan amount / ROE?" · H: 3 s


N020 · Dividing by loan size treats safe and risky loans alike, ignoring risk capital.
> 1 C: trap card "Wrong: ÷ Loan amount | Right: ÷ Economic Capital" [F6]


N021 · Traditional ROA divides net income by average total assets, and ROE divides net income by average total equity.
> 1 N: "ROA = Net Income ÷ Avg Assets | ROE = Net Income ÷ Avg Equity" [F10]


N022 · Neither adjusts for risk; higher leverage inflates ROE while hiding asset and solvency risk.
> 1 C: comparison card "ROA/ROE (backward, leverage-distorted) vs RAROC (risk-adjusted)" [F11, F12]


N023 · The hurdle rate is the minimum acceptable return on capital, anchored to cost of equity.
> 1 N: "Hurdle rate = minimum acceptable return on capital" [F8]


N024 · RAROC above hurdle creates value; RAROC below hurdle destroys value.
> 1 N: "RAROC > Hurdle → Accept | RAROC < Hurdle → Reject/Reprice" [F9]


N025 · Let us work Sum one on the basic calculator.
> 1 S: calculator panel opens beside notebook


N026 · An illustrative ₹100 crore loan earns ₹11.50 crore, with ₹8.20 crore costs.
> 1 N: "Sum 1 (illustrative): Loan ₹100 cr · Rev ₹11.50 cr · Cost ₹8.20 cr"


N027 · PD is 1%, LGD 50%, economic capital ₹10 crore, and hurdle rate 15%.
> 1 N: "PD 1% · LGD 50% · EC ₹10 cr · Hurdle 15%"


N028 · Expected loss: 100 × 1 % × 50 % = ₹0.50 crore.
> 1 N: "EL = 100 × 1% × 50% = ₹0.50 cr" [F1]


N029 · Numerator: 11.5 − 8.2 − 0.5 = ₹2.80 crore.
> 1 N: "Keys: 11.5 − 8.2 − 0.5 = ₹2.80 cr" [F5, F7]


N030 · Divide by capital: 2.8 ÷ 10 × 100 = 28.00% RAROC.
> 1 N: "Keys: 2.8 ÷ 10 × 100 = 28.00%" · B: box "28.00%" [F5]


N031 · Common errors: omitting EL gives 33%; dividing by loan size gives 2.80%.
> 1 C: error card "Forgot EL → 33% | ÷ Loan → 2.80% (both wrong)" [F6, F7]


N032 · 28.00% beats the 15% hurdle, so the bank accepts the loan.
> 1 N: "28.00% > 15.00% → Value created (Accept)" [F9]


N033 · Pause now for two quick checks on chapter one.
> 1 S: pause-check banner (Ch 1)


N034 · First, what sits in the RAROC denominator: total loan size or allocated economic capital?
> 1 S: Q1 card "RAROC denominator?" · H: 3 s


N035 · Allocated economic capital, because RAROC measures return per rupee of capital supporting unexpected loss.
> 1 N: "Q1: Economic capital ✓" [F5, F6]


N036 · Second, a bank boosts ROE by cutting equity and adding debt; does that prove better risk-adjusted performance?
> 1 S: Q2 card "Higher ROE via leverage = better?" · H: 4 s


N037 · No, because ROE is not risk-sensitive and rewards leverage risk without charging for unexpected loss or cost of equity.
> 1 N: "Q2: No — ROE ignores leverage & risk ✓" [F11]


N038 · One thing to remember from chapter one: always subtract expected loss on top, and divide by economic capital below.
> 1 G: glow RAROC formula box

## Chapter 2 · Project Choice and Risk-Based Loan Pricing

N039 · Quick recall: what happens when a loan's RAROC falls below the hurdle rate?
> 1 S: recall card "RAROC < Hurdle → ?" · H: 3 s


N040 · It destroys shareholder value, so the bank must reject the proposal or reprice it upward.
> 1 N: "RAROC < Hurdle → Reject or reprice ✓" [F9]


N041 · Back to Meera's two ₹50 crore loans at 10%: ₹5.00 crore revenue, ₹3.50 crore cost.
> 1 S: two-column table "Loan A (AA) vs Loan B (BB)" (illustrative)


N042 · The hurdle rate is 16%. Loan A has ₹0.10 crore expected loss and ₹4.00 crore economic capital.
> 1 N: "Loan A: Rev ₹5.00 · Cost ₹3.50 · EL ₹0.10 · EC ₹4.00 cr"


N043 · Loan B, the BB borrower, has ₹0.40 crore expected loss and ₹8.00 crore economic capital.
> 1 N: "Loan B: Rev ₹5.00 · Cost ₹3.50 · EL ₹0.40 · EC ₹8.00 cr"


N044 · Compute Loan A first: 5 − 3.5 − 0.1 = ₹1.40 crore risk-adjusted return.
> 1 N: "Loan A Net: 5 − 3.5 − 0.1 = ₹1.40 cr" [F5]


N045 · Divide by ₹4 crore economic capital: 1.4 ÷ 4 × 100 = 35.00% RAROC, well above the 16% hurdle.
> 1 N: "Loan A RAROC: 1.4 ÷ 4 × 100 = 35.00% > 16% ✓" [F9, F16]


N046 · Now try Loan B with me: 5 − 3.5 − 0.4 = ₹1.10 crore.
> 1 N: "Loan B Net: 5 − 3.5 − 0.4 = ₹1.10 cr" · H: 5 s


N047 · Divide by ₹8 crore economic capital: press 1.1 ÷ 8 × 100 = to get 13.75%.
> 1 N: "Keys: 1.1 ÷ 8 × 100 = 13.75%" · B: circle "13.75%" [F5, F16]


N048 · Remember my opening question? Both charged 10%, yet Loan A earns 35.00% and Loan B earns 13.75%.
> 1 C: answer card "Loan A: 35.00% (Accept) | Loan B: 13.75% < 16% (Reject)" [F16]


N049 · Many think 10% on Loan B works because it covers 7% cost and 0.80% EL.
> 1 S: trap card "Cost 7% + EL 0.8% = 7.8% < 10% → safe?" · H: 3 s


N050 · That misses the capital charge. Pricing that ignores expected loss and the capital charge underprices risk and erodes capital.
> 1 N: "Break-even Rate = Cost + EL + (EC % × Hurdle)" [F13, F14]


N051 · Under RBI's Interest Rate on Advances Directions, the credit risk premium must reflect rating, expected losses, and collateral.
> 1 N: "RBI: Credit risk premium reflects rating, EL & collateral" [F15]


N052 · Let us price Loan B for the 16% hurdle. Its economic capital is 16% of ₹50 crore.
> 1 N: "Loan B EC% = 8 ÷ 50 = 16% | Hurdle = 16%"


N053 · Capital charge: 16 × 16 ÷ 100 = 2.56%.
> 1 N: "Capital Charge = 16% × 16% = 2.56%" [F14]


N054 · Add 7.00 + 0.80 + 2.56 = 10.36% minimum rate.
> 1 N: "Min Rate = 7.00 + 0.80 + 2.56 = 10.36%" · B: box "10.36%" [F14]


N055 · At 10%, Loan B was underpriced by 36 basis points. That is risk-based loan pricing in action.
> 1 N: "10.36% − 10.00% = 36 bps underpricing" [F13, F14]


N056 · Pause now for two quick checks on chapter two.
> 1 S: pause-check banner (Ch 2)


N057 · First, what four components make up a loan's minimum risk-based interest rate?
> 1 S: Q1 card "4 blocks of break-even rate?" · H: 4 s


N058 · Funding cost, operating cost, expected loss, and the capital charge equal to economic capital percentage times the hurdle rate.
> 1 N: "Q1: Funding + Operating + EL + Capital Charge ✓" [F13, F14]


N059 · Second, under RBI's external benchmark rules, when may a bank raise an existing borrower's credit risk premium?
> 1 S: Q2 card "When can credit risk premium change?" · H: 3 s


N060 · Only when the borrower's credit assessment undergoes a substantial change, as agreed in the loan contract.
> 1 N: "Q2: Only on substantial credit-assessment change ✓" [F15]


N061 · One thing to remember from chapter two: identical interest rates hide very different RAROCs once expected loss and capital enter.
> 1 G: glow "10.36%" box

## Chapter 3 · Two Desks, Equal Profit, Different Volatility: RAPM

N062 · Quick recall from chapter two: if two loans earn equal spread, why does the riskier loan show lower RAROC?
> 1 S: recall card "Why lower RAROC for riskier loan?" · H: 3 s


N063 · Because it carries higher expected loss in the numerator and demands more economic capital in the denominator.
> 1 N: "Higher EL ↓ numerator · Higher EC ↑ denominator ✓" [F16]


N064 · Now onto the treasury floor. Risk-Adjusted Performance Measurement, or RAPM, compares desks with different risk profiles.
> 1 S: treasury floor with FX Desk & Bond Desk · 2 M: node "RAPM" [F17]


N065 · Suppose both desks report ₹6 crore profit. Many assume both performed equally.
> 1 C: trap card "Equal profit ₹6 cr = equal performance?" · H: 3 s


N066 · Not under RAPM. Higher return volatility requires more risk capital, which pulls risk-adjusted performance down.
> 1 N: "Higher volatility → higher Risk Capital → lower RAPM" [F17, F19]


N067 · On a trading desk, risk capital equals the confidence multiplier z times notional position times return volatility.
> 1 N: "Risk Capital = z × Notional × Volatility" · B: box formula [F18]


N068 · Standard normal one-tailed z is 1.645 at 95% and 2.326, or 2.33, at 99%.
> 1 C: z-value reference card "95%: 1.645 | 99%%: 2.326 (≈2.33) | 99.9%: 3.090" [F20
]
	N069 · With only a basic calculator allowed, the exam always gives you z.
	

> 1 N: "Basic calculator only → z is always given in exam" [F20]



N070 · Compare two illustrative desks, each earning ₹6 crore at 99% confidence, z equals 2.33.
> 1 S: two-desk table "FX Desk vs Bond Desk" (illustrative)


N071 · FX Desk runs a ₹200 crore notional book at 6% annual volatility.
> 1 N: "FX Desk: Profit ₹6 cr · Notional ₹200 cr · Vol 6% · z = 2.33"


N072 · Watch the key presses: 200 × 6 % = ₹12.00 crore one-standard-deviation loss.
> 1 N: "FX 1-SD: 200 × 6 % = ₹12.00 cr" [F18]


N073 · Multiply by z: 12 × 2.33 = ₹27.96 crore of required risk capital.
> 1 N: "FX Risk Capital: 12 × 2.33 = ₹27.96 cr" [F18]


N074 · Divide profit by risk capital: 6 ÷ 27.96 × 100 = 21.46% RAPM for FX Desk.
> 1 N: "FX RAPM: 6 ÷ 27.96 × 100 = 21.46%" · B: circle "21.46%" [F19]


N075 · Your turn on Bond Desk: ₹150 crore notional, 12% volatility, ₹6 crore profit, z equals 2.33. Pause and solve.
> 1 S: "Your Turn" card (Bond Desk: ₹150 cr, 12% vol, ₹6 cr profit, z = 2.33) · H: 15 s


N076 · Check your calculator: 150 × 12 % = ₹18 crore, then 18 × 2.33 = ₹41.94 crore risk capital.
> 1 N: "Bond Risk Capital: 150 × 12 % × 2.33 = ₹41.94 cr" [F18]


N077 · Now divide profit by risk capital: 6 ÷ 41.94 × 100 = 14.31% RAPM for Bond Desk.
> 1 N: "Bond RAPM: 6 ÷ 41.94 × 100 = 14.31%" · B: box "14.31%" [F19]


N078 · Watch the trap: skipping z gives 33.33% for Bond Desk, overstating RAPM by 2.33 times.
> 1 C: error card "Forgetting z = 2.33 overstates RAPM by 2.33×" [F18]


N079 · Both earned ₹6 crore, yet FX Desk beat Bond Desk by over seven points.
> 1 N: "FX 21.46% vs Bond 14.31% on identical ₹6 cr profit" [F17, F19]


N080 · Pause now for two quick checks on chapter three.
> 1 S: pause-check banner (Ch 3)


N081 · First, if a desk's volatility doubles while profit and notional stay unchanged, what happens to its RAPM?
> 1 S: Q1 card "Volatility doubles → RAPM?" · H: 3 s


N082 · Its RAPM drops by half, because required risk capital in the denominator doubles.
> 1 N: "Q1: RAPM halves (Risk Capital doubles) ✓" [F18, F19]


N083 · Second, when two desks earn equal rupee profit, which desk creates more value per rupee of risk capital?
> 1 S: Q2 card "Equal profit → which desk wins?" · H: 3 s


N084 · The desk with lower risk capital, meaning lower volatility-scaled exposure, because its RAPM is higher.
> 1 N: "Q2: Lower risk capital → higher RAPM ✓" [F17, F19]


N085 · One thing to remember from chapter three: equal rupee profit never proves equal performance until you divide by z-scaled risk capital.
> 1 G: glow "Risk Capital = z × Notional × Vol"

## Chapter 4 · CAPM, WACC, EVA, and Earnings at Risk vs RAROC

N086 · Quick recall from chapter three: in a two-desk RAPM sum, why must the exam supply the z-value?
> 1 S: recall card "Why is z given in exam?" · H: 3 s


N087 · Because IIBF allows only a basic eight-function calculator without statistical distribution keys.
> 1 N: "Basic 8-function calculator only → z is supplied ✓" [F20]


N088 · RAROC gave us a percentage rate. Now we turn to Economic Value Added, called EVA, an absolute rupee figure.
> 1 S: EVA scale card · 2 M: node "EVA" [F24, F26]


N089 · EVA, developed by Stern and Stewart, equals Profit After Tax minus Invested Capital multiplied by Cost of Capital.
> 1 N: "EVA = PAT (or NOPAT) − (Capital × Cost of Capital)" · B: box formula [F24]


N090 · Quick JAIIB refresher on building Cost of Capital via CAPM and WACC.
> 1 S: JAIIB AFM refresher badge "CAPM + WACC"


N091 · Under CAPM, Cost of Equity equals risk-free rate plus beta times market return minus risk-free rate.
> 1 N: "CAPM: Ke = Rf + β × (Rm − Rf)" [F21]


N092 · RBI's Interest Rate on Advances Directions explicitly recognise CAPM for estimating a bank's minimum desired cost of equity.
> 1 N: "RBI recognises CAPM for bank Cost of Equity" [F22]


N093 · WACC blends equity and after-tax debt: equity weight times Ke, plus debt weight times after-tax Kd.
> 1 N: "WACC = (We × Ke) + [Wd × Kd × (1 − t)]" [F23]


N094 · Let us solve CAPM and WACC for an illustrative ₹1,000 crore bank.
> 1 S: calculator panel (Sum 4, illustrative)


N095 · Take risk-free rate 7%, market return 13%, and bank beta 1.25.
> 1 N: "Rf = 7% · Rm = 13% · β = 1.25"


N096 · Press 13 − 7 = 6% market premium, then × 1.25 = 7.50%.
> 1 N: "Keys: 13 − 7 = 6 × 1.25 = 7.50%" [F21]


N097 · Add back the 7% risk-free rate: Cost of Equity equals 14.50%.
> 1 N: "Keys: 7.5 + 7 = Ke 14.50%" · B: circle "14.50%" [F21]


N098 · Now build WACC: equity is 40%, debt is 60%, pre-tax debt cost is 8%, and tax rate is 25%.
> 1 N: "We 40% · Wd 60% · Kd 8% · Tax 25%"


N099 · First adjust debt for tax: 8 × 0.75 = 6.00% after-tax cost of debt.
> 1 N: "After-tax Kd: 8 × 0.75 = 6.00%" [F23]


N100 · Weight both parts: 0.40 × 14.50 = 5.80%, and 0.60 × 6.00 = 3.60%.
> 1 N: "0.40 × 14.50 = 5.80% | 0.60 × 6.00 = 3.60%" [F23]


N101 · Add them together: 5.80 + 3.60 = 9.40% WACC.
> 1 N: "WACC = 5.80 + 3.60 = 9.40%" · B: box "9.40%" [F23]


N102 · Your turn on EVA: capital is ₹1,000 crore, WACC is 9.40%, and Profit After Tax is ₹85 crore. Pause and solve.
> 1 S: "Your Turn" card (Capital ₹1,000 cr, WACC 9.40%, PAT ₹85 cr) · H: 15 s


N103 · Check your screen: capital charge is 1000 × 9.4 % = ₹94.00 crore.
> 1 N: "Capital Charge: 1000 × 9.4 % = ₹94.00 cr" [F24]


N104 · Subtract ₹94 crore from ₹85 crore: EVA equals minus ₹9.00 crore.
> 1 N: "EVA: 85 − 94 = −₹9.00 cr" · B: box "−₹9.00 cr" [F24, F25]


N105 · ₹85 crore profit looks good, yet negative EVA proves ₹9 crore of wealth was destroyed.
> 1 C: trap card "PAT +₹85 cr (debt interest only) ≠ EVA −₹9 cr (full capital charge)" [F25]


N106 · Accounting profit deducts debt interest only; EVA deducts the full cost of debt and equity.
> 1 N: "Accounting profit ignores cost of equity; EVA deducts full WACC" [F25]


N107 · One final contrast exams love: Earnings at Risk versus RAROC.
> 1 C: comparison card "EaR vs RAROC" [F27, F28]


N108 · EaR measures one-year rupee NII loss from rate shifts; RAROC measures percentage return on economic capital.
> 1 N: "EaR = 1-yr NII shock (₹, IRR) | RAROC = Return ÷ EC (%, all risks)" [F27, F28]


N109 · Pause now for two quick checks on chapter four.
> 1 S: pause-check banner (Ch 4)


N110 · First, in WACC, why do we multiply debt cost by one minus tax rate, but not equity cost?
> 1 S: Q1 card "Why (1 − t) on debt only?" · H: 4 s


N111 · Because debt interest is tax-deductible, whereas equity returns and dividends do not carry a tax shield.
> 1 N: "Q1: Debt interest is tax-deductible; equity is not ✓" [F23]


N112 · Second, a bank posts ₹40 crore profit after tax against a ₹45 crore capital charge; did it create or destroy value?
> 1 S: Q2 card "PAT ₹40 cr vs Charge ₹45 cr?" · H: 3 s


N113 · It destroyed ₹5 crore of economic value, because EVA is minus ₹5 crore.
> 1 N: "Q2: Destroyed value (EVA = −₹5 cr) ✓" [F24, F25]


N114 · One thing to remember from chapter four: positive accounting profit still means negative EVA when it fails to cover WACC.
> 1 G: glow "EVA = −₹9.00 cr" box

## Close

N115 · Before we close, one mixed check combining our tools. Pause and answer both together.
> 1 S: mixed-check card (2 items)


N116 · One: if a loan's RAROC equals its hurdle rate, what is its EVA? Two: does EaR replace RAROC for loan pricing?
> 1 S: Q1 "RAROC = Hurdle → EVA?" · Q2 "Does EaR replace RAROC?" · H: 5 s


N117 · First, EVA is zero, because return matches the capital charge. Second, no, EaR tracks interest-rate NII loss, not capital-adjusted loan pricing.
> 1 N: "Mixed Check: (1) EVA = ₹0 ✓ | (2) No — EaR is 1-yr IRR NII ✓" [F26, F28]


N118 · Now look at the blank balance-sheet map for today's branch. Name our three new nodes from memory before they appear.
> 1 S: blank branch on Mind Map D (3 empty boxes) · H: 5 s


N119 · Node one: RAROC, covering the three-step method, hurdle rate, ROA/ROE contrast, and risk-based loan pricing.
> 1 M: fill "RAROC" [F4, F5, F11, F13]


N120 · Node two: RAPM, comparing desks on equal profit using z-scaled risk capital.
> 1 M: fill "RAPM" [F17, F18, F19]


N121 · Node three: EVA, combining CAPM and WACC to measure absolute rupee value creation, distinct from Earnings at Risk.
> 1 M: fill "EVA" [F21, F23, F24, F28]


N122 · You can now solve RAROC, risk-based pricing, two-desk RAPM, CAPM, WACC, and EVA.
> 1 C: "You can now" checklist (D6.3)


N123 · Homework tonight: ₹500 crore capital, 10% WACC, ₹62 crore PAT. Compute EVA two ways.
> 1 C: homework card "Capital ₹500 cr · WACC 10% · PAT ₹62 cr → EVA?"


N124 · Next class, we pull the entire balance-sheet map together for a complete Module D revision.
> 1 S: preview card "Next class: Module D Revision"


N125 · [warmly] That is risk-adjusted return and economic value done. Rest well tonight, and I will meet you in the next class for our full module revision.
> 1 S: closing card with complete Mind Map D