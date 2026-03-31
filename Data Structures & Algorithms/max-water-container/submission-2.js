class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let max = 0
        let l = 0

        for (let i=0; i<heights.length; ++i){

                let r = heights.length - 1
                while (i<r){
                    let minheight = Math.min(heights[i], heights[r])
                    let width = r - i
                    let temp = minheight * width

                    if (temp > max){
                        max = temp
                        console.log(heights[i], heights[r])
                        console.log(width)  
                    } 
                    r--
                }
            
        }
        return max
    }
}
