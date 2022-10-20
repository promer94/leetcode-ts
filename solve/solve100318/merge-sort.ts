function reversePairs(nums: number[]): number {
  return mergeSort(nums, 0, nums.length - 1)
}

export function mergeSort(nums: number[], l: number, r: number): number {
  if (l >= r) return 0
  const mid = Math.floor((l + r) / 2)
  let result = mergeSort(nums, l, mid) + mergeSort(nums, mid + 1, r)
  let i = l
  let j = mid + 1
  let k = 0
  const temp = []
  while (i <= mid && j <= r) {
    if (nums[i] > nums[j]) {
      temp[k++] = nums[j++]
      result += mid - i + 1
    } else {
      temp[k++] = nums[i++]
    }
  }
  while (i <= mid) {
    temp[k++] = nums[i++]
  }
  while (j <= r) {
    temp[k++] = nums[j++]
  }
  for (let i = l, j = 0; i <= r; i++, j++) {
    nums[i] = temp[j]
  }
  return result
}
