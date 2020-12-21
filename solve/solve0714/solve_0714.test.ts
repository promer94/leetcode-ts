import { maxProfit } from './solve_0714'

it('solve_714 should pass', () => {
  const result = maxProfit([1, 3, 2, 8, 4, 9], 2)
  expect(result).toBe(8)
})
