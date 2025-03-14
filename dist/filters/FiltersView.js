var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCursor } from "@k35/react-external-store";
import { IconMdi } from "../icon/IconMdi";
import { fileterBySetActive } from "./FilterByAppState";
export var Filters = function (_a) {
    var service = _a.service, children = _a.children;
    return (_jsx("div", { className: "d-flex flex-wrap gap-3", children: children }));
};
export var FiltersButton = function (_a) {
    var service = _a.service, onChange = _a.onChange;
    useCursor(service.cursor);
    var activeFilters = service.services.filter(function (o) { return o.isActive(); });
    var notActiveFilters = service.services.filter(function (o) { return !o.isActive(); });
    return (_jsxs("div", { className: "btn-group ms-1", children: [_jsxs("button", { type: "button", className: "btn btn-secondary dropdown-toggle", "data-bs-toggle": "dropdown", "aria-expanded": "false", children: [_jsx(IconMdi, { iname: "filter" }), " \u0424\u0438\u043B\u044C\u0442\u0440"] }), _jsx("ul", { className: "dropdown-menu", children: __spreadArray(__spreadArray(__spreadArray([], notActiveFilters.map(function (o, i) {
                    var title = o.getFilterCursor().getSnapshot().title;
                    var onClick = function () {
                        o.getFilterCursor().update(fileterBySetActive).push();
                        service.cursor.push();
                        if (onChange)
                            onChange();
                    };
                    return (_jsx("li", { children: _jsx("button", { className: "dropdown-item", onClick: onClick, children: title }) }, title));
                }), true), [
                    activeFilters.length > 0 && (_jsx("li", { children: _jsx("hr", { className: "dropdown-divider" }) }, "line"))
                ], false), (activeFilters.length > 0
                    ? [
                        _jsx("li", { children: _jsx("button", { className: "dropdown-item", onClick: function () {
                                    service.clearAll();
                                    if (onChange)
                                        onChange();
                                }, children: "\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u0432\u0441\u0435" }) }, "clear-all")
                    ]
                    : []), true) })] }));
};
//# sourceMappingURL=FiltersView.js.map