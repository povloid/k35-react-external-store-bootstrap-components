import { Children, isValidElement, ReactNode } from "react";

export const InfoBlock = ({ title, children }: { title?: string; children?: ReactNode }) => {
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
        <div className="table-responsive">
            <table className="table table-hover">
                <thead className="full-info-header">
                    <tr>
                        <th align="right" style={{ width: "60%" }}>
                            {title}
                        </th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">{children}</tbody>
            </table>
        </div>
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
}) =>
    children === undefined
        || children === null
        || children === false
        || children === ""
        ? undefined
        : (
            <tr>
                <td align="right" className="text-muted">
                    {label}
                </td>
                <td className={className}>{children}</td>
            </tr>
        )

