import { expect, test } from 'vitest'
import calculate from '../src/lib/calculate'

test('calculates a BMI of 21.6 from 52kg weight and 1.55m height', () => {
    expect(calculate(1.55, 52)).toBe(21.6)
})
