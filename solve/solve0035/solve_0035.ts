/**
 * @index 35
 * @title 搜索插入位置
 * @difficulty 简单
 * @tags array,binary-search
 * @draft false
 * @link https://leetcode-cn.com/problems/search-insert-position/
 * @frontendId 35
 */

// 找到第一个大于等于 target 的位置
// right 的 位置可以为 nums.length
export function searchInsert(nums: number[], target: number): number {
  let l = 0
  let r = nums.length
  while (l < r) {
    const mid = (l + r) >> 1
    if (nums[mid] >= target) r = mid
    else l = mid + 1
  }
  return l
}
