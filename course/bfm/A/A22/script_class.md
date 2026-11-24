# A22 · "The paper trail goes digital" · CLASS EDITION (script c1, with cue sheet)


- **Status**: **c1 GEMINI DRAFT, spot-checked, full review pending** (owner, 2026-11-24: "save as drafts, check later"). Not locked: do not voice until reviewed.
- **Plan**: `course/bfm/A/plans_A.md` §A22 (new in v3; all 7 v3 additions covered). Course order v4: A21 → **A22** → AR.
- **Syllabus**: A10.1 (digitisation overview and evolution), A10.2 (benefits and limitations), A10.3 (digital platforms), A10.4 (fintech and evolution), A10.5 (delivery channels under fintech), A10.6 (sample process of international trade using blockchain), A10.7 (challenges in fintech).
- **Facts**: `A22_fact_sheet.md`, rows cited as [F1]–[F50]. Numericals: `A22_numericals.md` (none). Practice: `A22_practice.md`.
- **Rule version (opening card)**: "Swift CBPR+ ISO 20022 (coexistence ended 22 Nov 2025; SR 2026) · Swift GPI · ICC eUCP 2.1, eURC 1.1, URDTT 1.0 · UK Electronic Trade Documents Act 2023 · RBI (TReDS) Directions, 2026 (23 Jun 2026) · RBI Regulatory Sandbox Framework (28 Feb 2024) · RBI Payment Aggregators MD (15 Sep 2025) · RBI Payment Systems Report (Dec 2025, pub. May 2026) · MoF/PIB UPI Global (30 Oct 2026) · BIS CPMI G20 Roadmap · as at 31 December 2026".
- **Greeting / goodbye** (new, verified unused in `course/bfm/greetings.md`): greeting "Hello everyone, glad to have you with me. Today, the paper trail goes digital, and we see what actually changes."; goodbye "That wraps up our final topic in this module. Step away from the screen, rest well, and I'll see you in the revision class."
- **Story**: Meena, a Tiruppur garment exporter (illustrative, continuing the export thread from A07–A08). Last year her export documents travelled by courier and her letter of credit took days to check. This year her bank offers the same letter of credit on a permissioned shared ledger. All names, shipments, and amounts are illustrative.
- **Not settled**: IBBIC (2021, 15 banks) is secondary-only and omitted from spoken script (listed under Facts needed); UNCITRAL MLETR full page and eUCP 2.1 exact effective date on verify list.
- **Holds**: questions at least 3 s; pause-check items 3–5 s; blank-map recall 5 s.
- **Say it right**: "SWIFT" as a word; "g-p-i" as letters; "U-E-T-R" as letters; "I-S-O two-zero-zero-two-two"; "e-U-C-P two point one"; "e-U-R-C one point one"; "S-F-M-S"; "I-D-R-B-T"; "IF-tas" for IFTAS; "T-Reds" for TReDS; "I-T-F-S"; "U-P-I"; "D-L-T"; "C-B-D-C"; "F-A-T-F".
- **Not in this video**: SWIFT/CHIPS/Fedwire/Nostro-Vostro basics (A02); UCP 600 document rules (A08–A09); domestic payment basics (JAIIB PPB); GIFT City IBU licensing (A20); FEMA and FEDAI governance (A21).
- **Length**: 1,983 spoken words + ~2.2 min of holds ≈ 15.4 min at 150 wpm, 16.3 min at 140 wpm. Chapters: warm-up (~1.1 min) · 1 from telex to ISO 20022 and e-documents (~3.4 min) · 2 platforms, fintech and delivery channels (~4.0 min) · 3 a trade deal on blockchain (~3.0 min) · 4 benefits, limits and challenges (~2.5 min) · close (~1.4 min).
- **Cue sheet**: S scene · N note · G glow · M map · C card · B board mark · H hold. Picture: Meena's **trade journey** digitised — in chapter 1 a **timeline pipe** (telex → MT → ISO 20022 + gpi + eUCP); in chapter 2 a **platform hub** (SFMS/IFTAS, TReDS, ITFS, Sandbox, UPI Global, Nexus); in chapter 3 a **six-block shared ledger** mirroring the paper LC relay; in chapter 4 a **balance scale** (benefits vs limits and challenges).


