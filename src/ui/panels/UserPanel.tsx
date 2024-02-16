import { Box, Text } from "ink";
import { usePurchases } from "../../state/purchases.js";
import { useStyles } from "../../state/style.js";
import { useUser } from "../../state/user.js";
import Receipt from "../components/Receipt.js";
import BorderBox from "../components/boxes/BorderBox.js";

type OwnProps = {} & React.ComponentProps<typeof BorderBox>;

const UserPanel = ({ children, ...rest }: OwnProps) => {
	const styles = useStyles();
	const { user } = useUser();
	const { recentPurchases } = usePurchases();

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
			<Receipt purchases={recentPurchases} user={user} />
			<Box flexDirection="column-reverse" width={"100%"}>
				<BorderBox
					alignSelf="flex-start"
					flexDirection="row"
					justifyContent="space-between"
					width={"100%"}
					paddingX={1}
				>
					<Text>Balance:</Text>
					<Text>{user.moneyBalance / 100}</Text>
				</BorderBox>
			</Box>
		</Box>
	);
};

export default UserPanel;
