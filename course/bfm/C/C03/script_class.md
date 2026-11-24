# C03 · "T-Bills, CMBs, CP and CD: auctions and the sums" · CLASS EDITION (script c1, with cue sheet)
* Status: **c1 GEMINI DRAFT, gate PASS (after Gemini cut it from about 3,300 words), full review pending** (owner, 2026-11-24: "save as drafts, check later"). Not locked: do not voice until reviewed.
* Plan: course/bfm/C/plans_C.md §C03 (v3 depth pass; both v3 additions covered: C2.2 T-Bill auction/CMB features and C2.3 G-sec auction methods taught here once). Course order v4: C02b → C03 → C04.
* Syllabus: C2.2 (Money market products — T-Bills, CMBs, CP & CD discount/yield sums and auction rules), C2.3 (Securities market products — G-sec auction methods, taught here once and recalled later in bond valuation).
* Facts: C03_fact_sheet, rows cited as [F1]–[F30]. Sums: C03_numericals (verified two independent ways in Python Decimal). Practice: C03_practice.
* Rule version (opening card): "RBI Act, 1934 (ss. 20–21) · Government Securities Act, 2006 · GoI Consolidated General Notification (26 Mar 2025) · RBI NCB Scheme (12 Nov 2021) · RBI Multiple Price Auction Policy (1 Apr 2024; verified Oct–Nov 2026) · RBI CRR & SLR Directions, 2025 (Updated 9 Oct 2026) · RBI CP & NCD Master Direction, 2024 (eff. 1 Apr 2024) · RBI CD Master Direction, 2021 & AIFI Resource Raising Directions, 2025 (Nov 2025) · FIMMDA Handbook of Market Practices 2026 · as at 31 December 2026".
* Greeting / goodbye (new, verified unused in greetings.md and A21): greeting "Good to have you with me today. Keep your basic calculator beside you, because we are bidding at an auction and pricing the bills."; goodbye "Your auction board and discount bar are set. Close your calculator, take a breather, and I will meet you next class."
* Story: A bank officer checks the morning paper showing a 91-day Treasury Bill auction result at ₹98.75 (illustrative). Two colleagues disagree on the yield: one divides ₹1.25 by ₹100 face value; the other divides by ₹98.75 purchase price. Who is right, and what does the bank actually earn? All names, prices, yields, and amounts are illustrative.
* Holds: questions 3–5 s; one-step sums 8 s; "your turn" numerical 15 s; blank mind map 5 s.
* Say it right: "T-Bill" as "Tee-Bill"; "C-M-B"; "I-T-B"; "G-Sec" as "Gee-Sek"; "S-L-R"; "C-R-R"; "E-Kuber" as "Ee-Koo-ber"; "C-C-I-L"; "N-C-B"; "F-R-B"; "C-P"; "C-D"; "I-P-A"; "A-I-F-I"; "FIMMDA" as "FIM-da"; "ninety-eight seventy-five" for ₹98.75.
* Not in this video: Call, notice, term money limits, repo collateral, and TREPS (earlier in this module); LAF corridor, Oct 2025 liquidity framework, and SOFR benchmarks (last class); CRR/SLR/NDTL calculation and 99% daily CRR minimum (next class); dated G-Sec clean/dirty price, YTM, and STRIPS (later in this module).
* Length: 1,836 spoken words (exact count verified by linter; 0 lines > 25 words; 0 spoken lesson codes) + ~2.6 min of holds ≈ 14.8 min at 150 wpm. Chapters: warm-up (~1.2 min) · opening (~0.5 min) · Ch 1 Discount instruments & tenors (~3.1 min) · Ch 2 The auction (~3.7 min) · Ch 3 Yield & price sums (~3.3 min) · Ch 4 CP & CD sums and traps (~2.1 min) · close (~1.1 min).
* Cue sheet: S scene · N note · G glow · M map · C card · B board mark · H hold. Stable picture: a discount bar rising from Purchase Price to ₹100 Face Value beside an auction board with competitive bids stacked in a column.