---


## Warm-up


N001 · [warmly] Hello everyone, glad to have you with me. Today, the paper trail goes digital, and we see what actually changes.
> 0 C: rule-version card · 1 S: notebook page; title "Technology in international banking"


N002 · First, a quick check from last class. Does F-E-D-A-I license authorised dealers, or is it a self-regulatory association?
> 1 S: margin card "last class check: RBI vs FEDAI" · H: 3 s


N003 · Self-regulatory association. RBI licenses authorised dealers under FEMA, while F-E-D-A-I sets market rules.
> 1 N: "RBI = regulator · FEDAI = self-regulatory ✓"


N004 · Now one from earlier in this module. When a bank sends a SWIFT message, does SWIFT move the money itself?
> 1 S: SWIFT envelope card · H: 3 s


N005 · No. SWIFT carries messages, while settlement happens through correspondent accounts or payment systems. Keep that rule close today.
> 1 N: "SWIFT = messages, not money ✓" [F1]


N006 · Why does this unit matter? Blockchain technology was tested in July twenty twenty-four and twice in June twenty twenty-six.
> 1 C: exam-signal card "Blockchain tested: Jul 2024; Jun 2026 (×2)"


N007 · No sums today, no heavy jargon. Stay with me, and you will trace a full digital trade deal cleanly.
> 1 N: "Goal: messaging → platforms → blockchain LC → balance scale"


## Opening


N008 · Meet Meena again, our Tiruppur garment exporter. Last year, her export documents went by courier and took days to check.
> 1 S: Tiruppur factory; paper envelope flying across sea (illustrative)


N009 · This year, her bank offers her the same letter of credit on a shared digital ledger.
> 1 S: paper envelopes transform into connected digital blocks


N010 · Here is my question. Does a shared ledger speed up trade and replace SWIFT, or is it just a buzzword?
> 1 S: two buttons "replaces SWIFT & speeds up" · "just a buzzword" · H: 3 s


N011 · Hold your answer. By chapter three, you will see what the ledger speeds up and what still needs banking rails.
> 1 G: both buttons dim into the margin


## Chapter 1 · From telex to ISO 20022 and e-documents


N012 · Chapter one: how international banking moved from telex messages to structured data and electronic trade documents.
> 1 S: chapter title "1 · From telex to ISO 20022 & e-documents" · 2 S: horizontal timeline pipe


N013 · For decades, cross-border banks sent legacy M-T messages over SWIFT, a Belgian member-owned cooperative connecting over eleven thousand institutions.
> 1 S: timeline node 1 "Telex → SWIFT MT (MT103)" · 2 C: card "SWIFT: Belgian cooperative · >11,000 FIs" [F1, F5]


N014 · The National Bank of Belgium is SWIFT's lead overseer, and RBI sits on the SWIFT Oversight Forum.
> 1 N: "Lead overseer: NBB · RBI on SWIFT Oversight Forum" [F2]


N015 · Legacy M-T messages had cramped text fields. So banking adopted I-S-O two-zero-zero-two-two, an open standard from I-S-O committee T-C sixty-eight.
> 1 S: timeline node 2 "ISO 20022 (ISO TC68): rich, structured data" [F3] · 2 M: node "ISO 20022"


N016 · India's Next Generation R-T-G-S adopted I-S-O two-zero-zero-two-two in December twenty thirteen, the first large-value system worldwide to do so.
> 1 N: "India NG-RTGS: ISO 20022 on 20 Dec 2013 (world first LVPS)" [F4]


