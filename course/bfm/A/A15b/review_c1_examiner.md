# A15b c1 · Independent review: EXAMINER (fresh context, 2026-11-22)

Script: `course/bfm/A/A15b/script_class.md` c1 (warm-up, three chapters: ECGC's covers for banks · duties and claims ·
EXIM Bank, close; voice N001–N085 with cue-sheet cards). Read with: `numericals.md` c1, `practice.md` c1 (33 items),
fact sheet `research/bfm/facts/A7.6-A8.1_A15b.md` (F1–F59); syllabus A7.6–A7.9, A8.1; plans_A §A15 (A15b, v3
additions 6–10, traps, question kinds); depth/A.md A7.6–A7.9, A8.1; importance_map (A-ECGC 4/7 cycles; A-EXIM);
items_tagged ("ECGC Standard Policy" Dec 2023; "ECGC" Jul 2024; Jun 2026: "EXIM Bank", **"Exim Bank EMF"**, "Case
Study On Exim Bank", **"Exim Bank: Which Facility it can't give to exporter?"**, "Shipment Risk"); PLAYBOOK §4a (old
figures in options); teaching_method §7.

Primary texts checked this session (read as data only, from the author's downloads in the session scratchpad):
ECGC ECIB sales literature (Dec 2023) page 27, IN-PC obligations: "(v) Report of Default within 4 months from due date
**or extended due date** … or within one month of calling up … whichever is earlier; (vi) file the claim within 6
months from the date the Report of Default **is required to be filed**; (vii) recall notice … before lodgment of
claim; (ix) share the recovery … in the same proportion" (all match the lesson except "extended due date", finding
L2). ECGC WT-PS cover wording, proviso (d) and cl. 12(c): six months "from the date **of filing** the Report of
Default" (differs from IN-PC; the lesson's "when the report was due" is right for IN-PC; note L4). ECGC MLT brochure:
"within six months from the date for reporting default". EXIM Bank Act 1981 chapter VI: **Export Development Fund**
ss. 15–20 (finding M1).

`python3 tools/check/ecgc_claims.py`: **All OK** (13 lines). Sums recomputed by hand: premium 50,00,000 ÷ 100 × 0.12 =
6,000 ✓; recovery 20,000 × 90 % = 18,000 / 2,000 ✓; IN-PC 30,00,000 × 2 ÷ 3 = 20,00,000 ✓ (trap 22,50,000 ✓); P21
(9,00,000 − 60,000) × ⅔ = 5,60,000 / 2,80,000 ✓; P22 30,00,000 ✓; homework 9,000 ✓; N054a 10 May ✓. Key presses
work on the 8-function calculator ("× 2 ÷ 3" avoids 66.666… : good).

## Verdict: **ADOPT WITH FIXES**

The lesson is accurate, tightly aimed and well trapped. Every trap the brief names is present and broken aloud:
policy (exporter) vs cover (bank) (N014–N015), whose default (N013–N013a), which % for which cover (N019–N022,
N050a), earlier-of dates (N041, N046, N054a–N055), buyer's credit vs import buyer's credit (N065), EXIM "can't give"
(N069–N070a), old guarantee names (N029). Recalled items "ECGC" and "Which facility can't EXIM give" are answerable;
"EXIM Bank" and the EXIM case study mostly are. Practice keys are all correct.

What keeps it from ADOPT: (1) the recalled **"Exim Bank EMF"** (Jun 2026) has **nothing** in the lesson, and the
Act's **Export Development Fund** (ss. 15–20) is not taught either, although N009 tells the learner EXIM Bank had
several questions; (2) the **old ECGC guarantee names** are dismissed as "not on the list", with no PLAYBOOK §4a
answering rule voiced, so an old-key item ("which is NOT an ECGC guarantee to banks?" with Transfer Guarantee as a
correct-in-the-old-book option, or "Transfer Guarantee protects…") misleads the learner; (3) the **cut order** (N068a,
N029, N051) cuts exactly the two lines that answer the recalled "can't give" options and the old-names trap, and at
~14.9 min the take is likely to need cuts once fixes are added.

