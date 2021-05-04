/**
 * @index 100
 * @title 相同的树
 * @difficulty 简单
 * @tags tree,depth-first-search
 * @draft false
 * @link https://leetcode-cn.com/problems/same-tree/
 * @frontendId 100
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

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (!p && !q) return true
  if (!p || !q) return false
  return (
    p.val === q.val &&
    isSameTree(p.left, q.left) &&
    isSameTree(p.right, q.right)
  )
}
