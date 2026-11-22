# A13 c1 · Independent review: EXAMINER (fresh context, 2026-11-22)

Script: `course/bfm/A/A13/script_class.md` c1 (warm-up, four chapters: rules for paying · retiring the bill · trade
credit · proof of import: IDPMS, close; voice N001–N081 with cue-sheet cards). Read with: `numericals.md` c1,
`practice.md` c1 (20 items), fact sheet `research/bfm/facts/A4.6-A5.10_A13.md` (F1–F31, Leads); syllabus A4.6, A5.7,
A5.8, A5.9, A5.10, C3.5 (`syllabus_official.md`; `coverage.csv` rows all → A13); plans_A §A13 (question kinds, traps,
11 v3 additions); depth/A.md A5.7–A5.10; importance_map (A-EXIMP 7/7 cycles, 22 mentions; A-FXNUM 7/7, 32);
items_tagged (Supplier Credit Dec 2023 and Dec 2025; Asian Clearing Currency Dec 2025; Importer Dec 2025; Trade
Credit Dec 2025; Retirement of Import Bill Jun 2026); fullpaper_tagged (Oliveboard Dec 2025 Q33 importer's 60-day
forward; Q78 "Which is NOT TRUE in respect of Trade Credits?"). Primary texts spot-checked from the session's
download cache: FEDAI Rules 10th ed. Rule 3 (3.1, 3.2, 3.3), ECB-TC Master Direction para 16.1 (LoU/LoC ban), old
Import MD B.5.1 and C.1.1. `python3 tools/check/import_bills.py`: **all OK** (22 lines). Rates and sums recomputed
independently (Decimal); dates Mon 5 Apr 2027 + 10 = Thu 15 Apr; + 20 = Wed 5 May ✓.

## Verdict: **ADOPT WITH FIXES**

