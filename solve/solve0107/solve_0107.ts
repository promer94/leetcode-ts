/**
 * @index 107
 * @title 二叉树的层序遍历 II
 * @difficulty 中等
 * @tags tree,breadth-first-search
 * @draft false
 * @link https://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii/
 * @frontendId 107
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

export function levelOrderBottom(root: TreeNode | null): number[][] {
  if (root === null) return []
  const queue = [root]
  const result = []
  while (queue.length > 0) {
    const length = queue.length
    const level = []
    for (let i = 0; i < length; i++) {
      const node = queue.shift()
      level.push(node.val)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    result.push(level)
  }
  return result.reverse()
}