Length: **1,769 spoken words** (≈ 12.6 min at 140 wpm) + **133 s** of holds ≈ **14.9 min**: inside 12–15 but at the
edge. Fixes M1–M2 add about 50 words (≈ 0.4 min); pay for them with the cuts in M3.

Answerable from this lesson alone: **5 of 10 fully, 3 partly, 2 not.** After fixes M1–M3 and L1–L3: 10 fully.

## Ten exam-style questions

Written from the syllabus and the fact sheet, not from the script. Figures and dates illustrative.

| # | Kind | Question (key) | Traps in the options | Lesson answers it? |
|---|---|---|---|---|
| 1 | define / who | ECGC's Export Credit Insurance for Banks (ECIB) protects a bank against loss arising from: (a) the overseas buyer's insolvency (b) **the exporter-borrower's protracted default or insolvency** (c) transfer delay in the buyer's country (d) exchange loss on crystallised bills [F1, F2, F35] | (a) and (c) are the exporter's policy risks; (d) never covered | **Yes**: N011–N013a, trap card, check N030; P1, P8 |
| 2 | how much / exception | Under ECIB Individual Post-shipment (IN-PS), on bills drawn by an exporter **without** a whole-turnover ECGC policy on her **associate** buyer, the cover is: (a) 75 % (b) 60 % (c) 50 % (d) **nil** [F8] | 60 % (the non-policyholder figure on other buyers); 60 % (policyholder's associates) | **Partly**: N019a voices "sixty if she doesn't", which leads to (b); "no cover on associates" is on the card only (L1) |
| 3 | exception / who approves | Under ECIB, which step does **NOT** need ECGC's prior approval? (a) extending a packing credit due date beyond 360 days (b) a one-time settlement with the exporter (c) selling the account to an ARC (d) **filing a recovery suit against the exporter** [F33, F34] | all three others are approval items | **Yes**: N039 voice + card, N044 trap card; P16, P17 |
| 4 | calculate dates (case) | Packing credit due 15 January, extended to 15 March with ECGC's approval; the bank recalls it on 20 July. The Report of Default is due by: (a) 15 May (b) **15 July** (c) 20 August (d) 20 January. And the claim must be lodged by: **15 January next year** (6 months from the date the report is required) [F34, F40; ECIB lit. p. 27] | (a) counts from the original due date; (c) from recall | **Partly**: N041/N042 and check N054a teach "earlier of" and "six months"; "or extended due date" is in neither voice nor card, so the learner picks (a) (L2). No practice item computes a claim deadline (L6) |
| 5 | calculate | A bank holds ECIB WT-PC at 9 paise per ₹100 per month. This month: highest outstanding ₹240 crore, average daily product ₹200 crore. Premium: (a) ₹21.6 lakh (b) **₹18 lakh** (c) ₹28.8 lakh (d) ₹24 lakh [F9, F19] | (a) uses the highest outstanding (the IN-PC base); (c) 12 paise on 240 | **Partly**: N023's card says "WT covers: on the average daily product", but the voice and both sums teach "highest outstanding" only (L3) |
| 6 | exception / recalled Jun 2026 | Which can EXIM Bank **NOT** do under its Act? (a) refinance banks' export credit (b) issue bid bonds and guarantees (c) **accept deposits repayable within six months** (d) give lines of credit to foreign banks [F48, F49, F58] | (b) "guarantees" is the common wrong pick | **Yes**: N068a (voice + card), N069–N070, P31; at risk if N068a is cut (M3) |
| 7 | define / recalled Jun 2026 ("Exim Bank EMF") | The Export Development Fund under the EXIM Bank Act, 1981 is meant for: (a) EXIM Bank's own administrative costs (b) **loans and arrangements that banks and FIs would not ordinarily give, each with prior Central Government approval** (c) ECGC's claim reserves (d) refinance to RRBs. Variant: older books' "Export Marketing Fund" of EXIM Bank (World Bank-funded, history) [F50] | (c) mixes ECGC/NEIA | **No**: neither EDF nor EMF appears in voice, card or practice (M1) |
| 8 | compare / old labels | Which of the following is **NOT** a guarantee/cover given by ECGC to banks (old-book wording)? (a) Packing Credit Guarantee (b) Export Performance Guarantee (c) Transfer Guarantee (d) **Line of Credit**. Variant: "Transfer Guarantee was meant to protect banks in India that add confirmation to LCs opened by foreign banks" (old ECGC literature: lead, not read this session) [F4] | a learner told "Transfer Guarantee isn't on the list" picks (c) | **Partly / not**: N029 names the old guarantees but says only "not on the list"; no answering rule, no one-line meaning of each (M2) |
| 9 | when (exporter's claim) | Under SCR the buyer's due date is 30 April; he is declared insolvent and the exporter's debt is admitted on 10 June. The claim becomes payable from: (a) 30 August (b) **10 July** (c) 10 June (d) 30 May [F37] | (a) the protracted-default rule; (c) no waiting | **Yes**: N045–N046 voice and card ("one month after the debt is admitted", earlier); not in practice (L6) |
| 10 | apply (EXIM case) | An Indian firm wins a ₹600 crore power project in an African country whose government wants 10-year deferred payment; the firm wants to be paid without recourse. Most suitable: (a) EXIM Bank post-shipment credit (b) **Buyer's Credit under NEIA / a Government of India Line of Credit (IDEAS)** (c) import buyer's credit (d) Overseas Investment Finance. Follow-ups: NEIA is administered by **ECGC**; under GoI LOCs at least **75 %** of value from India; EXIM Bank is regulated by RBI as an **AIFI** [F43, F44, F53, F51] | (c) opposite direction; (d) outward investment | **Yes**: N062–N066, N059a; P28–P30, P33 |

Question-kind coverage: define (1, 7) · purpose (7) · who / when / how much (2, 3, 9) · compare (8, 10) · exception
(2, 3, 6) · calculate (4, 5) · apply to a case (4, 10) · old labels (8).

## Syllabus and recalled-item coverage

| Item | Where | Status |
|---|---|---|
| A7.6 ECGC's products for banks | N010–N031; P1–P9, P20, P22–P23 | ✓ (WT premium base thin: L3; old guarantee names: M2) |
| A7.7 Other aspects of policies and guarantees | N034–N036, N052–N053 (premium basis, credit limits, approval for extensions, assignment) | ✓ (maximum liability F23 not taught: L9, acceptable) |
| A7.8 Common "to do" points | N034–N044; P10–P17 | ✓ (extended due date: L2) |
| A7.9 Claims | N041–N051; P15–P21, P24 | ✓ (no date practice: L6) |
| A8.1 EXIM Bank | N056–N072; P26–P33 | ✓ except EDF / EMF (M1) |
| Recalled "ECGC" (Jul 2024), "ECGC standard policy" (Dec 2023) | A15 mainly; N045–N048 here | ✓ |
| Recalled "EXIM Bank", "Case study on EXIM Bank" (Jun 2026) | N058–N072 | ✓ |
| Recalled "Which facility can't EXIM give" (Jun 2026) | N068a, N069–N070a, P31 | ✓ while N068a stays (M3) |
| Recalled **"Exim Bank EMF"** (Jun 2026) | none | **✗ (M1)** |
| Plan v3 addition (6) bank-side list, PC vs PS; guarantees | N015–N029 | ✓ (old guarantees: M2) |
| (7) premium basis, buyer limits, extensions, assignment | N034–N036, N052–N053 | ✓ |
| (8) duties and what voids a claim | N037–N044 | ✓ |
| (9) when a claim arises, waiting period, %, recoveries | N045–N050a | ✓ |
| (10) EXIM product list (LOC and buyer's credit first); "doesn't do" only per the Act | N062–N070a | ✓ (Act-based, s. 12(1)(d), s. 10(4)) |
| Depth A8.1 "export marketing funds" (OB) | none | ✗ (M1; history only, per depth note) |

## Traps the brief named

| Trap | Lesson | Status |
|---|---|---|
| Policy (exporter) vs cover (bank) | N014–N015, N053 card, N070a, P2 | ✓ |
| Which % for which cover | N019–N022 trap card, N050a, P4–P6, P20, P22 | ✓ (associates nil: L1) |
| Earlier-of dates | N041 (RoD), N046 (insolvency), N054a–N055 | ✓ (extended due date: L2) |
| Buyer's credit vs import buyer's credit | N064–N065 trap card, P30 | ✓ |
| EXIM "can't give" | N069–N070a, P31 | ✓ (guarded by M3) |
| Old guarantee names | N029 trap card | partly (M2) |

## Findings

| # | Sev | Where | Finding | Fix |
|---|---|---|---|---|
| M1 | **Medium** | ch. 3, after N068a; practice | **Recalled "Exim Bank EMF" (Jun 2026) and the Act's Export Development Fund (ss. 15–20) are missing.** F50 has both (EDF from the Act; EMF as dated history), the depth checklist lists "export marketing funds", and N009 itself announces several EXIM questions in Jun 2026. Q7 fails. | Add one line + card after N068a, e.g. N068b: "The Act also sets up an Export Development Fund, for loans banks wouldn't ordinarily give, each with the Government's approval. Older books add an Export Marketing Fund: history." Card: "Export Development Fund (ss. 15–20): finance banks/FIs would not ordinarily give · prior Central Government approval each time · 'Export Marketing Fund' in older books: old World Bank-funded fund, history (figures dated)" [F50]. Practice: Q7 above. |
| M2 | **Medium** | N029 | **Old guarantee names: the §4a answering rule is not voiced, and the old names are not mapped to today's covers one by one.** N029 says "the last two aren't on it", which steers a learner away from Transfer Guarantee / Overseas Lending Guarantee in an old-key "which is (not) an ECGC guarantee to banks" item (Q8). PLAYBOOK §4a requires the rule aloud once per topic. | N029 voice add (≈ 20 words): "If an option uses an old guarantee name, read it as today's cover; and if only old names are offered, the item is from the old book: answer by it." Card: map "Packing Credit Guarantee → PC covers · Post-shipment Export Credit Guarantee → PS covers · Export Performance Guarantee → Surety Cover · Export Finance Guarantee → EF · Export Production Finance Guarantee → EPF · Overseas Lending / Transfer Guarantee: older ECGC guarantees to banks, not sold today". F4: add a one-line meaning of OLG and TG only if an archived ECGC primary text is found (TG: bank in India confirming a foreign bank's LC); otherwise keep "history" without meaning. Practice: Q8 above. |
| M3 | **Medium** | header "Length" cut order | **The cut order removes N068a and N029 first.** N068a's s. 10(2) list (refinance, guarantees, LCs, research) is what lets the learner eliminate options in the recalled "which facility can't EXIM give" (Q6); N029 carries the old-names trap (M2). At ~14.9 min plus fixes, cuts are likely. | Protect N068a and N029 (with N069–N070a). New cut order: N048a (the trap card N048 already breaks it), N019b, then shorten N068 to one clause ("and Ubharte Sitaare, for promising small exporters") and N051 last. |
| L1 | Low | N019a | "Sixty if she doesn't" invites 60 % for a non-policyholder's **associate** bills; the answer is nil (card only) (Q2). | N019a voice: "…sixty if she doesn't, and nothing on her associates." |
| L2 | Low | N041 card; numericals | ECGC's wording is 4 months from the **due date or extended due date** (ECIB lit. p. 27; F34); voice and card omit "extended", so a case with an approved extension (Q4) is keyed wrong. | N041 card: "4 months from the due date (or the extended due date)". Optional practice date item (Q4). |
| L3 | Low | N023; practice | WT premium base ("average daily product") is card-only; the voice and both sums use "highest outstanding". Q5 picks the wrong base. | N023 voice add "Whole-turnover covers charge on the average daily balance instead." Practice: Q5 above. |
| L4 | Low | F40 / N042 | Claim-time wording differs by product: IN-PC "6 months from the date the RoD **is required** to be filed" (lesson ✓); WT-PS cover wording "6 months from the date **of filing** the RoD"; MLT "from the date for reporting default". | No lesson change needed; record the WT-PS difference in F40 and the freeze list so no practice item keys on the difference. |
| L5 | Low | N046 card; practice | Exporter's claim-filing limit (360 days of due date / 540 of policy expiry, earlier) is on a card note only; no item. | One practice item; optionally voice in N046 ("and she must file within three hundred sixty days of the due date"). |
| L6 | Low | practice.md | No date items (RoD earlier-of, insolvency earlier-of, claim deadline) although the lesson's only date sum is a pause check; no item on BC-NEIA's 85 % or on Surety vs EF. **P9 and P27 keys are visibly the longest options** (length gives them away). | Add Q4, Q9 and a claim-deadline item; trim P9 (b) to "paise per ₹100 per month" and lengthen one distractor; balance P27. |
| L7 | Low | N070a card | ECGC vs EXIM compare card names ECGC's ministry (Commerce) but not EXIM Bank's (Finance, DFS) [F59]. | Add "Ministry of Finance" to the EXIM half. |
| L8 | Low | close N078–N085 | Checklist 21: blank-map recall ✓, but no "you can now" list tied to sub-topic ids or scope line. | Optional in the standard style; one line before the homework if time allows. |
| L9 | Low | N042 | "Maximum liability" (F23) and that ECGC ascertains the bank's loss after 4 months (F40) are not taught; rarely asked. | Acceptable; leave unless time allows. |

Practice keys: all 33 checked against the fact sheet and the ECGC / EXIM texts read; all correct, one best answer each.
Distractors are plausible (P20 (a) 75 % trap, P21 (a) gross recovery, P22 (b) two-thirds, P31 (a)/(b) "can do"
facilities). Only weakness is the length giveaway in P9 and P27 (L6).

## Reviewer checklist (teaching_method §7)

| # | Mark | Note |
|---|---|---|
| 1 | Yes (AI-voice line N.A.: owner removed it 2026-11-21) | rule-version card, why-it-matters N009, goal in N001 |
| 2 | Yes | A15 homework (N002–N003), A14 factoring (N004–N005) |
| 3 | Yes | homework answer in the first minute |
| 4 | Yes | three chapters, ~3.4–4.8 min, re-entry lines |
| 5 | Yes | N032, N056 |
| 6 | Yes | N008 answered at N073–N074; N013, N043, N060, N069 answered in-chapter |
| 7 | Yes | ECIB, PC/PS, WT/IN carded as first spoken |
| 8 | Yes | |
| 9 | Yes | "her policy covers her buyer; the bank's cover covers her" |
| 10 | Yes | ch1 buyer vs exporter default; ch2 claim first; ch3 exports only |
| 11 | Yes | two questions each, easy then twist, holds ≥ 3 s |
| 12 | Yes | N075–N077 mixed |
| 13 | Yes | premium worked, recovery worked, ₹30 lakh try, N050a error line |
| 14 | Yes | "why" only where F6/F11 give reasons |
| 15–19 | Yes (on paper) | cues land on named words |
| 20 | N.A. | umbrellas are pictures, not an analogy needing a limit |
| 21 | Partly | blank map yes; no "you can now" (L8) |
| 22 | Yes | preview N084 after N073–N074 |
| 23 | Yes | ECIB, cover, recall, whichever earlier reused as questions |
| 24 | Yes | every card cites F-rows; L2 is an omission, not a wrong fact |
| 25 | Yes | N009 matches items_tagged (Dec 2023, Jul 2024, Jun 2026 ×4) |
| 26–27 | Yes | own wording; no provider material |
| 28 | Yes | no line over 25 words |
| 29 | Yes (per header; not re-checked against greetings.md) | |
| 30 | Partly | 5 of 10 now; 10 of 10 after M1–M3, L1–L3 |

## Counts

High 0 · Medium 3 · Low 9. Verdict **ADOPT WITH FIXES**: fix M1–M3 (and L1–L3, which are one clause each), then a
re-review.
