import React from 'react';
import {stylesAtom} from '../lib/state.js';
import {useAtomValue} from 'jotai';
import LayoutBox, {LayoutBoxProps} from './LayoutBox.js';

export default ({align, center, children, ...rest}: LayoutBoxProps) => {
	const styles = useAtomValue(stylesAtom);

	return (
		<LayoutBox
			align={align}
			center={center}
			borderStyle={styles.borderStyle}
			borderColor={styles.borderColor}
			{...rest}
		>
			{children}
		</LayoutBox>
	);
};
