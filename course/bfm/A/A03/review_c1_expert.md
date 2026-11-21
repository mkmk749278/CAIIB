# A03 c1 · independent review: SUBJECT EXPERT

- **Reviewed**: `course/bfm/A/A03/script_class.md` c1 (spoken lines and cue sheet), `numericals.md`, fact sheets
  `research/bfm/facts/A1.6-A1.7_A03.md` and `A1.6-A1.7_A01.md`. 2026-11-21, fresh context.
- **Primary source**: FEDAI Rules 10th ed., "Updated up to 20 August 2026" (FEDAI's PDF, read in full for Rules 2–5;
  it carries AR 03/2026 of 7 Sep 2026). Rule version: as at 31 Dec 2026.
- **Sums**: `tools/check/fx_merchant_rates.py` run (all OK) and every figure recomputed independently by hand/Decimal.

## Verdict: ADOPT WITH FIXES

No High findings. 2 Medium, 4 Low.

## Findings

| # | Sev | Line | What is wrong | Source | Exact fix |
|---|---|---|---|---|---|
| 1 | Medium | N045 | (a) "rupees into a new FCNR deposit" reads as if any rupees can fund FCNR(B). Only a non-resident can hold FCNR(B), funded from abroad or from repatriable (NRE) balances; NRO funds only within the USD 1 million facility. A learner may answer "resident's rupees → FCNR at TT selling". (b) Neither FCNR rate is in the FEDAI Rules; the card says "(convention)" but the voice states it as a rule. | FEDAI Rules 4.1, 4.4 (principle only; no FCNR rule); fact sheet A03 row 9 says "label as convention" | Spoken: "T-T buying. The dollars are with the bank, and it buys them. Going the other way, his N-R-E rupees into a new F-C-N-R deposit, that's T-T selling. That's the in-and-out rule applied; exam sums use it." Card: "FCNR(B) → rupees: TT buying · NRE ₹ → FCNR(B): TT selling (in/out rule; exam convention)". |
| 2 | Medium | N047 | Cheque purchase → bill buying is stated as a rule and the card has no "convention" label, although FEDAI Rule 4 (clean instruments) names no rate for purchased cheques/drafts (4.2 covers TCs, notes, cards only). Fact sheet row 10 requires the label. The answer itself (bill buying; TT buying on collection after Nostro credit) is the standard exam answer and is fine. | FEDAI 2.1(a), 2.5(a), 4.2, 4.4; fact sheet A03 row 10 | Spoken: "Bill buying, in exam sums. The bank pays first and collects later, just like a bill. ..." Card: "cheque bought: bill buying · on collection: TT buying (exam convention)". |
| 3 | Low | N048–N049 | FEDAI 2.1(d) applies to dishonour **before crystallisation**; after crystallisation the liability is already in rupees (2.1(b)). Script omits the condition. | FEDAI 2.1(d), 2.1(b)(iii) | Card N049: "returned unpaid (before crystallisation): TT selling + interest & charges". Spoken may stay. |
| 4 | Low | N053 | "In the exam, you'd key that in" is stated as fact for every no-option sum; the basis is exam recollections (PLAYBOOK "Some numerical questions have no options"), not an IIBF rule. | `docs/PLAYBOOK.md` exam-pattern note; IIBF publishes "objective type" only | "Some exam sums have no options; you key the answer in. So write all four decimals." |
| 5 | Low | numericals.md Sum 1 | Bill-selling display shown as "85.85132812"; a 12-digit display shows **85.851328116** (exact 85.851328116). Answer 85.8513 unaffected. | Arithmetic | Replace "85.85132812" with "85.851328116". |
| 6 | Low | fact sheet A03 row 1 | Cites FEDAI 5.8 for "rates to 4 decimals". 5.8 is about rounding the **rupee settlement amount** (rounded rupees or actual paise, bank policy); 4-decimal rates are exam convention. Script itself does not claim it. | FEDAI 5.8 | Row 1 source: "Exam convention (4 decimals); FEDAI 5.8 = rupee amount rounded or in paise per bank policy". |

## Verified correct

- **Rate rules** against FEDAI text: inward remittance → TT buying (4.4); outward remittance → TT selling (4.1);
  export bill purchased/discounted/negotiated → bill buying, transit/usance interest upfront (2.1(a)) so N031's
  "before the interest for the transit days" is right; import bill without hedge → bill selling (3.1(a)); dishonoured
  export bill → TT selling for bill amount and foreign charges, plus interest and rupee charges (2.1(d)); notes/TCs/cards
  at the AD's appropriate buying/selling rate for the instrument (4.2), spread "given in a sum" is a fair exam framing;
  collection proceeds at TT buying after Nostro credit (2.5(a)). FCNR(B) payout at TT buying and cheque purchase at bill
  buying are correct exam answers (see findings 1–2 for labelling only).
- **Ladder and convention**: N005–N006 order (bill selling > TT selling > ask > bid > TT buying > bill buying); box
  marked "(exam convention)"; bill selling loaded on unrounded TT selling (N017–N018, N033–N034).
- **"Usually the answer comes out the same"** (N034): rounded vs unrounded TT selling give the same 4th decimal in
  both sums (85.7227 × 1.0015 = 85.85128405 → 85.8513; 114.6875 × 1.0015 = 114.85953125 → 114.8595). True.
- **"A little over a minute a question"** (N002): CAIIB compulsory paper = about 100 objective questions in 2 hours
  (IIBF rules; PLAYBOOK) → 1.2 min. Correct.
- **Sums (4 decimals, paise), recomputed independently**:
  - 85.60 × 0.9992 = 85.53152 → **85.5315**; 85.60 × 0.9985 = 85.4716 → **85.4716**; 85.62 × 1.0012 = 85.722744 →
    **85.7227**; 85.722744 × 1.0015 = 85.851328116 → **85.8513**.
  - 99.20 × 0.9992 = 99.12064 → **99.1206**; 5,000 × 99.1206 = **₹4,95,603.00**.
  - 114.55 × 1.0012 = 114.68746; × 1.0015 = 114.85949119 → **114.8595**; 8,000 × 114.8595 = **₹9,18,876.00**.
    Trap 114.55 × 1.0027 = 114.859285 → **114.8593** (differs; N028's "point two seven percent" correct).
  - 25,000 × 85.4716 = **₹21,36,790.00**.
  - Multipliers N008–N010: less 0.15% = × 0.9985; plus 0.12% = × 1.0012. Correct.
- **Key sequences** on an 8-function, 12-digit calculator: every chain (`a × m =`, then `× m2 =` on the displayed
  result) works without %/memory keys; every intermediate fits in 12 digits (largest 114.85949119), so no display
  truncation affects the 4th decimal.
- **Cue sheet**: quiz-board card numbers match the spoken order in N038–N049 (1 inward, 5 fee, 6 export bill, 3 import,
  4 notes, 2 FCNR, 7 cheque, 8 returned); fact-row citations [F1]–[F10] point to the right rows; quotes labelled
  illustrative; rule-version card matches the PDF ("updated up to 20 August 2026", includes AR 03/2026).
- No coaching-provider wording found; no AI-voice or "checked against the source" line.
