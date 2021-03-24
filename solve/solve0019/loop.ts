export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function removeNthFromEnd(head: ListNode | null, n: number) {
  if (head === null) return head
  const node = new ListNode()
  node.next = head
  let fast = node
  for (let i = 0; i < n; i++) {
    fast = fast.next
  }
  let slow = node
  for (let i = fast; i.next !== null; i = i.next) {
    slow = slow.next
  }
  slow.next = slow.next.next
  return node.next
}
