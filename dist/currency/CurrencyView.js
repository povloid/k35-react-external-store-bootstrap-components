export var Currency = function (_a) {
    var value = _a.value, currency = _a.currency;
    if (value === 0)
        return null;
    var code = (currency !== null && currency !== void 0 ? currency : "USD");
    var str = value === null || value === void 0 ? void 0 : value.toLocaleString(undefined, { style: "currency", currency: code, currencyDisplay: "code" }).replace(code, "");
    return str;
};
//# sourceMappingURL=CurrencyView.js.map