---

## Warm-up

N001 · [warmly] Good to have you with me today. Keep your basic calculator beside you, because we are bidding at an auction and pricing the bills.
> 0 C: rule-version card (as at 31 Dec 2026) · 1 S: notebook page; title "T-Bills, CMBs, CP & CD: Auctions and Sums"

N002 · Phone on silent, notebook open. Quick recall from last class: does a bank pledge collateral to park funds under the S-D-F?
> 1 S: recall card "Last class: Does SDF require collateral?" · H: 4 s

N003 · No collateral at all. The Standing Deposit Facility replaced fixed-rate reverse repo as the liquidity corridor floor.
> 1 N: "SDF = LAF floor · NO collateral ✓"

N004 · One more from earlier: why do banks run an integrated treasury instead of separate desks?
> 1 S: recall card "Earlier recall: Why integrated treasury?" · H: 3 s

N005 · Because money, forex, and bond markets spill into each other, so one desk switches funds across all three.
> 1 N: "Integrated treasury = money + forex + securities as one unit ✓"

N006 · Solid start. T-Bill sums appeared in July 2024 and June 2026, and Cash Management Bills came up across five exam cycles.
> 1 C: Evidence badge "T-Bill sums: Jul 2024, Jun 2026 · CMBs: 5 cycles"

N007 · By the close, you will decode any government auction and compute discount-bill yields and prices in under two minutes.
> 1 S: stable picture — discount bar (Price → ₹100 Par) beside auction board

## Opening

N008 · Picture Thursday morning at your desk. The paper shows a 91-day T-Bill allotted at ninety-eight seventy-five, illustrative.
> 1 S: newspaper clipping card "91-Day T-Bill · Allotted Price: ₹98.75 (illustrative)"

N009 · You earn one rupee twenty-five paise in 91 days. Two colleagues pull out calculators to annualise that return.
> 1 N: "Gain = ₹100 − ₹98.75 = ₹1.25 in 91 days"

N010 · One divides by face value 100. The other divides by purchase price ninety-eight seventy-five.
> 1 C: split card "Colleague A: ÷ 100" vs "Colleague B: ÷ 98.75"

N011 · Pick a side. Which divisor gives the true yield, and how many days sit in our year?
> 1 G: split card · H: 4 s

N012 · Hold your choice. Let us meet the bills on the auction table first, then settle that debate with exact numbers.
> 1 S: zoom out to full notebook page

## Chapter 1 · Discount instruments and tenors: T-Bills and CMBs

N013 · Every bill we price today — T-Bills, C-M-Bs, C-P, and C-D — is issued at a discount and redeemed at par.
> 1 S: discount bar diagram "Issue Price (Discount) → Maturity (₹100 Par)" · 2 N: "Zero-coupon · issued at discount · redeemed at par" [F5, F10, F25, F29]

N014 · Treasury Bills are short-term debt issued only by the Central Government; State Governments never issue T-Bills.
> 1 N: "T-Bills = Central Govt ONLY (no State T-Bills)" [F3]

N015 · R-B-I's Internal Debt Management Department manages them under R-B-I Act Sections 20 and 21 and the Government Securities Act, 2006.
> 1 N: "Legal basis: RBI Act ss. 20–21 · G-Sec Act 2006 · GoI Notif 26 Mar 2025" [F1, F2]

N016 · Since March 2025, one consolidated General Notification covers dated G-Secs, T-Bills, and C-M-Bs together.
> 1 G: "GoI Notif 26 Mar 2025" [F2]

N017 · Which three standard T-Bill tenors does R-B-I auction to the public every week?
> 1 S: three blank tenor boxes · H: 3 s

N018 · 91-day, 182-day, and 364-day. Auctions run usually every Wednesday on E-Kuber, with T plus one settlement in R-B-I books.
> 1 N: "Auction tenors: 91d · 182d · 364d | Wed on E-Kuber | T+1 at RBI" [F3, F7, F13]

