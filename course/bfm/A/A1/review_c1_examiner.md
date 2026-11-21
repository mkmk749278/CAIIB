# A01 class edition c1 · independent review: EXAMINER

- **Reviewed**: `course/bfm/A/A1/script_class.md` c1 (N001–N083 with cue sheet), 2026-11-21, fresh context.
- **Checked against**: `research/bfm/syllabus_official.md` (A1.3, A1.6, A1.7), `research/bfm/coverage.csv` (A1.6 shared
  with A03/A06/A21; A1.7 with A03/A04/A05/A06/A12), fact sheet `research/bfm/facts/A1.6-A1.7_A01.md` (rows F1–F26 and
  its blueprint), `course/bfm/A/plans_A.md` §A01 (and §A03, §A12 to see what is deferred), `research/bfm/depth/A.md`
  (A1.3, A1.6, A1.7), A-FXNUM rows of `items_tagged.csv` and `fullpaper_tagged.csv`, and v6 `script.md`.
- **Sums re-done on an 8-function calculator**: 85.42 × 1.001 = 85.50542; 85.40 × 0.9995 = 85.3573; 85.40 × 0.9985 =
  85.2719; 85.50542 × 1.0015 = 85.633678 → 85.6337; 18,000 × 85.5054 = 15,39,097.20; 40,000 × 85.2719 = 34,10,876.00.
  All correct.

## Verdict: **ADOPT WITH FIXES**

