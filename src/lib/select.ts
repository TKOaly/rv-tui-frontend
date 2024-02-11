import { useState } from "react";

type EnumOption = {
	value: number;
	type?: number;
};

type StringOption = {
	value: string;
	type?: string;
};

/**
 * Type of the options in the provided list
 * @property {string} label Text to be displayed for the option, for use outside of the select hook
 * @property {number | string} value Value of the option
 * @property {() => void} onSelect Action to be run on selection
 * @property {number | string} type Type of the option
 */
export type Option = {
	label: string;
	onSelect?: () => void;
} & (EnumOption | StringOption);

export type Options = Option[];

/**
 * Hook for managing the state of a selector component
 * Provides functions to navigate and select from a list of supplied options
 * @param {Options} options List of options to be selected from
 * @param {number | string} defaultValue Default value for the selection
 * @param {(option: Option | undefined) => void} onSelect Action to be run on selection
 * @param {(option: Option | undefined) => void} onChange Action to be run on change
 * @param {() => void} onReset Action to be run on reset
 * @returns {Object} Object containing the state of the selection and functions to navigate and select
 */
const useSelect = (
	options: Options,
	defaultValue: number | string | undefined = undefined,
	onSelect: (option: Option | undefined) => void = () => {},
	onChange: (option: Option | undefined) => void = () => {},
	onReset: () => void = () => {}
) => {
	const defaultOptionIndex = defaultValue
		? options.findIndex(option => option.value === defaultValue)
		: 0;
	const [selected, setSelected] = useState(defaultOptionIndex || undefined);
	const [focused, setFocused] = useState(defaultOptionIndex);

	const next = () => {
		const next = Math.min(options.length - 1, focused + 1);
		setFocused(next);
		onChange && onChange(options[next]);
	};

	const previous = () => {
		const previous = Math.max(0, focused - 1);
		setFocused(previous);
		onChange && onChange(options[previous]);
	};

	const select = () => {
		setSelected(focused);
		onSelect && onSelect(options[focused]);
		options[focused]?.onSelect && options[focused]?.onSelect!();
	};

	const reset = () => {
		onReset();
		setSelected(defaultOptionIndex);
		setFocused(defaultOptionIndex);
	};

	return { selected, focused, next, previous, select, reset };
};

export default useSelect;
