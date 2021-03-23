/**
 * @index 92
 * @title 反转链表 II
 * @difficulty 中等
 * @tags linked-list
 * @draft false
 * @link https://leetcode-cn.com/problems/reverse-linked-list-ii/
 * @frontendId 92
 */

import { ListNode } from '../solve0021/solve_0021'

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

function reverseBetween(
  head: ListNode | null,
  m: number,
  n: number
): ListNode | null {
  if (head === null) return head
  if (m === 1) {
    const [newHead] = reverseN(head, n)
    return newHead
  }
  head.next = reverseBetween(head.next, m - 1, n - 1)
  return head
}

function reverseN(head: ListNode, n: number): [ListNode, ListNode] {
  if (n === 1) {
    return [head, head.next]
  }
  const [newhead, tail] = reverseN(head.next, n - 1)
  head.next.next = head
  head.next = tail
  return [newhead, tail]
}
