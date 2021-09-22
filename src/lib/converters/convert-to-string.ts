import { StringLike } from "../../types";

/**
 * Converts a `StringLike` value to `string`
 * @param value - The value to convert
 * @returns The converted string `value` or `undefined`
 */
export const convertToString = (value: StringLike | undefined): string | undefined => {
  if (value === undefined) {
    return undefined;
  }

  return value.toString !== undefined ? value.toString() : (value as string);
};
