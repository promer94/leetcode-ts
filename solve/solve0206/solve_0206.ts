/**
 * @index 206
 * @title 反转链表
 * @difficulty 简单
 * @tags linked-list
 * @draft false
 * @link https://leetcode-cn.com/problems/reverse-linked-list/
 * @frontendId 206
 */

export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

export function reverseList(head: ListNode | null): ListNode | null {
  if (head) {
    let prev = null
    let current = head
    while (current.next) {
      const temp = current.next
      current.next = prev
      prev = current
      current = temp
    }
    return prev
  }
  return null
}
