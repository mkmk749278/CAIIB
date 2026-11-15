# A9 Incoterms · numericals (all illustrative)

Calculator: IIBF-allowed basic 8-function, 12 digits. Multiplier habit (× 1.1), no % key needed.
Rule: minimum insurance cover = 110% of the contract (CIF/CIP) price, in the contract currency (Incoterms 2020
CIF/CIP A5); if the LC is silent, at least 110% of the CIF or CIP value (UCP 600 Art. 28(f)(ii)).

| # | Data | Keys | Answer | Check (second way) |
|---|---|---|---|---|
| 1 (worked, N42–N43) | FOB 45,000 + freight 2,400 + premium 600 (USD) | `45000 + 2400 + 600 =` | CIF USD 48,000 | 48,000 − 600 − 2,400 = 45,000 |
| 2 (worked, N44) | CIF USD 48,000 | `48000 × 1.1 =` | USD 52,800 | 48,000 + 4,800 (10%) = 52,800 |
| 3 (viewer, N45–N46) | CIP EUR 30,000 | `30000 × 1.1 =` | EUR 33,000 | 30,000 + 3,000 = 33,000 |
| 4 (trap, N47) | 110% of FOB 45,000 (wrong base) | `45000 × 1.1 =` | USD 49,500 (wrong option) | 45,000 + 4,500 = 49,500 |
| 5 (practice, N56–N57) | CIF USD 125,400, LC silent | `125400 × 1.1 =` | USD 137,940 | 125,400 + 12,540 = 137,940 |

Checked twice: column "Answer" by multiplication, column "Check" by adding 10%; all match (computed in Python,
2026-11-15).
