// A lesson mind map that grows: same layout every time (place memory), one branch per idea, branch colours fixed.
// `shown` = how many branches are drawn so far; `lit` = the branch being taught now (others dim); `p` = draw-on
// progress of the newest branch. The same component, scaled down, sits in the corner as the "where are we" map.
import React from 'react';
import {P, FT} from './look';

export type Branch = {title: string; color: string; leaves: string[]};

const CX = 960, CY = 530, RX = 560, RY = 320;
const POS = [0, 2, 4, 6, 8, 10]; // clock positions, fixed per lesson

export const GrowMap: React.FC<{centre: [string, string]; branches: Branch[]; shown: number; lit?: number; p?: number; scale?: number; x?: number; y?: number}> = ({centre, branches, shown, lit, p = 1, scale = 1, x = 0, y = 0}) => (
	<svg width={1920} height={1080} viewBox="0 0 1920 1080" style={{position: 'absolute', left: x, top: y, width: 1920 * scale, height: 1080 * scale}}>
		{branches.slice(0, shown).map((b, i) => {
			const a = (POS[i] / 12) * 2 * Math.PI;
			const bx = CX + RX * Math.sin(a), by = CY - RY * Math.cos(a);
			const right = Math.sin(a) > 0.1, left = Math.sin(a) < -0.1;
			const anchor = right ? 'start' : left ? 'end' : 'middle';
			const q = i === shown - 1 ? p : 1;
			const dimmed = lit !== undefined && lit !== i;
			const mx = (CX + bx) / 2 + (right ? -60 : left ? 60 : 80), my = (CY + by) / 2 + 40;
			const mid = !right && !left;
			// leaves: beside the pill for the top/bottom branch, under it for the side branches
			const lx = mid ? bx + 195 : right ? bx + 20 : bx - 20;
			const ly0 = mid ? by + 14 - ((b.leaves.length - 1) * 44) / 2 : by + 80;
			return (
				<g key={i} opacity={dimmed ? 0.3 : 1}>
					<path d={`M${CX} ${CY} Q ${mx} ${my} ${bx} ${by}`} stroke={b.color} strokeWidth={14} fill="none" strokeLinecap="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - Math.min(1, q * 1.6)} />
					<g opacity={Math.max(0, q * 2 - 0.6)}>
						<rect x={bx - (anchor === 'middle' ? 170 : right ? 0 : 340)} y={by - 36} width={340} height={72} rx={36} fill={b.color} stroke={P.ink} strokeWidth={4} />
						<text x={bx + (anchor === 'middle' ? 0 : right ? 170 : -170)} y={by + 13} textAnchor="middle" fontFamily={FT.sans} fontWeight={700} fontSize={36} fill="#fff">{b.title}</text>
						{b.leaves.map((t, k) => (
							<text key={k} x={lx} y={ly0 + k * 44} textAnchor={mid || right ? 'start' : 'end'} fontFamily={FT.hand} fontWeight={700} fontSize={42} fill={P.ink} opacity={Math.max(0, Math.min(1, q * 3 - 1.4 - k * 0.15))}>{t}</text>
						))}
					</g>
				</g>
			);
		})}
		<ellipse cx={CX} cy={CY} rx={190} ry={120} fill="#fff" stroke={P.ink} strokeWidth={6} />
		<text x={CX} y={CY - 6} textAnchor="middle" fontFamily={FT.sans} fontWeight={700} fontSize={50} fill={P.ink}>{centre[0]}</text>
		<text x={CX} y={CY + 46} textAnchor="middle" fontFamily={FT.hand} fontWeight={700} fontSize={44} fill={P.soft}>{centre[1]}</text>
	</svg>
);

/** The Incoterms map (A07). Order = the order the lesson teaches them. */
export const INCO_MAP: {centre: [string, string]; branches: Branch[]} = {
	centre: ['Incoterms 2020', 'whose ship is it?'],
	branches: [
		{title: 'What they are', color: P.E, leaves: ['ICC rules, 11 of them', 'version 2020', '"CIF Rotterdam Incoterms 2020"']},
		{title: 'Decide 3 things', color: P.ink, leaves: ['where risk passes', 'who pays which cost', 'who clears customs', 'not: price, payment, title']},
		{title: 'The road', color: P.risk, leaves: ['7 stations', 'red baton = risk', 'blue line = cost']},
		{title: 'E · F · C · D', color: P.Cc, leaves: ['E: at the door', 'F: carrier or ship', 'C: risk early, cost far', 'D: at the buyer']},
		{title: 'Mode', color: P.F, leaves: ['sea only: FAS FOB CFR CIF', 'any mode: the other 7', 'containers → FCA, CIP']},
		{title: 'Insurance', color: P.cost, leaves: ['only CIF and CIP', 'CIF: Clauses C (minimum)', 'CIP: Clauses A (wide)', 'at least 110%']},
	],
};

/** The corner "where are we" card: the six branch names, the current one lit, done ones ticked. */
export const MiniMap: React.FC<{branches: Branch[]; lit: number; x?: number; y?: number}> = ({branches, lit, x = 1500, y = 80}) => (
	<div style={{position: 'absolute', left: x, top: y, width: 330, background: 'rgba(255,255,255,0.9)', border: `3px solid ${P.ink}`, borderRadius: 18, padding: '12px 16px', fontFamily: FT.sans}}>
		<div style={{fontWeight: 700, fontSize: 18, letterSpacing: 2, color: P.soft, marginBottom: 6}}>LESSON MAP</div>
		{branches.map((b, i) => (
			<div key={i} style={{display: 'flex', alignItems: 'center', gap: 10, fontSize: 24, lineHeight: '34px', fontWeight: i === lit ? 700 : 500, color: i <= lit ? P.ink : P.faint}}>
				<span style={{width: 16, height: 16, borderRadius: 8, background: i <= lit ? b.color : 'transparent', border: `2px solid ${b.color}`}} />
				{b.title}{i < lit ? ' ✓' : ''}
			</div>
		))}
	</div>
);
