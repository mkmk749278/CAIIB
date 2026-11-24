# C04b · "How money and bonds actually move" · CLASS EDITION (script c2, with cue sheet)
* Status: **c1 GEMINI DRAFT, gate PASS (after Gemini cut it from about 3,300 words), full review pending** (owner, 2026-11-24: "save as drafts, check later"). Not locked: do not voice until reviewed.
* Plan: course/bfm/C/plans_C.md §C04b (v4 split from C04: C4.3 Payment and settlement systems; v3 additions (1)–(4)). Course order v4: C04 → C04b → C05.
* Syllabus: C4.3 (Payment and settlement systems: RTGS vs NEFT, INFINET/SFMS/SWIFT, NDS/NDS-OM, CCIL, FX-CLEAR, TREPS, DvP, STP, depositories, PSS Act 2007 and Payments Regulatory Board).
* Facts: C04b_fact_sheet, rows cited as [F1]–[F33]. Sums: C04b_numericals. Practice: C04b_practice.
* Rule version (opening card): "Payment and Settlement Systems Act, 2007 · Payments Regulatory Board Regulations, 2025 (PRB w.e.f. 9 May 2025) · RBI RTGS FAQs (14 Oct 2026) & NEFT FAQs (20 Nov 2026) · RBI LEI Circular (5 Jan 2021) · Master Direction – Access Criteria for NDS-OM Directions, 2025 (updated 27 Apr 2026) · Master Direction – Repo Directions, 2025 · Depositories Act, 1996 · as at 31 December 2026".
* Greeting / goodbye (new, verified not in course/bfm/greetings.md):
   * Greeting: "Hello, everyone. Settle in with your notebook; tonight we trace the pipes that carry India's money and bonds."
   * Goodbye: "That's the plumbing of Indian banking, start to finish. Rest well tonight, and I'll see you in the next class."
* Story: South Bank's treasury desk in Chennai (all names, amounts, and rates illustrative). At 4:55 p.m., dealer Meera has just bought ₹300 crore of 10-year Government securities on NDS-OM, and a corporate client needs ₹50 lakh sent urgently while a walk-in customer wants to remit ₹40,000 in cash.
* Holds: questions at least 3 s; one-step sums 8 s; "your turn" 15 s; map 3–5 s per node.
* Say it right: "R-T-G-S", "N-E-F-T", "I-F-S-C", "U-T-R", "L-E-I", "IN-fi-net" (INFINET), "S-F-M-S", "N-D-S-O-M", "C-C-I-L", "C-C-P", "TREPS" (as a word), "CROMS" (as a word), "D-v-P", "S-T-P", "N-S-D-L", "C-D-S-L", "S-G-L", "P-S-S Act", "P-R-B", "B-P-S-S".
* Not in this video: CRR, SLR, NDTL, daily 99% minimum (last class); SWIFT message formats, CHIPS, CHAPS, Nostro/Vostro (earlier in Module A); bond pricing and yield (next class).
* Length: 1,916 spoken words (103 N-lines, 0 lines over 25 words) + ~2.3 min of holds ≈ 15.0 min at 150 wpm.
* Cue sheet: S scene · N note · G glow · B board mark (circle/box/underline/strike) · M map node · C card · H hold.


---

## Warm-up

N001 · [warmly] Hello, everyone. Settle in with your notebook; tonight we trace the pipes that carry India's money and bonds.
> 0 C: rule-version card "PSS Act 2007 · PRB w.e.f. 9 May 2025 · RTGS/NEFT FAQs Oct–Nov 2026 · NDS-OM MD 2025 (27 Apr 2026) · as at 31 Dec 2026" · 1 S: notebook page; title "Payment and Settlement Systems"

N002 · Put your phone on silent and keep your basic calculator nearby. First, one quick recall from last class.
> 1 S: calculator icon in corner · 2 S: recall card "Last class: daily minimum CRR?" · H: 3 s

N003 · What is the minimum daily Cash Reserve Ratio a bank must maintain across a reporting fortnight now?
> 1 S: blank box "___% of required CRR" · H: 3 s

N004 · Ninety-nine per cent, raised from ninety per cent in October twenty twenty-six. Good start.
> 1 N: "99% daily CRR ✓" · 2 S: second recall card "Earlier in Module A: international bank messaging network?"

