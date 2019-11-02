import { convertToNumber } from "../../src/lib/converters";

describe("convertToNumber", () => {
  it("can convert to number", () => {
    const number = 42;
    expect(convertToNumber(number)).toBe(number);
  });

  it("can handle undefined", () => {
    expect(convertToNumber(undefined)).toBeUndefined();
  });
});
