/**
 * @index 747
 * @title 使用最小花费爬楼梯
 * @difficulty 简单
 * @tags array,dynamic-programming
 * @draft false
 * @link https://leetcode-cn.com/problems/min-cost-climbing-stairs/
 * @frontendId 746
 */
function minCostClimbingStairsDp(cost: number[]): number {
  const n = cost.length
  const dp = new Array(n + 1)
  dp[0] = dp[1] = 0
  for (let i = 2; i <= n; i++) {
    dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2])
  }
  return dp[n]
}

export function minCostClimbingStairs(cost: number[]): number {
  let curr = 0
  let prev = 0
  for (let i = 2; i <= cost.length; i++) {
    const next = Math.min(curr + cost[i - 1], prev + cost[i - 2])
    prev = curr
    curr = next
  }
  return curr
}
