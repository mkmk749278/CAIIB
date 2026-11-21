// Module A pictures (A00 first): the counter, the three-pocket coat, the world strip, the four calendar boxes,
// the see-saw with its dial, the ledger, India's road and RBI's hand. Ink on the notebook page (kit/look.tsx):
// neutral scenery; signal colours only for their one meaning (red = wrong/risk, green = correct, gold = marker).
import React from 'react';
import {P, FT} from './look';
import {tw} from '../theme';

const INK = {stroke: P.ink, strokeWidth: 4, strokeLinejoin: 'round' as const, strokeLinecap: 'round' as const};
const hand = (size: number, color = P.ink): React.CSSProperties => ({fontFamily: FT.hand, fontWeight: 700, fontSize: size, color, lineHeight: 1.05});
const sans = (size: number, color = P.ink, weight = 700): React.CSSProperties => ({fontFamily: FT.sans, fontWeight: weight, fontSize: size, color, lineHeight: 1.15});

/** Absolutely placed box that fades and rises in with p (0..1) and fades out with q (1 → 0). */
export const Pop: React.FC<{x: number; y: number; p: number; q?: number; w?: number; center?: boolean; rot?: number; children: React.ReactNode; style?: React.CSSProperties}> = ({x, y, p, q = 1, w, center, rot = 0, children, style}) => {
	const o = Math.min(p, q);
	if (o <= 0) return null;
	return (
		<div style={{position: 'absolute', left: x, top: y + 18 * (1 - p), width: w, opacity: o, transform: `${center ? 'translateX(-50%) ' : ''}rotate(${rot}deg) scale(${0.94 + 0.06 * p})`, ...style}}>{children}</div>
	);
};

/** A white tag with an ink border (labels on pictures). */
export const Tag2: React.FC<{children: React.ReactNode; size?: number; color?: string; bg?: string; border?: string; pad?: string; glow?: number}> = ({children, size = 36, color = P.ink, bg = '#fff', border = P.ink, pad = '8px 18px', glow = 0}) => (
	<div style={{display: 'inline-block', background: bg, border: `3px solid ${border}`, borderRadius: 14, padding: pad, ...sans(size, color), whiteSpace: 'nowrap', boxShadow: `5px 5px 0 rgba(31,42,55,0.12), 0 0 0 ${10 * glow}px rgba(242,179,61,${0.8 * glow})`}}>{children}</div>
);

/** Handwritten text block. */
export const Hand: React.FC<{size?: number; color?: string; children: React.ReactNode; style?: React.CSSProperties}> = ({size = 52, color = P.ink, children, style}) => <div style={{...hand(size, color), whiteSpace: 'nowrap', ...style}}>{children}</div>;

/** A faceless figure (head and shoulders), as in kit Thoughts. */
export const Fig: React.FC<{x: number; y: number; s?: number; color?: string; o?: number; label?: string}> = ({x, y, s = 1, color = '#B8A27A', o = 1, label}) => (
	<div style={{position: 'absolute', left: x - 90 * s, top: y, opacity: o, width: 180 * s}}>
		<svg width={180 * s} height={200 * s} viewBox="0 0 180 200">
			<circle cx={90} cy={56} r={44} fill={color} />
			<path d="M8 200 C 8 130, 172 130, 172 200 Z" fill={color} />
		</svg>
		{label ? <div style={{...sans(28 * Math.max(1, s), P.soft), textAlign: 'center', marginTop: 4}}>{label}</div> : null}
	</div>
);

/** Speech bubble (white, ink border); tail at the bottom-left or bottom-right. */
export const Speech: React.FC<{x: number; y: number; p: number; q?: number; w?: number; tail?: 'left' | 'right'; children: React.ReactNode}> = ({x, y, p, q = 1, w = 520, tail = 'left', children}) => (
	<Pop x={x} y={y} p={p} q={q} w={w}>
		<div style={{position: 'relative', background: '#fff', border: `4px solid ${P.ink}`, borderRadius: 34, padding: '18px 28px', ...hand(54), textAlign: 'center'}}>
			{children}
			<svg width={60} height={44} style={{position: 'absolute', bottom: -40, [tail]: 60}} viewBox="0 0 60 44"><path d={tail === 'left' ? 'M4 0 L10 40 L44 0' : 'M56 0 L50 40 L16 0'} fill="#fff" stroke={P.ink} strokeWidth={4} strokeLinejoin="round" /><rect x={8} y={-6} width={40} height={8} fill="#fff" /></svg>
		</div>
	</Pop>
);