The lesson is accurate and well aimed. The 2026 switch (contract period, AD extension, AD's own advance threshold,
gold/silver ban, reg 12 after a failed import) is voiced and carded; FEDAI 3.1 (retirement and crystallisation at
bill selling or the forward rate, no flip) is drilled with the A12 contrast; the bill-selling build is margin on
margin with the "margins added" trap broken; trade credit has every testable number (USD 50 m / 150 m, 3 years vs
"1 year or operating cycle, whichever is less", from shipment, + 300 / + 250 bps, ≤ 3 years not ECB, lenders, FCY-only
for Indian banks' overseas branches, INR TC); IDPMS has bill of entry, EDI / non-EDI, the genuineness-then-debit
step, the ₹10 lakh declaration and the services rule; ACU and Nepal/Bhutan are in. Practice (20 items, keys all
correct) exceeds the plan's 3.

What keeps it from ADOPT: (a) the **"NOT TRUE about trade credit"** form, which is a recalled full-paper item (Q78),
has one classic statement the lesson never teaches: **banks may not issue a Letter of Undertaking / Comfort for
trade credit** (they may give a guarantee); (b) the **crystallisation day** is left as "older books gave a fixed day"
with no day named, while the case's own "tenth day" policy will be remembered as the rule; (c) old-key items: the
lesson marks old figures "✗ gone" but never tells the learner what to do when an exam question still uses them, and
one classic old figure (physical import within 6 months / 3 years of an advance) is missing; (d) the interest step
of the crystallisation case charges nothing for the days between the bank's payment and crystallisation, without
saying that this is the case's assumption.

Length: **1,731 spoken words** (≈ 12.4 min at 140 wpm) + **153 s** of holds ≈ **14.9 min**: at the top of the band.
The fixes below add about 60 words; pay for them with the cut list (N030a, about 10 words) and the trims in finding
10, so the lesson stays at or under 15:00.

Answerable from this lesson (with A05 for the forward build) alone: **6 of 10 fully, 4 partly, 0 not.** After
fixes 1–4: 9 fully, 1 partly (Q2 relies on A05 by design).

## Ten exam-style questions

Written from the syllabus and the fact sheet, not from the script. Figures illustrative; sums recomputed in Decimal
and on the 8-function key sequence.

| # | Kind | Question (key) | Traps in the options | Lesson answers it? |
|---|---|---|---|---|
| 1 | calculate | Interbank USD/INR 86.10 / 86.12; TT selling margin 0.15 %; bill selling a further 0.20 %. An import bill of USD 40,000 under LC is retired, no forward cover. Rupees payable: **₹34,56,868** (`86.12 × 1.0015 = 86.24918 × 1.002 = 86.4217`; `40000 × 86.4217`) | ₹34,56,856 (margins added, 86.4214) · ₹34,49,968 (TT selling only) · ₹34,56,064 (started from the bid, 86.4016) | **Yes**: N025–N034 (ask side, margin on margin, the "added margins" trap card N030), P8 |
| 2 | calculate (Dec 2025 Q33 form) | An importer owes USD 100,000 due in 60 days. Spot 83.50 / 83.52; 2-month premium 0.30 / 0.32; exchange margin 0.10 %. The rate the bank quotes for a forward sale, and the rupee outflow: **₹83.9238; ₹83,92,380** (`83.52 + 0.32 = 83.84 × 1.001`) | 83.50 + 0.30 (bid side) · spot only (no premium) · premium deducted | **Partly**: A13 says "or the forward rate" (N026) and P9 uses a given forward rate, but never rebuilds an importer's forward; the build is A05's. Acceptable by design; a one-line back-link helps (finding 9) |
| 3 | apply (case) | The hospital booked a forward sale at ₹86.25 for its sight import bill under LC. It does not retire; the bank crystallises. The rate, and the contract's delivery date: **₹86.25; the date of retirement or crystallisation, whichever is earlier** [F21, F23] | TT selling on the crystallisation day · bill selling of that day · delivery on the bill's due date | **Yes**: N043a–N044 and its note "retirement or crystallisation, whichever first"; P7 |
| 4 | compare / exception (Dec 2025 Q78 form) | Which is **NOT TRUE** about trade credit at 31 Dec 2026? (a) non-capital goods: up to 1 year or the operating cycle, whichever is less (b) **AD banks may issue a Letter of Undertaking / Letter of Comfort to the overseas lender** (c) FCY TC all-in cost: benchmark + 300 bps (d) TC may be in INR. **Key (b)** [F20; TC MD 16.1] | each other option is a true current statement | **Partly**: (a), (c), (d) are taught (N050a, N052, N054), so (b) can be found by elimination only. A variant where the true statement is "AD may give a bank guarantee for TC" and a false one is something else cannot be placed. LoU/LoC is never said; the header's "TC reporting forms (card only)" card does not exist (finding 1) |
| 5 | apply (case) / who | A shipping company imports an engine for USD 120 million on buyers' credit for 30 months, **in rupees**, from the **Singapore branch of an Indian bank**. Which is correct? **(c) not permitted from that lender in INR; the same branch may lend in foreign currency** [F16, F17, F15] | (a) permitted on the automatic route (b) not permitted: above USD 50 m (d) it is an ECB, being over 1 year | **Yes**: N053 (USD 150 m for shipping), N048 (≤ 3 years not ECB), N050 (Indian banks' overseas branches: FCY only); P14, P15 |
| 6 | when / old vs new | An import bill under LC is not retired. "As per FEDAI rules", it is crystallised: **current key: as per the bank's stated policy** (FEDAI 3.3, 10th ed.); an old-bank key: **the 10th day after receipt of documents** (older editions; verify) | 30th day after receipt (the export rule learners carry over from A12) · date of negotiation abroad · due date of the LC | **Partly**: "bank's policy" is taught (N036), but N036 only says "older books gave a fixed day", and the case's policy (N039, "the tenth day") will read as the rule. A learner cannot tell an old 10-day key from A12's 30-day key (finding 2) |
| 7 | apply (case) / exception | An importer's earlier advance neither led to an import nor was repatriated. It now asks for an advance of USD 80,000 for machinery. The AD: **may allow it only against an unconditional irrevocable SBLC / guarantee of an international bank of repute (or an AD's guarantee against such a bank's counter-guarantee)** [F10] | allow freely, as it is below USD 200,000 · only with a Ministry of Finance waiver · only with RBI approval | **Yes**: N020 and its card; P5 |
| 8 | old vs new | (Old-bank item) "An AD may allow advance remittance for import of goods without a bank guarantee up to: (a) USD 100,000 (b) **USD 200,000** (c) USD 500,000 (d) USD 5 million". Key under the superseded MD: **(b)**; under the 2026 rules there is no RBI figure [F7, F8] | 100,000 (the old PSU/MoF figure) · 5 million (the old board-policy waiver) | **Partly**: N018 shows all three numbers, correctly labelled, but the voice says "Those are gone" and the card marks them ✗. A learner told "✗" may refuse to pick (b) when no "AD's own policy" option is offered. No line tells the learner how to answer an old-key item (finding 3) |
| 9 | define / how much | Which is correct about IDPMS? (a) an entry is needed for every import of services above ₹5 lakh (b) **for goods through a non-EDI port, the AD enters the import in IDPMS within 5 working days of receipt of documents** (c) entries up to ₹10 lakh can be closed only by RBI (d) IDPMS replaced EDPMS in 2016 [F24–F26] | as listed | **Yes**: N063a, N065, N066, N063 card (2016, twin of EDPMS). But N063a is on the cut list; if cut, this and P18 become unanswerable (finding 7) |
| 10 | define / how (Dec 2025 "Asian Clearing Currency") | Which is correct about the ACU? (a) payments to Nepal and Bhutan settle through the ACU (b) **ACU Euro operations are suspended; ACU Dollar and ACU Yen are in use** (c) a payment to a supplier in Sri Lanka is made outside ACU in USD as a matter of course (d) ACU units are pegged to the SDR [F3, F4] | as listed | **Yes**: N012–N012a and the card "units: ACU Dollar, ACU Euro (suspended since 2016), ACU Yen"; N023–N024; P2, P3 |

