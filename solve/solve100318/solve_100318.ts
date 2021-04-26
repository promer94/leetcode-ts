/**
 * @index 100318
 * @title 数组中的逆序对
 * @difficulty 困难
 * @tags
 * @draft false
 * @link https://leetcode-cn.com/problems/shu-zu-zhong-de-ni-xu-dui-lcof/
 * @frontendId 剑指 Offer 51
 */

function reversePairs(nums: number[]): number {
  const aux = [...nums]
  return mergeSort(nums, 0, nums.length - 1, aux)
}

function mergeSort(
  nums: number[],
  left: number,
  right: number,
  aux: number[],
  result = 0
) {
  if (left >= right) return result
  const mid = Math.floor((left + right) / 2)
  result =
    mergeSort(nums, left, mid, aux, result) +
    mergeSort(nums, mid + 1, right, aux, result)
  let a = left
  let b = mid + 1
  for (let i = left; i <= right; i++) {
    aux[i] = nums[i]
  }
  for (let i = left; i <= right; i++) {
    if (a > mid) {
      nums[i] = aux[b++]
    } else if (b > right) {
      nums[i] = aux[a++]
    } else if (aux[a] > aux[b]) {
      nums[i] = aux[b++]
      result += mid - a + 1
    } else {
      nums[i] = aux[a++]
    }
  }
  return result
}
