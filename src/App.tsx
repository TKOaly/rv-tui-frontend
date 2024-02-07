import { Box, Text, useApp } from "ink";
import { useSetAtom } from "jotai";
import EANToUnicode from "./lib/barcodes.js";
//import useDimensions from "./lib/dimensions.js";
import { useStyles, utilsAtom } from "./lib/state.js";
import GurBox from "./views/GURBox.js";
import Menu from "./views/Menu.js";

const App = () => {
	const styles = useStyles();

	const { exit } = useApp();
	const setUtils = useSetAtom(utilsAtom);
	setUtils({ exit });

	// Can be used to make dimensions dynamic
	// True width causes wrapping when resizing width down
	//const { width: unsafeWidth, height } = useDimensions();
	//const width = unsafeWidth - 1;

	// Fullscreen
	const [width, height] = process.stdout.getWindowSize();

	// Dimensions of current RV-terminal
	//const width = 100;
	//const height = 28;

	return (
		<Box flexDirection="column" width={width} height={height}>
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
				<Text color={"white"}>{EANToUnicode(8711253001202)}</Text>
			</Box>
		</Box>
	);
};

export default App;
