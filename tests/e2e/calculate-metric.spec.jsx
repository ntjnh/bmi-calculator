import { expect, test } from 'vitest'
import { render } from 'vitest-browser-react'
import App from '../../src/App'

test('calculates BMI based on metric height and weight', async () => {
    const screen = render(<App />)

    // Fields
    const metric = screen.getByLabelText('Metric')
    const cm = screen.getByLabelText('Centimetres')
    const kg = screen.getByLabelText('Kilograms')
    const calcButton = screen.getByRole('button').getByText('Calculate')
    const resetButton = screen.getByRole('button').getByText('Reset')

    // Reset button should be unclickable
    await expect.element(resetButton).toBeDisabled()

    // Set units to metric
    await metric.click()
    await expect.element(metric).toBeChecked()

    // Fill in height (cm) and weight (kg)
    await cm.fill('155')
    await kg.fill('52')

    // Calculate the BMI
    await calcButton.click()

    // Check results display correctly
    await expect.element(screen.getByText(/^Your BMI is$/)).toBeInTheDocument()
    await expect.element(screen.getByText(21.6)).toBeInTheDocument()
    await expect.element(screen.getByText(/^Your BMI is in the/)).toHaveTextContent('healthy weight')

    // Reset the form
    await resetButton.click()
    await expect.element(cm).not.toHaveValue()
    await expect.element(kg).not.toHaveValue()
    await expect.element(screen.getByText(/^Your BMI is$/)).not.toBeInTheDocument()
    await expect.element(screen.getByText('Welcome!')).toBeInTheDocument()
    await expect.element(resetButton).toBeDisabled()
})
