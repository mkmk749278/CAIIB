# A11 c1 · independent review: SUBJECT EXPERT

- **Reviewed**: `course/bfm/A/A11/script_class.md` c1 (spoken lines N001–N073 and cue sheet), `practice.md` (P1–P8),
  fact sheet `research/bfm/facts/A5.1-A5.5_A11.md`, plan `plans_A.md` §A11 (with its 2026-11-21 note), depth checklist
  `research/bfm/depth/A.md` (A5.1, A5.2, A5.5), `regulatory_updates.md` export rows, `lesson_spec.md`, `CLAUDE.md` hard
  lines. 2026-11-21, fresh context. Format model: `A/A08/review_c1_expert.md`.
- **Primary sources read** (fetched 2026-11-21, single requests spaced about 8 s apart, no blocks met; fetched text
  treated as data):
  - **FEM (Export and Import of Goods and Services) Regulations, 2026**, FEMA 23(R)/2026-RB, 13 Jan 2026, consolidated
    "amended up to 2 Nov 2026" (rbi.org.in BS_FemaNotifications Id=13277): regs 1–20 and footnotes 1–13 read in full.
  - **FEMA 23(R)/(1)/2026-RB**, 22 Sep 2026 (Id=13714): in force 1 Oct 2026; reg 5 "fifteen" → "nine" in (a), (b);
    "eighteen" → "twelve" in the first proviso; caution-list proviso added to reg 13; new reg 20. Read in full.
  - **FEMA 23(R)/(2)/2026-RB**, 2 Nov 2026: read through the consolidated text's footnotes 1–6 and 12 (all "with
    effect from October 01, 2026"): reg 2(1)(da), 3(2)(a)–(b) deemed EDF, renumbering (c)–(e), 18(1)(d).
  - **A.P. (DIR Series) Circular No. 20**, RBI/2025-26/194, 16 Jan 2026 (Id=13278): paras 1–7 and Annex A (96 export
    circulars, incl. items 9, 54, 58, 60, 83 SOFTEX; 4, 61 write-off; 51 set-off; 88, 93 caution listing; 96 the ₹10 lakh
    circular) and Annex B. **The directions set no timeline, cap or limit of their own**: para 2 (follow FEMA and the
    FTP), para 3 (PRAVAAH; doubtful cases to the DoE), para 4 (supersession).
  - **FEM (Export of Goods & Services) Regulations, 2015**, consolidated to 5 Jun 2026 (Id=10256): reg 9, reg 15 and
    the amendment footnotes; plus **FEMA 23(R)/(7)/2025-RB** of 13 Nov 2025 (Id=12923) and **FEMA 23(R)/(8)/2026-RB** of
    5 Jun 2026 (Id=13467), both "in force from the date of their publication in the Official Gazette" (14 Nov 2025 and
    5 Jun 2026 per the R15 footnotes).
  - **A.P. (DIR) Circular No. 12**, RBI/2025-26/89, **1 Oct 2025** (Id=12908): full text.
  - **A.P. (DIR) Circular No. 74**, RBI/2015-16/414, 26 May 2016 (Id=10423): paras 1–5 (EDPMS "in operation since
    March 1, 2014"; automatic caution listing after two years; data "captured only from the shipping bills generated";
    XOS from 1 Mar 2014).
  - **FEM (Manner of Receipt and Payment) Regulations, 2023**, FEMA 14(R)/2023-RB as amended 10 Feb 2025 (Id=12579):
    reg 3 in full.
  - **FTP 2023 Chapter 2** (content.dgft.gov.in, v1.2.2): para 2.05 (10-character, = PAN, issued by DGFT online, update
    every year in April–June, confirm even if unchanged). **HBP 2023 Chapter 2** (HBP_07_2026): para 2.07 (exempt
    categories, SCOMET carve-out, 12 permanent IECs), 2.09 (b) de-activation under FTP 2.05(e).
- **Calendar sums** (Python `dateutil.relativedelta`, month counting): 20 Jan 2027 + 9 m = **20 Oct 2027**; + 12 m =
  **20 Jan 2028**; + 15 m = 20 Apr 2028; + 18 m = 20 Jul 2028 (P1 distractors right); 15 Feb 2027 + 9 m = **15 Nov 2027**
  (N064–N065 right); fact-sheet row 33 sums (10 Mar → 10 Dec 2027; 31 Mar → 31 Dec 2027) right.
