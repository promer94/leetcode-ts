/**
 * @index 20
 * @title 有效的括号
 * @difficulty 简单
 * @tags stack,string
 * @draft false
 * @link https://leetcode-cn.com/problems/valid-parentheses/
 * @frontendId 20
 */

export function isValid(s: string): boolean {
  const strArr = Array.from(s)
  const stack = []
  const pair: Record<string, string> = {
    '(': ')',
    '[': ']',
    '{': '}',
  }
  for (let i = 0; i < strArr.length; i += 1) {
    if (strArr[i] === '(' || strArr[i] === '[' || strArr[i] === '{') {
      stack.push(pair[strArr[i]])
    } else {
      if (stack.length === 0 || stack[stack.length - 1] !== strArr[i]) {
        return false
      }
      stack.pop()
    }
  }
  return stack.length === 0
}
