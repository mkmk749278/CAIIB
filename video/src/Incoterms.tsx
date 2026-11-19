import React from 'react';
import {AbsoluteFill, Audio, Sequence, staticFile, useCurrentFrame} from 'remotion';
import lines from './incoterms_lines.json';
import {C, F, tw, env} from './theme';
import {Label, Tag, Card, PauseCard, ChapterCard, Person} from './parts';
import {Calculator, typeKeys, MindMap} from './rich';
import {Road, RuleChip, Thoughts, Doc, Ship, Sea, Rain, RISK, COST} from './road';
import {Page, Note, TrapNote, P} from './kit/look';
import {GrowMap, INCO_MAP} from './kit/mindmap';

// v2 look (PLAYBOOK §5c, review_look_v2.md): the r1 choreography, drawn on the notebook page, with the lesson map
const MAP = INCO_MAP;

type L = {id: string; speaker: string; text: string; start: number; dur: number; hold: number; audio: string | null; words: [string, number][]};
const LS = (lines as unknown as {lines: L[]}).lines;
const TOTAL = (lines as {durationInFrames: number}).durationInFrames;
const by: Record<string, L> = Object.fromEntries(LS.map((l) => [l.id, l]));
const S = (id: string) => by[id].start;
const E = (id: string) => by[id].start + by[id].dur;
const H = (id: string) => E(id) + by[id].hold;
const norm = (w: string) => w.toLowerCase().replace(/[^a-z0-9]/g, '');
// frame where `word` is first spoken in line `id` (nth match), else a fraction of the line
const at = (id: string, word: string, frac: number, nth = 1) => {
	const l = by[id];
	const hits = l.words.filter(([w]) => norm(w).startsWith(norm(word)));
	return hits.length >= nth ? l.start + hits[nth - 1][1] : l.start + Math.round(frac * l.dur);
};
const during = (f: number, a: string, b?: string) => f >= S(a) && (b === undefined || f < S(b));
// ---- flow engine (PLAYBOOK §5d) ----
// first spoken word of a line (the piece starts in the pause before it)
const W0 = (id: string) => by[id].start + (by[id].words[0]?.[1] ?? 0);
const XF = 18; // crossfade frames: the old thing fades out while the new one fades in, never a dip to blank
// visible from the first word of a to just after b starts (overlapping the next thing)
const vis = (f: number, a: string, b?: string) => f >= W0(a) - 8 && (b === undefined || f < W0(b) + XF);
const fo = (f: number, a: string, b?: string) => Math.min(tw(f, W0(a) - 8, W0(a) + XF), b === undefined ? 1 : 1 - tw(f, W0(b) - 2, W0(b) + XF));

