class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temps) {
        let stack = []
        let output = []
        for (let i=0; i<temps.length; ++i){
            let count = 0
            for (let j=i+1; j<temps.length; ++j){
                if (temps[j]> temps[i]){
                    count = j-i
                    break
                }

            }
            output[i] = count
        }
        

        return output
    }
}
