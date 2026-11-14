# Lesson spec (every lesson follows this)

A lesson is a folder `course/<paper>/<module>/<lesson id>/` with these files. Video, voice and the PDF page are
built from them later; the text files are the master.

| File | What it holds | Gate |
|---|---|---|
| `script.md` | the narration with a picture column; 1,600–2,100 words (12–15 min at about 140 words a minute) | read aloud test: no line over 25 words; no reading of rules verbatim except short quotes |
| `numericals.md` | every sum in the lesson: data, steps, **calculator key presses**, answer | `tools/check/*.py` computes each answer two independent ways and they match to 4 decimals |
| `practice.md` | 5–8 of our own questions (MCQ and keyed-in numericals) with answers and one-line reasons | every answer traced to `claims.csv` or `numericals.md` |
| `claims.csv` | every rule or number taught: claim, primary source (title, section, URL), version date, status | no claim without a primary source; version on or before the cut-off the lesson states |
| `map_nodes.md` | the nodes this lesson adds to the module mind map, in order of appearance | node names match the module map |

## The shape of every lesson (about 12–15 minutes)
1. **Branch moment** (0:00–0:45): a real kind of situation at a counter or desk, ending in a question with two or
   more possible answers on screen. No greeting, no "in this video".
2. **The picture** (to about 3:00): the one stable picture for this idea (e.g. the bank's counter). The rule arrives
   as the answer to the opening question.
3. **Build** (to about 9:00): two or three steps, each with its own picture; the mind map grows a node at each step.
4. **Worked numerical(s)**: data on screen, each step written, calculator keys shown, answer boxed.
5. **Trap card(s)**: the classic wrong answer side by side with the right one, and why people fall for it.
6. **Practice**: "Pause now": three questions, then answers with the one-line reason.
7. **Map recap**: the finished map for this lesson, read in 30–45 seconds.
- Every lesson states the **rule version** it teaches ("FEDAI Rules as at 30 June 2026", "RBI Master Direction as
  updated to …") in the opening card and on its PDF page.
- Illustrative rates, names and places are labelled "illustrative" on screen; we never present them as real data.

## Voice and words
- Plain, warm Indian English for a bank officer studying after work on a phone. Talk to one person.
- One idea per sentence; a short line, then a longer one; nothing over 25 words.
- Explain once, then recap with a picture; never re-explain the same thing from scratch.
- No "Sir" persona, no claims that a human teacher is speaking; the narrator is a synthetic voice (owner, 2026-11-14).

## Numbers
- Rates quoted in direct terms, rupees per unit of foreign currency (FEDAI Rule 5.7), 4 decimals unless the
  question says otherwise; rupee amounts to 2 decimals (banks may round per policy, Rule 5.8).
- Every method must work on the IIBF-allowed calculator (+ − × ÷ % √ Tax+ Tax−, 12 digits).
