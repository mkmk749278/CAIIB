# Book check: unit A1 (Exchange Rates and Forex Business)

Done 2026-11-26, the first unit of the sweep (`iibf_book.md`). We compared the IIBF book's Unit 1 (sections 1.1–1.8, about
45 pages, with 10 worked examples, three "Check Your Progress" sets and 10 terminal questions) with our scripts: A00, A01,
A03–A06, A12 and A21 (draft), C01, C01b, C07, C08, C08b and C09 (drafts), B01 and A02. Everything below is in our own
words. Book items are named by section number only.

## Verdict
- **Scope:** nothing is missing. Every section of the book's Unit 1 is taught in at least one of our videos.
- **Depth:** our lessons go deeper and are more current than the book on almost every point. Examples: the 10 Oct 2026
  ban on rebooking, the USD 5 million cap on hedging without underlying documents, FERR, the AP Regulations 2026, the
  FEDAI 10th-edition crystallisation rule, and the overseas borrowing limit of 100 % of Tier I.
- **Real gaps:** 6 small sub-points and 1 kind of sum (below). **Stale book points to turn into trap cards:** 8.
- **Numerical kinds:** 7 of the book's 9 kinds are taught; 1 (Vostro funding) is missing; 1 (rebooking) is no longer allowed (table at the end).

## Gaps: add (check the primary text first)
| # | Book § | Sub-point (our words) | Where it goes | Primary source to check |
|---|---|---|---|---|
| G1 | 1.8 keywords | The three kinds of currency exposure (transaction, translation, economic/operating) and what an open position is (overnight and daylight limits) | A06 c4: one card, "a forward hedges *transaction* exposure"; full treatment at the C07 review | RBI Risk Management and Inter-Bank Dealings MD (open position, NOP); exposure kinds are standard theory, with no rule to cite |
| G2 | 1.7 | FX Global Code (BIS Global FX Committee), adopted in India, and FEDAI's Code of Conduct for the Indian forex market | A21 review (draft): one line plus a card | FEDAI Code of Conduct (current edition, date); Global FX Committee's FX Global Code (latest update) |
| G3 | 1.7 Rule 7 | FEDAI accredits intermediaries (voice brokers, and electronic platforms or portals); RBI authorisation for electronic trading platforms; confirmations carry the clause "subject to FEDAI rules" | A21 review (it now names only voice brokers) | FEDAI Rules (current edition) Rule 7; RBI Electronic Trading Platforms Directions |
| G4 | 1.7 Rule 8 | Interbank settlement: interest for late delivery of funds, back value, time limit for claims, settlement through CCIL, holiday rules for interbank deals | A21 or C01b review (neither has it) | FEDAI Rules Rule 8 (not yet in `research/bfm/sources/fedai_rules_cutoff.md`: add it) |
| G5 | 1.7 (a)–(c) | Opening rupee Vostro accounts for overseas correspondents needs no prior RBI approval, except for banks of Pakistan; Rupee Drawing Arrangements with Exchange Houses need RBI approval; Nostro accounts abroad are opened under the bank's Board policy | A02 c4: one card | RBI MD on Opening and Maintenance of Rupee/Foreign Currency Vostro Accounts; Rupee Drawing Arrangement directions |
| G6 | 1.6 swaps example | How a company hedges a floating-rate ECB: principal only swap (principal), coupon only swap (interest), interest rate swap (floating to fixed), cross-currency swap (all three) | C08 / C08b review (C08 names POS once; COS and CCS are missing) | RBI Risk Management Facilities MD (permitted products for users) |

**Leave out:** per cent vs per mille, *valeur compensée*, the qualities a dealer needs, global turnover statistics,
time-zone hand-off details (A00 shows the sun moving across the centres). They are trivia or quickly out of date, and
no recalled question uses them.

