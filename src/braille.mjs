export function decodeBraille(input) {
  if (input === "") return "";

  // Split into 6-bit chunks
  const chunks = input.match(/.{1,6}/g) || [];

  // Letter mapping
  const brailleMap = {
    // Letters
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

    // Base64 required symbols
    "010011": "+", 
    "001100": "/", 
  };

  // Number mapping (a–j > 1–0)
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
    // 1. Capital indicator
    if (chunk === "000001") {
      capitalizeNext = true;
      continue;
    }

    // 2. Number indicator
    if (chunk === "001111") {
      numberMode = true;
      continue;
    }

    // 3. NOW check mapping
    if (!brailleMap[chunk]) {
      console.log("UNKNOWN:", chunk);
      result += "?";
      continue;
    }

    let letter = brailleMap[chunk];

    // 4. Number mode logic
    if (numberMode) {
      if (numberMap[letter]) {
        letter = numberMap[letter];
      } else {
        numberMode = false;
      }
    }

    // 5. Capital logic
    if (capitalizeNext) {
      letter = letter.toUpperCase();
      capitalizeNext = false;
    }

    result += letter;
  }

  return result.replace(/\s+/g, "");
}
