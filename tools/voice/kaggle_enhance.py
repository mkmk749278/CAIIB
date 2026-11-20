"""Run Resemble Enhance (MIT) on a free Kaggle T4 over voice takes, and bring the enhanced audio back.

Why (2026-11-20, PLAYBOOK §5f): on Maya 2 (24 kHz output) it restores the 12-22 kHz range and clears the pauses; on
the session CPU it runs at about 6x slower than real time, so whole lessons go to the GPU.

Inputs are mounted read-only from other Kaggle sources: the output of a kaggle_maya.py job (kernel slug) and/or a
private dataset of audio files. Every .wav/.mp3 found under each source is enhanced; the result keeps the folder name
of its source: /kaggle/working/enh/<source>/<file>.wav (44.1 kHz).

Usage:
  python tools/voice/kaggle_enhance.py run <slug> --kernels caiib-a07-full-vasant ... --datasets caiib-a07-elevenlabs
  python tools/voice/kaggle_maya.py wait <slug>
  python tools/voice/kaggle_maya.py get  <slug> <dir>
"""
import argparse, json, os, sys, tempfile

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from kaggle_maya import USER, kaggle  # same proxy-token handling

JOB = r'''
import subprocess, os, glob, time
def sh(c):
    print("$", c, flush=True); r = subprocess.run(c, shell=True, capture_output=True, text=True)
    print(r.stdout[-3000:], r.stderr[-3000:], flush=True); return r.returncode
sh("nvidia-smi --query-gpu=name --format=csv")
# resemble-enhance pins torch 2.1.1, which has no wheels for Kaggle's newer Python: give it its own Python 3.11
sh("pip install -q uv && uv venv -q -p 3.11 /kaggle/tmp/re")
PY = "/kaggle/tmp/re/bin/python"
E = "VIRTUAL_ENV=/kaggle/tmp/re DS_BUILD_OPS=0 uv pip install --python /kaggle/tmp/re/bin/python"
sh(f"{E} --index-url https://download.pytorch.org/whl/cu121 torch==2.1.1 torchaudio==2.1.1")
# the package pins old gradio/pandas/matplotlib that need not be there: install it bare plus what inference imports
sh(f"{E} --index-url https://pypi.org/simple --no-deps resemble-enhance")
sh(f"{E} --index-url https://pypi.org/simple 'numpy<2' setuptools deepspeed==0.12.4 celluloid==0.2.0 librosa==0.10.1 "
   "omegaconf==2.3.0 rich tqdm resampy==0.4.2 tabulate scipy soundfile matplotlib pandas ptflops")
sh(f"{PY} -c 'import torch; print(\"cuda\", torch.cuda.is_available())'")
os.makedirs("/kaggle/tmp/in", exist_ok=True)
# Kaggle mounts sources as /kaggle/input/<notebooks|datasets>/<user>/<slug> (older images: /kaggle/input/<slug>)
srcs = glob.glob("/kaggle/input/*/*/*") if glob.glob("/kaggle/input/notebooks") + glob.glob("/kaggle/input/datasets") \
    else glob.glob("/kaggle/input/*")
for src in sorted(s for s in srcs if os.path.isdir(s)):
    name = os.path.basename(src)
    files = sorted(glob.glob(f"{src}/**/*.wav", recursive=True) + glob.glob(f"{src}/**/*.mp3", recursive=True))
    d = f"/kaggle/tmp/in/{name}"; os.makedirs(d, exist_ok=True)
    for f in files:
        out = f"{d}/{os.path.splitext(os.path.basename(f))[0]}.wav"
        if sh(f"ffmpeg -v error -y -i '{f}' -c:a pcm_s16le '{out}'") != 0:
            sh(f"{PY} -c \"import soundfile as s; a,r=s.read('{f}'); s.write('{out}',a,r)\"")
    print(name, len(files), "files", flush=True)
    t = time.time()
    sh(f"/kaggle/tmp/re/bin/resemble-enhance {d} /kaggle/working/enh/{name} --device cuda")
    print("ENHANCED", name, round(time.time() - t), "s", flush=True)
sh("ls -la /kaggle/working/enh/*")
print("DONE", flush=True)
'''


def run(slug, kernels, datasets):
    d = tempfile.mkdtemp()
    open(f"{d}/{slug}.py", "w", encoding="utf-8").write(JOB)
    json.dump({"id": f"{USER}/{slug}", "title": slug, "code_file": f"{slug}.py", "language": "python",
               "kernel_type": "script", "is_private": True, "enable_gpu": True, "enable_tpu": False,
               "enable_internet": True, "machine_shape": "NvidiaTeslaT4",
               "dataset_sources": [f"{USER}/{x}" for x in datasets],
               "kernel_sources": [f"{USER}/{x}" for x in kernels],
               "competition_sources": [], "model_sources": []}, open(f"{d}/kernel-metadata.json", "w"))
    kaggle("kernels", "push", "-p", d)


if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    ap.add_argument("cmd", choices=["run"])
    ap.add_argument("slug")
    ap.add_argument("--kernels", nargs="*", default=[])
    ap.add_argument("--datasets", nargs="*", default=[])
    a = ap.parse_args()
    run(a.slug, a.kernels, a.datasets)