0 High · 3 Medium · 7 Low. 10 of 12 questions fully answerable from this lesson, 1 partly (by the "undo → flip"
rule, not stated), 1 not (and the lesson's wording would steer the learner to the wrong option).

## Exam questions (IIBF style; answers in bold)

| # | Question (4 options) | Answer | From A01 alone? | Taught at |
|---|---|---|---|---|
| 1 | Interbank USD/INR 84.20 / 84.24. Margin on TT selling 0.15%. TT selling rate (4 decimals)? (a) 84.0737 (b) 84.3263 (c) **84.3664** (d) 84.2400 | 84.24 × 1.0015 = 84.36636 | Yes | N035–N037 (ask × multiplier), N043 |
| 2 | Same quote. TT selling margin 0.125%; bill selling a further 0.15%. Bill selling rate? (a) 84.4717 (b) **84.4718** (c) 84.3453 (d) 84.3664 | 84.24 × 1.00125 = 84.3453; × 1.0015 = 84.47182. (a) is the trap ask × 1.00275 | Yes | N041–N042, trap card |
| 3 | Same quote. Bill buying margin 0.25%. Bill buying rate? (a) 84.4506 (b) 84.0300 (c) **83.9895** (d) 84.0294 | 84.20 × 0.9975 (d = margin wrongly on the ask) | Yes | N038–N040 |
| 4 | Which is NOT correct? (a) Indian merchant rates are direct quotes (b) **Exchange margins on merchant rates are prescribed by FEDAI** (c) TT rates are closer to the interbank rate than bill rates (d) Buying and selling are from the bank's side | (b) | Yes | N008, N012, N027, N046–N047, N048 |
| 5 | An export bill sent on collection is realised; the Nostro is credited and the exporter is paid. Rate? (a) bill buying (b) **TT buying** (c) TT selling (d) bill selling | (b) | Yes | N057–N058, trap card |
| 6 | Case: the bank purchased an exporter's sight bill; unpaid on the due date, it is crystallised into a rupee liability. Rate? (a) bill buying (b) bill selling (c) **TT selling** (d) TT buying | (c) | Yes | N062–N065 |
| 7 | A customer's forward purchase contract is cancelled on its due date. Rate? (a) **TT selling** (b) TT buying (c) bill selling (d) bill buying | (a) | Yes | N067 |
| 8 | An exporter cancels a forward purchase contract one month **before** maturity. The bank applies: (a) spot TT selling (b) spot TT buying (c) **the forward TT selling rate for the original maturity** (d) bill selling | (c) (F24, Rule 6.4(ii)(c)) | **No**: N067 states "cancelled at T-T selling" with no time condition, so the learner picks (a) | Gap M1 |
| 9 | An unpaid import bill under an LC, no forward cover, is crystallised. Rate? (a) TT buying (b) TT selling (c) **bill selling** (d) bill buying | (c) | Yes | N069–N070 |
| 10 | Recalled form: an export bill purchased by the bank is returned unpaid (dishonoured) before crystallisation. The bank recovers the rupee equivalent at: (a) bill buying (b) **TT selling** (c) bill selling (d) the original purchase rate | (b) (F20, Rule 2.1(d)) | Partly: only by applying N068 "undo → flip, TT rung"; never stated | Gap L1 |
| 11 | An exporter has booked a forward contract at 85.10; the bank buys his sight bill when its bill buying rate is 85.27. Rate applied? (a) 85.27 (b) **85.10** (c) the better of the two (d) TT buying | (b) (F26) | Yes, from the statement N061 (never practised: M3) | N061 |
| 12 | An importer without forward cover retires a USD 25,000 bill; bill selling 85.6337. Rupee debit? (a) ₹21,38,932.50 (b) **₹21,40,842.50** (c) ₹21,37,762.50 (d) ₹21,31,797.50 | 25,000 × 85.6337 | Yes (pattern N075–N076, though the learner never does one: L2) | N059–N060, N075 |

## Findings

| Sev | Line | Finding | Exact fix |
|---|---|---|---|
| **Medium** M1 | N067, N068 | Cancellation is taught with no time condition. F24 (Rule 6.4(ii)(c)) says cancellation **before** maturity is at the forward TT rate. As written the learner over-generalises and fails Q8, a classic "which rate" stem (FP Dec 2025 Q40 "For cancellation, the bank should use"). A06 teaches the sums, but A01 must not teach a rule that is wrong for half the cases. | N067: "The same flip happens when a forward contract is cancelled on its due date. A purchase contract, at T-T selling. A sale contract, at T-T buying. Cancelled earlier, the forward rate is used instead. That's lesson A-six." Cue: card "on due date: cancel purchase → TT selling · cancel sale → TT buying · before due date → forward TT rate (A06)" [F22] [F23] [F24]. |
| **Medium** M2 | N080 (and map node 3), N074 | "Except an import bill, which never flips" is too broad and is what the closing map fixes in memory. An importer's forward **sale** contract cancelled does flip (TT buying, F23); only the **crystallised** import bill does not flip (F21). A learner can wrongly answer "importer cancels his forward contract → TT selling". | N080: "Flip sides, on the T-T rung. Except an unpaid import bill: nothing is undone, so no flip. That's the whole lesson." Map node 3: "undo → flip (TT) · crystallised import bill: no flip". |
| **Medium** M3 | ch 3 pause check (N071–N073) | Blueprint kind "exception: a forward contract overrides" (F26) is stated once (N061) but never practised; the only practised exception is import crystallisation. Every other blueprint kind is practised. | Add a third item to the ch 3 check after N072: "Three. An exporter has a forward contract at eighty-five ten. The bank buys his bill today. Board rate, or contract rate?" (H: 3 s) → "The contract rate. A forward contract beats the board." Cue: "forward contract → contract rate ✓" [F26]. Change "Two quick ones" to "Three quick ones". |
| Low L1 | N065–N066 | F20 (bill purchased, dishonoured before crystallisation → TT selling, Rule 2.1(d)) is in the fact sheet and in a recalled item ("export bill purchased… returned unpaid") but not said. A03 plans "a returned export bill", so it may stay there; one clause here makes Q10 direct. | After N066 add to the cue only (no new line needed): N "returned unpaid before crystallisation → also TT selling" [F20]; or one spoken sentence: "And if the bill comes back dishonoured even earlier, the same: T-T selling." |
| Low L2 | N075–N076 | Blueprint "calculate: rupee amount of a deal" is only shown, never done by the learner. | N075: "The father's eighteen thousand dollars go out at T-T selling. Multiply it yourself. … (H: 5 s) Fifteen lakh, …". |
| Low L3 | lost from v6 N56 | v6 said the crystallisation day is the bank's own policy under Rule 2.1(b)(i) ("don't look for a fixed day"). Old books still teach a fixed day, so it is a live trap. A12 owns "which day", so Low. | Optional: add cue note under N065 "when? bank's policy (Rule 2.1(b)(i)); A12". Otherwise make sure A12 carries it. |
| Low L4 | lost from v6 N30 | Currency notes have the widest spread (F12), a common "which rate is widest / which is NOT" option. | One dimmed rung in the N032 cue: "notes: widest gap (A16)"; no spoken line needed. |
| Low L5 | N012 | Yen "per 100 units" (F4, Rule 5.7) is on screen only; v6 spoke it. Recalled stems quote JPY per 100. | N012: "…So many rupees for one dollar, or for a hundred yen." |
| Low L6 | lost from v6 N40; F5 | "Rounding: follow the question" and settlement in rupees or paise per bank policy (F5) are gone; N037 rounds to 4 decimals without saying that is a convention. A03 has a rounding chapter, so Low. | N037: "…Rounded to four decimals, as exam sums do, unless the question says otherwise: eighty-five point five zero five four." |
| Low L7 | N012 | The plan's JAIIB prerequisite is "direct and indirect quotes"; "indirect" is never named, so a define-question ("India follows which method of quotation?" with "indirect" as an option) relies on A00/A04. | Cue only on the N012 card: "indirect = foreign units per ₹1 (not used at Indian counters)". |

Not findings (checked): FCNR(B) conversion at maturity (recalled item) and foreign-cheque purchase are planned in A03;
"rates are spot unless stated" (FP Q71) is A00; cross-rate bid (PW Dec 2024, FP Q2) is A04; crystallisation purpose
and overdue interest are A12. Depth checklist A1.3 items 2 and 4 are covered (N012, N023–N025). Every fact in the
script matches its fact-sheet row; no outdated statement from `depth/A.md` appears.

## Blueprint check (fact sheet "Question blueprint")
| Kind | Practised? |
|---|---|
| define (direct quote; bid, ask, spread; TT vs bill) | Yes: N012, N024–N025, N044–N045 |
| who (whose side) | Yes: N016–N019, N021 |
| compare (TT vs bill; buying vs selling; collection vs purchase) | Yes: N033, N045, N057–N058 |
| exception (forward overrides; import no-flip) | Half: import no-flip practised N069; forward override stated only (M3) |
| calculate (four rates; rupee amount) | Four rates yes (N035–N043, one "your turn"); rupee amount shown only (L2) |
| apply to a case | Yes: N051–N073 |
