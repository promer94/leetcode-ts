/**
 * @index 1605
 * @title 制作 m 束花所需的最少天数
 * @difficulty 中等
 * @tags array,binary-search
 * @draft false
 * @link https://leetcode-cn.com/problems/minimum-number-of-days-to-make-m-bouquets/
 * @frontendId 1482
 */

export function minDays(bloomDay: number[], m: number, k: number): number {
  if (bloomDay.length < m * k) return -1
  let l = 1
  let r = Math.max(...bloomDay)
  while (l < r) {
    const mid = (l + r) >> 1
    if (check(bloomDay, mid, m, k)) r = mid
    else l = mid + 1
  }
  return l
}

function check(
  bloomDay: number[],
  days: number,
  m: number,
  k: number
): boolean {
  let j = 0
  let flower = 0
  for (let i = 0; i < bloomDay.length && j < m; i++) {
    if (bloomDay[i] <= days) {
      flower += 1
      if (flower === k) {
        j += 1
        flower = 0
      }
    } else {
      flower = 0
    }
  }
  return j >= m
}

console.log(minDays([7, 7, 7, 7, 12, 7, 7], 2, 3))