N017 · On SWIFT, coexistence between M-T and I-S-O two-zero-zero-two-two began in March twenty twenty-three and ended on twenty-second November twenty twenty-five.
> 1 C: timeline card "CBPR+ coexistence: Mar 2023 → ended 22 Nov 2025 (>98% adoption)" [F5, F6] · 2 B: box "22 Nov 2025"


N018 · Structured fields for town and country also support anti-money laundering screening and F-A-T-F Recommendation sixteen under the twenty twenty-six release.
> 1 N: "SR 2026: structured/hybrid postal addresses → FATF Rec 16" [F7]


N019 · Next is SWIFT g-p-i, Global Payments Innovation, which brought courier-style tracking to international wires.
> 1 S: timeline node 3 "Swift GPI: speed, transparency, tracking" [F8] · 2 M: node "gpi"


N020 · Nearly sixty per cent of g-p-i payments credit beneficiaries within thirty minutes, and almost one hundred per cent within twenty-four hours.
> 1 C: card "Swift GPI: ~60% in 30 min · ~100% in 24 hrs · >$300B/day" [F8]


N021 · That tracking uses a thirty-six character U-E-T-R, Unique End-to-End Transaction Reference, placed in field one-two-one.
> 1 C: names-first card "UETR = 36-char tracking code · field 121" [F10] · 2 B: underline "36-char"


N022 · Intermediary banks must pass the U-E-T-R onward unaltered, and since November twenty twenty, banks must confirm credit to the Tracker.
> 1 N: "Universal Confirmations (22 Nov 2020) · Stop & Recall" [F9, F10, F11]


N023 · Banks also connect corporate treasuries via A-P-Is, Application Programming Interfaces, letting software talk directly to bank systems.
> 1 N: "APIs = software-to-software bank links" [F9]


N024 · Now turn to Meena's trade documents. For electronic L-C presentations, the I-C-C issued e-U-C-P version two point one.
> 1 C: names-first card "ICC eUCP 2.1 · eURC 1.1 · URDTT 1.0" [F12, F13]


N025 · Many of you think e-U-C-P replaces U-C-P six hundred when an L-C goes digital. Is that right?
> 1 N: thought bubble "eUCP replaces UCP 600?" · H: 3 s


N026 · No. e-U-C-P strictly supplements U-C-P six hundred. Likewise, e-U-R-C one point one supplements U-R-C five-two-two for documentary collections.
> 1 B: strike thought bubble · 2 C: trap card "Wrong: replaces UCP 600 | Right: supplements UCP 600" [F12, F13]


N027 · Another myth is that electronic bills of lading lack legal standing everywhere. Actually, legal recognition varies by country.
> 1 N: thought bubble "e-documents have no legal standing?" · 2 B: strike thought bubble


N028 · For example, Section three of the U-K Electronic Trade Documents Act twenty twenty-three gives electronic trade documents the same legal effect as paper.
> 1 C: card "UK ETDA 2023 s. 3 (20 Sep 2023): same legal effect as paper" [F14]


N029 · Pause check, chapter one. One: when did SWIFT's M-T and I-S-O two-zero-zero-two-two coexistence period end?
> 1 S: pause card "Ch 1 Check · Q1: CBPR+ coexistence end date?" · H: 3 s


N030 · Twenty-second November twenty twenty-five. Two: how many characters are in a U-E-T-R, and can intermediaries change it?
> 1 N: "22 Nov 2025 ✓" · 2 S: card "Q2: UETR length & intermediary rule?" · H: 3 s


N031 · Thirty-six characters, passed unaltered. Three, the twist: does e-U-C-P two point one replace U-C-P six hundred?
> 1 N: "36 chars, unaltered ✓" · 2 S: card "Q3: eUCP 2.1 vs UCP 600?" · H: 3 s


N032 · No, it supplements U-C-P six hundred. One thing from chapter one: I-S-O two-zero-zero-two-two structures data, g-p-i tracks it, e-U-C-P supplements paper rules.
> 1 N: "Supplements UCP 600 ✓" · 2 S: chapter 1 summary card fills and dims [F5, F10, F12]


