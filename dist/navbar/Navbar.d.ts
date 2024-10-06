import { Cursor } from "@k35/react-external-store";
import { ReactNode } from "react";
import { NavbarAppState } from "./NavbarAppState";
export declare const Navbar: <T extends string>(props: {
    brand: {
        href: string;
        body: ReactNode;
    };
    cursor: Cursor<NavbarAppState<T>>;
}) => import("react/jsx-runtime").JSX.Element;
