import { Cursor, useCursor } from "@k35/react-external-store";
import { TextareaAppState, textareaSetValue, textareaValue } from "./TextareaAppState";

export const Textarea = (props: {
    id?: string;
    placeholder?: string;
    cursor: Cursor<TextareaAppState>;
}) => {
    const { cursor } = props;
    const state = useCursor(cursor);

    const value = textareaValue(state);

    const onChange = (e: { target: { value: string } }) =>
        cursor.update((state) => textareaSetValue(state, e.target.value)).push();

    return (
        <textarea className="form-control"
            id={props.id}
            value={value}
            onChange={onChange}
            placeholder={props.placeholder}
        />
    )
};
