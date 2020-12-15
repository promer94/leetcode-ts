import { containsDuplicate } from './solve_0217'

it('solve_217 should pass', () => {
  const case1 = [1, 2, 3]
  const case2 = [1, 2, 2]
  expect(containsDuplicate(case1)).toBe(false)
  expect(containsDuplicate(case2)).toBe(true)
})
