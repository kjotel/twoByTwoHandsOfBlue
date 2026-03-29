export function decodeBraille(input) {
  if (input === "") return "";

  // Split into 6-bit chunks
  const chunks = [];
  for (let i = 0; i < input.length; i += 6) {
    chunks.push(input.slice(i, i + 6));
  }

  // Letter mapping
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
    101001: "u",
    111001: "v",
    "010111": "w",
    101101: "x",
    101111: "y",
    101011: "z",
  };

  // Number mapping (a–j → 1–0)
  const numberMap = {
    a: "1",
    b: "2",
    c: "3",
    d: "4",
    e: "5",
    f: "6",
    g: "7",
    h: "8",
    i: "9",
    j: "0",
  };

  let result = "";
  let capitalizeNext = false;
  let numberMode = false;

  for (let chunk of chunks) {
    // Capital indicator
    if (chunk === "000001") {
      capitalizeNext = true;
      continue;
    }

    // Number indicator
    if (chunk === "001111") {
      numberMode = true;
      continue;
    }

    let letter = brailleMap[chunk] || "?";

    // Apply number mode
    if (numberMode && numberMap[letter]) {
      letter = numberMap[letter];
    }

    // Apply capitalization
    if (capitalizeNext) {
      letter = letter.toUpperCase();
      capitalizeNext = false;
    }

    result += letter;
  }

  return result;
}
