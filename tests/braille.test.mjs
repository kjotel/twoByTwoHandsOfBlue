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
