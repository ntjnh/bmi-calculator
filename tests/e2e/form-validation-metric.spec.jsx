import { describe, expect, test } from 'vitest'
import { render } from 'vitest-browser-react'
import App from '../../src/App'

describe.each([
    {
        filledField: 'Centimetres',
        filledFieldValue: '155',
        blankField: 'Kilograms',
        blankFieldLabel: 'Weight'
    },
    {
        filledField: 'Kilograms',
        filledFieldValue: '52',
        blankField: 'Centimetres',
        blankFieldLabel: 'Height'
    }
])('calculator error handling', ({
    filledField,
    blankField,
    filledFieldValue,
    blankFieldLabel
}) => {
    test(`displays appropriate error messages when ${blankFieldLabel} is not filled in`, async () => {
        const screen = render(<App />)
        const errorMessage = screen.getByRole('alert')
    
        await screen.getByLabelText('Metric').click()
        await screen.getByLabelText(filledField).fill(filledFieldValue)
    
        await screen.getByRole('button').getByText('Calculate').click()
    
        /* Check error handling */
        await expect.element(screen.getByLabelText(blankField)).not.toHaveValue()
    
        await expect.element(errorMessage).toBeInTheDocument()
        await expect.element(errorMessage).toHaveTextContent(`${blankFieldLabel} cannot be blank.`)
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
