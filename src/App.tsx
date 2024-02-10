import { Box, useApp, useStdout } from "ink";
import { useSetAtom } from "jotai";
import { useEffect, useState } from "react";
import { useDimensions } from "./lib/dimensions.js";
import type { Cli } from "./rv.js";
import { cliAtom } from "./state/cli.js";
import { PrimaryPanel, useNavigation } from "./state/navigation.js";
import { useUser } from "./state/user.js";
import { utilsAtom } from "./state/utils.js";
import AciiArtPanel from "./ui/panels/AsciiArtPanel.js";
import CommandBar from "./ui/panels/Bar/Bar.js";
import DebugPanel from "./ui/panels/DebugPanel.js";
import Menu from "./ui/panels/MenuPanel.js";
import UserPanel from "./ui/panels/UserPanel.js";
import { Gur6 } from "./ui/prompts/GURPrompts.js";

const App = ({ cli }: { cli: Cli }) => {
	// Make cli values available globally
	const setCli = useSetAtom(cliAtom);
	setCli(cli);

	// Make exit function available globally
	const { exit } = useApp();
	const setUtils = useSetAtom(utilsAtom);
	setUtils({ exit });

	// Dimensions settings specified in the CLI
	const {
		dimensions: dimensionsMode,
		width: staticWidth,
		height: staticHeight,
		debug
	} = cli.flags;

	// Get the initial dimensions of the terminal
	const { stdout } = useStdout();
	const [{ initialWidth, initialHeight }, setinitialDimensions] = useState({
		initialWidth: 100,
		initialHeight: 28
	});
	useEffect(() => {
		const [width, height] = stdout.getWindowSize();
		setinitialDimensions({ initialWidth: width, initialHeight: height });
	}, []);

	/**
	 * Get the actual dimensions of the application.
	 * Initial terminal dimensions are the default.
	 * Hook returns a reactive width and height if dimensionsMode is "dynamic"
	 */
	const { width, height } = useDimensions(
		dimensionsMode === "static" || debug ? staticWidth ?? 100 : initialWidth,
		dimensionsMode === "static" || debug ? staticHeight ?? 28 : initialHeight,
		dimensionsMode
	);

	const { primaryPanel } = useNavigation();
	const user = useUser();

	return (
		<Box
			flexDirection="column"
			justifyContent="space-between"
			width={width}
			height={height}
		>
			<Box flexDirection="row" height={"100%"}>
				<Menu />
				{user && <UserPanel />}
				{<DebugPanel visible={primaryPanel === PrimaryPanel.Debug} />}
				{
					<AciiArtPanel
						flexShrink={0}
						visible={primaryPanel === PrimaryPanel.Art}
					>
						<Gur6 />
					</AciiArtPanel>
				}
			</Box>
			<CommandBar />
		</Box>
	);
};

export default App;
