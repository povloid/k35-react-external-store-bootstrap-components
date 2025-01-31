import { curry2Right } from "@k35/fp";


export type InputDateAppState = string

export const inputDateAppStateInit: InputDateAppState = ""

export const inputDateValue = (state: InputDateAppState) => new Date(state);

export const inputDateValueOrUndefined = (state: InputDateAppState) => state?.trim().length > 0 ? new Date(state) : undefined;

export const inputDateSetValue = (state: InputDateAppState, date?: Date): InputDateAppState => {

    if (!date) return ""

    const year = new String(date.getFullYear()).padStart(4, '0')
    const month = new String(date.getMonth() + 1).padStart(2, '0')
    const day = new String(date.getDate()).padStart(2, '0')

    return `${year}-${month}-${day}`
}

export const inputDateSetValueC = curry2Right(inputDateSetValue)