// ---- r4: every sentence gets a beat (PLAYBOOK §5d; checked by tools/video/sentence_sync.py) ----
// k-th sentence of a line, from the spoken words (a sentence starts after a word ending in . ? !)
const SENT: Record<string, number[]> = Object.fromEntries(LS.map((l) => [l.id, l.words.map(([, t], k) => (k === 0 || /[.?!]["'”]?$/.test(l.words[k - 1][0]) ? l.start + t : -1)).filter((x) => x >= 0)]));
const sk = (id: string, k: number) => SENT[id][Math.min(k, SENT[id].length - 1)];
// a teacher's note, written left to right while the sentence is spoken, underlined when done
type Beat = {at: [string, number]; text: string; x: number; y: number; size?: number; color?: string; stack?: string; until?: [string, number]; center?: boolean};
const BEATS: Beat[] = [];
const B = (id: string, k: number, text: string, x: number, y: number, o: Partial<Beat> = {}) => BEATS.push({at: [id, k], text, x, y, ...o});

// ---- the beats (Incoterms r4). x, y = top-left of the note on the 1920×1080 page; c = centred on x ----
const c = {center: true};
// warm-up: the title has stepped back; notes write in the middle of the page
B('N00a', 1, 'straight from the branch…', 960, 500, c); B('N00a', 2, 'relax for a minute', 960, 500, c);
B('N00a', 3, 'how was the day?', 960, 500, c); B('N00a', 4, 'busy? always busy!', 960, 500, c);
B('N00b', 1, 'notifications: silent', 960, 500, c); B('N00b', 2, 'pen + calculator', 960, 500, c);
B('N00b', 3, 'calculator: one small sum, promise', 960, 500, c);
B('N00c', 0, 'a question first…', 960, 460, c); B('N00c', 2, 'just think about it', 960, 790, c);
B('N00c', 3, 'some of you: every day', 960, 790, c); B('N00c', 4, 'many of you: never', 960, 790, c);
B('N00c', 5, 'both are fine', 960, 790, c);
B('N00d', 0, "today's topic: Incoterms", 960, 460, c); B('N00d', 1, "why it's worth your time", 960, 460, c);
B('N00d', 4, 'one was a full case study', 960, 840, c);
B('N00e', 0, 'easy marks', 960, 470, c); B('N00e', 2, 'no heavy theory', 960, 780, c);
B('N00e', 3, '15 minutes → this topic is yours', 960, 780, c); B('N00e', 4, "shall we start?", 960, 780, c);
// opening
B('N02', 1, 'keep this line in mind', 960, 860, c);
B('N03', 2, 'everything looks perfect', 1060, 560);
B('N04', 3, 'USD 48,000 · gone', 960, 300, c);
B('N06', 1, 'Under CIF: whose loss?', 620, 610); B('N06', 2, "seller's? or buyer's?", 620, 610);
// chapter 1: the misconception, built step by step
B('N06a', 1, 'CIF = cost, insurance, freight', 140, 110, {stack: 'm', size: 50});
B('N06a', 2, 'seller paid the freight…', 140, 170, {stack: 'm', size: 50});
B('N06a', 3, '…and bought the insurance', 140, 230, {stack: 'm', size: 50});
B('N06a', 4, "so the sea is her job?", 900, 170, {stack: 'm', size: 50});
B('N06a', 5, "so it's her loss?", 900, 230, {stack: 'm', size: 50, until: ['N06b', 0]});
B('N06b', 1, 'on the ship → buyer’s problem?', 1060, 130);
B('N09', 3, 'banks deal in documents, not goods', 140, 540); B('N09', 4, 'UCP 600 · Article 5', 140, 540);
B('N10a', 0, 'said "seller"? don’t feel bad', 360, 640); B('N10a', 1, 'almost everybody does', 360, 640);
B('N13', 4, '→ that is for the sales contract', 960, 760, c);
B('N14', 3, 'an old contract may say 2010', 960, 620, c);
B('N15', 3, 'for your exam: 2020', 960, 650, c);
B('N15a', 1, 'still with me? good', 960, 860, c); B('N15a', 4, 'hold on to that!', 960, 860, c);
B('N15b', 0, 'stretch for a second', 960, 860, c); B('N15b', 2, 'full attention now', 960, 860, c);
// chapter 2: the road
B('N16', 1, 'a road', 960, 130, c); B('N16', 2, "← the seller's door", 300, 400); B('N16', 3, "the buyer's door →", 1290, 400);
B('N16', 4, '7 stops in between', 960, 130, c); B('N16', 5, "let's walk through them", 960, 130, c);
B('N19', 0, 'two markers move on this road', 1050, 130); B('N19', 2, 'after the baton: buyer’s loss', 1050, 130);
B('N19', 4, 'how far the seller pays', 1050, 130);
B('N20', 2, 'just watch, don’t write', 1050, 230);
B('N21', 3, 'buyer loads the truck', 1150, 130); B('N21', 4, 'even the export clearance!', 1150, 130);
B('N29', 2, 'everything else: in between', 600, 600); B('N29', 3, 'a favourite question!', 600, 600);
B('N30', 0, 'customs is simple', 960, 720, c);
B('N31a', 0, 'quick check', 960, 130, c); B('N31a', 1, 'everyone with me?', 960, 130, c); B('N31a', 2, "let's test it", 960, 130, c);

// chapter 2 end and chapter 3
B('N33', 0, 'look at the road once more', 960, 860, c);
B('N34', 0, 'a trap the exam likes', 960, 130, c);
B('N35', 0, 'how many in all?', 960, 160, c); B('N35', 2, 'asked twice in one cycle!', 960, 760, c);
B('N36a', 1, 'the heaviest part: done', 960, 960, c);
B('N37', 0, 'who must buy insurance?', 960, 110, c); B('N37', 3, 'the "I" is the clue', 960, 110, c);
B('N37', 4, 'others: buyer insures, if anyone', 960, 110, c);
B('N38', 0, 'the 2020 change', 960, 110, c); B('N38', 3, 'all-risks kind', 1000, 640); B('N38', 5, 'basic kind', 200, 640);
B('N39', 0, 'why the difference?', 960, 110, c); B('N39', 3, 'manufactured goods → A', 1000, 760); B('N39', 4, 'the bigger umbrella!', 960, 110, c);
B('N40', 2, 'not 100 → 110!', 960, 720, c); B('N40', 3, 'in the contract currency', 960, 720, c);
B('N41', 0, 'the LC side says the same', 960, 720, c);
B('N42', 0, 'calculators out!', 80, 620); B('N42', 1, "our exporter's price", 80, 620);
B('N48', 0, 'at the LC desk', 960, 70, c);
B('N49', 1, 'cover after sailing = no cover', 960, 720, c); B('N49', 2, 'Article 28 again', 960, 720, c);
B('N49a', 3, 'a quick fit check ✓', 960, 780, c);
// recap and practice
B('N51', 1, 'answer before I do!', 960, 900, c);
B('N53', 2, 'even import duty', 160, 400);
B('N57', 2, 'all three? very good ✓', 960, 900, c);

const Notes: React.FC<{f: number}> = ({f}) => {
	const list = BEATS.map((b) => ({...b, t0: sk(b.at[0], b.at[1])})).sort((a, b) => a.t0 - b.t0);
	return (
		<>
			{list.map((b, i) => {
				// a note stays until the next note outside its stack starts (or its `until`), at most 12 s
				const next = list.slice(i + 1).find((n) => !b.stack || n.stack !== b.stack);
				const end = Math.min(b.until ? sk(b.until[0], b.until[1]) : next ? next.t0 : b.t0 + 360, b.t0 + 360);
				if (f < b.t0 - 6 || f > end + XF) return null;
				const words = by[b.at[0]].words;
				const spoken = Math.max(24, Math.min(70, b.text.length * 2.2));
				const p = tw(f, b.t0 - 4, b.t0 + spoken, (x) => x);
				const o = Math.min(tw(f, b.t0 - 6, b.t0 + 6), 1 - tw(f, end, end + XF));
				void words;
				return (
					<div key={i} style={{position: 'absolute', left: b.x, top: b.y, opacity: o, transform: `${b.center ? 'translateX(-50%) ' : ''}rotate(-1.5deg)`, fontFamily: '"Caveat", cursive', fontWeight: 700, fontSize: b.size ?? 58, color: b.color ?? C.text, whiteSpace: 'nowrap'}}>
						<div style={{clipPath: `inset(-20px ${(1 - p) * 100}% -20px -10px)`}}>{b.text}</div>
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

const Fd: React.FC<{o: number; children: React.ReactNode}> = ({o, children}) => (
	<AbsoluteFill style={{opacity: o, transform: `translateY(${(1 - o) * 14}px)`}}>{children}</AbsoluteFill>
);


const Scene: React.FC<{a: number; b: number; children: (f: number) => React.ReactNode}> = ({a, b, children}) => {
	const f = useCurrentFrame();
	if (f < a - 1 || f > b + XF + 1) return null;
	const o = Math.min(tw(f, a, a + XF), 1 - tw(f, b, b + XF));
	return <AbsoluteFill style={{opacity: o}}>{children(f)}</AbsoluteFill>;
};

const Drift: React.FC<{f: number; children: React.ReactNode}> = ({f, children}) => {
	// r4: no constant wobble; the page holds still and only what is being said moves
	return <AbsoluteFill>{children}</AbsoluteFill>;
};

// captions (flow engine): the spoken sentence; words already spoken in ink, the rest soft, so the eye follows the
// voice; fades in and out instead of switching off in a pause. Spelt rules shown as codes (C-I-F → CIF).
const capText = (t: string) => t.replace(/\b([A-Z])-(?=[A-Z]\b)/g, '$1').replace(/Incoterms twenty twenty/g, 'Incoterms 2020').replace(/twenty twenty/g, '2020').replace(/twenty ten/g, '2010');
const Captions: React.FC<{f: number}> = ({f}) => {
	const l = LS.find((x) => f >= x.start && f < x.start + x.dur + 10);
	if (!l || !l.words.length) return null;
	const end = l.start + l.words[l.words.length - 1][1] + 12;
	const o = Math.min(tw(f, l.start + l.words[0][1] - 6, l.start + l.words[0][1] + 6), 1 - tw(f, Math.max(end, l.start + l.dur - 4), Math.max(end, l.start + l.dur - 4) + 10));
	const txt = capText(l.text);
	const sents = txt.match(/[^.?!]+[.?!]*/g)?.map((t) => t.trim()).filter(Boolean) ?? [txt];
	// spoken fraction of the line from the word timings, mapped onto the characters of the script text
	const k = l.words.filter(([, t]) => l.start + t <= f).length;
	const frac = Math.min(1, (k + Math.min(1, (f - (l.start + (l.words[k - 1]?.[1] ?? 0))) / 8) - 1 + 1e-6) / l.words.length);
	const total = sents.reduce((a, t) => a + t.length, 0);
	let pos = frac * total, idx = sents.length - 1, done = 0;
	for (let i = 0; i < sents.length; i++) { if (pos <= done + sents[i].length) { idx = i; break; } done += sents[i].length; }
	const cut = Math.max(0, Math.round(pos - done));
	const sent = sents[idx];
	return (
		<div style={{position: 'absolute', left: 120, right: 120, bottom: 26, display: 'flex', justifyContent: 'center', opacity: o}}>
			<div style={{background: 'rgba(255,255,255,0.94)', border: '2px solid #DCCFB2', borderRadius: 16, padding: '12px 28px', maxWidth: 1600, fontFamily: F.sans, fontWeight: 600, fontSize: 42, lineHeight: 1.25, textAlign: 'center', boxShadow: '0 6px 18px rgba(80,60,20,0.10)'}}>
				<span style={{color: C.text}}>{sent.slice(0, cut)}</span><span style={{color: '#8C93A0'}}>{sent.slice(cut)}</span>
			</div>
		</div>
	);
};

const Big: React.FC<{y: number; o?: number; color?: string; size?: number; children: React.ReactNode}> = ({y, o = 1, color = C.text, size = 80, children}) => (
	<Label x={960} y={y} w={1700} align="center" size={size} weight={700} color={color} o={o}>{children}</Label>
);

// station index for each rule (risk) and how far the seller pays (cost)
const RULES: Record<string, {name: string; risk: number; cost: number; sea?: boolean}> = {
	EXW: {name: 'Ex Works', risk: 0, cost: -1},
	FCA: {name: 'Free Carrier', risk: 1, cost: 1},
	FAS: {name: 'Free Alongside Ship', risk: 2, cost: 2, sea: true},
	FOB: {name: 'Free On Board', risk: 3, cost: 3, sea: true},
	CFR: {name: 'Cost and Freight', risk: 3, cost: 4, sea: true},
	CIF: {name: 'Cost, Insurance and Freight', risk: 3, cost: 4, sea: true},
	CPT: {name: 'Carriage Paid To', risk: 1, cost: 4},
	CIP: {name: 'Carriage and Insurance Paid To', risk: 1, cost: 4},
	DAP: {name: 'Delivered at Place', risk: 4, cost: 4},
	DPU: {name: 'Delivered at Place Unloaded', risk: 5, cost: 5},
	DDP: {name: 'Delivered Duty Paid', risk: 6, cost: 6},
};

export const Incoterms: React.FC = () => {
	const f = useCurrentFrame();
	const ch1 = S('N06a'), ch2 = S('N16'), ch3 = S('N37'), ch4 = S('N50'); // r4: no silent chapter cards
	return (
		<Page>
			<Drift f={f}>
				{/* ---------------- Warm-up ---------------- */}
				<Scene a={0} b={S('N01')}>
					{(f) => (
						<>
							<Tag text="CAIIB · BFM · MODULE A · INTERNATIONAL BANKING" />
							<AbsoluteFill style={{transform: `translateY(${-60 * tw(f, sk('N00a', 1) - 10, sk('N00a', 1) + 30)}px) scale(${1 - 0.4 * tw(f, sk('N00a', 1) - 10, sk('N00a', 1) + 30)})`, transformOrigin: '50% 0'}}>
							<Big y={250} size={140} o={tw(f, 5, 25)}>Incoterms<sup style={{fontSize: 50}}>®</sup> 2020</Big>
							<Big y={430} size={52} color={C.dim} o={tw(f, 20, 40)}><span style={{fontFamily: '"Caveat", cursive', fontSize: 72}}>whose risk? whose cost?</span></Big>
							<Card x={460} y={560} w={1000} h={150} o={tw(f, 20, 40)} border={C.line}>
								<Label x={500} y={24} w={940} align="center" size={34} color={C.dim}>Rules taught: Incoterms® 2020 (ICC) · UCP 600</Label>
								<Label x={500} y={80} w={940} align="center" size={34} color={C.dim}>as at the IIBF cut-off of 31 Dec 2026</Label>
							</Card>
							<Label x={960} y={760} w={1400} align="center" size={30} color={C.dim} o={tw(f, 20, 40)}>The voice in this lesson is AI-generated · names, ship and amounts are illustrative</Label>
							</AbsoluteFill>
							{vis(f, 'N00c', 'N00d') ? <Fd o={fo(f, 'N00c', 'N00d')}>{<Card x={360} y={600} w={1200} h={140} border={C.market}><Label x={600} y={40} w={1100} align="center" size={50} weight={700}>Ever handled an export or import file?</Label></Card>}</Fd> : null}
							{vis(f, 'N00d', 'N00e') ? <Fd o={fo(f, 'N00d', 'N00e')}>{(
								<>
									{[{t: 'Letters of credit', n: 6}, {t: 'Incoterms', n: 3}].map((r, i) => {
										const p = tw(f, sk('N00d', 2 + i) - 4, sk('N00d', 2 + i) + 40);
										return (
											<div key={r.t} style={{position: 'absolute', left: 360, top: 580 + i * 120}}>
												<div style={{fontFamily: F.sans, fontWeight: 700, fontSize: 40, color: C.text, width: 420, display: 'inline-block'}}>{r.t}</div>
												{[...Array(7)].map((_, k) => <div key={k} style={{display: 'inline-block', width: 90, height: 60, marginRight: 12, borderRadius: 10, verticalAlign: 'middle', background: k < r.n && p > k / r.n ? C.market : C.card, border: `3px solid ${C.line}`}} />)}
												<span style={{fontFamily: F.mono, fontWeight: 700, fontSize: 40, color: C.market, marginLeft: 20, opacity: p}}>{r.n} of 7 exams</span>
											</div>
										);
									})}
								</>
							)}</Fd> : null}
							{f >= sk('N00e', 1) - 6 ? <Big y={640} size={70} color={C.market} o={tw(f, sk('N00e', 1) - 6, sk('N00e', 1) + 12)}>11 rules · 1 picture</Big> : null}
						</>
					)}
				</Scene>

				{/* ---------------- Opening: the lost container ---------------- */}
				<Scene a={S('N01')} b={ch1}>
					{(f) => {
						const storm = tw(f, S('N04'), S('N04') + 40);
						const lost = during(f, 'N04') ? tw(f, sk('N04', 1), sk('N04', 1) + 70) : 0;
						return (
							<>
								{f < S('N03') ? (
									<>
										<Card x={140} y={240} w={520} h={170} border="#E8A87C"><Label x={30} y={26} size={30} color={C.dim}>Seller · exporter</Label><Label x={30} y={74} size={52} weight={700}>Tiruppur, India</Label></Card>
										<Card x={1260} y={240} w={520} h={170} border="#7FB8D9" o={tw(f, sk('N01', 2) - 4, sk('N01', 2) + 14)}><Label x={30} y={26} size={30} color={C.dim}>Buyer · importer</Label><Label x={30} y={74} size={52} weight={700}>Rotterdam, NL</Label></Card>
										<svg style={{position: 'absolute', inset: 0}} width={1920} height={1080}><path d="M660 330 Q 960 120 1260 330" stroke={C.dim} strokeWidth={5} strokeDasharray="16 14" fill="none" opacity={tw(f, sk('N01', 2) + 10, sk('N01', 2) + 40)} /></svg>
										<Card x={560} y={500} w={800} h={130} o={tw(f, sk('N01', 3) - 4, sk('N01', 3) + 14)} border={C.market}><Label x={400} y={34} w={760} align="center" size={50} weight={700}>USD 48,000 · backed by an LC</Label></Card>
										{f >= S('N02') ? (
											<div style={{position: 'absolute', left: 360, top: 690, width: 1200, opacity: tw(f, at('N02', 'like', 0.4) + 8, at('N02', 'like', 0.4) + 24), transform: `rotate(-2deg) scale(${1.15 - 0.15 * tw(f, at('N02', 'like', 0.4) + 8, at('N02', 'like', 0.4) + 24)})`, border: `6px solid ${RISK}`, borderRadius: 18, padding: '18px 0', textAlign: 'center', fontFamily: F.mono, fontWeight: 700, fontSize: 64, color: RISK}}>CIF Rotterdam Incoterms® 2020</div>
										) : null}
									</>
								) : (
									<>
										<svg style={{position: 'absolute', inset: 0}} width={1920} height={1080}>
											<Sea f={f} y={720} storm={storm} />
											{f < S('N04') ? <g><rect x={0} y={560} width={420} height={160} fill="#6F7782" stroke="#1F2A37" strokeWidth={4} /><text x={40} y={620} fontFamily={F.sans} fontWeight={700} fontSize={40} fill="#fff">CHENNAI PORT</text></g> : null}
											<Ship x={f < S('N04') ? 760 : 960} y={680} container={10} tilt={storm * 6 * Math.sin(f / 9)} lost={lost} />
											<Rain f={f} o={storm} />
										</svg>
										{vis(f, 'N03', 'N04') ? <Fd o={fo(f, 'N03', 'N04')}>{<Doc x={1480} y={160} title="Bill of lading" sub="shipped on board · Chennai" o={tw(f, sk('N03', 1) - 4, sk('N03', 1) + 14)} />}</Fd> : null}
										{lost > 0.9 ? <Big y={180} size={120} color={RISK} o={tw(f, sk('N04', 2) - 4, sk('N04', 2) + 10)}>LOST AT SEA</Big> : null}
										{f >= S('N05') ? (
											<div style={{position: 'absolute', inset: 0, background: `${C.bg}EE`, opacity: tw(f, S('N05'), S('N05') + 15)}}>
												<Person x={300} y={360} color="#E8A87C" label="Exporter" />
												<Card x={620} y={300} w={1100} h={260} border="#E8A87C"><Label x={40} y={34} w={1020} size={50} weight={700} o={tw(f, sk('N05', 1) - 4, sk('N05', 1) + 12)}>“The goods are gone.</Label>
														<Label x={40} y={98} w={1020} size={50} weight={700} o={tw(f, sk('N05', 2) - 4, sk('N05', 2) + 12)}>Will I still get my money?</Label>
														<Label x={40} y={162} w={1020} size={50} weight={700} o={tw(f, sk('N05', 3) - 4, sk('N05', 3) + 12)}>Whose loss is this?”</Label></Card>
												<PauseCard f={f} from={sk('N06', 3) - 4} to={H('N06')} q="Under CIF: the seller's loss, or the buyer's?" timerFrom={E('N06')} timerFrames={by.N06.hold} />
											</div>
										) : null}
									</>
								)}
								<Tag text="ILLUSTRATIVE · NAMES, SHIP AND AMOUNTS MADE UP" />
							</>
						);
					}}
				</Scene>

				{/* ---------------- Chapter 1 ---------------- */}
				<ChapterStrip f={f} from={W0('N06a')} n={1} title="What three letters decide" />
				<Scene a={ch1} b={S('N11')}>
					{(f) => (
						<>
							<Thoughts f={f} from={S('N06a')} to={S('N08')} a="CIF: seller paid freight and insurance, so the sea is the seller's risk." b="Once it's on the ship, it's the buyer's problem." bFrom={S('N06b')} reveal={S('N07')} right="b" />
							{f >= S('N07') && f < S('N09') ? <Road f={f} y={640} rule="CIF" baton={3} rp={tw(f, W0('N07'), W0('N07') + 30)} costTo={f >= S('N08') ? 4 : null} cp={tw(f, W0('N08'), E('N08'))} hi={[3]} o={tw(f, S('N07'), S('N07') + 15)} note={f >= S('N08') ? 'CIF: risk passes early · freight paid to Rotterdam port' : 'CIF: risk passes on board at Chennai'} /> : null}
							{f >= S('N09') && f < S('N10a') ? (
								<>
									<Doc x={140} y={200} title="Bill of lading" o={tw(f, S('N09') + 20, S('N09') + 32)} />
									<Doc x={400} y={200} title="Commercial invoice" o={tw(f, S('N09') + 40, S('N09') + 52)} />
									<Doc x={660} y={200} title="Insurance policy" sub="CIF · for the buyer" o={tw(f, S('N09') + 60, S('N09') + 72)}  />
									<Card x={1060} y={220} w={720} h={250} border={C.buy} o={tw(f, at('N09', 'match', 0.45), at('N09', 'match', 0.45) + 15)}>
										<Label x={360} y={40} w={680} align="center" size={56} weight={700} color={C.buy}>Documents comply → LC pays ✓</Label>
										<Label x={360} y={170} w={680} align="center" size={32} color={C.dim}>UCP 600 Art. 5: documents, not goods</Label>
									</Card>
									{f >= S('N10') ? <Card x={140} y={600} w={1640} h={170} border={COST}><Label x={820} y={30} w={1580} align="center" size={50} weight={700}>Buyer gets the policy with the documents → claims from the insurer</Label></Card> : null}
								</>
							) : null}
							{f >= S('N10a') ? <TrapNote x={360} y={300} w={1200} p={tw(f, S('N10a'), S('N10a') + 15)}>“Insurance” in the name ≠ the seller’s risk. Under CIF the policy protects the buyer.</TrapNote> : null}
						</>
					)}
				</Scene>
				<Scene a={S('N11')} b={ch2}>
					{(f) => (
						<>
							{vis(f, 'N11', 'N12') ? <Fd o={fo(f, 'N11', 'N12')}>{(
								<>
									<div style={{position: 'absolute', left: 0, right: 0, top: 300, textAlign: 'center', fontFamily: F.mono, fontWeight: 700, fontSize: 110, color: C.text}}>
										<span style={{color: RISK}}>CIF</span> <span style={{color: C.market}}>Rotterdam</span> <span style={{color: C.dim}}>Incoterms® 2020</span>
									</div>
									<Label x={590} y={470} w={400} align="center" size={34} color={RISK} o={tw(f, at('N11', 'three', 0.5), at('N11', 'three', 0.5) + 12)}>the rule</Label>
									<Label x={1000} y={470} w={400} align="center" size={34} color={C.market} o={tw(f, at('N11', 'place', 0.6), at('N11', 'place', 0.6) + 12)}>a named place</Label>
									<Label x={1450} y={470} w={400} align="center" size={34} color={C.dim} o={tw(f, at('N11', 'version', 0.7), at('N11', 'version', 0.7) + 12)}>the version</Label>
									<Label x={960} y={160} w={1600} align="center" size={40} color={C.dim}>Rules published by the International Chamber of Commerce (ICC)</Label>
								</>
							)}</Fd> : null}
							{vis(f, 'N12', 'N13') ? <Fd o={fo(f, 'N12', 'N13')}>{(
								<Card x={260} y={200} w={1400} h={520} border={C.market}>
									<Label x={60} y={50} size={46} color={C.dim}>Three letters answer three questions</Label>
									{['1 · Where does the seller deliver? → where RISK passes', '2 · Who pays which COSTS?', '3 · Who does CUSTOMS: export and import?'].map((t, i) => (
										<Label key={t} x={60} y={160 + i * 110} size={50} weight={700} o={tw(f, at('N12', ['one', 'two', 'three'][i], 0.25 + i * 0.25, i === 2 ? 3 : 1), at('N12', ['one', 'two', 'three'][i], 0.25 + i * 0.25, i === 2 ? 3 : 1) + 12)}>{t}</Label>
									))}
								</Card>
							)}</Fd> : null}
							{vis(f, 'N13', 'N14') ? <Fd o={fo(f, 'N13', 'N14')}>{(
								<Card x={260} y={200} w={1400} h={520} border={RISK} bg="#FBE9E7">
									<Label x={60} y={50} size={46} color={RISK} weight={700}>Incoterms do NOT decide</Label>
									{['✗ the price', '✗ how or when payment is made', '✗ when ownership (title) passes'].map((t, i) => <Label key={t} x={60} y={160 + i * 100} size={52} weight={700} o={tw(f, at('N13', ['price', 'payment', 'ownership'][i], 0.3 + i * 0.2) - 4, at('N13', ['price', 'payment', 'ownership'][i], 0.3 + i * 0.2) + 12)}>{t}</Label>)}
									<Label x={60} y={450} size={38} color={C.dim}>→ that is for the sales contract</Label>
								</Card>
							)}</Fd> : null}
							{vis(f, 'N14', 'N15') ? <Fd o={fo(f, 'N14', 'N15')}>{(
								<Card x={260} y={260} w={1400} h={300} border={C.undo}>
									<Label x={700} y={60} w={1300} align="center" size={56} weight={700}>Not law: they apply only when written into the contract</Label>
									<Label x={700} y={200} w={1300} align="center" size={38} color={C.dim} o={tw(f, sk('N14', 2) - 4, sk('N14', 2) + 12)}>so always name the version: “Incoterms® 2020”</Label>
								</Card>
							)}</Fd> : null}
							{vis(f, 'N15', 'N15a') ? <Fd o={fo(f, 'N15', 'N15a')}>{(
								<Card x={260} y={240} w={1400} h={360} border={C.market}>
									<Label x={700} y={50} w={1300} align="center" size={72} weight={700} color={C.market}>Incoterms® 2020</Label>
									<Label x={700} y={160} w={1300} align="center" size={42} o={tw(f, sk('N15', 1) - 4, sk('N15', 1) + 12)}>in force since 1 January 2020</Label>
									<Label x={700} y={240} w={1300} align="center" size={34} color={C.dim} o={tw(f, sk('N15', 2) - 4, sk('N15', 2) + 12)}>ICC workplan 2026: work only begins towards Incoterms 2030</Label>
								</Card>
							)}</Fd> : null}
							{f >= S('N15a') ? (
								<>
									{/* "that's part one": the lesson map shows what is done; "part two is the picture": the next branch draws */}
									<AbsoluteFill style={{opacity: Math.min(tw(f, sk('N15a', 0) - 6, sk('N15a', 0) + 14), 1 - tw(f, sk('N15a', 2) - 4, sk('N15a', 2) + XF))}}><GrowMap {...MAP} shown={2} /></AbsoluteFill>
									<Big y={330} size={120} o={Math.min(tw(f, sk('N15a', 2), sk('N15a', 2) + 15), 1 - tw(f, S('N15b'), S('N15b') + XF))}><span style={{color: RISK}}>RISK</span> ≠ <span style={{color: COST}}>COST</span></Big>
									<AbsoluteFill style={{opacity: tw(f, S('N15b'), S('N15b') + XF)}}><GrowMap {...MAP} shown={3} newFrom={2} p={tw(f, sk('N15b', 1), sk('N15b', 1) + 50)} lit={2} /></AbsoluteFill>
								</>
							) : null}
						</>
					)}
				</Scene>

				{/* ---------------- Chapter 2: the road ---------------- */}
				<ChapterStrip f={f} from={W0('N16')} n={2} title="The road" />
				<Scene a={ch2} b={S('N29')}>
					{(f) => {
						// flow engine: each rule owns a phrase (from its name to the end of its sentence); the blue line draws across
						// that whole phrase, the baton slides from the last rule's station to this one, the card crossfades
						const SEG: {rule: string; from: number; to: number}[] = [
							{rule: 'EXW', from: W0('N21'), to: E('N21')},
							{rule: 'FCA', from: W0('N22'), to: E('N22')},
							{rule: 'FAS', from: W0('N23'), to: at('N23', 'free', 0.55, 2)},
							{rule: 'FOB', from: at('N23', 'free', 0.55, 2), to: E('N23')},
							{rule: 'CFR', from: W0('N24'), to: at('N24', 'cost', 0.3, 2)},
							{rule: 'CIF', from: at('N24', 'cost', 0.3, 2), to: E('N24')},
							{rule: 'CPT', from: W0('N25'), to: at('N25', 'carriage', 0.2, 2)},
							{rule: 'CIP', from: at('N25', 'carriage', 0.2, 2), to: E('N26')},
							{rule: 'DAP', from: W0('N27'), to: E('N27')},
							{rule: 'DPU', from: W0('N28'), to: at('N28', 'delivered', 0.45, 2)},
							{rule: 'DDP', from: at('N28', 'delivered', 0.45, 2), to: E('N28')},
						];
						const si = SEG.findIndex((g, k) => f >= g.from - 6 && (k === SEG.length - 1 ? f < S('N29') + XF : f < SEG[k + 1].from - 6));
						const seg = si >= 0 ? SEG[si] : null;
						const rule = seg ? seg.rule : null;
						const r = rule ? RULES[rule] : null;
						const prev = si > 0 ? RULES[SEG[si - 1].rule] : null;
						const slide = seg ? tw(f, seg.from, seg.from + 26) : 1;
						// stations appear as they are named (N17, N18), each drawn while the voice says it
						let reveal = 0;
						// each station draws on the word 'stop' that names it
						if (f >= S('N17')) reveal = [1, 2, 3, 4].reduce((a, n) => a + tw(f, at('N17', 'stop', 0.1 + n * 0.2, n) - 4, at('N17', 'stop', 0.1 + n * 0.2, n) + 14), 0);
						if (f >= S('N18')) reveal = 4 + [1, 2, 3].reduce((a, n) => a + tw(f, at('N18', 'stop', 0.2 + n * 0.25, n) - 4, at('N18', 'stop', 0.2 + n * 0.25, n) + 14), 0);
						if (f >= S('N19')) reveal = 7;
						const demo = during(f, 'N19', 'N20');
						const baton = r ? (prev ? prev.risk + (r.risk - prev.risk) * slide : r.risk) : demo ? 3 : null;
						const cost = r ? r.cost : demo && f >= at('N19', 'blue', 0.6) ? 4 : null;
						const cp = seg ? tw(f, seg.from, Math.max(seg.from + 30, seg.to)) : demo ? tw(f, at('N19', 'blue', 0.6), E('N19')) : 1;
						const rp = demo ? tw(f, at('N19', 'red', 0.2), at('N19', 'red', 0.2) + 24) : 1;
						return (
							<>
								<Road f={f} y={560} reveal={f < S('N17') ? 0 : reveal} baton={demo && f < at('N19', 'red', 0.2) ? null : baton} costTo={cost} hi={r ? [r.risk] : []} dimSea={!!r && !r.sea} rule={rule} rp={rp} cp={cp} />
								{/* r4: the door notes are beats now */}
								{vis(f, 'N20', 'N21') ? <Fd o={fo(f, 'N20', 'N21')}>{<Big y={140} size={64}>11 rules on one road</Big>}</Fd> : null}
								{r && rule && seg && !during(f, 'N26', 'N27') ? <RuleChip key={rule} code={rule} name={r.name} sea={r.sea} x={160} y={60} o={tw(f, seg.from - 6, seg.from + 12)} /> : null}
								{vis(f, 'N26', 'N27') ? <Fd o={fo(f, 'N26', 'N27')}>{<Card x={460} y={120} w={1000} h={130} border={C.undo}><Label x={500} y={34} w={940} align="center" size={50} weight={700} color={C.undo}>C rules: two points · risk early, cost to the destination</Label></Card>}</Fd> : null}
								{rule === 'EXW' && seg ? <Label o={tw(f, seg.from + 20, seg.from + 45)} x={960} y={880} w={1500} align="center" size={38} color={C.dim}>buyer loads and even clears export · the least the seller can do</Label> : null}
								{rule === 'DDP' && seg ? <Label o={tw(f, seg.from + 20, seg.from + 45)} x={960} y={880} w={1500} align="center" size={38} color={C.dim}>seller clears import and pays the duty · the most the seller can do</Label> : null}
								{rule === 'DPU' && seg ? <Label o={tw(f, seg.from + 20, seg.from + 45)} x={960} y={880} w={1500} align="center" size={38} color={C.dim}>the only rule where the seller unloads at destination</Label> : null}
							</>
						);
					}}
				</Scene>
				<Scene a={S('N29')} b={S('N33')}>
					{(f) => (
						<>
							{vis(f, 'N29', 'N30') ? <Fd o={fo(f, 'N29', 'N30')}>{(
								<>
									<div style={{position: 'absolute', left: 160, right: 160, top: 420, height: 34, borderRadius: 17, background: `linear-gradient(90deg, ${C.card}, ${C.market})`}} />
									<Label x={160} y={300} size={70} weight={700} mono o={tw(f, sk('N29', 0) - 4, sk('N29', 0) + 12)}>EXW</Label>
									<Label x={160} y={500} size={36} color={C.dim}>seller does the least</Label>
									<Label x={1760} y={300} w={400} align="right" size={70} weight={700} mono color={C.market} o={tw(f, sk('N29', 1) - 4, sk('N29', 1) + 12)}>DDP</Label>
									<Label x={1760} y={500} w={500} align="right" size={36} color={C.dim}>seller does the most</Label>
								</>
							)}</Fd> : null}
							{vis(f, 'N30', 'N31') ? <Fd o={fo(f, 'N30', 'N31')}>{(
								<Card x={260} y={200} w={1400} h={460} border={C.market}>
									<Label x={60} y={50} size={46} color={C.dim}>Customs</Label>
									<Label x={60} y={150} size={56} weight={700}>Export clearance → SELLER</Label>
									<Label x={60} y={225} size={40} color={RISK} weight={700}>except EXW (buyer)</Label>
									<Label x={60} y={310} size={56} weight={700}>Import clearance → BUYER</Label>
									<Label x={60} y={385} size={40} color={RISK} weight={700}>except DDP (seller)</Label>
								</Card>
							)}</Fd> : null}
							{vis(f, 'N31', 'N31a') ? <Fd o={fo(f, 'N31', 'N31a')}>{(
								<div style={{position: 'absolute', left: 120, right: 120, top: 220, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 30}}>
									{[{k: 'E', w: 'Exit', d: "from the seller's door", r: 'EXW'}, {k: 'F', w: 'Free', d: 'of the main freight', r: 'FCA · FAS · FOB'}, {k: 'C', w: 'Carriage paid', d: 'but risk already gone', r: 'CFR · CIF · CPT · CIP'}, {k: 'D', w: 'Delivered', d: 'at the destination', r: 'DAP · DPU · DDP'}].map((g, i) => (
										<div key={g.k} style={{opacity: tw(f, at('N31', ['exit', 'free', 'carriage', 'delivered'][i], 0.15 + i * 0.22) - 4, at('N31', ['exit', 'free', 'carriage', 'delivered'][i], 0.15 + i * 0.22) + 12), background: C.card, border: `3px solid ${g.k === 'C' ? C.undo : C.line}`, borderRadius: 26, padding: 30, height: 440, boxSizing: 'border-box'}}>
											<div style={{fontFamily: F.mono, fontWeight: 700, fontSize: 120, color: g.k === 'C' ? C.undo : C.market}}>{g.k}</div>
											<div style={{fontFamily: F.sans, fontWeight: 700, fontSize: 44, color: C.text}}>{g.w}</div>
											<div style={{fontFamily: F.sans, fontSize: 32, color: C.dim, marginTop: 8}}>{g.d}</div>
											<div style={{fontFamily: F.mono, fontWeight: 700, fontSize: 30, color: C.text, marginTop: 30}}>{g.r}</div>
										</div>
									))}
								</div>
							)}</Fd> : null}
							{f >= S('N31a') ? (
								<>
									<Road f={f} y={640} o={tw(f, S('N32'), S('N32') + 15)} rule="CPT" dimSea baton={f >= S('N32') ? 1 : null} rp={tw(f, W0('N32'), W0('N32') + 30)} costTo={f >= S('N32') ? 4 : null} cp={tw(f, W0('N32'), E('N32'))} hi={f >= S('N32') ? [1] : []} />
									{f >= S('N32') ? <RuleChip code="CPT" name="Carriage Paid To" x={160} y={60} o={tw(f, S('N32'), S('N32') + 12)} /> : null}
									<Thoughts f={f} from={at('N31a', 'some', 0.35)} to={S('N32') + 60} a="At the destination: carriage is paid till there." b="When the goods go to the first carrier." bFrom={at('N31a', 'others', 0.6)} reveal={S('N32')} right="b" y={230} />
									<PauseCard top f={f} from={E('N31a') - 30} to={H('N31a')} q="CPT: where does the risk pass?" timerFrom={E('N31a')} timerFrames={by.N31a.hold} />
								</>
							) : null}
						</>
					)}
				</Scene>
				<Scene a={S('N33')} b={ch3}>
					{(f) => (
						<>
							{vis(f, 'N33', 'N34') ? <Fd o={fo(f, 'N33', 'N34')}>{(
								<div style={{position: 'absolute', left: 140, right: 140, top: 200, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40}}>
									{[{t: 'Sea and inland waterway only', n: '4', r: ['FAS', 'FOB', 'CFR', 'CIF'], c: COST}, {t: 'Any mode, even air, rail, road or mixed', n: '7', r: ['EXW', 'FCA', 'CPT', 'CIP', 'DAP', 'DPU', 'DDP'], c: C.text}].map((g, i) => (
										<div key={g.n} style={{background: C.card, border: `3px solid ${g.c}`, borderRadius: 26, padding: 36, opacity: tw(f, (i ? at('N33', 'seven', 0.75) : at('N33', 'four', 0.25)) - 4, (i ? at('N33', 'seven', 0.75) : at('N33', 'four', 0.25)) + 14)}}>
											<div style={{fontFamily: F.mono, fontWeight: 700, fontSize: 110, color: g.c}}>{g.n}</div>
											<div style={{fontFamily: F.sans, fontWeight: 700, fontSize: 40, color: C.text}}>{g.t}</div>
											<div style={{fontFamily: F.mono, fontWeight: 700, fontSize: 44, color: C.dim, marginTop: 24}}>{g.r.join(' · ')}</div>
										</div>
									))}
								</div>
							)}</Fd> : null}
							{vis(f, 'N34', 'N35') ? <Fd o={fo(f, 'N34', 'N35')}>{(
								<>
									<Card x={160} y={180} w={760} h={420} border={RISK} bg="#FBE9E7"><Label x={380} y={40} w={700} align="center" size={46} weight={700} color={RISK}>✗ Container + FOB / CIF</Label><Label x={380} y={160} w={700} align="center" size={36} color={C.dim}>handed over at the terminal, before it is on board</Label></Card>
									<Card x={1000} y={180} w={760} h={420} border={C.buy}><Label x={380} y={40} w={700} align="center" size={46} weight={700} color={C.buy}>✓ Container + FCA / CIP</Label><Label x={380} y={160} w={700} align="center" size={36} color={C.dim}>ICC: these fit better for container cargo</Label></Card>
									<TrapNote x={460} y={660} w={1000}>Container cargo: FCA / CIP, not FOB / CIF</TrapNote>
								</>
							)}</Fd> : null}
							{vis(f, 'N35', 'N36') ? <Fd o={fo(f, 'N35', 'N36')}>{(
								<>
									<Big y={260} size={170} color={C.market}>11 = 7 + 4</Big>
									<Big y={520} size={50} color={C.dim}>“How many Incoterms?” · asked twice in Jul 2024</Big>
									<Big y={620} size={44} color={RISK} o={tw(f, at('N35', 'thirteen', 0.7), at('N35', 'thirteen', 0.7) + 12)}>13 was Incoterms 2000 ✗</Big>
								</>
							)}</Fd> : null}
							{f >= S('N36') ? (
								<>
									<div style={{position: 'absolute', left: 0, right: 0, top: 300, textAlign: 'center', fontFamily: F.mono, fontWeight: 700, fontSize: 130}}>
										<span style={{color: C.dim, textDecoration: 'line-through'}}>DAT</span><span style={{color: C.text}}> → </span><span style={{color: C.market, opacity: tw(f, at('N36', 'became', 0.45), at('N36', 'became', 0.45) + 12)}}>DPU</span>
									</div>
									<Big y={520} size={44} color={C.dim}>Delivered at Terminal → Delivered at Place Unloaded · any place, not only a terminal</Big>
									{/* "deep breath… eleven rules, one road": the lesson map, five branches done; "insurance and the LC": the sixth draws */}
									{f >= S('N36a') - 2 ? <AbsoluteFill style={{background: C.bg, opacity: tw(f, S('N36a'), S('N36a') + XF)}}><GrowMap {...MAP} shown={6} newFrom={5} p={tw(f, sk('N36a', 4), sk('N36a', 4) + 60)} lit={f >= sk('N36a', 4) ? 5 : undefined} /></AbsoluteFill> : null}
								</>
							) : null}
						</>
					)}
				</Scene>

				{/* ---------------- Chapter 3: insurance and the LC desk ---------------- */}
				<ChapterStrip f={f} from={W0('N37')} n={3} title="Insurance and the bank’s desk" />
				<Scene a={ch3} b={S('N42')}>
					{(f) => (
						<>
							{vis(f, 'N37', 'N38') ? <Fd o={fo(f, 'N37', 'N38')}>{(
								<>
									<Big y={180} size={56} color={C.dim}>Seller must insure in only two rules</Big>
									<RuleChip code="CIF" name="Cost, Insurance and Freight" sea x={160} y={380} w={780} color={C.market} />
									<RuleChip code="CIP" name="Carriage and Insurance Paid To" x={980} y={380} w={780} color={C.market} />
									<Big y={640} size={44} color={C.dim}>the “I” is the clue · in all others, the buyer insures (if anyone does)</Big>
								</>
							)}</Fd> : null}
							{vis(f, 'N38', 'N40') ? <Fd o={fo(f, 'N38', 'N40')}>{(
								<>
									{[{code: 'CIF', cl: 'Institute Cargo Clauses (C)', d: 'minimum, basic cover', w: 0.6, x: 200}, {code: 'CIP', cl: 'Institute Cargo Clauses (A)', d: 'wide, all-risks cover', w: 1, x: 1000}].map((u, i) => (
										<div key={u.code} style={{position: 'absolute', left: u.x, top: 170, width: 720, opacity: tw(f, (i ? at('N38', 'clauses', 0.35, 1) : at('N38', 'clauses', 0.7, 2)) - 4, (i ? at('N38', 'clauses', 0.35, 1) : at('N38', 'clauses', 0.7, 2)) + 14), textAlign: 'center'}}>
											<svg width={720} height={300} viewBox="0 0 720 300">
												<path d={`M ${360 - 300 * u.w} 220 Q 360 ${220 - 260 * u.w} ${360 + 300 * u.w} 220 Z`} fill={i ? C.market : C.dim} />
												<line x1={360} y1={220} x2={360} y2={290} stroke={C.text} strokeWidth={8} />
											</svg>
											<div style={{fontFamily: F.mono, fontWeight: 700, fontSize: 70, color: C.text}}>{u.code}</div>
											<div style={{fontFamily: F.sans, fontWeight: 700, fontSize: 40, color: i ? C.market : C.text}}>{u.cl}</div>
											<div style={{fontFamily: F.sans, fontSize: 32, color: C.dim}}>{u.d}</div>
										</div>
									))}
									<Label x={960} y={800} w={1500} align="center" size={34} color={C.dim}>Incoterms® 2020 · unless the parties agree otherwise</Label>
									{f >= S('N39') ? <Label x={960} y={870} w={1600} align="center" size={36} color={C.text} o={tw(f, sk('N39', 2) - 4, sk('N39', 2) + 12)}>ICC: CIF is used a lot for bulk commodities at sea · CIP more for manufactured goods</Label> : null}
								</>
							)}</Fd> : null}
							{vis(f, 'N40', 'N42') ? <Fd o={fo(f, 'N40', 'N42')}>{(
								<Card x={260} y={200} w={1400} h={480} border={C.market}>
									<Label x={700} y={50} w={1300} align="center" size={46} color={C.dim}>Minimum cover</Label>
									<Label x={700} y={120} w={1300} align="center" size={130} weight={700} mono color={C.market}>110%</Label>
									<Label x={700} y={290} w={1300} align="center" size={40}>of the contract price · in the contract currency</Label>
									{f >= S('N41') ? <Label x={700} y={370} w={1300} align="center" size={36} color={C.undo} weight={700} o={tw(f, sk('N41', 1) - 4, sk('N41', 1) + 12)}>UCP 600 Art. 28(f)(ii): LC silent → at least 110% of the CIF or CIP value</Label> : null}
								</Card>
							)}</Fd> : null}
						</>
					)}
				</Scene>
				<Scene a={S('N42')} b={S('N48')}>
					{(f) => {
						const seq = [
							...typeKeys(at('N43', 'forty', 0.1), ['4', '5', '0', '0', '0', '+', '2', '4', '0', '0', '+', '6', '0', '0', '='], {5: '45000', 10: '47400', 14: '48000'}, 8),
							...typeKeys(at('N44', 'forty', 0.25), ['4', '8', '0', '0', '0', '×', '1', '.', '1', '='], {5: '48000', 9: '52800'}, 8),
							...typeKeys(S('N46') + 20, ['3', '0', '0', '0', '0', '×', '1', '.', '1', '='], {5: '30000', 9: '33000'}, 8),
							...typeKeys(at('N47', 'forty', 0.7), ['4', '5', '0', '0', '0', '×', '1', '.', '1', '='], {5: '45000', 9: '49500'}, 8),
						];
						const bar = (label: string, v: number, c: string, from: number, i: number) => (
							<div key={label} style={{display: 'flex', alignItems: 'center', gap: 20, marginTop: 18, opacity: tw(f, from, from + 12)}}>
								<div style={{width: 300, fontFamily: F.sans, fontWeight: 700, fontSize: 36, color: C.text}}>{label}</div>
								<div style={{height: 54, width: Math.max(18, (v / 48000) * 560), background: c, borderRadius: 10}} />
								<div style={{fontFamily: F.mono, fontWeight: 700, fontSize: 38, color: c}}>{v.toLocaleString('en-US')}</div>
							</div>
						);
						return (
							<>
								<div style={{position: 'absolute', left: 80, top: 120, width: 1120}}>
									<div style={{fontFamily: F.sans, fontSize: 32, color: C.dim}}>Tiruppur → Rotterdam · USD (illustrative)</div>
									{bar('FOB value', 45000, C.text, at('N42', 'forty', 0.35), 0)}
									{bar('+ Freight', 2400, COST, at('N42', 'freight', 0.7), 1)}
									{bar('+ Insurance', 600, C.market, at('N42', 'insurance', 0.9), 2)}
									{f >= S('N43') ? bar('= CIF price', 48000, C.undo, at('N43', 'forty', 0.75, 2), 3) : null}
									{f >= at('N43', 'cost', 0.85) ? <div style={{marginTop: 26, fontFamily: F.sans, fontWeight: 700, fontSize: 40, color: C.undo}}>Cost + Insurance + Freight · the name is the formula</div> : null}
								</div>
								{f >= S('N44') ? (
									<Card x={80} y={640} w={1120} h={150} border={C.market}>
										<Label x={40} y={22} size={34} color={C.dim}>{f < S('N45') ? 'Minimum cover: 48,000 × 1.1' : f < S('N47') ? 'CIP EUR 30,000 × 1.1' : '✗ 110% of FOB: 45,000 × 1.1'}</Label>
										<Label x={40} y={70} size={56} weight={700} mono color={f >= S('N47') ? RISK : C.text}>{f < S('N45') ? 'USD 52,800' : f < S('N46') ? '?' : f < S('N47') ? 'EUR 33,000' : '49,500 · wrong base'}</Label>
									</Card>
								) : null}
								<Calculator f={f} x={1310} y={140} seq={seq} />
								<PauseCard f={f} from={E('N45') - 30} to={H('N45')} q="CIP EUR 30,000: minimum cover?" timerFrom={E('N45')} timerFrames={by.N45.hold} />
								{f >= S('N47') ? <TrapNote x={80} y={830} w={1120} p={tw(f, S('N47'), S('N47') + 15)}>110% of the CIF/CIP value, never of FOB</TrapNote> : null}
							</>
						);
					}}
				</Scene>
				<Scene a={S('N48')} b={ch4}>
					{(f) => (
						<>
							{vis(f, 'N48', 'N49') ? <Fd o={fo(f, 'N48', 'N49')}>{(
								<>
									<Big y={140} size={50} color={C.dim}>At the LC desk: does the seller send an insurance document?</Big>
									<Card x={160} y={280} w={760} h={360} border={C.buy} o={tw(f, sk('N48', 1) - 4, sk('N48', 1) + 12)}><Label x={380} y={40} w={700} align="center" size={60} weight={700} mono>CIF · CIP</Label><Label x={380} y={160} w={700} align="center" size={44} weight={700} color={C.buy}>✓ Insurance document required</Label></Card>
									<Card x={1000} y={280} w={760} h={360} border={C.line} o={tw(f, at('N48', 'fob', 0.6), at('N48', 'fob', 0.6) + 12)}><Label x={380} y={40} w={700} align="center" size={60} weight={700} mono>FOB · FCA …</Label><Label x={380} y={160} w={700} align="center" size={44} weight={700} color={C.dim}>Buyer insures · none from the seller</Label></Card>
								</>
							)}</Fd> : null}
							{vis(f, 'N49', 'N49a') ? <Fd o={fo(f, 'N49', 'N49a')}>{(
								<Card x={260} y={240} w={1400} h={380} border={C.undo}>
									<Label x={700} y={50} w={1300} align="center" size={50} weight={700}>Insurance date ≤ shipment date</Label>
									<Label x={700} y={150} w={1300} align="center" size={38} color={C.dim}>unless it shows cover effective from the shipment date or earlier</Label>
									<Label x={700} y={260} w={1300} align="center" size={34} color={C.undo}>UCP 600 Art. 28(e)</Label>
								</Card>
							)}</Fd> : null}
							{f >= S('N49a') ? (
								<>
									<Doc x={420} y={220} title="Bill of lading" sub="“freight prepaid”" o={tw(f, at('N49a', 'prepaid', 0.45) - 4, at('N49a', 'prepaid', 0.45) + 12)} />
									<Label x={530} y={560} w={500} align="center" size={36} weight={700} color={C.market}>usually C and D rules</Label>
									<Doc x={1260} y={220} title="Bill of lading" sub="“freight collect”" o={tw(f, at('N49a', 'collect', 0.7), at('N49a', 'collect', 0.7) + 12)} />
									<Label x={1370} y={560} w={500} align="center" size={36} weight={700} color={C.dim} o={tw(f, at('N49a', 'collect', 0.7), at('N49a', 'collect', 0.7) + 12)}>usually F rules</Label>
									<Label x={960} y={720} w={1500} align="center" size={32} color={C.dim}>a practice hint, not a rule</Label>
								</>
							) : null}
						</>
					)}
				</Scene>

				{/* ---------------- Recap and practice ---------------- */}
				<ChapterStrip f={f} from={W0('N50')} n={4} title="Recap and practice" />
				<Scene a={ch4} b={S('N58')}>
					{(f) => (
						<>
							{vis(f, 'N50', 'N51') ? <Fd o={fo(f, 'N50', 'N51')}>{<Road f={f} y={600} rule="CIF" baton={3} rp={tw(f, W0('N50'), W0('N50') + 30)} costTo={4} cp={tw(f, W0('N50'), E('N50'))} hi={[3]} note="CIF: risk on board at Chennai · LC pays · buyer claims on the policy" />}</Fd> : null}
							{f >= S('N51') ? (
								<div style={{position: 'absolute', left: 160, right: 160, top: 140}}>
									{[{q: 'N52', a: 'N53', t: '1 · Most obligations on the seller?', ans: 'DDP · Delivered Duty Paid'}, {q: 'N54', a: 'N55', t: '2 · Which rule replaced DAT in 2020?', ans: 'DPU · Delivered at Place Unloaded'}, {q: 'N56', a: 'N57', t: '3 · CIF USD 1,25,400, LC silent: minimum cover?', ans: '125400 × 1.1 = USD 1,37,940'}].map((x) => (
										f >= S(x.q) ? (
											<div key={x.q} style={{background: C.card, border: `3px solid ${f >= S(x.a) ? C.buy : C.line}`, borderRadius: 24, padding: '22px 34px', marginBottom: 26}}>
												<div style={{fontFamily: F.sans, fontWeight: 700, fontSize: 46, color: C.text}}>{x.t}</div>
												<div style={{fontFamily: F.mono, fontWeight: 700, fontSize: 42, color: C.buy, minHeight: 52, opacity: f >= S(x.a) ? 1 : 0}}>{x.ans}</div>
											</div>
										) : null
									))}
								</div>
							) : null}
							{['N52', 'N54', 'N56'].map((q) => <PauseCard key={q} f={f} from={E(q)} to={H(q)} q="Your answer?" timerFrom={E(q)} timerFrames={by[q].hold} />)}
						</>
					)}
				</Scene>
				<Scene a={S('N58')} b={S('N62')}>
					{(f) => (
						<>
							{(() => {
								const steps: [string, number, number | undefined][] = [['N58', 2, 1], ['N59', 4, 3], ['N60', 4, 3], ['N61', 6, 5]];
								let shown = 0, lit: number | undefined, from = S('N58');
								for (const [id, n, l] of steps) if (f >= S(id)) { if (n > shown) from = S(id); shown = n; lit = l; }
								return <GrowMap {...MAP} shown={shown} lit={lit} p={tw(f, from, from + 40)} newFrom={Math.max(0, shown - 2)} />;
							})()}
							<Label x={140} y={40} size={30} color={C.dim}>THE WHOLE LESSON ON ONE PAGE · Incoterms® 2020 (ICC) · UCP 600 · as at 31 Dec 2026</Label>
						</>
					)}
				</Scene>
				<Scene a={S('N62')} b={TOTAL}>
					{(f) => (
						<>
							<GrowMap {...MAP} shown={6} />
							<Label x={140} y={40} size={30} color={C.dim}>NEXT CLASS · the LC and the UCP articles the exam asks</Label>
							{f >= S('N62a') ? <Note x={1300} y={860} size={56} color={P.risk} rot={-4} p={tw(f, S('N62a'), S('N62a') + 30)}>draw the road tonight!</Note> : null}
						</>
					)}
				</Scene>
				<Notes f={f} />
			</Drift>
			<Captions f={f} />
			{/* flow engine (PLAYBOOK §5d): one continuous track = the owner's recording + the ducked music bed */}
			<Audio src={staticFile((lines as unknown as {voice: string}).voice)} />
		</Page>
	);
};
