class ListNode {
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
  let prev = node
  while (prev !== null) {
    // 确认剩下还有 k 个 元素 需要进行翻转
    let flag = prev
    // -1 1 2 3 4
    for (let i = 0; i < k + 1; i++) {
      if (flag === null) return node.next
      flag = flag.next
    }
    // find end
    let start = prev.next
    let end = prev.next
    // 1 2 3 4 5
    // end 需要往后移动 k - 1 个位置
    for (let i = 0; i < k - 1; i++) {
      end = end.next
    }
    let follow = end.next
    // 切断
    end.next = null
    // 翻转
    prev.next = reverse(start)
    // 此时的 start 已经变为尾部 尾部的 next 应该是 之前 end 的 next
    start.next = follow
    prev = start
  }
}

function reverse(start: ListNode): ListNode {
  let prev = null
  let current = start
  while (current !== null) {
    const temp = current.next
    current.next = prev
    prev = current
    current = temp
  }
  return prev
}
