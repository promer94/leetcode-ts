/**
 * @index 387
 * @title 字符串中的第一个唯一字符
 * @difficulty 简单
 * @tags hash-table,string
 * @draft false
 * @link https://leetcode-cn.com/problems/first-unique-character-in-a-string/
 * @frontendId 387
 */

export function firstUniqChar(s: string): number {
  const hashSet = Array.from({ length: 26 }).fill(-1) as number[]
  for (let i = 0; i < s.length; i++) {
    hashSet[s[i].charCodeAt(0) - 'a'.charCodeAt(0)] += 1
  }
  for (let i = 0; i < s.length; i++) {
    if (hashSet[s[i].charCodeAt(0) - 'a'.charCodeAt(0)] === 0) {
      return i
    }
  }
  return -1
}