N005 · Now from earlier in Module A. Which global network carries cross-border payment messages between banks without moving money itself?
> 1 S: globe icon between two banks · H: 3 s

N006 · SWIFT. Keep that rule in mind, because we will meet its Indian twin tonight.
> 1 N: "SWIFT = messages only ✓" · 2 S: treasury desk in Chennai; clock reads 4:55 p.m.; card "South Bank Treasury · illustrative"

N007 · Picture South Bank's treasury desk in Chennai at four fifty-five. Dealer Meera just bought three hundred crore of government bonds.
> 1 C: card "Meera · South Bank · bought ₹300 cr G-sec (illustrative)"

N008 · Two questions hit her desk at once. Which pipe settles her bond trade, and when is settlement truly final?
> 1 S: two pipes appear: one wide pipe, one pipe with batches · 2 C: card "Which pipe? When is it final?"

N009 · Some of you think R-T-G-S handles everything large. Others think C-C-I-L settles the trade on a net basis.
> 1 S: two buttons "RTGS direct" · "CCIL net settlement" · H: 3 s

N010 · Hold your guess. By the end of this class, you will pick the right pipe for every treasury and branch payment.
> 1 N: "Goal: pick the right payment, network, market pipe, and regulator"

## Chapter 1 · RTGS and NEFT: two pipes for rupees

N011 · Chapter one: R-T-G-S and N-E-F-T. Both are Centralised Payment Systems owned and operated directly by the Reserve Bank of India.
> 1 S: chapter title "1 · RTGS and NEFT" · 2 S: RBI building feeding two pipes: "RTGS" (top) and "NEFT" (bottom) [F1, F9]

N012 · Start with R-T-G-S, Real Time Gross Settlement. It settles fund transfers continuously, one by one, without any netting.
> 1 N: "RTGS = Real Time Gross Settlement (one by one, no netting)" [F1] · 2 B: underline "without any netting"

N013 · Because settlement happens directly in R-B-I's own books, every R-T-G-S payment is final and irrevocable the moment it posts.
> 1 C: card "RTGS finality: in RBI books → final &amp; irrevocable" [F2]

N014 · Remember the limits. R-T-G-S carries a minimum of two lakh rupees, and no upper ceiling set by R-B-I.
> 1 N: "RTGS min: ₹2,00,000 · max: no RBI ceiling" [F4] · 2 B: box "₹2,00,000"

N015 · It began on twenty-six March two thousand four, and runs twenty-four by seven since fourteen December two thousand twenty.
> 1 C: card "RTGS launch: 26 Mar 2004 · 24x7x365: 14 Dec 2020 · ISO 20022" [F3]

N016 · Now look at N-E-F-T, National Electronic Funds Transfer. Many of you think N-E-F-T settles each transfer individually.
> 1 S: lower pipe "NEFT" glows · 2 C: trap card "'NEFT settles individually' ✗" [F9]

N017 · It does not. N-E-F-T uses Deferred Net Settlement, grouping transfers into forty-eight half-hourly batches every single day.
> 1 C: card "NEFT = Deferred Net Settlement (DNS) · 48 half-hourly batches/day ✓" [F9, F10] · 2 S: batch boxes moving along NEFT pipe

N018 · Batches run from twelve-thirty at night to midnight on all days. N-E-F-T launched in November two thousand five.
> 1 N: "NEFT: 00:30 to 00:00 · launch: Nov 2005 · 24x7x365: 16 Dec 2019" [F9, F10]

N019 · What minimum and maximum amount does R-B-I prescribe for N-E-F-T? Think for three seconds.
> 1 S: card "NEFT min / max?" · H: 3 s

N020 · None. R-B-I sets no minimum or maximum on N-E-F-T, though a bank's board may fix its own risk cap.
> 1 N: "NEFT: no RBI min or max (bank Board may cap)" [F11]

N021 · Watch one exception: a walk-in customer without an account can remit cash via N-E-F-T up to fifty thousand rupees per transaction.
> 1 C: card "NEFT cash walk-in (no account): max ₹50,000/txn · Indo-Nepal one-way allowed" [F11, F13]

N022 · Both pipes are credit-push only, meaning only the sender pushes funds out; neither can pull money from another account.
> 1 N: "Both RTGS &amp; NEFT: credit-push only · credit solely by account number" [F7, F13]

