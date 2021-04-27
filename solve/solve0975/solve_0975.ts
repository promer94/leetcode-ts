/**
 * @index 975
 * @title 二叉搜索树的范围和
 * @difficulty 简单
 * @tags tree,depth-first-search,recursion
 * @draft false
 * @link https://leetcode-cn.com/problems/range-sum-of-bst/
 * @frontendId 938
 */

import { TreeNode } from '../solve0144/solve_0144'

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

function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
  let result = 0
  const dfs = (node: TreeNode | null) => {
    if (node === null) return
    if (node.val >= low && node.val <= high) {
      result += node.val
    }
    dfs(node.left)
    dfs(node.right)
  }
  dfs(root)
  return result
}
