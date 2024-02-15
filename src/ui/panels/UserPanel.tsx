import { Box, Text } from "ink";
import { useStyles } from "../../state/style.js";
import { useUser } from "../../state/user.js";
import BorderBox from "../components/boxes/BorderBox.js";

type OwnProps = {} & React.ComponentProps<typeof BorderBox>;

const UserPanel = ({ children, ...rest }: OwnProps) => {
	const styles = useStyles();
	const { user } = useUser();

	if (!user) return null;

	return (
		<Box
			borderStyle={styles.borderStyle}
			borderColor={styles.borderColor}
			flexDirection="column"
			alignItems="center"
			justifyContent="space-between"
			flexShrink={0}
			paddingX={1}
			height={"100%"}
			{...rest}
		>
			<Box flexDirection="column" alignItems="center">
				<Text>Hello {user.username}!</Text>
				<Text>-----------------------</Text>
			</Box>
			<Box flexDirection="column-reverse" width={"100%"}>
				<BorderBox
					alignSelf="flex-start"
					flexDirection="row"
					justifyContent="space-between"
					width={"100%"}
					paddingX={1}
				>
					<Text>Balance:</Text>
					<Text>{user.moneyBalance}</Text>
				</BorderBox>
			</Box>
		</Box>
	);
};

export default UserPanel;
