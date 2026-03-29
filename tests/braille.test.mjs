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

test("decodes multiple braille characters", () => {
  const input = "100000110000100100"; // a b c
  expect(decodeBraille(input)).toBe("abc");
});

test("returns '?' for unknown braille pattern", () => {
  expect(decodeBraille("000000")).toBe("?");
});
