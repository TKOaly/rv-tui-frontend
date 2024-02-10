import { PasswordInput, TextInput } from "@inkjs/ui";
import { useState } from "react";
import { Bar, useBar } from "../../../state/bar.js";
import { SecondaryPanel, useNavigation } from "../../../state/navigation.js";
import { useLoginUser } from "../../../state/user.js";

enum BarState {
	userName = 0,
	password = 1,
	loggedIn = 2
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
						login({ username: username, password: password });
						setUsername("");
						setActiveInput(BarState.userName);
						setBar({ bar: Bar.Barcode });
						setNavigation({ secondaryPanel: SecondaryPanel.User });
					}}
				/>
			)}
		</>
	);
};

export default LoginBar;
