export type HashScreensAppState<T extends string> = T;
export declare const selectedHashScreen: <T extends string>(state: HashScreensAppState<T>) => T;
export declare const selectedHashScreenSet: <T extends string>(state: HashScreensAppState<T>, screen: T) => HashScreensAppState<T>;
export declare const selectedHashScreenSetU: <T extends string>(arg2: T) => (arg1: T) => T;
