import { StringLike } from "../../types";

export const convertToString = (value: StringLike | undefined): string | undefined => {
  if (value === undefined) {
    return undefined;
  }

  return value.toString !== undefined ? value.toString() : (value as string);
};
