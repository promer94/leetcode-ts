/**
 * @index 88
 * @title 合并两个有序数组
 * @difficulty 简单
 * @tags array,two-pointers
 * @draft false
 * @link https://leetcode-cn.com/problems/merge-sorted-array/
 * @frontendId 88
 */

export function merge(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
): void {
  let mP = m - 1
  let nP = n - 1
  let index = m + n - 1
  while (mP >= 0 && nP >= 0) {
    if (nums1[mP] <= nums2[nP]) {
      nums1[index] = nums2[nP]
      nP -= 1
    } else {
      nums1[index] = nums1[mP]
      mP -= 1
    }
    index -= 1
  }
  if (mP < 0) {
    for (let i = index; i >= 0; i--) {
      nums1[i] = nums2[nP]
      nP -= 1
    }
  }
}
