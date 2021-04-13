/**
 * @index 19
 * @title 删除链表的倒数第 N 个结点
 * @difficulty 中等
 * @tags linked-list,two-pointers
 * @draft false
 * @link https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/
 * @frontendId 19
 */

export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

export function removeNthFromEnd(head: ListNode | null, n: number) {
  if (head === null) return head
  const node = new ListNode()
  node.next = head
  let left = node
  function find(head: ListNode, n: number): number {
    if (head === null) return 0
    const current = find(head.next, n) + 1
    if (current === n + 1) {
      left = head
    }
    return current
  }
  find(node, n)
  left.next = left.next.next
  return node.next
}