## Chapter 2 · Platforms, fintech and delivery channels


N033 · Chapter two: digital platforms, fintech rules, and delivery channels. First, quick recall from chapter one.
> 1 S: chapter title "2 · Platforms, fintech & delivery channels"


N034 · Which SWIFT g-p-i feature lets a bank halt a fraudulent or erroneous payment in flight?
> 1 S: recall card "SWIFT gpi halt feature?" · H: 3 s


N035 · Stop and Recall. Good. Now let us map India's banking platforms on our hub picture.
> 1 N: "Stop and Recall ✓" [F9] · 2 S: central platform hub diagram · 3 M: node "platforms"


N036 · First, S-F-M-S, Structured Financial Messaging System, India's domestic messaging standard over INFINET in a four-tier architecture carrying R-T-G-S and N-E-F-T.
> 1 C: names-first card "SFMS over INFINET · 4-tier · carries RTGS & NEFT" [F17]


N037 · Many officers think I-D-R-B-T still runs S-F-M-S. Is that still true?
> 1 N: thought bubble "IDRBT operates SFMS?" · H: 3 s


N038 · No. I-D-R-B-T, set up by RBI in nineteen ninety-six, built S-F-M-S. Today, RBI's wholly owned subsidiary I-F-T-A-S operates it round the clock.
> 1 B: strike thought bubble · 2 C: trap card "Built by: IDRBT (1996) | Operated 24×7 by: IFTAS (RBI subsidiary)" [F15, F16]


N039 · Write this down: I-D-R-B-T initiated Indian banking blockchain work with its January twenty seventeen White Paper and domestic sight-L-C proof of concept.
> 1 C: card "IDRBT Jan 2017: Blockchain White Paper & sight-LC PoC · Jan 2019 Blueprint" [F23] · 2 B: box "IDRBT Jan 2017"


N040 · RBI also records early bank pilots: Axis Bank's Ripple payments in twenty seventeen and H-S-B-C India's trade deal with Reliance in twenty eighteen.
> 1 N: "Pilots: Axis/Ripple (Nov 2017) · HSBC-Reliance trade (Nov 2018)" [F24]


N041 · Next platform: T-ReDS, Trade Receivables Discounting System, an RBI-authorised electronic network under the Payment and Settlement Systems Act for M-S-M-E invoices.
> 1 C: names-first card "TReDS: RBI (TReDS) Directions, 2026 (23 Jun 2026)" [F18]


N042 · RBI's June twenty twenty-six T-ReDS Master Direction requires twenty-five crore minimum net worth and includes sellers, buyers, financiers, insurers, and credit guarantee trusts.
> 1 N: "Min net worth: ₹25 cr · Sellers, buyers, financiers, insurers, CGFSF" [F19]


N043 · Crucial rule: Factoring Units discounted on T-ReDS are strictly without recourse to M-S-M-E sellers, with assignments filed on CERSAI.
> 1 C: card "TReDS: without recourse to seller · no buyer set-offs · CERSAI filing" [F20]


N044 · For cross-border receivables at GIFT City, I-F-S-C-A regulates I-T-F-S platforms under revised guidelines issued in December twenty twenty-four.
> 1 N: "IFSCA ITFS (GIFT IFSC, rev. Dec 2024): global factoring, forfaiting, LC discounting" [F21]


N045 · In interbank forex, C-C-I-L acts as Qualified Central Counterparty, settling U-S-D-I-N-R via Payment-versus-Payment and cross-currency trades through C-L-S Bank.
> 1 N: "CCIL (QCCP, 2001): USD/INR PvP · cross-currency via CLS" [F22]


N046 · Now fintech. RBI groups FinTech into five areas: payments, lending, market provisioning, investment management, and data analytics, built on India Stack.
> 1 C: card "FinTech: 5 areas · India Stack DPI" [F26, F27] · 2 M: node "fintech and channels"