/** A red cross drawn over a thing (p = 0..1 draw-on). */
export const Cross: React.FC<{x: number; y: number; w: number; h: number; p: number}> = ({x, y, w, h, p}) => (
	<svg style={{position: 'absolute', left: x, top: y, overflow: 'visible'}} width={w} height={h}>
		<path d={`M0 0 L${w} ${h}`} stroke={P.risk} strokeWidth={12} strokeLinecap="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - Math.min(1, p * 2)} />
		<path d={`M${w} 0 L0 ${h}`} stroke={P.risk} strokeWidth={12} strokeLinecap="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - Math.max(0, p * 2 - 1)} />
	</svg>
);

/** A green tick. */
export const Tick: React.FC<{x: number; y: number; s?: number; p: number}> = ({x, y, s = 1, p}) => (
	<svg style={{position: 'absolute', left: x, top: y, overflow: 'visible'}} width={80 * s} height={70 * s} viewBox="0 0 80 70">
		<path d="M6 38 L30 62 L74 8" fill="none" stroke={P.ok} strokeWidth={12} strokeLinecap="round" strokeLinejoin="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - p} />
	</svg>
);

/** The branch counter from the side, a rate board on the wall behind, a window onto the market. */
export const Counter: React.FC<{x?: number; y?: number; s?: number; board?: string; boardP?: number; boardGlow?: number; window?: number}> = ({x = 0, y = 0, s = 1, board, boardP = 1, boardGlow = 0, window = 1}) => (
	<svg style={{position: 'absolute', left: x, top: y, overflow: 'visible'}} width={1000 * s} height={720 * s} viewBox="0 0 1000 720">
		{/* wall, window onto the market (screens and lines) */}
		<rect x={40} y={20} width={920} height={540} rx={10} fill={P.wall} stroke={P.ink} strokeWidth={4} />
		<g opacity={window}>
			<rect x={80} y={70} width={340} height={230} rx={8} fill="#DDE7EA" stroke={P.ink} strokeWidth={4} />
			{[[120, 110], [250, 150], [150, 220], [300, 230]].map(([a, b], i) => <rect key={i} x={a} y={b} width={80} height={50} rx={6} fill="#fff" stroke={P.steel} strokeWidth={3} />)}
			<path d="M200 135 L250 175 M230 245 L300 255 M190 160 L190 220" stroke={P.steel} strokeWidth={3} strokeDasharray="6 6" />
			<text x={250} y={330} textAnchor="middle" style={{...hand(34, P.soft)}}>the market, outside</text>
		</g>
		{/* rate board */}
		<g transform="translate(520,70)">
			<rect x={-8} y={-8} width={396} height={246} rx={20} fill="none" stroke={P.gold} strokeWidth={10 * boardGlow} opacity={boardGlow} />
			<rect x={0} y={0} width={380} height={230} rx={14} fill={P.ink} />
			<text x={24} y={46} style={{fontFamily: FT.mono, fontSize: 30, fill: '#C9CED6', letterSpacing: 3}}>USD / INR</text>
			<text x={190} y={160} textAnchor="middle" style={{fontFamily: FT.mono, fontWeight: 700, fontSize: 92, fill: '#FFD27A'}} opacity={boardP}>{board ?? ''}</text>
		</g>
		{/* the counter */}
		<rect x={0} y={480} width={1000} height={46} rx={8} fill={P.roof} stroke={P.ink} strokeWidth={4} />
		<rect x={60} y={526} width={880} height={190} fill={P.box} stroke={P.ink} strokeWidth={4} />
		<path d="M480 526 V716" stroke={P.ink} strokeWidth={3} opacity={0.5} />
	</svg>
);

