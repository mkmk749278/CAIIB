# A18 c1 · cross-model review (Claude) of the Gemini draft

- **Reviewed** (2026-11-24): Gemini's c1 files and its fact sheet `research/bfm/facts/A3.4-A3.8_A18.md` (Drive
  `_inbox/gemini/A18/`). Author: Gemini 4 Neon with the `caiib-bfm-lesson` skill (trial, PLAYBOOK §7). Reviewer is a
  different model, so this one review stands for the three.
- **Verdict: ADOPT WITH FIXES** → fixes applied in c2 → **locked**.

## Primary texts read by the reviewer (2026-11-24)
| Text | Checked | Result |
|---|---|---|
| MD – Deposits and Accounts (id=10198) 4.8.1–4.8.3 | loans against NRE to holder/third party in India "without any limits", usual margin; overseas branch lending; no premature withdrawal while a loan runs | **matches** F12, F15, F16 |
| FEM (Borrowing and Lending) Regs 2018 (id=11441), reg. 3A | inserted **w.e.f. 16 Feb 2026** by FEMA 3(R)(5)/2026-RB of 9 Feb 2026: chit funds, Nidhi, real estate business and farmhouses, agriculture **except** floriculture etc., plantation **except** tea, coffee, rubber, cardamom, palm oil, olive, TDR trading, securities | **matches** F13, with the exceptions Gemini left out: N044 now says "most farming and plantations" |
| MD – Borrowing and Lending in INR (id=10191) | housing loans: parity with residents; not credited to NRE/FCNR(B); equitable mortgage; repayment by remittance, NRE/FCNR(B)/NRO, rent from the property, or a relative account-to-account; staff loans repaid only from abroad or NRE/NRO/FCNR(B) | **matches** F18–F20 |
| Credit Facilities Directions 2025 (id=13156) | LTV ≤ 90 % up to ₹30 lakh, ≤ 80 % to ₹75 lakh, ≤ 75 % above; stamp duty excluded unless the house costs ≤ ₹10 lakh; stage-linked disbursement | **matches** F18, F19 |
| Interest Rates on Advances Directions 2025 (id=13149) | "advances to depositors against their own deposits" exempt; own deposit defined as rupee/FCNR(B) TD in the borrower's name | **matches** F17 |
| Income-tax Act 2025 s. 3, 5, 6 | incometaxindia.gov.in refuses this container | **Gemini's reading; verify at the freeze**. The tests match the 1961 Act s. 6 they replace (182 / 60 + 365 / 120 for > ₹15 lakh visitors / deemed resident / RNOR 9-of-10, ≤ 729 days) |

Sums re-solved: 30 + 31 + 31 + 28 + 31 = 151 days (2027 not a leap year); 80,00,000 × 75 % = 60,00,000 (with stamp
duty 85,60,000 × 75 % = 64,20,000, the trap); 60,00,000 × 80 % = 48,00,000; 28,00,000 × 90 % = 25,20,000; A17
homework 1,024.45. All match.

## Findings and fixes
| # | Sev | Where | Finding | Fix (c2) |
|---|---|---|---|---|
| 1 | M | N004 | "powered multiple five-mark cases in 2024–2026": not backed by our Importance Map | Replaced with the plan's evidence (papers 2023–2026 asked these loans and NRI cases) |
| 2 | M | N044 | agriculture and plantation stated as flat bans; reg. 3A has exceptions | "most farming and plantations" |
| 3 | L | N069 | asks for "two rules", answer gives four | "What rules…" |
| 4 | L | N002–N003, N081–N082 | lesson codes spoken (A16b, A17, A19) | "last class", "next class" |

Checked and fine: two-doors picture; FEMA vs income tax broken as a misconception; one pause check per chapter;
chapter 4 is the 5-question case the plan asks for; trap on 1961 section numbers; lines ≤ 25 words (82 lines, ~1,720
words); all seven v3 additions present. Facts Gemini could not find ("pay the seller/builder directly"; third-party
repayment "own resources") were left out of the voice, correctly.
