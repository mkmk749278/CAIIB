# D03 · "Putting a rupee price on credit risk" · CLASS EDITION (script c1, with cue sheet)
* Status: c1, 2026-11-24. Standard style (course/spec/lesson_spec.md): one question per idea, one pause check per chapter, at most one light line per chapter, plain words; 12–15 min.
* Plan: course/bfm/D/plans_D.md §D03 (v3 depth additions (1)–(4): full standard-asset table by sector; infrastructure-escrow sub-standard rate; definition of "unsecured exposure"; UFCE incremental provisioning card). Course order v4: D02 → D03 → D04.
* Syllabus: D3.2 (Provisioning norms).
* Facts: D03_fact_sheet.md, rows cited as [F1]…[F42]. Sums: D03_numericals.md. Practice: D03_practice.md.
* Rule version (opening card): "RBI (Commercial Banks – IRACP) Directions, 2025 (updated 1 Oct 2026) · RBI (Commercial Banks – Credit Risk Management) Directions, 2025 (updated 1 Oct 2026) · RBI (Commercial Banks – Resolution of Stressed Assets) Directions, 2025 (updated 1 Oct 2026) · RBI (Commercial Banks – Treatment of Wilful Defaulters and Large Defaulters) Directions, 2025 (and Amendment 2026, eff. 1 Apr 2027) · RBI ECL Directions, 2026 (issued 27 Apr 2026, eff. 1 Apr 2027 — issued, coming) · as at 31 December 2026".
* Greeting / goodbye (new, verified unused against course/bfm/greetings.md): greeting "Welcome back, everyone, and settle in. Keep your calculator handy; today we put a rupee price on credit risk."; goodbye "That is provisioning, from standard loans to PCR. Close your notes, take a breather, and we will work a full case next class."
* Story: Vijayawada Main Branch (illustrative). Kaveri Granites Pvt. Ltd. holds a ₹120 lakh term loan backed by factory land worth ₹180 lakh — fully standard, zero overdue — when a director appears twice on the List of Wilful Defaulters. Other illustrative accounts: Deccan Paper Mills (Doubtful D2, ₹80 lakh, security ₹50 lakh), Narmada Tools (Loss, ₹24 lakh, salvage ₹2 lakh), and a bank portfolio with ₹400 crore Gross NPAs. All names, amounts, and dates are illustrative.
* Holds: questions at least 3 s; one-step sums 8 s; "your turn" 15 s; map 3–5 s per node.
* Say it right: "I-R-A-C-P"; "C-R-E" and "C-R-E hyphen R-H"; "U-F-C-E"; "E-B-I-D"; "P-C-R"; "C-R-I-L-C" (or "KRILK"); "E-C-L"; "ab initio" as "ab in-ISH-ee-oh"; "basis points" in full on first use, then "bps".
* Not in this video: Asset classification rules, SMA days, crop seasons, OD/CC out of order, SNFA income (covered in the previous class); multi-borrower case study, ECGC/CGTMSE cover deductions, IBC, NARCL (covered in the next class); full Tier 2 CRAR sums (covered in the capital classes).
* Length: 1,981 spoken words (105 N-lines, max 25 words per line) + ~2.5 min of holds ≈ 14.7 min at 150 wpm. Chapters: warm-up (~1.2 min) · opening (~0.7 min) · 1 standard assets & UFCE (~3.4 min) · 2 sub-standard, doubtful, loss & fraud (~4.0 min) · 3 wilful defaulters, accelerated provisioning & ECL (~2.5 min) · 4 PCR, floating provisions & mixed check (~2.0 min) · close (~0.9 min).
* Cue sheet: S scene · N note · G glow · B board mark · M map · C card · H hold. Picture: the 90-day clock from last class paired with a provision jar filling as an account ages; secured and unsecured parts in two colours (blue = secured, red = unsecured).


---

## Warm-up

N001 · Welcome back, everyone, and settle in. Keep your calculator handy; today we put a rupee price on credit risk.
> 1 S: desk with notebook and 8-function calculator · 2 C: Rule version card ("RBI IRACP, CRM, RSA & Wilful Defaulter Directions 2025 · ECL 2026 issued, coming · as at 31 Dec 2026") on "credit risk" [F1]