N019 · What about 14-day Intermediate T-Bills? They are non-marketable, strictly for State Governments and Union Territories.
> 1 N: "14-day ITB = non-marketable · States/UTs surplus cash only" [F4]

N020 · Many of you are thinking the minimum T-Bill bid is twenty-five thousand rupees, from older textbooks.
> 1 C: Trap card "OLD (pre-2016): ₹25,000" [F6]

N021 · That changed in 2016. Today, the minimum bid and multiple is ten thousand rupees, both competitive and non-competitive.
> 1 C: Trap card right side "CURRENT (31 Dec 2026): ₹10,000 & multiples" · B: strike "₹25,000" [F6]

N022 · Now meet Cash Management Bills, or C-M-Bs, announced in August 2009 and first issued in May 2010.
> 1 N: "CMB = Cash Management Bill (announced Aug 2009 · first issue May 2010)" [F9]

N023 · Government of India issues C-M-Bs for temporary cash flow mismatches, with non-standard maturities under 91 days.
> 1 N: "Purpose: temporary GoI cash mismatch · Tenor: < 91 days" [F9, F10]

N024 · Like T-Bills, C-M-Bs are discounted, settle on T plus one, qualify for repo, and count as S-L-R securities.
> 1 N: "CMB: discount · T+1 · repo-eligible · SLR-eligible (BR Act s. 24)" [F8, F10]

N025 · Exam favourite exception: can a retail investor place a non-competitive bid for a Cash Management Bill?
> 1 G: "CMB" · H: 3 s

N026 · No. The Non-Competitive Bidding Scheme is not extended to C-M-Bs — there is no non-competitive window.
> 1 B: box "CMB = NO Non-Competitive window" [F11]

N027 · Chapter one check. Pause and answer three quick questions.
> 1 S: Pause Check 1 card (3 questions)

N028 · One: which three T-Bill tenors are auctioned? Two: minimum T-Bill bid? Three: are C-M-Bs S-L-R eligible?
> 1 N: "Q1: Auction tenors? · Q2: Min bid? · Q3: CMB SLR-eligible?" · H: 6 s

N029 · One: 91, 182, and 364 days, since 14-day bills are non-marketable. Two: ten thousand rupees, not twenty-five thousand.
> 1 N: "A1: 91, 182, 364 days ✓ · A2: ₹10,000 ✓" [F3, F4, F6]

N030 · Three: yes, C-M-Bs qualify for S-L-R under Section 24 of the Banking Regulation Act.
> 1 N: "A3: Yes, SLR-eligible ✓" [F8]

N031 · One thing to remember: C-M-Bs work like under-91-day T-Bills for S-L-R, except they have no non-competitive window.
> 1 M: add node "Money market → T-Bill auction" [F8, F10, F11]

## Chapter 2 · The auction: competitive, non-competitive, and pricing methods

N032 · Chapter two: how R-B-I auctions T-Bills and dated G-Secs. Quick recall: do C-M-Bs have a non-competitive window?
> 1 S: auction board scene · H: 3 s

N033 · No, competitive only. Now look at the two lanes on R-B-I's E-Kuber auction board.
> 1 N: "E-Kuber lanes: Competitive (10:30–11:30) | Non-Competitive (10:30–11:00)" [F7, F11, F13]

N034 · Competitive bidders — banks, Primary Dealers, mutual funds, insurers — quote exact prices or yields and may submit multiple bids.
> 1 N: "Competitive = institutions · quote price/yield · multiple bids" [F14]

N035 · Non-competitive retail investors without an S-G-L account bid for amount only, via an aggregator or R-B-I Retail Direct.
> 1 N: "Non-Competitive (NCB) = retail · amount only · 1 bid (min ₹10,000)" [F15]

