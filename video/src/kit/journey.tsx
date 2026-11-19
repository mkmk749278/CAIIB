// "The road", drawn as the real journey: Tiruppur factory → truck → Chennai quay → on board → the sea → Rotterdam →
// unloaded → customs → the buyer. Seven stations, same places every time Incoterms appear in the course.
// Scenery is neutral (inks, greys, browns); only the red baton (risk) and the blue line (cost) carry colour.
// Fixes from review_look_v2: one-word station labels ≥30 px, no colour leaks, cost label at the arrowhead,
// the C-rule gap drawn as a bracket, "sea · air · road" for any-mode rules.
import React from 'react';
import {P, FT, FamShape, FAM_TEXT} from './look';

export const STATIONS = [
	{x: 200, label: 'Premises'},
	{x: 430, label: 'Carrier'},
	{x: 640, label: 'Alongside'},
	{x: 820, label: 'On board'},
	{x: 1440, label: 'Arrived'},
	{x: 1620, label: 'Unloaded'},
	{x: 1790, label: 'Cleared'},
];
export const BASE = 680; // ground line
const sx = (i: number) => { const a = Math.max(0, Math.min(6, Math.floor(i))), b = Math.min(6, a + 1), t = i - a; return STATIONS[a].x + (STATIONS[b].x - STATIONS[a].x) * t; };
const S = {stroke: P.ink, strokeWidth: 4, strokeLinejoin: 'round' as const};

const Factory: React.FC<{x: number}> = ({x}) => (
	<g transform={`translate(${x - 90}, ${BASE - 150})`} {...S}>
		<rect x={148} y={-30} width={24} height={100} fill={P.steel} />
		<path d="M0 150 V60 L50 30 V60 L100 30 V60 L150 30 V150 Z" fill={P.wall} />
		<rect x={20} y={92} width={30} height={30} fill="#fff" /><rect x={68} y={92} width={30} height={30} fill="#fff" />
		<rect x={112} y={100} width={26} height={50} fill={P.roof} />
	</g>
);
const Truck: React.FC<{x: number}> = ({x}) => (
	<g transform={`translate(${x - 80}, ${BASE - 92})`} {...S}>
		<rect x={0} y={0} width={110} height={66} rx={4} fill={P.box} />
		<path d="M110 20 H140 L160 44 V66 H110 Z" fill={P.wall} />
		<circle cx={30} cy={74} r={14} fill={P.ink} /><circle cx={130} cy={74} r={14} fill={P.ink} />
	</g>
);
// crane kept low (top at BASE−180) so the arrow, bracket and risk label pass above it
const Crane: React.FC<{x: number}> = ({x}) => (
	<g transform={`translate(${x}, ${BASE})`} {...S} fill="none">
		<path d="M-26 0 L-18 -160 M26 0 L18 -160 M-18 -160 H18" />
		<path d="M-50 -160 H120 M-50 -160 L0 -180 L120 -160" />
		<line x1={100} y1={-160} x2={100} y2={-100} strokeWidth={2} />
		<rect x={82} y={-100} width={36} height={22} fill={P.box} />
	</g>
);
export const Ship: React.FC<{x: number; tilt?: number}> = ({x, tilt = 0}) => (
	<g transform={`translate(${x}, ${BASE - 6}) rotate(${tilt})`} {...S}>
		<path d="M-120 0 H120 L95 46 H-95 Z" fill={P.ink} />
		{[-95, -55, -15, 25].map((cx, i) => <rect key={i} x={cx} y={-34} width={38} height={34} fill={i % 2 ? P.box : P.steel} />)}
		{[-75, -35, 5].map((cx, i) => <rect key={i} x={cx} y={-64} width={38} height={30} fill={i % 2 ? P.steel : P.box} />)}
		<rect x={70} y={-70} width={34} height={70} fill={P.wall} />
	</g>
);
const Plane: React.FC<{x: number; y: number}> = ({x, y}) => (
	<g transform={`translate(${x}, ${y})`} {...S} fill={P.wall}>
		<path d="M-60 0 Q -60 -12 -40 -12 H50 Q 70 -12 72 0 Q 70 10 50 10 H-40 Q -60 10 -60 0 Z" />
		<path d="M-5 -10 L-30 -48 H-12 L25 -10 Z M-5 10 L-30 44 H-12 L25 10 Z M-48 -10 L-60 -32 H-48 L-36 -10 Z" />
	</g>
);
const Booth: React.FC<{x: number}> = ({x}) => (
	<g transform={`translate(${x - 52}, ${BASE - 120})`} {...S}>
		<rect x={0} y={20} width={104} height={100} fill={P.wall} />
		<path d="M-10 20 H114 L102 0 H2 Z" fill={P.roof} />
		<rect x={18} y={38} width={68} height={28} fill="#fff" />
		<text x={52} y={104} textAnchor="middle" fontFamily={FT.sans} fontWeight={700} fontSize={19} fill={P.ink} stroke="none">CUSTOMS</text>
	</g>
);
const Shop: React.FC<{x: number}> = ({x}) => (
	<g transform={`translate(${x}, ${BASE - 130})`} {...S}>
		<rect x={0} y={30} width={96} height={100} fill={P.wall} />
		<path d="M-10 30 H106 L94 0 H2 Z" fill={P.roof} />
		<rect x={32} y={70} width={32} height={60} fill={P.steel} />
	</g>
);