N023 · Both offer a free beneficiary name look-up before sending, and use an eleven-character I-F-S-C: four bank letters, zero, six branch characters.
> 1 C: card "IFSC (11 chars): 4 bank + 0 + 6 branch · free name look-up" [F7, F13]

N024 · R-B-I waived its processing fee in July two thousand nineteen; online N-E-F-T is free for savings bank account holders.
> 1 N: "RBI fee waived: 1 Jul 2019 · online NEFT for SB: free (1 Jan 2020)" [F5, F12]

N025 · For large transfers, any non-individual R-T-G-S or N-E-F-T of fifty crore or more requires a twenty-digit L-E-I.
> 1 C: card "LEI (20-digit): mandatory for non-individuals ≥ ₹50 crore (RTGS/NEFT, eff. 1 Apr 2021)" [F14] · 2 B: box "₹50 crore"

N026 · In India, L-E-I is issued by L-E-I-L, a C-C-I-L subsidiary. Remember R-T-G-S uses a twenty-two-character U-T-R code.
> 1 N: "LEI issuer in India: LEIL · RTGS UTR = 22 chars · NEFT confirm = N10" [F7, F13, F14]

N027 · Under R-T-G-S, banks must credit within thirty minutes, or return uncreditable funds within one hour, or before end-of-day.
> 1 N: "RTGS: credit ≤ 30 min · return ≤ 1 hr (or EOD) · NEFT: credit/return ≤ 2 hrs" [F6, F13]

N028 · If a bank delays returning an R-T-G-S payment, it must pay automatic compensation at current Repo Rate plus two per cent.
> 1 C: card "RTGS delay compensation: Repo Rate + 2% (automatic, no request needed)" [F6]

N029 · Let us calculate one. A client sends fifty lakh via R-T-G-S; the account is closed, and return is two days late.
> 1 S: numerical card "₹50,00,000 · 2 days delay · Repo 5.50% (illustrative)" [F6]

N030 · Assume Repo Rate is five point five zero per cent. Add two per cent to get seven point five zero per cent.
> 1 N: "Rate = 5.50% + 2% = 7.50% p.a." · 2 S: keys "5.5 + 2 = 7.5" [F6]

N031 · Your turn on the calculator: multiply fifty lakh by seven point five per cent, times two, divided by three hundred sixty-five.
> 1 S: keys "5000000 × 7.5 % = 375000 × 2 ÷ 365 =" · H: 15 s

N032 · Two thousand fifty-four rupees and seventy-nine paise. Watch the trap: Bank Rate plus three is for C-R-R shortfall, not R-T-G-S.
> 1 N: "₹2,054.79 ✓" · 2 C: trap card "RTGS delay = Repo + 2% ✓ · Bank Rate + 3% = CRR penalty ✗" [F6]

N033 · Pause check for chapter one. Question one: a customer wants to send one lakh fifty thousand rupees. R-T-G-S or N-E-F-T?
> 1 S: pause card "Ch 1 Check · Q1: ₹1,50,000 — RTGS or NEFT?" · H: 3 s

N034 · N-E-F-T, because R-T-G-S starts at two lakh rupees. Question two: how many batches does N-E-F-T run daily?
> 1 N: "Q1: NEFT (below ₹2 lakh) ✓" · H: 3 s

N035 · Forty-eight half-hourly batches. Question three, the twist: a company sends sixty crore by N-E-F-T. Is an L-E-I needed?
> 1 N: "Q2: 48 batches ✓" · H: 3 s

N036 · Yes, L-E-I applies to both pipes from fifty crore upward. Remember: R-T-G-S is gross and instant; N-E-F-T is batched and net.
> 1 N: "Q3: Yes (≥ ₹50 cr applies to NEFT too) ✓" · 2 M: map node "RTGS/NEFT" added to Reserves &amp; payments branch [F1, F9, F14]

## Chapter 2 · The bank network: INFINET, SFMS, and SWIFT

N037 · Chapter two: the wires underneath those pipes. Recall chapter one: why is an R-T-G-S payment final and irrevocable?
> 1 S: chapter title "2 · INFINET, SFMS, and SWIFT" · 2 S: recall box "Why is RTGS final?" · H: 3 s

N038 · Because settlement occurs directly in R-B-I's books. Good. Now, how do payment messages safely reach R-B-I from your branch?
> 1 N: "RBI books ✓" · 2 S: secure tunnel connecting Bank A, Bank B, and RBI

