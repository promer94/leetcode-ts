/**
 * @index 543
 * @title 二叉树的直径
 * @difficulty 简单
 * @tags tree
 * @draft false
 * @link https://leetcode-cn.com/problems/diameter-of-binary-tree/
 * @frontendId 543
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

function diameterOfBinaryTree(root: TreeNode | null): number {
  if (root === null) return 0
  let answer = Number.MIN_SAFE_INTEGER
  function dfs(node: TreeNode | null): number {
    if (node === null) return 0
    // 左边子树的深度
    const left = dfs(node.left)
    // 左边子树的深度
    const right = dfs(node.right)
    // 直径
    const length = left + right
    answer = Math.max(answer, length)
    // 当前节点的深度
    return Math.max(left, right) + 1
  }
  dfs(root)
  return answer
}
