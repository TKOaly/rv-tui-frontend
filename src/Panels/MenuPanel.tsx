import { Box, Text } from "ink";
import BorderBox from "../components/BorderBox.js";
import { useStyles } from "../lib/style.js";

/**
 * Houses the main navigation pane
 * @returns {JSX.Element}
 */
const MenuPanel = () => {
	const styles = useStyles();

	const commands = {
		logout: {},
		deposit: {},
		price: {},
		list: {},
		multi: {},
		rfid: {},
		account: {},
		language: {},
		nobar: {}
	};

	return (
		<BorderBox flexDirection="column" paddingX={1} flexShrink={0}>
			{Object.keys(commands).map((command, idx) => (
				<Box
					flexDirection="row"
					justifyContent="space-between"
					gap={1}
					key={idx}
				>
					<Text>{command}</Text>
					<Text color={styles.accentColor}>{">"}</Text>
				</Box>
			))}
		</BorderBox>
	);
};

export default MenuPanel;
