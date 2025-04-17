export type SwitchAppState = boolean;
export declare const switchAppStateInit = false;
export declare const switchIsChecked: (state: SwitchAppState) => boolean;
export declare const switchSetValue: (_: SwitchAppState, value: boolean) => SwitchAppState;
export declare const switchSetValueU: (arg2: boolean) => (arg1: boolean) => boolean;
export declare const switchCheck: () => SwitchAppState;
export declare const switchUncheck: () => SwitchAppState;
export declare const switchToggele: (state: SwitchAppState) => SwitchAppState;
