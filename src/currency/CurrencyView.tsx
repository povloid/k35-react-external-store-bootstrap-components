export const Currency = ({
    value,
    currency
}: {
    value?: number,
    currency?: string
}) => {

    if (value === 0) return null;

    const code = (currency ?? "USD");
    const str = value?.toLocaleString(undefined, { style: "currency", currency: code, currencyDisplay: "code" })
        .replace(code, "")

    return str
}