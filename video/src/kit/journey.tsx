// "The road", drawn as the real journey: Tiruppur factory → truck → Chennai quay → on board → the sea → Rotterdam →
// unloaded → customs → the buyer. Seven stations, same places every time Incoterms appear in the course.
// The red baton (risk) and the blue line (cost) ride on it; a rule card sits above.
import React from 'react';
import {P, FT} from './look';

export const STATIONS = [
	{x: 210, label: "Seller's\npremises"},
	{x: 450, label: 'Handed to\ncarrier'},
	{x: 690, label: 'Alongside\nship'},
	{x: 850, label: 'On board\n(Chennai)'},
	{x: 1450, label: 'Arrived,\nready to unload'},
	{x: 1600, label: 'Unloaded\n(Rotterdam)'},
	{x: 1760, label: 'Import\ncleared'},
];
const BASE = 700; // ground line

const Factory: React.FC<{x: number}> = ({x}) => (
	<g transform={`translate(${x - 95}, ${BASE - 150})`} stroke={P.ink} strokeWidth={4} strokeLinejoin="round">
		<rect x={150} y={-40} width={26} height={110} fill="#C8B79A" />
		<path d="M0 150 V60 L50 30 V60 L100 30 V60 L150 30 V150 Z" fill="#E9C9A0" />
		<rect x={20} y={95} width={30} height={30} fill="#fff" /><rect x={70} y={95} width={30} height={30} fill="#fff" />
		<rect x={115} y={100} width={26} height={50} fill={P.soft} />
		<circle cx={168} cy={-60} r={14} fill="#fff" opacity={0.7} stroke="none" /><circle cx={185} cy={-85} r={18} fill="#fff" opacity={0.6} stroke="none" />
	</g>
);
const Truck: React.FC<{x: number}> = ({x}) => (
	<g transform={`translate(${x - 80}, ${BASE - 92})`} stroke={P.ink} strokeWidth={4} strokeLinejoin="round">
		<rect x={0} y={0} width={110} height={66} rx={4} fill={P.Cc} />
		<path d="M110 20 H140 L160 44 V66 H110 Z" fill="#fff" />
		<circle cx={30} cy={74} r={14} fill={P.ink} /><circle cx={130} cy={74} r={14} fill={P.ink} />
	</g>
);
const Crane: React.FC<{x: number}> = ({x}) => (
	<g transform={`translate(${x}, ${BASE})`} stroke={P.ink} strokeWidth={4} fill="none" strokeLinejoin="round">
		<path d="M-30 0 L-20 -230 M30 0 L20 -230 M-20 -230 H20" />
		<path d="M-60 -230 H150 M-60 -230 L0 -290 L150 -230" />
		<line x1={120} y1={-230} x2={120} y2={-120} strokeWidth={2} />
		<rect x={100} y={-120} width={40} height={24} fill={P.F} />
	</g>
);
export const Ship: React.FC<{x: number; y?: number; tilt?: number}> = ({x, y = BASE - 6, tilt = 0}) => (
	<g transform={`translate(${x}, ${y}) rotate(${tilt})`} stroke={P.ink} strokeWidth={4} strokeLinejoin="round">
		<path d="M-120 0 H120 L95 46 H-95 Z" fill="#3B4A5C" />
		{[-95, -55, -15, 25].map((cx, i) => <rect key={i} x={cx} y={-34} width={38} height={34} fill={[P.Cc, P.F, P.risk, P.cost][i]} />)}
		{[-75, -35, 5].map((cx, i) => <rect key={i} x={cx} y={-64} width={38} height={30} fill={[P.D, P.Cc, P.F][i]} />)}
		<rect x={70} y={-70} width={34} height={70} fill="#fff" />
	</g>
);
const Booth: React.FC<{x: number}> = ({x}) => (
	<g transform={`translate(${x - 40}, ${BASE - 120})`} stroke={P.ink} strokeWidth={4} strokeLinejoin="round">
		<rect x={-8} y={20} width={96} height={100} fill="#fff" />
		<path d="M-18 20 H98 L88 0 H-8 Z" fill={P.D} />
		<rect x={14} y={40} width={52} height={30} fill="#CFE6F0" />
		<text x={40} y={102} textAnchor="middle" fontFamily={FT.sans} fontWeight={700} fontSize={18} fill={P.ink} stroke="none">CUSTOMS</text>
		
	</g>
);
const Shop: React.FC<{x: number}> = ({x}) => (
	<g transform={`translate(${x}, ${BASE - 130})`} stroke={P.ink} strokeWidth={4} strokeLinejoin="round">
		<rect x={0} y={30} width={120} height={100} fill="#fff" />
		<path d="M-10 30 H130 L118 0 H2 Z" fill={P.cost} />
		<rect x={44} y={70} width={32} height={60} fill={P.soft} />
	</g>
);

