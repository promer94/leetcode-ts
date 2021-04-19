/**
 * @index 1206
 * @title 航班预订统计
 * @difficulty 中等
 * @tags array,math
 * @draft false
 * @link https://leetcode-cn.com/problems/corporate-flight-bookings/
 * @frontendId 1109
 */

export function corpFlightBookings(bookings: number[][], n: number): number[] {
  const diff = new Array(n).fill(0)
  for (let i = 0; i < bookings.length; i++) {
    insert(diff, bookings[i][2], bookings[i][0] - 1, bookings[i][1] - 1)
  }
  const result = [diff[0]]
  for (let i = 1; i < n; i++) {
    result[i] = result[i - 1] + diff[i]
  }
  return result
}

function insert(diff: number[], num: number, i: number, j: number) {
  diff[i] += num
  diff[j + 1] -= num
}
console.log(
  corpFlightBookings(
    [
      [1, 2, 10],
      [2, 3, 20],
      [2, 5, 25],
    ],
    5
  )
)
