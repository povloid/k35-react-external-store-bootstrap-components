export interface FilterByAppState {
    readonly title: string;
    readonly isActive: boolean;
}
export declare const fileterByIsActive: (state: FilterByAppState) => boolean;
export declare const fileterByIsNotActive: (state: FilterByAppState) => boolean;
export declare const fileterBySetActive: (state: FilterByAppState) => {
    isActive: boolean;
    title: string;
};
export declare const fileterBySetNotActive: (state: FilterByAppState) => {
    isActive: boolean;
    title: string;
};
export declare const fileterBySetActiveAs: (state: FilterByAppState, isActive: boolean) => {
    isActive: boolean;
    title: string;
};
export declare const fileterBySetActiveAsU: (arg2: boolean) => (arg1: FilterByAppState) => {
    isActive: boolean;
    title: string;
};
