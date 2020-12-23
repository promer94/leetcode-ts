/**
 * @index 105
 * @title 从前序与中序遍历序列构造二叉树
 * @difficulty 中等
 * @tags tree,depth-first-search,array
 * @draft false
 * @link https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
 * @frontendId 105
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

function buildNode(
  preorder: number[],
  inorder: number[],
  preStart: number,
  preEnd: number,
  inStart: number,
  inEnd: number,
  indexMap: Map<number, number>
): TreeNode | null {
  if (preStart > preEnd || inStart > inEnd) {
    return null
  }
  const rootValue = preorder[preStart]
  const root = new TreeNode(rootValue)
  if (preStart === preEnd) {
    return root
  } else {
    const rootIndex = indexMap.get(rootValue)
    const leftLength = rootIndex - inStart
    const rightLength = inEnd - rootIndex
    root.left = buildNode(
      preorder,
      inorder,
      preStart + 1,
      preStart + leftLength,
      inStart,
      inStart + leftLength,
      indexMap
    )
    root.right = buildNode(
      preorder,
      inorder,
      preStart + leftLength + 1,
      preEnd,
      rootIndex + 1,
      rootIndex + rightLength,
      indexMap
    )
    return root
  }
}

export function buildTree(
  preorder: number[],
  inorder: number[]
): TreeNode | null {
  if (preorder.length !== inorder.length) return null
  if (preorder.length === 0) return null
  const indexMap = new Map<number, number>()
  for (let i = 0; i < inorder.length; i++) {
    indexMap.set(inorder[i], i)
  }
  return buildNode(
    preorder,
    inorder,
    0,
    preorder.length - 1,
    0,
    inorder.length - 1,
    indexMap
  )
}
