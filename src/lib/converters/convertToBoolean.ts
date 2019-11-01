import { StringLike } from "../../types";

export const convertToBoolean = (value: StringLike | undefined): boolean | undefined => {
  const truthy = ["true", "True", "1"];
  const falsy = ["false", "False", "0"];

  const isTrue = () => truthy.find(x => x === value) !== undefined;
  const isFalse = () => falsy.find(x => x === value) !== undefined;

  if (isTrue()) {
    return true;
  }

  if (isFalse()) {
    return false;
  }

  return undefined;
};
