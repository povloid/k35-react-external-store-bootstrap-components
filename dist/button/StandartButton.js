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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCursor } from "@k35/react-external-store";
import { IconMdi } from '../icon/IconMdi';
import { Button } from "./Button";
export var AddButton = function (props) {
    return _jsxs(Button, __assign({}, props, { children: [_jsx(IconMdi, { iname: "plus" }), "  \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C"] }));
};
export var AddButtonWithState = function (props) {
    var disabled = useCursor(props.cursor).disabled;
    return (_jsx(AddButton, __assign({}, props, { disabled: disabled })));
};
export var EditButton = function (props) {
    return _jsxs(Button, __assign({}, props, { children: [_jsx(IconMdi, { iname: "pencil" }), "  \u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C"] }));
};
export var EditButtonWithState = function (props) {
    var disabled = useCursor(props.cursor).disabled;
    return (_jsx(EditButton, __assign({}, props, { disabled: disabled })));
};
export var DelButton = function (props) {
    return _jsxs(Button, __assign({}, props, { children: [_jsx(IconMdi, { iname: "minus" }), "  \u0423\u0434\u0430\u043B\u0438\u0442\u044C"] }));
};
export var DelButtonWithState = function (props) {
    var disabled = useCursor(props.cursor).disabled;
    return (_jsx(DelButton, __assign({}, props, { disabled: disabled })));
};
export var AcceptButton = function (props) {
    return _jsxs(Button, __assign({}, props, { children: [_jsx(IconMdi, { iname: "check" }), " \u041F\u0440\u0438\u043D\u044F\u0442\u044C"] }));
};
export var AcceptButtonWithState = function (props) {
    var disabled = useCursor(props.cursor).disabled;
    return (_jsx(AcceptButton, __assign({}, props, { disabled: disabled })));
};
export var CancelButton = function (props) {
    return _jsxs(Button, __assign({}, props, { children: [_jsx(IconMdi, { iname: "cancel" }), "  \u041E\u0442\u043C\u0435\u043D\u0430"] }));
};
export var CancelButtonWithState = function (props) {
    var disabled = useCursor(props.cursor).disabled;
    return (_jsx(EditButton, __assign({}, props, { disabled: disabled })));
};
//# sourceMappingURL=StandartButton.js.map