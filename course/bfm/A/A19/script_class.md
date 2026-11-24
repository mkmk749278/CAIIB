# A19 · "Borrowing from abroad: ECB, depository receipts, and overseas bonds" · CLASS EDITION (script c1, with cue sheet)
* Status: **c2 locked**, 2026-11-24: Gemini draft c1 (skill + Deep Research, gate PASS, 18 primary links), cross-model review by Claude (`review_c1.md`). c1, 2026-11-24.
* Plan: course/bfm/A/plans_A.md §A19 (all 10 v3 depth additions covered). Course order v4: A18 → A19 → A19b.
* Syllabus: A6.1 (ECB: concepts), A6.2 (ECB: other operational concepts), A6.3 (Reporting requirements), A6.4 (Conversion of ECB into equity), A8.5 (Short notes: ECB, ADR/GDR, FCCB; also syllabus C3.2, C3.3, C3.4, C3.6).
* Facts: A19_fact_sheet, rows cited as [F1]–[F28]. Sums: A19_numericals (verified two ways in Python Decimal). Practice: A19_practice.
* Rule version (opening card): "FEM (Borrowing and Lending) Regulations, 2018 as amended by FEMA 3(R)(5)/2026-RB (eff. 16 Feb 2026) · RBI A.P. (DIR) Circulars 22, 23 (Feb 2026) & 25 (eff. 1 Apr 2026) · RBI MD – ECB & Trade Credits (updated 8 Sep 2026) · FEMA 8(R)/2026-RB (Guarantees, eff. 10 Jan 2026) · RBI MD – Foreign Investment in India (updated 15 Jun 2026) · FEMA 395/2019-RB (amended 13 Jun 2026) · DR Scheme 2014 · SEBI Circular CIR/CFD/DIL/6/2013 · RBI Basel III AT1 PDI Directions, 2025 (eff. 1 Oct 2025) · as at 31 December 2026".
* Greeting / goodbye (new, verified unused in greetings.md, A17, and A18): greeting "Hello everyone, good to have your company again. Tonight we build the bridge for Indian companies borrowing from abroad."; goodbye "That finishes our bridge for overseas borrowing and receipts. Put the notebook away, rest well, and I'll meet you in the next class."
* Story: Deccan Precision Ltd., an auto-component manufacturer in Hyderabad (illustrative), seeking a USD 20 million overseas loan for a new plant and asking whether the old USD 750M/FY cap applies and whether its Indian bank can issue an SBLC guarantee.
* Holds: questions at least 3 s; one-step sums 8 s; "your turn" 15 s; map 3–5 s per node.
* Say it right: "FEMA" as "FAY-ma"; "E-C-B", "L-R-N", "M-A-M-P", "L-S-F", "A-D", "I-F-S-C", "S-B-L-C", "L-o-U", "L-o-C", "T-D-R", "N-P-A", "A-D-R", "G-D-R", "I-D-R", "F-C-C-B", "D-R-R", "R-D-B", "A-T-One", "P-D-I", "R-W-As"; "Regulation three-A" for Reg. 3A.
* Not in this lesson: FDI/FPI rules, NDI schedules, share pledges, FC-GPR/FC-TRS, and refunds (next two classes); Trade Credit ≤ 3 years in detail (import finance); GIFT City IBU setup (IFSC).
* Length: 1858 spoken words + ~2.4 min of holds ≈ 14.3 min at 150 wpm (exact count verified by linter; 0 lines > 25 words; 0 spoken lesson codes).
* Cue sheet: S scene · N note · G glow · M map · C card · B board mark · H hold. Stable picture: a bridge from foreign lenders to Indian borrowers with six toll booths (borrowers, lenders, limit, MAMP, cost/currency, end-uses), plus a second lane for depository receipts and overseas bonds.

---


## Warm-up

N001 · [warmly] Hello everyone, good to have your company again. Tonight we build the bridge for Indian companies borrowing from abroad.
> 0 C: rule-version card (as at 31 Dec 2026) · 1 S: notebook page; title 'Borrowing from Abroad: ECB, DRs & Bonds'

