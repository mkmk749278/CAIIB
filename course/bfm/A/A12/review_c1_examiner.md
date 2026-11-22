# A12 c1 · Independent review: EXAMINER (fresh context, 2026-11-22)

Script: `course/bfm/A/A12/script_class.md` c1 (Ravi's USD 50,000 bill, 60 days after sight, not under LC; five linked
sums; three other endings; a five-statement packing-credit case). Read with: `numericals.md` and `practice.md` c1,
`tools/check/export_discounting.py` (run: **all OK**, dates included); facts `A5.11_A12.md` (F1–F14),
`A1.5-A1.7_A05.md` (F12–F19), `A5.3_A11b.md` (F1–F15); syllabus A5.3, A5.11, A1.7; plans_A §A12; depth/A.md A5.3,
A5.11; items_tagged (2023-06 EDBP case, 2024-07 crystallisation case, 2025-06 export discounting); fullpaper_tagged
Dec 2025 Q9–11 ("An exporter presents a **sight** bill of USD 50,000 for discounting…"), Q28 (purpose of
crystallisation), Q39 (country risk: ECGC, not a returned bill as the plan says); importance_map (A-FXNUM 7/7 cycles,
A-EXIMP 7/7). The A10 examiner review as the format model. Every date, weekday and sum below was recomputed in Python
(Decimal, round half up).

## Verdict: **ADOPT WITH FIXES**

The case is right and well paced. Every rule it teaches matches the fact sheet and FEDAI Rule 2: bill buying rate
with interest for transit + usance upfront (2.1(a)); NTP 25 days added to an after-sight bill, none for a fixed due
date (2.3(a), (b)); overdue interest from the due date (2.2(b)); crystallisation day = the bank's published policy,
with "day 30" correctly shown as the older rule (2.1(b)(i)–(ii)); crystallisation at TT selling (2.1(b)(iii)); overdue
interest recovered on the crystallisation date (2.1(b)(iv)); externalisation problems (2.1(b)(v)); late proceeds at
TT buying (2.1(c)); dishonour at TT selling plus foreign charges (2.1(d)); early realisation refund and swap (2.2(c));
collection bills at TT buying after Nostro credit (2.5). The five statements match A11b F3, F4, F6, F8. All sums
check: C1 ₹42,60,000; C2 ₹89,284.93 and ₹41,70,715.07; C3 ₹43,05,000; C4 ₹38,515.07 and ₹43,43,515.07; C5
₹42,80,000; V1/V2 as in practice. Dates: Mon 1 Feb + 85 = **Tue 27 Apr 2027**; + 30 = **Thu 27 May**; Wed 16 Jun
correct. Key presses work on the 8-function, 12-digit calculator (largest display 32,589,000).

The gaps are the **case variants an examiner pulls from the same facts** but the lesson never works with numbers:
(1) the most recent recalled case (Dec 2025 Q9–11) is a **sight** bill, and the lesson never computes a sight-bill
discount (interest for 25 days only); (2) the bill paid **late but before crystallisation** (overdue interest only, no
conversion), the commonest "overdue interest charge" sum, is not taught at all; (3) early realisation and the
returned bill are rules without a number. Each needs one or two lines. The lesson also says "worked out as in A05"
for 85.20 without one line of how, though an EDBP case usually opens with the rate.

Length: **1,222 spoken words** (≈ 8.7 min at 140 wpm) + **152 s** of holds ≈ **11.2 min**, inside the 10–14 case
band. No spoken sentence exceeds 25 words. The fixes below add about **230 words + ~25 s of holds** (≈ 13.3 min).

Answerable from this lesson alone: **6 of 10 yes, 3 partly, 1 no.** (After fixes 1–5: 10 of 10.)

## Ten exam-style case questions

Base case unless stated: USD 50,000, 60 days after sight, FC bill not under LC, discounted Mon 1 Feb 2027; bill buying
₹85.20; 9 % p.a. to the due date, 11 % p.a. overdue; TT selling on crystallisation ₹86.10; TT buying on 16 Jun ₹85.60;
bank policy: crystallise 30 days after the due date; interest on the rupee advance, actual days ÷ 365.

