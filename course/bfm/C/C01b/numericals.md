# C01b · Numericals (c1, 2026-11-24)
All bank names, currency amounts, exchange rates, and capital figures are illustrative. Every calculation uses only the IIBF basic 8-function calculator (+ − × ÷ % √, 12 digits, no scientific keys) and has been solved two independent ways (verified in Python Decimal). Exchange rates to 4 decimals where shown; rupee/currency amounts to 2 decimals.
Rules applied (from C01b_fact_sheet): - Net Currency Position: Opening position + Purchases − Sales. Positive (+) = Overbought (Long); Negative (−) = Oversold (Short); Zero = Square [F13]. - Overall Net Open Position (Shorthand Method): Convert each currency's net position to INR; take the higher of (sum of all net longs) or (sum of all net shorts) [F17]. - Maximum Board NOOPL: 25% of Total Capital (Tier I + Tier II) [F16]. - Maximum Board AGL: 6 times Total Capital (Tier I + Tier II) [F21]. - Individual Broker Limit (Securities): 5% of total brokered transactions (purchases + sales, excluding direct deals; Primary Dealers exempt) [F24].
Warm-up · Previous class homework recall (N002–N003)
* Data: Borrow USD 1,000,000 at 5.00% p.a. for 6 months (repay USD 1,025,000). Spot USD/INR = 84.0000; invest ₹8,40,00,000 at 7.00% p.a. for 6 months; 6-month forward = 84.8000. Is there an arbitrage gain? (Illustrative.)
* Method 1 (step-by-step cash flow):
* Interest for 6 months = 7 ÷ 2 = 3.50%.
* Key presses: 84000000 × 1.035 = → ₹8,69,40,000.
* Convert back at forward: 86940000 ÷ 84.8 = → USD 1,025,235.85.
* Subtract repayment: 1025235.85 − 1025000 = → +USD 235.85 (arbitrage gain).
* Method 2 (effective yield ratio):
* 84 × 1.035 ÷ 84.8 = → 1.02523585; multiply by 1,000,000 = USD 1,025,235.85 → gain +USD 235.85.
* Both methods match: +USD 235.85 arbitrage profit.
Q1 (Worked in full) · Net USD Currency Position from a Day's Deals (N051–N054)
* Data: Kaveri Commercial Bank (illustrative) opens the day Overbought (Long) USD 4.50 million (+4.50). During the day, the desk executes four deals:
* Buys USD 3.20 million from an exporter (+3.20)
* Sells USD 5.80 million to an importer (−5.80)
* Buys USD 2.60 million in interbank spot (+2.60)
* Sells USD 1.50 million in interbank forward (−1.50) Find the closing net USD currency position [F13].
* Method 1 (running balance on IIBF calculator):
* Key presses: 4.5 + 3.2 − 5.8 + 2.6 − 1.5 = → +3.00 (USD 3.00 million Overbought / Long).
* Method 2 (total inflows/purchases minus total outflows/sales):
* Total long side: 4.5 + 3.2 + 2.6 = → 10.30.
* Total short side: 5.8 + 1.5 = → 7.30.
* Net position: 10.30 − 7.30 = → +USD 3.00 million (Overbought / Long).
* Commonest wrong answer (trap): Ignoring the opening overbought balance (3.2 − 5.8 + 2.6 − 1.5 = −1.50, wrongly calling it oversold) or dropping the forward deal (forwards are part of net currency position [F16]).
* Both methods match: +USD 3.00 million (Overbought / Long).
Q2 (Faded check) · Net EUR Currency Position Turning Oversold (N055–N057)
* Data: Desk opens Oversold (Short) EUR 2.00 million (−2.00). Deals: buys EUR 4.50m (+4.50), sells EUR 6.25m (−6.25), buys EUR 1.25m (+1.25). Find closing net EUR position [F13].
* Method 1 (total buys minus total sells including opening short):
* Buys: 4.5 + 1.25 = → 5.75.
* Sells + opening short: 2 + 6.25 = → 8.25.
* Net: 5.75 − 8.25 = → −2.50 (EUR 2.50 million Oversold / Short).
* Method 2 (running balance):
* -2 + 4.5 = 2.5; 2.5 − 6.25 = −3.75; −3.75 + 1.25 = → −EUR 2.50 million (Oversold / Short).
* Both methods match: −EUR 2.50 million (Oversold / Short).
Q3 (Your Turn) · Shorthand Overall NOP & 25% NOOPL Cap Check (N058–N061)
* Data: A bank has Total Capital (Tier I + Tier II) of ₹2,000 crore. End-of-day net currency positions (in ₹ crore): USD +180, EUR +70, GBP −140, JPY −160. Compute (a) Overall Net Open Position under the shorthand method, and (b) Maximum permissible Board NOOPL [F16, F17].
* Method 1 (Shorthand method + % key):
* Sum of net longs: 180 + 70 = → ₹250 crore.
* Sum of net shorts: 140 + 160 = → ₹300 crore.
* Overall NOP = higher of 250 or 300 = ₹300 crore.
* Max Board NOOPL: 2000 × 25 % = → ₹500 crore (300 ≤ 500 → within cap, ₹200 crore headroom).
* Method 2 (Divisor check for 25% = ÷ 4):
* Overall NOP = max(250, 300) = ₹300 crore.
* Max NOOPL = 2000 ÷ 4 = → ₹500 crore.
* Commonest wrong answer (trap): Netting longs against shorts (250 − 300 = ₹50 crore — wrong; shorthand method NEVER nets longs against shorts [F17]).
* Both methods match: Overall NOP = ₹300 crore; Max NOOPL = ₹500 crore.
Homework Sum · Multi-Currency Net Position & Shorthand NOP (N100)
* Data: USD opens +12m, buys 18m, sells 22m (spot ₹85.0000); EUR closing net −4m (spot ₹92.0000); GBP closing net −3m (spot ₹108.0000). Find the Overall NOP in ₹ crore [F13, F17].
* Method 1 (INR crore per currency, noting 1 million × ₹1 = ₹0.10 crore, i.e., ÷ 10):
* USD net: 12 + 18 − 22 = → +8m; 8 × 85 ÷ 10 = → +₹68.00 crore.
* EUR net: 4 × 92 ÷ 10 = → −₹36.80 crore.
* GBP net: 3 × 108 ÷ 10 = → −₹32.40 crore.
* Sum of longs = ₹68.00 crore; sum of shorts = 36.8 + 32.4 = → ₹69.20 crore.
* Overall NOP = higher of 68.00 or 69.20 = ₹69.20 crore.
* Method 2 (rupees in millions first, then divide by 10):
* Longs = 8 × 85 = 680 million = ₹68.00 crore.
* Shorts = (4 × 92) + (3 × 108) = 368 + 324 = 692 million = ₹69.20 crore.
* Higher = ₹69.20 crore.
* Both methods match: ₹69.20 crore.
Practice Sum 1 · Individual Broker 5% Cap (Practice Q7)
* Data: A bank's annual securities turnover is ₹2,000 crore: ₹1,200 crore executed through approved brokers and ₹800 crore executed directly with counterparties (no broker). What is the maximum aggregate contract limit for a single approved non-PD broker? [F24]
* Method 1 (% key on brokered turnover only):
* 1200 × 5 % = → ₹60.00 crore.
* Method 2 (divisor ÷ 20):
* 1200 ÷ 20 = → ₹60.00 crore.
* Common trap: Applying 5% to total ₹2,000 crore (₹100 crore) — wrong because direct non-brokered deals are excluded from the denominator [F24].
* Both methods match: ₹60.00 crore.
Practice Sum 2 · Maximum Board Aggregate Gap Limit (Practice Q8)
* Data: A commercial bank has Tier I capital of ₹1,200 crore and Tier II capital of ₹300 crore. Calculate the maximum Aggregate Gap Limit (AGL) its Board may fix under RBI's Master Direction [F21].
* Method 1 (sum capital then × 6):
* Total capital: 1200 + 300 = → ₹1,500 crore.
* Max AGL: 1500 × 6 = → ₹9,000.00 crore.
* Method 2 (multiply separately then add):
* 1200 × 6 = 7200; 300 × 6 = 1800; 7200 + 1800 = → ₹9,000.00 crore.
* Common trap: Using only Tier I capital (1200 × 6 = ₹7,200 crore) — wrong because AGL ceiling is 6× total capital (Tier I + Tier II) [F21].
* Both methods match: ₹9,000.00 crore.