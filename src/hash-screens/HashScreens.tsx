import { Cursor, ExternalStore, useCursor } from "@k35/react-external-store";
import { createContext, PropsWithChildren, ReactNode, useContext, useEffect } from "react";
import { HashScreensAppState, selectedHashScreen, selectedHashScreenSetU } from "./HashScreensAppState";
import { getHash, getHashAndParams } from "./HashTools";


const CursorContext = createContext<Cursor<HashScreensAppState<string>>>(new ExternalStore("none"));


/**
 * Навигация по экранам через адресную строку
 * 
 * @param props 
 * @returns 
 */
export const HashScreens = <T extends string,>(props: {
    cursor: Cursor<HashScreensAppState<T>>,
    children?: ReactNode
}) => {

    const state = useCursor(props.cursor)
    const currentScreen = selectedHashScreen(state)

    useEffect(() => {

        const handleHash = () => {

            const hash = window.location.hash
            const [screen, params] = getHashAndParams(hash)

            console.log('Выбран экран:', screen, params && " с параметрами " + params)

            props.cursor.update(selectedHashScreenSetU(hash as T)).push()
        }

        window.addEventListener("popstate", handleHash);

        window.location.hash = currentScreen

        return () => {
            window.removeEventListener("popstate", handleHash)
        }
    }, [currentScreen]);

    return (
        <CursorContext.Provider value={props.cursor}>
            {props.children}
        </CursorContext.Provider>
    )
}

export interface HashScreenProps<T extends string> extends PropsWithChildren {
    hash: T
}

/**
 * Скрин для показа по хэшу  
 * 
 * @param props
 * @returns 
 */
export const HashScreen = <T extends string,>(
    props: HashScreenProps<T>
) => {

    const cursor = useContext(CursorContext)
    const state = useCursor(cursor)

    return getHash(state) === props.hash ? props.children : null
}

