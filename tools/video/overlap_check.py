"""Text-overlap check (PLAYBOOK §5e): reads the per-layer frames written by overlap_check.mjs and lists every second
where text from one layer is drawn over text or drawings from another.

Usage: python3 tools/video/overlap_check.py <frames_dir> <timeline.json> [min_pixels=12]
Pairs checked, at 480×270 (quarter scale):
  notes over scene    a handwritten note's ink lands on the scene's ink (lines, labels, cards' text)
  caption over scene  the caption box covers scene ink (something important hidden under the caption)
  notes over caption  a note runs into the caption box
"Ink" = pixels darker than 150 in notes and 120 in the scene (text, outlines; not the sea or tinted fills); the scene's ink is widened by 2 px so touching counts. Each flagged
second prints the pixel count and the words being spoken, so the moment can be found in the video.
"""
import glob, json, os, sys
import numpy as np
from PIL import Image

d, tl = sys.argv[1], sys.argv[2]
minpx = int(sys.argv[3]) if len(sys.argv) > 3 else 12
T = json.load(open(tl)); fps = T['fps']
words = [((l['start'] + f) / fps, w) for l in T['lines'] for w, f in l['words']]


def load(p):
    return np.asarray(Image.open(p).convert('L'), dtype=np.int16) if os.path.exists(p) else None


def dilate(m, r=2):
    out = m.copy()
    for dy in range(-r, r + 1):
        for dx in range(-r, r + 1):
            out |= np.roll(np.roll(m, dy, 0), dx, 1)
    return out


rows = []
for sp in sorted(glob.glob(os.path.join(d, 'scene_*.png'))):
    i = int(sp[-9:-4])
    sc, no, ca = load(sp), load(sp.replace('scene_', 'notes_')), load(sp.replace('scene_', 'caption_'))
    if no is None or ca is None:
        continue
    s_ink = dilate(sc < 120)
    n_ink = no < 150
    cap_box = ca < 250  # the caption's white box has a light border; its inside is white like the page
    # find the caption box as the bounding rows/cols of its border pixels
    box = np.zeros_like(cap_box)
    ys, xs = np.where(ca < 245)
    if len(ys):
        box[ys.min():ys.max() + 1, xs.min():xs.max() + 1] = True
    hits = {'notes over scene': int((n_ink & s_ink).sum()), 'caption over scene': int((box & (sc < 120)).sum()),
            'notes over caption': int((n_ink & box).sum())}
    for k, v in hits.items():
        if v >= minpx:
            t = float(i)
            said = ' '.join(w for s, w in words if t - 1 <= s <= t + 1)
            rows.append((t, k, v, said))
print(f'seconds with overlaps (>= {minpx} px): {len(rows)}')
for t, k, v, said in rows:
    print(f'  {int(t // 60)}:{t % 60:04.1f}  {k:18} {v:5d} px | {said[:70]}')
sys.exit(1 if rows else 0)
