import { expect, test } from 'vitest'
import { render } from 'vitest-browser-react'
import App from '../../src/App'

test('calculates BMI based on imperial height and weight', async () => {
    const screen = render(<App />)
    const heightField = screen.getByLabelText('Feet')
    const weightField = screen.getByLabelText('Inches')
    const resetButton = screen.getByRole('button').getByText('Reset')

    // Set units to Imperial
    await screen.getByLabelText('Imperial').click()

    // Fill in height (ft/in)
    await heightField.fill('6')
    await weightField.fill('2')

    // Fill in weight (st/lbs)
    await screen.getByLabelText('Stone').fill('12')
    await screen.getByLabelText('Pounds').fill('5')

    // Calculate the BMI
    await screen.getByRole('button').getByText('Calculate').click()

    // Check results display correctly
    await expect.element(screen.getByText(/^Your BMI is$/)).toBeInTheDocument()
    await expect.element(screen.getByText(22.2)).toBeInTheDocument()
    await expect.element(screen.getByText(/^Your BMI is in the/)).toHaveTextContent('healthy weight')

    // Reset the form
    await resetButton.click()
    await expect.element(heightField).not.toHaveValue()
    await expect.element(weightField).not.toHaveValue()
    await expect.element(screen.getByText(/^Your BMI is$/)).not.toBeInTheDocument()
    await expect.element(screen.getByText('Welcome!')).toBeInTheDocument()
    await expect.element(resetButton).toBeDisabled()
})
