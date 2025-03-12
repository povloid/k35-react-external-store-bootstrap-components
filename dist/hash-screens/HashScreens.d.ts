import { Cursor } from "@k35/react-external-store";
import { PropsWithChildren, ReactNode } from "react";
import { HashScreensAppState } from "./HashScreensAppState";
export declare const HashScreens: <T extends string>(props: {
    cursor: Cursor<HashScreensAppState<T>>;
    children?: ReactNode;
}) => import("react/jsx-runtime").JSX.Element;
export interface HashScreenProps<T extends string> extends PropsWithChildren {
    hash: T;
}
export declare const HashScreen: <T extends string>(props: HashScreenProps<T>) => ReactNode;
