/**
 * @index 82
 * @title 删除排序链表中的重复元素 II
 * @difficulty 中等
 * @tags linked-list
 * @draft false
 * @link https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list-ii/
 * @frontendId 82
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
  const node = new ListNode()
  node.next = head
  const a = node
  let b = a.next
  let c = b.next
  while (b !== null && c !== null) {
    if (b.val === c.val) {
      const val = b.val
      while (b !== null && b.val === val) {
        b = c.next
      }
      c = b.next
    } else {
      b = c
      c = c.next
    }
    a.next = b
  }

  return node.next
}
