/**
 * @index 234
 * @title 回文链表
 * @difficulty 简单
 * @tags linked-list,two-pointers
 * @draft false
 * @link https://leetcode-cn.com/problems/palindrome-linked-list/
 * @frontendId 234
 */

let frontPoint: ListNode | null = null

function check(node: ListNode | null): boolean {
  if (node === null) return true
  if (!check(node.next)) return false
  if (node.val !== frontPoint.val) return false
  frontPoint = frontPoint.next
  return true
}

function isPalindrome(head: ListNode | null): boolean {
  frontPoint = head
  return check(head)
}
