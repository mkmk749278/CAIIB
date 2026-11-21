# A05 c1 · independent review: SUBJECT EXPERT

- **Reviewed**: `course/bfm/A/A05/script_class.md` c1 (spoken lines N001–N068 and cue sheet), `numericals.md`, fact
  sheet `research/bfm/facts/A1.5-A1.7_A05.md`, plan `plans_A.md` §A05, `lesson_spec.md`, `CLAUDE.md` hard lines.
  2026-11-21, fresh context.
- **Primary source**: FEDAI Rules 10th ed., "updated up to 20 August 2026", FEDAI's own PDF
  (fedai.org.in/UploadPopupPageFiles/FEDAI_Rules_10th_Edition_20Aug2026.pdf), read for Rules 1.2–1.4, 2.1–2.3,
  5.1–5.7, 8.09, 8.12. Verified word for word:
  - 1.3 Saturday not a working business day for forex (except individuals under 1.2(DC)).
  - 1.4 known holiday = known at least 3 working business days before; any other = suddenly declared.
  - 5.2 option period at the customer's discretion, not beyond one month; first and last dates must be stated; fixed
    date or last option date a known holiday → preceding working business day; suddenly declared → next working
    business day; cash/ready same day; value next day = next working business day; spot = second succeeding working
    business day; forward = beyond spot; duration computed from the spot value date.
  - 5.5 merchant (buyer or seller) has the option of delivery (except NDDC).
  - 2.1(a) FC bills purchased at the bill buying rate or contracted rate; interest for NTP and/or usance recovered
    upfront.
  - 2.3(a) fixed due date → NTP not applicable; 2.3(b) "Bill drawn on DP/At Sight Basis and not under LC: (i) bills in
    foreign currencies 25 days; (ii) rupee bills 20 days"; 2.3(c) UN-guideline exports max 120 days; 2.3(d) rupee
    bills under LC 3/7/20/20 days. Fact sheet rows 1–8, 13, 15–17 match.
- **Conventions** (not FEDAI text): the reading rule for two-way points, the "bank's favour" option-period rule, and
  rounding transit + usance down to completed months for a premium (up for a discount) are the standard IIBF/Macmillan
  textbook conventions and are correctly stated. The voice calls the option rule a "rule of thumb" and the cards mark
  "(exam convention)" (N040, N055): adequate.
- **Covered interest parity**: correct direction; the higher-interest currency (rupee) is at a forward discount, the
  dollar at a premium. Annualised: (1.01625 ÷ 1.01125 − 1) × 4 = 1.978% ≈ 2%.
- **Forward vs futures card**: NSE USD/INR futures lot USD 1,000, daily mark-to-market margins, clearing corporation
  guarantee: correct.
- **Calendar**: 3 Dec 2026 is a Thursday; spot (Fri = 1, Sat/Sun skipped) Mon 7 Dec 2026; one month from spot Thu
  7 Jan 2027 (a weekday). Correct.
- **Sums**: `python3 tools/check/fx_forwards.py` run: all OK. Recomputed independently: 2m 85.96 / 86.01; discount 1m
  85.36 / 85.42; parity 85.60 × 1.01625 = 86.9910, ÷ 1.01125 = 86.0232386 → 86.0232; importer 86.01 × 1.0012 =
  86.113212 → 86.1132, × 50,000 = ₹43,05,660.00 (voice "forty-three lakh, five thousand, six hundred sixty" ✓);
  trap first date (85.62 + 0.20) × 1.0012 = 85.9230; exporter 85.96 × 0.9992 = 85.891232 → 85.8912; trap 86.14 ×
  0.9992 = 86.071088 → 86.0711; usance 85.96 × 0.9985 = 85.83106 → 85.8311, × 20,000 = ₹17,16,622.00 (voice ✓);
  trap 86.14 × 0.9985 = 86.0108; annualised 0.56 ÷ 85.61 × 4 × 100 = 2.6165 → 2.62%. Every keyed sum fits a
  12-digit, 8-function calculator. Applying the bill-buying margin to the forward rate (spot bid + premium for
  completed months, then less 0.15%) is the IIBF method: correct.
- **Cues vs voice**: all numbers on cards match the voice. Header greeting differs from N001 (finding 9).

## Verdict: ADOPT WITH FIXES

No High findings. 1 Medium, 8 Low.

## Findings

