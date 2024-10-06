export type InputAppState = string;
export declare const inputAppStateInit: InputAppState;
export declare const inputValue: (state: InputAppState) => string;
export declare const inputValueOrUndefinedWhenEmpty: (state: InputAppState) => string | undefined;
export declare const inputSetValue: (state: InputAppState, value: string) => InputAppState;
