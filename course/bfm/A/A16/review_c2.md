# A16 c2 · Independent re-review (fresh context)

- **Reviewer**: fresh-context agent, 2026-11-22. Read: `script_class.md` c2 (N001–N076 with N011a, N020e, N024a,
  N032a, N049a, N051a; every `>` card), `practice.md` (1–35, answers), `numericals.md`, the three c1 reviews (expert,
  examiner, beginner), `review_ack_c1.md`, fact sheet `research/bfm/facts/A2.1-A2.6_A16.md` (rows 3, 47, 51, 52 in
  full; others as cited), `course/spec/lesson_spec.md`, `CLAUDE.md` hard lines. Format model: `A15b/review_c2.md`.
- **Checker**: `python3 tools/check/lrs_tcs.py` → 14 lines, **all OK** both ways, including the new P33
  ((12 − 7) lakh × 5 % = ₹25,000) and P34 (aggregate 4 → 9 → 12 → 14: ₹2 lakh of the medical × 2 % = ₹4,000, then
  ₹2 lakh travel × 20 % = ₹40,000; total ₹44,000). Re-done by hand on an 8-function calculator: all agree.
- **Primary text fetched 2026-11-22** (curl / pdftotext, read as data only):
  - **Finance Bill 2025** (indiabudget.gov.in/budget2025-26/doc/Finance_Bill.pdf), clause 67(b): in s. 206C(1G) "for the
    words 'seven lakh rupees' wherever they occur, the words 'ten lakh rupees' shall be substituted"; new third proviso:
    no TCS where the remittance "is a loan obtained from any financial institution … for the purpose of pursuing any
    education"; Notes on Clauses: "These amendments will take effect from 1st April, 2025." So the ₹7 lakh line ran to
    31 Mar 2025 and loan-funded education became nil from 1 Apr 2025: **N053 voice and card are right**, and so is F52.
  - **Memorandum, Finance Bill 2026** (indiabudget.gov.in/doc/memo.pdf, p. 48, clause 73): Sl. 7 LRS "exceeding ten lakh
    rupees": current (a) 5 % education or medical, (b) 20 % other → proposed (a) **2 %**, (b) **20 %**; tour package
    current 5 % up to ₹10 lakh / 20 % above → **2 %** irrespective of amount; "will take effect from the 1st day of
    April, 2026." Matches N050–N052, F45 and the FY 2025-26 half of N053 (5 % / 20 % above ₹10 lakh).
  - **FEMA s. 6(2A)**: India Code returned 504 and rbi.org.in's FEMA page did not carry the section text; a web search
    gave only secondary sources, all agreeing that s. 6(2A) (inserted by the Finance Act 2015, s. 139, brought into
    force 15 Oct 2019) lets the Central Government, in consultation with RBI, prescribe non-debt capital account
    transactions, with RBI keeping debt instruments under s. 6(2). N016's card ("Government for non-debt, RBI for debt,
    since 2019") is consistent; the bare-Act read stays on the freeze list, as F3 says (L2 on F3's wording).
- **Length**: **1,599 spoken words** (voice tags excluded) ≈ 11.4 min at 140 wpm + **145 s of written holds** (32
  holds) ≈ **13.8 min**. Inside 12–15. The header's "~1,600 words ≈ 14 min" is accurate.
- **Lines over 25 words: none.** Longest (25): N035, N042, N049a, N053, N074; (24): N014, N048, N063.

## Verdict: **ADOPT**
**High 0 · Medium 0 · Low 7.**

All three c1 Highs (the same ₹7 lakh boundary error, found by expert and examiner, and the beginner's "next year"
aggregation trap) and all 13 Mediums are fixed, and fixed correctly. The ₹7 lakh line now ends on 31 Mar 2025, which the
Finance Bill 2025 text confirms; the FY 2026-27 rates match the 2026 memorandum; N057 "suppose instead … this year" and
N068 "her only remittance this year" remove the aggregation doubt; the running total is voiced (N049a) and drilled (P34,
N074 "add up first"); the capital-account definition is the full s. 2(e) and the capital lane's ruler is right for the
post-2019 split; the "no LRS TCS on company payments" point is voiced, carded and practised. The new lines read
naturally in place. No changed line brings a factual error. The Lows are tidy-ups; none needs a further review.

