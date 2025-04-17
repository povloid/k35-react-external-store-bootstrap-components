import { asUpdate } from "@k35/fp"


export interface TableColumn {
    text: string
    align?: string
}

export interface TableAppState<T> {
    columns?: TableColumn[],
    items: T[]
}

export const tableAppStateInit = {
    items: []
}

export const tableSetItems = <T>(state: TableAppState<T>, items: T[]): TableAppState<T> =>
    ({ ...state, items })

export const tableSetItemsU = asUpdate(tableSetItems)