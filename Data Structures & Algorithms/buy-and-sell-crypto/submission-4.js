class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let buyDay = 0
        let sellDay = 0
        let profit = 0
        let max = 0
        let min = 101

        for (let i=0; i< prices.length; i++){
            if (prices[buyDay] > prices[i])
                buyDay = i
            if (prices[i] > prices[buyDay]){
                if (prices[i] - prices[buyDay] > profit){
                    profit = prices[i] - prices[buyDay]
                    sellDay = i
                }
            }
            
            

        }

        
        // profit = prices[sellDay] - prices[buyDay]
        
        console.log(buyDay, sellDay)
        return profit
        

    }
}