N002 · Keep your basic calculator close. First, last class's homework: a twenty-eight-lakh flat in the ninety-percent L-T-V slab. Loan and margin?
> 1 S: homework card '₹28,00,000 flat · 90% LTV (illustrative)' · H: 4 s

N003 · Loan twenty-five lakh twenty thousand rupees; margin two lakh eighty thousand rupees. Quick recall from two classes back: who bears F-C-N-R-B currency risk?
> 1 N: '₹25,20,000 / ₹2,80,000 ✓' [F24] · 2 S: recall card 'FCNR(B) FX risk?' · H: 3 s

N004 · The bank bears it, since repayment is in foreign currency. This topic appeared in four of seven exam cycles, and E-C-B changed in twenty twenty-six.
> 1 N: 'Bank bears FX risk ✓' · 2 C: Importance Map badge '4/7 cycles · Feb 2026 ECB Overhaul' [F1]

N005 · Stay with me: by the end, you will apply the twenty twenty-six E-C-B rules and tell A-D-R, G-D-R, I-D-R, F-C-C-B, and Masala Bonds apart.
> 1 S: bridge graphic appears: 'Foreign Lenders → Toll Booths → Indian Borrowers' + second lane 'Depository Receipts'


## Opening

N006 · Meet Deccan Precision Limited, an auto-component manufacturer in Hyderabad. Illustrative. They want to borrow twenty million dollars from abroad for a new plant.
> 1 S: factory card 'Deccan Precision Ltd · Hyderabad · USD 20M (illustrative)'

N007 · Their finance head asks your branch two things: does the old seven-fifty-million annual cap apply, and can our bank issue a standby L-C guarantee?
> 1 S: two buttons: 'Old 750M cap + Bank SBLC allowed' · 'New 2026 cap + Bank guarantee barred' · H: 3 s

N008 · Lock your answer. Many exam guides still teach the pre-twenty-twenty-six E-C-B rules. Let's cross the bridge booth by booth to see the current law.
> 1 G: both buttons pulse once


## Chapter 1 · ECB after February 2026

N009 · Chapter one: External Commercial Borrowings after sixteen February twenty twenty-six. R-B-I consolidated E-C-B into Schedule One of the Borrowing and Lending Regulations.
> 1 S: chapter title '1 · ECB after Feb 2026' · 2 N: 'FEMA 3(R)(5)/2026-RB · eff. 16 Feb 2026' [F1]

N010 · Old loans with an L-R-N before sixteen February twenty twenty-six stay on old rules, except reporting. First booth: who is an eligible borrower?
> 1 N: 'Pre-16 Feb 2026 LRN = grandfathered (except reporting)' [F1] · 2 S: Toll Booth 1 'Borrowers' · H: 3 s

N011 · Any non-individual Indian entity formed or registered under a Central or State Act, if its Act permits E-C-B. So Deccan Precision easily qualifies.
> 1 N: 'Eligible: non-individual under Central/State Act ✓' [F2] · 2 B: tick on Deccan Precision

N012 · Firms under insolvency or restructuring may borrow if their plan permits. Pending FEMA investigations do not bar borrowing once disclosed in Form E-C-B One.
> 1 N: 'CIRP/restructuring: if plan permits · Investigation: disclose' [F2]

N013 · Second booth: recognised lenders. Many of you are thinking the lender must be from an F-A-T-F or I-O-S-C-O compliant country.
> 1 S: Toll Booth 2 'Recognised Lenders' · 2 N: thought bubble 'FATF/IOSCO required?'

N014 · Not anymore. From sixteen February twenty twenty-six, recognised lenders are any person resident outside India, overseas branches of R-B-I-regulated lenders, and I-F-S-C financial institutions.
> 1 B: strike 'FATF/IOSCO' · 2 N: 'Any PROI · Overseas RBI-RE branch · IFSC FI/IBU' [F3]

