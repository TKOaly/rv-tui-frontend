import { Box, Text, useInput } from "ink";
import { PrimaryPanel, useNavigation } from "../../state/navigation.js";
import { useStyles } from "../../state/style.js";

/**
 * Houses the main navigation pane
 * @returns {JSX.Element}
 */
const MenuPanel = () => {
	const commands: Record<string, PrimaryPanel> = {
		a: PrimaryPanel.Art,
		d: PrimaryPanel.Debug
	};

	const styles = useStyles();
	const { setNavigation } = useNavigation();

	useInput(input => {
		if (commands[input]! in PrimaryPanel) {
			setNavigation({ primaryPanel: commands[input] ?? null });
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
