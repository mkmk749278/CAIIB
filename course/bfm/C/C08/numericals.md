# C08 · Numericals (c1, 2026-11-24)
All names, rates, prices, and amounts are illustrative. Every calculation uses only the IIBF basic 8-function calculator (+ − x ÷ % √, 12 digits, no scientific keys) and has been verified two independent ways in Python (Decimal); all pairs match exactly. Exchange rates and bond prices per ₹100 to 4 decimal places where applicable; rupee totals to 2 decimal places.
Core Rules (from C08_fact_sheet)
* USD/INR Currency Futures lot size: 1 lot = USD 1,000; tick size = ₹0.0025; cash-settled in INR at the FBIL Reference Rate on expiry; daily M2M settled in cash on T+1 [F12, F22].
* Futures payoff direction: Buyer (Long) Payoff = (Settlement − Contract) x Notional; Seller (Short) Payoff = (Contract − Settlement) x Notional [F23].
* Interest Rate Futures (IRF) lot size: 1 lot = ₹2,00,000 face value (= 2,000 units of ₹100 par) [F28].
Sum 1 (Worked) · Daily Mark-to-Market (M2M) on Short USD/INR Futures (Ch 2)
Data
An exporter sells (shorts) 50 lots of USD/INR futures (1 lot = USD 1,000 -> notional USD 50,000) at ₹84.5000 (illustrative). Day 1 Daily Settlement Price (DSP) closes at ₹84.2000. Day 2 DSP closes at ₹84.6500. Compute Day 1 M2M, Day 2 M2M, and cumulative net M2M. [F12, F22, F23]
Method 1 (IIBF calculator key presses — per-dollar move x total USD)
* Total USD notional: 50 x 1000 = -> 50,000
* Day 1 move for seller (contract − Day 1 DSP): 84.5000 − 84.2000 = -> +0.3000
* Day 1 M2M gain: 0.3000 x 50000 = -> +₹15,000.00 (credited on T+1)
* Day 2 move for seller (Day 1 DSP − Day 2 DSP): 84.2000 − 84.6500 = -> −0.4500
* Day 2 M2M loss: 0.4500 x 50000 = -> −₹22,500.00 (debited on T+1)
* Cumulative net M2M: 15000 − 22500 = -> −₹7,500.00
Method 2 (Contract value difference & overall entry-to-Day-2 check)
* Entry value: 50000 x 84.5000 = ₹42,25,000.00; Day 1 value: 50000 x 84.2000 = ₹42,10,000.00 -> Day 1 gain = +₹15,000.00.
* Day 2 value: 50000 x 84.6500 = ₹42,32,500.00 -> Day 2 change = 4210000 − 4232500 = −₹22,500.00.
* Overall net check: (84.5000 − 84.6500) x 50000 = −0.1500 x 50000 = −₹7,500.00.
* Verification: Both methods match exactly (+₹15,000.00; −₹22,500.00; net −₹7,500.00).
Common Wrong Answer (Trap)
Computing Day 2 M2M from the original entry price 84.5000 instead of Day 1's DSP 84.2000 (giving −₹7,500.00 for Day 2 instead of −₹22,500.00). Daily M2M always resets to the prior day's settlement price.
Sum 2 (Faded) · Currency Futures Final Cash Settlement Direction & Payoff (Ch 3)
Data
An importer buys (goes long) 20 lots of USD/INR futures (USD 20,000) at ₹84.4000 (illustrative). On the last trading day, the FBIL Reference Rate is ₹85.1500. Compute the settlement direction and total rupee payoff. [F22, F23]
Method 1 (IIBF calculator key presses — per-dollar gain x total USD)
* Per-dollar gain for buyer: 85.1500 − 84.4000 = -> +0.7500
* Total USD notional: 20 x 1000 = -> 20,000
* Total rupee gain: 0.7500 x 20000 = -> +₹15,000.00 (received by buyer in INR)
Method 2 (Per-lot gain x number of lots)
* Gain per lot: 0.7500 x 1000 = -> ₹750.00
* Multiply by 20 lots: 750 x 20 = -> +₹15,000.00
* Verification: Both methods match exactly (+₹15,000.00 received by the buyer).
Common Wrong Answers (Traps)
* Forgetting the lot size of USD 1,000 (0.7500 x 20 = ₹15.00 — off by 1,000x).
* Reversing direction and assuming the buyer loses when the rupee weakens (a buyer of USD/INR futures gains when USD rises).
Sum 3 (Your Turn) · Hedging a G-Sec Bond Book with Interest Rate Futures (Ch 4)
Data
A bank holds ₹10 crore face value of 10-year G-Secs priced at ₹101.50 per ₹100 face value (illustrative). Fearing a yield rise, the treasury shorts 500 lots of 10-year G-Sec IRF (1 lot = ₹2,00,000 face value = 2,000 units; 500 lots = ₹10 crore) at ₹101.50. Yields rise and both the G-Sec and IRF drop to ₹100.25. Compute the bond-book loss, the IRF gain, and the net hedged result. [F28, F30]
Method 1 (IIBF calculator key presses — price move x units)
* Price drop per ₹100 face value: 101.50 − 100.25 = -> 1.25
* Bond-book loss: 100000000 ÷ 100 x 1.25 = -> −₹12,50,000.00 (−₹12.50 lakh)
* Short IRF gain: 1.25 x 2000 x 500 = -> +₹12,50,000.00 (+₹12.50 lakh)
* Net hedged result: −1250000 + 1250000 = -> ₹0.00 (perfect offset in this illustrative case)
Method 2 (Per-lot gain x 500 lots vs percentage drop on ₹10 crore)
* Bond-book loss: 10,00,00,000 x 1.25 % = -> −₹12,50,000.00
* IRF gain per lot: 1.25 x 2000 = ₹2,500.00; across 500 lots: 2500 x 500 = -> +₹12,50,000.00
* Net hedged result: ₹0.00
* Verification: Both methods match exactly (−₹12,50,000.00 bond loss; +₹12,50,000.00 IRF gain; net ₹0.00).
Common Wrong Answer (Trap)
Buying (going long) IRF instead of shorting IRF — when yields rise and prices fall, a long IRF loses another ₹12,50,000.00, doubling the bank's loss to −₹25,00,000.00.