N015 · Third booth: borrowing limit. Write this down: the limit is the higher of one billion dollars outstanding E-C-B, or three hundred percent of net worth.
> 1 S: Toll Booth 3 'Borrowing Limit' · 2 N: 'Higher of: USD 1B ECB OR 300% Net Worth' [F5] · 3 B: box limit

N016 · Three hundred percent covers total external plus domestic debt on the last audited standalone balance sheet. Financial-sector regulated borrowers are exempt from this cap.
> 1 N: '300% = external + domestic debt · Regulated FIs exempt' [F5]

N017 · Notice the trap: the old seven-fifty-million per financial year cap and seven-to-one equity ratio are gone. Let's work a limit sum together.
> 1 C: trap card 'OLD: USD 750M/FY & 7:1 → NEW: Higher of USD 1B or 300% NW' [F5, F14]

N018 · A manufacturer has audited standalone net worth of four hundred fifty million dollars, and existing domestic loans of two hundred fifty million. Maximum E-C-B?
> 1 S: sum card 'NW USD 450M · Domestic debt USD 250M (illustrative)' [F25]

N019 · Press four-five-zero times three-zero-zero percent equals one thousand three hundred fifty million total debt. Minus two-five-zero domestic debt gives one thousand one hundred million.
> 1 S: keys '450 × 300 % = 1350 − 250 = 1100' · 2 N: 'Limb (b) = USD 1,100M' [F25]

N020 · Compare Limb A, one thousand million, against Limb B, one thousand one hundred million. Take the higher figure: one thousand one hundred million dollars.
> 1 N: 'max(1,000M, 1,100M) = USD 1,100M' [F25] · 2 B: box 'USD 1,100M'

N021 · Your turn. Net worth two hundred fifty million dollars; existing domestic loans one hundred fifty million. What is the maximum E-C-B? Pause and calculate.
> 1 S: Your Turn card 'NW USD 250M · Domestic debt USD 150M (illustrative)' [F26] · H: 15 s

N022 · Two-five-zero times three hundred percent is seven-fifty; minus one-fifty equals six hundred million. Compare with one billion: higher is one billion dollars.
> 1 S: keys '250 × 300 % = 750 − 150 = 600' · 2 N: 'max(1,000M, 600M) = USD 1,000M ✓' [F26]

N023 · The commonest wrong answer is six hundred million—picking the lower limb instead of the higher limb. Never fall for that.
> 1 C: error card 'Wrong: USD 600M (lower) · Right: USD 1,000M (higher)' [F5, F26]

N024 · Fourth booth: Minimum Average Maturity Period, called M-A-M-P. Standard M-A-M-P is three years, and call or put options cannot be exercised earlier.
> 1 S: Toll Booth 4 'MAMP' · 2 N: 'MAMP = 3 years (no early call/put)' [F6]

N025 · One key exception: manufacturing companies may borrow for one to three years, capped at one hundred fifty million dollars outstanding—replacing the old fifty-million annual cap.
> 1 N: 'Manufacturing 1–3 yrs ≤ USD 150M outstanding (old: 50M/FY)' [F6, F14]

N026 · Fifth booth: cost of borrowing. Many think the old fixed all-in-cost ceiling still applies. Wrong: R-B-I removed fixed ceilings for three-year-plus E-C-Bs.
> 1 S: Toll Booth 5 'Cost & Currency' · 2 C: trap card 'OLD: +500/+450 bps → NEW: Market conditions' [F7, F14]

N027 · Cost must match prevailing market conditions, and related-party loans must be at arm's length. Commitment fees and Indian statutory taxes stay outside borrowing cost.
> 1 N: '≥3 yrs: market · Related party: arm's length · Excl. commitment fee & taxes' [F7]

N028 · Only sub-three-year manufacturing E-C-Bs face a ceiling: the Trade Credit cap, benchmark plus three hundred basis points for foreign currency or two-fifty for rupees.
> 1 N: '<3 yr mfg: TC cap (+300 bps FCY / +250 bps INR)' [F7]

