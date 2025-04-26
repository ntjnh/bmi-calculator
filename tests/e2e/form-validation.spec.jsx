import { describe, expect, test } from 'vitest'
import { render } from 'vitest-browser-react'
import App from '../../src/App'

describe.each([
    { filled: 'Centimetres', notFilled: 'Kilograms', val: '155', field: 'Weight' },
    { filled: 'Kilograms', notFilled: 'Centimetres', val: '52', field: 'Height' }
])('calculator error handling ', ({ filled, notFilled, val, field }) => {
    test(`displays appropriate error messages when ${field} is not filled in`, async () => {
        const screen = render(<App />)
    
        const metric = screen.getByLabelText('Metric')
        const calcButton = screen.getByRole('button').getByText('Calculate')
    
        const errorMessage = screen.getByRole('alert')
    
        await metric.click()
    
        await screen.getByLabelText(filled).fill(val)
    
        await calcButton.click()
    
        /* Check error handling */
        await expect.element(screen.getByLabelText(notFilled)).not.toHaveValue()
    
        await expect.element(errorMessage).toBeInTheDocument()
        await expect.element(errorMessage).toHaveTextContent(`${field} cannot be blank.`)
        await expect.element(errorMessage).toHaveClass('error-msg')
        await expect.element(errorMessage).toHaveStyle({
            color: 'oklch(0.505 0.213 27.518)',
            fontWeight: '600'
        })
    
        // Error styling on the specific field
        await expect.element(screen.getByLabelText(notFilled)).toHaveStyle({
            borderColor: 'oklch(0.505 0.213 27.518)'
        })
    })
})
