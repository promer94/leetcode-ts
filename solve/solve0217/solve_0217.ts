/**
 * @index 217
 * @title 存在重复元素
 * @difficulty 简单
 * @tags array,hash-table
 * @draft false
 * @link https://leetcode-cn.com/problems/contains-duplicate/
 * @frontendId 217
 */

export function containsDuplicate(nums: number[]): boolean {
  nums.sort((a, b) => a - b)
  const n = nums.length
  for (let i = 0; i < n - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      return true
    }
  }
  return false
}
