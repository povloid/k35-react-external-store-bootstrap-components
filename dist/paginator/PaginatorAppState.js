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
export var paginatorSizes = [10, 20, 50, 100];
export var paginatorAppStateInit = {
    page: 0,
    size: 10
};
export var paginatorValue = function (_a) {
    var page = _a.page, size = _a.size;
    return ({ page: page, size: size });
};
export var paginatorToFirstPage = function (state) { return (__assign(__assign({}, state), { page: 0 })); };
export var paginatorToPrevPage = function (state) { return (__assign(__assign({}, state), { page: state.page === 0 ? 0 : state.page - 1 })); };
export var paginatorToNextPage = function (state) { return (__assign(__assign({}, state), { page: state.page + 1 })); };
export var paginatorSetPageSize = function (state, size) { return (__assign(__assign({}, state), { size: size })); };
export var paginatorSetPageSizeU = asUpdate(paginatorSetPageSize);
//# sourceMappingURL=PaginatorAppState.js.map