N029 · Currency conversion is now two-way: foreign currency to rupee, and rupee back to foreign currency. Now, sixth booth: barred end-uses under Regulation three-A.
> 1 N: 'Two-way FX↔INR conversion' [F4] · 2 S: Toll Booth 6 'End-Uses (Reg. 3A)'

N030 · Barred: chit funds, Nidhi, real estate business and farmhouses, restricted agriculture and plantations, T-D-R trading, non-strategic securities, NPA rupee-loan repayment, and restricted on-lending.
> 1 N: 'Barred: chit, Nidhi, real estate, TDR, non-strategic shares, NPA loans' [F8]

N031 · Notice what moved off the negative list: ordinary working capital and general corporate purposes are now allowed at three-year M-A-M-P. And the guarantee bar?
> 1 N: 'WC & GCP allowed (3-yr MAMP)' [F8] · 2 S: Guarantee warning card

N032 · Entities regulated by R-B-I—banks, A-I-F-Is, and N-B-F-Cs—cannot issue any guarantee, standby L-C, L-o-U, or L-o-C for E-C-Bs. So Deccan Precision's S-B-L-C request fails.
> 1 N: 'RBI-RE guarantee bar: NO bank guarantee/SBLC/LoU/LoC' [F8] · 2 B: underline 'NO'

N033 · Pause check for chapter one. One: can a regulated N-B-F-C exceed the three-hundred-percent net-worth E-C-B cap? Two: can an Indian bank issue an E-C-B guarantee?
> 1 S: Pause Check 1 (2 questions) · H: 5 s

N034 · One: yes, regulated financial borrowers are exempt. Two: no, R-B-I entities face a blanket guarantee bar. Remember: higher of one billion or three hundred percent.
> 1 N: '1. Yes (FI exempt) [F5] · 2. No (blanket bar) [F8]' · 2 M: node 'ECB (borrow)' added


## Chapter 2 · Reporting, late fees, operations, and conversion

N035 · Chapter two: after the loan is signed—reporting, late fees, parking, and equity conversion. First, recall: what is the outstanding cap for one-to-three-year manufacturing E-C-Bs?
> 1 S: chapter title '2 · Reporting, Operations & Conversion' · 2 S: recall card 'Mfg 1–3 yr cap?' · H: 3 s

N036 · One hundred fifty million dollars outstanding. Now follow reporting: first, file Form E-C-B One through your designated A-D bank for a Loan Registration Number.
> 1 N: 'USD 150M ✓' [F6] · 2 S: chain 'Form ECB 1 → LRN → Drawdown' [F9, F10]

N037 · Rule: never allow drawdown before the L-R-N is allotted. If no drawdown happens, the A-D bank may ask R-B-I to cancel the L-R-N.
> 1 N: 'No drawdown before LRN · Cancel if zero drawdown' [F9, F10]

N038 · If loan terms change after L-R-N—with lender consent—file Revised Form E-C-B One within seven calendar days from month-end. Changing A-D banks requires a no-objection certificate.
> 1 N: 'Revised ECB 1: 7 calendar days · AD change: NOC' [F10, F12]

N039 · Many think Form E-C-B Two is filed every month, even with zero activity. That rule ended. From twenty twenty-six, Form E-C-B Two is event-based.
> 1 C: trap card 'OLD: Monthly nil ECB 2 (7 working days) → NEW: Event-based (7 calendar days)' [F10, F14]

N040 · File Form E-C-B Two within seven calendar days of month-end when proceeds arrive, servicing occurs, or balances change. A-D banks forward it in seven days.
> 1 N: 'Form ECB 2: event-based, 7 calendar days (AD: 7 cal days)' [F10]

N041 · What if a borrower vanishes? Missing specified returns for four consecutive quarters, unreachable, and inoperative at registered office triggers untraceable status—reported to R-B-I and E-D.
> 1 N: 'Untraceable: 4 consecutive quarters (old: 8) → RBI + ED' [F10, F14]

