import { Box, useApp, useStdout } from "ink";
import { useSetAtom } from "jotai";
//import useDimensions from "./lib/dimensions.ts";
import CommandBar from "./Panels/CommandBar.tsx";
import DebugPanel from "./Panels/DebugPanel.tsx";
import GurPanel from "./Panels/GURPanel.tsx";
import Menu from "./Panels/MenuPanel.tsx";
import { utilsAtom } from "./lib/state.ts";

const App = () => {
	const { exit } = useApp();
	const setUtils = useSetAtom(utilsAtom);
	setUtils({ exit });

	// Can be used to make dimensions dynamic
	// True width causes wrapping when resizing width down
	//const { width: unsafeWidth, height } = useDimensions();
	//const width = unsafeWidth - 1;

	// Fullscreen
	const { stdout } = useStdout();
	const [width, height] = stdout.getWindowSize();

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
				<GurPanel display="none" />
			</Box>
			<CommandBar />
		</Box>
	);
};

export default App;
