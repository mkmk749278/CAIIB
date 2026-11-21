# A03 numericals (checked two ways by `tools/check/fx_merchant_rates.py`, section A03)

All rates are **illustrative**. Margins as stated in each sum. Rates to 4 decimals; rupees to paise.

## Sum 1 (worked fully): one USD quote, four rates
Interbank USD/INR **85.60 / 85.62**. Margins: TT buying 0.08%, bill buying 0.15%, TT selling 0.12%, bill selling a
further 0.15% on TT selling.

| Rate | Keys | Answer |
|---|---|---|
| TT buying | `85.60 × 0.9992 =` → 85.531520 | **85.5315** |
| Bill buying | `85.60 × 0.9985 =` → 85.47160 | **85.4716** |
| TT selling | `85.62 × 1.0012 =` → 85.722744 | **85.7227** |
| Bill selling | `85.722744 × 1.0015 =` → 85.85132812 | **85.8513** |

## Sum 2 (faded): EUR inward remittance
Interbank EUR/INR **99.20 / 99.24**; TT buying margin 0.08%. A remittance of **EUR 5,000** comes in.
TT buying: `99.20 × 0.9992 =` → 99.120640 → **99.1206**. Rupees: `5000 × 99.1206 =` → **₹4,95,603.00**.

## Sum 3 (on your own): GBP import bill, no forward cover
Interbank GBP/INR **114.50 / 114.55**; TT selling 0.12%, bill selling a further 0.15%. Import bill **GBP 8,000**.
TT selling `114.55 × 1.0012 =` → 114.687460; bill selling `114.68746 × 1.0015 =` → 114.85949119 → **114.8595**.
Rupees `8000 × 114.8595 =` → **₹9,18,876.00**. Trap: `114.55 × 1.0027 =` → 114.859285 → 114.8593 (both margins on the ask).

## Sum 4 (on your own): USD export bill bought
Quote and margins of Sum 1. Bill **USD 25,000** bought at sight. Bill buying **85.4716**.
Rupees `25000 × 85.4716 =` → **₹21,36,790.00** (before transit-period interest, A12).
