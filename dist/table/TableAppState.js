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
import { asUpdate } from "@k35/fp";
export var tableAppStateInit = {
    items: []
};
export var tableSetItems = function (state, items) {
    return (__assign(__assign({}, state), { items: items }));
};
export var tableSetItemsU = asUpdate(tableSetItems);
//# sourceMappingURL=TableAppState.js.map