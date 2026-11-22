# A13 c1 · independent review: SUBJECT EXPERT

- **Reviewed**: `course/bfm/A/A13/script_class.md` c1 (N001–N081 and cue sheet), `numericals.md` (Q1, Q1b, V, Q2,
  Q3, homework), `practice.md` (P1–P20 and answers), fact sheet `research/bfm/facts/A4.6-A5.10_A13.md` (F1–F31,
  leads, exam evidence), checker `tools/check/import_bills.py`; context `plans_A.md` §A13, `research/bfm/depth/A.md`
  A5.7–A5.10, `course/spec/lesson_spec.md`, `research/pedagogy/teaching_method.md`, `CLAUDE.md` hard lines, A12
  `numericals.md` (for the N002–N003 homework). 2026-11-22, fresh context.
  `python3 tools/check/import_bills.py` run: **all OK** (19 sums, 2 dates). The A12 homework answer in N003 (₹87,00,000;
  loss ₹1,20,000 against ₹85,80,000) matches A12 Q1.
- **Primary texts fetched and read (2026-11-22)**:
  - **FEM (Export and Import of Goods and Services) Regulations 2026**, consolidated "amended up to 2 Nov 2026"
    (rbi.org.in Id=13277): reg 1(2) in force 1 Oct 2026; reg 4(2) debit only after genuineness, **simultaneously**
    close/update IDPMS; second proviso: BoE (goods) / invoice (services) **up to ₹10 lakh** → importer's declaration,
    or quarterly bulk declaration; reg 7 set-off; reg 8 third party; **reg 9** pay "within the period specified in the
    underlying contract", AD may extend on reasons; **reg 10(2)** same AD for advance and later payments (switch after
    intimating both); **10(3)** genuineness, AD "may consider specifying thresholds" above which SBLC/guarantee;
    **10(4)** interest on delayed import payments ≤ TC all-in-cost ceiling; **reg 11** "Save as otherwise provided in
    the Act, Rules, Regulations or **Directions** made there under … no advance remittance … for the import of gold
    or silver"; **reg 12** repatriate; else future advances only against unconditional irrevocable SBLC / guarantee of
    an international bank of repute / AD guarantee against its counter-guarantee; reg 16 MTT 6 months, seller/buyer
    only, both EDPMS and IDPMS; **reg 18(1)(c)** non-EDI port: AD enters import in IDPMS within **5 working days** of
    receipt of documents; **(d)** services: only importer "other than a resident individual" and value **> ₹10 lakh**
    (2nd Amendment, w.e.f. 1 Oct 2026); (e), (f), (h) mark off after payment, (j), (k), (l); reg 19 policy/SOP.
  - **A.P. (DIR Series) Circular No. 20, 16 Jan 2026** (Id=13278): para 2 (FEMA + FTP), para 4 Import MD and Annex
    circulars superseded, para 7 in force 1 Oct 2026; **Annex B lists 71 import circulars** (counted). Annex B does
    **not** list A.P. (DIR) 04 of 25 May 2022 (gold by Qualified Jewellers through IIBX), 07 of 10 Nov 2023 (silver,
    QJ) or 14 of 31 Jan 2024 (gold, India-UAE CEPA TRQ holders).
  - **A.P. (DIR Series) Circular No. 04, 25 May 2022** (RBI/2022-2023/57, Id=12324): "AD banks may allow Qualified
    Jewellers to remit advance payments for **eleven days** for import of Gold through IIBX"; unutilised advance back to
    the same AD within 11 days.
  - **FEM (Manner of Receipt and Payment) Regulations 2023**, as amended 10 Feb 2025 (Id=12579): reg 3(2)(I)(a)(i)
    Nepal and Bhutan → INR (export to Nepal may be in FCY if NRB permits); (ii) ACU members other than Nepal and Bhutan:
    resident-to-resident payments "through ACU mechanism, or as per the directions issued by the Reserve Bank";
    "all other transactions" as (iii); (iii) others → INR or any foreign currency; (b) FTP manner; account proviso.
    Footnote: old non-ACU-supplier proviso deleted.
  - **ACU**: A.P. (DIR) 22 of 17 Mar 2020 (Id=11825): ACU Dollar / Euro / Yen = 1 USD / 1 EUR / 1 JPY, from 6 Mar
    2020; separate ACU accounts with correspondents; para 6: ACU Euro suspended from 1 Jul 2016 (A.P. DIR 81).
    A.P. (DIR) 43 of 2008 (Id=4718) read.
  - **Master Direction – ECB, Trade Credits and Structured Obligations, updated 8 Sep 2026** (id=11510): Part I paras
    1–12 shown "[Deleted]"; Part II in force: para 13 definition; **para 14 table**: buyers'/suppliers' credit;
    importer resident in India; **USD 150 m** (oil/gas refining & marketing, airline, shipping) / **USD 50 m** others
    per import transaction; lenders (supplier abroad; banks, FIs, foreign equity holders abroad, FIs in IFSCs; foreign
    branches/subsidiaries of Indian banks **FCY TC only**); period from shipment: capital **3 years**, non-capital
    **1 year or operating cycle whichever is less** (shipyards 3 years); all-in-cost **benchmark + 300 bps** (new FCY
    TC; +350 old LIBOR-linked) / **+250 bps** INR; INR→FCY change not permitted; **16.1** AD guarantees (≤ TC amount,
    ≤ TC period), "**Issuance of LoU / LoC for Trade Credits … is not permitted**"; 16.2 other security; **17.1** Form
    TC monthly by the 10th; Note: suppliers' credit beyond 180 days reported; para 18 "lower of operating cycle or one
    year".
  - **FEM (Borrowing and Lending) (First Amendment) Regulations 2026** (Id=13306): 2(1)(e) benchmark rate; **2(1)(ah)**
    TC definition and Explanation (suppliers' credit by the overseas supplier; buyers' credit = loans arranged by the
    importer from an overseas bank or FI); Schedule I **para 4(3)(a)** TC with original maturity up to 3 years not ECB;
    **para 7** (not 6) cost: (1) "in line with prevailing market conditions", (2) ECB of average maturity < 3 years must
    follow the TC ceiling.
  - **FEDAI Rules 10th ed., updated 20 Aug 2026** (PDF): **3.1(a)** retirement → hedge contract rate if any, else
    "Prevailing Bill Selling rate"; **(b)** crystallisation "same as above"; **3.2(a)** bills negotiated under import
    LCs carry "commercial rate of interest as applicable to banks' domestic advances"; **3.3** unpaid FCY import bills
    under LC crystallised "as per the stated policy of the bank"; **5.4(iii)** delivery date = retirement /
    crystallisation, whichever is earlier.
  - **Old Import MD (superseded)** (id=10201): B.5.1(i) 6 months from shipment (COVID 12 months to 31 Jul 2020);
    B.5.4(i) extension 6 months at a time, max 3 years; C.1.1(i)(a) USD 200,000 → SBLC/guarantee; (b) board policy up
    to USD 5,000,000, not PSU/Govt; (c) PSU/Govt MoF waiver above USD 100,000; (v) physical import 6 months / 3 years;
    **C.10(i)** evidence within 3 months of remittance, follow-up next 3 months, at least one registered letter;
    **C.10(ii)** "submission of a separate **BEF Statement** … required till the half year ended December 2017 and
    discontinued thereafter" (IDPMS); C.11.2 gold-jewellery TC 90 days; C.11.3/C.11.4/C.12.3 the IIBX 11-day advances.
  - Web search (leads only) for any newer TC or import change before 31 Dec 2026: nothing newer than the texts above.
