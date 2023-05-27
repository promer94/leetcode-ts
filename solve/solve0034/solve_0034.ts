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
  const length = nums.length - 1
  if (target < nums[0] || target > nums[length]) {
    return [-1, -1]
  }
  let l = 0
  let r = length
  // 1 2 2 3 4 5 6
  //   *
  while (l < r) {
    let mid = l + r >> 1
    if (nums[mid] >= target) {
      r = mid
    } else {
      l = mid + 1
    }
  }
  if (nums[l] !== target) return [-1, -1]
  let left = l
  r = length
  // 1 2 2 3 4 5 6
  //     *
  while (l < r) {
    let mid = l + r + 1 >> 1
    if (nums[mid] <= target) {
      l = mid
    } else {
      r = mid - 1
    }
  }
  return [left, l]
}
