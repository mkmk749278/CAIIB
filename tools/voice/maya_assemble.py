"""Join Maya 2 pieces into one voice track with the planned pauses, and write where every line starts.

Each piece's own leading and trailing silence is trimmed first, so the pause in pieces.json is the real gap.
A short fade at each edge avoids clicks. Output: <out>.wav (24 kHz mono) and <out>.lines.json
({line: [start_s, end_s]}), ready for the timeline step.

Usage: python tools/voice/maya_assemble.py <wav dir> <out> <pieces.json> [<pieces.json> ...]
"""
import json, sys
import numpy as np
import soundfile as sf

SR = 24000
FADE = int(0.012 * SR)


def trim(a, thr_db=-42, pad=0.03):
    if not len(a):
        return a
    win = int(0.01 * SR)
    frames = len(a) // win
    if frames == 0:
        return a
    rms = np.sqrt(np.mean(a[: frames * win].reshape(frames, win) ** 2, axis=1) + 1e-12)
    loud = np.where(20 * np.log10(rms) > thr_db)[0]
    if not len(loud):
        return a
    s = max(0, loud[0] * win - int(pad * SR))
    e = min(len(a), (loud[-1] + 1) * win + int(pad * SR))
    a = a[s:e].copy()
    n = min(FADE, len(a) // 2)
    a[:n] *= np.linspace(0, 1, n)
    a[-n:] *= np.linspace(1, 0, n)
    return a


def assemble(wav_dir, files):
    pieces = [p for f in files for p in json.load(open(f, encoding="utf-8"))]
    out, lines, t = [], {}, 0.0
    for p in pieces:
        a, sr = sf.read(f"{wav_dir}/{p['line']}_{p['k']}.wav", dtype="float32")
        assert sr == SR, sr
        a = trim(a)
        start = t
        out += [a, np.zeros(int(p["pause"] * SR), np.float32)]
        t += len(a) / SR
        lines.setdefault(p["line"], [round(start, 3), None])[1] = round(t, 3)
        t += p["pause"]
    return np.concatenate(out), lines


if __name__ == "__main__":
    wav_dir, dst, *files = sys.argv[1:]
    audio, lines = assemble(wav_dir, files)
    sf.write(dst + ".wav", audio, SR)
    json.dump(lines, open(dst + ".lines.json", "w"), indent=1)
    print(f"{dst}.wav  {len(audio) / SR:.1f} s, {len(lines)} lines")
