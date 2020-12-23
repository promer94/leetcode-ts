/**
 * @index 1812
 * @title 重新格式化电话号码
 * @difficulty 简单
 * @tags string
 * @draft false
 * @link https://leetcode-cn.com/problems/reformat-phone-number/
 * @frontendId 1694
 */

export function reformatNumber(number: string): string {
  const cleanData = Array.from(number)
    .filter((v) => v !== ' ' && v !== '-')
    .join('')
  let result: string = ''
  for (let i = 0; i < cleanData.length; ) {
    if (i + 4 < cleanData.length) {
      result += cleanData.substr(i, 3)
      i += 3
      result += '-'
    } else {
      const left = cleanData.length - i
      if (left <= 3) {
        result += cleanData.substr(i, left)
        result += '-'
      } else {
        result += cleanData.substr(i, 2) + '-' + cleanData.substr(i + 2)
        result += '-'
      }
      i += 4
    }
  }
  return result.substr(0, result.length - 1)
}