N002 · Put your phone on silent, and keep one sheet of paper open beside your calculator.
> 1 S: notebook page opens clean · 2 N: title "Provisioning Norms" on "paper"


N003 · Provisioning is tested across five recent exam cycles, including four questions in one paper.
> 1 C: Exam signal card ("Tested Dec 2023, Jul 2024, Jun 2025, Dec 2025, Jun 2026") on "five recent"


N004 · Quick check from last class: a cash credit account stays above drawing power for ninety-two continuous days. What is its status?
> 1 S: CC account drawing-power line · 2 H: 3 s on "status?"


N005 · Non-performing asset, because staying continuously above drawing power for ninety days makes it out of order.
> 1 N: "Out of order → NPA" · 2 G: "NPA" on "Non-performing"


N006 · And from two classes back: where do standard asset provisions sit on a bank's balance sheet?
> 1 S: two-shelf balance sheet miniature · 2 H: 3 s on "balance sheet?"


N007 · Schedule five, under Other Liabilities and Provisions, never deducted from gross advances.
> 1 N: "Standard provision → Schedule 5" · 2 B: box "Schedule 5" on "Schedule five" [F11]


N008 · One quick refresher from your accounting paper: a provision is a charge to profit and loss, reducing profit before reserves.
> 1 C: Refresher card ("Provision = P&L charge · Reserve = profit appropriation") on "charge to profit"


N009 · Today, you will compute provisions across every loan class, handle fraud and wilful defaulters, and calculate PCR.
> 1 N: 4 chapter headers on margin on "PCR"

## Opening · The branch moment

N010 · Picture a credit officer at Vijayawada Main Branch reviewing Kaveri Granites Private Limited, an illustrative account.
> 1 S: branch desk, file "Kaveri Granites (illustrative)" · 2 N: "Kaveri Granites: ₹120L term loan" on "Kaveri Granites"


N011 · The term loan is one hundred twenty lakh rupees, backed by factory land worth one hundred eighty lakh.
> 1 N: "Security: ₹180L land · Standard, 0 days overdue" on "one hundred eighty"


N012 · Every instalment arrived on time, so the loan is fully standard.
> 1 B: green dot on "Standard" on "fully standard"


N013 · Then a routine check shows one company director appears twice on the List of Wilful Defaulters.
> 1 C: Alert card ("Director listed > 1 time in LWD") on "twice" [F33]


N014 · Some of you think: it is secured and standard, so zero point four zero per cent is enough.
> 1 C: Split card ("Option A: 0.40% (₹0.48L)" vs "Option B: 5% (₹6.00L)") on "zero point four"


N015 · Others suspect the wilful defaulter tag jumps it to five per cent. Hold your answer; we will settle it soon.
> 1 H: 3 s on "five per cent."

## Chapter 1 · Standard asset provisions and UFCE

N016 · First, clear a common wrong belief: many think standard loans need zero provision because nothing is overdue.
> 1 S: provision jar next to green standard shelf · 2 C: Myth card ("Standard = 0%?") on "zero provision"


N017 · Under the twenty-twenty-five IRACP directions, banks keep a general provision on standard funded advances worldwide.
> 1 B: strike "0%?" · 2 N: "Standard assets: general provision on global funded O/S" on "worldwide" [F1, F3]


N018 · Think of it like a small rain fund on sunny days, though it covers general risk only, not specific defaults.
> 1 S: small base layer fills bottom of provision jar on "rain fund"


N019 · Let us build the exact standard-asset table from the current directions, sector by sector.
> 1 N: Table header "Standard Asset Rates (IRACP 2025)" on "sector by sector" [F3]


N020 · Farm credit to agriculture, individual housing loans, and Small and Micro Enterprises attract zero point two five per cent.
> 1 N: "Farm / Ind. Housing / Small & Micro: 0.25%" on "zero point two five" [F3]


