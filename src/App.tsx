import { Box, useApp } from "ink";
import { useSetAtom } from "jotai";
//import useDimensions from "./lib/dimensions.js";
import CommandBar from "./Panels/CommandBar.js";
import DebugPanel from "./Panels/DebugPanel.js";
import GurBox from "./Panels/GURBox.js";
import Menu from "./Panels/Menu.js";
import { utilsAtom } from "./lib/state.js";

const App = () => {
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
		<Box
			flexDirection="column"
			justifyContent="space-between"
			width={width}
			height={height}
		>
			<Box flexDirection="row" height={"100%"}>
				<Menu />
				<DebugPanel />
				<GurBox display="none" />
			</Box>
			<CommandBar />
		</Box>
	);
};

export default App;
