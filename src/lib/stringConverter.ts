#!/usr/bin/env node
import { StringConvertible, StringConvertedType, StringLike } from "../types";
import { convertToBoolean, convertToNumber, convertToString } from "./converters";

export { StringConvertible, StringLike };

/**
 * Converts a `StringLike` value to `number`, `boolean` or `string`
 * @param value - The value to convert
 * @returns The converted `value``
 */
export const convert = (value: StringLike | undefined): StringConvertedType => {
  return convertToNumber(value) || convertToBoolean(value) || convertToString(value);
};
