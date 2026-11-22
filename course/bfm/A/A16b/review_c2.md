# A16b c2 · Independent re-review (fresh context)

- **Reviewer**: fresh-context agent, 2026-11-22. Read: `script_class.md` c2 (N001–N089 with N017a, N019a, N019b,
  N028a, N032a, N034a, N034b, N036a, N044a, N055a, N065a, N069a; every `>` card), `practice.md` c2 (1–36, answers),
  `numericals.md` c2, the three c1 reviews (expert, examiner, beginner), `review_ack_c1.md`, fact sheet
  `research/bfm/facts/A2.2-A2.7-A2.9_A16b.md` (rows 9, 10, 21–24, 27, 41, 43, 51–56, 61 in full; others as cited),
  `course/spec/lesson_spec.md`, `CLAUDE.md` hard lines, `course/bfm/greetings.md`. Format model: `A16/review_c2.md`.
- **Checker**: `python3 tools/check/lrs_capital.py` → 10 lines, **All OK** both ways (Q1 ₹49,914; V ₹75,294 and the
  trap-card sum; Q2 USD 600; 10 Jun 2026 + 180 days = 7 Dec 2026; HW 150,000 used / 100,000 left; refund leaves
  100,000; F61 ₹42,50,000 ÷ 85 = USD 50,000; N057 250,000 − 200,000 = 50,000). Re-done by hand: all agree.
- **Primary text fetched 2026-11-22** (curl, saved in the scratchpad `rev16b_c2/`; read as data only):
  - **FEMA 1999**, India Code `a1999-42.pdf` "[As on the 1st June, 2026]": **s. 14(1)**: a person who fails to pay a
    s. 13 penalty within **90 days** of the notice "shall be liable to civil imprisonment"; **s. 14(11)**: detention
    "(a) where the certificate is for a demand of an amount exceeding rupees one crore, up to **three years**, and
    (b) in any other case, up to **six months**". **s. 13(1C)**: assets abroad above the s. 37A threshold, "in addition
    to the penalty … punishable with imprisonment for a term which may extend to **five years** and with fine". So
    N019b ("prison only in two cases"), its card, F9/F10 and practice 10 (c) are right. "Against section four" in
    N019b is a fair gloss (s. 37A(1) speaks of assets "held in contravention of section 4").
  - **FEM (Overseas Investment) Rules 2022** (RBI copy, bs_viewcontent Id=5087), **r. 17(4)(ii)**: "the transferor, in
    case of any disinvestment must have stayed invested for **at least one year** from the date of making ODI",
    proviso only for mergers/demergers/amalgamations within a wholly owned group. N034a "sell only after a year",
    practice 18 (a), F22 and the homework / F61 refund version are right.
  - **RBI MD – Other Remittance Facilities** (id=10193, "Updated as on October 01, 2026"), Annex 1 (CAT Rules)
    **Schedule III para 1, last proviso**: "a person other than an individual may also avail of foreign exchange
    facility, mutatis mutandis, within the limit prescribed under the said Liberalised Remittance Scheme for the
    purposes mentioned herein above"; **para 2(i)**: RBI approval for "Donations exceeding one per cent. of their
    foreign exchange earnings during the previous three financial years or USD 5,000,000, **whichever is less**, for
    creation of Chairs in reputed educational institutes, contribution to funds (not being an investment fund)
    promoted by educational institutes; and contribution to a technical institution or body …". ORF 4.1 repeats it.
    N052 card, N053 card and practice 27 (c) are right.
  - **RBI MD – LRS** (id=10192), A.7(f): "if an employee is being deputed by an entity … and the expenses are borne by
    the latter, such expenses shall be treated as residual current account transactions **outside LRS** and may be
    permitted by the AD **without any limit**". Confirms N051 and practice 26, and is the basis of new finding M1.
  - **Student abroad = non-resident**: RBI Press Release 2003-2004/710 "Residential Status of Indian Students Abroad
    Revised": "it has been decided to treat them henceforth as **non-residents from the FEMA angle**" (eligible for
    "all other facilities available for NRIs under FEMA"); the RBI Master Circular on Remittance Facilities for
    NRIs/PIOs (2014, 2015 editions) keeps "Students going abroad for studies are treated as Non-Resident Indians
    (NRIs) and are eligible for all the facilities available to NRIs under FEMA, 1999". The current MD text was not
    located in this pass (the LRS MD, ORF and LRS FAQ do not carry it). N038's claim is right; the fact sheet has no
    row for it (L4).
