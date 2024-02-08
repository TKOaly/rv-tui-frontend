import { Box, Text } from "ink";
import BorderBox from "../components/BorderBox.tsx";
import type { Color } from "../lib/state.ts";

const [red, green, blue, _yellow, white]: Color[] = [
	"red",
	"green",
	"blue",
	"yellow",
	"grey"
];

const gur1 = () => (
	<Box width={21} height={6} flexDirection="column">
		<Text>
			<Text color={red}>{"   _____ "}</Text>
			<Text color={green}>{" ______"}</Text>
			<Text color={blue}>{"____"}</Text>
		</Text>
		<Text>
			<Text color={red}>{"  /  ___\\"}</Text>
			<Text color={green}>{"/  /  /"}</Text>
			<Text color={blue}>{" __ \\"}</Text>
		</Text>
		<Text>
			<Text color={red}>{" /  /_ \\"}</Text>
			<Text color={green}>{"/  /  /"}</Text>
			<Text color={blue}>{"     /"}</Text>
		</Text>
		<Text>
			<Text color={red}>{"/\\_____/"}</Text>
			<Text color={green}>{"\\____/"}</Text>
			<Text color={blue}>{"__/\\__\\"}</Text>
		</Text>
		<Text>
			<Text color={red}>{"\\_____/"}</Text>
			<Text color={green}>{"\\____/"}</Text>
			<Text color={blue}>{"__/\\/__/"}</Text>
		</Text>
	</Box>
);

const gur2 = () => (
	<Box width={21} height={5} flexDirection="column">
		<Text>
			<Text color={red}>{"  ____ "}</Text>
			<Text color={green}>{" __   __ "}</Text>
			<Text color={blue}>{"____"}</Text>
		</Text>
		<Text>
			<Text color={red}>{" /  _/_"}</Text>
			<Text color={green}>{"|  | |  |"}</Text>
			<Text color={blue}>{" __ \\"}</Text>
		</Text>
		<Text>
			<Text color={red}>{"(  (_  )"}</Text>
			<Text color={green}>{"  |_|  |"}</Text>
			<Text color={blue}>{"    /"}</Text>
		</Text>
		<Text>
			<Text color={red}>{" \\____/"}</Text>
			<Text color={green}>{" \\_____/"}</Text>
			<Text color={blue}>{"|_|\\_\\"}</Text>
		</Text>
	</Box>
);

const gur3 = () => (
	<Box width={31} height={7} flexDirection="column">
		<Text>
			<Text color={white}>{"                         ┌─┐┌─┐"}</Text>
		</Text>
		<Text>
			<Text color={red}>{"┌──────┬"}</Text>
			<Text color={green}>{"──┐  ┌──┬"}</Text>
			<Text color={blue}>{"───────┐"}</Text>
			<Text color={white}>{"│ │└─┐"}</Text>
		</Text>
		<Text>
			<Text color={red}>{"│  ┌───┤"}</Text>
			<Text color={green}>{"  │  │  │"}</Text>
			<Text color={blue}>{"  ───  │"}</Text>
			<Text color={white}>{"└─┘└─┘"}</Text>
		</Text>
		<Text>
			<Text color={red}>{"│  └─  │"}</Text>
			<Text color={green}>{"  └──┘  │"}</Text>
			<Text color={blue}>{" ┌─┐ ┌─┘"}</Text>
		</Text>
		<Text>
			<Text color={red}>{"└──────┴"}</Text>
			<Text color={green}>{"────────┴"}</Text>
			<Text color={blue}>{"─┘ └─┘"}</Text>
		</Text>
	</Box>
);

const gur4 = () => (
	<Box width={25} height={5} flexDirection="column">
		<Text>
			<Text color={red}>{"┌──────┬"}</Text>
			<Text color={green}>{"──┐  ┌──┬"}</Text>
			<Text color={blue}>{"───────┐"}</Text>
		</Text>
		<Text>
			<Text color={red}>{"│  ┌───┤"}</Text>
			<Text color={green}>{"  │  │  │"}</Text>
			<Text color={blue}>{"  ───  │"}</Text>
		</Text>
		<Text>
			<Text color={red}>{"│  └─  │"}</Text>
			<Text color={green}>{"  └──┘  │"}</Text>
			<Text color={blue}>{" ┌─┐ ┌─┘"}</Text>
		</Text>
		<Text>
			<Text color={red}>{"└──────┴"}</Text>
			<Text color={green}>{"────────┴"}</Text>
			<Text color={blue}>{"─┘ └─┘"}</Text>
		</Text>
	</Box>
);

