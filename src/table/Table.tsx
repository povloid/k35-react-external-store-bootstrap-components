import { Cursor, ExternalStoreCursor, useCursor } from "@k35/react-external-store";
import { ReactNode } from "react";
import { TableAppState } from "./TableAppState";


let keyIndex = 0

function generateKey(keySuffix: string): string {
    return `${keyIndex++}-${keySuffix}`
}

export type ItemRender<T> = (props: { o: T, i: number, c: Cursor<T>, cc: Cursor<T>[], tc: Cursor<TableAppState<T>> }) => JSX.Element

export type TableResponsiveType = "sm" | "md" | "lg" | "xl" | "xxl"

export type TableHeadType = "light" | "dark"


export const Table = <T,>(props: {
    itemRender?: ItemRender<T>
    thead?: ReactNode
    cursor: Cursor<TableAppState<T>>
    hower?: boolean
    responsive?: TableResponsiveType[] | "all"
    theadType?: TableHeadType
    sm?: boolean
    bordered?: boolean
    borderless?: boolean
    caption?: ReactNode
}) => {

    const { columns, items } = useCursor(props.cursor)

    const ItemRender: ItemRender<T> = props.itemRender
        || (({ o, i }: { o: T, i: number }) => <tr key={i}><td colSpan={columns?.length}>{`[${i}] ${o}`}</td></tr>)

    const responsiveCss = props.responsive === "all"
        ? "table-responsive"
        : props.responsive?.map(o => o === `table-responsive-${o}`).join(" ")

    const tableCss = "table"
        + (props.hower ? " table-hover" : "")
        + (props.sm ? " table-sm" : "")
        + (props.bordered ? " table-bordered" : "")
        + (props.borderless ? " table-borderless" : "")


    const theadTypeCss = props.theadType && `table-${props.theadType}`

    return (
        <div className={responsiveCss}>
            <table className={tableCss}>
                {props.caption ?? <caption>{props.caption}</caption>}
                <thead className={theadTypeCss}>
                    {
                        columns
                            ? (
                                // Если колонки есть в данных
                                <tr>
                                    {columns.map((o, i) => (
                                        <th key={generateKey("table-column")} scope="col">
                                            {o.text}
                                        </th>
                                    ))}
                                </tr>
                            ) : (
                                // Иначе берем колонки из настроек
                                props.thead
                            )
                    }
                </thead>
                <tbody>
                    {
                        items.length > 0 ? (
                            createRenders(props.cursor, items, ItemRender)
                        ) : (
                            <tr>
                                <td colSpan={columns?.length}>нет данных</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

const createRenders = <T,>(cursor: Cursor<TableAppState<T>>, items: T[], ItemRender: ItemRender<T>) => {

    const cc = items.map((o, i) =>
        new ExternalStoreCursor(
            cursor,
            (state) => state.items[i],
            (state, newItem) => ({ ...state, items: state.items.slice().map((item, ii) => ii === i ? newItem : item) })))

    return items.map((o, i) => {
        return <ItemRender key={generateKey("table-item")} o={o} i={i} c={cc[i]} cc={cc} tc={cursor} />
    })
}