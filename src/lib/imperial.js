export function imperialHeight(ft, ins) {
    const inches = parseInt(ft, 10) * 12 + parseInt(ins, 10)
    const centimetres = inches * 2.54
    return Math.round(centimetres)
}

export function imperialWeight(st, lbs) {
    const pounds = parseInt(st, 10) * 14 + parseInt(lbs, 10)
    const kilograms = pounds / 2.205
    return Math.round(kilograms * 100) / 100
}