const gur5 = () => (
	<Box width={31} height={7} flexDirection="column">
		<Text>
			<Text color={white}>{"                         ╭─╮╭─╮"}</Text>
		</Text>
		<Text>
			<Text color={red}>{"╭──────┬"}</Text>
			<Text color={green}>{"──╮  ╭──┬"}</Text>
			<Text color={blue}>{"───────╮"}</Text>
			<Text color={white}>{"│ │╰─╮"}</Text>
		</Text>
		<Text>
			<Text color={red}>{"│  ╭───┤"}</Text>
			<Text color={green}>{"  │  │  │"}</Text>
			<Text color={blue}>{"  ───  │"}</Text>
			<Text color={white}>{"╰─╯╰─╯"}</Text>
		</Text>
		<Text>
			<Text color={red}>{"│  ╰─  │"}</Text>
			<Text color={green}>{"  ╰──╯  │"}</Text>
			<Text color={blue}>{" ╭─╮ ╭─╯"}</Text>
		</Text>
		<Text>
			<Text color={red}>{"╰──────┴"}</Text>
			<Text color={green}>{"────────┴"}</Text>
			<Text color={blue}>{"─╯ ╰─╯"}</Text>
		</Text>
	</Box>
);

const gur6 = () => (
	<Box width={33} height={7} flexDirection="column">
		<Text>
			<Text color={white}>{"                           ╭─╮╭─╮"}</Text>
		</Text>
		<Text>
			<Text color={red}>{"╭──────╮"}</Text>
			<Text color={green}>{"╭──╮  ╭──╮"}</Text>
			<Text color={blue}>{"╭───────╮"}</Text>
			<Text color={white}>{"│ │╰─╮"}</Text>
		</Text>
		<Text>
			<Text color={red}>{"│  ╭───┤"}</Text>
			<Text color={green}>{"│  │  │  │"}</Text>
			<Text color={blue}>{"│  ───  │"}</Text>
			<Text color={white}>{"╰─╯╰─╯"}</Text>
		</Text>
		<Text>
			<Text color={red}>{"│  ╰─  │"}</Text>
			<Text color={green}>{"│  ╰──╯  │"}</Text>
			<Text color={blue}>{"│ ╭─╮ ╭─╯"}</Text>
		</Text>
		<Text>
			<Text color={red}>{"╰──────╯"}</Text>
			<Text color={green}>{"╰────────╯"}</Text>
			<Text color={blue}>{"╰─╯ ╰─╯"}</Text>
		</Text>
	</Box>
);

const gur7 = () => (
	<Box width={40} height={7} flexDirection="column">
		<Text color={"black"}>
			<Text>{"                                "}</Text>
			<Text backgroundColor={white}>{" ╭─╮╭─╮ "}</Text>
		</Text>
		<Text color={"black"}>
			<Text backgroundColor={red}>{" ╭──────╮ "}</Text>
			<Text backgroundColor={green}>{" ╭──╮  ╭──╮ "}</Text>
			<Text backgroundColor={blue}>{" ╭───────╮"}</Text>
			<Text backgroundColor={white}>{" │ │╰─╮ "}</Text>
		</Text>
		<Text color={"black"}>
			<Text backgroundColor={red}>{" │  ╭───┤ "}</Text>
			<Text backgroundColor={green}>{" │  │  │  │ "}</Text>
			<Text backgroundColor={blue}>{" │  ───  │"}</Text>
			<Text backgroundColor={white}>{" ╰─╯╰─╯ "}</Text>
		</Text>
		<Text color={"black"}>
			<Text backgroundColor={red}>{" │  ╰─  │ "}</Text>
			<Text backgroundColor={green}>{" │  ╰──╯  │ "}</Text>
			<Text backgroundColor={blue}>{" │ ╭─╮ ╭─╯ "}</Text>
		</Text>
		<Text color={"black"}>
			<Text backgroundColor={red}>{" ╰──────╯ "}</Text>
			<Text backgroundColor={green}>{" ╰────────╯ "}</Text>
			<Text backgroundColor={blue}>{" ╰─╯ ╰─╯   "}</Text>
		</Text>
	</Box>
);

export const Gur = () => {
	//Random gur
	//const gur = Math.floor(Math.random() * 3);
	const gur: number = 5;

	return (
		<Box marginRight={1}>
			{gur === 0 && gur1()}
			{gur === 1 && gur2()}
			{gur === 2 && gur3()}
			{gur === 3 && gur4()}
			{gur === 4 && gur5()}
			{gur === 5 && gur6()}
			{gur === 6 && gur7()}
		</Box>
	);
};

const GurPanel = ({ ...rest }: React.ComponentProps<typeof BorderBox>) => (
	<BorderBox
		overflow="hidden"
		flexDirection="column"
		flexGrow={20}
		center={true}
		{...rest}
	>
		<Gur />
	</BorderBox>
);

export default GurPanel;
