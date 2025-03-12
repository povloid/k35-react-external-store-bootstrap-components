import { Cursor, useCursor } from "@k35/react-external-store"
import { ReactNode } from "react"
import { fileterBySetActiveAsC, FilterByAppState } from "./FilterByAppState"

export const FiterBlock = ({
    cursor,
    children,
    className,
    onClose
}: {
    cursor: Cursor<FilterByAppState>
    children?: ReactNode
    className?: string
    onClose?: () => void
}) => {
    const { isActive, title } = useCursor(cursor)

    if (!isActive) return

    return (
        <div className={className}>
            <div>
                <small>
                    <small>
                        <button
                            type="button"
                            className="btn-close"
                            onClick={(e) => {
                                e.stopPropagation()
                                cursor.update(fileterBySetActiveAsC(false)).push()

                                if (onClose) onClose()
                            }}></button>
                    </small>

                    <label>{title}</label>
                </small>
            </div>

            {children}
        </div>
    )
}
