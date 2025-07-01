export const getHashAndParams = (hash: string) => hash.split("?").slice(0, 2)

export const getWindowLocationHash = () => getHash(window.location.hash)
export const getHash = (hash: string) =>
    getHashAndParams(hash)[0]

export const getWindowLocationHashParams = () => getHashParams(window.location.hash)
export const getHashParams = (hash: string) => {
    const params = getHashAndParams(hash)[1]
    return new URLSearchParams(params)
}
