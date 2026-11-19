import React from 'react';
import {interpolate, spring, useVideoConfig} from 'remotion';
import {C, F, tw, env} from './theme';
import {GrowMap, Branch} from './kit/mindmap';

// ---------- text & cards ----------
export const Label: React.FC<{x: number; y: number; size?: number; color?: string; weight?: number; mono?: boolean; o?: number; align?: 'left' | 'center' | 'right'; w?: number; children: React.ReactNode}> = ({x, y, size = 44, color = C.text, weight = 500, mono, o = 1, align = 'left', w, children}) => (
	<div style={{position: 'absolute', left: align === 'center' && w ? x - w / 2 : align === 'right' && w ? x - w : x, top: y, width: w, textAlign: align, fontFamily: mono ? F.mono : F.sans, fontSize: size, fontWeight: weight, color, opacity: o, lineHeight: 1.18, whiteSpace: w ? 'normal' : 'nowrap'}}>{children}</div>
);

export const Tag: React.FC<{text: string; x?: number; y?: number}> = ({text, x = 60, y = 46}) => (
	<div style={{position: 'absolute', left: x, top: y, fontFamily: F.sans, fontWeight: 700, fontSize: 30, letterSpacing: 3, color: C.dim, border: `2px solid ${C.line}`, borderRadius: 10, padding: '6px 14px'}}>{text}</div>
);

export const Card: React.FC<{x: number; y: number; w: number; h: number; o?: number; border?: string; bg?: string; children?: React.ReactNode; style?: React.CSSProperties}> = ({x, y, w, h, o = 1, border = C.line, bg = C.card, children, style}) => (
	<div style={{position: 'absolute', left: x, top: y, width: w, height: h, background: bg, border: `3px solid ${border}`, borderRadius: 26, opacity: o, boxShadow: '6px 6px 0 rgba(31,42,55,0.12)', ...style}}>{children}</div>
);

