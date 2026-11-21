# B01 · Review v2 · subject expert (independent session, 2026-11-21)

**Verdict: ADOPT WITH FIXES.** The v1 High finding and all five v1 Mediums are fixed, or closed with a reason I
accept. Every new or changed line I checked matches its primary text. Two new Medium findings remain, both in the
interest-rate chapter. First, the basis / yield-curve hook ("two benchmarks → basis") clashes with RBI's own yield-curve
paragraph, which opens with "different benchmarks". Second, the N088 check stem is also a gap case. There are also
five Low findings.

## What I checked
- `script.md` v2 (N001–N168 and every cue), `practice.md`, `claims.csv` (39 rows), `map_nodes.md`, fact sheet
  `research/bfm/facts/B1.1-B2.5_B01.md` (rows 1–48 with 13a, 27a, 28a), `review_ack_v1.md`, `B/STATUS.md`.
- **Primary text read today:**
  - RBI *Risk Management Systems in Banks* (1999), rbi.org.in Id=85: 3.1.1, 3.1.2, 7.1, 9.3.1–9.3.7, 12.1, 12.2.
  - Basel OPE10.1 and footnote 1 (bis.org).
  - RBI Investment Portfolio Directions 2025 (id=13148): para 33, the para 50–51 AFS-Reserve text and the para 56
    valuation frequency.
  - RBI Market Risk Directions 2026 (id=13705): para 2 ("come into effect from April 1, 2027") and para 6 (trading
    book = all "Held for Trading").
  - RBI Guidance Note on Credit Risk 2002, 7.1 (political, cross-border and currency risk), from a copy of the page
    fetched earlier today in this environment.
  - BCBS FX settlement guidance (Feb 2013), executive summary, 2.2 and guideline 4, from the PDF text extracted
    earlier in this environment. I did not fetch the PDF again.

## v1 findings and their status

| v1 finding | Sev. | v2 lines | Status |
|---|---|---|---|
| H1 gap risk taught as dates only | High | N076, N083, N086–N087, N092, N121, N161a, practice Q3, map node 4 | **Fixed.** "Different amounts, or … different dates" now matches RMS99 9.3.1 ("different principal amounts, maturity dates or repricing dates"). The N086 stem has equal amounts and the same date. |
| M1 RBI 1999 forms of market risk | Med | N065a–N065b, N073a–N073b, header limit line | **Fixed.** The list matches RMS99 7.1 word for word, and the house's limit is stated. |
| M2 settlement risk is both credit and liquidity | Med | N049a, fact 13a, claims row | **Fixed.** FXS13 executive summary: "principal risk, replacement cost risk, liquidity risk, operational risk and legal risk." |
| M3 parts of country risk | Med | N055a, fact 14, practice Q9 | **Fixed** for political risk (CRGN02 7.1, nationalisation, "appropriation and expropriation"). Cross-border and currency risk are named but not defined (L2). |
| M4 transaction and compliance risk under op risk | Med | N100a, N101, N115–N116 | **Closed with reason; accepted.** RMS99 12.1 is now taught correctly. No primary text gives "transaction risk" an op-risk sense, so keeping the RMS99 3.1.2 credit sense is right. |
| M5 three levels; one loan, many risks | Med | N043, N061a–N061b | **Fixed.** N061b matches RMS99 3.1.1 ("also exposed to interest rate, forex and country risks"). |
| L1 N020 attribution | Low | N020–N021 | Fixed |
| L2 RBI 2002 definition | Low | N045, fact 10 | Fixed |
| L3 "legal or regulator's penalties" | Low | N101 | Fixed |
| L4 derivative face amounts | Low | N140 | Fixed |
| L5 Herstatt wording | Low | N050 | Fixed |
| L6 cite CA Directions 2025 | Low | claims row | Deferred to the freeze. Fine, but it is not in `STATUS.md` (L4) |
| L7 plan says basis 5 cycles | Low | N004, fact sheet | The fact sheet now gives 5 (4 topic lists plus the Dec 2025 full paper, Q60), and N004 says five. Consistent. |

