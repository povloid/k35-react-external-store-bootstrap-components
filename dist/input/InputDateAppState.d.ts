export type InputDateAppState = string;
export declare const inputDateAppStateInit: InputDateAppState;
export declare const inputDateValue: (state: InputDateAppState) => Date;
export declare const inputDateValueOrUndefined: (state: InputDateAppState) => Date | undefined;
export declare const inputDateSetValue: (state: InputDateAppState, date?: Date) => InputDateAppState;
export declare const inputDateSetValueU: (arg1: string) => () => string;
