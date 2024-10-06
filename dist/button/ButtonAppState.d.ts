export interface ButtonAppState {
    disabled?: boolean;
}
export declare const buttonAppStateInit: ButtonAppState;
export declare const buttonEnable: (state: ButtonAppState) => ButtonAppState;
export declare const buttonDisable: (state: ButtonAppState) => ButtonAppState;
export declare const buttonSetDisable: (state: ButtonAppState, disabled: boolean) => ButtonAppState;
export declare const buttonSetDisableC: (a2: boolean) => (a1: ButtonAppState) => ButtonAppState;