N039 · Over I-N-F-I-N-E-T, the Indian Financial Network. Write this down: INFINET is a Closed User Group M-P-L-S network for Indian banks.
> 1 C: card "INFINET = Indian Financial Network (Closed User Group MPLS network)" [F15] · 2 B: underline "Closed User Group"

N040 · Picture INFINET as a private highway reserved strictly for banks and financial institutions, completely separate from the public internet.
> 1 S: highway lane labelled "INFINET · MPLS · CUG" [F15]

N041 · It was built in nineteen ninety-nine by I-D-R-B-T in Hyderabad, and is now operated round the clock by I-F-T-A-S.
> 1 N: "Built by: IDRBT (1999) · Operated by: IFTAS (wholly owned RBI subsidiary)" [F15]

N042 · I-F-T-A-S stands for Indian Financial Technology and Allied Services, a wholly owned subsidiary of the Reserve Bank of India.
> 1 C: card "IFTAS = wholly owned RBI subsidiary · runs INFINET & SFMS 24x7" [F15, F16]

N043 · If INFINET is the private road, what are the locked envelopes travelling on it? S-F-M-S, Structured Financial Messaging System.
> 1 S: sealed envelope labelled "SFMS" driving along the INFINET road [F16]

N044 · Also created by I-D-R-B-T and run by I-F-T-A-S, S-F-M-S carries R-T-G-S, N-E-F-T, and government payment messages inside India.
> 1 N: "SFMS = domestic secure messaging for RTGS, NEFT, Govt payments" [F16]

N045 · Here is the clean contrast with SWIFT: S-F-M-S is India's domestic messaging standard; SWIFT carries cross-border messages worldwide.
> 1 C: card "SFMS (over INFINET) = domestic India · SWIFT = cross-border global" [F17]

N046 · Watch the limit of this analogy: neither S-F-M-S nor SWIFT settles money. They carry authenticated instructions; bank accounts settle later.
> 1 N: "Limit: messaging ≠ settlement (funds settle in RBI / Nostro books)" [F17]

N047 · Pause check for chapter two. Question one: which organisation operates INFINET and S-F-M-S twenty-four by seven today?
> 1 S: pause card "Ch 2 Check · Q1: Who operates INFINET & SFMS today?" · H: 3 s

N048 · I-F-T-A-S, the wholly owned R-B-I subsidiary; I-D-R-B-T built them earlier. Question two: does S-F-M-S settle funds between banks?
> 1 N: "Q1: IFTAS ✓" · H: 3 s

N049 · No, messaging only; settlement happens in R-B-I's books. One thing to remember: INFINET is the road, S-F-M-S is the envelope.
> 1 N: "Q2: No — messaging only ✓" · 2 S: Ch 2 dims to corner card [F15, F16, F17]

## Chapter 3 · Market plumbing: NDS-OM, CCIL, DvP, STP, and depositories

N050 · Chapter three: answering Meera's bond question. First, recall chapter two: what is the domestic Indian twin of SWIFT?
> 1 S: chapter title "3 · NDS-OM, CCIL, DvP, STP &amp; Depositories" · 2 S: recall box "Domestic twin of SWIFT?" · H: 3 s

N051 · S-F-M-S. Now follow Meera's three hundred crore G-sec trade from screen to settlement. First, where did she buy the bond?
> 1 N: "SFMS ✓" · 2 S: trading screen "NDS-OM" connected by arrow to central hub "CCIL"

N052 · On N-D-S-O-M, Negotiated Dealing System – Order Matching. First, clear a famous date trap heard in many public classes.
> 1 C: trap card "Wrong years in classes: 'NDS 2022 / NDS-OM 2025' ✗" [F18, F19]

N053 · R-B-I launched N-D-S on fifteen February two thousand two, and launched N-D-S-O-M on one August two thousand five.
> 1 C: card "NDS: 15 Feb 2002 · NDS-OM: 1 Aug 2005 (NOT 2022/2025) ✓" [F18, F19] · 2 B: box "2002 · 2005"

N054 · Owned by R-B-I and managed by Clearcorp, N-D-S-O-M is screen-based, anonymous, and purely order-driven for secondary G-sec trading.
> 1 N: "NDS-OM: RBI-owned, Clearcorp-managed · anonymous · order-driven" [F19]

