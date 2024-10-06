import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCursor } from "@k35/react-external-store";
export var Navbar = function (props) {
    var cursor = props.cursor;
    var state = useCursor(cursor);
    return (_jsx("nav", { className: "navbar navbar-expand-lg bg-body-tertiary", children: _jsxs("div", { className: "container-fluid", children: [_jsx("a", { className: "navbar-brand", href: props.brand.href, children: props.brand.body }), _jsx("button", { className: "navbar-toggler", type: "button", "data-bs-toggle": "collapse", "data-bs-target": "#navbarSupportedContent", "aria-controls": "navbarSupportedContent", "aria-expanded": "false", "aria-label": "Toggle navigation", children: _jsx("span", { className: "navbar-toggler-icon" }) }), _jsxs("div", { className: "collapse navbar-collapse", id: "navbarSupportedContent", children: [_jsx("ul", { className: "navbar-nav me-auto mb-2 mb-lg-0", children: state.items.map(selectItemByType) }), state.rightItems.length === 0 ?
                            null :
                            _jsx("div", { children: _jsx("ul", { className: "navbar-nav me-auto mb-2 mb-lg-0", children: state.rightItems.map(selectItemByType) }) })] })] }) }));
};
var selectItemByType = function (item, i) {
    switch (item.type) {
        case "item":
            return _jsx(NavbarItem, { item: item }, i);
        case "dropdown":
            return _jsx(NavbarDropdown, { item: item }, i);
    }
};
var NavbarItem = function (_a) {
    var item = _a.item;
    return _jsx("li", { className: "nav-item", children: _jsx("a", { className: "nav-link" + (item.active ? " active" : ""), href: item.href, children: item.text }) });
};
var NavbarDropdown = function (_a) {
    var _b;
    var item = _a.item;
    return _jsxs("li", { className: "nav-item dropdown", children: [_jsx("a", { className: "nav-link dropdown-toggle", href: "# ", role: "button", "data-bs-toggle": "dropdown", "aria-expanded": "false", children: item.text }), _jsx("ul", { className: "dropdown-menu", children: (_b = item.menu) === null || _b === void 0 ? void 0 : _b.map(function (item, i) { return _jsx(NavbarDropdownMenuItem, { menuItem: item }, i); }) })] });
};
var NavbarDropdownMenuItem = function (_a) {
    var menuItem = _a.menuItem;
    switch (menuItem.type) {
        case "item":
            return _jsx("li", { children: _jsx("a", { className: "dropdown-item", href: menuItem.href, children: menuItem.text }) });
        case "divider":
            return _jsx("li", { children: _jsx("hr", { className: "dropdown-divider" }) });
    }
};
//# sourceMappingURL=Navbar.js.map