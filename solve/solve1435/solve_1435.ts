/**
 * @index 1435
 * @title 子数组异或查询
 * @difficulty 中等
 * @tags bit-manipulation
 * @draft false
 * @link https://leetcode-cn.com/problems/xor-queries-of-a-subarray/
 * @frontendId 1310
 */

export function xorQueries(arr: number[], queries: number[][]): number[] {
  const sumArr = [0]
  for (let i = 1; i <= arr.length; i++) {
    // 构建一个前缀 xor 数组
    sumArr[i] = sumArr[i - 1] ^ arr[i - 1]
  }
  const result = []
  for (let i = 0; i < queries.length; i++) {
    const left = queries[i][0]
    const right = queries[i][1] + 1
    // 快速计算区间和
    const value = sumArr[right] ^ sumArr[left]
    result.push(value)
  }
  return result
}
