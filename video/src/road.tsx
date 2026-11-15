import React from 'react';
import {interpolate} from 'remotion';
import {C, F, tw, env} from './theme';

// Incoterms colours: the red baton is RISK, the blue line is COST (always with a word, never colour alone)
export const RISK = '#FF6B6B';
export const COST = '#5AA9FF';

// ---------- the road: seller's door (left) to buyer's door (right), seven stations ----------
export const ST = [
	{x: 270, name: "Seller's\npremises"},
	{x: 480, name: 'Handed to\ncarrier'},
	{x: 680, name: 'Alongside\nship'},
	{x: 870, name: 'On board\n(shipment port)'},
	{x: 1270, name: 'Arrived,\nready to unload'},
	{x: 1470, name: 'Unloaded'},
	{x: 1660, name: 'Import cleared,\nduty paid'},
];
const SEA0 = 950, SEA1 = 1190;

const House: React.FC<{x: number; y: number; label: string; color: string}> = ({x, y, label, color}) => (
	<g transform={`translate(${x},${y})`}>
		<polygon points="-60,0 0,-52 60,0" fill={color} />
		<rect x={-48} y={0} width={96} height={70} fill={color} opacity={0.85} />
		<rect x={-14} y={30} width={28} height={40} fill={C.bg} />
		<text x={0} y={-66 + (label === 'SELLER' || label === 'BUYER' ? 196 : 0)} textAnchor="middle" fontFamily={F.sans} fontWeight={700} fontSize={30} fill={C.text}>{label}</text>
	</g>
);

const Waves: React.FC<{y: number; f: number}> = ({y, f}) => (
	<g>
		{[0, 1, 2].map((r) => (
			<path key={r} d={[...Array(7)].map((_, i) => {
				const x = SEA0 + i * 45 + ((f * 0.6 + r * 20) % 45);
				return `M${Math.min(x, SEA1)} ${y + r * 18} q 11 -12 22 0`;
			}).join(' ')} stroke={COST} strokeOpacity={0.55 - r * 0.12} strokeWidth={4} fill="none" />
		))}
	</g>
);

export type RoadProps = {
	f: number;
	y?: number;
	reveal?: number; // stations shown so far (0..7, fractional fades)
	baton?: number | null; // station index (0..6) where risk passes; fractional = moving
	costTo?: number | null; // station index the seller pays up to (-1 = nothing)
	batonFrom?: number; // frame the baton appeared (for a small drop)
	hi?: number[]; // stations to ring
	note?: string; // short line under the road
	o?: number;
	dimSea?: boolean;
};

const sx = (i: number) => {
	const a = Math.floor(i), b = Math.min(6, a + 1), t = i - a;
	return ST[a].x + (ST[b].x - ST[a].x) * t;
};

