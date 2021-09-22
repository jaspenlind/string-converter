import { convertToBoolean } from "../../src/lib/converters";

describe("convertToBoolean", () => {
  it("can convert truthy values", () => {
    expect(convertToBoolean("true")).toBe(true);
    expect(convertToBoolean("True")).toBe(true);
    expect(convertToBoolean("1")).toBe(true);
  });

  it("can convert falsy values", () => {
    expect(convertToBoolean("false")).toBe(false);
    expect(convertToBoolean("False")).toBe(false);
    expect(convertToBoolean("0")).toBe(false);
  });

  it("can handle undefined", () => {
    expect(convertToBoolean(undefined)).toBeUndefined();
  });
});
