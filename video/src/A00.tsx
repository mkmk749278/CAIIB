// A00 · "The market behind the counter" (script v3, cue sheet in course/bfm/A/A00/script.md).
// Built on the shared kit like A07 (PLAYBOOK §5e): notebook page, one picture per idea, a beat per sentence,
// notes in the top band, crossfades only, the lesson map growing at the chapter ends.
import React from 'react';
import {AbsoluteFill, Audio, getInputProps, staticFile, useCurrentFrame} from 'remotion';
import tl from './a00_lines.json';
import {tw} from './theme';
import {PauseCard} from './parts';
import {Page, Thoughts, P, FT} from './kit/look';
import {GrowMap, Branch} from './kit/mindmap';
import {makeFlow, Fd, XF, Timeline} from './kit/flow';
import {Pop, Tag2, Hand, Fig, Speech, Cross, Tick, Counter, Receipt, Coat, Bill, WorldStrip, CENTRES, Calendar4, SeeSaw, Ledger, Road5, Hand2, ClockBand, InfoCard, PriceTag, Coin} from './kit/forex';

const CAP: [RegExp, string][] = [
	[/eighty-five twenty/g, '85.20'], [/eighty-five sixty-five/g, '85.65'], [/nineteen ninety-nine/g, '1999'],
	[/June two thousand/g, 'June 2000'], [/nineteen seventy-one/g, '1971'], [/nineteen seventy-five/g, '1975'],
	[/nineteen ninety-one/g, '1991'], [/nineteen ninety-two/g, '1992'], [/nineteen ninety-three/g, '1993'],
	[/nineteen ninety-four/g, '1994'], [/twenty eighteen/g, '2018'], [/A-zero-five/g, 'A05'],
	[/eleven-thirty and twelve-thirty/g, '11.30 and 12.30'], [/one-thirty/g, '1.30'], [/forty percent/g, '40%'],
	[/sixty percent/g, '60%'], [/eighteen percent/g, '18%'], [/fifteen-minute/g, '15-minute'],
];
const FL = makeFlow(tl as unknown as Timeline, CAP);
const {TOTAL, by, S, E, H, at, W0, sk, ap, glowOf, B, W, Notes, ChapterStrip, Captions, Scene} = FL;

// the lesson map (map_nodes.md), in teaching order: top, right-up, left-up, right-down, left-down
const MAP: {centre: [string, string]; branches: Branch[]} = {
	centre: ['The market', 'behind the counter'],
	branches: [
		{title: 'What forex is', leaves: ['money + 3 pockets', '₹ per 1 USD']},
		{title: 'Players', leaves: ['OTC, 24 hours', '5 motives', '2 tiers']},
		{title: 'Deal dates', leaves: ['cash · tom', 'spot · forward', 'spot = day 2']},
		{title: 'Why rates move', leaves: ['one see-saw', '3 factor groups', 'PPP · parity']},
		{title: 'Regimes and RBI', leaves: ['par value → 1993', 'managed float', 'FBIL rate']},
	],
};

// ---- teacher's notes: one per sentence the scene does not already answer (top band y ≈ 90–150) ----
const c = {center: true};
const T = 92; // top band
B('N00a', 1, 'Module A · class 1', 960, 380, c);
B('N00b', 0, 'last time: the paper', 960, 380, c); B('N00b', 1, 'today: the subject', 960, 380, c);
B('N00c', 0, 'quick question', 960, 380, c);
B('N00d', 0, 'a vague answer?', 960, 380, c); B('N00d', 2, 'IIBF likes this', 960, 380, c);
B('N00e', 1, 'the foundation', 960, T, c); B('N00e', 2, 'no heavy theory', 960, T, c); B('N00e', 3, 'stay with me?', 960, T, c);
B('N01', 0, '11 a.m. at the counter', 1180, T);
B('N03', 0, 'fair question', 1180, T);
B('N04', 0, 'what are you thinking?', 960, T, c);
B('N05', 0, 'which one?', 960, T, {...c, until: ['N05', 1]});
B('N06', 1, 'the honest answer…', 960, T, c); B('N06', 2, 'neither!', 960, T, {...c, size: 70, color: P.risk}); B('N06', 3, 'why: by the end', 960, T, c);
B('N06', 5, 'foreign exchange = ?', 1200, T);
B('N07', 1, 'in force 1 June 2000 · replaced FERA', 1180, T, {size: 50});
B('N08', 1, '= any currency other than Indian', 1180, T, {size: 50});
B('N09', 1, 'foreign currency + 3 more things', 1180, T, {size: 50});
B('N10', 1, "like an exporter's USD account", 1180, T, {size: 50});
B('N11', 0, 'read it again', 1180, T); B('N11', 1, 'payable in ₹ … still forex!', 1180, T); B('N11', 2, 'exam favourite', 1180, T, {color: P.risk});
B('N12', 0, 'the hook', 140, T);
B('N12a', 1, 'direct quote', 1180, T);
B('N12b', 2, 'same rate, opposite feelings', 960, T, c);
B('N12b', 3, 'first chapter done ✓', 140, 150); B('N12b', 4, 'stretch for a second', 140, 150);
B('N13', 0, 'where is this market?', 960, T, c); B('N13', 1, 'a surprise…', 960, T, c);
B('N14', 0, 'OTC = over the counter', 960, T, c); B('N14', 2, 'no exchange in between', 960, T, c);
B('N15', 0, 'it follows the sun', 960, T, c); B('N15', 2, 'round the clock, weekdays', 960, T, c);
B('N16', 1, 'Saturday ✗', 1330, 650, {color: P.risk});
B('N17', 0, "who's trading?", 960, T, c);
B('N18', 0, '5 motives', 960, T, c);
B('N19', 0, 'arbitrage', 960, T, c);
B('N20', 0, 'keeps prices together', 960, T, c);
B('N21', 0, 'two tiers', 960, T, c);
B('N22', 0, 'with me?', 960, T, c); B('N22', 1, 'good ✓', 960, T, c); B('N22', 2, 'asked as a straight question', 960, T, c);
B('N22', 4, 'value date = money changes hands', 960, T, c);
B('N23a', 0, 'spot = the base rate', 960, T, c);
B('N24', 0, 'careful: people slip here', 960, T, {...c, color: P.risk});
B('N24a', 0, 'still with me?', 960, T, c);
B('N24b', 3, 'deep breath', 140, 150);
B('N25', 0, 'back to our customer', 960, T, c); B('N25', 1, 'why dearer today?', 960, T, c);
B('N27', 1, '₹ weakens', 960, T, c); B('N27', 3, 'the whole engine', 960, T, c);
B('N27a', 0, 'the rate = ₹ for one $', 960, T, c); B('N27a', 1, 'more ₹ per $ = weaker ₹', 960, T, c);
B('N27b', 0, 'JAIIB refresher · 30 s', 960, T, c);
B('N28', 0, 'what pushes it?', 140, T);
B('N31', 0, 'quick check', 960, T, {...c, until: ['N31', 3]});
B('N32', 0, 'weaker ✓', 960, T, {...c, color: P.ok}); B('N32', 3, 'purchasing power parity (PPP)', 960, T, c); B('N32', 4, 'the idea only, today', 960, T, c);
B('N33', 0, 'one more idea', 960, T, c);
B('N33a', 1, '₹ at discount ⇄ $ at premium', 960, T, c);
B('N33b', 0, "don't mix the two", 960, T, c); B('N33b', 3, 'the sums: A05', 960, T, c);
B('N34', 0, 'two classic traps', 960, T, c); B('N34', 1, 'chapter 3 done ✓', 140, 150);
B('N35', 0, 'the big question', 960, T, c); B('N35', 1, 'does RBI fix it?', 960, T, c);
B('N36', 0, 'the regimes', 960, T, c);
B('N36a', 0, 'mind two words', 960, T, c);
B('N39', 0, '1991: a crisis', 960, T, c);
B('N40a', 2, 'capital: still limits', 960, T, c);
B('N41', 0, 'so what does RBI do?', 140, T); B('N41', 1, 'fix the rate ✗', 140, T, {color: P.risk}); B('N41', 2, 'managed float', 140, T);
B('N42', 1, 'FBIL · since 10 July 2018', 960, T, c);
B('N43', 1, 'not imposed on your deal', 960, T, c);
B('N44', 0, 'back to our customer', 1180, T); B('N44', 1, 'the one-line answer', 1180, T);
B('N46', 0, 'answers', 200, 790); B('N46', 3, 'the other two weaken it', 200, 790); B('N46', 5, 'all three?', 200, 790); B('N46', 6, 'well done ✓', 200, 790, {color: P.ok});
B('N47', 0, "let's read the map", 140, 70, {size: 48});
B('N48', 0, 'small homework', 960, T, c); B('N48', 2, 'two minutes, that’s all', 960, T, c);
B('N49', 1, 'one question…', 960, T, c);
B('N50', 0, "that's our class", 960, T, c); B('N50', 1, 'see you in the next one', 960, T, c);
W('N45', 'one', 1, '1', 120, 160, {size: 70}); W('N45', 'two', 1, '2', 120, 370, {size: 70}); W('N45', 'three', 1, '3', 120, 580, {size: 70});