N055 · Orders match strictly on price-time priority: best price first, and earliest order first when two orders quote the same price.
> 1 N: "Matching: strict price-time priority · counterparty hidden" [F19]

N056 · Under R-B-I's twenty twenty-five Master Direction, updated April twenty twenty-six, three access routes exist for N-D-S-O-M today.
> 1 C: card "NDS-OM Access (2025 MD, upd. 27 Apr 2026): 1 Direct · 2 Indirect · 3 Stock Broker Connect" [F20]

N057 · Direct Access covers banks, primary dealers, N-B-F-Cs, AIFIs, mutual funds, insurers, and pension funds holding S-G-L and C-C-I-L membership.
> 1 N: "Direct: SGL with RBI + RBI/DSB current a/c + CCIL membership (apply on PRAVAAH)" [F20]

N058 · Indirect Access goes through a direct member, while Stock Broker Connect lets retail demat investors reach N-D-S-O-M via a broker.
> 1 N: "Indirect: via direct member · Stock Broker Connect: retail demat via SEBI broker" [F20]

N059 · The moment Meera's order matches, Straight Through Processing, or S-T-P, sends her trade straight to C-C-I-L with zero manual re-keying.
> 1 S: glowing arrow "STP (zero manual re-keying)" from NDS-OM to CCIL [F19, F25] · 2 M: map node "NDS-OM"

N060 · Stop and break a classic misconception. Many of you think C-C-I-L is a market regulator like R-B-I or S-E-B-I.
> 1 C: trap card "'CCIL is a regulator' ✗" [F21]

N061 · It is not. C-C-I-L is an authorised payment system and Central Counterparty, regulated by R-B-I under the P-S-S Act.
> 1 C: card "CCIL (est. 15 Feb 2002) = Central Counterparty (CCP), NOT a regulator ✓" [F21]

N062 · Through novation, C-C-I-L steps in the middle: it becomes buyer to every seller and seller to every buyer.
> 1 S: CCIL hub splits one trade into two guaranteed legs: Seller → CCIL → Buyer [F21]

N063 · It guarantees settlement using a Settlement Guarantee Fund, initial and mark-to-market margins, and committed bank credit lines.
> 1 N: "CCIL guarantee: novation + Settlement Guarantee Fund (SGF) + margins" [F21]

N064 · Remember Clearcorp's platforms: N-D-S-O-M for G-secs, T-R-E-P-S for triparty repo, C-R-O-M-S for repo, F-X-CLEAR for dollar-rupee, and A-S-T-R-O-I-D for O-I-S.
> 1 C: card "Clearcorp platforms: NDS-OM (G-sec) · TREPS (triparty repo) · CROMS (repo) · FX-CLEAR (USD-INR) · ASTROID (OIS)" [F22] · 2 M: map node "CCIL"

N065 · Next, how does C-C-I-L prevent Meera from paying cash without receiving bonds? Through Delivery versus Payment, or D-v-P.
> 1 N: "DvP = simultaneous transfer of funds and securities (eliminates principal risk)" [F23]

N066 · D-v-P One is gross-gross. D-v-P Two is gross securities, net funds. D-v-P Three is net-net for both legs.
> 1 C: card "DvP I: gross/gross · DvP II: gross sec / net funds · DvP III: net/net (since 2 Apr 2004)" [F23]

N067 · Since two April two thousand four, C-C-I-L settles G-secs on D-v-P Three, netting both bonds and cash across the day.
> 1 N: "DvP III extended to Gilt Account Holders: 6 Jul 2011" [F23]

N068 · Test D-v-P Three on Meera's desk. She buys three hundred crore at par, and sells one eighty crore at one hundred one.
> 1 S: worked box "Buy ₹300 cr @ ₹100 · Sell ₹180 cr @ ₹101 (same G-sec, illustrative)" [F23]

N069 · Net the bonds first: three hundred minus one hundred eighty equals one hundred twenty crore of bonds received.
> 1 S: keys "300 − 180 = 120" · 2 N: "Net bonds received: ₹120.00 cr" [F23]

N070 · Next, sell inflow: one eighty times one hundred one divided by one hundred equals one eighty-one point eight zero crore.
> 1 S: keys "180 × 101 ÷ 100 = 181.8" · 2 N: "Outflow ₹300 cr − Inflow ₹181.80 cr" [F23]

