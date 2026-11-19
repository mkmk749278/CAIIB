# CAIIB Playbook

How this project is done and why. `CLAUDE.md` has the rules; this file has the reasons, the history and the
measurements. Add new lessons to the section they belong to, dated, with the reason.

## 1. Origin (2026-11-14)
- The owner pointed at the YouTube channel **CAIIB WITH ASHOK** and asked whether we could make JAIIB/CAIIB classes
  that are "more optimised, more refined, easy to understand, with mind maps, the most visual way to remember
  everything". Goal stated by the owner: **"Everything should be next gen of JAIIB and CAIIB content. Not simply copy
  him."**
- The owner's first idea was to buy Ashok's courses, put all his videos in Drive and have Claude analyse every
  class, then cover all he covers plus what is missing. **Declined**: bulk-copying a paid course (which blocks
  downloads and screenshots on purpose) to build a competing product breaks the platform's terms and risks a
  copyright claim. It is also the weaker method: one teacher's choices are an opinion, while recalled exam
  questions across many cycles measure what IIBF actually asks. The owner accepted the evidence-based method.
- An attempt to log in to the owner's Classplus account (web.classplusapp.com, org code SVKJM) from the cloud
  stopped when Classplus rejected the automated browser on purpose (same request works from a plain tool, fails as
  "HeadlessChrome"). We do not get around blocks. No OTP was sent; the browser profile was deleted.
- Paper order: **CAIIB BFM first** (owner, 2026-11-14), the hardest and most in-demand paper.

