import { Text } from "ink";
import { useEffect, useState } from "react";
import Barcode from "../components/Barcode.js";
import BorderBox from "../components/boxes/BorderBox.js";
import { TabBox } from "../components/tabs/TabBox.js";
import { Gur6 } from "../prompts/GURPrompts.js";

const DebugPanel = () => {
	const [timer, setTimer] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setTimer(t => t + 1);
		}, 100);
		return () => clearInterval(interval);
	});

	return (
		<TabBox
			title="Debug"
			flexDirection="row"
			flexGrow={100}
			width={"100%"}
			height={"100%"}
			overflowY="hidden"
			alignItems="flex-start"
			justifyContent="flex-start"
			flexWrap="wrap"
		>
			<Barcode EAN={40700719} height={6} numbers />
			<BorderBox>
				<Text>100ms: {timer}</Text>
			</BorderBox>
			<TabBox title="Header" flexWrap="wrap">
				<Text>Tab Content</Text>
			</TabBox>
			<TabBox title="Ascii Art" headerPosition={3}>
				<Gur6 />
			</TabBox>
		</TabBox>
	);
};

export default DebugPanel;
