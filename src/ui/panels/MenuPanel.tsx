import { Box, useFocus } from "ink";
import { Bar, useBar } from "../../state/bar.js";
import {
	PrimaryPanel,
	SecondaryPanel,
	useNavigation
} from "../../state/navigation.js";
import { useStyles } from "../../state/style.js";
import { useLogoutUser } from "../../state/user.js";
import Select, { Option, Options } from "../components/Select.js";

/**
 * Houses the main navigation pane
 * @returns {JSX.Element}
 */
const MenuPanel = () => {
	const { borderStyle, borderColor, accentColor } = useStyles();
	const { isFocused } = useFocus();
	const { setNavigation } = useNavigation();
	const logout = useLogoutUser();
	const { setBar } = useBar();

	const commands: Options = [
		{
			label: "Logout",
			value: PrimaryPanel.Gur,
			onSelect: () => {
				logout();
				setBar({ bar: Bar.Login });
				setNavigation({ secondaryPanel: SecondaryPanel.None });
			}
		},
		{ label: "Debug", value: PrimaryPanel.Debug },
		{ label: "Gur", value: PrimaryPanel.Gur },
		{ label: "Dogo", value: PrimaryPanel.Art },
		{ label: "Bottle Returns", value: PrimaryPanel.Returns },
		{ label: "Deposit", value: PrimaryPanel.Deposit },
		{ label: "Barcodes", value: PrimaryPanel.Barcodes },
		{ label: "Check Price", value: PrimaryPanel.PriceCheck },
		{ label: "New User", value: PrimaryPanel.NewUser },
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
			borderColor={isFocused ? accentColor : borderColor}
			flexDirection="column"
			flexShrink={0}
			paddingX={1}
			height={"100%"}
		>
			<Select
				width={Math.max(...commands.map(o => o.label.length)) + 4}
				options={commands}
				selectKey={undefined}
				onSelect={onSelect}
			/>
		</Box>
	);
};

export default MenuPanel;
