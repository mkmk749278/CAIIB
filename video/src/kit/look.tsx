// The v2 look (2026-11-19, owner: "visuals look too plain; more refinement; what about mind maps"):
// a warm classroom-notebook page, ink drawings that are built on screen, one colour per idea, a mind map that grows.
// Shared by every lesson; lesson files only place these parts.
import React from 'react';
import {AbsoluteFill} from 'remotion';
import {tw} from '../theme';

export const P = {
	paper: '#EDE3CC', // toned down for night viewing (review_look_v2 §night)
	paper2: '#E4D8BD',
	grid: '#DCCFB2',
	ink: '#1F2A37',
	soft: '#4E5968',
	faint: '#7D8691',
	// signal colours: each means ONE thing, never used on scenery (review_look_v2 #2)
	risk: '#D93A30', // red baton: where risk passes
	cost: '#2F7FE0', // blue line: how far the seller pays
	gold: '#F2B33D', // marker underline only
	ok: '#2E9E5B', // correct answer only
	// scenery: neutral inks, greys and browns
	sea: '#9FB8BE',
	land: '#D9C9A5',
	wall: '#F4EEE1',
	roof: '#8A7A62',
	steel: '#6F7782',
	box: '#B49A74',
	branch: '#A8946C', // mind-map branch lines
	// rule families: differ in lightness AND carry a shape (colour-blind safe)
	E: '#3E4C5E', // dark slate, square
	F: '#5CC6B8', // light teal, triangle
	Cc: '#F2A33A', // amber, circle
	D: '#6B2D5C', // dark plum, diamond
};
export const FAM_TEXT: Record<string, string> = {E: '#fff', F: '#1F2A37', C: '#1F2A37', D: '#fff'};

export const FT = {
	sans: '"Inter Tight", system-ui, sans-serif',
	mono: '"JetBrains Mono", ui-monospace, monospace',
	hand: '"Caveat", "Inter Tight", cursive',
};

/** The notebook page: cream paper, faint grid, soft vignette, a margin line. */
export const Page: React.FC<{children: React.ReactNode}> = ({children}) => (
	<AbsoluteFill style={{background: P.paper, fontFamily: FT.sans, color: P.ink}}>
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			<defs>
				<pattern id="grid" width={48} height={48} patternUnits="userSpaceOnUse">
					<path d="M48 0H0V48" fill="none" stroke={P.grid} strokeWidth={1.2} />
				</pattern>
				<radialGradient id="vig" cx="50%" cy="45%" r="75%">
					<stop offset="55%" stopColor="#000" stopOpacity={0} />
					<stop offset="100%" stopColor="#3d2c10" stopOpacity={0.28} />
				</radialGradient>
			</defs>
			<rect width={1920} height={1080} fill="url(#grid)" />
			<line x1={96} y1={0} x2={96} y2={1080} stroke="#E8A0A0" strokeWidth={2} opacity={0.5} />
			<rect width={1920} height={1080} fill="url(#vig)" />
		</svg>
		{children}
	</AbsoluteFill>
);

/** Small running header: where we are in the course. */
export const Header: React.FC<{left: string; right?: string}> = ({left, right}) => (
	<div style={{position: 'absolute', top: 30, left: 130, right: 60, display: 'flex', justifyContent: 'space-between', fontFamily: FT.sans, fontWeight: 700, fontSize: 24, letterSpacing: 2, color: P.soft}}>
		<span>{left}</span>
		{right && <span>{right}</span>}
	</div>
);

/** Spoken sentence, ink on a white strip (readable on a phone). */
export const Caption: React.FC<{text: string}> = ({text}) => (
	<div style={{position: 'absolute', left: 160, right: 160, bottom: 34, display: 'flex', justifyContent: 'center'}}>
		<div style={{background: 'rgba(255,255,255,0.92)', border: `2px solid ${P.grid}`, borderRadius: 16, padding: '12px 28px', fontWeight: 600, fontSize: 40, lineHeight: 1.25, color: P.ink, textAlign: 'center', boxShadow: '0 6px 18px rgba(80,60,20,0.10)'}}>{text}</div>
	</div>
);

