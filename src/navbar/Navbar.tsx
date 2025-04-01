import { Cursor, useCursor } from "@k35/react-external-store";
import { ReactNode, useEffect } from "react";
import { NavbarAppState, NavbarDropdownMenuItemState, NavbarItemState, navbarSetActiveC, navbarSetupActivesFromWindow } from "./NavbarAppState";

export const Navbar = <T extends string,>(props: {
    brand: {
        href: string,
        body: ReactNode
    },
    cursor: Cursor<NavbarAppState<T>>
}) => {
    const { cursor } = props
    const state = useCursor(cursor)

    useEffect(() => {
        cursor.update(navbarSetupActivesFromWindow).push()
    }, [cursor])

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href={props.brand.href}>{props.brand.body}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {state.items.map((o, i) => selectItemByType(cursor, o, i))}
                    </ul>

                    {state.rightItems.length === 0 ?
                        null :
                        <div>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                {state.rightItems.map((o, i) => selectItemByType(cursor, o, i))}
                            </ul>
                        </div>}
                </div>
            </div>
        </nav>)
};

const selectItemByType = <T extends string,>(cursor: Cursor<NavbarAppState<T>>, item: NavbarItemState<T>, i: number) => {
    switch (item.type) {
        case "item":
            return <NavbarItem key={i} item={item} cursor={cursor} />
        case "dropdown":
            return <NavbarDropdown key={i} item={item} cursor={cursor} />
    }
}

const NavbarItem = <T extends string,>({
    cursor,
    item
}: {
    cursor: Cursor<NavbarAppState<T>>,
    item: NavbarItemState<T>
}) => {

    useCursor(cursor)

    const active = item.active

    const onClick = () => {
        cursor.update(navbarSetActiveC(item)).push()
    }

    return (
        <li className="nav-item">
            <a className={"nav-link" + (active ? " active" : "")} href={item.href}
                onClick={onClick}>{item.text}</a>
        </li>
    )
}

const NavbarDropdown = <T extends string,>({
    cursor,
    item
}: {
    cursor: Cursor<NavbarAppState<T>>,
    item: NavbarItemState<T>
}) => {

    useCursor(cursor)

    const onClick = () => cursor.update(navbarSetActiveC(item)).push()

    return (
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="# " role="button" data-bs-toggle="dropdown" aria-expanded="false"
                onClick={onClick}>
                {item.text}
            </a>
            <ul className="dropdown-menu">
                {item.menu?.map((item, i) => <NavbarDropdownMenuItem key={i} menuItem={item} cursor={cursor} />)}
            </ul>
        </li>
    )
}

const NavbarDropdownMenuItem = <T extends string,>({
    cursor,
    menuItem
}: {
    cursor: Cursor<NavbarAppState<T>>
    menuItem: NavbarDropdownMenuItemState<T>
}) => {

    useCursor(cursor)

    switch (menuItem.type) {
        case "item":
            return <li><a className="dropdown-item" href={menuItem.href}>{menuItem.text}</a></li>
        case "divider":
            return <li><hr className="dropdown-divider" /></li>
    }
}
