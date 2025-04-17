export function imperialHeight(ft, ins) {
    const inches = (ft * 12) + ins
    const centimetres = inches * 2.54
    return Math.round(centimetres)
}

export function imperialWeight(st, lbs) {
    const pounds = (st * 14) + lbs
    const kilograms = pounds / 2.205
    return Math.round(kilograms)
}
