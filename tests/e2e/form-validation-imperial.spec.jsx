import { describe, expect, test } from 'vitest'
import { render } from 'vitest-browser-react'
import App from '../../src/App'

describe.each([
    {
        filledField1: 'Feet',
        filledField2: 'Inches',
        filledFieldValue1: '6',
        filledFieldValue2: '2',
        blankField: 'Stone',
        blankFieldLabel: 'weight'
    },
    {
        filledField1: 'Stone',
        filledField2: 'Pounds',
        filledFieldValue1: '12',
        filledFieldValue2: '5',
        blankField: 'Feet',
        blankFieldLabel: 'height'
    }
])('calculator error handling', ({
    filledField1,
    filledField2,
    filledFieldValue1,
    filledFieldValue2,
    blankField,
    blankFieldLabel
}) => {
    test(`displays appropriate error messages when ${blankFieldLabel} is not filled in`, async () => {
        const screen = render(<App />)
        const errorMessage = screen.getByRole('alert')

        await screen.getByLabelText('Imperial').click()
        await screen.getByLabelText(filledField1).fill(filledFieldValue1)
        await screen.getByLabelText(filledField2).fill(filledFieldValue2)

        await screen.getByRole('button').getByText('Calculate').click()

        /* Check error handling */
        await expect.element(screen.getByLabelText(blankField)).not.toHaveValue()

        await expect.element(errorMessage).toBeInTheDocument()
        await expect.element(errorMessage).toHaveTextContent(`Please fill in both ${blankFieldLabel} fields.`)
        await expect.element(errorMessage).toHaveClass('error-msg')
        await expect.element(errorMessage).toHaveStyle({
            color: 'oklch(0.505 0.213 27.518)',
            fontWeight: '600'
        })

        // Error styling on the specific field
        await expect.element(screen.getByLabelText(blankField)).toHaveStyle({
            borderColor: 'oklch(0.505 0.213 27.518)'
        })
    })
})
