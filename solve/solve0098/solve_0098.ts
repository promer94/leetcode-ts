/**
 * @index 98
 * @title 验证二叉搜索树
 * @difficulty 中等
 * @tags tree,depth-first-search,recursion
 * @draft false
 * @link https://leetcode-cn.com/problems/validate-binary-search-tree/
 * @frontendId 98
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

function isValidBST(root: TreeNode | null): boolean {
  const stack: number[] = []
  function dfs(node: TreeNode | null) {
    if (node === null) return
    dfs(node.left)
    stack.push(node.val)
    dfs(node.right)
  }
  dfs(root)
  for (let i = 0; i < stack.length - 1; i++) {
    if (stack[i] >= stack[i + 1]) return false
  }
  console.log(stack)
  return true
}
