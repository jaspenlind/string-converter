import { convertToString, StringConvertible } from "../../src/lib/converters";

const toStringFunc = (): StringConvertible => {
  return {
    toString: () => "some string"
  };
};

describe("convertToString", () => {
  it("can convert StringConvertible", () => {
    expect(convertToString(toStringFunc())).toBeDefined();
  });

  it("can return string", () => {
    expect(convertToString("str")).toBe("str");
  });

  it("can handle undefined", () => {
    expect(convertToString(undefined)).toBeUndefined();
  });
});
