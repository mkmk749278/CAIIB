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
  only the owner can see: an Antigravity task.

## 4a. Regulatory changes (how to find them)
- **IIBF Vision** (monthly, https://www.iibf.org.in/iibf-vision) is IIBF's own digest of developments and an exam
  source named in the rules. Read every issue up to the cut-off; `tools/research/vision.py` pulls BFM-relevant items.
  File names are irregular; take them from the listing page, do not guess.
- **RBI Master Direction index** (https://rbi.org.in/Scripts/BS_ViewMasDirections.aspx) gives the current rulebook
  in one request. Since 28 Nov 2025 commercial-bank rules live in about 32 function-wise MDs; cite those names.
- **RBI rate-limits automated requests** (HTTP 418 after repeated form posts on the notifications page,
  2026-11-14). Never loop on RBI pages; fetch single pages slowly, and send bulk checks to Antigravity on the owner's
  desktop.
  Single pages fetched 8–10 seconds apart worked without a block (2026-11-14, about 10 pages); RBI's FEMA
  notification pages (`BS_FemaNotifications.aspx?Id=`) carry the exact regulation text and footnoted amendment history.
- **Cut-off traps** are themselves exam material and lesson content: e.g. the export realisation period went
  9 → 15 months (Dec 2025) → 9 months (5 June 2026, before the 30 June cut-off) → new regulations from 1 Oct 2026.
  Rules issued before the cut-off but effective later (ECL, new credit-risk SA, both from 1 Apr 2027) are taught as
  "issued, coming"; the old rule remains the answer until then.

## 5. Lesson design (draft, to be proven in the pilot)
- Open on a real branch situation with a question ("A customer returns a USD 1,500 draft for cancellation. 82.40 or
  82.80?"). The rule arrives as the answer.
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

## 6. Next-gen PDF (draft)
- One mind map per module; a traps page; a formula sheet with a worked example per formula; a rule-version stamp
  (which cut-off date it follows); a QR code to the lesson on every page; a one-page night-before sheet per module.

## 7. Decisions log
- 2026-11-14: start with CAIIB BFM. Evidence-based Importance Map instead of copying a course. Synthetic voice is
  acceptable, honestly handled. Repo `mkmk749278/CAIIB` created with `main`; work lands by PR merged the same day.
