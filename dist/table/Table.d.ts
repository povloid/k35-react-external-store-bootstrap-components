import { Cursor } from "@k35/react-external-store";
import { ReactNode } from "react";
import { TableAppState } from "./TableAppState";
export type ItemRender<T> = (props: {
    o: T;
    i: number;
    c: Cursor<T>;
    cc: Cursor<T>[];
    tc: Cursor<TableAppState<T>>;
}) => JSX.Element;
export type TableResponsiveType = "sm" | "md" | "lg" | "xl" | "xxl";
export type TableHeadType = "light" | "dark";
export declare const Table: <T>(props: {
    itemRender?: ItemRender<T>;
    thead?: ReactNode;
    cursor: Cursor<TableAppState<T>>;
    hower?: boolean;
    responsive?: TableResponsiveType[] | "all";
    theadType?: TableHeadType;
    sm?: boolean;
    bordered?: boolean;
    borderless?: boolean;
    className?: string;
    caption?: ReactNode;
}) => import("react/jsx-runtime").JSX.Element;
