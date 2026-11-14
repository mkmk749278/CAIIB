import re, csv, sys, os
D = sys.argv[1]
def lines(f): return [l.strip() for l in open(os.path.join(D,f), encoding='utf-8', errors='ignore')]
def sl(f, start, end, skip_first=True):
    L = lines(f); out=[]; on=False
    for l in L:
        if not on and re.search(start, l): on=True; 
        elif on and re.search(end, l): break
        elif on: out.append(l)
    return out
JUNK = re.compile(r'(CAIIB|Shift|Video|Download|Click Here|Congratulat|Moderate|Tough|Difficult|^Share|Form|Aspirants|Candidates|Here, we|^\W*$|Table of|Related Posts|^Q\d|FAQ)', re.I)
def clean(xs):
    out=[]
    for x in xs:
        x = re.sub(r'(\d+\s+)?www\.bankersadda\.com|Adda247 App|\|','',x)
        x = re.sub(r'^\d+\.\s*','',x).strip(' .\u200b')
        if not x or len(x)>160 or JUNK.search(x): continue
        out.append(x)
    return out
def numbered_pdf(f):
    txt = open(os.path.join(D,f), encoding='utf-8').read()
    shifts = re.split(r'CAIIB BFM Memory Based Paper, Shift (\d)', txt)
    res = {}
    for i in range(1,len(shifts),2):
        body = shifts[i+1]
        body = re.sub(r'\n\s*\n', '\n', body)
        items = re.split(r'\n(?=\d+\.\s)', '\n'+body)
        res[shifts[i]] = [re.sub(r'\s+',' ', re.sub(r'^\d+\.\s*','',it.strip())) for it in items if re.match(r'\s*\d+\.', it)]
    return res
SRC = {
 'BA23J':'https://bankersadda.com/caiib-bfm-exam-analysis-2023-11-june',
 'BA23D':'https://bankersadda.com/caiib-bfm-exam-analysis-2023-03-december',
 'BA24J':'https://bankersadda.com/caiib-bfm-exam-analysis-2024-13-july',
 'PW24D':'https://www.pw.live/jaiib-caiib/exams/caiib-bfm-exam-analysis-2024-1-december',
 'BA25J':'https://www.bankersadda.com/caiib-bfm-exam-analysis-202514-june/',
 'PW25D':'https://www.pw.live/jaiib-caiib/exams/caiib-bfm-exam-analysis-2025-7-dec-shift-1',
 'OB25D':'https://www.oliveboard.in/blog/caiib-bfm-exam-analysis/',
 'BA26J':'https://www.bankersadda.com/wp-content/uploads/multisite/2026/06/07193401/CAIIB-BFM-Memory-Based-Paper-07-June-Evening-Shift.pdf',
 'PW26J1':'https://www.pw.live/jaiib-caiib/exams/caiib-bfm-exam-analysis-2026-shift-1',
 'PW26J3':'https://www.pw.live/jaiib-caiib/exams/caiib-bfm-exam-analysis-2026-shift-3',
}
rows=[]
def add(cycle, shift, src, items):
    for it in clean(items): rows.append(dict(cycle=cycle, shift=shift, source=src, item=it))
add('2023-06','1','BA23J', sl('ba_2023jun.txt', r'There were 10 questions', r'Result Calculator'))
add('2023-06','2-3','BA23J', sl('ba_2023jun.txt', r'Here, we have discussed', r'^$|RADIX')+['RADIX Full Form'])
add('2023-12','1','BA23D', sl('ba_2023dec.txt', r'Questions Asked Below', r'Shift 1 Video'))
add('2023-12','2-3','BA23D', sl('ba_2023dec.txt', r'Shift 2 & 3 Asked', r'IFSC Under Sez Act')+['IFSC Under Sez Act'])
add('2024-07','1','BA24J', sl('ba_2024jul.txt', r'13 July, Shift 1$', r'Shift 1: Video'))
add('2024-07','2-3','BA24J', sl('ba_2024jul.txt', r'13 July, Shift 2 & 3$', r'Role of ALCO')+['Role of ALCO'])
add('2024-12','1','PW24D', sl('pw_2024d.txt', r'questions that are asked in the CAIIB', r'Video Link'))
add('2025-06','1','BA25J', sl('ba_an2025jun.txt', r'Many questions asked were without options', r'Share Your'))
add('2025-06','2','BA25J', sl('ba_an2025jun.txt', r'20-25 questions were from FOREX', r'Video Link'))
add('2025-12','1','PW25D', sl('pw_2025d.txt', r'Aspirants preparing for the upcoming', r'Exam Analysis 2025 FAQs'))
add('2025-12','3','OB25D', sl('ob_an2025.txt', r'Below are the details of the topics asked in Shift 3', r'^\s*$|Day light')+['Day light limit and day light loss'])
for sh, its in numbered_pdf('ba_jun2026_raw.txt').items(): add('2026-06', sh, 'BA26J', its)
add('2026-06','1','PW26J1', sl('pw_s1.txt', r'^Additional Topics Reported', r'^Questions Asked in CAIIB'))
w = csv.DictWriter(open(os.path.join(D,'..','items.csv'),'w',newline=''), fieldnames=['cycle','shift','source','item'])
w.writeheader(); w.writerows(rows)
import collections
print(len(rows), collections.Counter(r['cycle'] for r in rows))
json_src = os.path.join(D,'..','sources.csv')
with open(json_src,'w') as f:
    f.write('key,url\n'); [f.write(f'{k},{v}\n') for k,v in SRC.items()]
