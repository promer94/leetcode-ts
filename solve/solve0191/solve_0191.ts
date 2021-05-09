/**
 * @index 191
 * @title 位1的个数
 * @difficulty 简单
 * @tags bit-manipulation
 * @draft false
 * @link https://leetcode-cn.com/problems/number-of-1-bits/
 * @frontendId 191
 */

export function hammingWeight(n: number): number {
  let count = 0
  while (n) {
    const sub = lowBit(n)
    if (sub < 0) {
      count += 1
      break
    }
    count += 1
    n -= sub
  }
  return count
}

function lowBit(n: number) {
  return n & -n
}