## c1 findings: fix status
| Review · # | Sev | Fix in c2 | Status |
|---|---|---|---|
| Expert H1 / Examiner H1 · ₹7 lakh line "before Oct 2023" | H | N053 "In twenty twenty-five to twenty-six, education was five per cent above ten lakh. Until March twenty twenty-five, the line was seven lakh."; card "FY 2025-26: 5 % / 20 % above ₹10 lakh · to 31 Mar 2025: line ₹7 lakh (loan-funded education 0.5 %)"; F52; P33 | ✓ fixed; confirmed on Finance Bill 2025 cl. 67(b) and its Notes on Clauses (from 1 Apr 2025). Year named, so the line does not date when watched in 2027 (Beginner M7 ✓). P33 key ₹25,000 checked |
| Beginner H1 · "next year" vs FY 2026-27 card | H | N057 "Now suppose instead she sends fifteen lakh this year, all for fees"; N068 "Her only remittance this year" | ✓ fixed; "instead" makes it a separate case in the same year, so ₹10,000 is the only right answer. Also closes Beginner L11 |
| Expert M1 / Beginner M3 · capital lane's ruler | M | N016 voice "Capital account: only what the rules allow"; card "s. 6; Government for non-debt, RBI for debt, since 2019"; F3 | ✓ fixed; consistent with s. 6(2)/(2A) as in force from 15 Oct 2019 (secondary sources; bare Act on the freeze list) |
| Expert M2 / Examiner L9 · no TCS on company payments | M | N051a "this T-C-S is only on L-R-S, so only on individuals. A company paying for imports? Not this T-C-S." + card; P35 | ✓ fixed; correct per F51 (Sl. 7 = LRS remittances; LRS = individuals). "Not this T-C-S" correctly leaves room for other TCS entries |
| Examiner M1 / Beginner M8 · running total never spoken | M | N049a "All her remittances in the year add up, from April, whatever the purpose. The one that crosses the line pays its own rate above it."; N074 "Add up first"; P34 | ✓ fixed; matches F47 (our reading of "aggregate … exceeding", on the freeze list). P34 drills the crossing remittance at its own rate |
| Examiner M2 · half definition of capital account | M | N011 "…a resident's assets or liabilities outside India, or a non-resident's in India"; card adds contingent liabilities; examples to N011a | ✓ fixed; matches s. 2(e) / F1 |
| Beginner M1 · Schedule I list | M | N019 four items voiced; rest on the card | ✓ |
| Beginner M2 · purposes list | M | N025 "Almost any current purpose: travel, studies, medical treatment, gifts, and support for relatives abroad" | ✓ |
| Beginner M4 · N020a LRS before taught; Nepal tacked on | M | N020a "within a yearly limit you'll meet in chapter two"; N020e "Separately, the rules allow no foreign exchange at all for travel to Nepal or Bhutan." | ✓ fixed; also closes Expert L1 / Examiner L4 (travel, not "barred outright") |
| Beginner M5 · resident-to-resident gift | M | N028 sister in Chennai with a US account | ✓ matches F12 |
| Beginner M6 / Expert L3 · "margin trading" | M | N030 "Margin money or margin calls to exchanges abroad, forex trading abroad" | ✓ matches F12 |
| Beginner M7 · dated line | M | N053 (above) | ✓ |
| Beginner M9 · dense cards | M | cards trimmed | ✓ mostly; N024a, N030, N032 cards still 25–30 words (L4) |
| Expert L2 · minor's form | L | N024 "the natural guardian countersigns the form" | ✓ |
| Expert L4 · N004 net funded ≥ 1 % | L | N004 "net funded exposure … above one per cent" | ✓ wording; "above" vs "1 % or more" is immaterial to the answer (100 %) |
| Expert L5 · sports-body condition | L | N020 card "(not by sports bodies)" | ✓ card only; acceptable |
| Examiner L1 · Schedule I export commissions | L | N019 card "some export commissions" | ✓ (not named in full; acceptable) |
| Examiner L2 · LLP contrast | L | N024a card | ✓ |
| Examiner L3 · sick abroad, attendant | L | N032 voice "Falls sick while abroad? The bank can still release."; card attendant USD 250,000 | ✓ matches F38 |
| Examiner L7 · rupee gift to NRI relative's NRO | L | N027 card | ✓ |
| Examiner L9 · company payments | L | N051a | ✓ |
| Expert L7 / L8 / L11, Examiner L10 · freeze items | L | header "Not settled"; F45, F47, F42 | ✓ recorded |
| Examiner L6 · option giveaways | L | deferred to the PDF/mock build (ack) | recorded; acceptable. New P35 (c) is the same kind (L5) |
| Beginner L1 · chapter times | L | header times restated | ✓; ch3 ~2 min "short by design", recorded |
| Beginner L2, L3, L4, L6, L7, L8, L10, L12 | L | not applied; not named in the ack | open, all minor (L1) |

