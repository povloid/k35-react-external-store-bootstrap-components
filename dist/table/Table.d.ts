import { Cursor } from "@k35/react-external-store";
import { Key, ReactNode } from "react";
import { TableAppState } from "./TableAppState";
export type ItemRender<T> = {
    getKey: (o: T) => Key;
    Render: (props: {
        o: T;
        i: number;
        c: Cursor<T>;
        cc: Cursor<T>[];
        tc: Cursor<TableAppState<T>>;
    }) => ReactNode;
};
export declare const Table: <T>(props: {
    itemRender?: ItemRender<T>;
    thead?: ReactNode;
    cursor: Cursor<TableAppState<T>>;
    hower?: boolean;
}) => import("react/jsx-runtime").JSX.Element;
