import { Box, Text, useInput } from "ink";
import { RESET } from "jotai/utils";
import { PrimaryPanel, useNavigation } from "../../state/navigation.js";
import { useStyles } from "../../state/style.js";

/**
 * Houses the main navigation pane
 * @returns {JSX.Element}
 */
const MenuPanel = () => {
	const styles = useStyles();
	const { setNavigation, resetNavigation } = useNavigation();

	const commands: Record<string, PrimaryPanel | typeof RESET> = {
		a: PrimaryPanel.Art,
		d: PrimaryPanel.Debug,
		r: RESET
	};

	useInput(input => {
		if (commands[input]! in PrimaryPanel) {
			setNavigation({
				primaryPanel: (commands[input] as PrimaryPanel) ?? null
			});
		}
		if (commands[input] === RESET) {
			resetNavigation();
		}
	});

	return (
		<Box
			borderStyle={styles.borderStyle}
			borderColor={styles.borderColor}
			flexDirection="column"
			flexShrink={0}
			paddingX={1}
			height={"100%"}
		>
			<Text>Test</Text>
		</Box>
	);
};

export default MenuPanel;
