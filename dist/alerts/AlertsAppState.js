var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { curry2Right } from "@k35/fp";
var id = 0;
function generateNextId() {
    return "alert-".concat(id++);
}
export var alertsAppStateInit = [];
export var alertsClear = function () { return []; };
export var alertsAdd = function (alerts, _a) {
    var type = _a.type, message = _a.message, id = _a.id;
    return __spreadArray(__spreadArray([], alerts, true), [{ type: type, message: message, id: id || generateNextId() }], false);
};
export var alertsAddC = curry2Right(alertsAdd);
export var alertsDel = function (alerts, alertId) { return __spreadArray([], alerts.filter(function (a) { return a.id !== alertId; }), true); };
export var alertsDelC = curry2Right(alertsDel);
//# sourceMappingURL=AlertsAppState.js.map