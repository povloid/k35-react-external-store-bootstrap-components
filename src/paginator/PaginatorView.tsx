import { Cursor, useCursor } from "@k35/react-external-store";
import { ChangeEvent } from "react";
import { IconMdi } from "../icon/IconMdi";
import {
    PaginatorAppState,
    paginatorSetPageSizeU,
    paginatorSizes,
    paginatorToFirstPage,
    paginatorToNextPage,
    paginatorToPrevPage
} from "./PaginatorAppState";

export const Paginator = (props: { cursor: Cursor<PaginatorAppState>; onChange?: () => void }) => {
    const { page, size } = useCursor(props.cursor)

    const goToFirstPage = () => {
        props.cursor.update(paginatorToFirstPage).push()
        if (props.onChange) props.onChange()
    }

    const goToPrevPage = () => {
        props.cursor.update(paginatorToPrevPage).push()
        if (props.onChange) props.onChange()
    }

    const goToNextPage = () => {
        props.cursor.update(paginatorToNextPage).push()
        if (props.onChange) props.onChange()
    }

    const selectSize = (e: ChangeEvent<HTMLSelectElement>) => {
        const size = parseInt(e.target.value)
        props.cursor.update(paginatorSetPageSizeU(size)).push()
        if (props.onChange) props.onChange()
    }

    return (
        <div className="input-group">
            <button className="btn btn-outline-secondary" type="button" onClick={goToFirstPage}>
                <IconMdi iname="chevron-double-left" />
            </button>

            <button className="btn btn-outline-secondary" type="button" onClick={goToPrevPage}>
                <IconMdi iname="chevron-left" />
            </button>

            <span className="input-group-text">стр. {page + 1}</span>

            <select
                className="form-select"
                style={{ maxWidth: 86 }}
                onChange={selectSize}
                value={size}>
                {paginatorSizes.map((isize) => (
                    <option key={isize} value={isize}>
                        {isize}
                    </option>
                ))}
            </select>

            <button className="btn btn-outline-secondary" type="button" onClick={goToNextPage}>
                <IconMdi iname="chevron-right" />
            </button>
        </div>
    )
}