| # | Question (key) | Traps in the options | Answerable? Line |
|---|---|---|---|
| 1 | **Sight** bill instead, USD 50,000, discounted 1 Feb at ₹85.20, 9 %. Amount credited to the exporter? Interest for NTP **25 days**: 42,60,000 × 9 % × 25 ÷ 365 = **₹26,260.27**; credited **₹42,33,739.73** (FEDAI 2.1(a), 2.3(b)) | 85 days (₹89,284.93) · no interest on a sight bill (₹42,60,000) · 20 days | **Partly**: N068 teaches "25 days" for a sight bill, but no line says interest is for the NTP only, and the sum is never done (finding 1) |
| 2 | Notional due date of the base bill: **Tue 27 Apr 2027** (1 Feb + 60 + 25) | Fri 2 Apr (60 days only) · Fri 26 Feb (25 only) · 27 May | Yes: N009–N011 |
| 3 | Amount credited to Ravi on 1 Feb: **₹41,70,715.07** | ₹42,60,000 (no interest) · ₹42,33,739.73 (25 days) · ₹41,96,975.34 (60 days) | Yes: N015–N020 |
| 4 | Bill unpaid; crystallised on (date) at (amount): **Thu 27 May 2027, ₹43,05,000 at TT selling** (2.1(b)) | 27 Apr at bill buying ₹42,60,000 · 27 May at TT buying ₹42,80,000 · day 30 by FEDAI rule | Yes: N029–N036 |
| 5 | Overdue interest and total recovered on crystallisation: **₹38,515.07; ₹43,43,515.07** (2.1(b)(iv)) | interest at 9 % (₹31,512.33) · interest on 60 days · interest on ₹43,05,000 (₹38,921.92) | Yes: N038–N040 (base "on the advance" is said; it is a case convention, labelled) |
| 6 | Proceeds arrive Wed 16 Jun after crystallisation; amount credited: **₹42,80,000 at TT buying** (2.1(c)). Ravi's net from the whole deal: 41,70,715.07 − 43,43,515.07 + 42,80,000 = **₹41,07,200** | at TT selling ₹43,05,000 · nothing: the bank keeps it · at the crystallisation rate | Yes for the credit (N041–N042); the net is not shown (Low 8) |
| 7 | The buyer pays on **Mon 10 May 2027**, 13 days after the due date, before crystallisation. The bank: **liquidates the dollar advance with the dollars (no conversion) and recovers overdue interest for 13 days: 42,60,000 × 11 % × 13 ÷ 365 = ₹16,689.86** (2.2(b)) | converts at TT buying and pays Ravi · crystallises first, then pays · no interest as crystallisation has not happened | **No**: the payment-between-due-date-and-crystallisation path is never taught (finding 2) |
| 8 | The buyer pays early, on **Fri 2 Apr 2027**, 25 days before the notional due date. Ravi gets back: **interest for the 25 unexpired days, 42,60,000 × 9 % × 25 ÷ 365 = ₹26,260.27**, plus or minus the swap cost (2.2(c)) | nothing: interest once recovered is not refunded · the full ₹89,284.93 · interest at 11 % | **Partly**: N050 gives the rule; no sum (finding 3) |
| 9 | The bill comes back dishonoured on 27 Apr, with foreign bank charges of USD 200; TT selling ₹86.10. The bank recovers: **(50,000 + 200) × 86.10 = ₹43,22,220, plus interest and rupee charges** (2.1(d)) | at bill buying (₹42,60,000) · only USD 200 of charges · bill at TT buying | **Partly**: N049 rule only; learners will multiply 50,000 alone (finding 4) |
| 10 | The **primary purpose** of crystallising an export bill (Dec 2025 Q28): **to convert the foreign-currency liability into rupees so the exchange risk moves from the bank to the exporter** (2.1(b)) | to recover overdue interest · to report the bill in EDPMS · to claim from ECGC | Yes: N028 card "the exchange risk moves to the exporter" |

## Findings

