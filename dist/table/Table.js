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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ExternalStoreCursor, useCursor } from "@k35/react-external-store";
export var Table = function (props) {
    var _a = useCursor(props.cursor), columns = _a.columns, items = _a.items;
    var ItemRender = props.itemRender || (function (_a) {
        var o = _a.o, i = _a.i;
        return _jsx("tr", { children: _jsx("td", { colSpan: columns === null || columns === void 0 ? void 0 : columns.length, children: "[".concat(i, "] ").concat(o) }) }, i);
    });
    return (_jsx("div", { className: "table-responsive", children: _jsxs("table", { className: "table", children: [columns ? (_jsx("thead", { children: _jsx("tr", { children: columns.map(function (o, i) { return (_jsx("th", { scope: "col", children: o.text }, i)); }) }) })) :
                    props.thead, _jsx("tbody", { children: items.length > 0 ? (createRenders(props.cursor, items, ItemRender)) : (_jsx("tr", { children: _jsx("td", { colSpan: columns === null || columns === void 0 ? void 0 : columns.length, children: "\u043D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445" }) })) })] }) }));
};
var createRenders = function (cursor, items, ItemRender) {
    var cc = items.map(function (o, i) {
        return new ExternalStoreCursor(cursor, function (state) { return state.items[i]; }, function (state, newItem) { return (__assign(__assign({}, state), { items: state.items.slice().map(function (item, ii) { return ii === i ? newItem : item; }) })); });
    });
    return items.map(function (o, i) {
        return _jsx(ItemRender, { o: o, i: i, c: cc[i], cc: cc, tc: cursor }, i);
    });
};
//# sourceMappingURL=Table.js.map