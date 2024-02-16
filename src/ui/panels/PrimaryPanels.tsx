import { Box, useInput } from "ink";
import { useMenu, usePanelFocusManager } from "../../state/focus.js";
import { PrimaryPanel, useNavigation } from "../../state/navigation.js";
import { Gur6 } from "../prompts/GURPrompts.js";
import AccountPanel from "./AccountPanel.js";
import AciiArtPanel from "./AsciiArtPanel.js";
import DebugPanel from "./DebugPanel.js";
import DepositPanel from "./DepositPanel.js";

/**
 * Houses the applcation's primary panels
 *
 * ADDING A NEW PRIMARY PANEL:
 * - Add a new enum value for the panel in {@linkcode navigation.ts}
 * - Add a focus configuration in {@linkcode focus.ts}
 * - Add a new entry to the menu in {@linkcode MenuPanel}
 * - Place the panel under the PrimaryPanels component in {@linkcode PrimaryPanels}
 */
const PrimaryPanels = () => {
	const { primaryPanel, resetNavigation } = useNavigation();
	const { reset: resetMenu } = useMenu();
	const { resetPanelFocus: resetFocus } = usePanelFocusManager();

	// Reset navigation, panel focus and menu when the escape key is pressed
	useInput((_, key) => {
		if (key.escape && primaryPanel !== PrimaryPanel.Default) {
			resetNavigation();
			resetMenu && resetMenu();
			resetFocus();
		}
	});

	return (
		<Box height={"100%"} flexDirection="column" flexGrow={20}>
			{primaryPanel === PrimaryPanel.Default && (
				<AciiArtPanel>
					<Gur6 />
				</AciiArtPanel>
			)}
			{primaryPanel === PrimaryPanel.Debug && <DebugPanel />}
			{primaryPanel === PrimaryPanel.Account && <AccountPanel />}
			{primaryPanel === PrimaryPanel.Deposit && <DepositPanel />}
		</Box>
	);
};

export default PrimaryPanels;
