# A01 class edition c1 · independent review · SUBJECT EXPERT

- **Reviewer**: fresh-context subject-expert agent, 2026-11-21.
- **Read**: `script_class.md` c1 (spoken lines and cue sheet), fact sheet `research/bfm/facts/A1.6-A1.7_A01.md`,
  `numericals.md`, `tools/check/fx_merchant_rates.py` (run: all OK), FEDAI Rules 10th edition "updated up to
  20 August 2026" (FEDAI's PDF, 20 pages, includes AR 03/2026 of 7 Sep 2026), General Guidelines 1–2 and Rules 2–6.

**Verdict: ADOPT WITH FIXES** (High 0 · Medium 3 · Low 6)

No wrong fact, no outdated rule, no wrong sum. The three Medium items are places where a strict examiner's
question could catch a learner who took the line too literally.

## Findings

### M1 · N041, N049–N050 (trap card at N041) · exam convention taught as if it were a rule
- **What**: "Bill selling = TT selling + margin" is the Macmillan / IIBF-exercise convention, not a FEDAI rule
  (fact sheet row 10 says so). The script says "it goes on top of T-T selling" and the trap card marks
  "ask + margin ✗" as plainly wrong. If a question gives the bill-selling margin on the interbank rate, or gives
  its own base, a learner trained on this card will apply the wrong base.
- **Source**: FEDAI General Guideline 1 (margins are each bank's own; FEDAI prescribes no loading method);
  fact sheet row 10 ("Where a question states its own base, follow the question").
- **Fix**: N041 → "Last one, and here people slip. Bill selling. In exam sums, unless the question says otherwise,
  the bill-selling margin goes on top of T-T selling, not on the ask." Trap card → "bill selling: on TT selling ✓
  (exam convention) · read the question's base first". Keep N049–N050 as they are (they follow from N041).

### M2 · N055–N056 (and deal card) · export bill "bought" only
- **What**: Rule 2.1(a) applies bill buying to bills **purchased, discounted or negotiated**. Exam items often say
  "export bill negotiated under an LC" or "discounted usance bill". The lesson only says "bought", so the learner may
  not map negotiation / discount to the same rung.
- **Source**: FEDAI 2.1(a): "Foreign Currency bills will be purchased/discounted/negotiated at the Authorised
  Dealer's current bill buying rate or contracted rate."
- **Fix**: N055 → "Three. The bank buys, discounts or negotiates an exporter's bill the day he brings it." Deal
  card → "export bill purchased / discounted / negotiated".

### M3 · N067 (card F22/F23) · cancellation rate stated without the before-maturity case
- **What**: "A purchase contract is cancelled at T-T selling. A sale contract, at T-T buying" is right on or after
  maturity (spot TT). Before maturity FEDAI applies the **appropriate forward TT rate**. A direct examiner question
  ("cancelled one month before maturity: which rate?") is then answered wrongly from this lesson alone.
- **Source**: FEDAI 6.4(ii)(a)–(c); fact sheet row 24.
- **Fix**: add to N067: "Cancelled before maturity, it's the forward T-T rate on the same side. That's lesson
  A-six." Card → "cancel purchase → TT selling · cancel sale → TT buying · before maturity: forward TT (A06)".

### L1 · N061 · "forward contract" narrower than the rule
- FEDAI 2.1(a), 2.5(a), 3.1(a), 4.1, 4.4 say "contracted rate" / "Fx contract rate" / "hedge contract": any booked
  contract (cash, tom, spot or forward). Fix: "If the customer has booked a contract with the bank, usually a forward
  contract, the contract rate applies, not the board." Same wording fix in fact sheet row 26.

### L2 · N066 · "or contract rate" missing
- FEDAI 2.1(c): "TT buying rate or contracted rate (if any)". Fix: "…the bank converts them at T-T buying, or his
  contract rate if he has one." Cue: "proceeds later → TT buying (or contract rate)".

### L3 · N065 · crystallisation defined loosely; fact sheet row 18 incomplete
- "Converting an unpaid bill into rupees" → better "converting the unpaid foreign currency bill into a rupee debt".
  FEDAI 2.1(b)(i)–(ii): **when** to crystallise is each bank's own policy, transparently available to customers (the
  old fixed "30th day after due date" rule is gone; a common outdated statement in class notes). Add this to fact
  sheet row 18 now so A12 inherits it; the script needs no timing line.

### L4 · N068, N074, N080 · memory hook not labelled; "never" too strong
- "Undo → flip sides, TT rung" is our wording of 2.1(b)(iii), 2.1(d), 6.4(ii) (fact sheet §D), not a FEDAI sentence.
  Fix the card at N068 to "memory hook: undo → flip sides, TT rung". N080 "an import bill, which never flips" →
  "an import bill, which doesn't flip: same rate as retirement" (3.1(b); 3.3 leaves the rest to bank policy).

### L5 · N057 · consignment exports
- 2.5(a) also covers "goods sent on consignment basis" (TT buying, after Nostro credit). Optional: card
  "export bill on collection / consignment".

### L6 · N003, N023 · illustrative rates far from the market
- 85.40 / 85.42 is labelled illustrative (fine), but USD/INR has traded well above 85 since 2025; a learner seeing
  85 in a 2027 lesson may doubt it. Already planned: update near the market at the fact freeze and re-run the checker.

## Fact sheet check
Rows 1–17, 19–25 match the FEDAI text (rule numbers verified). Errors / gaps: row 26 says "forward contract" where
the rules say "contracted rate" (L1); row 18 omits 2.1(b)(i)–(ii) bank-policy timing (L3). The cut-off note on
AR 03/2026 (7 Sep 2026, Rules 2.5(b) and 4.5) is correct: the amendments are in the PDF and dated before 31 Dec 2026.

## Verified correct
- Bank's-side rule; in = buy, out = sell; direct quote "Rupees and Paise for 1 unit or 100 units" (5.7); buying =
  lower, selling = higher in a direct quote; bid / ask / spread (0.02 = two paise).
- Margins are the bank's own, FEDAI fixes none (General Guideline 1); "FEDAI fixes which rate to use" fair.
- Rate table: inward remittance TT buying (4.4); outward remittance incl. importer's advance TT selling (4.1);
  export bill bought bill buying with transit interest upfront (2.1(a)); collection TT buying after Nostro credit
  (2.5(a)); import bill retired hedge rate or bill selling (3.1(a)); export bill crystallised TT selling (2.1(b)(iii));
  realised later TT buying (2.1(c)); import crystallisation same as retirement (3.1(b), 3.3); purchase / sale contract
  cancelled TT selling / TT buying (6.4(ii)(a)–(b)).
- Sums, recomputed independently: 85.42 × 1.001 = 85.50542 → 85.5054; 85.40 × 0.9995 = 85.3573; 85.40 × 0.9985 =
  85.2719; 85.50542 × 1.0015 = 85.63367813 → 85.6337 (85.5054 × 1.0015 = 85.63366781, same 4-dp answer); trap
  85.42 × 1.0025 = 85.63355 → 85.6336. Rupees: 18,000 × 85.5054 = ₹15,39,097.20; 40,000 × 85.2719 = ₹34,10,876.00;
  spoken forms at N075–N076 match. Ladder order bill selling > TT selling > ask > bid > TT buying > bill buying holds.
- Key presses work on an 8-function, 12-digit calculator (no display overflow); the multiplier tip is sound.
- N002 "forex rate sums in every BFM paper": supported by the importance map (A-FXNUM in 7/7 recalled cycles).
- No AI-voice disclosure, no "checked against the source" line, rule-version card present.
