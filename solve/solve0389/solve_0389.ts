/**
 * @index 389
 * @title 找不同
 * @difficulty 简单
 * @tags bit-manipulation,hash-table
 * @draft false
 * @link https://leetcode-cn.com/problems/find-the-difference/
 * @frontendId 389
 */

export function findTheDifference(s: string, t: string): string {
  let as = 0
  let at = 0
  for (let i = 0; i < s.length; i++) {
    as += s.charCodeAt(i)
  }
  for (let i = 0; i < t.length; i++) {
    at += t.charCodeAt(i)
  }
  return String.fromCharCode(at - as)
}