N071 · Subtract from three hundred crore: Meera's bank pays one hundred eighteen point two zero crore net, not three hundred crore gross.
> 1 S: keys "300 − 181.8 = 118.2" · 2 B: box "Net cash paid: ₹118.20 cr" [F23]

N072 · Why is D-v-P harder in cross-border forex? Dollars settle in New York hours after rupees settle in Mumbai.
> 1 C: card "FX time-zone gap → principal/settlement risk (no automatic DvP across currencies)" [F24]

N073 · That time-zone gap creates principal risk if a counterparty fails mid-day. Finally, where are securities actually stored electronically?
> 1 S: two vaults: "RBI SGL/CSGL (G-secs)" vs "NSDL (1996) &amp; CDSL (1999) (Corporate/Equity)" [F26]

N074 · Banks hold G-secs in R-B-I's S-G-L. Equities, corporate bonds, C-Ps, and C-Ds sit in N-S-D-L or C-D-S-L under S-E-B-I.
> 1 N: "NSDL (1996) &amp; CDSL (1999): SEBI-regulated under Depositories Act 1996 · access via DPs" [F26]

N075 · Pause check for chapter three. Question one: on N-D-S-O-M, how are competing orders matched?
> 1 S: pause card "Ch 3 Check · Q1: NDS-OM order matching rule?" · H: 3 s

N076 · Strict price-time priority. Question two: under D-v-P Three, are securities settled gross or net?
> 1 N: "Q1: Price-time priority ✓" · H: 3 s

N077 · Net — both legs are netted. Question three: which Clearcorp platform handles interbank dollar-rupee spot and swaps?
> 1 N: "Q2: Net (both legs) ✓" · H: 3 s

N078 · F-X-CLEAR. Remember: N-D-S-O-M matches anonymously, S-T-P sends it straight, and C-C-I-L guarantees net D-v-P Three settlement.
> 1 N: "Q3: FX-CLEAR ✓" · 2 S: Ch 3 dims to corner card [F19, F21, F22, F23, F25]

## Chapter 4 · The law and the new overseer: PSS Act and PRB

N079 · Chapter four: the law behind every pipe. Recall chapter three: is C-C-I-L a regulator or a regulated entity?
> 1 S: chapter title "4 · PSS Act 2007 and Payments Regulatory Board" · 2 S: recall box "CCIL: regulator or regulated?" · H: 3 s

N080 · Regulated, as an authorised payment system. The governing law is the Payment and Settlement Systems Act, two thousand seven.
> 1 N: "Regulated ✓" · 2 C: card "PSS Act, 2007: assent 20 Dec 2007 · effective 12 Aug 2008" [F27]

N081 · Assented in December two thousand seven, it took effect on twelve August two thousand eight. Remember four core sections.
> 1 S: four-rung law ladder "s. 3 · s. 4 · s. 23 · s. 25" [F27, F28, F30, F31]

N082 · Section three makes R-B-I the designated regulator. Section four forbids operating any payment system without R-B-I authorisation.
> 1 N: "s. 3: RBI designated authority · s. 4: mandatory RBI authorisation (domestic &amp; foreign)" [F27, F28]

N083 · Watch section thirty-four: stock exchanges and clearing corporations set up under stock exchanges are outside this Act.
> 1 C: card "s. 34 carve-out: stock exchanges &amp; their clearing corporations excluded" [F28]

N084 · If R-B-I refuses or revokes authorisation, the operator may appeal to the Central Government within thirty days under section nine.
> 1 N: "s. 7: 6-month disposal target · s. 8: revocation · s. 9: appeal to Central Govt in 30 days" [F29]

N085 · Section twenty-three gives statutory finality to both gross and net settlements, protected even if a participating bank goes insolvent.
> 1 C: card "s. 23: gross &amp; net settlement final and irrevocable · protected against insolvency" [F30] · 2 B: underline "protected even if a participating bank goes insolvent"

N086 · Section twenty-five makes dishonour of an electronic fund transfer for insufficient funds a criminal offence, just like a bounced cheque.
> 1 N: "s. 25: EFT dishonour = criminal offence · ss. 17–18: RBI directions · s. 24: dispute adjudication" [F30, F31]

