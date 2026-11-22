"""Start a render on the deployed Modal app `caiib-render` and return at once (tools/modal/render.py says how it works).
The render goes on in Modal; its result lands in Drive BFM/<video>/renders/<name>.log.txt."""
import argparse

import modal

p = argparse.ArgumentParser()
p.add_argument("--comp", required=True)
p.add_argument("--video", required=True)
p.add_argument("--lines", default="")
p.add_argument("--audio-dir", default="")
p.add_argument("--scale", default="2/3")
p.add_argument("--parts", type=int, default=6)
p.add_argument("--name", required=True)
a = p.parse_args()
if not 1 <= a.parts <= 48:
    raise SystemExit("--parts must be 1-48")
if a.scale not in {"2/3", "1"}:
    raise SystemExit("--scale is 2/3 (720p review cut) or 1 (1080p master); never 4K (CLAUDE.md)")
f = modal.Function.from_name("caiib-render", "orchestrate")
call = f.spawn(a.comp, a.video, a.lines, a.audio_dir, a.scale, a.parts, a.name)
print(f"started Modal call {call.object_id}: {a.comp} -> BFM/{a.video}/renders/{a.name} "
      f"(result in {a.name}.log.txt next to it)")
