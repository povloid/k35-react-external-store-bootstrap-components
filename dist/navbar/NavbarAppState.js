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
import { curry2Right } from "@k35/fp";
export var navbarSetActive = function (state, activeItem) {
    var items = state.items.map(function (item) { return (__assign(__assign({}, item), { active: item.href === activeItem.href })); });
    return __assign(__assign({}, state), { items: items });
};
export var navbarSetActiveC = curry2Right(navbarSetActive);
export var navbarSetupActivesFromWindow = function (state) {
    var items = state.items.map(function (item) { return (__assign(__assign({}, item), { active: item.href === window.location.hash })); });
    return __assign(__assign({}, state), { items: items });
};
//# sourceMappingURL=NavbarAppState.js.map