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
      // 如果是左边括号 那么往栈中添加一个反向括号
      stack.push(pair[strArr[i]])
    } else {
      // 如果是右边括号 那么检查栈顶元素 如果栈顶元素不同 则不是有效的括号
      if (stack.length === 0 || stack[stack.length - 1] !== strArr[i]) {
        return false
      }
      // 相同则将该括号从栈中移除
      stack.pop()
    }
  }
  // 如果栈中在最后为空 则说明是有效的括号
  return stack.length === 0
}
