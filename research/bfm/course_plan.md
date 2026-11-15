# CAIIB BFM course plan v1 (2026-11-14)

Built from `importance_map.md` (what IIBF asks), `regulatory_updates.md` (what changed) and the official syllabus
(`syllabus_2026.md`). Draft for the owner; the pilot lesson proves the format before the rest is built.

## Principles
- **Effort follows marks**: Tier A topics get full lessons, numerical drills and case studies; Tier B short lessons;
  Tier C a one-page summary inside the module recap. Nothing in the syllabus is skipped entirely.
- **Teaching order follows understanding, not the book**: the money moves first (forex), then what can go wrong
  (risk), then how the bank protects itself (capital, liquidity), then the treasury that runs it, then the balance
  sheet that shows it. Each module opens with its mind map and closes with the finished map.
- **Every numerical on the IIBF-allowed calculator** (+ − × ÷ % √): powers by repeated multiplication; √ for
  volatility over time; worked keys on screen.
- **Each lesson**: branch situation → rule as the answer → picture → worked example(s) → trap card → 3 practice
  questions → map recap. 10–15 minutes. Rules stated "as at 30 June 2026" with "issued, coming" notes.
- **Formats**: L = lesson video; N = numerical drill video (3–5 solved sums, 8–12 minutes); C = case study walk-
  through (one 5-question case, like the exam); R = module revision (map + traps, 6–8 minutes).

## Build order (Claude, 2026-11-14)
The course is built in teaching order, A1 → A17 → AR → B1 … → DR, then the updates video, PDFs and mocks, because
each module leans on the one before (Module B's statistics feed Module C's VaR; C's duration feeds D's gap analysis).
Each module starts with its mind map (`course/bfm/<module>/mindmap_<module>.md`); each lesson follows
`course/spec/lesson_spec.md`. Nothing is published until the full course is built (owner, 2026-11-14).

## Module A: International Banking (about 39% of recalled items)
Mind map A: *"The money crosses the counter"*: centre = the bank's forex counter; branches = rates (A1), people who
send money (LRS, A2), people abroad (NRI, A3), trade documents (LC, A4), exporters and importers (A5), borrowing from
abroad (ECB, A6), insurance (ECGC, A7), referees (EXIM/RBI/FEMA/FEDAI, A8), the special zone (IFSC, A9), technology
(A10).

| # | Title (working) | Format | Cluster / tier |
|---|---|---|---|
| A1 | Buying or selling? The bank's counter and the rate ladder (direct quotes, spread, merchant rates) | L | A-FXNUM / A |
| A2 | TT, bill buying, bill selling: which rate, which margin | N | A-FXNUM / A |
| A3 | Cross rates and the chain rule without a scientific calculator | N | A-FXNUM / A |
| A4 | Forward rates, premium and discount, cancellation and early delivery | N | A-FXNUM / A |
| A5 | Export bill discounting and crystallisation: the full case | C | A-FXNUM + A-EXIMP / A |
| A6 | Packing credit to realisation: the export journey (9 months at the cut-off, 450-day credit window history), EDPMS | L | A-EXIMP / A |
| A7 | Importers, supplier's and buyer's credit, trade credit, IDPMS | L | A-EXIMP / A |
| A8 | Letters of credit in one picture: parties, types, red clause, transfer | L | A-LC / A |
| A9 | UCP 600 articles that get asked (5 banking days, expiry on a holiday, force majeure), URR 725, ISBP 745 | L | A-LC / A |
| A9i | Incoterms 2020 on one road (sample lesson 2, owner 2026-11-15; `course/bfm/A/A9_incoterms/`) | L | A-LC / A |
| A10 | LC case study, exam style | C | A-LC / A |
| A11 | NRE, NRO, FCNR(B), SNRR: one table you will never forget (repatriation, tax, currency risk, tenure) | L | A-NRI / A |
| A12 | Residency (RNOR, deemed resident), NRI loans and housing loans; June 2026 rate-ceiling relaxation | C | A-NRI / A |
| A13 | LRS: USD 250,000, purposes, prohibited items, TCS threshold Rs 10 lakh, cash limits, forex for travel | L + N | A-LRS / A |
| A14 | ECB after the Feb 2026 overhaul; ADR/GDR/IDR, FCCB | L | A-ECB / B |
| A15 | IFSC, GIFT City, IBUs, IFSCA | L | A-IFSC / B |
| A16 | ECGC policies and country risk; EXIM Bank; AD categories (2026 framework); FEDAI | L | A-ECGC, A-EXIM / B–C |
| A17 | Nostro/Vostro/Loro, SWIFT MT700 family, SRVA, dealing room, NOP | L | A-CORR, A-DEALROOM / C |
| AR | Module A revision: the finished map + 15 traps | R | |

