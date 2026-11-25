# D07 · "Profit planning, risk aggregation, and capital allocation" · CLASS EDITION (script c1, with cue sheet)
* Status: c1, 2026-11-24 (drafted, linted, and self-checked against teaching_method.md §7, lesson_spec.md, greetings.md, module_D.md §D07, and D07_fact_sheet; ready for independent audit).
* Plan: course/bfm/D/plans_D.md §D07 (v3 depth pass; all 7 depth/D additions covered). Course order v4: D06b → D07 → D07b.
* Syllabus: D6.1 (profit planning), D6.2 (risk aggregation and capital allocation), D6.3 concept half (economic vs regulatory capital).
* Facts: D07_fact_sheet, rows cited as [F1]–[F32]. Sums: D07_numericals (verified two independent ways in Python Decimal). Practice: D07_practice.
* Rule version (opening card): "Banking Regulation Act, 1949 (s. 29, s. 17(1)) · RBI Commercial Banks – Financial Statements Directions, 2025 (Updated 1 Jul 2026) · RBI Commercial Banks – Prudential Norms on Capital Adequacy Directions, 2025 (Updated 9 Jan 2026) · RBI Small Finance Banks – Licensing Guidelines, 2025 (Updated 10 Jan 2026) & PSL Circular (20 Jun 2025) · RBI Payments Banks Licensing Guidelines (2014, balance cap updated 8 Apr 2021) · NaBFID Act, 2021 & RBI AIFI Capital Adequacy Directions, 2025 (Updated 7 Oct 2026) · BCBS Explanatory Note (2005), CAD10 (Jan 2026) & SRP30 · as at 31 December 2026".
* Greeting / goodbye (new, verified unused in greetings.md and C08): greeting "Hello everyone, good to have you with me. Keep your notebook and basic calculator handy, because today we connect profit with risk."; goodbye "That is profit planning and economic capital mapped out. Close the notebook, get some rest, and I will see you next class."
* Story: Two regional heads report the same ₹40 crore annual profit (illustrative). One earned steady interest and fee income; the other booked a one-time treasury gain during a falling-rate year. Two officers at head office debate which profit belongs in next year's plan. All names and rupee figures are illustrative.
* Holds: questions 3–5 s; one-step sums 8 s; "your turn" numerical 15 s; blank mind map 5 s.
* Say it right: "P-and-L" for Profit and Loss; "S-F-B" for Small Finance Bank; "P-S-L" for Priority Sector Lending; "A-N-B-C"; "C-E-O-B-E"; "C-R-A-R"; "N-P-A"; "D-F-I"; "A-I-F-I"; "Nab-fid" for NaBFID; "P-S-B"; "I-C-A-A-P" as "eye-cap"; "P-D", "E-A-D", "L-G-D"; "V-a-R" as "value at risk"; "R-A-R-O-C" as "rah-rock"; "rho" for correlation.
* Not in this video: RAROC formula calculations, hurdle-rate project choice, two-desk RAPM sums, CAPM, WACC, and EVA sums (next class); full Pillar 1 RWA arithmetic (risk module); detailed Third Schedule placement drill (earlier in this module).
* Length: 1,984 spoken words across 100 lines (exact count verified by linter; 0 lines > 25 words; 0 spoken lesson codes; 0 exclamation marks) + ~2.5 min of holds ≈ 14.5 min at 150 wpm. Chapters: warm-up (~1.1 min) · opening (~0.6 min) · Ch 1 Profit planning and the six levers (~3.5 min) · Ch 2 The Indian banking landscape (~2.5 min) · Ch 3 Expected loss, unexpected loss, and economic capital (~3.0 min) · Ch 4 Risk aggregation, concentration, and capital allocation (~3.0 min) · close (~0.8 min).
* Cue sheet: S scene · N note · G glow · M map · C card · B board mark · H hold. Stable picture: the P&L shelf with six levers (three income, three expense) on the left, and the loss distribution curve (EL covered by pricing/provisions; UL covered by capital) on the right.


---

## Warm-up

N001 · [warmly] Hello everyone, good to have you with me. Keep your notebook and basic calculator handy, because today we connect profit with risk.
> 0 C: rule-version card (as at 31 Dec 2026) · 1 S: notebook page; title "Profit Planning, Risk Aggregation & Capital Allocation"


