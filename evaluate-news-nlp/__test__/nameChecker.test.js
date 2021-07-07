import { validateUrl } from "../src/client/js/nameChecker.js";

describe("Correct URLs", () => {
  test("should return true (http)", () => {
    const input = "https://en.wikipedia.org/wiki/Webpack";
    expect(validateUrl(input)).toBe(true);
  });
  test("should return true (https)", () => {
    const input = "https://en.wikipedia.org/wiki/Webpack";
    expect(validateUrl(input)).toBe(true);
  });
});

describe("No http(s)/no www", () => {
  test("should return false (no http)", () => {
    const input = "www.wikipedia.com";
    expect(validateUrl(input)).toBe(false);
  });
  test("should return false (no www)", () => {
    const input = "wikipedia.com";
    expect(validateUrl(input)).toBe(false);
  });
  
});