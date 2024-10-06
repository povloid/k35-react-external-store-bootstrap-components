import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCursor } from "@k35/react-external-store";
import { switchIsChecked, switchToggele } from "./SwitchAppState";
export var Switch = function (_a) {
    var id = _a.id, cursor = _a.cursor, disabled = _a.disabled, children = _a.children;
    var state = useCursor(cursor);
    return (_jsxs("div", { className: "form-check form-switch", children: [_jsx("input", { id: id, className: "form-check-input", type: "checkbox", checked: switchIsChecked(state), disabled: disabled, onChange: function () { return cursor.update(switchToggele).push(); } }), children] }));
};
export var SwitchWithText = function (props) {
    var state = useCursor(props.cursor);
    var checked = switchIsChecked(state);
    return (_jsx(Switch, { id: props.id, cursor: props.cursor, disabled: props.disabled, children: _jsx("label", { className: "form-check-label", htmlFor: props.id, children: (checked ? (props.yes || "да") : (props.no || "нет")) }) }));
};
//# sourceMappingURL=Switch.js.map