export const Road: React.FC<RoadProps> = ({f, y = 600, reveal = 7, baton = null, costTo = null, hi = [], note, o = 1, dimSea}) => (
	<svg style={{position: 'absolute', inset: 0, opacity: o}} width={1920} height={1080}>
		<House x={150} y={y - 70} label="SELLER" color="#E8A87C" />
		<House x={1780} y={y - 70} label="BUYER" color="#7FB8D9" />
		<rect x={190} y={y - 8} width={1550} height={16} rx={8} fill={C.line} />
		<rect x={SEA0} y={y - 14} width={SEA1 - SEA0} height={28} rx={10} fill="#10304F" opacity={dimSea ? 0.4 : 1} />
		<Waves y={y + 50} f={f} />
		<text x={(SEA0 + SEA1) / 2} y={y + 120} textAnchor="middle" fontFamily={F.sans} fontWeight={700} fontSize={28} fill={C.dim}>sea · air · road</text>
		{ST.map((s, i) => {
			const v = Math.max(0, Math.min(1, reveal - i));
			if (v <= 0) return null;
			const ring = hi.includes(i);
			return (
				<g key={i} opacity={v}>
					<circle cx={s.x} cy={y} r={ring ? 30 : 22} fill={ring ? C.text : C.card} stroke={ring ? C.text : C.dim} strokeWidth={5} />
					<text x={s.x} y={y + 7} textAnchor="middle" fontFamily={F.mono} fontWeight={700} fontSize={24} fill={ring ? C.bg : C.text}>{i + 1}</text>
					{s.name.split('\n').map((t, k) => (
						<text key={k} x={s.x} y={y + 160 + k * 32} textAnchor="middle" fontFamily={F.sans} fontWeight={600} fontSize={26} fill={ring ? C.text : C.dim}>{t}</text>
					))}
				</g>
			);
		})}
		{costTo !== null && costTo >= 0 ? (
			<g>
				<rect x={210} y={y - 110} width={Math.max(0, sx(costTo) - 210)} height={18} rx={9} fill={COST} />
				<polygon points={`${sx(costTo)},${y - 120} ${sx(costTo) + 22},${y - 101} ${sx(costTo)},${y - 82}`} fill={COST} />
				<text x={230} y={y - 128} fontFamily={F.sans} fontWeight={700} fontSize={30} fill={COST}>COST: seller pays to here</text>
			</g>
		) : null}
		{baton !== null ? (
			<g transform={`translate(${sx(baton)},${y - 40})`}>
				<line x1={0} y1={-10} x2={0} y2={-150} stroke={RISK} strokeWidth={8} />
				<polygon points="0,-150 70,-128 0,-106" fill={RISK} />
				<text x={0} y={-168} textAnchor="middle" fontFamily={F.sans} fontWeight={700} fontSize={30} fill={RISK}>RISK passes here</text>
			</g>
		) : null}
		{note ? <text x={960} y={y + 260} textAnchor="middle" fontFamily={F.sans} fontWeight={700} fontSize={40} fill={C.text}>{note}</text> : null}
	</svg>
);

// ---------- a rule chip: code + name, with a mode icon ----------
export const RuleChip: React.FC<{code: string; name: string; x: number; y: number; o?: number; sea?: boolean; w?: number; color?: string}> = ({code, name, x, y, o = 1, sea, w = 760, color = C.text}) => (
	<div style={{position: 'absolute', left: x, top: y, width: w, opacity: o, display: 'flex', alignItems: 'center', gap: 26, background: C.card, border: `3px solid ${color}`, borderRadius: 22, padding: '14px 26px', boxSizing: 'border-box'}}>
		<div style={{fontFamily: F.mono, fontWeight: 700, fontSize: 72, color}}>{code}</div>
		<div style={{flex: 1}}>
			<div style={{fontFamily: F.sans, fontWeight: 700, fontSize: 38, color: C.text}}>{name}</div>
			<div style={{fontFamily: F.sans, fontWeight: 600, fontSize: 26, color: C.dim}}>{sea ? '≈ sea and inland waterway only' : 'any mode of transport'}</div>
		</div>
	</div>
);

// ---------- two thought bubbles: "Some of you" / "Others"; the wrong one fades at `reveal` ----------
export const Thoughts: React.FC<{f: number; from: number; to: number; a: string; b: string; bFrom?: number; reveal?: number; right?: 'a' | 'b'; y?: number}> = ({f, from, to, a, b, bFrom, reveal, right = 'b', y = 170}) => {
	const o = env(f, from, to, 10);
	if (o <= 0) return null;
	const done = reveal !== undefined && f >= reveal;
	const one = (who: string, text: string, x: number, start: number, ok: boolean) => {
		const p = tw(f, start, start + 12);
		const fade = done && !ok ? 0.25 : 1;
		return (
			<div style={{position: 'absolute', left: x, top: y, width: 800, opacity: p * fade, transform: `scale(${0.92 + 0.08 * p})`, transformOrigin: 'bottom left', background: '#1E2436', border: `3px solid ${done && ok ? C.buy : '#C7A6FF'}`, borderRadius: 34, padding: '24px 32px'}}>
				<div style={{fontFamily: F.sans, fontWeight: 700, fontSize: 28, letterSpacing: 4, color: done && ok ? C.buy : '#C7A6FF'}}>{who}{done ? (ok ? '  ✓' : '  ✗') : ''}</div>
				<div style={{fontFamily: F.sans, fontWeight: 600, fontSize: 44, color: C.text, lineHeight: 1.2, textDecoration: done && !ok ? 'line-through' : 'none'}}>{text}</div>
			</div>
		);
	};
	return (
		<div style={{position: 'absolute', inset: 0, opacity: o}}>
			{one('SOME OF YOU', a, 110, from, right === 'a')}
			{one('OTHERS', b, 1010, bFrom ?? from + 40, right === 'b')}
		</div>
	);
};

