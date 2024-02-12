import { Box } from "ink";
import { PrimaryPanel, useNavigation } from "../../state/navigation.js";
import { Gur6 } from "../prompts/GURPrompts.js";
import { Dogo } from "../prompts/LegacyPrompts.js";
import AccountPanel from "./AccountPanel.js";
import AciiArtPanel from "./AsciiArtPanel.js";
import DebugPanel from "./DebugPanel.js";
import DepositPanel from "./DepositPanel.js";

const PrimaryPanels = () => {
	const { primaryPanel } = useNavigation();
	return (
		<Box height={"100%"} flexDirection="column" flexGrow={20}>
			{primaryPanel === PrimaryPanel.Gur && (
				<AciiArtPanel>
					<Gur6 />
				</AciiArtPanel>
			)}
			{primaryPanel === PrimaryPanel.Art && (
				<AciiArtPanel>
					<Dogo />
				</AciiArtPanel>
			)}
			{primaryPanel === PrimaryPanel.Debug && <DebugPanel />}
			{primaryPanel === PrimaryPanel.Account && <AccountPanel />}
			{primaryPanel === PrimaryPanel.Deposit && <DepositPanel />}
		</Box>
	);
};

export default PrimaryPanels;
