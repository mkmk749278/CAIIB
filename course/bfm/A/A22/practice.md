# # A22 · Practice (c1, 2026-11-24)


Our own questions, written strictly from `A22_fact_sheet.md` (rules as at 31 December 2026). No numericals in this lesson. Options are balanced in length, use realistic exam traps, and contain no inline citations. Answers and one-line reasons at the end.


1. Which statement accurately describes how ICC's eUCP Version 2.1 operates in a digital letter of credit?
   (a) It replaces UCP 600 completely whenever any document is sent electronically
   (b) It supplements UCP 600 and is used alongside it for electronic presentations
   (c) It governs electronic documentary collections under URC 522
   (d) It automatically grants statutory legal title to electronic bills of lading in every country


2. Which entity originally developed India's Structured Financial Messaging System (SFMS), and which entity operates it round the clock today?
   (a) Developed by NPCI and operated by CCIL
   (b) Developed by IFTAS and operated by IDRBT
   (c) Developed by IDRBT and operated by IFTAS
   (d) Developed by RBIH and operated by NPCI


3. When did the coexistence period between legacy MT messages and ISO 20022 for cross-border payments and reporting (CBPR+) end on SWIFT?
   (a) 20 December 2013
   (b) 22 November 2020
   (c) 22 November 2025
   (d) 14 November 2026


4. In a SWIFT GPI payment message, what is the rule for an intermediary bank handling the 36-character UETR?
   (a) It must generate a fresh UETR at each hop so each correspondent can reconcile its own leg
   (b) It must strip the UETR before forwarding the payment to any non-GPI beneficiary bank
   (c) It must pass the original UETR onward unaltered throughout the payment chain
   (d) It uses the UETR only for domestic RTGS transfers and omits it on cross-border messages


5. Under the Reserve Bank of India (Trade Receivables Discounting System) Directions, 2026 dated 23 June 2026, discounting of a Factoring Unit on TReDS is:
   (a) With full recourse to the MSME seller if the corporate buyer defaults on the due date
   (b) Strictly without recourse to the MSME seller, with assignment filed on CERSAI
   (c) Permitted only for cross-border export bills in GIFT IFSC
   (d) Subject to buyer set-offs for quality disputes after acceptance


6. Which of the following is explicitly excluded (on the negative list) from testing in RBI's Regulatory Sandbox?
   (a) Smart contracts and permissioned blockchain applications
   (b) Cross-border payment solutions submitted on tap
   (c) Cryptocurrency or crypto-asset services and Initial Coin Offerings
   (d) Application Programming Interface (API) services for retail payments


7. An Indian exporter and an overseas importer agree to execute a documentary credit on a permissioned blockchain platform. Place the following four stages in the correct chronological order:
   1. Exporter ships goods and uploads hashed electronic trade documents onto the ledger
   2. Smart contract checks document data against LC conditions and triggers the payment instruction
   3. Sales and LC terms are encoded as a smart contract and the issuing bank records the digital LC
   4. Final money settlement occurs via integrated banking payment rails or central bank digital currency
   (a) 3 → 1 → 2 → 4
   (b) 1 → 3 → 2 → 4
   (c) 3 → 2 → 1 → 4
   (d) 2 → 3 → 1 → 4


8. Under RBI's consolidated Master Direction on Regulation of Payment Aggregators (15 September 2025), what is the maximum per-transaction value limit for Payment Aggregators Cross-Border (PAs-CB)?
   (a) ₹10 lakh per inward or outward transaction
   (b) ₹25 lakh per inward or outward transaction
   (c) ₹50 lakh per inward or outward transaction
   (d) USD 2,500 per inward transaction only


---


## Answer key


1. **(b)** — eUCP Version 2.1 is a supplement to UCP 600, used in conjunction with UCP 600 for electronic presentations; eURC 1.1 covers collections and legal title depends on national law [F12, F13, F14].
2. **(c)** — IDRBT (established 1996) developed SFMS and INFINET, while IFTAS (RBI's wholly owned subsidiary) took over and operates them 24×7×365 [F15, F16].
3. **(c)** — Coexistence between legacy MT and ISO 20022 for CBPR+ began in March 2023 and ended on 22 November 2025 (20 Dec 2013 was India's NG-RTGS ISO 20022 adoption; 22 Nov 2020 was Universal Confirmations) [F4, F5, F11].
4. **(c)** — A UETR is a 36-character unique reference in field 121 that intermediary banks must receive, copy, and pass on unaltered to enable end-to-end tracking [F10].
5. **(b)** — Under the 2026 TReDS Directions, discounted Factoring Units are strictly without recourse to MSME sellers, buyer payment is unconditional with no set-offs, and assignments are filed with CERSAI [F20].
6. **(c)** — RBI's Enabling Framework for Regulatory Sandbox (28 Feb 2024) places cryptocurrency/crypto-asset services and ICOs on the negative list while allowing smart contracts, APIs, blockchain applications, and cross-border payments [F28, F30, F31].
7. **(a)** — First the smart contract and digital LC are recorded (3), then the exporter ships and uploads hashed e-documents (1), next the smart contract verifies compliance and triggers payment (2), and finally money settles over banking rails or CBDC (4) [F43].
8. **(b)** — RBI's 15 September 2025 Master Direction caps PA-CB transactions at ₹25 lakh per inward or outward transaction (USD 2,500 is the MTSS cap; ₹10 lakh is the Regulatory Sandbox net-worth floor) [F29, F32, F33].