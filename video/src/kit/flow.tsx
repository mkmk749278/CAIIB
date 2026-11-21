// The flow engine of the r4 method (PLAYBOOK §5d–§5e), shared by every lesson from A00 on.
// It is the Incoterms (A07) engine lifted out unchanged in behaviour: timing from the timeline JSON
// (tools/video/flow_voice.py), a beat per script sentence (sk), notes written at the speed of their sentence (B, W),
// "the teacher points" glow, crossfading scenes, chapter strips and the follow-the-voice caption.
// A07 keeps its own inline copy (locked template); new lessons call makeFlow(lines).
import React from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {C, F, tw} from '../theme';

export type L = {id: string; speaker: string; text: string; start: number; dur: number; hold: number; audio: string | null; words: [string, number][]};
export type Timeline = {fps: number; durationInFrames: number; voice: string; lines: L[]};
type Beat = {at: [string, number]; word?: [string, number]; text: string; x: number; y: number; size?: number; color?: string; stack?: string; until?: [string, number]; center?: boolean};

export const XF = 18; // crossfade frames: the old thing fades out while the new one fades in, never a dip to blank
const nw = (w: string) => w.toLowerCase().replace(/[^a-z0-9]/g, '');

export const makeFlow = (tl: Timeline, capFix: [RegExp, string][] = []) => {
	const LS = tl.lines;
	const TOTAL = tl.durationInFrames;
	const by: Record<string, L> = Object.fromEntries(LS.map((l) => [l.id, l]));
	const S = (id: string) => by[id].start;
	const E = (id: string) => by[id].start + by[id].dur;
	const H = (id: string) => E(id) + by[id].hold;
	// frame where `word` is first spoken in line `id` (nth match), else a fraction of the line
	const at = (id: string, word: string, frac = 0.5, nth = 1) => {
		const l = by[id];
		const hits = l.words.filter(([w]) => nw(w).startsWith(nw(word)));
		return hits.length >= nth ? l.start + hits[nth - 1][1] : l.start + Math.round(frac * l.dur);
	};
	// first spoken word of a line (the piece starts in the pause before it)
	const W0 = (id: string) => by[id].start + (by[id].words[0]?.[1] ?? 0);
	const vis = (f: number, a: string, b?: string) => f >= W0(a) - 8 && (b === undefined || f < W0(b) + XF);
	const fo = (f: number, a: string, b?: string) => Math.min(tw(f, W0(a) - 8, W0(a) + XF), b === undefined ? 1 : 1 - tw(f, W0(b) - 2, W0(b) + XF));

	// sentences come from the SCRIPT text; each is anchored to the spoken word that starts it (two words must match)
	const SENT: Record<string, number[]> = Object.fromEntries(LS.map((l) => {
		const sents = (l.text.match(/[^.?!]+[.?!]*["”]?/g) ?? [l.text]).map((t) => t.trim()).filter(Boolean);
		const total = sents.reduce((a, t) => a + t.length, 0);
		let pos = 0, acc = 0;
		const out = sents.map((t, k) => {
			const ws = t.replace(/^[^A-Za-z0-9]+/, '').split(/\s+/).map((w) => nw(w.replace(/-.*/, '')));
			const first = ws[0], second = ws[1] ?? '';
			const guess = l.start + Math.round((acc / total) * l.dur);
			acc += t.length;
			if (k === 0) { pos = 0; return l.start + (l.words[0]?.[1] ?? 0); }
			// start the search a little before where this sentence should be (its share of the line's words), so a
			// repeated phrase earlier in the line ("defines foreign exchange … Foreign exchange means") cannot latch
			const est = Math.floor((ws.length ? (acc - t.length) / total : 0) * l.words.length) - 3;
			for (let j = Math.max(pos + 1, est); j < l.words.length; j++) {
				const ok2 = !second || !l.words[j + 1] || nw(l.words[j + 1][0]).startsWith(second.slice(0, 3)) || nw(l.words[j][0]).length > 3 && nw(l.words[j][0]) === first && second.length < 2;
				if (first && nw(l.words[j][0]).startsWith(first) && ok2) { pos = j; return l.start + l.words[j][1]; }
			}
			return guess;
		});
		return [l.id, out];
	}));
	const sk = (id: string, k: number) => SENT[id][Math.min(k, SENT[id].length - 1)];
	/** 0..1 as the k-th sentence of a line starts (or a frame t) */
	const ap = (f: number, t: number, n = 16) => tw(f, t - 6, t + n);

	// "the teacher points": an element glows for 1.5 s each time the voice names it
	const ALLW: [string, number][] = LS.flatMap((l) => l.words.map(([w, t]) => [nw(w), l.start + t] as [string, number]));
	const glowOf = (f: number, keys: string[], from = 0, to = 1e9) => {
		let g = 0;
		for (const [w, t] of ALLW) {
			if (t > f) break;
			if (t < from || t > to) continue;
			if (f - t < 50 && keys.some((k) => w.startsWith(k))) g = Math.max(g, t > f - 6 ? (f - t + 6) / 12 : 1 - (f - t - 6) / 44);
		}
		return Math.max(0, Math.min(1, g));
	};

	const BEATS: Beat[] = [];
	const B = (id: string, k: number, text: string, x: number, y: number, o: Partial<Beat> = {}) => { BEATS.push({at: [id, k], text, x, y, ...o}); };
	const W = (id: string, word: string, nth: number, text: string, x: number, y: number, o: Partial<Beat> = {}) => { BEATS.push({at: [id, 0], word: [word, nth], text, x, y, ...o}); };

	const Notes: React.FC<{f: number}> = ({f}) => {
		const list = BEATS.map((b) => ({...b, t0: b.word ? at(b.at[0], b.word[0], 0.5, b.word[1]) : sk(b.at[0], b.at[1])})).sort((a, b) => a.t0 - b.t0);
		return (
			<>
				{list.map((b, i) => {
					const next = list.slice(i + 1).find((n) => !b.stack || n.stack !== b.stack);
					// a note leaves at the next note, or when its own line ends (it never carries into the next line or scene)
					const lineEnd = by[b.at[0]].start + by[b.at[0]].dur + 12;
					const end = Math.min(b.until ? sk(b.until[0], b.until[1]) : next ? next.t0 : lineEnd, lineEnd, b.t0 + 360);
					if (f < b.t0 - 6 || f > end + XF) return null;
					// write at the speed of the sentence: finish within 80% of it (12–70 frames)
					const ks = SENT[b.at[0]], ln = by[b.at[0]];
					const sEnd = b.word ? Math.min(ln.start + ln.dur, b.t0 + 75) : b.at[1] + 1 < ks.length ? ks[b.at[1] + 1] : ln.start + ln.dur;
					const spoken = Math.max(12, Math.min(70, 0.8 * (sEnd - b.t0), b.text.length * 2.2));
					const p = tw(f, b.t0 - 4, b.t0 + spoken, (x) => x);
					const o = Math.min(tw(f, b.t0 - 6, b.t0 + 6), 1 - tw(f, end, end + XF));
					return (
						<div key={i} style={{position: 'absolute', left: b.x, top: b.y, opacity: o, transform: `${b.center ? 'translateX(-50%) ' : ''}rotate(-1.5deg)`, fontFamily: '"Caveat", cursive', fontWeight: 700, fontSize: (b.size ?? 58) * 1.15, color: b.color ?? C.text, whiteSpace: 'nowrap'}}>
							<div style={{clipPath: `inset(-20px ${(1 - p) * 100}% -20px -10px)`, background: 'linear-gradient(transparent 38%, rgba(242,179,61,0.35) 38%, rgba(242,179,61,0.35) 88%, transparent 88%)', padding: '0 10px'}}>{b.text}</div>
							<svg width="100%" height={14} viewBox="0 0 100 14" preserveAspectRatio="none" style={{display: 'block', marginTop: -4}}>
								<path d="M2 9 C 30 3, 70 13, 98 6" stroke="#F2B33D" strokeWidth={6} fill="none" strokeLinecap="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - tw(f, b.t0 + spoken, b.t0 + spoken + 12)} opacity={0.85} />
							</svg>
						</div>
					);
				})}
			</>
		);
	};

	// chapter title slides in while the teacher speaks the chapter's first sentence (no silent card)
	const ChapterStrip: React.FC<{f: number; from: number; n: number; title: string}> = ({f, from, n, title}) => {
		const o = Math.min(tw(f, from - 4, from + 14), 1 - tw(f, from + 150, from + 168));
		if (o <= 0) return null;
		return (
			<div style={{position: 'absolute', right: 60, top: 26, opacity: o, transform: `translateX(${(1 - o) * 60}px)`, background: C.text, color: '#fff', borderRadius: 14, padding: '10px 24px', fontFamily: F.sans, fontWeight: 700, fontSize: 34, boxShadow: '6px 6px 0 #F2B33D'}}>
				<span style={{opacity: 0.7, fontSize: 26, letterSpacing: 3, marginRight: 14}}>CHAPTER {n}</span>{title}
			</div>
		);
	};

	// captions: the spoken sentence; words already spoken in ink, the rest soft; spelt codes shown as codes
	const capText = (t: string) => capFix.reduce((s, [r, v]) => s.replace(r, v), t.replace(/\b([A-Z])-(?=[A-Z]\b)/g, '$1'));
	const Captions: React.FC<{f: number}> = ({f}) => {
		const l = LS.find((x) => f >= x.start && f < x.start + x.dur + 10);
		if (!l || !l.words.length) return null;
		const end = l.start + l.words[l.words.length - 1][1] + 12;
		const o = Math.min(tw(f, l.start + l.words[0][1] - 6, l.start + l.words[0][1] + 6), 1 - tw(f, Math.max(end, l.start + l.dur - 4), Math.max(end, l.start + l.dur - 4) + 10));
		// split on the RAW script text so sentence boundaries match the voice, then tidy each sentence for display
		const sentsRaw = l.text.match(/[^.?!]+[.?!]*["”]?/g)?.map((t) => t.trim()).filter(Boolean) ?? [l.text];
		const k = l.words.filter(([, t]) => l.start + t <= f).length;
		const frac = Math.min(1, (k + Math.min(1, (f - (l.start + (l.words[k - 1]?.[1] ?? 0))) / 8) - 1 + 1e-6) / l.words.length);
		const total = sentsRaw.reduce((a, t) => a + t.length, 0);
		const pos = frac * total;
		let idx = sentsRaw.length - 1, done = 0;
		for (let i = 0; i < sentsRaw.length; i++) { if (pos <= done + sentsRaw[i].length) { idx = i; break; } done += sentsRaw[i].length; }
		const share = Math.max(0, Math.min(1, (pos - done) / sentsRaw[idx].length));
		const sent = capText(sentsRaw[idx]);
		const cut = Math.round(share * sent.length);
		return (
			<div style={{position: 'absolute', left: 120, right: 120, bottom: 26, display: 'flex', justifyContent: 'center', opacity: o}}>
				<div style={{background: 'rgba(255,255,255,0.94)', border: '2px solid #DCCFB2', borderRadius: 16, padding: '12px 28px', maxWidth: 1600, fontFamily: F.sans, fontWeight: 600, fontSize: 42, lineHeight: 1.25, textAlign: 'center', boxShadow: '0 6px 18px rgba(80,60,20,0.10)'}}>
					<span style={{color: C.text}}>{sent.slice(0, cut)}</span><span style={{color: '#8C93A0'}}>{sent.slice(cut)}</span>
				</div>
			</div>
		);
	};

	const Scene: React.FC<{a: number; b: number; children: (f: number) => React.ReactNode}> = ({a, b, children}) => {
		const f = useCurrentFrame();
		if (f < a - 1 || f > b + XF + 1) return null;
		const o = Math.min(tw(f, a, a + XF), 1 - tw(f, b, b + XF));
		return <AbsoluteFill style={{opacity: o}}>{children(f)}</AbsoluteFill>;
	};

	return {LS, TOTAL, by, S, E, H, at, W0, vis, fo, sk, ap, glowOf, B, W, Notes, ChapterStrip, Captions, Scene, SENT};
};

/** Fade-and-rise wrapper for one element (o = 0..1). */
export const Fd: React.FC<{o: number; children: React.ReactNode}> = ({o, children}) => (
	o <= 0 ? null : <AbsoluteFill style={{opacity: o, transform: `translateY(${(1 - o) * 14}px)`}}>{children}</AbsoluteFill>
);
