# A00 class edition: quick re-review of c5 (changed lines only)

- **Reviewer**: independent agent session, fresh context, 2026-11-21.
- **Scope**: only the lines changed from c4 (ADOPTed in `review_c2.md`), read from the uncommitted `git diff` of
  `script_class.md`: N007, N013, N015, N027, N032, N042, N046, N052, N063, N064, N067, N075a, N077, N093, N104, N123,
  N137a, N150, N153, N154, N159 and the c5 header line. Checked against `research/bfm/facts/A1.1-A1.3_A00.md`.

## Verdict: **ADOPT** (three Lows, optional; none blocks voicing)

## 1. Facts (no new claim, nothing misleading)
- **N027 "born abroad. Drawn outside India."** The metaphor is followed straight away by the exact wording (fact 3,
  "drawn outside India"), so the exam phrase is what stays. Safe.
- **N046 "Nobody in Tokyo is queueing at your cash counter."** A joke that supports the point (OTC ≠ branch counter,
  fact 8). It does not suggest foreign banks are out of the market; the next line (N047) brings Tokyo in as a dealing
  centre. Safe (see L2 for a small wording point).
- **N075a** Cash same day, tom next working day, spot second working day, forward beyond spot: matches fact 12
  (FEDAI 5.2) and N069–N075. No new fact.
- **N077 "[chuckles] Spot is not on the spot. Bankers do like confusing names. The same-day deal is called cash."**
  Opinion, clearly light; the rule (spot ≠ today; same day = cash) is restated correctly. Safe.
- **N104 "No cheque book comes with it."** Reinforces "BoP current account ≠ branch current account". Safe.
- **N137a** Par value → 1971 sterling → (Sept) 1975 basket → (Mar) 1992 dual rate → (Mar) 1993 unified: matches facts
  23–28 and N130–N137 exactly; only a compressed recall line. Safe.
- **N150 "Sorry, both camps lose this one."** Consistent with the answer "Neither" (facts 22, 30–31). Safe.
- N064, N154 signposts and N007, N032 notebook prompts carry no facts.

## 2. Language, sentence length, humour
- Every spoken sentence in the file is 25 words or fewer (checked with a script, tags stripped).
- Plain Indian English throughout; the light lines are short and land on the concept, not on the learner. N150's
  "Sorry, both camps lose this one" is gentle teasing of both answers, fair since the class set up both as wrong.
- N064 "We're nearly halfway" is fair (chapter 3 of 5 starts at about 38% of the lines).

## 3. Voice tags
- Plausible ElevenLabs v3 tags: `[curious]` (N013, N015, N067), `[warmly]` (N052, N159; N001 and N170 were already
  there), `[seriously]` (the five "one thing" lines N042, N063, N093, N123, N153), `[chuckles]` (N077). All sit
  between sentences, none mid-word or mid-number. About 12 tags in ~170 lines: sparing.
- Pipeline check: `voice_blocks.py` keeps tags on the voice page (wanted, ElevenLabs reads them) and its ID regex takes
  `N075a` / `N137a`; `cut_lines.py`, `flow_voice.py` and `timeline.py` strip `[a-z ]` tags before matching/showing
  text. When the take is checked word by word (faster-whisper + diff), strip tags from the script side too, or every
  tag shows as a false "missing word".

## 4. Hard lines
- No "Sir" persona, no claim that a human is speaking, no back-story. Nothing resembling any provider's wording.

## 5. Notebook holds
- N032 H 5 s, N075a H 6 s, N137a H 6 s, each after the items are spoken (and written on screen as spoken): enough to
  copy 3–5 short lines. N007 H 2 s is only the "keep a notebook" instruction, not a writing moment: fine.

## Findings
| # | Sev | Line | Finding | Exact fix |
|---|-----|------|---------|-----------|
| L1 | Low | N154 | "Five questions" said twice in one line ("…Five questions, then the map… A mixed round… Five questions. Answer each…"). | `N154 · Last stretch now. Five questions, then the map, and we're done. A mixed round, like the exam mixes them. Answer each before I do. One. A rupee draft issued by a bank in Chennai, payable in Mumbai. Foreign exchange?` |
| L2 | Low | N046 | "cash counter" comes one chapter before "cash" is taught as a value date; "branch counter" also echoes the line's own point better. | `…It just means there's no exchange in the middle. Nobody in Tokyo is queueing at your branch counter.` |
| L3 | Low | header c5 | Tag count says `[curious] ×4`; the script has 3 (N013, N015, N067). | Change to `[curious] ×3`. |

No High or Medium findings.
