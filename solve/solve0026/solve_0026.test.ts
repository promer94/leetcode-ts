import { removeDuplicates } from './solve_0026'
it('solve_26 should pass', () => {
  const a = [1, 1, 2]
  const result = removeDuplicates(a)
  expect(result).toBe(2)
  expect(a).toEqual([1, 2, 2])
})
