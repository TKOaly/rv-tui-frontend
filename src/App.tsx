import { Box, useApp, useStdout } from "ink";
import { useSetAtom } from "jotai";
import { useEffect, useState } from "react";
import { useDimensions } from "./lib/dimensions.js";
import type { Cli } from "./rv.js";
import { cliAtom } from "./state/cli.js";
import { usePanelFocusManager } from "./state/focus.js";
import { useInventory } from "./state/inventory.js";
import { SecondaryPanel, useNavigation } from "./state/navigation.js";
import { useAccessToken } from "./state/user.js";
import { utilsAtom } from "./state/utils.js";
import CommandBar from "./ui/panels/Bar/Bar.js";
import Menu from "./ui/panels/MenuPanel.js";
import PrimaryPanels from "./ui/panels/PrimaryPanels.js";
import UserPanel from "./ui/panels/UserPanel.js";

const App = ({ cli }: { cli: Cli }) => {
	const { exit } = useApp();

	// Set the CLI and Utils so they can be used globally
	const setCli = useSetAtom(cliAtom);
	const setUtils = useSetAtom(utilsAtom);
	useEffect(() => {
		setCli(cli);
		setUtils({ exit });
	}, []);

	// Dimensions settings specified in the CLI
	const {
		dimensions: dimensionsMode,
		width: staticWidth,
		height: staticHeight
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
		dimensionsMode === "static" ? staticWidth ?? 100 : initialWidth,
		dimensionsMode === "static" ? staticHeight ?? 28 : initialHeight,
		dimensionsMode
	);

	const { secondaryPanel } = useNavigation();
	const { barHidden } = usePanelFocusManager();

	const accessToken = useAccessToken();
	const { fetchInventory } = useInventory();
	useEffect(() => {
		if (!accessToken) return;
		fetchInventory();
	}, [accessToken]);

	return (
		<Box
			flexDirection="column"
			justifyContent="space-between"
			width={width}
			height={height}
		>
			<Box flexDirection="row" height={"100%"} alignItems="flex-start">
				{secondaryPanel === SecondaryPanel.User && <UserPanel />}
				<Menu />
				<PrimaryPanels />
			</Box>
			{!barHidden && <CommandBar />}
		</Box>
	);
};

export default App;
