import { Box, Text, useApp } from "ink";
import { useSetAtom } from "jotai";
import { useStyles, utilsAtom } from "./lib/state.js";
import GurBox from "./views/GURBox.js";
import Menu from "./views/Menu.js";

const App = () => {
	const styles = useStyles();

	const { exit } = useApp();
	const setUtils = useSetAtom(utilsAtom);
	setUtils({ exit });

	// Dimensions of current RV-terminal
	// height={28} width={100}
	return (
		<Box flexDirection="column" height={28} width={100}>
			<Box flexDirection="row" height={"100%"}>
				<Menu />
				<GurBox />
			</Box>
			<Box
				flexDirection="row"
				borderStyle={styles.borderStyle}
				borderColor={styles.borderColor}
				height={3}
			>
				<Text color={"white"}>BARCODE</Text>
			</Box>
		</Box>
	);
};

export default App;