// r2: sentences the voice splits differently from the script (sentence_sync on r1), anchored to a spoken word
W('N10a', 'drawn', 1, 'drawn in ₹, payable in foreign currency', 1100, T, {size: 48});
B('N10b', 0, 'pocket 3: the surprise', 1180, T);
W('N11', 'because', 1, '… because it is drawn outside India', 1100, T, {size: 48});
W('N12a', 'so', 1, 'so many ₹ for one $', 1180, T);
W('N16', 'evening', 1, '9 a.m. to 5 p.m. IST', 1330, 560);
W('N21', 'merchant', 2, 'merchant = any customer', 960, T, c);
W('N23', 'cash', 1, 'cash = same day', 960, T, c); W('N23', 'tom', 1, 'tom = next working day', 960, T, c);
W('N23', 'spot', 1, 'spot = 2nd working day', 960, T, c); W('N23', 'forward', 1, 'forward = beyond spot', 960, T, c);
W('N24', 'weekends', 1, 'weekends, holidays: skipped', 960, T, {...c, color: P.ink});
B('N26', 1, '← want dollars', 140, T); W('N26', 'other', 1, 'have dollars to sell →', 1180, T);
W('N27a', 'customer', 1, '85.65: the ₹ fell a little', 960, T, c);
W('N29', 'weakens', 1, 'CAD → ₹ weaker', 140, T); W('N29', 'finances', 1, '+ fiscal · FDI/FPI · stability', 140, T);
W('N30', 'speculative', 1, 'speculative = expectations', 140, T);
W('N33', 'future', 1, 'a price for a future date', 960, T, c);
W('N34', 'fall', 1, "now you won't fall for them ✓", 960, T, c);
W('N47', 'money', 1, 'money + 3 pockets', 140, 70, {size: 48}); W('N47', 'cash', 1, 'cash · tom · spot · forward', 140, 70, {size: 48});
W('N47', 'value', 1, 'par value → managed float', 140, 70, {size: 48}); W('N47', 'steadying', 1, 'RBI steadies, never fixes', 140, 70, {size: 48});
W('N48', 'side', 1, 'each on the side it pushes', 960, T, c);

const Full: React.FC<{o: number; children: React.ReactNode}> = ({o, children}) => (o <= 0 ? null : <AbsoluteFill style={{background: P.paper, opacity: o}}>{children}</AbsoluteFill>);