N002 · Quick recall from last class: when a bank is liability-sensitive and market interest rates rise, does Net Interest Income rise or fall?
> 1 S: recall card "Last class: Liability-sensitive + Rates ↑ → NII ?" · H: 4 s


N003 · It falls, because liabilities reprice faster at higher rates than assets do.
> 1 N: "Liability-sensitive + Rates ↑ → NII ↓ ✓"


N004 · One more recall from earlier in this module: when an advance turns non-performing, does the bank keep accruing interest income on it?
> 1 S: recall card "Earlier recall: NPA → Accrue interest?" · H: 3 s


N005 · No. Under Accounting Standard nine and R-B-I norms, interest recognition stops on non-performing advances.
> 1 N: "NPA → Stop interest accrual (AS-9) ✓" [F6]


N006 · Good start. Profit planning, economic capital, and risk-adjusted return appeared across three recent exam cycles from June 2023 to June 2025.
> 1 C: Evidence badge "Profit planning & RAROC: Jun 2023 · Jul 2024 · Jun 2025"


N007 · By the close, you will read the six profit levers, compare bank models, separate expected from unexpected loss, and aggregate economic capital.
> 1 S: stable picture — Six P&L levers (left) + Loss curve EL/UL (right)

## Opening

N008 · Picture two regional heads at annual review, each reporting an illustrative profit of forty crore rupees.
> 1 S: branch card — "Region A: ₹40 cr · Region B: ₹40 cr (illustrative)"


N009 · Region A earned steady interest and fee income from diversified retail and small business loans.
> 1 N: "Region A: Steady interest + fee income"


N010 · Region B made half its profit from one-time bond sales when market yields fell sharply.
> 1 N: "Region B: One-time treasury gain (falling yields)"


N011 · Some of you would plan next year on forty crore from both; others would trust only Region A. Which profit is repeatable?
> 1 C: two-choice card "Plan on both ₹40 cr / Trust Region A" · H: 4 s


N012 · Hold that choice. Let us open the Profit and Loss Account and see how a bank actually plans profit.
> 1 S: transition to Chapter 1

## Chapter 1 · Profit planning and the six levers

N013 · Under section twenty-nine of the Banking Regulation Act, every commercial bank prepares its Profit and Loss Account in Form B.
> 1 N: "BR Act s. 29 → Form B (Third Schedule)" [F1]


N014 · Look at the P-and-L shelf: six operating levers sit on it, three for income and three for expenses.
> 1 S: six-lever board on P&L shelf · 2 M: "Profit planning — Six P&L levers" [F2]


N015 · On the income side sit interest earned under Schedule thirteen, fee and commission income under Schedule fourteen, and treasury trading gains.
> 1 N: "Income: (1) Interest Sch 13 · (2) Fees Sch 14(I) · (3) Treasury Sch 14(II)–(V)" [F1, F2]


N016 · On the expense side sit interest expended under Schedule fifteen, staff costs under Schedule sixteen, and other operating expenses.
> 1 N: "Expense: (4) Interest Sch 15 · (5) Staff Sch 16(I) · (6) Other Opex Sch 16(II)–(XII)" [F1, F2]


N017 · Many of you are thinking profit planning simply means pushing income to the maximum and cutting every cost to the bone.
> 1 C: misconception card "Wrong belief: Profit planning = maximum profit"


N018 · That fails in banking, because the six levers pull against one another and risk grows when you chase yield blindly.
> 1 B: strike "maximum profit" · 2 M: "Profit at acceptable risk" [F3]


N019 · Profit planning means earning sustainable profit at an acceptable level of risk aligned with the Board's risk tolerance.
> 1 N: "Rule: Sustainable profit at acceptable risk (Board risk tolerance)" [F3]


N020 · Remember my opening question about Region B? Treasury gains under Schedule fourteen are volatile and reverse into deductions when yields rise.
> 1 G: "Treasury Sch 14" · 2 N: "Net trading loss = deduction in Sch 14" [F4]


N021 · So Region A's recurring spread and fee income belongs in the core plan, not Region B's lucky bond gain.
> 1 B: circle "Region A"


N022 · What if a bank avoids lending completely and parks heavy funds in Government securities beyond its statutory liquidity requirement?
> 1 S: balance-sheet scale "G-Secs (0% RW) vs Advances" · H: 4 s


N023 · Central and State Government securities carry zero per cent credit risk weight, so they are safe and liquid, but yield less than loans.
> 1 N: "G-Secs: 0% RW, safe & liquid, lower yield" [F5]


