import React from 'react';
import {AbsoluteFill, Audio, Sequence, staticFile, useCurrentFrame} from 'remotion';
import lines from './incoterms_lines.json';
import {C, F, tw, env} from './theme';
import {Label, Tag, Card, PauseCard, ChapterCard, Person} from './parts';
import {Calculator, typeKeys, MindMap} from './rich';
import {Road, RuleChip, Thoughts, Doc, Ship, Sea, Rain, RISK, COST} from './road';

type L = {id: string; speaker: string; text: string; start: number; dur: number; hold: number; audio: string | null; words: [string, number][]};
const LS = (lines as unknown as {lines: L[]}).lines;
const TOTAL = (lines as {durationInFrames: number}).durationInFrames;
const by: Record<string, L> = Object.fromEntries(LS.map((l) => [l.id, l]));
const S = (id: string) => by[id].start;
const E = (id: string) => by[id].start + by[id].dur;
const H = (id: string) => E(id) + by[id].hold;
const norm = (w: string) => w.toLowerCase().replace(/[^a-z0-9]/g, '');
// frame where `word` is first spoken in line `id` (nth match), else a fraction of the line
const at = (id: string, word: string, frac: number, nth = 1) => {
	const l = by[id];
	const hits = l.words.filter(([w]) => norm(w).startsWith(norm(word)));
	return hits.length >= nth ? l.start + hits[nth - 1][1] : l.start + Math.round(frac * l.dur);
};
const during = (f: number, a: string, b?: string) => f >= S(a) && (b === undefined || f < S(b));

const Scene: React.FC<{a: number; b: number; children: (f: number) => React.ReactNode}> = ({a, b, children}) => {
	const f = useCurrentFrame();
	if (f < a - 1 || f > b + 1) return null;
	return <AbsoluteFill style={{opacity: env(f, a, b, 9)}}>{children(f)}</AbsoluteFill>;
};

const Drift: React.FC<{f: number; children: React.ReactNode}> = ({f, children}) => {
	const z = 1.03 + 0.015 * Math.sin(f / 170);
	const x = 12 * Math.sin(f / 230), y = 8 * Math.sin(f / 190 + 1.3);
	return <AbsoluteFill style={{transform: `translate(${x}px, ${y}px) scale(${z})`}}>{children}</AbsoluteFill>;
};

// captions: the spoken sentence; spelt rules shown as codes (C-I-F → CIF)
const Captions: React.FC<{f: number}> = ({f}) => {
	const l = LS.find((x) => f >= x.start && f < x.start + x.dur + 6);
	if (!l) return null;
	const txt = l.text.replace(/\b([A-Z])-(?=[A-Z]\b)/g, '$1').replace(/Incoterms twenty twenty/g, 'Incoterms 2020').replace(/twenty twenty/g, '2020').replace(/twenty ten/g, '2010');
	const sents = txt.match(/[^.?!]+[.?!]*/g)?.map((t) => t.trim()).filter(Boolean) ?? [txt];
	const total = sents.reduce((a, t) => a + t.length, 0);
	const p = (f - l.start) / Math.max(1, l.dur);
	let acc = 0, idx = 0;
	for (let i = 0; i < sents.length; i++) { acc += sents[i].length / total; if (p < acc) { idx = i; break; } idx = i; }
	return (
		<div style={{position: 'absolute', left: 120, right: 120, bottom: 26, display: 'flex', justifyContent: 'center'}}>
			<div style={{background: 'rgba(5,9,14,0.82)', borderRadius: 18, padding: '12px 26px', maxWidth: 1600, fontFamily: F.sans, fontWeight: 600, fontSize: 42, lineHeight: 1.25, color: C.text, textAlign: 'center'}}>{sents[idx]}</div>
		</div>
	);
};

const Big: React.FC<{y: number; o?: number; color?: string; size?: number; children: React.ReactNode}> = ({y, o = 1, color = C.text, size = 80, children}) => (
	<Label x={960} y={y} w={1700} align="center" size={size} weight={700} color={color} o={o}>{children}</Label>
);

// station index for each rule (risk) and how far the seller pays (cost)
const RULES: Record<string, {name: string; risk: number; cost: number; sea?: boolean}> = {
	EXW: {name: 'Ex Works', risk: 0, cost: -1},
	FCA: {name: 'Free Carrier', risk: 1, cost: 1},
	FAS: {name: 'Free Alongside Ship', risk: 2, cost: 2, sea: true},
	FOB: {name: 'Free On Board', risk: 3, cost: 3, sea: true},
	CFR: {name: 'Cost and Freight', risk: 3, cost: 4, sea: true},
	CIF: {name: 'Cost, Insurance and Freight', risk: 3, cost: 4, sea: true},
	CPT: {name: 'Carriage Paid To', risk: 1, cost: 4},
	CIP: {name: 'Carriage and Insurance Paid To', risk: 1, cost: 4},
	DAP: {name: 'Delivered at Place', risk: 4, cost: 4},
	DPU: {name: 'Delivered at Place Unloaded', risk: 5, cost: 5},
	DDP: {name: 'Delivered Duty Paid', risk: 6, cost: 6},
};

