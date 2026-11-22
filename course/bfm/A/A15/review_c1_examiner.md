# A15 c1 · Independent review: EXAMINER (fresh context, 2026-11-22)

Script: `course/bfm/A/A15/script_class.md` c1 (warm-up, three chapters: risks in trade · country risk · ECGC and its
policies, close; voice N001–N084 with cue-sheet cards). Read with: `numericals.md` c1, `practice.md` c1 (30 items),
fact sheet `research/bfm/facts/A7.1-A7.5_A15.md` (F1–F36); syllabus A7.1–A7.5 (A7.6–A7.9 and A8.1 go to A15b);
plans_A §A15 (question kinds, traps, v3 additions 1–5 for A15); depth/A.md A7.1–A7.5; importance_map (A-ECGC 4/7
cycles); items_tagged ("Country Risk Classification" Jun 2023; "ECGC Standard Policy" Dec 2023; "ECGC" Jul 2024;
"Shipment Risk" Jun 2026); fullpaper_tagged (Oliveboard Dec 2025 Q39: "Country Risk is a type of:").

Primary texts checked this session (read as data only): ECGC SCR product page (main.ecgc.in/english/?p=1762:
"annual export turnover is more than Rs.500 lakhs", "Percentage of Cover: 90%", cover "from the date of shipment",
minimum premium ₹10,000); ECGC FAQ (main.ecgc.in/english/faq/: "normally pays 90% of the loss, whether it arises due
to commercial risks or political risks"; the Standard Policy is meant for shipments with **"a credit period not
exceeding 180 days"**; claim "payable after four months from the date of the event causing loss"; "only for the
post-shipment risks"; open cover / restricted cover with specific approval usually valid six months).

`python3 tools/check/country_risk.py`: **All OK**. Sums recomputed: Q1 72,000 / 8,000 ✓; Q2 1.5 % → 400 + 50 = 450 ✓;
V 0.75 % → nil ✓; homework 40,000 / 10,000 ✓; A14 homework 19,200 / 180,800 ✓. Key presses work on the 8-function
calculator.

## Verdict: **ADOPT WITH FIXES**

The lesson is accurate and aimed at what is asked. Every recalled item is reachable: country risk classification
(seven grades with today's legend, ST and MLT lists, quarterly, open vs restricted cover), the standard policy (SCR by
its full name, whole turnover, ₹5 crore, 90 %, from shipment, pre-shipment excluded) and "shipment risk" (whichever
way the item reads it: SCR's name, cover from shipment, or transport risk → marine insurer). RBI's country-risk rules
(Board policy, 1 % threshold, own rating not better than an agency's, yearly review, ECGC grades until then, the
provision ladder, the short-term 25 %, no provision on India) are carded and drilled with two sums, one of them the
threshold trap. The three plan misconceptions (insures goods; commercial only; 100 %) are broken. Practice keys are
all correct and unambiguous.

What keeps it from ADOPT: (1) the **180-day credit period** of the standard policy, a stock exam fact, is in neither
the fact sheet nor the lesson; (2) the provision is "on net funded exposure", but N036 tells the learner exposure
"counts both" funded and non-funded right before the sums, and no item drills that **LCs and guarantees stay out of
the 1 % test and the provision**; (3) the recalled full-paper item "Country risk is a type of:" (**credit risk**) is
on a card only; (4) the **answering rule for old figures** is not voiced (PLAYBOOK §4a); (5) the classic exclusion
pair (new import ban **covered** vs the buyer's failure to get an import or exchange permit **not covered**) is half
voiced.

Length: **1,589 spoken words** (≈ 11.3 min at 140 wpm) + **131 s** of holds ≈ **13.5 min**: inside 12–15. Fixes add
about 70 words (≈ 0.5 min); still inside.

Answerable from this lesson alone: **6 of 10 fully, 3 partly, 1 not.** After fixes 1–5: 10 fully.

## Ten exam-style questions

Written from the syllabus and the fact sheet, not from the script. Figures illustrative.

| # | Kind | Question (key) | Traps in the options | Lesson answers it? |
|---|---|---|---|---|
| 1 | define / classify (FP Dec 2025 Q39) | Country risk, for a bank, is a type of: (a) market risk (b) **credit risk** (c) operational risk (d) liquidity risk. (RBI places the country-risk policy inside the credit risk policy, CRM ch. VI) [F10] | "political risk" if offered; market risk (exchange) | **Partly**: only N035's card says "(within the credit risk policy)"; never voiced, no practice item (finding 3) |
| 2 | define / apply (case) | A buyer in Country P is solvent and willing to pay, but P's central bank stops all conversion of local currency into dollars. The exporter's loss arises from: (a) commercial risk (b) **transfer risk, a part of country risk** (c) sovereign risk (d) exchange risk [F4] | sovereign (government is not the debtor); exchange | **Yes**: N021–N024, trap card, check N048a; P4, P5 |
| 3 | how much / old labels | A bank without its own country rating has net funded exposure of 3 % of total assets to a country ECGC rates "**High Risk**". The provision is: (a) 20 % (b) 25 % (c) 50 % (d) **100 %**. Variant: the same country called "Restricted" in an old-bank item → 100 % [F13, F14] | 25 % (C1); old "high = B2" from older books | **Yes**: N029, N038–N039, trap card N041, check N050; P13, P30 |
| 4 | calculate (case) | Total assets ₹1,50,000 cr. To Country Q (B1): loans and bills ₹1,200 cr; LCs and guarantees ₹900 cr. Country-risk provision: (a) ₹105 cr (b) ₹60 cr (c) ₹45 cr (d) **nil** (funded 1,200 ÷ 1,50,000 = 0.8 % < 1 %) [F11, F13] | adding the non-funded 900 (2,100 = 1.4 % → 105) · funded at 5 % ignoring threshold (60) | **Partly**: the threshold is drilled (N046–N047), but "net funded only" is never voiced as a rule, and N036 ("exposure counts both") invites adding the LCs (finding 2) |
| 5 | when / compare | Which is correct? (a) ECGC revises its country lists once a year (b) **a bank's internal country ratings are reviewed at least once a year; ECGC's lists come quarterly** (c) a bank's own rating may be better than an international agency's if the Board approves (d) RBI publishes the country grades [F7, F12] | "better than agency"; RBI as rater | **Yes**: N031, N037, N076; P8, P10, P11 |
| 6 | exception | Under ECGC's standard policy, which loss is **NOT** covered? (a) the buyer's government cancels a valid import licence after shipment (b) **the buyer fails to obtain the import licence / exchange permit his own law requires** (c) the buyer fails to pay within four months of the due date (d) the LC-opening bank becomes insolvent [F18, F19] | (a) and (b) look alike; (d) seen as "bank, so not covered" | **Partly**: N058 voices "a new import ban" (covered); the not-covered half sits only on N058a's card; no practice item (finding 5) |
| 7 | when / how much | ECGC's Shipments Comprehensive Risks Policy is meant to cover shipments on credit of normally not more than: (a) 90 days (b) **180 days** (c) 360 days (d) 2 years (ECGC FAQ) | 360 (claim time limit); 4 months (waiting period) | **No**: not in the fact sheet, voice, cards or practice (finding 1) |
| 8 | apply (case) | An exporter expects export turnover of ₹4 crore this year and wants all its shipments covered. The suitable ECGC policy: (a) SCR (b) **Small Exporters Policy** (c) Export Turnover Policy (d) Specific Shipment Policy [F28, F29] | SCR (> ₹5 cr); ETP (premium ≥ ₹20 lakh); SSP (one shipment) | **Yes**: N059, N065–N067; P25, P26 (no SEP item in practice: finding 6) |
| 9 | calculate | An exporter holding the standard policy suffers an admitted loss of USD 1,20,000 on a D/A bill. ECGC pays: (a) USD 1,20,000 (b) **USD 1,08,000** (c) USD 96,000 (d) USD 12,000. Variant: the same loss under BWP → USD 96,000 [F20] | 100 %; 80 %; the exporter's share | **Yes**: N060–N063, homework N082; P22, P23 |
| 10 | purpose / who | Which is **NOT** a function of ECGC Ltd? (a) credit insurance to exporters (b) export credit insurance covers to banks (c) overseas investment insurance (d) **extending lines of credit to foreign governments**. And its 1957 name? **Export Risks Insurance Corporation** [F23, F25] | ECGC vs EXIM Bank; the 1983 name | **Yes**: N054–N056, check N070; P17–P19 (EXIM Bank itself in A15b) |

Question-kind coverage: define (1, 2) · purpose (10) · who / when / how much (3, 5, 7) · compare (5) · exception (6) ·
calculate (4, 9) · apply to a case (2, 4, 8) · old labels (3).

## Recalled items and depth checklist

| Item | Where | Status |
|---|---|---|
| Country risk classification (Jun 2023) | N026–N033, N037, P6–P8, P10 | ✓ |
| ECGC standard policy (Dec 2023) | N057–N064, P20–P24, P27–P29 | ✓ except the 180-day credit period (finding 1) |
| ECGC (Jul 2024) | N054–N056, P17–P19 | ✓ |
| Shipment risk (Jun 2026) | N014 (transport → marine), N059 (Shipments Comprehensive Risks), N064 (from shipment, pre-shipment excluded); P3, P28 | ✓ whichever reading |
| FP Q39 "Country risk is a type of" | N035 card only | **partly** (finding 3) |
| v3 (1) full trade-risk list with who suffers | N011–N017 | ✓ |
| v3 (2) factor list; RBI country-risk requirement | N025, N034–N040 | ✓ |
| v3 (3) never 100 %; political vs commercial lists | N057–N061 | ✓ (exclusion pair thin: finding 5) |
| v3 (4) founding year, earlier name | N054 | ✓ |
| v3 (5) policy list, one line "for whom" | N059–N069 | ✓ (BWP vs BEP thin: finding 7) |
| Depth A7.2 open vs restricted cover | N033 | ✓ voice and card; no practice item (finding 6) |

## Old-key items (IIBF banks lag; PLAYBOOK §4a)

| Old figure | Lesson | Can the learner answer either way? |
|---|---|---|
| Labels "restricted", "off-credit" for C2, D | N041 trap card | ✓ |
| Old label set where B1 = "moderate", B2 = "high", C1 = "very high" | N041 card shows only the top two | partly: an old item "provision on 'high risk' countries: 20 %" (old B2) would mislead; add the full old row (finding 4) |
| 2 % threshold | N041 | ✓ figure; answering rule not voiced (finding 4) |
| Percentages 0.25 / 0.25 / 5 / 20 / 25 / 100 / 100 | unchanged | ✓ no conflict |
| SCR / SEP turnover line (₹5 crore today) | N059, N065 | not carded; older ECGC literature may show a lower line: verify (finding 8) |

## Findings

| # | Sev | Line | Finding | Suggested fix |
|---|---|---|---|---|
| 1 | **Medium** | N059 / F28 / practice | **The standard policy's credit period, "not exceeding 180 days" (ECGC FAQ), is missing** from the fact sheet, the voice, the cards and practice. It is a stock MCQ on "ECGC Standard Policy" (Dec 2023 item) and also separates SCR from the medium/long-term policies. Q7 fails. | F28: add "for shipments on short-term credit, normally not exceeding 180 days; longer only exceptionally (FAQ)". N059 voice: "For exporters above five crore rupees a year, on short credit: up to a hundred and eighty days." N059 card: add "· credit ≤ 180 days". Practice: "SCR covers shipments on credit normally up to: (a) 90 (b) 180 days (c) 360 (d) 2 years". |
| 2 | **Medium** | N036, N038 / numericals | **Net funded only is never said as a rule.** N036 voices "Exposure counts both: funded… and non-funded", then N038 says "On net funded exposure" in passing. A learner will add LCs and guarantees to the 1 % test and the provision (Q4). IRP 113 applies both the threshold and the provision to net funded exposure. | N038 voice: "Third, provisions. Only on net funded exposure: L-Cs and guarantees count for the policy, not for the provision." N038 card: "provision base and 1 % test: net funded only ✗ LCs, guarantees". Practice item: Q4 above (key nil; trap ₹105 cr). Optional numericals variant. |
| 3 | **Medium** | N021 or N035 | **"Country risk is a type of credit risk"** (Oliveboard Dec 2025 Q39) is only a card bracket on N035. The plan lists Q39 as evidence. | N035 voice: "First, R-B-I treats country risk as part of credit risk. So the bank needs a Board-approved country risk policy, with exit plans." (keep the 1 % sentence). Practice: Q1 above. Fact sheet F10: quote CRM's wording that the country-risk policy is part of the credit risk policy (and confirm the para). |
| 4 | **Medium** | N041 | **The answering rule for old figures is not voiced** (PLAYBOOK §4a: once per topic, aloud). N041 says "today's text says one per cent" only. Also the card gives only the top two old labels; older books shifted every label above A2 (B1 "moderate", B2 "high", C1 "very high"), so an old item "provision on high-risk countries" keys 20 %. | N041 voice add: "Answer by today's rule; but if the options offer only the old figure, pick it." N041 card: full old row "A1 insignificant · A2 low · B1 moderate · B2 high · C1 very high · C2 restricted · D off-credit · 2 %" against today's row; "% unchanged by grade". Practice item: "(Old wording) provision on 'off-credit' countries: 100 %". |
| 5 | **Medium** | N058, N058a | **The exclusion pair is half voiced.** "New import ban / licence cancelled" is covered (voiced); "buyer's failure to obtain an import or exchange permit" and the **agent's or collecting bank's default** are not covered (card only). These pairs are what exception items are made of (Q6). | N058a voice: "And not covered? A quality dispute, the exporter's own fault, exchange-rate losses, the buyer failing to get his own import permit, and anything a general insurer covers." (≈ 25 words; split if needed). Practice: Q6 above. |
| 6 | Low | practice.md | Kinds missing: open vs restricted cover (N033), SEP / MEP / BEP / MBEP "for whom", no-claim bonus, the credit-risk classification, net-funded base, exclusion pair, 180 days. | Add items for findings 1–5 plus one "₹4 crore exporter → SEP" case and one open/restricted cover item. |
| 7 | Low | N067–N068 | **BWP vs BEP** can blur: "chosen buyers" vs "one buyer, many shipments". An option set "covers shipments to one particular buyer" could be defended for both. | N068 card: "BWP: chosen buyer(s), per-shipment basis, 12 months, 80 % · BEP: exposure on one buyer, premium on the approved loss limit, 90 % for SCR holders / 80 % others" [F32, F34]. |
| 8 | Low | F28 / N059 | Possible old-key on the SCR / SEP turnover line (older literature may show a lower line than today's "more than ₹500 lakhs"). | Check archived ECGC sales literature at the freeze; if a lower line existed, add it to an "older books" card. |
| 9 | Low | N040 card | "Host country of a foreign branch is included" (IRP 113(6)) is not on the card, yet P16's option (c) and its answer note rely on it. | N040 card: add "· foreign branches: host-country exposure included". |
| 10 | Low | N013 card | "exchange risk → whoever invoices or pays in foreign currency": "invoices" is loose (an exporter invoicing in rupees shifts the risk to the importer). | "exchange risk → whoever must convert: the exporter if invoiced in USD, the importer if invoiced in rupees". |
| 11 | Low | N008 | "come up in nearly every recent paper" overstates (A-ECGC: 4 of 7 cycles). | "Country risk and E-C-G-C came up in four of the last seven exams." |

Practice keys: all 30 checked against the fact sheet and the ECGC pages read; all correct, one best answer each. No
distractor a learner could defend (P16 (c) needs finding 9's card to be answerable from the lesson alone).

## Counts

High 0 · Medium 5 · Low 6. Verdict **ADOPT WITH FIXES**: fix 1–5 (and the Lows where cheap), then a re-review.
