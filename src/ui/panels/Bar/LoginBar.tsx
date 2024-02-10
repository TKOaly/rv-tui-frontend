import { PasswordInput, TextInput } from "@inkjs/ui";
import { useState } from "react";
import { Bar, useBar } from "../../../state/bar.js";
import { useLoginUser } from "../../../state/user.js";

enum BarState {
	userName = 0,
	password = 1,
	loggedIn = 2
}

const LoginBar = () => {
	const login = useLoginUser();
	const { setBar } = useBar();

	const [activeInput, setActiveInput] = useState(BarState.userName);
	const [username, setUsername] = useState<string>("");

	return (
		<>
			{activeInput === BarState.userName && (
				<TextInput
					placeholder="Type username:"
					onSubmit={username => {
						setUsername(username);
						setActiveInput(BarState.password);
					}}
				/>
			)}
			{activeInput === BarState.password && (
				<PasswordInput
					placeholder="Type password:"
					onSubmit={value => {
						login({ username: username, password: value });
						setUsername("");
						setActiveInput(BarState.userName);
						setBar({ bar: Bar.Barcode });
					}}
				/>
			)}
		</>
	);
};

export default LoginBar;
