/**
 * @index 49
 * @title 字母异位词分组
 * @difficulty 中等
 * @tags hash-table,string
 * @draft false
 * @link https://leetcode-cn.com/problems/group-anagrams/
 * @frontendId 49
 */

export function groupAnagrams(strs: string[]): string[][] {
  const map: Map<string, string[]> = new Map()
  strs.forEach((v) => {
    const key = Array.from(v).sort().join('')
    if (map.has(key)) {
      map.set(key, map.get(key).concat(v))
    } else {
      map.set(key, [v])
    }
  })
  return Array.from(map.values())
}

/**
 * 题目的核心在于对于一个单词快速生成它的一个 key
 * 可以通过对单词字母排序
 * 可以通过记录每个单词里 26 个字母的出现数量
 */
