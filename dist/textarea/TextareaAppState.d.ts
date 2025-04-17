export type TextareaAppState = string;
export declare const textareaAppStateInit: TextareaAppState;
export declare const textareaValue: (state: TextareaAppState) => string;
export declare const textareaSetValue: (state: TextareaAppState, value: string) => TextareaAppState;
export declare const textareaSetValueU: (arg2: string) => (arg1: string) => string;
