
import { ReactNode } from "react";

export const Panel = (props: { className?: string; children?: ReactNode }) => {
    return <div className={"panel " + props.className}>{props.children}</div>
}
