# A03 c2 · Independent re-review (fresh context)

- **Reviewer**: fresh-context agent, 2026-11-21. Read: `script_class.md` c2, the three c1 reviews, `review_ack_c1.md`,
  `numericals.md`, `practice.md`, fact sheets A03 and A01, `course/spec/lesson_spec.md` (Standard style).
  Ran `tools/check/fx_merchant_rates.py`: every A03 line OK (two ways).
- **Numbers recomputed by hand (4 decimals half up, rupees to paise)**: 85.53152 → 85.5315; 85.4716; 85.722744 →
  85.7227; 85.851328116 → 85.8513; 99.12064 → 99.1206, ₹4,95,603.00; 114.68746 → 114.85949119 → 114.8595,
  ₹9,18,876.00; trap 114.859285 → 114.8593; ₹21,36,790.00; 85.33168 → 85.3317, ₹25,59,951.00; ₹17,14,454.00;
  57.536175 → 57.5362, ₹2,87,681.00; ÷100 trap ₹2,87,68,100. Practice Q1(a) 85.60 × 1.0012 = 85.7027 (off the bid, as
  claimed); Q2(b) 85.62 × 1.0027 = 85.851174 → 85.8512 (one step, as claimed). All correct. Every key sequence fits
  an 8-function 12-digit calculator (longest display 114.85949119).
- **Sentences**: none over 25 words (longest 23, N057).
- **Length**: ~1,465 spoken words ≈ 10.5 min + 195 s of holds ≈ **13.5–14 min**. Inside the spec's 12–15 min band,
  above the header's "11–12 min" drill target. Acceptable for a drill; update the header.

## Verdict: ADOPT WITH FIXES
High 0 · Medium 1 · Low 6. Every c1 High and Medium is fixed; the "not done" Lows have sound reasons.

## c1 findings: fixed?
| c1 finding | Fixed? | Note |
|---|---|---|
| Beginner H1 rounding / full figure | yes | N017, N017a, N021a, N027 consistent; sums 2 and 3 now give the boxed rupees |
| Examiner H1 no fresh no-options sum | yes | Ch 4, three fresh sums, in checker |
| Examiner H2 no `practice.md` | yes | 8 items, keys and reasons right |
| Examiner M3 per-100 yen | yes | N052e–g with ÷100 trap |
| Examiner M4 half-up rule | yes | N017 (see L1: label) |
| Examiner M5 "only two-step" absolute | yes | N029 |
| Expert M1 FCNR(B) funding / convention | yes | N044–N045, card "(convention)" |
| Expert M2 cheque purchase as rule | yes | N047 "as exam sums treat it", card labelled |
| Beginner M1 board hold | yes | N003, 20 s |
| Beginner M2 press-along time | partly | 6 s holds added, but their position inside the line is unclear (L2) |
| Beginner M3 sum 3 hold | yes | N025, 25 s + "pause the video" |
| Beginner M4 bill buying off the bid | yes | N015 |
| Beginner M5 FCNR(B) undefined | yes | N044 |
| Beginner M6 closing sum repeated N014 | yes | Ch 4 |
| Beginner M7 exam-form claim | yes | N052 "Some exam sums…" |
| Lows not done (paise sum, rounded-vs-full example, wrong-side trap in N014, forward override) | sound | practice Q1 carries the wrong-side trap; A12 has paise |

## New findings
| # | Sev | Line | Finding | Exact fix |
|---|---|---|---|---|
| 1 | Medium | N052c | "Use sum one's quote and margins": nothing keeps sum 1 on screen, so the learner must recompute TT selling (≈25 keys) and multiply in 12 s. | Cue: add "sum 1 answer boxes stay on screen (TT selling 85.7227 visible)"; H: 12 s → 15 s. |
| 2 | Low | N017, N021a | Half-up rounding and "rupees = amount × rounded rate" are exam conventions (fact sheet row 1; FEDAI 5.8 leaves rupee rounding to bank policy) but are said as "The rule" / "One rule". | N017: "The exam convention: if the fifth decimal…"; N021a card: "rupees = amount × rate rounded to 4 decimals (exam convention)". |
| 3 | Low | N014, N015, N016, N018 | The 6 s hold sits in the cue between keys and box, but the answer is spoken in the same line right after "equals". If the hold lands at line end, the learner hears the answer before pressing. | Make the place explicit: "H: 6 s after 'equals'" (or split each line at "equals."). |
| 4 | Low | header | Length target says ~11–12 min; the script runs ~13.5–14 min with holds. | Update to "about 13–14 minutes (drill)" and chapter times (ch 4 ~3 min). |
| 5 | Low | N011, N052 | Spec: each chapter after the first opens with a recall question; ch 2 and ch 4 do not (ch 3 does, N036). | N052 start: "Chapter four. First, from chapter three: a returned export bill, which rate? … T-T selling." (H 3 s). N011 may lean on N008–N010 (accept). |
| 6 | Low | N045 | "N-R-E rupees" is a new term, unexplained. | "…his N-R-E rupees, the repatriable account an N-R-I keeps, into a new F-C-N-R deposit…" (keep ≤ 25 words). |
| 7 | Low | N048 | "Before it's crystallised": A01 taught crystallisation for import bills only. | Card: "crystallised = turned into a rupee debt (A01)"; no extra voice needed. |
