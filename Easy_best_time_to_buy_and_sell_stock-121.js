//Say you have an array for which the ith element is the price of a given stock on day i.
//If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.
//Note that you cannot sell a stock before you buy one.

//Input: [7,1,5,3,6,4]
//Output: 5
//Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
//             Not 7-1 = 6, as selling price needs to be larger than buying price.

//Input: [7,6,4,3,1]
//Output: 0
//Explanation: In this case, no transaction is done, i.e. max profit = 0.

/**
 * @param {number[]} prices
 * @return {number}
 */

// ON2 solution  ****************** BAD SOLUTION *************

var maxProfit = function (prices) {
  let arrOfProfits = []

  for (let i = prices.length - 1; i >= 0; i--) {
    for (let j = i - 1; j >= 0; j--) {
      if (prices[i] - prices[j] > 0) arrOfProfits.push(prices[i] - prices[j])
    }
  }
  if (arrOfProfits.length > 0) return Math.max(...arrOfProfits)
  return 0
};


// ON solution

/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function (prices) {
  let max = 0
  let minMoney = Number.POSITIVE_INFINITY

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minMoney) minMoney = prices[i]
    else max = Math.max(max, prices[i] - minMoney)
  }
  return max
};