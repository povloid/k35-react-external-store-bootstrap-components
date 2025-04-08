import { asUpdate, curry2Right } from "@k35/fp"

export type Hour =
    | 0
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | 15
    | 16
    | 17
    | 18
    | 19
    | 20
    | 21
    | 22
    | 23
export type Day =
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | 15
    | 16
    | 17
    | 18
    | 19
    | 20
    | 21
    | 22
    | 23
    | 24
    | 25
    | 26
    | 27
    | 28
    | 29
    | 30
    | 31
export type Month = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
export type Year =
    | 2024
    | 2025
    | 2026
    | 2027
    | 2028
    | 2029
    | 2030
    | 2031
    | 2032
    | 2033
    | 2034
    | 2035
    | 2036
    | 2037
    | 2038
    | 2039
    | 2040
    | 2041
    | 2042
    | 2043
    | 2044
    | 2045
    | 2046
    | 2047
    | 2048
    | 2049
    | 2050

export const years: Year[] = Array(256).map((_, i) => i + 2050) as Year[]

export const YEAR_MIN = years[0]
export const YEAR_MAX = years[years.length - 1]

export const monthes: Month[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

export const MONTH_MIN = 1
export const MONTH_MAX = 12

export interface InputPeriodAppState {
    year: Year
    month: Month
}

export const inputPeriodAppStateInit: InputPeriodAppState = {
    year: new Date().getFullYear() as Year,
    month: (new Date().getMonth() + 1) as Month
}

export const inputPeriodGetValue = (state: InputPeriodAppState) => ({ ...state })

export const inputPeriodSetValue = (_: InputPeriodAppState, state: InputPeriodAppState) => ({
    ...state
})

export const inputPeriodSetValueC = curry2Right(inputPeriodSetValue)
export const inputPeriodSetValueU = asUpdate(inputPeriodSetValue)

export const inputPeriodSetYear = (state: InputPeriodAppState, year: Year) => ({ ...state, year })

export const inputPeriodSetYearC = curry2Right(inputPeriodSetYear)
export const inputPeriodSetYearU = asUpdate(inputPeriodSetYear)


export const inputPeriodSetMonth = (state: InputPeriodAppState, month: Month) => ({
    ...state,
    month
})

export const inputPeriodSetMonthC = curry2Right(inputPeriodSetMonth)
export const inputPeriodSetMonthU = asUpdate(inputPeriodSetMonth)
