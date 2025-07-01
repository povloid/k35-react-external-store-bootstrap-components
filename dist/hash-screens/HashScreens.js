import { jsx as _jsx } from "react/jsx-runtime";
import { ExternalStore, useCursor } from "@k35/react-external-store";
import { createContext, useContext, useEffect } from "react";
import { selectedHashScreen, selectedHashScreenSetU } from "./HashScreensAppState";
import { getHash, getHashAndParams } from "./HashTools";
var CursorContext = createContext(new ExternalStore("none"));
export var HashScreens = function (props) {
    var state = useCursor(props.cursor);
    var currentScreen = selectedHashScreen(state);
    useEffect(function () {
        var handleHash = function () {
            var hash = window.location.hash;
            var _a = getHashAndParams(hash), screen = _a[0], params = _a[1];
            console.log('Выбран экран:', screen, params && " с параметрами " + params);
            props.cursor.update(selectedHashScreenSetU(hash)).push();
        };
        window.addEventListener("popstate", handleHash);
        window.location.hash = currentScreen;
        return function () {
            window.removeEventListener("popstate", handleHash);
        };
    }, [currentScreen]);
    return (_jsx(CursorContext.Provider, { value: props.cursor, children: props.children }));
};
export var HashScreen = function (props) {
    var cursor = useContext(CursorContext);
    var state = useCursor(cursor);
    return getHash(state) === props.hash ? props.children : null;
};
//# sourceMappingURL=HashScreens.js.map