// ---------- pause card (prediction prompt) ----------
export const PauseCard: React.FC<{f: number; from: number; to: number; q: string; timerFrom: number; timerFrames: number; top?: boolean}> = ({f, from, to, q, timerFrom, timerFrames, top}) => {
	const o = env(f, from, to, 8);
	if (o <= 0) return null;
	const p = interpolate(f, [timerFrom, timerFrom + timerFrames], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
	const R = 46, L = 2 * Math.PI * R;
	return (
		<div style={{position: 'absolute', left: 260, right: 260, ...(top ? {top: 90} : {bottom: 150}), height: 180, opacity: o, transform: `translateY(${(1 - tw(f, from, from + 12)) * 40}px)`, background: '#FFFFFF', border: `4px solid ${C.text}`, borderRadius: 30, boxShadow: '8px 8px 0 #F2B33D', display: 'flex', alignItems: 'center', padding: '0 40px', gap: 34}}>
			<svg width={120} height={120} viewBox="0 0 120 120">
				<circle cx={60} cy={60} r={R} fill="none" stroke={C.line} strokeWidth={10} />
				<circle cx={60} cy={60} r={R} fill="none" stroke={C.text} strokeWidth={10} strokeDasharray={L} strokeDashoffset={L * p} transform="rotate(-90 60 60)" strokeLinecap="round" />
				<rect x={44} y={40} width={11} height={40} rx={3} fill={C.text} />
				<rect x={65} y={40} width={11} height={40} rx={3} fill={C.text} />
			</svg>
			<div>
				<div style={{fontFamily: F.sans, fontWeight: 700, fontSize: 30, letterSpacing: 4, color: C.dim}}>PAUSE · YOUR ANSWER?</div>
				<div style={{fontFamily: F.sans, fontWeight: 700, fontSize: 50, color: C.text}}>{q}</div>
			</div>
		</div>
	);
};

export const ChapterCard: React.FC<{f: number; from: number; n: number; title: string; map?: {centre: [string, string]; branches: Branch[]; done: number; upto: number}}> = ({f, from, n, title, map}) => {
	const o = env(f, from, from + 75, 12);
	if (o <= 0) return null;
	return (
		<div style={{position: 'absolute', inset: 0, background: C.bg, opacity: o}}>
			{map ? <div style={{position: 'absolute', inset: 0, transform: 'translateY(80px) scale(0.86)', transformOrigin: '50% 50%'}}><GrowMap centre={map.centre} branches={map.branches} shown={map.upto} newFrom={map.done} p={tw(f, from + 15, from + 60)} /></div> : null}
			<div style={{position: 'absolute', left: map ? 140 : 0, right: 0, top: map ? 40 : 420, textAlign: map ? 'left' : 'center'}}>
				<div style={{fontFamily: F.mono, fontSize: 36, color: C.dim, letterSpacing: 6}}>CHAPTER {n}</div>
				<div style={{fontFamily: F.sans, fontWeight: 700, fontSize: map ? 72 : 96, color: C.text, transform: `translateY(${(1 - tw(f, from, from + 20)) * 30}px)`}}>{title}</div>
			</div>
		</div>
	);
};

// ---------- people (flat, friendly icons) ----------
export const Person: React.FC<{x: number; y: number; s?: number; color: string; label?: string; badge?: string; o?: number}> = ({x, y, s = 1, color, label, badge, o = 1}) => (
	<div style={{position: 'absolute', left: x, top: y, opacity: o, transform: `scale(${s})`, transformOrigin: 'top center'}}>
		<svg width={180} height={230} viewBox="0 0 180 230" style={{display: 'block', margin: '0 auto'}}>
			<circle cx={90} cy={62} r={46} fill={color} />
			<path d="M10 230 C10 150 40 118 90 118 C140 118 170 150 170 230 Z" fill={color} opacity={0.85} />
			{badge ? <rect x={68} y={150} width={44} height={30} rx={6} fill={C.bg} stroke={C.text} strokeWidth={3} /> : null}
		</svg>
		{label ? <div style={{textAlign: 'center', fontFamily: F.sans, fontWeight: 700, fontSize: 34, color: C.text, marginTop: 10, width: 180}}>{label}</div> : null}
	</div>
);

export const Bubble: React.FC<{f: number; from: number; to: number; text: string; x: number; y: number; w?: number; who?: string}> = ({f, from, to, text, x, y, w = 860, who = 'MEERA'}) => {
	const o = env(f, from, to, 8);
	if (o <= 0) return null;
	const sc = 0.92 + 0.08 * tw(f, from, from + 10);
	return (
		<div style={{position: 'absolute', left: x, top: y, width: w, opacity: o, transform: `scale(${sc})`, transformOrigin: 'bottom left', background: '#241B36', border: `3px solid ${C.meera}`, borderRadius: 30, padding: '24px 34px'}}>
			<div style={{fontFamily: F.sans, fontWeight: 700, fontSize: 28, letterSpacing: 4, color: C.meera}}>{who}</div>
			<div style={{fontFamily: F.sans, fontWeight: 500, fontSize: 46, color: C.text, lineHeight: 1.22}}>{text}</div>
		</div>
	);
};

// ---------- arrows that always carry a word (never colour alone) ----------
export const Flow: React.FC<{x1: number; y1: number; x2: number; y2: number; color: string; word: string; p: number; o?: number; lx?: number; ly?: number}> = ({x1, y1, x2, y2, color, word, p, o = 1, lx, ly}) => {
	const x = x1 + (x2 - x1) * p, y = y1 + (y2 - y1) * p;
	const ang = (Math.atan2(y2 - y1, x2 - x1) * 180) / Math.PI;
	return (
		<>
			<svg style={{position: 'absolute', inset: 0, opacity: o}} width={1920} height={1080}>
				<line x1={x1} y1={y1} x2={x} y2={y} stroke={color} strokeWidth={16} strokeLinecap="round" />
				{p > 0.05 ? <polygon points="0,-26 40,0 0,26" fill={color} transform={`translate(${x},${y}) rotate(${ang})`} /> : null}
			</svg>
			<div style={{position: 'absolute', left: lx ?? (x1 + x2) / 2 + 40, top: ly ?? (y1 + y2) / 2 - 34, opacity: o * tw(p, 0.4, 0.8), fontFamily: F.sans, fontWeight: 700, fontSize: 52, color, letterSpacing: 2}}>{word}</div>
		</>
	);
};

// ---------- the rate board ----------
export const Board: React.FC<{x: number; y: number; rates: {label?: string; v: string; color?: string}[]; o?: number; title?: string; w?: number}> = ({x, y, rates, o = 1, title = 'USD / INR', w = 760}) => (
	<div style={{position: 'absolute', left: x, top: y, width: w, opacity: o, background: '#05090E', border: `4px solid ${C.line}`, borderRadius: 22, padding: '22px 34px'}}>
		<div style={{fontFamily: F.mono, fontSize: 32, color: C.dim, letterSpacing: 4}}>{title}</div>
		{rates.map((r, i) => (
			<div key={i} style={{display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginTop: 10}}>
				<span style={{fontFamily: F.sans, fontSize: 36, color: r.label ? (r.color ?? C.dim) : 'transparent', fontWeight: 700}}>{r.label ?? '·'}</span>
				<span style={{fontFamily: F.mono, fontWeight: 700, fontSize: 64, color: r.color ?? '#FFD27A'}}>{r.v}</span>
			</div>
		))}
	</div>
);

// ---------- springy pop ----------
export const usePop = (f: number, from: number) => {
	const {fps} = useVideoConfig();
	return spring({frame: f - from, fps, config: {damping: 14, stiffness: 140}});
};
