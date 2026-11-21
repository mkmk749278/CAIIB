# A04 numericals (checked two ways by `tools/check/fx_cross_rates.py`)

All quotes illustrative. Rates to 4 decimals (half up). Rupees to paise.

| # | Data | Rule | Keys | Answer |
|---|---|---|---|---|
| 1 | EUR/USD 1.0850 / 1.0855; USD/INR 85.60 / 85.62 | multiply (USD on opposite sides) | bid `1.085 × 85.60 =` → 92.876; ask `1.0855 × 85.62 =` → 92.94051 | **EUR/INR 92.8760 / 92.9405** (trap bid×ask 92.8977) |
| 2 | GBP/USD 1.2650 / 1.2660; same USD/INR | multiply | `1.265 × 85.60 =` → 108.284; `1.266 × 85.62 =` → 108.39492 | **GBP/INR 108.2840 / 108.3949** |
| 3 | USD/JPY 149.50 / 149.60; same USD/INR | divide, crossing sides; ×100 | bid `85.60 ÷ 149.60 × 100 =` → 57.2192513; ask `85.62 ÷ 149.50 × 100 =` → 57.2709030 | **JPY/INR 57.2193 / 57.2709 per 100** (trap bid÷bid 57.2575) |
| 4 | Chain: 1 GBP = 1.17 EUR; 1 EUR = 1.085 USD; 1 USD = 85.60 INR. INR per GBP? | chain rule | `1.17 × 1.085 × 85.60 =` → 108.66492 | **108.6649** |
| 5 | Chain reversed: how many GBP for ₹5,00,000 at that rate? | divide | `500000 ÷ 108.6649 =` → 4601.3018… | **GBP 4,601.30** |
| 6 | Case: EUR 40,000 export proceeds converted at the EUR/INR cross bid (before the bank's margin) | Sum 1 bid | `40000 × 92.876 =` | **₹37,15,040.00** |
| 7 | Direct 85.60 / 85.62 → indirect USD per ₹100 | flip and swap | `100 ÷ 85.62 =` · `100 ÷ 85.60 =` | **1.1680 / 1.1682** |
| 8 | EUR/USD 1.0850 / 1.0855; GBP/USD 1.2650 / 1.2660 → EUR/GBP | USD the quote in both: divide, cross | `1.085 ÷ 1.266 =` · `1.0855 ÷ 1.265 =` | **0.8570 / 0.8581** |
| 9 | Chain: 1 GBP = 1.17 EUR; 0.9217 EUR = 1 USD; 1 USD = 149.5 JPY; 100 JPY = 57.22 INR | × right ÷ left | `1.17 × 149.5 × 57.22 ÷ 0.9217 ÷ 100 =` | **108.5889** (trap × 0.9217: 92.2496) |
| 10 | Importer pays JPY 20,00,000 at JPY/INR 57.2193 / 57.2709 per 100 | bank sells → ask; ÷ 100 | `57.2709 × 20000 =` | **₹11,45,418.00** (bid ₹11,44,386.00) |
| 11 | Back out USD/INR from EUR/INR 92.8760 / 92.9405 and EUR/USD 1.0850 / 1.0855 | EUR the base in both: divide, cross | `92.876 ÷ 1.0855 =` · `92.9405 ÷ 1.085 =` | **85.5606 / 85.6594** (trap bid÷bid 85.6000) |
| 12 | Trap ask ÷ ask for yen | — | `85.62 ÷ 149.60 × 100 =` | 57.2326 (bid 57.2575 above it: the check fires) |
