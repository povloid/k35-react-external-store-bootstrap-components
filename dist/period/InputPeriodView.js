import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCursor } from "@k35/react-external-store";
import { inputPeriodSetMonthC, inputPeriodSetYearC, MONTH_MAX, MONTH_MIN, YEAR_MAX, YEAR_MIN } from "./InputPeriodAppState";
export var InputPeriod = function (_a) {
    var cursor = _a.cursor, onChange = _a.onChange;
    var _b = useCursor(cursor), month = _b.month, year = _b.year;
    return (_jsxs("div", { className: "input-group input-group-sm mb-3", children: [_jsx("span", { className: "input-group-text", id: "inputGroup-sizing-sm", children: "\u0433\u043E\u0434" }), _jsx("input", { type: "number", className: "form-control", value: year, min: YEAR_MIN, max: YEAR_MAX, onChange: function (e) {
                    try {
                        var year_1 = Number.parseInt(e.target.value);
                        cursor.update(inputPeriodSetYearC(year_1)).push();
                        if (onChange)
                            onChange();
                    }
                    catch (e) { }
                } }), _jsx("span", { className: "input-group-text", id: "inputGroup-sizing-sm", children: "\u043C\u0435\u0441\u044F\u0446" }), _jsx("input", { type: "number", className: "form-control", value: month, min: MONTH_MIN, max: MONTH_MAX, onChange: function (e) {
                    try {
                        var month_1 = Number.parseInt(e.target.value);
                        cursor.update(inputPeriodSetMonthC(month_1)).push();
                        if (onChange)
                            onChange();
                    }
                    catch (e) { }
                } })] }));
};
//# sourceMappingURL=InputPeriodView.js.map