- **Length**: **1,870 spoken words** (voice tags excluded), **144 s of written holds** (98 N-lines) → **14.9 min at
  150 wpm**, 15.8 min at 140 wpm (the pace A16 measured). Inside 12–15 only at 150 wpm (L2).
- **Lines over 25 words**: **one**, N053 (26). At 25: N006, N019, N052, N057, N072, N087.

## Verdict: **ADOPT WITH FIXES**
**High 0 · Medium 1 · Low 8.**

All nine c1 Mediums named in the ack (expert 3, examiner 3 as M1–M3, beginner 9) are fixed, and the facts behind the
changed lines check out against the primary texts: s. 14 civil prison (3 years above ₹1 crore, else 6 months), the
one-year ODI holding, the non-individuals' USD 250,000 ceiling for Schedule III para 1 purposes, the donation line
"whichever is less" for chairs / education funds / technical bodies, and the student-as-non-resident premise of plan 2.
One new Medium: N052's example "like business trips" contradicts N051 one line earlier and RBI's LRS MD A.7(f). A
one-phrase fix; no further review needed once it is made.

## c1 findings: fix status
| Review · # | Sev | Fix in c2 | Status |
|---|---|---|---|
| Expert M1 · "the one prison term" | M | N019b "Prison comes only in two cases: assets kept abroad against section four, above a set value; or a penalty left unpaid."; card s. 13(1C) 5 years / s. 14 3 years if above ₹1 crore, else 6 months; F9; practice 10 | ✓ fixed; confirmed on FEMA s. 13(1C), s. 14(1), (11) |
| Expert M2 / Examiner M1 / Beginner M8 · "companies get no jar" | M | N052 "no L-R-S of their own … share its two lakh fifty thousand cap"; card unchanged; N053 scoped to "a university chair", card lists chair, education fund, technical body; practice 27 | ✓ fixed as to the law (CAT Sch. III para 1 last proviso, para 2(i)); **but the new example "like business trips" brings a contradiction: new M1** |
| Expert M3 · same-year ODI sale | M | homework extension and practice 36 now a fees refund; F61 rewritten; N034a voice and card "sell only after a year"; practice 18 | ✓ fixed; confirmed on OI Rules r. 17(4)(ii) |
| Examiner M2 · investor-side reporting | M | N034 UIN (card: one designated bank, Form FC with A2); N034a card "sale reported: 30 days"; N034b note OPI under LRS; practice 16 | ✓ matches F21, F22, F24 |
| Examiner M3 · practice giveaways | M | keys rotated; citations out of options | ✓ keys a 9 · b 7 · c 11 · d 9; no citations in options; residual length cue in P24, P27 (L5) |
| Beginner M1 · "surrender" undefined | M | N017a; N072 "surrender, that is, sell to a bank or money changer" | ✓ |
| Beginner M2 · OPI / ODI as letters only | M | N028 / N028a full names | ✓ |
| Beginner M3 · NRO, Category-II undefined | M | N039 "his rupee account in India as a non-resident"; N055a "a smaller licence than a bank … payments not linked to trade" | ✓ |
| Beginner M4 · "adjudicating officer" | M | N019a "set by an officer who hears the case" | ✓ |
| Beginner M5 · section numbers heard once | M | first use in full (N014, N015); section ladder on the wall, kept as a corner card | ✓ |
| Beginner M6 · ch1 twist needs ch4 | M | N022 "bought dollars for a trip, never went, and never sold them back" | ✓ answerable from N017 + N017a |
| Beginner M7 · visit / journey / trip | M | "trip" in N061, N064, N068, N069a ("not each purchase") | ✓ |
| Beginner M9 · IFSC block breaks the story; dense cards | M | N036–N036a moved after N041; cards trimmed; N035 now a card on N034b | ✓ flow checked (Checks, row 4); N053 and N034a cards still ~20–25 words (acceptable) |
| Expert L1–L8, L10–L12; Examiner L1, L3, L5–L7, L9; Beginner L2–L6, L8–L13 | L | as listed in the ack | ✓ spot-checked: N017a "R-B-I allows that", N019 "Anyone at all … ongoing", N038 note, N044 "studies or upkeep", N036 "just as abroad", N049 card, N054/N055 cards, N072, N008 card, rule-version card, N033, N055a note, N072 card, N032/N065 ask-hold-break, N062 C-I-S, N066 "eighty-four point six zero", N057–N058 two banks, N060, N087 |
| Examiner L2, L4; Expert L9, L13; Beginner L1, L7 | L | not applied, reasons recorded (time, freeze list) | recorded; acceptable |

