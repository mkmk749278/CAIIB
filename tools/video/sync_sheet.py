"""Sync sheet: does the picture match what the voice is saying at that moment? (PLAYBOOK §5d)

Usage: python3 tools/video/sync_sheet.py <video.mp4> <timeline.json> <out_prefix> [every_seconds=4]
Takes a frame every N seconds and writes, under each, the time and the words being spoken in the 3 seconds around it
(or "— silence: hold / chapter —"). Tiles 12 per sheet (<out_prefix>_01.png …) for a reviewer to read.
"""
import json, subprocess, sys
from PIL import Image, ImageDraw, ImageFont

video, tl, out = sys.argv[1:4]
every = float(sys.argv[4]) if len(sys.argv) > 4 else 4.0
d = json.load(open(tl)); fps = d['fps']
words = [(l['start'] + f) / fps for l in d['lines'] for _, f in l['words']]
wtext = [w for l in d['lines'] for w, _ in l['words']]
dur = d['durationInFrames'] / fps
font = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf', 17)
W, H = 480, 270
tiles = []
t = 1.0
while t < dur:
    raw = subprocess.run(['ffmpeg', '-v', 'error', '-ss', f'{t:.2f}', '-i', video, '-frames:v', '1', '-vf', f'scale={W}:{H}',
                          '-f', 'rawvideo', '-pix_fmt', 'rgb24', '-'], capture_output=True).stdout
    if len(raw) < W * H * 3:
        break
    im = Image.frombytes('RGB', (W, H), raw[:W * H * 3])
    said = [w for w, s in zip(wtext, words) if t - 1.5 <= s <= t + 1.5]
    gap = next((g['kind'] for g in d.get('gaps', []) if g['start'] / fps <= t < (g['start'] + g['dur']) / fps), None)
    txt = ' '.join(said) if said else f'— silence{": " + gap if gap else ""} —'
    tile = Image.new('RGB', (W, H + 64), 'white'); tile.paste(im, (0, 0))
    dr = ImageDraw.Draw(tile)
    dr.text((6, H + 4), f'{int(t // 60)}:{t % 60:04.1f}', fill=(200, 30, 30), font=font)
    line, y = '', H + 4
    for w in txt.split():
        if dr.textlength(line + ' ' + w, font=font) > W - 70:
            dr.text((64, y), line, fill='black', font=font); y += 20; line = w
        else:
            line = (line + ' ' + w).strip()
    dr.text((64, y), line, fill='black', font=font)
    tiles.append(tile)
    t += every
for k in range(0, len(tiles), 12):
    sheet = Image.new('RGB', (W * 3, (H + 64) * 4), 'white')
    for i, tile in enumerate(tiles[k:k + 12]):
        sheet.paste(tile, ((i % 3) * W, (i // 3) * (H + 64)))
    sheet.save(f'{out}_{k // 12 + 1:02d}.png')
print(len(tiles), 'frames,', (len(tiles) + 11) // 12, 'sheets')
