"""Voice Maya 2 pieces on a free Kaggle T4 and bring the audio back (owner, 2026-11-20: "we have kaggle, try on it").

The Kaggle token sits in the session's network proxy (header only), so the CLI's own token check is skipped and the
username is given here. Measured 2026-11-20 on a T4: about 2x faster than real time; model load about 2.5 min.

Usage:
  python tools/voice/kaggle_maya.py run  <slug> <voice> <pieces.json> [<pieces.json> ...]   push a per-piece job
  python tools/voice/kaggle_maya.py take <slug> <voice> <parts.json>                         push a single-take job
      parts.json = {"part_1": "text", ...}; each part is read in one go (out/<voice>/<part>.wav). Preferred: the
      flow stays natural (owner, 2026-11-20); flow_voice.py then opens only the planned holds.
  python tools/voice/kaggle_maya.py wait <slug>                                             wait until it ends
  python tools/voice/kaggle_maya.py get  <slug> <dir>                                       download the wavs
Needs the `kaggle` package. Output: <dir>/out/<voice>/<line>_<k>.wav, one file per piece.
"""
import json, os, subprocess, sys, tempfile, time

USER = "kishoremulakapati"
os.environ.setdefault("KAGGLE_API_TOKEN", "KGAT_proxyinjected0000000000000000")

JOB = r'''
import subprocess, json, os, time
def sh(c):
    print("$", c, flush=True); r = subprocess.run(c, shell=True, capture_output=True, text=True)
    print(r.stdout[-2000:], r.stderr[-2000:], flush=True); return r.returncode
sh("nvidia-smi --query-gpu=name --format=csv")
sh("git clone -q --depth 1 https://github.com/MayaResearch/maya2-native /kaggle/tmp/maya2")
sh("pip install -q --no-deps -e /kaggle/tmp/maya2 && pip install -q 'transformers==5.6.2' 'tokenizers>=0.22,<0.23' "
   "'speechbrain==1.1.2' 'huggingface_hub>=1.0' 'safetensors>=0.6' soundfile pyyaml")
VOICE = __VOICE__
PIECES = json.loads(r"""__PIECES__""")
TAKE = __TAKE__
import sys, importlib, site
sys.path.insert(0, "/kaggle/tmp/maya2")   # an editable install is only seen by new processes; this one needs the path
importlib.invalidate_caches()
import soundfile as sf
from maya3 import Maya3TTS
# single take: Maya cuts long text internally at sentence ends. 60 s chunks skipped text (2026-11-20); 25 s is safe
cfg = dict(max_seats=1, chunk_s=25.0, gap_s=0.35) if TAKE else dict(max_seats=1)
t = time.time(); tts = Maya3TTS.from_pretrained("maya-research/maya2-native", **cfg); print("load", round(time.time() - t), flush=True)
d = f"/kaggle/working/out/{VOICE.lower()}"; os.makedirs(d, exist_ok=True)
t = time.time(); total = 0.0
for p in PIECES:
    a = tts.generate(p["text"], lang="en", voice=VOICE, normalize=True, seed=7)
    name = p["name"] if TAKE else f"{p['line']}_{p['k']}"
    sf.write(f"{d}/{name}.wav", a, 24000); total += len(a) / 24000
    print(name, round(len(a) / 24000, 1), "s", flush=True)
print("DONE", len(PIECES), "pieces", round(total, 1), "s audio in", round(time.time() - t), "s", flush=True)
'''


def kaggle(*args):
    from kaggle.api.kaggle_api_extended import KaggleApi
    KaggleApi._introspect_token = lambda self, t: USER
    from kaggle.cli import main
    sys.argv = ["kaggle", *args]
    try:
        main()
    except SystemExit:
        pass


def run(slug, voice, files, take=False):
    if take:
        parts = json.load(open(files[0], encoding="utf-8"))
        pieces = [{"name": k, "text": v} for k, v in parts.items()]
    else:
        pieces = [p for f in files for p in json.load(open(f, encoding="utf-8"))]
    d = tempfile.mkdtemp()
    code = (JOB.replace("__VOICE__", json.dumps(voice)).replace("__TAKE__", str(take))
               .replace("__PIECES__", json.dumps(pieces, ensure_ascii=False)))
    open(f"{d}/{slug}.py", "w", encoding="utf-8").write(code)
    json.dump({"id": f"{USER}/{slug}", "title": slug, "code_file": f"{slug}.py", "language": "python",
               "kernel_type": "script", "is_private": True, "enable_gpu": True, "enable_tpu": False,
               "enable_internet": True, "machine_shape": "NvidiaTeslaT4", "dataset_sources": [], "kernel_sources": [],
               "competition_sources": [], "model_sources": []}, open(f"{d}/kernel-metadata.json", "w"))
    kaggle("kernels", "push", "-p", d)


def wait(slug):
    while True:
        out = subprocess.run([sys.executable, __file__, "_status", slug], capture_output=True, text=True).stdout
        print(time.strftime("%H:%M"), out.strip().splitlines()[-1] if out.strip() else "?", flush=True)
        if any(k in out for k in ("COMPLETE", "ERROR", "CANCEL")):
            return
        time.sleep(45)


if __name__ == "__main__":
    cmd = sys.argv[1]
    if cmd == "run":
        run(sys.argv[2], sys.argv[3], sys.argv[4:])
    elif cmd == "take":
        run(sys.argv[2], sys.argv[3], sys.argv[4:5], take=True)
    elif cmd == "wait":
        wait(sys.argv[2])
    elif cmd == "_status":
        kaggle("kernels", "status", f"{USER}/{sys.argv[2]}")
    elif cmd == "get":
        kaggle("kernels", "output", f"{USER}/{sys.argv[2]}", "-p", sys.argv[3])
