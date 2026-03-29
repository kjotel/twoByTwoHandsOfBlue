export function decodeBraille(input) {
  if (input === "") return "";

  const chunks = [];

  for (let i = 0; i < input.length; i += 6) {
    chunks.push(input.slice(i, i + 6));
  }

  const brailleMap = {
    100000: "a",
  };

  return chunks.map((chunk) => brailleMap[chunk] || "?").join("");
}
