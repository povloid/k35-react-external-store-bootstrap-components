import { useCursor } from "@k35/react-external-store";
import { ReactNode } from "react";
import { IconMdi } from "../icon/IconMdi";
import { fileterBySetActive } from "./FilterByAppState";
import { FiltersService } from "./FiltersService";

export const Filters = <T,>(
    {
        service,
        children
    }: {
        children?: ReactNode;
        service: FiltersService<T>
        onChange?: () => void
    }
) => (
    < div className="d-flex flex-wrap gap-3" >
        {children}
    </div >
)



export const FiltersButton = <T,>({
    service,
    onChange
}: {
    service: FiltersService<T>
    onChange?: () => void
}) => {
    useCursor(service.cursor)

    const activeFilters = service.services.filter((o) => o.isActive())
    const notActiveFilters = service.services.filter((o) => !o.isActive())

    return (
        <div className="btn-group ms-1">
            <button
                type="button"
                className="btn btn-secondary dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                <IconMdi iname="filter" /> Фильтр
            </button>

            <ul className="dropdown-menu">
                {[
                    ...notActiveFilters.map((o, i) => {
                        const { title } = o.getFilterCursor().getSnapshot()

                        const onClick = () => {
                            o.getFilterCursor().update(fileterBySetActive).push()
                            service.cursor.push()

                            if (onChange) onChange()
                        }

                        return (
                            <li key={title}>
                                <button className="dropdown-item" onClick={onClick}>
                                    {title}
                                </button>
                            </li>
                        )
                    }),

                    activeFilters.length > 0 && (
                        <li key="line">
                            <hr className="dropdown-divider" />
                        </li>
                    ),

                    ...(activeFilters.length > 0
                        ? [
                            <li key="clear-all">
                                <button
                                    className="dropdown-item"
                                    onClick={() => {
                                        service.clearAll()
                                        if (onChange) onChange()
                                    }}>
                                    Сбросить все
                                </button>
                            </li>
                        ]
                        : [])
                ]}
            </ul>
        </div>
    )
}
