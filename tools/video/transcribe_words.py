"""Word timings for a voice file with faster-whisper (small.en), saved as JSON [{w, s, e}].
Run with the scratch venv: <venv>/bin/python tools/video/transcribe_words.py in.mp3 out.json"""
import sys, json, subprocess
import numpy as np
from faster_whisper import WhisperModel
m = WhisperModel('small.en', device='cpu', compute_type='int8')
raw = subprocess.run(['ffmpeg', '-v', 'error', '-i', sys.argv[1], '-ac', '1', '-ar', '16000', '-f', 'f32le', '-'], capture_output=True, check=True).stdout
audio = np.frombuffer(raw, dtype=np.float32)
segs, _ = m.transcribe(audio, word_timestamps=True, vad_filter=False, beam_size=5)
words = [dict(w=w.word.strip(), s=round(w.start, 3), e=round(w.end, 3)) for s in segs for w in s.words]
json.dump(words, open(sys.argv[2], 'w'))
print(len(words), 'words, last end', words[-1]['e'])
