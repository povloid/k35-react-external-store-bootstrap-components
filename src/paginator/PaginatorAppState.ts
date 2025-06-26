import { asUpdate } from "@k35/fp"

export const paginatorSizes: number[] = [10, 20, 50, 100]

export interface PaginatorAppState {
    page: number
    size: (typeof paginatorSizes)[number]
}

export const paginatorAppStateInit: PaginatorAppState = {
    page: 0,
    size: 10
}

export const paginatorValue = ({ page, size }: PaginatorAppState) => ({ page, size })

export const paginatorToFirstPage = (state: PaginatorAppState) => ({ ...state, page: 0 })

export const paginatorToPrevPage = (state: PaginatorAppState) => ({
    ...state,
    page: state.page === 0 ? 0 : state.page - 1
})

export const paginatorToNextPage = (state: PaginatorAppState) => ({
    ...state,
    page: state.page + 1
})

export const paginatorSetPageSize = (state: PaginatorAppState, size: number) => ({ ...state, size })

export const paginatorSetPageSizeU = asUpdate(paginatorSetPageSize)