N024 · Now look at the opposite trap: lending recklessly creates non-performing assets, which deliver a double hit to the bank.
> 1 N: "NPA double hit:" [F6]


N025 · First, interest income stops on the account. Second, provisions hit the P-and-L above the line, cutting net profit and Tier one capital.
> 1 N: "1) Interest stops · 2) Provisions above the line → profit & CET1 ↓" [F6]


N026 · Worse still, the net unsecured portion of an N-P-A still attracts up to one hundred fifty per cent risk weight.
> 1 N: "Unsecured net NPA: up to 150% RW (if prov < 20%)" [F6]


N027 · And remember one capital-building rule: R-B-I directs commercial banks to transfer at least twenty-five per cent of net profit to Statutory Reserve.
> 1 C: trap card "BR Act s. 17(1) floor: 20% · RBI direction: ≥ 25% to Statutory Reserve" [F7]


N028 · Pause check for Chapter one. Question one: where does a net loss on sale of investments appear in Form B?
> 1 S: pause check Ch 1 · H: 4 s


N029 · As a deduction under Schedule fourteen, Other Income. Question two: do provisions sit above the line or below the line?
> 1 N: "Q1: Sch 14 deduction ✓" [F4] · H: 4 s


N030 · Above the line, before arriving at net profit. One thing to remember: accounting profit is not value created when risk is ignored.
> 1 N: "Q2: Above the line ✓ · Key: Profit at acceptable risk" [F3, F6]

## Chapter 2 · The Indian banking landscape

N031 · Quick recall from Chapter one: why does holding excess Government securities hurt a bank's profit plan?
> 1 S: recall card "Ch 1 recall: Excess G-Secs → ?" · H: 3 s


N032 · Because zero-risk-weight sovereign bonds earn lower yields than commercial advances. Now let us see who competes for that profit in India.
> 1 N: "Excess G-Secs → lower asset yield ✓" [F5] · 2 S: Chapter 2 landscape board


N033 · Modern bank profit planning began after the nineteen ninety-one and nineteen ninety-eight Narasimham Committee reforms.
> 1 M: "Banking landscape — Reforms, SFB/PB, NaBFID, PSBs" · 2 N: "Narasimham I (1991) & II (1998)" [F10]


N034 · Those reforms cut S-L-R from thirty-eight point five per cent and C-R-R from fifteen per cent, deregulated rates, and brought prudential norms.
> 1 N: "Cut SLR (38.5%) & CRR (15%) · Deregulated rates · IRAC & CRAR · Private banks" [F10]


N035 · Today, universal banks also compete alongside differentiated banks: Small Finance Banks and Payments Banks.
> 1 N: "Differentiated banks: SFBs & Payments Banks" [F11, F15]


N036 · Small Finance Banks serve small businesses, small farmers, and micro units, and must keep a minimum capital ratio of fifteen per cent.
> 1 N: "SFBs: Financial inclusion · Min CRAR 15% (Tier 1 ≥ 7.5%)" [F11, F12]


N037 · Watch two fresh rule updates on Small Finance Banks as at thirty-one December twenty twenty-six.
> 1 C: trap card "SFB updates (31 Dec 2026): Old vs Current" [F12, F13]


N038 · First, minimum paid-up voting equity is now three hundred crore rupees, up from two hundred crore, with U-C-B transition at one hundred fifty crore.
> 1 N: "SFB min equity: ₹300 cr (old ₹200 cr) · UCB transition ₹150 cr → ₹300 cr" [F12]


N039 · Second, from financial year twenty twenty-five twenty-six, S-F-B priority sector lending fell from seventy-five per cent to sixty per cent.
> 1 N: "SFB PSL: 60% of ANBC/CEOBE (40% + 20%) · Old trap: 75%" [F13]


N040 · Also, at least fifty per cent of an S-F-B's loan book must be loans up to twenty-five lakh rupees per borrower.
> 1 N: "SFB: ≥ 50% loans ≤ ₹25 lakh · ≥ 25% rural outlets · No subsidiaries" [F14]


N041 · Payments Banks need one hundred crore rupees equity, fifteen per cent capital ratio, and at least three per cent leverage ratio.
> 1 N: "Payments Banks: ₹100 cr equity · 15% CRAR · ≥ 3% leverage" [F15]


N042 · They take only demand deposits up to two lakh rupees per customer, cannot lend, and cannot issue credit cards.
> 1 C: trap card "PB cap: ₹2 lakh (old ₹1 lakh) · No lending · No credit cards" [F16]


