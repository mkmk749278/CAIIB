import csv, re, os, sys
S=sys.argv[1]; src=open(os.path.join(os.path.dirname(os.path.abspath(__file__)),'tag.py')).read()
C=eval(src[src.index('C = [')+4:src.index(']\nrows')+1])
FIX={('dec',1):'A-LRS',('dec',6):'A-LRS',('dec',9):'A-FXNUM',('dec',11):'C-DERIV',('dec',15):'B-RISKTYPES',('dec',17):'D-NPA',('dec',18):'D-NPA',
('dec',21):'B-CAPCALC',('dec',23):'B-CREDITRISK',('dec',24):'B-CAPCALC',('dec',25):'B-CAPCALC',('dec',29):'B-RISKTYPES',('dec',31):'A-NRI',
('dec',32):'A-FXNUM',('dec',33):'A-FXNUM',('dec',34):'B-BASEL',('dec',36):'B-RISKTYPES',('dec',40):'A-FXNUM',('dec',41):'A-FXNUM',('dec',42):'B-STATS',
('dec',49):'B-BASEL',('dec',52):'B-BASEL',('dec',54):'D-NPA',('dec',63):'B-CREDITRISK',('dec',66):'C-RESERVES',('dec',68):'C-TPROD',('dec',69):'C-TPROD',
('dec',70):'C-TPROD',('dec',71):'A-FXNUM',('dec',75):'A-ECB',('dec',79):'C-RESERVES',('dec',80):'C-RESERVES',('dec',81):'C-RESERVES',('dec',83):'A-CORR',
('dec',84):'C-TPROD',('dec',85):'C-MKTRISK',('dec',86):'C-MKTRISK',('dec',91):'A-FXNUM',('dec',96):'C-DERIV',
('mbq',4):'A-NRI',('mbq',5):'A-NRI',('mbq',7):'C-DERIV',('mbq',14):'A-EXIMP',('mbq',15):'A-EXIMP',('mbq',23):'OFF-SYLLABUS',('mbq',24):'OFF-SYLLABUS',
('mbq',27):'OFF-SYLLABUS',('mbq',28):'OFF-SYLLABUS',('mbq',29):'OFF-SYLLABUS',('mbq',30):'OFF-SYLLABUS',('mbq',31):'OFF-SYLLABUS',('mbq',38):'A-NRI',
('mbq',39):'A-FXNUM',('mbq',40):'A-FXNUM',('mbq',41):'A-LRS',('mbq',42):'D-RAROC'}
NUM=re.compile(r'calculat|₹|rs\.?\s?\d|\d+(\.\d+)?\s?%|usd \d|\d{2,}\.\d|crore|lakh|what is the amount|how much|closest to|ratio of',re.I)
out=[]
for f,key,label in [('ob_dec2025_q.csv','dec','Oliveboard memory-based paper Dec 2025'),('ob_mbq_q.csv','mbq','Oliveboard memory-based questions (undated, FY 2024-25/2025-26 cases)')]:
    for r in csv.DictReader(open(os.path.join(S,f))):
        n=int(r['n']); t=r['stem'].lower(); cl=''
        for cid,_,_,rx in C:
            if re.search(rx,t): cl=cid; break
        cl=FIX.get((key,n),cl) or 'UNSURE'
        form='numerical/case' if NUM.search(r['stem']) else 'theory'
        out.append(dict(paper=label,n=n,cluster=cl,form=form,stem_summary=r['stem'][:90]))
w=csv.DictWriter(open(os.path.join(S,'fullpaper_tagged.csv'),'w',newline=''),fieldnames=list(out[0]))
w.writeheader(); w.writerows(out)
import collections
for lab in {o['paper'] for o in out}:
    sub=[o for o in out if o['paper']==lab]; c=collections.Counter(o['cluster'] for o in sub); m=collections.Counter(o['cluster'][0] for o in sub)
    print(lab, len(sub), dict(m)); print('  ', c.most_common()); print('   form', collections.Counter(o['form'] for o in sub))
