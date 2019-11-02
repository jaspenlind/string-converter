import { StringLike } from "../../types";

const booleanValues = new Map<StringLike | undefined, boolean | undefined>([
  ["true", true],
  ["True", true],
  ["1", true],
  ["false", false],
  ["False", false],
  ["0", false],
  [undefined, undefined]
]);

/**
 * Converts a `StringLike` value to `boolean`
 * @param value - The value to convert
 * @returns The converted boolean `value` or `undefined`
 */
export const convertToBoolean = (value?: StringLike): boolean | undefined => booleanValues.get(value);
