import { jsx as _jsx } from "react/jsx-runtime";
import { useCursor } from "@k35/react-external-store";
import { useEffect } from "react";
import { navIsActive, navSetActiveC } from "./NavAppState";
var id = 0;
function generateNextId() {
    return "nav-item-".concat(id++);
}
export var Nav = function (_a) {
    var type = _a.type, children = _a.children;
    return (_jsx("ul", { className: "nav nav-".concat(type), children: children }));
};
export var NavItem = function (_a) {
    var acitveKey = _a.acitveKey, acitve = _a.acitve, cursor = _a.cursor, children = _a.children;
    useEffect(function () {
        if (acitve)
            cursor.update(navSetActiveC(acitveKey)).push();
        return function () { };
    }, [acitveKey]);
    var state = useCursor(cursor);
    var isAcitve = navIsActive(state, acitveKey);
    var onClick = function () { return cursor.update(navSetActiveC(acitveKey)).push(); };
    return (_jsx("li", { className: "nav-item", onClick: onClick, children: _jsx("a", { className: "nav-link ".concat(isAcitve ? "active" : ""), "aria-current": "page", style: { cursor: "pointer" }, children: children }) }));
};
export var NavBlock = function (_a) {
    var acitveKey = _a.acitveKey, cursor = _a.cursor, children = _a.children;
    var state = useCursor(cursor);
    var isAcitve = navIsActive(state, acitveKey);
    return isAcitve ? children : null;
};
//# sourceMappingURL=Nav.js.map