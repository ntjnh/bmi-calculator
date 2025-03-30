import { expect, test } from 'vitest'
import { imperialHeight, imperialWeight } from '../../src/lib/imperial'

test('converts height from 6ft 2in to 1.88m', () => {
    expect(imperialHeight(6, 2)).toBe(1.88)
})

test('converts weight from 160 lbs to 72.56kg', () => {
    expect(imperialWeight(160)).toBe(72.56)
})
