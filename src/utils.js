export function percentDifference(assetPrice, coinPrice) {
    return +(100 * Math.abs((assetPrice - coinPrice) / ((assetPrice + coinPrice) / 2))).toFixed(2)
}

export function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.substr(1)
}