N021 · Watch the trap: what rate applies to Medium Enterprises? Zero point two five, or zero point four zero?
> 1 C: Trap card ("Medium Enterprises: 0.25% vs 0.40%?") · 2 H: 3 s on "four zero?"


N022 · Zero point four zero per cent. Only Small and Micro get zero point two five; Medium sits with all others.
> 1 N: "Medium Enterprises & All Others: 0.40%" · 2 B: underline "Medium" on "Zero point four zero" [F4, F8]


N023 · Commercial Real Estate, CRE, carries one per cent, while CRE Residential Housing, CRE-RH, carries zero point seven five per cent.
> 1 N: "CRE: 1.00% · CRE-RH: 0.75%" on "seven five" [F5, F6]


N024 · Teaser-rate housing loans still carry two per cent, reverting to zero point four zero one year after higher reset if standard.
> 1 N: "Teaser housing: 2.00% → 0.40% (1 yr after reset)" on "two per cent" [F7]


N025 · For post-October twenty-twenty-five project finance, construction phase takes one point two five for CRE and one per cent for others.
> 1 N: "Project finance (post-Oct 2025): Construction 1.25% CRE / 1.00% CRE-RH & others" on "one point two five" [F9]


N026 · Once repayment starts in the operational phase, project rates revert to one per cent, zero point seven five, and zero point four zero.
> 1 N: "Operational phase: 1.00% / 0.75% / 0.40%" on "operational phase" [F9]


N027 · From July twenty-twenty-six, calamity-restructured accounts carry an additional five per cent specific provision under the updated directions.
> 1 N: "Calamity resolution (from 1 Jul 2026): +5% specific" on "five per cent" [F10]


N028 · Standard provisions never reduce Net NPAs; they count in Tier two capital up to one point two five per cent of credit RWAs.
> 1 N: "Not in Net NPA · Tier 2 cap: 1.25% credit RWAs" · 2 G: "1.25%" on "one point two five" [F11, F40]


N029 · Now meet a second layer on standard loans: Unhedged Foreign Currency Exposure, or UFCE, incremental provisioning.
> 1 C: Names-first card ("UFCE = Unhedged Foreign Currency Exposure") on "UFCE" [F13]


N030 · UFCE is foreign currency balance-sheet exposure minus effective financial hedges and same-year natural hedges.
> 1 N: "UFCE = FCE − financial & natural hedges" on "natural hedges" [F13]


N031 · Quarterly, banks multiply UFCE by FEDAI's largest ten-year dollar-rupee volatility to find potential loss, then divide by EBID.
> 1 N: "Ratio = Potential Loss ÷ EBID (quarterly)" on "EBID" [F14]


N032 · EBID equals profit after tax, plus depreciation, plus interest on debt, plus lease rentals.
> 1 N: "EBID = PAT + Dep + Interest + Lease Rentals" on "lease rentals" [F14]


N033 · Up to fifteen per cent adds zero basis points; each higher band steps up by twenty: twenty, forty, sixty, and eighty.
> 1 N: "≤15%: 0 · 15–30%: 20 · 30–50%: 40 · 50–75%: 60 · >75%: 80 bps" on "eighty" [F15]


N034 · Above seventy-five per cent, add eighty basis points and raise the borrower's risk weight by twenty-five percentage points.
> 1 B: box ">75%: 80 bps + 25 pp RW" on "twenty-five" [F15]


N035 · Smaller entities with banking exposure up to fifty crore may instead take a flat ten basis points when data is missing.
> 1 N: "Smaller entities (≤₹50 cr) option: 10 bps · Tier 2 general" on "ten basis points" [F16]


N036 · Do not mix UFCE with accelerated provisioning: UFCE sits on standard loans, and sovereigns, banks, individuals, and NPAs are exempt.
> 1 C: Trap card ("UFCE = standard currency risk ≠ Accelerated NPA provisioning") on "standard loans" [F16]


N037 · Pause now for three checks. First: what standard rate applies to a Medium Enterprise term loan?
> 1 C: Pause Check 1 (Q1–Q3) · 2 H: 3 s on "term loan?"


