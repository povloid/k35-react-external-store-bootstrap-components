import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCursor } from "@k35/react-external-store";
import { useEffect, useState } from "react";
var id = 0;
function generateNextModalId() {
    return "modal-".concat(id++);
}
var modalsIds = new Set([]);
function addModalId(modalId) {
    modalsIds.add(modalId);
    console.log("Создано модальное окно:", modalId);
}
function deleteModalId(modalId) {
    modalsIds.delete(modalId);
    console.log("Удалено модальное окно:", modalId);
}
function watchModalIds() {
    if (modalsIds.size === 0) {
        document.body.classList.add("modal-open");
    }
    else {
        document.body.classList.remove("modal-open");
    }
}
export var Modal = function (props) {
    var id = useState(generateNextModalId())[0];
    useEffect(function () {
        addModalId(id);
        return function () {
            deleteModalId(id);
        };
    }, [id]);
    var show = useCursor(props.cursor).show;
    watchModalIds();
    var size = props.size ? "modal-".concat(props.size) : "";
    var centred = props.centred ? "modal-dialog-centered" : "";
    return (_jsx("div", { id: id, tabIndex: -1, "aria-labelledby": "exampleModalLabel", className: show ? "modal fade show" : "modal fade", "aria-hidden": !show, "aria-modal": show, style: (show ? { display: "block", backgroundColor: "rgba(0, 0, 0, 0.2)" } : { display: "none" }), role: show ? "dialog" : undefined, children: _jsx("div", { className: "modal-dialog ".concat(size, " ").concat(centred), children: _jsx("div", { className: "modal-content", children: show ? props.children : null }) }) }));
};
export var ModalHeader = function (props) {
    return (_jsxs("div", { className: "modal-header", children: [_jsx("h1", { className: "modal-title fs-5", id: "exampleModalLabel", children: props.children || "Title" }), props.onClose
                ? _jsx("button", { type: "button", className: "btn-close", "data-bs-dismiss": "modal", "aria-label": "Close", onClick: function (e) {
                        e.stopPropagation();
                        if (props.onClose)
                            props.onClose();
                    } })
                : null] }));
};
export var ModalBody = function (_a) {
    var children = _a.children;
    return (_jsx("div", { className: "modal-body", children: children }));
};
export var ModalFooter = function (props) {
    return (_jsx("div", { className: "modal-footer", children: props.children }));
};
//# sourceMappingURL=Modal.js.map