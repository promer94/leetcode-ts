/**
 * @index 283
 * @title 移动零
 * @difficulty 简单
 * @tags array,two-pointers
 * @draft false
 * @link https://leetcode-cn.com/problems/move-zeroes/
 * @frontendId 283
 */

function moveZeroes(nums: number[]): void {
  let j = 0
  // 记录一共有几个不为 0 的数
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[j++] = nums[i]
    }
  }
  // 则倒数 nums.length - j 个数都为 0
  for (let i = j; i < nums.length; i++) {
    nums[i] = 0
  }
}
