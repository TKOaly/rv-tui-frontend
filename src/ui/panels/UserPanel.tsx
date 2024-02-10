import { Box, Text } from "ink";
import { useAtomValue } from "jotai";
import { useStyles } from "../../state/style.js";
import { userAtom } from "../../state/user.js";
import BorderBox from "../components/boxes/BorderBox.js";

type OwnProps = {
	visible?: boolean;
} & React.ComponentProps<typeof BorderBox>;

const UserPanel = ({ visible = true, children, ...rest }: OwnProps) => {
	const styles = useStyles();
	const user = useAtomValue(userAtom);
	return (
		<Box
			borderStyle={styles.borderStyle}
			borderColor={styles.borderColor}
			flexDirection="column"
			alignItems="center"
			justifyContent="space-between"
			flexShrink={0}
			height={"100%"}
			{...rest}
		>
			<Box flexDirection="column">
				<Text>Hello {user?.username}!</Text>
				<Text>-----------------------</Text>
			</Box>
			<Box flexDirection="column-reverse" width={"100%"}>
				<BorderBox
					alignSelf="flex-start"
					flexDirection="row"
					justifyContent="space-between"
					width={"100%"}
				>
					<Text>Saldo:</Text>
					<Text>100€</Text>
				</BorderBox>
			</Box>
		</Box>
	);
};

export default UserPanel;
