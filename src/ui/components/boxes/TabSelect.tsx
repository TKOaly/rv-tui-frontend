import { Box, Text, useFocus, useInput } from "ink";
import { useMeasurements } from "../../../lib/dimensions.js";
import useSelect, { Option, Options } from "../../../lib/select.js";
import { useStyles } from "../../../state/style.js";

export type TabSelectProps = {
	options?: Options;
	onChange?: (option: Option | undefined) => void;
	title?: string;
	disabled?: boolean;
	defaultValue?: string | number;
	padding?: number;
	focusId?: string;
	autoFocus?: boolean;
} & React.ComponentProps<typeof Box>;

const TabSelect = ({
	options = [],
	onChange,
	title,
	disabled,
	defaultValue,
	padding = 1,
	focusId,
	autoFocus = false
}: TabSelectProps) => {
	const { ref, width } = useMeasurements();
	const { isFocused } = useFocus({ autoFocus, id: focusId });
	const { accentColor } = useStyles();

	const {
		focused: focusedTab,
		next,
		previous
	} = useSelect({
		options,
		onChange,
		defaultValue
	});

	useInput((_, key) => {
		if (disabled || !isFocused) return;
		key.leftArrow && previous();
		key.rightArrow && next();
	});

	return (
		<Box ref={ref} width={"100%"}>
			<Text wrap="truncate">
				<Text>
					╭──{title}
					{title && "────"}
				</Text>
				{options.map((option, index) => (
					<Text key={index}>
						<Text>──{" ".repeat(padding)}</Text>
						<Text
							key={option.value}
							inverse={focusedTab === index && isFocused}
							color={focusedTab === index ? accentColor : "white"}
						>
							{
								option.label.replace(/\n/g, "") // Option labels, Prevent newlines from breaking the layout
							}
						</Text>
						{" ".repeat(padding)}
						{focusedTab === index // Tab selection indicator
							? "↓" + " ".repeat(padding)
							: "─" + "─".repeat(padding)}
					</Text>
				))}
				<Text>
					{
						// Fill the remaining space with lines
						"─".repeat(
							Math.max(
								width - // Full width
									8 - // Lines at the corners and after the title
									(title?.length ?? -4) - // Title length, if there is no title the lines between the title and tabs are removed
									options.map(options => options.label).join("").length - // Length of the tab titles
									(3 + padding * 3) * options.length, // space between tabs
								0 // Make sure the remaining space isn't negative
							)
						)
					}
				</Text>
				<Text>╮</Text>
			</Text>
		</Box>
	);
};

export default TabSelect;
