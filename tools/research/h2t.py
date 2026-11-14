import sys, re
from bs4 import BeautifulSoup
for f in sys.argv[1:]:
    s = BeautifulSoup(open(f, encoding='utf-8', errors='ignore').read(), 'html.parser')
    for t in s(['script','style','nav','footer','header','noscript','svg','form','aside']): t.decompose()
    main = s.find('article') or s.find('main') or s.body or s
    txt = main.get_text('\n')
    txt = re.sub(r'\n\s*\n+', '\n', txt)
    open(f.rsplit('.',1)[0] + '.txt', 'w').write(txt)
    print(f, len(txt))
