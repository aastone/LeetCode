/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var profit = 0;
    var lowPrice = prices[0];
    for (var i = 1; i < prices.length; i++) {
        if (prices[i] < lowPrice) { 
            lowPrice = prices[i];
        } else if (prices[i] - lowPrice > profit) {
            profit = prices[i] - lowPrice;
        }
    }
    return profit;
};