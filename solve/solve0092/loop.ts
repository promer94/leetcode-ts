function reverseBetween(
  head: ListNode | null,
  m: number,
  n: number
): ListNode | null {
  if (head === null) return head
  const node = new ListNode()
  node.next = head

  let a = node
  for (let i = 0; i < m - 1; i++) {
    a = a.next
  }
  let b = a.next
  let c = b.next
  for (let i = 0; i < n - m; i++) {
    const temp = c.next
    c.next = b
    b = c
    c = temp
  }
  a.next.next = c
  a.next = b
  return node.next
}
