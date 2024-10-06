export interface NavAppState {
    active: string;
}
export declare const navAppStateInit: {
    active: string;
};
export declare const navIsActive: (state: NavAppState, acitve: string) => boolean;
export declare const navSetActive: (state: NavAppState, active: string) => NavAppState;
export declare const navSetActiveC: (a2: string) => (a1: NavAppState) => NavAppState;
