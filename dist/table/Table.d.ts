import { Cursor } from "@k35/react-external-store";
import { TableAppState } from "./TableAppState";
export type ItemRender<T> = (props: {
    o: T;
    i: number;
    c: Cursor<T>;
    cc: Cursor<T>[];
    tc: Cursor<TableAppState<T>>;
}) => JSX.Element;
export declare const Table: <T>(props: {
    itemRender?: ItemRender<T>;
    thead?: JSX.Element;
    cursor: Cursor<TableAppState<T>>;
}) => import("react/jsx-runtime").JSX.Element;