N042 · From one April twenty twenty-six, Late Submission Fee for a delayed Form E-C-B One or Revised One is a flat seven thousand five hundred rupees.
> 1 S: LSF card 'Eff. 1 Apr 2026: ECB 1 / Rev ECB 1 = ₹7,500 flat' [F11]

N043 · Each delayed Form E-C-B Two counts separately: seven thousand five hundred rupees plus zero point zero two five percent of amount A times years n.
> 1 N: 'ECB 2 LSF = ₹7,500 + (0.025% × A × n) per return' [F11] · 2 B: box formula

N044 · Capped at one hundred percent of A, rounded up to the nearest hundred, paid via N-E-F-T or R-T-G-S within thirty days. Let's calculate one.
> 1 N: 'Cap 100% of A · Round up ₹100 · 3-yr LSF window' [F11]

N045 · Say a sixteen-crore Form E-C-B Two drawdown return is six months late, so n equals zero point five zero.
> 1 S: sum card 'A = ₹16,00,00,000 · n = 0.50 yr (illustrative)' [F27]

N045a · Press sixteen crore times zero point zero two five percent times zero point five on your calculator.
> 1 S: keys '160000000 × 0.025 % × 0.5 = 20000' [F27]

N046 · That gives twenty thousand rupees. Add seven thousand five hundred fixed: total L-S-F is twenty-seven thousand five hundred rupees. Already a multiple of one hundred.
> 1 S: keys '20000 + 7500 = 27500' · 2 N: 'LSF = ₹27,500 ✓' [F27]

N047 · Operational rules: rupee proceeds reach the A-D bank by next month-end and park in unencumbered fixed deposits up to one year. Same one-year cap abroad.
> 1 N: 'Parking: unencumbered FD ≤ 1 yr (INR: next month-end; abroad: no rating floor)' [F9]

N048 · The old seventy-percent mandatory hedging rule for infrastructure borrowers is gone. Security may cover immovable, movable, financial, or intangible assets with domestic lender N-O-C.
> 1 N: '70% hedging removed [F9] · Security: assets + NOC; no foreign land acquisition [F12]'

N049 · Finally, converting E-C-B into equity. Even matured unpaid E-C-B may convert under N-D-I Rules—with lender consent, no extra cost, other-lender notice, and M-A-M-P exempt.
> 1 S: Conversion card 'ECB → Equity: MAMP exempt · NDI Rules · no extra cost' [F13]

N050 · Which exchange rate fixes the rupee liability on conversion? The rate prevailing on the conversion agreement date, or a rate that gives no higher liability.
> 1 N: 'FX rate: conversion agreement date (or lower liability)' [F13]

N051 · Pause check for chapter two. One: how many calendar days does a borrower get to file Form E-C-B Two? Two: does M-A-M-P block equity conversion?
> 1 S: Pause Check 2 (2 questions) · H: 5 s

N052 · One: seven calendar days from month-end. Two: no, equity conversion is M-A-M-P exempt. Remember: L-R-N before drawdown, event-based E-C-B Two in seven calendar days.
> 1 N: '1. 7 calendar days [F10] · 2. No, MAMP exempt [F13]' · 2 M: node 'ECB (report, convert)' added


## Chapter 3 · ADR, GDR, FCCB, IDR, and overseas rupee bonds

N053 · Chapter three: the second lane on our bridge—depository receipts and overseas bonds. Quick recall: what is the flat L-S-F for a delayed Form E-C-B One?
> 1 S: chapter title '3 · ADR, GDR, FCCB, IDR & Rupee Bonds' · 2 S: recall card 'ECB 1 LSF?' · H: 3 s

N054 · Seven thousand five hundred rupees. Now look at American and Global Depository Receipts—A-D-R in the U-S, G-D-R globally—under the Depository Receipts Scheme twenty fourteen.
> 1 N: '₹7,500 ✓' [F11] · 2 S: DR chain 'Indian Issuer → Domestic Custodian → Foreign Depository → Holder' [F15, F16]

