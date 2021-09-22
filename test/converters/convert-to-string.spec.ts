import { convertToString } from "../../src/lib/converters";
import { StringConvertible } from "../../src/types";

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
