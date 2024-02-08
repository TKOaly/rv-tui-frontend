import { Text } from "ink";
import { useEffect, useState } from "react";
import Barcode from "../components/Barcode.js";
import BorderBox from "../components/BorderBox.js";

const DebugPanel = () => {
	const [timer, setTimer] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setTimer(t => t + 1);
		}, 1000);
		return () => clearInterval(interval);
	});

	return (
		<BorderBox
			flexDirection="row"
			flexGrow={20}
			overflowY="hidden"
			align="left"
			flexWrap="wrap"
		>
			<Barcode EAN={96385074} height={6} numbers />
			<BorderBox>
				<Text>{timer}</Text>
			</BorderBox>
		</BorderBox>
	);
};

export default DebugPanel;