/** A teacher's note in handwriting, underlined with a marker stroke drawn on (p = 0..1). */
export const Note: React.FC<{x: number; y: number; p?: number; color?: string; size?: number; rot?: number; children: React.ReactNode}> = ({x, y, p = 1, color = P.ink, size = 54, rot = -2, children}) => (
	<div style={{position: 'absolute', left: x, top: y, transform: `rotate(${rot}deg)`, fontFamily: FT.hand, fontWeight: 700, fontSize: size, color, opacity: Math.min(1, p * 2), whiteSpace: 'nowrap'}}>
		{children}
		<svg width="100%" height={18} style={{display: 'block', marginTop: -6}} viewBox="0 0 100 18" preserveAspectRatio="none">
			<path d="M2 12 C 30 4, 70 16, 98 8" stroke={P.gold} strokeWidth={7} fill="none" strokeLinecap="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - Math.max(0, p * 2 - 1)} opacity={0.85} />
		</svg>
	</div>
);

/** "Some of you" / "Others": two faceless learners with thought clouds; `wrong` fades and gets a cross. */
export const Thoughts: React.FC<{f: number; a: number; b?: number; left: string; right: string; wrong?: 'left' | 'right'; crossAt?: number}> = ({f, a, b, left, right, wrong, crossAt = 1e9}) => {
	const one = (x: number, label: string, text: string, col: string, k: number, side: 'left' | 'right') => {
		const t0 = k === 1 && b !== undefined ? b : a + k * 20;
		const p = tw(f, t0, t0 + 18);
		const out = wrong === side ? tw(f, crossAt, crossAt + 20) : 0;
		return (
			<g opacity={p * (1 - 0.55 * out)} transform={`translate(${x}, ${740 + 30 * (1 - p)})`}>
				{/* learner: head and shoulders, no face */}
				<circle cx={0} cy={0} r={46} fill={col} />
				<path d="M-90 150 C -90 70, 90 70, 90 150 Z" fill={col} />
				{/* cloud */}
				<circle cx={60} cy={-80} r={10} fill="#fff" stroke={P.ink} strokeWidth={3} />
				<circle cx={95} cy={-120} r={16} fill="#fff" stroke={P.ink} strokeWidth={3} />
				<rect x={-60} y={-430} width={560} height={270} rx={120} fill="#fff" stroke={P.ink} strokeWidth={4} />
				<text x={220} y={-375} textAnchor="middle" fontFamily={FT.sans} fontWeight={700} fontSize={30} letterSpacing={2} fill={P.soft}>{label.toUpperCase()}</text>
				<foreignObject x={-30} y={-360} width={500} height={190}>
					<div style={{fontFamily: FT.hand, fontWeight: 700, fontSize: 56, lineHeight: 1.0, color: P.ink, textAlign: 'center'}}>{text}</div>
				</foreignObject>
				{out > 0 && <path d={`M-20 -400 L ${-20 + 480 * out} ${-400 + 210 * out}`} stroke={P.risk} strokeWidth={12} strokeLinecap="round" />}
			</g>
		);
	};
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			{one(380, 'Some of you', left, '#B8A27A', 0, 'left')}
			{one(1180, 'Others', right, '#8FA4B4', 1, 'right')}
		</svg>
	);
};

/** Family shape: E square, F triangle, C circle, D diamond (never rely on colour alone). */
export const FamShape: React.FC<{fam: string; size?: number; color?: string}> = ({fam, size = 34, color}) => {
	const c = color ?? (P as Record<string, string>)[fam === 'C' ? 'Cc' : fam];
	const h = size / 2;
	return (
		<svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{display: 'inline-block', verticalAlign: 'middle'}}>
			{fam === 'E' && <rect x={3} y={3} width={size - 6} height={size - 6} fill={c} stroke={P.ink} strokeWidth={3} />}
			{fam === 'F' && <path d={`M${h} 3 L${size - 3} ${size - 3} H3 Z`} fill={c} stroke={P.ink} strokeWidth={3} strokeLinejoin="round" />}
			{fam === 'C' && <circle cx={h} cy={h} r={h - 3} fill={c} stroke={P.ink} strokeWidth={3} />}
			{fam === 'D' && <path d={`M${h} 2 L${size - 2} ${h} L${h} ${size - 2} L2 ${h} Z`} fill={c} stroke={P.ink} strokeWidth={3} strokeLinejoin="round" />}
		</svg>
	);
};

