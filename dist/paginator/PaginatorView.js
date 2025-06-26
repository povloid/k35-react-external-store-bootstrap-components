import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCursor } from "@k35/react-external-store";
import { IconMdi } from "../icon/IconMdi";
import { paginatorSetPageSizeU, paginatorSizes, paginatorToFirstPage, paginatorToNextPage, paginatorToPrevPage } from "./PaginatorAppState";
export var Paginator = function (props) {
    var _a = useCursor(props.cursor), page = _a.page, size = _a.size;
    var goToFirstPage = function () {
        props.cursor.update(paginatorToFirstPage).push();
        if (props.onChange)
            props.onChange();
    };
    var goToPrevPage = function () {
        props.cursor.update(paginatorToPrevPage).push();
        if (props.onChange)
            props.onChange();
    };
    var goToNextPage = function () {
        props.cursor.update(paginatorToNextPage).push();
        if (props.onChange)
            props.onChange();
    };
    var selectSize = function (e) {
        var size = parseInt(e.target.value);
        props.cursor.update(paginatorSetPageSizeU(size)).push();
        if (props.onChange)
            props.onChange();
    };
    return (_jsxs("div", { className: "input-group", children: [_jsx("button", { className: "btn btn-outline-secondary", type: "button", onClick: goToFirstPage, children: _jsx(IconMdi, { iname: "chevron-double-left" }) }), _jsx("button", { className: "btn btn-outline-secondary", type: "button", onClick: goToPrevPage, children: _jsx(IconMdi, { iname: "chevron-left" }) }), _jsxs("span", { className: "input-group-text", children: ["\u0441\u0442\u0440. ", page + 1] }), _jsx("select", { className: "form-select", style: { maxWidth: 86 }, onChange: selectSize, value: size, children: paginatorSizes.map(function (isize) { return (_jsx("option", { value: isize, children: isize }, isize)); }) }), _jsx("button", { className: "btn btn-outline-secondary", type: "button", onClick: goToNextPage, children: _jsx(IconMdi, { iname: "chevron-right" }) })] }));
};
//# sourceMappingURL=PaginatorView.js.map