# A12 c1 · independent review: SUBJECT EXPERT

- **Reviewed**: `course/bfm/A/A12/script_class.md` c1 (N001–N076 and cue sheet), `numericals.md` (Q1–Q5, faded
  variant, early payment), `practice.md` (P1–P10), fact sheet `research/bfm/facts/A5.11-A5.3_A12.md` (F1–F19, "Leads",
  exam evidence), checker `tools/check/export_bills.py`; context `research/bfm/sources/fedai_rules_cutoff.md`,
  `research/bfm/facts/A5.3_A11b.md`, `plans_A.md` §A12, `research/bfm/depth/A.md` (A5.3, A5.11),
  `course/spec/lesson_spec.md`, `research/pedagogy/teaching_method.md`, `CLAUDE.md` hard lines,
  `course/bfm/greetings.md` (A12 row present, no repeat seen). 2026-11-22, fresh context.
  `python3 tools/check/export_bills.py` run: **all OK** (21 sums, 3 dates).
- **Primary texts checked** (fetched 2026-11-22):
  - **FEDAI Rules, 10th edition, updated up to 20 Aug 2026** (fedai.org.in PDF, Rule 2 read in full):
    2.1(a) "purchased/discounted/negotiated at the Authorised Dealer's current bill buying rate or contracted rate.
    Interest for the normal transit period and/or usance period shall be recovered upfront simultaneously";
    2.1(b)(i) ADs "should formulate own policy for crystallisation ... in case of non-payment of bills on the due
    date", (ii) "should be transparently available to the customers", (iii) **TT selling rate**; amount recoverable
    thereafter = crystallised rupee amount + interest and charges, (iv) interest "recovered on the date of
    crystallisation for the overdue period at the appropriate rate; and thereafter till the date of recovery of the
    crystallised amount", (v) externalisation countries; 2.1(c) after realisation advice: **TT buying or contracted
    rate**; 2.1(d) dishonour before crystallisation: bill + foreign currency charges at **TT selling**, plus
    appropriate interest and rupee charges; 2.2(a) interest "as per the guidelines of Reserve Bank of India from time
    to time"; 2.2(b) overdue interest if not paid within NTP (demand) / on or before notional or actual due date
    (usance); 2.2(c) early realisation: refund for unexpired period, pay or recover notional swap cost, interest on
    outlay per 6.6; 2.3 NTP definition (not the goods' arrival time), (a) fixed due date → NTP not applicable,
    (b) foreign-currency DP / sight bills not under LC **25 days**, deviation documented, max 90 days from shipment,
    no change in due date after purchase / discount / negotiation. **No fixed crystallisation day anywhere in Rule 2.**
    Only 2.5(b) changed after 30 Jun 2026 (AR 03/2026); not used in A12.
  - **RBI (Commercial Banks – Credit Facilities) Directions, 2025, updated as on 1 Oct 2026** (id=13156):
    2(1)(xxvii) overdue bill (demand: not paid before expiry of NTP plus grace; usance: not paid on the due date);
    2(1)(xxviii) post-shipment credit; 266 (three forms: bills purchased / discounted / negotiated; advances against
    collection bills; against duty drawback); 267 (liquidation by export-bill proceeds, or by mutual agreement from
    EEFC / other unfinanced bills; adjusted bills stay in EDPMS); 268 (overdue rupee post-shipment credit may be
    extinguished from rupee resources; EDF stays outstanding; liability to realise continues); 269 (demand bills: NTP
    per FEDAI); 270 (usance: max 365 days from shipment incl. NTP and grace); 291 (Board-approved rate, subject to the
    Interest Rates on Advances Directions); 292 (360 days → not export credit ab initio); 356–360 (EBR: spot rate;
    interest from due date to crystallisation per bank policy; remit without RBI approval). All match the fact sheet.
  - **Old FEDAI Rule 2** (eximguru.com transcription; lead only, as the fact sheet says): "crystallising ... on the
    30th day after the transit period" (demand) / "on the 30th day from Notional due date or actual due date"
    (usance); holiday or Saturday → next working day; "spot TT selling rate"; and the stated purpose "transfer the
    exchange risk to the exporter". So the script's history card (N038) and purpose answer (N036, N068) are
    consistent with the old text; the current text is silent on the day and the purpose.
- **Sums re-done by hand** (all agree with `numericals.md` and the checker):
  - Dates: 1 Mar 2027 is a Monday (1 Jan 2027 Friday + 59 days); +85 → 31 Mar (30), 30 Apr (60), **25 May (Tue)**;
    +30 → **24 Jun (Thu)**; +20 → **14 Jul (Wed)** ✓.
  - Q1 100,000 × 85.80 = 85,80,000 ✓. Q2 85,80,000 × 7.3 % = 6,26,340; × 85 = 5,32,38,900; ÷ 365 = **1,45,860**
    (365 × 1,45,860 = 5,32,38,900 exact) ✓; credit 84,34,140 ✓.
  - Q4 100,000 × 86.40 = 86,40,000; − 85,80,000 = 60,000 ✓; 85,80,000 × 10.95 % = 9,39,510; × 30 = 2,81,85,300;
    ÷ 365 = **77,220** exact ✓.
  - Q5 100,000 × 85.95 = 85,95,000 ✓; 86,40,000 × 10.95 % = 9,46,080; × 20 = 1,89,21,600; ÷ 365 = **51,840** exact ✓;
    45,000 + 51,840 = **96,840** ✓.
  - Variant 50,000 × 85.50 = 42,75,000; × 7.3 % = 3,12,075; × 25 = 78,01,875; ÷ 365 = **21,375** exact; credit
    42,53,625 ✓. Early 6,26,340 × 10 ÷ 365 = **17,160** exact ✓.
  - P3 40,000 × 86.25 = 34,50,000 ✓; 34,28,000 × 10.95 % = 3,75,366; × 30 = 1,12,60,980; ÷ 365 = **30,852** ✓.
    P5 100,200 × 86.10 = 86,27,220 ✓. P6 17,20,000 × 7.3 % = 1,25,560; × 25 ÷ 365 = **8,600**; distractors 10,320
    (30 days) and 1,25,560 (a year) ✓.
  - Largest display 5,32,38,900 (9 digits): fits the 12-digit allowed calculator. Every division is exact, so no
    rounding questions arise (7.3 and 10.95 are 365-friendly rates: a nice design choice).
- **Illustrative labels**: story line, bill card, ₹85.80 (N015 card), 7.3 % (N025), 10.95 % (N045), ₹86.40 (N042) ✓;
  ₹85.95 (N049) and the ₹86 forward (N019) are not labelled (finding 10).
- **Outdated content**: the 30th-day crystallisation rule is correctly taught as old, with the current FEDAI 2.1(b)
  "own policy, transparently available" as today's rule (N037–N038, trap card, P7(c), P8(a)) ✓. One outdated name in a
  distractor (finding 11).
- **Copyright**: own story and numbers; one set-up echoes a recalled item (finding 12).

## Verdict: ADOPT WITH FIXES

Every rule in the lesson matches the current primary texts: bill buying or contracted rate and interest up front
(FEDAI 2.1(a)), NTP 25 days and "fixed due date → no NTP" (2.3), overdue definition (CF 2(1)(xxvii)), overdue interest
(2.2(b)), early realisation refund plus swap cost (2.2(c)), crystallisation policy, TT selling, interest on that day and
after (2.1(b)), TT buying after crystallisation (2.1(c)), dishonour at TT selling (2.1(d)), EDPMS stays open (CF
267–268), and the packing-credit statements (CF 235/292, 293, 243, 389 via A11b). The crystallisation day is handled
correctly as bank policy today. All sums are right and the checker passes. No High finding. Three Medium points:
one inconsistent line in `numericals.md` about what is recovered on crystallisation day, one unsourced claim about
bank practice, and one close question whose answer the case cannot support.

## Findings

| # | Severity | Line | Problem | Source | Fix |
|---|---|---|---|---|---|
| 1 | **Medium** | `numericals.md` Q4 last line; checker label "Q4 total recovered on crystallisation day" | "Recovered on crystallisation day: `8640000 + 77220 =` ₹87,17,220" says the bank recovers the whole crystallised amount that day. FEDAI says only the **overdue interest** is recovered on that day; the crystallised rupee amount is "recoverable, thereafter" with interest "till the date of recovery". Q5 (and N050–N051) correctly treat ₹86,40,000 as still owed and charge 20 more days on it, so Q4 contradicts Q5: if ₹87,17,220 had been recovered on 24 Jun, there would be no ₹51,840 and no ₹96,840. | FEDAI 2.1(b)(iii)–(iv) | Replace the line with: "On crystallisation day the bank recovers the overdue interest ₹77,220 [F11]; her rupee liability of ₹86,40,000 stays outstanding, with interest, till she pays (Q5)." In `export_bills.py` relabel the check "Q4 her total dues on crystallisation day (liability + overdue interest)" or drop it. |
| 2 | **Medium** | N038 (and fact sheet "Leads": "Many banks still use 30 days") | "Many banks still use that" is a factual claim about current bank practice with no source; I found no bank's published crystallisation policy to confirm it. Hard line: facts only from primary sources. | FEDAI 2.1(b)(i)–(ii) (policy is each AD's; nothing about what banks choose) | N038: "Older books say the thirtieth day after the due date. That was the old rule. Today, the bank's policy decides, and an exam case tells you the day." Keep the trap card. In the fact sheet, change "Many banks still use 30 days" to "unverified: whether banks' policies still use 30 days". |
| 3 | **Medium** | N065–N066 | "Her bill is purchased at bill buying, then crystallised. Is the second rate higher or lower? Usually higher." The two rates are on different days (1 Mar and 24 Jun), so which is higher depends on how the market moved; and her bill was discounted, not purchased, at a usance bill buying rate that includes the forward premium. The answer "usually higher" is not supported by any rule. What is always true is the order of rates **on the same day**: bill buying < TT buying < TT selling for a sight bill. | FEDAI 2.1(a), 2.1(b)(iii); `fedai_rules_cutoff.md` rate map (the counter) | N065: "Quick mix. One. On the same day, which is higher: the sight-bill buying rate, or T-T selling?" N066: "T-T selling. It's the bank's selling side, so the gap is her cost. Two. A sight bill's interest: how many days?" Card: "same day: bill buying < TT buying < TT selling ✓". |
| 4 | Low | N004 and its note | "came ... as linked five-question sets": the evidence shows a Dec 2025 set of Q9–11 (three questions); the 2023 and 2024 case items do not record how many questions. | `items_tagged.csv` (BA23J EDBP, BA24J crystallisation); `fullpaper_tagged.csv` Dec 2025 Q9 | "this case came in the papers we studied as linked question sets." |
| 5 | Low | N025a, N046, N050 cues; `numericals.md` header and Q2/Q4/Q5 | Keys `8580000 × 7.3 % = 626340 × 85 = ...`: the `=` after `%` is not needed (the `%` key already shows 6,26,340), and on basic calculators with a multiplication constant an `=` after `%` can repeat the multiplication. The same habit is in A11b, so decide it course-wide. | CLAUDE.md hard line (key presses that work on the allowed calculator) | Show `8580000 × 7.3 %` → 626340, then `× 85 ÷ 365 =` → 145860 (same for 10.95 % sums). Change the `numericals.md` header to "`A × r %` gives r per cent of A; then `× days ÷ 365 =`", and mirror it in the checker's comment. |
| 6 | Low | N037 | "must show it to customers" is stronger and narrower than the text ("should be transparently available to the customers"). | FEDAI 2.1(b)(ii) | "Each bank writes its own policy, and makes it openly available to customers." Card text is fine. |
| 7 | Low | N060 | "Only good-track-record exporters, and E-O-U or S-E-Z units" can be heard as needing both. The rule is good track record **or** EOU / FTZ / EPZ / SEZ. | CF 243 (via A11b review) | "False. Only exporters with a good track record, or E-O-U and S-E-Z units." |
| 8 | Low | N043 vs N051 | N043 calls ₹60,000 "her exchange loss"; N051 then settles a ₹45,000 shortfall. A learner may ask which is her loss. | FEDAI 2.1(b)(iii), 2.1(c) | N043: "...The sixty thousand difference is her exchange loss for now." After N049 add to the card: "₹15,000 of it comes back: 85.95 vs 85.80" or say in N051 "Forty-five thousand short: part of the loss came back when the dollars came in." |
| 9 | Low | N007, N047 cue | The second option "it takes back the rupees it paid her" lights as the right answer, but crystallisation does not take rupees back; it converts the liability, and recovery comes later. | FEDAI 2.1(b)(i), (iii) | N047 cue: both buttons dim; a third label lights "fixes her debt in rupees at TT selling + interest". Spoken N047 is already correct. |
| 10 | Low | N049, N019 | ₹85.95 (TT buying) and the ₹86 forward are not labelled illustrative on screen. | CLAUDE.md (illustrative figures labelled); spec | N049 card: "TT buying ₹85.95 · illustrative". N019 note: "forward ₹86 · illustrative". |
| 11 | Low | P2 (d) | "the RBI reference rate": RBI stopped publishing the reference rate in 2018; FBIL publishes it. A distractor should not carry an outdated name. | FBIL reference rate (since July 2018) | "(d) the FBIL reference rate". |
| 12 | Low | N026–N027, `numericals.md` faded variant, checker "V" | The variant (USD 50,000 sight bill, discounting, transit interest, amount credited) mirrors the set-up of the recalled Dec 2025 Q9 ("a sight bill of USD 50,000"). Not a copy, but hard line: write every number ourselves. | CLAUDE.md hard lines; `fullpaper_tagged.csv` Dec 2025 Q9 | Use USD 60,000: `60000 × 85.5 =` 51,30,000 · `51,30,000 × 7.3 %` = 3,74,490 · `× 25 ÷ 365 =` **25,650** (exact) · credit `5130000 − 25650 =` **₹51,04,350**. Update N026–N027 spoken figures and the checker. |
| 13 | Low | N030 | "a small swap cost": "small" is not in the rule and can be large for long tenors or wide premiums. | FEDAI 2.2(c) | "The bank also pays or recovers a swap cost, as for early delivery of a forward." |
| 14 | Low | N023 card | The notional due date is NTP + usance **+ grace, if any**; the card omits grace, which the RBI overdue definition and CF 270 mention. | CF 2(1)(xxvii), 270; A05 fact sheet | Card: "notional due date = NTP 25 + usance 60 (+ grace, if any; none here) = 85 days". |
| 15 | Low | Fact sheet F5 | Cites FEDAI 2.2(a) beside the Board-policy point; FEDAI 2.2(a) only says the rate is "as per the guidelines of Reserve Bank of India from time to time". The Board-policy wording is CF 291's. | FEDAI 2.2(a); CF 291 | F5 source column: "CF 291 (Board policy, subject to the Interest Rates on Advances Directions); FEDAI 2.2(a) (rate per RBI guidelines)". |

## Not findings (checked and correct)
- N009 / P1 verbs: FEDAI 2.1(a) and CF 266 list the three verbs without mapping them; the script frames the mapping
  as how "banks use" the words and the fact sheet calls it our teaching words. Acceptable.
- N034 "overdue from that day" for a usance bill matches CF 2(1)(xxvii); the card's demand-bill test (NTP + grace)
  matches too. Overdue interest from the due date to crystallisation on the rupee advance matches FEDAI 2.1(b)(iv),
  2.2(b) (the base for the overdue period is not fixed by the rule; computing it on the advance is reasonable and
  stated in `numericals.md`).
- N052–N052a (dishonour at TT selling; EDPMS stays open) match FEDAI 2.1(d) and CF 267–268.
- Chapter 4 statements 1–5 and N063 (PCFC no export → TT selling) match A11b F3, F4, F6, F8, F22, F24.
- The current-rule crystallisation day (none fixed) is taught correctly and never stated as "FEDAI says 30 days".
