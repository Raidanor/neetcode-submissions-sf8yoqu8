class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temps) {
        let stack = []
        let output = []
        for (let i=0; i<temps.length; ++i){
            console.log(stack.length)
            console.log()
            if (stack.length > 0 && temps[i] > stack[stack.length-1].temp){
                
                while (stack.length > 0 && temps[i] > stack[stack.length-1].temp){
                    let poppedElement = stack[stack.length-1]
                    
                    output[poppedElement.index] = i - poppedElement.index

                    stack.pop()
                }
            }
            stack.push({ index: i, temp: temps[i] })
        }
        console.log(stack)
        while (stack.length > 0){
            let poppedElement = stack[stack.length-1]
            output[poppedElement.index] = 0
            

            
            stack.pop()
        }
        console.log(stack)
        return output
    }
}
