/**
 * @index 1813
 * @title 删除子数组的最大得分
 * @difficulty 中等
 * @tags two-pointers
 * @draft false
 * @link https://leetcode-cn.com/problems/maximum-erasure-value/
 * @frontendId 1695
 */

export function maximumUniqueSubarray(nums: number[]): number {
  const hashSet = new Set<number>()
  let left = 0
  let result = 0
  let sum = 0
  for (let right = 0; right < nums.length; right++) {
    sum += nums[right]
    while (hashSet.has(nums[right])) {
      sum -= nums[left]
      hashSet.delete(nums[left])
      left += 1
    }
    hashSet.add(nums[right])
    result = Math.max(result, sum)
  }
  return result
}
