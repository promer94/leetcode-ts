import { isValid } from './solve_0020'
it('solve_20 should pass', () => {
  const string = '()'
  expect(isValid(string)).toBe(true)
})
