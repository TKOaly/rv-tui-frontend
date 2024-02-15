import { Box, useInput } from "ink";
import { includeWhen, includeWhenElse } from "../../lib/menu.js";
import {
	Option,
	Options,
	RESET_SELECT,
	useSelectRef
} from "../../lib/select.js";
import { useBar } from "../../state/bar.js";
import { useCli } from "../../state/cli.js";
import { useFocusState, useSetMenuRef } from "../../state/focus.js";
import { PrimaryPanel, useNavigation } from "../../state/navigation.js";
import { useStyles } from "../../state/style.js";
import { useUser } from "../../state/user.js";
import { useUtils } from "../../state/utils.js";
import Select from "../components/Select.js";

/**
 * Houses the main navigation pane
 */
const MenuPanel = () => {
	const { borderStyle, borderColor } = useStyles();
	const { primaryPanel, resetNavigation, setNavigation } = useNavigation();
	const { changeFocus, menuPanelEnabled } = useFocusState();
	const { resetBar, barIsEmpty } = useBar();
	const { flags } = useCli();
	const { exit } = useUtils();
	const { user, logoutUser } = useUser();

	const onLogout = () => {
		logoutUser();
		resetBar();
		resetNavigation();
	};

	// Options for the main navigation
	// Some options are only visible when certain conditions are met
	const options: Options = [
		...includeWhenElse(
			user,
			{
				label: "Logout",
				value: PrimaryPanel.Default,
				type: "action",
				onSelect: () => {
					onLogout();
					return RESET_SELECT;
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
			{ label: "Debug", value: PrimaryPanel.Debug }
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

	// Expose the menu controls through the focus state in order to reset the menu from other panels
	const ref = useSelectRef();
	useSetMenuRef(ref);

	/* If the escape key is pressed while the logout option is focused and the user
		does not have a panel open, log the user out
	*/
	useInput((_, key) => {
		if (
			key.escape &&
			ref?.current?.focused !== undefined &&
			options[ref?.current?.focused]?.label === "Logout" &&
			primaryPanel === PrimaryPanel.Default &&
			barIsEmpty
		) {
			onLogout();
			ref.current?.reset();
		}
	});

	// If a panel is selected, navigate to it
	const onSelect = (option: Option | undefined) => {
		if (option && option.value in PrimaryPanel && barIsEmpty) {
			setNavigation({
				primaryPanel: (option.value as PrimaryPanel) ?? null
			});
			changeFocus(option.value as PrimaryPanel);
		}
	};

	return (
		<Box
			borderStyle={borderStyle}
			borderColor={!barIsEmpty || !menuPanelEnabled ? "grey" : borderColor}
			flexDirection="column"
			flexShrink={0}
			paddingX={1}
			height={"100%"}
		>
			<Select
				ref={ref}
				options={options}
				selectKey={undefined}
				onSelect={onSelect}
				disabled={!menuPanelEnabled || !barIsEmpty}
			/>
		</Box>
	);
};

export default MenuPanel;
