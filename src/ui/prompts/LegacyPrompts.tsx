import { Box, Text } from "ink";

/** Small template for future artwork */
export const TurboFish = () => {
	const fuuuu = ["::<>"];

	return (
		<Box width={4} height={1} flexDirection="column">
			{fuuuu.map((line, index) => (
				<Text key={index} color={"white"}>
					{line}
				</Text>
			))}
		</Box>
	);
};

/**
 * @author dogo
 */
export const Dogo = () => {
	const dogo = [
		"                |\\              ",
		"        /    /\\/o\\_            ",
		"       (.-.__.(   __o            ",
		"    /\\_(      .----'            ",
		"     .' \\____/                  ",
		"    /   /  / \\                  ",
		"___:____\\__\\__\\___________dogo"
	];

	return (
		<Box width={34} height={7} flexDirection="column">
			{dogo.map((line, index) => (
				<Text key={index} color={"white"}>
					{line}
				</Text>
			))}
		</Box>
	);
};

export const Fuuuu = () => {
	const fuuuu = [
		"        PLEASE DEPOSIT MONEY ASAP      ",
		"                 .:oxxxxo'             ",
		"            ';lx0WNkoKMOKMNNX.         ",
		"         .xXKo::::lkWMMMWNlc0N;        ",
		"        oWx.       dMMMk     oMd       ",
		"   ::dOXMd..      :WMK'.oNN0X:;XK.     ",
		"  .xWo  ,:dWM0    NMXNk    0KOWWOKN'   ",
		"  O0. oXXc'cxNKl  .clMo     .. 'MxxW,  ",
		"  Kl :MNk:   '0KX.   ;N0.       dX kX. ",
		" dM, KWkWk    .0Wl;::cxMWxc;,,;dWx .XK.",
		"lW'  .OK.    :W0xWMKoMWWWOMNkkkd.   .M:",
		"cM.   :Wl'':0NNWMdcMX0..  .,,;lNO.   Nx",
		";M.    ,::cc;.NkOWkK'          .0N'  xO",
		";M'          .MOd;      ck00c    xW. xO",
		".Mo          cW.   .oXkO0; kWkXXNdM; Ok",
		" cM'        .Xx    XK' :ddxWOKM:xNM, 0x",
		"  Nc        cN     o:'xW:,NMKlccc;. .Wl",
		"  kK       .X0...'XXdxMNkWk;        ,M'",
		"  .Wc     .XMXNxXMN;cxN0c.          cM.",
		"   dN.     ;dOkxkOKk:'             ;Wx ",
		"    K0                            ,Wd  ",
		"    .;                            ;l   "
	];

	return (
		<Box width={40} height={22} flexDirection="column">
			{fuuuu.map((line, index) => (
				<Text key={index} color={index === 0 ? "redBright" : "white"}>
					{line}
				</Text>
			))}
		</Box>
	);
};

export const Rip = () => {
	const fuuuu = [
		" XXXXXXXXXXXXXXXXXXXXXXXXXXXX   ",
		"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX  ",
		"XX cccccccccccccccccccccccc XX  ",
		"XX XXX `x` XXXXXXXX `x` XXX XX  ",
		"XX XXXX> <XXXXXXXXXX> <XXXX XX  ",
		"XX XXX .x. XXXXXXXX .x. XXX XX  ",
		"XX XXXXXXXX|  XX  |XXXXXXXX XX  ",
		"XX XXXXXXXXXX\\  /XXXXXXXXXX XX ",
		"XX XXXXXXXXXXXXXXXXXXXXXXXX XX  ",
		"XX XXXXXX/           \\XXXXX XX ",
		"XX XXXXX/ XXXXXXXXX\\   \\XXX XX",
		"XX ************************ XX  ",
		"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX  ",
		"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX  ",
		"XX      XXXXXXXX           XXX  ",
		"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX  ",
		"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX  ",
		"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX  ",
		"   xxxxxxxxxxxxxxxxxxxxxxxx     ",
		"   XXXXXXXXXXXXXXXXXXXXXXXX     ",
		" NEGATIVE SALDO MAKES RV SAD    ",
		"     !! PLEASE DEPOSIT !!       "
	];

	return (
		<Box width={31} height={22} flexDirection="column">
			{fuuuu.map((line, index) => (
				<Text
					key={index}
					color={[20, 21].includes(index) ? "redBright" : "white"}
				>
					{line}
				</Text>
			))}
		</Box>
	);
};
