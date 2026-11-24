# C07 · Practice (c1, 2026-11-24)
Original questions written from C07_fact_sheet (rules as at 31 December 2026). All names and figures are illustrative. Answers and one-line reasons citing [F#] are at the end.
Questions
1. Who approves a commercial bank's Net Overnight Open Position Limit (NOOPL) and Aggregate Gap Limit (AGL) under RBI's Master Direction on Risk Management and Inter-Bank Dealings?
(a) The Chief Dealer, ratified monthly by ALCO
(b) The Reserve Bank of India, through prior written approval before any limit takes effect
(c) The bank's Board of Directors, communicated immediately to RBI through CIMS/email
(d) FEDAI, in consultation with FIMMDA
2. Why is a bank's daylight open foreign exchange position limit typically set higher than its overnight limit?
(a) RBI mandates daylight limits to be twice the NOOPL
(b) Exchange risk is easier to manage while markets are open and to accommodate client flows, whereas overnight positions face closed-market uncertainty
(c) Overnight positions attract zero market-risk capital charge
(d) Daylight positions are excluded from mark-to-market valuation
3. Case study (Control breaches): During a concurrent audit of Deccan Commercial Bank's treasury, the auditor notes three findings: (i) a dealer authorised a brokerage invoice for an empanelled broker; (ii) 7.5% of total brokered bond deals for the year went through one non-Primary-Dealer broker with no written justification or Board intimation; and (iii) a dealer has not taken continuous leave for 20 months. Which of these represent control breaches under RBI guidelines?
(a) Only (ii)
(b) Only (i) and (ii)
(c) Only (ii) and (iii)
(d) All three: (i), (ii), and (iii)
4. An Indian bank pays EUR 10 million to a European counterparty in the morning, expecting USD 11 million in New York later that day. Before New York settles, the European counterparty is closed by regulators. Which risk has crystallised, and what is at stake?
(a) Market risk; replacement cost only
(b) Pre-settlement credit risk; mark-to-market difference only
(c) Settlement (Herstatt) risk; the full principal amount paid out
(d) Operational risk; brokerage and transaction fees
5. Under RBI's current Standardised Duration Method for interest-rate general market risk, matched long and short sensitivities within the same time band attract a vertical disallowance of:
(a) 5%, designed to capture basis risk
(b) 10%, designed to capture yield-curve curvature risk
(c) 30%, designed to capture liquidity risk
(d) 40%, designed to capture issuer-specific credit risk
6. Which statement accurately reflects RBI's Minimum Capital Requirements for Market Risk Directions, 2026 (issued 21 September 2026) as at the 31 December 2026 rule cut-off?
(a) They are already in force from 1 October 2026 and place HTM, AFS, and HFT in the trading book
(b) They are "issued, coming" (effective 1 April 2027), defining the trading book as all HFT instruments and applying FX risk across both trading and banking books
(c) They abolish market-risk capital for foreign exchange positions in the banking book
(d) They allow full capital credit for internal risk transfers from the trading book to the banking book
7. Keyed-in numerical (Horizontal disallowance): After vertical offsetting, a bank's trading book has net sensitivities of +₹40 crore in Zone 1, −₹25 crore in Zone 2, and −₹10 crore in Zone 3. Using RBI's horizontal disallowance table (40% between adjacent zones, 100% between Zones 1 and 3), compute the total horizontal disallowance (in ₹ crore).
8. Which statement is TRUE regarding a Scheduled Commercial Bank's investment portfolio as at 31 December 2026?
(a) HTM investments are capped at 25% of total investments, and the bank must maintain an Investment Fluctuation Reserve (IFR) of 2% of AFS + HFT
(b) Unquoted InvIT/REIT units are valued at disclosed NAV (or ₹1 if NAV is undisclosed or infrequently traded), and IFR has been discontinued w.e.f. 18 May 2026
(c) Investments may be shifted freely between HTM and AFS once every year in April with ALCO approval alone
(d) IFR was discontinued for all banks in India, including Small Finance Banks, UCBs, and RRBs
Answers and Reasons
   1. (c) — The Board of Directors fixes NOOPL (≤ 25% of total capital) and AGL (≤ 6× total capital) and communicates them immediately to RBI via CIMS/email; prior RBI approval is not required [F5, F8, F9].
   2. (b) — Daylight limits are set higher because active market management and client flows occur during trading hours, while overnight positions carry greater closed-market uncertainty [F7].
   3. (d) — All three are breaches: Back Office (never dealers) must process brokerage [F11], individual broker share is capped at 5% (PDs exempt) with written reasons and post-facto Board reporting for any breach [F11], and dealers must take an annual compulsory two-week continuous break [F4].
   4. (c) — Paying one currency leg before receiving the counter-currency across time zones is settlement (Herstatt) risk, exposing the bank to loss of the full principal [F17].
   5. (a) — Under the Standardised Duration Method, matched long and short positions within the same time band attract a 5% vertical disallowance to capture basis risk [F24].
   6. (b) — Issued 21 Sep 2026 and effective 1 Apr 2027 ("issued, coming"), the 2026 Directions define the trading book as all HFT instruments, cover FX risk on both books, and disallow capital credit for trading-to-banking internal risk transfers [F26].
   7. ₹20.00 crore — Zone 1 (+40) offsets Zone 2 (−25) for ₹25 crore × 40% = ₹10 crore; remaining Zone 1 (+15) offsets Zone 3 (−10) for ₹10 crore × 100% = ₹10 crore; total = ₹20.00 crore [F25].
   8. (b) — Effective 22 Sep 2026, unquoted InvIT/REIT units are valued at disclosed NAV (else ₹1) [F33]; effective 18 May 2026, IFR is discontinued for commercial banks and LABs (while SFBs, PBs, UCBs, RCBs, and RRBs retain IFR on balance-sheet dates) [F34]. The old 25% HTM cap is removed [F28] and reclassification requires Board + prior RBI DoS approval [F32].