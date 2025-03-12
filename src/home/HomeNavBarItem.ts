
import { NavbarItemState } from "../navbar/NavbarAppState";
import { HomeButton } from "./HomeButton";

export const homeNavBarItem = <T extends string>(): NavbarItemState<T> => ({
    text: HomeButton(),
    type: "item",
    href: "/"
})