/**
 * @index 1056
 * @title 在 D 天内送达包裹的能力
 * @difficulty 中等
 * @tags array,binary-search
 * @draft false
 * @link https://leetcode-cn.com/problems/capacity-to-ship-packages-within-d-days/
 * @frontendId 1011
 */

function check(weights: number[], D: number, mid: number): boolean {
  let need = 1
  let current = 0
  for (const weight of weights) {
    if (current + weight > mid) {
      need++
      current = 0
    }
    current += weight
  }
  return need <= D
}

function shipWithinDays(weights: number[], D: number): number {
  let left = Math.max(...weights)
  let right = weights.reduce((a, b) => a + b)
  while (left < right) {
    const mid = (left + right) >> 1
    if (check(weights, D, mid)) {
      right = mid
    } else {
      left = mid + 1
    }
  }
  return left
}
