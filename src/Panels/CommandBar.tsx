import { Text } from "ink";
import BorderBox from "../components/BorderBox.js";

const CommandBar = () => {
	return (
		<BorderBox flexDirection="row" flexShrink={0}>
			<Text>Username:</Text>
		</BorderBox>
	);
};

export default CommandBar;
