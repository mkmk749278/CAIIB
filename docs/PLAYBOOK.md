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
  C otherwise. Tune when more data arrives. **Since 2026-11-20 a tier sets the amount of practice and drills, never whether
  a topic is taught: every syllabus sub-topic is taught to exam depth.**
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

- **2026-11-20: syllabus first, not recall first.** Owner: "What you did is only covering content based on previous
  questions? We need to cover the full syllabus and required depth, not only previous questions; this is a CBT exam,
  we don't even get 10–20% of questions repeating." Right: a recall list measures what candidates *remember*, from a
  large question bank, and the v2 plan built on it had missed three official sub-topics outright (the forex market,
  factors determining exchange rates, the exchange-rate mechanism) and crammed others into overloaded videos. So the
  official syllabus split into its 195 sub-topics (`research/bfm/syllabus_official.md`) is now the scope, mapped
  row by row to videos in `research/bfm/coverage.csv`; the course plan became v3 (A00, A19b, A22, B13b added). The
  Importance Map keeps its use: style of questions, order and amount of practice, and a check. Tiers no longer decide
  whether a topic is taught, only how much practice it gets. The IIBF/Macmillan courseware is not available to us
  (the owner has no copy; the only full contents pages online sit in pirated PDFs, which we do not use), so depth is
  set by the syllabus wording, the primary sources and the exam's question forms, and checked by the module exam
  test (target 75+).

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
- **IIBF Vision is a lead, not a source (2026-11-20).** The Nov 2026 issue said hedging without proving the
  underlying exposure is allowed "up to USD 100 million"; RBI's press release of 10 Oct 2026 had cut it to USD 5
  million. Vision issues lag about a month (the November issue covers October). Every number goes into a lesson
  only after it is read in the RBI, FEMA or FEDAI text.
- **Finding RBI pages without tripping the rate limit (2026-11-20):** the notifications and press-release listing
  pages show only recent items; a web search limited to rbi.org.in finds older circulars and press releases
  (read the excerpts, then open the page once). About 10 single pages fetched 8–10 s apart caused no block.
- **Cut-off traps** are themselves exam material and lesson content: e.g. the export realisation period went
  9 → 15 months (Dec 2025) → 9 months (5 June 2026, before the 30 June cut-off) → new regulations from 1 Oct 2026.
  Rules issued before the cut-off but effective later (ECL, new credit-risk SA, both from 1 Apr 2027) are taught as
  "issued, coming"; the old rule remains the answer until then.

## 4b. Public class videos as a depth checklist (2026-11-20)
- **Why**: the syllabus lists topics but not how deep each goes, and the official courseware is not available to us
  (§4). Public YouTube classes show which sub-points teachers cover under each syllabus topic and how deep they go.
  Owner: "we can also get syllabus and depth from YouTube videos; I can run Termux commands".
- **Rules**: captions only, as a checklist of sub-points and depth (definitions, sums, which rules are named). Where
  two independent teachers both go deeper than our plan, that sub-point goes into our plan. Facts still come only from
  primary sources (teachers can be wrong or out of date). Nothing is copied: no wording, examples, numbers or
  questions. The caption files stay in Drive (`BFM/_downloads/class_captions/`), never in git.
- **First batch (2026-11-20)**, two teachers per module, English, 2025–26, fetched on the owner's phone:
  A `iJFpo1KxvwI` (Oliveboard, 6h46m), `WdahzvQFxjM` (JAIIB CAIIB Prep, 3h40m); B `RHRsSMD7jdo` (Oliveboard, 5h08m),
  `nT9q_w5BHng` (JAIIB CAIIB Prep, 4h17m); C `3JrJW-V0eB0` (Oliveboard, 4h52m), `GOTBkyj8alM` (JAIIB CAIIB Prep,
  3h30m); D `dKHPEkNXcjo` (Oliveboard, 3h39m), `z9sh93uXimE` (JAIIB CAIIB Prep, 3h32m). Each as `.en.vtt` and
  `.en-orig.vtt` (identical for these English videos).

## 4c. The content method in layers (2026-11-20)
- **Why layers**: the owner cannot judge the subject, there is no human beta group, and the official courseware is not
  available; so no single source can be trusted to decide the course. Each layer catches what the one before misses:
  the syllabus gives the scope; the **source documents** give the depth (IIBF's question writers and its book both
  draw on the same RBI/FEMA/FEDAI/ICC/BCBS texts, so a fact sheet of every testable point in them is the closest we can
  get to "what can be asked"); the **question blueprint** turns each sub-topic into every kind of question it allows,
  which is how unseen CBT questions are covered; public classes (several teachers) check that no common sub-point is
  missed and show which rules are commonly taught wrong; recalled questions show IIBF's style; JAIIB prerequisites get
  refreshers; three independent reviews (expert, examiner, beginner) and a module exam test (target 75+) prove it.
