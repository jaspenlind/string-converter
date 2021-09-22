import { StringLike } from "../../types";

/**
 * Converts a `StringLike` value to `number`
 * @param value - The value to convert
 * @returns The converted numeric `value` or `undefined`
 */
export const convertToNumber = (value: StringLike | undefined): number | undefined => {
  const valueAsNumber = Number(value);

  return Number.isNaN(valueAsNumber) ? undefined : valueAsNumber;
};
