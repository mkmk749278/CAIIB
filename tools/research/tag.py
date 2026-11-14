import csv, re, sys, collections, os
S = sys.argv[1]
# (cluster id, name, official unit(s), regex) -- first match wins, order matters
C = [
 ('D-IRR','Interest rate risk in the balance sheet: gap, RSA/RSL, duration gap, NII/NIM, MCLR','D5',r'mclr|base rate|mismatch|\brsa|\brsl|d ?-?gap|\bnii\b|\bnim\b'),
 ('C-MKTRISK','Treasury risk: VaR, duration, modified duration, BPV, PV01, stop loss, bonds and yield','C5',r'price sensitiv'),
 ('D-NPA','Asset classification and provisioning: NPA, SMA, agri NPA, wilful defaulter, PCR','D3',r'\bnpa\b|\bsma|provision|\bpcr\b|wilful|willful|accelerated|crop|paddy|sugarcane'),
 ('A-FXNUM','Forex arithmetic: merchant rates, cross rates, forward, chain rule, bill buying/selling','A1',
   r'cross|chain rule|tt buying|bid rate|spot rate|forward rate|forex.*(numer|calc|case|used)|forex-|case study (on|from) (forex|foreign)|forex$|^foreign exchange$|retirement of import|import bill|export (bill )?discount|edbp|ebid|crystalli|crsytalli|settlement date|forex market timing|direct.*indirect|factors affecting foreign|fixing the rate|mirror'),
 ('A-DEALROOM','Dealing room, FEDAI, forex limits (daylight, overnight)','A1/A8',r'dealing room|day ?light|fedai|forex hold|holding limit|cash acceptance|cash limit'),
 ('A-LRS','LRS, TCS, current/capital account rules for residents','A2',r'\blrs\b|tcs|remittance|gift under|current account trans|capital account|haj|prohibited|foreign currency limit|education'),
 ('A-NRI','NRI accounts (NRE/NRO/FCNR/SNRR), residency, NRI loans','A3',r'nri|nre|nro|fcnr|snrr|rnor|deemed resident|non.?resident|returning'),
 ('A-CORR','Correspondent banking, Nostro/Vostro, SWIFT, RTGS','A3/C4',r'nostro|vostro|swift|mt ?70|asian clear|rtgs|idrbt|radix|chips|chaps'),
 ('A-LC','Letters of credit, UCP 600, URR 725, ISBP, Incoterms','A4',r'\blc\b|letter of credit|ucp|red clause|irrevocable|\burr\b|incoterm|parties in lc|reimburse'),
 ('A-EXIMP','Exporter/importer facilities: packing credit, EDPMS/IDPMS, factoring, trade credit','A5',r'packing|pcl|exporter|importer|export bill|status holder|iec code|dgft|directorate general|factoring|supplier credit|buyer.?s credit|trade credit|escrow|edpms|idpms|realization|realisation|ddа|diamond dollar|dda'),
 ('A-ECB','ECB, ADR/GDR/IDR, foreign investment','A6/C3',r'ecb|external commercial|adr|gdr|idr|fccb|foreign invest|masala|rupee denominated'),
 ('A-ECGC','ECGC, country risk in trade','A7',r'ecgc|country risk|shipment risk'),
 ('A-EXIM','EXIM Bank, RBI/FEMA role','A8',r'exim|fema|ad category|world bank|bis\b|headquarter'),
 ('A-IFSC','IFSC, GIFT City, IBUs, IFSCA','A9',r'ifsc|ibu|ibo|gift city|sez'),
 ('A-TECH','Technology in international banking, blockchain, fintech','A10',r'blockchain|fintech'),
 ('B-CAPCALC','Capital adequacy calculations: CRAR, CET1, Tier 1/2, RWA, CCF, capital charge','B3/D2',r'crar|\bcar\b|cet|tier|rwa|risk weight|capital charge|ccf|credit conversion|capital ratio|risk weighatge|qccp|housing loan rw|capping'),
 ('B-BASEL','Basel framework: pillars, CCB, CCCB, leverage ratio, D-SIB, ICAAP, RBS','B3',r'basel|basal|pillar|ccb|cccb|leverage|d-?sib|dsib|icaa|\bsifi\b|\brbs\b|capital conservation|credit rating agenc|haircut|merger'),
 ('B-OPRISK','Operational risk: BIA/TSA/AMA, alpha/beta, event types','B6',r'operational|\bbia\b|basic indicator|tsa|ama\b|alpha|beta|7 category|project finance|business line'),
 ('B-CREDITRISK','Credit risk: models (CreditMetrics), EL/UL, Altman Z, securitisation, credit derivatives','B5',r'credit risk|credit ?metrics|jp morgan|altm?a?n|altaman|expected loss|securiti[sz]ation|mrr|minimum retention|maximum retention|credit derivative|cds|trs|credit portfolio|credit rating|market maker in credit|risk pricing'),
 ('B-RISKTYPES','Risk concepts and types: strategic, reputation, systemic, model, basis, climate, ERM','B1/B2',r'risk definition|types? of risk|type risk|different type|^risk$|strategic|strategy risk|systemic|reputation|negative publicity|model risk|basis risk|climate|enterprise|ewrm|erm\b|coso|funding risk|call risk|time risk|embedded|going concern|fetters|banking book|trading book|stress test|scenario|sensitivity|various types|market risk other'),
 ('B-STATS','Statistics for risk: mean, variance, SD, volatility','B4',r'variance|deviation|volat|mean'),
 ('B-LIQ','Liquidity risk: LCR, NSFR, HQLA, FALLCR, structural liquidity','B7/B8/D4',r'lcr|nsfr|hqla|hql\b|liquidity|fallcr|falcar|structural|stock & flow|funding requirement'),
 ('C-TPROD','Treasury products: T-Bills, CMB, CP, CD, G-secs, repo, call/notice money','C2',r't-?bill|treasury bill|cash management bill|cmb|commercial paper|certificate of deposit|\bcp\b|government securit|g-?sec|repo\b|call money|notice money|treasury product|\bnds|sofr|treasury (case|office)|^treasury$|integral treasury|integrated treasury|treasury ops|mid office|front office'),
 ('C-RESERVES','CRR, SLR, NDTL, LAF, monetary policy','C4',r'crr|slr|ndtl|scr\b|laf|monetary|mpc|urr$'),
 ('C-MKTRISK','Treasury risk: VaR, duration, modified duration, BPV, PV01, stop loss, bonds and yield','C5',r'var\b|value at risk|disallowance|duration|bpv|basis point|bps\b|stop loss|bond|yield|price sensitiv|market risk'),
 ('C-DERIV','Derivatives: options, futures, forwards, swaps','C6',r'option|call and put|atm|itm|derivative|swap|irs\b|future|hedg'),
 ('D-NPA','Asset classification and provisioning: NPA, SMA, agri NPA, wilful defaulter, PCR','D3',r'credit card'),
 ('D-IRR','Interest rate risk in the balance sheet: gap, RSA/RSL, duration gap, NII/NIM','D5',r'rsa|rsl|gap|nii|nim|interest rate risk|yield curve|mclr|base rate|repo and mclr'),
 ('D-ALM','ALM, ALCO, balance sheet components, sources/uses of funds','D1/C7',r'alm|alco|asset liabil|balance sheet|sources & applic|total assets|transfer pric'),
 ('D-RAROC','RAROC, economic capital, profit planning, ROA','D6',r'raroc|economic capital|roa\b|profit plan'),
]
rows = list(csv.DictReader(open(os.path.join(S,'items.csv'))))
names = {c[0]:(c[1],c[2]) for c in C}
un=[]
for r in rows:
    t = r['item'].lower(); r['cluster']=''
    for cid,_,_,rx in C:
        if re.search(rx, t): r['cluster']=cid; break
    if not r['cluster']: un.append(r['item'])
w=csv.DictWriter(open(os.path.join(S,'items_tagged.csv'),'w',newline=''), fieldnames=['cycle','shift','source','item','cluster'])
w.writeheader(); w.writerows(rows)
print('untagged', len(un)); print('\n'.join(un))
