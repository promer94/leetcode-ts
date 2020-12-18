/**
 * @index 34
 * @title 在排序数组中查找元素的第一个和最后一个位置
 * @difficulty 中等
 * @tags array,binary-search
 * @draft false
 * @link https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/
 * @frontendId 34
 */

export function searchRange(nums: number[], target: number): number[] {
  if (target < nums[0] || target > nums[nums.length - 1]) {
    return [-1, -1]
  }

  let low = -1
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      low = i
      break
    }
  }
  if (low === -1) return [-1, -1]
  let high = -1
  for (let i = nums.length - 1; i >= low; i--) {
    if (nums[i] === target) {
      high = i
      break
    }
  }
  return [low, high]
}
