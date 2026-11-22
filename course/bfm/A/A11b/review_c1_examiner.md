# A11b c1 · Independent review: EXAMINER (fresh context, 2026-11-22)

Script: `course/bfm/A/A11b/script_class.md` c1 (four chapters: packing credit and how much · time and liquidation ·
after shipment · PCFC; two sums). Read with: `numericals.md` c1, `practice.md` c1, facts `research/bfm/facts/A5.3_A11b.md`
(F1–F25 and "Leads NOT found"), FEDAI NTP in `research/bfm/sources/fedai_rules_cutoff.md` (2.3); syllabus A5.3 and
A5.11; `coverage.csv` row A5.3 (A11;A12); plans_A §A11 (A11b part) and §A12; depth/A.md A5.3 and outdated-statement 7;
items_tagged A-EXIMP (Jun 2023: "PCL Limits Calculation-5 Marks", "PCL drawdown by exporter Case Study", "Packing
Credit Limit"; Dec 2023: "Which of the following are true for liquidation of packing credit?", "Total Period Of
PCL"); importance_map (A-EXIMP 7/7, 22 mentions). `python3 tools/check/export_pcl.py`: **all OK** (8 lines). Spot check
of CF Chapter XV on rbi.org.in (id=13156) for paras 234–235, 240, 249(2), 269–270, 346, 388, 394(3): the fact sheet's
readings hold; "180 days" appears in Chapter XV only for EBR (para 346), never as a packing-credit period.

## Verdict: **ADOPT WITH FIXES**

What is taught is right and well aimed: the definition (F2), the order/LC and its waiver (F2, F9), the running
account with FIFO and its exclusions (F8), "need-based, no RBI formula" kept apart from the bank-practice "lower of FOB
and domestic cost, less margin" (honest, and exactly how the 5-mark sum is set), CIF as the trap, 360 days ab initio
(F3), domestic rate plus penal if no export (F4), the expired 450-day relief as a trap card (F25), liquidation from
the export bill, EEFC or own rupees to the extent exported (F6), substitution of contract and the group-concern bar
(F7), the three post-shipment forms (F13), NTP vs usance 365 from shipment (F14), undrawn balance, consignment, duty
drawback, overdue post-shipment repaid from rupees with EDPMS still open (F15–F19), PCFC with TT selling and EBR 180
(F22, F23). Every number in the voice matches the fact sheet; both sums are right on the 8-function calculator; no
spoken sentence exceeds 30 words.

The gaps are the **case forms IIBF actually recalled**: the plan names "1 PCL limit / drawdown sum" and the Jun 2023
paper had a "PCL drawdown by exporter" case, but the lesson never shows a limit being drawn in stages (what is still
available, and the bank refusing more than the limit); liquidation is shown only for a bill larger than the loan, so
the partial-shipment case (bill smaller than the packing credit; what stays outstanding) is not answerable; the
360-day rule is never turned into a date. Two classic one-liners in the fact sheet are not voiced: pre- and
post-shipment limits are **interchangeable** (CF 388) and **sharing with a sub-supplier through an inland LC** (CF
249). Plan additions (9) eligibility and (13) margin on non-LC usance bills are not voiced and not recorded as
dropped. Practice has no liquidation, drawdown or post-shipment-proceeds item.

Length: **1,424 spoken words** (≈ 10.2 min at 140 wpm) + **113 s** of holds ≈ **12.1 min**. The fixes below add about
**230 words** (≈ 1.6 min) → ≈ **13.8 min**, inside 12–15. Chapter 1 grows to about 5.2 min (still under 6).

Answerable from this lesson alone: **4 of 10 fully, 3 partly, 3 not.** (After fixes 1–5: 10 of 10.)

## Ten exam-style questions

Figures illustrative; all sums recomputed in Python.

| # | Question (key) | Traps in the options | Answerable? Why |
|---|---|---|---|
| 1 | **Case, 5 marks.** Order CIF USD 150,000; freight USD 4,500, insurance USD 1,500. Rate ₹84. Domestic cost ₹1.25 crore. Margin 15 %. Using the usual bank method, the packing credit limit is: **₹1,02,81,600** (FOB 144,000 × 84 = ₹1,20,96,000, lower than cost; × 85 %) | ₹1,07,10,000 (CIF × 85 %) · ₹1,06,25,000 (cost × 85 %) · ₹1,20,96,000 (no margin) | **Yes**: N018–N024, twist N027 |
| 2 | **Case (drawdown).** On that limit of ₹81 lakh (the lesson's), she drew ₹35 lakh for yarn and ₹28 lakh for stitching. She now asks for ₹25 lakh for packing. The bank can release at most: **₹18 lakh** (81 − 63), each drawal in its own account, the whole to be adjusted by export documents within 360 days of the advance | ₹25 lakh (the request) · ₹22.5 lakh (25 less 10 % margin again) · nil, as the limit is used in stages only with a new sanction | **Partly**: N016 says "lump sum or in stages", but no drawal is ever worked; double-counting the margin is untested (finding 1) |
| 3 | **Recalled form (Dec 2023).** Which are true of liquidating packing credit? (i) normally from the proceeds of the export bill (ii) by agreement, from her EEFC balance (iii) from her own rupees, but only to the extent exports have taken place (iv) a good-track-record exporter may use another order's bill, including a group concern's. **(i), (ii), (iii) only** | all four · (i) only · (i) and (iv) | **Yes**: N036–N039 |
| 4 | **Total period.** Packing credit released on 15 Jan 2027 is still not adjusted by export documents on 11 Jan 2028. It: **has ceased to be export credit from 15 Jan 2027 (ab initio); the 360 days ended 10 Jan 2028** | ceases from 11 Jan 2028 only · gets 450 days, so still export credit · turns into post-shipment credit | **Partly**: N032 states "from day one"; no date is ever counted (finding 3) |
| 5 | An exporter's book says packing credit may run 450 days. For credit disbursed in January 2027: **360 days; the 450-day relief covered only disbursals up to 30 June 2026** (F25) | 450 days for all exporters · 450 days for listed sectors · 180 days, extendable to 360 | **Yes**: N034 (the "180 + extension" distractor is not addressed: Low 9) |
| 6 | **Case (partial shipment).** PC outstanding ₹81 lakh. She ships only half the order; the USD 60,000 bill is bought at ₹84.80. **₹50,88,000 is applied to the packing credit; ₹30,12,000 stays outstanding as packing credit, to be adjusted by her next shipments within 360 days of the advance** | the whole ₹81 lakh is closed by the bill · she must pay ₹30,12,000 at once from her rupees · the ₹30,12,000 becomes post-shipment credit | **No**: S2 shows only a bill larger than the loan; "to the extent exported" (N037) is never applied to a number (finding 2) |
| 7 | A bank sanctions an exporter separate pre-shipment and post-shipment limits. Under RBI's directions the bank shall: **allow the two limits to be interchanged** (CF 388) | keep them separate · interchange only with RBI's approval · interchange only for Gold Card holders | **No**: F24 not voiced (finding 4) |
| 8 | A garment maker supplies an export house that holds the order. Packing credit for the maker: **is allowed as a sub-supplier, through an inland LC opened by the export-order holder's bank; no running account** (CF 248–249) | not allowed; only the order holder gets PC · allowed on a running account · allowed only in foreign currency | **No**: F11 not voiced; N015 says only "not for sub-suppliers" on the running-account card, which pushes a learner to the wrong option "not allowed" (finding 4) |
| 9 | A 90-day usance export bill is to be rediscounted abroad under EBR. Which is correct? **EBR covers usance up to 180 days from shipment; post-shipment rupee credit for usance bills can run up to 365 days from shipment** | EBR up to 365 days · both limits run from the bill date · EBR only for sight bills | **Yes**: N051, N063 |
| 10 | Her imported zips are bought on supplier's credit. PCFC for this order may finance: **only the domestic inputs** (F22) | domestic and imported inputs · imported inputs only · nothing, as PCFC is for raw materials only | **Partly**: N062 says "domestic and imported inputs"; the supplier's-credit exception is not said (Low 8) |

## Findings

| # | Sev | Line | Finding | Exact fix (ready words; spoken sentences ≤ 25 words) |
|---|---|---|---|---|
| 1 | **High** | after N024 | **No drawdown.** The plan's numerical is "1 PCL limit / drawdown sum" and Jun 2023 recalled "PCL drawdown by exporter Case Study". The lesson sizes the limit but never draws it, so a learner cannot tell the limit from the drawals, may take margin twice, or think a request above what is left can be paid. Q2 partly. ~60 words. | After N024 add **N024a** "She doesn't take it all at once. Yarn first, thirty-five lakh. Stitching, twenty-eight lakh. Each drawal in its own account." · **N024b** "Now she asks twenty-five lakh for packing. How much can the bank give? Think." (H: 8 s) · **N024c** "Eighty-one minus sixty-three: eighteen lakh, not twenty-five. The margin is already taken; never take it twice." Board: keys "8100000 − 3500000 − 2800000 = 1800000"; box "available ₹18,00,000"; strike "25,00,000". Add as **S1b** to `numericals.md` and `export_pcl.py` [F5]. |
| 2 | Medium | after N049 | **Liquidation by a smaller bill.** The Dec 2023 item asked what is true of liquidation; the commonest case twist is part-shipment: the bill repays only part, and the rest stays as packing credit. S2 shows only bill > loan. Q6 not answerable. ~45 words. | After N049 add **N049a** "Suppose she ships only half, a sixty-thousand-dollar bill. Proceeds: fifty lakh eighty-eight thousand." · **N049b** "That repays part. The other thirty lakh twelve thousand stays as packing credit, for her next shipment, inside the three sixty days." Keys "60000 × 84.8 = 5088000 · 8100000 − 5088000 = 3012000" (interest left aside, say so on the card). Add as **S2b** to `numericals.md` and the checker [F3, F6]. |
| 3 | Medium | N032 | **"Total period" never becomes a date.** Recalled Dec 2023 "Total Period of PCL"; a case gives the advance date and asks when the credit fails, or from when it stops being export credit. ~30 words. | After N032 add **N032a** "Released on the fifteenth of January twenty twenty-seven? Day three sixty is the tenth of January twenty twenty-eight. Miss it, and it fails from the fifteenth." Card: "15 Jan 2027 + 360 days = 10 Jan 2028 · fails ab initio (from 15 Jan 2027)" [F3]. (Checked: 2027-01-15 + 360 d = 2028-01-10.) |
| 4 | Medium | ch1 (after N016) | **Two classic one-liners missing.** (a) CF 388: pre- and post-shipment limits are interchangeable (F24). (b) CF 248–249: a maker supplying an export house can get packing credit as a sub-supplier via an inland LC opened by the order holder's bank (F11). Worse, N015's card "not for sub-suppliers" invites the wrong belief that sub-suppliers get no PC at all. Q7, Q8 not answerable. ~45 words. | After N016 add **N016a** "If a maker supplies an export house, she can still get packing credit. The export house's bank opens an inland L-C for her." · **N016b** "And her pre-shipment and post-shipment limits are interchangeable. R-B-I says banks shall allow it." Card: "sub-supplier: inland LC by export-order holder's bank · first stage only · no running account [F11] · pre ⇄ post limits interchangeable (CF 388) [F24]". Change N015's card to "not for sub-suppliers (they get PC through an inland LC, below)". |
| 5 | Medium | N012 / header | **Plan additions (9) eligibility checklist and (13) margin on non-LC usance bills** are neither voiced nor recorded as dropped. The fact sheet correctly finds both are bank practice, not in CF Chapter XV; the depth checklist has both teachers covering (9). A one-line "banks usually check" keeps the learner able to answer the class-style question without stating it as RBI's rule. ~35 words. | After N012 add **N012a** "Banks usually also check her I-E-C, and that she isn't on R-B-I's caution list or E-C-G-C's specific approval list. Bank practice, not an R-B-I list." Card labelled "bank practice". In the header "Not in this video" add: "margin on non-LC usance bills: bank practice, not in CF Ch. XV (fact sheet Leads); not taught as a rule." |
| 6 | Medium | practice | **No practice on the recalled case forms.** P1 (limit) is good, but there is no drawdown item, no liquidation item (the Dec 2023 recalled form) and no post-shipment-proceeds sum. P1 is also not in `export_pcl.py`. | Add **P8** (Q3 above, key (i)–(iii)), **P9** (Q2 above, key ₹18 lakh; distractor ₹22.5 lakh = margin twice), **P10** (Q6 above, key ₹30,12,000 stays as PC). Add P1, P9, P10 sums to `export_pcl.py`. Optionally **P11** (Q7, interchangeable). |
| 7 | Low | N048 | Interest "₹1,35,000 (illustrative)" is given, not worked; IIBF drawdown cases usually ask interest for days. A12 teaches day-interest, so a card only is enough. | Card under N048: "interest is a given figure here; computing it for days: A12". Or work it: 81 lakh at 10 % for 73 days → keys "8100000 × 10 % = 810000 · × 73 ÷ 365 = 162000", then N049 becomes 10176000 − 8262000 = **₹19,14,000** (update S2 and checker). |
| 8 | Low | N062 | PCFC: when imported inputs are on supplier's credit, PCFC is only for domestic inputs (F22). Q10 partly. | Card under N062: "imported inputs on supplier's credit → PCFC for domestic inputs only" [F22]. |
| 9 | Low | N034 | Older books say "180 days, extendable"; CF has no 180-day PC period (only EBR, para 346). The Q5 distractor will catch some. | Add to N034's trap card: "'180 days + extension': old books; today the bank fixes the period, outer line 360". |
| 10 | Low | N050 | Voice says "twenty-five days for a foreign currency bill"; the rule is foreign-currency sight bill **not under LC** (rupee bills not under LC 20 days). Card has it, voice drops it. | N050: "…FEDAI sets it, for example twenty-five days for a foreign currency bill not under an L-C." |
| 11 | Low | N045 / F24 | Export credit target (10 % of net credit, CF 394(3)) is a cheap MCQ; not voiced. Fine to leave for the PDF. | PDF / traps page only. |
| 12 | Low | N061 | "Dollar interest rates are usually lower" is a general claim, not from the fact sheet. | "Why? Dollar loans often cost less than rupee loans." (or drop the clause and keep the ARR card). |

## Practice check (`practice.md`, recomputed)
- **P1**: FOB 76,000 × 85 = ₹64,60,000 < ₹70 lakh; × 90 % = **₹58,14,000** ✓. Distractors: (a) 80,000 × 85 × 0.9 =
  ₹61,20,000 (CIF) ✓; (c) ₹63,00,000 (cost × 90 %) ✓; (d) ₹68,00,000 (CIF, no margin) ✓. Good, plausible errors.
- **P2** key (b) ✓ (CF 235, 292). **P3** key (b) ✓ (CF 293); (d) TT selling is a good PCFC distractor. **P4** key (d)
  ✓. **P5** key (b) ✓; (c) "180 days from bill date" mixes EBR and the date trap, good. **P6** key (c) ✓. **P7** key
  (b) ✓; (a) "open to all sub-suppliers" is correct as a running-account point, but see finding 4 so learners do not
  over-generalise.
- No key is wrong. Gaps are coverage, not accuracy (finding 6).

## Sums
`tools/check/export_pcl.py`: S1 FOB 120,000; ₹1,02,00,000; limit ₹81,00,000; twist ₹81,00,000; S2 ₹1,01,76,000,
₹82,35,000, ₹19,41,000; close FOB 190,000: **all OK**, both ways. Key presses in N023–N024, N048–N049 work on a 12-digit
8-function calculator (largest entry 90000000). New sums from findings 1–3 recomputed here: 81 − 35 − 28 = 18 lakh;
60,000 × 84.80 = ₹50,88,000; 81,00,000 − 50,88,000 = ₹30,12,000; 15 Jan 2027 + 360 d = 10 Jan 2028; (finding 7)
81,00,000 × 10 % × 73/365 = ₹1,62,000, 1,01,76,000 − 82,62,000 = ₹19,14,000.

## Severity counts
High 1 · Medium 5 · Low 6.
