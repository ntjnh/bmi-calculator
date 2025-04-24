import { expect, test } from 'vitest'
import { render } from 'vitest-browser-react'
import App from '../../src/App'

test('calculates BMI based on metric height and weight', async () => {
    const screen = render(<App />)

    // Set units to metric
    await screen.getByLabelText('Metric').click()

    // Fill in height (cm) and weight (kg)
    await screen.getByLabelText('Centimetres').fill('155')
    await screen.getByLabelText('Kilograms').fill('52')

    // Calculate the BMI
    await screen.getByRole('button').getByText('Calculate').click()

    // Check results display correctly
    await expect.element(screen.getByText(/^Your BMI is$/)).toBeInTheDocument()
    await expect.element(screen.getByText(21.6)).toBeInTheDocument()
    await expect.element(screen.getByText(/^Your BMI is in the/)).toHaveTextContent('healthy weight')
})