## 2. The market (research 2026-11-14; details in `research/market/competitors.md`)
- **CAIIB WITH ASHOK** (Ashok Banking Institute): about 119K YouTube subscribers; Classplus app with 4.9 stars from
  about 9K reviews (owner's screenshots). One CAIIB June 2026 batch: ABM 286 videos, BFM 425, ABFM 163, BRBL 129, plus
  PDFs and tests. Prices seen 2026-11-14: Rs 8,000 for three papers, Rs 10,000 (Dec 2026) to Rs 17,000 (June 2027)
  for all four, frequent offers. Faceless for most of his history (owner: more than 10 years), shows his face now.
- **His strengths** (to match): one question per screen; a fixed checklist before a forex sum (spot, premium,
  margin); "think from the bank's side"; real branch situations; personal doubt-solving on WhatsApp; huge volume
  and live classes; trusted for making BFM numericals easy.
- **His gaps** (our openings): Hindi only (South Indian officers ask for English); JAIIB papers thin; plain
  slides with pen marks, no diagrams or animation, few mind maps; 7–12 minutes on one slide, 45–60 minute videos;
  reads textbook paragraphs and translates; long tangents; RBI updates dumped just before exams; IT & Digital
  Banking and Central Banking electives thin; a live slip on forward premium took two minutes to correct.
- We cannot beat his volume or live teaching with a weekly production process. We win on clarity, pictures, English,
  JAIIB, evidence-based focus and updates.
- **Reliability note**: two Gemini reports supplied much of this. Their direction held up, but many video links
  were wrong (the same video ids repeated on different videos) and some claims were guesses. Use them for the big
  picture only; never quote their numbers as fact.

## 3. Exam facts (IIBF CAIIB Rules & Syllabus 2026)
Source: https://www.iibf.org.in/documents/RulesSyllabus/2026/FlagshipCourses/60%20-%20CAIIB_24.07.25_Change_Final%20Website_23.02.2026.PDF
- Four compulsory papers (ABM, BFM, ABFM, BRBL) + one elective (Rural Banking, HRM, IT & Digital Banking, Risk
  Management, Central Banking).
- Each paper: 100 objective questions, 100 marks, including case studies/caselets; IIBF may vary the number.
  Some numerical questions have **no options** (answer keyed in). Online only. **No negative marking.** 2 hours.
- Pass: 50/100 per subject, or at least 45 in each with 50% aggregate in one attempt. Credits kept within the time
  limit (5 attempts within 3 years).
- Medium: Hindi or English.
- **Cut-off for regulations**: March–August exams use developments up to the previous 31 December;
  September–February exams use developments up to 30 June. So the Nov/Dec 2026 exam uses rules up to 30 June 2026.
- **Calculator**: battery portable, up to 8 functions (+, −, ×, ÷, %, √, Tax+, Tax−), 12 digits; scientific
  calculators are unfair means. Every method we teach must work on this calculator (powers by repeated
  multiplication, √ for volatility scaling).
- IIBF itself says the courseware is not the only source: RBI Master Circulars/Directions, IIBF Vision, Bank Quest,
  and the websites of RBI, SEBI, BIS, IRDAI, FEDAI matter for the exam.

## 4. The Importance Map method
- **Why**: the syllabus is huge; candidates and teachers guess what matters. Recollected questions across many
  cycles show what IIBF really asks, how often, and in what form (theory, numerical, case study).
- **Data** (BFM, built 2026-11-14): 453 recalled items from 7 cycles (Jun 2023, Dec 2023, Jul 2024, Dec 2024,
  Jun 2025, Dec 2025, Jun 2026), from Bankersadda, PW and Oliveboard shift analyses and one Bankersadda memory-based
  PDF. Source keys in `research/bfm/sources.csv`.
- **Steps**: extract items (`build_items.py`), tag each to a topic cluster mapped to official IIBF units
  (`tag.py`, first matching rule wins; review untagged and mis-tags by eye every time), score (`score.py`).
- **Tier rule (v1)**: A if seen in 6+ of 7 cycles with 15+ mentions, or 25+ mentions; B if seen in 4+ cycles;
  C otherwise. Tune when more data arrives.
- **Known biases**: recollections over-report memorable items (numericals, case studies, odd facts) and under-report
  plain theory; list lengths differ by site and cycle; a case study counts once but carries 3–5 questions; the
  sources are coaching sites, not IIBF. So a mention count is a signal, not a mark count.
- **Gaps to fill next**: full-question memory papers for more cycles (older Bankersadda PDFs sit behind lead forms;
  do not hand over personal details to unlock them without the owner's say), community sources (Telegram channels
  are where candidates share most; public channel previews only), and the RBI changes up to each cut-off.
- **Cross-check with full papers (2026-11-14)**: the Oliveboard Dec 2025 memory-based paper (100 questions) puts the
  same four clusters on top (forex sums, NPA, capital adequacy, duration/VaR), confirming Tier A. But its module mix
  is A 28 / B 30 / C 27 / D 15, while topic lists give C only 16%: **plain treasury theory is under-recalled**, so
  Module C gets more weight than the mention count suggests. The undated Oliveboard set contains off-syllabus items
  (escrow, mutual-fund expense ratio, cash deposits): "memory-based" PDFs are partly padded; weigh them below
  shift-wise topic lists.
- **Community sources (2026-11-14)**: public Telegram previews (`t.me/s/<channel>`) work from the cloud, but the
  channels found (Adda247 BFM, CAIIB WITH ASHOK) are promotions and class links. Real recall-sharing is in groups
  only the owner can see: a Cowork task (`docs/desktop_tasks.md`).

- **Laptop agents can invent (2026-11-14)**: Cowork's first batch (Telegram recalls, YouTube analyses, older
  papers) could not reach its sources and filled the gaps with plausible but unsourced text (fake YouTube ids,
  "reconstructed" papers). None of it is used (`research/bfm/inbox/README.md`). Every laptop task now demands a
  working link or file for each claim and an explicit "could not do".

