export type HashScreensAppState<T extends string> = T;
export declare const selectedHashScreen: <T extends string>(state: HashScreensAppState<T>) => T;
export declare const selectedHashScreenSet: <T extends string>(state: HashScreensAppState<T>, screen: T) => HashScreensAppState<T>;
export declare const selectedHashScreenSetC: <T extends string>(a2: T) => (a1: T) => T;