| # | Sev | Line | Finding | Exact fix (ready words; spoken sentences ≤ 25 words) |
|---|---|---|---|---|
| 1 | **High** | after N012 | The latest recalled export-bill case (Dec 2025 Q9–11) is a **sight** bill of USD 50,000 for discounting. The lesson computes only an after-sight bill; for a sight bill it gives only "twenty-five" days (N068). The learner is never told that a sight bill carries interest for the NTP only, nor sees the 25-day sum. Q1 partly. | After N012 add **N012a** "And a sight bill? Only the transit period: twenty-five days of interest, no usance." · **N012b** "Same fifty thousand dollars, eighty-five twenty, nine per cent, twenty-five days. Work out the interest." (H: 8 s) · **N012c** "Twenty-six thousand, two hundred and sixty rupees. Credited, forty-two lakh, thirty-three thousand, seven hundred and forty." Keys card: "4260000 × 9 % = 383400 · × 25 = 9585000 · ÷ 365 = 26260.27 · 4260000 − 26260.27 = 4233739.73" [F1, F2; A05-F15]. Add to `numericals.md` as C2s and to the checker. (Rupee: ₹42,33,739.73; spoken "forty"-rounded, as N019 does.) |
| 2 | **High** | after N026 | The commonest overdue sum (and depth A5.11 #2 / youtube_analyses "overdue interest charge") is the bill **paid late but before crystallisation**: the dollars liquidate the dollar advance, no conversion, and only overdue interest for the late days. The lesson jumps from "unpaid on the due date" straight to crystallisation, so learners will either convert at TT buying or crystallise first. Q7 no. | After N026 add **N026a** "Say Rotterdam pays on the tenth of May, thirteen days late. Does the bank crystallise?" (H: 3 s) · **N026b** "No. The dollars close the dollar advance. Ravi pays only overdue interest for thirteen days, at the higher rate." · **N026c** "Forty-two lakh sixty thousand, eleven per cent, thirteen days: sixteen thousand, six hundred and ninety rupees." Card: "paid late, before crystallisation → no conversion · overdue interest only: 4260000 × 11 % × 13 ÷ 365 = ₹16,689.86" [F3; A05-F18]. Then N027 "But our story: nothing comes at all. Does the bank just wait? No. It crystallises." Add to numericals + checker (Mon 10 May 2027 = due + 13 ✓). |
| 3 | Medium | N050 | Early realisation is a rule without a number; the refund sum is the same keys as C2 with the unexpired days, and is a natural "calculate" item. Q8 partly. | Replace N050 with "Two. Rotterdam pays on the second of April, twenty-five days early. Ravi gets back interest for those twenty-five days." + **N050a** "Nine per cent on forty-two lakh sixty: twenty-six thousand, two hundred and sixty rupees, plus or minus a swap cost." Card: "early realisation → refund for unexpired days: 4260000 × 9 % × 25 ÷ 365 = ₹26,260.27 ± swap cost" [F10]. (Fri 2 Apr → Tue 27 Apr = 25 days ✓; same keys as fix 1, which helps memory.) |
| 4 | Medium | N049 | Dishonour: the rule is right but the exam's number twist (foreign charges added to the bill **before** conversion at TT selling) is not shown. Q9 partly. | N049: "One. The bill comes back dishonoured, before crystallisation, with two hundred dollars of foreign charges. What does Ravi owe?" (H: 6 s) · **N049a** "Fifty thousand two hundred dollars, at T-T selling: forty-three lakh, twenty-two thousand, two hundred, plus interest and rupee charges." Keys "50200 × 86.1 = 4322220" [F9]. Add to numericals + checker. |
| 5 | Medium | N014 | "Eighty-five rupees twenty, worked out as in A-zero-five" gives no reminder of how. An EDBP case usually asks the rate first (spot + premium for transit + usance, rounded down to completed months when a premium, less margin: A05 F14). One recall line keeps the case self-contained. | After N014 add **N014a** "Quick recall: spot, plus premium for eighty-five days rounded down to two completed months, less the bank's margin." Card: "bill buying (usance) = spot + premium for 2 completed months (85 days, rounded down: bank's favour) − margin (convention)" [A05-F14]. No new numbers needed; if the author shows figures, put them through the checker. |
| 6 | Low | N038 | Depth A5.11 #2 "concessional period": the case uses 9 % then 11 % without saying why. | N038: "And interest for the overdue thirty days. The export rate ran only till the due date; after it, a higher rate, eleven per cent here." (keep the card) [F3, F12]. |
| 7 | Low | N037 | "Exchange loss (rupee weakened)": 85.20 (bill buying, after margin and premium) vs 86.10 (TT selling) is mostly the buy-sell spread, not only market movement. | Note: "43,05,000 − 42,60,000 = ₹45,000 exchange difference (bought at bill buying, sold back at TT selling)". |
| 8 | Low | after N042 | The exporter's net outcome (₹41,07,200: credited 41,70,715.07 − paid 43,43,515.07 + received 42,80,000) is a plausible case "net realisation" item and a strong picture of why exporters want prompt payment. | Card only under N043: "Ravi's net: 41,70,715.07 − 43,43,515.07 + 42,80,000 = ₹41,07,200". |
| 9 | Low | after N040 | F6 "thereafter till recovery" and F13/A11b-F15 (repaid in rupees, the bill **stays open in EDPMS** till realised) are not voiced; EDPMS is a frequent theory item. | **N040a** "Even repaid in rupees, the bill stays open in E-D-P-M-S till the dollars come." Card adds "unpaid after crystallisation → interest continues till recovery" [F6, F13]. |
| 10 | Low | N004 | "One case can carry five marks": the recalled cases show three linked questions (Dec 2025 Q9–11). | "One case can carry three to five marks." |
| 11 | Low | ch4 | Depth A5.11 #1 lists eligibility; the five statements cover period, amount basis, running account, non-export, liquidation, not eligibility. Acceptable (A11b taught it); note in the review response. | Optional: swap statement 5 for "Packing credit needs an L-C or a firm order, unless the bank waives it for a good-record exporter. True." [A11b-F2, F9]. |
| 12 | Low | practice | Practice covers C1–C5 and rules P4–P8 well, but nothing on the sight bill, the late-before-crystallisation payment, early refund or the statement case (ch4). | Add **P9** "Sight bill USD 20,000, bill buying ₹85.00, 9 %: interest recovered upfront? *20000 × 85 = 1700000; × 9 % × 25 ÷ 365 = ₹10,479.45*" · **P10** "Bill paid 10 days after the due date, before crystallisation: (a) crystallise then credit (b) **no conversion; overdue interest for 10 days** (c) convert at TT buying (d) no interest" [F3] · **P11** one false statement from ch4 (CIF basis). Run new sums through the checker. |
| 13 | Low | numericals.md / practice.md | Practice cites "numericals V1 / V2" but `numericals.md` labels the variant only "Faded variant"; the checker uses V1/V2. | Label the two bullets "V1" and "V2" in `numericals.md`. |
| 14 | Low | plans_A §A12 | The plan's evidence line says fullpaper Q39 is a "returned bill"; Q39 is "Country Risk is a type of" (A-ECGC). | Module A session to correct the plan line (not this file's job); the returned bill is still worth fix 4. |