## New findings
| # | Sev | Where | Finding | Fix |
|---|---|---|---|---|
| L1 | Low | `review_ack_c1.md` | The ack lists Lows not applied only for practice giveaways and the freeze items; beginner Lows L2 (N009 goal line), L4 (no hold after N048's "Many of you think"), L7 ("club" never explained in N043), L8 (keys not spoken in N058/N060), L12 ("Tonight" greeting) are neither applied nor recorded. None affects a fact. | Apply L7 cheaply ("They can club them, that is, add their jars together") and record the rest in the ack. |
| L2 | Low | F3 | "since the **2019 amendment (s. 6(2A))**": s. 6(2A) was inserted by the Finance Act 2015 (s. 139) and brought into force on 15 Oct 2019. The card's "since 2019" is right; the fact sheet wording could mislead a later author into a "2019 Act". | F3: "inserted by the Finance Act 2015, in force 15 Oct 2019". Read the bare Act at the freeze, as planned. |
| L3 | Low | N051 | "gifts, travel, investment, twenty per cent" then N052 "tour packages … two per cent": a learner may hear "travel = 20 %" and "travel = 2 %" ten seconds apart (Examiner L8, still open). | "travel you book yourself" in N051, or "a tour package is different" leading N052 (it already says "separate"; acceptable as is). |
| L4 | Low | N024a, N030, N032 cards | Still 25–30 words with items not spoken (LLP, FCCBs, FATF, attendant). Fine as reference, hard to read inside a 6–8 s line on a phone. | Keep the spoken items on screen; move the extras to a standing card or the PDF. |
| L5 | Low | practice 35 | Option (c) is the only long, reasoned option ("not applicable: a company's import payment is not an LRS remittance"): a length giveaway, like P4/P6/P7/P13/P17. | Balance at the PDF/mock build, with the others. |
| L6 | Low | `numericals.md`, `practice.md` headers | Both still say "(c1, 2026-11-22)"; `numericals.md` has no entries for P33 and P34 though the checker does. | Re-label c2; add the two sums with key presses (`1200000 − 700000 = 500000 × 5 % =`; the P34 aggregate steps). |
| L7 | Low | N049a | "pays its own rate above it" is our reading of s. 394 Sl. 7 ("an amount or aggregate of the amounts exceeding ten lakh"); the header and F47 flag it, which is right. | Keep on the freeze list; re-check against a CBDT FAQ or circular under the 2025 Act before locking. |

## Checks
| Check | Result |
|---|---|
| (1) Every c1 High and Medium fixed as the ack claims | ✓ 3 H, 13 M (expert 2, examiner 2, beginner 9) all fixed; main Lows applied (beginner Lows partly, L1) |
| (2) Changed lines: N053, N016, N049a, N051a | ✓ N053 confirmed on Finance Bill 2025 cl. 67(b) + Notes (from 1 Apr 2025); FY 2025-26 5 %/20 % and FY 2026-27 2 %/20 % confirmed on Memo 2026 p. 48; N016 consistent with s. 6(2)/(2A) (secondary sources; bare Act on freeze list); N049a matches F47 (flagged reading); N051a correct per F51 |
| (3) Words per line; runtime | ✓ none over 25; 1,599 words + 145 s holds ≈ 13.8 min |
| (4) Flow after N011a, N020e, N024a, N032a, N049a, N051a | ✓ each follows on naturally ("Like buying shares abroad. / Or opening a bank account abroad"; "Separately…"; sole proprietor after "not companies"; "Any other purpose above the limit needs R-B-I" after the three; running total between the line and the rates; company contrast before tour packages) |
| (5) Practice 33–35 keys; checker | ✓ 33 b (₹25,000), 34 a (₹44,000), 35 c; checker all OK |
| (6) `numericals.md` vs script (N057, N068) | ✓ Q2 and Close match "instead … this year" and "her only remittance this year" (₹10,000 each); labels and P33/P34 entries missing (L6) |
| Hard lines (own content, primary sources, rule version stated, no AI/"checked" line, calculator keys) | ✓ |

## Author's ack (c3, 2026-11-22)
L1: N043 now explains "club" ("add jars together"); "Tonight" in the greeting kept (evening study audience; greeting
unique); beginner L2, L4, L8 are presentation polish left for the build pass. L2: fact sheet row 3 now "s. 6(2A),
inserted by the Finance Act 2015, in force 15 Oct 2019". L3: N052 "a tour package bought from a tour operator is
separate". L4: N024a, N030, N032 cards split into card + note. L5: option lengths balanced at the PDF/mock build.
L6: headers c3; numericals adds P33 and P34. L7: stays on the freeze list. Locked as c3.
