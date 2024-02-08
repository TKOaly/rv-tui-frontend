import { Box, useApp } from "ink";
import { useAtomValue, useSetAtom } from "jotai";
import useDimensions from "./lib/dimensions.js";
import { mainPanelAtom, utilsAtom } from "./lib/state.js";
import AciiArtPanel from "./ui/panels/AsciiArtPanel.js";
import CommandBar from "./ui/panels/CommandBar.js";
import DebugPanel from "./ui/panels/DebugPanel.js";
import { Gur6 } from "./ui/panels/GURPrompts.js";
import { Dogo, Fuuuu, Rip } from "./ui/panels/LegacyPrompts.js";
import Menu from "./ui/panels/MenuPanel.js";

const App = () => {
	const { exit } = useApp();

	const setUtils = useSetAtom(utilsAtom);
	setUtils({ exit });

	// Can be used to make dimensions dynamic
	// True width causes wrapping when resizing width down
	const { width: unsafeWidth, height } = useDimensions();
	const width = unsafeWidth - 1;

	// Fullscreen
	//const { stdout } = useStdout();
	//const [width, height] = stdout.getWindowSize();

	// Dimensions of current RV-terminal
	//const width = 100;
	//const height = 28;

	const mainPanel = useAtomValue(mainPanelAtom);

	return (
		<Box
			flexDirection="column"
			justifyContent="space-between"
			width={width}
			height={height}
		>
			<Box flexDirection="row" height={"100%"}>
				<Menu />
				{<DebugPanel visible={mainPanel === "debug"} />}
				{
					<AciiArtPanel flexShrink={0} visible={mainPanel === "gur"}>
						<Gur6 />
					</AciiArtPanel>
				}
				{
					<AciiArtPanel flexShrink={0} visible={mainPanel === "dogo"}>
						<Dogo />
					</AciiArtPanel>
				}
				{
					<AciiArtPanel flexShrink={0} visible={mainPanel === "fuuuu"}>
						<Fuuuu />
					</AciiArtPanel>
				}
				{
					<AciiArtPanel flexShrink={0} visible={mainPanel === "rip"}>
						<Rip />
					</AciiArtPanel>
				}
			</Box>
			<CommandBar />
		</Box>
	);
};

export default App;
