/**
 * @index 23
 * @title 合并K个升序链表
 * @difficulty 困难
 * @tags heap,linked-list,divide-and-conquer
 * @draft false
 * @link https://leetcode-cn.com/problems/merge-k-sorted-lists/
 * @frontendId 23
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

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  if (lists.length === 0) return null
  return merge(lists, 0, lists.length - 1)
}

function merge(lists: Array<ListNode | null>, l, r): ListNode | null {
  if (l >= r) return lists[l]
  const mid = (l + r) >> 1
  const left = merge(lists, l, mid)
  const right = merge(lists, mid + 1, r)
  return mergeTwoLists(left, right)
}

function mergeTwoLists(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  if (!l1 && !l2) return l1
  if (l1 === null) return l2
  if (l2 === null) return l1
  const node = new ListNode(-1)
  let i = l1
  let j = l2
  let current = node
  while (l1 !== null && l2 !== null) {
    if (l1.val <= l2.val) {
      current.next = l1
      l1 = l1.next
      current = current.next
    } else {
      current.next = l2
      l2 = l2.next
      current = current.next
    }
  }
  if (l1 === null) current.next = l2
  if (l2 === null) current.next = l1
  return node.next
}
