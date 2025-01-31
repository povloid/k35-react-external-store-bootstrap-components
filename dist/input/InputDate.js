import { jsx as _jsx } from "react/jsx-runtime";
import { useCursor } from "@k35/react-external-store";
export var InputDate = function (props) {
    var cursor = props.cursor;
    var value = useCursor(cursor);
    var onChange = function (e) {
        return cursor.update(function () { return e.target.value; }).push();
    };
    return (_jsx("input", { className: "form-control", id: props.id, value: value, onChange: onChange, type: props.type, placeholder: props.placeholder }));
};
//# sourceMappingURL=InputDate.js.map