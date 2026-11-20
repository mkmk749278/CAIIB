# CAIIB BFM course plan v2: the exact video order (2026-11-19)

v2 replaces v1 (2026-11-14). It fixes the **exact order of every video**, the links between them and the picture
each one uses, and the **production process** the owner set on 2026-11-19: plan every video → write every script →
lock all of them → only then build, one by one. Built from `importance_map.md` (what IIBF asks),
`regulatory_updates.md` (what changed), `syllabus_2026.md` (all units) and the two sample lessons.

**Status: draft for the owner to lock.** After it is locked, a change to the order is a dated note at the end.

## 1. Which exam first
- **CAIIB first, and Paper 1 = Bank Financial Management (BFM)** (owner, 2026-11-14). It is the hardest and most-feared
  CAIIB paper, most of it is numericals that video teaches better than text, and the market's best-known course is
  in Hindi.
- **After BFM (proposal; decided when BFM is built):** CAIIB ABM (the other paper with many numericals), then BRBL and
  ABFM, then the **Risk Management elective** (it reuses most of BFM Module B, so it is cheap), then JAIIB's four papers.
  Each paper gets its own Importance Map before its course plan, as BFM did.

## 2. How the order is decided
1. **Module order follows understanding**: A International Banking (the money crosses the counter) → B Risk (what
   can go wrong) → C Treasury (the desk that runs the money) → D Balance Sheet (where it all shows). B's statistics
   feed B's VaR; C's bonds feed C's duration; C's duration feeds D's duration gap; B's capital feeds D's RAROC.
2. **Inside a module, a video comes only after everything it builds on** ("Builds on" column). No video uses an
   idea that has not been taught yet; when one needs a later idea, it says "we'll do this properly in video X".
3. **Teach once, link everywhere.** A topic the syllabus lists twice is taught once and linked: ECB/ADR/GDR (A6 and
   C3) in A19; capital adequacy (B3 and D2) in B; liquidity (B7, B8 and D4) in B; dealing room and NOP (A1 and C1)
   in C01; transfer pricing (C7) in D01.
4. **Every syllabus sub-topic is taught to exam depth (v3).** Tiers only set the amount of practice: Tier A
   clusters also get numerical drills and a case. Nothing in the syllabus is left out (`coverage.csv`).
5. **One mind map per module, one picture per idea**, reused wherever the idea comes back (the counter, the rate
   ladder, the road, the calculator). The picture column says which one each video uses; new pictures are designed
   in that video's plan.

**Formats:** L = lesson (12–15 min); N = numerical drill, 3–5 solved sums (8–12 min); C = exam-style case walk-through
(8–12 min); R = module revision: the finished map, traps, 10 quick questions (6–8 min). Every video follows PLAYBOOK
§5–§5b (live online class, one teacher voice, "some of you / others", worked → faded → own try, finished map at the end).

## 3. The order (62 videos, v3)

### 0. Start here
| # | Title (working) | Fmt | Tier | Builds on | Picture |
|---|---|---|---|---|---|
| 00 | How BFM is really asked: the four modules, where the marks are (our Importance Map), the allowed calculator, how to use this course | L | — | — | the four mind-map centres; the 8-function calculator |

