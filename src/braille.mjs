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
  };

  return chunks.map((chunk) => brailleMap[chunk] || "?").join("");
}
