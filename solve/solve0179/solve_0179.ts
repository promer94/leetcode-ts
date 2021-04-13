/**
 * @index 179
 * @title 最大数
 * @difficulty 中等
 * @tags sort
 * @draft false
 * @link https://leetcode-cn.com/problems/largest-number/
 * @frontendId 179
 */

export function largestNumber(nums: number[]): string {
  nums.sort((x, y) => {
    let sx = 10,
      sy = 10
    while (sx <= x) {
      sx *= 10
    }
    while (sy <= y) {
      sy *= 10
    }
    return sx * y + x - (sy * x + y)
  })
  if (nums[0] === 0) {
    return '0'
  }
  return nums.join('')
}
