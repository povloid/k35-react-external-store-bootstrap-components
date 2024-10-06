import { Cursor } from "@k35/react-external-store";
import { HTMLInputAutoCompleteAttribute } from "react";
import { InputAppState } from "./InputAppState";
type InputTypeAttribute = "color" | "date" | "datetime-local" | "email" | "hidden" | "month" | "number" | "password" | "range" | "search" | "submit" | "tel" | "text" | "time" | "url" | "week";
export declare const Input: (props: {
    id?: string;
    type?: InputTypeAttribute;
    placeholder?: string;
    cursor: Cursor<InputAppState>;
    autoComplete?: HTMLInputAutoCompleteAttribute;
}) => import("react/jsx-runtime").JSX.Element;
export {};
