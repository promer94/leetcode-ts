/**
 * @index 141
 * @title 环形链表
 * @difficulty 简单
 * @tags linked-list,two-pointers
 * @draft false
 * @link https://leetcode-cn.com/problems/linked-list-cycle/
 * @frontendId 141
 */

export /**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function hasCycle(head: ListNode | null): boolean {
  if (head === null) return false
  if (head.next === null) return false
  let slow = head
  let fast = head.next
  while (slow !== fast) {
    if (fast === null || fast.next === null) {
      return false
    }
    slow = slow.next
    fast = fast.next.next
  }
  return true
}
