import React from 'react';
import {Composition, continueRender, delayRender} from 'remotion';
import {A1} from './A1';
import lines from './lines.json';
import inc from './incoterms_lines.json';
import {Incoterms} from './Incoterms';
import {loadFonts} from './theme';

const h = delayRender('fonts');
loadFonts().then(() => continueRender(h)).catch(() => continueRender(h));

export const Root: React.FC = () => (
	<>
	<Composition id="A1" component={A1} durationInFrames={(lines as {durationInFrames: number}).durationInFrames} fps={30} width={1920} height={1080} />
	<Composition id="Incoterms" component={Incoterms} durationInFrames={(inc as {durationInFrames: number}).durationInFrames} fps={30} width={1920} height={1080} />
	</>
);
