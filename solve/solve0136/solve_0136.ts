/**
 * @index 136
 * @title 只出现一次的数字
 * @difficulty 简单
 * @tags bit-manipulation,hash-table
 * @draft false
 * @link https://leetcode-cn.com/problems/single-number/
 * @frontendId 136
 */

export function singleNumber(nums: number[]): number {
  let flag = 0
  for (let i = 0; i < nums.length; i++) {
    flag = flag ^ nums[i]
  }
  return flag
}

/**
 * 对于 任意数字 和 0 xor 操作是本身
 * 任意数字 与 自身 xor 为 0
 */
