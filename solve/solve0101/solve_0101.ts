/**
 * @index 101
 * @title 对称二叉树
 * @difficulty 简单
 * @tags tree,depth-first-search,breadth-first-search
 * @draft false
 * @link https://leetcode-cn.com/problems/symmetric-tree/
 * @frontendId 101
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

function isSymmetric(root: TreeNode | null): boolean {
  return check(root, root)
}

// p 左移 q 右移动 p右移动 q 左移动
function check(p: TreeNode | null, q: TreeNode | null): boolean {
  if (!p && !q) return true
  if (!p || !q) return false
  return q.val === p.val && check(p.left, q.right) && check(p.right, q.left)
}
