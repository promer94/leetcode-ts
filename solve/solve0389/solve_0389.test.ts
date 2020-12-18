import { findTheDifference } from './solve_0389'

it('solve_389 should pass', () => {
  const result = findTheDifference('abcd', 'abcde')
  expect(result).toBe('e')
})
