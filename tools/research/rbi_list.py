import sys, re, urllib.request, urllib.parse, http.cookiejar, ssl, os, json
from bs4 import BeautifulSoup
URL='https://rbi.org.in/Scripts/NotificationUser.aspx'
UA={'User-Agent':'Mozilla/5.0 (Linux; Android 14) AppleWebKit/537.36 Chrome/130 Mobile Safari/537.36'}
cj=http.cookiejar.CookieJar(); ctx=ssl.create_default_context(cafile=os.environ.get('SSL_CERT_FILE') or '/root/.ccr/ca-bundle.crt')
op=urllib.request.build_opener(urllib.request.HTTPCookieProcessor(cj), urllib.request.HTTPSHandler(context=ctx))
def get(data=None):
    req=urllib.request.Request(URL, data=urllib.parse.urlencode(data).encode() if data else None, headers=UA)
    return op.open(req, timeout=60).read().decode('utf-8','ignore')
h=get(); out=[]
for y,m in [(int(a),int(b)) for a,b in (x.split('-') for x in sys.argv[2:])]:
    s=BeautifulSoup(h,'html.parser')
    f={i['name']:i.get('value','') for i in s.find_all('input') if i.get('name')}
    f['hdnYear']=str(y); f['hdnMonth']=str(m); f['__EVENTTARGET']=''; f['__EVENTARGUMENT']=''; f['UsrFontCntr$btn']=''
    h=get(f); s=BeautifulSoup(h,'html.parser')
    for a in s.select('a.link2'):
        href=a.get('href',''); 
        if 'NotificationUser.aspx?Id=' in href:
            out.append(dict(ym=f'{y}-{m:02d}', title=a.get_text(' ',strip=True), url='https://rbi.org.in/Scripts/'+href))
    print(y,m,len([o for o in out if o['ym']==f'{y}-{m:02d}']), file=sys.stderr)
json.dump(out, open(sys.argv[1],'w'), indent=0)
