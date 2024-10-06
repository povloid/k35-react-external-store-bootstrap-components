export type SwitchAppState = boolean;
export declare const switchAppStateInit = false;
export declare const switchIsChecked: (state: SwitchAppState) => boolean;
export declare const switchSetValue: (_: SwitchAppState, value: boolean) => SwitchAppState;
export declare const switchCheck: () => SwitchAppState;
export declare const switchUncheck: () => SwitchAppState;
export declare const switchToggele: (state: SwitchAppState) => SwitchAppState;
