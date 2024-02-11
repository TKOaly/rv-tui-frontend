import { Box } from "ink";
import { Option, Options } from "../../../lib/select.js";
import { useBar } from "../../../state/bar.js";
import { useCli } from "../../../state/cli.js";
import { PrimaryPanel, useNavigation } from "../../../state/navigation.js";
import { useStyles } from "../../../state/style.js";
import { useLogoutUser, useUser } from "../../../state/user.js";
import { useUtils } from "../../../state/utils.js";
import Select from "../../components/Select.js";
import { includeWhen, includeWhenElse } from "./commandUtils.js";

/**
 * Houses the main navigation pane
 * @returns {JSX.Element}
 */
const MenuPanel = () => {
	const { borderStyle, borderColor } = useStyles();
	const { resetNavigation, setNavigation } = useNavigation();
	const logout = useLogoutUser();
	const { resetBar } = useBar();
	const { flags } = useCli();
	const { exit } = useUtils();
	const user = useUser();

	const commands: Options = [
		...includeWhenElse(
			user,
			{
				label: "Logout",
				value: "logout",
				type: "action",
				onSelect: () => {
					logout();
					resetBar();
					resetNavigation();
				}
			},
			{ label: "New User", value: PrimaryPanel.NewUser }
		),
		...includeWhen(flags?.debug || flags?.unlock, [
			{
				label: "Exit",
				value: "exit",
				onSelect: () => exit()
			},
			{ label: "Debug", value: PrimaryPanel.Debug },
			{ label: "Gur", value: PrimaryPanel.Gur },
			{ label: "Dogo", value: PrimaryPanel.Art }
		]),
		...includeWhen(user, [
			{ label: "Bottle Returns", value: PrimaryPanel.Returns },
			{ label: "Buy Coffee", value: PrimaryPanel.Coffee },
			{ label: "Deposit", value: PrimaryPanel.Deposit },
			{ label: "Barcodes", value: PrimaryPanel.Barcodes },
			{ label: "Check Price &\nList Products", value: PrimaryPanel.PriceCheck }
		]),
		{ label: "RV Wiki", value: PrimaryPanel.Wiki },
		{ label: "Leaderboard", value: PrimaryPanel.Leaderboard },
		...includeWhen(user, [
			{ label: "Purchases", value: PrimaryPanel.Purchases },
			{ label: "Account", value: PrimaryPanel.Account },
			{ label: "Manage RFID", value: PrimaryPanel.RFID }
		])
	];

	const onSelect = (option: Option | undefined) => {
		if (option && option.value in PrimaryPanel) {
			setNavigation({
				primaryPanel: (option.value as PrimaryPanel) ?? null
			});
		}
	};

	return (
		<Box
			borderStyle={borderStyle}
			borderColor={borderColor}
			flexDirection="column"
			flexShrink={0}
			paddingX={1}
			height={"100%"}
		>
			<Select options={commands} selectKey={undefined} onSelect={onSelect} />
		</Box>
	);
};

export default MenuPanel;
