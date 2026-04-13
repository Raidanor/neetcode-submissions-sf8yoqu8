class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        let cache = []
        if (cost.length == 3){
            return Math.min(cost[1], cost[0] + cost[2])
        }

        cache[cost.length-1] = cost[cost.length - 1]
        cache[cost.length-2] = cost[cost.length - 2]

        for (let i=cost.length-3; i>=0; --i){
            cache[i] = cost[i] + Math.min(cache[i+1], cache[i+2])
        }
        return Math.min(cache[0], cache[1])

    }
}