N036 · Retail Direct added a mobile app with U-P-I block in 2024 and T-Bill auto-bidding in August 2025.
> 1 N: "Retail Direct: mobile app + UPI (2024) · T-Bill auto-bid (Aug 2025)" [F12]

N037 · What share of the notified amount is reserved for retail non-competitive bidders in G-Secs and T-Bills?
> 1 G: "Non-Competitive (NCB)" · H: 3 s

N038 · Up to five percent within the notified amount. For dated G-Secs, one retail bid is capped at two crore rupees.
> 1 N: "Retail NCB: up to 5% within notified · Dated G-Sec max ₹2 cr/bid" [F16]

N039 · Two exceptions. State Governments, eligible Provident Funds, and designated foreign central banks bid in T-Bill N-C-B outside the notified amount, uncapped.
> 1 N: "T-Bill institutional NCB (States/PFs): OUTSIDE notified · no cap" [F17]

N040 · And Regional Rural Banks and Co-operative Banks use non-competitive bidding only in dated G-Secs, never in T-Bills.
> 1 N: "RRBs & Co-op banks: NCB in dated G-Secs ONLY" [F17]

N041 · Many of you assume non-competitive bidders pay the cut-off price. Is that true?
> 1 C: Trap card "Cut-off price vs Weighted Average Price?" · H: 3 s

N042 · No. They are always allotted at the weighted average price or yield of successful competitive bids.
> 1 B: circle "Weighted Average Price / Yield (WAP/WAY)" [F18]

N043 · Now two auction pairs examiners mix up. First: yield-based versus price-based.
> 1 S: 2x2 auction grid on board

N044 · A yield-based auction issues a new dated G-Sec, where the cut-off yield becomes the coupon rate.
> 1 N: "Yield-based = NEW dated G-Sec (cut-off yield = coupon)" [F19]

N045 · A price-based auction re-issues an existing G-Sec with a fixed coupon, and auctions all T-Bills. New F-R-Bs are spread-based.
> 1 N: "Price-based = RE-ISSUE dated G-Sec & all T-Bills · New FRB = spread-based" [F19]

N046 · Second pair: Uniform Price versus Multiple Price. In Uniform Price, every winning bidder pays the same cut-off price.
> 1 N: "Uniform Price (Dutch) = all winners pay cut-off" [F20]

N047 · In Multiple Price, each winner pays the exact price they bid — bid higher, pay more. That is winner's curse.
> 1 N: "Multiple Price (French) = each winner pays own bid" [F20]

N048 · Write this down. Older classes still teach the July 2021 split where benchmark G-Secs used Uniform Price.
> 1 C: Trap card "OLD (Jul 2021): 2–14 yr G-Secs = Uniform Price" [F21]

N049 · From 1 April 2024, R-B-I reversed that. All GoI market borrowing securities — dated G-Secs and T-Bills — use Multiple Price.
> 1 C: Trap card right side "CURRENT (from 1 Apr 2024): ALL GoI borrowing = Multiple Price" · B: strike "Uniform Price" [F21]

N050 · Quick auction sum. Cut-off on a 91-day T-Bill is ninety-eight forty, illustrative.
> 1 S: auction sum box "Cut-off = ₹98.40 | Face Value = ₹10 cr each (illustrative)"

N051 · Bank A bids ninety-eight fifty and Bank B bids ninety-eight forty for ten crore each. What does each pay?
> 1 N: "Bank A bid: ₹98.50 · Bank B bid: ₹98.40" · H: 8 s

N052 · Under Multiple Price, Bank A pays nine point eight five crore; Bank B pays nine point eight four crore — one lakh less.
> 1 N: "A: ₹9.85 cr | B: ₹9.84 cr (diff ₹1 lakh)" [F20, F21]

N053 · Under Uniform Price, both would pay nine point eight four crore. Overbidding costs real money in Multiple Price.
> 1 N: "If Uniform: both pay ₹9.84 cr" [F20]

