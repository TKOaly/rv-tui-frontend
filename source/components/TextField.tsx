import React, {useState} from 'react';
import BorderBox from './BorderBox.js';

export type TextFieldProps = {
	label?: string;
	initialValue?: string;
	onAccept?: (value: string) => void;
	focused?: boolean;
};

const TextField = ({initialValue}: TextFieldProps) => {
	const [_value, _setValue] = useState(initialValue);

	return (
		<BorderBox
			flexDirection="row"
			justifyContent="space-between"
			height={3}
			width={'100%'}
		></BorderBox>
	);
};

export default TextField;