N043 · After C-R-R, Payments Banks must put at least seventy-five per cent of demand deposits in short-term S-L-R Government securities.
> 1 N: "PB deployment: ≥ 75% SLR G-Secs/T-Bills (≤ 1 yr) · ≤ 25% SCB deposits" [F17]


N044 · For long-term infrastructure, Parliament created Nab-fid under the twenty twenty-one Act with one lakh crore rupees authorised capital.
> 1 N: "NaBFID Act 2021 · DFI / 1 of 5 AIFIs · Auth cap ₹1,00,000 cr (GoI ≥ 26%)" [F18, F19]


N045 · Many of you think Nab-fid takes retail fixed deposits like a bank. Does it?
> 1 C: misconception card "Does NaBFID accept public deposits?" · H: 3 s


N046 · No. Under section seventeen, Nab-fid raises wholesale bonds and institutional borrowings, never retail public deposits, and is one of five A-I-F-Is.
> 1 B: strike "public deposits" · 2 N: "NaBFID s. 17: Wholesale funding only · No public deposits" [F19, F20]


N047 · Finally, Public Sector Bank mergers on one April twenty twenty merged ten banks into four, leaving twelve Public Sector Banks for scale.
> 1 N: "1 Apr 2020: 10 PSBs → 4 (PNB, UBI, Canara, Indian) · Total: 12 PSBs" [F21]


N048 · Pause check for Chapter two. Question one: what is the current priority sector target for Small Finance Banks?
> 1 S: pause check Ch 2 · H: 3 s


N049 · Sixty per cent of A-N-B-C or C-E-O-B-E, reduced from seventy-five per cent. Question two: can a Payments Bank lend?
> 1 N: "Q1: 60% ✓" [F13] · H: 3 s


N050 · No, Payments Banks cannot lend. One thing to remember: each bank model earns profit inside its own regulatory boundary.
> 1 N: "Q2: No lending ✓ · Key: Model sets profit boundary" [F16]

## Chapter 3 · Expected loss, unexpected loss, and economic capital

N051 · Quick recall from Chapter two: how many Public Sector Banks operate in India after the twenty twenty mergers?
> 1 S: recall card "Ch 2 recall: Number of PSBs?" · H: 3 s


N052 · Twelve Public Sector Banks. Now let us move from the P-and-L shelf to the loss curve on the right side of our board.
> 1 N: "12 PSBs ✓" [F21] · 2 S: loss distribution curve (EL + UL)


N053 · Every lending portfolio suffers some average loss every year. We call that average loss Expected Loss, or E-L.
> 1 N: "Expected Loss (EL) = PD × EAD × LGD" · 2 M: "EL / UL" [F23]


N054 · Expected Loss equals probability of default times exposure at default times loss given default.
> 1 G: "PD × EAD × LGD" [F23]


N055 · Many of you are thinking bank capital is held to absorb Expected Loss. Is that right?
> 1 C: misconception card "Wrong belief: Capital covers Expected Loss" · H: 4 s


N056 · No. Write this down: Expected Loss is a cost of doing business, covered by loan pricing and provisions, never by capital.
> 1 B: box "EL → Pricing & Provisions (NOT capital)" [F23]


N057 · What happens in a bad year when losses spike far above the average? That tail loss above E-L is Unexpected Loss, or U-L.
> 1 N: "Unexpected Loss (UL) = Peak loss above EL up to VaR" [F24]


N058 · Bank capital exists specifically to absorb Unexpected Loss up to a chosen confidence level, such as ninety-nine point nine per cent in Basel.
> 1 B: underline "absorb Unexpected Loss" · 2 N: "Capital → Absorbs UL" [F24]


N059 · Risk is measured by the variability of losses around E-L. Two portfolios with the exact same E-L can have very different U-L.
> 1 S: two loss curves (same EL; wide corporate curve vs narrow retail curve) [F25]


N060 · Large cyclical corporate loans move together in a downturn, creating wide variability and high U-L, whereas granular retail loans show lower correlation.
> 1 N: "High correlation (corporate) → wider UL · Low correlation (retail) → narrower UL" [F25]


N061 · Now compare two capital numbers that candidates often mix up: regulatory capital and economic capital.
> 1 C: comparison card "Regulatory Capital vs Economic Capital" · 2 M: "Economic capital" [F26, F27]