- **Trap-card figures**: every old figure (6 months, 6-month extensions up to 3 years, USD 200,000 / 5 million /
  100,000, 3 + 3 months follow-up) is quoted correctly from the old MD and correctly labelled superseded.
- **Definitions**: suppliers' vs buyers' credit (N047, card) match BL 2(1)(ah) Explanation; pledge vs hypothecation
  (N042) correct (ICA s. 172; SARFAESI s. 2(1)(n)); bill of entry (N062) correct (Customs Act s. 46); IDPMS (N063–N064)
  correct against reg 4(2), 18(1)(e)–(h).
- **Sums**: all correct; every key sequence is a basic 8-function, 12-digit calculator sequence (×, ÷, %, +).

## Findings

| # | Sev | Line | Finding | Suggested fix (source) |
|---|---|---|---|---|
| 1 | **High** | N019, N021a–N022, N073, card "gold, silver: no advance remittance", practice P6 | Taught as an absolute: "No advance at all for importing gold or silver." Reg 11 opens "**Save as otherwise provided in the Act, Rules, Regulations or Directions**", and the directions that allow an **11-day advance** for imports **through IIBX** (A.P. DIR 04 of 25 May 2022: Qualified Jewellers, gold; DIR 07 of 10 Nov 2023: QJ, silver; DIR 14 of 31 Jan 2024: CEPA TRQ holders, gold) are **not** in DIR 20's Annex B list of superseded circulars, so they appear to stand. IIBF listed DIR 14/2024 in its BFM RBI-circulars note for Jan–Jun 2024, so an option "allowed for qualified jewellers through IIBX" is a live risk. P6's distractor (d) "allowed for nominated agencies only" also brushes against this. | Say: "No advance for gold or silver, with one narrow exception: qualified jewellers (and, for gold, CEPA quota holders) may send an advance of up to eleven days for imports through the bullion exchange in GIFT City, IIBX." Card: "gold, silver: no advance (reg 11) · except IIBX route: QJ / TRQ holders, 11-day advance (A.P. DIR 04/2022, 07/2023, 14/2024)". Change N073 to "a jeweller importing gold through the ordinary route"; P6 stem "outside the IIBX route", and fix option (d). Add a row to the fact sheet and re-check at the freeze that these circulars have not been withdrawn. (R26 reg 11; DIR 20 Annex B; A.P. DIR 04/2022 para 3) |
| 2 | Medium | N040–N041, numericals Q2 | Interest is charged only for the 20 days **after** crystallisation. Under a sight LC the bank was out of funds from the day it paid abroad (documents arrive Mon 5 Apr) to crystallisation (Thu 15 Apr); FEDAI 3.2(a) makes bills negotiated under import LCs carry the commercial rate, which normally runs from the bank's payment. An examiner's "total recovered" case would include those 10 days, so the lesson teaches an incomplete total. | Either add the 10 days (e.g. interest from 5 Apr to 5 May = 30 days on the rupee amount, or state the bank's policy for the pre-crystallisation period), or say plainly in N040 and on the card: "the case's bank charges interest from crystallisation; banks also recover interest from the day they paid abroad." Update the checker. (FEDAI 3.2(a), 3.3) |
| 3 | Medium | Ch 3 (after N053/N054) | Missing a classic testable point: **ADs may issue bank guarantees for trade credit (not above the TC amount, not beyond the TC period), but Letters of Undertaking / Letters of Comfort for TC are not permitted**. It is in the fact sheet (F20) and is a standard MCQ (LoU ban since 2018). The status line says "TC reporting forms (card only)" but no such card exists in the cue sheet. | Add one card (no extra voice needed, or one sentence): "security: AD guarantee ≤ TC amount and period ✓ · LoU / LoC ✗ · Form TC monthly by the 10th". (ECB-TC MD paras 16.1, 17.1) |
| 4 | Medium | Ch 4 (N063 / N067); fact sheet "Leads" | Plan v3 addition (8) and the depth checklist A5.9 ask for "**IDPMS replaced the BEF statement**". The fact sheet says this was "not found in the texts read", but the old MD **C.10(ii)** says it: with IDPMS, the separate **BEF statement** was required only up to the half year ended December 2017 and discontinued thereafter. Not covered in the script. | Add to the N063 card: "replaced the half-yearly BEF statement (discontinued after Dec 2017)". Correct the fact sheet lead. (Old Import MD C.10(ii), footnote 37; A.P. DIR 65 of 28 Apr 2016) |
| 5 | Low | Ch 1 (after N017) or ch 3 | Reg 10(4) is not taught: interest on **delayed import payments** must not exceed the **TC all-in-cost ceiling**. It links ch 1 and ch 3 and is a fair "which ceiling applies" question. | One line or a card in ch 3: "interest on delayed import payments ≤ TC all-in-cost ceiling (reg 10(4))". (R26 reg 10(4)) |
| 6 | Low | N012a | "go through the A-C-U": MRP reg 3(2)(I)(a)(ii) says "through ACU mechanism, **or as per the directions issued by the Reserve Bank**", and only for payments between residents of participant countries; other transactions as for other countries. | "normally go through the A-C-U" on the card; keep the voice line. (MRP reg 3(2)(I)(a)(ii)) |
| 7 | Low | N011 | "by collection, where the bank sends the documents against payment or acceptance": on the importer's side the bank **receives** the documents and **hands them over** only against payment (D/P) or acceptance (D/A). | "…where the bank hands over the documents only when the importer pays or accepts." |
| 8 | Low | N066 | "an entry only for a firm, not a resident individual": the text is "a person other than a resident individual" (companies, firms, LLPs, trusts etc.). "Firm" is narrower in banking usage. | "only for a business or other entity, not a resident individual, and only above ten lakh". (R26 reg 18(1)(d)) |
| 9 | Low | N056, trap card | "The 2026 changes removed the cap for ECB": true for ECBs of average maturity 3 years or more (cost "in line with prevailing market conditions"); ECBs of 1–3 years must still follow the TC ceiling. | Card: "ECB (3 years+): no ceiling, market rate · trade credit: ceiling stays". (BL Schedule I para 7(1), (2)) |
| 10 | Low | N010 card | IEC is needed "unless exempted" (fact sheet F2); card omits the exemption. | Add "(unless exempt)". (FTP 2.05) |
| 11 | Low | N030a | "on 10 lakh dollars: ₹200" uses the two rounded rates (86.0519 − 86.0517); the unrounded gap is ₹154. Fine as a rounded-rate statement. | Keep, or "about two hundred rupees". |
| 12 | Low | fact sheet F19 | Cites "Schedule I para 6(2)"; the cost clause is **para 7(2)** in the substituted Schedule I. | Correct the cite. (BL First Amendment 2026, Schedule I para 7) |

Checked and correct (no change): the 1 Oct 2026 switch and "71 circulars" (N009); Nepal/Bhutan INR (N012, P2); ACU
units and ACU Euro suspended since 2016 (N012a, P3); contract period + AD extension (N013–N015, P1); advance on the
AD's genuineness check and own threshold, same AD (N017, P4); reg 12 future advances (N020, P5); FEDAI 3.1 retirement
and crystallisation rates, no flip (N026, N038, P7); FEDAI 3.3 bank's stated policy (N036); FEDAI 3.2(a) commercial
rate (N040); forward delivery date whichever earlier (N044 card, FEDAI 5.4(iii)); TC definitions, lenders, FCY-only
for Indian banks' foreign branches, INR TC, periods, amounts, 300/250 bps (N047–N056, P10–P15); TC ≤ 3 years not ECB
(N048, P13); bill of entry, EDI/non-EDI 5 working days, simultaneous closure, ₹10 lakh declaration, services rule
(N062–N066, P16–P18); merchanting 6 months, both systems (N068, P20); all old-rule trap figures.

## Verdict

**ADOPT WITH FIXES.** The lesson is accurate on every core rule and number, the superseded figures are correctly
fenced as trap cards, and all sums check. Fix #1 (the gold/silver absolute, which a current direction contradicts)
before locking, and #2–#4; the Low items are optional polish.
