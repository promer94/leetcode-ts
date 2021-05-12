/**
 * @index 53
 * @title 最大子序和
 * @difficulty 简单
 * @tags array,divide-and-conquer,dynamic-programming
 * @draft false
 * @link https://leetcode-cn.com/problems/maximum-subarray/
 * @frontendId 53
 */

export function maxSubArray(nums: number[]): number {
  if (nums.length === 1) return nums[0]
  let max = Number.MIN_SAFE_INTEGER
  let prev = max
  for (let i = 0; i < nums.length; i++) {
    prev = Math.max(prev + nums[i], nums[i])
    max = Math.max(prev, max)
  }
  return max
}
