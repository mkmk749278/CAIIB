# A12 c1 · independent review: SUBJECT EXPERT

- **Reviewed**: `course/bfm/A/A12/script_class.md` c1 (N001–N077 and cue sheet), `numericals.md`, `practice.md` (P1–P8),
  fact sheet `research/bfm/facts/A5.11_A12.md` (F1–F14) and the rows it leans on in `A1.5-A1.7_A05.md` (F13, F15) and
  `A5.3_A11b.md` (F3, F4, F6, F8, F14, F15), `research/bfm/sources/fedai_rules_cutoff.md`, `plans_A.md` §A12,
  `research/bfm/depth/A.md` (A5.3, A5.11), `course/spec/lesson_spec.md`, CLAUDE.md hard lines. 2026-11-22, fresh context.
- **Primary texts checked**:
  - **FEDAI Rules, 10th edition, updated up to 20 Aug 2026** (local copy `.cache/fedai/f.txt` of
    fedai.org.in/UploadPopupPageFiles/FEDAI_Rules_10th_Edition_20Aug2026.pdf), Rule 2 read in full: 2.1(a) (FC bills
    purchased / discounted / negotiated at the current **bill buying rate or contracted rate**; interest for NTP and/or
    usance **recovered upfront simultaneously**); 2.1(b)(i)–(v) (AD's **own crystallisation policy**, **transparently
    available** to customers; **TT selling**; amount recoverable = crystallised rupees + interest and charges; interest
    **recovered on the date of crystallisation for the overdue period**, and thereafter till recovery; externalisation
    countries crystallised per policy notwithstanding local-currency payment advice); 2.1(c) (TT buying or contracted
    rate after crystallisation); 2.1(d) (dishonour before crystallisation: bill + foreign charges at TT selling,
    interest and rupee charges); 2.2(a)–(c) (rate per RBI; overdue interest after NTP / notional or actual due date;
    early realisation: refund for unexpired period, notional swap cost as for early delivery, outlay interest per 6.6);
    2.3(a)–(e) (fixed due date → NTP not applicable; FC sight / DP not under LC 25 days; bank may vary NTP with
    documented rationale, finance beyond NTP max 90 days from shipment; no change in due date after purchase); 2.4;
    2.5(a)–(c) (collection: TT buying or contract rate, only after Nostro credit; 2.5(b) as amended by AR 03/2026 of
    7 Sep 2026, inside the 31 Dec 2026 cut-off).
  - **Older FEDAI Rule text** (pre-10th-edition wording, as reproduced at eximguru.com "FEDAI Rules · Rule 2 Export
    transactions", carrying AR circular references of 1992 and 1995; a lead for history, not a current source):
    crystallisation **"on the 30th day after the transit period"** for unpaid demand bills and **on the 30th day from the
    notional / actual due date** for unpaid usance bills; next working day if a holiday or Saturday; **spot TT selling
    rate** on the crystallisation date; interest from expiry of NTP / notional due date to crystallisation at the RBI
    rate for overdue export bills; notional due date = **transit + usance + grace period, if any**; dishonour: **higher
    of** the amount at current spot TT selling or the amount originally advanced. So the script's "older FEDAI rule: day
    30" is **right**; the exact edition in which it was replaced is not established here (see L1).
  - **RBI (Commercial Banks – Credit Facilities) Directions, 2025** (rbi.org.in, id=13156): para 4(1)(xxvii) (overdue
    bill: demand bill not paid before NTP expiry; usance bill not paid on the due date); 235, 292 (PC not liquidated in
    360 days ceases to be export credit ab initio); 243–246 (running account); 268 (overdue post-shipment rupee credit
    may be extinguished from rupee resources; EDF stays outstanding in EDPMS, realisation duty continues); 270 (usance:
    max 365 days from shipment incl. NTP, and grace); 293 (exports not materialising: **domestic lending rate plus penal
    charges**, Board-approved policy); 359 (EBR: interest from the due date to the date of crystallisation).
- **Numbers**: `python3 tools/check/export_discounting.py` → all OK. Re-done by hand: 50,000 × 85.20 = 42,60,000;
  42,60,000 × 9 % × 85 ÷ 365 = 89,284.9315 → 89,284.93; credited 41,70,715.07; 50,000 × 86.10 = 43,05,000; gap 45,000;
  42,60,000 × 11 % × 30 ÷ 365 = 38,515.0685 → 38,515.07; total 43,43,515.07; 50,000 × 85.60 = 42,80,000. Variant:
  25,47,000; 47,450.96; 24,99,549.04; 25,71,000; 20,934.25. Every key string in the cues matches its amount digit by
  digit; the largest display (32,589,000; 89284.9315068) fits 12 digits; only × ÷ − + % are used.
- **Dates (Python, 2027)**: Mon 1 Feb; +85 days (Feb has 28 days in 2027) = **Tue 27 Apr** ✓; +30 = **Thu 27 May** ✓;
  Wed 16 Jun ✓. None falls on a Saturday or holiday-prone date.
- **Copyright**: own words; FEDAI cited by rule number; no coaching text.

## Verdict: ADOPT WITH FIXES

Every rule, rate choice and number in the script is right against FEDAI Rule 2 (Aug 2026 text) and the RBI Directions:
discount at bill buying with interest upfront; NTP 25 days for an after-sight FC bill not under LC and none for a fixed
due date; crystallisation day by the bank's published policy at **TT selling**; overdue interest recovered on the
crystallisation date; late proceeds at **TT buying**; dishonour at TT selling; early realisation refund plus swap
cost; collection at TT buying after Nostro credit; the "older rule: 30th day" trap is historically correct. Three
Medium points could mislead in an exam case: the unstated assumption that Ravi pays the crystallised debt on the day
(which makes "₹42,80,000 to Ravi" true), the "rupee weakened" reading of the ₹45,000 gap, and the overdue-interest base
that exam cases do not all share.

## Findings

### High
None.

### Medium

1. **N040–N042: the case never says that Ravi actually pays on 27 May, yet N042 hands him the whole ₹42,80,000.**
   FEDAI 2.1(b)(iii)–(iv): crystallisation creates a rupee liability; "the amount recoverable, **thereafter**", is the
   crystallised amount plus interest, and interest runs "thereafter till the date of recovery". If Ravi did not pay on
   27 May, the 16 June proceeds would first go to the rupee debt (₹43,05,000 + interest at 27 May + interest from
   27 May to 16 June), and only the surplus (if any) would go to him; here there is a shortfall. An IIBF case that asks
   "amount payable to / recoverable from the exporter on realisation" turns on exactly this. Fix N040: "So on the
   twenty-seventh of May, the bank recovers forty-three lakh, forty-three thousand, five hundred and fifteen. In our
   case Ravi pays it that day." Card add "(case: Ravi pays on 27 May)". Fix N042 card: "paid already → proceeds at TT
   buying go to Ravi · not paid → they first close the rupee debt + interest to date". Optionally one spoken line after
   N042: "Had he not paid on the twenty-seventh, these rupees would first close his rupee debt, with interest to today."
   Also (CF 268) a light note on the same card: "paying in rupees doesn't close the export: EDPMS stays open till the
   dollars come" (already in A11b F15; a case question on "is the export obligation over?" is common).

2. **N037 card "(rupee weakened)" gives the wrong cause of the ₹45,000.** The gap is TT selling (86.10) minus bill
   buying (85.20): it includes the bank's buy-sell spread and the usance pricing of the bill buying rate, and would be
   positive even if the market had not moved at all. A learner told "the rupee weakened" may answer a case "no loss
   if the rate is unchanged", which is wrong. Source: FEDAI 2.1(a) vs 2.1(b)(iii) (two different rate types); A01/A05
   rate map. Fix N037 card: "43,05,000 − 42,60,000 = ₹45,000 more than he got: selling rate above the rate he was
   paid (spread + any market move)". Spoken line can stay ("The forty-five thousand gap is his exchange loss").

3. **N038: the base and period for overdue interest are a case convention, but the line and sum card don't say so.**
   FEDAI 2.1(b)(iv) and CF 359 fix the **period** (due date to crystallisation, recovered on the crystallisation date)
   and leave the rate "appropriate" (bank / RBI policy); neither fixes the **base**. Exam solutions differ: some use the
   rupee advance (bill × bill buying rate, as here), some the bill at the crystallisation rate, some the net amount
   disbursed. The header's convention covers it on paper, but the N018 card carries "(case convention)" and N038's
   doesn't. Fix N038 sum card: "₹42,60,000 × 11% × 30 ÷ 365 (case convention: on the advance, due date → crystallisation)";
   spoken, add three words: "Eleven per cent, illustrative, on the advance, as the case says." Add one practice item
   (or a note under P3): "If the case says interest on the crystallised amount: 25,71,000 × 10 % × 30 ÷ 365 =
   ₹21,131.51" so the learner reads the base from the question. (Checked: 25,71,000 × 10 % = 2,57,100 × 30 = 77,13,000
   ÷ 365 = 21,131.506… → ₹21,131.51; please add to the checker.)

