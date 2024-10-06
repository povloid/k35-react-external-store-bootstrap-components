import { Cursor } from "@k35/react-external-store";
import { ReactNode } from "react";
import { NavAppState } from "./NavAppState";
export declare const Nav: ({ type, children }: {
    type: "tabs" | "pills";
    children?: ReactNode;
}) => import("react/jsx-runtime").JSX.Element;
export declare const NavItem: ({ acitveKey, acitve, cursor, children }: {
    acitveKey: string;
    acitve?: boolean;
    cursor: Cursor<NavAppState>;
    children?: ReactNode;
}) => import("react/jsx-runtime").JSX.Element;
export declare const NavBlock: ({ acitveKey, cursor, children }: {
    acitveKey: string;
    cursor: Cursor<NavAppState>;
    children?: ReactNode;
}) => ReactNode;
