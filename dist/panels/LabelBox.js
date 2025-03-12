import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { IconMdi } from "../icon/IconMdi";
export var LabelBox = function (props) {
    return (_jsxs("div", { className: "label-box " + props.className, children: [_jsxs("small", { children: [props.icon && _jsx(IconMdi, { iname: props.icon }), props.title] }), _jsx("div", { children: props.children })] }));
};
//# sourceMappingURL=LabelBox.js.map