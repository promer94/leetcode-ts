/**
 * @index 103
 * @title 二叉树的锯齿形层序遍历
 * @difficulty 中等
 * @tags stack,tree,breadth-first-search
 * @draft false
 * @link https://leetcode-cn.com/problems/binary-tree-zigzag-level-order-traversal/
 * @frontendId 103
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

function zigzagLevelOrder(root: TreeNode | null): number[][] {
  if (!root) {
    return []
  }

  const ans = []
  const nodeQueue = [root]

  let isOrderLeft = true

  while (nodeQueue.length) {
    const levelList: any[] = []
    const size = nodeQueue.length
    for (let i = 0; i < size; ++i) {
      const node = nodeQueue.shift()
      if (isOrderLeft) {
        levelList.push(node.val)
      } else {
        levelList.unshift(node.val)
      }
      if (node.left !== null) {
        nodeQueue.push(node.left)
      }
      if (node.right !== null) {
        nodeQueue.push(node.right)
      }
    }
    ans.push(levelList)
    isOrderLeft = !isOrderLeft
  }

  return ans
}
