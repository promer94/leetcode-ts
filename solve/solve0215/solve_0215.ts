/**
 * @index 215
 * @title 数组中的第K个最大元素
 * @difficulty 中等
 * @tags heap,divide-and-conquer
 * @draft false
 * @link https://leetcode-cn.com/problems/kth-largest-element-in-an-array/
 * @frontendId 215
 */

function findKthLargest(nums: number[], k: number): number {
  return quickSort(nums, 0, nums.length - 1, k)
}

function quickSort(nums: number[], l: number, r: number, k: number): number {
  if (l === r) return nums[l]
  let i = l - 1
  let j = r + 1
  const partition = nums[l]
  while (i < j) {
    while (nums[++i] > partition);
    while (nums[--j] < partition);
    if (i < j) {
      const temp = nums[i]
      nums[i] = nums[j]
      nums[j] = temp
    }
  }
  const length = j - l + 1
  if (k <= length) return quickSort(nums, l, j, k)
  return quickSort(nums, j + 1, r, k - length)
}
