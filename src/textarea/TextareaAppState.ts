import { asUpdate } from "@k35/fp";

export type TextareaAppState = string

export const textareaAppStateInit: TextareaAppState = ""

export const textareaValue = (state: TextareaAppState) => state;

export const textareaSetValue = (state: TextareaAppState, value: string): TextareaAppState => value;

export const textareaSetValueU = asUpdate(textareaSetValue)


