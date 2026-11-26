# Book check: Modules B, C and D (book Units 11–31)

Done 2026-11-26, after Module A (`book_check_A1.md` … `book_check_A9-A10.md`). Written in our own words.

Most of these lessons are **not locked yet**:
- **Module B:** B01 is locked; B02 and B03 are in progress with the Module B session; B04–B14b are in Gemini's queue.
- **Modules C and D:** all are unchecked Gemini drafts.

So this check works as a **checklist for those drafts and their independent reviews**, not as a list of c4 fixes. Each
review still runs the full book check on its own unit (`iibf_book.md`, "How a review uses it").

## Method (lighter than Module A, on purpose)
1. **Headings:** we checked every numbered section and sub-section of Units 11–31 (down to x.y.z) by keyword against
   `plans_B.md`, `plans_C.md`, `plans_D.md` and the existing scripts. **Every heading maps**; the only unmatched headings
   are generic "Introduction" lines.
2. **Worked sums in the book**, against each plan's "Numericals" lines.
3. **Stale book points** likely to appear as wrong options.

## Module B (Units 11–18 → B01–B14b)
**Scope:** complete. B01 and B02 already cover Unit 11's framework and Unit 12's risk taxonomy in full:
- the three book kinds: banking book, trading book, off-balance sheet;
- liquidity risk (funding, time, call);
- interest rate risk (gap, basis, yield curve, embedded option, reinvestment, net interest position);
- market, credit and country risk; operational, transaction, compliance, strategic, reputational, model and climate risk.

**Gaps for the B lessons:**
| # | Book § | Sub-point (our words) | Where | Note |
|---|---|---|---|---|
| B-G1 | 11.4.4 | **Risk pricing**: a loan rate must carry cost of funds (matched to the loan's term), the CRR drag, operating cost, expected loss (PD), capital charge and the return on capital. The lending-rate history runs BPLR (2003) → Base Rate (1 Jul 2010) → MCLR (1 Apr 2016) → external benchmark for new floating retail and MSE loans (1 Oct 2019 in RBI's circular; the book says 1 Apr 2020: **check**) | B02 c-next (B02 has no "pricing" at all) or B10 | RBI Directions on Interest Rate on Advances (current); EBLR circular 4 Sep 2019 |
| B-G2 | 12.5.3 | **Market liquidity risk** (can't exit a position without moving the price), as distinct from funding liquidity | B01 card if missing; otherwise B09 ("managing trading liquidity", book 14.9) | B09 plan already has trading liquidity |

**Book worked sums (Unit 13) → plans_B:**
- Adjusted exposure with undrawn limits (20 % / 50 % CCF on undrawn) → B06 ✓ (undrawn, CCF).
- CRM: haircut, currency-mismatch add-on, **maturity mismatch (t − 0.25)/(T − 0.25)**, FD netting, sovereign / state guarantee, two-collateral basket → B06 ✓. The maturity-mismatch formula appears only once in the plan, so **the B06 review must check that it is taught with a sum**.
- Market risk: vertical and horizontal disallowance → B07 ✓.
- Op risk BIA / TSA → B07b ✓.
- CRAR from capital charges → B07b ✓, **but see B-S1**.

**Stale or open (B):**
| # | Book says | Current / open | Action |
|---|---|---|---|
| B-S1 | Convert a capital charge to RWA by **× 12.5** | Open fact check in CLAUDE.md ("charge-to-RWA 12.5 vs 100/9"). RBI's India text has used 100/9 (= 11.11) for the 9 % minimum | Settle from the primary text before B07/B07b are written; the losing figure becomes a trap card |
| B-S2 | Op risk only BIA / TSA / AMA | RBI's new approach (BI × ILM) is issued, with a "coming" date in plans_B | plans_B already teaches it as "issued, coming": no change |
| B-S3 | CCB phase-in (1.875 % to Sep 2021) | Full 2.5 % CCB since 1 Oct 2021; CRAR 11.5 % with CCB | history only: one trap line if a recalled question uses it |

## Module C (Units 19–25 → C01–C09b, plus A13 / A19 for Unit 21)
**Scope:** complete. All C lessons are Gemini drafts (gate PASS, not checked). The book has almost no worked sums here
(only a swap-premium mention, YTM and VaR scaling by √n), and the plans already carry more.

**Stale book points to trap in the C reviews:**
| # | Book says (our words) | Current (check in the draft's fact sheet) | Lesson |
|---|---|---|---|
| C-S1 | CRR 4.5 %, SLR 18 % of NDTL; CRR penal interest 3 % then 5 % above Bank Rate | C04 draft teaches the 2025 Directions, updated 9 Oct 2026, with 99 % daily CRR from 16 Oct 2026 | C04 review: make "CRR 4.5 % ✗" a dated trap |
| C-S2 | LAF: banks park surplus with RBI under **reverse repo** (the floor) | Since Apr 2022 the **SDF** is the floor; fixed-rate reverse repo is at RBI's discretion | C02 / C04 review: trap card "reverse repo = floor ✗ · SDF ✓" |
| C-S3 | LIBOR-linked pricing (Euro-dollar markets, swaps) | LIBOR ended (USD panels 30 Jun 2023); SOFR / ARRs | C02b / C08 review |
| C-S4 | FIMMDA as the benchmark / valuation body | FBIL administers benchmarks (MIBOR, T-bill, G-sec valuation) | C02 / C05 review |
| C-S5 | Trade credit LoU / LoC (Unit 21) | Banned (A13 trap) | done in A13 |

## Module D (Units 26–31 → D01–D07b, plus B04–B08 for Unit 27, B13/B14 for Unit 29)
**Scope:** complete. All D lessons are Gemini drafts.

**Book worked sums (Unit 30) → our D05:** D05 has the following (counts of term hits in its script):

| Topic | Hits in D05 |
|---|---|
| Basis risk | 11 |
| Embedded option | 12 |
| Yield curve | 8 |
| Reinvestment | 5 |
| NII sums | 42 |

The book's classic **"basis risk worsens NII despite a negative gap"** sum (different rate falls on each asset and
liability) is the kind to check in the D05 review: make sure D05's NII sums include **one basis-risk case with unequal
rate changes**, with our own numbers.

**Stale book points to trap in the D reviews:**
| # | Book says (our words) | Current | Lesson |
|---|---|---|---|
| D-S1 | Asset classification and provisioning from the **IRACP Master Circular** (the old provisioning %) | RBI IRACP Directions 2025, and the ECL framework for banks (issued; check its start date, which plans_D has) | D02 / D03 / D04 reviews |
| D-S2 | IRRBB: traditional gap and duration only | Open fact check in CLAUDE.md (BCBS-style IRRBB mandatory, or the older gap/duration framework) | D05 / D06b reviews: settle it first |
| D-S3 | Basel III capital tables as in Unit 13 | Same as B-S1–B-S3 | D-module lessons that repeat capital rules |

## What this check found overall (Units 11–31)
- **No scope gaps.** The syllabus-first plans (195 sub-topics) and the depth checklists already cover every section of
  the book.
- The book's worth for B, C and D is mainly in **trap cards** (old CRR, reverse repo, LIBOR, FIMMDA, IRACP, 12.5) and
  in **two missed sub-points** (risk pricing, market liquidity risk).

## Follow-ups
1. **Module B session** (via `B/STATUS.md` when it resumes, or the Gemini drafts' reviews): B-G1, B-G2, the B06
   maturity-mismatch sum, and B-S1 settled first.
2. **C reviews:** C-S1–C-S4.
3. **D reviews:** D05 basis-risk sum, D-S1, D-S2.