| # | Sev | Line | Finding | Exact fix |
|---|---|---|---|---|
| 1 | Medium | N066 | Homework is not doable as set: "the same points" are premium points (rising 0.36/0.39), so "a bank sale at a discount" with them contradicts chapter 2. The class gives discount points only for one month (0.24/0.20). | "Homework. Use the discount points, zero point two four, zero point two zero, for one month. The bank sells, delivery in the second month. Which date, and what rate?" (Answer for practice.md: sale + discount → first date, 1m ask 85.62 − 0.20 = 85.42, then add the TT selling margin; 85.42 is already in the checker.) |
| 2 | Low | N053 | FEDAI 2.3(b) sets 25 days for foreign-currency bills "drawn on DP/at sight basis, not under LC". The voice says "a foreign currency bill, not under a letter of credit" and applies it to a usance bill. Adding NTP to the usance for a sight-reckoned bill (notional due date) is the accepted practice and the exam answer, but the attribution should match the rule's words. | "For a foreign currency bill not under a letter of credit, F-E-D-A-I's normal transit period is twenty-five days. For a bill payable after sight, the bank adds it to the usance." Card: "NTP: FC bill, not under LC = 25 days (FEDAI 2.3) · after-sight usance bill: NTP + usance". |
| 3 | Low | N013 | "Moves delivery back to the day before" is looser than FEDAI 5.2, "the preceding working business day" (the day before may itself be a Sunday). | "A known holiday, known three working days ahead, moves delivery back to the working day before." |
| 4 | Low | N028 | The no-arbitrage story skips the borrowing leg, so "free money" is not quite shown. Covered arbitrage is: borrow dollars, convert, invest in rupees, cover back. | "If the forward were the same as spot, you'd borrow dollars, convert to rupees, earn more interest, and convert back at no cost. Free money. The premium closes that door." |
| 5 | Low | N030 | The key press uses 1.01625 and 1.01125 without saying where they come from; a beginner on a basic calculator needs the step. | Before the keys: "Three months is a quarter of a year. Six and a half, divided by four, is one point six two five percent. So one point zero one six two five." Cue: keys 6.5 ÷ 4 = 1.625. |
| 6 | Low | N031 | "About two percent a year" is asserted, but the annualised-premium formula (fact sheet row 11, a "calculate" question kind) is never taught, so the learner cannot check it or answer that question type. | Add after N031: "To annualise: points divided by spot, times twelve over the months, times a hundred." Card: "annualised % = points ÷ spot × 12/months × 100". Or record in practice.md (sum 8) why it is left to practice. |
| 7 | Low | N052–N057 | The lesson never says why the bank adds a premium when it buys a usance bill: it will get the dollars later and sells them forward for that date. Without it the rounding rule looks arbitrary. | After N052: "The dollars come in later, so the bank prices them for that later date. That's a forward rate." |
| 8 | Low | N013 (optional) | The interbank rule differs (FEDAI 8.09: only a month-end maturity that becomes a known holiday is preponed; otherwise postponed). Not wrong to omit for merchant contracts, but an examiner may mix them. | Leave the voice; add to practice.md or the trap list: "Merchant contract (Rule 5.2): known → preceding. Interbank month-end (Rule 8.09) is a separate rule." |
| 9 | Low | header line 10 | Header greeting ("Welcome back, everyone. Calculator out; today we look a little ahead.") differs from N001 and from `greetings.md` ("Hi, everyone. Calculator out, please; …"). | Change the header to the N001 wording. |

## Checked and correct (no change)
- Value dates, Saturday rule, spot calculation, forward counted from spot (N006–N012, N016–N019).
- Known vs suddenly declared holiday direction (N013, N017–N018).
- OTC forward vs exchange future (N014–N015): USD 1,000 lot, daily margin, clearing guarantee.
- Reading rule for points and the premium/discount add/subtract (N021–N025, N032–N033).
- "Premium is the interest gap, not a forecast or volatility"; higher-interest currency at a discount (N026–N034).
- Option period ≤ 1 month, first and last dates, customer chooses the day (N036–N037; FEDAI 5.2, 5.5).
- Bank's-favour rule, all four cases (N038–N050) and both option sums with their traps.
- 85 days → 2 completed months for a premium purchase; margin on the forward rate; interest for transit + usance
  recovered upfront (FEDAI 2.1(a)); fixed due date → no NTP (FEDAI 2.3(a)) (N052–N058).
- Rule-version card "FEDAI Rules, 10th edition (updated to 20 Aug 2026), as at 31 December 2026".
