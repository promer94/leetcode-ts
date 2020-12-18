/**
 * @index 290
 * @title 单词规律
 * @difficulty 简单
 * @tags hash-table
 * @draft false
 * @link https://leetcode-cn.com/problems/word-pattern/
 * @frontendId 290
 */

export function wordPattern(pattern: string, s: string): boolean {
  const patternMap = new Map<string, string>()
  const wordMap = new Map<string, string>()
  const sArr = s.split(' ')
  if (pattern.length !== sArr.length) {
    return false
  }
  for (let i = 0; i < sArr.length; i++) {
    if (
      (patternMap.has(sArr[i]) && patternMap.get(sArr[i]) !== pattern[i]) ||
      (wordMap.has(pattern[i]) && wordMap.get(pattern[i]) !== sArr[i])
    ) {
      return false
    } else {
      patternMap.set(sArr[i], pattern[i])
      wordMap.set(pattern[i], sArr[i])
    }
  }
  return true
}
