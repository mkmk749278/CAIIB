# A05 c2 · Independent re-review (fresh context)

- **Reviewer**: fresh-context agent, 2026-11-21. Read: `script_class.md` c2, the three c1 reviews (expert, examiner,
  beginner), `review_ack_c1.md`, `numericals.md`, `practice.md`, fact sheet `research/bfm/facts/A1.5-A1.7_A05.md`
  (rows 1–20), `course/spec/lesson_spec.md` (Standard style), `research/pedagogy/teaching_method.md`, `greetings.md`
  (A05 row matches N001 / N068), `coverage.csv` rows A1.5–A1.7 (A05 now in all three).
  Ran `tools/check/fx_forwards.py`: every line OK, two ways (c2 additions and practice included).
- **Numbers and dates recomputed independently (Python `Decimal`, 4 decimals half up; `datetime` for weekdays)**:
  Thu 3 Dec 2026 → spot Mon 7 Dec → 1m Thu 7 Jan 2027; P2 Thu 12 Nov → spot Mon 16 Nov → Wed 16 Dec (known holiday)
  → Tue 15 Dec. 2m forward 85.96 / 86.01; discount 1m 85.36 / 85.42; parity 85.60 × 1.01625 ÷ 1.01125 = 86.0232386 →
  86.0232; annual % 1.97757 → 1.98; reverse 83.50 × 1.004 = 83.8340 (trap 85.5040); importer 86.113212 → 86.1132,
  ₹43,05,660.00; trap first date 85.9230; exporter 85.891232 → 85.8912 (trap 86.0711); usance 85.83106 → 85.8311,
  ₹17,16,622.00 (trap 86.0108); homework 85.42 (85.5225 with the 0.12% margin). Practice: P3 84.48 / 84.55; P4
  2.120141 → 2.12 (distractors 0.53, 6.36, 2.11 right); P5 85.36695 → 85.3670, ₹34,14,680.00 (a ₹34,70,712.00,
  b ₹33,77,324.00, d ₹33,96,000.00 right); P6 85.896869 → 85.8969 (85.9188, 83.9147, 86.8517 right); P7 84.911772 →
  84.9118 (a 84.7816, c 84.8417, d 85.1521 right); P8 84.35328 → 84.3533, ₹12,65,299.50 (84.4631 / ₹12,66,946.50,
  ₹12,67,200.00 right). **All correct.** Every key sequence fits an 8-function 12-digit calculator (longest display
  86.0232385661). One press-along issue: the rupee sums continue the unrounded chain (finding 1).
- **Facts**: N013 (known = 3 working days, preceding / next working day, FEDAI 1.4, 5.2), N037 (≤ 1 month, first and
  last dates, customer's option, 5.2 / 5.5), N053a (25 days, FC bill not under LC, 2.3), N058 (fixed due date, no NTP,
  2.3(a)), N057 (interest upfront, 2.1(a)), N015 (since 2008, USD 1,000 lots, clearing corporation), F12 / F14 labelled
  "exam convention" aloud: all match the fact sheet.
- **Sentences**: none over 25 words. No term used before it is defined (T-T margin and LC come from A03 / JAIIB).
- **Length**: 1,738 spoken words (81 lines) ≈ 11.6–12.4 min at 150–140 wpm, + 149 s of cued holds (29 holds) +
  chapter beats ≈ **14.5–15.3 min**. At the top of the 12–15 band; acceptable, with named cuts if the take runs over
  (finding 6).

## Verdict: ADOPT WITH FIXES
High 0 · Medium 2 · Low 4. Every c1 High and Medium is fixed, and fixed well; every number and date is right. The two
Mediums are small, word-ready fixes (the press-along rupee totals, and one word "exactly" that clashes with the 1.98
the learner has just seen). After them the script is lockable without another full review.