N055 · An Indian company deposits shares with a Domestic Custodian in India; a Foreign Depository issues receipts abroad. Both sponsored and unsponsored D-Rs are permitted.
> 1 N: 'DR Scheme 2014 · Sponsored & unsponsored · Equity DR = NDI' [F15]

N056 · The Domestic Custodian files Form D-R-R within thirty days of issue close and monitors two-way fungibility—re-issuing D-Rs within headroom without breaching sectoral caps.
> 1 N: 'Form DRR: 30 days · Limited two-way fungibility (Headroom)' [F15, F16]

N057 · Next: Foreign Currency Convertible Bonds, or F-C-C-Bs. They are hybrid debt with an equity option—still under the nineteen ninety-three scheme, regulated as E-C-B until conversion.
> 1 S: FCCB card 'Hybrid FCY debt + equity option · 1993 Scheme · ECB till conversion' [F17]

N058 · F-C-C-Bs stay outside the F-D-I sectoral cap until converted, and conversion is M-A-M-P exempt. Now flip our bridge around for Indian Depository Receipts.
> 1 N: 'FCCB: outside FDI cap till conversion · MAMP exempt' [F17] · 2 S: bridge reverses 'Foreign Co → India'

N059 · Many candidates think I-D-Rs are issued in U-S dollars. Wrong. A foreign company issues I-D-Rs in India through a Domestic Depository in Indian Rupees only.
> 1 C: trap card 'Wrong: IDR in USD · Right: IDR in INR only' [F18] · 2 B: underline 'INR only'

N060 · Proceeds are immediately repatriated abroad, under a five-billion-dollar market cap. Foreign banks with an Indian branch or subsidiary need prior sectoral regulator approval.
> 1 N: 'IDR: immediate repatriation · USD 5B cap · Foreign bank = prior RBI approval' [F18]

N061 · Residents, F-P-Is, and N-R-Is may buy I-D-Rs. Redemption has a one-year lock-in and no automatic fungibility—only partial two-way fungibility up to twenty-five percent yearly.
> 1 N: '1-yr lock-in · Partial 2-way fungibility (25%/yr, 20% retail)' [F18, F19]

N062 · Crucial resident rule: if an Indian individual redeems I-D-Rs into foreign shares, they may hold those shares only to sell within thirty days of conversion.
> 1 N: 'Resident individual on IDR redemption: sell within 30 days' [F20]

N063 · Last instrument: Rupee-Denominated Bonds overseas, called Masala Bonds. Because principal and coupon are fixed in rupees, who bears the exchange rate risk?
> 1 S: Masala Bond card 'INR-denominated bond abroad (INR ECB)' [F21] · H: 3 s

N064 · The foreign investor bears the exchange rate risk, not the Indian borrower. Indian banks may issue overseas rupee bonds for three specific purposes.
> 1 N: 'Foreign investor bears FX risk ✓' [F21] · 2 N: 'Bank RDBs: AT1 PDI · Tier 2 · Infra/Affordable Housing' [F22]

N065 · Additional Tier One Perpetual Debt Instruments, Tier Two capital, and long-term infrastructure or affordable housing bonds. Watch the October twenty twenty-five rule change on A-T-One.
> 1 C: trap card 'OLD (2021): 49% of AT1 → NEW (1 Oct 2025): 1.5% of RWAs' [F23]

N066 · From one October twenty twenty-five, overseas foreign-currency or rupee-bond A-T-One P-D-Is cap at one point five percent of Risk Weighted Assets, replacing forty-nine percent.
> 1 N: 'Overseas AT1 PDI cap = 1.5% of RWAs (eff. 1 Oct 2025)' [F23] · 2 B: circle '1.5% of RWAs'

N067 · Pause check for chapter three. One: in which currency are I-D-Rs denominated? Two: what is the current cap on a bank's overseas A-T-One P-D-Is?
> 1 S: Pause Check 3 (2 questions) · H: 5 s

