import { Box, Text, useInput, type Key } from "ink";
import React, { useState } from "react";
import { useNavigation } from "../../state/navigation.js";
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
	selectedSymbol?: string;
	focusedSymbol?: string;
} & React.ComponentProps<typeof Box>;

/**
 * A select component that can be navigated with specified keys
 */
const Select = ({
	options,
	onChange,
	onSelect,
	selectKey = "return",
	navigationKeys = { up: "upArrow", down: "downArrow" },
	defaultValue,
	selectedSymbol = ">",
	focusedSymbol = "*",
	...rest
}: OwnProps) => {
	const { accentColor } = useStyles();

	const defaultOptionIndex = options.findIndex(
		option => option.value === defaultValue
	);
	const [selected, setSelected] = useState(
		defaultValue !== undefined ? defaultOptionIndex : 0
	);
	const [focused, setFocused] = useState(
		defaultValue !== undefined ? defaultOptionIndex : 0
	);

	useInput((_, key) => {
		if (selectKey && key[selectKey]) {
			setSelected(focused);
			onSelect && onSelect(options[selected]);
			options[selected]?.onSelect !== undefined &&
				options[selected]?.onSelect!();
		}
		if (key[navigationKeys.up]) {
			setFocused(Math.max(0, focused - 1));
		}
		if (key[navigationKeys.down]) {
			setFocused(Math.min(options.length - 1, focused + 1));
			onChange && onChange(options[focused]);
		}
	});

	const { primaryPanel } = useNavigation();

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
								: focused === index
								? "whiteBright"
								: "white"
						}
					>
						{option.label}
					</Text>
					<Text color={selected === index ? accentColor : "whiteBright"}>
						{selected === index
							? selectedSymbol
							: focused === index && focusedSymbol}
					</Text>
				</Box>
			))}
			<Text> </Text>
			<Text>Panel:</Text>
			<Text>{primaryPanel}</Text>
		</Box>
	);
};

export default Select;
