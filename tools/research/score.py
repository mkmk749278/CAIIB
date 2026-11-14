import csv, re, collections, sys, os
S=sys.argv[1]
sys.path.insert(0, os.path.join(S,'tools'))
src=open(os.path.join(os.path.dirname(os.path.abspath(__file__)),'tag.py')).read()
C=eval(src[src.index('C = [')+4:src.index(']\nrows')+1])
names={}
for cid,n,u,_ in C: names.setdefault(cid,(n,u))
rows=list(csv.DictReader(open(os.path.join(S,'items_tagged.csv'))))
cycles=sorted({r['cycle'] for r in rows})
NUM=re.compile(r'case|calcul|numer|marks|\d|yield%|rate of', re.I)
agg=collections.defaultdict(lambda: dict(m=0, cyc=set(), num=0, ex=[]))
for r in rows:
    a=agg[r['cluster'] or 'UNTAGGED']; a['m']+=1; a['cyc'].add(r['cycle'])
    if NUM.search(r['item']): a['num']+=1
    if len(a['ex'])<6 and r['item'] not in a['ex']: a['ex'].append(r['item'])
out=[]
for k,a in agg.items():
    if k=='UNTAGGED': continue
    nc=len(a['cyc']); share=a['m']/len(rows)*100
    tier = 'A' if (nc>=6 and a['m']>=15) or a['m']>=25 else ('B' if nc>=4 else 'C')
    out.append((k,names[k][0],names[k][1],nc,a['m'],round(share,1),a['num'],tier,'; '.join(c for c in cycles if c in a['cyc']),' | '.join(a['ex'])))
out.sort(key=lambda x:(x[7], -x[4]))
w=csv.writer(open(os.path.join(S,'importance.csv'),'w',newline=''))
w.writerow(['cluster','topic','iibf_unit','cycles_seen_of_%d'%len(cycles),'mentions','share_pct','case_or_numeric_mentions','tier','cycles','examples'])
w.writerows(out)
mod=collections.Counter(r['cluster'][0] for r in rows if r['cluster'])
print('cycles',cycles,'rows',len(rows)); print('module share', {k:round(v/sum(mod.values())*100) for k,v in mod.items()})
for o in out: print(o[7], o[0].ljust(13), str(o[3])+'/7', str(o[4]).rjust(3), str(o[5]).rjust(5)+'%', 'num', o[6])
