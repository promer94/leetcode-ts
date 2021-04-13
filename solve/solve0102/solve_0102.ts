/**
 * @index 102
 * @title 二叉树的层序遍历
 * @difficulty 中等
 * @tags tree,breadth-first-search
 * @draft false
 * @link https://leetcode-cn.com/problems/binary-tree-level-order-traversal/
 * @frontendId 102
 */

import { TreeNode } from '../solve0094/solve_0094'

export function levelOrder(root: TreeNode | null): number[][] {
  const result: number[][] = []
  if (root === null) return result
  const queue: TreeNode[] = []
  queue.push(root)
  while (queue.length > 0) {
    const n = queue.length
    const levelResult = []
    for (let i = 0; i < n; i++) {
      const node = queue.shift()
      levelResult.push(node.val)
      if (node.left !== null) {
        queue.push(node.left)
      }
      if (node.right !== null) {
        queue.push(node.right)
      }
    }
    result.push(levelResult)
  }
  return result
}
