import { asUpdate } from "@k35/fp";
export var switchAppStateInit = false;
export var switchIsChecked = function (state) { return state; };
export var switchSetValue = function (_, value) { return value; };
export var switchSetValueU = asUpdate(switchSetValue);
export var switchCheck = function () { return true; };
export var switchUncheck = function () { return false; };
export var switchToggele = function (state) { return !state; };
//# sourceMappingURL=SwitchAppState.js.map