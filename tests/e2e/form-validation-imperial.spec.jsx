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

describe.each([
    {
        heightFtFieldValue: '11',
        heightInFieldValue: '19',
        weightStFieldValue: '99',
        weightLbsFieldValue: '20',
        invalidField: 'Feet',
        invalidField2: 'Stone',
        errorText: 'Please enter a height between 3 and 9 feet and a weight between 3 and 71 stone.'
    },
    {
        heightFtFieldValue: '2',
        heightInFieldValue: '0',
        weightStFieldValue: '2',
        weightLbsFieldValue: '0',
        invalidField: 'Feet',
        invalidField2: 'Stone',
        errorText: 'Please enter a height between 3 and 9 feet and a weight between 3 and 71 stone.'
    },
    {
        heightFtFieldValue: '2',
        heightInFieldValue: '17',
        weightStFieldValue: '12',
        weightLbsFieldValue: '5',
        invalidField: 'Feet',
        errorText: 'Please enter a height between 3 feet and 9 feet. Inches must be between 0 and 11.'
    },
    {
        heightFtFieldValue: '6',
        heightInFieldValue: '2',
        weightStFieldValue: '88',
        weightLbsFieldValue: '99',
        invalidField: 'Pounds',
        errorText: 'Please enter a weight between 3 and 71 stone. Pounds must be between 0 and 13.'
    }
])('calculator error handling', ({
    heightFtFieldValue,
    heightInFieldValue,
    weightStFieldValue,
    weightLbsFieldValue,
    invalidField,
    invalidField2,
    errorText
}) => {
    test(`displays appropriate error messages when ${invalidField} is invalid`, async () => {
        const screen = render(<App />)
        const errorMessage = screen.getByRole('alert')
        const errorColour = 'oklch(0.505 0.213 27.518)'

        await screen.getByLabelText('Imperial').click()
        await screen.getByLabelText('Feet').fill(heightFtFieldValue)
        await screen.getByLabelText('Inches').fill(heightInFieldValue)
        await screen.getByLabelText('Stone').fill(weightStFieldValue)
        await screen.getByLabelText('Pounds').fill(weightLbsFieldValue)

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