## Module B: Risk Management (about 35%)
Mind map B: *"Everything that can go wrong"*: centre = the bank; branches = risk types (B1–B2), the rulebook (Basel,
B3), market (B4), credit (B5), operations (B6), liquidity (B7–B8).

| # | Title (working) | Format | Cluster / tier |
|---|---|---|---|
| B1 | The family of risks: credit, market, operational, liquidity, plus strategic, reputation, systemic, model, basis, climate; banking book vs trading book | L | B-RISKTYPES / A |
| B2 | Mean, variance, SD and volatility (√t on a basic calculator) | N | B-STATS / B |
| B3 | Basel I → II → III in one timeline; three pillars; ICAAP | L | B-BASEL / A |
| B4 | Capital stack: CET1, AT1, Tier 2, CCB, CCyB, leverage ratio, D-SIB surcharges (with the 2026 changes: quarterly profits, general provisions in Tier 2, dividend buckets, CCyB not activated) | L | B-BASEL / A |
| B5 | RWA and CRAR sums: credit, market (capital charge × 12.5), operational; CCF for off-balance sheet | N | B-CAPCALC / A |
| B6 | Capital adequacy case study, exam style | C | B-CAPCALC / A |
| B7 | Operational risk: event types, BIA (alpha), TSA (beta), AMA, scenario analysis | L + N | B-OPRISK / B |
| B8 | Credit risk: EL vs UL, CreditMetrics, Altman Z, securitisation and MRR, credit derivatives (2026 widening) | L | B-CREDITRISK / A |
| B9 | Liquidity: LCR, HQLA, run-offs (2.5% digital add-on from 1 Apr 2026), NSFR, FALLCR | L + N | B-LIQ / B (near A) |
| BR | Module B revision | R | |

## Module C: Treasury Management (about 16% of recalled items; under-recalled, about 27% of one full paper)
Mind map C: *"The bank's trading desk"*: centre = integrated treasury; branches = products (C2), reserves (C4),
risk measures (C5), derivatives (C6), international products (C3), ALM link (C7).

| # | Title (working) | Format | Cluster / tier |
|---|---|---|---|
| C1 | Integrated treasury: front, mid, back office; profit centre | L | C-TPROD / A |
| C2 | Money market: call/notice/term, T-Bills (yield sums), CMBs, CP, CD, repo/reverse repo, SDF/MSF | L + N | C-TPROD / A |
| C3 | CRR, SLR, NDTL with the 2025–26 changes (CRR 3%, new fortnight, penal rates) | C | C-RESERVES / B |
| C4 | Bonds: price and yield, duration, modified duration, BPV/PV01 | N | C-MKTRISK / A |
| C5 | VaR, stop loss, limits; IFR removal | L + N | C-MKTRISK / A |
| C6 | Derivatives: forwards, futures, options (ITM/ATM/OTM, payoffs), swaps; IRD and INR derivative rules 2026 | L | C-DERIV / B |
| CR | Module C revision | R | |

## Module D: Balance Sheet Management (about 11%; capital sums are taught in B)
Mind map D: *"Reading a bank's balance sheet"*: centre = the balance sheet; branches = components and ALM (D1),
capital (D2, link to B), asset quality (D3), liquidity (D4), interest rate risk (D5), RAROC (D6).

| # | Title (working) | Format | Cluster / tier |
|---|---|---|---|
| D1 | NPA and SMA, agriculture by crop season, OD and credit card NPAs, provisioning percentages, PCR; ECL coming 1 Apr 2027 | L | D-NPA / A |
| D2 | Provisioning sums and wilful-defaulter case | N + C | D-NPA / A |
| D3 | Gap analysis: RSA/RSL, NII/NIM, duration gap, MCLR and EBLR | N | D-IRR / B |
| D4 | ALM, ALCO, structural liquidity statement; RAROC and economic capital | L | D-ALM, D-RAROC / C |
| DR | Module D revision | R | |

## Whole-paper items
- **Updates video** for the Nov/Dec 2026 exam: everything in `regulatory_updates.md` marked "yes", 12–15 minutes.
- **Formula sheet + traps PDF** for the whole paper; one-page night-before sheet.
- **Two full mock walk-throughs** written by us (100 questions each, tier-weighted, with keyed-in numericals).

## Count
About 40 lessons/drills/cases + 4 revisions + 1 updates video. At one lesson a week this is most of a year; to be
ready for the May/June 2027 exam (cut-off 31 Dec 2026) the Tier A lessons (about 25) come first.

## Pilot (proposal; owner decides)
**A1 + A2: "Buying or selling?" and "TT, bill buying, bill selling"**: Tier A, asked in 7 of 7 cycles, the topic most
candidates fear, the most-viewed topic on competitor channels, and the best test of our picture-first method (the
bank's counter, the rate ladder, calculator keys).
