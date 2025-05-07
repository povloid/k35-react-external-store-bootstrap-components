import { Cursor, useCursor } from "@k35/react-external-store";
import { HTMLInputAutoCompleteAttribute } from "react";
import { InputAppState, inputSetValue, inputValue } from "./InputAppState";


export type InputTypeAttribute =
    | "color"
    | "date"
    | "datetime-local"
    | "email"
    | "hidden"
    | "month"
    | "number"
    | "password"
    | "range"
    | "search"
    | "submit"
    | "tel"
    | "text"
    | "time"
    | "url"
    | "week"

export const Input = (props: {
    id?: string
    type?: InputTypeAttribute
    placeholder?: string
    cursor: Cursor<InputAppState>
    autoComplete?: HTMLInputAutoCompleteAttribute
    onChange?: () => void
    size?: "xl" | "lg" | "sm"
    min?: number
    max?: number
}) => {
    const { cursor } = props;
    const state = useCursor(cursor);

    const value = inputValue(state);

    const onChange = (e: { target: { value: string } }) => {
        cursor.update((state) => inputSetValue(state, e.target.value)).push();
        if (props.onChange) props.onChange()
    }

    const className = "form-control"
        + (props.size ? ` form-control-${props.size}` : "")

    return (
        <input className={className}
            id={props.id}
            value={value}
            onChange={onChange}
            type={props.type}
            placeholder={props.placeholder}
            autoComplete={props.autoComplete}
            min={props.min}
            max={props.max}
        />
    )
};
