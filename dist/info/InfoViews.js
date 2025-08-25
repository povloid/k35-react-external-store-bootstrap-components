import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Children, isValidElement } from "react";
import { IconMdi } from "../icon/IconMdi";
var index = 0;
function getIndex() {
    return index++;
}
var lineStyle = { borderTop: "dashed", maxHeight: 2 };
var isEmpty = function (children) {
    return Children.toArray(children).filter(function (element) {
        var _a, _b, _c, _d, _e;
        return isValidElement(element)
            && ((_a = element === null || element === void 0 ? void 0 : element.props) === null || _a === void 0 ? void 0 : _a.children) !== undefined
            && ((_b = element === null || element === void 0 ? void 0 : element.props) === null || _b === void 0 ? void 0 : _b.children) !== null
            && ((_c = element === null || element === void 0 ? void 0 : element.props) === null || _c === void 0 ? void 0 : _c.children) !== false
            && ((_d = element === null || element === void 0 ? void 0 : element.props) === null || _d === void 0 ? void 0 : _d.children) !== ""
            && Children.toArray((_e = element === null || element === void 0 ? void 0 : element.props) === null || _e === void 0 ? void 0 : _e.children).length > 0;
    }).length === 0;
};
export var InfoBox = function (_a) {
    var children = _a.children, className = _a.className;
    return _jsx("div", { className: "mb-3 border border-1 p-2 rounded ".concat(className), children: children });
};
export var InfoIndexedGroup = function (_a) {
    var children = _a.children, className = _a.className;
    var items = Children.toArray(children).map(function (child, i) {
        return _jsxs(InfoBox, { className: className, children: [_jsxs("div", { className: "d-flex align-items-center", children: [_jsx("hr", { className: "m-0 flex-fill hr-dashed", style: lineStyle }), _jsx("span", { className: "m-0 px-2 small text-muted", children: _jsxs("em", { children: ["\u0417\u0430\u043F\u0438\u0441\u044C ", i + 1] }) }), _jsx("hr", { className: "m-0 flex-fill hr-dashed", style: lineStyle })] }), child] }, getIndex());
    });
    if (items.length === 0)
        return;
    return (_jsx("div", { className: "mb-4", children: items }));
};
export var InfoBlock = function (_a) {
    var title = _a.title, count = _a.count, children = _a.children, icon = _a.icon, className = _a.className;
    if (isEmpty(children))
        return;
    return (_jsxs("div", { className: className, children: [_jsxs("div", { className: "d-flex justify-content-between", children: [_jsxs("div", { className: "fw-bold", children: [icon && _jsx("span", { style: { fontSize: "1.3em" }, children: _jsx(IconMdi, { iname: icon }) }), " ", title] }), _jsx("div", { children: _jsx("b", { children: count }) })] }), _jsx("div", { className: "table-group-divider mb-3" }), children] }));
};
export var InfoItemsBlock = function (_a) {
    var title = _a.title, children = _a.children, icon = _a.icon, className = _a.className;
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
    return (_jsx(InfoBlock, { icon: icon, title: title, className: className, children: _jsx("div", { className: "table-responsive mb-3", children: _jsx("table", { className: "table table-hover", children: _jsx("tbody", { className: "", children: children }) }) }) }));
};
export var InfoItem = function (_a) {
    var _b, _c, _d;
    var label = _a.label, children = _a.children, className = _a.className;
    if (children === undefined
        || children === null
        || children === false)
        return;
    if (isValidElement(children)
        && (((_b = children === null || children === void 0 ? void 0 : children.props) === null || _b === void 0 ? void 0 : _b.value) === undefined
            || ((_c = children === null || children === void 0 ? void 0 : children.props) === null || _c === void 0 ? void 0 : _c.value) === null
            || ((_d = children === null || children === void 0 ? void 0 : children.props) === null || _d === void 0 ? void 0 : _d.value) === 0))
        return;
    return (_jsxs("tr", { children: [_jsx("td", { align: "right", className: "text-muted", width: "60%", children: label }), _jsx("td", { className: className, children: children })] }));
};
//# sourceMappingURL=InfoViews.js.map