/**
 * @index 714
 * @title 买卖股票的最佳时机含手续费
 * @difficulty 中等
 * @tags greedy,array,dynamic-programming
 * @draft false
 * @link https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/
 * @frontendId 714
 */

export function maxProfit(prices: number[], fee: number): number {
  let buy = prices[0] + fee
  let profit = 0
  for (let i = 1; i < prices.length; i++) {
    if (buy > prices[i] + fee) {
      buy = prices[i] + fee
    } else if (prices[i] > buy) {
      profit += prices[i] - buy
      buy = prices[i]
    }
  }
  return profit
}

/**
 * 思路与算法

方法一中，我们将手续费放在卖出时进行计算。如果我们换一个角度考虑，将手续费放在买入时进行计算，那么就可以得到一种基于贪心的方法。

我们用 buy 表示在最大化收益的前提下，如果我们手上拥有一支股票，那么它的最低买入价格是多少。在初始时，buy 的值为 prices[0] 加上手续费 fee。那么当我们遍历到第 i~(i>0)i (i>0) 天时：

如果当前的股票价格 prices[i] 加上手续费 fee 小于 buy，那么与其使用 buy 的价格购买股票，我们不如以 prices[i]+fee 的价格购买股票，因此我们将 buy 更新为 prices[i]+fee；

如果当前的股票价格 prices[i] 大于 buy，那么我们直接卖出股票并且获得 prices[i]−buy 的收益。但实际上，我们此时卖出股票可能并不是全局最优的（例如下一天股票价格继续上升），因此我们可以提供一个反悔操作，看成当前手上拥有一支买入价格为 prices[i] 的股票，将 buy 更新为 prices[i]。这样一来，如果下一天股票价格继续上升，我们会获得 \textit{prices}[i+1] - \textit{prices}[i]prices[i+1]−prices[i] 的收益，加上这一天 prices[i]−buy 的收益，恰好就等于在这一天不进行任何操作，而在下一天卖出股票的收益；

对于其余的情况，prices[i] 落在区间 [buy−fee,buy] 内，它的价格没有低到我们放弃手上的股票去选择它，也没有高到我们可以通过卖出获得收益，因此我们不进行任何操作。

上面的贪心思想可以浓缩成一句话，即当我们卖出一支股票时，我们就立即获得了以相同价格并且免除手续费买入一支股票的权利。在遍历完整个数组 \textit{prices}prices 之后之后，我们就得到了最大的总收益。

作者：LeetCode-Solution
链接：https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/solution/mai-mai-gu-piao-de-zui-jia-shi-ji-han-sh-rzlz/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 */
