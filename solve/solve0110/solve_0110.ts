/**
 * @index 110
 * @title 平衡二叉树
 * @difficulty 简单
 * @tags tree,depth-first-search,recursion
 * @draft false
 * @link https://leetcode-cn.com/problems/balanced-binary-tree/
 * @frontendId 110
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

function isBalanced(root: TreeNode | null): boolean {
  return dfs(root) >= 0
}

function dfs(root: TreeNode | null): number {
  if (root === null) return 0
  const leftLength = dfs(root.left)
  const rightLength = dfs(root.right)
  if (leftLength === -1 || rightLength === -1) return -1
  if (Math.abs(leftLength - rightLength) > 1) return -1
  return 1 + Math.max(leftLength, rightLength)
}