N038 · Second: what rate applies to CRE-RH? Third: if UFCE potential loss is eighty per cent of EBID, what two charges apply?
> 1 H: 5 s on "charges apply?"


N039 · Answers: Medium Enterprises take zero point four zero; CRE-RH takes zero point seven five.
> 1 N: ticks on 0.40%, 0.75% on "Answers:" [F4, F6]


N039a · Above seventy-five per cent, UFCE adds eighty basis points plus twenty-five percentage points of risk weight.
> 1 N: tick on 80 bps + 25 pp RW on "eighty basis points" [F15]


N040 · One thing to remember: standard assets carry sector rates in Schedule five, plus quarterly UFCE bands when currency risk is unhedged.
> 1 M: node "Asset quality: UFCE" added on "UFCE" [F11, F15]

## Chapter 2 · Sub-standard, doubtful, loss, and fraud

N041 · Quick recall from last chapter: what standard provision rate applies to individual housing loans?
> 1 S: provision jar shifts from green to red · 2 H: 3 s on "housing loans?"


N042 · Zero point two five per cent, unless it is a teaser-rate loan, which starts at two per cent.
> 1 N: "Recall: 0.25% (teaser 2.00%)" on "Zero point two five" [F3, F7]


N043 · Once a loan turns NPA, two definitions decide every rate: tangible security and unsecured exposure.
> 1 C: Names-first card ("Security = tangible only · Unsecured = ≤10% ab-initio") on "unsecured exposure" [F18, F19]


N044 · Security means tangible security properly charged; guarantees, including State government guarantees, and comfort letters do not count.
> 1 N: "Tangible security ≠ guarantees / comfort letters" on "tangible security" [F18]


N045 · An unsecured exposure means realisable security at the start, ab initio, is not more than ten per cent of outstanding.
> 1 B: underline "≤ 10% ab-initio" on "ten per cent" [F19]


N046 · For a secured sub-standard asset, provide fifteen per cent on total outstanding, ignoring ECGC cover and available security.
> 1 N: "Sub-standard secured: 15% (ignore security/ECGC)" on "fifteen per cent" [F20]


N047 · If the sub-standard exposure was unsecured ab initio, add ten per cent, making twenty-five per cent total.
> 1 N: "Sub-standard unsecured ab-initio: 25%" on "twenty-five" [F21]


N048 · The infrastructure exception: unsecured sub-standard infrastructure loans take twenty per cent when cash flows are escrowed with a legal first claim.
> 1 N: "Infra unsecured sub-standard (escrow + first claim): 20%" · 2 G: "20%" on "twenty per cent" [F22]


N049 · Now move to doubtful assets. Many officers mistakenly apply the doubtful percentage to the entire loan balance.
> 1 C: Myth card ("Apply 40% to full balance?") on "entire loan"


N050 · Never do that. Split every doubtful loan into two parts: the unsecured shortfall takes one hundred per cent immediately.
> 1 B: strike myth · 2 N: "Doubtful unsecured part: 100%" (red) on "one hundred" [F23]


N051 · On the secured portion only, the rate climbs by age: twenty-five per cent up to one year, forty from one to three.
> 1 N: "Doubtful secured: D1 (≤1y) 25% · D2 (1–3y) 40%" (blue) on "forty" [F24]


N051a · Beyond three years in doubtful, even the secured portion takes one hundred per cent.
> 1 N: "D3 (>3y): 100%" on "one hundred" [F24]


N052 · Let us work one in full. Deccan Paper Mills has an eighty lakh loan, doubtful two years, with fifty lakh security.
> 1 S: calculator + split bar (₹50L blue, ₹30L red) · 2 N: "Deccan Paper (D2): O/S ₹80L · Sec ₹50L" on "fifty lakh"


N053 · Step one: unsecured part. Key in eighty minus fifty equals thirty lakh; at one hundred per cent, that is thirty lakh.
> 1 N: "80 − 50 = 30 × 100% = ₹30.00L" on "thirty lakh" [F23]


