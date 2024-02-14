import { Box, Text, useInput, type Key } from "ink";
import React, { forwardRef, useImperativeHandle } from "react";
import useSelect, { Option, Options } from "../../lib/select.js";
import { useStyles } from "../../state/style.js";

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
	gap?: number;
} & React.ComponentProps<typeof Box>;

/**
 * A vertical text select component that can be navigated with specified keys
 * @param {OwnProps} props Items to be dispayed in the selection list and,
 * action to be run on selection or focus change,
 * default value, and navigation keys.
 * The select state is can be accessed via the ref
 */
const Select = forwardRef<ReturnType<typeof useSelect>, OwnProps>(
	(
		{
			options,
			onChange,
			onSelect,
			selectKey = "return",
			navigationKeys = { up: "upArrow", down: "downArrow" },
			defaultValue,
			selectedSymbol = ">",
			focusedSymbol = "-",
			gap = 1,
			...rest
		},
		ref
	) => {
		// Custom select hook is used to manage the state of the selection
		const menuSelect = useSelect({
			options,
			defaultValue,
			onSelect,
			onChange
		});
		const { focused, selected, next, previous, select } = menuSelect;

		useImperativeHandle(ref, () => menuSelect, [menuSelect]);

		// Inputs for controlling the selection
		useInput((_, key) => {
			selectKey && key[selectKey] && select();
			key[navigationKeys.up] && previous();
			key[navigationKeys.down] && next();
		});

		const { accentColor } = useStyles();

		return (
			<Box
				flexDirection="column"
				alignItems="flex-start"
				width={
					rest.width ??
					Math.max(
						// Get the width of the longest option
						...options
							.map(o => o.label.split("\n"))
							.reduce((c, l) => c.concat(Array.isArray(l) ? [...l] : [l]), [])
							.map(l => l.length)
					) +
						1 +
						gap
				}
				{...rest}
			>
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
								focused === index
									? "whiteBright"
									: selected === index && option.type !== "action"
									? accentColor
									: "grey"
							}
						>
							{option.label}
						</Text>
						<Text
							bold={focused === index}
							color={
								focused === index
									? "whiteBright"
									: selected === index && option.type !== "action"
									? accentColor
									: "grey"
							}
						>
							{selected === index && option.type !== "action"
								? selectedSymbol
								: focused === index
								? focusedSymbol
								: " "}
						</Text>
					</Box>
				))}
			</Box>
		);
	}
);

export default Select;