- **What the first full run taught (A00, 2026-11-20)**: fact sheet → script with cue sheet → three fresh reviewers
  (expert, examiner, beginner) → fixes → re-review, three rounds to ADOPT. The reviews caught one real teaching error
  the author had made with the rule text in hand: the FEDAI holiday rule ("known holiday → preceding working day")
  applies only to the delivery date of a merchant forward contract (Rules 1.4, 5.2), while spot simply skips holidays.
  They also caught a hook that was false under FEMA s. 2(h) ("foreign currency is the note") and a missing JAIIB
  refresher (balance of payments). Lessons: (a) reviewers must read the rule text, not our notes about it; (b) a
  beginner reviewer finds the undefined words an expert no longer sees; (c) count spoken words by joining wrapped
  lines (one reviewer's count missed continuation lines); (d) reviewers' suggested rewrites are checked too: the
  beginner's holiday rewrite repeated the same scope error.
- **What the first two class checks taught (2026-11-20)**: the v2 plan, built from recalled questions, missed three
  syllabus sub-topics outright and about 400 sub-points the classes cover; and the most popular classes teach outdated
  rules (old TCS slabs, pre-2026 ECB, CRR above 3%, 90% daily CRR, old LCR run-offs, IFR as capital). Teaching the rule
  as at the cut-off is part of our quality edge.
- Rules in CLAUDE.md ("What the course must cover"). Fact sheets live in `research/bfm/facts/`.

## 5. Lesson design (proven on two samples: A1 and Incoterms; template locked 2026-11-20)
- After a short warm-up (§5b), open on a real branch situation with a question (A1: a father sending a university fee and a shrimp exporter with a
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
| **Dialogue** of a learner and an explainer | same study (largest effect) | one teacher voice that says the learners' thoughts aloud ("some of you think X, others Y"; §5b, after the owner preferred one voice over a two-character dialogue) |
| **Coherence**: cut everything that is not needed | Mayer 2021: median d ≈ 0.86, 18 of 19 tests | no decorative stock footage, music under speech kept low, no logo animations mid-lesson |
| **Signalling**: highlight what matters | d ≈ 0.46 | one colour code across the module (green = bank buys, red = bank sells, amber = reversing) |
| **Segmenting**: short, learner-paced parts | d ≈ 0.67–0.77 | each lesson in 3–4 chapters of 2–5 minutes; chapter titles slide in while the teacher speaks (no silent cards since r4); the app can serve chapters separately |
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
- **"Some of you / Others"**: two faceless learners with thought clouds carry the common wrong answer and the right
  one; the wrong cloud fades and is crossed out. The teacher never mocks, just shows the counter again. (Replaced
  the first idea, a young officer character, when the owner chose one voice; §5b.)

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
- **Ask, wait, react.** Every question gets a reaction after the answer ("Got it? Good.", "Did you? Great."). A
  wrong guess gets warmth ("Good try, and many of you thought so"), never mockery.
- **Say the rule twice in two different ways** (once exact, once as a hook: "In means buy, out means sell").
- **Signpost like a teacher**: "Now be careful here, this is where people slip", "Don't worry about this now".
- **Close like a class**: "That's it for today… see you there."
- **A different greeting and a different goodbye in every video** (owner on Incoterms r4, 2026-11-19: "for each
  video we do different wishes, different off wishes"). Learners watch at any hour, so the default is time-neutral;
  "good evening" or "good night" only when the lesson is meant for an evening slot, and never in two videos running.
  Keep a small register per module (`greeting`, `goodbye` per video, in each script's header) so nothing repeats.
  Openings to draw from: "Welcome back, everyone." · "Hello, and welcome to today's class." · "Good to see you here
  again." Closings: "That's it for today, see you in the
  next class." · "Take care, and keep your calculator handy." · "Well done today, rest a little before the next one." ·
  "That's the class. Revise the map once, and I'll see you soon." Write new ones; do not copy a provider's sign-off.
- **Money in the currency the deal uses.** Trade, LC, export and import lessons use US dollars, because Indian trade
  is mostly invoiced in USD and IIBF's forex and LC sums are set in USD. Say "US dollars" the first time, "dollars"
  after that, and write "USD" on screen. Rupee lessons (NPA, CRR, capital) use rupees. Indian digit grouping
  (1,25,400; "one lakh twenty-five thousand") is fine for our audience in both, as long as one video does not mix
  styles.
- **Voice choice**: a conversational/educational voice, not a narration one; stability around 35–45% so the pitch
  moves; generate per chapter, not the whole lesson in one block, and listen to the first minute before the rest.
- Facts, numbers, rule versions and line ids do not change when only the voice style changes.
- **A live class, not a talk to camera** (owner on v3, same day: "he is teaching in a live class with students
  inside the class; not directly into content; connect them to the class first, and in between also"). So every
  lesson has: a **warm-up** before the first fact (greet, "long day?", notifications on silent and calculator out, ask the
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
- Voice text is built by `tools/video/voice_blocks.py --target 9000 --max 10000`: parts of about 9,000
  characters, never over 10,000, cut between lines (natural pauses), a chapter break preferred when one is near
  (owner, 2026-11-20: first "max 10000 where natural gap is there", then "keep around 9k"; chapter-only cuts gave
  about 5,000; earlier 1,400–3,000), one generation each,
  as Markdown and as a phone page with one Copy button per part (the owner generates each part in ElevenLabs from the
  phone). With one voice
  each part is a single block; the tool still supports multi-speaker turns if a lesson ever needs them. ElevenLabs
  v3 expression tags (`[chuckles]`) are allowed sparingly; the page can strip them for other models.

## 5c. The v2 look: a notebook that is drawn, and a map that grows (owner, 2026-11-19)
Owner on the Incoterms r1 cut: "voice is fine, but visuals look too plain; need more refinement; and what about mind
maps? Look at research and use your creativity as tutor." r1 was dark slides with small parts and a lot of empty
space, a road made of dots, and no mind map on screen.
- **What the research says** (on top of §5a): concept and knowledge maps help learning more than reading the same
  content as text (Nesbit & Adesope 2006 meta-analysis, about g = 0.6), most for learners who build or follow them
  step by step; a map that is *built* in front of the learner beats a finished one shown at once (segmenting,
  signalling); words placed next to the picture they belong to beat words apart from it (spatial contiguity, Mayer);
  drawing on screen beats static slides (Guo et al. 2014; Fiorella & Mayer on generative drawing). And a learner on a
  phone needs large shapes and type: nothing under about 24 px at 1080p.
- **What we do**:
  - **A notebook page**, not a dark slide: cream paper with a faint grid and a margin line; ink drawings; teacher's
    notes in handwriting with a gold marker stroke drawn under them (`video/src/kit/look.tsx`). Warm and familiar,
    like a good teacher's notebook, and it reads well on a phone at night.
  - **The road is the real journey** (`kit/journey.tsx`): Tiruppur factory → truck → Chennai crane → ship on the sea →
    Rotterdam crane → customs → the buyer's shop, with the 7 stations under it; the red baton is a flag planted at
    the risk station, the blue line an arrow that runs as far as the seller pays. Same places in every Incoterms
    lesson and in the LC and export-finance lessons.
  - **Rule cards** in four family colours (E slate, F teal, C amber, D magenta), so the family is seen before it is read.
  - **"Some of you / Others"**: two faceless learners with thought clouds; the wrong cloud fades and is crossed out.
  - **A mind map that grows** (`kit/mindmap.tsx`): six branches at fixed clock positions; each branch is drawn on when
    the lesson reaches it, the rest dim; a small "lesson map" card in the corner shows where we are (done ✓, now,
    next); the finished map is the recap and the homework ("draw this tonight").
- Style frames were shown to the owner before the full rebuild (`video/src/StyleFrames.tsx`).
- **Independent review (2026-11-19, `course/bfm/A/A9_incoterms/review_look_v2.md`): ADOPT WITH FIXES**, all applied
  in rev 1 of the kit: the misconception cloud now shows the script's real trap (N06a) with "Under CIF" in the
  question and a PAUSE countdown card; signal colours mean one thing only (scenery is neutral inks, greys, browns; map
  branches neutral, the current one ink); one-word station labels at 32 px, leaves 56 px, nothing under 30 px; the four
  families differ in lightness and each has a shape (E square, F triangle, C circle, D diamond), ink text on the light
  ones; cost label at the arrowhead ("freight to Rotterdam port"); the C-rule gap drawn as a bracket ("buyer's risk ·
  seller's freight"); "sea · air · road" and a plane for any-mode rules; title card with rule version, AI-voice and
  illustrative notes; map sub-title "whose risk? whose cost?"; balanced map growth, dim 0.55, 3 leaves of about 4
  words; the corner lesson map only at chapter cards; paper toned down for night viewing. Next (rebuild): every
  draw-on tied to its spoken word; one camera panning one page; three sound cues (flag thud, arrow whoosh, correct
  chime) and music only in warm-up, chapter cards and close; a "trap" sticky-note card.

## 5d. Smoothness: the picture follows the voice (owner on Incoterms r2, 2026-11-19)
Owner: "missing smoothness; scenes coming in between without sound in the audio gaps; the audio also feels not so
smooth; is it the 6 runners and the join? Visuals should follow the narration: while you are saying something, slowly
draw a line or curve from here to there till the sentence finishes, to lock the students. Get more tricks. Nowhere
should feel sudden changes, glitches, blanks."
- **Measured on r2** (not guessed): the 6-runner join is **not** the cause. All 31,369 frames are exactly 1/30 s apart
  and the sound is rendered in one piece by its own runner. The roughness is ours:
  - **Sound:** we cut the owner's two continuous takes into 77 lines and re-spaced them with a fixed 0.35 s gap.
    That throws away the natural rhythm and breaths of the voice. There are also 58 silences over 0.6 s and 16 over
    1.5 s (pause holds, chapter cards). They are dead digital silence, which sounds like a fault.
  - **Picture:** whole scenes switch at line starts with a 0.3 s fade, often inside those silences. Elements pop in
    on one word instead of growing with the sentence, and nothing moves during the holds.
- **Research behind the fix:**
  - Temporal contiguity: words and the picture they describe at the same moment (Mayer).
  - Cueing and visual guidance: a moving cue such as a pen, a pointer or a growing line tells the eye where to look
    (de Koning et al.).
  - Dynamic drawing: watching an instructor draw beats seeing a finished picture (Fiorella & Mayer).
  - Continuity: avoid cuts, since every cut costs a reorientation.
- **The rules from r3 on ("flow engine")**
  1. **The voice is never cut up.** Use the owner's continuous takes (generated in ElevenLabs) as they are. Open space only where the
     lesson needs it (pause countdowns, chapter cards). Fill it with room tone and a quiet music bed, faded in and out,
     never dead silence. Line ids map to the time inside the take, not to separate files.
  2. **Every visual is bound to a phrase, not a frame.** It starts on the first word of its phrase and *keeps
     drawing until the phrase ends*: an arrow grows across the sentence, an underline follows the words, a number
     counts up as it is spoken. Nothing appears in a single frame.
  3. **One page, one camera.** No scene cuts. The camera glides (1–1.5 s, ease in-out), starting just *before* the
     sentence that needs the new area. Earlier drawings stay on the page, dimmed, so the learner keeps their place.
  4. **No change in silence.** Transitions happen while the voice is speaking about the new thing, never in a gap.
  5. **Holds stay alive.** The countdown ring drains, the map draws on, a soft pulse. The screen is never frozen or
     blank.
  6. **More tricks:**
     - the caption highlights each word as it is spoken;
     - a pen tip leads every line that draws;
     - a dashed "ghost" when a question is asked, inked in when it is answered;
     - a soft zoom on the key word;
     - an object morphs into its icon (concreteness fading);
     - the map branch pulses when the lesson calls back to it;
     - the baton is *handed* hand to hand, not placed.
  - **Tools (built 2026-11-19 for r3):**
    - `tools/video/flow_voice.py` builds `voice.wav` from the takes. It splits each take only at
      the middle of the natural pauses, opens gaps for holds and chapter cards, swaps in re-generated lines, and writes
      the timeline JSON with `voice` and `gaps`.
    - The music bed is the shared library's `bp08_flow` (no drums), looped with 6 s crossfades. It sits at -21 dB, is
      sidechain-ducked under the voice (attack 120 ms, release 1.2 s) and rises in pauses (about -25 to -30 LUFS). It
      is mixed with ffmpeg into `mix.flac` (Drive `CAIIB/BFM/<video>/flow/`), and the composition plays that one track.
    - In `Incoterms.tsx`: crossfading `vis()/fo()/Fd` instead of `during() ? … : null` pop-ins; scenes crossfade
      over 18 frames with no dip; captions grey out the words not yet spoken and fade in and out; each rule's blue
      line draws across its whole phrase with a pen tip; the baton slides from station to station.
    - `tools/video/smooth_audit.py` runs in `render.yml` and writes its report to the run summary. Baseline r2:
      18 dead silences and 3 hard cuts, all in silence.
  7. **A smoothness audit before every render:**
     - no silence over 0.8 s outside planned holds;
     - no element whose opacity jumps more than 0.2 in one frame;
     - no camera move or scene change during silence;
     - no frame without something moving for more than 2 s.

## 5e. How a lesson becomes smooth: the r4 method (owner on Incoterms r4, 2026-11-19: "came out very good")
Four rounds on the Incoterms sample taught the method below. Every lesson is built this way from now on, and the
checks decide when a cut is ready, not a feeling.
- **1. Voice, as generated.** The owner generates each part in ElevenLabs v3 as one take (an AI voice). `tools/video/flow_voice.py` splits the takes
  only in the middle of natural pauses, opens space only for planned holds (prediction countdowns; no chapter gaps,
  `timeline.py` CHAPTER={}), swaps in re-generated lines, and writes the timeline JSON with every word's time. The
  music bed (shared library, no drums) is looped with crossfades and sidechain-ducked under the voice, then mixed
  into one `mix.flac` (Drive `CAIIB/BFM/<video>/flow/`). No dead silence anywhere.
- **2. A beat for every sentence (the cue sheet).** For each script sentence, the picture must answer: either a
  scene element appears or changes on that sentence (`sk(id, k)` = the frame of the k-th script sentence's first
  spoken word, matched on two words), or the teacher writes a short note (`B(id, k, text, x, y)`; `W(id, word, nth,
  …)` when the voice splits a sentence differently from the script, or when a number or a letter-code starts it).
  Notes are written left to right at the speed of their sentence, with a gold highlighter band, and stay until the
  next note or the end of their own line, whichever comes first (r4 let notes linger into the next scene, which is
  how they landed on station labels, quotes and the pause card). Things the voice names light up ("the teacher points": stations, documents). Map moments sit where the
  voice talks about progress ("that's part one", "deep breath"), and chapter titles slide in while the teacher
  speaks. From now on every script carries this cue sheet next to its lines, written with the script, not after.
- **3. No jumps.** Every appearance and disappearance is a crossfade (`vis/fo/Fd`, scenes overlap by 18 frames, never
  a dip to blank); the page holds still (no constant drift: it hid problems and blurs text on phones); a scene
  switch is a crossfade, never a hard cut.
- **4. The checks, every render** (all in `tools/video/`, all must be clean before the owner sees a cut):
  - `smooth_audit.py`: dead silence over 0.8 s, hard cuts, frozen screens (the planned countdowns are listed, not
    failed). Runs in `render.yml`.
  - `sentence_sync.py`: for all 335 sentences, does the picture change between 0.8 s before and 1.5 s after the
    first word (caption strip ignored), and is there any voice over a picture unchanged for more than 6 s.
  - `overlap_check.mjs` + `overlap_check.py`: the lesson rendered one layer at a time (scene, notes, caption), one
    frame per second; flags any second where a note's ink lands on the scene's ink, or the caption box hides scene ink.
  - `sync_sheet.py`: a frame every second (or every 4 s) with the words being spoken under it, for the owner and for
    any reviewer who wants to see it rather than read numbers.
- **What the numbers did** (Incoterms, sentences with no picture change of 335): r3 87 *measured with the drift on,
  which hid most of them*; r4 candidates 214 → 129 → 51 → 22 → 6 → 1 (borderline, a note is there). Each round:
  render on the 6 runners (≈7 min), run the checks, fix exactly what they list.
- **Mistakes that cost a round, so they are rules now:** script sentences and transcript sentences differ ("Okay,
  notifications on silent" is one spoken sentence, two in the script), so anchor on the script and match two words;
  a common first word ("The…", "So…") latches onto an earlier one; numbers and spelt codes ("13", "D-D-P") need a
  word anchor; notes placed in the bottom band collide with the caption and are not measured; note writing speed must
  follow the sentence, or a short sentence's note is still being written when the next begins.
- **Voice page = spoken lines only (2026-11-20, cost real credits):** `voice_blocks.py` predated cue sheets and
  copied each line's cue (">" lines) into the voice text, so the first A00 takes read the picture directions aloud
  (31 minutes instead of about 14.5; about 23,000 Creator characters lost). The tool now drops ">" lines and refuses
  to build if cue text leaks. Rule: before a voice page goes to the owner, its word count must match the script's
  spoken count (A00: 2,036), and a sample part is read through once.
- **Where notes go (from the r4 overlaps):** a note never outlives its line; never under a card (the practice notes
  sit above the pause card); never on a road label, a quote bubble or a card corner: use the free top band
  (y ≈ 100–150) or the space beside the scene; in the recap the notes are short and small, top-left, clear of the
  map's top branch; the map's bottom branch sits higher and puts its leaves under the pill in two short lines, so
  neither a two-line caption nor the Mode leaves touch them. The overlap check compares layers, so it cannot see two
  things inside one layer (map leaf on map leaf) or a note on a light card border: look at stills of every map
  and card moment as well. The overlap check counts scene ink below grey 120, so the sea and tinted fills are not mistaken for text.

## 5f. Voice: ElevenLabs, and the open voices we tested (2026-11-20)
- **Decision:** ElevenLabs v3 is the course voice (owner: "still ElevenLabs is the top notch… we can't compromise on
  quality"). The owner generates each part as one take on the phone. **Licence:** only audio made on a paid plan may
  be sold; the free plan (10,000 credits a month) has no commercial licence. **Cost:** a 14-minute lesson is about
  13,600 characters, so BFM (11–12 h) needs about 830,000 credits with retakes: the Creator plan (about $22 a month,
  about 121,000 credits, which roll over for two months) in the months we voice, about Rs 15–17k in all. The whole
  CAIIB (60–70 h) would be about Rs 70–80k, which is why the other papers wait until BFM earns.
- **Why we tested free voices:** that cost. Every candidate allowed commercial use and read the same Incoterms lines
  (comparison page https://claude.ai/artifact/KY1xtd9MeivaomRmcgHS38):

  | Model (licence) | Share of words a speech checker misheard | Runs on |
  |---|---|---|
  | ElevenLabs v3 (paid) | 1.3% | ElevenLabs |
  | Maya 2 Native, Maya Research, Oct 2026 (Apache-2.0) | 2.5–3.2% | a GPU (free Kaggle T4) |
  | Indic Parler-TTS, AI4Bharat (Apache-2.0) | 5.1–5.7% | CPU, slow |
  | Veena, Maya Research (Apache-2.0) | 7.0% | CPU here, GPU advised |
  | MeloTTS, Indian English voice (MIT) | 8.9% | CPU, fast |

  The checker writes numbers as digits, so part of every score is formatting, not error.
- **What we learned about Maya 2** (the fallback, tools in `tools/voice/`):
  - It runs on Kaggle's free T4 GPUs at about 2× real time (14.2 min of audio in 6.8 min; model load about 2.5 min).
    The Kaggle token sits in the network proxy, so `kaggle_maya.py` skips the Kaggle CLI's own token check.
  - It has **no pause or pitch tags**; emotion tags are best effort. Long text is split at sentence ends and joined
    with fixed gaps (0.15 s by default), which sounded rushed.
  - **Voicing sentence by sentence breaks the flow**: each call starts fresh, so the tone resets at every join
    (owner: "missing natural flow"). Keep one take per part.
  - **Internal chunks of 60 s skipped text** (18 words lost in one part); 25 s chunks were complete. Every take is
    checked word by word against the script (a speech checker plus a diff) before anyone listens.
  - Voices: Sreekar (male; English, Hindi, Telugu) sounded brisk; Vasant (mature narrator) is closest to ElevenLabs
    in pitch. An outside AI review (owner's PDF) and the owner's ear both put ElevenLabs first: warmer, calmer, more
    room around numbers.
  - Our pipeline makes the voice swappable: a new take goes through `flow_voice.py` and a render (about 10 minutes
    per video); scripts and visuals stay.
- **Resemble Enhance tested (2026-11-20, owner asked; MIT licence, usable commercially).** Two stages: a denoiser,
  then an enhancer that *re-generates* the waveform at 44.1 kHz guided by the input. Same 45 s of Incoterms part 1,
  files and spectrograms in Drive `BFM/_shared/tests/resemble_enhance/`:
  - ElevenLabs (128 kbps MP3, nothing above 16 kHz): the denoiser changes nothing (clean input); the enhancer adds
    16–22 kHz (+31 dB) and redraws 8–12 kHz. Phone speakers barely play that range, so little gain.
  - Maya 2 (24 kHz output, so nothing above 12 kHz): real gain. Vasant 4–8 kHz −24.8 → −19.6 dB, 12–16 kHz −54 →
    −35 dB (ElevenLabs −16.7 and −34.6), pauses 8–10 dB quieter, timing kept (envelope match 0.98–0.99). It cannot
    fix delivery (warmth, room around numbers), which is what made ElevenLabs win.
  - Speed: 45 s took 4.5 min on the session CPU. On a Kaggle T4 (`tools/voice/kaggle_enhance.py`, which takes a
    kaggle_maya job's output or a private dataset) a 15-min lesson enhances in about 8 min. Kaggle allows 2 GPU jobs
    at once; inputs mount at `/kaggle/input/<notebooks|datasets>/<user>/<slug>`; the package's `git lfs` weight
    fetch fails there, so the tool fetches them over the Hub API.
  - Full A07 in all three voices, enhanced, same loudness (−18 LUFS): Drive `BFM/_shared/tests/resemble_enhance/full/`.
    Maya takes word-checked against the script: nothing skipped (the flagged runs were numbers written as digits).
  - Not a way around the free ElevenLabs plan: the output is still that audio, so still non-commercial (owner asked;
    declined). Owner's ear decides whether enhanced Vasant is the fallback.
- **The enhancer can change words (2026-11-21, the owner heard it).** In A00 part 1 the raw take said "R, B, I, the
  government, the market"; the enhanced take said "Are I, a government, a market" (three speech checkers agree).
  Enhancing the same 10 s again, with the default settings and with `--tau 0.1`, `0.0` and `--lambd 0.5`, gave the right
  words every time: the generative stage is random, and slow spelt letters are where it slips. So every enhanced take
  is compared word by word with its raw take (`tools/voice/check_enhanced.py`), each damaged span is re-enhanced from
  the raw take (`--tau 0.1`, 10 s clip, about 1 min on the session CPU), checked, and spliced in at the middle of the
  pauses on either side (length unchanged, so the timeline stays). Checking only the raw take, as on 2026-11-21, is
  not enough. The full check of A00 found two more: "simply skipped" → "simply skate" and "cash or ready" →
  "cash already" (part 1, 5:11 and 5:44; small.en, medium.en and large-v3 compared). These two broke again on
  re-enhancing at `--tau 0.1`, `0.3` and with more steps: only `--tau 0.0 --lambd 0.0` (or `--denoise_only`) kept them.
  Short clips mislead the checker ("cash or ready" sounds like "already" even in the raw take when cut to 4 s): check
  repairs in 8 s of context with large-v3. Owner's ear on the whole repaired take is still the last check.
- **A00, the first lesson on the shared engine (2026-11-21).** The A07 timing engine (beats, notes, captions,
  scenes) now lives in `video/src/kit/flow.tsx` (`makeFlow(timeline, captionFixes)`), and Module A's pictures in
  `kit/forex.tsx` (counter, three-pocket coat, world strip, calendar boxes, see-saw, ledger, road, RBI's hand); A07
  keeps its inline copy as the locked template. Two fixes found on the way: `cut_lines.script_lines` read the cue
  sheet into the spoken text (now drops ">" lines, as `voice_blocks.py` does), and the music mix was never a tool,
  so `tools/video/mix_bed.py` now makes `mix.flac` with A07's settings (voice to -18 LUFS, bed -21 dB, ducked).
  Stills of every scene caught a see-saw tilting the wrong way and SVG text that ignored its colour (`fill`, not
  `color`): look at stills before the runners.
- **Enhanced takes only (owner, 2026-11-21).** "In Prithvi voice there is hissing noise while listening that
  irritates the ears, but after Resemble Enhance it's gone." The numbers above said little gain on ElevenLabs; the
  owner's ear on a phone says otherwise: the hiss in the raw take is what a listener notices over 15 minutes. So
  every take, and every re-generated line, goes through `kaggle_enhance.py` before `flow_voice.py`, which now
  refuses a path in a `voice/` folder or named `part_N.mp3` (`--raw-ok` for old tests only). The full chain, as the
  owner confirmed it: paid ElevenLabs plan → voice page, parts up to 10,000 characters (target about 9,000) so a part
  is one continuous take → owner uploads to Drive `BFM/<video>/voice/` → word check against the script → Resemble
  Enhance → `BFM/<video>/voice_enhanced/` → build.

## 6. Next-gen PDF (draft)
- One mind map per module; a traps page; a formula sheet with a worked example per formula; a rule-version stamp
  (which cut-off date it follows); a QR code to the lesson on every page; a one-page night-before sheet per module.

## 7. Decisions log
- 2026-11-21: **lessons are 12–15 minutes, in every module.** The two parallel sessions had drifted: Module A wrote
  tight lessons (10–15 min), Module B followed the A00 class edition (B01 about 35 min, B02 about 28). Asked, the owner
  chose "Tight 12–15 min" for every remaining lesson; B01 stays long as a comparison sample for the video stage.
- 2026-11-21: **style judged on video, not text.** Owner, shown a sample chapter: "With the read I can't tell. Once
  watching the video only I decide how it felt. So first continue to build the full BFM for each video." So every
  script is written now in one standard style (the A01 sample: teaching method, 12–15 min, one question per idea),
  and the owner's style verdict comes from the first built video; a change then is a revision pass, which is cheap
  because the facts, order and sums do not change with the style.
- 2026-11-21: **all scripts first; no recording, no video until then.** Owner: "before going to the 31 videos, we
  first complete the scripts for all our BFM videos. No audio recording, no video for now. We complete the scripts and
  audio blocks, then we get an idea what actually we are covering." Why: the owner's worry is one thing only: full
  syllabus, right content, right depth, explained the way bankers need, in simple words that are easy to remember. That
  can only be judged on the whole written course, not lesson by lesson while building media. Order per lesson: fact
  sheet → script with cue sheet (teaching method) → three independent reviews → fixes until ADOPT → voice page. The
  A00 builds (v3 and class edition) and the compare with public classes (31 Module A captions in Drive
  `BFM/_downloads/playlist_GdPR6Y/`) wait until the scripts are done. Same day, a lesson learned: recalled questions
  are memories, not papers; they show that a topic IS asked, never that one is not, so they set practice volume only
  (as decided 2026-11-20), never lesson length or what to leave out.
- 2026-11-21: **no AI-voice disclosure in the lessons.** Owner: "Why do we need to disclose that the voice is AI? Why
  give that feel to students? Remove the AI lines and source lines." The spoken line and the opening card are removed
  (A00 class edition c4, A00/A07 title cards). Kept: the teacher never claims to be a person, has no name and is never
  "Sir". Open point for publishing: platforms (YouTube's altered or synthetic content label, India's IT Rules on
  synthetically generated information) may require a label for AI audio; read the rules in force at launch and, if
  needed, put it where the platform asks (description or upload setting), not in the lesson.
- 2026-11-21: **enhanced voice only.** Owner: ElevenLabs paid, blocks up to 10,000 characters for continuous
  narration, upload to Drive, Resemble Enhance, "we use that after enhance only" because the raw Prithvi take hisses.
  Details §5f; guard in `flow_voice.py`.
- 2026-11-20: **independent review for content.** Owner: "Always take independent session review. I can't review
  the content because I don't have that much knowledge on that content: syllabus, what much to cover, deep
  research, books, official sites, web etc. You need to create content for our classes accordingly." Why it works:
  the author of a script cannot see its own blind spots, and the owner is not a subject expert, so a fresh agent with
  no stake in the text, the primary sources and the recall data is the content check. Precedent: A1 review r1
  (`course/bfm/A/A1/review_r1.md`) caught three rate-choice errors the author had missed. Every script now goes
  author → independent review → fixes → re-review until ADOPT (rule in CLAUDE.md, Current stage).
- 2026-11-20: **voice.** ElevenLabs stays; the Creator plan only in the months we voice, after all BFM scripts are
  written; the free plan is never used for anything sold. Maya 2 Vasant on Kaggle is the tested fallback. Details,
  costs and test results in §5f. Same day: regulatory updates to early November 2026 added (repo rate 5.50%, FERR,
  USD 5 million hedging limit; `research/bfm/regulatory_updates.md`).
- 2026-11-20: owner on Incoterms r5: "Video is fine" → the r4 method and v2 kit are the locked template for every
  lesson; scripts resume at A01. Owner: "We don't need to render in 4k right": right, **masters are 1080p**
  (`render.yml` scale 1), review cuts 720p. Why not 4K: the audience watches on phones (a 6-inch screen shows no
  difference above 1080p), the whole page is drawn for 1920×1080 (type ≥ 24 px there), YouTube and course hosts
  stream 1080p well on mobile data, and 4K would mean about 4× the render time and file size for nothing visible.
- 2026-11-19: owner on Incoterms r4: "it's came out very good", with three notes: text overlaps in places (→ the
  overlap check, §5e), a different greeting and goodbye in every video (→ §5b), and asked whether "dollars" is right
  (yes for trade lessons, → §5b). The r4 method is §5e.
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
    lines and word timings; `flow/`: the built voice track and `mix.flac`; `renders/`: review cuts (`r1_720p.mp4`) and masters. Video ids follow
    `research/bfm/course_plan.md` v2 (A01, A07…), even where the repo folder keeps an older name (`A/A1`,
    `A/A9_incoterms`).
  - `CAIIB/BFM/_shared/`: sound effects and template assets; music from the shared `Music-Library/` (Creator).
  - `CAIIB/BFM/_downloads/`: source documents we fetched (RBI PDFs, IIBF rules), so facts can be re-checked.
  - `CAIIB/BFM/research/`: results from the owner's laptop agents, one dated folder per batch with a `VERDICT.md`
    (Cowork's 2026-11-14 batch moved here from `CAIIB BFM Research/` on 2026-11-19; files unchanged, verdict unchanged).
- **2026-11-22: GitHub's runners are retired for rendering; renders move to Modal (owner).** GitHub removed the owner's Creator repo for rendering 4K video on its runners. GitHub's Actions terms allow its compute only for building, testing and shipping the repository's own software, and a video farm is not that, so the same could happen to this repo. No render, plate or Short runs on GitHub Actions any more, at any resolution; the workflows moved to `.github/workflows-retired/` and are kept only as the reference for the Modal port (the shard plan, the join, the loudness pass and the Drive upload carry over). The notes below on runners are history until the Modal pipeline replaces them.
- **Rendering on GitHub runners** (owner, 2026-11-19; 6 runners like Creator): `.github/workflows/render.yml` (Actions
  → render → Run workflow, from the GitHub app) splits the lesson over up to 6 runners (`tools/video/render_part.mjs`:
  each renders a slice as silent video; a 7th renders the sound), joins them without re-encoding,
  normalises loudness to -16 LUFS and uploads the MP4 to `CAIIB/BFM/<video>/renders/`, printing the Drive link in the
  run summary. It needs the **repo secret `GDRIVE_RCLONE_TOKEN`**, set once from Termux (a fresh rclone token straight
  into the secret, never shown in chat):
  `pkg install -y gh rclone && { gh auth status >/dev/null 2>&1 || gh auth login -h github.com -p https -w; } && rclone authorize drive | grep -o '{"access_token".*}' | gh secret set GDRIVE_RCLONE_TOKEN -R mkmk749278/CAIIB && gh secret list -R mkmk749278/CAIIB`
  Same as the Creator repo's render workflows. **Measured 2026-11-19** (Incoterms, 17:22 at 720p): one runner
  20 min; 6 runners + sound runner 6.5 min, same length (1042.2 s), clean decode, -16.3 LUFS. The cloud session itself uses the environment variable of the same name.
- **Phone (Termux) for what the cloud cannot reach (2026-11-20).** YouTube refuses the cloud container ("Sign in to
  confirm you're not a bot") even for captions; the owner's phone works. The pattern is the Creator repo's
  (`scripts/termux_fetch_to_drive.sh` there): one `curl … | bash -s -- …` line the owner pastes into Termux; the
  script installs what it needs (python, nodejs, rclone, yt-dlp), fetches, and uploads straight to Drive with rclone.
  The phone already has the rclone remote `creator` (Drive, the owner's account); CAIIB reuses it with a folder
  override, `creator,root_folder_id=1Yw1b2rwppOtup_eCRE5fLP0zLM9qAIXe:` (the CAIIB folder), so no second sign-in.
  Our script: `tools/drive/termux_fetch_to_drive.sh` (captions only; it must be merged to `main` first, because the
  phone fetches it from GitHub). Lessons from the first run: storage permission (`termux-setup-storage`) is only
  needed when files are saved to the phone's Download folder; yt-dlp warns about JavaScript runtimes and
  impersonation but captions still download (the script passes `--js-runtimes node`); if YouTube asks to sign in on the
  phone too, switching to Wi-Fi often clears it (Creator's note). Files that land in `_inbox/` are filed with
  `tools/drive/drive.sh move`.
- **Second run (2026-11-20)**: 6 of 15 videos came through; YouTube answered "429 Too Many Requests" for the rest
  because captions were asked for back to back. The script now waits 25 s between videos and retries failures once
  after two minutes. rclone also warned that its **shared Google Drive client id is being retired during 2026**:
  before it stops, the owner should create an own client id once (rclone docs, "Making your own client_id") and add it
  to the phone's `creator` remote and to `GDRIVE_RCLONE_TOKEN`'s remote; the Creator repo is affected the same way.