export const Incoterms: React.FC = () => {
	const f = useCurrentFrame();
	const ch1 = S('N06a') - 75, ch2 = S('N16') - 75, ch3 = S('N37') - 75, ch4 = S('N50') - 75;
	return (
		<AbsoluteFill style={{background: `radial-gradient(1400px 900px at 50% 40%, ${C.bg2}, ${C.bg})`, fontFamily: F.sans}}>
			<Drift f={f}>
				{/* ---------------- Warm-up ---------------- */}
				<Scene a={0} b={S('N01')}>
					{(f) => (
						<>
							<Tag text="CAIIB · BFM · MODULE A · INTERNATIONAL BANKING" />
							<Big y={250} size={140} o={tw(f, 5, 25)}>Incoterms<sup style={{fontSize: 50}}>®</sup> 2020</Big>
							<Big y={430} size={52} color={C.dim} o={tw(f, 20, 40)}>Whose ship is it?</Big>
							<Card x={460} y={560} w={1000} h={150} o={env(f, 20, S('N00c'), 12)} border={C.line}>
								<Label x={500} y={24} w={940} align="center" size={34} color={C.dim}>Rules taught: Incoterms® 2020 (ICC) · UCP 600</Label>
								<Label x={500} y={80} w={940} align="center" size={34} color={C.dim}>current at the IIBF cut-off of 30 June 2026</Label>
							</Card>
							<Label x={960} y={760} w={1400} align="center" size={30} color={C.dim} o={env(f, 20, S('N00c'), 12)}>The voice in this lesson is AI-generated.</Label>
							{during(f, 'N00c', 'N00d') ? <Card x={360} y={600} w={1200} h={140} border={C.market}><Label x={600} y={40} w={1100} align="center" size={50} weight={700}>Ever handled an export or import file?</Label></Card> : null}
							{during(f, 'N00d', 'N00e') ? (
								<>
									{[{t: 'Letters of credit', n: 6}, {t: 'Incoterms', n: 3}].map((r, i) => {
										const p = tw(f, S('N00d') + 60 + i * 90, S('N00d') + 90 + i * 90);
										return (
											<div key={r.t} style={{position: 'absolute', left: 360, top: 580 + i * 120}}>
												<div style={{fontFamily: F.sans, fontWeight: 700, fontSize: 40, color: C.text, width: 420, display: 'inline-block'}}>{r.t}</div>
												{[...Array(7)].map((_, k) => <div key={k} style={{display: 'inline-block', width: 90, height: 60, marginRight: 12, borderRadius: 10, verticalAlign: 'middle', background: k < r.n && p > k / r.n ? C.market : C.card, border: `3px solid ${C.line}`}} />)}
												<span style={{fontFamily: F.mono, fontWeight: 700, fontSize: 40, color: C.market, marginLeft: 20, opacity: p}}>{r.n} of 7 exams</span>
											</div>
										);
									})}
								</>
							) : null}
							{f >= S('N00e') ? <Big y={640} size={70} color={C.market} o={tw(f, S('N00e') + 20, S('N00e') + 35)}>11 rules · 1 picture</Big> : null}
						</>
					)}
				</Scene>

				{/* ---------------- Opening: the lost container ---------------- */}
				<Scene a={S('N01')} b={ch1}>
					{(f) => {
						const storm = tw(f, S('N04'), S('N04') + 40);
						const lost = during(f, 'N04') ? tw(f, S('N04') + 70, S('N04') + 150) : 0;
						return (
							<>
								{f < S('N03') ? (
									<>
										<Card x={140} y={240} w={520} h={170} border="#E8A87C"><Label x={30} y={26} size={30} color={C.dim}>Seller · exporter</Label><Label x={30} y={74} size={52} weight={700}>Tiruppur, India</Label></Card>
										<Card x={1260} y={240} w={520} h={170} border="#7FB8D9" o={tw(f, S('N01') + 60, S('N01') + 75)}><Label x={30} y={26} size={30} color={C.dim}>Buyer · importer</Label><Label x={30} y={74} size={52} weight={700}>Rotterdam, NL</Label></Card>
										<svg style={{position: 'absolute', inset: 0}} width={1920} height={1080}><path d="M660 330 Q 960 120 1260 330" stroke={C.dim} strokeWidth={5} strokeDasharray="16 14" fill="none" opacity={tw(f, S('N01') + 75, S('N01') + 95)} /></svg>
										<Card x={560} y={500} w={800} h={130} o={tw(f, S('N01') + 120, S('N01') + 135)} border={C.market}><Label x={400} y={34} w={760} align="center" size={50} weight={700}>USD 48,000 · backed by an LC</Label></Card>
										{f >= S('N02') ? (
											<div style={{position: 'absolute', left: 360, top: 690, width: 1200, opacity: tw(f, S('N02') + 40, S('N02') + 55), transform: `rotate(-2deg) scale(${1.15 - 0.15 * tw(f, S('N02') + 40, S('N02') + 55)})`, border: `6px solid ${RISK}`, borderRadius: 18, padding: '18px 0', textAlign: 'center', fontFamily: F.mono, fontWeight: 700, fontSize: 64, color: RISK}}>CIF Rotterdam Incoterms® 2020</div>
										) : null}
									</>
								) : (
									<>
										<svg style={{position: 'absolute', inset: 0}} width={1920} height={1080}>
											<Sea f={f} y={720} storm={storm} />
											{f < S('N04') ? <g><rect x={0} y={560} width={420} height={160} fill="#3A4D63" /><text x={40} y={620} fontFamily={F.sans} fontWeight={700} fontSize={40} fill={C.text}>CHENNAI PORT</text></g> : null}
											<Ship x={f < S('N04') ? 760 : 960} y={680} container={10} tilt={storm * 6 * Math.sin(f / 9)} lost={lost} />
											<Rain f={f} o={storm} />
										</svg>
										{during(f, 'N03', 'N04') ? <Doc x={1480} y={160} title="Bill of lading" sub="shipped on board · Chennai" o={tw(f, S('N03') + 80, S('N03') + 95)} /> : null}
										{lost > 0.9 ? <Big y={180} size={120} color={RISK} o={tw(f, S('N04') + 150, S('N04') + 165)}>LOST AT SEA</Big> : null}
										{f >= S('N05') ? (
											<div style={{position: 'absolute', inset: 0, background: `${C.bg}EE`, opacity: tw(f, S('N05'), S('N05') + 15)}}>
												<Person x={300} y={360} color="#E8A87C" label="Exporter" />
												<Card x={620} y={300} w={1100} h={260} border="#E8A87C"><Label x={40} y={40} w={1020} size={50} weight={700}>“The goods are gone. Will I still get paid? Whose loss is this?”</Label></Card>
												<PauseCard f={f} from={E('N06') - 60} to={H('N06')} q="Under CIF: the seller's loss, or the buyer's?" timerFrom={E('N06')} timerFrames={by.N06.hold} />
											</div>
										) : null}
									</>
								)}
								<Tag text="ILLUSTRATIVE · NAMES, SHIP AND AMOUNTS MADE UP" />
							</>
						);
					}}
				</Scene>

				{/* ---------------- Chapter 1 ---------------- */}
				<ChapterCard f={f} from={ch1} n={1} title="What three letters decide" />
				<Scene a={ch1 + 60} b={S('N11')}>
					{(f) => (
						<>
							<Thoughts f={f} from={S('N06a')} to={S('N08')} a="CIF: seller paid freight and insurance, so the sea is the seller's risk." b="Once it's on the ship, it's the buyer's problem." bFrom={S('N06b')} reveal={S('N07')} right="b" />
							{f >= S('N07') && f < S('N09') ? <Road f={f} y={640} baton={3} costTo={f >= S('N08') ? 4 : null} hi={[3]} o={tw(f, S('N07'), S('N07') + 15)} note={f >= S('N08') ? 'CIF: risk passes early · cost runs to Rotterdam' : 'CIF: risk passes on board at Chennai'} /> : null}
							{f >= S('N09') && f < S('N10a') ? (
								<>
									<Doc x={140} y={200} title="Bill of lading" o={tw(f, S('N09') + 20, S('N09') + 32)} />
									<Doc x={400} y={200} title="Commercial invoice" o={tw(f, S('N09') + 40, S('N09') + 52)} />
									<Doc x={660} y={200} title="Insurance policy" sub="CIF · for the buyer" o={tw(f, S('N09') + 60, S('N09') + 72)} tint="#E3F0FF" />
									<Card x={1060} y={220} w={720} h={250} border={C.buy} o={tw(f, at('N09', 'match', 0.45), at('N09', 'match', 0.45) + 15)}>
										<Label x={360} y={40} w={680} align="center" size={56} weight={700} color={C.buy}>Documents comply → LC pays ✓</Label>
										<Label x={360} y={170} w={680} align="center" size={32} color={C.dim}>UCP 600 Art. 5: documents, not goods</Label>
									</Card>
									{f >= S('N10') ? <Card x={140} y={600} w={1640} h={170} border={COST}><Label x={820} y={30} w={1580} align="center" size={50} weight={700}>Buyer gets the policy with the documents → claims from the insurer</Label></Card> : null}
								</>
							) : null}
							{f >= S('N10a') ? <Big y={380} size={64} o={tw(f, S('N10a'), S('N10a') + 15)}>“Insurance” in the name ≠ the seller’s risk</Big> : null}
						</>
					)}
				</Scene>
				<Scene a={S('N11')} b={ch2}>
					{(f) => (
						<>
							{during(f, 'N11', 'N12') ? (
								<>
									<div style={{position: 'absolute', left: 0, right: 0, top: 300, textAlign: 'center', fontFamily: F.mono, fontWeight: 700, fontSize: 110, color: C.text}}>
										<span style={{color: RISK}}>CIF</span> <span style={{color: '#E8A87C'}}>Rotterdam</span> <span style={{color: C.market}}>Incoterms® 2020</span>
									</div>
									<Label x={590} y={470} w={400} align="center" size={34} color={RISK} o={tw(f, at('N11', 'three', 0.5), at('N11', 'three', 0.5) + 12)}>the rule</Label>
									<Label x={1000} y={470} w={400} align="center" size={34} color="#E8A87C" o={tw(f, at('N11', 'place', 0.6), at('N11', 'place', 0.6) + 12)}>a named place</Label>
									<Label x={1450} y={470} w={400} align="center" size={34} color={C.market} o={tw(f, at('N11', 'version', 0.7), at('N11', 'version', 0.7) + 12)}>the version</Label>
									<Label x={960} y={160} w={1600} align="center" size={40} color={C.dim}>Rules published by the International Chamber of Commerce (ICC)</Label>
								</>
							) : null}
							{during(f, 'N12', 'N13') ? (
								<Card x={260} y={200} w={1400} h={520} border={C.market}>
									<Label x={60} y={50} size={46} color={C.dim}>Three letters answer three questions</Label>
									{['1 · Where does the seller deliver? → where RISK passes', '2 · Who pays which COSTS?', '3 · Who does CUSTOMS: export and import?'].map((t, i) => (
										<Label key={t} x={60} y={160 + i * 110} size={50} weight={700} o={tw(f, at('N12', ['one', 'two', 'three'][i], 0.25 + i * 0.25), at('N12', ['one', 'two', 'three'][i], 0.25 + i * 0.25) + 12)}>{t}</Label>
									))}
								</Card>
							) : null}
							{during(f, 'N13', 'N14') ? (
								<Card x={260} y={200} w={1400} h={520} border={RISK} bg="#2A1416">
									<Label x={60} y={50} size={46} color={RISK} weight={700}>Incoterms do NOT decide</Label>
									{['✗ the price', '✗ how or when payment is made', '✗ when ownership (title) passes'].map((t, i) => <Label key={t} x={60} y={160 + i * 100} size={52} weight={700} o={tw(f, S('N13') + 70 + i * 50, S('N13') + 82 + i * 50)}>{t}</Label>)}
									<Label x={60} y={450} size={38} color={C.dim}>→ that is for the sales contract</Label>
								</Card>
							) : null}
							{during(f, 'N14', 'N15') ? (
								<Card x={260} y={260} w={1400} h={300} border={C.undo}>
									<Label x={700} y={60} w={1300} align="center" size={56} weight={700}>Not law: they apply only when written into the contract</Label>
									<Label x={700} y={200} w={1300} align="center" size={38} color={C.dim}>so always name the version: “Incoterms® 2020”</Label>
								</Card>
							) : null}
							{during(f, 'N15', 'N15a') ? (
								<Card x={260} y={240} w={1400} h={360} border={C.market}>
									<Label x={700} y={50} w={1300} align="center" size={72} weight={700} color={C.market}>Incoterms® 2020</Label>
									<Label x={700} y={160} w={1300} align="center" size={42}>in force since 1 January 2020</Label>
									<Label x={700} y={240} w={1300} align="center" size={34} color={C.dim}>ICC workplan 2026: work only begins towards Incoterms 2030</Label>
								</Card>
							) : null}
							{f >= S('N15a') ? (
								<>
									<Big y={330} size={120} o={tw(f, S('N15a') + 60, S('N15a') + 75)}><span style={{color: RISK}}>RISK</span> ≠ <span style={{color: COST}}>COST</span></Big>
									{f >= S('N15b') ? <Label x={960} y={560} w={1400} align="center" size={40} color={C.dim} o={tw(f, S('N15b'), S('N15b') + 12)}>Stretch · next: one picture for all eleven rules</Label> : null}
								</>
							) : null}
						</>
					)}
				</Scene>

				{/* ---------------- Chapter 2: the road ---------------- */}
				<ChapterCard f={f} from={ch2} n={2} title="The road" />
				<Scene a={ch2 + 60} b={S('N29')}>
					{(f) => {
						let rule: string | null = null;
						if (during(f, 'N21', 'N22')) rule = 'EXW';
						if (during(f, 'N22', 'N23')) rule = 'FCA';
						if (during(f, 'N23', 'N24')) rule = f >= at('N23', 'free', 0.55, 2) ? 'FOB' : 'FAS';
						if (during(f, 'N24', 'N25')) rule = f >= at('N24', 'cost', 0.3, 2) ? 'CIF' : 'CFR';
						if (during(f, 'N25', 'N27')) rule = f >= at('N25', 'carriage', 0.2, 2) ? 'CIP' : 'CPT';
						if (during(f, 'N27', 'N28')) rule = 'DAP';
						if (during(f, 'N28', 'N29')) rule = f >= at('N28', 'delivered', 0.45, 2) ? 'DDP' : 'DPU';
						const r = rule ? RULES[rule] : null;
						// stations appear as they are named (N17, N18)
						let reveal = 0;
						if (f >= S('N17')) reveal = 1 + 3 * tw(f, S('N17'), E('N17'), (x) => x);
						if (f >= S('N18')) reveal = 4 + 3 * tw(f, S('N18') + 40, E('N18'), (x) => x);
						if (f >= S('N19')) reveal = 7;
						const demo = during(f, 'N19', 'N20');
						const baton = r ? r.risk : demo ? 3 : null;
						const cost = r ? r.cost : demo && f >= at('N19', 'blue', 0.6) ? 4 : null;
						return (
							<>
								<Road f={f} y={560} reveal={f < S('N17') ? 0 : reveal} baton={demo && f < at('N19', 'red', 0.2) ? null : baton} costTo={cost} hi={r ? [r.risk] : []} dimSea={!!r && !r.sea} />
								{f < S('N17') ? <Big y={230} size={60} color={C.dim} o={tw(f, S('N16'), S('N16') + 15)}>Seller’s door → buyer’s door</Big> : null}
								{during(f, 'N20', 'N21') ? <Big y={140} size={64}>11 rules on one road</Big> : null}
								{r && rule ? <RuleChip code={rule} name={r.name} sea={r.sea} x={580} y={120} w={1000} color={['CFR', 'CIF', 'CPT', 'CIP'].includes(rule) ? C.undo : C.text} /> : null}
								{during(f, 'N26', 'N27') ? <Card x={460} y={120} w={1000} h={130} border={C.undo}><Label x={500} y={34} w={940} align="center" size={50} weight={700} color={C.undo}>C rules: two points · risk early, cost to the end</Label></Card> : null}
								{rule === 'EXW' ? <Label x={960} y={880} w={1500} align="center" size={38} color={C.dim}>buyer loads and even clears export · the least the seller can do</Label> : null}
								{rule === 'DDP' ? <Label x={960} y={880} w={1500} align="center" size={38} color={C.dim}>seller clears import and pays the duty · the most the seller can do</Label> : null}
								{rule === 'DPU' ? <Label x={960} y={880} w={1500} align="center" size={38} color={C.dim}>the only rule where the seller unloads at destination</Label> : null}
							</>
						);
					}}
				</Scene>
				<Scene a={S('N29')} b={S('N33')}>
					{(f) => (
						<>
							{during(f, 'N29', 'N30') ? (
								<>
									<div style={{position: 'absolute', left: 160, right: 160, top: 420, height: 34, borderRadius: 17, background: `linear-gradient(90deg, ${C.card}, ${C.market})`}} />
									<Label x={160} y={300} size={70} weight={700} mono>EXW</Label>
									<Label x={160} y={500} size={36} color={C.dim}>seller does the least</Label>
									<Label x={1760} y={300} w={400} align="right" size={70} weight={700} mono color={C.market}>DDP</Label>
									<Label x={1760} y={500} w={500} align="right" size={36} color={C.dim}>seller does the most</Label>
								</>
							) : null}
							{during(f, 'N30', 'N31') ? (
								<Card x={260} y={200} w={1400} h={460} border={C.market}>
									<Label x={60} y={50} size={46} color={C.dim}>Customs</Label>
									<Label x={60} y={150} size={56} weight={700}>Export clearance → SELLER</Label>
									<Label x={60} y={225} size={40} color={RISK} weight={700}>except EXW (buyer)</Label>
									<Label x={60} y={310} size={56} weight={700}>Import clearance → BUYER</Label>
									<Label x={60} y={385} size={40} color={RISK} weight={700}>except DDP (seller)</Label>
								</Card>
							) : null}
							{during(f, 'N31', 'N31a') ? (
								<div style={{position: 'absolute', left: 120, right: 120, top: 220, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 30}}>
									{[{k: 'E', w: 'Exit', d: "from the seller's door", r: 'EXW'}, {k: 'F', w: 'Free', d: 'of the main freight', r: 'FCA · FAS · FOB'}, {k: 'C', w: 'Carriage paid', d: 'but risk already gone', r: 'CFR · CIF · CPT · CIP'}, {k: 'D', w: 'Delivered', d: 'at the destination', r: 'DAP · DPU · DDP'}].map((g, i) => (
										<div key={g.k} style={{opacity: tw(f, at('N31', ['e', 'f', 'c', 'd'][i], 0.15 + i * 0.22), at('N31', ['e', 'f', 'c', 'd'][i], 0.15 + i * 0.22) + 12), background: C.card, border: `3px solid ${g.k === 'C' ? C.undo : C.line}`, borderRadius: 26, padding: 30, height: 440, boxSizing: 'border-box'}}>
											<div style={{fontFamily: F.mono, fontWeight: 700, fontSize: 120, color: g.k === 'C' ? C.undo : C.market}}>{g.k}</div>
											<div style={{fontFamily: F.sans, fontWeight: 700, fontSize: 44, color: C.text}}>{g.w}</div>
											<div style={{fontFamily: F.sans, fontSize: 32, color: C.dim, marginTop: 8}}>{g.d}</div>
											<div style={{fontFamily: F.mono, fontWeight: 700, fontSize: 30, color: C.text, marginTop: 30}}>{g.r}</div>
										</div>
									))}
								</div>
							) : null}
							{f >= S('N31a') ? (
								<>
									<Road f={f} y={640} baton={f >= S('N32') ? 1 : null} costTo={f >= S('N32') ? 4 : null} hi={f >= S('N32') ? [1] : []} />
									<RuleChip code="CPT" name="Carriage Paid To" x={580} y={90} w={1000} color={C.undo} />
									<Thoughts f={f} from={at('N31a', 'some', 0.35)} to={S('N32') + 60} a="At the destination: carriage is paid till there." b="When the goods go to the first carrier." bFrom={at('N31a', 'others', 0.6)} reveal={S('N32')} right="b" y={230} />
									<PauseCard f={f} from={E('N31a') - 30} to={H('N31a')} q="CPT: where does the risk pass?" timerFrom={E('N31a')} timerFrames={by.N31a.hold} />
								</>
							) : null}
						</>
					)}
				</Scene>
				<Scene a={S('N33')} b={ch3}>
					{(f) => (
						<>
							{during(f, 'N33', 'N34') ? (
								<div style={{position: 'absolute', left: 140, right: 140, top: 200, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40}}>
									{[{t: 'Sea and inland waterway only', n: '4', r: ['FAS', 'FOB', 'CFR', 'CIF'], c: COST}, {t: 'Any mode, even air, rail, road or mixed', n: '7', r: ['EXW', 'FCA', 'CPT', 'CIP', 'DAP', 'DPU', 'DDP'], c: C.text}].map((g, i) => (
										<div key={g.n} style={{background: C.card, border: `3px solid ${g.c}`, borderRadius: 26, padding: 36, opacity: tw(f, S('N33') + i * 120, S('N33') + i * 120 + 15)}}>
											<div style={{fontFamily: F.mono, fontWeight: 700, fontSize: 110, color: g.c}}>{g.n}</div>
											<div style={{fontFamily: F.sans, fontWeight: 700, fontSize: 40, color: C.text}}>{g.t}</div>
											<div style={{fontFamily: F.mono, fontWeight: 700, fontSize: 44, color: C.dim, marginTop: 24}}>{g.r.join(' · ')}</div>
										</div>
									))}
								</div>
							) : null}
							{during(f, 'N34', 'N35') ? (
								<>
									<Card x={160} y={180} w={760} h={420} border={RISK} bg="#2A1416"><Label x={380} y={40} w={700} align="center" size={46} weight={700} color={RISK}>✗ Container + FOB / CIF</Label><Label x={380} y={160} w={700} align="center" size={36} color={C.dim}>handed over at the terminal, before it is on board</Label></Card>
									<Card x={1000} y={180} w={760} h={420} border={C.buy}><Label x={380} y={40} w={700} align="center" size={46} weight={700} color={C.buy}>✓ Container + FCA / CIP</Label><Label x={380} y={160} w={700} align="center" size={36} color={C.dim}>ICC: these fit better for container cargo</Label></Card>
									<Label x={960} y={680} w={1500} align="center" size={40} weight={700} color={C.undo}>TRAP</Label>
								</>
							) : null}
							{during(f, 'N35', 'N36') ? (
								<>
									<Big y={260} size={170} color={C.market}>11 = 7 + 4</Big>
									<Big y={520} size={50} color={C.dim}>“How many Incoterms?” · asked twice in Jul 2024</Big>
									<Big y={620} size={44} color={RISK} o={tw(f, at('N35', 'thirteen', 0.7), at('N35', 'thirteen', 0.7) + 12)}>13 was Incoterms 2000 ✗</Big>
								</>
							) : null}
							{f >= S('N36') ? (
								<>
									<div style={{position: 'absolute', left: 0, right: 0, top: 300, textAlign: 'center', fontFamily: F.mono, fontWeight: 700, fontSize: 130}}>
										<span style={{color: C.dim, textDecoration: 'line-through'}}>DAT</span><span style={{color: C.text}}> → </span><span style={{color: C.market, opacity: tw(f, at('N36', 'became', 0.45), at('N36', 'became', 0.45) + 12)}}>DPU</span>
									</div>
									<Big y={520} size={44} color={C.dim}>Delivered at Terminal → Delivered at Place Unloaded · any place, not only a terminal</Big>
									{f >= S('N36a') ? <Big y={700} size={50} o={tw(f, S('N36a'), S('N36a') + 12)}>Eleven rules · one road ✓</Big> : null}
								</>
							) : null}
						</>
					)}
				</Scene>

				{/* ---------------- Chapter 3: insurance and the LC desk ---------------- */}
				<ChapterCard f={f} from={ch3} n={3} title="Insurance and the bank’s desk" />
				<Scene a={ch3 + 60} b={S('N42')}>
					{(f) => (
						<>
							{during(f, 'N37', 'N38') ? (
								<>
									<Big y={180} size={56} color={C.dim}>Seller must insure in only two rules</Big>
									<RuleChip code="CIF" name="Cost, Insurance and Freight" sea x={160} y={380} w={780} color={C.market} />
									<RuleChip code="CIP" name="Carriage and Insurance Paid To" x={980} y={380} w={780} color={C.market} />
									<Big y={640} size={44} color={C.dim}>the “I” is the clue · in all others, the buyer insures (if anyone does)</Big>
								</>
							) : null}
							{during(f, 'N38', 'N40') ? (
								<>
									{[{code: 'CIF', cl: 'Institute Cargo Clauses (C)', d: 'minimum, basic cover', w: 0.6, x: 200}, {code: 'CIP', cl: 'Institute Cargo Clauses (A)', d: 'wide, all-risks cover', w: 1, x: 1000}].map((u, i) => (
										<div key={u.code} style={{position: 'absolute', left: u.x, top: 170, width: 720, opacity: tw(f, S('N38') + 40 + i * 90, S('N38') + 55 + i * 90), textAlign: 'center'}}>
											<svg width={720} height={300} viewBox="0 0 720 300">
												<path d={`M ${360 - 300 * u.w} 220 Q 360 ${220 - 260 * u.w} ${360 + 300 * u.w} 220 Z`} fill={i ? C.market : C.dim} />
												<line x1={360} y1={220} x2={360} y2={290} stroke={C.text} strokeWidth={8} />
											</svg>
											<div style={{fontFamily: F.mono, fontWeight: 700, fontSize: 70, color: C.text}}>{u.code}</div>
											<div style={{fontFamily: F.sans, fontWeight: 700, fontSize: 40, color: i ? C.market : C.text}}>{u.cl}</div>
											<div style={{fontFamily: F.sans, fontSize: 32, color: C.dim}}>{u.d}</div>
										</div>
									))}
									<Label x={960} y={800} w={1500} align="center" size={34} color={C.dim}>Incoterms® 2020 · unless the parties agree otherwise</Label>
									{f >= S('N39') ? <Label x={960} y={870} w={1600} align="center" size={36} color={C.text} o={tw(f, S('N39') + 30, S('N39') + 42)}>ICC: CIF is used a lot for bulk commodities at sea · CIP more for manufactured goods</Label> : null}
								</>
							) : null}
							{during(f, 'N40', 'N42') ? (
								<Card x={260} y={200} w={1400} h={480} border={C.market}>
									<Label x={700} y={50} w={1300} align="center" size={46} color={C.dim}>Minimum cover</Label>
									<Label x={700} y={120} w={1300} align="center" size={130} weight={700} mono color={C.market}>110%</Label>
									<Label x={700} y={290} w={1300} align="center" size={40}>of the contract price · in the contract currency</Label>
									{f >= S('N41') ? <Label x={700} y={370} w={1300} align="center" size={36} color={C.undo} weight={700} o={tw(f, S('N41'), S('N41') + 12)}>UCP 600 Art. 28(f)(ii): LC silent → at least 110% of the CIF or CIP value</Label> : null}
								</Card>
							) : null}
						</>
					)}
				</Scene>
				<Scene a={S('N42')} b={S('N48')}>
					{(f) => {
						const seq = [
							...typeKeys(at('N43', 'forty', 0.1), ['4', '5', '0', '0', '0', '+', '2', '4', '0', '0', '+', '6', '0', '0', '='], {5: '45000', 10: '47400', 14: '48000'}, 8),
							...typeKeys(at('N44', 'forty', 0.25), ['4', '8', '0', '0', '0', '×', '1', '.', '1', '='], {5: '48000', 9: '52800'}, 8),
							...typeKeys(S('N46') + 20, ['3', '0', '0', '0', '0', '×', '1', '.', '1', '='], {5: '30000', 9: '33000'}, 8),
							...typeKeys(at('N47', 'forty', 0.7), ['4', '5', '0', '0', '0', '×', '1', '.', '1', '='], {5: '45000', 9: '49500'}, 8),
						];
						const bar = (label: string, v: number, c: string, from: number, i: number) => (
							<div key={label} style={{display: 'flex', alignItems: 'center', gap: 20, marginTop: 18, opacity: tw(f, from, from + 12)}}>
								<div style={{width: 300, fontFamily: F.sans, fontWeight: 700, fontSize: 36, color: C.text}}>{label}</div>
								<div style={{height: 54, width: Math.max(18, (v / 48000) * 560), background: c, borderRadius: 10}} />
								<div style={{fontFamily: F.mono, fontWeight: 700, fontSize: 38, color: c}}>{v.toLocaleString('en-US')}</div>
							</div>
						);
						return (
							<>
								<div style={{position: 'absolute', left: 80, top: 120, width: 1120}}>
									<div style={{fontFamily: F.sans, fontSize: 32, color: C.dim}}>Tiruppur → Rotterdam · USD (illustrative)</div>
									{bar('FOB value', 45000, C.text, at('N42', 'forty', 0.35), 0)}
									{bar('+ Freight', 2400, COST, at('N42', 'freight', 0.7), 1)}
									{bar('+ Insurance', 600, C.market, at('N42', 'insurance', 0.9), 2)}
									{f >= S('N43') ? bar('= CIF price', 48000, C.undo, at('N43', 'forty', 0.75, 2), 3) : null}
									{f >= at('N43', 'cost', 0.85) ? <div style={{marginTop: 26, fontFamily: F.sans, fontWeight: 700, fontSize: 40, color: C.undo}}>Cost + Insurance + Freight · the name is the formula</div> : null}
								</div>
								{f >= S('N44') ? (
									<Card x={80} y={640} w={1120} h={150} border={C.market}>
										<Label x={40} y={22} size={34} color={C.dim}>{f < S('N45') ? 'Minimum cover: 48,000 × 1.1' : f < S('N47') ? 'CIP EUR 30,000 × 1.1' : '✗ 110% of FOB: 45,000 × 1.1'}</Label>
										<Label x={40} y={70} size={56} weight={700} mono color={f >= S('N47') ? RISK : C.text}>{f < S('N45') ? 'USD 52,800' : f < S('N46') ? '?' : f < S('N47') ? 'EUR 33,000' : '49,500 · wrong base'}</Label>
									</Card>
								) : null}
								<Calculator f={f} x={1310} y={140} seq={seq} />
								<PauseCard f={f} from={E('N45') - 30} to={H('N45')} q="CIP EUR 30,000: minimum cover?" timerFrom={E('N45')} timerFrames={by.N45.hold} />
							</>
						);
					}}
				</Scene>
				<Scene a={S('N48')} b={ch4}>
					{(f) => (
						<>
							{during(f, 'N48', 'N49') ? (
								<>
									<Big y={140} size={50} color={C.dim}>At the LC desk: does the seller send an insurance document?</Big>
									<Card x={160} y={280} w={760} h={360} border={C.buy}><Label x={380} y={40} w={700} align="center" size={60} weight={700} mono>CIF · CIP</Label><Label x={380} y={160} w={700} align="center" size={44} weight={700} color={C.buy}>✓ Insurance document required</Label></Card>
									<Card x={1000} y={280} w={760} h={360} border={C.line} o={tw(f, at('N48', 'fob', 0.6), at('N48', 'fob', 0.6) + 12)}><Label x={380} y={40} w={700} align="center" size={60} weight={700} mono>FOB · FCA …</Label><Label x={380} y={160} w={700} align="center" size={44} weight={700} color={C.dim}>Buyer insures · none from the seller</Label></Card>
								</>
							) : null}
							{during(f, 'N49', 'N49a') ? (
								<Card x={260} y={240} w={1400} h={380} border={C.undo}>
									<Label x={700} y={50} w={1300} align="center" size={50} weight={700}>Insurance date ≤ shipment date</Label>
									<Label x={700} y={150} w={1300} align="center" size={38} color={C.dim}>unless it shows cover effective from the shipment date or earlier</Label>
									<Label x={700} y={260} w={1300} align="center" size={34} color={C.undo}>UCP 600 Art. 28(e)</Label>
								</Card>
							) : null}
							{f >= S('N49a') ? (
								<>
									<Doc x={420} y={220} title="Bill of lading" sub="“freight prepaid”" />
									<Label x={530} y={560} w={500} align="center" size={36} weight={700} color={C.market}>usually C and D rules</Label>
									<Doc x={1260} y={220} title="Bill of lading" sub="“freight collect”" o={tw(f, at('N49a', 'collect', 0.7), at('N49a', 'collect', 0.7) + 12)} />
									<Label x={1370} y={560} w={500} align="center" size={36} weight={700} color={C.dim} o={tw(f, at('N49a', 'collect', 0.7), at('N49a', 'collect', 0.7) + 12)}>usually F rules</Label>
									<Label x={960} y={720} w={1500} align="center" size={32} color={C.dim}>a practice hint, not a rule</Label>
								</>
							) : null}
						</>
					)}
				</Scene>

				{/* ---------------- Recap and practice ---------------- */}
				<ChapterCard f={f} from={ch4} n={4} title="Recap and practice" />
				<Scene a={ch4 + 60} b={S('N58')}>
					{(f) => (
						<>
							{during(f, 'N50', 'N51') ? <Road f={f} y={600} baton={3} costTo={4} hi={[3]} note="CIF: risk on board at Chennai · LC pays · buyer claims on the policy" /> : null}
							{f >= S('N51') ? (
								<div style={{position: 'absolute', left: 160, right: 160, top: 140}}>
									{[{q: 'N52', a: 'N53', t: '1 · Most obligations on the seller?', ans: 'DDP · Delivered Duty Paid'}, {q: 'N54', a: 'N55', t: '2 · Which rule replaced DAT in 2020?', ans: 'DPU · Delivered at Place Unloaded'}, {q: 'N56', a: 'N57', t: '3 · CIF USD 1,25,400, LC silent: minimum cover?', ans: '125400 × 1.1 = USD 1,37,940'}].map((x) => (
										f >= S(x.q) ? (
											<div key={x.q} style={{background: C.card, border: `3px solid ${f >= S(x.a) ? C.buy : C.line}`, borderRadius: 24, padding: '22px 34px', marginBottom: 26}}>
												<div style={{fontFamily: F.sans, fontWeight: 700, fontSize: 46, color: C.text}}>{x.t}</div>
												<div style={{fontFamily: F.mono, fontWeight: 700, fontSize: 42, color: C.buy, minHeight: 52, opacity: f >= S(x.a) ? 1 : 0}}>{x.ans}</div>
											</div>
										) : null
									))}
								</div>
							) : null}
							{['N52', 'N54', 'N56'].map((q) => <PauseCard key={q} f={f} from={E(q)} to={H(q)} q="Your answer?" timerFrom={E(q)} timerFrames={by[q].hold} />)}
						</>
					)}
				</Scene>
				<Scene a={S('N58')} b={S('N62')}>
					{(f) => (
						<div style={{position: 'absolute', left: 140, top: 100, width: 1640, height: 860, background: C.paper, borderRadius: 36, padding: '46px 66px', boxSizing: 'border-box', color: C.ink, fontFamily: F.sans}}>
							<div style={{fontWeight: 700, fontSize: 60}}>Incoterms on one card</div>
							<div style={{fontSize: 28, color: '#5B6675', marginTop: 4}}>Incoterms® 2020 (ICC) · UCP 600 · as at the 30 June 2026 cut-off</div>
							{[{id: 'N58', t: '① Three letters decide three things', d: 'where risk passes · who pays · who clears customs (not price, payment or title)'}, {id: 'N59', t: '② Put the rule on the road', d: 'E at the seller’s door · F at the carrier or the ship · D at the buyer’s end'}, {id: 'N60', t: '③ C rules split', d: 'risk passes early (on board / first carrier) · cost runs to the destination'}, {id: 'N61', t: '④ Insurance', d: 'only CIF (Clauses C) and CIP (Clauses A) · at least 110% of the CIF/CIP value'}].map((x) => (
								<div key={x.id} style={{display: 'flex', gap: 40, marginTop: 34, opacity: tw(f, S(x.id), S(x.id) + 15)}}>
									<div style={{flex: 1, fontSize: 40, fontWeight: 700}}>{x.t}</div>
									<div style={{flex: 1.6, fontSize: 34}}>{x.d}</div>
								</div>
							))}
						</div>
					)}
				</Scene>
				<Scene a={S('N62')} b={TOTAL}>
					{(f) => (
						<>
							<MindMap f={f} from={S('N62')} lit={3} nodeW={640} nodes={['Incoterms® 2020 · ICC · 11 rules', 'Decide: risk · costs · customs', 'The road: 7 stations', 'E · F · C (split) · D', 'Sea 4 · any mode 7 · DAT → DPU', 'Insure: CIF (C) · CIP (A) · ≥110%']} />
							<Label x={60} y={40} size={34} color={C.dim}>Next class · the LC and the UCP articles the exam asks</Label>
							{f >= S('N62a') ? <Card x={1200} y={840} w={680} h={130} border={C.undo} o={tw(f, S('N62a'), S('N62a') + 12)}><Label x={30} y={22} size={34} weight={700}>Homework: draw the road from memory,</Label><Label x={30} y={70} size={34} weight={700}>put all 11 rules on it</Label></Card> : null}
						</>
					)}
				</Scene>
			</Drift>
			<Captions f={f} />
			{LS.filter((l) => l.audio).map((l) => (
				<Sequence key={l.id} from={l.start} durationInFrames={l.dur + 2}>
					<Audio src={staticFile(l.audio as string)} />
				</Sequence>
			))}
		</AbsoluteFill>
	);
};
