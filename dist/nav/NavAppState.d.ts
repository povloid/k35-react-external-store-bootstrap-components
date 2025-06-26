export interface NavAppState {
    active: string;
}
export declare const navAppStateInit: {
    active: string;
};
export declare const navIsActive: (state: NavAppState, acitve: string) => boolean;
export declare const navSetActive: (state: NavAppState, active: string) => NavAppState;
export declare const navSetActiveU: (arg2: string) => (arg1: NavAppState) => NavAppState;
