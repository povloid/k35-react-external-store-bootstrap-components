import { Cursor, useCursor } from "@k35/react-external-store";
import { ReactNode } from "react";
import { ButtonAppState } from "./ButtonAppState";

export type bootstrapButtonType =
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark"
    | "link"
    | "outline-primary"
    | "outline-secondary"
    | "outline-success"
    | "outline-danger"
    | "outline-warning"
    | "outline-info"
    | "outline-light"
    | "outline-dark"

export type bootstrapByttonSizes = "lg" | "sm"

export interface ButtonProps {
    onClick?: () => void
    type?: bootstrapButtonType
    size?: bootstrapByttonSizes
    children?: ReactNode
    disabled?: boolean
}

export const Button = ({
    onClick,
    type,
    size,
    disabled,
    children,
}: ButtonProps) => (
    <button type="button"
        className={`btn btn-${type || "secondary"}` + (size ? ` btn-${size || ""}` : "")}
        disabled={disabled}
        onClick={(e) => {
            e.stopPropagation()
            if (onClick) onClick()
        }}>
        {children}
    </button>
)


export interface ButtonWithStateProps extends ButtonProps {
    cursor: Cursor<ButtonAppState>
}

export const ButtonWithState = (props: ButtonWithStateProps) => {

    const { disabled } = useCursor(props.cursor)

    return (
        <Button {...props} disabled={disabled} />
    )
}

