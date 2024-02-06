import {Box, Text} from 'ink';
import {useAtomValue} from 'jotai';
import React from 'react';
import {stylesAtom} from '../lib/state.js';
import BorderBox from '../components/BorderBox.js';

const Menu = () => {
	const styles = useAtomValue(stylesAtom);

	return (
		<BorderBox flexDirection="column" paddingX={1}>
			<Box flexDirection="row" justifyContent="space-between" gap={1}>
				<Text>Home</Text>
				<Text color={styles.accentColor}>{'> '}</Text>
			</Box>
			<Box flexDirection="row" justifyContent="space-between" gap={1}>
				<Text color={styles.accentColor}>Selected</Text>
				<Text color={styles.accentColor}>{' >'}</Text>
			</Box>
			<Box flexDirection="row" justifyContent="space-between" gap={1}>
				<Text>Search</Text>
				<Text color={styles.accentColor}>{'> '}</Text>
			</Box>
		</BorderBox>
	);
};

export default Menu;
