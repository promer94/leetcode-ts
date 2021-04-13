/**
 * @index 33
 * @title 搜索旋转排序数组
 * @difficulty 中等
 * @tags array,binary-search
 * @draft false
 * @link https://leetcode-cn.com/problems/search-in-rotated-sorted-array/
 * @frontendId 33
 */

export function search(nums: number[], target: number): number {
  if (nums.length === 0) return -1
  let l = 0
  let r = nums.length - 1
  while (l < r) {
    const mid = (l + r + 1) >> 1
    if (nums[mid] >= nums[0]) l = mid
    else r = mid - 1
  }
  if (target >= nums[0]) {
    l = 0
  } else {
    l = r + 1
    r = nums.length - 1
  }
  while (l < r) {
    const mid = (l + r) >> 1
    if (nums[mid] >= target) r = mid
    else l = mid + 1
  }
  if (nums[r] === target) return r
  return -1
}
