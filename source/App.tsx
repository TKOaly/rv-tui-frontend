import React from 'react';
import {Box, Text} from 'ink';
import GurBox from './views/GurBox.js';
import {useAtomValue} from 'jotai';
import {stylesAtom} from './lib/state.js';
import Menu from './views/Menu.js';

export default () => {
	const styles = useAtomValue(stylesAtom);

	return (
		<Box flexDirection="column" height={28} width={100}>
			<Box flexDirection="row" height={'100%'}>
				<Menu />
				<GurBox />
			</Box>
			<Box
				flexDirection="row"
				borderStyle={styles.borderStyle}
				borderColor={styles.borderColor}
				height={3}
			>
				<Text color={styles.accentColor}>Read barcode:</Text>
			</Box>
		</Box>
	);
};
