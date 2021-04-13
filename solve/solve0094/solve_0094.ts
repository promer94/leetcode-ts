/**
 * @index 94
 * @title 二叉树的中序遍历
 * @difficulty 中等
 * @tags stack,tree,hash-table
 * @draft false
 * @link https://leetcode-cn.com/problems/binary-tree-inorder-traversal/
 * @frontendId 94
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

export function inorderTraversal(
  root: TreeNode | null,
  result: number[] = []
): number[] {
  if (root) {
    if (root.left) {
      inorderTraversal(root.left, result)
    }
    result.push(root.val)
    if (root.right) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      inorderTraversal(root.right, result)
    }
    return result
  }
  return []
}

export function inorderMorris(
  root: TreeNode | null,
  result: number[] = []
): number[] {
  if (root === null) return result
  let curr = root
  while (curr !== null) {
    if (curr.left === null) {
      result.push(curr.val)
      curr = curr.right
    } else {
      let prev = curr.left
      while (prev.right !== null && prev.right !== curr) {
        prev = prev.right
      }
      if (prev.right === null) {
        prev.right = curr
        curr = curr.left
      } else {
        prev.right = null
        result.push(curr.val)
        curr = curr.right
      }
    }
  }
  return result
}