/** A receipt slip. */
export const Receipt: React.FC<{x: number; y: number; p: number; q?: number; s?: number; rate: string; when: string; stamp?: number}> = ({x, y, p, q = 1, s = 1, rate, when, stamp = 0}) => (
	<Pop x={x} y={y} p={p} q={q} rot={-4}>
		<div style={{transform: `scale(${s})`, transformOrigin: '0 0', width: 330, background: '#fff', border: `3px solid ${P.ink}`, borderRadius: 8, padding: '16px 22px', boxShadow: '6px 6px 0 rgba(31,42,55,0.15)', position: 'relative'}}>
			<div style={sans(24, P.soft)}>RECEIPT · USD/INR</div>
			<div style={{fontFamily: FT.mono, fontWeight: 700, fontSize: 64, color: P.ink}}>{rate}</div>
			<div style={sans(24, P.soft, 600)}>{when} · illustrative</div>
			{stamp > 0 ? <div style={{position: 'absolute', right: -30, top: -26, opacity: stamp, transform: `rotate(12deg) scale(${1.4 - 0.4 * stamp})`, border: `4px solid ${P.risk}`, borderRadius: 10, padding: '2px 12px', ...sans(30, P.risk), background: 'rgba(255,255,255,0.9)'}}>₹ fell</div> : null}
		</div>
	</Pop>
);

/** The coat with three pockets (FEMA s. 2(n)). fill = how many pockets are filled (0..3, fractional for draw-on). */
export const Coat: React.FC<{x: number; y: number; lit?: number; fill?: number; texts: string[]; glow?: number[]; globe?: number}> = ({x, y, lit = 0, fill = 0, texts, glow = [0, 0, 0], globe = 0}) => {
	const pk = [[110, 330], [330, 330], [220, 520]];
	return (
		<div style={{position: 'absolute', left: x, top: y, width: 560, height: 700}}>
			<svg width={560} height={700} viewBox="0 0 560 700" style={{position: 'absolute', inset: 0}}>
				<path d="M160 40 L220 20 Q280 70 340 20 L400 40 L520 140 L470 230 L430 200 L430 680 L130 680 L130 200 L90 230 L40 140 Z" fill="#CBBFA3" {...INK} />
				<path d="M220 20 L280 300 L340 20" fill="none" {...INK} />
				<path d="M280 300 V680" {...INK} strokeWidth={3} />
				{[360, 430, 500].map((cy) => <circle key={cy} cx={296} cy={cy} r={7} fill={P.ink} />)}
				{pk.map(([px, py], i) => (
					<g key={i} opacity={Math.max(0.25, Math.min(1, lit - i))}>
						<rect x={px - 20 - 12 * glow[i]} y={py - 20 - 12 * glow[i]} width={160 + 24 * glow[i]} height={130 + 24 * glow[i]} rx={20} fill={P.gold} opacity={0.8 * glow[i]} />
						<rect x={px - 10} y={py - 10} width={140} height={110} rx={10} fill={P.wall} {...INK} />
						<path d={`M${px - 10} ${py + 14} H${px + 130}`} {...INK} strokeWidth={3} />
						<text x={px + 60} y={py + 70} textAnchor="middle" style={{...sans(48)}}>{i + 1}</text>
					</g>
				))}
				{globe > 0 ? <g opacity={globe} transform="translate(370,560)"><circle r={34} fill="#DDE7EA" {...INK} /><path d="M-34 0 H34 M0 -34 C 20 -14, 20 14, 0 34 M0 -34 C -20 -14, -20 14, 0 34" fill="none" {...INK} strokeWidth={3} /></g> : null}
			</svg>
			{texts.map((t, i) => {
				const p = Math.max(0, Math.min(1, fill - i));
				const pos = [[-470, 430], [560, 290], [560, 500]][i];
				return p > 0 ? (
					<div key={i} style={{position: 'absolute', left: pos[0], top: pos[1], width: 450, opacity: p, transform: `translateY(${12 * (1 - p)}px)`, background: '#fff', border: `3px solid ${P.ink}`, borderRadius: 14, padding: '10px 16px', ...sans(30), boxShadow: '5px 5px 0 rgba(31,42,55,0.12)'}}>
						<span style={{...sans(26, P.soft), letterSpacing: 2}}>POCKET {i + 1} · </span>{t}
					</div>
				) : null;
			})}
		</div>
	);
};

