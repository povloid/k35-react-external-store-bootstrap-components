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
export var modalAppStateInit = {
    show: false
};
export var modalShow = function (s) { return (__assign(__assign({}, s), { show: true })); };
export var modalHide = function (s) { return (__assign(__assign({}, s), { show: false })); };
//# sourceMappingURL=ModalAppState.js.map