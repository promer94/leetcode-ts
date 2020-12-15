/**
 * @index 738
 * @title 单调递增的数字
 * @difficulty 中等
 * @tags greedy
 * @draft false
 * @link https://leetcode-cn.com/problems/monotone-increasing-digits/
 * @frontendId 738
 */

export function monotoneIncreasingDigits(N: number): number {
  const numString = Array.from(N.toString()).map((v) => parseInt(v, 10))
  let j = 1
  /** 找到第一个非单调递增的位置 */
  while (j < numString.length && numString[j - 1] <= numString[j]) {
    j++
  }

  if (j < numString.length) {
    /** 如果数字是非单调递增的 */

    /** 只有当 numString[j - 1] > numString[j] 才能 减 1 */
    while (j > 0 && numString[j - 1] > numString[j]) {
      numString[j - 1] -= 1
      j -= 1
    }
    for (j += 1; j < numString.length; j++) {
      numString[j] = 9
    }
    return parseInt(numString.join(''))
  } else {
    /** 如果数字是单调递增的 直接返回原来的数字 */
    return N
  }
}
