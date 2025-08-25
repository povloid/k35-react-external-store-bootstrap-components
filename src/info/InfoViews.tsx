import { Children, isValidElement, ReactNode } from "react";
import { IconMdi } from "../icon/IconMdi";
import { IconMdiIName } from "../icon/IconMdiIname";

let index = 0

function getIndex() {
    return index++;
}

const lineStyle: React.CSSProperties = { borderTop: "dashed", maxHeight: 2 }


const isEmpty = (children: ReactNode): boolean =>
    Children.toArray(children).filter(
        (element) => isValidElement(element)
            && element?.props?.children !== undefined
            && element?.props?.children !== null
            && element?.props?.children !== false
            && element?.props?.children !== ""
            && Children.toArray(element?.props?.children).length > 0
    ).length === 0



export const InfoBox = ({ children, className }: { children?: ReactNode, className?: string }) =>
    <div className={`mb-3 border border-1 p-2 rounded ${className}`}>
        {children}
    </div>

export const InfoIndexedGroup = ({ children, className }: { children?: ReactNode, className?: string }) => {
    const items = Children.toArray(children).map((child, i) =>
        <InfoBox key={getIndex()} className={className}>
            <div className={`d-flex align-items-center`}>
                <hr className="m-0 flex-fill hr-dashed" style={lineStyle} />
                <span className="m-0 px-2 small text-muted"><em>Запись {i + 1}</em></span>
                <hr className="m-0 flex-fill hr-dashed" style={lineStyle} />
            </div>
            {child}
        </InfoBox>)

    if (items.length === 0) return

    return (
        <div className="mb-4">
            {items}
        </div>
    )
}


export const InfoBlock = ({
    title,
    count,
    children,
    icon,
    className
}: {
    title?: string;
    count?: number;
    children?: ReactNode;
    icon?: IconMdiIName,
    className?: string
}) => {

    if (isEmpty(children)) return

    return (
        <div className={className}>
            <div className="d-flex justify-content-between">
                <div className="fw-bold">
                    {icon && <span style={{ fontSize: "1.3em" }}><IconMdi iname={icon} /></span>} {title}
                </div>
                <div>
                    <b>{count}</b>
                </div>
            </div>
            <div className="table-group-divider mb-3"></div>
            {children}
        </div>
    )
}

export const InfoItemsBlock = ({ title, children, icon, className }: { title?: string; children?: ReactNode; icon?: IconMdiIName, className?: string }) => {
    const isEmpty =
        Children.toArray(children).filter(
            (element) => isValidElement(element)
                && element?.props?.children !== undefined
                && element?.props?.children !== null
                && element?.props?.children !== false
                && element?.props?.children !== ""
        ).length === 0

    if (isEmpty) return

    return (
        <InfoBlock icon={icon} title={title} className={className}>
            <div className="table-responsive mb-3">
                <table className="table table-hover">
                    <tbody className="">{children}</tbody>
                </table>
            </div>
        </InfoBlock>
    )
}

export const InfoItem = ({
    label,
    children,
    className
}: {
    label: ReactNode
    children?: ReactNode
    className?: string
}) => {

    if (children === undefined
        || children === null
        || children === false) return

    if (isValidElement(children)
        && (children?.props?.value === undefined
            || children?.props?.value === null
            || children?.props?.value === 0)) return

    return (
        <tr>
            <td align="right" className="text-muted" width="60%">
                {label}
            </td>
            <td className={className}>{children}</td>
        </tr>

    )
}


