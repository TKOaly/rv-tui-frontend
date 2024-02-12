import { useState } from "react";

type EnumOption = {
	value: number;
	type?: number;
};

type StringOption = {
	value: string;
	type?: string;
};

export const RESET_SELECT: unique symbol = Symbol();

/**
 * Type of the options in the provided list
 * @property {string} label Text to be displayed for the option, for use outside of the select hook
 * @property {number | string} value Value of the option
 * @property {() => void | unique symbol} onSelect Action to be run only on the specific selection, if RESET_SELECT is returned, the select is reset
 * @property {number | string} type Type of the option
 */
export type Option = {
	label: string;
	onSelect?: () => void | typeof RESET_SELECT;
} & (EnumOption | StringOption);

export type Options = Option[];

type SelectParams = {
	options: Options;
	defaultValue?: number | string | undefined;
	onSelect?: (option: Option | undefined) => void;
	onChange?: (option: Option | undefined) => void;
	onReset?: () => void;
};

/**
 * Hook for managing the state of a selector component
 * Provides functions to navigate and select from a list of supplied options
 * @param {Options} options List of options to be selected from
 * @param {number | string} defaultValue Default value for the selection
 * @param {(option: Option | undefined) => void} onSelect Action to be run on selection
 * @param {(option: Option | undefined) => void} onChange Action to be run on change
 * @param {() => void} onReset Action to be run on reset
 * @returns {number} selected, Index of the selected option in the supplied list
 * @returns {number} focused, Index of the currently focused option in the supplied list
 * @returns {() => void} next, Function to move the focus to the next option
 * @returns {() => void} previous, Function to move the focus to the previous option
 * @returns {() => void} select, Function to select the currently focused option
 * @returns {() => void} reset, Function to reset the selection to the default value
 */
const useSelect = ({
	options,
	defaultValue = undefined,
	onSelect = () => {},
	onChange = () => {},
	onReset = () => {}
}: SelectParams) => {
	const defaultOptionIndex = defaultValue
		? options.findIndex(option => option.value === defaultValue)
		: 0;
	const [selected, setSelected] = useState(
		defaultValue !== undefined ? defaultOptionIndex : undefined
	);
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

	const reset = () => {
		onReset();
		setSelected(defaultValue !== undefined ? defaultOptionIndex : undefined);
		setFocused(defaultOptionIndex);
	};

	const select = () => {
		setSelected(focused);
		onSelect && onSelect(options[focused]);
		const reset_select =
			options[focused]?.onSelect && options[focused]?.onSelect!();
		reset_select === RESET_SELECT && reset();
	};

	return { selected, focused, next, previous, select, reset };
};

export default useSelect;
