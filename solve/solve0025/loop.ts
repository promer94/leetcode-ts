export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  if (head === null) return head
  const node = new ListNode()
  node.next = head

  for (let a = node; ; ) {
    let flag = a
    for (let i = 0; i < k; i++) {
      if (flag === null) return node.next
      flag = flag.next
    }
    let b = a.next
    let c = b.next
    for (let i = 0; i < k - 1; i++) {
      const temp = c.next
      c.next = b
      b = c
      c = temp
    }
    const temp = a.next
    a.next = b
    temp.next = c
    a = c
  }

  return node.next
}

const a = new ListNode(1)
const b = new ListNode(2)
const c = new ListNode(3)

a.next = b
b.next = c

console.log(reverseKGroup(a, 2))
