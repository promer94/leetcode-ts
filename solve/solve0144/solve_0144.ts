/**
 * @index 144
 * @title 二叉树的前序遍历
 * @difficulty 中等
 * @tags stack,tree
 * @draft false
 * @link https://leetcode-cn.com/problems/binary-tree-preorder-traversal/
 * @frontendId 144
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

export function preorderTraversal(
  root: TreeNode | null,
  result: number[] = []
): number[] {
  if (root) {
    result.push(root.val)
    if (root.left) {
      preorderTraversal(root.left, result)
    }
    if (root.right) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      preorderTraversal(root.right, result)
    }
    return result
  }
  return []
}