### Module A: International Banking. Mind map A: "The money crosses the counter" (`course/bfm/A/mindmap_A.md`)
Part 1: rates at the counter
| # | Title (working) | Fmt | Tier | Unit | Builds on | Picture |
|---|---|---|---|---|---|---|
| A00 | The forex market and why rates move: what foreign exchange is (FEMA), the markets and who trades in them (interbank, merchant, spot, forward), what moves a rate (inflation, interest rates, balance of payments, PPP, speculation, intervention), exchange-rate regimes and India's path to today (**added v3**: syllabus A1 had no home) | L | A | A1 | 00 | a world map of currency flows; the rate as a see-saw |
| A01 | Buying or selling? The counter and the rate ladder: direct quotes, spread, merchant rates (**sample 1**, folder `A/A1`) | L | A | A1 | A00 | the counter; the rate ladder |
| A02 | Where the dollar actually sits: Nostro, Vostro, Loro, SWIFT, SFMS, RTGS, CHIPS, CHAPS, SRVA (and why a TT rate differs from a bill rate) | L | C | A3, A10 | A01 | two banks' ledgers across the sea |
| A03 | TT, bill buying, bill selling: which rate, which margin | N | A | A1 | A01, A02 | rate ladder, four rungs |
| A04 | Cross rates and the chain rule on a basic calculator | N | A | A1 | A03 | the balance scale (multiply or divide) |
| A05 | Forward rates: premium and discount, which month, option periods | N | A | A1 | A03 | ladder + calendar strip |
| A06 | Forward contracts: cancellation, early delivery, extension, swap cost (FEDAI rules) | N | A | A1 | A05 | the counter flipped (amber) |

Part 2: trade (the deal, the documents, the money)
| # | Title (working) | Fmt | Tier | Unit | Builds on | Picture |
|---|---|---|---|---|---|---|
| A07 | Incoterms 2020 on one road (**sample 2**, folder `A/A9_incoterms`) | L | A | A4 | 00 | the road: red risk baton, blue cost line |
| A08 | Letters of credit in one picture: ways to get paid, parties, flow, types (red clause, revolving, transferable, back-to-back, standby) | L | A | A4 | A07 | the four-party relay (to design) |
| A09 | UCP 600 articles that get asked, ISBP 745, URR 725 (reimbursement through the Nostro) | L | A | A4 | A02, A08 | the scrutiny desk with a 5-day clock |
| A10 | LC case study, exam style | C | A | A4 | A07–A09 | relay + road |
| A11 | Export finance: packing credit to realisation, post-shipment, EDPMS, the realisation-period history and the rule at the cut-off | L | A | A5 | A03, A07, A08 | the export journey timeline |
| A12 | Export bill discounting and crystallisation: the full case | N+C | A | A1, A5 | A03, A05, A06, A11 | timeline + the counter flipped |
| A13 | Import finance: import bills and retirement sums, supplier's and buyer's credit, trade credit, IDPMS | L+N | A | A5 | A03, A05, A08 | the import journey (mirror of A11) |
| A14 | Factoring, forfaiting, Gold Card, status holders | L | B | A5 | A11, A13 | — (to design) |
| A15 | ECGC and country risk (policies, claims); EXIM Bank | L | B | A7, A8 | A11 | umbrella over the journey |

Part 3: people (residents and NRIs)
| # | Title (working) | Fmt | Tier | Unit | Builds on | Picture |
|---|---|---|---|---|---|---|
| A16 | LRS and remittances for residents: current vs capital account, USD 250,000, TCS, what is prohibited, forex for travel | L+N | A | A2 | A01 | the counter, money going out (red) |
| A17 | NRE, NRO, FCNR(B), SNRR: one table you will never forget | L | A | A3 | A01, A16 | the four-drawer table |
| A18 | Residency (RNOR, deemed resident), loans and housing loans to NRIs, deposit rate rules: case | C | A | A3 | A17 | four-drawer table |

