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

describe.each([
    {
        heightFieldValue: '400',
        weightFieldValue: '500',
        invalidField: 'Centimetres',
        invalidField2: 'Kilograms',
        errorText: 'Please enter a height between 91.44cm and 274.32cm and a weight between 24.95kg and 453.59kg.'
    },
    {
        heightFieldValue: '40',
        weightFieldValue: '10',
        invalidField: 'Kilograms',
        invalidField2: 'Centimetres',
        errorText: 'Please enter a height between 91.44cm and 274.32cm and a weight between 24.95kg and 453.59kg.'
    },
    {
        heightFieldValue: '17',
        weightFieldValue: '69',
        invalidField: 'Centimetres',
        errorText: 'Please enter a height between 91.44cm and 274.32cm.'
    },
    {
        heightFieldValue: '188',
        weightFieldValue: '999',
        invalidField: 'Kilograms',
        errorText: 'Please enter a weight between 24.95kg and 453.59kg.'
    }
])('calculator error handling', ({
    heightFieldValue,
    weightFieldValue,
    invalidField,
    invalidField2,
    errorText
}) => {
    test(`displays appropriate error messages when ${invalidField} is invalid`, async () => {
        const screen = render(<App />)
        const errorMessage = screen.getByRole('alert')
        const errorColour = 'oklch(0.505 0.213 27.518)'

        await screen.getByLabelText('Metric').click()
        await screen.getByLabelText('Centimetres').fill(heightFieldValue)
        await screen.getByLabelText('Kilograms').fill(weightFieldValue)

        await screen.getByRole('button').getByText('Calculate').click()

        await expect.element(errorMessage).toBeInTheDocument()
        await expect.element(errorMessage).toHaveTextContent(errorText)
        await expect.element(errorMessage).toHaveClass('error-msg')
        await expect.element(errorMessage).toHaveStyle({
            color: errorColour,
            fontWeight: '600'
        })

        await expect.element(screen.getByLabelText(invalidField)).toHaveStyle({
            borderColor: errorColour
        })

        if (invalidField2) {
            await expect.element(screen.getByLabelText(invalidField2)).toHaveStyle({
                borderColor: errorColour
            })
        }
    })
})
