// Calculate BMI - weight in kg divided by height in metres squared
export default function calculate(height, weight) {
    const bmi = weight / Math.pow(height, 2)
    return Number(bmi.toFixed(1))
}