## c1 findings: fixed?
| c1 finding | Fixed? | Note |
|---|---|---|
| Examiner H1: no practice.md | Yes | 8 items + homework answer; every number checked here |
| Examiner H2: annualised % and reverse sum | Yes | N031a–d; 1.98 and 83.8340 right; trap 85.5040 on screen |
| Beginner H1: parity keys from nowhere | Yes | N029a–c, growth factors and formula card |
| Examiner M3: gap only for convertible currencies; C01 callback | Yes, with a wording issue | N031e; see finding 2 |
| Examiner M4 / beginner L5: discount rounding | Yes | N055a + card |
| Examiner M5: no-options label; homework answer | Yes | N031c label; practice.md homework answer (final rate missing, finding 5) |
| Expert M1 / beginner M9: homework impossible | Yes | N066 uses the 1m discount points; answer first date 85.42 |
| Beginner M1: A04's question | Yes | N002, N026 |
| Beginner M2 / expert L4: free-money story | Yes | N028–N028a with the borrowing leg |
| Beginner M3: points undefined | Yes | N021 |
| Beginner M4: futures "margin" | Yes | N015 "deposit… topped up daily" + note card |
| Beginner M5: month windows | Yes | N037a + strip cue; N046 "end of month two" |
| Beginner M6: why highest / lowest | Yes | N038 |
| Beginner M7 / expert L2, L7: usance, sight, transit, why forward | Yes | N052–N053a; FEDAI 2.3 wording now matches |
| Beginner M8: holds after answers | Mostly | "equals" + hold in N025, N030, N031b, N043, N044, N056, N057; not in N031c–d (finding 3) |
| Beginner M10: fixed date vs option window | Yes | N003, N041 |

**Lows not done** (expert L8 interbank 8.09; beginner L1 connect line, L3, L6 scope line, L7 spread check): reasonable.
8.09 is interbank and out of merchant scope (card says "merchant contracts"); the others are optional and the
script is already at the top of the length band.

## New findings
| # | Sev | Line | Finding | Exact fix (ready words) |
|---|---|---|---|---|
| 1 | Medium | N043–N044, N056–N057 (and practice P5, P8) | Press-along shows a different rupee total. After `86.01 × 1.0012 =` the display holds 86.113212; pressing `× 50000 =` as cued gives **4305660.6**, but the voice and box say ₹43,05,660.00 (from the rounded 86.1132). Same in N057: chain gives **1716621.2**, voice says ₹17,16,622. A learner pressing along sees a mismatch at the answer reveal. (P5 chain 3414678 vs 34,14,680; P8 1265299.2 vs 12,65,299.50.) | N044: "Round it to four decimals first. Eighty-six point one one three two, times fifty thousand, equals." Cue keys `86.1132 × 50000 =` (H: 5 s, box unchanged). N057: "Round first. Eighty-five point eight three one one, times twenty thousand, equals." Cue keys `85.8311 × 20000 =`. numericals rows 5 and 7: keys `86.1132 × 50000 =`, `85.8311 × 20000 =`. practice P5: "`85.3670 × 40000 =`"; P8: "`84.3533 × 15000 =`". |
| 2 | Medium | N031e (+ card) | "The premium equals the interest gap **exactly** only for freely convertible currencies" comes 30 seconds after the learner computed 1.98 against a 2-point gap and heard "The gap." A careful learner hears a contradiction (the small difference is the division by the dollar growth, not convertibility). Keep the exam phrase on the card only. | N031e: "One condition. The premium follows the interest gap fully only when both currencies are freely convertible. For the rupee, exporters' and importers' demand also moves it." Card: "premium ≈ interest gap · exam wording: 'exactly equal' → only for freely convertible currencies" [F10]. |
| 3 | Low | N031c–N031d | The reverse sum breaks the c2 "equals, hold, answer" pattern: N031c ends "times two." with an 8 s hold but no "equals"; N031d gives 83.8340 with no "equals" and no hold. | N031c end: "Two point four, divided by twelve, times two, equals." (H: 6 s). N031d: "Point four percent. So eighty-three point five, times one point zero zero four, equals." Cue H: 6 s (after "equals"), then "Eighty-three point eight three four zero." |
| 4 | Low | N040 | "not a F-E-D-A-I line": spoken as letters, it needs "an". | "That's the exam convention, not an F-E-D-A-I rule." |
| 5 | Low | practice.md homework answer | N066 asks "which date, and what rate?" but the answer stops at 85.42 "then add the TT selling margin". | "…`85.62 − 0.20 =` 85.42; `× 1.0012 =` 85.522504 → **85.5225** (TT selling margin 0.12%, as in class)." Add the line to `fx_forwards.py`. |
| 6 | Low | whole script | ≈ 14.5–15.3 min: within band only at ~145 wpm or faster. If the measured take runs over 15:00, cut in this order. | (a) N014 + N015 → one line: "A forward with a bank is over the counter, any amount, any date. A currency future is a standard exchange contract, with a daily deposit and a clearing guarantee." (keep the two-column card) · (b) merge N029b into N029a: "…grows to one point zero one six two five. The dollar's quarter, one point zero one one two five." · (c) N019 drop "[seriously] If you remember one thing from chapter one:" sentence (N016–N018 already recalled it). Do not cut N031e (exam Q72 / Q91 form). |

Counts: **High 0 · Medium 2 · Low 4** (findings 3–6; finding 6 is a contingency cut list, not a defect).
