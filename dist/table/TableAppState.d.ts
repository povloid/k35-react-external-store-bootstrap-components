export interface TableColumn {
    text: string;
    align?: string;
}
export interface TableAppState<T> {
    columns?: TableColumn[];
    items: T[];
}
export declare const tableAppStateInit: {
    items: never[];
};
export declare const tableSetItems: <T>(state: TableAppState<T>, items: T[]) => TableAppState<T>;
export declare const tableSetItemsU: <T>(arg2: T[]) => (arg1: TableAppState<T>) => TableAppState<T>;