## New findings
| # | Sev | Where | Finding | Fix |
|---|---|---|---|---|
| M1 | Medium | N052 voice | "For the same purposes, **like business trips**, they share its two lakh fifty thousand cap" comes straight after N051 "Employer-paid business travel … no limit". RBI's LRS MD A.7(f) puts an employee deputed and paid for by an entity **outside LRS, without limit** (practice 26 (a) teaches the same). Heard back to back, the learner gets "company business trip: no limit" and "company business trip: USD 250,000" ten seconds apart; an exam item on a company paying for an employee's conference can then be missed. "Share its cap" can also be heard as sharing an individual's jar. | Drop the example and say "the same": "Companies, firms and trusts have no L-R-S of their own. For the same purposes, they get the same two lakh fifty thousand cap." (If an example is wanted, use a gift, not travel.) In N085, "company payments sit outside L-R-S" → "most company payments sit outside L-R-S". |
| L1 | Low | N053 | 26 words (cap 25), and "whichever is less" is on the card but not spoken; "one per cent … or five million dollars" heard alone invites "whichever is more" (the trap in F42). | Split: N053 "A few need R-B-I above set lines. A donation for a university chair, for one." / N053a "Above one per cent of three years' forex earnings, or five million dollars, whichever is less." Cue numbering on N053 runs 1 · 3 · 2: renumber. |
| L2 | Low | whole script | 1,870 words + 144 s holds = 14.9 min at 150 wpm but 15.8 min at the 140 wpm A16 measured. | Measure the take; if over 15:00, use the header's cut order (N049, N036a, N053), then N034b's voice (card stays). |
| L3 | Low | header line 1 | Title still says "(script c1, with cue sheet)" while the status says c2. | "(script c2 …)", c3 on lock. |
| L4 | Low | fact sheet; N038 note | The plan-2 premise "student abroad = person resident outside India" cites only "(A17–A18)"; no fact row carries a source. True per RBI Press Release 2003-2004/710 and the Master Circular on Remittance Facilities for NRIs ("treated as NRIs … all the facilities available to NRIs under FEMA"). | Add a fact row (e.g. F27a) citing the press release and the current MD paragraph (find it in the A17 fact sheet work); cite it on N038. |
| L5 | Low | practice 24, 27 | The keys are the longest and most qualified options ("each day, by the next working day, nil if none"; "… whichever less"). | Give one distractor equal detail (P24 (a) "monthly, by the 10th, through the head office"; P27 (b) "USD 10 million per project, whichever more"). |
| L6 | Low | goodbye | "Put the notebook down, and I'll see you in the next class" is close to B02's "Close the notebook, stretch, and I'll see you in the next class". Unique as a whole line. | Optional: "That's the rest of the remittance story. Rest your eyes, and I'll see you in the next class." Coordinate with the Module B section before changing `greetings.md`. |
| L7 | Low | N034 | "her bank registers the investment and gets it a number, the U-I-N": the UIN identifies the foreign entity (one AD, Form FC). The card says it right; the voice is acceptable. | Optional: "gets the company a number". |
| L8 | Low | `numericals.md` | The ch3 twist and the refund line are present; the practice sum and P35/P36 match. No `P10`/P18-type entries needed. Only the label "(c2, 2026-11-22)" needs c3 on lock. | Re-label on lock. |

