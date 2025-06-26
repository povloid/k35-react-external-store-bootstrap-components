import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCursor } from "@k35/react-external-store";
import { fileterBySetActiveAsU } from "./FilterByAppState";
export var FiterBlock = function (_a) {
    var cursor = _a.cursor, children = _a.children, className = _a.className, onClose = _a.onClose;
    var _b = useCursor(cursor), isActive = _b.isActive, title = _b.title;
    if (!isActive)
        return;
    return (_jsxs("div", { className: className, children: [_jsx("div", { children: _jsxs("small", { children: [_jsx("small", { children: _jsx("button", { type: "button", className: "btn-close", onClick: function (e) {
                                    e.stopPropagation();
                                    cursor.update(fileterBySetActiveAsU(false)).push();
                                    if (onClose)
                                        onClose();
                                } }) }), _jsx("label", { children: title })] }) }), children] }));
};
//# sourceMappingURL=FilterByViews.js.map