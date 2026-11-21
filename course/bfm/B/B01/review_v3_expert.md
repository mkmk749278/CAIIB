# B01 · Review v3 · subject expert (independent session, 2026-11-21)

**Verdict: ADOPT WITH FIXES** (0 High, 1 Medium, 3 Low). The script's chapter 4 is now correct against RMS99 9.3.1–9.3.7
and Basel SRP31.2. One place the v2 M1 fix did not reach: `map_nodes.md` node 4 still keys basis on "two benchmarks"
and yield curve on "two periods", and that text fills on screen at N092 and N161a.

**Primary text read today:** RBI *Risk Management Systems in Banks* 1999 (rbi.org.in Id=85), 9.2–9.4.1; Basel
Framework SRP31.2 (in force 1 Jan 2026). Checked: `script.md` v3, `map_nodes.md`, `practice.md`, `claims.csv`, fact
rows 18–25, `review_ack_v1.md` (v3 table), `B/STATUS.md`.

## v2 findings
| v2 | Sev. | Status |
|---|---|---|
| M1 basis vs yield-curve hook | Med | **Fixed in the script, not in the map.** N078 ("different amounts over the same time", RMS99 9.3.2 "different magnitude … during a given period"), N082 ("different maturities … doesn't move in parallel", 9.3.4), N083 card ("two rates, same maturity → basis"), N089 trap line, N092, N161a are right. Fact row 20 and claims row 41 quote SRP31.2 correctly: "similar tenors but … different interest rate indices". **Map node 4 still says "basis (two benchmarks) · yield curve (two periods)"**: see new M1. |
| M2 N088 also a gap case | Med | **Fixed.** Equal amounts, same reset day, 1-year vs 3-month pricing: no gap under 9.3.1; yield curve under 9.3.4. |
| L1 RMS99 12.2 "synonymous with settlement" | Low | Not added, with reason. Accepted. |
| L2 cross-border, currency undefined | Low | Fixed (N055a). |
| L3 N065b ALM line | Low | Kept as framing. Accepted. |
| L4 STATUS items | Low | Fixed (STATUS lines 33–43). |
| L5 header ids, "five chapters" | Low | Fixed; every id in the music-out list and the limit line exists. |

## New findings
**M1 · Medium · `map_nodes.md` node 4 (shown at N092, filled at N161a).** "basis (two benchmarks) … yield curve (two
periods)" is the v2 hook the script has dropped. "Two benchmarks" is exactly the 9.3.4 wording, so the recap map
re-teaches the trap that N089 breaks. "Two periods" also blurs with 9.3.2's "during a given period".
Fix: "basis (two rates, same maturity, different amounts) · yield curve (different maturities, non-parallel)".

**L1 · Low · N088–N089.** On RMS99 9.3.2 alone, N088 could also be read as basis (two rates, same period, different
magnitude); 9.3.2 and 9.3.4 overlap in the 1999 text. The lesson's maturity test (SRP31.2) is the right resolver and is
cited. No change needed to the script; keep the SRP31.2 line on fact row 20 as the stated reason.

**L2 · Low · N076, practice Q3.** RMS99 9.3.1 says "assets and liabilities **and off-balance sheet items**". N076 drops
off-balance-sheet items. Fix (optional, cue only): rung 1 "assets, liabilities, off-balance sheet: different amounts or
dates".

**L3 · Low · N079.** The basis picture says "loans linked to one benchmark, your deposits to another" with no tenor.
Fix: "Your loans are linked to one one-year benchmark, your deposits to another one-year rate", so the picture carries
the same-maturity test.

No new error found in the v3 lines. Longest spoken sentence: 25 words (N073g, N078), at the limit, none over.
