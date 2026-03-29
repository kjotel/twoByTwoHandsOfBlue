import { test, expect } from "./testRunner.mjs";
import { decodeBase64 } from "../src/base64.mjs";

test("decodes simple base64 string", () => {
  expect(decodeBase64("aGVsbG8=")).toBe("hello");
});
