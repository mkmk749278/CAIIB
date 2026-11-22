"""Render one lesson video on Modal and put it in Drive (owner, 2026-11-22: GitHub removed the Creator repo for
rendering 4K video on its runners, so renders moved to Modal; PLAYBOOK §8).

Same method as the retired `.github/workflows-retired/render.yml`: N containers each render one slice of the
composition as silent video (`tools/video/render_part.mjs`), one more renders the whole lesson's sound, then one
container glues the slices (no re-encode), lays the sound under them, normalises loudness to -16 LUFS, runs the
smoothness audit and uploads the MP4 to Drive `CAIIB/BFM/<video>/renders/<name>`. Next to it goes
`<name>.log.txt` with the result, the Drive link, the timings and the estimated cost, so the session can read the
result from Drive (`tools/drive/drive.sh pull BFM/<video>/renders …`), even when the render failed.

Started by `.github/workflows/modal-render.yml` (GitHub's runner only deploys this app and starts it, about a minute;
it renders nothing). From a machine with a Modal token:
    modal deploy tools/modal/render.py
    python3 tools/modal/launch.py --comp Incoterms --video A07 --lines BFM/A07/flow --audio-dir audio/inc \
        --scale 2/3 --parts 6 --name modal_test_720p.mp4
Needs the Modal secret `caiib-drive` holding GDRIVE_RCLONE_TOKEN (the workflow creates it from the repo secret).
"""
from __future__ import annotations

import os
import shutil
import subprocess
import time
from pathlib import Path

import modal

APP = "caiib-render"
NODE = "22.11.0"
CPU = 4.0          # render_part.mjs renders with concurrency 4
MEM = 8192         # MiB per render container
# Modal's list prices (USD) as read on 2026-11-22: the log's cost line is an estimate; the Modal bill is the truth.
USD_PER_CORE_S = 0.0000131
USD_PER_GIB_S = 0.00000222

REPO = Path(__file__).resolve().parents[2]

image = (
    modal.Image.debian_slim(python_version="3.12")
    .apt_install(
        "curl", "unzip", "xz-utils", "ca-certificates",
        # what Chrome Headless Shell needs on Debian (Remotion's Linux list)
        "libnss3", "libdbus-1-3", "libatk1.0-0", "libgbm-dev", "libasound2", "libxrandr2", "libxkbcommon-dev",
        "libxfixes3", "libxcomposite1", "libxdamage1", "libatk-bridge2.0-0", "libpango-1.0-0", "libcairo2",
        "libcups2",
    )
    .run_commands(
        f"curl -fsSL https://nodejs.org/dist/v{NODE}/node-v{NODE}-linux-x64.tar.xz | tar -xJ -C /opt",
        f"ln -s /opt/node-v{NODE}-linux-x64/bin/node /usr/local/bin/node",
        f"ln -s /opt/node-v{NODE}-linux-x64/bin/npm /usr/local/bin/npm",
        f"ln -s /opt/node-v{NODE}-linux-x64/bin/npx /usr/local/bin/npx",
    )
    # dependencies in their own layer, rebuilt only when the lockfile changes
    .add_local_file(REPO / "video/package.json", "/opt/video/package.json", copy=True)
    .add_local_file(REPO / "video/package-lock.json", "/opt/video/package-lock.json", copy=True)
    .run_commands("cd /opt/video && npm ci --no-audit --no-fund && npx remotion browser ensure")
    # the code itself is added at container start, so a new commit never rebuilds the image
    .add_local_dir(REPO / "video", "/repo/video",
                   ignore=["node_modules", "node_modules/**", "out", "out/**", "public/audio", "public/audio/**"])
    .add_local_dir(REPO / "tools", "/repo/tools", ignore=["**/__pycache__/**"])
)

app = modal.App(APP, image=image)
drive = modal.Secret.from_name("caiib-drive")
vol = modal.Volume.from_name("caiib-render-work", create_if_missing=True)


def _run(cmd: list[str] | str, cwd: str | Path | None = None, env: dict | None = None) -> str:
    print("$", cmd if isinstance(cmd, str) else " ".join(cmd), flush=True)
    p = subprocess.run(cmd, cwd=cwd, shell=isinstance(cmd, str), text=True, capture_output=True,
                       env={**os.environ, **(env or {})})
    print(p.stdout[-4000:], p.stderr[-4000:], sep="\n", flush=True)
    if p.returncode:
        raise RuntimeError(f"exit {p.returncode}: {cmd}\n{p.stderr[-2000:]}")
    return p.stdout


def _workdir(lines: str, audio_dir: str) -> Path:
    """A writable copy of the repo with the shared node_modules linked in and the voice pulled from Drive."""
    work = Path("/work")
    if not work.exists():
        shutil.copytree("/repo", work, symlinks=True)
        (work / "video/node_modules").symlink_to("/opt/video/node_modules")
    if lines:
        _run(["bash", "tools/drive/drive.sh", "pull", lines, f"video/public/{audio_dir}"], cwd=work)
    return work


