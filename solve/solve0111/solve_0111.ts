/**
 * @index 111
 * @title 二叉树的最小深度
 * @difficulty 简单
 * @tags tree,depth-first-search,breadth-first-search
 * @draft false
 * @link https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/
 * @frontendId 111
 */

export class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

function minDepth(root: TreeNode | null): number {
  if (root === null) return 0
  if (root.left === null && root.right === null) return 1
  let min = Number.MAX_SAFE_INTEGER
  if (root.left !== null) {
    min = Math.min(minDepth(root.left), min)
  }
  if (root.right !== null) {
    min = Math.min(minDepth(root.right), min)
  }
  return min + 1
}