Part 4: capital flows and the rule-makers
| # | Title (working) | Fmt | Tier | Unit | Builds on | Picture |
|---|---|---|---|---|---|---|
| A19 | ECB after the 2026 overhaul, conversion to equity, reporting; ADR, GDR, IDR, FCCB, rupee-denominated (masala) bonds (also syllabus C3) | L | B | A6, A8, C3 | A02 | borrowing bridge (to design) |
| A19b | Foreign investment in India under the NDI Rules: key concepts, eligible investors, investee entities and instruments, prohibited sectors, pledge of shares, operational guidelines, documents (**added v3**: A19 was overloaded) | L | B | A6 | A19 | the borrowing bridge, equity lane |
| A20 | IFSC, GIFT City, IBUs, IFSCA | L | B | A9 | A19 | the special zone on the map |
| A21 | Who sets the rules: RBI and exchange control, FEMA 1999, AD categories, FEDAI and its rules | L | C | A8 | A01–A20 | the referees around the counter |
| A22 | Technology in international banking: digitisation, platforms, fintech and its delivery channels, a trade deal on blockchain, benefits, limits and challenges (**added v3**: A21 was overloaded) | L | C | A10 | A02, A08 | the trade journey, digitised |
| AR | Module A revision: the finished map + traps | R | | | all A | full map A |

### Module B: Risk Management. Mind map B: "Everything that can go wrong"
| # | Title (working) | Fmt | Tier | Unit | Builds on | Picture |
|---|---|---|---|---|---|---|
| B01 | The family of risks: credit, market, operational, liquidity, and strategic, reputation, systemic, model, basis, climate; banking book vs trading book | L | A | B1, B2 | 00 | the bank as a house, risks at each door (to design) |
| B02 | Managing risk: framework, risk appetite, three lines of defence, ERM, stress, scenario and sensitivity tests, risk-based supervision | L | A | B1, B6 | B01 | — (to design) |
| B03 | Statistics on a basic calculator: mean, variance, SD, normal curve, volatility over time (√t) | N | B | B4 | — | the calculator; the bell curve |
| B04 | Basel I → 1996 → II → III in one timeline; three pillars; ICAAP and SREP | L | A | B3, D2 | B01 | the Basel timeline |
| B05 | The capital stack: CET1, AT1, Tier 2, CCB, CCyB, leverage ratio, D-SIBs; dividend buckets; changes up to the cut-off | L | A | B3, D2 | B04 | the stack of bricks |
| B06 | Credit risk-weighted assets: risk weights (new standardised approach where in force), CCF for off-balance sheet, mitigation and haircuts | N | A | B3, B5 | B05 | — (to design) |
| B07 | Market and operational risk capital (capital charge × 12.5; BIA, TSA) and the full CRAR sum | N | A | B3, B6 | B06 | the stack + three RWA buckets |
| B08 | Capital adequacy case study, exam style | C | A | B3, D2 | B05–B07 | the stack |
| B09 | Market risk and VaR: framework, limits, trading liquidity, VaR from SD and confidence level | L+N | A | B4, C5 | B03 | the bell curve with a cut-off tail |
| B10 | Credit risk measured: ratings, PD × LGD × EAD, expected vs unexpected loss, CreditMetrics, Altman Z | L+N | A | B5 | B03 | — (to design) |
| B11 | Credit risk controlled and passed on: loan review, portfolio limits, securitisation and MRR, credit derivatives | L | A | B5, C7 | B10 | — (to design) |
| B12 | Operational risk: event types, causes, mitigation, scenario analysis, measurement approaches | L | B | B6 | B07 | — (to design) |
| B13 | Liquidity risk 1: need, drivers, types, principles, governance, policy and strategy, stress testing, contingency funding plan | L | B | B7, D4 | B01 | — (to design) |
| B13b | Liquidity risk 2: RBI's broad norms, ratios, the structural liquidity statement, liquidity across currencies, overseas branches and foreign banks in India, MIS, reporting and internal controls (**added v3**: B13 carried 16 official sub-topics) | L | B | B7, D4 | B13 | the bank's water tanks (to design) |
| B14 | LCR, HQLA, run-off rates, NSFR: the sums; liquidity risk monitoring tools | N | B (near A) | B8 | B13 | — (to design) |
| BR | Module B revision | R | | | all B | full map B |

