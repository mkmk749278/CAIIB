"""Pull every Gemini output from Drive _inbox/gemini/ into .cache/gemini_in/<ID>/ (as .txt), sorted by the lesson ID
in each FILE name, not the folder name (2026-11-24: Gemini saved C02b, C04b, C05 into folders all named "C02", and made
duplicate folders). Newest file wins when the same name appears twice. Skips _rejected_*.

  python3 tools/gemini/pull_inbox.py            # all
  python3 tools/gemini/pull_inbox.py C06 D01    # only these lesson IDs
Then: python3 tools/gemini/gate.py <IDs>
"""
import json, os, re, shutil, subprocess, sys, tempfile
want = set(sys.argv[1:])
D = ["tools/drive/drive.sh", "rclone"]
run = lambda *a: subprocess.run(D + list(a), capture_output=True, text=True, timeout=300)
dirs = [d for d in json.loads(run("lsjson", "--dirs-only", "gd:_inbox/gemini").stdout or "[]")
        if not d["Name"].startswith("_")]
best = {}  # (id, kind) -> (modtime, folder id, name)
for d in dirs:
    for f in json.loads(run("lsjson", "--drive-root-folder-id", d["ID"], "gd:").stdout or "[]"):
        m = re.match(r"^([ABCD]\d{2}[a-z]?)_(.+?)(\.\w+)?$", f["Name"])
        if f.get("IsDir") or not m or (want and m.group(1) not in want):
            continue
        k = (m.group(1), m.group(2))
        if k not in best or f["ModTime"] > best[k][0]:
            best[k] = (f["ModTime"], d["ID"], f["Name"])
got = {}
folders = sorted({fid for (_, fid, _) in best.values()})
with tempfile.TemporaryDirectory() as t:
    for fid in folders:  # one copy per folder (per-file copies took > 10 minutes)
        os.makedirs(f"{t}/{fid}")
        run("copy", "--drive-root-folder-id", fid, "--drive-export-formats", "txt", "--transfers", "8", "gd:", f"{t}/{fid}")
    for (lid, kind), (mt, fid, name) in sorted(best.items()):
        out = f".cache/gemini_in/{lid}"
        if lid not in got:
            shutil.rmtree(out, ignore_errors=True); os.makedirs(out); got[lid] = 0
        stem = name.rsplit(".", 1)[0] if "." in name else name
        for x in os.listdir(f"{t}/{fid}"):
            if x.rsplit(".", 1)[0] == stem:
                shutil.copy(f"{t}/{fid}/{x}", f"{out}/{lid}_{kind}.txt"); got[lid] += 1; break
for lid, n in got.items():
    print(f"{lid}: {n} files")
