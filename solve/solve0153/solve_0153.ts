/**
 * @index 153
 * @title 寻找旋转排序数组中的最小值
 * @difficulty 中等
 * @tags array,binary-search
 * @draft false
 * @link https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array/
 * @frontendId 153
 */

export function findMin(nums: number[]): number {
  let l = 0
  let r = nums.length - 1
  while (l < r) {
    const mid = (l + r + 1) >> 1
    if (nums[mid] >= nums[0]) l = mid
    else r = mid - 1
  }
  if (l === nums.length - 1) {
    return nums[0]
  }
  return nums[l + 1]
}
