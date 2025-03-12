export function imperialHeight(ft, ins) {
    const height = ft / 3.281 + ins / 39.37
    return Number(height.toFixed(2))
}

export function imperialWeight(lbs) {
    const weight = lbs / 2.205
    return Number(weight.toFixed(2))
}
