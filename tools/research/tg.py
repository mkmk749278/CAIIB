import sys, re
from bs4 import BeautifulSoup
for f in sys.argv[1:]:
    s=BeautifulSoup(open(f,encoding='utf-8').read(),'html.parser')
    t=s.find('div',class_='tgme_channel_info_header_title'); d=s.find('div',class_='tgme_channel_info_description')
    print('=====',f, t.get_text(' ',strip=True) if t else '', '|', (d.get_text(' ',strip=True)[:150] if d else ''))
    for m in s.find_all('div',class_='tgme_widget_message'):
        tm=m.find('time'); tx=m.find('div',class_='tgme_widget_message_text')
        doc=m.find('div',class_='tgme_widget_message_document_title')
        print('-', tm['datetime'][:10] if tm else '', (tx.get_text(' ',strip=True)[:220] if tx else ''), ('[DOC] '+doc.get_text(strip=True)) if doc else '')
