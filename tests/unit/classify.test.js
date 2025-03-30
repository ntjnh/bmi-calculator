import { expect, test } from 'vitest'
import classify from '../../src/lib/classify'

test('returns underweight for a bmi of 16', () => {
    expect(classify(16)).toBe('underweight')
})

test('returns healthy weight for a bmi of 21', () => {
    expect(classify(21)).toBe('healthy weight')
})

test('returns overweight for a bmi of 28', () => {
    expect(classify(28)).toBe('overweight')
})

test('returns obese for a bmi of 37', () => {
    expect(classify(37)).toBe('obese')
})
