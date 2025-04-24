import { expect, test } from 'vitest'
import { render } from 'vitest-browser-react'
import App from '../../src/App'

test('displays the BMI calculator app', async () => {
    const screen = render(<App />)

    // Check for page heading
    await expect
        .element(screen.getByText('BMI Calculator'))
        .toBeInTheDocument()

    // Check for calculator form
    await expect
        .element(screen.getByText('Enter your details below'))
        .toBeInTheDocument()

    // Check for results area
    await expect
        .element(screen.getByText('Welcome!'))
        .toBeInTheDocument()
    
    // Check for categories table
    await expect
        .element(screen.getByText('Your BMI result falls into one of these weight categories:'))
        .toBeInTheDocument()
    
    // Check for details area
    await expect
        .element(screen.getByText('Your BMI is calculated by dividing your weight in kilograms by your height in metres squared.'))
        .toBeInTheDocument()
})