N068 · One: Indian Rupees only. Two: one point five percent of Risk Weighted Assets. Remember: A-D-R and G-D-R go abroad; I-D-R comes to India in rupees.
> 1 N: '1. INR only [F18] · 2. 1.5% of RWAs [F23]' · 2 M: nodes 'ADR/GDR/IDR · FCCB · RDB' added


## Close

N069 · Back to Deccan Precision: their twenty-million-dollar E-C-B fits the new cap easily, but our Indian bank cannot issue an S-B-L-C guarantee.
> 1 S: Deccan Precision resolved card 'USD 20M fits cap ✓ · Bank SBLC barred ✗' [F5, F8]

N070 · Mixed check—three quick twists. One: can an E-C-B be converted from rupees into dollars under twenty twenty-six rules?
> 1 S: Mixed Check (3 questions) · H: 3 s

N071 · Yes, two-way conversion is permitted. Two: who files Form D-R-R, and within how many days?
> 1 N: '1. Yes, INR→FCY allowed ✓' [F4] · H: 4 s

N072 · The Domestic Custodian, within thirty days of close. Three: does an Indian company's F-C-C-B count inside the F-D-I sectoral cap before conversion?
> 1 N: '2. Domestic Custodian, 30 days ✓' [F15] · H: 4 s

N073 · No—outside the sectoral cap until converted into equity. Now fill your blank mind map: branch Borrowing from Abroad has four nodes. First: E-C-B.
> 1 N: '3. No, outside cap till conversion ✓' [F17] · 2 M: blank branch 'Borrowing from abroad' (4 empty nodes) · H: 4 s

N074 · Higher of one billion or three hundred percent net worth, three-year M-A-M-P, market cost, guarantee bar, seven-day event E-C-B Two. Second: A-D-R, G-D-R, I-D-R.
> 1 M: node 'ECB (borrow, report, convert)' fills · H: 4 s

N075 · A-D-R and G-D-R file Form D-R-R in thirty days; I-D-R is foreign shares in rupees, one-year lock-in, thirty-day sale. Next: F-C-C-B and R-D-B.
> 1 M: node 'ADR / GDR / IDR' fills · H: 4 s

N076 · F-C-C-B is E-C-B until conversion; Masala Bonds shift currency risk abroad; bank overseas A-T-One P-D-Is cap at one point five percent of R-W-As.
> 1 M: nodes 'FCCB' and 'RDB' fill; branch complete · 2 C: 'You can now: A6.1 · A6.2 · A6.3 · A6.4 · A8.5'

N077 · Foreign equity investment comes next class. Homework: calculate L-S-F for a thirty-two-crore Form E-C-B Two return delayed by nine months.
> 1 S: homework card 'Form ECB 2 · A = ₹32 crore · delay 9 months (n = 0.75) (illustrative)' [F28]

N078 · Next class, we cross the equity lane of this bridge: when a Singapore investor funds an Indian startup, is it F-D-I or F-P-I?
> 1 S: card face down 'Next Class · Foreign Investment (NDI Rules)'

N079 · [warmly] That finishes our bridge for overseas borrowing and receipts. Put the notebook away, rest well, and I'll meet you in the next class.
> 1 S: notebook light dims


---


## Facts needed

* SEBI Circular SEBI/HO/MRD/DOP1/CIR/P/2019/106 (10 Oct 2019): Primary PDF could not be opened in this session; exact permissible-holder exclusion wording (Indian residents / NRIs barred from holding DRs) omitted from spoken lines until verified at freeze.
* SEBI (ICDR) Regulations, 2018 Chapter VII & Companies (Registration of Foreign Companies) Rules, 2014 Rule 13: Quantitative IDR public-issue thresholds (min ₹50 crore issue, ₹20,000 min app, ≥50% QIB / ≥30% retail, ≥90% min subscription) were not extracted from primary PDFs in this session; omitted from spoken lines until verified at freeze.