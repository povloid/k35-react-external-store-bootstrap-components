import { jsx as _jsx } from "react/jsx-runtime";
import { useCursor } from "@k35/react-external-store";
import { textareaSetValue, textareaValue } from "./TextareaAppState";
export var Textarea = function (props) {
    var cursor = props.cursor;
    var state = useCursor(cursor);
    var value = textareaValue(state);
    var onChange = function (e) {
        return cursor.update(function (state) { return textareaSetValue(state, e.target.value); }).push();
    };
    return (_jsx("textarea", { className: "form-control", id: props.id, value: value, onChange: onChange, placeholder: props.placeholder }));
};
//# sourceMappingURL=Textarea.js.map