class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        if (n<2)
            return 1
        else if (n<3)
            return 2
        
        let cache = []
        let total = 0
        cache[n-1] = 1
        cache[n-2] = 1

        for (let i=n-3; i>=0; --i){
            cache[i] = cache[i+1] + cache[i+2] 
        }

        total = cache[0] + cache[1]
        return total
    }
}