## Checks
| Check | Result |
|---|---|
| (1) Every c1 High and Medium fixed as the ack claims | ✓ 0 H; 9 M across the three reviews (expert 3, examiner 3, beginner 9, with overlaps) all fixed; Lows applied or recorded |
| (2) Changed lines against primary text | ✓ FEMA s. 13(1C), s. 14(1), (11) (N019b, card, P10); OI Rules r. 17(4)(ii) (N034a, P18, F22, F61); CAT Sch. III para 1 last proviso and para 2(i) via ORF Annex 1 (N052 card, N053, P27); LRS MD A.7(f) (N051, P26; and M1); RBI PR 2003-04/710 (N038). One contradiction introduced by an example (M1) |
| (3) Words per line; runtime | one line over 25 (N053, 26: L1); 1,870 words + 144 s ≈ 14.9 min at 150 wpm (15.8 at 140: L2) |
| (4) Flow of the moved IFSC block and new lines | ✓ N041 "can't be sent abroad" → N036 "One more door. GIFT City …" reads as a fifth door after the loan, then N036a trap, then the pause check; plan 1 → plan 2 now runs on (N034b → N038). N014 follows N012 (permits → keep); N017a defines surrender right after N017 and before the twist; N019b follows "Mostly not"; N028/N028a split reads cleanly into N029; N032a breaks N032's question; N034–N034b give UIN → proof/sale → APR in order; N038 sets up the non-resident premise; N052–N053 flow except M1; N055a follows the app lines; N057–N058 twist answerable from N048; N065a answers N065 |
| (5) Practice c2 | ✓ one correct answer each (1–36 checked against F rows and the texts above); keys a 9 · b 7 · c 11 · d 9; citations out of options; mild length cues P24, P27 (L5) |
| (6) Greeting / goodbye unique vs `greetings.md` | ✓ both unique as whole lines; goodbye close to B02 (L6) |
| Checker `lrs_capital.py` | ✓ All OK (10 lines) |
| Hard lines (own content, primary sources, rule version stated, no AI/"checked" line, calculator keys) | ✓ |

## Author's ack (c3, 2026-11-22)
M1: N052 now "For L-R-S-type purposes, they get the same two lakh fifty thousand cap" (no business-trip example; no
"share"); N085 "most company payments". L1: N053 split into N053 ("most of their other payments have no limit; a few
need RBI above set lines, like a donation for a university chair") and N053a ("whichever is less" spoken); cue numbers
fixed. L2: header gives 150 and 140 wpm figures; for length N014 (s. 6(4)) and N049 (AD-II/FFMC direct reporting) are
now card-only (both facts stay on screen, in practice 3 and the fact sheet); cut order N036a, N053a if the take runs
over 15:00. L3: title c3. L4: fact sheet row 65 (student abroad = non-resident; RBI press release 2003-04/710), cited on
N038. L5: practice 24 / 27 length cues left for the PDF/mock build. L6: goodbye changed to "Rest your eyes now…"
(`greetings.md` updated). L7: N034 "registers the foreign company". L8: numericals and practice relabelled c3.
Locked as c3.
