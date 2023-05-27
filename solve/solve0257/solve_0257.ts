/**
 * @index 257
 * @title 二叉树的所有路径
 * @difficulty 简单
 * @tags tree,depth-first-search,string,backtracking,binary-tree
 * @draft false
 * @link https://leetcode-cn.com/problems/binary-tree-paths/
 * @frontendId 257
*/

export const binaryTreePaths = (root: TreeNode) =>{
    if (!root) return []
    const result: string[] = []
    traverse(root, '', result)
    return result
  };

const traverse = (root: TreeNode, path: string, result: string[] = []) => {
  path = `${path}${root.val}`
  if (!root.left && !root.right) {
    result.push(path)
  }
  if (root.left) {
    traverse(root.left, `${path}->`, result)
  }
  if (root.right) {
    traverse(root.right, `${path}->`, result)
  }
}