/** The whole road. risk/cost = station index (cost −1 = none); rp/cp = 0..1 draw-on; ship = 0..1 across the sea;
 * split = draw the C-rule bracket between flag and arrowhead; anyMode = label the gap "sea · air · road". */
export const Journey: React.FC<{risk?: number; cost?: number; rp?: number; cp?: number; ship?: number; dim?: boolean; highlight?: number; split?: number; anyMode?: boolean; costLabel?: string; reveal?: number}> = ({risk, cost, rp = 1, cp = 1, ship = 0, dim = false, highlight, split = 0, anyMode = false, costLabel, reveal = 7}) => {
	const shipX = 1000 + ship * (1300 - 1000);
	const ARROW_Y = BASE - 300;
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0, opacity: dim ? 0.45 : 1}}>
			<path d={`M110 ${BASE} H880 V${BASE + 80} H110 Z`} fill={P.land} />
			<path d={`M880 ${BASE} H1400 V${BASE + 80} H880 Z`} fill={P.sea} />
			<path d={`M1400 ${BASE} H1880 V${BASE + 80} H1400 Z`} fill={P.land} />
			{[0, 1, 2, 3, 4, 5, 6, 7].map((i) => <path key={i} d={`M${900 + i * 62} ${BASE + 20} q 14 -12 28 0 t 28 0`} stroke="#fff" strokeWidth={4} fill="none" opacity={0.85} />)}
			<text x={490} y={BASE + 60} textAnchor="middle" fontFamily={FT.hand} fontWeight={700} fontSize={48} fill={P.soft}>India</text>
			<text x={1140} y={BASE + 66} textAnchor="middle" fontFamily={FT.hand} fontWeight={700} fontSize={44} fill={P.ink}>{anyMode ? 'sea · air · road' : 'the sea'}</text>
			<text x={1640} y={BASE + 60} textAnchor="middle" fontFamily={FT.hand} fontWeight={700} fontSize={48} fill={P.soft}>Netherlands</text>
			<Factory x={200} /><Truck x={430} /><Crane x={640} /><Crane x={1500} />
			{anyMode ? <><Ship x={shipX} /><Plane x={1150} y={BASE - 150} /></> : <Ship x={shipX} tilt={ship > 0 && ship < 1 ? 2 * Math.sin(ship * 40) : 0} />}
			<rect x={1590} y={BASE - 50} width={60} height={50} fill={P.box} {...S} />
			<Booth x={1720} /><Shop x={1790} />
			{/* stations: one word each, 32 px */}
			<line x1={200} y1={BASE + 120} x2={1790} y2={BASE + 120} stroke={P.ink} strokeWidth={3} strokeDasharray="2 12" strokeLinecap="round" opacity={0.6} />
			{STATIONS.map((s, i) => {
				const hot = i === highlight || (risk !== undefined && Math.abs(i - risk) < 0.5);
				const v = Math.max(0, Math.min(1, reveal - i));
				if (v <= 0) return null;
				return (
					<g key={i} opacity={v}>
						<circle cx={s.x} cy={BASE + 120} r={hot ? 24 : 20} fill={hot ? P.ink : '#fff'} stroke={P.ink} strokeWidth={4} />
						<text x={s.x} y={BASE + 130} textAnchor="middle" fontFamily={FT.sans} fontWeight={700} fontSize={26} fill={hot ? '#fff' : P.ink}>{i + 1}</text>
						<text x={s.x} y={BASE + 182} textAnchor="middle" fontFamily={FT.sans} fontWeight={hot ? 700 : 600} fontSize={32} fill={P.ink}>{s.label}</text>
					</g>
				);
			})}
			{/* blue cost line: from the seller to the cost station; its label sits at the arrowhead */}
			{cost !== undefined && cost >= 0 && (() => {
				const x2 = STATIONS[cost].x;
				const xe = 170 + (x2 - 170) * cp;
				return (
					<g>
						<path d={`M170 ${ARROW_Y} H${xe}`} stroke={P.cost} strokeWidth={16} strokeLinecap="round" />
						<path d={`M${xe - 6} ${ARROW_Y - 22} l 30 22 l -30 22 Z`} fill={P.cost} opacity={cp > 0.05 ? 1 : 0} />
						{cp > 0.02 && cp < 0.98 ? <g transform={`translate(${xe + 26}, ${ARROW_Y - 4}) rotate(35)`}><path d="M0 0 L-12 -48 L12 -48 Z" fill={P.ink} /><rect x={-12} y={-118} width={24} height={70} rx={6} fill={P.gold} stroke={P.ink} strokeWidth={3} /></g> : null}
						<text x={Math.min(xe, 1700)} y={ARROW_Y - 36} textAnchor="end" fontFamily={FT.hand} fontWeight={700} fontSize={54} fill={P.cost} opacity={cp}>{costLabel ?? 'seller pays up to here'}</text>
					</g>
				);
			})()}
			{/* the red baton (a relay baton on a stand) where risk passes, as the voice says */}
			{risk !== undefined && (() => {
				const x = sx(risk), drop = (1 - rp) * -60;
				const right = risk < 0.5;
				return (
					<g transform={`translate(0, ${drop})`} opacity={rp}>
						<line x1={x} y1={BASE + 96} x2={x} y2={BASE - 190} stroke={P.ink} strokeWidth={6} />
						<g transform={`translate(${x}, ${BASE - 200}) rotate(-24)`}>
							<rect x={-62} y={-17} width={124} height={34} rx={17} fill={P.risk} stroke={P.ink} strokeWidth={4} />
							<rect x={-26} y={-17} width={10} height={34} fill="#fff" opacity={0.85} />
							<rect x={16} y={-17} width={10} height={34} fill="#fff" opacity={0.85} />
						</g>
						<text x={right ? x + 80 : x - 70} y={BASE - 228} textAnchor={right ? 'start' : 'end'} fontFamily={FT.hand} fontWeight={700} fontSize={54} fill={P.risk}>risk passes here</text>
					</g>
				);
			})()}
			{/* the C-rule split: the gap between flag and arrowhead, as one shape */}
			{split > 0 && risk !== undefined && cost !== undefined && (() => {
				const a = sx(risk) + 20, b = STATIONS[cost].x;
				const y = ARROW_Y + 50;
				return (
					<g opacity={split}>
						<path d={`M${a} ${y} v -16 M${a} ${y} H${b} M${b} ${y} v -16`} stroke={P.ink} strokeWidth={5} fill="none" strokeLinecap="round" />
						<rect x={(a + b) / 2 - 300} y={y + 8} width={600} height={64} rx={14} fill="#fff" stroke={P.ink} strokeWidth={3} />
						<text x={(a + b) / 2} y={y + 54} textAnchor="middle" fontFamily={FT.sans} fontWeight={700} fontSize={34} fill={P.ink}>
							<tspan fill={P.risk}>buyer's risk</tspan> · <tspan fill={P.cost}>seller's freight</tspan>
						</text>
					</g>
				);
			})()}
		</svg>
	);
};

