import { asUpdate, curry2Right } from "@k35/fp";
export var selectedHashScreen = function (state) { return state; };
export var selectedHashScreenSet = function (state, screen) { return screen; };
export var selectedHashScreenSetC = curry2Right(selectedHashScreenSet);
export var selectedHashScreenSetU = asUpdate(selectedHashScreenSet);
//# sourceMappingURL=HashScreensAppState.js.map