### Low

1. **Fact sheet "Leads checked", line 1: "pre-2019 editions" is not proved.** The older wording is confirmed (above: 30th
   day after NTP for demand bills, 30th day from notional / actual due date for usance bills, next working day if a
   holiday or Saturday, spot TT selling), but when FEDAI replaced it with the bank-policy rule is not established here
   (the 10th edition of 1 Apr 2019 has the new text; it may have come in earlier by an AR circular). Fix: "an older
   FEDAI rule (earlier editions; wording seen in reproduced older Rule 2 text), replaced by the bank-policy rule at the
   latest in the 10th edition (1 Apr 2019)". The script already says just "an older FEDAI rule": keep it so.
2. **Second old-book trap worth a card: dishonour "whichever is higher".** The older Rule 2 recovered, on dishonour,
   the **higher** of the amount at current TT selling or the amount originally advanced; the current 2.1(d) has only TT
   selling plus charges and interest. Older books still print the "higher of". Add to the N049 card: "(older books:
   'higher of TT selling amount or amount advanced' ✗ not in current rule)", and to the fact sheet F9 as a lead.
3. **N009 "F-E-D-A-I fixes twenty-five days" is now slightly too absolute.** 2.3(b) (10th edition) lets a bank apply a
   higher or lower NTP for exceptional situations with documented rationale, and caps finance beyond NTP at 90 days
   from shipment. Fix card: "… NTP 25 = 85 days (a bank may vary NTP with documented reasons; max 90 days from shipment)";
   spoken line may stay.
