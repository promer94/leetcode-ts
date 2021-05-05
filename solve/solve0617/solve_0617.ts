/**
 * @index 617
 * @title 合并二叉树
 * @difficulty 简单
 * @tags tree
 * @draft false
 * @link https://leetcode-cn.com/problems/merge-two-binary-trees/
 * @frontendId 617
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

function mergeTrees(
  root1: TreeNode | null,
  root2: TreeNode | null
): TreeNode | null {
  if (!root1 && !root2) return root1

  // 首先构建当前节点
  if (root1 === null) return root2
  if (root2 === null) return root1
  const newHead = new TreeNode(root1.val + root2.val)
  // 递归构建 左节点和右节点
  const newLeft = mergeTrees(root1.left, root2.left)
  const newRight = mergeTrees(root1.right, root2.right)
  newHead.left = newLeft
  newHead.right = newRight
  return newHead
}
