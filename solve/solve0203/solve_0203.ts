/**
 * @index 203
 * @title 移除链表元素
 * @difficulty 简单
 * @tags linked-list
 * @draft false
 * @link https://leetcode-cn.com/problems/remove-linked-list-elements/
 * @frontendId 203
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

function removeElements(head: ListNode | null, val: number): ListNode | null {
  if (head === null) return head
  const dummy = new ListNode(-1)
  dummy.next = head
  let prev = dummy
  let current = dummy.next
  //   1 2 5 7
  // p c
  //   p c
  //   p   c
  while (current !== null) {
    if (current.val === val) {
      prev.next = current.next
      current = current.next
    } else {
      prev = prev.next
      current = current.next
    }
  }
  return dummy.next
}
