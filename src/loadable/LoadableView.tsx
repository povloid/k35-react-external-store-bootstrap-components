import { ReactNode } from "react"

const src = "static/images/spiners/loading24.gif"

export const Loading24 = ({
    before,
    children,
    className
}: {
    before?: boolean
    children?: ReactNode
    className?: string
}) => (
    <span className={className}>
        {before && children}
        <img alt="загрузка..." src={src} />
        {!before && children}
    </span>
)