N047 · RBI launched its Regulatory Sandbox in August twenty nineteen, updated February twenty twenty-four, overseen by its FinTech Department with a nine-month cohort.
> 1 C: card "RBI Regulatory Sandbox (Feb 2024): 9-month cohort · ₹10 lakh min net worth" [F28, F29]


N048 · The Second Cohort focused on Cross-Border Payments in December twenty twenty and opened for On Tap applications in September twenty twenty-two.
> 1 N: "Cohort 2: Cross-Border Payments (Dec 2020) → On Tap (5 Sep 2022)" [F30]


N049 · Many assume Sandbox entry grants legal waivers. Does RBI allow that?
> 1 N: thought bubble "Sandbox = legal waiver?" · H: 3 s


N050 · Never. RBI grants no legal waivers. Crypto services are excluded, while K-Y-C, A-M-L, local data storage, and D-P-D-P Act twenty twenty-three stay mandatory.
> 1 B: strike thought bubble · 2 C: trap card "No legal waivers · Crypto excluded · KYC/AML & DPDP Act 2023 mandatory" [F31]


N051 · Under RBI's September twenty twenty-five Master Direction, Payment Aggregators Cross-Border need fifteen crore rising to twenty-five crore net worth, capped at twenty-five lakh per transaction.
> 1 C: card "PA-CB (15 Sep 2025 MD): ₹15 cr → ₹25 cr net worth · ₹25 lakh/txn cap" [F32]


N052 · Key delivery channels include mobile and internet banking, A-P-I-linked third-party apps on U-P-I, interoperable Q-R codes, and B-B-P-S cross-border bill payments.
> 1 N: "Channels: mobile/web · APIs/TPAPs · UPI/Bharat QR · BBPS cross-border" [F33]


N053 · Globally, N-P-C-I International linked U-P-I with Singapore's PayNow in February twenty twenty-three, reaching ten countries by October twenty twenty-six, with Uzbekistan eleventh.
> 1 C: card "NIPL (2020): UPI–PayNow (Feb 2023) · UPI in 10 countries (Oct 2026) + Uzbekistan" [F34, F35]


N054 · Multilaterally, RBI joined B-I-S Project Nexus in June twenty twenty-four to interlink U-P-I with four ASEAN fast payment systems.
> 1 N: "Project Nexus (30 Jun 2024): India + Malaysia, Philippines, Singapore, Thailand" [F36]


N055 · Also note: the Payments Regulatory Board replaced B-P-S-S in May twenty twenty-five, and faster inward payment guidelines arrived in April twenty twenty-six.
> 1 N: "PRB replaced BPSS (9 May 2025) · Faster inward payments (9 Apr 2026)" [F37]


N056 · Pause check, chapter two. One: which RBI subsidiary operates S-F-M-S round the clock today?
> 1 S: pause card "Ch 2 Check · Q1: Who operates SFMS 24×7?" · H: 3 s


N057 · I-F-T-A-S. Two: is T-ReDS discounting with recourse or without recourse to the M-S-M-E seller?
> 1 N: "IFTAS ✓" · 2 S: card "Q2: TReDS recourse rule?" · H: 3 s


N058 · Strictly without recourse. Three: what is the per-transaction cap for Payment Aggregators Cross-Border under the twenty twenty-five Master Direction?
> 1 N: "Without recourse ✓" · 2 S: card "Q3: PA-CB per-transaction cap?" · H: 3 s


N059 · Twenty-five lakh rupees. One thing from chapter two: India pairs public rails like S-F-M-S and U-P-I with regulated fintechs under RBI oversight.
> 1 N: "₹25 lakh ✓" · 2 S: chapter 2 summary card fills and dims [F16, F20, F32]


## Chapter 3 · A trade deal on blockchain, step by step