- **The ten points the brief asked me to confirm** (all confirmed in the 2026 text):
  1. No fixed document period: R26 has none; reg 19(1)(a) puts "list of documents, timelines and charges" in the AD's
     internal policy and SOP; C20 adds none. **But the word "Board-approved" is not in R26 or C20** (finding 1).
  2. No shipment period against advance: reg 10(1) same AD (switch after intimating both), 10(4) interest ≤ all-in-cost
     ceiling of trade credit; nothing else.
  3. Warehouse: reg 5(1)(b) "nine months from the date of sale of goods from the warehouse"; INR 12 months from sale.
  4. AD extension: reg 5(1) second proviso, "beyond the specified period, if the AD is satisfied"; no cap, no RBI step;
     reg 19(1)(b) policy covers it.
  5. Deemed EDF: reg 3(2)(a) resident individual, no value limit; 3(2)(b) any other person, inward remittance for the
     service "not more than ₹10 Lakh"; effective 1 Oct 2026 though notified 2 Nov 2026 (finding 2).
  6. Reg 13: unrealised "beyond one year from the due date of realisation or extended period" → further exports only
     against full advance or irrevocable LC; proviso: exporters in the Caution List as on 30 Sep 2026 under R15 reg 16
     orders "continue to be governed by the said order" until removed.
  7. Reduction: reg 6, AD on reasons; "where the export value is up to ₹10 lakh … per shipping bill … or invoice", on
     the exporter's declaration (the ₹10 lakh is the bill's value, not the size of the reduction: finding 3).
  8. Set-off: reg 7, "same overseas buyer or supplier or with their overseas group or associate companies, within the
     stipulated period … or extended period". No same-AD, calendar-year, ACU or goods/services condition.
  9. Services EDF: reg 3(2) "within 30 days from the end of month in which invoice … has been raised"; one EDF a month
     allowed; non-software services may file on or before receipt of payment; AD may extend.
  10. EDPMS entry by the AD: reg 18(1)(a) non-EDI EDFs and 18(1)(b) services EDFs "within five working days of receipt".
- **History checks**: 9 → 15 → 9 under R15 confirmed (FEMA 23(R)/(7)/2025-RB dated 13 Nov 2025, Gazette and in force
  14 Nov 2025; FEMA 23(R)/(8)/2026-RB 5 Jun 2026, in force on publication the same day); R26 first text 15 / 18,
  substituted to 9 / 12 before commencement (footnotes 8–10). Advance shipment 1 → 3 years by the same Nov 2025
  amendment (reg 15), not reversed in June 2026. Write-off 5% / 10%, extension "6 months at a time": Master Direction,
  superseded by C20 para 4.
- **Manner of receipt** (N024–N025, N030–N031): MRP reg 3(2)(I)(a): Nepal and Bhutan in INR (foreign currency only for
  **Nepal** importers with Nepal Rastra Bank permission, so "Bhutan → rupees" in N030 is the safe choice and right);
  ACU members other than Nepal/Bhutan: participant-to-participant payments through the ACU mechanism "or as per the
  directions issued by the Reserve Bank", all other transactions as for non-ACU countries; others INR or any foreign
  currency; plus any manner the FTP provides, and debit/credit to a FEMA account.
- **Copyright / hard lines**: our own wording throughout; no coaching text; no AI-voice or "checked against source"
  line. Old numbers appear only as history on stamp cards (the beginner review deals with how often they are heard).
- **Cues vs voice**: match, except where noted (N016 card has STPI, voice does not; N053 voice looser than its card).

## Verdict: ADOPT WITH FIXES

0 High, 3 Medium, 10 Low. Every rule at the cut-off is right in substance. The Medium items are wording a careful
examiner's options would expose.

## Findings