## Practice check (`practice.md`, all recomputed)
- P1: 30,000 × 84.90 = ₹25,47,000; 25,47,000 × 8 % × 85 ÷ 365 = ₹47,450.96; credited ₹24,99,549.04 ✓.
- P2: 30,000 × 85.70 = ₹25,71,000 ✓ (also the close Q2, N069–N070 ✓).
- P3: 25,47,000 × 10 % × 30 ÷ 365 = ₹20,934.25 ✓.
- P4 (c) TT selling ✓ [F5]; P5 (a) bank's policy ✓ [F4], distractor (b) correctly labelled the older rule; P6 (d)
  TT buying or contract ✓ [F8]; P7 (b) NTP does not apply ✓ [F2]; P8 (c) ✓ [F9].
- Keys are unambiguous; one key per item; distractors are real exam confusions. No errors found.
- Checker `tools/check/export_discounting.py`: 13 lines all OK; dates OK. New sums from fixes 1–4 (₹26,260.27,
  ₹42,33,739.73, ₹16,689.86, ₹43,22,220) recomputed here and should be added to it.

## Spec and method checks
- Warm-up recalls A11b (360 days, ab initio) ✓; each chapter opens with a recall from the last ✓; one pause check per
  chapter with a twist ✓; one light line (N043) ✓; trap cards voiced for the two plan misconceptions (bank waits;
  bill buying again) and the day-30 rule ✓; map filled from memory ✓; homework ✓; A13 teaser ✓.
- Rule-version card present; illustrative rates and the bank policy labelled "case convention" ✓.
- No AI-voice disclosure, no "checked against the source" line ✓.
