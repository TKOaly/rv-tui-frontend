import { Select } from "@inkjs/ui";
import { Box } from "ink";
import { useSetAtom } from "jotai";
import { useMeasurements } from "../../lib/dimensions.js";
import { mainPanelAtom } from "../../state/navigation.js";
import { useStyles } from "../../state/style.js";

/**
 * Houses the main navigation pane
 * @returns {JSX.Element}
 */
const MenuPanel = () => {
	const commands = [
		{
			label: "Exit",
			value: "exit"
		},
		{
			label: "Debug",
			value: "debug"
		},
		{
			label: "Gur",
			value: "gur"
		},
		{
			label: "Dogo",
			value: "dogo"
		},
		{
			label: "Nag",
			value: "fuuuu"
		},
		{
			label: "Nag 2",
			value: "rip"
		}
	];

	const styles = useStyles();
	const { ref, height } = useMeasurements();
	const setPanel = useSetAtom(mainPanelAtom);

	return (
		<Box
			ref={ref}
			borderStyle={styles.borderStyle}
			borderColor={styles.borderColor}
			flexDirection="column"
			flexShrink={0}
			paddingX={1}
			height={"100%"}
		>
			{height > 6 && (
				// Defer rendering of the select component until we have the height
				<Select
					options={commands}
					visibleOptionCount={height}
					defaultValue="gur"
					onChange={value => setPanel(value)}
				/>
			)}
		</Box>
	);
};

export default MenuPanel;
