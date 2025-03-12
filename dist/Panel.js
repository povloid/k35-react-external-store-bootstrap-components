import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { IconMdi } from "./icon/IconMdi";
export var Panel = function (props) {
    return _jsx("div", { className: "panel " + props.className, children: props.children });
};
export var LabelBox = function (props) {
    return (_jsxs("div", { className: "label-box " + props.className, children: [_jsxs("small", { children: [props.icon && _jsx(IconMdi, { iname: props.icon }), props.title] }), _jsx("div", { children: props.children })] }));
};
//# sourceMappingURL=Panel.js.map