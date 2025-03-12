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
export var fileterByIsActive = function (state) { return state.isActive; };
export var fileterByIsNotActive = function (state) { return !state.isActive; };
export var fileterBySetActive = function (state) { return (__assign(__assign({}, state), { isActive: true })); };
export var fileterBySetNotActive = function (state) { return (__assign(__assign({}, state), { isActive: false })); };
export var fileterBySetActiveAs = function (state, isActive) { return (__assign(__assign({}, state), { isActive: isActive })); };
export var fileterBySetActiveAsC = curry2Right(fileterBySetActiveAs);
//# sourceMappingURL=FilterByAppState.js.map