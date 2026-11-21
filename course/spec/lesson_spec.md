# Lesson spec (every lesson follows this)

A lesson is a folder `course/<paper>/<module>/<lesson id>/` with these files. Video, voice and the PDF page are
built from them later; the text files are the master.

| File | What it holds | Gate |
|---|---|---|
| `script.md` | the narration with picture directions **and its cue sheet** (a picture beat for every sentence, PLAYBOOK §5e); about 1,200–2,000 words (at about 140 words a minute, plus calculator and practice pauses, 12–15 minutes) | read aloud test: no line over 25 words; no reading of rules verbatim except short quotes |
| `numericals.md` | every sum in the lesson: data, steps, **calculator key presses**, answer | `tools/check/*.py` computes each answer two independent ways and they match to 4 decimals |
| `practice.md` | 5–8 of our own questions (MCQ and keyed-in numericals) with answers and one-line reasons | every answer traced to `claims.csv` or `numericals.md` |
| `claims.csv` | every rule or number taught: claim, primary source (title, section, URL), version date, status | no claim without a primary source; version on or before the cut-off the lesson states |
| `map_nodes.md` | the nodes this lesson adds to the module mind map, in order of appearance | node names match the module map |
| `voice.md` | the voice text in parts of about 9,000 characters (never over 10,000), cut between lines, a chapter break preferred (owner, 2026-11-20), built by `tools/video/voice_blocks.py --target 9000 --max 10000` from the locked script, with a phone page of Copy buttons | built only after the script is locked |

## The shape of every lesson (about 12–15 minutes)
0. **Warm-up** (about 1–1.5 minutes; PLAYBOOK §5b): the rule-version card (no AI-voice disclosure, owner 2026-11-21), a greeting
   that no other video uses, connect with the class ("long day?", notifications on silent, calculator nearby), why
   today's topic matters with a true number from the Importance Map, and a promise ("no heavy theory, stay with me").
   Online class: no physical-room cues ("come in", "hands up").
1. **Branch moment** (about 45 seconds): a real kind of situation at a counter or desk, ending in a question with two
   or more possible answers on screen ("some of you think X, others Y"). No "in this video".
2. **The picture** (to about 3:00): the one stable picture for this idea (e.g. the bank's counter). The rule arrives
   as the answer to the opening question.
3. **Build** (to about 9:00): two or three steps, each with its own picture; the mind map grows a node at each step.
4. **Worked numerical(s)**: data on screen, each step written, calculator keys shown, answer boxed.
5. **Trap card(s)**: the classic wrong answer side by side with the right one, and why people fall for it.
6. **Practice**: "Pause now": three questions, then answers with the one-line reason.
7. **Map recap**: the finished map for this lesson, read in 30–45 seconds.
8. **Close**: a small homework ("draw this map tonight") and a goodbye that no other video uses.
- Every lesson states the **rule version** it teaches ("FEDAI Rules as at 31 December 2026", "RBI Master Direction as
  updated to …") in the opening card and on its PDF page.
- Illustrative rates, names and places are labelled "illustrative" on screen; we never present them as real data.

## Standard style (owner, 2026-11-21; model: `course/bfm/A/A1/script_class_sample.md`)
The teaching moves of `research/pedagogy/teaching_method.md`, kept tight:
- Lesson 12–15 minutes; chapters 3–5 minutes. About 1,600–2,000 spoken words plus holds.
- **One question to the learner per idea** (asked, a hold of at least 3 s, then the answer), not one per sentence.
- The common wrong belief is said aloud ("Many of you are thinking…") and broken in the next line.
- **One pause check per chapter** (2–3 quick questions, easy first, one twist) and a **"one thing to remember"** line.
- Each chapter (after the first) opens with one recall question from an earlier chapter.
- At most **one light line per chapter**; "write this down" at most once per lesson; voice tags sparing.
- Plain words: one new term at a time, said with its meaning; no line over 25 words.
- Close: a mixed check, the map filled from memory, a small homework, a question that leads into the next lesson.
- Drills (N) and case walk-throughs (C) keep the moves but spend the time on sums and steps.
The owner judges this style on the first built video; any change is then a revision pass over all scripts.

## Voice and words (full rules: PLAYBOOK §5b)
- One AI teacher voice, an online class: warm-up, check-ins at each chapter break, the teacher says the learners'
  thoughts aloud ("some of you… others…"). Plain, warm Indian English for a bank officer studying after work on a
  phone. Talk to one person.
- Each script header lists its `greeting` and `goodbye`; check the module's other scripts so none repeats.
- Money in the deal's currency: trade, LC, export and import lessons in US dollars; rupee lessons in rupees.
- One idea per sentence; a short line, then a longer one; nothing over 25 words.
- Explain once, then recap with a picture; never re-explain the same thing from scratch.
- No "Sir" persona, no claims that a human teacher is speaking; the narrator is a synthetic voice (owner, 2026-11-14).

## Numbers
- Rates quoted in direct terms, rupees per unit of foreign currency (FEDAI Rule 5.7), 4 decimals unless the
  question says otherwise; rupee amounts to 2 decimals (banks may round per policy, Rule 5.8).
- Every method must work on the IIBF-allowed calculator (+ − × ÷ % √ Tax+ Tax−, 12 digits).