@app.function(cpu=CPU, memory=MEM, timeout=3 * 3600, secrets=[drive], volumes={"/vol": vol}, retries=1)
def render_piece(run: str, job: str, comp: str, lines: str, audio_dir: str, scale: str) -> dict:
    t0 = time.time()
    work = _workdir(lines, audio_dir)
    out = Path("/vol") / run
    out.mkdir(parents=True, exist_ok=True)
    tool = "../tools/video/render_part.mjs"
    if job == "sound":
        _run(["node", tool, comp, "sound", str(out / "sound.wav")], cwd=work / "video")
    else:
        i, n = job.split("/")
        _run(["node", tool, comp, "part", i, n, scale, str(out / f"part_{int(i):02d}.mp4")], cwd=work / "video")
    vol.commit()
    return {"job": job, "seconds": round(time.time() - t0, 1), "cpu": CPU, "mem": MEM}


@app.function(cpu=2.0, memory=4096, timeout=3600, secrets=[drive], volumes={"/vol": vol})
def join(run: str, video: str, name: str) -> str:
    vol.reload()
    work = _workdir("", "")
    d = Path("/vol") / run
    parts = sorted(d.glob("part_*.mp4"))
    (d / "parts.txt").write_text("".join(f"file '{p}'\n" for p in parts))
    ff = ["npx", "--prefix", str(work / "video"), "remotion"]
    final = d / name
    _run(ff + ["ffmpeg", "-y", "-v", "error", "-f", "concat", "-safe", "0", "-i", str(d / "parts.txt"),
               "-i", str(d / "sound.wav"), "-map", "0:v", "-map", "1:a", "-c:v", "copy",
               "-af", "loudnorm=I=-16:TP=-1.5:LRA=11", "-c:a", "aac", "-b:a", "192k", "-ar", "48000",
               "-shortest", "-movflags", "+faststart", str(final)], cwd=work / "video")
    probe = _run(ff + ["ffprobe", "-v", "error", "-show_entries", "format=duration:stream=codec_name,width,height",
                       "-of", "compact", str(final)], cwd=work / "video")
    try:
        audit = _run(f"python3 tools/video/smooth_audit.py '{final}' video/src/*lines.json", cwd=work,
                     env={"FFMPEG": " ".join(ff + ["ffmpeg"])})
    except RuntimeError as e:  # advisory, as in the old workflow
        audit = f"smooth_audit failed: {e}"
    link = _run(["bash", "tools/drive/drive.sh", "push", f"BFM/{video}/renders", str(final)], cwd=work)
    return f"{link.strip()}\n\n{probe.strip()}\n\nsmooth_audit:\n{audit.strip()[-3000:]}"


@app.function(cpu=0.25, memory=512, timeout=6 * 3600, secrets=[drive], volumes={"/vol": vol})
def orchestrate(comp: str, video: str, lines: str, audio_dir: str, scale: str, parts: int, name: str) -> str:
    run = f"{video}_{name}_{int(time.time())}".replace("/", "_")
    t0 = time.time()
    jobs = ["sound"] + [f"{i}/{parts}" for i in range(parts)]
    log = [f"render {comp} -> BFM/{video}/renders/{name}  scale {scale}  {parts} parts  (Modal app {APP})"]
    status = "FAILED"
    try:
        results = list(render_piece.map([run] * len(jobs), jobs, [comp] * len(jobs), [lines] * len(jobs),
                                        [audio_dir] * len(jobs), [scale] * len(jobs)))
        usd = sum(r["seconds"] * (r["cpu"] * USD_PER_CORE_S + r["mem"] / 1024 * USD_PER_GIB_S) for r in results)
        log += [f"  {r['job']:>6}: {r['seconds']:.0f} s" for r in results]
        log.append(f"render containers ≈ ${usd:.2f} (estimate from list prices; the Modal bill is the truth)")
        log.append(join.remote(run, video, name))
        status = "OK"
    except Exception as e:  # noqa: BLE001 - the log in Drive must say why
        log.append(f"ERROR: {type(e).__name__}: {e}")
    finally:
        log.insert(0, f"{status}  wall {time.time() - t0:.0f} s")
        text = "\n".join(log) + "\n"
        print(text, flush=True)
        logf = Path(f"/tmp/{name}.log.txt")
        logf.write_text(text)
        work = _workdir("", "")
        _run(["bash", "tools/drive/drive.sh", "push", f"BFM/{video}/renders", str(logf)], cwd=work)
        shutil.rmtree(Path("/vol") / run, ignore_errors=True)
        vol.commit()
    return text
