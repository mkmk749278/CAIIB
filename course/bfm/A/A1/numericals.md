# A1 numericals (checked by `tools/check/fx_merchant_rates.py`, both ways agree)

**Data (illustrative)**: interbank USD/INR 85.40 / 85.42 (bid / ask). Bank's margins: TT buying 0.05%, bill buying
0.15%, TT selling 0.10%, bill selling a further 0.15% on the TT selling rate. Rates to 4 decimals; rupees to paise.

| Rate | Working | Calculator keys (8-function) | Answer |
|---|---|---|---|
| TT buying | 85.40 − (85.40 × 0.05%) | `85.40 × 0.05 %` → 0.0427; `85.40 − 0.0427 =` | **85.3573** |
| Bill buying | 85.40 − (85.40 × 0.15%) | `85.40 × 0.15 %` → 0.1281; `85.40 − 0.1281 =` | **85.2719** |
| TT selling | 85.42 + (85.42 × 0.10%) | `85.42 × 0.10 %` → 0.08542; `85.42 + 0.08542 =` → 85.50542 | **85.5054** |
| Bill selling | 85.50542 + (85.50542 × 0.15%) | `85.50542 × 0.15 %` → 0.12825813; `+ 85.50542 =` → 85.63367813 | **85.6337** |

Note: bill selling is loaded on the **unrounded** TT selling rate (85.50542). Loading on 85.5054 gives 85.633678,
which still rounds to 85.6337.

| Deal | Rate used (FEDAI rule) | Working | Rupees |
|---|---|---|---|
| Fee remittance USD 18,000 | TT selling (4.1) | 18,000 × 85.5054 | **₹15,39,097.20** |
| Sight export bill USD 40,000 bought | bill buying (2.1(a)) | 40,000 × 85.2719 | **₹34,10,876.00** (before transit-period interest) |
| Inward remittance USD 2,500 | TT buying (4.4) | 2,500 × 85.3573 | **₹2,13,393.25** |
| Import bill USD 12,000, no forward cover | bill selling (3.1(a)) | 12,000 × 85.6337 | **₹10,27,604.40** |

Round trip on TT rates: 85.5054 − 85.3573 = **0.1481** rupees per dollar, against an interbank spread of 0.02.
