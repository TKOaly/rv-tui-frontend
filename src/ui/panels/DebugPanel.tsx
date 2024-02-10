import { Text } from "ink";
import { useEffect, useState } from "react";
import type { PanelProps } from "../../lib/types.js";
import Barcode from "../components/Barcode.js";
import BorderBox from "../components/boxes/BorderBox.js";
import { TabBox } from "../components/tabs/TabBox.js";
import { Gur6 } from "../prompts/GURPrompts.js";

const DebugPanel = ({ visible }: PanelProps) => {
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
			flexShrink={0}
			overflowY="hidden"
			alignItems="flex-start"
			justifyContent="flex-start"
			flexWrap="wrap"
			display={visible ? "flex" : "none"}
		>
			<Barcode EAN={4070071967072} height={6} numbers />
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
