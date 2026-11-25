# D02 · Map nodes (c1, 2026-11-24)
Structure Overview
* Mind map D: "Reading a bank's balance sheet"
* Branch: 4 o'clock — Asset quality
* Color Legend: Standard (Green) · SMA (Amber) · NPA (Red)


________________


Node Registry (plans_D.md §D02: Asset quality)
1. Income Recognition (N026)
* Standard Accounts: Recognized on an accrual basis.
* NPA Accounts (incl. Govt-guaranteed): Recognized strictly on a cash basis.
* Interest Treatment: Reverse all unrealised interest; transfer to Memorandum account (excluded from Gross Advances).
* SNFA Provisions (Effective 1 Oct 2026):
   * No prior unrealised interest to be booked.
   * Reverse all legacy unrealised interest by 30 Sep 2027.
   * Realised receipts classified directly under Other Income.
* Regulatory References: RBI IRACP Directions 2025, Ch. V | Second Amendment Directions 2026
2. Special Mention Accounts — SMA (N040)
* Tagging Engine: Day-end Straight-Through Processing (STP) auto-tagging.
* Non-Revolving Loans:
   * SMA-0: $\le$ 30 days overdue
   * SMA-1: > 30–60 days overdue
   * SMA-2: > 60–90 days overdue
* Revolving Facilities (CC/OD): No SMA-0 level; direct tagging to SMA-1 and SMA-2 only.
* Exemptions: Crop-season agricultural advances are exempt from SMA classification.
* CRILC Reporting: Mandatory reporting for aggregate exposure $\ge$ ₹5 crore (Monthly main reporting + weekly Friday default updates).
* Regulatory Reference: RBI Resolution of Stressed Assets Directions 2025, para 15–18
3. Non-Performing Asset Classes — NPA (N097)
* General Rule: 90-day record-of-recovery applied on a borrower-wise basis (not facility-wise).
* Special Triggers & Tests:
   * Agricultural: Short-crop (2 seasons) / Long-crop (1 season) default rules.
   * OD/CC Out-of-Order: Evaluated via 3 distinct out-of-order tests (insufficient credits, drawing power exceeded, or outstanding > limit).
   * Drawing Limits: 3-month stock statement delinquency or 90-day irregular drawings; mandatory 180-day limit review.
   * Credit Cards: 90 days past due date.
   * Upgrades: Upgraded only upon full clearance of all arrears/overdues.
* Asset Ageing Pipeline:
   * Sub-standard: Outstanding for $\le$ 12 months.
   * Doubtful: D1 ($\le$ 1 year), D2 (1–3 years), D3 (> 3 years).
   * Loss Assets: Uncollectible or identified as loss by internal/external auditors.
* Security Erosion Rules:
   * Realisable value of security $< 50%$ of assessed value $\rightarrow$ Direct downgrade to Doubtful.
   * Realisable value of security $< 10%$ of outstanding balance $\rightarrow$ Direct downgrade to Loss Asset.
* ECL Framework 2026: Expected Credit Loss framework issued; effective implementation date set for 1 Apr 2027.
* Regulatory References: RBI IRACP Directions 2025, Ch. III | RBI ECL Directions 2026