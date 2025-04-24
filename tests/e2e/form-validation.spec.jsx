import { expect, test } from 'vitest'
import { render } from 'vitest-browser-react'
import App from '../../src/App'

test('displays appropriate error messages for invalid inputs', async () => {
    const screen = render(<App />)

    const metric = screen.getByLabelText('Metric')
    const cm = screen.getByLabelText('Centimetres')
    const kg = screen.getByLabelText('Kilograms')
    const calcButton = screen.getByRole('button').getByText('Calculate')

    const errorMessage = screen.getByRole('alert')

    await metric.click()

    await cm.fill('155')
    // await kg.fill('52')

    // Calculate the BMI
    await calcButton.click()

    /* Check error handling */
    await expect.element(kg).not.toHaveValue()

    await expect.element(errorMessage).toBeInTheDocument()
    await expect.element(errorMessage).toHaveTextContent('Weight cannot be blank.')
    await expect.element(errorMessage).toHaveClass('error-msg')
    await expect.element(errorMessage).toHaveStyle({
        color: 'oklch(0.505 0.213 27.518)',
        fontWeight: '600'
    })

    // Error styling on specific field
    await expect.element(kg).toHaveStyle({
        borderColor: 'oklch(0.505 0.213 27.518)'
    })

    // Error styling and text should be gone after resubmitting
})
