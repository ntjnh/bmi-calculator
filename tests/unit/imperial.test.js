import { expect, test } from 'vitest'
import { imperialHeight, imperialWeight } from '../../src/lib/imperial'

test('converts height from 6ft 2in to 188cm', () => {
    expect(imperialHeight(6, 2)).toBe(188)
})

test('converts weight from 11st 5lbs to 72.11kg', () => {
    expect(imperialWeight(11, 5)).toBe(72.11)
})
