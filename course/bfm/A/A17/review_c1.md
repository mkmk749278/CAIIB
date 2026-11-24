# A17 c1 · cross-model review (Claude) of the Gemini draft

- **Reviewed** (2026-11-24): Gemini's c1 files (`script_class.md`, `numericals.md`, `practice.md`, `map_nodes.md`), its
  fact sheet `research/bfm/facts/A3.4-A3.6_A17.md` and its Deep Research report (Drive `_inbox/gemini/A17/`). Author:
  Gemini 4 Neon with the `caiib-bfm-lesson` skill (trial, PLAYBOOK §7, 2026-11-24). The reviewer is a different model
  from the author, so this one review replaces the three same-model reviews for this trial.
- **Verdict: ADOPT WITH FIXES** → fixes applied in c2 → **locked**.

## Primary texts read by the reviewer (2026-11-24)
| Text | What was checked | Result |
|---|---|---|
| FEMA 5(R)(6)/2026-RB, 18 Jun 2026 (RBI Id=13553) | SNRR open to any PROI incl. overseas/IFSC branch; Sch. 1 3(k) NRO→NRE; Sch. 3 3(B)(v) NRO→NRE/SNRR within ROA reg. 4; Sch. 4 paras 2, 5–8 deleted | **matches** F8, F11, F13, F15 |
| FEMA 5(R)(5)/2025-RB, 14 Jan 2025 (Id=12766) | reg. 9 transfers between repatriable rupee accounts; SNRR "business interest" kept then; para 8 tenure = contract | **matches** F11, F15 (2025 kept business interest; 2026 removed it) |
| RBI (Commercial Banks – Interest Rate on Deposits) Directions 2025 (id=13157) | NRE min 1 yr, NRO min 7 days; NRE/NRO ≤ comparable domestic; FCNR(B) +250/+350 bps; June 2026 withdrawal to 31 Aug 2026; 360-day year; 180-day intervals + actual days; no interest before minimum period; renewal within 14 days at the lower rate | **matches** F10, F11, F20–F23 |
| RBI/2024-25/94, 6 Dec 2024 (Id=12753) | base ceiling +250/+350; temporary +400/+500 to 31 Mar 2025 | **matches** F21. **Our `regulatory_updates.md` was wrong** (it called +400/+500 the normal ceiling): corrected |
| RBI/2026-27/243, 25 Aug 2026 (Id=13685) | Third Amendment Directions (window cut to 31 Aug 2026) | **matches** F21 |
| MD – Deposits and Accounts (id=10198) | NRE joint with resident relative former-or-survivor, relative as POA only; NRO joint with residents former-or-survivor; POA: local payments, remittance to holder, investments; RFC(D) monthly conversion by end of next month | **matches** F9, F17, F27 |
| NDI Rules 2019, RBI copy (Id=5083) | Sch. III individual < 10 %, all individuals ≤ 24 %, footnotes 93–94: S.O. 3030(E) dated 12.06.2026 | **matches** F29; the "5/10/24 % retained for private banks" part was **not found**: removed |
| Income-tax Rules 2026 r. 220, Forms 145/146 | incometaxindia.gov.in refuses this container (Access Denied); confirmed by several secondary sources and Gemini's verbatim quote | **lead, verify at the freeze** |
| Income-tax Act 2025 s. 11 / Sch. IV serials, s. 393(2) Table Sl. 17, 30 % rate | not opened (same block) | **lead, verify at the freeze**; serial and section numbers taken out of the voice, kept on cards |

Numericals re-solved by hand: 20,000 → 500 + 512.50 + 14.59 = 1,027.09; 10,000 → 200 + 204 + 5.78 = 409.78; homework
25,000 → 500 + 510 + 14.45 = 1,024.45; TDS 30,000 + 1,200 = 31,200; 51,000,000 ÷ 85 = 600,000; headroom 400,000. All
match; all keys basic-calculator.

## Findings and fixes
| # | Sev | Where | Finding | Fix (c2) |
|---|---|---|---|---|
| 1 | M | N027 | "NRE/FCNR(B) allow only a resident relative" hides that NRIs may hold them jointly with other NRIs (F9) | Re-written: joint with other NRIs; a resident only if a relative, former-or-survivor |
| 2 | M | N085–N086, map card | "5/10/24 % retained for private banks": not in the NDI text read | Removed; old 5 %/10 % now a dated trap line |
| 3 | M | N053 | "no staff bonus" not in IRD25 | Line now says only what para 27(4) says |
| 4 | M | N057–N059 | Income-tax section/serial numbers spoken but not verifiable here | Numbers out of the voice; kept on the cue cards; on the freeze list |
| 5 | L | N033 | overseas branches were added in Jan 2025, not Jun 2026 | "added overseas and IFSC branches" removed |
| 6 | L | N010 | clumsy misconception line | Re-written |
| 7 | L | regulatory_updates.md rows A-NRI | FCNR(B) "normal ceiling +400/+500" wrong | Corrected (2026-11-24) |

Checked and fine: warm-up recall uses A16b's real homework (USD 100,000) and travel-cash rule; one question per
idea; one pause check per chapter with a twist; recall opener for chapters 2–4; trap cards (SNRR old/new, 15CA/CB →
145/146, ceilings history); "write this down" once; lines ≤ 25 words (checked: 105 lines, ~1,990 words); greeting
and goodbye unused; all nine v3 additions covered. No coaching wording seen.

## Quality note for the trial
Gemini's draft needed six fixes, all small; its Deep Research found two rule changes we had missed or got wrong
(SNRR overhaul of 22 Jun 2026; FCNR(B) normal ceiling). Cost to Claude: verification and fixes only.