| # | Sev | Line | Finding | Exact fix |
|---|---|---|---|---|
| 1 | Medium | N023 voice and card; practice P3 reason; fact sheet rows 13, 27, 41, 45 | "Each bank's **board-approved** policy" is not in the source. R26 reg 19(1) says "a separate, comprehensive, well-documented **internal policy and SOP**"; C20 has no Board wording either (searched both texts for "Board": no hit). A learner may pick "Board-approved policy" as a regulatory term, or reject a correct option that says "internal policy and SOP". Facts only from primary text. | N023: "Not any more. The new rules set no fixed days. Each bank's own policy and procedure lists the documents, the timelines and the charges." Card: "documents to the AD: timelines in the bank's internal policy and SOP (R26 reg 19)". P3 reason: "the AD's internal policy and SOP covers extensions (reg 19(1)(b))". Fact sheet rows 13, 27, 41, 45: replace "Board-approved"/"Board policy" with "internal policy and SOP" (row 45 can keep "disclosed on its website"). |
| 2 | Medium | N017 | "**Since November**, small service exporters needn't fill it at all." The Second Amendment was notified 2 Nov 2026 but applies **with effect from 1 Oct 2026** (footnotes 1–3, 12): it was part of the regime from its first day. And "small" is wrong for resident individuals, who are deemed to file for **any** amount. The same lesson tells learners the rules began 1 Oct 2026; "since November" contradicts it. | "And a later change, back-dated to the first of October: many service exporters needn't fill it at all. Telling the bank the payment details counts as filing. A resident individual, any amount. Anyone else, up to ten lakh rupees a remittance." Card: "deemed EDF (services, from 1 Oct 2026; notified 2 Nov 2026): resident individual · any amount; others · inward remittance ≤ ₹10 lakh". |
| 3 | Medium | N055 | "Her bank may allow a reduction … **Up to ten lakh**, on her declaration alone." By ear this says the *reduction* may be up to ₹10 lakh. Reg 6 proviso: the test is the **export value per shipping bill or invoice** (≤ ₹10 lakh), and then any reduction, even full non-realisation, may go on declaration. An option "reduction up to ₹10 lakh on declaration" would be picked wrongly. The card is right; the voice is not. | "Now, the buyer pays less, say for a quality claim. Her bank may allow a reduction in the export value, if satisfied with her reasons. And if the bill itself is worth up to ten lakh, her declaration alone is enough." Card: "reduction in realisation: the AD allows, on reasons · bill / invoice ≤ ₹10 lakh → on the exporter's declaration (even non-realisation) (R26 reg 6)". |
| 4 | Low | N042 card; fact sheet rows 21, 32 | "9 → 15 (**13 Nov 2025**)". 13 Nov 2025 is the notification date; FEMA 23(R)/(7)/2025-RB came into force on publication in the Gazette, **14 Nov 2025** (R15 footnote 5). The voice ("in November") is fine. | Card: "9 → 15 (from 14 Nov 2025) → 9 (5 Jun 2026) → R26: 9 · INR 12 …". Rows 21, 32: "notified 13 Nov 2025, in force 14 Nov 2025 (Gazette)". |
| 5 | Low | N027–N028 | Q: "Can she take it through one bank, and send the export papers through another?" A: "No … She may switch, after telling both banks." Reg 10(1) is about routing the **advance amount and the realisation**, and it allows another AD once both are told, so the flat "No" is half-true, and "papers" is not the regulation's word. | N027: "… Can the advance come through one bank, and the export money through another?" N028: "Not unless she tells both banks. Normally, the advance and the later export money go through the same bank." |
| 6 | Low | N041, practice P3 | "No cap" is right for the regulations, but the bank's own policy (reg 19(1)(b)) may set limits; an absolute "no cap" may mislead. | N041: "… No cap in the rules, and no need to go to R-B-I. Her bank's own policy guides it." P3 (c) already says "no cap set in the regulations": keep. |
| 7 | Low | N044 | Reg 13 runs from "the due date of realisation **or extended period**". The voice omits the extension; a learner may count a year from the original due date even after an extension. | "What if money is still not home a year after the due date, or after any extension her bank gave? …" |
| 8 | Low | N052, N059–N061, N070 | "When she ships. Customs sends the shipping bill data" is right for **goods at EDI ports** (C74 para 4.1: data "captured … from the shipping bills"). For non-EDI goods and for **services** the AD enters the EDF (reg 18(1)(a), (b)); "EDPMS opens at shipment" as a general rule is too wide for a services question. | N052: "When she ships. For goods, Customs sends the shipping bill data. …" N061 recap: "E-D-P-M-S opens at shipment for goods, and closes when the money comes." |
| 9 | Low | N053 | "Banks enter the forms Customs can't, within five working days" is loose: non-EDI EDFs are *forwarded* by Customs to the AD (reg 3(3)); services EDFs never touch Customs. The card is right. | "Her bank enters the forms that don't come electronically, from non-E-D-I ports and for services, within five working days of getting them." |
| 10 | Low | N058 | Reg 7 reads "overseas group **or associate** companies". | "… or their group or associate companies abroad, within the realisation period, including any extension." Card: add "or associate". |
| 11 | Low | N016 | Voice says the services EDF goes "to her bank"; for **software** the specified authority is the AD **or STPI** (DTA), and the DC in an SEZ (reg 2(1)(f)(iii)). The card has STPI. | "… The E-D-F goes to her bank, or for software, to her bank or S-T-P-I, within thirty days from the end of the month of the invoice." |
| 12 | Low | Ch. 1 (after N016); practice P4 (d) | SOFTEX is never mentioned, yet P4 (d) uses it as a wrong option and old banks ask it. Primary support for "gone": the SOFTEX circulars are superseded (C20 Annex A items 9, 54, 58, 60, 83) and software is declared on the EDF to the AD or STPI (reg 2(1)(f)(iii), 3(2)). The R26 Annex form is still unread (fact sheet "verify" 1), so say it as the regulations say it. | Add to the N016 card a stamp line: "before 1 Oct 2026: SOFTEX form to STPI · now: the EDF (AD or STPI)". No extra voice needed, or one clause: "The old SOFTEX form is history." |
| 13 | Low | N005, N012, N063 | (a) N005 "Export rule questions came in every one of the seven cycles": `importance_map.md` A-EXIMP 7/7 covers packing credit, DDA, status holders, supplier's/buyer's credit too, not only export *rules*. Say "Export questions …". (b) N012 "valid for good": FTP/HBP: valid unless suspended, cancelled or surrendered; "permanent" is fine, "for good" slightly stronger. (c) N063 "software worth twenty lakh": the test is the **inward remittance** for the service. | (a) "Questions on exports came in every one …". (b) "It's permanent, unless cancelled or surrendered." (c) "A company receives twenty lakh rupees for one software job. Is the E-D-F deemed filed?" |

