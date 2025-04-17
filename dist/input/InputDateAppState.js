import { asUpdate, curry2Right } from "@k35/fp";
export var inputDateAppStateInit = "";
export var inputDateValue = function (state) { return new Date(state); };
export var inputDateValueOrUndefined = function (state) { return (state === null || state === void 0 ? void 0 : state.trim().length) > 0 ? new Date(state) : undefined; };
export var inputDateSetValue = function (state, date) {
    if (!date)
        return "";
    var year = new String(date.getFullYear()).padStart(4, '0');
    var month = new String(date.getMonth() + 1).padStart(2, '0');
    var day = new String(date.getDate()).padStart(2, '0');
    return "".concat(year, "-").concat(month, "-").concat(day);
};
export var inputDateSetValueC = curry2Right(inputDateSetValue);
export var inputDateSetValueU = asUpdate(inputDateSetValue);
//# sourceMappingURL=InputDateAppState.js.map