N060 · Chapter three: Meena's letter of credit on a blockchain, step by step. First, quick recall from chapter two.
> 1 S: chapter title "3 · A trade deal on blockchain"


N061 · Which Indian institution published the January twenty seventeen Blockchain White Paper and tested a sight-L-C proof of concept?
> 1 S: recall card "Jan 2017 Blockchain White Paper & PoC?" · H: 3 s


N062 · I-D-R-B-T. Now let us define two terms cleanly before running Meena's trade deal.
> 1 N: "IDRBT ✓" [F23] · 2 M: node "blockchain trade"


N063 · Distributed Ledger Technology is a shared database updated by consensus. Blockchain is a linear chain of hashed blocks: every blockchain is D-L-T, not vice versa.
> 1 C: names-first card "All blockchains are DLT; not all DLTs are blockchains" [F38, F39]


N064 · Each block stores the previous block's hash. Change one character and the hash breaks, while private keys sign entries and public keys verify them.
> 1 S: chain of blocks; changing one letter turns hash red · 2 N: "Private key signs · Public key verifies" [F39]


N065 · Many think blockchain means Bitcoin, making Meena's invoice price visible to everyone online. True or false?
> 1 N: thought bubble "Blockchain = crypto & public?" · H: 3 s


N066 · False on both counts. Bitcoin is permissionless. Banks use permissioned D-L-T like Hyperledger Fabric, Corda, or Quorum, where access is approved and private.
> 1 B: strike thought bubble · 2 C: trap card "Public/Permissionless (crypto) ≠ Permissioned DLT (banks: Corda, Hyperledger)" [F40, F42]


N067 · Picture permissioned D-L-T like a locked conference room, not a public board: only trade parties enter, though legal rules and payment rails still apply.
> 1 S: locked room icon around the 4 trade parties


N068 · Next term: a smart contract is self-executing code on D-L-T that checks agreed conditions and triggers actions automatically.
> 1 C: names-first card "Smart contract = self-executing code on DLT" [F41]


N069 · Now trace Meena's export L-C across six clean steps mirroring the paper relay.
> 1 S: six-block track appears beside the paper LC relay [F43]


N070 · Step one: buyer and Meena agree sales terms and encode L-C conditions into a smart contract on the permissioned ledger.
> 1 S: block 1 lights up "1 · Sales terms → smart contract" [F43]


N071 · Step two: the issuing bank approves and records the digital L-C on the ledger, visible instantly to Meena and her advising bank.
> 1 S: block 2 lights up "2 · Issuing bank records digital LC (live view)" [F43]


N072 · Step three: Meena ships the garments and uploads hashed electronic trade documents — invoice, packing list, transport token — onto the ledger.
> 1 S: block 3 lights up "3 · Goods shipped → e-docs/tokens hashed on ledger" [F43]


N073 · Step four: the smart contract automatically checks document data against L-C terms, flagging discrepancies immediately instead of days later.
> 1 S: block 4 lights up "4 · Smart contract checks terms → fewer discrepancies" [F43]


N074 · Step five: once all conditions match, the smart contract automatically triggers the payment instruction to the issuing bank.
> 1 S: block 5 lights up "5 · Conditions met → payment trigger" [F43]


N075 · Step six — our opening question — does the blockchain move central bank money by itself?
> 1 S: block 6 "6 · Money settlement?" · H: 3 s


N076 · No. Money still settles over banking rails like SWIFT and R-T-G-S, unless tokenised deposits or central bank digital currency are integrated.
> 1 C: card "Step 6: Settlement still uses banking rails (SWIFT/RTGS) or CBDC" [F43] · 2 B: box "banking rails"


N077 · So back to Meena's opening question: the shared ledger cuts document delays, but it does not replace banks or payment rails.
> 1 G: opening margin question resolved ✓ [F43]


N078 · Pause check, chapter three. One: are all D-L-Ts blockchains, or are all blockchains D-L-Ts?
> 1 S: pause card "Ch 3 Check · Q1: DLT vs blockchain?" · H: 3 s


