import { monotoneIncreasingDigits } from './solve_0738'

it('solve_738 should pass', () => {
  const case1 = 10
  const case2 = 1234
  const case3 = 332
  expect(monotoneIncreasingDigits(case1)).toEqual(9)
  expect(monotoneIncreasingDigits(case2)).toEqual(1234)
  expect(monotoneIncreasingDigits(case3)).toEqual(299)
})
