/**
 * @index 104
 * @title 二叉树的最大深度
 * @difficulty 简单
 * @tags tree,depth-first-search,recursion
 * @draft false
 * @link https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/
 * @frontendId 104
 */

import { TreeNode } from '../solve0094/solve_0094'

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

function maxDepth(root: TreeNode | null): number {
  if (root === null) return 0
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
}

export function maxDepthBfs(root: TreeNode | null): number {
  if (root === null) return 0
  const queue = [root]
  let result = 0
  while (queue.length > 0) {
    let size = queue.length
    while (size > 0) {
      const node = queue.shift()
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
      size -= 1
    }
    result += 1
  }
  return result
}
