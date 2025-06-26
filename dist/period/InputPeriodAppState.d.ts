export type Hour = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23;
export type Day = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31;
export type Month = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type Year = 2024 | 2025 | 2026 | 2027 | 2028 | 2029 | 2030 | 2031 | 2032 | 2033 | 2034 | 2035 | 2036 | 2037 | 2038 | 2039 | 2040 | 2041 | 2042 | 2043 | 2044 | 2045 | 2046 | 2047 | 2048 | 2049 | 2050;
export declare const years: Year[];
export declare const YEAR_MIN: Year;
export declare const YEAR_MAX: Year;
export declare const monthes: Month[];
export declare const MONTH_MIN = 1;
export declare const MONTH_MAX = 12;
export interface InputPeriodAppState {
    year: Year;
    month: Month;
}
export declare const inputPeriodAppStateInit: InputPeriodAppState;
export declare const inputPeriodGetValue: (state: InputPeriodAppState) => {
    year: Year;
    month: Month;
};
export declare const inputPeriodSetValue: (_: InputPeriodAppState, state: InputPeriodAppState) => {
    year: Year;
    month: Month;
};
export declare const inputPeriodSetValueU: (arg2: InputPeriodAppState) => (arg1: InputPeriodAppState) => {
    year: Year;
    month: Month;
};
export declare const inputPeriodSetYear: (state: InputPeriodAppState, year: Year) => {
    year: Year;
    month: Month;
};
export declare const inputPeriodSetYearU: (arg2: Year) => (arg1: InputPeriodAppState) => {
    year: Year;
    month: Month;
};
export declare const inputPeriodSetMonth: (state: InputPeriodAppState, month: Month) => {
    month: Month;
    year: Year;
};
export declare const inputPeriodSetMonthU: (arg2: Month) => (arg1: InputPeriodAppState) => {
    month: Month;
    year: Year;
};
