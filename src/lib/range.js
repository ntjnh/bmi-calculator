// Calculate healthy weight range
export default function range(height) {
    const min = Number((Math.pow(height, 2) * 18.5).toFixed(2))
    const max = Number((Math.pow(height, 2) * 24.9).toFixed(2))
    return [min, max]
}
