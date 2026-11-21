# A01 class edition c2 · independent re-review (fresh context)

- **Reviewer**: fresh-context agent, 2026-11-21.
- **Read**: `script_class.md` c2 (N001–N083 with cue sheet), the three c1 reviews, `review_ack_c1.md`, fact sheet
  `research/bfm/facts/A1.6-A1.7_A01.md`, `numericals.md`, `course/spec/lesson_spec.md` ("Standard style").
- **Primary source**: FEDAI Rules 10th edition, updated to 20 Aug 2026 (FEDAI PDF, 20 pages, downloaded and read
  today): 2.1(a)–(d), 2.5(a), 3.1, 3.3, 4.1, 4.4, 5.7–5.8, 6.4(ii)(a)–(c), 6.4(iv).
- **Sums**: `tools/check/fx_merchant_rates.py` all OK. Recomputed: 85.42 × 1.001 = 85.50542 → 85.5054; 85.40 × 0.9995
  = 85.3573; 85.40 × 0.9985 = 85.2719; 85.50542 × 1.0015 = 85.63367813 → 85.6337; **N042 trap 85.42 × 1.0015 =
  85.54813 → 85.5481 (correct)**; 18,000 × 85.5054 = ₹15,39,097.20; 40,000 × 85.2719 = ₹34,10,876.00.
- **Length**: 1,975 spoken words + 115 s of holds = about 15.1 min at 150 wpm, 16.0 at 140. Chapters: warm-up +
  opening 1.1 · ch 1 2.5 · ch 2 5.5 · ch 3 4.5 · close 2.0 min. No sentence over 25 words (script check). At the upper
  edge; acceptable under the owner's "longer lessons are fine".

## Verdict: **ADOPT WITH FIXES** (new: High 0 · Medium 2 · Low 5)

All 17 High/Medium findings of c1 are fixed. Two fixes created small new problems (N034, N072), each a one-line edit;
no re-review needed once they are applied as written below.

## c1 findings: are they fixed?

| c1 finding | Fixed? | Note |
|---|---|---|
| Beginner H1 multiplier before explained; 8 s try | Yes | N036, N038 explain; N039 asks, 10 s, hint after hold; N043 tip short |
| Expert M1 / Beginner L7 bill-selling convention as rule | Yes | N041 "in exam sums… unless the question says otherwise"; card relabelled; N042 error line |
| Expert M2 purchased / discounted / negotiated | Yes | N055 + card match 2.1(a) |
| Expert M3 / Examiner M1 cancellation before maturity | Yes | N067 "on its due date"; N067a forward TT rate (6.4(ii)(c)) [F24]. See new N072 (M2) |
| Examiner M2 "import bill never flips" | Yes | N074, N080, map node 3 "unpaid import bill"; N068 labelled our hook |
| Examiner M3 contract override not practised | Yes | N073, N073a (3.1(a)/2.1(a) "contracted rate") |
| Beginner M1 overclaim | Yes | N002 "all seven recent exams we checked" |
| Beginner M2 rule-version card | Yes | N001 cue 0 |
| Beginner M3 "the lower one" too early | Yes | N006 |
| Beginner M4 recall, not re-tell; false "so" | Yes | N012, N023 ask first with 3 s holds; N012 gives the real reason |
| Beginner M5 "T-T" unexpanded | Yes | N029 + tile, N029a |
| Beginner M6 wait vs interest | Partly | N031 now clear; N034's new wording creates a new error (M1 below) |
| Beginner M7 four margins in one breath | Yes | N035; each step names its margin |
| Beginner M8 whose purchase contract | Yes | N067 "where the bank agreed to buy" |
| Beginner M9 "L-C" | Yes | N069 "letter of credit" |
| Beginner M10 close tells sums | Yes | N075–N076 ask, holds 3 s / 8 s |
| Beginner M11 map holds | Yes | 5 s holds; N078 prompt clear |
| Lows not done (Examiner L1, L4, L7; Expert L5, L6; Beginner L8) | Reasons sound | Each is owned by a named later lesson (A03, A04, A06, A12, A16) or the fact freeze |

## New findings

| Sev | Line | Finding | Exact fix |
|---|---|---|---|
| **Medium** M1 | N034 | "Bill buying… So it keeps the widest margin" is wrong on the lesson's own numbers: bill selling sits 0.25% over the ask (0.10 + 0.15), bill buying 0.15% under the bid. Said right after "bill selling, at the top", a learner hears bill buying = widest margin overall, and an option like "bill buying carries the widest margin" would be ticked. | N034 → "Bill selling, at the top. And at the bottom, bill buying. The bank pays first, and carries the bill until the dollars arrive. So it sits furthest out on the buying side." (22 words max per sentence.) |
| **Medium** M2 | N072–N073 | After N067a (before the due date → forward TT rate), the check item "A customer cancels a forward sale contract. Which rate?" has no timing, so "T-T buying" is only half right and contradicts the line the learner just heard. | N072 second item → "Two, the twist. A customer cancels a forward sale contract on its due date. Which rate?" (cue card: "cancel sale · due date"). |
| Low L1 | N067 | "on its due date" is narrower than 6.4(ii)(a)–(b): a contract cancelled after maturity (incl. the bank's own cancellation within 3 working days, 6.4(iv)) is also at spot TT. Not wrong, but silent on "after". | N067 → "…when a forward contract is cancelled on or after its due date." Card "cancel on/after due date: …". |
| Low L2 | N042 | The trap value 85.5481 (bill-selling margin on the ask) is not in `numericals.md` or the checker; `numericals.md` lists only 85.6336 (both margins on the ask). Every number on screen should trace to `numericals.md`. | Add a row to `numericals.md` and `fx_merchant_rates.py`: "Trap: bill margin on the ask: 85.42 × 1.0015 = 85.54813 → 85.5481". |
| Low L3 | header | Title still says "(script c1, with cue sheet)"; "Holds" line says the calculator turn holds 8 s, but N039 is now 10 s (N075 keeps 8 s). | Title → "script c2"; Holds → "the calculator turns hold 8–10 s". |
| Low L4 | Ch 2 | About 5.5 min, over the style's 3–5 min chapter (teaching method allows up to 6). | Optional: no cut needed; if trimming, drop N032's "Say it with me once" (N033 does the recall). |
| Low L5 | length | 1,975 words, at the top of the spec's 1,600–2,000; about 15–16 min with holds. | None required (owner allows longer); keep any later additions word-neutral. |

## Facts on changed lines, against FEDAI (all right)
N041 convention (fact sheet row 10, General Guideline 1) · N055 2.1(a) purchased/discounted/negotiated · N065
crystallisation timing = bank's own policy, transparently available, 2.1(b)(i)–(ii) · N066 TT buying "or contracted
rate (if any)" 2.1(c) · N067 purchase → TT selling, sale → TT buying 6.4(ii)(a)–(b) · N067a forward TT before maturity
6.4(ii)(c) · N070 import crystallisation as retirement 3.1(b), 3.3 · N073a contracted rate 2.1(a) · N012 direct quote,
1 or 100 units, 5.7. No AI-voice disclosure, no "checked against the source" line, no Sir persona.
