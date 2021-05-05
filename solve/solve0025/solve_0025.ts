/**
 * @index 25
 * @title K 个一组翻转链表
 * @difficulty 困难
 * @tags linked-list
 * @draft false
 * @link https://leetcode-cn.com/problems/reverse-nodes-in-k-group/
 * @frontendId 25
 */

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function reverse(a: ListNode, b: ListNode): ListNode {
  let prev = null
  let current = a
  while (current !== b) {
    const temp = current.next
    current.next = prev
    prev = current
    current = temp
  }
  return prev
}

export function reverseKGroup(
  head: ListNode | null,
  k: number
): ListNode | null {
  if (head === null) {
    return null
  }
  let right = head
  for (let i = 0; i < k; i++) {
    if (right === null) return head
    right = right.next
  }
  const newHead = reverse(head, right)
  head.next = reverseKGroup(right, k)
  return newHead
}
