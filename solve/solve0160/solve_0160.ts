/**
 * @index 160
 * @title 相交链表
 * @difficulty 简单
 * @tags linked-list
 * @draft false
 * @link https://leetcode-cn.com/problems/intersection-of-two-linked-lists/
 * @frontendId 160
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

function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  if (!headA || !headB) return null
  if (!headA && !headB) return null
  let a = headA
  let b = headB
  while (a.next !== null) {
    a = a.next
  }
  while (b.next !== null) {
    b = b.next
  }
  if (a.val !== b.val) return null
  a = headA
  b = headB
  while (a !== b) {
    if (a.next !== null) {
      a = a.next
    } else {
      a = headB
    }
    if (b.next !== null) {
      b = b.next
    } else {
      b = headA
    }
  }
  return a
}
