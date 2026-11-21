# A06 numericals (checked two ways by `tools/check/fx_forward_contracts.py`)

All rates, points, margins and interest illustrative. Rates to 4 decimals (half up). Rupees to paise.
Margins: TT selling +0.12%, TT buying −0.08% (as in A03, A05). Points (A05): 1m 0.18/0.20 · 2m 0.36/0.39.
Purchase / sale are always from the **bank's** side.

| # | Data | Rule | Keys | Answer |
|---|---|---|---|---|
| 1 | Exporter's forward **purchase** contract USD 1,00,000 @ 86.05; deal falls through; cancelled at maturity; spot 86.38 / 86.40 | purchase cancelled at TT selling [F8] | `86.40 × 1.0012 =` → 86.50368 · `86.5037 − 86.05 = × 100000 =` | TT selling **86.5037**; exporter pays **₹45,370.00** |
| 2 | Importer's forward **sale** contract USD 50,000 @ 86.20; cancelled at maturity; spot 85.80 / 85.82 | sale cancelled at TT buying [F8] | `85.80 × 0.9992 =` → 85.73136 · `86.20 − 85.7314 = × 50000 =` | TT buying **85.7314**; importer pays **₹23,430.00** (trap TT selling 85.9230) |
| 3 | Contract 1 cancelled one month **before** maturity, same spot | forward TT selling [F8] | `86.40 + 0.20 = × 1.0012 =` → 86.70392 | **86.7039** |
| 4 | Early delivery: purchase contract USD 1,00,000 @ 86.05, due in 2 months, delivered today; interbank spot 85.70 / 85.72; 2m points 0.36 / 0.39; interest on outlay 10% a year | bank sells spot at the bid, buys 2m forward at the ask (swap) [F2–F4] | swap `85.72 + 0.39 = − 85.70 =` → 0.41 · `× 100000 =` · outlay `86.05 − 85.70 = × 100000 =` · interest `35000 × 0.10 × 2 ÷ 12 =` | swap cost **₹41,000.00**; outlay ₹35,000 → interest **₹583.33**; exporter gets `8605000 − 41000 − 583.33 =` **₹85,63,416.67** |
