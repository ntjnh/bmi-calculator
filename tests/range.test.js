import { expect, test } from 'vitest'
import range from '../src/lib/range'

test('calculates healthy weight range for height of 1.55m', () => {
    expect(range(1.55)).toStrictEqual([44.45, 59.82])
})
