/**
 * @index 26
 * @title 删除排序数组中的重复项
 * @difficulty 简单
 * @tags array,two-pointers
 * @draft false
 * @link https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/
 * @frontendId 26
 */

export function removeDuplicates(nums: number[]): number {
  if (nums.length === 0) return 0
  let i = 0
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++
      nums[i] = nums[j]
    }
  }
  return i + 1
}
