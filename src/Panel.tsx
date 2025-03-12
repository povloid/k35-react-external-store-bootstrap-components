
import { ReactNode } from "react";
import { IconMdi } from "./icon/IconMdi";
import { IconMdiIName } from "./icon/IconMdiIname";

export const Panel = (props: { className?: string; children?: ReactNode }) => {
    return <div className={"panel " + props.className}>{props.children}</div>
}

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
