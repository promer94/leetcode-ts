/**
 * @index 145
 * @title 二叉树的后序遍历
 * @difficulty 中等
 * @tags stack,tree
 * @draft false
 * @link https://leetcode-cn.com/problems/binary-tree-postorder-traversal/
 * @frontendId 145
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

export function postorderTraversal(
  root: TreeNode | null,
  result: number[] = []
): number[] {
  if (root) {
    if (root.left) {
      postorderTraversal(root.left, result)
    }
    if (root.right) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      postorderTraversal(root.right, result)
    }
    result.push(root.val)
    return result
  }
  return []
}
