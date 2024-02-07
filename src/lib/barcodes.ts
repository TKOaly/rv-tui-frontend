const patterns: Record<number, string> = {
	0: "LLLLLL",
	1: "LLGLGG",
	2: "LLGGLG",
	3: "LLGGGL",
	4: "LGLLGG",
	5: "LGGLLG",
	6: "LGGGLL",
	7: "LGLGLG",
	8: "LGLGGL",
	9: "LGGLGL"
};

const L: Record<number, string> = {
	0: "0001101",
	1: "0011001",
	2: "0010011",
	3: "0111101",
	4: "0100011",
	5: "0110001",
	6: "0101111",
	7: "0111011",
	8: "0110111",
	9: "0001011"
};

const G: Record<number, string> = {
	0: "0100111",
	1: "0110011",
	2: "0011011",
	3: "0100001",
	4: "0011101",
	5: "0111001",
	6: "0000101",
	7: "0010001",
	8: "0001001",
	9: "0010111"
};

const R: Record<number, string> = {
	0: "1110010",
	1: "1100110",
	2: "1101100",
	3: "1000010",
	4: "1011100",
	5: "1001110",
	6: "1010000",
	7: "1000100",
	8: "1001000",
	9: "1110100"
};

const pairStrings: Record<string, string> = {
	"00": " ",
	"01": "▐",
	"10": "▌",
	"11": "█",
	"1": "▌"
};

const errorString = "▌▌ BARCODE ▐▐▐ BARCODE ▐▐";

/**
 * Creates a unicode representation of an EAN-13 or EAN-8 barcode
 * @param barcode EAN-13 or EAN-8 barcode number
 * @returns String
 * @link https://en.wikipedia.org/wiki/International_Article_Number#Binary_encoding_of_data_digits_into_EAN-13_barcode
 */
const convert = (barcode: number, scale: 1 | 2) => {
	const length = barcode.toString().length;
	if (length !== 13 && length !== 8) {
		return errorString;
	}
	const type = length === 13 ? "EAN-13" : "EAN-8";

	const barcodeArray = barcode.toString().split("").map(Number);
	const firstDigit = barcodeArray.shift() ?? 0;
	const pattern = patterns[firstDigit].split("");

	const leftGroup = barcodeArray
		.slice(0, type === "EAN-13" ? 6 : 4)
		.map((number, index) =>
			pattern[index] === "L" || type === "EAN-8" ? L[number] : G[number]
		);

	const rightGroup = barcodeArray
		.slice(type === "EAN-13" ? 6 : 4, type === "EAN-13" ? 12 : 8)
		.map(number => R[number]);

	const fullBinary =
		"101" + leftGroup.join("") + "01010" + rightGroup.join("") + "101";

	if (scale === 1) {
		const binaryPairs = fullBinary.split(/(?=(?:..)*.$)/);
		return binaryPairs.map(pair => pairStrings[pair]).join("");
	} else {
		return fullBinary
			.split("")
			.map(bit => (bit === "1" ? "█" : " "))
			.join("");
	}
};

/**
 * Creates a unicode representation of an EAN-13 or EAN-8 barcode
 * @param barcode EAN-13 or EAN-8 barcode number
 * @returns String
 */
const EANToUnicode = (barcode: number, scale: 1 | 2 = 1) => {
	try {
		return convert(barcode, scale);
	} catch (_e) {
		return errorString;
	}
};

export default EANToUnicode;
