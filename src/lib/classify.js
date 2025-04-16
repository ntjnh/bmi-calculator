export default function classify(bmi) {
    if (bmi > 0 && bmi <= 18.4) {
        return 'underweight'
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return 'healthy weight'
    } else if (bmi >= 25 && bmi <= 29.9) {
        return 'overweight'
    } else if (bmi >= 30) {
        return 'obese'
    } else {
        console.error(`BMI is invalid.`)
    }
}
