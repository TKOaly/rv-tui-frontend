import { Box, Text } from "ink";
import TabBox from "../components/boxes/TabBox.js";

const DepositPanel = () => {
	return (
		<Box overflow="hidden" flexDirection="column" flexGrow={20} height={"100%"}>
			<TabBox title="(← Esc)────DEPOSITS" height={"100%"} flexShrink={0}>
				<Box padding={1} paddingX={3}>
					<Text>Deposit Panel</Text>
				</Box>
			</TabBox>
		</Box>
	);
};

export default DepositPanel;
