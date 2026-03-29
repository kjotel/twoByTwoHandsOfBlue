export function decodeBraille(input) {
  if (input === "") return "";

  const chunks = [];

  for (let i = 0; i < input.length; i += 6) {
    chunks.push(input.slice(i, i + 6));
  }

  const brailleMap = {
    100000: "a",
    110000: "b",
    100100: "c",
    100110: "d",
    100010: "e",
    110100: "f",
    110110: "g",
    110010: "h",
    "010100": "i",
    "010110": "j",
    101000: "k",
    111000: "l",
    101100: "m",
    101110: "n",
    101010: "o",
    111100: "p",
    111110: "q",
    111010: "r",
    "011100": "s",
    "011110": "t",
  };

  return chunks.map((chunk) => brailleMap[chunk] || "?").join("");
}
