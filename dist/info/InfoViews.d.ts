import { ReactNode } from "react";
import { IconMdiIName } from "../icon/IconMdiIname";
export declare const InfoBox: ({ children, className }: {
    children?: ReactNode;
    className?: string;
}) => import("react/jsx-runtime").JSX.Element;
export declare const InfoIndexedGroup: ({ children, className }: {
    children?: ReactNode;
    className?: string;
}) => import("react/jsx-runtime").JSX.Element | undefined;
export declare const InfoBlock: ({ title, count, children, icon, className }: {
    title?: string;
    count?: number;
    children?: ReactNode;
    icon?: IconMdiIName;
    className?: string;
}) => import("react/jsx-runtime").JSX.Element | undefined;
export declare const InfoItemsBlock: ({ title, children, icon, className }: {
    title?: string;
    children?: ReactNode;
    icon?: IconMdiIName;
    className?: string;
}) => import("react/jsx-runtime").JSX.Element | undefined;
export declare const InfoItem: ({ label, children, className }: {
    label: ReactNode;
    children?: ReactNode;
    className?: string;
}) => import("react/jsx-runtime").JSX.Element | undefined;
