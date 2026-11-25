# D01 · "The bank's balance sheet and P&L" · CLASS EDITION (script c1, with cue sheet)
* Status: c1, 2026-11-24 (drafted, linted, and self-checked against teaching_method.md §7, lesson_spec.md, greetings.md, module_D.md §D01, and D01_fact_sheet; ready for independent audit).
* Plan: course/bfm/D/plans_D.md §D01 (v4 split: D01 = D1.1; D1.2, D1.3, C7 move to D01b; all 6 v3 additions covered). Course order v4: C09b → D01 → D01b → D02.
* Syllabus: D1.1 (Components of a bank's balance sheet — Third Schedule Form A and Form B, Schedules 1–16, behaviour of each item, placement traps, P&L heads drill, call/notice/term money tenors, contingent liabilities).
* Facts: D01_fact_sheet, rows cited as [F1]–[F40]. Sums: D01_numericals (no exam numericals per plan; illustrative identity and P&L verification sums checked two ways in Python Decimal). Practice: D01_practice. Map nodes: D01_map_nodes.
* Rule version (opening card): "Banking Regulation Act 1949 ss. 9, 17, 26A, 29–33 & Third Schedule (S.O. 240(E) 26 Mar 1992) · RBI Commercial Banks – Financial Statements: Presentation and Disclosures Directions 2025 (updated 1 Jul 2026; 5th Amdt 16 Mar 2026; 6th Amdt 18 May 2026, IFR discontinued; 7th & 8th Amdts eff. 1 Apr 2027 issued, coming) · RBI Call, Notice and Term Money Markets Directions 2021 (updated 8 Jun 2023) · RBI Commercial Banks – CRR and SLR Directions 2025 (updated 9 Oct 2026) · RBI Commercial Banks – Investment Portfolio Directions 2025 (updated 1 Oct 2026) · RBI Commercial Banks – IRACP Directions 2025 (updated 1 Oct 2026) · as at 31 December 2026".
* Greeting / goodbye (new, verified unused in greetings.md): greeting "Hello everyone, welcome to Module D. Open a fresh notebook page, because today we read the bank's whole balance sheet."; goodbye "That is the balance sheet and profit account mapped cleanly. Rest well tonight, and I will meet you in the next class."
* Story: Branch Manager Meera at Deccan Commercial Bank (illustrative) opens her bank's annual report on her phone after closing and asks a new officer where the bank's money comes from and where it goes. All bank names, figures, and items are illustrative.
* JAIIB prerequisite: AFM final accounts of banking companies (Form A and Form B). Refresher: both forms shown together on one screen in Chapter 1.
* Holds: recall and check questions 3–5 s; placement and P&L drill beats 4–5 s; blank mind map 5 s.
* Say it right: "Form A", "Form B"; "Section twenty-nine" on first use, then "twenty-nine"; "P and L" for P&L; "R-B-I"; "C-R-R", "S-L-R"; "N-D-T-L"; "N-P-A", "N-P-I"; "G-Secs" as "GEE-seks"; "NABARD" as "na-BARD"; "EXIM" as "EK-sim"; "D-I-C-G-C"; "I-F-R"; "P-S-L-C"; "Ind A-S"; "E-C-L"; "D-E-A Fund".
* Not in this video: ALM, ALCO, treasury execution, and Funds Transfer Pricing (next class); IRACP NPA ageing and provisioning percentages (later in Module D); Basel III capital calculation and off-balance-sheet CCFs (Module B); LCR and NSFR ratios (Module B).
* Length: 1,992 spoken words across 117 lines + ~2.3 min of holds ≈ 15.5 min at 150 wpm (exact count verified by linter; max 24 words/line; 0 lines > 25 words; 0 spoken lesson codes; 0 exclamation marks).
* Cue sheet: S scene · N note · G glow · M map · C card · B board mark · H hold. Stable picture: two shelves (Sources / Capital & Liabilities left; Uses / Assets right) plus a dotted shelf below for Contingent Liabilities.


---

## Warm-up

N001 · [warmly] Hello everyone, welcome to Module D. Open a fresh notebook page, because today we read the bank's whole balance sheet.
> 0 C: rule-version card (as at 31 Dec 2026) · 1 S: notebook page; title "The Bank's Balance Sheet and P&L"


N002 · Put your phone on silent. Let us start with two quick recall questions from earlier classes.
> 1 S: warm-up desk icon


N003 · From risk management: what is the current Statutory Liquidity Ratio commercial banks must maintain against NDTL?
> 1 S: recall card "Current SLR % of NDTL?" · H: 3 s


N004 · Eighteen per cent of NDTL, held in cash, bullion, excess CRR, or unencumbered approved Government Securities.
> 1 N: "SLR = 18% of NDTL ✓" [F21]


N005 · From treasury: what are the three books in an integrated treasury, and which holds sovereign bonds?
> 1 S: recall card "Three books of treasury?" · H: 3 s


N006 · Money market, securities, and forex, with Government Securities held inside the investment portfolio.
> 1 N: "Money market · Securities · Forex ✓" [F21]


N007 · Balance sheet components and profit account heads appear regularly in recent exam cycles as classification questions.
> 1 C: exam-signal badge "Tested in recent cycles: sources vs uses, Schedule placement, P&L heads"


N008 · Stay with me, and you will place every balance-sheet and profit-account item into its exact schedule.
> 1 N: goal bar "Law & Forms → Item Behaviour → Traps → P&L Drill"

## Opening Branch Moment

N009 · Picture Branch Manager Meera at Deccan Commercial Bank, an illustrative branch, opening the annual report on her phone.
> 1 S: phone screen showing bank annual report (illustrative)


N010 · She asks a new officer two plain questions: where does the bank's money come from, and where does it go?
> 1 S: split callout "Where from?" vs "Where to?"


N011 · Some of you think customer deposits are assets, because the branch celebrates every new fixed deposit it mobilises.
> 1 C: thought bubble A "Deposits = Assets?"


N012 · Others know deposits are liabilities, yet hesitate on NABARD refinance, corporate debentures, or deposit insurance premium.
> 1 C: thought bubble B "Deposits = Liabilities, but where go refinance & debentures?"


N013 · Hold that thought. Let us build the legal frame first, and every item will fit its shelf.
> 1 S: two empty shelves appearing on screen + dotted shelf below

## Chapter 1 · The Law and the Forms (Third Schedule Map)

N014 · Every bank's financial statements follow a fixed statutory format, not a format chosen by management.
> 1 S: Chapter 1 title "The Law and the Forms"


N015 · Under Section twenty-nine of the Banking Regulation Act, nineteen forty-nine, every banking company prepares a Balance Sheet and P&L.
> 1 N: "BR Act 1949 s. 29 → mandatory Balance Sheet & P&L" [F1]


N016 · Indian banks cover all their business, while foreign banks cover all business transacted through their Indian branches.
> 1 N: "Indian banks: all business · Foreign banks: Indian branches" [F1]


N017 · Both statements are drawn as on thirty-first March, in the forms set out in the Third Schedule.
> 1 N: "Year-end: 31 March · Third Schedule Forms" [F2] · M: node "Form A/B"


N018 · Quick JAIIB refresher: Form A is the Balance Sheet, and Form B is the Profit and Loss Account.
> 1 S: one-screen map showing Form A (left) and Form B (right) [F2]


N019 · Unlike a company's balance sheet, Form A has no split between current and non-current assets or liabilities.
> 1 C: contrast card "Companies Act: Current/Non-Current vs BR Act Form A: No split" [F7]


N020 · Who holds the statutory power to amend the Third Schedule forms?
> 1 S: question card "Who amends the Third Schedule?" · H: 3 s


N021 · Only the Central Government, by Official Gazette notification after at least three months' notice.
> 1 N: "Amended by Central Govt · ≥ 3 months' notice" [F3]


N022 · Who must sign Form A and Form B before audit and publication?
> 1 S: question card "Who signs the accounts?" · H: 3 s


N023 · For an Indian bank, the principal officer and at least three directors, or all directors if three or fewer.
> 1 N: "Indian bank: Principal Officer + ≥ 3 directors (or all if ≤ 3)" [F4]


N024 · For a foreign bank, the manager or agent of its principal office in India signs them.
> 1 N: "Foreign bank: Manager/Agent of principal office in India" [F4]


N025 · Under Section thirty, a qualified auditor audits them, and appointing or removing that auditor needs prior RBI approval.
> 1 N: "s. 30 Audit: prior RBI approval to appoint/remove" [F5]


N026 · Under Section thirty-one, three copies go to RBI within three months of year-end, extendable up to three more months.
> 1 N: "s. 31: 3 copies to RBI within 3 months (+3 mo max ext.)" [F6]


N027 · Banks follow the Companies Accounting Standards Rules, because Ind AS for banks remains deferred till further notice.
> 1 N: "Companies AS Rules apply · Ind AS deferred" [F8]


N028 · Look at the complete sixteen-schedule map on one screen. Write this down, because exam questions test these numbers directly.
> 1 S: full one-screen map of Schedules 1–16 [F10]


N029 · Form A has twelve schedules: Schedules one to five are Sources of Funds, Schedules six to eleven are Uses.
> 1 N: "Sch 1–5: Capital & Liabilities · Sch 6–11: Assets" [F10] · B: box around 1–5 and 6–11


N030 · Below the total sits Schedule twelve Contingent Liabilities, followed by Bills for Collection with no schedule number.
> 1 N: "Below total: Sch 12 Contingent Liabilities · Bills for Collection (no Sch #)" [F10, F25]


N031 · Form B uses Schedules thirteen to sixteen: Interest Earned, Other Income, Interest Expended, and Operating Expenses.
> 1 N: "Form B: Sch 13 Int Earned · 14 Other Inc · 15 Int Exp · 16 OpEx" [F33–F36]


N032 · Pause now for Chapter one checks. First: which schedule holds Contingent Liabilities, and what number carries Bills for Collection?
> 1 S: Pause Check 1 (Q1) · H: 4 s


N033 · Contingent Liabilities is Schedule twelve, while Bills for Collection sits in summary below it with no schedule number.
> 1 N: "Q1: Sch 12; Bills for Collection has no schedule ✓" [F25]


N034 · Second: within how many months must three copies of audited accounts reach RBI, and what is the maximum extension?
> 1 S: Pause Check 1 (Q2) · H: 4 s


N035 · Within three months from year-end, extendable by RBI by up to three further months under Section thirty-one.
> 1 N: "Q2: 3 months + up to 3 months extension ✓" [F6]


N036 · One thing to remember: Section twenty-nine fixes Form A, Form B, and all sixteen schedules by law.
> 1 C: takeaway bar "s. 29 → Form A (Sch 1–12) · Form B (Sch 13–16)" [F1, F10]

## Chapter 2 · Each Item and Why It Behaves So

N037 · Quick recall: does Form A separate current assets from non-current assets?
> 1 S: Chapter 2 title "Each Item and Why It Behaves So" · H: 3 s


N038 · No, the Third Schedule Form A has no current versus non-current split.
> 1 N: "No current/non-current split ✓" [F7]


N039 · Now let us answer Meera's question by loading our two shelves: Sources on the left, Uses on the right.
> 1 S: two-shelf diagram filling item by item · M: node "Components"


N040 · Both shelves always balance: every rupee raised on the left sits in an asset on the right.
> 1 N: "Total Capital & Liabilities = Total Assets" [F10]


N041 · Left shelf, Schedule one is Capital: paid-up equity and Tier one perpetual non-cumulative preference shares.
> 1 N: "Sch 1 Capital: permanent, loss-absorbing, repaid last" [F11]


N042 · Capital is permanent, absorbs losses first, and stands last in line for repayment if a bank winds up.
> 1 G: glow on "loss-absorbing" [F11]


N043 · Schedule two is Reserves and Surplus: Statutory Reserve, Capital Reserve, Share Premium, Revenue Reserves, and P&L balance.
> 1 N: "Sch 2 Reserves: retained profit; Capital Reserve not for dividend" [F12]


N044 · Watch two Reserve rules. Section seventeen sets a twenty per cent floor, but RBI mandates twenty-five per cent for commercial banks.
> 1 C: trap card "BR Act s. 17 floor: 20% vs RBI Commercial Bank rule: ≥ 25% of net profit" [F13]


N045 · Also, RBI discontinued the Investment Fluctuation Reserve on eighteen May twenty twenty-six, removing it from Schedule two Revenue Reserves.
> 1 C: 2026 update badge "IFR discontinued 18 May 2026; deleted from Sch 2(IV)" [F14]


N046 · Schedule three is Deposits: Demand, Savings Bank, and Term Deposits, split by India and outside India.
> 1 N: "Sch 3 Deposits: main & cheapest source; liability of bank" [F15]


N047 · Deposits are liabilities because the bank owes them back, and demand deposits carry the highest withdrawal risk.
> 1 B: underline "liabilities" · G: glow on "demand deposits = highest liquidity risk" [F15]


N048 · Schedule four is Borrowings: from RBI, other banks, institutions like NABARD and EXIM Bank, outside India, plus Tier two debt.
> 1 N: "Sch 4 Borrowings: costlier & more volatile than retail deposits" [F16]


N049 · Borrowings cost more and roll over faster than retail deposits, so heavy reliance raises funding risk.
> 1 G: glow on "costlier & more volatile" [F16]


N050 · Schedule five is Other Liabilities and Provisions: bills payable, net credit inter-office adjustments, accrued interest, tax, and standard asset provisions.
> 1 N: "Sch 5 Other Liabilities & Provisions" [F17]


N051 · Now the right shelf, Uses of Funds. Schedule six is Cash in hand and Balances with RBI.
> 1 N: "Sch 6 Cash & RBI: non-earning; CRR 3% earns zero" [F18]


N052 · Cash and CRR balances earn zero interest, while RBI balances above CRR act as liquid settlement buffers.
> 1 G: glow on "zero interest" [F18]


N053 · Schedule seven is Balances with Banks and Money at Call and Short Notice, for tenors up to fourteen days.
> 1 N: "Sch 7 Banks & Call/Short Notice (≤ 14 days)" [F19]


N054 · From our money market class: Call Money is overnight, Notice Money is two to fourteen days, Term Money is fifteen days to one year.
> 1 C: tenor strip "Call: 1 day · Notice: 2–14 days · Term: 15 days–1 yr (unsecured)" [F20]


N055 · Schedule eight is Investments: Government Securities, other approved securities, shares, debentures and bonds, subsidiaries, and others.
> 1 N: "Sch 8 Investments: G-Secs dominate (18% SLR + liquidity)" [F21]


N056 · Government Securities dominate Schedule eight because of the eighteen per cent SLR mandate and ready repo liquidity.
> 1 G: glow on "18% SLR + liquidity" [F21]


N057 · Schedule nine is Advances, net of NPA provisions: the highest-yielding asset and the biggest source of credit risk.
> 1 N: "Sch 9 Advances: highest return & highest credit risk (net of NPA prov.)" [F22]


N058 · Schedule ten is Fixed Assets, and Schedule eleven is Other Assets like advance tax and non-banking assets.
> 1 N: "Sch 10 Fixed Assets & Sch 11 Other Assets: non-earning" [F23, F24]


N059 · Fixed assets are non-earning, and non-banking assets acquired against bad loans must be disposed within seven years under Section nine.
> 1 C: note card "BR Act s. 9: Non-banking assets held max 7 yrs (+5 yrs RBI ext.)" [F24]


N060 · Below sits the dotted shelf: Schedule twelve Contingent Liabilities — guarantees, letters of credit, forward forex, and DEA Fund claims.
> 1 S: dotted shelf glowing "Sch 12 Contingent Liabilities (off-balance-sheet)" [F25]


N061 · They sit off the balance sheet pending a future event, yet as we saw in credit risk, they still require capital.
> 1 N: "Off-balance-sheet → triggers capital via CCF if called" [F25]


N062 · Pause now for Chapter two checks. First: which asset schedule earns zero interest on mandatory balances, and which yields highest?
> 1 S: Pause Check 2 (Q1) · H: 4 s


N063 · Schedule six Cash and CRR balances earn zero interest, while Schedule nine Advances yield highest with highest credit risk.
> 1 N: "Q1: Sch 6 zero interest; Sch 9 highest return & credit risk ✓" [F18, F22]


N064 · Second: what separates Call Money, Notice Money, and Term Money?
> 1 S: Pause Check 2 (Q2) · H: 4 s


N065 · Tenor: Call is overnight, Notice is two to fourteen days, and Term is over fourteen days up to one year.
> 1 N: "Q2: Call 1d · Notice 2–14d · Term 15d–1yr ✓" [F20]


N066 · One thing to remember: every schedule trades off cost, stability, liquidity, and earning power.
> 1 C: takeaway bar "Left = cost & stability · Right = liquidity, yield & risk" [F10–F25]

## Chapter 3 · Placement Traps

N067 · Quick recall: what percentage of net profit must a commercial bank transfer to Statutory Reserve?
> 1 S: Chapter 3 title "Placement Traps" · H: 3 s


N068 · At least twenty-five per cent under RBI directions, above the twenty per cent floor in Section seventeen.
> 1 N: "≥ 25% of net profit (s. 17 floor is 20%) ✓" [F13]


N069 · Now let us test six classic placement traps. First: a customer's fixed deposit matured last month and remains unpaid.
> 1 S: Trap Card 1 "Matured / Overdue Term Deposit" · H: 3 s


N070 · Many of you think it leaves Deposits and moves to Schedule five Other Liabilities. That is wrong.
> 1 C: Trap 1 Wrong "Sch 5 Other Liabilities ✗"


N071 · Matured or overdue term deposits stay in Schedule three Deposits, reclassified under Demand Deposits because they are payable on demand.
> 1 C: Trap 1 Right "Sch 3(I) Demand Deposits ✓" [F26]


N072 · Second trap: interest accrued on term deposits that is not yet due. Does it sit in Schedule three?
> 1 S: Trap Card 2 "Interest accrued but not due on deposits" · H: 3 s


N073 · No. Accrued interest not yet due sits under Schedule five Other Liabilities, excluded from Deposits.
> 1 C: Trap 2 Right "Sch 5(III) Interest Accrued ✓" [F27]


N074 · Third trap: refinance from NABARD or EXIM Bank, or RBI repo borrowing. Where does it go?
> 1 S: Trap Card 3 "NABARD / EXIM / RBI Refinance" · H: 3 s


N075 · Always under Schedule four Borrowings, never Deposits, while the underlying loans stay gross in Schedule nine.
> 1 C: Trap 3 Right "Sch 4 Borrowings; Advances stay gross ✓" [F28]


N076 · Fourth trap: bills payable like demand drafts, net credit inter-office adjustments, and Standard Asset provisions.
> 1 S: Trap Card 4 "Bills Payable · Inter-office · Standard Asset Prov." · H: 3 s


N077 · All three sit in Schedule five Other Liabilities; Standard Asset provisions are never netted from Schedule nine Advances.
> 1 C: Trap 4 Right "Sch 5 Other Liabilities & Provisions ✓" [F17, F31]


N078 · One coming change: from one April twenty twenty-seven under Expected Credit Loss rules, that line becomes Stage one and two provisions.
> 1 C: badge "Issued, coming (1 Apr 2027): Stage 1 & 2 ECL provisions in Sch 5" [F40]


N079 · Fifth trap: the bank buys corporate debentures. Many officers put them in Advances because they fund a company.
> 1 S: Trap Card 5 "Corporate Debentures" · H: 3 s


N080 · Wrong. Corporate debentures and bonds always sit in Schedule eight Investments, never Schedule nine Advances.
> 1 C: Trap 5 Right "Sch 8(I)(iv) Investments ✓" [F30]


N081 · Sixth trap: Schedule nine splits advances by security — tangible assets, bank or government guarantee, or unsecured.
> 1 S: Trap Card 6 "Advances by Security" [F22]


N082 · If an infrastructure borrower pledges project rights or licences, is that loan secured or unsecured?
> 1 S: question card "Rights & licences as collateral?" · H: 3 s


N083 · Unsecured. Rights, licences, and authorisations are not tangible security, so they sit under Unsecured in Schedule nine.
> 1 C: Trap 6 Right "Rights/licences = Unsecured in Sch 9 B(iii) ✓" [F32]


N084 · Also watch staff loans: interest-bearing staff loans sit in Schedule nine, while non-interest-bearing staff loans sit in Schedule eleven.
> 1 N: "Staff loans: interest-bearing → Sch 9 · non-interest-bearing → Sch 11" [F32]


N085 · Pause now for Chapter three checks. First: where go an overdue fixed deposit and NABARD refinance?
> 1 S: Pause Check 3 (Q1) · H: 4 s


N086 · Overdue fixed deposit goes to Schedule three Demand Deposits, and NABARD refinance goes to Schedule four Borrowings.
> 1 N: "Q1: Overdue FD → Sch 3(I) · Refinance → Sch 4 ✓" [F26, F28]


N087 · Second: where go corporate debentures and a net debit inter-office adjustment balance?
> 1 S: Pause Check 3 (Q2) · H: 4 s


N088 · Corporate debentures go to Schedule eight Investments, and net debit inter-office adjustments go to Schedule eleven Other Assets.
> 1 N: "Q2: Debentures → Sch 8 · Net debit IOA → Sch 11 ✓" [F29, F30]


N089 · One thing to remember: check the item's legal nature, not its branch nickname.
> 1 C: takeaway bar "Overdue FD → Sch 3 · Refinance → Sch 4 · Debentures → Sch 8" [F26, F28, F30]

## Chapter 4 · The P&L Heads Drill (Form B)

N090 · Quick recall: where do Standard Asset provisions sit on Form A?
> 1 S: Chapter 4 title "The P&L Heads Drill" · H: 3 s


N091 · Under Schedule five Other Liabilities and Provisions, never netted against Schedule nine Advances.
> 1 N: "Standard Asset provisions → Sch 5 (not netted from Sch 9) ✓" [F31]


N092 · Open Form B, the Profit and Loss Account: two income schedules, two expense schedules, and one separate provisions line.
> 1 S: Form B layout (Sch 13, Sch 14 | Sch 15, Sch 16, Provisions) · M: node "P&L heads" [F33–F38]


N093 · Schedule thirteen is Interest Earned: interest and discount on advances, investment income, and interest on RBI or interbank funds.
> 1 N: "Sch 13 Interest Earned (accrual on Standard only; NPA cash basis)" [F33]


N094 · Schedule fourteen is Other Income: commission and brokerage, net profit on investment sale or revaluation, forex profit, and miscellaneous income.
> 1 N: "Sch 14 Other Income: fee, net inv. sale/reval, forex, PSLC sale" [F34]


N095 · Schedule fifteen is Interest Expended: interest on deposits, borrowings, refinance, plus broken period interest expensed on G-Secs.
> 1 N: "Sch 15 Interest Expended (NII = Sch 13 − Sch 15)" [F35]


N096 · Schedule sixteen is Operating Expenses: staff costs, rent and municipal taxes, printing, advertisement, depreciation, audit fees, and insurance.
> 1 N: "Sch 16 Operating Expenses (12 sub-heads)" [F36]


N097 · Watch the biggest Form B trap: many officers place Provisions and Contingencies inside Schedule sixteen Operating Expenses.
> 1 C: trap card Wrong "Provisions inside Sch 16 Operating Expenses ✗"


N098 · Wrong. Provisions and Contingencies — for NPA, NPI, and income tax — sits outside Schedule sixteen, booked above the line.
> 1 C: trap card Right "Provisions & Contingencies = separate line outside Sch 16 (above the line) ✓" [F38]


N099 · Now a five-item P&L drill. Say the schedule aloud during each pause. Item one: DICGC deposit insurance premium.
> 1 S: P&L Drill item 1 "DICGC deposit insurance premium" · H: 4 s


N100 · Schedule sixteen Operating Expenses under Insurance, with a mandatory timely-payment note from April twenty twenty-six.
> 1 N: "1. DICGC premium → Sch 16(XI) Insurance ✓" [F37]


N101 · Item two: depreciation on bank buildings, including leasehold properties and non-banking assets.
> 1 S: P&L Drill item 2 "Depreciation incl. leasehold & non-banking assets" · H: 4 s


N102 · Schedule sixteen Operating Expenses under Depreciation on bank's property.
> 1 N: "2. Depreciation (incl. leasehold) → Sch 16(V) ✓" [F36]


N103 · Item three: net profit on sale of investments and net profit on revaluation of investments.
> 1 S: P&L Drill item 3 "Net profit on sale / revaluation of investments" · H: 4 s


N104 · Schedule fourteen Other Income, whereas provision for non-performing investments goes to Provisions and Contingencies.
> 1 N: "3. Inv. sale/reval → Sch 14 (NPI prov. → Provisions) ✓" [F34, F38]


N105 · Item four: printing publicity brochures, versus printing regular branch forms.
> 1 S: P&L Drill item 4 "Publicity printing vs branch forms" · H: 4 s


N106 · Both sit in Schedule sixteen, but publicity printing goes under Advertisement, while regular forms go under Printing and Stationery.
> 1 N: "4. Publicity printing → Sch 16(IV) · Forms → Sch 16(III) ✓" [F36]


N107 · Item five: provision for income tax, versus municipal property tax on a branch building.
> 1 S: P&L Drill item 5 "Income tax provision vs municipal tax" · H: 4 s


N108 · Municipal tax goes under Schedule sixteen Rent, Taxes and Lighting, while income tax goes to Provisions and Contingencies.
> 1 N: "5. Municipal tax → Sch 16(II) · Income tax → Provisions ✓" [F36, F38]


N109 · One thing to remember: Provisions and Contingencies stays outside Schedule sixteen, deducted above the line to reach Net Profit.
> 1 C: takeaway bar "Sch 13 + 14 − Sch 15 − Sch 16 − Provisions = Net Profit" [F38, F39]

## Close

N110 · Mixed check across the lesson: name the exact schedule for overdue fixed deposit, corporate debenture, and DICGC premium.
> 1 S: Mixed Check card (3 items) · H: 5 s


N111 · Overdue fixed deposit is Schedule three Demand Deposits, corporate debenture is Schedule eight Investments, and DICGC premium is Schedule sixteen.
> 1 N: "Sch 3(I) · Sch 8(I)(iv) · Sch 16(XI) ✓" [F26, F30, F37]


N112 · Look at our blank Module D mind map. Fill in today's three branches from memory before I reveal them.
> 1 S: blank Mind Map D (two shelves centre, 3 empty branches) · H: 5 s


N113 · First, Form A and Form B under Section twenty-nine; second, the twelve Balance Sheet components; third, the four P&L heads.
> 1 M: reveal full nodes "Form A/B" · "Components" · "P&L heads"


N114 · You can now read Third Schedule statements, spot all six placement traps, and classify every P&L head cleanly.
> 1 C: "You can now (D1.1): Read Form A & Form B · Spot traps · Classify P&L"


N115 · Homework tonight: draw the sixteen-schedule map from memory and mark NABARD refinance, standard asset provisions, and income tax.
> 1 C: homework card "Draw Sch 1–16 map + mark Refinance, Std Asset Prov., Income Tax"


N116 · Think about this for next class: if deposits are short-term and loans are long-term, how does a bank manage that mismatch?
> 1 S: preview card "Short deposits vs long loans — who manages the mismatch?"


N117 · [warmly] That is the balance sheet and profit account mapped cleanly. Rest well tonight, and I will meet you in the next class.
> 1 S: closing card with complete two-shelf + dotted-shelf visual