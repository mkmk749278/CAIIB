# A11b c2 · Independent re-review (fresh context)

- **Reviewer**: fresh-context agent, 2026-11-22. Read: `script_class.md` c2 (N001–N079 with cue sheet), `numericals.md`
  c2, `practice.md` c2 (P1–P10), the three c1 reviews (expert, examiner, beginner), `review_ack_c1.md`, fact sheet
  `research/bfm/facts/A5.3_A11b.md` (rows 1–25 and Leads), FEDAI NTP in `research/bfm/sources/fedai_rules_cutoff.md`
  (2.3), `course/spec/lesson_spec.md` (Standard style), `course/bfm/greetings.md`. Format model: `A10/review_c2.md`.
- **Checker**: `python3 tools/check/export_pcl.py` → 14 lines, **all OK** both ways (S1, S1b, twist, S2, S2b, P1, P9,
  P10).
- **Primary text**: every new c2 line sits on a fact-sheet row the c1 expert checked against CF Chapter XV and TRM
  2025/2026 (N012a and N018/N018a are labelled bank practice, as the fact sheet's Leads require). No line needed a new
  look at the RBI page.
- **Date (Python)**: 15 Jan 2027 + 360 days = **10 Jan 2028** ✓ (N032a, numericals).
- **Key strings, digit by digit** (lakh = 1,00,000 = 6 digits; ninety lakh = `9000000`, 7 digits):
  N023 `120000 × 85 = 10200000` (₹1.02 crore) ✓ · N024 `9000000 × 10 % = 900000` (₹9 lakh) ✓, `9000000 − 900000 =
  8100000` (₹81 lakh) ✓ · N025c `8100000 − 3500000 − 2800000 = 1800000` (₹18 lakh) ✓ · N048 `125000 × 84.8 =
  10600000` (₹1.06 crore) ✓ · N049 `10600000 − 8235000 = 2365000` (₹23.65 lakh) ✓ · N049a `62500 × 84.8 = 5300000`
  (₹53 lakh) ✓ · N049b `8100000 − 5300000 = 2800000` (₹28 lakh) ✓. `numericals.md`: `125000 − 5000`, `120000 × 85`,
  `9000000 × 10 %`, `9000000 − 900000`, S1b, twist `8000000 × 10 % = 800000`, `8000000 − 800000 = 7200000`, S2
  `8100000 + 135000 = 8235000`, S2b: all ✓. Largest entry 8 digits; all fit a 12-digit basic calculator. The c1 High
  (nine crore) is gone everywhere.
- **Length**: **1,711 spoken words** (tags removed) + **124 s of cued holds** (30 holds) ≈ **13.9 min at 145 wpm**
  (14.3 at 140). Band 12–15 ✓. By chapter: warm-up 129 words, ch1 528 (~4.3 min with holds), ch2 308 (~2.5), ch3 372
  (~3.0), ch4 201 (~1.6), close 173 (~1.8 with map holds). Every chapter under 6 min. No cuts needed.
- **Sentences**: none over 25 words (longest N032 and N037, 23). No AI-voice disclosure, no "checked against the
  source" line, no "Sir" or human-teacher claim. One light line (N064, ch4). One [seriously] "one thing" line per
  chapter; [warmly] on greeting and goodbye.
- **Method moves**: recall opener in warm-up (A11, 9 months) and at the head of ch2, ch3, ch4 ✓; wrong beliefs named
  and broken (N006 full value vs cost, N021 CIF, N035 "own pocket", N034 450 days) ✓; pause check per chapter, easy then
  twist, and the ch1 twist now needs the FOB side (₹72 lakh) ✓; mixed check N068–N070 mixes the confusables (rupee PC vs
  PCFC when no export; ab initio; who sets NTP) ✓; map from memory node by node, 4 s holds ✓; homework; preview after
  today's question is closed ✓.
- **Greeting / goodbye**: A11b row in `greetings.md` matches N001 / N079; neither repeats any other row ✓.

## Verdict: ADOPT WITH FIXES

High 0 · Medium 1 · Low 7. Every c1 High and Medium is fixed in substance; every fact, date and key string checks out
and the length is in band. The one Medium is the practice answer key: seven of ten keys are (b). It is a re-ordering
of options only, given below. Apply it and the Lows, then lock without a further review.

## c1 findings: fixed?
| c1 finding | Fixed? | Note |
|---|---|---|
| Expert H1 / beginner H1: keys show 9 crore | Yes | N024 cue and S1 step 4 now `9000000…`; N022 card "90,00,000"; numericals note "7 digits" |
| Beginner H2: twist repeats ₹81 lakh | Yes | N027–N028 cost 95 L, FOB 80 L → ₹72 lakh; numericals and checker updated |
| Examiner H1: no drawdown | Yes | N025a–c 35 + 28 drawn, 25 asked → ₹18 lakh, "never take it twice"; S1b; checker; P9 |
| Examiner M2: part-shipment liquidation | Yes | N049a–b USD 62,500 → ₹53 lakh; ₹28 lakh stays PC within 360 days; S2b; P10 |
| Examiner M3: 360 days as a date | Yes | N032a, calendar card; date correct |
| Examiner M4: interchangeable limits, sub-supplier | Yes | N016a inland LC (F11), N016b interchangeable (F24); N015 card no longer implies "no PC for sub-suppliers" |
| Examiner M5 / expert M4: eligibility, extension, non-LC margin | Yes | N012a labelled bank practice; N031 extension "never past the outer line"; non-LC margin carded under N045 and in header "Not in this video" (A12) |
| Examiner M6: practice on case forms | Yes | P8 liquidation statements, P9 drawdown, P10 part shipment; P1, P9, P10 in checker |
| Expert M2: "450 has ended" | Yes | N034 / N034a now "banks could allow… only on credit disbursed up to 30 June 2026 · new PC: 360"; card adds the "180 + extension" trap |
| Expert M3: practice label vs exam | Yes | N018 card "bank practice · exam method"; N018a "This is the method exam sums use." |
| Beginner M1: margin undefined | Yes | N018a "her own share" before the sum |
| Beginner M2: waiver vs running account | Yes | N013 "orders exist; she just sends a regular list"; N015 "before any order exists"; contrast card. "Orders must follow" is on the card only, not voiced: acceptable |
| Beginner M3: adjust / liquidation / ab initio | Yes | N032 "Exam word: ab initio"; N036 "The exam word is liquidation"; N043 uses it. N069 still says "adjusted" (Low 3) |
| Beginner M4: bill should be the CIF value | Yes | S2 bill USD 125,000 → ₹23,65,000; header story updated. The add step has no key string on screen (Low 1) |
| Beginner M5: EBR unexplained | Yes | N063 discount then sell on abroad; N063a "rediscount", E-B-R spelled out, "mainly" ≤ 180 days |
| Beginner M6: why TT selling | Yes | N062a "no dollars came in… she must buy dollars, and the bank sells them"; red OUT arrow |
| Beginner M7: mixed check | Yes | N068–N069 rupee PC vs PCFC when no export |
| Beginner M8: ch3 pile-up | Yes | N053–N054 signposted "two smaller forms, quickly"; recap card + 3 s hold at N055 |
| Beginner M9: under length | Yes | 13.9 min (above) |

## New lines checked against the fact sheet (no change needed)
N010 1967, comparable rates [F1] · N012a bank practice (Leads) · N013 "shall waive" with periodic statements [F9, CF
390] · N015 running account: no prior order, good track record or EOU / SEZ, FIFO, not for sub-suppliers [F8] · N016
separate account, lump sum or stages [F5] · N016a sub-supplier via inland LC by the order holder's bank, first stage
only [F11] · N016b interchangeable limits [F24] · N017 need-based, not refused for want of collateral [F24] · N018 /
N018a labelled practice and exam method (Leads; never "RBI says") · N025a separate account per drawal [F5] · N031
bank sets period, extension within 360 [F3] · N032 / N032a ab initio from the date of advance [F3] · N033 domestic
rate + penal, Board policy [F4] · N034 450 days only for credit disbursed till 30 Jun 2026, "could allow" [F25] · N036–
N037 liquidation, EEFC / own rupees to the extent exported [F6] · N039 substitution, not group concerns [F7] · N045
three forms [F13] · N046 drawback on provisional Customs certification [F19] · N049b remainder stays PC within 360 days
[F3, F6] · N050 NTP by FEDAI, 25 days FC sight bill not under LC [F14; FEDAI 2.3] · N051 usance 365 from shipment incl.
NTP and grace [F14] · N053 undrawn 90–98 % of FOB [F16] · N054 consignment at par [F18] · N055 overdue repaid from
rupees, EDPMS / EDF stay open [F15] · N061 ARR, funding from EEFC / FCNR(B) / lines [F21, F22] · N062 cash exports,
domestic + imported inputs, supplier's-credit exception on card, 360 days, TT selling [F22] · N062a reason consistent
with F22 ("on cancellation the exporter buys FX to repay") · N063 / N063a EBR, mainly ≤ 180 days [F23].

## Practice check (P1–P10)
Sums: P1 76,000 × 85 = ₹64,60,000 < ₹70 lakh; × 90 % = **₹58,14,000** ✓ (a) CIF ₹61,20,000 ✓ (c) cost ₹63,00,000 ✓
(d) CIF no margin ₹68,00,000 ✓ · P9 45 − 20 − 12 = **₹13 lakh** ✓ (c) 13 × 90 % = 11.7 ✓ (d) 13 − 4.5 = 8.5 ✓ · P10
25,000 × 84 = ₹21 lakh; 40 − 21 = **₹19 lakh** ✓. Keys: P2 (b) CF 235/292 ✓ · P3 (b) CF 293 ✓ · P4 (d) ✓ · P5 (b) CF
270 ✓ · P6 (c) ✓ · P7 (b) CF 243–246 ✓ · P8 (c) CF 240, 242 ✓. **No key is wrong.** Spread: a 0 · b 7 · c 2 · d 1
(Medium 1).

## Findings

| # | Sev | Where | Finding | Exact fix |
|---|---|---|---|---|
| 1 | **Medium** | `practice.md` | **Answer keys bunch on (b)**: P1, P2, P3, P5, P7, P9, P10 are all (b); none is (a). A learner who guesses "b" scores 7/10, and the pattern teaches nothing. | Re-order options only (stems, reasons and facts unchanged; update the letters in each reason): **P1** → (a) **₹58,14,000** (b) ₹61,20,000 (c) ₹63,00,000 (d) ₹68,00,000; reason "(b) uses CIF… (c) uses cost". **P3** → (a) the export credit rate till repayment (b) no interest (c) the TT selling rate (d) **its domestic lending rate plus penal charges, if any, per its Board policy**. **P5** → (a) 360 days from the advance (b) 180 days from the bill date (c) **365 days from the date of shipment, including NTP and grace** (d) 25 days. **P7** → (a) **needs a good track record (or EOU / SEZ status); bills are marked off on a first-in, first-out basis** (b) is open to all sub-suppliers (c) needs a firm order before each drawal (d) has no time limit. **P10** → (a) the whole PC is closed (b) ₹19,00,000 becomes a domestic loan at once (c) the bill proceeds go to the exporter first (d) **₹19,00,000 stays as packing credit, to be liquidated within 360 days of each advance**. Result: a 2 (P1, P7) · b 2 (P2, P9) · c 3 (P5, P6, P8) · d 3 (P3, P4, P10). |
| 2 | Low | N048 cue | The add step ₹81,00,000 + ₹1,35,000 is spoken but has no key string on screen (numericals S2 step 2 has it; beginner c1 M4 asked for it). | N048 cue 1: `S: keys "125000 × 84.8 = 10600000 · 8100000 + 135000 = 8235000"`. |
| 3 | Low | N069 | "Packing credit not adjusted in three sixty days" uses "adjusted", the word c1 beginner M3 replaced in N032 with "closes". | N069 second question: "Two. Packing credit not closed by an export bill in three sixty days. What happens?" (11 words). |
| 4 | Low | N028 cue | Card "80 × 90% = ₹72 lakh" uses a different working from the one taught (less 10 % margin) and from `numericals.md`. | N028 cue 1: `N: "8000000 × 10 % = 800000 · 8000000 − 800000 = 7200000 ✓"` [numericals twist]. |
| 5 | Low | N055 card | "EDF" appears on the card with no expansion here (EDPMS is voiced; A11 taught both). | Card: "… EDF (export declaration) and EDPMS entry stay open". |
| 6 | Low | file title | Heading still reads "CLASS EDITION (script c1, with cue sheet)" though the status says c2. | Title → "(script c2, with cue sheet)"; at lock, c3. |
| 7 | Low | N048 / S2 continuity | S2 treats the full ₹81 lakh as drawn, but the last state the learner saw (N025c) was ₹63 lakh drawn and ₹18 lakh available. | Optional: N048 "Her packing credit, fully drawn now, eighty-one lakh, plus interest of, say, one lakh thirty-five thousand, is eighty-two lakh thirty-five thousand." (21 words). Or a card fragment only: "PC fully drawn: ₹81,00,000". |

## Severity counts
High 0 · Medium 1 · Low 7 (Low 7 optional). Verdict **ADOPT WITH FIXES**: apply finding 1 and the Lows, re-run
`export_pcl.py`, and lock as c3 without a further review.