N079 · All blockchains are D-L-Ts. Two: why do banks choose permissioned D-L-T over permissionless networks?
> 1 N: "All blockchains = DLT ✓" · 2 S: card "Q2: Why permissioned DLT?" · H: 3 s


N080 · For transaction privacy and controlled access. Three: what happens right after Meena uploads hashed documents onto the ledger?
> 1 N: "Privacy & access control ✓" · 2 S: card "Q3: Step after doc upload?" · H: 3 s


N081 · The smart contract checks data against L-C terms. One thing from chapter three: blockchain shares documents and triggers checks, while payment rails settle money.
> 1 N: "Smart-contract check ✓" · 2 S: chapter 3 summary card fills and dims [F38, F40, F43]


## Chapter 4 · Benefits, limits and challenges on one balance scale


N082 · Chapter four: weighing benefits against limits and challenges on one balance scale. First, quick recall from chapter three.
> 1 S: chapter title "4 · Benefits, limits & challenges" · 2 S: balance scale appears


N083 · What do we call self-executing code on a distributed ledger that automatically checks L-C conditions?
> 1 S: recall card "Self-executing DLT code?" · H: 3 s


N084 · A smart contract. Now load the left pan: the benefits.
> 1 N: "Smart contract ✓" [F41] · 2 M: node "benefits / challenges"


N085 · Traditional correspondent banking faces three frictions: chains of intermediaries, multi-country compliance checks, and foreign exchange plus time-zone delays.
> 1 C: card "3 frictions: intermediaries · multi-country AML/CDD · FX & time zones" [F44]


N086 · Digital platforms and D-L-T cut turnaround from days to minutes, lower costs, improve transparency, create tamper-evident trails, and reduce discrepancies.
> 1 S: left pan fills "Benefits: speed · lower cost · transparency · tamper-evident · fewer discrepancies" [F46]


N087 · Globally, the G-twenty Roadmap, revised in twenty twenty-three to fifteen action items across three themes, pushes interoperability, I-S-O two-zero-zero-two-two, and aligned regulation.
> 1 N: "G20 Roadmap (2020 → rev. 2023): 15 items · 3 themes" [F45]


N088 · Now load the right pan: the real limits and challenges bankers must manage.
> 1 S: right pan lowers "Limits & challenges"


N089 · Challenge one: cyber security and quantum risk. Banks rely on SWIFT's Customer Security Programme, ReBIT, annual audits, and post-quantum testing under B-I-S Project Leap.
> 1 N: "1 · Cyber risk (SWIFT CSP, ReBIT, audits) · Quantum (BIS Project Leap, Dec 2025)" [F2, F47]


N090 · Challenge two: legal gaps and interoperability. Electronic trade documents lack universal legal recognition, and separate blockchain networks risk becoming disconnected digital islands.
> 1 N: "2 · Legal gaps (e-docs) & interoperability ('digital islands')" [F14, F49]


N091 · Challenge three: legacy IT cost, data privacy, and A-M-L. RBI's April twenty eighteen circular mandates storing Indian payment data strictly inside India.
> 1 N: "3 · Legacy cost · Local data storage (6 Apr 2018) · DPDP Act 2023 · AML/FATF Rec 16" [F48, F49]


N092 · Challenge four: private stablecoins versus central bank digital currency. RBI notes stablecoins fail three tests: singleness of money, elasticity, and integrity.
> 1 C: trap card "Stablecoins: fail singleness, elasticity, integrity | CBDC: sovereign fiat (RBI pilots Nov/Dec 2022)" [F50]


N093 · Pause check, chapter four. One: name any two frictions in traditional correspondent cross-border payments.
> 1 S: pause card "Ch 4 Check · Q1: 2 frictions in correspondent banking?" · H: 3 s