/** Small currency note. */
export const Bill: React.FC<{code: string; x: number; y: number; p: number; rot?: number}> = ({code, x, y, p, rot = 0}) => (
	<Pop x={x} y={y} p={p} rot={rot}>
		<div style={{width: 170, height: 92, background: '#E4EAD8', border: `3px solid ${P.ink}`, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', ...sans(40), fontFamily: FT.mono, boxShadow: '4px 4px 0 rgba(31,42,55,0.15)'}}>{code}</div>
	</Pop>
);

/** The world strip: centres light east to west as the sun moves (x positions from right = east). */
export const CENTRES = [
	{n: 'Sydney', x: 1700}, {n: 'Tokyo', x: 1530}, {n: 'Singapore', x: 1340}, {n: 'Mumbai', x: 1140},
	{n: 'Dubai', x: 960}, {n: 'London', x: 640}, {n: 'New York', x: 300},
];
export const WorldStrip: React.FC<{y: number; lit: number; sun: number; glow?: number[]; o?: number}> = ({y, lit, sun, glow = [], o = 1}) => (
	<svg style={{position: 'absolute', left: 0, top: y, opacity: o}} width={1920} height={260} viewBox="0 0 1920 260">
		<rect x={180} y={90} width={1640} height={90} rx={45} fill={P.sea} opacity={0.55} />
		{/* the sun moves east → west */}
		<g transform={`translate(${1780 - sun * 1520}, 40)`}>
			<circle r={30} fill={P.gold} stroke={P.ink} strokeWidth={3} />
			{[...Array(8)].map((_, i) => <line key={i} x1={0} y1={-40} x2={0} y2={-52} stroke={P.ink} strokeWidth={4} strokeLinecap="round" transform={`rotate(${i * 45})`} />)}
		</g>
		{CENTRES.map((c, i) => {
			const v = Math.max(0, Math.min(1, lit - i));
			const g = glow[i] ?? 0;
			return (
				<g key={c.n}>
					{g > 0 ? <circle cx={c.x} cy={135} r={30 + 26 * g} fill={P.gold} opacity={0.85 * g} /> : null}
					<circle cx={c.x} cy={135} r={22} fill={v > 0.5 ? P.ink : '#fff'} stroke={P.ink} strokeWidth={4} />
					<text x={c.x} y={225} textAnchor="middle" style={{...sans(32)}} opacity={0.35 + 0.65 * v}>{c.n}</text>
				</g>
			);
		})}
		<text x={190} y={235} style={{...hand(38, P.soft)}}>west</text>
		<text x={1830} y={235} textAnchor="end" style={{...hand(38, P.soft)}}>east</text>
	</svg>
);

/** Four calendar boxes: Today · Tomorrow · Day 2 · Later. */
export const Calendar4: React.FC<{x: number; y: number; reveal: number; texts: string[]; fill: number; hi?: number; glow?: number[]; w?: number}> = ({x, y, reveal, texts, fill, hi, glow = [], w = 360}) => (
	<div style={{position: 'absolute', left: x, top: y, display: 'flex', gap: 28}}>
		{['Today', 'Tomorrow', 'Day 2', 'Later'].map((d, i) => {
			const v = Math.max(0, Math.min(1, reveal - i));
			const t = Math.max(0, Math.min(1, fill - i));
			const g = glow[i] ?? 0;
			return (
				<div key={d} style={{width: w, opacity: v, transform: `translateY(${16 * (1 - v)}px)`, background: '#fff', border: `4px solid ${P.ink}`, borderRadius: 16, overflow: 'hidden', boxShadow: `6px 6px 0 rgba(31,42,55,0.12), 0 0 0 ${12 * g}px rgba(242,179,61,${0.8 * g})`, outline: hi === i ? `6px solid ${P.ink}` : undefined}}>
					<div style={{background: hi === i ? P.ink : P.risk, color: '#fff', ...sans(34, '#fff'), padding: '8px 0', textAlign: 'center'}}>{d}</div>
					<div style={{minHeight: 150, padding: '14px 16px', ...hand(50), textAlign: 'center', opacity: t}}>{texts[i]}</div>
				</div>
			);
		})}
	</div>
);

/** The see-saw: tilt −1 (left end down: dollars wanted) … +1 (right end down: dollars offered); dial above the pivot. */
export const SeeSaw: React.FC<{x: number; y: number; s?: number; tilt: number; left?: string; right?: string; lp?: number; rp?: number; dial?: number; dialText?: string; glow?: number; leftItems?: string[]; rightItems?: string[]; li?: number; ri?: number}> = ({x, y, s = 1, tilt, left, right, lp = 1, rp = 1, dial = 1, dialText = '₹ per $', glow = 0, leftItems = [], rightItems = [], li = 0, ri = 0}) => {
	const ang = tilt * 12;
	const needle = -tilt * 50; // more ₹ per $ (left down) → needle right/up
	return (
		<svg style={{position: 'absolute', left: x, top: y, overflow: 'visible'}} width={1200 * s} height={560 * s} viewBox="0 0 1200 560">
			{glow > 0 ? <ellipse cx={600} cy={360} rx={620} ry={150} fill={P.gold} opacity={0.35 * glow} /> : null}
			{/* dial */}
			<g transform="translate(600,120)" opacity={dial}>
				<path d="M-120 0 A120 120 0 0 1 120 0" fill="#fff" stroke={P.ink} strokeWidth={4} />
				<text x={-118} y={30} style={{...sans(22, P.soft)}}>₹ stronger</text>
				<text x={118} y={30} textAnchor="end" style={{...sans(22, P.soft)}}>₹ weaker</text>
				<line x1={0} y1={0} x2={0} y2={-100} stroke={P.ink} strokeWidth={6} strokeLinecap="round" transform={`rotate(${needle})`} />
				<circle r={10} fill={P.ink} />
				<text x={0} y={-130} textAnchor="middle" style={{...sans(32)}}>{dialText}</text>
			</g>
			{/* pivot */}
			<path d="M600 380 L540 500 H660 Z" fill={P.roof} {...INK} />
			<rect x={420} y={500} width={360} height={20} rx={6} fill={P.steel} {...INK} />
			<g transform={`rotate(${ang} 600 380)`}>
				<rect x={100} y={366} width={1000} height={28} rx={10} fill={P.box} {...INK} />
				{/* left pan: want $ */}
				<g opacity={lp}>
					<path d="M110 366 V250 H360 V366" fill="none" {...INK} strokeWidth={3} opacity={0.5} />
					<text x={235} y={240} textAnchor="middle" style={{...sans(40)}}>want $</text>
					{leftItems.map((t, i) => <text key={t} x={235} y={290 + i * 34} textAnchor="middle" style={{...hand(36, P.soft)}} opacity={Math.max(0, Math.min(1, li - i))}>{t}</text>)}
				</g>
				<g opacity={rp}>
					<path d="M840 366 V250 H1090 V366" fill="none" {...INK} strokeWidth={3} opacity={0.5} />
					<text x={965} y={240} textAnchor="middle" style={{...sans(40)}}>offer $</text>
					{rightItems.map((t, i) => <text key={t} x={965} y={290 + i * 34} textAnchor="middle" style={{...hand(36, P.soft)}} opacity={Math.max(0, Math.min(1, ri - i))}>{t}</text>)}
				</g>
				{left ? <text x={235} y={440} textAnchor="middle" style={{...hand(40)}}>{left}</text> : null}
				{right ? <text x={965} y={440} textAnchor="middle" style={{...hand(40)}}>{right}</text> : null}
			</g>
		</svg>
	);
};

/** India's account book with the world: two columns. */
export const Ledger: React.FC<{x: number; y: number; p: number; q?: number; c1: number; c2: number}> = ({x, y, p, q = 1, c1, c2}) => (
	<Pop x={x} y={y} p={p} q={q}>
		<div style={{width: 1100, background: '#FBF7EC', border: `4px solid ${P.ink}`, borderRadius: 14, boxShadow: '8px 8px 0 rgba(31,42,55,0.15)'}}>
			<div style={{...sans(40), padding: '14px 26px', borderBottom: `3px solid ${P.ink}`}}>Balance of payments · India ↔ world</div>
			<div style={{display: 'flex'}}>
				{[{h: 'Current account', t: 'trade · services · income · remittances', v: c1}, {h: 'Capital account', t: 'investment · loans, in and out', v: c2}].map((c, i) => (
					<div key={i} style={{flex: 1, padding: '18px 26px', borderLeft: i ? `3px solid ${P.ink}` : undefined, minHeight: 190}}>
						<div style={{...sans(36), opacity: Math.min(1, c.v * 2)}}>{c.h}</div>
						<div style={{...hand(48), marginTop: 10, opacity: Math.max(0, c.v * 2 - 1), whiteSpace: 'normal'}}>{c.t}</div>
					</div>
				))}
			</div>
		</div>
	</Pop>
);

/** India's road: five milestone posts left to right (x from 200 to 1720). */
export const POSTS = [
	{t: 'par value', s: 'Bretton Woods'},
	{t: '1971', s: 'linked to £ sterling'},
	{t: 'Sept 1975', s: 'basket peg'},
	{t: 'Mar 1992', s: 'LERMS · dual rate'},
	{t: 'Mar 1993', s: 'unified'},
];
export const Road5: React.FC<{y: number; reveal: number; hi?: number; glow?: number; tag?: number}> = ({y, reveal, hi, glow = 0, tag = 0}) => {
	const xs = [250, 600, 950, 1300, 1650];
	return (
		<svg style={{position: 'absolute', left: 0, top: y, overflow: 'visible'}} width={1920} height={360} viewBox="0 0 1920 360">
			<path d="M120 250 C 500 230, 900 270, 1820 240" stroke={P.land} strokeWidth={60} fill="none" strokeLinecap="round" />
			<path d="M120 250 C 500 230, 900 270, 1820 240" stroke="#fff" strokeWidth={5} strokeDasharray="22 22" fill="none" />
			{POSTS.map((po, i) => {
				const v = Math.max(0, Math.min(1, reveal - i));
				if (v <= 0) return null;
				const g = i === 4 ? glow : 0;
				return (
					<g key={i} opacity={v} transform={`translate(${xs[i]}, ${-20 * (1 - v)})`}>
						{g > 0 ? <rect x={-150} y={20} width={300} height={140} rx={20} fill={P.gold} opacity={0.8 * g} /> : null}
						<line x1={0} y1={150} x2={0} y2={245} stroke={P.ink} strokeWidth={6} />
						<rect x={-140} y={30} width={280} height={120} rx={14} fill={hi === i ? P.ink : '#fff'} {...INK} />
						<text x={0} y={80} textAnchor="middle" fill={hi === i ? '#fff' : P.ink} style={{...sans(38)}}>{po.t}</text>
						<text x={0} y={128} textAnchor="middle" fill={hi === i ? '#fff' : P.soft} style={{...hand(38)}}>{po.s}</text>
					</g>
				);
			})}
			{tag > 0 ? <g opacity={tag} transform="translate(1650, 305)"><rect x={-170} y={-24} width={340} height={56} rx={28} fill={P.ok} /><text x={0} y={14} textAnchor="middle" fill="#fff" style={{...sans(32)}}>market-determined</text></g> : null}
		</svg>
	);
};

/** RBI's hand: an open hand reaching in from the top (a simple glove shape). */
export const Hand2: React.FC<{x: number; y: number; p: number; label?: string}> = ({x, y, p, label = 'RBI'}) => (
	<svg style={{position: 'absolute', left: x, top: y - 160 * (1 - p), opacity: p, overflow: 'visible'}} width={240} height={300} viewBox="0 0 240 300">
		<rect x={70} y={-200} width={100} height={260} fill="#9DB1C1" {...INK} />
		<path d="M60 60 H180 V150 Q180 200 150 220 L150 270 Q140 290 128 270 L128 230 L118 230 L118 285 Q106 300 96 285 L96 230 L86 230 L86 270 Q74 288 64 270 L64 222 Q40 200 40 160 L40 110 Q40 90 60 100 Z" fill="#E8C9A6" {...INK} />
		<text x={120} y={0} textAnchor="middle" style={{...sans(40)}}>{label}</text>
	</svg>
);

/** A clock band 11.30–12.30 with a random 15-minute slice lit. */
export const ClockBand: React.FC<{x: number; y: number; p: number; slice: number}> = ({x, y, p, slice}) => (
	<Pop x={x} y={y} p={p}>
		<svg width={900} height={170} viewBox="0 0 900 170">
			<rect x={40} y={40} width={820} height={70} rx={12} fill="#fff" {...INK} />
			{[0, 1, 2, 3, 4].map((i) => <line key={i} x1={40 + i * 205} y1={40} x2={40 + i * 205} y2={110} stroke={P.ink} strokeWidth={2} opacity={0.4} />)}
			<rect x={40 + 2 * 205} y={44} width={205} height={62} fill={P.gold} opacity={0.9 * slice} />
			<text x={40} y={150} textAnchor="middle" style={{...sans(30)}}>11.30</text>
			<text x={450} y={150} textAnchor="middle" style={{...sans(30, P.soft)}}>12.00</text>
			<text x={860} y={150} textAnchor="middle" style={{...sans(30)}}>12.30</text>
			<text x={40 + 2.5 * 205} y={30} textAnchor="middle" style={{...hand(34)}} opacity={slice}>random 15 min</text>
		</svg>
	</Pop>
);

/** A card with a title and lines (rule cards, regimes, practice). */
export const InfoCard: React.FC<{title?: string; tone?: 'plain' | 'ink' | 'trap' | 'ok'; w?: number; children: React.ReactNode; glow?: number; size?: number}> = ({title, tone = 'plain', w = 520, children, glow = 0, size = 40}) => {
	const bg = tone === 'ink' ? P.ink : tone === 'trap' ? '#FFF4C9' : '#fff';
	const fg = tone === 'ink' ? '#fff' : P.ink;
	return (
		<div style={{width: w, background: bg, border: `4px solid ${P.ink}`, borderLeft: tone === 'trap' ? `16px solid ${P.gold}` : `4px solid ${P.ink}`, borderRadius: 18, padding: '16px 24px', boxShadow: `7px 7px 0 ${tone === 'ok' ? P.ok : 'rgba(31,42,55,0.15)'}, 0 0 0 ${12 * glow}px rgba(242,179,61,${0.8 * glow})`}}>
			{title ? <div style={{...sans(28, tone === 'ink' ? '#C9CED6' : tone === 'trap' ? '#9A5B00' : P.soft), letterSpacing: 3, marginBottom: 6}}>{title}</div> : null}
			<div style={{...sans(size, fg), whiteSpace: 'normal'}}>{children}</div>
		</div>
	);
};

/** Price tag "₹ per 1 USD". */
export const PriceTag: React.FC<{text?: string; sub?: string}> = ({text = '₹ per 1 USD', sub}) => (
	<div style={{display: 'inline-flex', alignItems: 'center', gap: 16}}>
		<svg width={70} height={70} viewBox="0 0 70 70"><path d="M8 8 H40 L64 32 L36 62 L8 34 Z" fill={P.gold} {...INK} /><circle cx={24} cy={24} r={6} fill="#fff" {...INK} strokeWidth={3} /></svg>
		<div><div style={{...sans(46)}}>{text}</div>{sub ? <div style={{...hand(40, P.soft)}}>{sub}</div> : null}</div>
	</div>
);

/** Coin with a symbol, scaled. */
export const Coin: React.FC<{sym: string; s?: number; tint?: string}> = ({sym, s = 1, tint = '#E9D9A6'}) => (
	<svg width={110 * s} height={110 * s} viewBox="0 0 110 110"><circle cx={55} cy={55} r={50} fill={tint} {...INK} /><circle cx={55} cy={55} r={38} fill="none" stroke={P.ink} strokeWidth={2} opacity={0.5} /><text x={55} y={74} textAnchor="middle" style={{...sans(52)}}>{sym}</text></svg>
);

export const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
export const clamp01 = (x: number) => Math.max(0, Math.min(1, x));
export {tw};
