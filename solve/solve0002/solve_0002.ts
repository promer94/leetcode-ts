/**
 * @index 2
 * @title 两数相加
 * @difficulty 中等
 * @tags recursion,linked-list,math
 * @draft false
 * @link https://leetcode-cn.com/problems/add-two-numbers/
 * @frontendId 2
 */

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const temp = new ListNode(-1)
  if (l1 === null) return l2
  if (l2 === null) return l1
  let p = l1
  let q = l2
  let plus = 0
  let current = temp
  while (p !== null || q !== null) {
    const l = p !== null ? p.val : 0
    const r = q !== null ? q.val : 0
    const val = l + r + plus
    plus = 0
    if (val >= 10) {
      plus += 1
      current.next = new ListNode(val - 10)
    } else {
      current.next = new ListNode(val)
    }
    if (p !== null) {
      p = p.next
    }
    if (q !== null) {
      q = q.next
    }
    current = current.next
  }
  if (plus > 0) current.next = new ListNode(1)
  return temp.next
}
