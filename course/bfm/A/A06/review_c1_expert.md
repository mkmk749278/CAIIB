# A06 c1 · independent review: SUBJECT EXPERT

- **Reviewed**: `course/bfm/A/A06/script_class.md` c1 (spoken lines N001–N067 and cue sheet), `numericals.md`, fact
  sheet `research/bfm/facts/A1.5-A1.7_A06.md` (and A05's), plan `plans_A.md` §A06, `regulatory_updates.md` rows on
  FERR and no-rebooking, `lesson_spec.md`, `CLAUDE.md` hard lines. 2026-11-21, fresh context.
- **Primary sources read in full** (fetched 2026-11-21):
  - FEDAI Rules 10th ed., "Updated up to 20 August 2026" (fedai.org.in PDF): Rule 2.2(c) and Rule 6.1–6.6. Verified
    word for word: 6.1 early delivery / extension optional for the bank, customer to deliver or ask on or before
    maturity; 6.2 swap difference plus interest on outlay/inflow per 6.6; 6.3 extension = cancel at the appropriate
    selling/buying rate and "rebooked simultaneously only at the current rate", request on or before maturity (text
    unchanged in this edition); 6.4(i) difference contract rate vs cancellation rate, lump sum or instalments, not
    beyond maturity, uniform, at least once a quarter, Board policy disclosed upfront; 6.4(ii) purchase at TT selling,
    sale at TT buying, before maturity the appropriate forward TT rate; 6.4(iii) impossibility does not void; 6.4(iv)
    automatic cancellation "within the period of not exceeding three working business day after the maturity date",
    swap cost "recovered from the customer under advice", gain not passed (unless delay beyond the client's control,
    on record), loss recovered; 6.5 swap cost recovered in all cases whether or not an actual swap is made, upfront
    or back-ended; swap gain at start or end per policy; 6.6 outlay/inflow = "difference between the original contract
    rate and the rate at which the swap could be arranged", rate and threshold per bank policy. Fact sheet rows 1–5,
    7–13 match.
  - RBI A.P. (DIR Series) Circular No. 25 (RBI/2026-27/291, 10 Oct 2026): para 2(a) no rebooking of an INR derivative
    (deliverable or non-deliverable) cancelled with any AD after the directions; 2(b) rollover on maturity may continue,
    subject to the MD; 2(c) USD 100 million → USD 5 million (OTC contracted exposure across all ADs, and exchange-traded
    across all exchanges); 2(d) undertaking that the exposure is not hedged with another AD (amounts with other ADs
    stated); para 3 documents kept not less than two years; immediate effect. Fact sheet rows 6 and 14 match.
  - Circulars No. 26 (RBI/2026-27/292, 10 Oct 2026) and No. 27 (RBI/2026-27/293, 12 Oct 2026): FERR 20% of the INR
    equivalent of notional, cash with RBI, daily, till termination; No. 26 = user contracts > USD 2 million hedging
    current-account transactions where the user buys foreign currency; No. 27 = the AD's own hedges where it buys
    foreign currency; contracts after issue. Row 15 and N048 correct. (No. 27 also limits NDDCs to non-residents to
    hedging only: not needed in A06.)
- **Early-delivery method**: for an early-delivered **purchase** contract the bank receives dollars now that it owes
  the market on the original date, so it sells spot (market bid 85.70) and buys forward (market ask 85.72 + 0.39 =
  86.11): a sell/buy swap. Swap cost 0.41 at a premium. Outlay = contract rate − spot leg of the swap (86.05 − 85.70),
  exactly FEDAI 6.6's "original contract rate vs the rate at which the swap could be arranged", with interest for the
  swap period. This is the IIBF/Macmillan method and how case-study questions are set. Correct.
- **Sums**: `python3 tools/check/fx_forward_contracts.py` run: all OK. Recomputed independently (half-up, 4 dp):
  86.40 × 1.0012 = 86.50368 → 86.5037; 0.4537 × 1,00,000 = ₹45,370.00 ✓; 85.80 × 0.9992 = 85.73136 → 85.7314;
  0.4686 × 50,000 = ₹23,430.00 ✓; trap (85.82 × 1.0012) = 85.9230 ✓; before maturity (86.40 + 0.20) × 1.0012 =
  86.70392 → 86.7039 ✓; swap 86.11 − 85.70 = 0.41 → ₹41,000 ✓; outlay ₹35,000, × 0.10 × 2 ÷ 12 = 583.333 → ₹583.33 ✓;
  86,05,000 − 41,000 − 583.33 = ₹85,63,416.67 ✓ (voice "eighty-five lakh, sixty-three thousand, four hundred sixteen,
  sixty-seven paise" ✓). Signs checked from the customer's side: exporter pays on the purchase cancellation, importer
  pays on the sale cancellation: correct. Every key sequence fits a basic 8-function, 12-digit calculator.
  Homework N065: 85.92 × 1.0012 = 86.023104 → 86.0231; 86.05 − 86.0231 = 0.0269 × 1,00,000 = **₹2,690.00 paid to the
  exporter** (not yet in `numericals.md` or the checker: finding 9).
- **Cues vs voice**: every number on a card matches the voice except the exporter story (finding 1).

## Verdict: ADOPT WITH FIXES

1 High, 3 Medium, 6 Low.

## Findings

| # | Sev | Line | Finding | Exact fix |
|---|---|---|---|---|
| 1 | High | N004 (vs N025, N029–N036, card) | The voice says her buyer pays "a month early", but the card says "due in 2 months", N025 says "two months early", and the sum uses two-month points and two months' interest. A learner who heard "a month" cannot follow the sum. | N004: "Picture an exporter in Ludhiana. A month ago, she sold the bank a lakh of dollars, three months forward, at eighty-six point zero five." New N004a: "Now her buyer pays two months early." Card: "forward sale to bank · USD 1,00,000 · @ 86.05 · due in 2 months · paid today". |
| 2 | Medium | N042–N045, N051, N063 | FEDAI 6.3 still says extension = cancel and rebook at the current rate (10th ed. to 20 Aug 2026), and the IIBF exam will keep asking it. The script calls "cancel and rebook" a trap without saying a rollover is priced the same way, so a learner may reject a true FEDAI answer. RBI bars rebooking any cancelled contract, not only early ones ("cancelling early" in N044 is too narrow). | N044: "What's still allowed? A rollover on the maturity date. The old contract is settled at today's rate, and the new one starts at the current rate." N045: "That's F-E-D-A-I's method, and the exam still asks it. What's gone is cancelling, then booking again later, with any bank." N051 end: "extend by rollover on maturity; a cancelled contract stays cancelled." Card N045: "FEDAI 6.3 method = rollover pricing ✓ · rebook after cancelling ✗ (any AD, since 10 Oct 2026)". |
| 3 | Medium | Ch. 3; `numericals.md` | The plan lists 4 numericals including **extension**, and the fact sheet blueprint lists "extension / rollover difference" as a calculate question; the script has no extension sum (sum 3 is a before-maturity cancellation). Extension sums are a staple of IIBF forex case studies. | Add after N044: "Press along. Sum one's contract, rolled over one month on maturity. The old one settles at eighty-six point five zero three seven: she pays forty-five thousand, three hundred seventy." Then: "The new rate: one-month forward T-T buying. Eighty-six point three eight plus point one eight, times point nine nine nine two, equals. Eighty-six point four nine zero eight." Cue: keys 86.38 + 0.18 = × 0.9992 = · H: 6 s · box "new contract 86.4908 (illustrative)". Add as sum 5 in `numericals.md` and the checker (86.56 × 0.9992 = 86.490752 → 86.4908). |
| 4 | Medium | N054 | "Swap cost, if any, goes to the customer, with an advice" reads as if the customer receives it. FEDAI 6.4(iv)(b): swap cost is **recovered from** the customer under advice. | "It cancels the contract itself, within three working days after maturity. Any swap cost is recovered from the customer, with an advice." Card: add "swap cost recovered from the customer, under advice". |
| 5 | Low | N028 | Only the premium case is taught. At a discount the swap gives a gain, which FEDAI 6.5(ii) pays to the customer (start or end per bank policy); an "inflow" is mentioned in N034 but the swap gain is not. | Add: "At a discount, it's the other way: a swap gain, and the bank pays it to her." Card: "swap gain → paid to the customer (start or end, bank policy)" [F3]. |
| 6 | Low | N043 | RBI's bar covers a contract cancelled "with any of the Authorised Dealers": the learner should know moving to another bank does not get round it. | "But in October twenty twenty-six, R-B-I changed the game. A rupee forex contract, once cancelled, can't be rebooked. Not with any bank." |
| 7 | Low | N032–N034 | Outlay is defined by example only. An exam "define" question uses FEDAI 6.6's words. | Card on N032: "outlay = original contract rate − rate at which the swap is arranged (FEDAI 6.6) · interest rate and threshold: bank policy". |
| 8 | Low | Ch. 2 | Fact row 13 (FEDAI 2.2(c), early realisation of an export bill: refund interest for the unexpired period, notional swap cost and interest on outlay as for early delivery) is not mentioned; it links to the opening exporter case. | After N036: "Same idea when an export bill is paid early. The bank refunds interest for the unused days, and swap cost applies as here." Card: "early realisation of a bill: interest refunded + notional swap cost (FEDAI 2.2(c))". |
| 9 | Low | N065; `numericals.md` | The homework answer is not recorded or checked. Answer: TT selling 86.0231; the bank pays the exporter ₹2,690.00 (her gain, cancelled on maturity at her request). | Add as sum 6 in `numericals.md` and `fx_forward_contracts.py`: `85.92 × 1.0012 =` → 86.0231 · `86.05 − 86.0231 = × 100000 =` → ₹2,690.00 to the exporter. Give the answer at the start of A07. |
| 10 | Low | N017 | The your-turn answer gives the keys without "equals" before the results, unlike every other press-along line; the cue has no hold. | "T-T buying, from the bid. Eighty-five point eight, times point nine nine nine two, equals. Eighty-five point seven three one four." Cue: H: 3 s after "equals". |

## Checked and correct (no change)
- Cancellation rates (N009–N011, N018–N019, N021–N023): purchase at TT selling, sale at TT buying, before maturity the
  forward TT rate; "cancel = the opposite deal at today's rate" is a faithful picture of FEDAI 6.4(ii).
- Instalments (N020): lump sum or instalments, at least quarterly, not beyond maturity, Board policy: FEDAI 6.4(i)(b),(c).
- Early delivery optional (N025, N037–N038), swap cost in all cases (N028, N039): FEDAI 6.1, 6.5(i).
- Automatic cancellation within 3 working days after maturity; gain not passed, loss recovered, gain passed only if the
  delay was beyond the client's control (N054–N058, N064): FEDAI 6.4(iv).
- Impossibility does not void the contract (N057): FEDAI 6.4(iii).
- USD 100 million → USD 5 million across all ADs; undertaking (N046–N047, N050): Circular No. 25 para 2(c),(d). The
  card's "some study material still prints 100 million: old" is correct and names no provider.
- FERR one-liner (N048): 20% of the INR notional, cash with RBI, specified contracts: Circulars 26 and 27.
- Rule-version card (line 8) and the greeting/goodbye match `greetings.md`. N002 homework answer matches A05's fixed
  homework (85.62 − 0.20 = 85.42). N003 card "7 of 7 cycles" matches `importance_map.md` A-FXNUM.