N054 · Primary auctions settle T plus one directly in R-B-I books; C-C-I-L clears secondary trades on DvP-three.
> 1 N: "Primary: T+1 at RBI | Secondary: T+1 DvP-III via CCIL" [F13]

N055 · Chapter two pause check — three quick questions.
> 1 S: Pause Check 2 card (3 questions)

N056 · One: what price do N-C-B bidders pay? Two: basis for a re-issued G-Sec? Three: method for 10-year G-Secs today?
> 1 N: "Q1: NCB price? · Q2: Re-issue basis? · Q3: 10-yr G-Sec method?" · H: 6 s

N057 · One: weighted average price or yield. Two: price-based, since the coupon is fixed.
> 1 N: "A1: Weighted average ✓ · A2: Price-based ✓" [F18, F19]

N058 · Three: Multiple Price, because R-B-I moved all GoI borrowing to Multiple Price from 1 April 2024.
> 1 N: "A3: Multiple Price (from 1 Apr 2024) ✓" [F21]

N059 · One thing to remember: every GoI auction today is Multiple Price, and retail N-C-B gets up to five percent at weighted average.
> 1 M: highlight node "T-Bill auction" [F16, F18, F21]

## Chapter 3 · Yield from price and price from yield: the sums

N060 · Chapter three: calculators ready. Quick recall: are T-Bills auctioned on a yield basis or a price basis?
> 1 S: calculator & discount bar scene · H: 3 s

N061 · Price-based, using Multiple Price. Now back to my opening 91-day T-Bill at ninety-eight seventy-five.
> 1 S: recall opening clipping "91-Day T-Bill at ₹98.75 (illustrative)" [F19, F21]

N062 · Indian money-market bills use Actual over 365 — always 365 days in the denominator, never 360.
> 1 N: "Day count = Actual / 365 (NEVER 360; 30/360 is for dated G-Secs)" [F22]

N063 · Discount is rear-ended: you earn return on what you paid, so divide by purchase price P, never by 100.
> 1 N: "Yield = [(100 − P) ÷ P] × (365 ÷ D) × 100" · B: underline "÷ P" [F23]

N064 · Colleague B was right. Dividing by 100 understates yield because you invested ninety-eight seventy-five, not 100.
> 1 B: strike "Colleague A: ÷ 100" · G: "Colleague B: ÷ 98.75" [F23]

N065 · Sum one, worked in full. Press 100 minus 98.75, equals — one point two five.
> 1 N: "Sum 1 (91d, P=98.75): 100 − 98.75 = 1.25" [F23]

N066 · Divide by 98.75, equals — zero point zero one two six five eight.
> 1 N: "1.25 ÷ 98.75 = 0.0126582..."

N067 · Times 365, divided by 91, times 100, equals — five point zero seven seven two percent.
> 1 N: "× 365 ÷ 91 × 100 = 5.0772%" · B: box "5.0772%" [F22, F23]

N068 · Watch the traps: dividing by 100 gives 5.0137%, and using 360 days gives 5.0077%. Both are wrong.
> 1 C: Error card "÷ 100 → 5.0137% (✗) | 360 days → 5.0077% (✗)" [F22, F23]

N069 · Now flip it: price equals 100 divided by one plus yield times days over 36,500.
> 1 N: "Price = 100 ÷ [1 + (Y × D) ÷ 36500]" [F24]

N070 · Sum two, faded — press alongside me. Target yield is 6.50% on a 182-day T-Bill, illustrative.
> 1 N: "Sum 2 (182d, Y=6.50%): 6.50 × 182 ÷ 36500 = ?" · H: 5 s

N071 · Press 6.50 times 182, divided by 36,500 — zero point zero three two four one one. Add one: 1.032411.
> 1 N: "1 + 0.032411 = 1.032411" [F24]

N072 · Now 100 divided by 1.032411, equals — ninety-six point eight six zero seven rupees.
> 1 N: "100 ÷ 1.032411 = ₹96.8607" · B: box "₹96.8607" [F24]

