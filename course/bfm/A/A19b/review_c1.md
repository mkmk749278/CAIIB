# A19b c1 · cross-model review (Claude) of the Gemini draft

- **Reviewed** (2026-11-24): Gemini's c1 (first lesson under the one-lesson-per-turn rule and `tools/gemini/gate.py`:
  PASS, 9 primary links, fact sheet 4,258 words, 1,898 spoken words, 0 exclamation marks, no spoken lesson codes).
- **Verdict: ADOPT WITH FIXES** → fixes applied → **c2 locked**.

## Primary texts read by the reviewer (2026-11-24)
| Text | Checked | Result |
|---|---|---|
| RBI MD – Foreign Investment in India (id=11200, updated up to 15 Jun 2026) | FDI = unlisted any stake, listed ≥ 10 % post-issue fully diluted; valuation certificate not older than 90 days | **matches** |
| A.P. (DIR) 19/2024 (Id=12749) | FPI breach: divest or reclassify within five trading days of settlement | **matches** |
| A.P. (DIR) 14/2026 (Id=13483) | S.O. 3030(E) of 12 Jun 2026: all individual PROIs may buy listed shares (was NRIs/OCIs only) | **matches** |
| NDI Rules 2019, RBI copy (Id=5083) | multilateral bank/fund carve-out from land-border rule; insurance company 100 % automatic (LIC 20 %); inventory e-commerce allowed only for exports of India-made goods; rights/bonus to foreign holders (no warrants; unlisted rights not below resident price); r. 7(2) bonus in prohibited sectors if shareholding pattern unchanged | **matches** |
| DPIIT G.S.R. 108(E), 4 Feb 2026 (startupindia PDF) | startup turnover ₹200 crore; Deep Tech 20 years / ₹300 crore | **matches** |
| `regulatory_updates.md` row (RBI-verified Feb 2026) | warm-up recall: ECB minimum average maturity 3 years; limit USD 1 billion or 300 % of net worth | **matches** |

Fully-diluted sums re-solved: 9/80 = 11.25 % (trap) vs 9/100 = 9 %; 9/90 = 10 %; 8/75 = 10.67 %; homework 5.5/60 =
9.17 % → FPI. All basic-calculator.

## Findings and fixes
| # | Sev | Where | Finding | Fix (c2) |
|---|---|---|---|---|
| 1 | M | N038 | "public sector banks stay twenty" next to the insurance change mixes two sectors (the 20 % in the insurance entry is LIC) | Line now says only the insurance change |
| 2 | L | N001 | line duplicated in the draft | duplicate removed |
| 3 | L | format | no header/body split, headings not marked | fixed (and `import_lesson.py` now does this itself) |

Checked and fine: one question per idea; misconception (10 % everywhere) broken by the unlisted rule; four chapters,
each with a recall opener and pause check; trap card on optionally convertible instruments; "write this down" once;
no line over 25 words (116 lines, ~1,880 words). Rows not checked by the reviewer (FVCI sectors, chit funds for NRIs,
LLP conditions, convertible note ₹25 lakh / 10 years) rest on Gemini's reading with its cited RBI/NDI paragraphs.
