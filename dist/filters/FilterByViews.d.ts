import { Cursor } from "@k35/react-external-store";
import { ReactNode } from "react";
import { FilterByAppState } from "./FilterByAppState";
export declare const FiterBlock: ({ cursor, children, className, onClose }: {
    cursor: Cursor<FilterByAppState>;
    children?: ReactNode;
    className?: string;
    onClose?: () => void;
}) => import("react/jsx-runtime").JSX.Element | undefined;