N054 · Step two: two years means D2, forty per cent on secured fifty lakh. Key in fifty times forty per cent equals twenty lakh.
> 1 N: "50 × 40 % = ₹20.00L" on "twenty lakh" [F24]


N055 · Add them: thirty plus twenty equals fifty lakh. The common wrong answer is thirty-two lakh, from taking forty per cent of eighty.
> 1 B: box "Total = ₹50.00L" · 2 C: Error card ("Trap: 80 × 40% = ₹32L is wrong") on "fifty lakh" [F23, F24]


N056 · Now a faded one on loss assets. Write off loss assets; if kept on books, provide one hundred per cent.
> 1 N: "Loss asset: write off, or 100%" on "one hundred" [F25]


N057 · Narmada Tools is a loss asset of twenty-four lakh with two lakh salvage value. What provision is needed?
> 1 N: "Narmada Tools (Loss): O/S ₹24L · Salvage ₹2L" · 2 H: 8 s on "needed?"


N058 · Twenty-four lakh — one hundred per cent, ignoring salvage. Also, deduct interest suspense from the loan first; it is not a provision.
> 1 N: "24 × 100% = ₹24.00L · Deduct Interest Suspense first" on "Twenty-four lakh" [F25, F26]


N059 · Finally, fraud. Upon detecting fraud, a bank normally provides one hundred per cent immediately, adjusting eligible financial collateral.
> 1 N: "Fraud: 100% immediately (adjust eligible financial collateral)" on "immediately" [F27, F29]


N060 · Today, banks may spread fraud provisioning over up to four quarters; across March thirty-one, debit other reserves and reverse next year.
> 1 N: "Option: up to 4 quarters · FY-end: debit 'other reserves' (not s.17(2))" on "four quarters" [F28]


N061 · Pause now for three checks. First: what rate hits an unsecured infrastructure sub-standard loan with a legal first-claim escrow?
> 1 C: Pause Check 2 (Q1–Q3) · 2 H: 3 s on "escrow?"


N062 · Second: a D1 loan of sixty lakh has forty lakh security — how much provision? Third: can statutory reserve cover fraud spreading?
> 1 H: 8 s on "spreading?"


N063 · Answers: twenty per cent for escrow infrastructure; thirty lakh for D1, twenty unsecured plus ten secured; and no, only other reserves.
> 1 N: ticks on 20%, ₹30L, No (other reserves only) on "Answers:" [F22, F23, F24, F28]


N064 · One thing to remember: sub-standard ignores security, doubtful splits secured from unsecured, and loss or fraud takes one hundred per cent.
> 1 M: node "Asset quality: provisions" added on "provisions" [F20, F23, F25, F27]

## Chapter 3 · Wilful defaulters, accelerated provisioning, and ECL

N065 · Quick recall from last chapter: what makes an exposure unsecured ab initio?
> 1 S: branch desk returns to Kaveri Granites · 2 H: 3 s on "ab initio?"


N066 · Realisable tangible security not more than ten per cent of outstanding at the start.
> 1 N: "Recall: ≤10% tangible security ab-initio" on "ten per cent" [F19]


N067 · Remember Kaveri Granites from our opening? Its director appears twice on the List of Wilful Defaulters, where the threshold is twenty-five lakh.
> 1 N: "Wilful defaulter threshold: ₹25L (Large defaulter: ₹1 cr)" on "twenty-five lakh" [F31]


N068 · Under IRACP twenty-twenty-five, an existing standard loan to a company with a director listed more than once attracts five per cent provision.
> 1 B: box "Option B: 5% = ₹6.00L" on "five per cent" [F33]


N069 · Government or FI distress nominees are exempt; wilful defaulters face a one-year credit bar, and five years for new ventures, after removal.
> 1 N: "Govt/FI distress nominees exempt · Credit bar: 1 yr / 5 yrs new ventures" on "five years" [F32, F33]


N070 · If that wilful-defaulter account turns NPA, accelerated provisioning kicks in, pushing rates sharply higher.
> 1 N: "Accelerated: SS-sec 6m–1y 25% · SS-unsec 6m–1y 40% · D1 sec 40% · D2 BOTH 100%" on "sharply higher" [F34]


