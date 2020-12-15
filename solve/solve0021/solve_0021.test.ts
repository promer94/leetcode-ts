import { ListNode, mergeTwoLists } from './solve_0021'

it('solve_21 should pass', () => {
  const l1 = [1, 2, 4]
    .map((v) => new ListNode(v))
    .reduceRight((p, n) => {
      n.next = p
      return n
    })
  const l2 = [1, 2, 3]
    .map((v) => new ListNode(v))
    .reduceRight((p, n) => {
      n.next = p
      return n
    })
  let result = mergeTwoLists(l1, l2)
  const resultArr = [result.val]
  while (result.next !== null) {
    resultArr.push(result.next.val)
    result = result.next
  }

  expect(resultArr).toEqual([1, 1, 2, 2, 3, 4])
})
