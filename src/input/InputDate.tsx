import { Cursor, useCursor } from "@k35/react-external-store";
import { InputTypeAttribute } from "./Input";
import { InputDateAppState } from "./InputDateAppState";

export const InputDate = (props: {
    id?: string;
    type?: InputTypeAttribute,
    placeholder?: string;
    cursor: Cursor<InputDateAppState>;
}) => {
    const { cursor } = props;
    const value = useCursor(cursor);

    const onChange = (e: { target: { value: string } }) =>
        cursor.update(() => e.target.value).push();

    return (
        <input className="form-control"
            id={props.id}
            value={value}
            onChange={onChange}
            type={props.type}
            placeholder={props.placeholder}
        />
    )
};