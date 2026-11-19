// The v2 look (2026-11-19, owner: "visuals look too plain; more refinement; what about mind maps"):
// a warm classroom-notebook page, ink drawings that are built on screen, one colour per idea, a mind map that grows.
// Shared by every lesson; lesson files only place these parts.
import React from 'react';
import {AbsoluteFill} from 'remotion';
import {tw} from '../theme';

export const P = {
	paper: '#F7F1E3',
	paper2: '#EFE6D2',
	grid: '#E6DBC4',
	ink: '#1F2A37',
	soft: '#5B6676',
	faint: '#9AA3AE',
	risk: '#D93A30', // red baton: where risk passes
	cost: '#2F7FE0', // blue line: how far the seller pays
	sea: '#3AA6B9',
	seaDeep: '#23798C',
	land: '#E4D6B5',
	gold: '#F2B33D', // highlight marker
	ok: '#2E9E5B',
	// rule families
	E: '#6B7A8F',
	F: '#1E9E8F',
	Cc: '#E8891C',
	D: '#B4459A',
};

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
					<stop offset="60%" stopColor="#000" stopOpacity={0} />
					<stop offset="100%" stopColor="#5a4320" stopOpacity={0.16} />
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
export const Thoughts: React.FC<{f: number; a: number; left: string; right: string; wrong?: 'left' | 'right'; crossAt?: number}> = ({f, a, left, right, wrong, crossAt = 1e9}) => {
	const one = (x: number, label: string, text: string, col: string, k: number, side: 'left' | 'right') => {
		const p = tw(f, a + k * 20, a + k * 20 + 18);
		const out = wrong === side ? tw(f, crossAt, crossAt + 20) : 0;
		return (
			<g opacity={p * (1 - 0.55 * out)} transform={`translate(${x}, ${620 + 30 * (1 - p)})`}>
				{/* learner: head and shoulders, no face */}
				<circle cx={0} cy={0} r={46} fill={col} />
				<path d="M-90 150 C -90 70, 90 70, 90 150 Z" fill={col} />
				{/* cloud */}
				<circle cx={60} cy={-80} r={10} fill="#fff" stroke={P.ink} strokeWidth={3} />
				<circle cx={95} cy={-120} r={16} fill="#fff" stroke={P.ink} strokeWidth={3} />
				<rect x={-60} y={-430} width={560} height={270} rx={120} fill="#fff" stroke={P.ink} strokeWidth={4} />
				<text x={220} y={-375} textAnchor="middle" fontFamily={FT.sans} fontWeight={700} fontSize={30} letterSpacing={2} fill={P.soft}>{label.toUpperCase()}</text>
				<foreignObject x={-30} y={-360} width={500} height={190}>
					<div style={{fontFamily: FT.hand, fontWeight: 700, fontSize: 52, lineHeight: 1.05, color: P.ink, textAlign: 'center'}}>{text}</div>
				</foreignObject>
				{out > 0 && <path d={`M-20 -400 L ${-20 + 480 * out} ${-400 + 210 * out}`} stroke={P.risk} strokeWidth={12} strokeLinecap="round" />}
			</g>
		);
	};
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0}}>
			{one(380, 'Some of you', left, '#C9B48A', 0, 'left')}
			{one(1180, 'Others', right, '#9DB7C9', 1, 'right')}
		</svg>
	);
};