// ---------- trade documents ----------
export const Doc: React.FC<{x: number; y: number; title: string; sub?: string; o?: number; s?: number; tint?: string}> = ({x, y, title, sub, o = 1, s = 1, tint = C.paper}) => (
	<div style={{position: 'absolute', left: x, top: y, width: 230, height: 290, opacity: o, transform: `scale(${s})`, transformOrigin: 'center', background: tint, borderRadius: 14, padding: 20, boxSizing: 'border-box', boxShadow: '0 16px 40px rgba(0,0,0,0.45)', color: C.ink, fontFamily: F.sans}}>
		<div style={{fontWeight: 700, fontSize: 30, lineHeight: 1.1}}>{title}</div>
		{sub ? <div style={{fontSize: 22, marginTop: 6, color: '#5B6675'}}>{sub}</div> : null}
		{[0, 1, 2, 3, 4].map((i) => <div key={i} style={{height: 8, background: '#C9C1B3', borderRadius: 4, marginTop: 18, width: `${90 - i * 12}%`}} />)}
	</div>
);

// ---------- the ship (opening) ----------
export const Ship: React.FC<{x: number; y: number; container: number; tilt?: number; lost?: number}> = ({x, y, container, tilt = 0, lost = 0}) => (
	<g transform={`translate(${x},${y}) rotate(${tilt})`}>
		<polygon points="-260,0 260,0 210,90 -220,90" fill="#2C3B4B" stroke={C.line} strokeWidth={4} />
		<rect x={140} y={-110} width={90} height={110} fill="#3A4D63" />
		<rect x={155} y={-90} width={60} height={22} fill={C.bg} />
		{[...Array(Math.max(0, container))].map((_, i) => (
			<rect key={i} x={-220 + (i % 5) * 70} y={-54 - Math.floor(i / 5) * 54} width={64} height={50} fill={['#E8A87C', '#5AA9FF', '#38D996', '#FFB547', '#C7A6FF'][i % 5]} />
		))}
		{lost > 0 ? (
			<g transform={`translate(${-40 + lost * 140},${-110 + lost * 260}) rotate(${lost * 70})`} opacity={1 - Math.max(0, lost - 0.8) * 5}>
				<rect x={-34} y={-26} width={68} height={52} fill="#FF6B6B" stroke={C.text} strokeWidth={3} />
				<text x={0} y={8} textAnchor="middle" fontFamily={F.sans} fontWeight={700} fontSize={18} fill={C.bg}>KNITWEAR</text>
			</g>
		) : null}
	</g>
);

export const Sea: React.FC<{f: number; y: number; storm?: number}> = ({f, y, storm = 0}) => (
	<g>
		<rect x={0} y={y} width={1920} height={1080 - y} fill="#0B2742" />
		{[0, 1, 2, 3].map((r) => (
			<path key={r} d={[...Array(30)].map((_, i) => {
				const amp = 10 + storm * 30;
				const x = i * 70 - ((f * (1.2 + storm * 2) + r * 35) % 70);
				return `M${x} ${y + 30 + r * 60} q 17 ${-amp} 35 0 q 18 ${amp} 35 0`;
			}).join(' ')} stroke={COST} strokeOpacity={0.5 - r * 0.08} strokeWidth={4} fill="none" />
		))}
	</g>
);

export const Rain: React.FC<{f: number; o: number}> = ({f, o}) => (
	<g opacity={o}>
		{[...Array(80)].map((_, i) => {
			const x = (i * 97 + f * 22) % 1960 - 20, yy = (i * 53 + f * 38) % 1100 - 40;
			return <line key={i} x1={x} y1={yy} x2={x - 14} y2={yy + 40} stroke="#9FB6CC" strokeWidth={3} strokeOpacity={0.5} />;
		})}
	</g>
);

export const fadeTo = (f: number, a: number, b: number) => interpolate(f, [a, b], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
