# C04b · Practice Questions (c1, 2026-11-24)
Original questions written from C04b_fact_sheet (rules as at 31 December 2026). All figures are illustrative. Covers all 7 question kinds: define, purpose, who/when/how much, compare, exception, calculate, and apply to a case. Answers and one-line reasons at the end.


1. (Who/When — 2025 regulatory update) With effect from 9 May 2025, RBI exercises its regulatory and supervisory powers under Section 3 of the Payment and Settlement Systems Act, 2007 through which body?
(a) Board for Regulation and Supervision of Payment and Settlement Systems (BPSS)
(b) Payments Regulatory Board (PRB)
(c) Clearing Corporation of India Limited (CCIL)
(d) National Payments Corporation of India (NPCI)
2. (Compare — RTGS vs NEFT) Which of the following statements accurately distinguishes RTGS from NEFT as at 31 December 2026?
(a) RTGS has a ₹2 lakh minimum and settles continuously one-by-one; NEFT has no RBI minimum and settles in 48 half-hourly batches
(b) RTGS settles in 48 half-hourly batches; NEFT settles continuously transaction-by-transaction
(c) Both RTGS and NEFT impose a ₹2 lakh minimum and a ₹50 crore maximum limit
(d) RTGS operates 24x7x365, whereas NEFT operates only during bank working hours
3. (Exception — Cash NEFT) A walk-in customer who does not hold a bank account wants to remit funds to a relative's bank account via NEFT by depositing cash at a bank branch. What is the maximum permissible amount per transaction?
(a) ₹10,000
(b) ₹25,000
(c) ₹50,000
(d) ₹2,00,000
4. (Define / Trap — CCIL & Clearcorp) Which statement correctly describes the Clearing Corporation of India Limited (CCIL) and its platforms?
(a) CCIL is a statutory financial market regulator created under the SEBI Act, 1992
(b) CCIL is an authorised payment system and Central Counterparty (CCP) regulated by RBI under the PSS Act, 2007, guaranteeing settlement through novation
(c) CCIL settles only retail NEFT and UPI transactions on a gross basis
(d) FX-CLEAR is CCIL's platform for corporate equity dematerialisation
5. (Who/When — Launch Years & NDS-OM) Which chronological order of launch dates is correct?
(a) NDS-OM (2025) → NDS (2022) → RTGS (2004) → NEFT (2005)
(b) RTGS (March 2004) → NDS (February 2002) → NEFT (November 2005) → NDS-OM (August 2005)
(c) NDS (February 2002) → RTGS (March 2004) → NDS-OM (August 2005) → NEFT (November 2005)
(d) NEFT (2002) → NDS (2004) → RTGS (2005) → NDS-OM (2006)
6. (Purpose / Concept — DvP & Forex Risk) Under RBI's DvP-III model used by CCIL for Government securities settlement, how are the two legs settled, and why is domestic-style DvP not automatically achieved in cross-border forex trades?
(a) Securities gross and funds net; forex fails DvP because of brokerage fees
(b) Both securities and funds are settled on a net basis; cross-border forex faces principal risk due to time-zone differences and non-overlapping settlement cut-offs
(c) Both securities and funds are settled gross; forex faces risk only on holidays
(d) Securities net and funds gross; forex trades are settled through NSDL and CDSL
7. (Apply to a Case — Systems & LEI) A listed Indian company initiates a ₹65 crore payment to a supplier's bank account via NEFT, while a bank's treasury buys ₹100 crore of Government securities anonymously on a screen-based platform. Which combination of rules applies?
(a) No LEI is needed because NEFT is a retail system; the bond trade goes on FX-CLEAR
(b) A 20-digit LEI is mandatory for the ₹65 crore NEFT transfer; the bond trade is matched on NDS-OM on price-time priority and flows via STP to CCIL
(c) The ₹65 crore transfer is barred on NEFT because NEFT is capped at ₹50 crore; the bond settles on CDSL
(d) Only the beneficiary needs an LEI; the bond trade requires manual back-office re-keying into CCIL
8. (Calculate — Keyed-in Numerical) On a single settlement day on NDS-OM, a bank buys ₹250 crore (face value) of a Government security at ₹100.00 and sells ₹150 crore (face value) of the same security at ₹102.00. Under CCIL's DvP-III settlement, calculate the net funds payable by the bank (in ₹ crore, to 2 decimal places).
Answers and One-Line Reasons
   1. (b) Under amended Section 3 of the PSS Act, 2007, the 6-member Payments Regulatory Board (PRB) replaced BPSS with effect from 9 May 2025 [F32, F33].
   2. (a) RTGS settles continuously transaction-by-transaction with a ₹2,00,000 minimum (no upper cap), while NEFT settles in 48 half-hourly DNS batches with no RBI minimum or maximum [F1, F4, F9, F10, F11].
   3. (c) Non-account holders may originate cash-based NEFT remittances up to a maximum of ₹50,000 per transaction [F11].
   4. (b) CCIL is an RBI-authorised payment system / CCP under the PSS Act (not a regulator) that interposes itself via novation to guarantee settlement [F21].
   5. (c) Primary RBI records confirm NDS launched 15 Feb 2002, RTGS on 26 Mar 2004, NDS-OM on 1 Aug 2005, and NEFT in Nov 2005 [F3, F9, F18, F19].
   6. (b) DvP-III nets both securities and funds (in force at CCIL since 2 Apr 2004), whereas cross-border forex trades face principal/settlement risk from time-zone gaps [F23, F24].
   7. (b) Non-individual RTGS/NEFT transfers of ₹50 crore and above require a 20-digit LEI, and NDS-OM matches G-sec orders anonymously on price-time priority with STP to CCIL [F14, F19, F25].
   8. ₹97.00 crore — Gross buy outflow = 250 × 100 ÷ 100 = ₹250.00 cr; gross sell inflow = 150 × 102 ÷ 100 = ₹153.00 cr; net funds payable under DvP-III = 250 − 153 = ₹97.00 cr (check: net purchase ₹100 cr at par minus ₹2 × 150 ÷ 100 = ₹3.00 cr profit = ₹97.00 cr) [F23].