N073 · Subtracting discount straight from 100 gives ₹96.7589 — that is front-ended, not rear-ended.
> 1 C: Error card "Front-ended 100 − 3.2411 = ₹96.7589 (✗)" [F24]

N074 · Sum three — your turn. A 42-day C-M-B is issued at ₹99.30, illustrative. Compute its annualised yield.
> 1 S: "YOUR TURN: 42-day CMB · P = ₹99.30 · Find Yield (%)" · H: 15 s

N075 · Check your screen: 0.70 divided by 99.30, times 365, divided by 42, times 100.
> 1 N: "(0.70 ÷ 99.30) × (365 ÷ 42) × 100" [F10, F22, F23]

N076 · Answer: 6.1262%. If you got 6.0833%, you divided by 100 instead of 99.30.
> 1 N: "= 6.1262% ✓ (Trap ÷100 = 6.0833% ✗)" · B: box "6.1262%" [F23]

N077 · Pause check three — two quick questions, no calculator needed.
> 1 S: Pause Check 3 card (2 questions)

N078 · One: if T-Bill price rises, does yield rise or fall? Two: in a leap year, what denominator does R-B-I's FAQ use?
> 1 N: "Q1: Price ↑ → Yield? · Q2: Leap year denominator?" · H: 5 s

N079 · One: yield falls, because discount shrinks on a larger base. Two: still 365, because Actual over 365 is fixed.
> 1 N: "A1: Yield falls ✓ · A2: 365 (fixed) ✓" [F22, F23]

N080 · One thing to remember: price up means yield down, always divide by purchase price, and always use 365 days.
> 1 M: add node "Money market → T-Bill yield" [F22, F23]

## Chapter 4 · Commercial Paper and Certificate of Deposit sums and traps

N081 · Final chapter: C-P and C-D. Quick recall: what day-count basis do money-market discount bills follow?
> 1 S: CP & CD comparison board · H: 3 s

N082 · Actual over 365. Under FIMMDA's 2026 Handbook, C-P and C-D use the exact same rear-ended formulas, rounded to four decimals.
> 1 N: "CP & CD = same Actual/365 rear-ended formulas · Price to 4 decimals" [F22, F23, F24]

N083 · Before our C-P sum, clear four 2024 to 2026 traps from older notes.
> 1 S: 2-column Trap Card "CP (2024 MD) vs CD (2021 MD / 2025 AIFI)"

N084 · Both C-P and C-D are demat only, in multiples of five lakh rupees — the old one-lakh C-D minimum ended in 2021.
> 1 N: "CP & CD: demat only · min ₹5 lakh & multiples (old ₹1L CD gone)" [F25, F29]

N085 · C-P runs 7 days to 1 year, needs a Scheduled Commercial Bank as I-P-A, and carries minimum rating A-three.
> 1 N: "CP: 7d–1y · IPA = Scheduled Commercial Bank · min rating A3" [F25, F26, F27]

N086 · Two 2024 C-P changes: mandatory dual rating above 1,000 crore ended, and buyback is allowed after 7 days — not 30.
> 1 B: box "CP (eff. 1 Apr 2024): 1 CRA mandatory · Buyback after 7 days (not 30)" [F27, F28]

N087 · Commercial banks, R-R-Bs, and Small Finance Banks issue C-Ds for 7 days to 1 year, and may buy back after 7 days.
> 1 N: "Bank CD (SCB/RRB/SFB): 7d–1y · Buyback allowed after 7 days" [F29, F30]

N088 · All India Financial Institutions issue C-Ds for 1 to 3 years, and under November 2025 Directions cannot buy back their own C-Ds.
> 1 B: box "AIFI CD: 1–3 yrs · Buyback PROHIBITED · No loans against any CD" [F30]

N089 · Sum five, worked. A company issues a 90-day C-P of ₹50 lakh face value at 7.30%, illustrative.
> 1 S: Sum 5 box "90-day CP · FV = ₹50,00,000 · Y = 7.30% (illustrative)" [F24, F25]

