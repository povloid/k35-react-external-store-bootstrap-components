import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { IconMdi } from "../icon/IconMdi";
export var Popover = function (_a) {
    var header = _a.header, children = _a.children;
    var _b = useState(false), show = _b[0], setShow = _b[1];
    var toggleShow = function () { return setShow(!show); };
    return (_jsx("div", { children: _jsxs("button", { className: "btn btn-link bth-sm", style: { width: 24, height: 24, padding: 0, position: "relative" }, onClick: toggleShow, children: [_jsx(IconMdi, { iname: "information-outline" }), show &&
                    _jsxs("div", { className: "popover fade bs-popover-right show", style: {
                            position: "absolute", top: 24, left: "10%",
                            transform: "translate(-10%, 0%)",
                            boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
                        }, children: [_jsx("div", { className: "arrow text-muted", style: { position: "absolute", top: -13, left: "10%" }, children: _jsx(IconMdi, { iname: "menu-up" }) }), _jsxs("h3", { className: "popover-header", children: [header, _jsx("button", { type: "button", className: "btn-close", "data-bs-dismiss": "modal", "aria-label": "Close", style: {
                                            position: "absolute",
                                            right: 5,
                                            top: 5,
                                            fontSize: 10
                                        }, onClick: function (e) {
                                            e.stopPropagation();
                                            toggleShow();
                                        } })] }), _jsx("div", { className: "popover-body", children: children })] })] }) }));
};
//# sourceMappingURL=Popover.js.map