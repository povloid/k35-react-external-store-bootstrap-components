import { ReactNode } from "react";
export type NavbarDropdownMenuItemType = "divider" | "item";
export interface NavbarDropdownMenuItemState<T extends string> {
    text?: ReactNode;
    href?: T;
    type: NavbarDropdownMenuItemType;
}
export type NavbarItemType = "item" | "dropdown";
export interface NavbarItemState<T extends string> {
    text: ReactNode;
    type: NavbarItemType;
    active?: boolean;
    href?: string;
    menu?: NavbarDropdownMenuItemState<T>[];
}
export interface NavbarAppState<T extends string> {
    items: NavbarItemState<T>[];
    rightItems: NavbarItemState<T>[];
}
export declare const navbarSetActive: <T extends string>(state: NavbarAppState<T>, activeItem: NavbarItemState<T>) => NavbarAppState<T>;
export declare const navbarSetActiveC: <T extends string>(a2: NavbarItemState<T>) => (a1: NavbarAppState<T>) => NavbarAppState<T>;
export declare const navbarSetupActivesFromWindow: <T extends string>(state: NavbarAppState<T>) => NavbarAppState<T>;
export declare const navbarGetCurrentDefaultScreen: <T extends string>(state: NavbarAppState<T>, defaultScreen: T) => T;
