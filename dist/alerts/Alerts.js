import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCursor } from "@k35/react-external-store";
import { Fragment } from "react";
import { alertsDel } from "./AlertsAppState";
export var Alert = function (_a) {
    var type = _a.type, children = _a.children, onClose = _a.onClose;
    return (_jsxs("div", { className: "alert alert-".concat(type, " alert-dismissible"), role: "alert", children: [children, onClose
                ?
                    _jsx("button", { type: "button", className: "close", onClick: onClose, children: _jsx("span", { children: "\u00D7" }) })
                :
                    null] }));
};
export var Alerts = function (_a) {
    var cursor = _a.cursor;
    var alerts = useCursor(cursor);
    return (_jsx(Fragment, { children: alerts.map(function (_a) {
            var id = _a.id, type = _a.type, message = _a.message;
            return _jsx(Alert, { type: type, onClose: function () { return cursor.update(function (state) { return alertsDel(state, id); }).push(); }, children: message }, id);
        }) }));
};
//# sourceMappingURL=Alerts.js.map