## 4a. Regulatory changes (how to find them)
- **IIBF Vision** (monthly, https://www.iibf.org.in/iibf-vision) is IIBF's own digest of developments and an exam
  source named in the rules. Read every issue up to the cut-off; `tools/research/vision.py` pulls BFM-relevant items.
  File names are irregular; take them from the listing page, do not guess.
- **RBI Master Direction index** (https://rbi.org.in/Scripts/BS_ViewMasDirections.aspx) gives the current rulebook
  in one request. Since 28 Nov 2025 commercial-bank rules live in about 32 function-wise MDs; cite those names.
- **RBI rate-limits automated requests** (HTTP 418 after repeated form posts on the notifications page,
  2026-11-14). Never loop on RBI pages; fetch single pages slowly, and hand a rate-limited job to a new cloud session
  (possibly a new IP) before any laptop tool.
  Single pages fetched 8–10 seconds apart worked without a block (2026-11-14, about 10 pages); RBI's FEMA
  notification pages (`BS_FemaNotifications.aspx?Id=`) carry the exact regulation text and footnoted amendment history.
- **Cut-off traps** are themselves exam material and lesson content: e.g. the export realisation period went
  9 → 15 months (Dec 2025) → 9 months (5 June 2026, before the 30 June cut-off) → new regulations from 1 Oct 2026.
  Rules issued before the cut-off but effective later (ECL, new credit-risk SA, both from 1 Apr 2027) are taught as
  "issued, coming"; the old rule remains the answer until then.

## 5. Lesson design (draft, to be proven in the pilot)
- Open on a real branch situation with a question (A1: a father sending a university fee and a shrimp exporter with a
  sight bill at the same counter, four rates on the board). The rule arrives as the answer. Never reuse a
  competitor's example.
- One stable picture per idea, reused across lessons: e.g. **the bank's counter** for forex (currency coming in =
  bank buys = lower rate, green; going out = bank sells = higher rate, red); **the rate ladder** for margins and
  premium/discount (always moves in the bank's favour); a **balance scale** for base vs quote currency (multiply or
  divide).
- A **mind map that grows** as the lesson goes, the same layout every time for that module (place memory).
- Numericals: one sum in 2–3 minutes, every step on screen, IIBF-allowed calculator keys shown; three variants of
  the same sum; a "trap" card for the classic mistake (customer's view vs bank's view; margin add or subtract;
  multiply or divide).
- Explain once, then a short animated recap; no repeated re-explanation, no tangents, no reading paragraphs aloud.
- End: the finished map, 3 practice questions ("pause now"), and the matching PDF page.
- Learning science behind it: dual coding (words + pictures), chunking, retrieval practice, spaced revision,
  worked examples, interleaving of similar-looking problems.

## 5a. Video design: what the research says and how we use it (2026-11-14)
Creativity comes first; the research below is the floor we build on, not the ceiling (owner, 2026-11-14: "first
preference is your creativity").

| Finding | Evidence | How our lessons use it |
|---|---|---|
| **Misconception first** beats plain explanation: state the wrong idea learners hold, then break it | Muller et al. 2008 (Newton's laws videos): refutation d ≈ 0.79, dialogue d ≈ 0.83 vs plain exposition; plain videos even raised confidence in wrong ideas | every lesson opens on the wrong answer most candidates give (from our recall data and doubt threads) and makes the viewer commit to an answer first |
| **Dialogue** of a learner and an explainer | same study (largest effect) | two voices: a teacher (conversational, §5b), and a young officer who says the tempting wrong answers aloud; the viewer argues along |
| **Coherence**: cut everything that is not needed | Mayer 2021: median d ≈ 0.86, 18 of 19 tests | no decorative stock footage, music under speech kept low, no logo animations mid-lesson |
| **Signalling**: highlight what matters | d ≈ 0.46 | one colour code across the module (green = bank buys, red = bank sells, amber = reversing) |
| **Segmenting**: short, learner-paced parts | d ≈ 0.67–0.77 | each lesson in 3–4 chapters of 2–5 minutes with chapter cards; the app can serve chapters separately |
| **Short beats long** | Guo, Kim, Rubin 2014 (6.9 million edX sessions): engagement drops after about 6 minutes; Khan-style drawing beats slides | chapters under 6 minutes; things are *drawn and built* on screen, never slides of text |
| **Prediction prompts**: ask before telling | anticipatory prompts promising but less studied (Renkl et al.) | "Pause: which rate?" with a visible countdown before every reveal |
| **Worked example → faded example → own try** | worked-example effect; fading with prompts (Atkinson, Renkl & Merrill 2003); video examples alternated with practice beat practice alone | sum 1 fully worked; sum 2 with steps blanked for the viewer; sum 3 the viewer's alone |
| **Concrete → picture → abstract** | concreteness fading (Fyfe & Nathan); analogies help finance learners with less background (IZA 2025) | real counter scene → icon (arrows, ladder) → formula; the picture stays on screen while the formula appears |
| **Retrieval and spacing** do the remembering, not length | spaced retrieval research; embedded questions g ≈ 0.52 (Ploetzner 2024, secondary) | every lesson ends with 3 questions; the next lesson opens with a 30-second recall of the last one |

**Our signature devices (Module A)**
- **The counter, from above**: the whole module happens across one counter; the camera can *flip* to the customer's
  side to show why intuition fails (the flip is the visual for "amber: reversing a deal").
- **The rate ladder**: a vertical scale with the interbank quote in the middle and four rungs; every rate in Module A
  is a position on it.
- **The calculator**: an on-screen 8-function, 12-digit calculator (the IIBF-allowed kind) presses the real keys.
- **The officer**: a young forex officer at the counter voices the common wrong answers; the narrator never mocks,
  just shows the counter again.

## 5b. Voice: a class, not a documentary (owner feedback on A1 r1, 2026-11-14)
The owner watched the A1 r1 cut and said the narration "feels like a documentary or story narration, it's not like a
class. A class needs to be more conversational, in the most general speaking way. It should not feel boring at all."
The cause was the writing: v2 used voice-over style (short dramatic fragments, "Same counter. Same dollar. Same
morning.", a narrator describing scenes) and a calm narration voice read as one long block. Officers studying in the
evening want to feel someone is *talking to them*. From A1 v3 on, every script follows these rules:
- **Talk to one person across a table.** "Okay, let's start…", "Let me ask you…", "See, here's the thing…". Use
  "you" and "I"; the teacher is an AI voice with no name or back-story and never claims to be a person.
- **Spoken English, not written English.** Contractions (it's, that's, don't), full natural sentences, Indian
  classroom phrasing ("into" for times, "simple", "right?"). No three-word dramatic fragments, no trailer lines.
- **Ask, wait, react.** Every question gets a reaction after the answer ("Got it? Good.", "Did you? Great."). The
  teacher answers Meera warmly ("Good try, Meera"), never mocks.
- **Say the rule twice in two different ways** (once exact, once as a hook: "In means buy, out means sell").
- **Signpost like a teacher**: "Now be careful here, this is where people slip", "Don't worry about this now".
- **Close like a class**: "That's it for today… see you there."
- **Voice choice**: a conversational/educational voice, not a narration one; stability around 35–45% so the pitch
  moves; generate per chapter, not the whole lesson in one block, and listen to the first minute before the rest.
- Facts, numbers, rule versions and line ids do not change when only the voice style changes.
- **A live class, not a talk to camera** (owner on v3, same day: "he is teaching in a live class with students
  inside the class; not directly into content; connect them to the class first, and in between also"). So every
  lesson has: a **warm-up** before the first fact (greet, "long day?", phones on silent and calculator out, ask the
  room a question, say why today's topic matters with a true number from the Importance Map, promise "no heavy
  theory, stay with me"); a **check-in at each chapter break** (a student's one-line reaction, a joke, "stretch for
  a second", "I need full attention for this part"); small check-ins inside chapters ("Everyone with me so far?",
  "Everyone, listen to this one carefully"); a **warm close** with a small homework and "see you in the next class".
- **An online class, not a classroom** (owner, same day: "wishes are fine, no fake 'come in, come in'; they are
  in class but not a physical class"). Greet and connect, but no physical-room cues: no "come in, take your seats",
  "hands up", "I can see your faces", "phones on silent". Use "welcome to the class", "notifications on silent",
  "just think about it", "I know it's late".
- **One voice: the teacher voices what the students think** (owner, same day, on v4: "only teacher narration is
  better, a single voice; but what students think, we tell: some think this is correct and some that"). v4 tried two
  student characters (Meera, Ravi) in a multi-speaker dialogue; the owner preferred a single voice. So the teacher
  says the split out loud: "I know what many of you are thinking: X. And a few of you are thinking Y." Then the
  reveal. This keeps misconception-first and prediction (§5a) without extra voices. On screen: two thought bubbles,
  "Some of you" and "Others", never made-up percentages. Disclosure card: "The voice in this lesson is AI-generated."
  The teacher stays an unnamed AI voice with no back-story, never "Sir".
- New lines added for class moments get a letter suffix (N00a, N15a, N04a) so the old line ids and video code stay.
- Voice text is built by `tools/video/voice_blocks.py`: parts of about 1,400–3,000 characters, one generation each,
  as Markdown and as a phone page with one Copy button per part (the owner records from the phone). With one voice
  each part is a single block; the tool still supports multi-speaker turns if a lesson ever needs them. ElevenLabs
  v3 expression tags (`[chuckles]`) are allowed sparingly; the page can strip them for other models.

## 6. Next-gen PDF (draft)
- One mind map per module; a traps page; a formula sheet with a worked example per formula; a rule-version stamp
  (which cut-off date it follows); a QR code to the lesson on every page; a one-page night-before sheet per module.

## 7. Decisions log
- 2026-11-19: owner: "first set up Google Drive… we keep the repo lite… see how the Creator repo accesses Drive for
  large files; secrets are in environment secrets." Done the Creator way (rclone, refresh token in the environment
  variable `GDRIVE_RCLONE_TOKEN`, pinned rclone fetched on first use); §8.
- 2026-11-19: owner: "prepare the exact order… then a plan for every video… total script for each video… lock all
  the videos… then build one by one; if anything changes, adjust the scripts." Why it is right: videos call back to
  each other (the counter, the road, "as you saw in A05"), so writing every script before building catches gaps and
  contradictions while they are cheap to fix, and one fact freeze at the cut-off covers the whole course. Order v2 in
  `research/bfm/course_plan.md` §3 (dependency order, teach once and link, effort follows marks); process §4.
  First exam the course can serve: May/June 2027 (cut-off 31 Dec 2026).
- 2026-11-15: owner: "Incoterms as next sample video; we don't continue the first sample, later." A1 parked (v5 audio
  and r2 cut wait). Incoterms chosen as sample 2: a short, self-contained topic (11 rules, one picture), asked in 3 of
  7 cycles inside the A-LC cluster (6 of 7), and a different kind of lesson from A1 (rules and a picture, little
  arithmetic), so it tests the format on a second type. Its picture, "the road" with a risk baton and a cost line,
  is reused wherever Incoterms appear (LC lessons, export finance).
- 2026-11-14 (later): build the full course before any publishing; a new YouTube channel only afterwards, for
  publicity and free samples; English only; paid course with free sample lessons; Claude decides the build order;
  start now. Claude does everything it can first; a new cloud session (possibly a new IP) when this one is
  rate-limited; the owner's laptop tools (Cowork, Gemini, Antigravity) only for what no cloud session can do.
- 2026-11-14: start with CAIIB BFM. Evidence-based Importance Map instead of copying a course. Synthetic voice is
  acceptable, honestly handled. Repo `mkmk749278/CAIIB` created with `main`; work lands by PR merged the same day.

## 8. Drive: where media lives (2026-11-19)
- **Why**: git is for text that changes and gets reviewed. Audio, renders and PDFs are big, binary and replaced
  whole; in git they bloat every clone forever. Cloud containers are wiped, so media must live somewhere durable that
  opens on the owner's phone: Drive.
- **How**: `tools/drive/drive.sh` (rclone v1.71.1 downloaded into gitignored `.cache/`; token from the environment
  variable `GDRIVE_RCLONE_TOKEN`, rebuilt from its refresh token because the app's variable field can strip the JSON).
  Root = Drive folder `CAIIB/` (id in the script). Large files go up with rclone; the Drive connector can carry small
  text files only.
- **Layout**
  - `CAIIB/_inbox/`: anything the owner sends from the phone (voice parts, screenshots, PDFs); Claude files it.
  - `CAIIB/BFM/<video id>/voice/`: the owner's generated audio (e.g. `A07/voice/incoterms_1.mp3`); `lines/`: cut
    lines and word timings; `renders/`: review cuts (`r1_720p.mp4`) and masters. Video ids follow
    `research/bfm/course_plan.md` v2 (A01, A07…), even where the repo folder keeps an older name (`A/A1`,
    `A/A9_incoterms`).
  - `CAIIB/BFM/_shared/`: sound effects and template assets; music from the shared `Music-Library/` (Creator).
  - `CAIIB/BFM/_downloads/`: source documents we fetched (RBI PDFs, IIBF rules), so facts can be re-checked.
  - `CAIIB/BFM/research/`: results from the owner's laptop agents, one dated folder per batch with a `VERDICT.md`
    (Cowork's 2026-11-14 batch moved here from `CAIIB BFM Research/` on 2026-11-19; files unchanged, verdict unchanged).
- **Rendering on GitHub runners** (owner, 2026-11-19; 6 runners like Creator): `.github/workflows/render.yml` (Actions
  → render → Run workflow, from the GitHub app) splits the lesson over up to 6 runners (`tools/video/render_part.mjs`:
  each renders a slice as silent video; a 7th renders the sound), joins them without re-encoding,
  normalises loudness to -16 LUFS and uploads the MP4 to `CAIIB/BFM/<video>/renders/`, printing the Drive link in the
  run summary. It needs the **repo secret `GDRIVE_RCLONE_TOKEN`**, set once from Termux (a fresh rclone token straight
  into the secret, never shown in chat):
  `pkg install -y gh rclone && { gh auth status >/dev/null 2>&1 || gh auth login -h github.com -p https -w; } && rclone authorize drive | grep -o '{"access_token".*}' | gh secret set GDRIVE_RCLONE_TOKEN -R mkmk749278/CAIIB && gh secret list -R mkmk749278/CAIIB`
  Same as the Creator repo's render workflows. The cloud session itself uses the environment variable of the same name.