N087 · Now for the biggest twenty twenty-five update. Many old books still name B-P-S-S as R-B-I's oversight board.
> 1 C: trap card "OLD: BPSS (Committee of RBI Central Board) ✗" [F32]

N088 · On nine May two thousand twenty-five, the Payments Regulatory Board, or P-R-B, replaced B-P-S-S under amended section three.
> 1 C: card "NEW (w.e.f. 9 May 2025): Payments Regulatory Board (PRB) · Regs eff. 20 May 2025 ✓" [F32] · 2 B: box "9 May 2025"

N089 · The P-R-B has six members: three from R-B-I, and three nominated by the Central Government.
> 1 S: six seats around a table: 3 blue (RBI) + 3 green (Central Govt) [F33]

N090 · On R-B-I's side sit the Governor as Chairperson, the Deputy Governor for payments, and the Executive Director for payments.
> 1 N: "RBI (3): Governor (Chair), DG (PSS), ED (PSS) · Permanent invitee: RBI Principal Legal Adviser" [F33]

N091 · On the Government's side sit three nominees, including Finance and I-T Secretaries. R-B-I's Principal Legal Adviser is permanent invitee.
> 1 N: "Govt (3): DFS Secy, MeitY Secy, 3rd nominee (notified 30 Sep 2025)" [F33] · 2 M: map node "PSS Act"

N092 · Pause check for chapter four. Question one: which board oversees India's payment systems today, and since what date?
> 1 S: pause card "Ch 4 Check · Q1: Current oversight board &amp; effective date?" · H: 3 s

N093 · The Payments Regulatory Board, from nine May two thousand twenty-five. Question two: how many days to appeal a refusal?
> 1 N: "Q1: PRB, w.e.f. 9 May 2025 ✓" · H: 3 s

N094 · Thirty days, under section nine. One thing to remember: P-S-S Act protects net finality, and the six-member P-R-B leads oversight.
> 1 N: "Q2: 30 days (s. 9) ✓" · 2 S: Ch 4 dims [F29, F30, F32, F33]

## Close

N095 · Now settle Meera's desk in one mixed check. First: how does her three hundred crore G-sec trade settle?
> 1 S: mixed check card "1. ₹300 cr G-sec on NDS-OM · 2. ₹40,000 cash walk-in · 3. ₹60 cr corporate RTGS" · H: 4 s

N096 · Via S-T-P to C-C-I-L on D-v-P Three, final under section twenty-three. Second: the walk-in customer with forty thousand rupees cash?
> 1 N: "1. NDS-OM → STP → CCIL DvP-III ✓" · H: 3 s

N097 · N-E-F-T, allowed up to fifty thousand rupees in cash. Third: a sixty crore corporate R-T-G-S needs what extra code?
> 1 N: "2. NEFT cash (≤ ₹50,000) ✓" · H: 3 s

N098 · A twenty-digit L-E-I, mandatory from fifty crore upward. Now look at the blank branch on your mind map.
> 1 N: "3. 20-digit LEI ✓" · 2 S: blank mind-map branch with 4 empty boxes

N099 · Say all four nodes aloud before I reveal them: the rupee pipes, the G-sec screen, the central guarantor, and the law.
> 1 S: four blank slots glow one by one · H: 5 s

N100 · R-T-G-S and N-E-F-T, N-D-S-O-M, C-C-I-L, and the P-S-S Act with P-R-B. You now command this entire payment-systems unit.
> 1 M: full branch revealed "RTGS/NEFT · NDS-OM · CCIL · PSS Act (PRB)" · 2 C: card "You can now: compare RTGS/NEFT, explain INFINET/SFMS, trace NDS-OM→CCIL DvP-III, apply PSS Act &amp; PRB (C4.3)"

N101 · Tonight's homework: draw that four-node map from memory, and write the launch years of N-D-S, R-T-G-S, N-D-S-O-M, and N-E-F-T.
> 1 C: homework card "Draw 4-node map + years: NDS (2002), RTGS (2004), NDS-OM (Aug 2005), NEFT (Nov 2005)"

N102 · Next class, we stay on Meera's bond desk and ask: when R-B-I raises rates, why do bond prices drop immediately?
> 1 S: preview card "Next class: Bonds — why price and yield move like a see-saw"

N103 · [warmly] That's the plumbing of Indian banking, start to finish. Rest well tonight, and I'll see you in the next class.
> 1 S: notebook closes gently