import { Box, Text } from "ink";
import type { Color } from "../../state/style.js";

const [red, green, blue, _yellow, white]: Color[] = [
	"red",
	"green",
	"blue",
	"yellow",
	"grey"
];

export const Gur1 = () => (
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

export const Gur2 = () => (
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

export const Gur3 = () => (
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

export const Gur4 = () => (
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

export const Gur5 = () => (
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

export const Gur6 = () => (
	<Box width={35} height={7} flexDirection="column">
		<Text>
			<Text color={white}>{"                           ╭──╮╭──╮"}</Text>
		</Text>
		<Text>
			<Text color={red}>{"╭──────╮"}</Text>
			<Text color={green}>{"╭──╮  ╭──╮"}</Text>
			<Text color={blue}>{"╭───────╮"}</Text>
			<Text color={white}>{"│  │╰──╮"}</Text>
		</Text>
		<Text>
			<Text color={red}>{"│  ╭───┤"}</Text>
			<Text color={green}>{"│  │  │  │"}</Text>
			<Text color={blue}>{"│  ───  │"}</Text>
			<Text color={white}>{"╰──╯╰──╯"}</Text>
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

export const Gur7 = () => (
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
