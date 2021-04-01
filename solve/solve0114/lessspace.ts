class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

/**
 Do not return anything, modify root in-place instead.
 */
export function flatten(root: TreeNode | null): void {
  if (root === null) return
  let current = root
  while (root !== null) {
    if (current.left !== null) {
      const next = current.left
      let last = next
      while (last.right !== null) {
        last = last.right
      }
      last.right = current.right
      current.left = null
      current.right = next
    }
    current = current.right
  }
}
