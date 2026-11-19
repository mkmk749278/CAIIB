import React from 'react';
import {interpolate} from 'remotion';
import {C, F, tw, env} from './theme';
import {Journey, RuleCard} from './kit/journey';
import {Thoughts as V2Thoughts} from './kit/look';

// Incoterms colours: the red baton is RISK, the blue line is COST (always with a word, never colour alone)
export const RISK = '#D93A30';
export const COST = '#2F7FE0';

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
export type RoadProps = {
	f: number;
	y?: number; // kept for the r1 call sites; the v2 journey sits at a fixed height
	reveal?: number;
	baton?: number | null;
	costTo?: number | null;
	batonFrom?: number;
	hi?: number[];
	note?: string;
	o?: number;
	dimSea?: boolean; // r1: "not a sea rule" → v2: label the gap sea · air · road
	rule?: string | null; // v2: the rule on screen, for the cost label and the C-rule bracket
	rp?: number; // flow: baton hand-over progress 0..1
	cp?: number; // flow: cost line draw progress 0..1 (across the phrase)
};

// v2 (PLAYBOOK §5c): the r1 Road API, drawn as the journey from kit/journey.tsx
export const Road: React.FC<RoadProps> = ({reveal = 7, baton = null, costTo = null, hi = [], note, o = 1, dimSea, rule, rp = 1, cp = 1}) => {
	const cRule = !!rule && rule[0] === 'C';
	const costLabel = cRule ? (['CPT', 'CIP'].includes(rule as string) ? 'carriage to the named place' : 'freight to the port of destination') : undefined;
	return (
		<div style={{position: 'absolute', inset: 0, opacity: o}}>
			<Journey reveal={reveal} risk={baton ?? undefined} cost={costTo ?? undefined} highlight={hi[0]} anyMode={dimSea} split={cRule && baton !== null && costTo !== null ? tw(cp, 0.7, 1) : 0} costLabel={costLabel} rp={rp} cp={cp} />
			{note ? <div style={{position: 'absolute', left: 140, right: 140, top: 880, textAlign: 'center', fontFamily: F.sans, fontWeight: 700, fontSize: 40, color: C.text}}>{note}</div> : null}
		</div>
	);
};

// v2: the r1 RuleChip API, drawn as the family-coloured rule card
export const RuleChip: React.FC<{code: string; name: string; x: number; y: number; o?: number; sea?: boolean; w?: number; color?: string}> = ({code, name, x, y, o = 1, sea, w}) => {
	const k = w && w < 1000 ? w / 1000 : 1;
	return (
		<div style={{position: 'absolute', left: x, top: y, transform: `scale(${k})`, transformOrigin: 'left top', width: 1920, height: 300}}>
			<RuleCard code={code} name={name} sea={sea} x={0} y={0} p={o} />
		</div>
	);
};

// v2: the r1 Thoughts API, drawn as two faceless learners with thought clouds; the wrong one is crossed at `reveal`
export const Thoughts: React.FC<{f: number; from: number; to: number; a: string; b: string; bFrom?: number; reveal?: number; right?: 'a' | 'b'; y?: number}> = ({f, from, to, a, b, bFrom, reveal, right = 'b'}) => {
	const o = env(f, from, to, 10);
	if (o <= 0) return null;
	return (
		<div style={{position: 'absolute', inset: 0, opacity: o}}>
			<V2Thoughts f={f} a={from} b={bFrom} left={a} right={b} wrong={right === 'b' ? 'left' : 'right'} crossAt={reveal ?? 1e9} />
		</div>
	);
};

// ---------- trade documents ----------
export const Doc: React.FC<{x: number; y: number; title: string; sub?: string; o?: number; s?: number; tint?: string}> = ({x, y, title, sub, o = 1, s = 1, tint = '#FFFFFF'}) => (
	<div style={{position: 'absolute', left: x, top: y, width: 230, height: 290, opacity: o, transform: `scale(${s})`, transformOrigin: 'center', background: tint, borderRadius: 14, padding: 20, boxSizing: 'border-box', border: '3px solid #1F2A37', boxShadow: '6px 6px 0 rgba(31,42,55,0.15)', color: C.ink, fontFamily: F.sans}}>
		<div style={{fontWeight: 700, fontSize: 30, lineHeight: 1.1}}>{title}</div>
		{sub ? <div style={{fontSize: 22, marginTop: 6, color: '#5B6675'}}>{sub}</div> : null}
		{[0, 1, 2, 3, 4].map((i) => <div key={i} style={{height: 8, background: '#C9C1B3', borderRadius: 4, marginTop: 18, width: `${90 - i * 12}%`}} />)}
	</div>
);

// ---------- the ship (opening) ----------
export const Ship: React.FC<{x: number; y: number; container: number; tilt?: number; lost?: number}> = ({x, y, container, tilt = 0, lost = 0}) => (
	<g transform={`translate(${x},${y}) rotate(${tilt})`}>
		<polygon points="-260,0 260,0 210,90 -220,90" fill="#1F2A37" stroke={C.text} strokeWidth={4} />
		<rect x={140} y={-110} width={90} height={110} fill="#F4EEE1" stroke="#1F2A37" strokeWidth={4} />
		<rect x={155} y={-90} width={60} height={22} fill={C.bg} />
		{[...Array(Math.max(0, container))].map((_, i) => (
			<rect key={i} x={-220 + (i % 5) * 70} y={-54 - Math.floor(i / 5) * 54} width={64} height={50} fill={['#B49A74', '#6F7782', '#B49A74', '#8A7A62', '#6F7782'][i % 5]} stroke="#1F2A37" strokeWidth={3} />
		))}
		{lost > 0 ? (
			<g transform={`translate(${-40 + lost * 140},${-110 + lost * 260}) rotate(${lost * 70})`} opacity={1 - Math.max(0, lost - 0.8) * 5}>
				<rect x={-34} y={-26} width={68} height={52} fill="#B49A74" stroke={C.text} strokeWidth={4} />
				<text x={0} y={8} textAnchor="middle" fontFamily={F.sans} fontWeight={700} fontSize={18} fill="#1F2A37">KNITWEAR</text>
			</g>
		) : null}
	</g>
);

export const Sea: React.FC<{f: number; y: number; storm?: number}> = ({f, y, storm = 0}) => (
	<g>
		<rect x={0} y={y} width={1920} height={1080 - y} fill="#7FA3AD" />
		{[0, 1, 2, 3].map((r) => (
			<path key={r} d={[...Array(30)].map((_, i) => {
				const amp = 10 + storm * 30;
				const x = i * 70 - ((f * (1.2 + storm * 2) + r * 35) % 70);
				return `M${x} ${y + 30 + r * 60} q 17 ${-amp} 35 0 q 18 ${amp} 35 0`;
			}).join(' ')} stroke="#FFFFFF" strokeOpacity={0.75 - r * 0.12} strokeWidth={4} fill="none" />
		))}
	</g>
);

export const Rain: React.FC<{f: number; o: number}> = ({f, o}) => (
	<g opacity={o}>
		{[...Array(80)].map((_, i) => {
			const x = (i * 97 + f * 22) % 1960 - 20, yy = (i * 53 + f * 38) % 1100 - 40;
			return <line key={i} x1={x} y1={yy} x2={x - 14} y2={yy + 40} stroke="#5B6676" strokeWidth={3} strokeOpacity={0.45} />;
		})}
	</g>
);

export const fadeTo = (f: number, a: number, b: number) => interpolate(f, [a, b], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
