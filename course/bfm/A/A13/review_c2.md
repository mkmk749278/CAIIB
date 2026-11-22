# A13 c2 · Independent re-review (fresh context)

- **Reviewer**: fresh-context agent, 2026-11-22. Read: `script_class.md` c2 (N001–N081 with cue sheet),
  `numericals.md` c2, `practice.md` c2 (P1–P23), the three c1 reviews (expert, examiner, beginner),
  `review_ack_c1.md`, fact sheet `research/bfm/facts/A4.6-A5.10_A13.md` (F1–F31, Leads), `course/spec/lesson_spec.md`,
  `research/pedagogy/teaching_method.md`, A12 `script_class.md` N074–N075 and `numericals.md` (homework link),
  `course/bfm/greetings.md`. Format model: `A12/review_c2.md`.
- **Checker**: `python3 tools/check/import_bills.py` → 24 lines, **all OK** both ways (Q1, Q1b, V, Q2 incl. dates,
  Q3, HW, P8, P9, P10, P21).
- **Primary texts fetched 2026-11-22** (curl, browser User-Agent; read as data):
  - FEM (Export and Import of Goods and Services) Regulations 2026 (rbi.org.in Id=13277, amended to 2 Nov 2026):
    regs 4(2) second proviso (₹10 lakh closure, quarterly bulk), 9 (contract period, AD extension), 10(2)–(4) (same AD;
    genuineness; AD's own thresholds → SBLC/guarantee; interest on delayed import payments ≤ TC all-in-cost ceiling),
    11 (no advance for gold or silver "save as otherwise provided in the … Directions"), 12 (repatriate; future
    advances against SBLC / international bank guarantee / AD guarantee against counter-guarantee), 16 (MTT: ≤ 6
    months either way, AD may extend; seller/buyer only; EDPMS and/or IDPMS), 18(1)(c), (d) (non-EDI 5 working days;
    services: not a resident individual and > ₹10 lakh, 2nd Amendment fn 12), (e)–(k). **All c2 lines match.**
  - A.P. (DIR) 20, 16 Jan 2026 (Id=13278): para 4 and the Annex. Import list items 64–66 (IDPMS 2016–17) superseded;
    **A.P. (DIR) 04/2022, 07/2023 and 14/2024 are not in the Annex** (only the Dec 2023 CIMS/XBRL gold-statement
    circular, item 69, is).
  - **A.P. (DIR) 04, 25 May 2022** (RBI/2022-2023/57): ADs may allow **Qualified Jewellers** (IFSCA-notified) to remit
    advance payments **for eleven days** for import of **gold through IIBX**; unutilised advance back to the same AD
    within eleven days; bill of entry to that AD; no leverage beyond the advance.
  - **A.P. (DIR) 07, 10 Nov 2023** (RBI/2023-2024/83, Id=12565): same eleven-day advance for Qualified Jewellers for
    **silver** through IIBX, on DIR 04's conditions.
  - **A.P. (DIR) 14, 31 Jan 2024** (RBI/2023-24/118, Id=12604): same for **valid TRQ holders under the India-UAE
    CEPA**, **gold only**, through IIBX against the TRQ.
    → N019a, its note, F9a and P6's answer are right: gold and silver both covered for QJs; CEPA TRQ for gold only.
  - ECB-TC Master Direction (id=11510, "Updated as on September 08, 2026"), Part II: para 13; 14(iii) USD 150 m (oil/gas
    refining & marketing, airline, shipping) / USD 50 m; 14(iv) lenders and Note (foreign branches/subsidiaries of
    Indian banks: FCY TC only; FIs in IFSCs); 14(v) 3 years capital, 1 year or operating cycle whichever is less,
    shipyards 3 years, from shipment; 14(vi) +300 new / +350 old LIBOR→ARR / INR +250; benchmark definition (6-month
    ARR; G-sec of corresponding maturity); 14(ix) INR→FCY not permitted; 16.1 AD guarantee ≤ TC amount and period,
    footnote 7 "Issuance of LoU / LoC for Trade Credits … by AD Category-I banks is not permitted"; 17.1 Form TC by
    the 10th. **All c2 lines and cards match.**
  - FEDAI Rules 10th ed. (updated 20 Aug 2026) PDF: 3.1(a)–(b) (hedge rate, else bill selling; crystallisation "same as
    above"), 3.2(a) (commercial rate as on domestic advances; no start day), 3.3 ("as per the stated policy of the
    bank"), 5.4(iii) (retirement/crystallisation, whichever is earlier). **Match.**
  - Old Import MD C.10(ii) and footnote 37 (from the copy already fetched this session): separate BEF statement "till
    the half year ended December 2017 and discontinued thereafter". N063 card ✓.
  - Not re-fetched: old FEDAI "10th day" (an older edition; the fact sheet marks it a lead, and the script uses it only
    as "older books"); FTP 2.05; Customs Act s. 46; ACU circulars (unchanged since c1, c1 expert read them).
- **Dates**: Mon 5 Apr 2027 + 10 = **Thu 15 Apr** ✓; 5 Apr → **Wed 5 May 2027** = **30 days** ✓ (calendar check).
- **Sums re-done** (8-function, 12 digits): 85.82 × 1.0012 = 85.922984; × 1.0015 = 86.05186… → 86.0519 ✓ · trap
  85.82 × 1.0027 = 86.051714 ✓ · 50000 × 86.0519 = 4302595 ✓ · V 85.92 × 1.0012 = 86.023104; × 1.0015 = 86.15213… →
  86.1521; × 20000 = 1723042 ✓ · Q2 4302595 × 10.95 % = 471134.1525; × 30 = 14134024.575; ÷ 365 = 38723.355… →
  **38,723.36**; total **43,41,318.36** ✓ (and 10.95 ÷ 365 = 0.03 exactly, so the shortcut agrees) · HW 50000 × 86.2 =
  4310000; × 0.03 % × 30 = **38,790** ✓ · Q3 7.2, 9.1 ✓ · P8 86.2524 / 25,87,572 ✓ · P9 25,92,000 ✓ · P10 9.35 ✓ ·
  P21 2587572 × 0.03 % × 25 = **19,406.79**; total **26,06,978.79** ✓. Largest display 11 digits. Key strings on
  screen match the voice. A12 homework link (N002–N003): 100000 × 87 = 87,00,000 − 85,80,000 = 1,20,000 ✓ (A12 Q1).
- **Length**: **1,786 spoken words** (tags removed) + **161 s of holds** ≈ **15.4 min at 140 wpm** (15.0 at 145). By
  section: warm-up 1.2 · ch1 2.9 · ch2 4.4 · ch3 3.0 · ch4 2.2 · close 1.8; every chapter under 6 min. Header says
  "≈ 15 min" (Low 1).
- **Sentences**: no voice line over 25 words (longest N017, N027, N033, N039, N065 at 25; each two or three short
  sentences). No AI-voice disclosure, no "checked against the source", no "Sir". One [seriously] "one thing" line per
  chapter; greeting and goodbye match the A13 row of `greetings.md`.
- **Method moves**: recall opener at the head of ch2–ch4 ✓; opening question (N008) closed in N048 ✓; wrong beliefs
  named and broken (6 months, fixed advance figures, added margins, "flip", ECB cap, 3-month evidence) ✓; one pause
  check per chapter, easy then twist, each twist now on a c2 point (gold, forward on crystallisation, LoC, ₹10 lakh) ✓;
  faded "your turn" sum at 15 s ✓; map filled from memory at 4 s a node ✓; homework and preview ✓.

## Verdict: ADOPT

High 0 · Medium 0 · Low 7. Every c1 High and Medium is fixed in substance, and every changed fact, date and sum
checks against the primary texts fetched today. The gold/silver exception (the c1 High) is now exactly right: QJs
for gold and silver, CEPA TRQ holders for gold, eleven days, through IIBX, and the three circulars stand after DIR 20.
The Lows below are worth applying before the voice page; none needs another review.

## c1 findings: fixed?
| c1 finding | Fixed? | Note |
|---|---|---|
| Expert H1: "no advance at all for gold or silver" | Yes | N019 "except one route", N019a (QJs via IIBX, 11 days), note adds CEPA TRQ (gold); N021a/N073 "an ordinary trader"; P6 "(not through the IIBX)", answer notes the exception; F9a. Verified against DIR 04/2022, 07/2023, 14/2024 and DIR 20 Annex |
| Expert M2 / examiner M5 / beginner M3: interest start day; "commercial rate" | Yes | N040 "normal loan rate … from the day it paid abroad"; card names FEDAI 3.2(a) and says the start day is the case's; header and numericals state the convention; 30 days, ₹38,723.36, ₹43,41,318.36, checker updated. Sound: FEDAI 3.2(a) fixes the rate, not the start day |
| Expert M3 / examiner H1: TC security, LoU/LoC ban | Yes | N056a voiced + trap card (guarantee ≤ amount and period; LoU/LoC ✗; Form TC; INR→FCY ✗); ch3 twist N058a–N059; P22. Matches TC MD 16.1, fn 7, 14(ix), 17.1 |
| Expert M4: IDPMS replaced the BEF statement | Yes | N063 card; F25 and Leads corrected; matches old MD C.10(ii) |
| Examiner M2: crystallisation day unnamed | Yes | N036a (older books: 10th day; "the question gives you the day") + trap card contrasting A12's old 30th day. Old 10th day stays a lead (F22), taught as history only: sound |
| Examiner M3: no rule for old-key items | Yes | N018a + card; P23; header |
| Examiner M4: import within 6 months / 3 years of an advance | Yes | on N018 trap card; F8 matches old MD C.1.1(v). (Suggested T/F practice item not added; P23 covers the old-key form: acceptable) |
| Beginner M1: ECB unexplained | Yes | N008 voice + card |
| Beginner M2: "your turn" hold | Yes | N033 "Pause me if you need", H 15 s |
| Beginner M4: IFSC | Yes | N050 "an I-F-S-C, like GIFT City"; card. The voice never says what the letters stand for; GIFT City carries it for a bank officer: acceptable |
| Beginner M5: operating cycle | Yes | N052a |
| Beginner M6: benchmark, all in, basis points | Yes | N054 "all in: interest plus fees … three per cent"; N054a INR benchmark; card "1 bp = 0.01 %". "plus two fifty" (Low 3) |
| Beginner M7: what IDPMS waits for | Yes | N064 "stays open until payment and bill of entry match"; card adds "mark off after payment" (reg 18(1)(h)) |
| Beginner M8: merchanting in one dense line | Yes | N068 (Dubai → Kenya, never touches India) + N068a (six months, both systems); matches reg 16 |
| Beginner M9: 14 lines over 25 words | Yes | none over 25 now |

## Findings (new in c2)
| # | Severity | Line | Finding | Fix |
|---|---|---|---|---|
| 1 | Low | header · Length; cut list | 1,786 words + 161 s ≈ **15.4 min** at 140 wpm, a little over the 12–15 band; header says "≈ 15 min". The cut list's second and third items (N068a, N012b) carry the keys of P20 (merchanting 6 months) and P3 (no "ACU Rupee"), so cutting their voice orphans practice unless the cards stay. | Header: "~1,786 words + 161 s ≈ 15.4 min at 140 wpm (15.0 at 145)". Cut list: "N042 (card stays); then N057 (card stays, silent); N068a and N012b only as voice cuts, their cards kept as silent N lines on N068 / N012a". |
| 2 | Low | N004 | A12 N075 asked "An importer's bill arrives… Which **rate** will it use?"; A13 N004 quotes it as "Which **side of the counter** is that?". The learner who thought about the rate hears a different question; the rate answer comes only at N026. | "And last class's question: an importer's bill arrives. Which rate? First, which side of the counter is that?" (17 words), or keep N004 and add to N026 "That answers last class's question." |
| 3 | Low | N054a | "plus two fifty" breaks the header's say-it-right rule (N054 says "three hundred basis points"); "two fifty" can be heard as 2.50 per cent or 250 points (the same here, but the ear doesn't know). | "For rupee credit, the benchmark is the government bond yield, plus two hundred fifty basis points." (16 words) |
| 4 | Low | N036a | "the tenth day after the documents arrive, **or** the next working day" sounds like a choice of two days; the old rule was "next working day **if the tenth is a holiday**" (the card says so). | "Older books gave the tenth day after the documents arrive; a holiday, the next working day. In the exam, the question gives you the day." (25 words) |
| 5 | Low | N039 | The case's policy day (10th day) is the same as the old "older books" day voiced three lines earlier, so a learner may still file "10th day" as the rule (examiner c1 M2's worry, now much smaller). | "The bank's policy, in this case: the tenth day, the fifteenth of April." (and leave the rest) |
| 6 | Low | N019a | "may pay up to eleven days ahead" reads the circulars' "remit advance payments for eleven days" as a timing window; the other half (unused advance back to the same AD within eleven days) is not shown. Exam options may use either half. | Note on N019a: "advance for 11 days · unused advance back to the same AD within 11 days · bill of entry to that AD (A.P. DIR 04/2022)". Voice unchanged. |
| 7 | Low | practice.md | Answer key leans to (c): P1, P2, P5, P6, P7, P12, P15, P16 are (c), 8 of 16 MCQs; a test-wise learner gains by guessing (c). | Move the correct option to (a)/(d) in about three items, e.g. P5 swap (c)↔(a), P12 swap (c)↔(d), P16 swap (c)↔(a); keep the answers line in step. |

## Not findings (checked)
- N010 asks two things ("I-E-C? … free, restricted or prohibited?") with no hold: rhetorical set-up for a card, not a
  recall question; fine under "one question per idea".
- N053 voice "oil, airline and shipping companies" vs card "oil/gas refining & marketing": the card carries the full
  text; the voice is a fair short form.
- N066 "a business, not a resident individual" vs reg 18(1)(d) "a person other than a resident individual": the ack's
  plain-word choice; the card states the rule exactly.
- N068a "closes both E-D-P-M-S and I-D-P-M-S" vs reg 16(2)(a) "EDPMS and/or IDPMS": a merchanting deal has an entry
  on each side, so "both" is right for the case shown.
- N040 interest from the bank's payment: a case convention, stated as such on the card and in the header; FEDAI 3.2(a)
  sets only the rate. Sound.
