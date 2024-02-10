import { Box, Text, useInput, type Key } from "ink";
import React, { useState } from "react";
import { useStyles } from "../../state/style.js";

type EnumOption = {
	value: number;
};

type StringOption = {
	value: string;
};

export type Option = {
	label: string;
	type?: number;
	onSelect?: () => void;
} & (EnumOption | StringOption);
export type Options = Option[];

type OwnProps = {
	options: Options;
	onChange?: (option: Option | undefined) => void;
	onSelect?: (option: Option | undefined) => void;
	defaultValue?: number | string;
	selectKey?: keyof Key;
	navigationKeys?: {
		up: keyof Key;
		down: keyof Key;
	};
} & React.ComponentProps<typeof Box>;

const Select = ({
	options,
	onChange,
	onSelect,
	selectKey = "return",
	navigationKeys = { up: "upArrow", down: "downArrow" },
	defaultValue,
	...rest
}: OwnProps) => {
	const { accentColor } = useStyles();

	const defaultOptionIndex = options.findIndex(
		option => option.value === defaultValue
	);
	const [selected, setSelected] = useState(
		defaultValue !== undefined ? defaultOptionIndex : 0
	);
	const [current, setCurrent] = useState(
		defaultValue !== undefined ? defaultOptionIndex : 0
	);

	useInput((_, key) => {
		if (selectKey && key[selectKey]) {
			setSelected(current);
			onSelect && onSelect(options[selected]);
			options[selected]?.onSelect !== undefined &&
				options[selected]?.onSelect!();
		}
		if (key[navigationKeys.up]) {
			setCurrent(Math.max(0, current - 1));
		}
		if (key[navigationKeys.down]) {
			setCurrent(Math.min(options.length - 1, current + 1));
			onChange && onChange(options[current]);
		}
	});

	return (
		<Box flexDirection="column" alignItems="flex-start" {...rest}>
			{options.map((option, index) => (
				<Box
					key={index}
					flexDirection="row"
					justifyContent="space-between"
					alignItems="flex-start"
					width={"100%"}
				>
					<Text
						key={index}
						color={
							selected === index
								? accentColor
								: current === index
								? "whiteBright"
								: "white"
						}
					>
						{option.label}
					</Text>
					<Text color={selected === index ? accentColor : "whiteBright"}>
						{selected === index ? "*" : current === index && ">"}
					</Text>
				</Box>
			))}
		</Box>
	);
};

export default Select;
