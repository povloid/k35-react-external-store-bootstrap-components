import { Cursor, useCursor } from "@k35/react-external-store"
import {
    InputPeriodAppState,
    inputPeriodSetMonthU,
    inputPeriodSetYearU,
    Month,
    MONTH_MAX,
    MONTH_MIN,
    Year,
    YEAR_MAX,
    YEAR_MIN
} from "./InputPeriodAppState"

export const InputPeriod = ({
    cursor,
    onChange
}: {
    cursor: Cursor<InputPeriodAppState>
    onChange?: () => void
}) => {
    const { month, year } = useCursor(cursor)

    return (
        <div className="input-group input-group-sm mb-3">
            <span className="input-group-text" id="inputGroup-sizing-sm">
                год
            </span>
            <input
                type="number"
                className="form-control"
                value={year}
                min={YEAR_MIN}
                max={YEAR_MAX}
                onChange={(e: { target: { value: string } }) => {
                    try {
                        const year = Number.parseInt(e.target.value) as Year

                        cursor.update(inputPeriodSetYearU(year)).push()

                        if (onChange) onChange()
                    } catch (e) { }
                }}
            />

            <span className="input-group-text" id="inputGroup-sizing-sm">
                месяц
            </span>
            <input
                type="number"
                className="form-control"
                value={month}
                min={MONTH_MIN}
                max={MONTH_MAX}
                onChange={(e: { target: { value: string } }) => {
                    try {
                        const month = Number.parseInt(e.target.value) as Month

                        cursor.update(inputPeriodSetMonthU(month)).push()

                        if (onChange) onChange()
                    } catch (e) { }
                }}
            />
        </div>
    )
}
