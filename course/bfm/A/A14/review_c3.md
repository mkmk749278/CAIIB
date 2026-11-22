# A14 c3 · Independent confirmation re-review (fresh context)

- **Reviewer**: fresh-context agent, 2026-11-22. Read: `script_class.md` c3 (N001–N084 with cue sheet), `review_c2.md`
  (findings and the author's response), `numericals.md`, `practice.md` (P1–P34), fact sheet
  `research/bfm/facts/A5.2-A5.4-A5.6_A14.md` (F17, F18, F23, F27, F32), `CLAUDE.md` "Current stage" (standard style),
  `course/spec/lesson_spec.md`.
- **Checker**: `python3 tools/check/export_factoring.py` → 20 lines, **all OK** both ways (Q1, Q2, V, HW, Q3, A13 HW,
  P14, P15).
- **Primary texts**: not re-fetched. The only changed fact lines are the DDA turnover twist (N071a–N072) and the N068
  card. c2's reviewer fetched FEMA 10(R) Schedule II / application format (Id=10444) and CF para 338 (id=13156) the
  same day and recorded that the ₹3 crore average turnover over the preceding three licensing years is the same in
  every text, and that the track record is 3 years in the FEMA form (fn 12, since 29 Apr 2025) and 2 years in CF 338.
  The c3 lines match those readings and fact sheet F32. A jeweller is within the DDA's eligible class (diamond or
  gold jewellery, F32).
- **Length** (cue lines and bracket tags removed; my count): **1,689 spoken words + 158 s of holds ≈ 14.7 min at
  140 wpm** (13.9 at 150). By section: warm-up 1.5 · ch1 3.6 · ch2 3.4 · **ch3 4.4** · close 1.8. In the 12–15 band;
  every chapter between 3 and 5 minutes.
- **Sentences**: no spoken line over 25 words (longest N057b, 24 in one sentence). One light line in the lesson (N040,
  ch2). One pause check per chapter (N025–N026, N045–N046, N071–N072), easy then twist. Recall opener at the head of
  ch2 (N027) and ch3 (N047).

## Verdict: ADOPT

High 0 · Medium 0 · Low 4. All three c2 Mediums are fixed as written; the merged chapter three reads as one idea
("what a bank and the government give exporters") and the close and map follow a three-chapter lesson. No further
review needed. The Lows below are optional polish.

## c2 Mediums: fixed?
| c2 finding | Fixed? | Note |
|---|---|---|
| M1 · DDA twist on a disputed figure | **Yes** | N071a: "A jeweller: three years' record, but two and a half crore turnover. Diamond Dollar Account?" (holds the record at 3 years, which satisfies both texts, so only the turnover decides). N072: "No; turnover must be at least three crore." Cue "no: avg turnover < ₹3 cr ✓". N068 card names both texts and gives the exam fallback ("if only 2 is offered, pick it"). P32 keys the same point (c). Sound. |
| M2 · chapter four ~2.1 min | **Yes** (option a) | c2's N061–N063 removed; chapter three now "What exporters get: Gold Card, status, accounts", ≈ 4.4 min. One recall opener (N047), one pause check (N071 standby → N071a DDA twist), one "If you remember one thing" line (N072). No dangling "chapter four" anywhere in script, numericals or practice (the only hit is the header's history note). N072 dims "chapter-three parts"; the map (N076–N081) keeps its five nodes, which all sit in ch1–ch3. |
| M3 · N003 keys | **Yes** | "… ÷ 365 = 38790 · + 4310000 = 4348790": correct on an 8-function calculator. `numericals.md` Warm-up shows no "+ =" string. |

c2 Lows applied as the author's response says (checked: header cut list keeps N047; N069 H 5 s; N079 "not above ten
per cent"; N057b "export goods free, to promote sales"; N058 "micro and small firms"; N041 "authorised dealer banks";
refund card wording; title c3). Practice key spread (L8) deferred to the PDF question bank: acceptable, recorded.

## Findings (new in c3)
| # | Severity | Line | Finding | Fix |
|---|---|---|---|---|
| L1 | Low | header Length | Says ch3 "~5 min"; measured ≈ 4.4 min. | "(~4.5 min; …)". |
| L2 | Low | N060a → N064 | Note ids jump from N060a to N064 after the merge. Harmless if `voice_blocks.py` and the cue tools only read ids in order, but a reader may look for missing lines. | Either renumber N064–N072 to N061–N069 (and N073–N084 on), or add to the header: "N061–N063 removed in c3 (merge); ids not renumbered". The second is safer (reviews cite the old ids). |
| L3 | Low | N072 | "If you remember one thing:" then three items (Gold Card / status / EEFC). It works as a single contrast ("who gives what"), but it is the longest of the three "one thing" lines and ends the densest chapter. | Optional: "If you remember one thing: the Gold Card comes from your bank, status from D-G-F-T, and E-E-F-C holds money but never lends." (23 words) or keep as is. |
| L4 | Low | `numericals.md` title | Still headed "(c2, 2026-11-22)". | "(c3, 2026-11-22)" when next touched. |

## Not findings (checked)
- N068 spoken "Three years' record" with the card's 2-year fallback: the spoken line teaches the FEMA text, the card
  carries the exam rule; consistent with F32 and the §4a old-figure rule spoken at N070a.
- The ch3 pause check's easy question (standby ≥ 20 %) is taught at N052, early in a 4.4-min chapter; the twist
  (DDA) is taught at N068, just before. Easy-then-twist order holds.
- The close's quick mix (N073–N075) still covers ch2, ch1, ch3 in turn; homework N082 (540 days) matches checker HW
  (180,800).
