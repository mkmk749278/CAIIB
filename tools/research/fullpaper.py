import re, sys, csv, os
sys.argv=[sys.argv[0]]+sys.argv[1:]
txtf, pat, out = sys.argv[1], sys.argv[2], sys.argv[3]
T=open(txtf,encoding='utf-8',errors='ignore').read()
T=re.sub(r'CAIIB BFM Memory Based Paper\s+Download Free PDF','',T)
parts=re.split(pat, T)
qs=[]
for p in parts[1:]:
    stem=re.split(r'\n\s*(A\.|a\)|\(a\)|A\))', p)[0]
    stem=re.sub(r'\s+',' ',stem).strip()[:400]
    if len(stem)>15: qs.append(stem)
w=csv.writer(open(out,'w',newline='')); w.writerow(['n','stem'])
for i,q in enumerate(qs,1): w.writerow([i,q])
print(len(qs))
