# A02 script c1 · independent review · SUBJECT EXPERT

- **Reviewer**: subject-expert agent (fresh context), 2026-11-21. Rule version checked: as at 31 Dec 2026.
- **Reviewed**: `course/bfm/A/A02/script_class.md` c1 (spoken lines N001–N078 and every cue line);
  `research/bfm/facts/A3.1-A3.3_A02.md`.
- **Sources re-opened today**: RBI KYC Directions 2025 (updated as on 1 Oct 2026), definitions (ii), (xv), para 6(4)(ii),
  para 73; RBI A.P. (DIR) Circular No. 19, 17 Jul 2026 (SRVA) paras 3–8 and Annex; RBI SRVA FAQ (PDF) Q1–Q16;
  RBI/2026-27/08, 9 Apr 2026 (cross-border inward payments) paras 3–5; RBI RTGS FAQ Q5, Q6, Q13, Q14, Q18–Q21;
  RBI NEFT FAQ; FEDAI Rules 10th ed. updated to 20 Aug 2026 (FEDAI's PDF, 510,961 bytes) Rules 2.2, 2.5, 4.5;
  Federal Reserve Fedwire page; The Clearing House CHIPS page; ECB T2 page; Bank of England CHAPS page; web search
  for Swift ISO 20022 end of coexistence and IFTAS/SFMS.

## Verdict: **ADOPT WITH FIXES**

No High findings: every number, date and name spoken is right. Four Medium findings (one overstatement against the
FAQ wording, two incomplete definitions/rules an exam can test, one missing depth-checklist item) and nine Low.

## Findings

| # | Sev | Line | What is wrong | Source | Exact fix |
|---|---|---|---|---|---|
| 1 | Medium | N021 (+ cue) | Shell bank definition gives only half the test. The definition has two limbs: no physical presence where incorporated and licensed **and** unaffiliated with a regulated financial group under effective consolidated supervision. A branch-less subsidiary of a regulated group is not a shell bank; an exam option can turn on this. | KYC Directions 2025, definition (xv) | N021: "A shell bank has no real presence in the country where it's licensed, and no regulated group standing behind it. A brass plate, a local agent, nothing more." Cue: "shell bank = no mind and management where licensed + not part of a regulated, supervised group". |
| 2 | Medium | N063 (+ cue, map N074 unaffected) | "So he carries no exchange-rate risk" overstates. RBI's FAQ says settlement in INR "will **reduce** the exchange rate risk for the Indian exporters and importers". "Eliminates" vs "reduces" is a classic option pair. | SRVA FAQ Q15 | N063: "Why does it matter? The Indian trader invoices in rupees, so his exchange-rate risk is reduced." Cue: "INR invoice → less exchange risk for the Indian trader". |
| 3 | Medium | N059 (+ cue); fact sheet row 17 | FEDAI 2.5(b) as amended 7 Sep 2026 now **first** says the bank shall endeavour to credit export proceeds received in forex market hours the same business day (after hours: next business day), subject to Nostro confirmation and FEMA; the "two working business days" runs from receipt of the credit advice / Nostro statement and is the outer limit. 2.5(c): compensation is "at the minimum interest rate charged on export credit" plus exchange loss per bank policy. The script presents two working days as the rule and gives no rate; the fact sheet row 17 also omits the amended same-day text. | FEDAI Rule 2.5(b) (amended AR 03/2026), 2.5(c) | N059: "For export bills sent on collection, FEDAI applies the same idea. Same business day where it can, and never more than two working days after the Nostro credit advice. If late, the bank pays compensation at its minimum export-credit interest rate." Cue: "collection: same day where possible · max 2 working days from Nostro credit advice · late → min export-credit rate + exchange loss". Fact sheet row 17: add the amended 2.5(b) same-day endeavour. |
| 4 | Medium | N008 (+ cue) | Services list is payments, receipts, clearing, FX only. Depth checklist A3.1 "Add to our plan (A02): list of correspondent services" and fact-sheet row 3 (collection of bills, LC advising and confirmation, reimbursement under LCs, guarantees, lines of credit, investment of surplus balances, credit reports) are not taught. Syllabus A3.1 is "accounts **and other services**". | depth/A.md A3.1 item 2; fact sheet row 3; KYC definition (ii) | After N008 add one line: "And trade services too. Collecting bills, advising and confirming letters of credit, paying LC reimbursements, guarantees, credit lines, and investing surplus balances." Cue card: two columns "accounts: payments · receipts · clearing · FX" / "trade and other: bill collection · LC advising/confirming · reimbursement · guarantees · credit lines · surplus investment · credit reports". |
| 5 | Low | N020, N071 | "The Board approves it afterwards": the text says the Board **or the committee empowered for this purpose**. | KYC para 73(3); para 6(4)(ii) | Cue N020: "post facto: Board (or empowered committee)". Spoken may stay. |
| 6 | Low | N034 | "Where does the dollar finally settle? In the payment systems." Settlement is in the Nostro; a payment system is used only when the payee's bank is not with the same correspondent (else a book transfer). N050 states it correctly. | Concept; fact sheet row 26 | N034: "Now, how does the dollar move between banks in New York? Through the payment systems." |
| 7 | Low | N035 | "Gross ... settled on its own, in full, the moment it's sent" merges gross with real time (deferred gross exists). | Concept | "Gross means each payment is settled on its own, in full. Real-time gross means the moment it's sent." |
| 8 | Low | N038 | "The net type" is acceptable for the exam, but CHIPS now settles continuously through the day with finality (95% in seconds) using a liquidity-saving mechanism; old books say "end-of-day net". Avoid implying end-of-day. | TCH CHIPS page | Cue: "CHIPS: The Clearing House (private) · nets/offsets continuously, final through the day · far less funding than gross". |
| 9 | Low | N044 | Return rule is "within one hour of receipt ... **or before the end of the RTGS Business Day, whichever is earlier**". | RTGS FAQ Q18 | Cue: "else return within 1 hour (or by end of RTGS day, if earlier)". |
| 10 | Low | N058 | Rule is "shall **endeavour**", "subject to compliance with the extant FEMA and other regulatory requirements". "Should reach" is close; cue omits the condition. | RBI/2026-27/08 para 3 | Cue: "aim: in market hours → same business day · after → next (subject to FEMA)". |
| 11 | Low | N064–N065 | The trigger is "after close of operating hours of banks", not a clock time. 8 p.m. works only if read as after hours. | RBI/2026-27/08 para 3; FEDAI 4.5 | N064: "An inward payment message arrives at eight at night, after the bank has closed." |
| 12 | Low | N042 | NEFT credit timeline (within two hours of batch settlement), in the fact sheet row 33, is a "when" question and is not taught. | NEFT FAQ | Add to N042: "The beneficiary's account should be credited within two hours of the batch." Cue: "credit within 2 h of batch". |
| 13 | Low | N031–N032 | MT202 → pacs.009 (and MT202 COV for cover payments) are on the fact sheet; card shows only MT103 → pacs.008. | Swift ISO 20022 (end of CBPR+ coexistence 22 Nov 2025) | Cue N032: "MT103 → pacs.008 · MT202 → pacs.009". |
| 14 | Low | fact sheet row 34 / IFTAS source line | SFMS (with INFINET) passed from IDRBT to IFTAS effective 1 Apr 2016 per IDRBT's IFTAS page; RBI wholly acquired IFTAS in March 2019 (an IDRBT 2026 brochure says Feb 2015: conflict). Script uses no date, so no script change. | idrbt.ac.in/iftas; RBI pages | Fact sheet: add "taken over by IFTAS 2016; RBI subsidiary since Mar 2019 (freeze: confirm)". |

## Verified correct
- **Correspondent / respondent** (N007–N008): matches KYC definition (ii).
- **Nostro / Vostro / Loro / mirror** (N009–N018, N022–N024, N068–N069): consistent naming from the speaker's side;
  every case answer right.
- **Due diligence** (N019): business, reputation, supervision, AML/CFT controls = KYC para 73(1)–(2). **Prior senior
  management, post facto Board** (N020, N070–N071) = para 73(3). **Never a shell bank, no approval can permit it**
  (N020, N024–N025) = para 73(7); "not with any approval" is right (the bar is absolute).
- **SWIFT** (N028–N030, N049–N050): members' cooperative, Belgium, 1973; carries messages, not money.
- **MT103 / MT202 / MT700** (N031, N033–N034) correct. **ISO 20022 for payments since Nov 2025** (N032): CBPR+
  coexistence ended 22 Nov 2025 (Swift); category 7 (LC) messages remain MT.
- **Fedwire** (N037): Federal Reserve Banks, real-time gross, immediate/final/irrevocable (Fed page).
- **CHIPS** (N038–N039): The Clearing House, private, high-value USD, liquidity-saving matching/offsetting, far less
  funding than gross (TCH page). Trap "CHIPS ≠ Fed" right.
- **CHAPS** (N040, N051–N052, N069–N070): Bank of England is the operator (since Nov 2017, from CHAPS Co); settled in
  the BoE's real-time gross settlement infrastructure; gross.
- **T2** (N040): Eurosystem euro RTGS; launched March 2023, replacing TARGET2 (ECB page).
- **RTGS** (N041, N044–N045, N047–N048): RBI; 24x7x365 from 14 Dec 2020; min Rs 2,00,000, no maximum; credit within
  30 minutes; return within one hour; repo + 2% compensation, credited automatically without a request (FAQ Q5, Q6,
  Q13, Q18–Q21).
- **NEFT** (N042): RBI-owned and operated; half-hourly batches; 24x7x365; no minimum.
- **SFMS / IFTAS** (N043): SFMS carries RTGS/NEFT messages; IFTAS, wholly owned RBI subsidiary, runs it.
- **TT vs bill rate** (N053–N055): Nostro timing logic sound; NTP interest recovered separately (FEDAI 2.2 and the
  bill-buying rule "interest for the normal transit period").
- **Inward payments from Oct 2026** (N056–N058, N064–N065): inform immediately; after operating hours at the start of
  the next business day; reconcile near real time or normally within one hour; same business day in forex market
  hours, else next (RBI/2026-27/08 para 3, effective six months from 9 Apr 2026 = 9 Oct 2026; mirrored in FEDAI 4.5).
- **SRVA** (N060–N062, N065–N066): AD bank may open SRVA of its own overseas branch or a bank resident outside India
  (para 3, FEM Deposit Regs 7(1)); no RBI approval (Annex row 8, since Aug 2025); additional arrangement; all
  permissible current and capital account transactions (para 4); surplus in debt instruments incl. NCDs, bonds, CP
  (para 6, Annex row 9); existing Rupee Vostro cannot be used as SRVA (FAQ Q3).
- **Rule-version card**: all four documents and dates exist as cited.
