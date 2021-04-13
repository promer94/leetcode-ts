/**
 * @index 114
 * @title 二叉树展开为链表
 * @difficulty 中等
 * @tags tree,depth-first-search
 * @draft false
 * @link https://leetcode-cn.com/problems/flatten-binary-tree-to-linked-list/
 * @frontendId 114
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

/**
 Do not return anything, modify root in-place instead.
 */
export function flatten(root: TreeNode | null): void {
  if (root === null) return
  const list: TreeNode[] = []
  preOrder(root, list)
  for (let i = 1; i < list.length; i++) {
    const prev = list[i - 1]
    const current = list[i]
    prev.right = current
    prev.left = null
  }
}

function preOrder(head: TreeNode | null, list: TreeNode[]): void {
  if (head === null) return
  list.push(head)
  preOrder(head.left, list)
  preOrder(head.right, list)
}