N071 · Write this down: in Doubtful two, accelerated provisioning jumps to one hundred per cent on both secured and unsecured portions.
> 1 B: box "D2 accelerated: 100% secured AND unsecured" on "both secured" [F34]


N072 · Your turn. Kaveri Granites slips to Doubtful one, balance one hundred lakh, security sixty lakh. Compute its accelerated provision.
> 1 S: calculator prompt · 2 N: "Your turn: D1 Accelerated · O/S ₹100L · Sec ₹60L" · 3 H: 15 s on "provision."


N073 · Unsecured is one hundred minus sixty equals forty lakh at one hundred per cent; secured sixty times forty per cent equals twenty-four lakh.
> 1 N: "100 − 60 = 40; 60 × 40 % = 24" on "twenty-four lakh" [F34]


N073a · Total accelerated provision is sixty-four lakh — nine lakh higher than the fifty-five lakh regular D1 charge.
> 1 B: box "₹64.00L (+₹9L vs regular ₹55L)" on "sixty-four lakh" [F24, F34]


N074 · Banks must declare wilful defaulters within six months of NPA; an April twenty-twenty-six amendment aligns this rule to ECL from April twenty-twenty-seven.
> 1 N: "Declare within 6m of NPA · 2026 Amendment eff. 1 Apr 2027 (issued, coming)" on "six months" [F35]


N075 · Also, for large exposures of fifteen hundred crore and above, delaying a resolution plan past one eighty days adds twenty per cent.
> 1 N: "Delayed RP (≥₹1,500 cr): +20% (180d) · CRILC ≥₹5 cr" on "twenty per cent" [F36, F37]


N075a · Past three hundred sixty-five days, add another fifteen per cent — thirty-five per cent total, capped at one hundred per cent.
> 1 N: "+15% at 365d = 35% total (cap 100%)" on "thirty-five" [F36]


N076 · Keep the cut-off clear: RBI's Expected Credit Loss directions were issued in April twenty-twenty-six, effective only from one April twenty-twenty-seven — issued, coming.
> 1 C: Cut-off card ("31 Dec 2026 = IRACP 2025 · ECL 2026 = issued, coming 1 Apr 2027") on "issued, coming" [F41]


N077 · ECL brings three stages, removes the four-quarter fraud spread, and phases CET1 impact over four years — never use LGD in today's sums.
> 1 N: "ECL (1 Apr 2027): 3 stages · no 4-qtr fraud spread · 4-yr CET1 phase-in" on "today's sums" [F41]


N078 · Pause check: first, what rate hits a standard loan when a director appears twice in the wilful defaulters list?
> 1 C: Pause Check 3 (Q1–Q2) · 2 H: 3 s on "list?"


N078a · Second: when do the Expected Credit Loss directions take effect?
> 1 H: 3 s on "effect?"


N079 · Answers: five per cent on the standard loan, and one April twenty-twenty-seven for ECL, so IRACP twenty-twenty-five governs your exam.
> 1 N: ticks on 5% and 1 Apr 2027 on "Answers:" [F33, F41]


N080 · One thing to remember: repeat wilful defaulters jump standard loans to five per cent and push D2 NPAs to one hundred per cent.
> 1 M: node "Asset quality: wilful defaulters" added on "wilful defaulters" [F33, F34]

## Chapter 4 · PCR, floating provisions, and mixed check

N081 · Quick recall: for a delayed resolution plan past one eighty days on an eighteen hundred crore loan, what additional provision applies?
> 1 S: bank-level portfolio board · 2 H: 3 s on "applies?"


N082 · Twenty per cent additional specific provision, rising by another fifteen per cent at three hundred sixty-five days.
> 1 N: "Recall: +20% (180d) / +35% (365d)" on "Twenty per cent" [F36]


N083 · Now zoom out to the whole bank: Provisioning Coverage Ratio, PCR, equals total NPA provisions divided by Gross NPAs, times one hundred.
> 1 C: Names-first card ("PCR = Provisions ÷ Gross NPAs × 100") on "PCR" [F38]


