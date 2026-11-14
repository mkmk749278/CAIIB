# CAIIB BFM: Importance Map v1 (2026-11-14)

What IIBF has actually asked in Bank Financial Management, measured from **453 recalled items across 7 exam cycles**
(June 2023 to June 2026) and mapped to the **official IIBF 2026 syllabus units** (`syllabus_2026.md`).
Data: `items_tagged.csv` (every item, cycle, source, cluster); scores: `importance.csv`; method and biases:
`docs/PLAYBOOK.md` §4. Re-run after every exam cycle.

**How to read it:** "cycles" = in how many of the 7 exams the topic was recalled at least once. "Mentions" = how many
recalled items. "Case/num" = items that were a calculation or case study. Mentions are a signal, not marks: a case
study counts once but carries 3–5 questions, and plain theory is under-reported.

## Shape of the paper
- Share of recalled items by module: **A International Banking 39%**, **B Risk Management 35%**, **C Treasury 16%**,
  **D Balance Sheet Management 11%** (capital-adequacy calculations, which the syllabus places in both B and D, are
  counted under B).
- Reported mix: about 60–70% theory and 30–40% numericals, with some shifts up to half numerical/case study
  (June 2026 shift 3); several "no options" numericals each cycle.

## Tier A: must master (12 topic clusters; full lessons, mind maps, numericals, practice)
| Cluster | What it covers | IIBF unit | Cycles | Mentions | Case/num |
|---|---|---|---|---|---|
| B-CAPCALC | Capital adequacy sums: CRAR, CET1, Tier 1/2, RWA, CCF, capital charge | B3 / D2 | 7/7 | 36 | 19 |
| B-RISKTYPES | Risk concepts and types: strategic, reputation, systemic, model, basis, climate, ERM, banking vs trading book, stress/scenario/sensitivity | B1 / B2 | 6/7 | 35 | 0 |
| A-FXNUM | Forex arithmetic: merchant rates, cross rates, forward, chain rule, bill buying/selling, crystallisation, import bill retirement | A1 | 7/7 | 32 | 15 |
| B-BASEL | Basel framework: pillars, CCB, CCCB, leverage ratio, D-SIBs, ICAAP, haircuts | B3 | 7/7 | 30 | 7 |
| D-NPA | NPA, SMA, provisioning, agriculture NPA by crop season, wilful defaulters, accelerated provisioning, PCR | D3 | 6/7 | 29 | 8 |
| C-MKTRISK | Duration, modified duration, BPV, VaR, stop loss, bond price and yield | C5 | 6/7 | 27 | 9 |
| A-LC | Letters of credit, UCP 600 articles, URR 725, red clause, Incoterms, LC case studies | A4 | 6/7 | 27 | 6 |
| C-TPROD | T-Bills (yield), cash management bills, CP, CD, G-secs, integrated treasury | C1 / C2 | 6/7 | 24 | 6 |
| A-EXIMP | Packing credit, export bill realisation, DDA, status holders, supplier/buyer's credit, trade credit | A5 | 7/7 | 22 | 3 |
| A-NRI | NRE / NRO / FCNR(B) / SNRR, residency (RNOR, deemed resident), loans to NRIs | A3 | 6/7 | 21 | 8 |
| A-LRS | LRS limits and purposes, TCS, prohibited remittances, foreign currency for travel | A2 | 7/7 | 21 | 2 |
| B-CREDITRISK | CreditMetrics, expected loss, Altman Z, securitisation (MRR), credit derivatives | B5 | 6/7 | 19 | 2 |

## Tier B: know well (9 clusters; short lesson + map)
| Cluster | What it covers | IIBF unit | Cycles | Mentions |
|---|---|---|---|---|
| A-IFSC | IFSC, GIFT City, IBUs, IFSCA | A9 | 5/7 | 15 |
| B-STATS | Mean, variance, SD, volatility (√t scaling) | B4 | 5/7 | 12 |
| C-RESERVES | CRR, SLR, NDTL case studies, monetary policy | C4 | 4/7 | 12 |
| A-ECB | ECB, ADR/GDR/IDR | A6 / C3 | 4/7 | 12 |
| B-LIQ | LCR, NSFR, HQLA, FALLCR, structural liquidity | B7 / B8 / D4 | 6/7 | 12 |
| B-OPRISK | Operational risk: BIA (alpha), TSA (beta), AMA, event types | B6 | 4/7 | 10 |
| D-IRR | Gap / RSA-RSL, duration gap, NII/NIM, MCLR | D5 | 4/7 | 9 |
| C-DERIV | Options (ITM/ATM/OTM), swaps, futures | C6 | 4/7 | 6 |
| A-ECGC | ECGC, country and shipment risk | A7 | 4/7 | 4 |

B-LIQ appears in 6 of 7 cycles with few mentions each: treat it as near-A for the LCR/NSFR/HQLA numericals.

## Tier C: basics (one-page summary each)
A-CORR (Nostro/Vostro, SWIFT MT700, RTGS), A-EXIM (EXIM Bank, AD category, BIS), D-ALM (ALCO, ALM), A-DEALROOM
(dealing room, daylight limits, FEDAI), D-RAROC, A-TECH (blockchain in trade).

## Thinly asked syllabus units (keep a summary, do not over-invest)
- A10 Technology in International Banking (3 mentions), C7 Treasury and ALM incl. transfer pricing (0 direct),
  D6 RAROC and profit planning (3), D4 Liquidity management (covered via B-LIQ), D1 balance sheet components (few).

## What changes next
1. More full-question memory papers (Dec 2025 Oliveboard paper read; older cycles behind lead forms) to replace topic
   names with real question shapes and better marks estimates.
2. Community sources (public Telegram channel previews) for doubts and repeated questions.
3. RBI changes up to 30 June 2026 (Nov/Dec 2026 exam) as update lessons: LRS/TCS, NPA/provisioning, Basel/capital,
   CRR/SLR, IFSC, ECB.
4. Then the BFM course plan: lesson list per tier, in teaching order, with one mind map per module.
