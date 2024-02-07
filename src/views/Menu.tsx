import { Box, Text } from "ink";
import BorderBox from "../components/BorderBox.js";
import { useStyles } from "../lib/state.js";

/**
 * Houses the main navigation pane
 * @returns {JSX.Element}
 */
const Menu = () => {
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
		<BorderBox flexDirection="column" paddingX={1}>
			{Object.keys(commands).map(command => (
				<Box flexDirection="row" justifyContent="space-between" gap={1}>
					<Text>{command}</Text>
					<Text color={styles.accentColor}>{">"}</Text>
				</Box>
			))}
		</BorderBox>
	);
};

export default Menu;
