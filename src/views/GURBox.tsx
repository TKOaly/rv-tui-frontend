import { Box, Text } from "ink";
import BorderBox from "../components/BorderBox.js";
import type { Color } from "../lib/state.js";

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
			<Text color={white}>{"                         ┌─┐┌─╴"}</Text>
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
			<Text color={white}>{"└─┘╶─┘"}</Text>
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

export const Gur = () => {
	//Random gur
	//const gur = Math.floor(Math.random() * 3);
	const gur: number = 2;

	return (
		<Box marginRight={1}>
			{gur === 0 && gur1()}
			{gur === 1 && gur2()}
			{gur === 2 && gur3()}
			{gur === 3 && gur4()}
		</Box>
	);
};

const GurBox = () => (
	<BorderBox flexDirection="column" flexGrow={20} center={true}>
		<Gur />
	</BorderBox>
);

export default GurBox;
