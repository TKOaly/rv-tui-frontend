import { TextInput } from "@inkjs/ui";
import BorderBox from "../components/BorderBox.js";

const CommandBar = () => {
	return (
		<BorderBox flexDirection="row" flexShrink={0}>
			<TextInput
				placeholder="Type username:"
				onSubmit={value => console.log(value)}
			/>
		</BorderBox>
	);
};

export default CommandBar;
