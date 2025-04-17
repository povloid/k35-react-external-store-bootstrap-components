import { asUpdate, curry2Right } from "@k35/fp";

export type InputAppState = string

export const inputAppStateInit: InputAppState = ""


export const inputValue = (state: InputAppState) => state;

export const inputValueOrUndefined = (state: InputAppState) => state.length > 0 ? state : undefined;
export const inputValueOrUndefinedWhenEmpty = inputValueOrUndefined

export const inputSetValue = (state: InputAppState, value?: string): InputAppState => value || "";
export const inputSetValueC = curry2Right(inputSetValue)
export const inputSetValueU = asUpdate(inputSetValue)

