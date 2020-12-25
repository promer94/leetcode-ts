/**
 * @index 455
 * @title 分发饼干
 * @difficulty 简单
 * @tags greedy
 * @draft false
 * @link https://leetcode-cn.com/problems/assign-cookies/
 * @frontendId 455
 */

export function findContentChildren(g: number[], s: number[]): number {
  if (s.length === 0) return 0
  g.sort((a, b) => a - b)
  s.sort((a, b) => a - b)

  let count = 0
  for (let i = 0, j = 0; i < g.length && j < s.length; i++, j++) {
    while (j < s.length && g[i] > s[j]) {
      j++
    }
    if (j < s.length) {
      count++
    }
  }
  return count
}
