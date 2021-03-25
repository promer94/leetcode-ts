/**
 * @index 83
 * @title 删除排序链表中的重复元素
 * @difficulty 简单
 * @tags linked-list
 * @draft false
 * @link https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/
 * @frontendId 83
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

function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (head === null) return head
  const node = new ListNode(-1)
  node.next = head
  let a = node
  while (a.next !== null && a.next.next !== null) {
    if (a.next.val === a.next.next.val) {
      const val = a.next.val
      while (a.next !== null && a.next.val === val) {
        a.next = a.next.next
      }
    } else {
      a = a.next
    }
  }
  return node.next
}
