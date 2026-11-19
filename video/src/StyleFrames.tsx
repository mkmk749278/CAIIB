// Style frames for the v2 look (one still per frame), shown to the owner before the full lesson is rebuilt.
import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Page, Header, Caption, Note, Thoughts, P, FT} from './kit/look';
import {Journey, RuleCard} from './kit/journey';
import {GrowMap, MiniMap, INCO_MAP} from './kit/mindmap';

const H = 'CAIIB · BFM · A07 INCOTERMS';

export const StyleFrames: React.FC = () => {
	const f = useCurrentFrame();
	if (f === 0)
		return (
			<Page>
				<Header left={H} right="CHAPTER 2 · THE ROAD" />
				<RuleCard code="CIF" name="Cost, Insurance and Freight" sea x={180} y={90} />
				<Journey risk={3} cost={4} ship={0.55} />
				<Note x={1050} y={290} color={P.ink} size={50}>C rules: they split!</Note>
				<MiniMap branches={INCO_MAP.branches} lit={2} x={1530} y={80} />
				<Caption text="Under CIF, the risk passes on board at Chennai, but she pays the freight all the way." />
			</Page>
		);
	if (f === 1)
		return (
			<Page>
				<Header left={H} right="WHERE WE ARE" />
				<GrowMap {...INCO_MAP} shown={4} lit={3} p={0.85} />
				<Caption text="Four families. E, F, C and D. Watch where each one sits on the road." />
			</Page>
		);
	if (f === 2)
		return (
			<Page>
				<Header left={H} right="CHAPTER 1 · THREE LETTERS" />
				<div style={{position: 'absolute', top: 120, left: 0, right: 0, textAlign: 'center', fontFamily: FT.sans, fontWeight: 700, fontSize: 58}}>The container is lost at sea. Who bears the loss?</div>
				<Thoughts f={100} a={0} left="The exporter. She hasn't been paid yet!" right="The buyer. It was already on board." wrong="left" crossAt={60} />
				<Caption text="I know many of you are thinking: the exporter. And a few of you: the buyer." />
			</Page>
		);
	return (
		<Page>
			<Header left={H} right="THE WHOLE LESSON ON ONE PAGE" />
			<GrowMap {...INCO_MAP} shown={6} />
			<Note x={1440} y={960} size={46} color={P.risk} rot={-4}>draw this tonight!</Note>
		</Page>
	);
};
