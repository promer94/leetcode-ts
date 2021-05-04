/**
 * @index 347
 * @title 前 K 个高频元素
 * @difficulty 中等
 * @tags heap,hash-table
 * @draft false
 * @link https://leetcode-cn.com/problems/top-k-frequent-elements/
 * @frontendId 347
 */

function topKFrequent(nums: number[], k: number): number[] {
  const frequencyMap = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (frequencyMap.has(nums[i])) {
      frequencyMap.set(nums[i], frequencyMap.get(nums[i]) + 1)
    } else {
      frequencyMap.set(nums[i], 1)
    }
  }
  const list = Array.from(frequencyMap.entries())
  const index = quickSelect(list as any, 0, list.length - 1, k)
  return list.slice(0, index + 1).map((v) => v[0])
}

function quickSelect(
  nums: [number, number][],
  l: number,
  r: number,
  k: number
): number {
  if (l === r) return l
  let i = l - 1
  let j = r + 1
  const partition = nums[l][1]
  while (i < j) {
    do {
      i++
    } while (nums[i][1] > partition)
    do {
      j--
    } while (nums[j][1] < partition)
    if (i < j) {
      const temp = nums[i]
      nums[i] = nums[j]
      nums[j] = temp
    }
  }
  const length = j - l + 1
  if (k <= length) return quickSelect(nums, l, j, k)
  return quickSelect(nums, j + 1, r, k - length)
}
