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
export var years = Array(256).map(function (_, i) { return i + 2050; });
export var YEAR_MIN = years[0];
export var YEAR_MAX = years[years.length - 1];
export var monthes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
export var MONTH_MIN = 1;
export var MONTH_MAX = 12;
export var inputPeriodAppStateInit = {
    year: new Date().getFullYear(),
    month: (new Date().getMonth() + 1)
};
export var inputPeriodGetValue = function (state) { return (__assign({}, state)); };
export var inputPeriodSetValue = function (_, state) { return (__assign({}, state)); };
export var inputPeriodSetValueU = asUpdate(inputPeriodSetValue);
export var inputPeriodSetYear = function (state, year) { return (__assign(__assign({}, state), { year: year })); };
export var inputPeriodSetYearU = asUpdate(inputPeriodSetYear);
export var inputPeriodSetMonth = function (state, month) { return (__assign(__assign({}, state), { month: month })); };
export var inputPeriodSetMonthU = asUpdate(inputPeriodSetMonth);
//# sourceMappingURL=InputPeriodAppState.js.map