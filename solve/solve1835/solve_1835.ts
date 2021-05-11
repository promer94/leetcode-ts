/**
 * @index 1835
 * @title 解码异或后的排列
 * @difficulty 中等
 * @tags bit-manipulation
 * @draft false
 * @link https://leetcode-cn.com/problems/decode-xored-permutation/
 * @frontendId 1734
 */

function decode(encoded: number[]): number[] {
  const n = encoded.length + 1
  let total = 0
  for (let i = 1; i <= n; i++) {
    total ^= i
  }
  let odd = 0
  for (let i = 1; i < n - 1; i += 2) {
    odd ^= encoded[i]
  }
  const result = []
  result[0] = total ^ odd
  for (let i = 0; i < n - 1; i++) {
    result[i + 1] = result[i] ^ encoded[i]
  }
  return result
}