## Findings

| # | Sev | Line | Finding | Suggested fix (ready words; spoken sentences ≤ 25 words) |
|---|---|---|---|---|
| 1 | **High** | N054 / header | **The LoU/LoC ban and the TC security rule are missing.** F20 (TC MD 16.1, confirmed in the text: "Issuance of Letter of Undertaking (LoU) / Letter of Comfort (LoC) for Trade Credits … by AD Category-I banks is not permitted"; AD guarantee allowed, not above the TC amount or beyond its period). The recalled full paper asks "Which is NOT TRUE in respect of Trade Credits?" (Q78), and the LoU statement is the classic false option since 2018. The header says "TC reporting forms (card only)", but no such card exists. Q4 only by elimination. | After N054 add **N054a** "Security? A bank here may guarantee it, within its amount and period. But a letter of undertaking or comfort? Not permitted." (22 words). Card: "AD guarantee for TC ✓ (≤ TC amount, ≤ TC period) · LoU / LoC for TC ✗ not permitted · reported monthly in Form TC · INR → FCY switch ✗" [F20]. Add a practice item: "Which is NOT permitted for trade credit? (a) AD guarantee (b) LoU/LoC by an AD (c) INR denomination (d) an IFSC lender. Key (b)." |
| 2 | **Medium** | N036, N039 | **The crystallisation day is unnamed, and the case's day looks like a rule.** A12 names its old figure ("30th day", history); A13 says only "older books gave a fixed day". The plan lists "crystallisation day for import bills" as a trap. Old FEDAI editions (to be verified from an older edition; the 10th edition says only "stated policy") fixed the **10th day after receipt of documents**, which is the very day the case uses; a learner then holds "import 10 days (rule?) / export 30 days (old)". Q6 partly. | Verify the old Rule 3.3 day in a pre-10th FEDAI edition and add it to F22 as an old-rule row. Then N036: "On which day? The bank's own stated policy. Older books said the tenth day after the documents arrive; exam cases give the day." Card: "today: bank's stated policy ✓ · older books: 10th day after documents (old FEDAI) · export (A12): old 30th day". N039: "Our bank's policy keeps that tenth day." If the old day cannot be verified, label N039's day on screen "the case's policy, not a rule". |
| 3 | **Medium** | N015, N018, N067 | **No answering rule for old-key items.** The lesson shows every superseded number but voices "history now", "Those are gone", and cards them ✗. IIBF banks lag; a May/June 2027 item may still read "advance without guarantee up to ___" with only numbers in the options. A learner trained to see "✗" may not choose USD 200,000 there. (A11 has the same gap; this is a course-level choice, so also record it in `A/STATUS.md` for A00/A11.) Q8 partly. | Add to N018 (replace "Those are gone."): "They're gone now. But if an exam question offers only these numbers, it's using the old rule: answer with it." (21 words). Change the ✗ on the three old-figure cards (N015, N018, N067) to "old rule (superseded 1 Oct 2026) · answer only if the question uses the old frame". |
| 4 | **Medium** | N018 card / N020 | **A classic old figure is missing: physical import against an advance within 6 months (3 years for capital goods)** [F8, OMD C.1.1(v)]. It is in the fact sheet's "older books" list but not on any card or practice item, so an old-key item on it cannot be placed. (The old extension "6 months at a time, up to 3 years" is on N015's card only: fine.) | Add to N018's trap card: "· physical import within 6 months of the advance (3 years, capital goods) ✗ old · today: the contract; if no import, repatriate (reg 12)". Practice: add a T/F "From 1 Oct 2026 goods against an advance must be imported within 6 months. (False: old MD.)" |
| 5 | **Medium** | N039–N041, numericals Q2 | **Interest period of the crystallisation case is an unstated assumption.** Interest runs only for the 20 days after crystallisation; the 10 days from the bank's payment abroad (documents arrived Mon 5 Apr) to crystallisation are free. FEDAI 3.2(a) fixes the rate (commercial rate on domestic advances) but not the start date; exam cases usually charge interest from the date the bank paid / negotiated to the date the importer pays. A learner may apply "only after crystallisation" to such a case. | Either (a) state the convention: N040 "Interest? From the day the bank paid abroad, at the commercial rate…" and rework Q2 with the paying date (e.g. bank paid Mon 5 Apr, importer pays Wed 5 May: 30 days on ₹43,02,595 at 10.95 % = **₹38,723.36**; total **₹43,41,318.36**; add to the checker), or (b) keep the numbers and add to N040's card "the case: interest from crystallisation (cases say from when; read it)". Record the choice and its source in F22. |
| 6 | Low | header / plan v3 (8) | Plan v3 addition 8 "IDPMS replaced the BEF statement" is not taught; the fact sheet records that no primary text read names BEF. The decision is right but is not recorded in the script header, so the review trail shows a missing addition. | Header "Not in this video": "'IDPMS replaced the BEF statement': not found in primary texts (F25 Leads); not taught." Optionally re-check A.P. (DIR) 65 of 28 Apr 2016 for "BEF" at the freeze. |
| 7 | Low | header cut list | The cut list includes **N050a (INR TC, v3 addition 5)** and **N063a (EDI / non-EDI, 5 working days)**; cutting either orphans a practice key (P10 is still fine via N054, but P18 and Q9 depend on N063a). | Cut order: N030a; then trim N006 to "Retiring an import bill, supplier's credit and trade credit: all asked recently." Keep N050a and N063a; if still long, fold N050a into N054 ("…for rupee credit, which is allowed, plus two fifty"). |
| 8 | Low | N053–N056 | Older trade-credit figures that question banks still carry are not on a card: per-transaction cap in older books (USD 20 m, verify), the old LIBOR-based ceilings, and the **+ 350 bps** that still applies to old LIBOR-linked TCs moved to an ARR (F19). An option "benchmark + 350 bps" is then unplaceable. | Card under N054: "older books: 6-month LIBOR + 350 bps (old TCs moved to ARR keep + 350) · new FCY TC: + 300 ✓". Add old per-transaction cap only after verifying it in the old TC text. |
| 9 | Low | N026 | Q33-type item (importer's forward from spot + premium + margin) is the recalled numerical for importers; A13 never links to the build. | N026 card: "forward rate for an importer: ask spot + premium + margin (built in A05)". Optional practice item with Q2's numbers (key ₹83.9238; ₹83,92,380). |
| 10 | Low | header length | Header says "~1,750 spoken words + ~3 min holds"; counted **1,731 words + 153 s** ≈ 14.9 min. Findings 1–4 add ~60 words. | Update the line; pay with N030a and the N006 trim (finding 7); N007 can drop "about" and "illustrative" stays on screen only. |
| 11 | Low | practice.md | No practice item rehearses the crystallisation-with-interest step (Q2) or the "total due" from the importer; the only practised sums are rate builds, forward rupees and the INR ceiling. | Add P21: "Same bill as P8, not retired; crystallised at that day's bill selling 86.2524; commercial rate 10.95 %; the importer pays 20 days after crystallisation. Total?" Key: `2587572 × 10.95 % × 20 ÷ 365 =` ₹15,525.43; total **₹26,03,097.43**. Add to the checker. |
| 12 | Low | exception kind | The plan's "exception (Government/PSU waivers)" now exists only as an old trap (correct: the 2026 rules have none). The current exceptions (gold/silver ban, reg 12) are taught. | None needed; note in the header that the PSU/MoF waiver is old-rule only. |

## Coverage against the syllabus, plan and depth list
- **A5.7** (exchange and trade control for importers): IEC/FTP ✓ N010 · manner of payment, Nepal/Bhutan, ACU ✓
  N011–N012a · payment period ✓ N013–N015 · advance ✓ N016–N020 · gold/silver ✓ · evidence of import ✓ N062, N067 ·
  third-party payments and set-off (F12, F13) not voiced (Low; PDF).
- **A5.8** (import finance): LC / collection lanes ✓ N011 · retirement and crystallisation ✓ · interest ✓ (finding 5)
  · pledge vs hypothecation ✓ N042.
- **A5.9** (IDPMS): definition, matching, genuineness-then-debit, mark-off ✓ · EDI / non-EDI ✓ (N063a, finding 7) ·
  ₹10 lakh ✓ · services ✓ · merchanting ✓ · BEF ✗ (finding 6).
- **A5.10 / C3.5** (trade credit): define ✓ · who lends ✓ · periods ✓ · amounts ✓ · cost ✓ · INR TC ✓ · not ECB ✓ ·
  EXIM trap ✓ · security / LoU ✗ (finding 1).
- **A4.6** (import side): bills under LC, rate, crystallisation, interest ✓ (findings 2, 5).
- **Question kinds**: define ✓ · who ✓ · when / how much ✓ · compare ✓ (supplier vs buyer; pledge vs hypothecation;
  TC vs ECB) · exception ✓ (current exceptions; finding 12) · calculate ✓ · apply ✓ (hospital case).
- **v3 additions**: 1 ✓ · 2 ✓ · 3 ✓ · 4 ✓ · 5 ✓ (at risk, finding 7) · 6 ✓ · 7 ✓ · 8 partly (₹10 lakh and simultaneous
  closure ✓; BEF ✗, finding 6) · 9 ✓ · 10 ✓ · 11 ✓.
- **Depth checklist** A5.7 items 1–5 ✓ (item 3 "retention money for performance" not said: Low, PDF); A5.8 items 1–2
  ✓, 3 correctly not taught (no primary text); A5.9 ✓ (working-group chair correctly not taught); A5.10 items 1–4 ✓,
  and the "whichever is more" class error is broken (N052 underline).

## Trap cards versus real exam confusions
Real and well chosen: margins added vs margin on margin (N030); "import crystallisation flips like export" (N038, the
best one: it is exactly what an A12-trained learner will do); "6 months from shipment" (N015); USD 200,000 / 5 m /
100,000 (N018); "3 months' evidence" (N067); "2026 removed the cost ceiling" (N056: ECB yes, TC no); EXIM buyer's
credit vs import buyer's credit (N057); "whichever is less" (N052). Missing: LoU/LoC (finding 1); the old
crystallisation day (finding 2); physical import within 6 months / 3 years (finding 4).

## Old superseded figures: will either version of a question hurt the learner?
- A **new-key** question (contract period; AD's own threshold; IDPMS follow-up) is answered correctly by every line.
- An **old-key** question with a "current rule" option among the choices is also safe: the learner picks the current
  rule.
- An **old-key** question with **only old numbers** in the options (USD 200,000; 6 months; 3 months; 10th day) is the
  risk: the figures are shown, but labelled ✗ with no instruction to use them when the question does (finding 3), and
  two classic old figures are not shown at all (findings 2, 4). With fixes 2–4, both versions are answerable.

## Practice check (`practice.md`, recomputed)
All 20 keys correct; sums P8 (₹25,87,572), P9 (₹25,92,000), P10 (9.35 %) recomputed ✓. One right answer per MCQ; the
distractors are the real traps (P1 6 months, P4 USD 200,000 / 5 m, P12 1 year vs cycle, P14 FCY-only lenders, P19 old
3-month rule). Volume (20 vs plan 3) and difficulty (single-step recall plus three sums) match the recalled items
(theory items "Supplier Credit", "Trade Credit", "Importer", "ACU"; one retirement numerical). Gaps: LoU (finding 1),
crystallisation-with-interest sum (finding 11), old-key forms (findings 3–4).
