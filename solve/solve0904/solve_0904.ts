/**
 * @index 904
 * @title 叶子相似的树
 * @difficulty 简单
 * @tags tree,depth-first-search
 * @draft false
 * @link https://leetcode-cn.com/problems/leaf-similar-trees/
 * @frontendId 872
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

function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
  const result1 = dfs(root1)
  const result2 = dfs(root2)
  if (result1.length !== result2.length) return false
  for (let i = 0; i < result2.length; i++) {
    if (result1[i] !== result2[i]) return false
  }
  return true
}

function dfs(root: TreeNode | null, result: number[] = []) {
  if (root === null) return []
  if (!root.left && !root.right) {
    result.push(root.val)
  }
  dfs(root.left, result)
  dfs(root.right, result)
  return result
}
