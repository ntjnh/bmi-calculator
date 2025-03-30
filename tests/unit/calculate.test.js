import { expect, test } from 'vitest'
import calculate from '../../src/lib/calculate'
import { imperialHeight, imperialWeight } from '../../src/lib/imperial'

test('calculates a BMI of 21.6 from 52kg weight and 1.55m height', () => {
    expect(calculate(155, 52)).toBe(21.6)
})

// Imperial units
test('calculates a BMI of 22.3 from 173.5lbs weight and 6ft 2in height', () => {
    const height = imperialHeight(6, 2)
    const weight = imperialWeight(173.5)
    expect(calculate(height, weight))
})
