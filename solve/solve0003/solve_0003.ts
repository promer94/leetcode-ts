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
  let j = 0
  for (let i = 0; i < s.length; i++) {
    const c = s[i]
    while (hashSet.has(c)) {
      hashSet.delete(s[j])
      j++
    }
    hashSet.add(c)
    result = Math.max(result, i - j + 1)
  }
  return result
}