## Stale book points: trap cards (the book still prints them, so they can appear as options)
| # | Book says (our words) | Current rule (our source) | Our lesson | Action |
|---|---|---|---|---|
| S1 | Exporters and importers hedge on past performance, an average of 3 years' turnover | Removed in 2020; hedging without documents was later capped at USD 5 million (RBI, Oct 2026) | A06 F14 teaches USD 5 m | A06 c4: trap card "past-performance limit ✗ (old)" |
| S2 | Resident individuals may book forwards up to USD 100,000 | Removed when the 2020 framework replaced it (now the USD 5 m simplified route) | not mentioned | A06 c4: in the same trap card |
| S3 | Extending a contract means cancelling and rebooking | Rebooking a cancelled contract is barred (RBI A.P. (DIR) 25, 10 Oct 2026); rollover on maturity is allowed | A06 F6 teaches it | none (also covered in A06 plan) |
| S4 | An unpaid export bill is crystallised at the **bill** selling rate | FEDAI 2.1(b)(iii): **TT selling** | A12 trap card "bill buying ✗ · TT selling ✓" | A12 c4: add "bill selling ✗" to the card |
| S5 | Bank borrowing abroad is capped at 50 % of unimpaired Tier I or USD 10 m | 100 % of Tier I or USD 10 m, whichever is higher; above 50 % needs Board policy and CRAR 12 % | C01 N080 teaches it | C01 review: make "50 % ✗" an explicit trap |
| S6 | AD categories as set in 2006 (AD-II includes RRBs and co-operative banks; "over 95 ADs") | AP Regulations 2026 (A21) | A21 Ch 2 | A21 review: check the old AD-II list is shown as old |
| S7 | Interest on late interbank delivery uses old benchmarks (MIBOR, other banks' base rates) | Check the current FEDAI Rule 8 | none | with G4 |
| S8 | Inward remittance surrendered within 7 days; customer compensation as in the 2021 edition | FEDAI 4.5 as amended 7 Sep 2026: credit within 2 working days; 2 % over SB rate; crystallise after 5 working days | A21 card "SB + 2 %" | see the note below |

**Note on S8:** `research/bfm/sources/fedai_rules_cutoff.md` calls the 7 Sep 2026 FEDAI amendment "after the
cut-off". For the May/June 2027 exam the cut-off is **31 Dec 2026**, so the amendment falls **inside** it and is the
rule to teach. Fix that line when FEDAI is re-checked at the freeze.

## Numerical kinds in the book: are they taught?
| Kind | Where we teach it | Checker |
|---|---|---|
| TT buying / TT selling from the interbank rate, margin in paise or % | A01, A03 | — |
| Bill buying rate for a usance bill: spot − margin + premium; rupee amount less interest (transit + usance) and commission | A05, A12 (A12 has the interest; **commission on bills purchased is not in A12's sum**: add a line at c4 or leave out, with the reason) | `tools/check/export_bills.py` |
| Bill selling rate through a cross (GBP via USD) | A04 | `fx_cross_rates.py` |
| Rupee Vostro funding by a correspondent (bank sells rupees, "inward" side) and the USD amount | **not taught** (A01, A03, A04 have no Vostro-funding sum): add a worked case at A04 c4 | `fx_cross_rates.py` |
| JPY per 100 cross, with margin and rupee debit | A03, A04 | `fx_cross_rates.py` |
| Forward purchase with an option month: premium passed only to the start of the window | A05 | `fx_forwards.py` |
| Forward sale: premium charged to the end of the window, margin on spot | A05 | `fx_forwards.py` |
| Cancelling a forward purchase at TT selling; amount due from the customer | A06 | `fx_forward_contracts.py` |
| Rate for rebooking after cancellation | **no longer allowed** (S3); A06 teaches rollover instead | — |

## Follow-ups
1. **A06 c4:** G1 card, and the S1/S2 trap card.
2. **A12 c4:** S4 ("bill selling ✗"); decide on the commission line.
3. **A02 c4:** G5 card.
4. **A04 c4:** add a Vostro-funding sum (the bank buys dollars, so it quotes the lower, buying rate).
5. **Draft reviews:** A21 (G2, G3, G4, S6, S8), C01 / C01b (G4, S5), C07 (G1 in full), C08 / C08b (G6).
6. **Sources:** add FEDAI Rule 7 and Rule 8 to `research/bfm/sources/fedai_rules_cutoff.md`, and fix its cut-off note.
