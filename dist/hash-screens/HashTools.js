export var getHashAndParams = function (hash) { return hash.split("?").slice(0, 2); };
export var getWindowLocationHash = function () { return getHash(window.location.hash); };
export var getHash = function (hash) {
    return getHashAndParams(hash)[0];
};
export var getWindowLocationHashParams = function () { return getHashParams(window.location.hash); };
export var getHashParams = function (hash) {
    var params = getHashAndParams(hash)[1];
    return new URLSearchParams(params);
};
//# sourceMappingURL=HashTools.js.map