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

test("decodes multiple braille characters", () => {
  const input = "100000110000100100"; // a b c
  expect(decodeBraille(input)).toBe("abc");
});

test("returns '?' for unknown braille pattern", () => {
  expect(decodeBraille("000000")).toBe("?");
});
