#!/usr/bin/env node
import { StringConvertible, StringConvertedType, StringLike } from "../types";
import { convertToBoolean, convertToNumber, convertToString } from "./converters";

export { StringConvertible, StringLike };

export const convert = (value: StringLike | undefined): StringConvertedType => {
  return convertToNumber(value) || convertToBoolean(value) || convertToString(value);
};
