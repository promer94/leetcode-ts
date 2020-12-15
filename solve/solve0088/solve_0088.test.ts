import { merge } from './solve_0088'

it('solve_88 should pass', () => {
  const num1 = [1, 2, 3, 0, 0, 0]
  const m = 3
  const num2 = [2, 5, 6]
  const n = 3
  merge(num1, m, num2, n)
  expect(num1).toEqual([1, 2, 2, 3, 5, 6])
})
