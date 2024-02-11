import { Box, Text } from "ink";
import { useUser } from "../../state/user.js";
import BorderBox from "../components/boxes/BorderBox.js";

const AccountPanel = () => {
	const user = useUser();

	return (
		<BorderBox
			overflow="hidden"
			flexDirection="column"
			flexGrow={20}
			height={"100%"}
			paddingTop={1}
			paddingLeft={3}
		>
			{user ? (
				<Box gap={1} flexDirection="column">
					<Text>Account Information</Text>
					<Text>───────────────────</Text>
					<Text>username: {user.username}</Text>
					<Text>full name: {user.fullName}</Text>
					<Text>email: {user.email}</Text>
					<Text>balance: {user.moneyBalance}</Text>
				</Box>
			) : (
				<Text>Not Logged In</Text>
			)}
		</BorderBox>
	);
};

export default AccountPanel;
