import { test, expect } from "./testRunner.mjs";
import { decodeBraille } from "../src/braille.mjs";

test("returns empty string for empty input", () => {
  expect(decodeBraille("")).toBe("");
});

test("splits input into 6-bit chunks internally", () => {
  const input = "100000101110";
  const result = decodeBraille(input);

  expect(typeof result).toBe("string");
});

test("decodes braille 'a'", () => {
  expect(decodeBraille("100000")).toBe("a");
});

test("decodes braille 'b'", () => {
  expect(decodeBraille("110000")).toBe("b");
});

test("decodes braille 'c'", () => {
  expect(decodeBraille("100100")).toBe("c");
});

test("decodes braille 'd'", () => {
  expect(decodeBraille("100110")).toBe("d");
});

test("decodes braille 'e'", () => {
  expect(decodeBraille("100010")).toBe("e");
});

test("decodes braille 'f'", () => {
  expect(decodeBraille("110100")).toBe("f");
});

test("decodes braille 'g'", () => {
  expect(decodeBraille("110110")).toBe("g");
});

test("decodes braille 'h'", () => {
  expect(decodeBraille("110010")).toBe("h");
});

test("decodes braille 'i'", () => {
  expect(decodeBraille("010100")).toBe("i");
});

test("decodes braille 'j'", () => {
  expect(decodeBraille("010110")).toBe("j");
});

test("decodes braille 'k'", () => {
  expect(decodeBraille("101000")).toBe("k");
});

test("decodes braille 'l'", () => {
  expect(decodeBraille("111000")).toBe("l");
});

test("decodes braille 'm'", () => {
  expect(decodeBraille("101100")).toBe("m");
});

test("decodes braille 'n'", () => {
  expect(decodeBraille("101110")).toBe("n");
});

test("decodes braille 'o'", () => {
  expect(decodeBraille("101010")).toBe("o");
});

test("decodes braille 'p'", () => {
  expect(decodeBraille("111100")).toBe("p");
});

test("decodes braille 'q'", () => {
  expect(decodeBraille("111110")).toBe("q");
});

test("decodes braille 'r'", () => {
  expect(decodeBraille("111010")).toBe("r");
});

test("decodes braille 's'", () => {
  expect(decodeBraille("011100")).toBe("s");
});

test("decodes braille 't'", () => {
  expect(decodeBraille("011110")).toBe("t");
});

test("decodes braille 'u'", () => {
  expect(decodeBraille("101001")).toBe("u");
});

test("decodes braille 'v'", () => {
  expect(decodeBraille("111001")).toBe("v");
});

test("decodes braille 'w'", () => {
  expect(decodeBraille("010111")).toBe("w"); // special case
});

test("decodes braille 'x'", () => {
  expect(decodeBraille("101101")).toBe("x");
});

test("decodes braille 'y'", () => {
  expect(decodeBraille("101111")).toBe("y");
});

test("decodes braille 'z'", () => {
  expect(decodeBraille("101011")).toBe("z");
});

test("decodes capital A", () => {
  expect(decodeBraille("000001100000")).toBe("A");
});

test("decodes capital B", () => {
  expect(decodeBraille("000001110000")).toBe("B");
});

test("decodes mixed lowercase and uppercase", () => {
  const input = "100000000001110000"; // a + B
  expect(decodeBraille(input)).toBe("aB");
});

test("decodes multiple braille characters", () => {
  const input = "100000110000100100"; // a b c
  expect(decodeBraille(input)).toBe("abc");
});

test("returns '?' for unknown braille pattern", () => {
  expect(decodeBraille("000000")).toBe("?");
});

test("decodes number 1", () => {
  expect(decodeBraille("001111100000")).toBe("1");
});

test("decodes number sequence 123", () => {
  const input = "001111100000110000100100";
  expect(decodeBraille(input)).toBe("123");
});

test("mix of letters and numbers", () => {
  const input = "100000001111100000"; // a + 1
  expect(decodeBraille(input)).toBe("a1");
});

test("decodes full braille into non-empty base64 string", () => {
  const input = "...";
  const result = decodeBraille(input);

  expect(result.length > 0).toBe(true);
});

// Output (Base 64)
// anh1980r4wp5971oZWp19857Ynlk4S2l492zZXR197pl486vL1pqZS203W6197p44S295WpqYnU73mtq1mVk97lq3W8u3n0r192t58Vk98k7186k98lqL32t586q98574m85438qL1pq58U71XNo4XVk9711Z7o7486oYSw75Wo72X6pZ34q9785438q9QoK2X8118U75Wk71n8198Vo17VoPy2598NxZ7Rl192p4XUs3nlq97l14WNp97p44S2zZXR198lp97Nl3265Z837Y3Uu3nk733813261432q58U75y2xZ8Q71n81980s3n6k432xYm971n8198NlY2Nx1S25Z32y4Wpt4XVkL7oK5S2p4X6o3381432q58U75WRq4W8k4Wo74mVo986543wK3WR098Ro3WR897Nl18U732V24nV198k7586097Nx48Uu3n57Y3lp1Xlk4y2p4WN532V9ZWQs97V497p44S2m3Xlk9Qp5986048V098lqL32xZ8Q7Z7Vt98lq978rZ7kuL9473X4x5WQ?398kZSw72X6519w7Z7Vt98lq02k73m8lYXVk98lk9857Z8Vt971x2y4p
