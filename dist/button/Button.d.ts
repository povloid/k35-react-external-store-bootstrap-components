import { Cursor } from "@k35/react-external-store";
import { ReactNode } from "react";
import { bootstrapType } from "../types";
import { ButtonAppState } from "./ButtonAppState";
export interface ButtonProps {
    onClick?: () => void;
    type?: bootstrapType;
    children?: ReactNode;
    disabled?: boolean;
}
export declare const Button: ({ onClick, type, disabled, children, }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
export interface ButtonWithStateProps extends ButtonProps {
    cursor: Cursor<ButtonAppState>;
}
export declare const ButtonWithState: (props: ButtonWithStateProps) => import("react/jsx-runtime").JSX.Element;
