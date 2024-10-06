import { Cursor } from "@k35/react-external-store";
import { ReactNode } from "react";
import { SwitchAppState } from "./SwitchAppState";
export interface SwitchProps {
    id?: string;
    cursor: Cursor<SwitchAppState>;
    disabled?: boolean;
    children?: ReactNode;
}
export declare const Switch: ({ id, cursor, disabled, children }: SwitchProps) => import("react/jsx-runtime").JSX.Element;
export interface SwitchComponentWithLabelProps extends SwitchProps {
    yes?: string;
    no?: string;
}
export declare const SwitchWithText: (props: SwitchComponentWithLabelProps) => import("react/jsx-runtime").JSX.Element;