/** The whole road. risk/cost = station index (cost −1 = none); rp/cp = 0..1 draw-on progress. */
export const Journey: React.FC<{risk?: number; cost?: number; rp?: number; cp?: number; ship?: number; dim?: boolean; highlight?: number}> = ({risk, cost, rp = 1, cp = 1, ship = 0, dim = false, highlight}) => {
	const shipX = 1000 + ship * (1330 - 1000);
	return (
		<svg width={1920} height={1080} style={{position: 'absolute', inset: 0, opacity: dim ? 0.45 : 1}}>
			{/* land, sea, land */}
			<path d={`M100 ${BASE} H900 V${BASE + 80} H100 Z`} fill={P.land} />
			<path d={`M900 ${BASE} H1400 V${BASE + 80} H900 Z`} fill={P.sea} opacity={0.75} />
			<path d={`M1400 ${BASE} H1880 V${BASE + 80} H1400 Z`} fill={P.land} />
			{[0, 1, 2, 3, 4, 5, 6, 7].map((i) => <path key={i} d={`M${915 + i * 60} ${BASE + 18} q 14 -12 28 0 t 28 0`} stroke="#fff" strokeWidth={4} fill="none" opacity={0.8} />)}
			<text x={500} y={BASE + 58} textAnchor="middle" fontFamily={FT.hand} fontWeight={700} fontSize={40} fill={P.soft}>India</text>
			<text x={1150} y={BASE + 70} textAnchor="middle" fontFamily={FT.hand} fontWeight={700} fontSize={40} fill="#fff">the sea</text>
			<text x={1640} y={BASE + 58} textAnchor="middle" fontFamily={FT.hand} fontWeight={700} fontSize={40} fill={P.soft}>Netherlands</text>
			<Factory x={210} /><Truck x={450} /><Crane x={690} /><Crane x={1490} />
			<Ship x={shipX} tilt={ship > 0 && ship < 1 ? 2 * Math.sin(ship * 40) : 0} />
			<rect x={1570} y={BASE - 50} width={60} height={50} fill={P.Cc} stroke={P.ink} strokeWidth={4} />
			<Booth x={1700} /><Shop x={1750} />
			{/* stations */}
			{STATIONS.map((s, i) => {
				const hot = i === highlight || i === risk;
				return (
					<g key={i}>
						<circle cx={s.x} cy={BASE + 112} r={hot ? 22 : 18} fill={hot ? P.ink : '#fff'} stroke={P.ink} strokeWidth={4} />
						<text x={s.x} y={BASE + 121} textAnchor="middle" fontFamily={FT.sans} fontWeight={700} fontSize={22} fill={hot ? '#fff' : P.ink}>{i + 1}</text>
						{s.label.split('\n').map((t, k) => <text key={k} x={s.x} y={BASE + 168 + k * 28} textAnchor="middle" fontFamily={FT.sans} fontWeight={hot ? 700 : 500} fontSize={24} fill={hot ? P.ink : P.soft}>{t}</text>)}
					</g>
				);
			})}
			<line x1={210} y1={BASE + 112} x2={1730} y2={BASE + 112} stroke={P.ink} strokeWidth={3} strokeDasharray="2 12" strokeLinecap="round" opacity={0.6} />
			{/* blue cost line: from the seller to the cost station */}
			{cost !== undefined && cost >= 0 && (() => {
				const x2 = STATIONS[cost].x + 40;
				return (
					<g>
						<path d={`M180 ${BASE - 250} H${180 + (x2 - 180) * cp}`} stroke={P.cost} strokeWidth={16} strokeLinecap="round" />
						<path d={`M${180 + (x2 - 180) * cp - 4} ${BASE - 270} l 26 20 l -26 20`} fill={P.cost} stroke={P.cost} strokeWidth={6} opacity={cp > 0.05 ? 1 : 0} />
						<text x={190} y={BASE - 278} fontFamily={FT.hand} fontWeight={700} fontSize={44} fill={P.cost} opacity={cp}>seller pays up to here</text>
					</g>
				);
			})()}
			{/* red baton: a flag planted where risk passes */}
			{risk !== undefined && (() => {
				const x = STATIONS[risk].x, drop = (1 - rp) * -120;
				return (
					<g transform={`translate(0, ${drop})`} opacity={rp}>
						<line x1={x} y1={BASE + 90} x2={x} y2={BASE - 190} stroke={P.ink} strokeWidth={6} />
						<path d={`M${x} ${BASE - 190} l 90 26 l -90 26 Z`} fill={P.risk} stroke={P.ink} strokeWidth={4} />
						<text x={x + 10} y={BASE - 204} fontFamily={FT.hand} fontWeight={700} fontSize={44} fill={P.risk}>risk passes here</text>
					</g>
				);
			})()}
		</svg>
	);
};

const FAM: Record<string, string> = {E: P.E, F: P.F, C: P.Cc, D: P.D};
/** The rule card: big code in its family colour, full name, mode. */
export const RuleCard: React.FC<{code: string; name: string; sea?: boolean; x?: number; y?: number; p?: number}> = ({code, name, sea, x = 640, y = 110, p = 1}) => (
	<div style={{position: 'absolute', left: x, top: y + 30 * (1 - p), opacity: p, display: 'flex', alignItems: 'center', gap: 28, background: '#fff', border: `4px solid ${P.ink}`, borderRadius: 22, padding: '16px 34px 16px 18px', boxShadow: `8px 8px 0 ${FAM[code[0]]}`}}>
		<div style={{background: FAM[code[0]], color: '#fff', fontFamily: FT.mono, fontWeight: 700, fontSize: 76, padding: '4px 22px', borderRadius: 14, letterSpacing: 4}}>{code}</div>
		<div>
			<div style={{fontFamily: FT.sans, fontWeight: 700, fontSize: 44, color: P.ink}}>{name}</div>
			<div style={{fontFamily: FT.sans, fontWeight: 500, fontSize: 28, color: P.soft}}>{sea ? '≈ sea and inland waterway only' : 'any mode of transport'} · {code[0]} family</div>
		</div>
	</div>
);
