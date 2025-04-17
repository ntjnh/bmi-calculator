import { describe, expect, test } from 'vitest'
import { render } from 'vitest-browser-react'
import App from '../../src/App'

describe('bmi calculator', () => {
    const { getByLabelText, getByRole, getByText } = render(<App />)

    test('displays the calculator and information panels', async () => {
        // assert initial state
        await expect.element(getByText('BMI Calculator')).toBeInTheDocument()
    })

    test('calculates BMI based on metric height and weight', async () => {
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

    test('calculates BMI based on imperial height and weight', async () => {
        const heightFt = '6'
        const heightIn = '2'
        const weightSt = '12'
        const weightLbs = '5.5'
        const bmiResult = '22.3'
        const bmiCategory = 'healthy weight'

        // Get the units radio button for Imperial
        await getByLabelText('Imperial').click()

        // Get the height (ft/in) input fields
        await getByLabelText('Feet').fill(heightFt)
        await getByLabelText('Inches').fill(heightIn)

        // Get the weight (st/lbs) input fields
        await getByLabelText('Stone').fill(weightSt)
        await getByLabelText('Pounds').fill(weightLbs)

        // Click the Calculate button and watch magic happen.
        await getByRole('button').getByText('Calculate').click()

        // Check that results display
        await expect.element(getByText(/^Your BMI is$/)).toBeInTheDocument()
        await expect.element(getByText(bmiResult)).toBeInTheDocument()
        await expect.element(getByText(/^Your BMI is in the/)).toHaveTextContent(bmiCategory)
    })
})
