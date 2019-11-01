import { StringLike } from "../../types";

export const convertToNumber = (value: StringLike | undefined): number | undefined => {
  const valueAsNumber = Number(value);

  return Number.isNaN(valueAsNumber) ? undefined : valueAsNumber;
};
