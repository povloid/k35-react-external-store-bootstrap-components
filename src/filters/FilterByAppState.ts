import { asUpdate, curry2Right } from "@k35/fp"

export interface FilterByAppState {
    readonly title: string
    readonly isActive: boolean
}

export const fileterByIsActive = (state: FilterByAppState) => state.isActive
export const fileterByIsNotActive = (state: FilterByAppState) => !state.isActive

export const fileterBySetActive = (state: FilterByAppState) => ({ ...state, isActive: true })
export const fileterBySetNotActive = (state: FilterByAppState) => ({ ...state, isActive: false })

export const fileterBySetActiveAs = (state: FilterByAppState, isActive: boolean) => ({
    ...state,
    isActive
})
export const fileterBySetActiveAsC = curry2Right(fileterBySetActiveAs)
export const fileterBySetActiveAsU = asUpdate(fileterBySetActiveAs)
