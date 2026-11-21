# A05 numericals (checked two ways by `tools/check/fx_forwards.py`)

All quotes, points, margins and interest rates illustrative. Rates to 4 decimals (half up). Rupees to paise.
Quote: spot USD/INR 85.60 / 85.62 · points 1m 0.18/0.20 · 2m 0.36/0.39 · 3m 0.54/0.58 (rising → premium, add).

| # | Data | Rule | Keys | Answer |
|---|---|---|---|---|
| 1 | Value date: deal Thu 3 Dec 2026 | spot = 2nd working day; Sat not working [F1, F3] | — | **Mon 7 Dec 2026**; 1-month forward 7 Jan 2027 |
| 2 | 2-month forward from the quote | add (premium) | `85.60 + 0.36 =` · `85.62 + 0.39 =` | **85.96 / 86.01** |
| 3 | Points 0.24 / 0.20 (falling) on the same spot, 1 month | subtract (discount) | `85.60 − 0.24 =` · `85.62 − 0.20 =` | **85.36 / 85.42** |
| 4 | Parity: S 85.60, ₹ 6.5%, $ 4.5%, 3 months | F = S × (1 + 0.065/4) ÷ (1 + 0.045/4) | `85.60 × 1.01625 ÷ 1.01125 =` → 86.0232386 | **86.0232**; ≈ 1.98% a year ≈ the 2% gap |
| 5 | Importer: bank sells USD 50,000, option 2nd month, TT selling +0.12% | sale + premium → last date (2m ask) | `86.01 × 1.0012 =` → 86.113212 · `× 50000` | **86.1132 · ₹43,05,660.00** (trap first date 85.9230) |
| 6 | Exporter: bank buys USD, option 3rd month, TT buying −0.08% | purchase + premium → first date (2m bid) | `85.96 × 0.9992 =` → 85.891232 | **85.8912** (trap 3m points 86.0711) |
| 7 | Usance bill USD 20,000, 60 days sight, NTP 25 days, bill buying −0.15% | 85 days → 2 completed months (premium, round down) | `85.96 × 0.9985 =` → 85.83106 · `× 20000` | **85.8311 · ₹17,16,622.00** (trap 3m 86.0108) |
| 8 | Annualised premium, 3m mid points 0.56 on mid 85.61 | (points ÷ spot) × 12/3 × 100 | `0.56 ÷ 85.61 × 4 × 100 =` | **2.62%** (not voiced) |
| 9 | Annualised premium from the parity forward 86.0232 on spot 85.60, 3 months | (F − S) ÷ S × 12/3 × 100 | `86.0232 − 85.60 = ÷ 85.60 × 4 × 100 =` → 1.97757 | **1.98%** |
| 10 | Spot 83.50, premium 2.4% a year, 2 months (no options) | 2.4 ÷ 12 × 2 = 0.4% | `83.50 × 1.004 =` | **83.8340** (trap full 2.4%: 85.5040) |
| 11 | Homework: discount 1m 0.24 / 0.20; bank sells, 2nd-month option | sale + discount → first date | `85.62 − 0.20 =` | **85.42** before margin |