## Checked and correct (no change)
- N008–N009: DGFT (Commerce) for trade and the FTP; RBI for foreign exchange under FEMA; ADs follow FEMA and the FTP
  (C20 para 2).
- N010–N013: IEC 10 characters, DGFT, online, = PAN, one PAN one IEC, update every April–June or de-activated (FTP 2.05,
  HBP 2.09); exempt: Government departments, personal use, small border trade (HBP 2.07(a)).
- N014–N015a: goods EDF to Customs (DC in SEZ), deemed part of the shipping bill at EDI ports, personal effects not an
  export (reg 2(1)(f)(i), 3(1) and provisos).
- N016 timing (30 days from the end of the invoice month); N019–N020 (₹8 lakh, a company: deemed filed).
- N024–N026, N030: manner of receipt (MRP reg 3); AD credits after checking genuineness and closes/updates EDPMS at the
  same time (reg 4(2)).
- N028a third-party receipts (reg 8); N029 advance: no period, same AD, trade-credit interest ceiling (reg 10(1), (4));
  history 1 → 3 years correct.
- N035–N040: 9 months from shipment (goods) / invoice (services); INR invoiced **or settled** 12 months; warehouse 9 months
  from sale; project exports per contract; no separate SEZ/EOU/status-holder period; dates right.
- N042–N043: 9 → 15 → 9 history and the R26 first text 15 / 18; at the 31 Dec 2026 cut-off, 9 (12 INR) is the answer.
- N045: caution-listed on 30 Sep 2026 stay under that order until removed (reg 13 proviso), not "under the 2015 rules"
  generally (the plan's chapter line says "stay under the 2015 rules": the script's wording is the precise one).
- N050, N053: EDPMS since 1 Mar 2014; XOS migrated and discontinued (C74 paras 2, 5).
- N054: ≤ ₹10 lakh per shipping bill / invoice closed on declaration, or quarterly bulk (reg 4(2) proviso; first in
  A.P. (DIR) No. 12 of **1 Oct 2025**, immediate effect).
- N056, N060: write-off 5% / 10% is old-regime (Master Direction superseded by C20).
- Practice P1–P8: keys and reasons right (P3 reason wording: finding 1). P5 distractor (a) right: automatic two-year
  caution listing (C74 para 3.1) was withdrawn in Oct 2020 per the fact sheet (C03, not re-read here) and the
  circulars are superseded anyway.
- Rule-version card: right for today; re-stamp at the 31 Dec 2026 freeze (check RBI notifications 11 Nov – 31 Dec 2026
  for any change to R26 or a new EDPMS / caution-list direction; fact sheet "verify" 2–3).

## Open (not findings; for the fact freeze)
- R26 **Annex (EDF form)** still unread (rbidocs bot check; not bypassed). Until read, the lesson rightly says nothing
  about exemptions under the 2026 regime. Ask the owner's phone to fetch `NRAR23R16012026_AN.pdf`.
- Who de-cautions a 30-Sep-2026 caution-listed exporter now: R26 silent (fact sheet "verify" 3). The script does not
  claim either way: keep it so.