4. **N011 notional due date formula omits "grace, if any".** CF 270 ("inclusive of NTP and grace period") and the
   older FEDAI definition add a grace period where the buyer's country allows one. Fix N011 note: "notional due date =
   discount date + NTP + usance (+ grace, if any)". No change to the sums.
5. **% key strings (N019, N039, numericals).** "4260000 × 9 % = 383400": on most 8-function calculators the % key
   completes the operation and shows 383400 at once; an extra "=" repeats the last operation on some models (constant
   mode) and would change the display. House style (A11b) uses the same form, so either keep it consistently or write
   "4260000 × 9 % → 383400 · × 85 = …". The digits themselves are all right.
6. **N004 evidence count.** Export-bill items appear in five studied cycles (Jun 2023 EDBP case, Dec 2023 export-bill
   case, Jul 2024 crystallisation case, Jun 2025 discounting, Dec 2025 paper Q28 crystallisation), not four; the card
   omits Dec 2023. Fix: "five of the exam cycles" and add "export bill case (Dec 2023)" to the card, or keep "four" and
   drop nothing; just make card and voice agree with `items_tagged.csv` / `fullpaper_tagged.csv`.
7. **N063 "domestic lending rate, plus penal"** → "plus penal charges" (CF 293 says "penal charges"; since RBI's 2023
   penal-charges framework banks may not levy penal *interest*). Card "4 ✗ domestic rate + penal charges".
8. **N061 card "FOB / cost, never CIF".** "Lower of FOB and domestic cost, less margin" is bank practice / exam method,
   not RBI text (A11b F-note). Card: "2 ✗ lower of FOB / domestic cost, less margin (exam method)". The verdict False
   stays right.
9. **N062 statement three** is true only for good-track-record exporters and EOU / SEZ units, at the bank's judgement
   (CF 243). The spoken answer says "for good-record exporters": add "and E-O-Us" or put it on the card.
10. **N053 card** "collection bill: TT buying, after credit to the Nostro" → add "(or contract rate)" (FEDAI 2.5(a));
    same for N074's map node.
11. **N050** "plus or minus a swap cost" → card "notional swap cost paid / recovered, as for early delivery of a
    forward contract" (FEDAI 2.2(c)), so the learner links it to A06.
12. **Case "what should the bank do" questions** often list: crystallise per policy, recover overdue interest, follow
    up / report the overdue in EDPMS, and lodge an ECGC claim if covered. ECGC is rightly deferred to A15, but one
    cue-only line on the N052 or N040 card ("also: EDPMS follow-up · ECGC claim if covered → A15") keeps a case
    answer from looking incomplete.
