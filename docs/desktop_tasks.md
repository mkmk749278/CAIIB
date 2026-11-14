# Fallback order and laptop tasks

**Owner rule (2026-11-14): Claude does everything it can itself first.** Other routes are a fallback only, in this
order:
1. **This cloud session**: public pages, RBI/IIBF/FEDAI/FEMA texts, search, downloads, analysis, writing.
2. **A new cloud session** (`create_session`) when this session's IP is rate-limited or blocked by a site (e.g. RBI's
   HTTP 418 on repeated requests): new sessions may get a different IP. Give it one narrow job, have it push to a
   branch, then archive it. Never use this to get round a deliberate access control (login walls, paywalls,
   Classplus-type bot blocks), only around rate limits on public pages.
3. **The owner's laptop** only for what no cloud session can do, each tool by its ability:
   - **Cowork** (Claude desktop): things behind the owner's own logins or that need the owner present (Telegram
     groups, sign-up forms that ask for the owner's details, sites that refuse all cloud IPs).
   - **Gemini**: watching YouTube videos (YouTube fails from the cloud).
   - **Antigravity**: long, slow, careful browsing with git when cloud sessions keep getting blocked.

## Open laptop tasks (only what the cloud cannot do)

### Cowork: Telegram recalls (needs the owner's Telegram account)
```
You are helping build our own CAIIB Bank Financial Management (BFM) study material (GitHub repo mkmk749278/CAIIB).
Before starting: open Telegram Desktop and make sure I am logged in; if you cannot reach my chats, STOP and say so; do not use any other source.
Rules: only my own logins; never copy anyone's explanations, notes or full question text (write topics and question
types in your own words); no other people's names or phone numbers.
In Telegram (my account) search my chats and groups for CAIIB / BFM. For the BFM exams of 7 Jun 2026, 7 Dec 2025 and
14 Jun 2025, list the topics and question types candidates say they remember, by exam date and shift, with the group
name and post date. Save as research/bfm/inbox/telegram_recalls.md: open github.com/mkmk749278/CAIIB in my browser,
create branch "inbox-telegram", add the file with "Add file > Create new file", open a pull request to main, and show
me the link.
```

### Cowork: older memory-based papers behind sign-up forms (needs the owner's details)
```
Open https://www.bankersadda.com/caiib-bfm-memory-based-questions/ and find the July 2024, Nov-Dec 2023 and June 2023
CAIIB BFM PDFs. The links go to forms that ask for contact details: STOP and ask me on screen before filling anything.
If I approve, download the PDFs to my Downloads folder only. For each paper write a table: question no., topic in your
own words, form (numerical/case/theory), module (A/B/C/D). Do not copy question text. Save as
research/bfm/inbox/older_papers.md in github.com/mkmk749278/CAIIB on branch "inbox-older-papers" (Add file > Create
new file) and open a pull request to main. Show me the link.
```

### Gemini: post-exam analysis videos (YouTube)
Paste Gemini's answer back into the Claude chat. Every video must have a real, working YouTube link.
```
Using YouTube, find post-exam analysis videos for the CAIIB Bank Financial Management (BFM) exams held on 7 June 2026,
7 December 2025 and 14 June 2025. Use up to 3 videos per exam from different channels. For each video give: channel,
exact title, link, upload date, and the topics or questions they say were asked, in your own words, each marked
"numerical", "case study" or "theory", with the shift if stated. Do not copy their explanations. Only list videos you
actually opened; say so if a link or date is uncertain. Finish with one combined list: topic, how many videos
mentioned it, and which exam dates.
```
