export default function classify(bmi) {
    if (bmi < 18.4) {
        return 'underweight'
    } else if (bmi >= 18.5 && bmi < 25) {
        return 'healthy weight'
    } else if (bmi >= 25 && bmi < 30) {
        return 'overweight'
    } else if (bmi >= 30) {
        return 'obese'
    }
}
