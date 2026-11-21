# A04 numericals (checked two ways by `tools/check/fx_cross_rates.py`)

All quotes illustrative. Rates to 4 decimals (half up). Rupees to paise.

| # | Data | Rule | Keys | Answer |
|---|---|---|---|---|
| 1 | EUR/USD 1.0850 / 1.0855; USD/INR 85.60 / 85.62 | multiply (USD on opposite sides) | bid `1.085 × 85.60 =` → 92.876; ask `1.0855 × 85.62 =` → 92.94051 | **EUR/INR 92.8760 / 92.9405** (trap bid×ask 92.8977) |
| 2 | GBP/USD 1.2650 / 1.2660; same USD/INR | multiply | `1.265 × 85.60 =` → 108.284; `1.266 × 85.62 =` → 108.39492 | **GBP/INR 108.2840 / 108.3949** |
| 3 | USD/JPY 149.50 / 149.60; same USD/INR | divide, crossing sides; ×100 | bid `85.60 ÷ 149.60 × 100 =` → 57.2192513; ask `85.62 ÷ 149.50 × 100 =` → 57.2709030 | **JPY/INR 57.2193 / 57.2709 per 100** (trap bid÷bid 57.2575) |
| 4 | Chain: 1 GBP = 1.17 EUR; 1 EUR = 1.085 USD; 1 USD = 85.60 INR. INR per GBP? | chain rule | `1.17 × 1.085 × 85.60 =` → 108.66492 | **108.6649** |
| 5 | Chain reversed: how many GBP for ₹5,00,000 at that rate? | divide | `500000 ÷ 108.6649 =` → 4601.297… | **GBP 4,601.30** |
| 6 | Case: EUR 40,000 export proceeds converted at the EUR/INR cross bid (before the bank's margin) | Sum 1 bid | `40000 × 92.876 =` | **₹37,15,040.00** |
