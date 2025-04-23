import { expect, test } from 'vitest'
import range from '../../src/lib/range'

test('calculates healthy weight range for height of 155cm', () => {
    expect(range(155)).toStrictEqual([44.45, 59.82])
})