/** Prediction prompt (§5a): PAUSE and a ring that empties over n frames. */
export const PauseCard: React.FC<{f: number; a: number; n?: number; text?: string}> = ({f, a, n = 120, text = 'Pause. Lock your answer in.'}) => {
	const left = Math.max(0, 1 - (f - a) / n);
	const secs = Math.ceil(left * (n / 30));
	return (
		<div style={{position: 'absolute', right: 120, top: 200, display: 'flex', alignItems: 'center', gap: 22, background: '#fff', border: `4px solid ${P.ink}`, borderRadius: 24, padding: '16px 28px', boxShadow: `8px 8px 0 ${P.gold}`}}>
			<svg width={96} height={96}>
				<circle cx={48} cy={48} r={40} fill="none" stroke={P.grid} strokeWidth={10} />
				<circle cx={48} cy={48} r={40} fill="none" stroke={P.ink} strokeWidth={10} pathLength={1} strokeDasharray={1} strokeDashoffset={1 - left} transform="rotate(-90 48 48)" strokeLinecap="round" />
				<text x={48} y={62} textAnchor="middle" fontFamily={FT.sans} fontWeight={700} fontSize={40} fill={P.ink}>{secs}</text>
			</svg>
			<div style={{fontFamily: FT.sans, fontWeight: 700, fontSize: 44, color: P.ink}}>{text}</div>
		</div>
	);
};

/** Opening card: title, rule version, AI-voice disclosure, illustrative tag (review_look_v2 #11). */
export const TitleCard: React.FC<{code: string; title: string; sub: string; version: string}> = ({code, title, sub, version}) => (
	<div style={{position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 22}}>
		<div style={{fontFamily: FT.sans, fontWeight: 700, fontSize: 32, letterSpacing: 4, color: P.soft}}>{code}</div>
		<div style={{fontFamily: FT.sans, fontWeight: 700, fontSize: 120, color: P.ink}}>{title}</div>
		<div style={{fontFamily: FT.hand, fontWeight: 700, fontSize: 72, color: P.soft}}>{sub}</div>
		<div style={{marginTop: 30, background: '#fff', border: `3px solid ${P.ink}`, borderRadius: 16, padding: '14px 30px', fontFamily: FT.sans, fontWeight: 500, fontSize: 34, color: P.ink}}>{version}</div>
		<div style={{fontFamily: FT.sans, fontWeight: 500, fontSize: 30, color: P.soft}}>Names, ship and amounts are illustrative</div>
	</div>
);

/** A trap card: a sticky note with an amber edge, slightly tilted (review_look_v2 "make it great" #5). */
export const TrapNote: React.FC<{x: number; y: number; w?: number; p?: number; title?: string; children: React.ReactNode}> = ({x, y, w = 1000, p = 1, title = 'TRAP', children}) => (
	<div style={{position: 'absolute', left: x, top: y + 20 * (1 - p), width: w, opacity: p, transform: `rotate(-1.5deg) scale(${0.96 + 0.04 * p})`, background: '#FFF4C9', borderLeft: `16px solid ${P.gold}`, padding: '24px 36px', boxShadow: '8px 10px 0 rgba(31,42,55,0.15)', fontFamily: FT.sans}}>
		<div style={{fontWeight: 700, fontSize: 32, letterSpacing: 4, color: '#9A5B00'}}>⚠ {title}</div>
		<div style={{fontWeight: 700, fontSize: 52, lineHeight: 1.15, color: P.ink, marginTop: 6}}>{children}</div>
	</div>
);