N094 · Multiple intermediaries, cross-border compliance checks, or FX and time-zone delays. Two: where must Indian payment operators store domestic payment data?
> 1 N: "Intermediaries / compliance / FX-time zones ✓" · 2 S: card "Q2: RBI payment data storage rule?" · H: 3 s


N095 · Only in India, under RBI's April twenty eighteen circular. Three: which three monetary tests do private stablecoins fail?
> 1 N: "Only in India ✓" · 2 S: card "Q3: 3 tests stablecoins fail?" · H: 3 s


N096 · Singleness of money, elasticity, and integrity. One thing from chapter four: technology brings speed and visibility, while cyber, legal, privacy, and interoperability need governance.
> 1 N: "Singleness, elasticity, integrity ✓" · 2 S: balance scale locks in equilibrium [F47, F48, F50]


## Close


N097 · Mixed final check across all chapters. One: who developed S-F-M-S, and who operates it today?
> 1 S: mixed check card "Final Check · Q1: SFMS builder vs operator?" · H: 3 s


N098 · I-D-R-B-T built it; I-F-T-A-S runs it. Two: does e-U-C-P two point one replace or supplement U-C-P six hundred?
> 1 N: "IDRBT / IFTAS ✓" · 2 S: card "Q2: eUCP 2.1?" · H: 3 s


N099 · Supplement. Three: are cryptocurrency services allowed inside RBI's Regulatory Sandbox?
> 1 N: "Supplement ✓" · 2 S: card "Q3: Crypto in RBI Sandbox?" · H: 3 s


N100 · No, crypto is on the negative list, while permissioned blockchain and smart contracts are eligible.
> 1 N: "Excluded (negative list) ✓" [F28, F31]


N101 · Blank mind map check. Under Pipes and Plumbing, our Technology branch has six nodes. Name them before I show them.
> 1 M: blank map with 6 empty slots under "Pipes and plumbing → Technology" · H: 5 s


N102 · I-S-O two-zero-zero-two-two, g-p-i, platforms, fintech and channels, blockchain trade, and benefits versus challenges.
> 1 M: full 6 nodes light up in order: "ISO 20022 · gpi · platforms · fintech and channels · blockchain trade · benefits / challenges"


N103 · You can now trace payment digitisation, compare key platforms, walk a six-step blockchain L-C, and weigh fintech risks against RBI rules.
> 1 C: "You can now" card tied to A10.1–A10.7; scope card "Excludes basic SWIFT/UCP 600 & GIFT IBU rules"


N104 · Homework tonight: draw the six-step blockchain flow beside a traditional L-C relay, and mark where banking payment rails still sit.
> 1 N: "Homework: 6-step blockchain LC vs paper LC relay"


N105 · Next class is our module revision. Before we meet, note which three recent regulatory changes surprised you most across international banking.
> 1 C: preview card "Next: Module A full revision"


N106 · [warmly] That wraps up our final topic in this module. Step away from the screen, rest well, and I'll see you in the revision class.
> 1 S: notebook closes gently


---


## Facts needed (not in primary sources yet; omitted from spoken script)
1. **IBBIC (Indian Banks' Blockchain Infrastructure Co. Pvt. Ltd., 2021)**: Secondary reports state 15 Indian banks formed IBBIC for inland LCs on a distributed ledger, but no primary RBI, IBA, or IBBIC page was accessible. Confirm entity name, incorporation date, and current status from a primary source before adding a line on IBBIC (currently only IDRBT's primary-verified Jan 2017 White Paper and sight-LC PoC is taught).
2. **UNCITRAL MLETR (2017) enactment count**: The UNCITRAL webpage could not be opened directly; verify if MLETR adoption count is wanted alongside the UK Electronic Trade Documents Act 2023.
3. **ICC eUCP 2.1 / eURC 1.1 exact effective date**: Confirm from primary ICC PDF at freeze.
4. **Swift SR 2026 structured postal address revised deadline**: Swift's August 2026 note states it accepted a community extension request; confirm final deadline as at 31 Dec 2026.