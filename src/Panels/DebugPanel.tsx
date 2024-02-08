import { Text } from "ink";
import { useEffect, useState } from "react";
import Barcode from "../components/Barcode.js";
import BorderBox from "../components/BorderBox.js";
import LayoutBox from "../components/LayoutBox.js";
import { TabBox, TabHeader } from "../components/tabs/TabBox.js";

const DebugPanel = () => {
	const [timer, setTimer] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setTimer(t => t + 1);
		}, 10);
		return () => clearInterval(interval);
	});

	return (
		<TabBox
			title="Debug"
			flexDirection="row"
			flexGrow={20}
			width={"100%"}
			flexShrink={0}
			overflowY="hidden"
			alignItems="flex-start"
			justifyContent="flex-start"
			flexWrap="wrap"
		>
			<Barcode EAN={96385074} height={6} numbers />
			<BorderBox>
				<Text>10ms: {timer}</Text>
			</BorderBox>
			<TabHeader title="Debug" />
			<LayoutBox>
				<TabBox title="testing" flexWrap="wrap">
					<Text>Debugging Debugging</Text>
				</TabBox>
			</LayoutBox>
			<BorderBox></BorderBox>
		</TabBox>
	);
};

export default DebugPanel;