N084 · Many candidates still quote seventy per cent as an ongoing RBI floor. That is a classic exam trap.
> 1 C: Trap card ("Ongoing 70% RBI floor? NO — bank's discretion") on "classic exam trap" [F38]


N085 · RBI prescribes no ongoing minimum PCR today; seventy per cent was a one-time September twenty-ten norm creating the countercyclical buffer.
> 1 N: "No ongoing minimum · 70% was 30 Sep 2010 one-time buffer (RBI approval to use)" on "no ongoing minimum" [F38, F39]


N086 · Floating provisions are extra cushions usable only in extraordinary downturns with Board and prior RBI approval, never reversed to P&L.
> 1 N: "Floating: extraordinary use only (Board + RBI) · Never reversed to P&L" on "extraordinary" [F40]


N086a · Until used, either net floating provisions from Gross NPAs or count them in Tier two within the one point two five per cent cap.
> 1 N: "Net from GNPA OR Tier 2 (within 1.25% RWA cap)" on "Tier two" [F40]


N087 · Let us compute PCR: Gross NPAs four hundred crore, specific provisions two sixty crore, non-Tier-two floating provisions twenty crore.
> 1 S: calculator · 2 N: "GNPA ₹400 cr · Specific ₹260 cr · Floating ₹20 cr" on "twenty crore"


N088 · Add two sixty plus twenty equals two eighty; divide by four hundred, times one hundred equals seventy per cent.
> 1 N: "260 + 20 = 280 ÷ 400 × 100 = 70.00%" · 2 B: box "70.00%" on "seventy per cent" [F38, F39]


N089 · Never add standard asset provisions to the PCR numerator; that is the commonest mistake in exam sums.
> 1 C: Error card ("Exclude Standard Asset Provisions from PCR") on "standard asset" [F11, F39]


N090 · Final mixed check — pause and answer three quick ones. First: what standard rate applies to a CRE loan?
> 1 C: Mixed Check (Q1–Q3) · 2 H: 3 s on "CRE loan?"


N090a · Second: what rate hits a sub-standard secured loan? Third: can floating provisions be reversed to profit and loss?
> 1 H: 5 s on "profit and loss?"


N091 · Answers: one per cent for CRE, fifteen per cent for sub-standard secured, and no — floating provisions can never be reversed to P&L.
> 1 N: ticks on 1.00%, 15%, Never reversed to P&L on "Answers:" [F5, F20, F40]


N092 · One thing to remember: PCR divides NPA provisions by Gross NPAs, excludes standard provisions, and has no ongoing RBI minimum.
> 1 M: node "Asset quality: PCR" added on "PCR" [F38, F39]

## Close

N093 · Look at the blank Asset Quality branch on screen and name the four nodes we added today before they appear.
> 1 S: Module D mind map with 4 blank boxes · 2 H: 5 s on "appear."


N094 · Provisions, PCR, wilful defaulters, and UFCE — all sitting under Asset Quality on your balance-sheet map.
> 1 M: all 4 nodes illuminate ("provisions · PCR · wilful defaulters · UFCE") on "UFCE"


N095 · You can now compute standard, UFCE, sub-standard, doubtful, loss, fraud, wilful-defaulter, and PCR numbers under rules as at thirty-one December twenty-twenty-six.
> 1 C: Summary card ("D3.2 complete · IRACP 2025 as at 31 Dec 2026") on "thirty-one December"


N096 · Homework tonight: take a fifty crore standard CRE loan whose borrower has UFCE potential loss at forty per cent of EBID. Compute total provision.
> 1 C: Homework card ("₹50 cr CRE standard + UFCE 40% of EBID = ?") on "total provision."


N097 · Next class, we work a five-question NPA case — and ask: with ECGC or CGTMSE cover, do you deduct security first or the guarantee first?
> 1 C: Preview card ("Next: Multi-borrower case + ECGC/CGTMSE + IBC & NARCL") on "guarantee first?"


N098 · That is provisioning, from standard loans to PCR. Close your notes, take a breather, and we will work a full case next class.
> 1 S: notebook closes neatly on "next class."