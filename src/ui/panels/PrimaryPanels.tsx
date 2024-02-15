import { Box, useInput } from "ink";
import { useFocusState, useMenu } from "../../state/focus.js";
import { PrimaryPanel, useNavigation } from "../../state/navigation.js";
import { Gur6 } from "../prompts/GURPrompts.js";
import AccountPanel from "./AccountPanel.js";
import AciiArtPanel from "./AsciiArtPanel.js";
import DebugPanel from "./DebugPanel.js";
import DepositPanel from "./DepositPanel.js";

const PrimaryPanels = () => {
	const { primaryPanel, resetNavigation } = useNavigation();
	const { reset: resetMenu } = useMenu();
	const { resetFocus } = useFocusState();

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