N090 · Press 7.30 times 90, divided by 36,500 — 0.018, exact. Add one: 1.018.
> 1 N: "7.30 × 90 ÷ 36500 = 0.018 → 1 + 0.018 = 1.018" [F24]

N091 · Divide 100 by 1.018 — price per hundred is ₹98.2318, rounded to four decimals.
> 1 N: "Price/₹100 = 100 ÷ 1.018 = ₹98.2318" [F24]

N092 · Multiply 50 lakh by 98.2318, divide by 100 — issue proceeds are forty-nine lakh, eleven thousand, five hundred ninety rupees.
> 1 N: "Proceeds = 50,00,000 × 98.2318 ÷ 100 = ₹49,11,590.00" · B: box "₹49,11,590" [F24]

N093 · Same calculator routine, no new formula. Chapter four pause check — two questions.
> 1 S: Pause Check 4 card (2 questions)

N094 · One: after how many days can a company buy back its C-P? Two: can an A-I-F-I buy back its C-D?
> 1 N: "Q1: CP buyback after ___ days? · Q2: AIFI CD buyback?" · H: 5 s

N095 · One: after 7 days under the 2024 Direction, not 30. Two: no, A-I-F-I buyback is barred, though banks may buy back after 7 days.
> 1 N: "A1: 7 days ✓ · A2: No (banks yes after 7d, AIFIs no) ✓" [F28, F30]

N096 · One thing to remember: one formula prices T-Bills, C-M-Bs, C-P, and C-D, and 7 days is the buyback floor for C-P and Bank C-Ds.
> 1 M: highlight node "T-Bill yield" [F23, F28, F30]

## Close

N097 · Mixed check across the whole class — three rapid questions.
> 1 S: Mixed Check card (3 questions)

N098 · One: which bill has no non-competitive window? Two: current GoI auction method? Three: can a bank lend against a C-D?
> 1 N: "Q1: No NCB? · Q2: Current GoI method? · Q3: Loan against CD?" · H: 6 s

N099 · One: Cash Management Bills. Two: Multiple Price since 1 April 2024. Three: no, loans against C-Ds are prohibited unless R-B-I permits.
> 1 N: "A1: CMB ✓ · A2: Multiple Price ✓ · A3: No ✓" [F11, F21, F30]

N100 · Close your notes. On our blank Money Market branch, name the two nodes we added and three facts under each.
> 1 M: blank Money Market branch (2 empty slots) · H: 5 s

N101 · Reveal: T-Bill auction (E-Kuber, 5% retail N-C-B at weighted average, Multiple Price, no CMB window) and T-Bill yield (Actual/365, divide by P).
> 1 M: reveal "T-Bill auction" and "T-Bill yield" with key tags [F11, F16, F18, F21, F22, F23]

N102 · You can now decode any T-Bill or G-Sec auction and compute yield or price for T-Bills, C-M-Bs, C-Ps, and C-Ds.
> 1 C: "You can now" checklist (C2.2, C2.3)

N103 · Dated bond pricing, accrued interest, and Y-T-M come later in this module, where we will recall these auction rules once.
> 1 N: "Scope: Dated bond YTM & accrued interest → later in Module C"

N104 · Homework: a bank issues a 146-day C-D of ₹10 lakh at 7.50%, illustrative. Find price per hundred and proceeds.
> 1 C: Homework card "146-day CD · FV ₹10,00,000 · Y = 7.50% (illustrative) → Find P/100 & proceeds" [F24, F29]

N105 · Next class, we use those S-L-R bills: how much C-R-R and S-L-R must a bank hold on N-D-T-L, and what costs a 99% breach?
> 1 S: preview card "Next class: CRR, SLR, NDTL & 99% daily minimum"

N106 · [warmly] Your auction board and discount bar are set. Close your calculator, take a breather, and I will meet you next class.
> 1 S: fade out on completed Module C Mind Map