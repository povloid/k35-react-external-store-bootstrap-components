var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import { useCursor } from "@k35/react-external-store";
export var Button = function (_a) {
    var onClick = _a.onClick, type = _a.type, disabled = _a.disabled, children = _a.children;
    return (_jsx("button", { type: "button", className: "btn btn-".concat(type || "secondary"), disabled: disabled, onClick: function (e) {
            e.stopPropagation();
            if (onClick)
                onClick();
        }, children: children }));
};
export var ButtonWithState = function (props) {
    var disabled = useCursor(props.cursor).disabled;
    return (_jsx(Button, __assign({}, props, { disabled: disabled })));
};
//# sourceMappingURL=Button.js.map