### Module C: Treasury Management. Mind map C: "The bank's trading desk"
| # | Title (working) | Fmt | Tier | Unit | Builds on | Picture |
|---|---|---|---|---|---|---|
| C01 | Integrated treasury: front, mid, back office; profit centre; the dealing room, NOP and dealer limits | L | A | C1, A1 | A01, B09 | the desk from above |
| C02 | Money market: call/notice/term, repo, reverse repo, TREPS, LAF, SDF, MSF, CP, CD | L | A | C2, C4 | C01 | — (to design) |
| C03 | T-Bills, CMBs, CP and CD: price and yield sums | N | A | C2 | C02 | the calculator |
| C04 | CRR, SLR, NDTL and the rules up to the cut-off; payment and settlement systems | C | B | C4 | C02 | — (to design) |
| C05 | Bonds: G-secs, coupon, price and yield, YTM, accrued interest, clean and dirty price | N | A | C2, C5 | C03 | the see-saw (price vs yield) |
| C06 | Duration, modified duration, BPV/PV01 | N | A | C5 | C05 | see-saw with a pivot |
| C07 | Treasury risk control: limits, stop loss, VaR on the desk, investment classification, IFR removal | L | A | C5 | B09, C06 | desk + bell curve |
| C08 | Derivatives 1: OTC vs exchange, forwards, futures, FRAs, swaps (interest rate and currency) | L | B | C6 | A05, C05 | — (to design) |
| C09 | Derivatives 2: options (call, put, ITM/ATM/OTM, payoffs) and RBI's derivative rules | L+N | B | C6 | C08 | payoff lines |
| CR | Module C revision | R | | | all C | full map C |

### Module D: Balance Sheet Management. Mind map D: "Reading a bank's balance sheet"
| # | Title (working) | Fmt | Tier | Unit | Builds on | Picture |
|---|---|---|---|---|---|---|
| D01 | The bank's balance sheet: what sits on each side, ALM, ALCO, transfer pricing | L | C | D1, C7 | B13, C01 | the balance sheet as two shelves |
| D02 | Asset classification: NPA, SMA, agriculture by crop season, OD/CC and credit cards, upgrade; ECL coming 1 Apr 2027 | L | A | D3 | D01 | the 90-day clock |
| D03 | Provisioning: percentages, PCR, accelerated provisioning, wilful defaulters | N | A | D3 | D02 | — (to design) |
| D04 | NPA and provisioning case study, exam style | C | A | D3 | D02, D03 | 90-day clock |
| D05 | Interest rate risk 1: gap analysis, RSA/RSL, NII and NIM, IRRBB | N | B | D5 | D01, C05 | the gap bars |
| D06 | Interest rate risk 2: duration gap and economic value; MCLR and EBLR | N | B | D5 | C06, D05 | see-saw on the balance sheet |
| D07 | RAROC, economic capital, risk aggregation, profit planning | L+N | C | D6 | B05, B10 | — (to design) |
| DR | Module D revision | R | | | all D | full map D |

### Whole paper
| # | Title (working) | Fmt | Builds on |
|---|---|---|---|
| U01 | What changed up to the exam cut-off: every update in `regulatory_updates.md` marked "yes" | L | all |
| X01 | Exam-day plan: time per section, no-options numericals, the night-before sheet | L | all |

**Count (v3):** 1 start + 24 A + 15 B + 9 C + 7 D + 4 revisions + U01 + X01 = **62 videos**, about 12–13 hours, in
chapters of under 6 minutes. **Also:** module PDFs (map, traps, formula sheet, night-before page) and two full mocks
written by us (100 questions each). These are written after the scripts are locked, from the same facts.

**v1 → v2 changes:** Nostro/Vostro moved to A02 (it explains TT vs bill rates); forwards split into rates (A05) and
cancellation (A06); Incoterms (A07) now before LCs, since the deal comes before the payment; crystallisation (A12)
after export finance; factoring and forfaiting got their own video (A14); dealing room moved to treasury (C01);
VaR taught once in B09 (after statistics); risk framework split from risk types (B02); capital sums split in two
(B06, B07); bonds split from duration (C05, C06); NPA split into classification, provisioning and case (D02–D04);
start video 00 and exam-day video X01 added.

