import { jsx as _jsx } from "react/jsx-runtime";
import { ExternalStore, useCursor } from "@k35/react-external-store";
import { createContext, useContext, useEffect } from "react";
import { selectedHashScreen, selectedHashScreenSetC } from "./HashScreensAppState";
var CursorContext = createContext(new ExternalStore("none"));
export var HashScreens = function (props) {
    var state = useCursor(props.cursor);
    var currentScreen = selectedHashScreen(state);
    useEffect(function () {
        var handleHash = function () {
            console.log('Выбран экран:', window.location.hash);
            props.cursor.update(selectedHashScreenSetC(window.location.hash)).push();
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
    var currentScreen = selectedHashScreen(state);
    return currentScreen === props.hash ? props.children : null;
};
//# sourceMappingURL=HashScreens.js.map