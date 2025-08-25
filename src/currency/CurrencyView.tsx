export const Currency = ({
    value,
    currency
}: {
    value?: number,
    currency?: string
}) => {

    if (value === undefined || value === null || value === 0) return;

    const code = (currency ?? "USD");
    const str = value?.toLocaleString(undefined, { style: "currency", currency: code, currencyDisplay: "code" })
        .replace(code, "")

    return str
}