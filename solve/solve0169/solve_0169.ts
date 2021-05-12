/**
 * @index 169
 * @title 多数元素
 * @difficulty 简单
 * @tags bit-manipulation,array,divide-and-conquer
 * @draft false
 * @link https://leetcode-cn.com/problems/majority-element/
 * @frontendId 169
 */

export function majorityElement(nums: number[]): number {
  let count = 0
  let result = null
  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      result = nums[i]
      count += 1
    } else if (result !== nums[i]) {
      count -= 1
    } else if (result === nums[i]) {
      count += 1
    }
  }
  return result
}
