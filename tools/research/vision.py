import re, sys, os, json
KW=re.compile(r'forex|foreign exchange|FEMA|LRS|remittance|NRI|NRE|NRO|FCNR|vostro|nostro|export|import|ECB|external commercial|trade credit|letter of credit|IFSC|GIFT|IBU|ECGC|EXIM|FEDAI|authori[sz]ed dealer|rupee|capital adequacy|CRAR|CET|Tier|Basel|buffer|CCyB|leverage|D-SIB|risk weight|credit risk|market risk|operational risk|liquidity|LCR|NSFR|HQLA|ALM|interest rate risk|IRRBB|NPA|provision|asset classification|ECL|expected credit loss|wilful|SMA|securiti|credit derivative|derivative|swap|option|futures|repo|reverse repo|SDF|MSF|CRR|SLR|NDTL|treasury|T-bill|treasury bill|cash management bill|commercial paper|certificate of deposit|government securit|G-sec|call money|investment fluctuation|IFR|MCLR|EBLR|deposit rate|interest rate on deposits|payment system|RTGS|SWIFT|fraud', re.I)
out=[]
for f in sys.argv[2:]:
    T=open(f,encoding='utf-8',errors='ignore').read()
    month=re.search(r'vision_(\w+)\.txt',f).group(1)
    lines=[l.rstrip() for l in T.split('\n')]
    # headings: non-empty line, <120 chars, no ending period, followed by a longer line
    blocks=[]; cur=None
    for i,l in enumerate(lines):
        s=l.strip()
        if not s or re.match(r'^(IIBF VISION|\d+\s+\w+ 2026|.*IIBF VISION$)',s): continue
        nxt=next((x.strip() for x in lines[i+1:i+3] if x.strip()),'')
        if len(s)<130 and not s.endswith(('.',',',';')) and len(nxt)>60 and not s.startswith('•') and s[0].isupper():
            cur={'month':month,'head':s,'body':''}; blocks.append(cur)
        elif cur: cur['body']+=' '+s
    for b in blocks:
        if KW.search(b['head']) or len(KW.findall(b['body']))>=2:
            b['body']=re.sub(r'\s+',' ',b['body']).strip()[:700]; out.append(b)
json.dump(out,open(sys.argv[1],'w'),indent=1,ensure_ascii=False)
print(len(out))
for b in out: print(f"[{b['month'][:3]}] {b['head']}")
