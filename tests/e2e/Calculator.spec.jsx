import { describe, expect, test } from 'vitest'
import { render } from 'vitest-browser-react'
import App from '../../src/App'

describe('bmi calculator', () => {
    test('calculates BMI based on metric height and weight', async () => {
        const { getByLabelText, getByRole, getByText } = render(<App />)

        // assert initial state
        await expect.element(getByText('BMI Calculator')).toBeInTheDocument()

        const heightVal = '155'
        const weightVal = '52'
        const bmiResult = '21.6'
        const bmiCategory = 'healthy weight'

        // Get the units radio button for Metric
        await getByLabelText('Metric').click()

        // Get the height (cm) input field
        await getByLabelText('Centimetres').fill(heightVal)

        // Get the weight (kg) input field
        await getByLabelText('Kilograms').fill(weightVal)

        // Click the Calculate button and watch magic happen.
        await getByRole('button').getByText('Calculate').click()

        // Check that results display
        await expect.element(getByText(/^Your BMI is$/)).toBeInTheDocument()
        await expect.element(getByText(bmiResult)).toBeInTheDocument()
        await expect.element(getByText(/^Your BMI is in the/)).toHaveTextContent(bmiCategory)
    })
})
