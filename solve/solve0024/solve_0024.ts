/**
 * @index 24
 * @title 两两交换链表中的节点
 * @difficulty 中等
 * @tags recursion,linked-list
 * @draft false
 * @link https://leetcode-cn.com/problems/swap-nodes-in-pairs/
 * @frontendId 24
 */

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function swapPairs(head: ListNode | null): ListNode | null {
  if (head === null) return head
  const node = new ListNode()
  node.next = head

  for (let a = node; ; ) {
    let flag = a
    for (let i = 0; i < 2; i++) {
      if (flag === null) return node.next
      flag = flag.next
    }
    if (flag === null) return node.next
    let b = a.next
    let c = b.next
    for (let i = 0; i < 1; i++) {
      const temp = c.next
      c.next = b
      b = c
      c = temp
    }
    const temp = a.next
    a.next = b
    temp.next = c
    a = temp
  }

  return node.next
}
