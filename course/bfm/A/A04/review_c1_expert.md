# A04 c1 · independent review: SUBJECT EXPERT

- **Reviewed**: `course/bfm/A/A04/script_class.md` c1 (spoken lines N001–N054 and cue sheet), `numericals.md`, fact
  sheets `research/bfm/facts/A1.3-A1.7_A04.md` and `A1.6-A1.7_A01.md`, plan `plans_A.md` §A04, `lesson_spec.md`,
  `CLAUDE.md` hard lines. 2026-11-21, fresh context.
- **Primary sources**: FBIL Reference Rate Methodology, Version 2 (15 Jan 2019), FBIL's PDF read in full (paras 4,
  8–11); FEDAI Rules 10th ed. "updated up to 20 August 2026", Rule 5.7 (as quoted in the A01 sheet, row 4: "so many
  Rupees and Paise for 1 unit or 100 units"). Bid/ask logic derived from first principles (both legs as the quoting
  bank's own two-way quotes, and as cover deals).
- **Sums**: `python3 tools/check/fx_cross_rates.py` run, all OK. Every figure recomputed independently in Decimal
  (4 decimals half up; rupees to paise), plus the side trap and implied cross figures:
  EUR/INR 92.8760 / 92.9405; trap 92.8977; GBP/INR 108.2840 / 108.3949; JPY/INR 57.2193 / 57.2709 per 100
  (85.60 ÷ 149.60 = 0.572192513…; 85.62 ÷ 149.50 = 0.572709030…); trap bid÷bid 57.2575, ask÷ask 57.2326;
  chain 1.17 × 1.085 = 1.26945 × 85.60 = 108.66492 → 108.6649; 500000 ÷ 108.6649 = 4,601.3018 → GBP 4,601.30;
  40,000 × 92.876 = ₹37,15,040.00; indirect 100 ÷ 85.60 = 1.168224 → USD 1.1682 per ₹100. All match the script.
  All keyed sums fit a 12-digit, 8-function calculator.

## Verdict: ADOPT WITH FIXES

No High findings. 3 Medium, 7 Low.

## Findings

| # | Sev | Line | Finding | Exact fix |
|---|---|---|---|---|
| 1 | Medium | N024–N025, N035, N048 (cards too) | Rule two is taught only as "dollar the base in both". The other same-side case, dollar the **quote** in both (EUR/USD and GBP/USD → EUR/GBP), also divides with crossed sides and is a standard exam cross. A learner told "base in both → divide" has no rule for it. N024 already says "Same side"; the cards and recap narrow it back. | After N025 add: "Same if the dollar is on the right in both, like euro-dollar and pound-dollar. Same side, divide." Card N025: "USD on the SAME side → DIVIDE (cross the sides)". N035/N048: "Dollar on the same side, divide, and cross the sides." |
| 2 | Medium | N030 (and N052) | "Check: is your bid below your ask?" does not catch the trap just named. Bid÷bid 57.2575 with a correct ask 57.2709 passes (57.2575 < 57.2709). The check only fires when both sides are done like-with-like (57.2575 vs ask÷ask 57.2326). As worded it gives false comfort. | N030: "If you divided bid by bid, and ask by ask, you got fifty-seven point two five seven five and fifty-seven point two three two six. Bid above ask. That's the trap." Card: "bid÷bid 57.2575 · ask÷ask 57.2326 → bid > ask ✗". |
| 3 | Medium | N037–N040 (F10) | The chain rule is taught only with "one unit" links, so "just multiply along" is stated as the whole rule. Exam chains often have non-unit links (100 yen = x rupees, the per-100 convention the lesson itself teaches). The fact sheet's full rule (right-hand product ÷ left-hand product) never reaches the voice. | After N040 add: "If a ring starts with more than one unit, like a hundred yen, divide by that number too." and "Right-hand numbers multiply. Left-hand numbers divide." Card: "answer = product of right ÷ product of left". |
| 4 | Low | N027 | The "why" is a mnemonic (bid must be smaller), not the reason. The reason: on each leg the bank takes the side that suits it. | "Why? The bank buying yen gets the most yen per dollar, one forty-nine point six, and pays the fewest rupees, eighty-five point six." Keep the "bid comes out smaller" line as the memory hook. |
| 5 | Low | N038–N040 vs N023 | The chain's implied pound-dollar is 1.26945, but chapter 2 used 1.2650 / 1.2660, so pound-rupee is 108.66 here and 108.28 there in the same class. Not wrong (illustrative), but a careful learner will stall. | Either label the chain card "a different day's rates (illustrative)", or change 1.17 to 1.166 (1.166 × 1.085 × 85.60 = 108.2934; ₹5,00,000 ÷ 108.2934 = GBP 4,617.07; re-run the checker). |
| 6 | Low | numericals.md Sum 5 | Display shown "4601.297…" is the result of dividing by the unrounded 108.66492. Keying 500000 ÷ 108.6649 (as the script and checker do) shows 4,601.30180… Answer GBP 4,601.30 unaffected. | Replace "→ 4601.297…" with "→ 4601.3018…". |
| 7 | Low | N012 / F5 | Correct per FBIL methodology para 8–10 (EUR/USD, GBP/USD, USD/JPY means "crossed with" the USD/INR reference rate; JPY per 100). Worth one more exam-grade detail the sheet lacks: FBIL publishes JPY/INR to **2** decimals, EUR/GBP to 4 (para 10); published around 13.30 hours (para 11). Our 4-decimal yen answers are merchant/exam style, not FBIL style. | Fact sheet row 5: add "JPY/INR published to 2 decimals, EUR/GBP/USD to 4 (methodology para 10); around 13.30 hrs (para 11)". No script change needed. |
| 8 | Low | N008 | "India quotes directly" is right (FEDAI 5.7). A common recall question is *since when*: India moved from indirect to direct quotation on 2 Aug 1993 (FEDAI). Not in the fact sheet, so not checked to a primary text here. | Optional, once checked in FEDAI's circular: card "India: direct quotes since 2 Aug 1993". Else leave as is. |
| 9 | Low | Rule-version card | Card omits "10th edition" (A03 card has it) and the FBIL method's version. | "FEDAI Rules, 10th ed. (updated to 20 Aug 2026) · FBIL Reference Rate method v2 (15 Jan 2019) · as at 31 December 2026". |
| 10 | Low | Fact sheet row 8 | The bracketed explanation ("buys USD with yen at the yen-side ask, sells USD for rupees at the rupee-side bid") is correct only from the **cover-deal** view (bank as price-taker in the market). From the quoting-bank view used in the script (N010) the bank sells USD at its yen-side ask and buys USD at its rupee-side bid. Both give 85.60 ÷ 149.60, but the wording will confuse the next author. | Row 8 bracket: "(Bank buys yen for rupees: gives 1 USD for 149.60 yen (USD/JPY ask) and pays 85.60 rupees for that USD (USD/INR bid).)" |

## Verified correct

- Base/quote reading (N005–N007), bid = bank buys the base / ask = bank sells the base (N010), direct and indirect
  definitions and the USD 1.1682 per ₹100 example (N008–N009; 100 ÷ 85.60), FEDAI 5.7 per-1-or-100-units.
- Cross rate definition (N011). FBIL crosses EUR, GBP and JPY through USD/INR, JPY per 100 (N012): FBIL methodology
  paras 8–10.
- Market conventions EUR/USD, GBP/USD (USD as quote), USD/JPY (USD as base): match FBIL para 8's pairs.
- Rule 1 multiply like-with-like (N016–N017): bank buys EUR at EUR/USD bid, buys the USD at USD/INR bid → bid × bid.
- Rule 2 divide with crossed sides (N025–N026, N034): JPY/INR bid = 85.60 ÷ 149.60; ask = 85.62 ÷ 149.50.
  Widest spread, bid < ask.
- Case N044–N046: export proceeds, bank buys EUR → bid; ₹37,15,040.00 before margin; margin pointer to A03 is right.
- Cue cards match the voice in every numeric line (keys, boxes, traps); holds present for every question.
