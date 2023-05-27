import { searchRange } from './solve_0034'
it('solve_34 should pass', () => {
  expect(searchRange([5, 7, 7, 8, 8, 10], 8)).toStrictEqual([3, 4])
  expect(searchRange([5, 7, 7, 8, 8, 10], 6)).toStrictEqual([-1, -1])
  expect(searchRange([5, 7, 7, 8, 8, 10], 5)).toStrictEqual([0, 0])
})
