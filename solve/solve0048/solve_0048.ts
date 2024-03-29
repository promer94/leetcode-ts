/**
 * @index 48
 * @title 旋转图像
 * @difficulty 中等
 * @tags array
 * @draft false
 * @link https://leetcode-cn.com/problems/rotate-image/
 * @frontendId 48
 */

export /**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]) {
  const n = matrix.length
  const matrix_new = new Array(n).fill(0).map(() => new Array(n).fill(0))
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      matrix_new[j][n - i - 1] = matrix[i][j]
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      matrix[i][j] = matrix_new[i][j]
    }
  }
}
