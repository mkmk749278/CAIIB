"""Word check of an enhanced take against its raw take (PLAYBOOK §5f, 2026-11-21).

Resemble Enhance re-generates the voice; now and then it changes a word. In A00 part 1 it turned "R, B, I, the
government, the market" into "Are I, a government, a market" (the owner heard it; the raw take was right). A second
enhance of the same few seconds was correct, so the fault is random: every enhanced take is checked, every time.

Usage: python3 tools/voice/check_enhanced.py <raw take> <enhanced take> [model=small.en]
Transcribes both (faster-whisper, word timings) and lists every place where the enhanced take's words differ from
the raw take's, with the time. Exit 1 if anything differs. For each listed span: re-enhance a clip of the raw take
around it (resemble-enhance <dir> <out> --tau 0.1), check the clip, and splice it in at the pauses either side.
"""
import difflib, re, subprocess, sys
import numpy as np
from faster_whisper import WhisperModel


def words(m, path):
    raw = subprocess.run(['ffmpeg', '-v', 'error', '-i', path, '-ac', '1', '-ar', '16000', '-f', 'f32le', '-'],
                         capture_output=True, check=True).stdout
    segs, _ = m.transcribe(np.frombuffer(raw, dtype=np.float32), word_timestamps=True, beam_size=5,
                           condition_on_previous_text=False)
    out = []
    for s in segs:
        for w in s.words:
            for t in re.findall(r'[a-z0-9]+', w.word.lower().replace("'", '')):
                out.append((t, w.start))
    return out


def main(raw, enh, model='small.en'):
    m = WhisperModel(model, device='cpu', compute_type='int8')
    a, b = words(m, raw), words(m, enh)
    sm = difflib.SequenceMatcher(None, [t for t, _ in a], [t for t, _ in b], autojunk=False)
    bad = 0
    for op, i1, i2, j1, j2 in sm.get_opcodes():
        if op == 'equal':
            continue
        t = a[i1][1] if i1 < len(a) else a[-1][1]
        bad += 1
        print(f'{int(t // 60)}:{t % 60:04.1f}  raw: {" ".join(x for x, _ in a[max(0, i1 - 3):i2 + 3])!r}'
              f'\n        enh: {" ".join(x for x, _ in b[max(0, j1 - 3):j2 + 3])!r}')
    print(f'{bad} difference(s); raw {len(a)} words, enhanced {len(b)} words, match {sm.ratio():.3f}')
    sys.exit(1 if bad else 0)


if __name__ == '__main__':
    main(*sys.argv[1:4])
