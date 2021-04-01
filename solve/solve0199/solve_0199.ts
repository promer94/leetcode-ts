/**
 * @index 199
 * @title 二叉树的右视图
 * @difficulty 中等
 * @tags tree,depth-first-search,breadth-first-search,recursion,queue
 * @draft false
 * @link https://leetcode-cn.com/problems/binary-tree-right-side-view/
 * @frontendId 199
 */

export /**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

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

export function rightSideView(root: TreeNode | null): number[] {
  if (root === null) return []
  const result = []
  const queue = [root]
  while (queue.length !== 0) {
    const length = queue.length
    for (let i = 0; i < length; i++) {
      const node = queue.shift()
      if (i === length - 1) result.push(node.val)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
  }
  return result
}
