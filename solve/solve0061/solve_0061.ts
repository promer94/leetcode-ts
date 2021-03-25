/**
 * @index 61
 * @title 旋转链表
 * @difficulty 中等
 * @tags linked-list,two-pointers
 * @draft false
 * @link https://leetcode-cn.com/problems/rotate-list/
 * @frontendId 61
 */

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if (head === null || k === 0) return head
  // 虚拟头节点
  const node = new ListNode()
  node.next = head

  // 计算链表的长度
  let tail = node
  let length = 0
  while (tail.next !== null) {
    tail = tail.next
    length += 1
  }
  // 将链表首尾相连
  tail.next = node.next

  // 找到应该断开的节点
  let preHead = node.next
  for (let i = 0; i < length - (k % length) - 1; i++) {
    preHead = preHead.next
  }

  const newHead = preHead.next
  preHead.next = null
  node.next = newHead
  return node.next
}
