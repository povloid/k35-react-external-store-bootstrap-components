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
export var navAppStateInit = {
    active: "none",
};
export var navIsActive = function (state, acitve) {
    return state.active === acitve;
};
export var navSetActive = function (state, active) { return (__assign(__assign({}, state), { active: active })); };
export var navSetActiveC = curry2Right(navSetActive);
//# sourceMappingURL=NavAppState.js.map