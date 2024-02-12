import { PasswordInput, TextInput } from "@inkjs/ui";
import { Text } from "ink";
import { useState } from "react";
import { Bar, useBar } from "../../../state/bar.js";
import { SecondaryPanel, useNavigation } from "../../../state/navigation.js";
import { useLoginUser } from "../../../state/user.js";

enum BarState {
	userName = 0,
	password = 1,
	loggedIn = 2,
	Invalid = 3
}

const LoginBar = () => {
	const login = useLoginUser();
	const { setBar } = useBar();
	const { setNavigation } = useNavigation();

	const [activeInput, setActiveInput] = useState(BarState.userName);
	const [username, setUsername] = useState<string>("");

	return (
		<>
			{activeInput === BarState.userName && (
				<TextInput
					placeholder="Type username:"
					onSubmit={username => {
						if (username === "") return;
						setUsername(username);
						setActiveInput(BarState.password);
					}}
				/>
			)}
			{activeInput === BarState.password && (
				<PasswordInput
					placeholder="Type password:"
					onSubmit={password => {
						if (password === "") return;
						try {
							login({ username, password });
							setActiveInput(BarState.userName);
							setBar({ bar: Bar.Barcode });
							setNavigation({ secondaryPanel: SecondaryPanel.User });
						} catch (error) {
							console.error(error);
							setActiveInput(BarState.Invalid);
							setTimeout(() => {
								setActiveInput(BarState.userName);
							}, 3000);
						} finally {
							setUsername("");
						}
					}}
				/>
			)}
			{activeInput === BarState.Invalid && (
				<Text color="red">Login Failed</Text>
			)}
		</>
	);
};

export default LoginBar;
