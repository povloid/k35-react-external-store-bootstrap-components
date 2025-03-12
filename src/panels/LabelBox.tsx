import { ReactNode } from "react"
import { IconMdi } from "../icon/IconMdi"
import { IconMdiIName } from "../icon/IconMdiIname"

export const LabelBox = (props: {
    icon?: IconMdiIName
    title?: string
    className?: string
    children?: ReactNode
}) => {
    return (
        <div className={"label-box " + props.className}>
            <small>
                {props.icon && <IconMdi iname={props.icon} />}
                {props.title}
            </small>
            <div>{props.children}</div>
        </div>
    )
}