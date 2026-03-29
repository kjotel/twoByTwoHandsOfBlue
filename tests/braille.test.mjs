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

test("decodes multiple braille characters", () => {
  const input = "100000110000100100"; // a b c
  expect(decodeBraille(input)).toBe("abc");
});