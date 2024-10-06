import { Cursor } from "@k35/react-external-store";
import { ReactNode } from "react";
import { bootstrapType } from "../types";
import { AlertsAppState } from "./AlertsAppState";
export declare const Alert: ({ type, children, onClose }: {
    type: bootstrapType;
    children?: ReactNode;
    onClose?: () => void;
}) => import("react/jsx-runtime").JSX.Element;
export declare const Alerts: ({ cursor }: {
    cursor: Cursor<AlertsAppState>;
}) => import("react/jsx-runtime").JSX.Element;
