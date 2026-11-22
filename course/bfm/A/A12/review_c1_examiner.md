# A12 c1 · Independent review: EXAMINER (fresh context, 2026-11-22)

Script: `course/bfm/A/A12/script_class.md` c1 (four chapters: discounting the bill · interest up front · unpaid:
crystallisation · the packing-credit statements; one five-step case, a faded sight-bill variant, early payment). Read
with: `numericals.md` c1, `practice.md` c1, facts `research/bfm/facts/A5.11-A5.3_A12.md` (F1–F19 and "Leads"), FEDAI
summary `research/bfm/sources/fedai_rules_cutoff.md` (2.1(b)–(d), 2.5(a)); syllabus A5.3, A5.11, A1.7; `coverage.csv`
rows A5.3 (A11b;A12) and A5.11 (A12); plans_A §A12 (incl. v3 addition 1); depth/A.md A5.3 (item 5), A5.11 (items 1–2)
and the A12 row of the additions table; items_tagged (EDBP case Jun 2023; "Case Study On Export Bill" and "Which is
incorrect about realization of export bill?" Dec 2023; "Case Study On Crystallization of Bill" Jul 2024; "Export
Discounting" Jun 2025); fullpaper_tagged (Dec 2025 Q9–11 sight-bill discounting case, Q28 purpose of crystallisation;
undated set Q14–15 EBD role and advantage, Q39 purchased bill returned unpaid); importance_map (A-FXNUM 7/7, 32
mentions). Prior lessons checked: A05 (usance bill buying rate built N042–N059; NTP card N053–N058) and A11b (PC
statements' sources; it hands "margin on bills not under an LC" to A12, header line 24 and the N045 card).
`python3 tools/check/export_bills.py`: **all OK** (21 lines). Dates recomputed: Mon 1 Mar 2027 + 85 d = Tue 25 May
2027; + 30 d = Thu 24 Jun 2027; + 20 d = Wed 14 Jul 2027 ✓.

## Verdict: **ADOPT WITH FIXES**

The case is the right case and it is correct. The three verbs (F1), bill buying or contracted rate (F2), interest up
front (F3), NTP + usance for an after-sight bill and no NTP for a fixed due date (F4), the overdue definitions (F6),
early-payment refund with swap cost (F8), crystallisation as "foreign-currency liability → rupee liability" with the
day set by the bank's published policy (F9) and the old "30th day" kept as history, TT selling (F10), interest for the
overdue period and thereafter (F11), proceeds after crystallisation at TT buying (F13), dishonour before
crystallisation at TT selling with foreign charges (F14) and EDPMS still open (F17) are all voiced, carded and
practised. The faded variant is almost exactly the Dec 2025 Q9–11 form (USD 50,000 sight bill: rupee value, transit
interest, amount credited), and Q28 (purpose) and Q39 (returned bill: which rate) are both answerable. Every sum is
right on the 8-function calculator; the "which side of the counter" logic (bank sells when the dollars never come) is
the best defence against the bill-buying-again trap. The statement case (chapter 4) meets the plan's v3 addition.

What keeps it from ADOPT is **the shape the exam actually gives the case in**: (a) the classic crystallisation
question "amount recoverable from the exporter on the crystallisation day" is never totalled, and `numericals.md`
labels ₹87,17,220 "recovered on crystallisation day" while N050 then charges further interest on ₹86,40,000 (two
readings of one step); (b) exam cases start from interbank spot + premium + margin, and the "full case" never
re-builds the rate (plan: "step by step, from A05"); (c) the margin on bills not under an LC, which A11b explicitly
handed to A12 and depth A5.11 item 2 lists, is missing everywhere; (d) a sight bill unpaid under the "old rule" form
cannot be dated from what is said; (e) practice has no linked case set and only two of the plan's three no-options
sums.

Length: **1,478 spoken words** (≈ 10.6 min at 140 wpm) + **152 s** of holds ≈ **13.1 min** (the header's "~1,850
words" is stale: Low 10). The fixes below add about **150 spoken words** (≈ 1.1 min) → ≈ **14.2 min**, inside 12–15.
Chapter 3 goes to about 5.3 min (under 6).

Answerable from this lesson (with A05, A11b) alone: **6 of 10 fully, 4 partly, 0 not.** (After fixes 1–4, 6, 7: 10
of 10.)

## Ten exam-style questions

Figures illustrative; all sums recomputed in Python and on the 8-function key sequence.

| # | Question (key) | Traps in the options | Answerable? Why |
|---|---|---|---|
| 1 | **Case (Dec 2025 form).** Sight bill USD 60,000, not under LC, purchased at bill buying ₹85.40; NTP 25 days; interest 9 % a year. Amount credited to the exporter: **₹50,92,414** (51,24,000 − 31,586) | ₹51,24,000 (no interest, "sight") · ₹50,86,096 (30 days) · ₹50,16,607 (85 days, as if a 60-day usance bill) | **Yes**: N026–N028, trap card "sight bill: NTP 25 days" |
| 2 | **Case, part 1.** USD 80,000 bill at 90 days after sight, discounted on 10 Apr 2027, NTP 25 days. Interest is recovered up front for **115 days; notional due date 3 Aug 2027** | 90 days / 9 Jul 2027 (usance only) · 115 days from the bill date · 25 days only | **Yes**: N022–N023, N034 (date counting) |
| 3 | **Case, part 2.** Bill unpaid; bank's policy crystallises on the 30th day after the notional due date at TT selling ₹86.20. The crystallised rupee liability is **₹68,96,000, on Thu 2 Sep 2027** | ₹68,48,000 at the original bill buying 85.60 · on 3 Aug at TT selling · at TT buying | **Yes**: N036–N043 |
| 4 | **Case, part 3 (the commonest crystallisation question).** Overdue interest 10.95 % on the advance of ₹68,48,000 for the 30 overdue days. **Total recoverable from the exporter on the crystallisation day: ₹69,57,632** (68,96,000 + 61,632) | ₹68,96,000 (interest left out) · ₹69,09,632 (advance + interest) · ₹61,632 (interest only) | **Partly**: both pieces are worked (N043, N046), never totalled; `numericals.md` Q4 and N050–N051 read the step two ways (finding 1) |
| 5 | **Old-rule form.** A sight bill purchased on Mon 1 Mar 2027 is unpaid. "As per FEDAI rules" it is crystallised on: **(current) the day set by the bank's published policy**; in the old-book form, **the 30th day after the NTP: Sun 25 Apr 2027 → next working day, Mon 26 Apr** | 31 Mar (30 days from purchase) · 25 May (30 days after a 60-day "due date") · 26 Mar (end of NTP) | **Partly**: "bank's policy" is taught (N037), but N038 states the old rule only as "the thirtieth day after the due date"; the demand-bill version (after the NTP) and the next-working-day rule are not said (finding 4) |
| 6 | An export bill purchased by the bank is returned unpaid (dishonoured) before crystallisation. The bank recovers: **the rupee equivalent of the bill plus foreign charges at TT selling, plus interest and rupee charges** | at the original bill buying rate · at TT buying · bill amount only, at the RBI reference rate | **Yes**: N052, P5 |
| 7 | The primary purpose of crystallising an export bill is to: **transfer the exchange risk from the bank to the exporter by fixing a rupee liability** | penalise the exporter · close the EDPMS entry · report the overdue bill to RBI | **Yes**: N035–N036, N068 (EDPMS distractor killed by N052a) |
| 8 | The bill had been purchased under the exporter's forward sale contract at ₹86.00. It is unpaid and crystallised. The rate applied is: **the bank's TT selling rate on the crystallisation day (the forward was used up when the bill was purchased)** | the forward rate ₹86.00 · the bill buying rate of that day · the higher of the two | **Partly**: TT selling is drilled, but nothing says the forward does not carry over; N049's "(or the contracted rate)" for later proceeds invites "the forward rate" (finding 6) |
| 9 | **Which is incorrect** about post-shipment / realisation? (a) post-shipment credit on a usance bill can run up to 365 days from shipment incl. NTP (b) interest for the transit and usance period is recovered up front (c) **once the exporter repays overdue post-shipment credit from her own rupees, the EDPMS entry is closed** (d) on early realisation, interest for the unexpired period is refunded | — | **Yes**: N052a (with A11b N051 "365 from shipment"), N021, N030 |
| 10 | True / false. (i) A bill payable 90 days from the bill-of-lading date carries the NTP in its interest days (ii) **the due date of a bill cannot be changed after it is purchased or discounted** (iii) a usance bill is overdue if not paid on the due date (iv) a 10 % margin on a non-LC bill is an RBI requirement. **Key: F, T, T, F** | — | **Partly**: (i) N024/N031a; (iii) N034; (ii) FEDAI 2.3 not voiced (finding 7); (iv) margin never mentioned (finding 3) |

## Findings

| # | Sev | Line | Finding | Exact fix (ready words; spoken sentences ≤ 25 words) |
|---|---|---|---|---|
| 1 | **Medium** | N046 / numericals Q4 | **The total on crystallisation day is never voiced, and the step is written two ways.** The Jul 2024 crystallisation case and the classic textbook case ask "amount recoverable / debited on the crystallisation day" = crystallised amount + overdue interest. The script works ₹86,40,000 and ₹77,220 separately and never adds them; `numericals.md` Q4 says "Recovered on crystallisation day: ₹87,17,220", but N050 then charges 20 days' interest on ₹86,40,000, which only makes sense if the ₹86,40,000 was *not* recovered. Q4 partly. ~35 words. | After N046 add **N046a** "So on that day, her rupee debt is eighty-six lakh forty, and the overdue interest is recovered too. Together: eighty-seven lakh seventeen thousand two hundred twenty." Board keys "8640000 + 77220 = 8717220"; box "due on crystallisation day ₹87,17,220". Card under it: "interest debited now · ₹86,40,000 stays a rupee loan, interest running, till paid (N050)" [F10, F11]. In `numericals.md` Q4 replace "Recovered on crystallisation day: `8640000 + 77220 =` → ₹87,17,220." with "Due from her on crystallisation day: `8640000 + 77220 =` → **₹87,17,220** (the interest is debited at once; the ₹86,40,000 stays outstanding as a rupee liability, at overdue interest, till she or Hamburg pays: Q5)." |
| 2 | **Medium** | N015 | **The "full case" never re-builds the rate.** The plan's chapter 1 is "Discounting a usance bill, step by step (from A05)", and exam cases (EDBP 2023, discounting 2025) give interbank spot, forward premium and margin, not a finished bill buying rate. A learner may know A05's build and A12's interest step without ever having linked them in one case. ~30 words. | Replace N015's second sentence with: "We built this in an earlier class. Spot bid eighty-five forty, plus the two-month premium, fifty-two point eight nine paise. Less point one five per cent." then **N015a** "Eighty-five point nine two eight nine, times point nine nine eight five. Eighty-five eighty." Keys "85.4 + 0.5289 = 85.9289 × 0.9985 = 85.8000"; note "85 days → premium for 2 completed months (A05) · illustrative". Add as **Q0** in `numericals.md` and the checker. |
| 3 | **Medium** | N017 / header | **Margin on bills not under an LC is missing, though A11b handed it to A12** (A11b header line 24: "card only, A12"; A11b N045 card "bank practice (A12)") and depth A5.3 item 5 and A5.11 item 2 list it. The fact sheet has no row for it either. Exam cases sometimes say "the bank keeps a 10 % margin"; a learner should know it is the bank's term, stated in the case, and how it changes the credit. ~25 words. | After N017 add **N017a** "On a bill not under an L-C, some banks keep a margin, say ten per cent, and pay the rest now. That's bank practice; the case will say." Card "non-LC bill: margin per bank's sanction (bank practice, not RBI / FEDAI) · case states it". Add a Leads line to the fact sheet ("margin on non-LC bills: bank practice; not in CF Ch. XV or FEDAI Rule 2"). |
| 4 | **Medium** | N038 | **Sight-bill crystallisation cannot be dated.** The trap card gives only "30th day after the due date". The old rule (the form exam cases and older keys still use) was: demand bills, 30th day after the **NTP**; usance, 30th day after the notional / actual due date; a holiday → the **next working day** (fact sheet Leads). Dec 2025's case was a sight bill. Q5 partly. ~25 words. | N038 voice: "Older books say the thirtieth day: after the due date for a usance bill, after the transit period for a sight bill. Exam cases tell you the day." Card: "old rule (history): usance → 30th day after due date · sight / demand → 30th day after NTP · holiday → next working day · today: bank's policy [Leads, F9]". |
| 5 | **Medium** | practice.md | **No linked case set, and one no-options sum short of the plan** ("Practice: the case + 3 no-options sums"). P3 and P5 are the only keyed-in sums; nothing practises the notional due date or the crystallisation date, the "total due" (finding 1), or proceeds after crystallisation. The exam gives this topic as a linked set, so practice should too. | Add **P11** (linked, keyed in): "USD 80,000 bill at 90 days after sight, not under LC, discounted Sat 10 Apr 2027 at ₹85.60; NTP 25 days; interest 7.3 %; overdue 10.95 %; the bank crystallises on the 30th day after the notional due date at TT selling ₹86.20; Hamburg pays 20 days later, TT buying ₹85.75. Find (i) interest up front and credit (ii) notional due date (iii) crystallisation date and liability (iv) total due on that day (v) what she still pays." **Key**: (i) `6848000 × 7.3 % × 115 ÷ 365 =` ₹1,57,504; credit ₹66,90,496 (ii) Tue 3 Aug 2027 (iii) Thu 2 Sep 2027, `80000 × 86.2 =` ₹68,96,000 (iv) `6848000 × 10.95 % × 30 ÷ 365 =` ₹61,632; total ₹69,57,632 (v) `6896000 − 6860000 =` 36,000 + `6896000 × 10.95 % × 20 ÷ 365 =` 41,376 = **₹77,376**. Add all to `export_bills.py`. (Recomputed: all exact.) Consider making the discount date a weekday (Fri 9 Apr) if dates are re-checked for holidays. |
| 6 | Low | N049 | Forward contract and crystallisation (Q8): the lesson never says a forward used at purchase does not carry into crystallisation, and N049's card "(or the contracted rate)" may read as "the old forward". | Card under N042: "forward used at purchase? still TT selling on crystallisation (the contract was utilised)". N049 card: "(or a new contract booked for these proceeds)". |
| 7 | Low | N024 | FEDAI 2.3: **no change in due date after purchase / discount / negotiation** (F4) is a cheap true/false item; not voiced. | Add to N024's card: "· due date never changed after purchase / discount [F4]". |
| 8 | Low | N052 | Q39-type distractor: a bill sent **on collection** is converted at **TT buying** when paid (FEDAI 2.5(a)); learners confuse it with a purchased bill returned. | Card beside N052: "on collection (not purchased) → proceeds at TT buying when paid; nothing to crystallise" [FEDAI 2.5(a)]; add a fact-sheet row. |
| 9 | Low | N004 | "linked five-question sets": the evidence shows Dec 2025 Q9–11 (three linked) and case titles without counts. | "…came in the papers we studied as linked case questions." |
| 10 | Low | header | Length line says "~1,850 spoken words"; counted 1,478 words + 152 s holds ≈ 13.1 min. | Update to "~1,480 spoken words + ~2.5 min holds ≈ 13 min (≈ 14 with c2 fixes)". |
| 11 | Low | N055–N061 | Plan v3 addition names the five statements as "eligibility, period, amount basis, running account, non-liquidation"; the script swaps eligibility for liquidation. Both are fine for the exam; record it, or add a sixth quick statement. | Optional **N061a** "Bonus. Banks check her I-E-C and the caution lists: an R-B-I rule, or bank practice? Bank practice." Or note the swap in the header. |
| 12 | Low | — | F12 (externalisation-problem countries crystallised per policy) and F18 (EBR overdue: interest to crystallisation; remit to the rediscounting bank without RBI approval) are not voiced. Fine for the PDF traps page. | PDF / traps page only. |

## Plan and depth coverage
- Plan §A12 chapters 1–4: ✓ (chapter 1 "step by step" only by reference: finding 2). Numericals "1 full case, 5 linked
  sums; 1 faded variant" ✓ (Q1–Q5, V). Traps: selling not buying ✓ (N041), the day ✓ (N037–N038, finding 4), overdue
  interest ✓ (N044–N046). Map nodes ✓ (five, crystallisation amber). Question kinds: calculate ✓, when ✓, which rate
  ✓, why ✓ (N036, N068), apply to a case ✓ (both cases). Practice "case + 3 no-options sums": ✗ (finding 5). v3
  addition (statement case) ✓.
- Depth A5.11: item 1 (PC case) ✓ via chapter 4 (eligibility swapped: Low 11); item 2 (post-shipment case: sight vs
  usance periods ✓, **margin ✗** finding 3, "concessional period" ✓ via interest up front + overdue rate and A11b's
  365 days). A5.3 item 5: NTP ✓, usance period ✓ (A11b), **margin on non-LC bills ✗** (finding 3).
- Outdated statements: "FEDAI fixes the 30th day" is correctly broken (N038, P8 (a)).

## Practice check (`practice.md`, recomputed)
- **P1** key (b) ✓ [F1]; (d) "collected" is a good distractor. **P2** key (c) ✓; (a)/(b) are the bill-buying traps.
- **P3** (i) ₹34,50,000 ✓ (ii) ₹30,852 ✓ on the advance ₹34,28,000. Says "on the advance", so the base is
  unambiguous. Good.
- **P4** key (a) ✓ [F13]; (d) "the crystallisation rate" is a well-chosen trap.
- **P5** `100200 × 86.1 =` ₹86,27,220 ✓ [F14].
- **P6** key (b) ₹8,600 ✓; (c) ₹10,320 = 30 days ✓; (d) ₹1,25,560 = a full year ✓; (a) the NTP trap ✓.
- **P7** key (b) ✓ [F6]; (a) is the demand-bill test, (c) the policy day: plausible and correctly explained.
- **P8** key (b) ✓; (a), (c), (d) each a real trap with a correct reason.
- **P9** key (c) ✓ (the "false" statement); reasons trace to A11b F3, F4, F8, F24.
- **P10** key (b) ✓ [F8].
- One right answer in every MCQ; reasons correct; no key wrong. Gaps are coverage (finding 5), not accuracy.

## Case numbers vs exam style
USD 100,000 / USD 50,000 bills, rates around ₹85–86, interest 7.3 % / 10.95 % on a 365-day year and day counts of
85, 25, 30, 20 match the form of the recalled cases (the Dec 2025 sight bill is USD 50,000) and give whole-rupee
answers on a basic calculator. The one style gap is the starting point: exam cases quote spot and margin (finding 2)
and often a margin on non-LC bills (finding 3).
