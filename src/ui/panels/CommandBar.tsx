import { TextInput } from "@inkjs/ui";
import { useFocus } from "ink";
import BorderBox from "../components/boxes/BorderBox.js";

const CommandBar = () => {
	const { isFocused } = useFocus();

	return (
		<BorderBox isFocused={isFocused} flexDirection="row" flexShrink={0}>
			<TextInput
				placeholder="Type username:"
				onSubmit={value => console.log(value)}
			/>
		</BorderBox>
	);
};

export default CommandBar;
