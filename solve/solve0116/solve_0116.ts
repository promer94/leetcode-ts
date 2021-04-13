/**
 * @index 116
 * @title 填充每个节点的下一个右侧节点指针
 * @difficulty 中等
 * @tags tree,depth-first-search,breadth-first-search
 * @draft false
 * @link https://leetcode-cn.com/problems/populating-next-right-pointers-in-each-node/
 * @frontendId 116
 */

export class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  next: TreeNode | null
  constructor(
    val?: number,
    left?: TreeNode,
    right?: TreeNode,
    next?: TreeNode
  ) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
    this.next = next === undefined ? null : next
  }
}

export function connect(root: TreeNode | null): TreeNode | null {
  if (!root) return null
  const queue = [root]
  while (queue.length > 0) {
    const length = queue.length
    for (let i = 0; i < length; i++) {
      const node = queue.shift()
      if (i < length - 1) {
        node.next = queue[0]
      }
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
  }
  return root
}

export const trickConnect = function (root: TreeNode) {
  if (root === null) return null
  connectTwo(root.left, root.right)
  return root
}

function connectTwo(node1: TreeNode, node2: TreeNode) {
  if (node1 === null || node2 === null) {
    return
  }
  node1.next = node2
  connectTwo(node1.left, node1.right)
  connectTwo(node2.left, node2.right)
  connectTwo(node1.right, node2.left)
}
