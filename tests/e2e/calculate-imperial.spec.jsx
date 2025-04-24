import { expect, test } from 'vitest'
import { render } from 'vitest-browser-react'
import App from '../../src/App'

test('calculates BMI based on imperial height and weight', async () => {
    const screen = render(<App />)

    // Set units to Imperial
    await screen.getByLabelText('Imperial').click()

    // Fill in height (ft/in)
    await screen.getByLabelText('Feet').fill('6')
    await screen.getByLabelText('Inches').fill('2')

    // Fill in weight (st/lbs)
    await screen.getByLabelText('Stone').fill('12')
    await screen.getByLabelText('Pounds').fill('5')

    // Calculate the BMI
    await screen.getByRole('button').getByText('Calculate').click()

    // Check results display correctly
    await expect.element(screen.getByText(/^Your BMI is$/)).toBeInTheDocument()
    await expect.element(screen.getByText(22.2)).toBeInTheDocument()
    await expect.element(screen.getByText(/^Your BMI is in the/)).toHaveTextContent('healthy weight')
})
