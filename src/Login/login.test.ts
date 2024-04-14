import { expect, test } from 'vitest'
import { sum } from './login'

test('shoud return 1+2=3', () => {
       expect(sum(1, 2)).toBe(3)
})