export const A00: React.FC = () => {
	const f = useCurrentFrame();
	const layer = (getInputProps() as {layer?: string}).layer;
	const Root: React.FC<{children: React.ReactNode}> = layer ? ({children}) => <AbsoluteFill style={{background: '#fff'}}>{children}</AbsoluteFill> : Page;
	// p(id, k): 0..1 as sentence k of line id starts; out(t): 1 → 0 from frame t
	const p = (id: string, k = 0, n = 16) => ap(f, sk(id, k), n);
	const out = (t: number) => 1 - tw(f, t - 2, t + XF);
	const mapMoment = (a: number, b: number) => Math.min(tw(f, a - 6, a + XF), 1 - tw(f, b, b + XF));
	return (
		<Root>
			{!layer || layer === 'scene' ? <AbsoluteFill>
				{/* ---------------- Warm-up ---------------- */}
				<Scene a={0} b={S('N01')}>
					{(f) => {
						const back = tw(f, sk('N00a', 1) - 10, sk('N00a', 1) + 30);
						const mapO = mapMoment(sk('N00e', 0), S('N01') + 30);
						return (
							<>
								<AbsoluteFill style={{transform: `translateY(${-40 * back}px) scale(${1 - 0.42 * back})`, transformOrigin: '50% 0', opacity: 1 - 0.0 * back}}>
									<div style={{position: 'absolute', top: 150, width: '100%', textAlign: 'center', fontFamily: FT.sans, fontWeight: 700, fontSize: 30, letterSpacing: 4, color: P.soft, opacity: tw(f, 0, 20)}}>CAIIB · BFM · MODULE A · A00</div>
									<div style={{position: 'absolute', top: 200, width: '100%', textAlign: 'center', fontFamily: FT.sans, fontWeight: 700, fontSize: 120, color: P.ink, opacity: tw(f, 5, 25)}}>The market behind the counter</div>
									<div style={{position: 'absolute', top: 360, width: '100%', textAlign: 'center', fontFamily: FT.hand, fontWeight: 700, fontSize: 76, color: P.soft, opacity: tw(f, 15, 35)}}>who moves the rupee's rate?</div>
									<div style={{position: 'absolute', top: 500, left: 360, width: 1200, textAlign: 'center', background: '#fff', border: `3px solid ${P.ink}`, borderRadius: 18, padding: '16px 24px', fontFamily: FT.sans, fontWeight: 500, fontSize: 32, color: P.ink, opacity: tw(f, 20, 40)}}>
										Rules taught: FEMA 1999 and FEDAI Rules as at 31 December 2026 · RBI Annual Report 2025-26 · FBIL methodology (version of 15 Jan 2019)
									</div>
									<div style={{position: 'absolute', top: 680, width: '100%', textAlign: 'center', fontFamily: FT.sans, fontWeight: 500, fontSize: 32, color: P.soft, opacity: tw(f, 25, 45)}}>The voice in this lesson is AI-generated · names and rates are illustrative</div>
								</AbsoluteFill>
								{/* N00b: no calculator today */}
								<Pop x={760} y={520} p={p('N00b', 2)} q={out(S('N00c'))}>
									<div style={{display: 'flex', alignItems: 'center', gap: 30}}>
										<svg width={180} height={240} viewBox="0 0 180 240"><rect x={6} y={6} width={168} height={228} rx={20} fill="#3A4656" stroke={P.ink} strokeWidth={4} /><rect x={24} y={24} width={132} height={52} rx={6} fill="#CFE0C3" />{[...Array(12)].map((_, i) => <rect key={i} x={24 + (i % 3) * 46} y={92 + Math.floor(i / 3) * 34} width={38} height={26} rx={5} fill="#E4D8BD" />)}</svg>
										<Tag2 size={46} color={P.risk} border={P.risk}>not today</Tag2>
									</div>
								</Pop>
								{/* N00c: the headline */}
								<Pop x={960} y={540} p={p('N00c', 1)} q={out(sk('N00d', 1))} center>
									<div style={{display: 'flex', alignItems: 'center', gap: 30}}>
										<div style={{background: '#fff', border: `4px solid ${P.ink}`, borderRadius: 8, padding: '18px 34px', fontFamily: FT.sans, fontWeight: 700, fontSize: 58, color: P.ink, boxShadow: '8px 8px 0 rgba(31,42,55,0.15)'}}>Rupee slips against dollar</div>
										<div style={{fontFamily: FT.sans, fontWeight: 700, fontSize: 140, color: P.gold, WebkitTextStroke: `3px ${P.ink}`}}>?</div>
									</div>
								</Pop>
								{/* N00d: vague guesses, then the exam chips */}
								{['RBI?', 'Govt?', 'the market?', 'someone?'].map((t, i) => (
									<Pop key={t} x={330 + i * 360} y={560 + (i % 2) * 90} p={tw(f, sk('N00d', 1) - 6 + i * 10, sk('N00d', 1) + 14 + i * 10) * 0.7} q={out(sk('N00d', 3))}><Hand size={72} color={P.soft}>{t}</Hand></Pop>
								))}
								{['Factors affecting rates · Jun 2023', 'Settlement dates · Jun 2023'].map((t, i) => (
									<Pop key={t} x={960} y={540 + i * 120} p={tw(f, sk('N00d', 3) - 4 + i * 18, sk('N00d', 3) + 12 + i * 18)} q={out(sk('N00e', 0))} center rot={-2}>
										<Tag2 size={46} border={P.ink} bg="#FFF4C9">in the exam: {t}</Tag2>
									</Pop>
								))}
								{/* N00e: the empty lesson map, a branch outlined */}
								<Full o={mapO}><GrowMap {...MAP} shown={0} /><div style={{position: 'absolute', left: 1100, top: 210, opacity: tw(f, sk('N00e', 0) + 20, sk('N00e', 0) + 40), fontFamily: FT.hand, fontWeight: 700, fontSize: 52, color: P.soft}}>5 branches to grow today</div></Full>
							</>
						);
					}}
				</Scene>

				{/* ---------------- Opening: the counter, the receipt, two guesses ---------------- */}
				<Scene a={S('N01')} b={sk('N06', 4)}>
					{(f) => {
						const dim = 1 - 0.85 * tw(f, sk('N04', 0) - 6, sk('N04', 0) + 18);
						return (
							<>
								<div style={{opacity: dim}}>
									<Counter x={80} y={170} s={0.85} board={f >= sk('N02', 1) - 4 ? '85.65' : ''} boardP={p('N02', 1)} boardGlow={glowOf(f, ['board'], S('N02'), E('N02'))} />
									<Pop x={0} y={0} p={p('N01', 0)}><div style={{position: 'absolute', left: 120, top: 120}}><Tag2 size={28} color={P.soft} border={P.soft}>illustrative</Tag2></div></Pop>
									<Fig x={330} y={450} color="#8FA4B4" o={p('N01', 0)} />
									<Fig x={1350} y={560} s={1.3} color="#B8A27A" o={p('N01', 1)} label="customer" />
									<Receipt x={1500} y={330} p={p('N01', 1)} rate="85.20" when="yesterday" s={f >= sk('N02', 0) ? 1 + 0.15 * p('N02', 0) : 1} />
									<Speech x={1120} y={150} w={520} p={p('N02', 2)} q={out(S('N03'))} tail="right">Who changed it?<br />{f >= sk('N02', 3) - 4 ? <span style={{opacity: p('N02', 3)}}>RBI?</span> : null}</Speech>
																	</div>
								{/* N04–N06: "Some of you" / "Others", both crossed on "Neither" */}
								<AbsoluteFill style={{opacity: Math.min(tw(f, sk('N04', 0), sk('N04', 0) + 14), 1)}}>
									<Thoughts f={f} a={sk('N04', 1) - 20} b={at('N04', 'few', 0.6) - 10} left="RBI fixes it every morning · banks follow" right="each bank sets its own, any rate" />
								</AbsoluteFill>
								{f >= sk('N05', 0) && f < sk('N05', 1) ? <AbsoluteFill style={{opacity: 0.5 + 0.5 * Math.sin((f - sk('N05', 0)) / 5) ** 2, pointerEvents: 'none'}} /> : null}
								<Cross x={330} y={330} w={520} h={230} p={tw(f, sk('N06', 2) - 2, sk('N06', 2) + 20)} />
								<Cross x={1130} y={330} w={520} h={230} p={tw(f, sk('N06', 2) + 6, sk('N06', 2) + 28)} />
								<PauseCard top f={f} from={sk('N05', 1) - 4} to={H('N05') + 4} q="RBI fixes it, or each bank sets any rate?" timerFrom={E('N05')} timerFrames={by.N05.hold} />
							</>
						);
					}}
				</Scene>

				{/* ---------------- Chapter 1 · What foreign exchange is ---------------- */}
				<ChapterStrip f={f} from={W0('N06')} n={1} title="What foreign exchange is" />
				<Scene a={sk('N06', 4)} b={S('N12a')}>
					{(f) => {
						const hook = tw(f, sk('N12', 0) - 6, sk('N12', 0) + 20);
						const lit = 3 * tw(f, sk('N09', 2) - 6, sk('N09', 2) + 40, (x) => x);
						const fill = f < S('N10') ? 0 : f < S('N10a') ? p('N10', 0, 30) : f < S('N10b') ? 1 + p('N10a', 0, 30) : 2 + p('N10b', 1, 30);
						return (
							<>
								{/* the counter shrinks to the left corner */}
								<div style={{position: 'absolute', left: 0, top: 0, opacity: 0.55 * (1 - hook)}}><Counter x={110} y={720} s={0.22} board="85.65" /></div>
								{/* FEMA card */}
								<Pop x={140} y={190} p={p('N07', 0)} q={1 - hook}>
									<InfoCard title="THE LAW" w={600} size={40}>
										FEMA 1999 <span style={{fontWeight: 500, fontSize: 30}}>(Foreign Exchange Management Act)</span>
										<div style={{opacity: p('N08', 0), fontSize: 32, marginTop: 10}}>s. 2(m) foreign currency: any currency other than Indian</div>
										<div style={{opacity: p('N09', 0), fontSize: 32, marginTop: 10}}>s. 2(n) foreign exchange: foreign currency <span style={{background: `rgba(242,179,61,${0.8 * glowOf(f, ['include'], S('N09'), E('N09'))})`}}>includes</span> + 3 more</div>
									</InfoCard>
								</Pop>
								{['USD', 'EUR', 'JPY', 'AED'].map((cd, i) => <Bill key={cd} code={cd} x={150 + i * 150} y={560 + (i % 2) * 30} p={tw(f, sk('N08', 2) - 4 + i * 8, sk('N08', 2) + 12 + i * 8)} rot={-6 + i * 4} />).map((el, i) => <div key={i} style={{opacity: out(S('N10'))}}>{el}</div>)}
								{/* the coat */}
								<div style={{position: 'absolute', left: 0, top: 0, opacity: tw(f, sk('N06', 4) - 4, sk('N06', 4) + 30) * (1 - 0.0 * hook)}}>
									<div style={{position: 'absolute', left: 690 + 180 * hook, top: 210, transform: `scale(${0.9 - 0.1 * hook})`, transformOrigin: '0 0'}}>
										<Coat x={0} y={0} lit={lit} fill={fill * (1 - hook)} glow={[0, 0, Math.max(glowOf(f, ['three'], S('N10b'), sk('N10b', 1)), 0)]} globe={p('N11', 1)} texts={['deposits · credits · balances in foreign currency', 'drafts · TCs · LCs · bills: drawn in ₹, payable in foreign currency', 'the same papers, drawn outside India, payable in ₹']} />
									</div>
								</div>
								{/* N12: the hook */}
								<Pop x={150} y={300} p={p('N12', 1)}>
									<div style={{display: 'flex', gap: 20, alignItems: 'center'}}>
										<Bill code="USD" x={0} y={0} p={1} />
										<div style={{width: 190}} />
									</div>
									<div style={{position: 'absolute', top: 120, left: 0}}><Tag2 size={40}>foreign currency</Tag2><Hand size={48} style={{marginTop: 10}}>= the money itself</Hand></div>
								</Pop>
								<Pop x={760} y={170} p={p('N12', 2)}>
									<svg width={600} height={60} viewBox="0 0 600 60"><path d="M10 50 V20 H590 V50" fill="none" stroke={P.ink} strokeWidth={6} strokeLinejoin="round" /></svg>
									<div style={{position: 'absolute', top: -60, left: 80}}><Tag2 size={40} bg="#FFF4C9">foreign exchange = money + the 3 pockets</Tag2></div>
								</Pop>
							</>
						);
					}}
				</Scene>
				<Scene a={S('N12a')} b={S('N13')}>
					{(f) => {
						const mapO = mapMoment(sk('N12b', 3), S('N13') + 6);
						return (
							<>
								<Pop x={960} y={220} p={p('N12a', 0)} center><PriceTag sub="the price of one currency in another" /></Pop>
								<Fig x={520} y={480} s={1.2} color="#8FA4B4" o={p('N12b', 0)} label="importer" />
								<Pop x={300} y={800} p={p('N12b', 0)}><Tag2 size={36}>pays USD · wants a strong ₹</Tag2></Pop>
								<Fig x={1400} y={480} s={1.2} color="#B8A27A" o={p('N12b', 1)} label="exporter" />
								<Pop x={1170} y={800} p={p('N12b', 1)}><Tag2 size={36}>gets USD · likes a weak ₹</Tag2></Pop>
								<Full o={mapO}>
									<GrowMap {...MAP} shown={1} newFrom={0} p={tw(f, sk('N12b', 3), sk('N12b', 3) + 50)} lit={0} />
									<div style={{position: 'absolute', left: 140, top: 60, opacity: tw(f, sk('N12b', 3) + 10, sk('N12b', 3) + 30)}}><Tag2 size={34} color="#fff" bg={P.ok} border={P.ok}>✓ chapter 1</Tag2></div>
								</Full>
							</>
						);
					}}
				</Scene>

				{/* ---------------- Chapter 2 · The market and its players ---------------- */}
				<ChapterStrip f={f} from={W0('N13')} n={2} title="The market and its players" />
				<Scene a={S('N13')} b={S('N19')}>
					{(f) => {
						const strip = Math.min(p('N15', 0), out(S('N18')));
						const lit = 7 * tw(f, sk('N15', 1) - 4, sk('N15', 2), (x) => x);
						const up = tw(f, S('N18') - 6, S('N18') + 24);
						return (
							<>
								{/* N13: no building */}
								<Pop x={960} y={330} p={p('N13', 2)} q={out(S('N14'))} center>
									<div style={{position: 'relative'}}>
										<svg width={420} height={420} viewBox="0 0 420 420"><path d="M60 400 V140 L210 50 L360 140 V400 Z" fill="none" stroke={P.ink} strokeWidth={6} strokeDasharray="14 12" />{[0, 1, 2].map((i) => <rect key={i} x={110 + i * 80} y={180} width={40} height={180} fill="none" stroke={P.ink} strokeWidth={4} strokeDasharray="10 10" />)}</svg>
										<Cross x={50} y={60} w={320} h={330} p={tw(f, sk('N13', 2) + 6, sk('N13', 2) + 30)} />
										<div style={{textAlign: 'center'}}><Hand size={50}>a forex exchange building?</Hand></div>
									</div>
								</Pop>
								{/* N14: not our branch counter; dealer screens linked */}
								<Pop x={240} y={300} p={p('N14', 1)} q={out(S('N15'))}>
									<div style={{position: 'relative', width: 280, height: 220}}><Counter x={0} y={0} s={0.28} board="" /><Cross x={10} y={10} w={260} h={190} p={tw(f, sk('N14', 1) + 8, sk('N14', 1) + 30)} /></div>
									<Tag2 size={34} color={P.risk} border={P.risk}>not this counter</Tag2>
								</Pop>
								<Pop x={720} y={260} p={p('N14', 3)} q={out(S('N15'))}>
									<svg width={1000} height={520} viewBox="0 0 1000 520">
										{[[120, 80], [560, 40], [820, 260], [300, 330], [640, 420]].map(([x, y], i, a) => (
											<g key={i}>
												{a.slice(i + 1).map(([x2, y2], j) => <line key={j} x1={x + 90} y1={y + 55} x2={x2 + 90} y2={y2 + 55} stroke={P.steel} strokeWidth={3} strokeDasharray="8 8" opacity={tw(f, sk('N14', 3) + 10, sk('N14', 3) + 40)} />)}
											</g>
										))}
										{[[120, 80, 'bank'], [560, 40, 'bank'], [820, 260, 'dealer'], [300, 330, 'bank'], [640, 420, 'dealer']].map(([x, y, t], i) => (
											<g key={i} transform={`translate(${x},${y})`}><rect width={180} height={110} rx={10} fill="#fff" stroke={P.ink} strokeWidth={4} /><rect x={14} y={14} width={152} height={60} rx={4} fill="#DDE7EA" /><text x={90} y={100} textAnchor="middle" style={{fontFamily: FT.sans, fontWeight: 700, fontSize: 22, fill: P.ink}}>{t as string}</text></g>
										))}
									</svg>
								</Pop>
								{/* N15–N16: the world strip */}
								<div style={{position: 'absolute', inset: 0, transform: `translateY(${-110 * up}px)`}}>
									<WorldStrip y={300} o={strip} lit={lit} sun={tw(f, sk('N15', 1) - 4, sk('N15', 2), (x) => x)} glow={CENTRES.map((cc) => (cc.n === 'Mumbai' ? Math.max(glowOf(f, ['india'], S('N16'), E('N16')), 0) : 0))} />
								</div>
								<Pop x={420} y={620} p={p('N16', 0)} q={out(S('N17'))}>
									<InfoCard title="INDIA · FEDAI RULE 1.1" w={860} size={44}>normal hours for rupee deals: 9.00 a.m. to 5.00 p.m. IST</InfoCard>
								</Pop>
								{/* N17: the players */}
								{[['RBI', 'reserves · steadying', 'N17', 1], ['banks', 'customers · own trading', 'N17', 2], ['companies', 'trade · protection', 'N17a', 0], ['investors', 'funds', 'N17a', 1], ['brokers', 'buyers ↔ sellers', 'N17a', 2], ['individuals', '', 'N17a', 3]].map(([t, s, id, k], i) => (
									<Pop key={t as string} x={140 + (i % 3) * 570} y={600 + Math.floor(i / 3) * 130 - 400 * up} p={p(id as string, k as number)}>
										<div style={{display: 'flex', alignItems: 'baseline', gap: 14}}><Tag2 size={40}>{t}</Tag2><Hand size={40} color={P.soft}>{s}</Hand></div>
									</Pop>
								))}
								{/* N18: five motives */}
								{['trade', 'investment', 'hedging', 'speculation', 'arbitrage'].map((t, i) => (
									<Pop key={t} x={130 + i * 345} y={520} p={tw(f, sk('N18', 1) - 4 + i * 8, sk('N18', 1) + 14 + i * 8)}>
										<Tag2 size={42} bg={i === 4 ? '#FFF4C9' : '#fff'}>{t}</Tag2>
									</Pop>
								))}
								<Pop x={330} y={640} p={p('N18', 2)}><InfoCard w={560} size={36}>hedging = protect yourself from a rate change</InfoCard></Pop>
								<Pop x={1010} y={640} p={p('N18', 3)}><InfoCard w={600} size={36}>speculation = take a risk to profit from a move</InfoCard></Pop>
							</>
						);
					}}
				</Scene>
				<Scene a={S('N19')} b={S('N22')}>
					{(f) => {
						const close = tw(f, sk('N20', 0), sk('N20', 0) + 60);
						const tiers = tw(f, S('N21') - 6, S('N21') + 20);
						return (
							<>
								<div style={{opacity: 1 - tiers}}>
									<Pop x={140} y={200} p={p('N19', 0)}><InfoCard title="RULE CARD" tone="ink" w={520} size={52}>Arbitrage</InfoCard></Pop>
									<Pop x={140} y={380} p={p('N19', 1)}>
										<div style={{display: 'flex', alignItems: 'center', gap: 26}}>
											<InfoCard title="CENTRE A" w={300} size={46}>{(85.2 + 0.05 * close).toFixed(2)}</InfoCard>
											<svg width={180} height={60}><path d="M10 30 H150" stroke={P.ink} strokeWidth={8} /><path d="M140 10 L170 30 L140 50 Z" fill={P.ink} /></svg>
											<InfoCard title="CENTRE B" w={300} size={46}>{(85.3 - 0.05 * close).toFixed(2)}</InfoCard>
										</div>
										<Hand size={46} style={{marginTop: 10}}>buy where cheap, sell where dear · same moment</Hand>
									</Pop>
									<Pop x={140} y={660} p={p('N19', 2)}><Tag2 size={38}>simple: 2 currencies or 2 centres</Tag2></Pop>
									<Pop x={1220} y={280} p={p('N19', 3)}>
										<svg width={520} height={420} viewBox="0 0 520 420">
											<path d="M260 50 L460 360 L60 360 Z" fill="none" stroke={P.ink} strokeWidth={5} strokeDasharray="1 0" />
											{[[260, 50, '₹'], [460, 360, '$'], [60, 360, '€']].map(([x, y, s]) => <g key={s as string}><circle cx={x as number} cy={y as number} r={46} fill="#E9D9A6" stroke={P.ink} strokeWidth={4} /><text x={x as number} y={(y as number) + 18} textAnchor="middle" style={{fontFamily: FT.sans, fontWeight: 700, fontSize: 52, fill: P.ink}}>{s as string}</text></g>)}
											<path d="M350 190 l 30 -6 l -6 30" fill="none" stroke={P.ink} strokeWidth={5} /><path d="M260 380 l -26 -16 l 26 -16" fill="none" stroke={P.ink} strokeWidth={5} /><path d="M150 200 l -10 -28 l 28 6" fill="none" stroke={P.ink} strokeWidth={5} />
										</svg>
										<Tag2 size={36}>compound: 3 or more</Tag2>
									</Pop>
									<Pop x={140} y={760} p={p('N20', 0)}><Tag2 size={36} bg="#FFF4C9">gap closes → prices in centres stay close</Tag2></Pop>
								</div>
								{/* N21: two tiers */}
								<Pop x={300} y={230} p={p('N21', 1)}><InfoCard title="UPPER TIER · WHOLESALE" w={1320} size={50}>interbank market · bank ↔ bank</InfoCard></Pop>
								<Pop x={300} y={520} p={p('N21', 2)}><InfoCard title="LOWER TIER" w={1320} size={50}>merchant market · bank ↔ any customer</InfoCard></Pop>
								<Pop x={900} y={420} p={p('N21', 3)}>
									<div style={{display: 'flex', alignItems: 'center', gap: 20}}><svg width={60} height={100}><path d="M30 0 V80" stroke={P.ink} strokeWidth={8} /><path d="M10 70 L30 98 L50 70 Z" fill={P.ink} /></svg><Tag2 size={36} bg="#FFF4C9">merchant rate = interbank rate + margin</Tag2></div>
								</Pop>
							</>
						);
					}}
				</Scene>
				<Scene a={S('N22')} b={S('N25')}>
					{(f) => {
						const fill = f < S('N23') ? 0 : 4 * Math.min(1, Math.max(0, [1, 2, 3, 4].reduce((a, k) => a + (f >= sk('N23', k) - 4 ? 0.25 : 0), 0)));
						const trap = Math.min(p('N24', 0), out(S('N24a')));
						const mapO = mapMoment(sk('N24b', 2), S('N25') + 6);
						return (
							<>
								<Calendar4 x={198} y={230} reveal={4 * tw(f, sk('N22', 3) - 4, sk('N22', 3) + 30, (x) => x)} fill={fill} hi={f >= sk('N23a', 0) - 4 ? 2 : undefined} glow={[0, 0, glowOf(f, ['spot'], S('N23a'), E('N23a')), 0]} texts={['cash / ready · same day', 'tom · next working day', 'spot · 2nd working day', 'forward · beyond spot']} />
								<Pop x={198} y={560} p={p('N23', 0)} q={out(S('N24'))}><Tag2 size={34}>FEDAI · the banks' association · forex rules</Tag2></Pop>
								<Pop x={1000} y={560} p={p('N23a', 1)} q={out(S('N24'))}><Tag2 size={34} bg="#FFF4C9">spot = the default quote</Tag2></Pop>
								<Pop x={760} y={660} p={p('N23a', 2)} q={out(S('N24'))}>
									<div style={{display: 'flex', alignItems: 'center', gap: 16}}><svg width={120} height={50}><path d="M10 25 H100" stroke={P.ink} strokeWidth={7} /><path d="M92 8 L118 25 L92 42 Z" fill={P.ink} /></svg><Tag2 size={34}>1-month forward: counted from the spot date</Tag2></div>
								</Pop>
								{/* N24: the trap */}
								<Pop x={198} y={560} p={trap}>
									<InfoCard title="⚠ TRAP" tone="trap" w={760} size={44}>
										<div style={{opacity: p('N24', 1)}}>spot = today <span style={{color: P.risk}}>✗</span></div>
										<div style={{opacity: p('N24', 2)}}>spot = 2nd working day <span style={{color: P.ok}}>✓</span></div>
									</InfoCard>
								</Pop>
								<Pop x={1010} y={580} p={Math.min(p('N24', 3), out(S('N24a')))}>
									<div style={{display: 'flex', gap: 10}}>
										{['Mon deal', 'Tue', 'Wed holiday', 'Thu = spot'].map((d, i) => <div key={d} style={{width: 168, padding: '12px 6px', textAlign: 'center', background: i === 3 ? P.ink : '#fff', color: i === 3 ? '#fff' : P.ink, border: `3px solid ${P.ink}`, borderRadius: 12, fontFamily: FT.sans, fontWeight: 700, fontSize: 28, textDecoration: i === 2 ? 'line-through' : undefined, opacity: tw(f, sk('N24', 3) + i * 10, sk('N24', 3) + 12 + i * 10)}}>{d}</div>)}
									</div>
								</Pop>
								{/* N24a: forward delivery on a holiday */}
								<Pop x={960} y={560} p={p('N24a', 1)} q={out(sk('N24b', 0))} center><Tag2 size={38}>forward delivery date falls on a holiday</Tag2></Pop>
								<Pop x={160} y={680} p={p('N24a', 2)} q={out(sk('N24b', 0))}><InfoCard w={760} size={36}>← known 3+ working days ahead: deliver on the working day before</InfoCard></Pop>
								<Pop x={1000} y={680} p={p('N24a', 3)} q={out(sk('N24b', 0))}><InfoCard w={760} size={36}>sudden holiday: deliver on the next working day → <span style={{fontSize: 26, color: P.soft}}>FEDAI 1.4, 5.2</span></InfoCard></Pop>
								<Pop x={960} y={600} p={p('N24b', 0)} center>
									<InfoCard title="HOOK · FORWARD DELIVERY" w={900} size={52} glow={glowOf(f, ['sudden'], sk('N24b', 1), E('N24b'))}>known early → go back<span style={{opacity: p('N24b', 1)}}> · sudden → go forward</span></InfoCard>
								</Pop>
								<Full o={mapO}>
									<GrowMap {...MAP} shown={3} newFrom={1} p={tw(f, sk('N24b', 2), sk('N24b', 2) + 60)} lit={2} />
									<div style={{position: 'absolute', left: 140, top: 60, opacity: tw(f, sk('N24b', 2) + 10, sk('N24b', 2) + 30)}}><Tag2 size={34} color="#fff" bg={P.ok} border={P.ok}>✓ chapter 2</Tag2></div>
								</Full>
							</>
						);
					}}
				</Scene>

				{/* ---------------- Chapter 3 · Why rates move ---------------- */}
				<ChapterStrip f={f} from={W0('N25')} n={3} title="Why rates move" />
				<Scene a={S('N25')} b={S('N31')}>
					{(f) => {
						const tilt = -tw(f, sk('N27', 0), sk('N27', 0) + 40) + 2 * tw(f, sk('N27', 2), sk('N27', 2) + 50) - 2 * tw(f, sk('N27a', 1), sk('N27a', 1) + 50);
						const led = Math.min(tw(f, S('N27b') - 6, S('N27b') + 18), out(S('N28')));
						const small = tw(f, S('N28') - 6, S('N28') + 30);
						const seesawO = p('N26', 0, 30) * (1 - 0.88 * led);
						const boxes = p('N28', 1);
						return (
							<>
								<Receipt x={150} y={170} p={p('N25', 0)} q={out(S('N27b'))} rate="85.65" when="today" s={0.7} stamp={p('N27a', 2)} />
								<div style={{position: 'absolute', inset: 0, opacity: seesawO, transform: `translate(${240 * small}px, ${-150 * small}px) scale(${1 - 0.4 * small})`, transformOrigin: '360px 300px'}}>
									<SeeSaw x={360} y={300} tilt={f >= S('N28') ? 0 : tilt} lp={p('N26', 1)} rp={p('N26', 3)} li={3 * p('N26', 2, 40)} ri={3 * p('N26', 4, 40)} leftItems={['importers', 'students', 'money going out']} rightItems={['exporters', 'remittances', 'money coming in']} glow={glowOf(f, ['engine'], S('N27'), E('N27'))} />
								</div>
								<Pop x={1300} y={190} p={p('N27', 1)} q={out(sk('N27', 2))}><Tag2 size={40} color={P.risk} border={P.risk}>dollar side heavy → ₹ weaker</Tag2></Pop>
								<Pop x={1300} y={190} p={p('N27', 2)} q={out(S('N27a'))}><Tag2 size={40} color={P.ok} border={P.ok}>dollars pour in → ₹ stronger</Tag2></Pop>
								<Pop x={1340} y={170} p={p('N27a', 0)} q={out(S('N27b'))}><PriceTag /></Pop>
								<Pop x={1340} y={270} p={p('N27a', 1)} q={out(S('N27b'))}><InfoCard w={520} size={44}>85.20 → 85.65 <span style={{color: P.risk}}>↑ more ₹ per $</span><div style={{fontSize: 34, marginTop: 6}}>= the rupee fell a little</div></InfoCard></Pop>
								{/* N27b–N27c: the ledger */}
								<Ledger x={410} y={250} p={Math.min(p('N27b', 1), out(S('N28')))} c1={p('N27c', 0, 30)} c2={p('N27c', 1, 30)} />
								<Pop x={760} y={640} p={Math.min(p('N27c', 2), out(S('N28')))}>
									<div style={{position: 'relative', display: 'inline-block'}}><Tag2 size={38}>your branch's current account (CA)</Tag2><Cross x={0} y={0} w={560} h={60} p={tw(f, sk('N27c', 2) + 8, sk('N27c', 2) + 30)} /></div>
									<Hand size={44} style={{marginTop: 8}}>not this one!</Hand>
								</Pop>
								{/* N28–N30: three groups of factors */}
								{[{t: 'fundamental', id: 'N29', lines: [['economy itself', 0], ['CAD: spend > earn → ₹ weaker', 1], ['inflation here > abroad → ₹ weaker', 2], ['interest rates ↑ → money in → ₹ stronger', 3], ['growth · fiscal · FDI/FPI · stability', 4]]}, {t: 'technical', id: 'N30', lines: [['how the market is set up', 0], ['controls · capital limits · the day’s demand and supply', 1]]}, {t: 'speculative', id: 'N30', lines: [['expectations', 2], ['expect $ up → buy → $ up', 3]]}].map((bx, i) => (
									<Pop key={bx.t} x={110 + i * 580} y={470} p={tw(f, sk('N28', 1) - 4 + i * 8, sk('N28', 1) + 14 + i * 8)}>
										<div style={{width: 540, minHeight: 300, background: '#fff', border: `4px solid ${P.ink}`, borderRadius: 18, padding: '14px 22px', boxShadow: '7px 7px 0 rgba(31,42,55,0.15)'}}>
											<div style={{fontFamily: FT.sans, fontWeight: 700, fontSize: 40, color: P.ink, opacity: p('N28', 2)}}>{bx.t}</div>
											{bx.lines.map(([t, k]) => <div key={t as string} style={{fontFamily: FT.sans, fontWeight: 600, fontSize: 30, color: P.ink, marginTop: 8, opacity: p(bx.id, k as number)}}>{t}</div>)}
										</div>
									</Pop>
								))}
								{boxes < 0 ? null : null}
							</>
						);
					}}
				</Scene>
				<Scene a={S('N31')} b={S('N35')}>
					{(f) => {
						const cl = Math.min(1, out(sk('N32', 1)));
						const mapO = mapMoment(sk('N34', 1), S('N35') + 6);
						const ppp = tw(f, sk('N32', 1), sk('N32', 2) + 30);
						return (
							<>
								<AbsoluteFill style={{opacity: cl}}>
									<Thoughts f={f} a={sk('N31', 1) - 20} b={sk('N31', 2) - 6} left="inflation India > US → ₹ stronger" right="… → ₹ weaker" wrong="left" crossAt={sk('N32', 0)} />
								</AbsoluteFill>
								<Tick x={1500} y={370} s={1.4} p={tw(f, sk('N32', 0), sk('N32', 0) + 20) * cl} />
								<PauseCard top f={f} from={sk('N31', 3) - 4} to={H('N31') + 4} q="India's inflation higher: rupee stronger or weaker?" timerFrom={E('N31')} timerFrames={by.N31.hold} />
								{/* N32: two baskets */}
								<Pop x={200} y={240} p={p('N32', 1)} q={out(S('N33'))}>
									<div style={{display: 'flex', gap: 120}}>
										{[['India', 100 + 30 * ppp], ['USA', 100 + 10 * ppp]].map(([n, v]) => (
											<div key={n as string} style={{textAlign: 'center'}}>
												<svg width={300} height={200} viewBox="0 0 300 200"><path d="M30 80 H270 L240 190 H60 Z" fill={P.box} stroke={P.ink} strokeWidth={4} /><path d="M80 80 Q150 0 220 80" fill="none" stroke={P.ink} strokeWidth={5} />{[60, 110, 160, 210].map((x) => <circle key={x} cx={x + 15} cy={70} r={24} fill="#D9A15A" stroke={P.ink} strokeWidth={3} />)}</svg>
												<Tag2 size={40}>{n} · {Math.round(v as number)}</Tag2>
											</div>
										))}
									</div>
									<Hand size={44} style={{marginTop: 14}}>same basket · India's price grows faster</Hand>
								</Pop>
								<Pop x={1350} y={260} p={p('N32', 2)} q={out(S('N33'))}>
									<div style={{display: 'flex', alignItems: 'center', gap: 40}}>
										<Coin sym="₹" s={1.3 - 0.35 * tw(f, sk('N32', 2), sk('N32', 2) + 60)} />
										<Coin sym="$" s={1.3} tint="#D6E4D0" />
									</div>
									<Hand size={44} style={{marginTop: 14}}>each ₹ buys less → worth less vs $</Hand>
								</Pop>
								{/* N33: interest rate parity */}
								<Pop x={200} y={230} p={p('N33', 1)} q={out(S('N33b'))}>
									<svg width={1520} height={90} viewBox="0 0 1520 90"><path d="M20 50 H1480" stroke={P.ink} strokeWidth={6} /><path d="M1470 30 L1500 50 L1470 70 Z" fill={P.ink} /><circle cx={300} cy={50} r={14} fill={P.ink} /><circle cx={1200} cy={50} r={14} fill={P.ink} /><text x={300} y={20} textAnchor="middle" style={{fontFamily: FT.sans, fontWeight: 700, fontSize: 32, fill: P.ink}}>today</text><text x={1200} y={20} textAnchor="middle" style={{fontFamily: FT.sans, fontWeight: 700, fontSize: 32, fill: P.ink}}>future date</text></svg>
								</Pop>
								<Pop x={200} y={360} p={p('N33', 2)} q={out(S('N33b'))}><div style={{display: 'flex', alignItems: 'center', gap: 20}}><Coin sym="₹" /><InfoCard w={560} size={38}>future price lower → <b>forward discount</b></InfoCard></div></Pop>
								<Pop x={1000} y={360} p={p('N33', 3)} q={out(S('N33b'))}><div style={{display: 'flex', alignItems: 'center', gap: 20}}><Coin sym="$" tint="#D6E4D0" /><InfoCard w={560} size={38}>future price higher → <b>forward premium</b></InfoCard></div></Pop>
								<Pop x={200} y={560} p={p('N33a', 0)} q={out(S('N33b'))}><InfoCard title="THE RULE" tone="ink" w={760} size={42}>higher interest rate → forward discount</InfoCard></Pop>
								<Pop x={1000} y={560} p={tw(f, sk('N33a', 0) + 20, sk('N33a', 0) + 40)} q={out(S('N33b'))}><InfoCard title="⚠ TRAP" tone="trap" w={700} size={42}>forward premium <span style={{color: P.risk}}>✗</span> · forward discount <span style={{color: P.ok}}>✓</span></InfoCard></Pop>
								{/* N33b: don't mix */}
								<Pop x={200} y={280} p={p('N33b', 1)} q={out(sk('N34', 0))}><InfoCard title="THE SEE-SAW · TODAY" w={720} size={42}>higher rates → money in → ₹ stronger today</InfoCard></Pop>
								<Pop x={1000} y={280} p={p('N33b', 2)} q={out(sk('N34', 0))}><InfoCard title="PARITY · FUTURE PRICE" w={720} size={42}>higher rates → forward discount</InfoCard></Pop>
								{/* N34: the two traps collected */}
								<Pop x={260} y={300} p={p('N34', 0)}><InfoCard title="⚠ TRAP 1" tone="trap" w={640} size={40}>inflation higher in India → ₹ weaker</InfoCard></Pop>
								<Pop x={1020} y={300} p={tw(f, sk('N34', 0) + 12, sk('N34', 0) + 30)}><InfoCard title="⚠ TRAP 2" tone="trap" w={640} size={40}>higher interest → forward discount</InfoCard></Pop>
								<Full o={mapO}>
									<GrowMap {...MAP} shown={4} newFrom={3} p={tw(f, sk('N34', 1), sk('N34', 1) + 50)} lit={3} />
									<div style={{position: 'absolute', left: 140, top: 60, opacity: tw(f, sk('N34', 1) + 10, sk('N34', 1) + 30)}}><Tag2 size={34} color="#fff" bg={P.ok} border={P.ok}>✓ chapter 3</Tag2></div>
								</Full>
							</>
						);
					}}
				</Scene>

				{/* ---------------- Chapter 4 · Who sets the rate in India? ---------------- */}
				<ChapterStrip f={f} from={W0('N35')} n={4} title="Who sets the rate in India?" />
				<Scene a={S('N35')} b={S('N41')}>
					{(f) => {
						const reveal = [p('N37', 0), p('N37', 1), p('N38', 0), p('N39a', 0), p('N40', 0)].reduce((a, v) => a + v, 0);
						return (
							<>
								<div style={{opacity: p('N35', 1, 30)}}><Road5 y={560} reveal={reveal} hi={f >= sk('N40', 1) ? 4 : undefined} glow={glowOf(f, ['market'], sk('N40', 1), E('N40'))} tag={p('N40', 1)} /></div>
								{/* N36: regimes */}
								{[['FIXED', 'set officially, held there', 1], ['FLOATING', 'set by the market only', 2], ['MANAGED FLOAT', 'market sets it, central bank smooths, no target', 3]].map(([t, s, k], i) => (
									<Pop key={t as string} x={130 + i * 570} y={190} p={p('N36', k as number)} q={out(S('N36a'))}>
										<InfoCard title={t as string} w={520} size={36} glow={i === 2 ? glowOf(f, ['managed'], S('N36'), E('N36')) : 0}>{s}</InfoCard>
									</Pop>
								))}
								<Pop x={180} y={200} p={p('N36a', 1)} q={out(S('N37'))}><InfoCard title="FIXED RATE" w={720} size={40}>devaluation = an official cut</InfoCard></Pop>
								<Pop x={1000} y={200} p={p('N36a', 2)} q={out(S('N37'))}><InfoCard title="FLOATING RATE" w={720} size={40}>market fall = depreciation · rise = appreciation</InfoCard></Pop>
								{/* N39: the 1991 crisis */}
								<Pop x={760} y={190} p={p('N39', 0)} q={out(S('N39a'))}>
									<div style={{display: 'flex', alignItems: 'center', gap: 30}}>
										<svg width={220} height={140} viewBox="0 0 220 140"><path d="M40 110 Q0 110 10 75 Q15 45 50 50 Q60 10 110 18 Q150 5 170 45 Q215 45 210 85 Q205 115 170 110 Z" fill="#B7BEC7" stroke={P.ink} strokeWidth={4} /><path d="M100 110 L85 138 M130 110 L118 138" stroke={P.ink} strokeWidth={4} /></svg>
										<div style={{opacity: p('N39', 1)}}><InfoCard w={520} size={38}>Jul 1991 · devalued in 2 steps · about 18% <span style={{color: P.risk}}>↓</span></InfoCard></div>
									</div>
								</Pop>
								{/* N39a: LERMS bar */}
								<Pop x={660} y={220} p={p('N39a', 1)} q={out(S('N40'))}>
									<div style={{display: 'flex', width: 720, height: 90, border: `4px solid ${P.ink}`, borderRadius: 12, overflow: 'hidden', fontFamily: FT.sans, fontWeight: 700, fontSize: 36}}>
										<div style={{width: '40%', background: '#C9CED6', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>40% official</div>
										<div style={{width: '60%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>60% market</div>
									</div>
								</Pop>
								<Pop x={1060} y={200} p={p('N40', 2)} q={out(S('N40a'))}><InfoCard title="AUG 1994" w={680} size={36}>current account convertible · IMF Article VIII</InfoCard></Pop>
								{/* N40a: what convertible means */}
								<Pop x={130} y={190} p={p('N40a', 0)}><InfoCard w={560} size={34}>₹ → $ for trade · services · travel <span style={{color: P.ok}}>✓</span> no special permission</InfoCard></Pop>
								<Pop x={720} y={190} p={p('N40a', 1)}><InfoCard w={520} size={34}>a short list banned or capped (FEMA rules)</InfoCard></Pop>
								<Pop x={1270} y={190} p={p('N40a', 2)}><div style={{opacity: 0.6}}><InfoCard w={500} size={34}>capital account: still limits</InfoCard></div></Pop>
							</>
						);
					}}
				</Scene>
				<Scene a={S('N41')} b={S('N44')}>
					{(f) => {
						const hand = p('N41', 0, 30);
						const calm = tw(f, sk('N41', 4), sk('N41', 4) + 90);
						const wob = Math.sin(f / 9) * (0.9 - 0.75 * calm) * (f < sk('N41', 4) ? 0.8 : 1);
						const gone = tw(f, S('N42') - 6, S('N42') + 20);
						return (
							<>
								<div style={{opacity: 1 - gone}}>
									<SeeSaw x={360} y={380} s={0.9} tilt={wob} lp={1} rp={1} />
									<Hand2 x={860} y={150} p={hand} />
									<Pop x={1260} y={190} p={p('N41', 3)}><InfoCard title="RBI ANNUAL REPORT 2025-26" w={560} size={36}>“orderly market” · contain excessive volatility · no fixed target</InfoCard></Pop>
								</div>
								{/* N42–N43: FBIL */}
								<Pop x={160} y={200} p={p('N42', 0)}><InfoCard title="NOTICE BOARD" tone="ink" w={620} size={48}>FBIL reference rate · USD/INR</InfoCard></Pop>
								<Pop x={860} y={190} p={p('N42a', 0)}><ClockBand x={0} y={0} p={1} slice={tw(f, sk('N42a', 0) + 10, sk('N42a', 0) + 30)} /><Hand size={40}>built from real spot trades</Hand></Pop>
								<Pop x={860} y={440} p={p('N42a', 1)}><Tag2 size={36}>published ≈ 1.30 p.m. · Mumbai business days</Tag2></Pop>
								<Pop x={160} y={420} p={p('N43', 0)}><InfoCard w={620} size={36}>a benchmark: e.g. ₹ conversion in reports</InfoCard></Pop>
								<Pop x={160} y={640} p={p('N43', 2)}>
									<div style={{display: 'flex', alignItems: 'center', gap: 18}}><Tag2 size={38}>interbank rate</Tag2><svg width={120} height={50}><path d="M10 25 H100" stroke={P.ink} strokeWidth={7} /><path d="M92 8 L118 25 L92 42 Z" fill={P.ink} /></svg><Tag2 size={38}>your counter board</Tag2><Hand size={40}>+ the bank's margin</Hand></div>
								</Pop>
							</>
						);
					}}
				</Scene>
				<Scene a={S('N44')} b={S('N45')}>
					{(f) => (
						<>
							<Counter x={80} y={170} s={0.85} board="85.65" />
							<Fig x={330} y={450} color="#8FA4B4" o={p('N44', 0)} />
							<Fig x={1350} y={560} s={1.3} color="#B8A27A" o={p('N44', 0)} label="customer" />
							<Speech x={1000} y={200} w={820} p={p('N44', 2)}>moves with the market, every day<div style={{opacity: p('N44', 3), fontSize: 44, marginTop: 6}}>RBI only stops wild swings · the board follows interbank</div></Speech>
							<Pop x={1060} y={450} p={tw(f, at('N44', 'board', 0.8) - 6, at('N44', 'board', 0.8) + 14)}>
								<div style={{display: 'flex', flexDirection: 'column', gap: 12}}>
									<Tag2 size={32} color={P.soft}><span style={{textDecoration: 'line-through', textDecorationColor: P.risk, textDecorationThickness: 5}}>RBI fixes it every morning</span> <span style={{color: P.risk}}>✗</span></Tag2>
									<Tag2 size={32} color={P.soft}><span style={{textDecoration: 'line-through', textDecorationColor: P.risk, textDecorationThickness: 5}}>each bank sets any rate</span> <span style={{color: P.risk}}>✗</span></Tag2>
								</div>
							</Pop>
						</>
					)}
				</Scene>

				{/* ---------------- Recap and practice ---------------- */}
				<Scene a={S('N45')} b={S('N47')}>
					{(f) => {
						const ansAt = [at('N46', 'wednesday', 0.2), at('N46', 'more', 0.4), at('N46', 'march', 0.7)];
						return (
						<>
							<Pop x={200} y={60} p={p('N45', 0)}><Tag2 size={34} color="#fff" bg={P.ink} border={P.ink}>PAUSE THE VIDEO · 3 QUESTIONS</Tag2></Pop>
							{[
								{y: 150, k: [2, 3], q: ['A deal is struck on Monday for spot.', 'No holiday. When is it settled?'], a: 'Wednesday · the 2nd working day', ak: 1},
								{y: 360, k: [5, 5], q: ['Which strengthens the ₹?', 'bigger CAD · inflation in India > abroad · more foreign investment in'], a: 'more foreign investment coming in', ak: 2},
								{y: 570, k: [7, 7], q: ["Since when is the ₹'s rate market-determined?", ''], a: 'March 1993 · the dual rates unified', ak: 4},
							].map((x, i) => (
								<Pop key={i} x={200} y={x.y} p={p('N45', x.k[0])}>
									<div style={{width: 1300, background: '#fff', border: `4px solid ${f >= ansAt[i] - 4 ? P.ok : P.ink}`, borderRadius: 18, padding: '14px 26px', boxShadow: '7px 7px 0 rgba(31,42,55,0.12)'}}>
										<div style={{fontFamily: FT.sans, fontWeight: 700, fontSize: 40, color: P.ink}}>{x.q[0]}</div>
										{x.q[1] ? <div style={{fontFamily: FT.sans, fontWeight: 600, fontSize: 32, color: P.soft, opacity: i === 1 ? ap(f, at('N45', 'bigger', 0.6)) : p('N45', x.k[1])}}>{x.q[1]}</div> : null}
										<div style={{fontFamily: FT.sans, fontWeight: 700, fontSize: 38, color: P.ok, minHeight: 44, opacity: ap(f, ansAt[i])}}>{f >= ansAt[i] - 6 ? '✓ ' + x.a : ''}</div>
									</div>
								</Pop>
							))}
							<PauseCard f={f} from={E('N45') - 20} to={H('N45') + 4} q="Answer all three, then play." timerFrom={E('N45')} timerFrames={by.N45.hold} />
						</>
						);
					}}
				</Scene>
				<Scene a={S('N47')} b={S('N48')}>
					{(f) => {
						const steps = [sk('N47', 2), sk('N47', 3), sk('N47', 4), sk('N47', 5), sk('N47', 6)];
						let shown = 0, from = S('N47');
						steps.forEach((t, i) => { if (f >= t - 6) { shown = i + 1; from = t - 6; } });
						const lit = shown ? shown - 1 : undefined;
						return (
							<>
								<GrowMap centre={MAP.centre} branches={MAP.branches} shown={Math.max(shown, 0)} newFrom={Math.max(0, shown - 1)} p={tw(f, from, from + 40)} lit={lit} />
								<div style={{position: 'absolute', left: 960 - 260, top: 470 - 140, width: 520, height: 280, borderRadius: '50%', boxShadow: `0 0 0 ${14 * glowOf(f, ['market', 'counter'], sk('N47', 1), sk('N47', 2))}px rgba(242,179,61,0.8)`}} />
							</>
						);
					}}
				</Scene>

				{/* ---------------- Close ---------------- */}
				<Scene a={S('N48')} b={TOTAL}>
					{(f) => {
						const next = tw(f, S('N49') - 6, S('N49') + 20);
						const bye = tw(f, sk('N50', 1) - 6, sk('N50', 1) + 30);
						return (
							<>
								<div style={{opacity: 1 - next}}>
									<SeeSaw x={360} y={180} tilt={0} dial={0} lp={p('N48', 1)} rp={p('N48', 1)} />
									{[0, 1, 2].map((i) => <Pop key={i} x={420 + i * 400} y={740} p={tw(f, sk('N48', 1) + 10 + i * 10, sk('N48', 1) + 28 + i * 10)} rot={-3 + 3 * i}><div style={{width: 260, height: 120, background: '#FFF4C9', border: `3px solid ${P.ink}`, boxShadow: '5px 5px 0 rgba(31,42,55,0.15)', fontFamily: FT.hand, fontWeight: 700, fontSize: 44, color: P.soft, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>factor {i + 1}?</div></Pop>)}
								</div>
								<div style={{opacity: next * (1 - bye)}}>
									<Counter x={560} y={300} s={0.8} board="?" />
									<Pop x={960} y={190} p={p('N49', 2)} center><InfoCard tone="ink" w={1300} size={52}>At a forex counter, is the bank buying, or selling?</InfoCard></Pop>
								</div>
								<div style={{position: 'absolute', inset: 0, opacity: bye, transform: `scale(${0.62})`, transformOrigin: '50% 60%'}}><GrowMap {...MAP} shown={5} /></div>
							</>
						);
					}}
				</Scene>
			</AbsoluteFill> : null}
			{!layer || layer === 'notes' ? <Notes f={f} /> : null}
			{!layer || layer === 'caption' ? <Captions f={f} /> : null}
			{!layer ? <Audio src={staticFile((tl as unknown as {voice: string}).voice)} /> : null}
		</Root>
	);
};