N062 · Regulatory capital is R-B-I's mandatory Pillar one floor: nine per cent C-R-A-R plus two point five per cent buffer, totalling eleven point five per cent.
> 1 N: "Regulatory: RBI Pillar 1 floor (9% + 2.5% CCB = 11.5%)" [F26]


N063 · Economic capital is the bank's internal estimate of capital needed to absorb unexpected losses across all material risks.
> 1 N: "Economic: Internal all-risk estimate (incl. concentration, IRRBB)" [F27]


N064 · They are not the same number. Traditional Return on Assets and Return on Equity also ignore this risk-capital link.
> 1 N: "Regulatory ≠ Economic · ROA & ROE ignore risk" [F8, F27]


N065 · Pause check for Chapter three. Question one: what covers Expected Loss, and what covers Unexpected Loss?
> 1 S: pause check Ch 3 · H: 4 s


N066 · Pricing and provisions cover Expected Loss; capital absorbs Unexpected Loss. Question two: if two portfolios share the same E-L, must they hold identical capital?
> 1 N: "Q1: EL = pricing/provisions · UL = capital ✓" [F23, F24] · H: 4 s


N067 · No, higher correlation widens loss variability and requires more capital. One thing to remember: capital is for unexpected loss, never expected loss.
> 1 N: "Q2: No, higher correlation → higher UL ✓" [F25]

## Chapter 4 · Risk aggregation, concentration, and capital allocation

N068 · Quick recall from Chapter three: which capital number is set internally by the bank across all material risks — regulatory or economic?
> 1 S: recall card "Ch 3 recall: Internal all-risk capital?" · H: 3 s


N069 · Economic capital. Now suppose a bank measures economic capital separately for Corporate Lending and Retail Lending. Can it simply add them?
> 1 N: "Economic capital ✓" [F27] · 2 M: "Aggregation & allocation" · H: 4 s


N070 · Only if both desks always hit peak losses together, meaning correlation rho equals plus one.
> 1 N: "If ρ = +1 → Simple sum: EC1 + EC2 (no diversification)" [F28, F29]


N071 · To aggregate economic capital properly, a bank harmonises the time horizon and confidence level, then uses correlation across business lines.
> 1 N: "Formula: EC_total = √(EC1² + EC2² + 2 × ρ × EC1 × EC2)" [F28, F29]


N072 · Let us work a full sum on the basic calculator. Corporate needs sixty crore rupees economic capital, and Retail needs eighty crore, both illustrative.
> 1 S: calculator board — "EC1 = ₹60 cr · EC2 = ₹80 cr (illustrative)"


N073 · First, with no diversification, correlation plus one: press sixty plus eighty equals one hundred forty crore rupees.
> 1 N: "Case 1 (ρ = +1): 60 + 80 = → ₹140.00 cr" [F29]


N074 · Second, suppose the two desks are uncorrelated, so rho equals zero. The cross term vanishes, leaving sixty squared plus eighty squared under the root.
> 1 N: "Case 2 (ρ = 0): √(60² + 80²)" [F29]


N075 · Press sixty times sixty equals three thousand six hundred. Press eighty times eighty equals six thousand four hundred.
> 1 N: "60 × 60 = 3,600 · 80 × 80 = 6,400"


N076 · Add them to get ten thousand, then press the square root key: exactly one hundred crore rupees.
> 1 N: "3600 + 6400 = 10000 → √ → ₹100.00 cr" · 2 B: box "₹100.00 cr"


N077 · One hundred forty minus one hundred equals forty crore rupees. That forty crore saving is the diversification benefit.
> 1 N: "Diversification benefit = 140 − 100 = ₹40.00 cr" [F29]


N078 · Watch the common mistake: never forget the square root key, and never average sixty and eighty to get seventy.
> 1 C: error card "Common trap: Forgetting √ or taking average ₹70 cr"


N079 · Now a faded twist: suppose sector overlap raises correlation to plus zero point five while profit stays unchanged.
> 1 N: "Faded (ρ = +0.5): Cross term = 2 × 0.5 × 60 × 80 = 4,800" [F30]


N080 · Add four thousand eight hundred to ten thousand to get fourteen thousand eight hundred. Press square root: one hundred twenty-one point six six crore.
> 1 N: "10000 + 4800 = 14800 → √ → ₹121.66 cr" [F29, F30]


