import { PasswordInput, TextInput } from "@inkjs/ui";
import { Text } from "ink";
import { useState } from "react";
import { Bar, useBar } from "../../../state/bar.js";
import { useInventory } from "../../../state/inventory.js";
import { useUser } from "../../../state/user.js";
import BarBox, { BarVariant } from "./BarBox.js";

enum BarState {
	userName = 0,
	password = 1,
	loggedIn = 2,
	Invalid = 3
}

const LoginBar = () => {
	const { loginUser } = useUser();
	const { setBar, setBarContent } = useBar();

	const [activeInput, setActiveInput] = useState(BarState.userName);
	const [username, setUsername] = useState<string>("");
	const [barVariant, setBarVariant] = useState<BarVariant>("normal");
	const [error, setError] = useState("");
	const { fetchInventory } = useInventory();

	return (
		<BarBox variant={barVariant}>
			{activeInput === BarState.userName && (
				<TextInput
					placeholder="Type username:"
					onChange={content => setBarContent(content)}
					onSubmit={username => {
						if (username === "") return;
						setUsername(username);
						setActiveInput(BarState.password);
						setBarContent("");
					}}
				/>
			)}
			{activeInput === BarState.password && (
				<PasswordInput
					placeholder="Type password:"
					onChange={content => setBarContent(content)}
					onSubmit={async password => {
						if (password === "") return;
						try {
							await loginUser({ username, password });
							setActiveInput(BarState.userName);
							setBar({ bar: Bar.Barcode });
							fetchInventory();
						} catch (error: any) {
							setError(
								error.message === "Unauthorized"
									? "Invalid username or password"
									: "An error occurred in login"
							);
							setBarVariant("error");
							setActiveInput(BarState.Invalid);
							setTimeout(() => {
								setActiveInput(BarState.userName);
								setBarVariant("normal");
							}, 3000);
						} finally {
							setUsername("");
							setBarContent("");
						}
					}}
				/>
			)}
			{activeInput === BarState.Invalid && <Text>{error}</Text>}
		</BarBox>
	);
};

export default LoginBar;
