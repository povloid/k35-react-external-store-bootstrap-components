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
export var buttonAppStateInit = {};
export var buttonEnable = function (state) { return (__assign(__assign({}, state), { disabled: undefined })); };
export var buttonDisable = function (state) { return (__assign(__assign({}, state), { disabled: true })); };
export var buttonSetDisable = function (state, disabled) { return (__assign(__assign({}, state), { disabled: disabled })); };
export var buttonSetDisableC = asUpdate(buttonSetDisable);
//# sourceMappingURL=ButtonAppState.js.map