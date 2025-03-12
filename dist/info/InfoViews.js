import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Children, isValidElement } from "react";
export var InfoBlock = function (_a) {
    var title = _a.title, children = _a.children;
    var isEmpty = Children.toArray(children).filter(function (element) {
        var _a, _b, _c, _d;
        return isValidElement(element)
            && ((_a = element === null || element === void 0 ? void 0 : element.props) === null || _a === void 0 ? void 0 : _a.children) !== undefined
            && ((_b = element === null || element === void 0 ? void 0 : element.props) === null || _b === void 0 ? void 0 : _b.children) !== null
            && ((_c = element === null || element === void 0 ? void 0 : element.props) === null || _c === void 0 ? void 0 : _c.children) !== false
            && ((_d = element === null || element === void 0 ? void 0 : element.props) === null || _d === void 0 ? void 0 : _d.children) !== "";
    }).length === 0;
    if (isEmpty)
        return;
    return (_jsx("div", { className: "table-responsive", children: _jsxs("table", { className: "table table-hover", children: [_jsx("thead", { className: "full-info-header", children: _jsxs("tr", { children: [_jsx("th", { align: "right", style: { width: "60%" }, children: title }), _jsx("th", {})] }) }), _jsx("tbody", { className: "table-group-divider", children: children })] }) }));
};
export var InfoItem = function (_a) {
    var label = _a.label, children = _a.children, className = _a.className;
    return children === undefined
        || children === null
        || children === false
        || children === ""
        ? undefined
        : (_jsxs("tr", { children: [_jsx("td", { align: "right", className: "text-muted", children: label }), _jsx("td", { className: className, children: children })] }));
};
//# sourceMappingURL=InfoViews.js.map