const FAM: Record<string, string> = {E: P.E, F: P.F, C: P.Cc, D: P.D};
/** The rule card: big code on its family colour with its shape, full name, mode. */
export const RuleCard: React.FC<{code: string; name: string; sea?: boolean; x?: number; y?: number; p?: number}> = ({code, name, sea, x = 640, y = 110, p = 1}) => (
	<div style={{position: 'absolute', left: x, top: y + 30 * (1 - p), opacity: p, display: 'flex', alignItems: 'center', gap: 26, background: '#fff', border: `4px solid ${P.ink}`, borderRadius: 22, padding: '14px 34px 14px 16px', boxShadow: `8px 8px 0 ${FAM[code[0]]}`}}>
		<div style={{display: 'flex', alignItems: 'center', gap: 14, background: FAM[code[0]], color: FAM_TEXT[code[0]], fontFamily: FT.mono, fontWeight: 700, fontSize: 76, padding: '4px 22px 4px 16px', borderRadius: 14, letterSpacing: 4, border: `3px solid ${P.ink}`}}>
			<FamShape fam={code[0]} size={44} color={FAM_TEXT[code[0]]} />{code}
		</div>
		<div>
			<div style={{fontFamily: FT.sans, fontWeight: 700, fontSize: 46, color: P.ink}}>{name}</div>
			<div style={{fontFamily: FT.sans, fontWeight: 600, fontSize: 32, color: P.soft}}>{sea ? 'sea and inland waterway only' : 'any mode of transport'} · {code[0]} family</div>
		</div>
	</div>
);
