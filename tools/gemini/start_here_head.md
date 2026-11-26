# START HERE · Gemini task for the CAIIB BFM course

The owner gives you one line: "Read START_HERE.md and do it for lesson <ID>". Treat it as a **task to finish
on your own**, start to end. Don't ask questions on the way: where you must choose, pick the safest option and note it
in the final report.

## Your files (Google Drive, folder `CAIIB/_gemini/skill_files/`, 9 files)
rules_and_style.md · teaching_method.md · example_lesson_A16b.md · syllabus_and_updates.md ·
model_deep_research_prompt.md · module_A.md · module_B.md · module_C.md · module_D.md.
Read the ones each step needs. The instructions at the end of this file ("THE SKILL") are your rules for the whole task.

## The lesson queue (course plan v4, 79 videos; owner, 2026-11-24: "do all lessons of all modules")
When the owner says "next", take the **next ONE lesson** from this queue that has no folder in Drive
`CAIIB/_inbox/gemini/` yet, do the whole task for it, then report and stop. **One lesson per turn, never a batch**
(2026-11-24: a batch run skipped Deep Research and wrote 4-minute scripts; all 12 drafts were rejected). Splits ("b"/"c" ids) are
**separate lessons**, each with its own plan in the module file.
- **Done, skip** (updated 2026-11-26): 00, A00–A22, C01–C09b, D01–D07b (all locked or saved as drafts; C05's draft
  sits in a folder named "C02", it is done), B01–B03 (the Module B session writes them). Ignore `_inbox/gemini/_rejected_*`.
- **Queue, in order (what remains)**: B04, B04b, B05, B06, B07, B07b, B08, B09, B09b, B10, B11, B11b, B12, B13, B13b,
  B14, B14b. Their plans are in `module_B.md` (from `course/bfm/B/plans_B.md`).
- **Not now**: module revisions (AR–DR), U01, X01: they are built after all lessons.
- If a lesson's folder already exists in `_inbox/gemini/`, skip it; never write two folders with the same id.

## Quality gate (Claude checks every lesson with `tools/gemini/gate.py`; a lesson that fails is thrown away)
1. **Deep Research must really run** for step 2, every lesson, every time. Writing the "report" from your own memory is
   not allowed. The report must list **at least 8 primary-source URLs you actually opened** (rbi.org.in, rbidocs,
   bis.org, fedai, indiacode, egazette, incometaxindia, sebi, ifsca, ecgc, …), each next to the rows it supports.
2. **Fact sheet at least 1,200 words**, every row with its paragraph number and source id.
3. **Script 1,600–2,000 spoken words, never over 2,100** (drills and cases at least 1,100). Count them. A short script
   fails, and so does a long one: 3,000+ words is a 25-minute video and breaks the 12–15 minute rule. Cut examples and
   repetition, never syllabus points. If the plan truly cannot fit, say so in the report instead of writing long.
4. **Calm voice**: at most a few exclamation marks in the whole script; never "gold", "pure", hype words.
5. **Never speak lesson codes** (say "last class", "next class", not "B07b" or "A19").
6. **Write every source as a full URL** (https://…) in the report and the fact sheet; a source name without a URL
   does not count.
7. **Folder name = the lesson ID exactly** (`_inbox/gemini/C05/`, never another lesson's folder).
8. If you cannot meet 1–3 (Deep Research unavailable, sources blocked), **stop and say so**. Do not save a thin draft.

## The task for lesson <ID>
1. **Deep Research prompt.** Do THE SKILL Task 1 for <ID>. (For A17, `model_deep_research_prompt.md` is already the
   prompt; use it as it is.)
2. **Research.** Run that prompt with Deep Research (Deep Research Max if you have it). **Mandatory** (quality gate 1). If you cannot start Deep
   Research yourself from this task, stop here, show the prompt in one code block, and tell the owner:
   "Paste this into Deep Research, then send me the report with: continue <ID>".
3. **Fact sheet.** THE SKILL Task 2, from the report.
4. **Lesson.** THE SKILL Task 3: `script_class.md`, `numericals.md`, `practice.md`, `map_nodes.md`.
5. **Self-check.** THE SKILL Task 4; fix every No.
6. **Save.** Save each output as its own Google Doc in Drive folder `CAIIB/_inbox/gemini/<ID>/` (create it), named
   `<ID>_deep_research_report`, `<ID>_fact_sheet`, `<ID>_script_class`, `<ID>_numericals`, `<ID>_practice`,
   `<ID>_map_nodes`, `<ID>_self_check`. If you cannot write to Drive, put all of them in one Doc you can export, each
   under its file name as a heading, and say so.
7. **Report** to the owner in at most 8 lines: what was saved where, what failed, the "Facts needed" list, and
   "Next: tell Claude 'check <ID> from Gemini'".
