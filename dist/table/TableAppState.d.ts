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