N081 · Profit stayed unchanged, yet concentration pushed required capital from one hundred to one hundred twenty-one point six six crore.
> 1 G: "₹121.66 cr" · 2 N: "Concentration ↑ → Capital ↑ (profit unchanged) → RAROC ↓" [F30]


N082 · That is why banks conservatively drop diversification in stress tests, assuming additive losses when correlations spike in a crisis.
> 1 N: "Stress tests often assume ρ = +1 (additive)" [F29]


N083 · Your turn on the basic calculator: Agriculture needs thirty crore economic capital and M-S-M-E needs forty crore. Find aggregated capital at rho equal to zero.
> 1 S: your-turn card "EC1 = ₹30 cr · EC2 = ₹40 cr · ρ = 0 (illustrative)" · H: 15 s


N084 · Nine hundred plus one thousand six hundred equals two thousand five hundred; its square root is fifty crore, saving twenty crore.
> 1 N: "√(900 + 1600) = √2500 = ₹50.00 cr · Benefit = 70 − 50 = ₹20.00 cr ✓" [F29]


N085 · How does this connect to Pillar two? Under R-B-I's capital adequacy directions, every bank runs a Board-approved eye-cap reviewed at least annually.
> 1 N: "Pillar 2 ICAAP: Board-approved · Annual review · Solo & consolidated" [F31]


N086 · Eye-cap captures risks beyond Pillar one, including concentration and banking-book interest rate risk, and allocates capital by risk contribution rather than asset size.
> 1 N: "Allocate by risk contribution (not asset size) · Linked to hurdle rate" [F31, F32]


N087 · Pause check for Chapter four. Question one: if correlation rises toward plus one, does the diversification benefit grow or shrink?
> 1 S: pause check Ch 4 · H: 4 s


N088 · It shrinks toward zero, because losses occur together. Question two: who approves a bank's eye-cap, and how often is it reviewed?
> 1 N: "Q1: Shrinks ✓" [F29] · H: 4 s


N089 · The Board approves it and reviews it yearly. One thing to remember: concentration raises capital even when profit stays unchanged.
> 1 N: "Q2: Board · At least yearly ✓ · Key: Concentration raises capital" [F30, F31]

## Close

N090 · Let us do a quick mixed check across today's whole class. Question one: does Nab-fid accept retail public deposits?
> 1 S: mixed-check card · H: 3 s


N091 · No, Nab-fid funds itself through wholesale bonds and institutional borrowings. Question two: which loss is covered by bank capital — expected or unexpected?
> 1 N: "Mix 1: No public deposits ✓" [F20] · H: 3 s


N092 · Unexpected loss. Question three: if two uncorrelated desks need thirty crore and forty crore capital, why is total capital fifty crore instead of seventy?
> 1 N: "Mix 2: Unexpected loss ✓" [F24] · H: 4 s


N093 · Because imperfect correlation creates a twenty crore diversification benefit.
> 1 N: "Mix 3: Diversification benefit ₹20 cr ✓" [F29]


N094 · Now look at the blank ten o'clock branch of our balance-sheet mind map. Name its four nodes from memory before they appear.
> 1 S: blank Module D Mind Map (Branch 10 o'clock empty) · H: 5 s


N095 · Profit planning and the six levers; the Indian banking landscape; E-L, U-L, and economic capital; and risk aggregation, concentration, and eye-cap allocation.
> 1 M: fill all 4 nodes on Branch 10 o'clock


N096 · You can now map the six profit levers, spot updated S-F-B, Payments Bank, and Nab-fid rules, separate E-L from U-L, and aggregate economic capital.
> 1 C: "You can now" card (D6.1, D6.2, D6.3 concept)


N097 · Remember our scope: we kept all R-A-R-O-C, two-desk performance, and economic value added formulas for the next class.
> 1 N: "Scope: RAROC, RAPM, CAPM/WACC & EVA sums → next class"


N098 · Your small homework tonight: draw the E-L and U-L loss curve from memory, and rework the thirty-and-forty crore sum at correlation zero point five.
> 1 C: homework card "1) Draw EL/UL curve · 2) Compute EC for ₹30 cr & ₹40 cr at ρ = +0.5"


N099 · One question to carry forward: once you allocate economic capital to a business line, how do you test whether its profit beats the hurdle rate?
> 1 C: next-class preview card "Allocated capital → Does profit beat the hurdle rate?"


N100 · That is profit planning and economic capital mapped out. Close the notebook, get some rest, and I will see you next class.
> 1 S: closing card