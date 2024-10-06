import { jsx as _jsx } from "react/jsx-runtime";
import { useCursor } from "@k35/react-external-store";
import { inputSetValue, inputValue } from "./InputAppState";
export var Input = function (props) {
    var cursor = props.cursor;
    var state = useCursor(cursor);
    var value = inputValue(state);
    var onChange = function (e) {
        return cursor.update(function (state) { return inputSetValue(state, e.target.value); }).push();
    };
    return (_jsx("input", { className: "form-control", id: props.id, value: value, onChange: onChange, type: props.type, placeholder: props.placeholder, autoComplete: props.autoComplete }));
};
//# sourceMappingURL=Input.js.map