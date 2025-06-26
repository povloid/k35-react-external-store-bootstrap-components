import { asUpdate } from "@k35/fp";
export var inputAppStateInit = "";
export var inputValue = function (state) { return state; };
export var inputValueOrUndefined = function (state) { return state.length > 0 ? state : undefined; };
export var inputValueOrUndefinedWhenEmpty = inputValueOrUndefined;
export var inputSetValue = function (state, value) { return value !== null && value !== void 0 ? value : ""; };
export var inputSetValueU = asUpdate(inputSetValue);
//# sourceMappingURL=InputAppState.js.map