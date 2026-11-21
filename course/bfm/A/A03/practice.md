# A03 practice (our own questions; answers checked in `numericals.md` / `tools/check/fx_merchant_rates.py`)

All data illustrative. Basic calculator. Rates to 4 decimals (half up); rupees to paise.

1. Interbank USD/INR 85.60 / 85.62; TT selling margin 0.12%. TT selling rate? (a) 85.7027 (b) 85.7227 (c) 85.6627 (d) 85.7224
   **Answer: (b) 85.7227.** Selling starts from the ask: 85.62 × 1.0012. (a) is off the bid.
2. Same quote; TT selling 0.12%, bill selling a further 0.15%. Bill selling? (a) 85.8513 (b) 85.8511 (c) 85.8484 (d) 85.7227
   **Answer: (a).** Two steps on the full TT selling figure. (b) adds 0.27% to the ask in one step.
3. Which rate converts an inward remittance into rupees? (a) bill buying (b) TT buying (c) TT selling (d) notes buying
   **Answer: (b).** FEDAI 4.4.
4. An export bill bought earlier is returned unpaid before crystallisation. The bank recovers the rupee equivalent at:
   (a) bill buying (b) bill selling (c) TT selling (d) TT buying
   **Answer: (c).** FEDAI 2.1(d): undoing a purchase flips to the selling side, TT rung.
5. No options. EUR 5,000 inward; EUR/INR 99.20 / 99.24; TT buying 0.08%. Rupees credited?
   **Answer: ₹4,95,603.00** (99.20 × 0.9992 = 99.1206; × 5,000).
6. No options. Import bill GBP 8,000, no cover; GBP/INR 114.50 / 114.55; TT selling 0.12%, bill selling +0.15%. Rupees?
   **Answer: ₹9,18,876.00** (114.8595 × 8,000).
7. No options. JPY 5,00,000 outward; JPY/INR 57.40 / 57.45 per 100; TT selling 0.15%. Rupees?
   **Answer: ₹2,87,681.00** (57.5362 per 100 × 5,000).
8. An NRI's FCNR(B) deposit of USD 30,000 matures and is paid in rupees. In exam sums the rate is:
   (a) TT selling (b) TT buying (c) bill buying (d) the card rate on the deposit date
   **Answer: (b).** In/out principle of FEDAI 4.1/4.4 (convention): the bank buys the dollars.
