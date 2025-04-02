import { curry2Right } from "@k35/fp"
import { ReactNode } from "react"

export type NavbarDropdownMenuItemType = "divider" | "item"

export interface NavbarDropdownMenuItemState<T extends string> {
    text?: ReactNode
    href?: T
    type: NavbarDropdownMenuItemType
}

export type NavbarItemType = "item" | "dropdown"

export interface NavbarItemState<T extends string> {
    text: ReactNode
    type: NavbarItemType
    active?: boolean
    href?: string
    menu?: NavbarDropdownMenuItemState<T>[]
}

export interface NavbarAppState<T extends string> {
    items: NavbarItemState<T>[];
    rightItems: NavbarItemState<T>[];
}

export const navbarSetActive = <T extends string>(
    state: NavbarAppState<T>,
    activeItem: NavbarItemState<T>
): NavbarAppState<T> => {

    const items = state.items.map(item => ({ ...item, active: item.href === activeItem.href }))

    return { ...state, items }
}

export const navbarSetActiveC = curry2Right(navbarSetActive)


export const navbarSetupActivesFromWindow = <T extends string>(
    state: NavbarAppState<T>
): NavbarAppState<T> => {

    const items = state.items.map(item => ({ ...item, active: item.href === window.location.hash }))

    return { ...state, items }
}

export const navbarGetCurrentDefaultScreen = <T extends string>(state: NavbarAppState<T>, defaultScreen: T) =>
    state.items.map(o => o.href as T).find(o => o === window.location.hash) ?? defaultScreen