## New findings

**M1 · Medium · N078, N083, N089, N092, N161a, the sorting card, map node 4. "Two benchmarks → basis" clashes with
RBI's yield-curve text.**
- RMS99 9.3.4 reads: "banks may price their assets and liabilities based on **different benchmarks**, i.e. TBs
  yields, fixed deposit rates, call money rates, MIBOR, etc. In case the banks use two different instruments
  **maturing at different time horizon** … any **non-parallel movements in yield curves** would affect the NII."
- RMS99 9.3.2 (basis) does not mention benchmarks. It says "interest rate of different assets, liabilities and
  off-balance sheet items may change in different magnitude", "during a given period of time".
- **The risk:** an IIBF stem that copies 9.3.4 ("priced on different benchmarks … non-parallel movement") would be
  answered *basis* by a learner who learned the card.
- The "different benchmarks" gloss for basis is defensible: the BCBS IRRBB standard (2016) says "similar tenors but
  … different interest rate indices". But that text is not on the fact sheet.
- **Fix:**
  - Key the hooks on what RBI says decides each one. Basis: "same period, rates of different items move by different
    amounts". Yield curve: "different maturities, the curve doesn't move in parallel".
  - Add one line after N083: "R-B-I's yield-curve paragraph also says 'different benchmarks'. The clue is the curve
    and different maturities, so that's yield curve."
  - Change the card to "same period, different size → basis · different maturities, non-parallel → yield curve".
  - Add the BCBS IRRBB basis-risk sentence to fact row 20 as the source of the benchmark gloss (open the PDF at the
    freeze).

**M2 · Medium · N088–N089. The check stem is also a gap (maturity mismatch) case.**
- "Funds five-year loans with one-year deposits" has different maturity dates, which is gap risk under 9.3.1, the
  rule N076 and N087 have just taught.
- The answer says only "yield curve", so the learner learns that a maturity mismatch is "not gap".
- **The risk:** a fair item, "five-year loans funded by one-year deposits; rates rise; the risk is ___", has the
  answer gap / mismatch.
- **Fix:** re-stem the question so there is no gap. "Loans are priced off the five-year rate, deposits off the
  one-year rate. Same amounts, both reset on the same day. The one-year rate rises; the five-year rate doesn't move.
  Basis or yield curve?" Answer: "Yield curve. Different maturities, and the curve didn't move in parallel. With the
  same amounts and the same reset date, there's no gap."

**L1 · Low · fact row 28, N100a.** RMS99 12.2 also says operational risk "is also synonymous with settlement or
payments risk and business interruption, administrative and legal risks". Add the clause to fact row 28 as history.
Optionally, add half a line at N051: "R-B-I's 1999 note also links settlement risk to operational risk."

**L2 · Low · N055a.** Cross-border and currency risk are named but never defined. Fix: "Cross-border risk, the
borrower lives in another country from where the loan is booked. Currency risk, exchange rates change what you get
back." Both are on fact row 14 (CRGN02 7.1).

**L3 · Low · N065b.** "Banks manage them separately, through asset liability management" has no fact row. Fix: cite
ALM99 (the ALM system covers liquidity and interest rate risk) on row 16 or 18.

**L4 · Low · `B/STATUS.md`.** The ack says three items were recorded there: the CA Directions freeze item, the
plan's basis and length line, and the length question for the owner. `STATUS.md` still says "(none yet)". Fix: add
them.

**L5 · Low · script header.**
- Line 13 says "five chapters"; there are six.
- The "limit of the picture" line cites N066a, which does not exist. It should be N065a–N065b.
- The music-out list cites N062a and N086c, which do not exist.
Fix the ids.

## Checklist (§7) items affected by v2
- **20** (analogy limit): now Yes (N065a–N065b, N122).
- **24** (facts on the sheet): Yes, except L3.
- **30** (confidence earned): No until M1 and M2 are fixed.
- All other items are as in v1: Yes or N.A.
