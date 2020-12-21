/**
 * @index 3
 * @title 无重复字符的最长子串
 * @difficulty 中等
 * @tags hash-table,two-pointers,string,sliding-window
 * @draft false
 * @link https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
 * @frontendId 3
 */

export function lengthOfLongestSubstring(s: string): number {
  const hashSet = new Set()
  let result = 0
  let sum = 0
  let i = 0
  for (let j = 0; j < s.length; j++) {
    const c = s[j]
    sum += 1
    while (hashSet.has(c)) {
      sum -= 1
      hashSet.delete(s[i])
      i++
    }
    hashSet.add(c)
    result = Math.max(result, sum)
  }
  return result
}
