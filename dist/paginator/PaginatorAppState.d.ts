export declare const paginatorSizes: number[];
export interface PaginatorAppState {
    page: number;
    size: (typeof paginatorSizes)[number];
}
export declare const paginatorAppStateInit: PaginatorAppState;
export declare const paginatorValue: ({ page, size }: PaginatorAppState) => {
    page: number;
    size: number;
};
export declare const paginatorToFirstPage: (state: PaginatorAppState) => {
    page: number;
    size: (typeof paginatorSizes)[number];
};
export declare const paginatorToPrevPage: (state: PaginatorAppState) => {
    page: number;
    size: (typeof paginatorSizes)[number];
};
export declare const paginatorToNextPage: (state: PaginatorAppState) => {
    page: number;
    size: (typeof paginatorSizes)[number];
};
export declare const paginatorSetPageSize: (state: PaginatorAppState, size: number) => {
    size: number;
    page: number;
};
export declare const paginatorSetPageSizeU: (arg2: number) => (arg1: PaginatorAppState) => {
    size: number;
    page: number;
};
