import { Cursor } from "@k35/react-external-store";
import { ReactNode } from "react";
import { ButtonAppState } from "./ButtonAppState";
export type bootstrapButtonType = "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark" | "link" | "outline-primary" | "outline-secondary" | "outline-success" | "outline-danger" | "outline-warning" | "outline-info" | "outline-light" | "outline-dark";
export type bootstrapByttonSizes = "lg" | "sm";
export interface ButtonProps {
    onClick?: () => void;
    type?: bootstrapButtonType;
    size?: bootstrapByttonSizes;
    children?: ReactNode;
    disabled?: boolean;
}
export declare const Button: ({ onClick, type, size, disabled, children, }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
export interface ButtonWithStateProps extends ButtonProps {
    cursor: Cursor<ButtonAppState>;
}
export declare const ButtonWithState: (props: ButtonWithStateProps) => import("react/jsx-runtime").JSX.Element;
