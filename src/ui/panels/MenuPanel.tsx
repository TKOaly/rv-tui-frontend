import { Box } from "ink";
import { Option, Options } from "../../lib/select.js";
import { Bar, useBar } from "../../state/bar.js";
import { useCli } from "../../state/cli.js";
import {
	PrimaryPanel,
	SecondaryPanel,
	useNavigation
} from "../../state/navigation.js";
import { useStyles } from "../../state/style.js";
import { useLogoutUser, useUser } from "../../state/user.js";
import { useUtils } from "../../state/utils.js";
import Select from "../components/Select.js";

/**
 * Houses the main navigation pane
 * @returns {JSX.Element}
 */
const MenuPanel = () => {
	const { borderStyle, borderColor } = useStyles();
	const { setNavigation } = useNavigation();
	const logout = useLogoutUser();
	const { setBar } = useBar();
	const { flags } = useCli();
	const { exit } = useUtils();
	const user = useUser();

	const commands: Options = [
		...(user
			? [
					{
						label: "Logout",
						value: "logout",
						type: "action",
						onSelect: () => {
							logout();
							setBar({ bar: Bar.Login });
							setNavigation({ secondaryPanel: SecondaryPanel.None });
						}
					}
			  ]
			: [{ label: "New User", value: PrimaryPanel.NewUser }]),
		...(flags?.debug || flags?.unlock
			? [
					{
						label: "Exit",
						value: "exit",
						onSelect: () => exit()
					},
					{ label: "Debug", value: PrimaryPanel.Debug },
					{ label: "Gur", value: PrimaryPanel.Gur },
					{ label: "Dogo", value: PrimaryPanel.Art }
			  ]
			: []),
		{ label: "Bottle Returns", value: PrimaryPanel.Returns },
		{ label: "Deposit", value: PrimaryPanel.Deposit },
		{ label: "Barcodes", value: PrimaryPanel.Barcodes },
		{ label: "Check Price &\nList Products", value: PrimaryPanel.PriceCheck },
		{ label: "Wiki", value: PrimaryPanel.Wiki },
		{ label: "Statistics", value: PrimaryPanel.Stats },
		{ label: "Leaderboard", value: PrimaryPanel.Leaderboard },
		{ label: "Account", value: PrimaryPanel.Account },
		{ label: "Manage RFID", value: PrimaryPanel.RFID }
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