**v2 → v3 changes (2026-11-20, owner: "we need to cover the full syllabus and the depth the exam needs, not only
previous questions"):** the plan is now checked against every sub-topic of the official IIBF syllabus
(`research/bfm/syllabus_official.md`, ledger `research/bfm/coverage.csv`), not only against recalled questions. That
found three syllabus topics with no video (the forex market, factors determining exchange rates, the exchange-rate
mechanism) → new **A00**; three overloaded videos split (A19 → A19 + **A19b** foreign investment; A21 → A21 +
**A22** technology; B13 → B13 + **B13b** liquidity norms); CHIPS, CHAPS, RTGS and SFMS added to A02; liquidity
monitoring tools added to B14. Seven ledger rows are "partial" (C01, C02, D01, D05, D06): their scripts must show
them.

## 4. Production process (owner, 2026-11-19)
1. **Order** (this file) → owner locks it.
2. **Video plans** for all 62, module by module: one page each, one file per module (`course/bfm/<module>/plans_<module>.md`,
   easier to review on a phone; template in §5). The owner reviews a module's plans together; each plan moves into
   its video folder when its script is written.
3. **Full scripts** for all 62 (PLAYBOOK §5b rules), with each video's `numericals.md` (every sum solved twice,
   calculator keys), `practice.md`, `claims.csv` (every fact with its primary source) and `map_nodes.md`.
3a. **Independent review of every script** (owner, 2026-11-20): a fresh agent checks the script against its rows in
   `coverage.csv` (every official sub-topic taught to exam depth), the primary sources, the lesson spec and §5b/§5e;
   verdict in `review_v<N>.md`; fix and re-review until ADOPT.
3b. **Module exam test**: when a module's scripts are written, we write our own exam-style questions from the
   syllabus (every sub-topic at least once, in the exam's forms: concept MCQ, numerical with and without options,
   caselet), and a fresh agent answers them, plus the recalled questions, using only our course material. Target
   75+; every miss points to a gap we fix.
4. **Fact freeze and cross-check**: every rule re-checked against the cut-off of the exam we target (§6); callbacks
   between videos checked ("as you saw in A05…" must match A05); one independent review session per module.
5. **Lock**: owner approves; git tag `bfm-scripts-v1`.
6. **Build** one by one in the order above: shared visual template first (characters, counter, calculator, music bed,
   transitions; from the A01/A07 work), then voice → cut → visuals → render → review per video.
7. **Change during build**: fix the script, list the change in that video's `changes.md`, and re-check every video
   that links to it (the "Builds on" column) before building them.

## 5. One-page video plan (template)
- **Goal**: what the viewer can do after it (one line) · **Exam evidence**: cluster, cycles, typical question shape
- **Rule version**: as at which cut-off · **Builds on / leads to**: video numbers
- **Opening situation**: the real branch moment and the question it raises
- **Misconceptions**: "some of you think… others think…" (from recall data)
- **Picture**: the one image, reused or new, and how it grows
- **Chapters**: 3–4, with minutes · **Numericals**: list with answers (solved twice later in `numericals.md`)
- **Traps**: 2–4 · **Practice**: 3 questions · **Map nodes added** · **Facts to verify**: with source

## 6. Rule version (the cut-off)
CAIIB exams in March–August use rules up to the previous 31 December. The Nov/Dec 2026 exam is under way now, so the
first exam this course can serve is **May/June 2027, cut-off 31 December 2026**. Scripts are written to that rule
version; the July–December 2026 changes (e.g. the new FEM export-import regulations from 1 October 2026) are added
to `regulatory_updates.md` before the fact freeze. The two sample scripts (A01, A07) were written as at 30 June 2026
and are re-stamped at the freeze.
